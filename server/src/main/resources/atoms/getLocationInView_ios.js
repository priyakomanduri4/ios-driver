function(){return function(){function g(a){throw a;}var i=void 0,j=!0,k=null,l=!1;function m(a){return function(){return this[a]}}function aa(a){return function(){return a}}var p=this;
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"string"==typeof a}Math.floor(2147483648*Math.random()).toString(36);function r(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c};function t(a){Error.captureStackTrace?Error.captureStackTrace(this,t):this.stack=Error().stack||"";a&&(this.message=String(a))}r(t,Error);t.prototype.name="CustomError";function ca(a,b){for(var c=1;c<arguments.length;c++)var d=String(arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);return a}
function da(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var s=d[h]||"",v=e[h]||"",n=RegExp("(\\d*)(\\D*)","g"),J=RegExp("(\\d*)(\\D*)","g");do{var y=n.exec(s)||["","",""],z=J.exec(v)||["","",""];if(0==y[0].length&&0==z[0].length)break;c=((0==y[1].length?0:parseInt(y[1],10))<(0==z[1].length?0:parseInt(z[1],10))?-1:(0==y[1].length?0:parseInt(y[1],10))>(0==z[1].length?
0:parseInt(z[1],10))?1:0)||((0==y[2].length)<(0==z[2].length)?-1:(0==y[2].length)>(0==z[2].length)?1:0)||(y[2]<z[2]?-1:y[2]>z[2]?1:0)}while(0==c)}return c};function ea(a,b){b.unshift(a);t.call(this,ca.apply(k,b));b.shift();this.$=a}r(ea,t);ea.prototype.name="AssertionError";function fa(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);g(new ea(""+e,f||[]))}function ga(a,b,c){a||fa("",k,b,Array.prototype.slice.call(arguments,2))}function ha(a,b,c){var d=typeof a;"object"==d&&a!=k||"function"==d||fa("Expected object but got %s: %s.",[ba(a),a],b,Array.prototype.slice.call(arguments,2))};var ia=Array.prototype;function u(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(i,d[e],e,a)}function ja(a,b,c){if(a.reduce)return a.reduce(b,c);var d=c;u(a,function(c,f){d=b.call(i,d,c,f,a)});return d}function ka(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(i,d[e],e,a))return j;return l}function la(a){return ia.concat.apply(ia,arguments)}function ma(a,b,c){ga(a.length!=k);return 2>=arguments.length?ia.slice.call(a,b):ia.slice.call(a,b,c)};function na(a,b){this.code=a;this.message=b||"";this.name=oa[a]||oa[13];var c=Error(this.message);c.name=this.name;this.stack=c.stack||""}r(na,Error);
var oa={7:"NoSuchElementError",8:"NoSuchFrameError",9:"UnknownCommandError",10:"StaleElementReferenceError",11:"ElementNotVisibleError",12:"InvalidElementStateError",13:"UnknownError",15:"ElementNotSelectableError",19:"XPathLookupError",23:"NoSuchWindowError",24:"InvalidCookieDomainError",25:"UnableToSetCookieError",26:"ModalDialogOpenedError",27:"NoModalDialogOpenError",28:"ScriptTimeoutError",32:"InvalidSelectorError",35:"SqlDatabaseError",34:"MoveTargetOutOfBoundsError"};
na.prototype.toString=function(){return this.name+": "+this.message};function w(){return p.navigator?p.navigator.userAgent:k}var pa,qa="",ra=/WebKit\/(\S+)/.exec(w());pa=qa=ra?ra[1]:"";var sa={};var ta;function x(a,b){this.x=a!==i?a:0;this.y=b!==i?b:0}x.prototype.toString=function(){return"("+this.x+", "+this.y+")"};function A(a,b){this.width=a;this.height=b}A.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};A.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};A.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};A.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ua(a){return a?new va(B(a)):ta||(ta=new va)}function wa(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function xa(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?ya(a,b):!c&&wa(e,b)?-1*za(a,b):!d&&wa(f,a)?za(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=B(a);c=d.createRange();c.selectNode(a);c.collapse(j);d=d.createRange();d.selectNode(b);
d.collapse(j);return c.compareBoundaryPoints(p.Range.START_TO_END,d)}function za(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return ya(d,a)}function ya(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1}function B(a){return 9==a.nodeType?a:a.ownerDocument||a.document}function va(a){this.C=a||p.document||document}
function Aa(a){var b=a.C,a=b.body,b=b.parentWindow||b.defaultView;return new x(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)}va.prototype.contains=wa;var Ba,Ca,Da,Ea,Fa,Ga,Ha;Ha=Ga=Fa=Ea=Da=Ca=Ba=l;var C=w();C&&(-1!=C.indexOf("Firefox")?Ba=j:-1!=C.indexOf("Camino")?Ca=j:-1!=C.indexOf("iPhone")||-1!=C.indexOf("iPod")?Da=j:-1!=C.indexOf("iPad")?Ea=j:-1!=C.indexOf("Android")?Fa=j:-1!=C.indexOf("Chrome")?Ga=j:-1!=C.indexOf("Safari")&&(Ha=j));var Ia=Ba,Ja=Ca,Ka=Da,La=Ea,Ma=Fa,Na=Ga,Oa=Ha;function D(a,b,c){this.g=a;this.Y=b||1;this.f=c||1};function E(a){var b=k,c=a.nodeType;1==c&&(b=a.textContent,b=b==i||b==k?a.innerText:b,b=b==i||b==k?"":b);if("string"!=typeof b)if(9==c||1==c)for(var a=9==c?a.documentElement:a.firstChild,c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}else b=a.nodeValue;return""+b}function F(a,b,c){if(b===k)return j;try{if(!a.getAttribute)return l}catch(d){return l}return c==k?!!a.getAttribute(b):a.getAttribute(b,2)==c}
function G(a,b,c,d,e){return Pa.call(k,a,b,q(c)?c:k,q(d)?d:k,e||new H)}function Pa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c?(b=b.getElementsByName(d),u(b,function(b){a.matches(b)&&e.add(b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),u(b,function(b){b.className==d&&a.matches(b)&&e.add(b)})):a instanceof I?Qa(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.getName()),u(b,function(a){F(a,c,d)&&e.add(a)}));return e}
function Ra(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)F(b,c,d)&&a.matches(b)&&e.add(b);return e}function Qa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)F(b,c,d)&&a.matches(b)&&e.add(b),Qa(a,b,c,d,e)};function H(){this.f=this.e=k;this.r=0}function Sa(a){this.o=a;this.next=this.n=k}function Ta(a,b){if(a.e){if(!b.e)return a}else return b;for(var c=a.e,d=b.e,e=k,f=k,h=0;c&&d;)c.o==d.o?(f=c,c=c.next,d=d.next):0<xa(c.o,d.o)?(f=d,d=d.next):(f=c,c=c.next),(f.n=e)?e.next=f:a.e=f,e=f,h++;for(f=c||d;f;)f.n=e,e=e.next=f,h++,f=f.next;a.f=e;a.r=h;return a}H.prototype.unshift=function(a){a=new Sa(a);a.next=this.e;this.f?this.e.n=a:this.e=this.f=a;this.e=a;this.r++};
H.prototype.add=function(a){a=new Sa(a);a.n=this.f;this.e?this.f.next=a:this.e=this.f=a;this.f=a;this.r++};function Ua(a){return(a=a.e)?a.o:k}H.prototype.l=m("r");function Va(a){return(a=Ua(a))?E(a):""}function K(a,b){return new Wa(a,!!b)}function Wa(a,b){this.V=a;this.H=(this.t=b)?a.f:a.e;this.D=k}Wa.prototype.next=function(){var a=this.H;if(a==k)return k;var b=this.D=a;this.H=this.t?a.n:a.next;return b.o};
Wa.prototype.remove=function(){var a=this.V,b=this.D;b||g(Error("Next must be called at least once before remove."));var c=b.n,b=b.next;c?c.next=b:a.e=b;b?b.n=c:a.f=c;a.r--;this.D=k};function L(a){this.d=a;this.c=this.h=l;this.s=k}L.prototype.b=m("h");L.prototype.j=m("s");function M(a,b){var c=a.evaluate(b);return c instanceof H?+Va(c):+c}function N(a,b){var c=a.evaluate(b);return c instanceof H?Va(c):""+c}function O(a,b){var c=a.evaluate(b);return c instanceof H?!!c.l():!!c};function Xa(a,b,c){L.call(this,a.d);this.G=a;this.L=b;this.P=c;this.h=b.b()||c.b();this.c=b.c||c.c;this.G==Ya&&(!c.c&&!c.b()&&4!=c.d&&0!=c.d&&b.j()?this.s={name:b.j().name,q:c}:!b.c&&(!b.b()&&4!=b.d&&0!=b.d&&c.j())&&(this.s={name:c.j().name,q:b}))}r(Xa,L);
function P(a,b,c,d,e){var b=b.evaluate(d),c=c.evaluate(d),f;if(b instanceof H&&c instanceof H){f=K(b);for(b=f.next();b;b=f.next()){e=K(c);for(d=e.next();d;d=e.next())if(a(E(b),E(d)))return j}return l}if(b instanceof H||c instanceof H){b instanceof H?e=b:(e=c,c=b);e=K(e);b=typeof c;for(d=e.next();d;d=e.next()){switch(b){case "number":f=+E(d);break;case "boolean":f=!!E(d);break;case "string":f=E(d);break;default:g(Error("Illegal primitive type for comparison."))}if(a(f,c))return j}return l}return e?
"boolean"==typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}Xa.prototype.evaluate=function(a){return this.G.k(this.L,this.P,a)};Xa.prototype.toString=function(a){var a=a||"",b=a+"binary expression: "+this.G+"\n",a=a+"  ",b=b+(this.L.toString(a)+"\n");return b+=this.P.toString(a)};function Za(a,b,c,d){this.X=a;this.aa=b;this.d=c;this.k=d}Za.prototype.toString=m("X");var $a={};
function Q(a,b,c,d){a in $a&&g(Error("Binary operator already created: "+a));a=new Za(a,b,c,d);return $a[a.toString()]=a}Q("div",6,1,function(a,b,c){return M(a,c)/M(b,c)});Q("mod",6,1,function(a,b,c){return M(a,c)%M(b,c)});Q("*",6,1,function(a,b,c){return M(a,c)*M(b,c)});Q("+",5,1,function(a,b,c){return M(a,c)+M(b,c)});Q("-",5,1,function(a,b,c){return M(a,c)-M(b,c)});Q("<",4,2,function(a,b,c){return P(function(a,b){return a<b},a,b,c)});
Q(">",4,2,function(a,b,c){return P(function(a,b){return a>b},a,b,c)});Q("<=",4,2,function(a,b,c){return P(function(a,b){return a<=b},a,b,c)});Q(">=",4,2,function(a,b,c){return P(function(a,b){return a>=b},a,b,c)});var Ya=Q("=",3,2,function(a,b,c){return P(function(a,b){return a==b},a,b,c,j)});Q("!=",3,2,function(a,b,c){return P(function(a,b){return a!=b},a,b,c,j)});Q("and",2,2,function(a,b,c){return O(a,c)&&O(b,c)});Q("or",1,2,function(a,b,c){return O(a,c)||O(b,c)});function ab(a,b){b.l()&&4!=a.d&&g(Error("Primary expression must evaluate to nodeset if filter has predicate(s)."));L.call(this,a.d);this.O=a;this.a=b;this.h=a.b();this.c=a.c}r(ab,L);ab.prototype.evaluate=function(a){a=this.O.evaluate(a);return bb(this.a,a)};ab.prototype.toString=function(a){var a=a||"",b=a+"Filter: \n",a=a+"  ",b=b+this.O.toString(a);return b+=this.a.toString(a)};function cb(a,b){b.length<a.N&&g(Error("Function "+a.m+" expects at least"+a.N+" arguments, "+b.length+" given"));a.F!==k&&b.length>a.F&&g(Error("Function "+a.m+" expects at most "+a.F+" arguments, "+b.length+" given"));a.W&&u(b,function(b,d){4!=b.d&&g(Error("Argument "+d+" to function "+a.m+" is not of type Nodeset: "+b))});L.call(this,a.d);this.v=a;this.A=b;this.h=a.h||ka(b,function(a){return a.b()});this.c=a.U&&!b.length||a.T&&!!b.length||ka(b,function(a){return a.c})}r(cb,L);
cb.prototype.evaluate=function(a){return this.v.k.apply(k,la(a,this.A))};cb.prototype.toString=function(a){var b=a||"",a=b+"Function: "+this.v+"\n",b=b+"  ";this.A.length&&(a+=b+"Arguments:",b+="  ",a=ja(this.A,function(a,d){return a+"\n"+d.toString(b)},a));return a};function db(a,b,c,d,e,f,h,s,v){this.m=a;this.d=b;this.h=c;this.U=d;this.T=e;this.k=f;this.N=h;this.F=s!==i?s:h;this.W=!!v}db.prototype.toString=m("m");var eb={};
function R(a,b,c,d,e,f,h,s){a in eb&&g(Error("Function already created: "+a+"."));eb[a]=new db(a,b,c,d,l,e,f,h,s)}R("boolean",2,l,l,function(a,b){return O(b,a)},1);R("ceiling",1,l,l,function(a,b){return Math.ceil(M(b,a))},1);R("concat",3,l,l,function(a,b){var c=ma(arguments,1);return ja(c,function(b,c){return b+N(c,a)},"")},2,k);R("contains",2,l,l,function(a,b,c){b=N(b,a);a=N(c,a);return-1!=b.indexOf(a)},2);R("count",1,l,l,function(a,b){return b.evaluate(a).l()},1,1,j);R("false",2,l,l,aa(l),0);
R("floor",1,l,l,function(a,b){return Math.floor(M(b,a))},1);R("id",4,l,l,function(a,b){var c=a.g,d=9==c.nodeType?c:c.ownerDocument,c=N(b,a).split(/\s+/),e=[];u(c,function(a){var a=d.getElementById(a),b;if(b=a){a:if(q(e))b=!q(a)||1!=a.length?-1:e.indexOf(a,0);else{for(b=0;b<e.length;b++)if(b in e&&e[b]===a)break a;b=-1}b=!(0<=b)}b&&e.push(a)});e.sort(xa);var f=new H;u(e,function(a){f.add(a)});return f},1);R("lang",2,l,l,aa(l),1);
R("last",1,j,l,function(a){1!=arguments.length&&g(Error("Function last expects ()"));return a.f},0);R("local-name",3,l,j,function(a,b){var c=b?Ua(b.evaluate(a)):a.g;return c?c.nodeName.toLowerCase():""},0,1,j);R("name",3,l,j,function(a,b){var c=b?Ua(b.evaluate(a)):a.g;return c?c.nodeName.toLowerCase():""},0,1,j);R("namespace-uri",3,j,l,aa(""),0,1,j);R("normalize-space",3,l,j,function(a,b){return(b?N(b,a):E(a.g)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
R("not",2,l,l,function(a,b){return!O(b,a)},1);R("number",1,l,j,function(a,b){return b?M(b,a):+E(a.g)},0,1);R("position",1,j,l,function(a){return a.Y},0);R("round",1,l,l,function(a,b){return Math.round(M(b,a))},1);R("starts-with",2,l,l,function(a,b,c){b=N(b,a);a=N(c,a);return 0==b.lastIndexOf(a,0)},2);R("string",3,l,j,function(a,b){return b?N(b,a):E(a.g)},0,1);R("string-length",1,l,j,function(a,b){return(b?N(b,a):E(a.g)).length},0,1);
R("substring",3,l,l,function(a,b,c,d){c=M(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?M(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";var c=Math.round(c)-1,e=Math.max(c,0),a=N(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);R("substring-after",3,l,l,function(a,b,c){b=N(b,a);a=N(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
R("substring-before",3,l,l,function(a,b,c){b=N(b,a);a=N(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);R("sum",1,l,l,function(a,b){for(var c=K(b.evaluate(a)),d=0,e=c.next();e;e=c.next())d+=+E(e);return d},1,1,j);R("translate",3,l,l,function(a,b,c,d){for(var b=N(b,a),c=N(c,a),e=N(d,a),a=[],d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);R("true",2,l,l,aa(j),0);function I(a,b){this.R=a;this.M=b!==i?b:k;this.p=k;switch(a){case "comment":this.p=8;break;case "text":this.p=3;break;case "processing-instruction":this.p=7;break;case "node":break;default:g(Error("Unexpected argument"))}}I.prototype.matches=function(a){return this.p===k||this.p==a.nodeType};I.prototype.getName=m("R");I.prototype.toString=function(a){var a=a||"",b=a+"kindtest: "+this.R;this.M===k||(b+="\n"+this.M.toString(a+"  "));return b};function fb(a){L.call(this,3);this.Q=a.substring(1,a.length-1)}r(fb,L);fb.prototype.evaluate=m("Q");fb.prototype.toString=function(a){return(a||"")+"literal: "+this.Q};function gb(a){L.call(this,1);this.S=a}r(gb,L);gb.prototype.evaluate=m("S");gb.prototype.toString=function(a){return(a||"")+"number: "+this.S};function ib(a,b){L.call(this,a.d);this.J=a;this.u=b;this.h=a.b();this.c=a.c;if(1==this.u.length){var c=this.u[0];!c.B&&c.i==jb&&(c=c.z,"*"!=c.getName()&&(this.s={name:c.getName(),q:k}))}}r(ib,L);function kb(){L.call(this,4)}r(kb,L);kb.prototype.evaluate=function(a){var b=new H,a=a.g;9==a.nodeType?b.add(a):b.add(a.ownerDocument);return b};kb.prototype.toString=function(a){return a+"RootHelperExpr"};function lb(){L.call(this,4)}r(lb,L);lb.prototype.evaluate=function(a){var b=new H;b.add(a.g);return b};
lb.prototype.toString=function(a){return a+"ContextHelperExpr"};
ib.prototype.evaluate=function(a){var b=this.J.evaluate(a);b instanceof H||g(Error("FilterExpr must evaluate to nodeset."));for(var a=this.u,c=0,d=a.length;c<d&&b.l();c++){var e=a[c],f=K(b,e.i.t),h;if(!e.b()&&e.i==mb){for(h=f.next();(b=f.next())&&(!h.contains||h.contains(b))&&b.compareDocumentPosition(h)&8;h=b);b=e.evaluate(new D(h))}else if(!e.b()&&e.i==nb)h=f.next(),b=e.evaluate(new D(h));else{h=f.next();for(b=e.evaluate(new D(h));(h=f.next())!=k;)h=e.evaluate(new D(h)),b=Ta(b,h)}}return b};
ib.prototype.toString=function(a){var b=a||"",c=b+"PathExpr:\n",b=b+"  ",c=c+this.J.toString(b);this.u.length&&(c+=b+"Steps:\n",b+="  ",u(this.u,function(a){c+=a.toString(b)}));return c};function S(a,b){this.a=a;this.t=!!b}function bb(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=K(b),f=b.l(),h,s=0;h=e.next();s++){var v=a.t?f-s:s+1;h=d.evaluate(new D(h,v,f));var n;"number"==typeof h?n=v==h:"string"==typeof h||"boolean"==typeof h?n=!!h:h instanceof H?n=0<h.l():g(Error("Predicate.evaluate returned an unexpected type."));n||e.remove()}return b}S.prototype.j=function(){return 0<this.a.length?this.a[0].j():k};
S.prototype.b=function(){for(var a=0;a<this.a.length;a++){var b=this.a[a];if(b.b()||1==b.d||0==b.d)return j}return l};S.prototype.l=function(){return this.a.length};S.prototype.toString=function(a){var b=a||"",a=b+"Predicates:",b=b+"  ";return ja(this.a,function(a,d){return a+"\n"+b+d.toString(b)},a)};function T(a,b,c,d){L.call(this,4);this.i=a;this.z=b;this.a=c||new S([]);this.B=!!d;b=this.a.j();a.Z&&b&&(this.s={name:b.name,q:b.q});this.h=this.a.b()}r(T,L);T.prototype.evaluate=function(a){var b=a.g,c=k,c=this.j(),d=k,e=k,f=0;c&&(d=c.name,e=c.q?N(c.q,a):k,f=1);if(this.B)if(!this.b()&&this.i==ob)c=G(this.z,b,d,e),c=bb(this.a,c,f);else if(a=K((new T(pb,new I("node"))).evaluate(a)),b=a.next())for(c=this.k(b,d,e,f);(b=a.next())!=k;)c=Ta(c,this.k(b,d,e,f));else c=new H;else c=this.k(a.g,d,e,f);return c};
T.prototype.k=function(a,b,c,d){a=this.i.v(this.z,a,b,c);return a=bb(this.a,a,d)};T.prototype.toString=function(a){var a=a||"",b=a+"Step: \n",a=a+"  ",b=b+(a+"Operator: "+(this.B?"//":"/")+"\n");this.i.m&&(b+=a+"Axis: "+this.i+"\n");b+=this.z.toString(a);if(this.a.length)for(var b=b+(a+"Predicates: \n"),c=0;c<this.a.length;c++)var d=c<this.a.length-1?", ":"",b=b+(this.a[c].toString(a)+d);return b};function qb(a,b,c,d){this.m=a;this.v=b;this.t=c;this.Z=d}qb.prototype.toString=m("m");var rb={};
function U(a,b,c,d){a in rb&&g(Error("Axis already created: "+a));b=new qb(a,b,c,!!d);return rb[a]=b}U("ancestor",function(a,b){for(var c=new H,d=b;d=d.parentNode;)a.matches(d)&&c.unshift(d);return c},j);U("ancestor-or-self",function(a,b){var c=new H,d=b;do a.matches(d)&&c.unshift(d);while(d=d.parentNode);return c},j);
var jb=U("attribute",function(a,b){var c=new H,d=a.getName(),e=b.attributes;if(e)if(a instanceof I&&a.p===k||"*"==d)for(var d=0,f;f=e[d];d++)c.add(f);else(f=e.getNamedItem(d))&&c.add(f);return c},l),ob=U("child",function(a,b,c,d,e){return Ra.call(k,a,b,q(c)?c:k,q(d)?d:k,e||new H)},l,j);U("descendant",G,l,j);
var pb=U("descendant-or-self",function(a,b,c,d){var e=new H;F(b,c,d)&&a.matches(b)&&e.add(b);return G(a,b,c,d,e)},l,j),mb=U("following",function(a,b,c,d){var e=new H;do for(var f=b;f=f.nextSibling;)F(f,c,d)&&a.matches(f)&&e.add(f),e=G(a,f,c,d,e);while(b=b.parentNode);return e},l,j);U("following-sibling",function(a,b){for(var c=new H,d=b;d=d.nextSibling;)a.matches(d)&&c.add(d);return c},l);U("namespace",function(){return new H},l);
U("parent",function(a,b){var c=new H;if(9==b.nodeType)return c;if(2==b.nodeType)return c.add(b.ownerElement),c;var d=b.parentNode;a.matches(d)&&c.add(d);return c},l);var nb=U("preceding",function(a,b,c,d){var e=new H,f=[];do f.unshift(b);while(b=b.parentNode);for(var h=1,s=f.length;h<s;h++){for(var v=[],b=f[h];b=b.previousSibling;)v.unshift(b);for(var n=0,J=v.length;n<J;n++)b=v[n],F(b,c,d)&&a.matches(b)&&e.add(b),e=G(a,b,c,d,e)}return e},j,j);
U("preceding-sibling",function(a,b){for(var c=new H,d=b;d=d.previousSibling;)a.matches(d)&&c.unshift(d);return c},j);U("self",function(a,b){var c=new H;a.matches(b)&&c.add(b);return c},l);function sb(a){L.call(this,1);this.I=a;this.h=a.b();this.c=a.c}r(sb,L);sb.prototype.evaluate=function(a){return-M(this.I,a)};sb.prototype.toString=function(a){var a=a||"",b=a+"UnaryExpr: -\n";return b+=this.I.toString(a+"  ")};function tb(a){L.call(this,4);this.w=a;this.h=ka(this.w,function(a){return a.b()});this.c=ka(this.w,function(a){return a.c})}r(tb,L);tb.prototype.evaluate=function(a){var b=new H;u(this.w,function(c){c=c.evaluate(a);c instanceof H||g(Error("PathExpr must evaluate to NodeSet."));b=Ta(b,c)});return b};tb.prototype.toString=function(a){var b=a||"",c=b+"UnionExpr:\n",b=b+"  ";u(this.w,function(a){c+=a.toString(b)+"\n"});return c.substring(0,c.length)};function V(a){return(a=a.exec(w()))?a[1]:""}var ub=function(){if(Ia)return V(/Firefox\/([0-9.]+)/);if(Na)return V(/Chrome\/([0-9.]+)/);if(Oa)return V(/Version\/([0-9.]+)/);if(Ka||La){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(w());if(a)return a[1]+"."+a[2]}else{if(Ma)return(a=V(/Android\s+([0-9.]+)/))?a:V(/Version\/([0-9.]+)/);if(Ja)return V(/Camino\/([0-9.]+)/)}return""}();var vb;if(Ma){var wb=/Android\s+([0-9\.]+)/.exec(w());vb=wb?wb[1]:"0"}else vb="0";var xb=vb;Ma&&(Ma?da(xb,2.3):da(ub,2.3));sa["533"]||(sa["533"]=0<=da(pa,"533"));function yb(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}yb.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};yb.prototype.contains=function(a){return!this||!a?l:a instanceof yb?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom};function W(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}W.prototype.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};W.prototype.contains=function(a){return a instanceof W?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};function X(a,b){var c=B(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,k))?c[b]||c.getPropertyValue(b)||"":""}function zb(a){return X(a,"position")||(a.currentStyle?a.currentStyle.position:k)||a.style&&a.style.position}
function Ab(a){for(var b=B(a),c=zb(a),d="fixed"==c||"absolute"==c,a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=zb(a),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return k}
function Bb(a){var b=B(a),c=zb(a);ha(a,"Parameter is required");var d=new x(0,0),e=(b?B(b):document).documentElement;if(a==e)return d;if(a.getBoundingClientRect)a=a.getBoundingClientRect(),b=Aa(ua(b)),d.x=a.left+b.x,d.y=a.top+b.y;else if(b.getBoxObjectFor)a=b.getBoxObjectFor(a),b=b.getBoxObjectFor(e),d.x=a.screenX-b.screenX,d.y=a.screenY-b.screenY;else{var f=a;do{d.x+=f.offsetLeft;d.y+=f.offsetTop;f!=a&&(d.x+=f.clientLeft||0,d.y+=f.clientTop||0);if("fixed"==zb(f)){d.x+=b.body.scrollLeft;d.y+=b.body.scrollTop;
break}f=f.offsetParent}while(f&&f!=a);"absolute"==c&&(d.y-=b.body.offsetTop);for(f=a;(f=Ab(f))&&f!=b.body&&f!=e;)d.x-=f.scrollLeft,d.y-=f.scrollTop}return d};function Cb(a){for(a=a.parentNode;a&&1!=a.nodeType&&9!=a.nodeType&&11!=a.nodeType;)a=a.parentNode;return a&&1==a.nodeType?a:k}function Db(a,b){b.scrollLeft+=Math.min(a.left,Math.max(a.left-a.width,0));b.scrollTop+=Math.min(a.top,Math.max(a.top-a.height,0))};function Eb(a,b){var c;c=b?new W(b.left,b.top,b.width,b.height):new W(0,0,a.offsetWidth,a.offsetHeight);for(var d=B(a),e=Cb(a);e&&e!=d.body&&e!=d.documentElement;e=Cb(e)){var f=c,h=e,s=Bb(a),v=Bb(h),n;n=h;var J=i,y=i,z=i,hb=i,hb=X(n,"borderLeftWidth"),z=X(n,"borderRightWidth"),y=X(n,"borderTopWidth"),J=X(n,"borderBottomWidth");n=new yb(parseFloat(y),parseFloat(z),parseFloat(J),parseFloat(hb));Db(new W(s.x+f.left-v.x-n.left,s.y+f.top-v.y-n.top,h.clientWidth-f.width,h.clientHeight-f.height),h)}e=Bb(a);
f=ua(d);f=(f.C.parentWindow||f.C.defaultView||window).document;f="CSS1Compat"==f.compatMode?f.documentElement:f.body;f=new A(f.clientWidth,f.clientHeight);Db(new W(e.x+c.left-d.body.scrollLeft,e.y+c.top-d.body.scrollTop,f.width-c.width,f.height-c.height),d.body||d.documentElement);(d=a.getClientRects?a.getClientRects()[0]:k)?d=new x(d.left,d.top):(d=new x,1==a.nodeType?a.getBoundingClientRect?(e=a.getBoundingClientRect(),d.x=e.left,d.y=e.top):(e=Aa(ua(a)),f=Bb(a),d.x=f.x-e.x,d.y=f.y-e.y):(e="function"==
ba(a.K),f=a,a.targetTouches?f=a.targetTouches[0]:e&&a.K().targetTouches&&(f=a.K().targetTouches[0]),d.x=f.clientX,d.y=f.clientY));return new x(d.x+c.left,d.y+c.top)}var Y=["_"],Z=p;!(Y[0]in Z)&&Z.execScript&&Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)!Y.length&&Eb!==i?Z[$]=Eb:Z=Z[$]?Z[$]:Z[$]={};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}