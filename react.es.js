import{useRef as n,useCallback as t,useEffect as e}from"react";function i(n){return Array.prototype.slice.call(n)}function r(n,t){var e=Math.floor(n);return e===t||e+1===t?n:t}function o(){return Date.now()}function a(n,t,e){if(t="data-keen-slider-"+t,null===e)return n.removeAttribute(t);n.setAttribute(t,e||"")}function u(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?i(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?i(n):[]}function c(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function s(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function d(){var n=[];return{add:function(t,e,i,r){t.addListener?t.addListener(i):t.addEventListener(e,i,r),n.push([t,e,i,r])},input:function(n,t,e,i){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var e=t.changedTouches||[],i=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:i[0]?i[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:i[0]?i[0].screenY:r?r.y:t.pageY})}}(e),i)},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])})),n=[]}}}function l(n,t,e){return Math.min(Math.max(n,t),e)}function f(n){return(n>0?1:0)-(n<0?1:0)||+n}function p(n){var t=n.getBoundingClientRect();return{height:r(t.height,n.offsetHeight),width:r(t.width,n.offsetWidth)}}function v(n,t,e,i){var r=n&&n[t];return null==r?e:i&&"function"==typeof r?r():r}function h(n){return Math.round(1e6*n)/1e6}function m(n,t){if(n===t)return!0;var e=typeof n;if(e!==typeof t)return!1;if("object"!==e||null===n||null===t)return"function"===e&&n.toString()===t.toString();if(n.length!==t.length||Object.getOwnPropertyNames(n).length!==Object.getOwnPropertyNames(t).length)return!1;for(var i in n)if(!m(n[i],t[i]))return!1;return!0}var g=function(){return g=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},g.apply(this,arguments)};function b(n,t,e){if(e||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return n.concat(i||Array.prototype.slice.call(t))}function y(n){var t,e,i,r,o,a;function u(t){a||(a=t),c(!0);var o=t-a;o>i&&(o=i);var l=r[e];if(l[3]<o)return e++,u(t);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(o-f)/p);if(h&&n.track.to(v+h),o<i)return d();a=null,c(!1),s(null),n.emit("animationEnded")}function c(n){t.active=n}function s(n){t.targetIdx=n}function d(){var n;n=u,o=window.requestAnimationFrame(n)}function l(){var t;t=o,window.cancelAnimationFrame(t),c(!1),s(null),a&&n.emit("animationStopped"),a=null}return t={active:!1,start:function(t){if(l(),n.track.details){var o=0,a=n.track.details.position;e=0,i=0,r=t.map((function(n){var t,e=Number(a),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,c=n.distance*u(r/n.duration)||0;a+=c;var s=i;return i+=r,o+=c,[e,n.distance,s,i,n.duration,u]})),s(n.track.distToIdx(o)),d(),n.emit("animationStarted")}},stop:l,targetIdx:null}}function x(n){var t,e,i,r,a,u,c,s,d,p,m,g,y,x,k=1/0,w=[],M=null,T=0;function C(n){P(T+n)}function E(n){var t=z(T+n).abs;return A(t)?t:null}function z(n){var t=Math.floor(Math.abs(h(n/e))),i=h((n%e+e)%e);i===e&&(i=0);var r=f(n),o=c.indexOf(b([],c,!0).reduce((function(n,t){return Math.abs(t-i)<Math.abs(n-i)?t:n}))),a=o;return r<0&&t++,o===u&&(a=0,t+=r>0?1:-1),{abs:a+t*u*r,origin:o,rel:a}}function I(n,t,e){var i;if(t||!D())return S(n,e);if(!A(n))return null;var r=z(null!=e?e:T),o=r.abs,a=n-r.rel,c=o+a;i=S(c);var s=S(c-u*f(a));return(null!==s&&Math.abs(s)<Math.abs(i)||null===i)&&(i=s),h(i)}function S(n,t){if(null==t&&(t=h(T)),!A(n)||null===n)return null;n=Math.round(n);var i=z(t),r=i.abs,o=i.rel,a=i.origin,s=L(n),d=(t%e+e)%e,l=c[a],f=Math.floor((n-(r-o))/u)*e;return h(l-d-l+c[s]+f+(a===u?e:0))}function A(n){return O(n)===n}function O(n){return l(n,d,p)}function D(){return r.loop}function L(n){return(n%u+u)%u}function P(t){var e;e=t-T,w.push({distance:e,timestamp:o()}),w.length>6&&(w=w.slice(-6)),T=h(t);var i=_().abs;if(i!==M){var r=null!==M;M=i,r&&n.emit("slideChanged")}}function _(o){var c=o?null:function(){if(u){var n=D(),t=n?(T%e+e)%e:T,o=(n?T%e:T)-a[0][2],c=0-(o<0&&n?e-Math.abs(o):o),s=0,l=z(T),v=l.abs,h=l.rel,b=a[h][2],k=a.map((function(t,i){var o=c+s;(o<0-t[0]||o>1)&&(o+=(Math.abs(o)>e-1&&n?e:0)*f(-o));var a=i-h,d=f(a),l=a+v;n&&(-1===d&&o>b&&(l+=u),1===d&&o<b&&(l-=u),null!==m&&l<m&&(o+=e),null!==g&&l>g&&(o-=e));var p=o+t[0]+t[1],y=Math.max(o>=0&&p<=1?1:p<0||o>1?0:o<0?Math.min(1,(t[0]+o)/t[0]):(1-o)/t[0],0);return s+=t[0]+t[1],{abs:l,distance:r.rtl?-1*o+1-t[0]:o,portion:y,size:t[0]}}));return v=O(v),h=L(v),{abs:O(v),length:i,max:x,maxIdx:p,min:y,minIdx:d,position:T,progress:n?t/e:T/i,rel:h,slides:k,slidesLength:e}}}();return t.details=c,n.emit("detailsChanged"),c}return t={absToRel:L,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){if(function(){if(r=n.options,a=(r.trackConfig||[]).map((function(n){return[v(n,"size",1),v(n,"spacing",0),v(n,"origin",0)]})),u=a.length){e=h(a.reduce((function(n,t){return n+t[0]+t[1]}),0));var t,o=u-1;i=h(e+a[0][2]-a[o][0]-a[o][2]-a[o][1]),c=a.reduce((function(n,e){if(!n)return[0];var i=a[n.length-1],r=n[n.length-1]+(i[0]+i[2])+i[1];return r-=e[2],n[n.length-1]>r&&(r=n[n.length-1]),r=h(r),n.push(r),(!t||t<r)&&(s=n.length-1),t=r,n}),null),0===i&&(s=0),c.push(h(e))}}(),!u)return _(!0);var o;!function(){var t=n.options.range,e=n.options.loop;m=d=e?v(e,"min",-k):0,g=p=e?v(e,"max",k):s;var i=v(t,"min",null),r=v(t,"max",null);null!==i&&(d=i),null!==r&&(p=r),y=d===-k?d:n.track.idxToDist(d||0,!0,0),x=p===k?p:I(p,!0,0),null===r&&(g=p),v(t,"align",!1)&&p!==k&&0===a[L(p)][2]&&(x-=1-a[L(p)][0],p=E(x-T)),y=h(y),x=h(x)}(),o=t,Number(o)===o?C(S(O(t))):_()},to:P,velocity:function(){var n=o(),t=w.reduce((function(t,e){var i=e.distance,r=e.timestamp;return n-r>200||(f(i)!==f(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=i),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function k(n){var t,e,i,r,o,a,u,c;function s(n){return 2*n}function d(n){return l(n,u,c)}function p(n){return 1-Math.pow(1-n,3)}function v(){return i?n.track.velocity():0}function h(){b();var t="free-snap"===n.options.mode,e=n.track,i=v();r=f(i);var u=n.track.details,c=[];if(i||!t){var l=m(i),h=l.dist,g=l.dur;if(g=s(g),h*=r,t){var y=e.idxToDist(e.distToIdx(h),!0);y&&(h=y)}c.push({distance:h,duration:g,easing:p});var x=u.position,k=x+h;if(k<o||k>a){var w=k<o?o-x:a-x,M=0,T=i;if(f(w)===r){var C=Math.min(Math.abs(w)/Math.abs(h),1),E=function(n){return 1-Math.pow(1-n,1/3)}(C)*g;c[0].earlyExit=E,T=i*(1-C)}else c[0].earlyExit=0,M+=w;var z=m(T,100),I=z.dist*r;n.options.rubberband&&(c.push({distance:I,duration:s(z.dur),easing:p}),c.push({distance:-I+M,duration:500,easing:p}))}n.animator.start(c)}else n.moveToIdx(d(u.abs),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}function m(n,t){void 0===t&&(t=1e3);var e=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/e,dur:n/e}}function g(){var t=n.track.details;t&&(o=t.min,a=t.max,u=t.minIdx,c=t.maxIdx)}function b(){n.animator.stop()}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",(function(){i=!1,b(),t=e=n.track.details.abs})),n.on("dragChecked",(function(){i=!0})),n.on("dragEnded",(function(){var i=n.options.mode;"snap"===i&&function(){var i=n.track,r=n.track.details,u=r.position,c=f(v());(u>a||u<o)&&(c=0);var s=t+c;0===r.slides[i.absToRel(s)].portion&&(s-=c),t!==e&&(s=e),f(i.idxToDist(s,!0))!==c&&(s+=c),s=d(s);var l=i.idxToDist(s,!0);n.animator.start([{distance:l,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])}(),"free"!==i&&"free-snap"!==i||h()})),n.on("dragged",(function(){e=n.track.details.abs}))}function w(n){var t,e,i,r,o,a,p,v,h,m,g,b,y,x,k,w,M,T,C=d(),E=2;function z(t){if(a&&v===t.id){var u=O(t);if(h){if(!A(t))return S(t);m=u,h=!1,n.emit("dragChecked")}if(w)return m=u;c(t);var d=function(t){if(M===-1/0&&T===1/0)return t;var i=n.track.details,a=i.length,u=i.position,c=l(t,M-u,T-u);if(0===a)return 0;if(!n.options.rubberband)return c;if(u<=T&&u>=M)return t;if(u<M&&e>0||u>T&&e<0)return t;var s=(u<M?u-M:u-T)/a,d=r*a,f=Math.abs(s*d),p=Math.max(0,1-f/o*E);return p*p*t}(p(m-u)/r*i);e=f(d);var y=n.track.details.position;(y>M&&y<T||y===M&&e>0||y===T&&e<0)&&s(t),g+=d,!b&&Math.abs(g*r)>5&&(b=!0),n.track.add(d),m=u,n.emit("dragged")}}function I(t){!a&&n.track.details&&n.track.details.length&&(g=0,a=!0,b=!1,h=!0,v=t.id,A(t),m=O(t),n.emit("dragStarted"))}function S(t){a&&v===t.idChanged&&(a=!1,n.emit("dragEnded"))}function A(n){var t=D(),e=t?n.y:n.x,i=t?n.x:n.y,r=void 0!==y&&void 0!==x&&Math.abs(x-i)<=Math.abs(y-e);return y=e,x=i,r}function O(n){return D()?n.y:n.x}function D(){return n.options.vertical}function L(){r=n.size,o=D()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max)}function P(n){b&&(s(n),c(n))}function _(){if(C.purge(),n.options.drag&&!n.options.disabled){var e;e=n.options.dragSpeed||1,p="function"==typeof e?e:function(n){return n*e},i=n.options.rtl?-1:1,L(),t=n.container,function(){var n="data-keen-slider-clickable";u("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){C.add(n,"dragstart",s),C.add(n,"mousedown",s),C.add(n,"touchstart",s)}))}(),C.add(t,"dragstart",(function(n){c(n)})),C.add(t,"click",P,{capture:!0}),C.input(t,"ksDragStart",I),C.input(t,"ksDrag",z),C.input(t,"ksDragEnd",S),C.input(t,"mousedown",I),C.input(t,"mousemove",z),C.input(t,"mouseleave",S),C.input(t,"mouseup",S),C.input(t,"touchstart",I,{passive:!0}),C.input(t,"touchmove",z,{passive:!1}),C.input(t,"touchend",S),C.input(t,"touchcancel",S),C.add(window,"wheel",(function(n){a&&c(n)}));var r="data-keen-slider-scrollable";u("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;C.input(n,"touchstart",(function(n){t=O(n),w=!0,k=!0}),{passive:!0}),C.input(n,"touchmove",(function(e){var i=D(),r=i?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,o=t-O(e),a=i?n.scrollTop:n.scrollLeft,u=i&&"scroll"===n.style.overflowY||!i&&"scroll"===n.style.overflowX;if(t=O(e),(o<0&&a>0||o>0&&a<r)&&k&&u)return w=!0;k=!1,c(e),w=!1})),C.input(n,"touchend",(function(){w=!1}))}(n)}))}}n.on("updated",L),n.on("optionsChanged",_),n.on("created",_),n.on("destroyed",C.purge)}function M(n){var t,e,i=null;function r(t,e,i){n.animator.active?a(t,e,i):requestAnimationFrame((function(){return a(t,e,i)}))}function o(){r(!1,!1,e)}function a(e,r,o){var a=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(e)!i&&r&&c(n,null,o),s(n,null,o);else{if(!l[t])return;var d=l[t].size*u;!i&&r&&c(n,d,o),s(n,l[t].distance*u-a,o),a+=d}}))}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function c(n,t,e){var i=e?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+i]=t,n.style["max-"+i]=t}function s(n,t,e){if(null!==t){t=u(t);var i=e?t:0;t="translate3d(".concat(e?0:t,"px, ").concat(i,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(a(!0,!0,e),t=null),n.on("detailsChanged",o,!0)}function l(){r(!1,!0,e)}function f(){d(),e=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(i="auto"===v(n.options.slides,"perView",null),n.on("detailsChanged",o),(t=n.slides).length&&l())}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",(function(){d()})),n.on("updated",l),n.on("destroyed",d)}function T(n,t){return function(e){var i,r,o,c,s,l,f=d();function h(n){var t;a(e.container,"reverse","rtl"!==(t=e.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),a(e.container,"v",e.options.vertical&&!n?"":null),a(e.container,"disabled",e.options.disabled&&!n?"":null)}function m(){b()&&M()}function b(){var n=null;if(c.forEach((function(t){t.matches&&(n=t.__media)})),n===i)return!1;i||e.emit("beforeOptionsChanged"),i=n;var t=n?o.breakpoints[n]:o;return e.options=g(g({},o),t),h(),I(),S(),C(),!0}function y(n){var t=p(n);return(e.options.vertical?t.height:t.width)/e.size||1}function x(){return e.options.trackConfig.length}function k(n){for(var a in i=!1,o=g(g({},t),n),f.purge(),r=e.size,c=[],o.breakpoints||[]){var u=window.matchMedia(a);u.__media=a,c.push(u),f.add(u,"change",m)}f.add(window,"orientationchange",z),f.add(window,"resize",E),b()}function w(n){e.animator.stop();var t=e.track.details;e.track.init(null!=n?n:t?t.abs:0)}function M(n){w(n),e.emit("optionsChanged")}function T(n,t){if(n)return k(n),void M(t);I(),S();var i=x();C(),x()!==i?M(t):w(t),e.emit("updated")}function C(){var n=e.options.slides;if("function"==typeof n)return e.options.trackConfig=n(e.size,e.slides);var t=e.slides,i=t.length,r="number"==typeof n?n:v(n,"number",i,!0),o=[],a=v(n,"perView",1,!0),u="number"==typeof a?v(n,"numberOfFullWidthShow",a,!0):a,c=v(n,"spacing",0,!0)/e.size||0,s="auto"===a?c:c/a,d=0;"number"==typeof u&&(d=c*(Math.floor(u)-1));for(var l=v(n,"origin","auto"),f=0,p=0;p<r;p++){var h="auto"===a?y(t[p]):1/a-c+s,m="center"===l?"number"==typeof u?.5-d/2-Math.floor(u)*h/2:.5-h/2:"auto"===l?0:l;o.push({origin:m,size:h,spacing:c}),f+=h}if(f+=c*(r-1),"auto"===l&&!e.options.loop&&1!==a){var g=0;o.map((function(n){var t=f-g;return g+=n.size+c,t>=1||(n.origin=1-t-(f>1?0:1-f)),n}))}console.log(),e.options.trackConfig=o}function E(){I();var n=e.size;e.options.disabled||n===r||(r=n,T())}function z(){E(),setTimeout(E,500),setTimeout(E,2e3)}function I(){var n=p(e.container);e.size=(e.options.vertical?n.height:n.width)||1}function S(){e.slides=u(e.options.selector,e.container)}e.container=(l=u(n,s||document)).length?l[0]:null,e.destroy=function(){f.purge(),e.emit("destroyed"),h(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=T,k(e.options)}}"function"==typeof SuppressedError&&SuppressedError;var C=function(n,t,e){try{return function(n,t){var e,i={};return e={emit:function(n){i[n]&&i[n].forEach((function(n){n(e)}));var t=e.options&&e.options[n];t&&t(e)},moveToIdx:function(n,t,i){var r=e.track.idxToDist(n,t);if(r){var o=e.options.defaultAnimation;e.animator.start([{distance:r,duration:v(i||o,"duration",500),easing:v(i||o,"easing",(function(n){return 1+--n*n*n*n*n}))}])}},on:function(n,t,e){void 0===e&&(e=!1),i[n]||(i[n]=[]);var r=i[n].indexOf(t);r>-1?e&&delete i[n][r]:e||i[n].push(t)},options:n},function(){if(e.track=x(e),e.animator=y(e),t)for(var n=0,i=t;n<i.length;n++)(0,i[n])(e);e.track.init(e.options.initial||0),e.emit("created")}(),e}(t,b([T(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),M,w,k],e||[],!0))}catch(n){console.error(n)}};function E(i,r){var o=n(null),a=n(!1),u=n(i),c=t((function(n){n?(u.current=i,o.current=new C(n,i,r),a.current=!1):(o.current&&o.current.destroy&&o.current.destroy(),o.current=null)}),[]);return e((function(){m(u.current,i)||(u.current=i,o.current&&o.current.update(u.current))}),[i]),[c,o]}export{E as useKeenSlider};
