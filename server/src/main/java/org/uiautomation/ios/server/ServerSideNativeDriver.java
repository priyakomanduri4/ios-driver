/*
 * Copyright 2012-2013 eBay Software Foundation and ios-driver committers
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package org.uiautomation.ios.server;


import com.google.common.collect.ImmutableMap;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.SessionId;
import org.uiautomation.ios.client.uiamodels.impl.AttachRemoteIOSDriver;
import org.uiautomation.ios.client.uiamodels.impl.RemoteUIAElement;
import org.uiautomation.ios.client.uiamodels.impl.configuration.WebDriverLikeCommandExecutor;
import org.uiautomation.ios.communication.Path;
import org.uiautomation.ios.communication.WebDriverLikeCommand;
import org.uiautomation.ios.communication.WebDriverLikeRequest;

import java.net.URL;
import java.util.Map;


/**
 * attaches itself to an existing session, and forces all requests to be executed in native mode.
 * This is useful on the server side to bypass the current working mode. If a user is currently
 * using the web mode, but using native clicks, using this driver to click will force the click to
 * be native without impacting the working mode, making it safely usable in threads.
 */
public class ServerSideNativeDriver extends AttachRemoteIOSDriver {




  public ServerSideNativeDriver(URL url, SessionId session) {
    super(url, session);
    executor = new ServerSideWebDriverLikeCommandExecutor(this);
  }


  class ServerSideWebDriverLikeCommandExecutor extends WebDriverLikeCommandExecutor {

    public ServerSideWebDriverLikeCommandExecutor(RemoteWebDriver driver) {
      super(driver);
    }

    /**
     * forces the requests to be executed native by adding the native flag in the param list.
     */
    @Override
    public WebDriverLikeRequest buildRequest(WebDriverLikeCommand command,
                                             RemoteUIAElement element,
                                             Map<String, ?> params,
                                             Map<String, String> extraParamInPath) {
      String method = command.method();
      Path p = new Path(command).withSession(getSessionId());
      // it's ok to have an element id but not mentioning it in the path. That's typically the case
      // for alerts.
      if (element != null && p.getPath().contains(Path.REFERENCE)) {
        p.withReference(element.getReference());
      }

      ImmutableMap.Builder<String, Object> builder = new ImmutableMap.Builder<String, Object>();
      builder.put("native", true);
      if (params != null) {
        builder.putAll(params);
      }

      for (String key : extraParamInPath.keySet()) {
        p.validateAndReplace(":" + key, extraParamInPath.get(key));
      }
      WebDriverLikeRequest request = new WebDriverLikeRequest(method, p, builder.build());
      return request;
    }
  }
}
