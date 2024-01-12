!function(){"use strict";function o(){function o(o,t){this.scrollLeft=o,this.scrollTop=t}function t(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function l(o,t){return"Y"===t?o.clientHeight+h<o.scrollHeight:"X"===t?o.clientWidth+h<o.scrollWidth:void 0}function e(o,t){var l=i.getComputedStyle(o,null)["overflow"+t];return"auto"===l||"scroll"===l}function r(o){var t,l,e,c,s=(d()-o.startTime)/f;c=s=s>1?1:s,t=.5*(1-Math.cos(Math.PI*c)),l=o.startX+(o.x-o.startX)*t,e=o.startY+(o.y-o.startY)*t,o.method.call(o.scrollable,l,e),l===o.x&&e===o.y||i.requestAnimationFrame(r.bind(i,o))}function c(t,l,e){var c,n,a,f,h=d();t===s.body?(c=i,n=i.scrollX||i.pageXOffset,a=i.scrollY||i.pageYOffset,f=p.scroll):(c=t,n=t.scrollLeft,a=t.scrollTop,f=o),r({scrollable:c,method:f,startTime:h,startX:n,startY:a,x:l,y:e})}var i=window,s=document;if(!("scrollBehavior"in s.documentElement.style&&!0!==i.__forceSmoothScrollPolyfill__)){var n,a=i.HTMLElement||i.Element,f=468,p={scroll:i.scroll||i.scrollTo,scrollBy:i.scrollBy,elementScroll:a.prototype.scroll||o,scrollIntoView:a.prototype.scrollIntoView},d=i.performance&&i.performance.now?i.performance.now.bind(i.performance):Date.now,h=(n=i.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);i.scroll=i.scrollTo=function(){void 0!==arguments[0]&&(!0!==t(arguments[0])?c.call(i,s.body,void 0!==arguments[0].left?~~arguments[0].left:i.scrollX||i.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:i.scrollY||i.pageYOffset):p.scroll.call(i,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:i.scrollX||i.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:i.scrollY||i.pageYOffset))},i.scrollBy=function(){void 0!==arguments[0]&&(t(arguments[0])?p.scrollBy.call(i,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):c.call(i,s.body,~~arguments[0].left+(i.scrollX||i.pageXOffset),~~arguments[0].top+(i.scrollY||i.pageYOffset)))},a.prototype.scroll=a.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==t(arguments[0])){var o=arguments[0].left,l=arguments[0].top;c.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===l?this.scrollTop:~~l)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");p.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},a.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==t(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):p.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},a.prototype.scrollIntoView=function(){if(!0!==t(arguments[0])){var o=function(o){for(;o!==s.body&&!1===(r=l(t=o,"Y")&&e(t,"Y"),c=l(t,"X")&&e(t,"X"),r||c);)o=o.parentNode||o.host;var t,r,c;return o}(this),r=o.getBoundingClientRect(),n=this.getBoundingClientRect();o!==s.body?(c.call(this,o,o.scrollLeft+n.left-r.left,o.scrollTop+n.top-r.top),"fixed"!==i.getComputedStyle(o).position&&i.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):i.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else p.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();const smoothScroll=o=>o.scrollIntoView({behavior:"smooth"}),scrollToTop=()=>window.scrollTo({top:0,behavior:"smooth"}),allLinks=document.querySelectorAll("a:link");allLinks.forEach(function(o){o.addEventListener("click",t=>{t.preventDefault();const l=o.getAttribute("href");if("#"===l&&scrollToTop(),"#"!==l&&l.startsWith("#")){const o=document.querySelector(l);smoothScroll(o)}o.classList.contains("main-nav-link")&&headerEl.classList.remove("nav-open"),"#"===l||l.includes("#")||(window.location=l)})});const backToTopBtn=document.querySelector(".backToTop");window.addEventListener("scroll",()=>{document.body.scrollTop>160||document.documentElement.scrollTop>160?backToTopBtn.style.opacity=1:backToTopBtn.style.opacity=0}),backToTopBtn.addEventListener("click",()=>{scrollToTop(),backToTopBtn.blur()});