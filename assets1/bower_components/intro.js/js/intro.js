!function(t,e){"object"==typeof exports?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t)}(this,function(t){function i(t){this._targetElement=t,this._introItems=[],this._options={nextLabel:"Next &rarr;",prevLabel:"&larr; Back",skipLabel:"Skip",doneLabel:"Done",hidePrev:!1,hideNext:!1,tooltipPosition:"bottom",tooltipClass:"",highlightClass:"",exitOnEsc:!0,exitOnOverlayClick:!0,showStepNumbers:!0,keyboardNavigation:!0,showButtons:!0,showBullets:!0,showProgress:!1,scrollToElement:!0,scrollTo:"element",scrollPadding:30,overlayOpacity:.8,positionPrecedence:["bottom","top","right","left"],disableInteraction:!1,hintPosition:"top-middle",hintButtonLabel:"Got it",hintAnimation:!0}}function e(i){var t=[],n=this;if(this._options.steps)for(var e=0,o=this._options.steps.length;e<o;e++){var l,r=f(this._options.steps[e]);r.step=t.length+1,"string"==typeof r.element&&(r.element=document.querySelector(r.element)),void 0!==r.element&&null!=r.element||(null==(l=document.querySelector(".introjsFloatingElement"))&&((l=document.createElement("div")).className="introjsFloatingElement",document.body.appendChild(l)),r.element=l,r.position="floating"),r.scrollTo=r.scrollTo||this._options.scrollTo,void 0===r.disableInteraction&&(r.disableInteraction=this._options.disableInteraction),null!=r.element&&t.push(r)}else{var s=i.querySelectorAll("*[data-intro]");if(s.length<1)return!1;for(var a,e=0,c=s.length;e<c;e++){"none"!=(h=s[e]).style.display&&(a=parseInt(h.getAttribute("data-step"),10),d=this._options.disableInteraction,void 0!==h.getAttribute("data-disable-interaction")&&(d=!!h.getAttribute("data-disable-interaction")),0<a&&(t[a-1]={element:h,intro:h.getAttribute("data-intro"),step:parseInt(h.getAttribute("data-step"),10),tooltipClass:h.getAttribute("data-tooltipClass"),highlightClass:h.getAttribute("data-highlightClass"),position:h.getAttribute("data-position")||this._options.tooltipPosition,scrollTo:h.getAttribute("data-scrollTo")||this._options.scrollTo,disableInteraction:d}))}for(var h,u=0,e=0,c=s.length;e<c;e++){if(null==(h=s[e]).getAttribute("data-step")){for(;void 0!==t[u];)u++;var d=this._options.disableInteraction;void 0!==h.getAttribute("data-disable-interaction")&&(d=!!h.getAttribute("data-disable-interaction")),t[u]={element:h,intro:h.getAttribute("data-intro"),step:u+1,tooltipClass:h.getAttribute("data-tooltipClass"),highlightClass:h.getAttribute("data-highlightClass"),position:h.getAttribute("data-position")||this._options.tooltipPosition,scrollTo:h.getAttribute("data-scrollTo")||this._options.scrollTo,disableInteraction:d}}}}for(var p=[],m=0;m<t.length;m++)t[m]&&p.push(t[m]);return(t=p).sort(function(t,e){return t.step-e.step}),n._introItems=t,function(t){var e=document.createElement("div"),i="",n=this;{var o;e.className="introjs-overlay",t.tagName&&"body"!==t.tagName.toLowerCase()?(o=z(t))&&(i+="width: "+o.width+"px; height:"+o.height+"px; top:"+o.top+"px;left: "+o.left+"px;",e.setAttribute("style",i)):(i+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;",e.setAttribute("style",i))}return t.appendChild(e),e.onclick=function(){1==n._options.exitOnOverlayClick&&T.call(n,t)},setTimeout(function(){i+="opacity: "+n._options.overlayOpacity.toString()+";",e.setAttribute("style",i)},10),!0}.call(n,i)&&(L.call(n),i.querySelector(".introjs-skipbutton"),i.querySelector(".introjs-nextbutton"),n._onKeyDown=function(t){var e;27===t.keyCode&&1==n._options.exitOnEsc?T.call(n,i):37===t.keyCode?I.call(n):39===t.keyCode?L.call(n):13===t.keyCode&&((e=t.target||t.srcElement)&&0<e.className.indexOf("introjs-prevbutton")?I.call(n):e&&0<e.className.indexOf("introjs-skipbutton")?(n._introItems.length-1==n._currentStep&&"function"==typeof n._introCompleteCallback&&n._introCompleteCallback.call(n),T.call(n,i)):L.call(n),t.preventDefault?t.preventDefault():t.returnValue=!1)},n._onResize=function(t){n.refresh.call(n)},window.addEventListener?(this._options.keyboardNavigation&&window.addEventListener("keydown",n._onKeyDown,!0),window.addEventListener("resize",n._onResize,!0)):document.attachEvent&&(this._options.keyboardNavigation&&document.attachEvent("onkeydown",n._onKeyDown),document.attachEvent("onresize",n._onResize))),!1}function f(t){if(null==t||"object"!=typeof t||void 0!==t.nodeType)return t;var e={};for(var i in t)"undefined"!=typeof jQuery&&t[i]instanceof jQuery?e[i]=t[i]:e[i]=f(t[i]);return e}function L(){if(this._direction="forward",void 0!==this._currentStepNumber)for(var t=0,e=this._introItems.length;t<e;t++){this._introItems[t].step===this._currentStepNumber&&(this._currentStep=t-1,this._currentStepNumber=void 0)}var i;if(void 0===this._currentStep?this._currentStep=0:++this._currentStep,void 0!==this._introBeforeChangeCallback&&(i=this._introBeforeChangeCallback.call(this)),!1===i)return--this._currentStep,!1;if(this._introItems.length<=this._currentStep)return"function"==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),void T.call(this,this._targetElement);var n=this._introItems[this._currentStep];o.call(this,n)}function I(){if(this._direction="backward",0===this._currentStep)return!1;var t;if(--this._currentStep,void 0!==this._introBeforeChangeCallback&&(t=this._introBeforeChangeCallback.call(this)),!1===t)return++this._currentStep,!1;var e=this._introItems[this._currentStep];o.call(this,e)}function T(t,e){var i=!0;if(null!=this._introBeforeExitCallback&&(i=this._introBeforeExitCallback.call(self)),e||!1!==i){var n=t.querySelectorAll(".introjs-overlay");if(n&&0<n.length)for(var o=n.length-1;0<=o;o--){var l=n[o];l.style.opacity=0,setTimeout(function(){this.parentNode&&this.parentNode.removeChild(this)}.bind(l),500)}var r=t.querySelector(".introjs-helperLayer");r&&r.parentNode.removeChild(r);var s=t.querySelector(".introjs-tooltipReferenceLayer");s&&s.parentNode.removeChild(s);var a=t.querySelector(".introjs-disableInteraction");a&&a.parentNode.removeChild(a);var c=document.querySelector(".introjsFloatingElement");c&&c.parentNode.removeChild(c),O();var h=document.querySelectorAll(".introjs-fixParent");if(h&&0<h.length)for(o=h.length-1;0<=o;o--)h[o].className=h[o].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");window.removeEventListener?window.removeEventListener("keydown",this._onKeyDown,!0):document.detachEvent&&document.detachEvent("onkeydown",this._onKeyDown),null!=this._introExitCallback&&this._introExitCallback.call(self),this._currentStep=void 0}}function q(t,e,i,n,o){var l,r,s,a,c,h="";if(o=o||!1,e.style.top=null,e.style.right=null,e.style.bottom=null,e.style.left=null,e.style.marginLeft=null,e.style.marginTop=null,i.style.display="inherit",void 0!==n&&null!=n&&(n.style.top=null,n.style.left=null),this._introItems[this._currentStep])switch(h="string"==typeof(l=this._introItems[this._currentStep]).tooltipClass?l.tooltipClass:this._options.tooltipClass,e.className=("introjs-tooltip "+h).replace(/^\s+|\s+$/g,""),"floating"!=(c=this._introItems[this._currentStep].position)&&(c="auto"===c?m.call(this,t,e):m.call(this,t,e,c)),s=z(t),r=z(e),a=g(),c){case"top":i.className="introjs-arrow bottom",d(s,o?0:15,r,a,e),e.style.bottom=s.height+20+"px";break;case"right":e.style.left=s.width+20+"px",s.top+r.height>a.height?(i.className="introjs-arrow left-bottom",e.style.top="-"+(r.height-s.height-20)+"px"):i.className="introjs-arrow left";break;case"left":o||1!=this._options.showStepNumbers||(e.style.top="15px"),s.top+r.height>a.height?(e.style.top="-"+(r.height-s.height-20)+"px",i.className="introjs-arrow right-bottom"):i.className="introjs-arrow right",e.style.right=s.width+20+"px";break;case"floating":i.style.display="none",e.style.left="50%",e.style.top="50%",e.style.marginLeft="-"+r.width/2+"px",e.style.marginTop="-"+r.height/2+"px",void 0!==n&&null!=n&&(n.style.left="-"+(r.width/2+18)+"px",n.style.top="-"+(r.height/2+18)+"px");break;case"bottom-right-aligned":i.className="introjs-arrow top-right";p(s,0,r,e),e.style.top=s.height+20+"px";break;case"bottom-middle-aligned":i.className="introjs-arrow top-middle";var u=s.width/2-r.width/2;o&&(u+=5),p(s,u,r,e)&&(e.style.right=null,d(s,u,r,a,e)),e.style.top=s.height+20+"px";break;case"bottom-left-aligned":case"bottom":default:i.className="introjs-arrow top",d(s,0,r,a,e),e.style.top=s.height+20+"px"}}function d(t,e,i,n,o){if(!(t.left+e+i.width>n.width))return o.style.left=e+"px",1;o.style.left=n.width-i.width-t.left+"px"}function p(t,e,i,n){if(!(t.left+t.width-e-i.width<0))return n.style.right=e+"px",1;n.style.left=-t.left+"px"}function m(t,e,i){var n=this._options.positionPrecedence.slice(),o=g(),l=z(e).height+10,r=z(e).width+20,s=z(t),a="floating";return s.left+r>o.width||s.left+s.width/2-r<0?(c(n,"bottom"),c(n,"top")):(s.height+s.top+l>o.height&&c(n,"bottom"),s.top-l<0&&c(n,"top")),s.width+s.left+r>o.width&&c(n,"right"),s.left-r<0&&c(n,"left"),0<n.length&&(a=n[0]),i&&"auto"!=i&&-1<n.indexOf(i)&&(a=i),a}function c(t,e){-1<t.indexOf(e)&&t.splice(t.indexOf(e),1)}function P(t){if(t){if(!this._introItems[this._currentStep])return;var e=this._introItems[this._currentStep],i=z(e.element),n=10;h(e.element)?t.className+=" introjs-fixedTooltip":t.className=t.className.replace(" introjs-fixedTooltip",""),"floating"==e.position&&(n=0),t.setAttribute("style","width: "+(i.width+n)+"px; height:"+(i.height+n)+"px; top:"+(i.top-5)+"px;left: "+(i.left-5)+"px;")}}function H(t){t.setAttribute("role","button"),t.tabIndex=0}function o(t){void 0!==this._introChangeCallback&&this._introChangeCallback.call(this,t.element);var e=this,i=document.querySelector(".introjs-helperLayer"),n=document.querySelector(".introjs-tooltipReferenceLayer"),o="introjs-helperLayer";z(t.element);if("string"==typeof t.highlightClass&&(o+=" "+t.highlightClass),"string"==typeof this._options.highlightClass&&(o+=" "+this._options.highlightClass),null!=i){var l,r=n.querySelector(".introjs-helperNumberLayer"),s=n.querySelector(".introjs-tooltiptext"),a=n.querySelector(".introjs-arrow"),c=n.querySelector(".introjs-tooltip"),h=n.querySelector(".introjs-skipbutton"),u=n.querySelector(".introjs-prevbutton"),d=n.querySelector(".introjs-nextbutton");i.className=o,c.style.opacity=0,c.style.display="none",null==r||(null!=(l=this._introItems[0<=t.step-2?t.step-2:0])&&"forward"==this._direction&&"floating"==l.position||"backward"==this._direction&&"floating"==t.position)&&(r.style.opacity=0),P.call(e,i),P.call(e,n);var p=document.querySelectorAll(".introjs-fixParent");if(p&&0<p.length)for(var m=p.length-1;0<=m;m--)p[m].className=p[m].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");O(),e._lastShowElementTimer&&clearTimeout(e._lastShowElementTimer),e._lastShowElementTimer=setTimeout(function(){null!=r&&(r.innerHTML=t.step),s.innerHTML=t.intro,c.style.display="block",q.call(e,t.element,c,a,r),e._options.showBullets&&(n.querySelector(".introjs-bullets li > a.active").className="",n.querySelector('.introjs-bullets li > a[data-stepnumber="'+t.step+'"]').className="active"),n.querySelector(".introjs-progress .introjs-progressbar").setAttribute("style","width:"+D.call(e)+"%;"),c.style.opacity=1,r&&(r.style.opacity=1),void 0!==h&&null!=h&&/introjs-donebutton/gi.test(h.className)?h.focus():void 0!==d&&null!=d&&d.focus(),B.call(e,t.scrollTo,t,s)},350)}else{var f=document.createElement("div"),g=document.createElement("div"),b=document.createElement("div"),v=document.createElement("div"),y=document.createElement("div"),_=document.createElement("div"),w=document.createElement("div"),C=document.createElement("div");f.className=o,g.className="introjs-tooltipReferenceLayer",P.call(e,f),P.call(e,g),this._targetElement.appendChild(f),this._targetElement.appendChild(g),b.className="introjs-arrow",y.className="introjs-tooltiptext",y.innerHTML=t.intro,!(_.className="introjs-bullets")===this._options.showBullets&&(_.style.display="none");for(var j=document.createElement("ul"),m=0,N=this._introItems.length;m<N;m++){var E=document.createElement("li"),S=document.createElement("a");S.onclick=function(){e.goToStep(this.getAttribute("data-stepnumber"))},m===t.step-1&&(S.className="active"),H(S),S.innerHTML="&nbsp;",S.setAttribute("data-stepnumber",this._introItems[m].step),E.appendChild(S),j.appendChild(E)}_.appendChild(j),!(w.className="introjs-progress")===this._options.showProgress&&(w.style.display="none");var k,x=document.createElement("div");x.className="introjs-progressbar",x.setAttribute("style","width:"+D.call(this)+"%;"),w.appendChild(x),!(C.className="introjs-tooltipbuttons")===this._options.showButtons&&(C.style.display="none"),v.className="introjs-tooltip",v.appendChild(y),v.appendChild(_),v.appendChild(w),1==this._options.showStepNumbers&&((k=document.createElement("span")).className="introjs-helperNumberLayer",k.innerHTML=t.step,g.appendChild(k)),v.appendChild(b),g.appendChild(v),(d=document.createElement("a")).onclick=function(){e._introItems.length-1!=e._currentStep&&L.call(e)},H(d),d.innerHTML=this._options.nextLabel,(u=document.createElement("a")).onclick=function(){0!=e._currentStep&&I.call(e)},H(u),u.innerHTML=this._options.prevLabel,(h=document.createElement("a")).className="introjs-button introjs-skipbutton",H(h),h.innerHTML=this._options.skipLabel,h.onclick=function(){e._introItems.length-1==e._currentStep&&"function"==typeof e._introCompleteCallback&&e._introCompleteCallback.call(e),T.call(e,e._targetElement)},C.appendChild(h),1<this._introItems.length&&(C.appendChild(u),C.appendChild(d)),v.appendChild(C),q.call(e,t.element,v,b,k),B.call(this,t.scrollTo,t,v)}var A=e._targetElement.querySelector(".introjs-disableInteraction");A&&A.parentNode.removeChild(A),t.disableInteraction&&function(){var t=document.querySelector(".introjs-disableInteraction");null===t&&((t=document.createElement("div")).className="introjs-disableInteraction",this._targetElement.appendChild(t)),P.call(this,t)}.call(e),void 0!==d&&null!=d&&d.removeAttribute("tabIndex"),void 0!==u&&null!=u&&u.removeAttribute("tabIndex"),0==this._currentStep&&1<this._introItems.length?(void 0!==h&&null!=h&&(h.className="introjs-button introjs-skipbutton"),void 0!==d&&null!=d&&(d.className="introjs-button introjs-nextbutton"),1==this._options.hidePrev?(void 0!==u&&null!=u&&(u.className="introjs-button introjs-prevbutton introjs-hidden"),void 0!==d&&null!=d&&(d.className+=" introjs-fullbutton")):void 0!==u&&null!=u&&(u.className="introjs-button introjs-prevbutton introjs-disabled"),void 0!==u&&null!=u&&(u.tabIndex="-1"),void 0!==h&&null!=h&&(h.innerHTML=this._options.skipLabel)):this._introItems.length-1==this._currentStep||1==this._introItems.length?(void 0!==h&&null!=h&&(h.innerHTML=this._options.doneLabel,h.className+=" introjs-donebutton"),void 0!==u&&null!=u&&(u.className="introjs-button introjs-prevbutton"),1==this._options.hideNext?(void 0!==d&&null!=d&&(d.className="introjs-button introjs-nextbutton introjs-hidden"),void 0!==u&&null!=u&&(u.className+=" introjs-fullbutton")):void 0!==d&&null!=d&&(d.className="introjs-button introjs-nextbutton introjs-disabled"),void 0!==d&&null!=d&&(d.tabIndex="-1")):(void 0!==h&&null!=h&&(h.className="introjs-button introjs-skipbutton"),void 0!==u&&null!=u&&(u.className="introjs-button introjs-prevbutton"),void 0!==d&&null!=d&&(d.className="introjs-button introjs-nextbutton"),void 0!==h&&null!=h&&(h.innerHTML=this._options.skipLabel)),void 0!==d&&null!=d&&d.focus(),function(t){if(t.element instanceof SVGElement)for(var e=t.element.parentNode;null!=t.element.parentNode&&e.tagName&&"body"!==e.tagName.toLowerCase();)"svg"===e.tagName.toLowerCase()&&M(e,"introjs-showElement introjs-relativePosition"),e=e.parentNode;M(t.element,"introjs-showElement");var i=R(t.element,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&M(t.element,"introjs-relativePosition");e=t.element.parentNode;for(;null!=e&&e.tagName&&"body"!==e.tagName.toLowerCase();){var n=R(e,"z-index"),o=parseFloat(R(e,"opacity")),l=R(e,"transform")||R(e,"-webkit-transform")||R(e,"-moz-transform")||R(e,"-ms-transform")||R(e,"-o-transform");(/[0-9]+/.test(n)||o<1||"none"!==l&&void 0!==l)&&(e.className+=" introjs-fixParent"),e=e.parentNode}}(t),void 0!==this._introAfterChangeCallback&&this._introAfterChangeCallback.call(this,t.element)}function B(t,e,i){var n,o,l,r,s;this._options.scrollToElement&&(n="tooltip"===t?i.getBoundingClientRect():e.element.getBoundingClientRect(),r=e.element,0<=(s=r.getBoundingClientRect()).top&&0<=s.left&&s.bottom+80<=window.innerHeight&&s.right<=window.innerWidth||(o=g().height,l=n.bottom-(n.bottom-n.top),n.bottom,l<0||e.element.clientHeight>o?window.scrollBy(0,n.top-(o/2-n.height/2)-this._options.scrollPadding):window.scrollBy(0,n.top-(o/2-n.height/2)+this._options.scrollPadding)))}function O(){for(var t=document.querySelectorAll(".introjs-showElement"),e=0,i=t.length;e<i;e++){!function(t,e){{var i;t instanceof SVGElement?(i=t.getAttribute("class")||"",t.setAttribute("class",i.replace(e,"").replace(/^\s+|\s+$/g,""))):t.className=t.className.replace(e,"").replace(/^\s+|\s+$/g,"")}}(t[e],/introjs-[a-zA-Z]+/g)}}function M(t,e){var i;t instanceof SVGElement?(i=t.getAttribute("class")||"",t.setAttribute("class",i+" "+e)):t.className+=" "+e}function R(t,e){var i="";return t.currentStyle?i=t.currentStyle[e]:document.defaultView&&document.defaultView.getComputedStyle&&(i=document.defaultView.getComputedStyle(t,null).getPropertyValue(e)),i&&i.toLowerCase?i.toLowerCase():i}function h(t){var e=t.parentNode;return!(!e||"HTML"===e.nodeName)&&("fixed"==R(t,"position")||h(e))}function g(){if(null!=window.innerWidth)return{width:window.innerWidth,height:window.innerHeight};var t=document.documentElement;return{width:t.clientWidth,height:t.clientHeight}}function u(){var t=this._targetElement.querySelector(".introjs-hintReference");if(t){var e=t.getAttribute("data-step");return t.parentNode.removeChild(t),e}}function n(t){if(this._introItems=[],this._options.hints)for(var e=0,i=this._options.hints.length;e<i;e++){var n=f(this._options.hints[e]);"string"==typeof n.element&&(n.element=document.querySelector(n.element)),n.hintPosition=n.hintPosition||this._options.hintPosition,n.hintAnimation=n.hintAnimation||this._options.hintAnimation,null!=n.element&&this._introItems.push(n)}else{var o=t.querySelectorAll("*[data-hint]");if(o.length<1)return!1;for(e=0,i=o.length;e<i;e++){var l=o[e],r=(r=l.getAttribute("data-hintAnimation"))?"true"==r:this._options.hintAnimation;this._introItems.push({element:l,hint:l.getAttribute("data-hint"),hintPosition:l.getAttribute("data-hintPosition")||this._options.hintPosition,hintAnimation:r,tooltipClass:l.getAttribute("data-tooltipClass"),position:l.getAttribute("data-position")||this._options.tooltipPosition})}}(function(){var n=this,t=document.querySelector(".introjs-hints");{var e;null!=t?e=t:(e=document.createElement("div")).className="introjs-hints"}for(var i=0,o=this._introItems.length;i<o;i++){var l,r,s,a=this._introItems[i];document.querySelector('.introjs-hint[data-step="'+i+'"]')||(H(l=document.createElement("a")),function(i){l.onclick=function(t){var e=t||window.event;e.stopPropagation&&e.stopPropagation(),null!=e.cancelBubble&&(e.cancelBubble=!0),y.call(n,i)}}(i),l.className="introjs-hint",a.hintAnimation||(l.className+=" introjs-hint-no-anim"),h(a.element)&&(l.className+=" introjs-fixedhint"),(r=document.createElement("div")).className="introjs-hint-dot",(s=document.createElement("div")).className="introjs-hint-pulse",l.appendChild(r),l.appendChild(s),l.setAttribute("data-step",i),a.targetElement=a.element,a.element=l,v.call(this,a.hintPosition,l,a.targetElement),e.appendChild(l))}document.body.appendChild(e),void 0!==this._hintsAddedCallback&&this._hintsAddedCallback.call(this)}).call(this),document.addEventListener?(document.addEventListener("click",u.bind(this),!1),window.addEventListener("resize",s.bind(this),!0)):document.attachEvent&&(document.attachEvent("onclick",u.bind(this)),document.attachEvent("onresize",s.bind(this)))}function s(){for(var t=0,e=this._introItems.length;t<e;t++){var i=this._introItems[t];void 0!==i.targetElement&&v.call(this,i.hintPosition,i.element,i.targetElement)}}function b(t){u.call(this);var e=this._targetElement.querySelector('.introjs-hint[data-step="'+t+'"]');e&&(e.className+=" introjs-hidehint"),void 0!==this._hintCloseCallback&&this._hintCloseCallback.call(this,t)}function l(t){var e=this._targetElement.querySelector('.introjs-hint[data-step="'+t+'"]');e&&(e.className=e.className.replace(/introjs\-hidehint/g,""))}function r(t){var e=this._targetElement.querySelector('.introjs-hint[data-step="'+t+'"]');e&&e.parentNode.removeChild(e)}function v(t,e,i){var n=z.call(this,i);switch(t){default:case"top-left":e.style.left=n.left+"px",e.style.top=n.top+"px";break;case"top-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+"px";break;case"bottom-left":e.style.left=n.left+"px",e.style.top=n.top+n.height-20+"px";break;case"bottom-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+n.height-20+"px";break;case"middle-left":e.style.left=n.left+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"middle-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"middle-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"bottom-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+n.height-20+"px";break;case"top-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+"px"}}function y(t){var e=document.querySelector('.introjs-hint[data-step="'+t+'"]'),i=this._introItems[t];void 0!==this._hintClickCallback&&this._hintClickCallback.call(this,e,i,t);var n,o,l,r,s,a,c=u.call(this);parseInt(c,10)!=t&&(n=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),n.className="introjs-tooltip",n.onclick=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},o.className="introjs-tooltiptext",(s=document.createElement("p")).innerHTML=i.hint,(a=document.createElement("a")).className="introjs-button",a.innerHTML=this._options.hintButtonLabel,a.onclick=b.bind(this,t),o.appendChild(s),o.appendChild(a),l.className="introjs-arrow",n.appendChild(l),n.appendChild(o),this._currentStep=e.getAttribute("data-step"),r.className="introjs-tooltipReferenceLayer introjs-hintReference",r.setAttribute("data-step",e.getAttribute("data-step")),P.call(this,r),r.appendChild(n),document.body.appendChild(r),q.call(this,e,n,l,null,!0))}function z(t){var e={},i=document.body,n=document.documentElement,o=window.pageYOffset||n.scrollTop||i.scrollTop,l=window.pageXOffset||n.scrollLeft||i.scrollLeft;if(t instanceof SVGElement){var r=t.getBoundingClientRect();e.top=r.top+o,e.width=r.width,e.height=r.height,e.left=r.left+l}else{e.width=t.offsetWidth,e.height=t.offsetHeight;for(var s=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)s+=t.offsetLeft,a+=t.offsetTop,t=t.offsetParent;e.top=a,e.left=s}return e}function D(){return parseInt(this._currentStep+1,10)/this._introItems.length*100}function a(t){if("object"==typeof t)return new i(t);if("string"!=typeof t)return new i(document.body);var e=document.querySelector(t);if(e)return new i(e);throw new Error("There is no element with given selector.")}return a.version="2.8.0-alpha.1",a.fn=i.prototype={clone:function(){return new i(this)},setOption:function(t,e){return this._options[t]=e,this},setOptions:function(t){return this._options=function(t,e){var i={};for(var n in t)i[n]=t[n];for(var n in e)i[n]=e[n];return i}(this._options,t),this},start:function(){return e.call(this,this._targetElement),this},goToStep:function(t){return function(t){this._currentStep=t-2,void 0!==this._introItems&&L.call(this)}.call(this,t),this},addStep:function(t){return this._options.steps||(this._options.steps=[]),this._options.steps.push(t),this},addSteps:function(t){if(t.length){for(var e=0;e<t.length;e++)this.addStep(t[e]);return this}},goToStepNumber:function(t){return function(t){this._currentStepNumber=t,void 0!==this._introItems&&L.call(this)}.call(this,t),this},nextStep:function(){return L.call(this),this},previousStep:function(){return I.call(this),this},exit:function(t){return T.call(this,this._targetElement,t),this},refresh:function(){return function(){var t,e,i;return P.call(this,document.querySelector(".introjs-helperLayer")),P.call(this,document.querySelector(".introjs-tooltipReferenceLayer")),P.call(this,document.querySelector(".introjs-disableInteraction")),void 0!==this._currentStep&&null!==this._currentStep&&(t=document.querySelector(".introjs-helperNumberLayer"),e=document.querySelector(".introjs-arrow"),i=document.querySelector(".introjs-tooltip"),q.call(this,this._introItems[this._currentStep].element,i,e,t)),s.call(this),this}.call(this),this},onbeforechange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onbeforechange was not a function");return this._introBeforeChangeCallback=t,this},onchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onchange was not a function.");return this._introChangeCallback=t,this},onafterchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onafterchange was not a function");return this._introAfterChangeCallback=t,this},oncomplete:function(t){if("function"!=typeof t)throw new Error("Provided callback for oncomplete was not a function.");return this._introCompleteCallback=t,this},onhintsadded:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintsadded was not a function.");return this._hintsAddedCallback=t,this},onhintclick:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclick was not a function.");return this._hintClickCallback=t,this},onhintclose:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclose was not a function.");return this._hintCloseCallback=t,this},onexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onexit was not a function.");return this._introExitCallback=t,this},onbeforeexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onbeforeexit was not a function.");return this._introBeforeExitCallback=t,this},addHints:function(){return n.call(this,this._targetElement),this},hideHint:function(t){return b.call(this,t),this},hideHints:function(){return function(){var t=this._targetElement.querySelectorAll(".introjs-hint");if(t&&0<t.length)for(var e=0;e<t.length;e++)b.call(this,t[e].getAttribute("data-step"))}.call(this),this},showHint:function(t){return l.call(this,t),this},showHints:function(){return function(){var t=this._targetElement.querySelectorAll(".introjs-hint");if(t&&0<t.length)for(var e=0;e<t.length;e++)l.call(this,t[e].getAttribute("data-step"));else n.call(this,this._targetElement)}.call(this),this},removeHints:function(){return function(){var t=this._targetElement.querySelectorAll(".introjs-hint");if(t&&0<t.length)for(var e=0;e<t.length;e++)r.call(this,t[e].getAttribute("data-step"))}.call(this),this},removeHint:function(t){return r.call(this,t),this},showHintDialog:function(t){return y.call(this,t),this}},t.introJs=a});