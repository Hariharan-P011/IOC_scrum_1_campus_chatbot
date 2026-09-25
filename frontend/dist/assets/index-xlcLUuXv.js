(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Iv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $g={exports:{}},gc={},Kg={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),Lv=Symbol.for("react.portal"),Dv=Symbol.for("react.fragment"),Uv=Symbol.for("react.strict_mode"),Ov=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),kv=Symbol.for("react.context"),Bv=Symbol.for("react.forward_ref"),zv=Symbol.for("react.suspense"),Hv=Symbol.for("react.memo"),Gv=Symbol.for("react.lazy"),vp=Symbol.iterator;function Vv(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var Yg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zg=Object.assign,Jg={};function Js(t,e,n){this.props=t,this.context=e,this.refs=Jg,this.updater=n||Yg}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qg(){}Qg.prototype=Js.prototype;function zf(t,e,n){this.props=t,this.context=e,this.refs=Jg,this.updater=n||Yg}var Hf=zf.prototype=new Qg;Hf.constructor=zf;Zg(Hf,Js.prototype);Hf.isPureReactComponent=!0;var yp=Array.isArray,e0=Object.prototype.hasOwnProperty,Gf={current:null},t0={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)e0.call(e,i)&&!t0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ho,type:t,key:s,ref:a,props:r,_owner:Gf.current}}function Wv(t,e){return{$$typeof:ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ho}function jv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sp=/\/+/g;function zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jv(""+t.key):e.toString(36)}function pl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ho:case Lv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+zc(a,0):i,yp(r)?(n="",t!=null&&(n=t.replace(Sp,"$&/")+"/"),pl(r,e,n,"",function(c){return c})):r!=null&&(Vf(r)&&(r=Wv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Sp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",yp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+zc(s,o);a+=pl(s,e,n,l,r)}else if(l=Vv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+zc(s,o++),a+=pl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ao(t,e,n){if(t==null)return t;var i=[],r=0;return pl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Xv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},ml={transition:null},qv={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Gf};function i0(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Ao,forEach:function(t,e,n){Ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ao(t,function(){e++}),e},toArray:function(t){return Ao(t,function(e){return e})||[]},only:function(t){if(!Vf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Js;$e.Fragment=Dv;$e.Profiler=Ov;$e.PureComponent=zf;$e.StrictMode=Uv;$e.Suspense=zv;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qv;$e.act=i0;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Gf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)e0.call(e,l)&&!t0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:ho,type:t.type,key:r,ref:s,props:i,_owner:a}};$e.createContext=function(t){return t={$$typeof:kv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fv,_context:t},t.Consumer=t};$e.createElement=n0;$e.createFactory=function(t){var e=n0.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:Bv,render:t}};$e.isValidElement=Vf;$e.lazy=function(t){return{$$typeof:Gv,_payload:{_status:-1,_result:t},_init:Xv}};$e.memo=function(t,e){return{$$typeof:Hv,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};$e.unstable_act=i0;$e.useCallback=function(t,e){return fn.current.useCallback(t,e)};$e.useContext=function(t){return fn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return fn.current.useEffect(t,e)};$e.useId=function(){return fn.current.useId()};$e.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return fn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};$e.useRef=function(t){return fn.current.useRef(t)};$e.useState=function(t){return fn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return fn.current.useTransition()};$e.version="18.3.1";Kg.exports=$e;var Ce=Kg.exports;const wa=Iv(Ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v=Ce,Kv=Symbol.for("react.element"),Yv=Symbol.for("react.fragment"),Zv=Object.prototype.hasOwnProperty,Jv=$v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qv={key:!0,ref:!0,__self:!0,__source:!0};function r0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Zv.call(e,i)&&!Qv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Kv,type:t,key:s,ref:a,props:r,_owner:Jv.current}}gc.Fragment=Yv;gc.jsx=r0;gc.jsxs=r0;$g.exports=gc;var m=$g.exports,ed={},s0={exports:{}},Nn={},a0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,P){var G=B.length;B.push(P);e:for(;0<G;){var Z=G-1>>>1,se=B[Z];if(0<r(se,P))B[Z]=P,B[G]=se,G=Z;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var P=B[0],G=B.pop();if(G!==P){B[0]=G;e:for(var Z=0,se=B.length,ve=se>>>1;Z<ve;){var He=2*(Z+1)-1,Oe=B[He],Ge=He+1,V=B[Ge];if(0>r(Oe,G))Ge<se&&0>r(V,Oe)?(B[Z]=V,B[Ge]=G,Z=Ge):(B[Z]=Oe,B[He]=G,Z=He);else if(Ge<se&&0>r(V,G))B[Z]=V,B[Ge]=G,Z=Ge;else break e}}return P}function r(B,P){var G=B.sortIndex-P.sortIndex;return G!==0?G:B.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,f=3,p=!1,x=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=B)i(c),P.sortIndex=P.expirationTime,e(l,P);else break;P=n(c)}}function v(B){if(M=!1,S(B),!x)if(n(l)!==null)x=!0,Q(T);else{var P=n(c);P!==null&&q(v,P.startTime-B)}}function T(B,P){x=!1,M&&(M=!1,d(y),y=-1),p=!0;var G=f;try{for(S(P),h=n(l);h!==null&&(!(h.expirationTime>P)||B&&!I());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,f=h.priorityLevel;var se=Z(h.expirationTime<=P);P=t.unstable_now(),typeof se=="function"?h.callback=se:h===n(l)&&i(l),S(P)}else i(l);h=n(l)}if(h!==null)var ve=!0;else{var He=n(c);He!==null&&q(v,He.startTime-P),ve=!1}return ve}finally{h=null,f=G,p=!1}}var A=!1,C=null,y=-1,w=5,N=-1;function I(){return!(t.unstable_now()-N<w)}function k(){if(C!==null){var B=t.unstable_now();N=B;var P=!0;try{P=C(!0,B)}finally{P?W():(A=!1,C=null)}}else A=!1}var W;if(typeof g=="function")W=function(){g(k)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=k,W=function(){H.postMessage(null)}}else W=function(){_(k,0)};function Q(B){C=B,A||(A=!0,W())}function q(B,P){y=_(function(){B(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,Q(T))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var G=f;f=P;try{return B()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,P){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var G=f;f=B;try{return P()}finally{f=G}},t.unstable_scheduleCallback=function(B,P,G){var Z=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Z+G:Z):G=Z,B){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=G+se,B={id:u++,callback:P,priorityLevel:B,startTime:G,expirationTime:se,sortIndex:-1},G>Z?(B.sortIndex=G,e(c,B),n(l)===null&&B===n(c)&&(M?(d(y),y=-1):M=!0,q(v,G-Z))):(B.sortIndex=se,e(l,B),x||p||(x=!0,Q(T))),B},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(B){var P=f;return function(){var G=f;f=P;try{return B.apply(this,arguments)}finally{f=G}}}})(o0);a0.exports=o0;var ey=a0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty=Ce,Rn=ey;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l0=new Set,Ga={};function Qr(t,e){Vs(t,e),Vs(t+"Capture",e)}function Vs(t,e){for(Ga[t]=e,t=0;t<e.length;t++)l0.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),td=Object.prototype.hasOwnProperty,ny=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ep={},Mp={};function iy(t){return td.call(Mp,t)?!0:td.call(Ep,t)?!1:ny.test(t)?Mp[t]=!0:(Ep[t]=!0,!1)}function ry(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sy(t,e,n,i){if(e===null||typeof e>"u"||ry(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,jf);$t[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,jf);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,jf);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xf(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sy(e,n,r,i)&&(n=null),i||r===null?iy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),Es=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),Kf=Symbol.for("react.memo"),Qi=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),wp=Symbol.iterator;function aa(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Hc;function ba(t){if(Hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+t}var Gc=!1;function Vc(t,e){if(!t||Gc)return"";Gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ba(t):""}function ay(t){switch(t.tag){case 5:return ba(t.type);case 16:return ba("Lazy");case 13:return ba("Suspense");case 19:return ba("SuspenseList");case 0:case 2:case 15:return t=Vc(t.type,!1),t;case 11:return t=Vc(t.type.render,!1),t;case 1:return t=Vc(t.type,!0),t;default:return""}}function sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case Es:return"Portal";case nd:return"Profiler";case qf:return"StrictMode";case id:return"Suspense";case rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case u0:return(t.displayName||"Context")+".Consumer";case c0:return(t._context.displayName||"Context")+".Provider";case $f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kf:return e=t.displayName||null,e!==null?e:sd(t.type)||"Memo";case Qi:e=t._payload,t=t._init;try{return sd(t(e))}catch{}}return null}function oy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sd(e);case 8:return e===qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ly(t){var e=f0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ro(t){t._valueTracker||(t._valueTracker=ly(t))}function h0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=f0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ad(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p0(t,e){e=e.checked,e!=null&&Xf(t,"checked",e,!1)}function od(t,e){p0(t,e);var n=mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&ld(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ld(t,e,n){(e!=="number"||Ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ta=Array.isArray;function Us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Ta(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function m0(t,e){var n=mr(e.value),i=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Cp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var No,_0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=No.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cy=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(t){cy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ia[e]=Ia[t]})});function x0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ia.hasOwnProperty(t)&&Ia[t]?(""+e).trim():e+"px"}function v0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=x0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var uy=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dd(t,e){if(e){if(uy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hd=null;function Yf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pd=null,Os=null,Fs=null;function Rp(t){if(t=go(t)){if(typeof pd!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Sc(e),pd(t.stateNode,t.type,e))}}function y0(t){Os?Fs?Fs.push(t):Fs=[t]:Os=t}function S0(){if(Os){var t=Os,e=Fs;if(Fs=Os=null,Rp(t),e)for(t=0;t<e.length;t++)Rp(e[t])}}function E0(t,e){return t(e)}function M0(){}var Wc=!1;function w0(t,e,n){if(Wc)return t(e,n);Wc=!0;try{return E0(t,e,n)}finally{Wc=!1,(Os!==null||Fs!==null)&&(M0(),S0())}}function Wa(t,e){var n=t.stateNode;if(n===null)return null;var i=Sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var md=!1;if(Oi)try{var oa={};Object.defineProperty(oa,"passive",{get:function(){md=!0}}),window.addEventListener("test",oa,oa),window.removeEventListener("test",oa,oa)}catch{md=!1}function dy(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var La=!1,Fl=null,kl=!1,gd=null,fy={onError:function(t){La=!0,Fl=t}};function hy(t,e,n,i,r,s,a,o,l){La=!1,Fl=null,dy.apply(fy,arguments)}function py(t,e,n,i,r,s,a,o,l){if(hy.apply(this,arguments),La){if(La){var c=Fl;La=!1,Fl=null}else throw Error(ae(198));kl||(kl=!0,gd=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function b0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Np(t){if(es(t)!==t)throw Error(ae(188))}function my(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Np(r),t;if(s===i)return Np(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function T0(t){return t=my(t),t!==null?A0(t):null}function A0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=A0(t);if(e!==null)return e;t=t.sibling}return null}var C0=Rn.unstable_scheduleCallback,Pp=Rn.unstable_cancelCallback,gy=Rn.unstable_shouldYield,_y=Rn.unstable_requestPaint,Pt=Rn.unstable_now,xy=Rn.unstable_getCurrentPriorityLevel,Zf=Rn.unstable_ImmediatePriority,R0=Rn.unstable_UserBlockingPriority,Bl=Rn.unstable_NormalPriority,vy=Rn.unstable_LowPriority,N0=Rn.unstable_IdlePriority,_c=null,pi=null;function yy(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(_c,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:My,Sy=Math.log,Ey=Math.LN2;function My(t){return t>>>=0,t===0?32:31-(Sy(t)/Ey|0)|0}var Po=64,Io=4194304;function Aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Aa(o):(s&=a,s!==0&&(i=Aa(s)))}else a=n&~r,a!==0?i=Aa(a):s!==0&&(i=Aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function wy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function by(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Qn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=wy(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function _d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function P0(){var t=Po;return Po<<=1,!(Po&4194240)&&(Po=64),t}function jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function po(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function Ty(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Jf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var dt=0;function I0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var L0,Qf,D0,U0,O0,xd=!1,Lo=[],or=null,lr=null,cr=null,ja=new Map,Xa=new Map,nr=[],Ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ip(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xa.delete(e.pointerId)}}function la(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=go(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Cy(t,e,n,i,r){switch(e){case"focusin":return or=la(or,t,e,n,i,r),!0;case"dragenter":return lr=la(lr,t,e,n,i,r),!0;case"mouseover":return cr=la(cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ja.set(s,la(ja.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Xa.set(s,la(Xa.get(s)||null,t,e,n,i,r)),!0}return!1}function F0(t){var e=Pr(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=b0(n),e!==null){t.blockedOn=e,O0(t.priority,function(){D0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hd=i,n.target.dispatchEvent(i),hd=null}else return e=go(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function Lp(t,e,n){gl(t)&&n.delete(e)}function Ry(){xd=!1,or!==null&&gl(or)&&(or=null),lr!==null&&gl(lr)&&(lr=null),cr!==null&&gl(cr)&&(cr=null),ja.forEach(Lp),Xa.forEach(Lp)}function ca(t,e){t.blockedOn===e&&(t.blockedOn=null,xd||(xd=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,Ry)))}function qa(t){function e(r){return ca(r,t)}if(0<Lo.length){ca(Lo[0],t);for(var n=1;n<Lo.length;n++){var i=Lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&ca(or,t),lr!==null&&ca(lr,t),cr!==null&&ca(cr,t),ja.forEach(e),Xa.forEach(e),n=0;n<nr.length;n++)i=nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)F0(n),n.blockedOn===null&&nr.shift()}var ks=Hi.ReactCurrentBatchConfig,Hl=!0;function Ny(t,e,n,i){var r=dt,s=ks.transition;ks.transition=null;try{dt=1,eh(t,e,n,i)}finally{dt=r,ks.transition=s}}function Py(t,e,n,i){var r=dt,s=ks.transition;ks.transition=null;try{dt=4,eh(t,e,n,i)}finally{dt=r,ks.transition=s}}function eh(t,e,n,i){if(Hl){var r=vd(t,e,n,i);if(r===null)tu(t,e,i,Gl,n),Ip(t,i);else if(Cy(r,t,e,n,i))i.stopPropagation();else if(Ip(t,i),e&4&&-1<Ay.indexOf(t)){for(;r!==null;){var s=go(r);if(s!==null&&L0(s),s=vd(t,e,n,i),s===null&&tu(t,e,i,Gl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else tu(t,e,i,null,n)}}var Gl=null;function vd(t,e,n,i){if(Gl=null,t=Yf(i),t=Pr(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=b0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function k0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xy()){case Zf:return 1;case R0:return 4;case Bl:case vy:return 16;case N0:return 536870912;default:return 16}default:return 16}}var sr=null,th=null,_l=null;function B0(){if(_l)return _l;var t,e=th,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return _l=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Do(){return!0}function Dp(){return!1}function Pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Do:Dp,this.isPropagationStopped=Dp,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nh=Pn(Qs),mo=Tt({},Qs,{view:0,detail:0}),Iy=Pn(mo),Xc,qc,ua,xc=Tt({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ih,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ua&&(ua&&t.type==="mousemove"?(Xc=t.screenX-ua.screenX,qc=t.screenY-ua.screenY):qc=Xc=0,ua=t),Xc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),Up=Pn(xc),Ly=Tt({},xc,{dataTransfer:0}),Dy=Pn(Ly),Uy=Tt({},mo,{relatedTarget:0}),$c=Pn(Uy),Oy=Tt({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=Pn(Oy),ky=Tt({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),By=Pn(ky),zy=Tt({},Qs,{data:0}),Op=Pn(zy),Hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vy[t])?!!e[t]:!1}function ih(){return Wy}var jy=Tt({},mo,{key:function(t){if(t.key){var e=Hy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ih,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xy=Pn(jy),qy=Tt({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Pn(qy),$y=Tt({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ih}),Ky=Pn($y),Yy=Tt({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zy=Pn(Yy),Jy=Tt({},xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qy=Pn(Jy),eS=[9,13,27,32],rh=Oi&&"CompositionEvent"in window,Da=null;Oi&&"documentMode"in document&&(Da=document.documentMode);var tS=Oi&&"TextEvent"in window&&!Da,z0=Oi&&(!rh||Da&&8<Da&&11>=Da),kp=" ",Bp=!1;function H0(t,e){switch(t){case"keyup":return eS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function nS(t,e){switch(t){case"compositionend":return G0(e);case"keypress":return e.which!==32?null:(Bp=!0,kp);case"textInput":return t=e.data,t===kp&&Bp?null:t;default:return null}}function iS(t,e){if(ws)return t==="compositionend"||!rh&&H0(t,e)?(t=B0(),_l=th=sr=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z0&&e.locale!=="ko"?null:e.data;default:return null}}var rS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rS[t.type]:e==="textarea"}function V0(t,e,n,i){y0(i),e=Vl(e,"onChange"),0<e.length&&(n=new nh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ua=null,$a=null;function sS(t){e_(t,0)}function vc(t){var e=As(t);if(h0(e))return t}function aS(t,e){if(t==="change")return e}var W0=!1;if(Oi){var Kc;if(Oi){var Yc="oninput"in document;if(!Yc){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),Yc=typeof Hp.oninput=="function"}Kc=Yc}else Kc=!1;W0=Kc&&(!document.documentMode||9<document.documentMode)}function Gp(){Ua&&(Ua.detachEvent("onpropertychange",j0),$a=Ua=null)}function j0(t){if(t.propertyName==="value"&&vc($a)){var e=[];V0(e,$a,t,Yf(t)),w0(sS,e)}}function oS(t,e,n){t==="focusin"?(Gp(),Ua=e,$a=n,Ua.attachEvent("onpropertychange",j0)):t==="focusout"&&Gp()}function lS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc($a)}function cS(t,e){if(t==="click")return vc(e)}function uS(t,e){if(t==="input"||t==="change")return vc(e)}function dS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:dS;function Ka(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!td.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function Vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,e){var n=Vp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vp(n)}}function X0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q0(){for(var t=window,e=Ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ol(t.document)}return e}function sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fS(t){var e=q0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X0(n.ownerDocument.documentElement,n)){if(i!==null&&sh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wp(n,s);var a=Wp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hS=Oi&&"documentMode"in document&&11>=document.documentMode,bs=null,yd=null,Oa=null,Sd=!1;function jp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sd||bs==null||bs!==Ol(i)||(i=bs,"selectionStart"in i&&sh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oa&&Ka(Oa,i)||(Oa=i,i=Vl(yd,"onSelect"),0<i.length&&(e=new nh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=bs)))}function Uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},Zc={},$0={};Oi&&($0=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function yc(t){if(Zc[t])return Zc[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $0)return Zc[t]=e[n];return t}var K0=yc("animationend"),Y0=yc("animationiteration"),Z0=yc("animationstart"),J0=yc("transitionend"),Q0=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){Q0.set(t,e),Qr(e,[t])}for(var Jc=0;Jc<Xp.length;Jc++){var Qc=Xp[Jc],pS=Qc.toLowerCase(),mS=Qc[0].toUpperCase()+Qc.slice(1);vr(pS,"on"+mS)}vr(K0,"onAnimationEnd");vr(Y0,"onAnimationIteration");vr(Z0,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(J0,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function qp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,py(i,e,void 0,t),t.currentTarget=null}function e_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;qp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;qp(r,o,c),s=l}}}if(kl)throw t=gd,kl=!1,gd=null,t}function xt(t,e){var n=e[Td];n===void 0&&(n=e[Td]=new Set);var i=t+"__bubble";n.has(i)||(t_(e,t,2,!1),n.add(i))}function eu(t,e,n){var i=0;e&&(i|=4),t_(n,t,i,e)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Ya(t){if(!t[Oo]){t[Oo]=!0,l0.forEach(function(n){n!=="selectionchange"&&(gS.has(n)||eu(n,!1,t),eu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oo]||(e[Oo]=!0,eu("selectionchange",!1,e))}}function t_(t,e,n,i){switch(k0(e)){case 1:var r=Ny;break;case 4:r=Py;break;default:r=eh}n=r.bind(null,e,n,t),r=void 0,!md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Pr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}w0(function(){var c=s,u=Yf(n),h=[];e:{var f=Q0.get(t);if(f!==void 0){var p=nh,x=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":p=Xy;break;case"focusin":x="focus",p=$c;break;case"focusout":x="blur",p=$c;break;case"beforeblur":case"afterblur":p=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ky;break;case K0:case Y0:case Z0:p=Fy;break;case J0:p=Zy;break;case"scroll":p=Iy;break;case"wheel":p=Qy;break;case"copy":case"cut":case"paste":p=By;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fp}var M=(e&4)!==0,_=!M&&t==="scroll",d=M?f!==null?f+"Capture":null:f;M=[];for(var g=c,S;g!==null;){S=g;var v=S.stateNode;if(S.tag===5&&v!==null&&(S=v,d!==null&&(v=Wa(g,d),v!=null&&M.push(Za(g,v,S)))),_)break;g=g.return}0<M.length&&(f=new p(f,x,null,n,u),h.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==hd&&(x=n.relatedTarget||n.fromElement)&&(Pr(x)||x[Fi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Pr(x):null,x!==null&&(_=es(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(M=Up,v="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(M=Fp,v="onPointerLeave",d="onPointerEnter",g="pointer"),_=p==null?f:As(p),S=x==null?f:As(x),f=new M(v,g+"leave",p,n,u),f.target=_,f.relatedTarget=S,v=null,Pr(u)===c&&(M=new M(d,g+"enter",x,n,u),M.target=S,M.relatedTarget=_,v=M),_=v,p&&x)t:{for(M=p,d=x,g=0,S=M;S;S=rs(S))g++;for(S=0,v=d;v;v=rs(v))S++;for(;0<g-S;)M=rs(M),g--;for(;0<S-g;)d=rs(d),S--;for(;g--;){if(M===d||d!==null&&M===d.alternate)break t;M=rs(M),d=rs(d)}M=null}else M=null;p!==null&&$p(h,f,p,M,!1),x!==null&&_!==null&&$p(h,_,x,M,!0)}}e:{if(f=c?As(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=aS;else if(zp(f))if(W0)T=uS;else{T=lS;var A=oS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=cS);if(T&&(T=T(t,c))){V0(h,T,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&ld(f,"number",f.value)}switch(A=c?As(c):window,t){case"focusin":(zp(A)||A.contentEditable==="true")&&(bs=A,yd=c,Oa=null);break;case"focusout":Oa=yd=bs=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,jp(h,n,u);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":jp(h,n,u)}var C;if(rh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ws?H0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(z0&&n.locale!=="ko"&&(ws||y!=="onCompositionStart"?y==="onCompositionEnd"&&ws&&(C=B0()):(sr=u,th="value"in sr?sr.value:sr.textContent,ws=!0)),A=Vl(c,y),0<A.length&&(y=new Op(y,t,null,n,u),h.push({event:y,listeners:A}),C?y.data=C:(C=G0(n),C!==null&&(y.data=C)))),(C=tS?nS(t,n):iS(t,n))&&(c=Vl(c,"onBeforeInput"),0<c.length&&(u=new Op("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=C))}e_(h,e)})}function Za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wa(t,n),s!=null&&i.unshift(Za(t,s,r)),s=Wa(t,e),s!=null&&i.push(Za(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $p(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Wa(n,s),l!=null&&a.unshift(Za(n,l,o))):r||(l=Wa(n,s),l!=null&&a.push(Za(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var _S=/\r\n?/g,xS=/\u0000|\uFFFD/g;function Kp(t){return(typeof t=="string"?t:""+t).replace(_S,`
`).replace(xS,"")}function Fo(t,e,n){if(e=Kp(e),Kp(t)!==e&&n)throw Error(ae(425))}function Wl(){}var Ed=null,Md=null;function wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,Yp=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof Yp<"u"?function(t){return Yp.resolve(null).then(t).catch(SS)}:bd;function SS(t){setTimeout(function(){throw t})}function nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qa(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),ui="__reactFiber$"+ea,Ja="__reactProps$"+ea,Fi="__reactContainer$"+ea,Td="__reactEvents$"+ea,ES="__reactListeners$"+ea,MS="__reactHandles$"+ea;function Pr(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fi]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zp(t);t!==null;){if(n=t[ui])return n;t=Zp(t)}return e}t=n,n=t.parentNode}return null}function go(t){return t=t[ui]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Sc(t){return t[Ja]||null}var Ad=[],Cs=-1;function yr(t){return{current:t}}function vt(t){0>Cs||(t.current=Ad[Cs],Ad[Cs]=null,Cs--)}function gt(t,e){Cs++,Ad[Cs]=t.current,t.current=e}var gr={},an=yr(gr),_n=yr(!1),Hr=gr;function Ws(t,e){var n=t.type.contextTypes;if(!n)return gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function jl(){vt(_n),vt(an)}function Jp(t,e,n){if(an.current!==gr)throw Error(ae(168));gt(an,e),gt(_n,n)}function n_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,oy(t)||"Unknown",r));return Tt({},n,i)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Hr=an.current,gt(an,t),gt(_n,_n.current),!0}function Qp(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=n_(t,e,Hr),i.__reactInternalMemoizedMergedChildContext=t,vt(_n),vt(an),gt(an,t)):vt(_n),gt(_n,n)}var Ti=null,Ec=!1,iu=!1;function i_(t){Ti===null?Ti=[t]:Ti.push(t)}function wS(t){Ec=!0,i_(t)}function Sr(){if(!iu&&Ti!==null){iu=!0;var t=0,e=dt;try{var n=Ti;for(dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,Ec=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),C0(Zf,Sr),r}finally{dt=e,iu=!1}}return null}var Rs=[],Ns=0,ql=null,$l=0,Un=[],On=0,Gr=null,Ci=1,Ri="";function Cr(t,e){Rs[Ns++]=$l,Rs[Ns++]=ql,ql=t,$l=e}function r_(t,e,n){Un[On++]=Ci,Un[On++]=Ri,Un[On++]=Gr,Gr=t;var i=Ci;t=Ri;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ci=1<<32-Qn(e)+r|n<<r|i,Ri=s+t}else Ci=1<<s|n<<r|i,Ri=t}function ah(t){t.return!==null&&(Cr(t,1),r_(t,1,0))}function oh(t){for(;t===ql;)ql=Rs[--Ns],Rs[Ns]=null,$l=Rs[--Ns],Rs[Ns]=null;for(;t===Gr;)Gr=Un[--On],Un[On]=null,Ri=Un[--On],Un[On]=null,Ci=Un[--On],Un[On]=null}var Cn=null,Tn=null,yt=!1,Yn=null;function s_(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,Tn=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,Tn=null,!0):!1;default:return!1}}function Cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rd(t){if(yt){var e=Tn;if(e){var n=e;if(!em(t,e)){if(Cd(t))throw Error(ae(418));e=ur(n.nextSibling);var i=Cn;e&&em(t,e)?s_(i,n):(t.flags=t.flags&-4097|2,yt=!1,Cn=t)}}else{if(Cd(t))throw Error(ae(418));t.flags=t.flags&-4097|2,yt=!1,Cn=t}}}function tm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function ko(t){if(t!==Cn)return!1;if(!yt)return tm(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wd(t.type,t.memoizedProps)),e&&(e=Tn)){if(Cd(t))throw a_(),Error(ae(418));for(;e;)s_(t,e),e=ur(e.nextSibling)}if(tm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=Cn?ur(t.stateNode.nextSibling):null;return!0}function a_(){for(var t=Tn;t;)t=ur(t.nextSibling)}function js(){Tn=Cn=null,yt=!1}function lh(t){Yn===null?Yn=[t]:Yn.push(t)}var bS=Hi.ReactCurrentBatchConfig;function da(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Bo(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nm(t){var e=t._init;return e(t._payload)}function o_(t){function e(d,g){if(t){var S=d.deletions;S===null?(d.deletions=[g],d.flags|=16):S.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=pr(d,g),d.index=0,d.sibling=null,d}function s(d,g,S){return d.index=S,t?(S=d.alternate,S!==null?(S=S.index,S<g?(d.flags|=2,g):S):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,S,v){return g===null||g.tag!==6?(g=uu(S,d.mode,v),g.return=d,g):(g=r(g,S),g.return=d,g)}function l(d,g,S,v){var T=S.type;return T===Ms?u(d,g,S.props.children,v,S.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qi&&nm(T)===g.type)?(v=r(g,S.props),v.ref=da(d,g,S),v.return=d,v):(v=bl(S.type,S.key,S.props,null,d.mode,v),v.ref=da(d,g,S),v.return=d,v)}function c(d,g,S,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=du(S,d.mode,v),g.return=d,g):(g=r(g,S.children||[]),g.return=d,g)}function u(d,g,S,v,T){return g===null||g.tag!==7?(g=kr(S,d.mode,v,T),g.return=d,g):(g=r(g,S),g.return=d,g)}function h(d,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return g=uu(""+g,d.mode,S),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Co:return S=bl(g.type,g.key,g.props,null,d.mode,S),S.ref=da(d,null,g),S.return=d,S;case Es:return g=du(g,d.mode,S),g.return=d,g;case Qi:var v=g._init;return h(d,v(g._payload),S)}if(Ta(g)||aa(g))return g=kr(g,d.mode,S,null),g.return=d,g;Bo(d,g)}return null}function f(d,g,S,v){var T=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return T!==null?null:o(d,g,""+S,v);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Co:return S.key===T?l(d,g,S,v):null;case Es:return S.key===T?c(d,g,S,v):null;case Qi:return T=S._init,f(d,g,T(S._payload),v)}if(Ta(S)||aa(S))return T!==null?null:u(d,g,S,v,null);Bo(d,S)}return null}function p(d,g,S,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(S)||null,o(g,d,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Co:return d=d.get(v.key===null?S:v.key)||null,l(g,d,v,T);case Es:return d=d.get(v.key===null?S:v.key)||null,c(g,d,v,T);case Qi:var A=v._init;return p(d,g,S,A(v._payload),T)}if(Ta(v)||aa(v))return d=d.get(S)||null,u(g,d,v,T,null);Bo(g,v)}return null}function x(d,g,S,v){for(var T=null,A=null,C=g,y=g=0,w=null;C!==null&&y<S.length;y++){C.index>y?(w=C,C=null):w=C.sibling;var N=f(d,C,S[y],v);if(N===null){C===null&&(C=w);break}t&&C&&N.alternate===null&&e(d,C),g=s(N,g,y),A===null?T=N:A.sibling=N,A=N,C=w}if(y===S.length)return n(d,C),yt&&Cr(d,y),T;if(C===null){for(;y<S.length;y++)C=h(d,S[y],v),C!==null&&(g=s(C,g,y),A===null?T=C:A.sibling=C,A=C);return yt&&Cr(d,y),T}for(C=i(d,C);y<S.length;y++)w=p(C,d,y,S[y],v),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?y:w.key),g=s(w,g,y),A===null?T=w:A.sibling=w,A=w);return t&&C.forEach(function(I){return e(d,I)}),yt&&Cr(d,y),T}function M(d,g,S,v){var T=aa(S);if(typeof T!="function")throw Error(ae(150));if(S=T.call(S),S==null)throw Error(ae(151));for(var A=T=null,C=g,y=g=0,w=null,N=S.next();C!==null&&!N.done;y++,N=S.next()){C.index>y?(w=C,C=null):w=C.sibling;var I=f(d,C,N.value,v);if(I===null){C===null&&(C=w);break}t&&C&&I.alternate===null&&e(d,C),g=s(I,g,y),A===null?T=I:A.sibling=I,A=I,C=w}if(N.done)return n(d,C),yt&&Cr(d,y),T;if(C===null){for(;!N.done;y++,N=S.next())N=h(d,N.value,v),N!==null&&(g=s(N,g,y),A===null?T=N:A.sibling=N,A=N);return yt&&Cr(d,y),T}for(C=i(d,C);!N.done;y++,N=S.next())N=p(C,d,y,N.value,v),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?y:N.key),g=s(N,g,y),A===null?T=N:A.sibling=N,A=N);return t&&C.forEach(function(k){return e(d,k)}),yt&&Cr(d,y),T}function _(d,g,S,v){if(typeof S=="object"&&S!==null&&S.type===Ms&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Co:e:{for(var T=S.key,A=g;A!==null;){if(A.key===T){if(T=S.type,T===Ms){if(A.tag===7){n(d,A.sibling),g=r(A,S.props.children),g.return=d,d=g;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qi&&nm(T)===A.type){n(d,A.sibling),g=r(A,S.props),g.ref=da(d,A,S),g.return=d,d=g;break e}n(d,A);break}else e(d,A);A=A.sibling}S.type===Ms?(g=kr(S.props.children,d.mode,v,S.key),g.return=d,d=g):(v=bl(S.type,S.key,S.props,null,d.mode,v),v.ref=da(d,g,S),v.return=d,d=v)}return a(d);case Es:e:{for(A=S.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(d,g.sibling),g=r(g,S.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=du(S,d.mode,v),g.return=d,d=g}return a(d);case Qi:return A=S._init,_(d,g,A(S._payload),v)}if(Ta(S))return x(d,g,S,v);if(aa(S))return M(d,g,S,v);Bo(d,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,S),g.return=d,d=g):(n(d,g),g=uu(S,d.mode,v),g.return=d,d=g),a(d)):n(d,g)}return _}var Xs=o_(!0),l_=o_(!1),Kl=yr(null),Yl=null,Ps=null,ch=null;function uh(){ch=Ps=Yl=null}function dh(t){var e=Kl.current;vt(Kl),t._currentValue=e}function Nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){Yl=t,ch=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(ch!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(Yl===null)throw Error(ae(308));Ps=t,Yl.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Ir=null;function fh(t){Ir===null?Ir=[t]:Ir.push(t)}function c_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,fh(e)):(n.next=r.next,r.next=n),e.interleaved=n,ki(t,i)}function ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function hh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ki(t,n)}return r=i.interleaved,r===null?(e.next=e,fh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ki(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jf(t,n)}}function im(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zl(t,e,n,i){var r=t.updateQueue;er=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,M=o;switch(f=e,p=n,M.tag){case 1:if(x=M.payload,typeof x=="function"){h=x.call(p,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,f=typeof x=="function"?x.call(p,h,f):x,f==null)break e;h=Tt({},h,f);break e;case 2:er=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Wr|=a,t.lanes=a,t.memoizedState=h}}function rm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var _o={},mi=yr(_o),Qa=yr(_o),eo=yr(_o);function Lr(t){if(t===_o)throw Error(ae(174));return t}function ph(t,e){switch(gt(eo,e),gt(Qa,t),gt(mi,_o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ud(e,t)}vt(mi),gt(mi,e)}function qs(){vt(mi),vt(Qa),vt(eo)}function d_(t){Lr(eo.current);var e=Lr(mi.current),n=ud(e,t.type);e!==n&&(gt(Qa,t),gt(mi,n))}function mh(t){Qa.current===t&&(vt(mi),vt(Qa))}var Mt=yr(0);function Jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ru=[];function gh(){for(var t=0;t<ru.length;t++)ru[t]._workInProgressVersionPrimary=null;ru.length=0}var yl=Hi.ReactCurrentDispatcher,su=Hi.ReactCurrentBatchConfig,Vr=0,bt=null,Ot=null,Ht=null,Ql=!1,Fa=!1,to=0,TS=0;function Yt(){throw Error(ae(321))}function _h(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function xh(t,e,n,i,r,s){if(Vr=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?NS:PS,t=n(i,r),Fa){s=0;do{if(Fa=!1,to=0,25<=s)throw Error(ae(301));s+=1,Ht=Ot=null,e.updateQueue=null,yl.current=IS,t=n(i,r)}while(Fa)}if(yl.current=ec,e=Ot!==null&&Ot.next!==null,Vr=0,Ht=Ot=bt=null,Ql=!1,e)throw Error(ae(300));return t}function vh(){var t=to!==0;return to=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?bt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Hn(){if(Ot===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Ht===null?bt.memoizedState:Ht.next;if(e!==null)Ht=e,Ot=t;else{if(t===null)throw Error(ae(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Ht===null?bt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function no(t,e){return typeof e=="function"?e(t):e}function au(t){var e=Hn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Vr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,bt.lanes|=u,Wr|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ni(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,bt.lanes|=s,Wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ou(t){var e=Hn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ni(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function f_(){}function h_(t,e){var n=bt,i=Hn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,yh(g_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,io(9,m_.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ae(349));Vr&30||p_(n,e,r)}return r}function p_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m_(t,e,n,i){e.value=n,e.getSnapshot=i,__(e)&&x_(t)}function g_(t,e,n){return n(function(){__(e)&&x_(t)})}function __(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function x_(t){var e=ki(t,1);e!==null&&ei(e,t,1,-1)}function sm(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:t},e.queue=t,t=t.dispatch=RS.bind(null,bt,t),[e.memoizedState,t]}function io(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function v_(){return Hn().memoizedState}function Sl(t,e,n,i){var r=li();bt.flags|=t,r.memoizedState=io(1|e,n,void 0,i===void 0?null:i)}function Mc(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var a=Ot.memoizedState;if(s=a.destroy,i!==null&&_h(i,a.deps)){r.memoizedState=io(e,n,s,i);return}}bt.flags|=t,r.memoizedState=io(1|e,n,s,i)}function am(t,e){return Sl(8390656,8,t,e)}function yh(t,e){return Mc(2048,8,t,e)}function y_(t,e){return Mc(4,2,t,e)}function S_(t,e){return Mc(4,4,t,e)}function E_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M_(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4,4,E_.bind(null,e,t),n)}function Sh(){}function w_(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_h(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function b_(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_h(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function T_(t,e,n){return Vr&21?(ni(n,e)||(n=P0(),bt.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function AS(t,e){var n=dt;dt=n!==0&&4>n?n:4,t(!0);var i=su.transition;su.transition={};try{t(!1),e()}finally{dt=n,su.transition=i}}function A_(){return Hn().memoizedState}function CS(t,e,n){var i=hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},C_(t))R_(e,n);else if(n=c_(t,e,n,i),n!==null){var r=un();ei(n,t,i,r),N_(n,e,i)}}function RS(t,e,n){var i=hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(C_(t))R_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ni(o,a)){var l=e.interleaved;l===null?(r.next=r,fh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=c_(t,e,r,i),n!==null&&(r=un(),ei(n,t,i,r),N_(n,e,i))}}function C_(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function R_(t,e){Fa=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function N_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jf(t,n)}}var ec={readContext:zn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},NS={readContext:zn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,E_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=CS.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:sm,useDebugValue:Sh,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=sm(!1),e=t[0];return t=AS.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=li();if(yt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Vt===null)throw Error(ae(349));Vr&30||p_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,am(g_.bind(null,i,s,t),[t]),i.flags|=2048,io(9,m_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Vt.identifierPrefix;if(yt){var n=Ri,i=Ci;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=to++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PS={readContext:zn,useCallback:w_,useContext:zn,useEffect:yh,useImperativeHandle:M_,useInsertionEffect:y_,useLayoutEffect:S_,useMemo:b_,useReducer:au,useRef:v_,useState:function(){return au(no)},useDebugValue:Sh,useDeferredValue:function(t){var e=Hn();return T_(e,Ot.memoizedState,t)},useTransition:function(){var t=au(no)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:f_,useSyncExternalStore:h_,useId:A_,unstable_isNewReconciler:!1},IS={readContext:zn,useCallback:w_,useContext:zn,useEffect:yh,useImperativeHandle:M_,useInsertionEffect:y_,useLayoutEffect:S_,useMemo:b_,useReducer:ou,useRef:v_,useState:function(){return ou(no)},useDebugValue:Sh,useDeferredValue:function(t){var e=Hn();return Ot===null?e.memoizedState=t:T_(e,Ot.memoizedState,t)},useTransition:function(){var t=ou(no)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:f_,useSyncExternalStore:h_,useId:A_,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wc={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=hr(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(ei(e,t,r,i),vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=hr(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(ei(e,t,r,i),vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=hr(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=dr(t,r,i),e!==null&&(ei(e,t,i,n),vl(e,t,i))}};function om(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ka(n,i)||!Ka(r,s):!0}function P_(t,e,n){var i=!1,r=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=xn(e)?Hr:an.current,i=e.contextTypes,s=(i=i!=null)?Ws(t,r):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function lm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wc.enqueueReplaceState(e,e.state,null)}function Id(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},hh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=xn(e)?Hr:an.current,r.context=Ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wc.enqueueReplaceState(r,r.state,null),Zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function $s(t,e){try{var n="",i=e;do n+=ay(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function lu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LS=typeof WeakMap=="function"?WeakMap:Map;function I_(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nc||(nc=!0,Vd=i),Ld(t,e)},n}function L_(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ld(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function cm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new LS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=qS.bind(null,t,e,n),e.then(t,t))}function um(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var DS=Hi.ReactCurrentOwner,gn=!1;function cn(t,e,n,i){e.child=t===null?l_(e,null,n,i):Xs(e,t.child,n,i)}function fm(t,e,n,i,r){n=n.render;var s=e.ref;return Bs(e,r),i=xh(t,e,n,i,s,r),n=vh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(yt&&n&&ah(e),e.flags|=1,cn(t,e,i,r),e.child)}function hm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Rh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D_(t,e,s,i,r)):(t=bl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ka,n(a,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function D_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ka(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return Dd(t,e,n,i,r)}function U_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Ls,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(Ls,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(Ls,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(Ls,wn),wn|=i;return cn(t,e,r,n),e.child}function O_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dd(t,e,n,i,r){var s=xn(n)?Hr:an.current;return s=Ws(e,s),Bs(e,r),n=xh(t,e,n,i,s,r),i=vh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(yt&&i&&ah(e),e.flags|=1,cn(t,e,n,r),e.child)}function pm(t,e,n,i,r){if(xn(n)){var s=!0;Xl(e)}else s=!1;if(Bs(e,r),e.stateNode===null)El(t,e),P_(e,n,i),Id(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=xn(n)?Hr:an.current,c=Ws(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&lm(e,a,i,c),er=!1;var f=e.memoizedState;a.state=f,Zl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||_n.current||er?(typeof u=="function"&&(Pd(e,n,u,i),l=e.memoizedState),(o=er||om(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,u_(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:$n(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=xn(n)?Hr:an.current,l=Ws(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&lm(e,a,i,l),er=!1,f=e.memoizedState,a.state=f,Zl(e,i,a,r);var x=e.memoizedState;o!==h||f!==x||_n.current||er?(typeof p=="function"&&(Pd(e,n,p,i),x=e.memoizedState),(c=er||om(e,n,c,i,f,x,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Ud(t,e,n,i,s,r)}function Ud(t,e,n,i,r,s){O_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Qp(e,n,!1),Bi(t,e,s);i=e.stateNode,DS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,o,s)):cn(t,e,o,s),e.memoizedState=i.state,r&&Qp(e,n,!0),e.child}function F_(t){var e=t.stateNode;e.pendingContext?Jp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jp(t,e.context,!1),ph(t,e.containerInfo)}function mm(t,e,n,i,r){return js(),lh(r),e.flags|=256,cn(t,e,n,i),e.child}var Od={dehydrated:null,treeContext:null,retryLane:0};function Fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function k_(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(Mt,r&1),t===null)return Rd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ac(a,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fd(n),e.memoizedState=Od,t):Eh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return US(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=pr(o,s):(s=kr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Fd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Od,i}return s=t.child,t=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Eh(t,e){return e=Ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zo(t,e,n,i){return i!==null&&lh(i),Xs(e,t.child,null,n),t=Eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function US(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=lu(Error(ae(422))),zo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ac({mode:"visible",children:i.children},r,0,null),s=kr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,a),e.child.memoizedState=Fd(a),e.memoizedState=Od,s);if(!(e.mode&1))return zo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=lu(s,i,void 0),zo(t,e,a,i)}if(o=(a&t.childLanes)!==0,gn||o){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ki(t,r),ei(i,t,r,-1))}return Ch(),i=lu(Error(ae(421))),zo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=$S.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=ur(r.nextSibling),Cn=e,yt=!0,Yn=null,t!==null&&(Un[On++]=Ci,Un[On++]=Ri,Un[On++]=Gr,Ci=t.id,Ri=t.overflow,Gr=e),e=Eh(e,i.children),e.flags|=4096,e)}function gm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nd(t.return,e,n)}function cu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function B_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gm(t,n,e);else if(t.tag===19)gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cu(e,!0,n,null,s);break;case"together":cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OS(t,e,n){switch(e.tag){case 3:F_(e),js();break;case 5:d_(e);break;case 1:xn(e.type)&&Xl(e);break;case 4:ph(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(Kl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?k_(t,e,n):(gt(Mt,Mt.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);gt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return B_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,U_(t,e,n)}return Bi(t,e,n)}var z_,kd,H_,G_;z_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kd=function(){};H_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(mi.current);var s=null;switch(n){case"input":r=ad(t,r),i=ad(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=cd(t,r),i=cd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wl)}dd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ga.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ga.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};G_=function(t,e,n,i){n!==i&&(e.flags|=4)};function fa(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function FS(t,e,n){var i=e.pendingProps;switch(oh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return xn(e.type)&&jl(),Zt(e),null;case 3:return i=e.stateNode,qs(),vt(_n),vt(an),gh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ko(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Xd(Yn),Yn=null))),kd(t,e),Zt(e),null;case 5:mh(e);var r=Lr(eo.current);if(n=e.type,t!==null&&e.stateNode!=null)H_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Zt(e),null}if(t=Lr(mi.current),ko(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[Ja]=s,t=(e.mode&1)!==0,n){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<Ca.length;r++)xt(Ca[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":bp(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":Ap(i,s),xt("invalid",i)}dd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Fo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Fo(i.textContent,o,t),r=["children",""+o]):Ga.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&xt("scroll",i)}switch(n){case"input":Ro(i),Tp(i,s,!0);break;case"textarea":Ro(i),Cp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ui]=e,t[Ja]=i,z_(t,e,!1,!1),e.stateNode=t;e:{switch(a=fd(n,i),n){case"dialog":xt("cancel",t),xt("close",t),r=i;break;case"iframe":case"object":case"embed":xt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ca.length;r++)xt(Ca[r],t);r=i;break;case"source":xt("error",t),r=i;break;case"img":case"image":case"link":xt("error",t),xt("load",t),r=i;break;case"details":xt("toggle",t),r=i;break;case"input":bp(t,i),r=ad(t,i),xt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),xt("invalid",t);break;case"textarea":Ap(t,i),r=cd(t,i),xt("invalid",t);break;default:r=i}dd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?v0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Va(t,l):typeof l=="number"&&Va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",t):l!=null&&Xf(t,s,l,a))}switch(n){case"input":Ro(t),Tp(t,i,!1);break;case"textarea":Ro(t),Cp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Us(t,!!i.multiple,s,!1):i.defaultValue!=null&&Us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)G_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Lr(eo.current),Lr(mi.current),ko(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:Fo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return Zt(e),null;case 13:if(vt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Tn!==null&&e.mode&1&&!(e.flags&128))a_(),js(),e.flags|=98560,s=!1;else if(s=ko(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[ui]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else Yn!==null&&(Xd(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Ft===0&&(Ft=3):Ch())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return qs(),kd(t,e),t===null&&Ya(e.stateNode.containerInfo),Zt(e),null;case 10:return dh(e.type._context),Zt(e),null;case 17:return xn(e.type)&&jl(),Zt(e),null;case 19:if(vt(Mt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)fa(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Jl(t),a!==null){for(e.flags|=128,fa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Ks&&(e.flags|=128,i=!0,fa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Jl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!yt)return Zt(e),null}else 2*Pt()-s.renderingStartTime>Ks&&n!==1073741824&&(e.flags|=128,i=!0,fa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=Mt.current,gt(Mt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Ah(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function kS(t,e){switch(oh(e),e.tag){case 1:return xn(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qs(),vt(_n),vt(an),gh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mh(e),null;case 13:if(vt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(Mt),null;case 4:return qs(),null;case 10:return dh(e.type._context),null;case 22:case 23:return Ah(),null;case 24:return null;default:return null}}var Ho=!1,nn=!1,BS=typeof WeakSet=="function"?WeakSet:Set,be=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function Bd(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var _m=!1;function zS(t,e){if(Ed=Hl,t=q0(),sh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Md={focusedElem:t,selectionRange:n},Hl=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var M=x.memoizedProps,_=x.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?M:$n(e.type,M),_);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(v){Ct(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return x=_m,_m=!1,x}function ka(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Bd(e,n,s)}r=r.next}while(r!==i)}}function bc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function zd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function V_(t){var e=t.alternate;e!==null&&(t.alternate=null,V_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[Ja],delete e[Td],delete e[ES],delete e[MS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W_(t){return t.tag===5||t.tag===3||t.tag===4}function xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(i!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}function Gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}var Wt=null,Kn=!1;function qi(t,e,n){for(n=n.child;n!==null;)j_(t,e,n),n=n.sibling}function j_(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(_c,n)}catch{}switch(n.tag){case 5:nn||Is(n,e);case 6:var i=Wt,r=Kn;Wt=null,qi(t,e,n),Wt=i,Kn=r,Wt!==null&&(Kn?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(Kn?(t=Wt,n=n.stateNode,t.nodeType===8?nu(t.parentNode,n):t.nodeType===1&&nu(t,n),qa(t)):nu(Wt,n.stateNode));break;case 4:i=Wt,r=Kn,Wt=n.stateNode.containerInfo,Kn=!0,qi(t,e,n),Wt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Bd(n,e,a),r=r.next}while(r!==i)}qi(t,e,n);break;case 1:if(!nn&&(Is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Ct(n,e,o)}qi(t,e,n);break;case 21:qi(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,qi(t,e,n),nn=i):qi(t,e,n);break;default:qi(t,e,n)}}function vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BS),e.forEach(function(i){var r=KS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Wt=o.stateNode,Kn=!1;break e;case 3:Wt=o.stateNode.containerInfo,Kn=!0;break e;case 4:Wt=o.stateNode.containerInfo,Kn=!0;break e}o=o.return}if(Wt===null)throw Error(ae(160));j_(s,a,r),Wt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X_(e,t),e=e.sibling}function X_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),si(t),i&4){try{ka(3,t,t.return),bc(3,t)}catch(M){Ct(t,t.return,M)}try{ka(5,t,t.return)}catch(M){Ct(t,t.return,M)}}break;case 1:Wn(e,t),si(t),i&512&&n!==null&&Is(n,n.return);break;case 5:if(Wn(e,t),si(t),i&512&&n!==null&&Is(n,n.return),t.flags&32){var r=t.stateNode;try{Va(r,"")}catch(M){Ct(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&p0(r,s),fd(o,a);var c=fd(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?v0(r,h):u==="dangerouslySetInnerHTML"?_0(r,h):u==="children"?Va(r,h):Xf(r,u,h,c)}switch(o){case"input":od(r,s);break;case"textarea":m0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Us(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Us(r,!!s.multiple,s.defaultValue,!0):Us(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ja]=s}catch(M){Ct(t,t.return,M)}}break;case 6:if(Wn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Ct(t,t.return,M)}}break;case 3:if(Wn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qa(e.containerInfo)}catch(M){Ct(t,t.return,M)}break;case 4:Wn(e,t),si(t);break;case 13:Wn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bh=Pt())),i&4&&vm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||u,Wn(e,t),nn=c):Wn(e,t),si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(be=t,u=t.child;u!==null;){for(h=be=u;be!==null;){switch(f=be,p=f.child,f.tag){case 0:case 11:case 14:case 15:ka(4,f,f.return);break;case 1:Is(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(M){Ct(i,n,M)}}break;case 5:Is(f,f.return);break;case 22:if(f.memoizedState!==null){Sm(h);continue}}p!==null?(p.return=f,be=p):Sm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=x0("display",a))}catch(M){Ct(t,t.return,M)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){Ct(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),si(t),i&4&&vm(t);break;case 21:break;default:Wn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W_(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Va(r,""),i.flags&=-33);var s=xm(t);Gd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=xm(t);Hd(t,o,a);break;default:throw Error(ae(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HS(t,e,n){be=t,q_(t)}function q_(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ho;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||nn;o=Ho;var c=nn;if(Ho=a,(nn=l)&&!c)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?Em(r):l!==null?(l.return=a,be=l):Em(r);for(;s!==null;)be=s,q_(s),s=s.sibling;be=r,Ho=o,nn=c}ym(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):ym(t)}}function ym(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||bc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&qa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}nn||e.flags&512&&zd(e)}catch(f){Ct(e,e.return,f)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Sm(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Em(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{zd(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{zd(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var GS=Math.ceil,tc=Hi.ReactCurrentDispatcher,Mh=Hi.ReactCurrentOwner,Bn=Hi.ReactCurrentBatchConfig,nt=0,Vt=null,Ut=null,Xt=0,wn=0,Ls=yr(0),Ft=0,ro=null,Wr=0,Tc=0,wh=0,Ba=null,mn=null,bh=0,Ks=1/0,bi=null,nc=!1,Vd=null,fr=null,Go=!1,ar=null,ic=0,za=0,Wd=null,Ml=-1,wl=0;function un(){return nt&6?Pt():Ml!==-1?Ml:Ml=Pt()}function hr(t){return t.mode&1?nt&2&&Xt!==0?Xt&-Xt:bS.transition!==null?(wl===0&&(wl=P0()),wl):(t=dt,t!==0||(t=window.event,t=t===void 0?16:k0(t.type)),t):1}function ei(t,e,n,i){if(50<za)throw za=0,Wd=null,Error(ae(185));po(t,n,i),(!(nt&2)||t!==Vt)&&(t===Vt&&(!(nt&2)&&(Tc|=n),Ft===4&&ir(t,Xt)),vn(t,i),n===1&&nt===0&&!(e.mode&1)&&(Ks=Pt()+500,Ec&&Sr()))}function vn(t,e){var n=t.callbackNode;by(t,e);var i=zl(t,t===Vt?Xt:0);if(i===0)n!==null&&Pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Pp(n),e===1)t.tag===0?wS(Mm.bind(null,t)):i_(Mm.bind(null,t)),yS(function(){!(nt&6)&&Sr()}),n=null;else{switch(I0(i)){case 1:n=Zf;break;case 4:n=R0;break;case 16:n=Bl;break;case 536870912:n=N0;break;default:n=Bl}n=tx(n,$_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $_(t,e){if(Ml=-1,wl=0,nt&6)throw Error(ae(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var i=zl(t,t===Vt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rc(t,i);else{e=i;var r=nt;nt|=2;var s=Y_();(Vt!==t||Xt!==e)&&(bi=null,Ks=Pt()+500,Fr(t,e));do try{jS();break}catch(o){K_(t,o)}while(!0);uh(),tc.current=s,nt=r,Ut!==null?e=0:(Vt=null,Xt=0,e=Ft)}if(e!==0){if(e===2&&(r=_d(t),r!==0&&(i=r,e=jd(t,r))),e===1)throw n=ro,Fr(t,0),ir(t,i),vn(t,Pt()),n;if(e===6)ir(t,i);else{if(r=t.current.alternate,!(i&30)&&!VS(r)&&(e=rc(t,i),e===2&&(s=_d(t),s!==0&&(i=s,e=jd(t,s))),e===1))throw n=ro,Fr(t,0),ir(t,i),vn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Rr(t,mn,bi);break;case 3:if(ir(t,i),(i&130023424)===i&&(e=bh+500-Pt(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bd(Rr.bind(null,t,mn,bi),e);break}Rr(t,mn,bi);break;case 4:if(ir(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Qn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*GS(i/1960))-i,10<i){t.timeoutHandle=bd(Rr.bind(null,t,mn,bi),i);break}Rr(t,mn,bi);break;case 5:Rr(t,mn,bi);break;default:throw Error(ae(329))}}}return vn(t,Pt()),t.callbackNode===n?$_.bind(null,t):null}function jd(t,e){var n=Ba;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=rc(t,e),t!==2&&(e=mn,mn=n,e!==null&&Xd(e)),t}function Xd(t){mn===null?mn=t:mn.push.apply(mn,t)}function VS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~wh,e&=~Tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function Mm(t){if(nt&6)throw Error(ae(327));zs();var e=zl(t,0);if(!(e&1))return vn(t,Pt()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var i=_d(t);i!==0&&(e=i,n=jd(t,i))}if(n===1)throw n=ro,Fr(t,0),ir(t,e),vn(t,Pt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,mn,bi),vn(t,Pt()),null}function Th(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Ks=Pt()+500,Ec&&Sr())}}function jr(t){ar!==null&&ar.tag===0&&!(nt&6)&&zs();var e=nt;nt|=1;var n=Bn.transition,i=dt;try{if(Bn.transition=null,dt=1,t)return t()}finally{dt=i,Bn.transition=n,nt=e,!(nt&6)&&Sr()}}function Ah(){wn=Ls.current,vt(Ls)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vS(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(oh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&jl();break;case 3:qs(),vt(_n),vt(an),gh();break;case 5:mh(i);break;case 4:qs();break;case 13:vt(Mt);break;case 19:vt(Mt);break;case 10:dh(i.type._context);break;case 22:case 23:Ah()}n=n.return}if(Vt=t,Ut=t=pr(t.current,null),Xt=wn=e,Ft=0,ro=null,wh=Tc=Wr=0,mn=Ba=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ir=null}return t}function K_(t,e){do{var n=Ut;try{if(uh(),yl.current=ec,Ql){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(Vr=0,Ht=Ot=bt=null,Fa=!1,to=0,Mh.current=null,n===null||n.return===null){Ft=1,ro=e,Ut=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Xt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=um(a);if(p!==null){p.flags&=-257,dm(p,a,o,s,e),p.mode&1&&cm(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var M=new Set;M.add(l),e.updateQueue=M}else x.add(l);break e}else{if(!(e&1)){cm(s,c,e),Ch();break e}l=Error(ae(426))}}else if(yt&&o.mode&1){var _=um(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),dm(_,a,o,s,e),lh($s(l,o));break e}}s=l=$s(l,o),Ft!==4&&(Ft=2),Ba===null?Ba=[s]:Ba.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=I_(s,l,e);im(s,d);break e;case 1:o=l;var g=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(fr===null||!fr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=L_(s,o,e);im(s,v);break e}}s=s.return}while(s!==null)}J_(n)}catch(T){e=T,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function Y_(){var t=tc.current;return tc.current=ec,t===null?ec:t}function Ch(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Vt===null||!(Wr&268435455)&&!(Tc&268435455)||ir(Vt,Xt)}function rc(t,e){var n=nt;nt|=2;var i=Y_();(Vt!==t||Xt!==e)&&(bi=null,Fr(t,e));do try{WS();break}catch(r){K_(t,r)}while(!0);if(uh(),nt=n,tc.current=i,Ut!==null)throw Error(ae(261));return Vt=null,Xt=0,Ft}function WS(){for(;Ut!==null;)Z_(Ut)}function jS(){for(;Ut!==null&&!gy();)Z_(Ut)}function Z_(t){var e=ex(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?J_(t):Ut=e,Mh.current=null}function J_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kS(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Ut=null;return}}else if(n=FS(n,e,wn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Ft===0&&(Ft=5)}function Rr(t,e,n){var i=dt,r=Bn.transition;try{Bn.transition=null,dt=1,XS(t,e,n,i)}finally{Bn.transition=r,dt=i}return null}function XS(t,e,n,i){do zs();while(ar!==null);if(nt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ty(t,s),t===Vt&&(Ut=Vt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Go||(Go=!0,tx(Bl,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var a=dt;dt=1;var o=nt;nt|=4,Mh.current=null,zS(t,n),X_(n,t),fS(Md),Hl=!!Ed,Md=Ed=null,t.current=n,HS(n),_y(),nt=o,dt=a,Bn.transition=s}else t.current=n;if(Go&&(Go=!1,ar=t,ic=r),s=t.pendingLanes,s===0&&(fr=null),yy(n.stateNode),vn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nc)throw nc=!1,t=Vd,Vd=null,t;return ic&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===Wd?za++:(za=0,Wd=t):za=0,Sr(),null}function zs(){if(ar!==null){var t=I0(ic),e=Bn.transition,n=dt;try{if(Bn.transition=null,dt=16>t?16:t,ar===null)var i=!1;else{if(t=ar,ar=null,ic=0,nt&6)throw Error(ae(331));var r=nt;for(nt|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(be=c;be!==null;){var u=be;switch(u.tag){case 0:case 11:case 15:ka(8,u,s)}var h=u.child;if(h!==null)h.return=u,be=h;else for(;be!==null;){u=be;var f=u.sibling,p=u.return;if(V_(u),u===c){be=null;break}if(f!==null){f.return=p,be=f;break}be=p}}}var x=s.alternate;if(x!==null){var M=x.child;if(M!==null){x.child=null;do{var _=M.sibling;M.sibling=null,M=_}while(M!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ka(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,be=d;break e}be=s.return}}var g=t.current;for(be=g;be!==null;){a=be;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,be=S;else e:for(a=g;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:bc(9,o)}}catch(T){Ct(o,o.return,T)}if(o===a){be=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,be=v;break e}be=o.return}}if(nt=r,Sr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(_c,t)}catch{}i=!0}return i}finally{dt=n,Bn.transition=e}}return!1}function wm(t,e,n){e=$s(n,e),e=I_(t,e,1),t=dr(t,e,1),e=un(),t!==null&&(po(t,1,e),vn(t,e))}function Ct(t,e,n){if(t.tag===3)wm(t,t,n);else for(;e!==null;){if(e.tag===3){wm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=$s(n,t),t=L_(e,t,1),e=dr(e,t,1),t=un(),e!==null&&(po(e,1,t),vn(e,t));break}}e=e.return}}function qS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Xt&n)===n&&(Ft===4||Ft===3&&(Xt&130023424)===Xt&&500>Pt()-bh?Fr(t,0):wh|=n),vn(t,e)}function Q_(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=un();t=ki(t,e),t!==null&&(po(t,e,n),vn(t,n))}function $S(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Q_(t,n)}function KS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),Q_(t,n)}var ex;ex=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,OS(t,e,n);gn=!!(t.flags&131072)}else gn=!1,yt&&e.flags&1048576&&r_(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;El(t,e),t=e.pendingProps;var r=Ws(e,an.current);Bs(e,n),r=xh(null,e,i,t,r,n);var s=vh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,Xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hh(e),r.updater=wc,e.stateNode=r,r._reactInternals=e,Id(e,i,t,n),e=Ud(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&ah(e),cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(El(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ZS(i),t=$n(i,t),r){case 0:e=Dd(null,e,i,t,n);break e;case 1:e=pm(null,e,i,t,n);break e;case 11:e=fm(null,e,i,t,n);break e;case 14:e=hm(null,e,i,$n(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Dd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),pm(t,e,i,r,n);case 3:e:{if(F_(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,u_(t,e),Zl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=$s(Error(ae(423)),e),e=mm(t,e,i,n,r);break e}else if(i!==r){r=$s(Error(ae(424)),e),e=mm(t,e,i,n,r);break e}else for(Tn=ur(e.stateNode.containerInfo.firstChild),Cn=e,yt=!0,Yn=null,n=l_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(js(),i===r){e=Bi(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 5:return d_(e),t===null&&Rd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,wd(i,r)?a=null:s!==null&&wd(i,s)&&(e.flags|=32),O_(t,e),cn(t,e,a,n),e.child;case 6:return t===null&&Rd(e),null;case 13:return k_(t,e,n);case 4:return ph(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),fm(t,e,i,r,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(Kl,i._currentValue),i._currentValue=a,s!==null)if(ni(s.value,a)){if(s.children===r.children&&!_n.current){e=Bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Nd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,n),r=zn(r),i=i(r),e.flags|=1,cn(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),hm(t,e,i,r,n);case 15:return D_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),El(t,e),e.tag=1,xn(i)?(t=!0,Xl(e)):t=!1,Bs(e,n),P_(e,i,r),Id(e,i,r,n),Ud(null,e,i,!0,t,n);case 19:return B_(t,e,n);case 22:return U_(t,e,n)}throw Error(ae(156,e.tag))};function tx(t,e){return C0(t,e)}function YS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new YS(t,e,n,i)}function Rh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZS(t){if(typeof t=="function")return Rh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$f)return 11;if(t===Kf)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Rh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ms:return kr(n.children,r,s,e);case qf:a=8,r|=8;break;case nd:return t=kn(12,n,e,r|2),t.elementType=nd,t.lanes=s,t;case id:return t=kn(13,n,e,r),t.elementType=id,t.lanes=s,t;case rd:return t=kn(19,n,e,r),t.elementType=rd,t.lanes=s,t;case d0:return Ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c0:a=10;break e;case u0:a=9;break e;case $f:a=11;break e;case Kf:a=14;break e;case Qi:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=kn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function Ac(t,e,n,i){return t=kn(22,t,i,e),t.elementType=d0,t.lanes=n,t.stateNode={isHidden:!1},t}function uu(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function du(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jc(0),this.expirationTimes=jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nh(t,e,n,i,r,s,a,o,l){return t=new JS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hh(s),t}function QS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function nx(t){if(!t)return gr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(xn(n))return n_(t,n,e)}return e}function ix(t,e,n,i,r,s,a,o,l){return t=Nh(n,i,!0,t,r,s,a,o,l),t.context=nx(null),n=t.current,i=un(),r=hr(n),s=Pi(i,r),s.callback=e??null,dr(n,s,r),t.current.lanes=r,po(t,r,i),vn(t,i),t}function Cc(t,e,n,i){var r=e.current,s=un(),a=hr(r);return n=nx(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=dr(r,e,a),t!==null&&(ei(t,r,a,s),vl(t,r,a)),a}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ph(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function eE(){return null}var rx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ih(t){this._internalRoot=t}Rc.prototype.render=Ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Cc(t,e,null,null)};Rc.prototype.unmount=Ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){Cc(null,t,null,null)}),e[Fi]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=U0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&F0(t)}};function Lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function tE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=sc(a);s.call(c)}}var a=ix(e,i,t,0,null,!1,!1,"",Tm);return t._reactRootContainer=a,t[Fi]=a.current,Ya(t.nodeType===8?t.parentNode:t),jr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=sc(l);o.call(c)}}var l=Nh(t,0,!1,null,null,!1,!1,"",Tm);return t._reactRootContainer=l,t[Fi]=l.current,Ya(t.nodeType===8?t.parentNode:t),jr(function(){Cc(e,l,n,i)}),l}function Pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=sc(a);o.call(l)}}Cc(e,a,t,r)}else a=tE(n,e,t,r,i);return sc(a)}L0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Aa(e.pendingLanes);n!==0&&(Jf(e,n|1),vn(e,Pt()),!(nt&6)&&(Ks=Pt()+500,Sr()))}break;case 13:jr(function(){var i=ki(t,1);if(i!==null){var r=un();ei(i,t,1,r)}}),Ph(t,1)}};Qf=function(t){if(t.tag===13){var e=ki(t,134217728);if(e!==null){var n=un();ei(e,t,134217728,n)}Ph(t,134217728)}};D0=function(t){if(t.tag===13){var e=hr(t),n=ki(t,e);if(n!==null){var i=un();ei(n,t,e,i)}Ph(t,e)}};U0=function(){return dt};O0=function(t,e){var n=dt;try{return dt=t,e()}finally{dt=n}};pd=function(t,e,n){switch(e){case"input":if(od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Sc(i);if(!r)throw Error(ae(90));h0(i),od(i,r)}}}break;case"textarea":m0(t,n);break;case"select":e=n.value,e!=null&&Us(t,!!n.multiple,e,!1)}};E0=Th;M0=jr;var nE={usingClientEntryPoint:!1,Events:[go,As,Sc,y0,S0,Th]},ha={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iE={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=T0(t),t===null?null:t.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||eE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{_c=Vo.inject(iE),pi=Vo}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nE;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(e))throw Error(ae(200));return QS(t,e,null,n)};Nn.createRoot=function(t,e){if(!Lh(t))throw Error(ae(299));var n=!1,i="",r=rx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nh(t,1,!1,null,null,n,!1,i,r),t[Fi]=e.current,Ya(t.nodeType===8?t.parentNode:t),new Ih(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=T0(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return jr(t)};Nn.hydrate=function(t,e,n){if(!Nc(e))throw Error(ae(200));return Pc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!Lh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=rx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ix(e,null,t,1,n??null,r,!1,s,a),t[Fi]=e.current,Ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Rc(e)};Nn.render=function(t,e,n){if(!Nc(e))throw Error(ae(200));return Pc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!Nc(t))throw Error(ae(40));return t._reactRootContainer?(jr(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1};Nn.unstable_batchedUpdates=Th;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Pc(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sx)}catch(t){console.error(t)}}sx(),s0.exports=Nn;var rE=s0.exports,Am=rE;ed.createRoot=Am.createRoot,ed.hydrateRoot=Am.hydrateRoot;function sE({onClose:t,onReset:e,isFullScreen:n,onToggleFullScreen:i}){return m.jsxs("div",{className:"chat-header",children:[m.jsxs("div",{className:"chat-header-info",children:[m.jsxs("div",{className:"chat-avatar-wrapper",children:[m.jsx("span",{children:"🎓"}),m.jsx("span",{className:"chat-status-dot",title:"Campus Knowledge Base Active"})]}),m.jsxs("div",{children:[m.jsx("div",{className:"chat-header-title",children:m.jsx("span",{children:"MIT Campus Assistant"})}),m.jsx("div",{className:"chat-header-subtitle",children:"Madras Institute of Technology • Anna University"})]})]}),m.jsxs("div",{className:"chat-header-actions",children:[i&&m.jsx("button",{className:"icon-btn",onClick:i,title:n?"Exit full screen":"Expand to full screen","aria-label":n?"Exit full screen":"Expand to full screen",children:n?"🗗":"🗖"}),m.jsx("button",{className:"icon-btn",onClick:e,title:"Reset conversation","aria-label":"Reset conversation",children:"↺"}),m.jsx("button",{className:"icon-btn",onClick:t,title:"Close chat","aria-label":"Close chat",children:"✕"})]})]})}function aE(t){return t?t.split(`
`).map((n,i)=>{const r=[];let s=0;const a=/\*\*(.*?)\*\*/g;let o,l=0;for(;(o=a.exec(n))!==null;)o.index>l&&r.push(m.jsx("span",{children:n.substring(l,o.index)},`${i}-${s++}`)),r.push(m.jsx("strong",{style:{fontWeight:700,color:"#0f172a"},children:o[1]},`${i}-${s++}`)),l=a.lastIndex;l<n.length&&r.push(m.jsx("span",{children:n.substring(l)},`${i}-${s++}`));const c=n.trim().startsWith("•")||n.trim().startsWith("-");return m.jsx("div",{style:{paddingLeft:c?"8px":"0px",marginBottom:n.trim()===""?"6px":"2px"},children:r.length>0?r:m.jsx("span",{children:" "})},i)}):null}function oE(t){try{return new Date(t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return""}}function lE({message:t}){const e=t.role==="bot";return m.jsxs("div",{className:`message-row ${e?"bot-row":"user-row"}`,children:[e?m.jsx("div",{className:"bot-icon",title:"MIT Assistant",children:"🎓"}):m.jsx("div",{className:"user-icon",title:"You",children:"👤"}),m.jsxs("div",{className:`message-bubble ${e?"bot-bubble":"user-bubble"} ${t.isError?"error-bubble":""}`,children:[m.jsx("div",{className:"message-text",children:aE(t.text)}),m.jsxs("div",{className:"message-meta",children:[e&&t.category&&m.jsx("span",{className:"message-badge",children:t.category}),t.timestamp&&m.jsx("span",{className:"message-time",children:oE(t.timestamp)})]}),e&&t.matched===!1&&!t.isError&&m.jsxs("div",{className:"no-match-hint",children:[m.jsx("span",{children:"💡"}),m.jsx("span",{children:"Try browsing the quick categories above or asking about specific departments, cutoffs, or documents."})]})]})]})}function cE(){return m.jsxs("div",{className:"message-row bot-row","aria-live":"polite","aria-label":"Assistant is searching",children:[m.jsx("div",{className:"bot-icon",children:"🎓"}),m.jsxs("div",{className:"message-bubble bot-bubble loading-bubble",children:[m.jsx("span",{className:"dot"}),m.jsx("span",{className:"dot"}),m.jsx("span",{className:"dot"}),m.jsx("span",{className:"loading-label",children:"Searching MIT knowledge base..."})]})]})}function uE({messages:t,loading:e}){const n=Ce.useRef(null);return Ce.useEffect(()=>{var i;(i=n.current)==null||i.scrollIntoView({behavior:"smooth"})},[t,e]),m.jsxs("div",{className:"message-list",children:[t.map(i=>m.jsx(lE,{message:i},i.id)),e&&m.jsx(cE,{}),m.jsx("div",{ref:n})]})}const dE=["Departments","Required Documents","Facilities","Offices","Canteen","Admission","Hostel","Transport","Contact","General"],Cm={id:"welcome",role:"bot",text:`Welcome to MIT Anna University Campus Assistant 👋

I can help you with information about departments, admission, required documents, facilities, canteen, hostel, transport, and more.

How can I help you today?`,timestamp:new Date().toISOString()},fE="http://localhost:8000",hE="http://localhost:5173",pE={Departments:"🏛️","Required Documents":"📑",Facilities:"🏢",Offices:"📍",Canteen:"🍽️",Admission:"🎓",Hostel:"🛏️",Transport:"🚌",Contact:"📞",General:"ℹ️",Fees:"💳"};function mE({onSelect:t,disabled:e}){return m.jsxs("div",{className:"quick-replies",children:[m.jsx("div",{className:"quick-replies-header",children:m.jsxs("div",{className:"quick-replies-label",children:[m.jsx("span",{children:"⚡"}),m.jsx("span",{children:"Quick Topic Shortcuts"})]})}),m.jsx("div",{className:"quick-replies-buttons",children:dE.map(n=>m.jsxs("button",{className:"quick-reply-btn",onClick:()=>t(n),disabled:e,type:"button",children:[m.jsx("span",{style:{fontSize:"13px"},children:pE[n]||"•"}),m.jsx("span",{children:n})]},n))})]})}function gE({onSend:t,disabled:e}){const[n,i]=Ce.useState(""),r=s=>{s.preventDefault(),!(!n.trim()||e)&&(t(n.trim()),i(""))};return m.jsxs("div",{className:"chat-input-container",children:[m.jsxs("form",{className:"chat-input-form",onSubmit:r,children:[m.jsx("div",{className:"chat-input-wrapper",children:m.jsx("input",{className:"chat-input",type:"text",placeholder:"Type your question (e.g., 'documents for admission', 'CSE department location', 'today menu')...",value:n,onChange:s=>i(s.target.value),disabled:e,autoComplete:"off","aria-label":"Your campus query"})}),m.jsxs("button",{className:"send-btn",type:"submit",disabled:e||!n.trim(),"aria-label":"Send query",children:[m.jsx("span",{children:"Send"}),m.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),m.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})]})]}),m.jsxs("div",{className:"input-hint",children:["💡 Press ",m.jsx("strong",{children:"Enter"})," to submit your query • Live MIT knowledge base search"]})]})}function _E({message:t}){return t?m.jsxs("div",{className:"error-banner",role:"alert",children:[m.jsx("span",{children:"⚠️"}),m.jsx("span",{children:t})]}):null}function ax(t,e){return function(){return t.apply(e,arguments)}}const{toString:xE}=Object.prototype,{getPrototypeOf:_r}=Object,{iterator:xo,toStringTag:ox}=Symbol,so=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),lx=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),cx=(t,e,n)=>t===Object.prototype||!n&&e===null,vE=t=>{if(!Object.isExtensible(t))return!1;const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(t)),e.every(n=>{if(lx(n))return!1;const i=Object.getOwnPropertyDescriptor(t,n);return!!i&&i.configurable&&i.writable===!0})},ao=(t,e)=>{let n=t;const i=[];for(;n!=null;){if(i.indexOf(n)!==-1)return!1;i.push(n);const r=_r(n);if(cx(n,r,n===t))return!1;if(so(n,e))return!0;n=r}return!1},yE=(t,e)=>t!=null&&ao(t,e)?t[e]:void 0,SE=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const e=_r(t);if(e===null&&vE(t))return t;const n=Object.create(null),i=Object.create(null),r=[];let s=t;for(;s!=null&&r.indexOf(s)===-1;){r.push(s);const a=s===t?e:_r(s);if(cx(s,a,s===t))break;const o=Object.getOwnPropertyNames(s);Object.getOwnPropertySymbols&&o.push(...Object.getOwnPropertySymbols(s));for(const l of o)lx(l)||so(i,l)||(n[l]=t[l],i[l]=!0);s=a}return n},Dh=(t=>e=>{const n=xE.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Gn=t=>(t=t.toLowerCase(),e=>Dh(e)===t),Ic=t=>e=>typeof e===t,{isArray:Xr}=Array,qr=Ic("undefined");function ta(t){return t!==null&&!qr(t)&&t.constructor!==null&&!qr(t.constructor)&&yn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ux=Gn("ArrayBuffer");function EE(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ux(t.buffer),e}const ME=Ic("string"),yn=Ic("function"),dx=Ic("number"),na=t=>t!==null&&typeof t=="object",wE=t=>t===!0||t===!1,Tl=t=>{if(!na(t))return!1;const e=_r(t);return(e===null||e===Object.prototype||_r(e)===null)&&!ao(t,ox)&&!ao(t,xo)},bE=t=>{if(!na(t)||ta(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},TE=Gn("Date"),AE=Gn("File"),CE=t=>!!(t&&typeof t.uri<"u"),RE=t=>t&&typeof t.getParts<"u",NE=Gn("Blob"),PE=Gn("FileList"),IE=Gn("Set"),LE=t=>na(t)&&yn(t.pipe);function DE(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Rm=DE(),Nm=typeof Rm.FormData<"u"?Rm.FormData:void 0,UE=t=>{if(!t)return!1;if(Nm&&t instanceof Nm)return!0;const e=_r(t);if(!e||e===Object.prototype||!yn(t.append))return!1;const n=Dh(t);return n==="formdata"||n==="object"&&yn(t.toString)&&t.toString()==="[object FormData]"},OE=Gn("URLSearchParams"),[FE,kE,BE,zE]=["ReadableStream","Request","Response","Headers"].map(Gn),HE=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Xr(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(ta(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,t[o],o,t)}}function fx(t,e){if(ta(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hx=t=>!qr(t)&&t!==Dr;function qd(...t){const{caseless:e,skipUndefined:n}=hx(this)&&this||{},i={},r=(s,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const o=e&&typeof a=="string"&&fx(i,a)||a,l=so(i,o)?i[o]:void 0;Tl(l)&&Tl(s)?i[o]=qd(l,s):Tl(s)?i[o]=qd({},s):Xr(s)?i[o]=s.slice():(!n||!qr(s))&&(i[o]=s)};for(let s=0,a=t.length;s<a;s++){const o=t[s];if(!o||ta(o)||(vo(o,r),typeof o!="object"||Xr(o)))continue;const l=Object.getOwnPropertySymbols(o);for(let c=0;c<l.length;c++){const u=l[c];QE.call(o,u)&&r(o[u],u)}}return i}const GE=(t,e,n,{allOwnKeys:i}={})=>(vo(e,(r,s)=>{n&&yn(r)?Object.defineProperty(t,s,{__proto__:null,value:ax(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),VE=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),WE=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},jE=(t,e,n,i)=>{let r,s,a;const o={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)a=r[s],(!i||i(a,t,e))&&!o[a]&&(e[a]=t[a],o[a]=!0);t=n!==!1&&_r(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},XE=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},qE=t=>{if(!t)return null;if(Xr(t))return t;let e=t.length;if(!dx(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},$E=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&_r(Uint8Array)),KE=(t,e)=>{const i=(t&&t[xo]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},YE=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},ZE=Gn("HTMLFormElement"),JE=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:QE}=Object.prototype,eM=Gn("RegExp"),px=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};vo(n,(r,s)=>{let a;(a=e(r,s,t))!==!1&&(i[s]=a||r)}),Object.defineProperties(t,i)},tM=t=>{px(t,(e,n)=>{if(yn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(yn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},nM=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Xr(t)?i(t):i(String(t).split(e)),n},iM=()=>{},rM=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function sM(t){return!!(t&&yn(t.append)&&t[ox]==="FormData"&&t[xo])}const aM=t=>{const e=new WeakSet,n=i=>{if(na(i)){if(e.has(i))return;if(ta(i))return i;if(!("toJSON"in i)){e.add(i);let r;if(IE(i)){r=[];for(const s of i){const a=n(s);!qr(a)&&r.push(a)}}else r=Xr(i)?[]:{},vo(i,(s,a)=>{const o=n(s);!qr(o)&&(r[a]=o)});return e.delete(i),r}}return i};return n(t)},oM=Gn("AsyncFunction"),lM=t=>t&&(na(t)||yn(t))&&yn(t.then)&&yn(t.catch),mx=((t,e)=>t?setImmediate:e?((n,i)=>(Dr.addEventListener("message",({source:r,data:s})=>{r===Dr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Dr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",yn(Dr.postMessage)),cM=typeof queueMicrotask<"u"?queueMicrotask.bind(Dr):typeof process<"u"&&process.nextTick||mx,gx=t=>t!=null&&yn(t[xo]),uM=t=>t!=null&&ao(t,xo)&&gx(t),L={isArray:Xr,isArrayBuffer:ux,isBuffer:ta,isFormData:UE,isArrayBufferView:EE,isString:ME,isNumber:dx,isBoolean:wE,isObject:na,isPlainObject:Tl,isEmptyObject:bE,isReadableStream:FE,isRequest:kE,isResponse:BE,isHeaders:zE,isUndefined:qr,isDate:TE,isFile:AE,isReactNativeBlob:CE,isReactNative:RE,isBlob:NE,isRegExp:eM,isFunction:yn,isStream:LE,isURLSearchParams:OE,isTypedArray:$E,isFileList:PE,forEach:vo,merge:qd,extend:GE,trim:HE,stripBOM:VE,inherits:WE,toFlatObject:jE,kindOf:Dh,kindOfTest:Gn,endsWith:XE,toArray:qE,forEachEntry:KE,matchAll:YE,isHTMLForm:ZE,hasOwnProperty:so,hasOwnProp:so,hasOwnInPrototypeChain:ao,getSafeProp:yE,toSafeFlatObject:SE,reduceDescriptors:px,freezeMethods:tM,toObjectSet:nM,toCamelCase:JE,noop:iM,toFiniteNumber:rM,findKey:fx,global:Dr,isContextDefined:hx,isSpecCompliantForm:sM,toJSONObject:aM,isAsyncFn:oM,isThenable:lM,setImmediate:mx,asap:cM,isIterable:gx,isSafeIterable:uM},dM=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fM=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim();const o=L.hasOwnProp(e,n);!n||o&&L.hasOwnProp(dM,n)||(n==="set-cookie"?o?e[n].push(i):e[n]=[i]:e[n]=o?e[n]+", "+i:i)}),e};function hM(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const pM=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),mM=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Uh(t,e){return L.isArray(t)?t.map(n=>Uh(n,e)):hM(String(t).replace(e,""))}const gM=t=>Uh(t,pM),_M=t=>Uh(t,mM);function _x(t){const e=Object.create(null);return L.forEach(t.toJSON(),(n,i)=>{e[i]=_M(n)}),e}const Pm=Symbol("internals");function pa(t){return t&&String(t).trim().toLowerCase()}function Al(t){return t===!1||t==null?t:L.isArray(t)?t.map(Al):gM(String(t))}function xM(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const vM=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function fu(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function yM(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let i=1;i<e;i++){const r=t.charCodeAt(i);if(r===34||r===92&&(i+=1,i>=e))return t;n+=t[i]}return n}function SM(t){const e=Object.create(null),n=String(t);let i=0,r=!1,s=!1;function a(o){const l=fu(n.slice(i,o)),c=l.indexOf("=");if(c<1)return;const u=fu(l.slice(0,c));if(!vM.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=fu(l.slice(c+1));e[h]=yM(f)}for(let o=0;o<n.length;o++){const l=n.charCodeAt(o);r?s?s=!1:l===92?s=!0:l===34&&(r=!1):l===34?r=!0:(l===44||l===59)&&(a(o),i=o+1)}return a(n.length),e}const EM=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function hu(t,e,n,i,r){if(L.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!L.isString(e)){if(L.isString(i))return e.indexOf(i)!==-1;if(L.isRegExp(i))return i.test(e)}}function MM(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function wM(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let sn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(o,l,c){const u=pa(l);if(!u)return;const h=L.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||l]=Al(o))}const a=(o,l)=>L.forEach(o,(c,u)=>s(c,u,l));if(L.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(L.isString(e)&&(e=e.trim())&&!EM(e))a(fM(e),n);else if(L.isObject(e)&&L.isSafeIterable(e)){let o=Object.create(null),l,c;for(const u of e){if(!L.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],L.hasOwnProp(o,c)?(l=o[c],o[c]=L.isArray(l)?[...l,u[1]]:[l,u[1]]):o[c]=u[1]}a(o,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=pa(e),e){const i=L.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return xM(r);if(L.isFunction(n))return n.call(this,r,i);if(L.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=pa(e),e){const i=L.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||hu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(a){if(a=pa(a),a){const o=L.findKey(i,a);o&&(!n||hu(i,i[o],o,n))&&(delete i[o],r=!0)}}return L.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||hu(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return L.forEach(this,(r,s)=>{const a=L.findKey(i,s);if(a){n[a]=Al(r),delete n[s];return}const o=e?MM(s):String(s).trim();o!==s&&delete n[s],n[o]=Al(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&L.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return L.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return SM(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Pm]=this[Pm]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=pa(a);i[o]||(wM(r,a),i[o]=!0)}return L.isArray(e)?e.forEach(s):s(e),this}};sn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(sn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});L.freezeMethods(sn);const ac="[REDACTED ****]";function bM(t){if(L.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(L.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function TM(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||L.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof sn&&(s=s.toJSON()),i.push(s);let a;if(L.isArray(s))a=[],s.forEach((o,l)=>{const c=r(o);L.isUndefined(c)||(a[l]=c)});else{if(!L.isPlainObject(s)&&bM(s))return i.pop(),s;a=Object.create(null);for(const[o,l]of Object.entries(s)){const c=n.has(o.toLowerCase())?ac:r(l);L.isUndefined(c)||(a[o]=c)}}return i.pop(),a};return r(t)}function Im(t){try{return String(t)}catch{return""}}function AM(t){return t.errors.map(n=>{try{return n&&n.message?Im(n.message):Im(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}let he=class xx extends Error{static from(e,n,i,r,s,a){let o=e.message;!o&&L.isArray(e.errors)&&e.errors.length&&(o=AM(e));const l=new xx(o,n||e.code,i,r,s);return Object.defineProperty(l,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),l.name=e.name,e.status!=null&&l.status==null&&(l.status=e.status),a&&Object.assign(l,a),l}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&L.hasOwnProp(e,"redact")?e.redact:void 0,i=L.isArray(n)&&n.length>0?TM(e,n):L.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};he.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";he.ERR_BAD_OPTION="ERR_BAD_OPTION";he.ECONNABORTED="ECONNABORTED";he.ETIMEDOUT="ETIMEDOUT";he.ECONNREFUSED="ECONNREFUSED";he.ERR_NETWORK="ERR_NETWORK";he.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";he.ERR_DEPRECATED="ERR_DEPRECATED";he.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";he.ERR_BAD_REQUEST="ERR_BAD_REQUEST";he.ERR_CANCELED="ERR_CANCELED";he.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";he.ERR_INVALID_URL="ERR_INVALID_URL";he.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const CM=null,vx=100;function $d(t){return L.isPlainObject(t)||L.isArray(t)}function yx(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function pu(t,e,n){return t?t.concat(e).map(function(r,s){return r=yx(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function RM(t){return L.isArray(t)&&!t.some($d)}const NM=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function Lc(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(g,S)=>{const v=L.getSafeProp(n,g);return L.isUndefined(v)?S:v},r=i("metaTokens",!0),s=i("visitor")||M,a=i("dots",!1),o=i("indexes",!1),l=i("Blob")||typeof Blob<"u"&&Blob,c=i("maxDepth",vx),u=l&&L.isSpecCompliantForm(e),h=[];if(!L.isFunction(s))throw new TypeError("visitor must be a function");function f(g){if(g===null)return"";if(L.isDate(g))return g.toISOString();if(L.isBoolean(g))return g.toString();if(!u&&L.isBlob(g))throw new he("Blob is not supported. Use a Buffer instead.");if(L.isArrayBuffer(g)||L.isTypedArray(g)){if(u&&typeof l=="function")return new l([g]);throw new he("Blob is not supported. Use a Buffer instead.",he.ERR_NOT_SUPPORT)}return g}function p(g){if(g>c)throw new he("Object is too deeply nested ("+g+" levels). Max depth: "+c,he.ERR_FORM_DATA_DEPTH_EXCEEDED)}function x(g,S){if(c===1/0)return JSON.stringify(g);const v=[];return JSON.stringify(g,function(A,C){if(!L.isObject(C))return C;for(;v.length&&v[v.length-1]!==this;)v.pop();return v.push(C),p(S+v.length-1),C})}function M(g,S,v){let T=g;if(L.isReactNative(e)&&L.isReactNativeBlob(g))return e.append(pu(v,S,a),f(g)),!1;if(g&&!v&&typeof g=="object"){if(L.endsWith(S,"{}"))S=r?S:S.slice(0,-2),g=x(g,1);else if(L.isArray(g)&&RM(g)||(L.isFileList(g)||L.endsWith(S,"[]"))&&(T=L.toArray(g)))return S=yx(S),T.forEach(function(C,y){!(L.isUndefined(C)||C===null)&&e.append(o===!0?pu([S],y,a):o===null?S:S+"[]",f(C))}),!1}return $d(g)?!0:(e.append(pu(v,S,a),f(g)),!1)}const _=Object.assign(NM,{defaultVisitor:M,convertValue:f,isVisitable:$d});function d(g,S,v=0){if(!L.isUndefined(g)){if(p(v),h.indexOf(g)!==-1)throw new Error("Circular reference detected in "+S.join("."));h.push(g),L.forEach(g,function(A,C){(!(L.isUndefined(A)||A===null)&&s.call(e,A,L.isString(C)?C.trim():C,S,_))===!0&&d(A,S?S.concat(C):[C],v+1)}),h.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return d(t),e}function Lm(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Oh(t,e){this._pairs=[],t&&Lc(t,this,e)}const Sx=Oh.prototype;Sx.append=function(e,n){this._pairs.push([e,n])};Sx.toString=function(e){const n=e?i=>e.call(this,i,Lm):Lm;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function PM(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ex(t,e,n){if(!e)return t;t=t||"";const i=L.isFunction(n)?{serialize:n}:n,r=L.getSafeProp(i,"encode")||PM,s=L.getSafeProp(i,"serialize");let a;if(s?a=s(e,i):a=L.isURLSearchParams(e)?e.toString():new Oh(e,i).toString(r),a){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}const ma=Symbol("internals");function Mx(t){return t?t.length:0}function Dm(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function ga(t,e){const n=t.handlers,i=Mx(n);n!==e.handlersRef?(e.handlersRef=n,e.handlerEntries.clear()):i!==e.handlersLength&&(i?e.handlerEntries.forEach(function(s,a){n[s.index]!==s.handler&&e.handlerEntries.delete(a)}):e.handlerEntries.clear()),e.handlersLength=i}class Um{constructor(){this.handlers=[],this[ma]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,n,i){const r={fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},s=this[ma];this.handlers==null&&(this.handlers=[]),ga(this,s);const a=s.nextId++;return this.handlers.push(r),s.handlerEntries.set(a,{handler:r,index:this.handlers.length-1}),s.handlersLength=this.handlers.length,a}eject(e){const n=this[ma];ga(this,n);const i=n.handlerEntries.get(e);if(i){if(n.handlerEntries.delete(e),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,n.iterationDepth||(Dm(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],ga(this,this[ma]))}forEach(e){const n=this[ma];ga(this,n),n.iterationDepth++;try{L.forEach(this.handlers,function(r){r!==null&&e(r)})}finally{--n.iterationDepth||(ga(this,n),Dm(this.handlers),n.handlersLength=Mx(this.handlers))}}}const Fh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},IM=typeof URLSearchParams<"u"?URLSearchParams:Oh,LM=typeof FormData<"u"?FormData:null,DM=typeof Blob<"u"?Blob:null,UM={isBrowser:!0,classes:{URLSearchParams:IM,FormData:LM,Blob:DM},protocols:["http","https","file","blob","url","data"]},kh=typeof window<"u"&&typeof document<"u",Kd=typeof navigator=="object"&&navigator||void 0,OM=kh&&(!Kd||["ReactNative","NativeScript","NS"].indexOf(Kd.product)<0),FM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kM=kh&&window.location.href||"http://localhost",BM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:kh,hasStandardBrowserEnv:OM,hasStandardBrowserWebWorkerEnv:FM,navigator:Kd,origin:kM},Symbol.toStringTag,{value:"Module"})),Gt={...BM,...UM};function zM(t,e){return Lc(t,new Gt.classes.URLSearchParams,{visitor:function(n,i,r,s){return Gt.isNode&&L.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const Om=vx;function wx(t){if(t>Om)throw new he("FormData field is too deeply nested ("+t+" levels). Max depth: "+Om,he.ERR_FORM_DATA_DEPTH_EXCEEDED)}function HM(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=n.exec(t))!==null;)wx(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function GM(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function bx(t){function e(n,i,r,s){wx(s);let a=n[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=n.length;return a=!a&&L.isArray(r)?r.length:a,l?(L.hasOwnProp(r,a)?r[a]=L.isArray(r[a])?r[a].concat(i):[r[a],i]:r[a]=i,!o):((!L.hasOwnProp(r,a)||!L.isObject(r[a]))&&(r[a]=[]),e(n,i,r[a],s)&&L.isArray(r[a])&&(r[a]=GM(r[a])),!o)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(i,r)=>{e(HM(i),r,n,0)}),n}return null}const Tx=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),ss=(t,e)=>t!=null&&L.hasOwnProp(t,e)?t[e]:void 0;function VM(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const yo={transitional:Fh,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=L.isObject(e);if(s&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return r?JSON.stringify(bx(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){const l=ss(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return zM(e,l).toString();if((o=L.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=ss(this,"env"),u=c&&c.FormData;return Lc(o?{"files[]":e}:e,u&&new u,l)}}return s||r?(n.setContentType("application/json",!1),VM(e)):e}],transformResponse:[function(e){const n=ss(this,"transitional")||yo.transitional,i=n&&n.forcedJSONParsing,r=ss(this,"responseType"),s=r==="json";if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(i&&!r||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,ss(this,"parseReviver"))}catch(l){if(o)throw l.name==="SyntaxError"?he.from(l,he.ERR_BAD_RESPONSE,this,null,ss(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gt.classes.FormData,Blob:Gt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(Tx,t=>{yo.headers[t]={}});function mu(t,e){const n=this||yo,i=e||n,r=sn.from(i.headers);let s=i.data;return L.forEach(t,function(o){s=o.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Ax(t){return!!(t&&t.__CANCEL__)}let So=class extends he{constructor(e,n,i){super(e??"canceled",he.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Cx(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new he("Request failed with status code "+n.status,n.status>=400&&n.status<500?he.ERR_BAD_REQUEST:he.ERR_BAD_RESPONSE,n.config,n.request,n))}const WM=/[\t\n\r]/g;function Rx(t){if(typeof t!="string")return t;let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e).replace(WM,"")}function gu(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function jM(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];a||(a=c),n[r]=l,i[r]=c;let h=s,f=0;for(;h!==r;)f+=n[h++],h=h%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-a<e)return;const p=u&&c-u;return p?Math.round(f*1e3/p):void 0}}function XM(t,e){let n=0,i=1e3/e,r,s;const a=(u,h=Date.now())=>{n=h,r=null,s&&(clearTimeout(s),s=null),t(...u)};return[(...u)=>{const h=Date.now(),f=h-n;f>=i?a(u,h):(r=u,s||(s=setTimeout(()=>{s=null,a(r)},i-f)))},()=>r&&a(r),(...u)=>a(u)]}const oc=(t,e,n=3)=>{let i=0;const r=jM(50,250);return XM(s=>{if(!s||!L.isNumber(s.loaded))return;const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=Math.max(0,o!=null?Math.min(a,o):a),c=Math.max(0,l-i),u=r(c);i=Math.max(i,l);const h={loaded:l,total:o,progress:o?l/o:void 0,bytes:c,rate:u||void 0,estimated:u&&o?(o-l)/u:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};t(h)},n)},Fm=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},km=(t,e=L.asap)=>(...n)=>e(()=>t(...n)),qM=Gt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Gt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Gt.origin),Gt.navigator&&/(msie|trident)/i.test(Gt.navigator.userAgent)):()=>!0,$M=Gt.hasStandardBrowserEnv?{write(t,e,n,i,r,s,a){if(typeof document>"u")return;const o=[`${t}=${encodeURIComponent(e)}`];L.isNumber(n)&&o.push(`expires=${new Date(n).toUTCString()}`),L.isString(i)&&o.push(`path=${i}`),L.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),L.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),r=i.indexOf("=");if(r!==-1&&i.slice(0,r)===t)try{return decodeURIComponent(i.slice(r+1))}catch{return i.slice(r+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function KM(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function YM(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const ZM=/^https?:(?!\/\/)/i;function JM(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,i="")=>`${n}${i}${ac}`)}function QM(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${ac}@`),n=e.indexOf("#"),r=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${ac}`);return n===-1?r:`${r}#${JM(e.slice(n+1))}`}function Bm(t,e){if(typeof t=="string"){const n=Rx(t);if(ZM.test(n))throw new he(`Invalid URL ${JSON.stringify(QM(n))}: missing "//" after protocol`,he.ERR_INVALID_URL,e)}}function Nx(t,e,n,i){Bm(e,i);let r=!KM(e);return t&&(r||n===!1)?(Bm(t,i),YM(t,e)):e}const zm=t=>t instanceof sn?{...t}:t,ew=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>Object.getOwnPropertyDescriptor(t,e).enumerable)):Object.keys(t);function $r(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,h,f,p){return L.isPlainObject(u)&&L.isPlainObject(h)?L.merge.call({caseless:p},u,h):L.isPlainObject(h)?L.merge({},h):L.isArray(h)?h.slice():h}function r(u,h,f,p){if(L.isUndefined(h)){if(!L.isUndefined(u))return i(void 0,u,f,p)}else return i(u,h,f,p)}function s(u,h){if(!L.isUndefined(h))return i(void 0,h)}function a(u,h){if(L.isUndefined(h)){if(!L.isUndefined(u))return i(void 0,u)}else return i(void 0,h)}function o(u){const h=L.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!L.isUndefined(h))if(L.isPlainObject(h)){if(L.hasOwnProp(h,u))return h[u]}else return;const f=L.hasOwnProp(t,"transitional")?t.transitional:void 0;if(L.isPlainObject(f)&&L.hasOwnProp(f,u))return f[u]}function l(u,h,f){if(L.hasOwnProp(e,f))return i(u,h);if(L.hasOwnProp(t,f))return i(void 0,u)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutErrorMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:l,headers:(u,h,f)=>r(zm(u),zm(h),f,!0)};return L.forEach(ew({...t,...e}),function(h){if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=L.hasOwnProp(c,h)?c[h]:r,p=L.hasOwnProp(t,h)?t[h]:void 0,x=L.hasOwnProp(e,h)?e[h]:void 0,M=f(p,x,h);L.isUndefined(M)&&f!==l||(n[h]=M)}),L.hasOwnProp(e,"validateStatus")&&L.isUndefined(e.validateStatus)&&o("validateStatusUndefinedResolves")===!1&&(L.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const tw=["content-type","content-length"];function nw(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{tw.includes(i.toLowerCase())&&t.set(i,r)})}const iw=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Px(t){const e=$r({},t),n=f=>L.hasOwnProp(e,f)?e[f]:void 0,i=n("data");let r=n("withXSRFToken");const s=n("xsrfHeaderName"),a=n("xsrfCookieName");let o=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),h=n("url");if(e.headers=o=sn.from(o),e.url=Ex(Nx(c,h,u,e),n("params"),n("paramsSerializer")),l){const f=L.getSafeProp(l,"username")||"",p=L.getSafeProp(l,"password")||"";try{o.set("Authorization","Basic "+btoa(f+":"+(p?iw(p):"")))}catch(x){throw he.from(x,he.ERR_BAD_OPTION_VALUE,t)}}if(L.isFormData(i)){const f=L.getSafeProp(i,"getHeaders");Gt.hasStandardBrowserEnv||Gt.hasStandardBrowserWebWorkerEnv||L.isReactNative(i)?o.setContentType(void 0):L.isFunction(f)&&nw(o,f.call(i),n("formDataHeaderPolicy"))}if(Gt.hasStandardBrowserEnv&&(L.isFunction(r)&&(r=r(e)),r===!0||r==null&&qM(e.url))){const p=s&&a&&$M.read(a);p&&o.set(s,p)}return e}const rw=typeof XMLHttpRequest<"u",sw=rw&&function(t){return new Promise(function(n,i){const r=Px(t);let s=r.data;const a=sn.from(r.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:c}=r,u,h,f,p,x,M;function _(){p&&p(),x&&x(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let d=new XMLHttpRequest;d.open(r.method.toUpperCase(),r.url,!0),d.timeout=r.timeout;function g(v){if(!d)return;if(d.status===0&&(gu(Rx(r.url))||gu(Gt.origin))!=="file"&&!(d.responseURL&&d.responseURL.startsWith("file:"))){i(new he("Request aborted",he.ECONNABORTED,t,d)),_(),d=null;return}try{v?M&&M(v):x&&x()}catch(y){setTimeout(()=>{throw y})}if(!d)return;const T=sn.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),C={data:!o||o==="text"||o==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:T,config:t,request:d};Cx(function(w){n(w),_()},function(w){i(w),_()},C),d=null}"onloadend"in d?d.onloadend=g:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.startsWith("file:"))||setTimeout(g)},d.onabort=function(){d&&(i(new he("Request aborted",he.ECONNABORTED,t,d)),_(),d=null)},d.onerror=function(T){const A=T&&T.message?T.message:"Network Error",C=new he(A,he.ERR_NETWORK,t,d);C.event=T||null,i(C),_(),d=null},d.ontimeout=function(){let T=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const A=r.transitional||Fh;r.timeoutErrorMessage&&(T=r.timeoutErrorMessage),i(new he(T,A.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,t,d)),_(),d=null},s===void 0&&a.setContentType(null),"setRequestHeader"in d&&L.forEach(_x(a),function(T,A){d.setRequestHeader(A,T)}),L.isUndefined(r.withCredentials)||(d.withCredentials=!!r.withCredentials),o&&o!=="json"&&(d.responseType=r.responseType),c&&([f,x,M]=oc(c,!0),d.addEventListener("progress",f)),l&&d.upload&&([h,p]=oc(l),d.upload.addEventListener("progress",h),d.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=v=>{d&&(i(!v||v.type?new So(null,t,d):v),d.abort(),_(),d=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const S=gu(r.url);if(S&&!Gt.protocols.includes(S)){i(new he("Unsupported protocol "+S+":",he.ERR_BAD_REQUEST,t)),_();return}d.send(s||null)})},aw=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const r=function(l){if(!i){i=!0,a();const c=l instanceof Error?l:this.reason;n.abort(c instanceof he?c:new So(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{s=null,r(new he(`timeout of ${e}ms exceeded`,he.ETIMEDOUT))},e);const a=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>{if(!i){if(l.aborted){r.call(l);return}l.addEventListener("abort",r,{once:!0})}});const{signal:o}=n;return o.unsubscribe=()=>L.asap(a),o},ow=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},lw=async function*(t,e){for await(const n of cw(t))yield*ow(n,e)},cw=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Hm=(t,e,n,i)=>{const r=lw(t,e);let s=0,a,o=l=>{a||(a=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){o(),l.close();return}let h=u.byteLength;if(n){let f=s+=h;n(f)}l.enqueue(new Uint8Array(u))}catch(c){throw o(c),c}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},Gm=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,Ix=(t,e,n)=>e+2<n&&Gm(t.charCodeAt(e+1))&&Gm(t.charCodeAt(e+2)),Vm=t=>t<=57?t-48:(t&223)-55,uw=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,dw=t=>t===9||t===10||t===12||t===13||t===32,fw=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},hw=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},pw=t=>{const e=t.length;let n=0,i=0,r=!1;for(let s=0;s<e;s++){let a=t.charCodeAt(s);if(a===37&&Ix(t,s,e)&&(a=Vm(t.charCodeAt(s+1))*16+Vm(t.charCodeAt(s+2)),s+=2),!dw(a)){if(a===61){i++;continue}if(!uw(a)||i>0){r=!0;continue}n++}}return r||i>2||i>0&&(n+i)%4!==0||n%4===1?hw(t):fw(n)},mw=(t,e)=>{if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const n=t.indexOf(",");if(n<0)return 0;const i=t.slice(5,n),r=t.slice(n+1);if(/;base64/i.test(i))return e(r);let a=0;for(let o=0,l=r.length;o<l;o++){const c=r.charCodeAt(o);if(c===37&&Ix(r,o,l))a+=1,o+=2;else if(c<128)a+=1;else if(c<2048)a+=2;else if(c>=55296&&c<=56319&&o+1<l){const u=r.charCodeAt(o+1);u>=56320&&u<=57343?(a+=4,o++):a+=3}else a+=3}return a};function gw(t){const e=typeof t=="string"?t.indexOf("#"):-1;return mw(e===-1?t:t.slice(0,e),pw)}const Bh="1.20.0",Wm=64*1024,_w={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Wo}=L,xw=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),jm=t=>{if(!L.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Xm=(t,...e)=>{try{return!!t(...e)}catch{return!1}},vw=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},yw=t=>{const e=L.global!==void 0&&L.global!==null?L.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=L.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:r,Request:s,Response:a}=t,o=r?Wo(r):typeof fetch=="function",l=Wo(s),c=Wo(a);if(!o)return!1;const u=o&&Wo(n),h=o&&(typeof i=="function"?(d=>g=>d.encode(g))(new i):async d=>new Uint8Array(await new s(d).arrayBuffer())),f=l&&u&&Xm(()=>{let d=!1;const g=new s(Gt.origin,{body:new n,method:"POST",get duplex(){return d=!0,"half"}}),S=g.headers.has("Content-Type");return g.body!=null&&g.body.cancel(),d&&!S}),p=c&&u&&Xm(()=>L.isReadableStream(new a("").body)),x={stream:p&&(d=>d.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!x[d]&&(x[d]=(g,S)=>{let v=g&&g[d];if(v)return v.call(g);throw new he(`Response type '${d}' is not supported`,he.ERR_NOT_SUPPORT,S)})});const M=async d=>{if(d==null)return 0;if(L.isBlob(d))return d.size;if(L.isSpecCompliantForm(d))return(await new s(Gt.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(L.isArrayBufferView(d)||L.isArrayBuffer(d))return d.byteLength;if(L.isURLSearchParams(d)&&(d=d+""),L.isString(d))return(await h(d)).byteLength},_=async(d,g)=>{const S=L.toFiniteNumber(d.getContentLength());return S??M(g)};return async d=>{let{url:g,method:S,data:v,signal:T,cancelToken:A,timeout:C,onDownloadProgress:y,onUploadProgress:w,responseType:N,headers:I,withCredentials:k="same-origin",fetchOptions:W,maxContentLength:U,maxBodyLength:H,maxRedirects:Q}=Px(d);const q=L.isNumber(U)&&U>-1,B=L.isNumber(H)&&H>-1,P=V=>L.hasOwnProp(d,V)?d[V]:void 0;let G=r||fetch;N=N?(N+"").toLowerCase():"text";let Z=aw([T,A&&A.toAbortSignal()],C),se=null;const ve=Z&&Z.unsubscribe&&(()=>{Z.unsubscribe()});let He,Oe=null;const Ge=()=>new he("Request body larger than maxBodyLength limit",he.ERR_BAD_REQUEST,d,se);try{let V;const ee=P("auth");if(ee){const Ee=L.getSafeProp(ee,"username")||"",Ze=L.getSafeProp(ee,"password")||"";V={username:Ee,password:Ze}}if(vw(g)){const Ee=new URL(g,Gt.origin);if(!V&&(Ee.username||Ee.password)){const Ze=jm(Ee.username),St=jm(Ee.password);V={username:Ze,password:St}}(Ee.username||Ee.password)&&(Ee.username="",Ee.password="",g=Ee.href)}if(V&&(I.delete("authorization"),I.set("Authorization","Basic "+btoa(xw((V.username||"")+":"+(V.password||""))))),q&&typeof g=="string"&&g.startsWith("data:")&&gw(g)>U)throw new he("maxContentLength size of "+U+" exceeded",he.ERR_BAD_RESPONSE,d,se);if(B&&S!=="get"&&S!=="head"){const Ee=await M(v);if(typeof Ee=="number"&&isFinite(Ee)&&(He=Ee,Ee>H))throw Ge()}const pe=B&&(L.isReadableStream(v)||L.isStream(v)),Fe=(Ee,Ze,St)=>Hm(Ee,Wm,rt=>{if(B&&rt>H)throw Oe=Ge();Ze&&Ze(rt)},St);if(f&&S!=="get"&&S!=="head"&&(w||pe)){if(He=He??await _(I,v),He!==0||pe){let Ee=new s(g,{method:"POST",body:v,duplex:"half"}),Ze;if(L.isFormData(v)&&(Ze=Ee.headers.get("content-type"))&&I.setContentType(Ze),Ee.body){const[St,rt]=w&&Fm(He,oc(km(w)))||[];v=Fe(Ee.body,St,rt)}}}else if(pe&&!l&&u&&S!=="get"&&S!=="head")v=Fe(v);else if(pe&&l&&!f&&S!=="get"&&S!=="head")throw new he("Stream request bodies are not supported by the current fetch implementation",he.ERR_NOT_SUPPORT,d,se);L.isString(k)||(k=k?"include":"omit");const Se=l&&"credentials"in s.prototype;if(L.isFormData(v)){const Ee=I.getContentType();Ee&&/^multipart\/form-data/i.test(Ee)&&!/boundary=/i.test(Ee)&&I.delete("content-type")}I.set("User-Agent","axios/"+Bh,!1);const Ue=W==null?W:Object.assign(Object.create(null),W);Ue&&(delete Ue.body,delete Ue.headers,delete Ue.method,delete Ue.signal,delete Ue.duplex,delete Ue.credentials);const lt=Object.assign(Object.create(null),Ue,{signal:Z,method:S.toUpperCase(),headers:_x(I.normalize()),body:v,duplex:"half",credentials:Se?k:void 0});l&&(L.forEach(_w,(Ee,Ze)=>{lt[Ze]===void 0&&(lt[Ze]=Ee)}),lt.signal===void 0&&(lt.signal=null),lt.body===void 0&&(lt.body=null)),Q===0&&(lt.redirect="manual",Ue&&(Ue.redirect="manual")),se=l&&new s(g,lt);let ke=await(l?G(se,Ue):G(g,lt));const Ye=sn.from(ke.headers);if(q){const Ee=L.toFiniteNumber(Ye.getContentLength());if(Ee!=null&&Ee>U)throw new he("maxContentLength size of "+U+" exceeded",he.ERR_BAD_RESPONSE,d,se)}const st=p&&(N==="stream"||N==="response");if(p&&ke.body&&(y||q||st&&ve)){const Ee={};["status","statusText","headers"].forEach(At=>{Ee[At]=ke[At]});const Ze=L.toFiniteNumber(Ye.getContentLength()),[St,rt]=y&&Fm(Ze,oc(km(y),!0))||[];let Et=0;const F=At=>{if(q&&(Et=At,Et>U))throw new he("maxContentLength size of "+U+" exceeded",he.ERR_BAD_RESPONSE,d,se);St&&St(At)};ke=new a(Hm(ke.body,Wm,F,()=>{rt&&rt(),ve&&ve()}),Ee)}N=N||"text";let Be=await x[L.findKey(x,N)||"text"](ke,d);if(q&&!p&&!st){let Ee;if(Be!=null&&(typeof Be.byteLength=="number"?Ee=Be.byteLength:typeof Be.size=="number"?Ee=Be.size:typeof Be=="string"&&(Ee=typeof i=="function"?new i().encode(Be).byteLength:Be.length)),typeof Ee=="number"&&Ee>U)throw new he("maxContentLength size of "+U+" exceeded",he.ERR_BAD_RESPONSE,d,se)}return!st&&ve&&ve(),await new Promise((Ee,Ze)=>{Cx(Ee,Ze,{data:Be,headers:sn.from(ke.headers),status:ke.status,statusText:ke.statusText,config:d,request:se})})}catch(V){if(ve&&ve(),Z&&Z.aborted&&Z.reason instanceof he){const ee=Z.reason;throw ee.config=d,se&&(ee.request=se),V!==ee&&Object.defineProperty(ee,"cause",{__proto__:null,value:V,writable:!0,enumerable:!1,configurable:!0}),ee}if(Oe)throw se&&!Oe.request&&(Oe.request=se),Oe;if(V instanceof he)throw se&&!V.request&&(V.request=se),V;if(V&&V.name==="TypeError"&&/Load failed|fetch/i.test(V.message)){const ee=new he("Network Error",he.ERR_NETWORK,d,se,V&&V.response);throw Object.defineProperty(ee,"cause",{__proto__:null,value:V.cause||V,writable:!0,enumerable:!1,configurable:!0}),ee}throw he.from(V,V&&V.code,d,se,V&&V.response)}}},Sw=new Map,Lx=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let a=s.length,o=a,l,c,u=Sw;for(;o--;)l=s[o],c=u.get(l),c===void 0&&u.set(l,c=o?new Map:yw(e)),u=c;return c};Lx();const zh={http:CM,xhr:sw,fetch:{get:Lx}};L.forEach(zh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const qm=t=>`- ${t}`,Ew=t=>L.isFunction(t)||t===null||t===!1;function Mw(t,e){t=L.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let a=0;a<n;a++){i=t[a];let o;if(r=i,!Ew(i)&&(r=zh[(o=String(i)).toLowerCase()],r===void 0))throw new he(`Unknown adapter '${o}'`);if(r&&(L.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=n?a.length>1?`since :
`+a.map(qm).join(`
`):" "+qm(a[0]):"as no adapter specified";throw new he("There is no suitable adapter to dispatch the request "+o,he.ERR_NOT_SUPPORT)}return r}const Dx={getAdapter:Mw,adapters:zh};function _u(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new So(null,t)}function xu(t){const e=L.toSafeFlatObject(t);return _u(e),e.headers=sn.from(L.getSafeProp(e,"headers")),e.data=mu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Dx.getAdapter(e.adapter||yo.adapter,e)(e).then(function(r){_u(e),e.response=r;try{r.data=mu.call(e,e.transformResponse,r)}finally{delete e.response}return r.headers=sn.from(r.headers),r},function(r){if(!Ax(r)&&(_u(e),r&&r.response)){e.response=r.response;try{r.response.data=mu.call(e,e.transformResponse,r.response)}finally{delete e.response}r.response.headers=sn.from(r.response.headers)}return Promise.reject(r)})}const Dc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Dc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const $m={};Dc.transitional=function(e,n,i){function r(s,a){return"[Axios v"+Bh+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new he(r(a," has been removed"+(n?" in "+n:"")),he.ERR_DEPRECATED);return n&&!$m[a]&&($m[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,o):!0}};Dc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function ww(t,e,n){if(typeof t!="object"||t===null)throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],a=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(a){const o=t[s],l=o===void 0||a(o,s,t);if(l!==!0)throw new he("option "+s+" must be "+l,he.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new he("Unknown option "+s,he.ERR_BAD_OPTION)}}const Cl={assertOptions:ww,validators:Dc},Jt=Cl.validators;let Br=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Um,response:new Um}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error)try{let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack;let a="";if(typeof s=="string"){const o=s.indexOf(`
`);a=o===-1?"":s.slice(o+1)}if(!i.stack)i.stack=a;else if(a){const o=a.indexOf(`
`),l=o===-1?-1:a.indexOf(`
`,o+1),c=l===-1?"":a.slice(l+1);String(i.stack).endsWith(c)||(i.stack+=`
`+a)}}catch{}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=$r(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Cl.assertOptions(i,{silentJSONParsing:Jt.transitional(Jt.boolean),forcedJSONParsing:Jt.transitional(Jt.boolean),clarifyTimeoutError:Jt.transitional(Jt.boolean),legacyInterceptorReqResOrdering:Jt.transitional(Jt.boolean),advertiseZstdAcceptEncoding:Jt.transitional(Jt.boolean),validateStatusUndefinedResolves:Jt.transitional(Jt.boolean)},!1),r!=null&&(L.isFunction(r)?n.paramsSerializer={serialize:r}:Cl.assertOptions(r,{encode:Jt.function,serialize:Jt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Cl.assertOptions(n,{baseUrl:Jt.spelling("baseURL"),withXsrfToken:Jt.spelling("withXSRFToken")},!0),n.method=(L.getSafeProp(n,"method")||L.getSafeProp(this.defaults,"method")||"get").toLowerCase();let a=s&&L.merge(s.common,s[n.method]);s&&L.forEach(Tx.concat("common"),x=>{delete s[x]}),n.headers=sn.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(M){if(typeof M.runWhen=="function"&&M.runWhen(n)===!1)return;l=l&&M.synchronous;const _=n.transitional||Fh;_&&_.legacyInterceptorReqResOrdering?o.unshift(M.fulfilled,M.rejected):o.push(M.fulfilled,M.rejected)});const c=[];this.interceptors.response.forEach(function(M){c.push(M.fulfilled,M.rejected)});let u,h=0,f;if(!l){const x=[xu.bind(this),void 0];for(x.unshift(...o),x.push(...c),f=x.length,u=Promise.resolve(n);h<f;)u=u.then(x[h++],x[h++]);return u}f=o.length;let p=n;for(;h<f;){const x=o[h++],M=o[h++];try{p=x?x(p):p}catch(_){if(!M){u=Promise.reject(_);break}try{const d=M.call(this,_);L.isThenable(d)&&(u=Promise.resolve(d).then(()=>xu.call(this,p)))}catch(d){u=Promise.reject(d)}break}}if(!u)try{u=xu.call(this,p)}catch(x){u=Promise.reject(x)}for(h=0,f=c.length;h<f;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=$r(this.defaults,e);const n=Nx(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Ex(n,e.params,e.paramsSerializer)}};L.forEach(["delete","get","head","options"],function(e){Br.prototype[e]=function(n,i){return this.request($r(i||{},{method:e,url:n,data:i&&L.hasOwnProp(i,"data")?i.data:void 0}))}});L.forEach(["post","put","patch","query"],function(e){function n(i){return function(s,a,o){return this.request($r(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Br.prototype[e]=n(),e!=="query"&&(Br.prototype[e+"Form"]=n(!0))});let bw=class Ux{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new So(s,a,o),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Ux(function(r){e=r}),cancel:e}}};function Tw(t){return function(n){return t.apply(null,n)}}function Aw(t){return L.isObject(t)&&t.isAxiosError===!0}const Rl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Rl).forEach(([t,e])=>{Rl[e]===void 0&&(Rl[e]=t)});function Ox(t){const e=new Br(t),n=ax(Br.prototype.request,e);return L.extend(n,Br.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Ox($r(t,r))},n}const It=Ox(yo);It.Axios=Br;It.CanceledError=So;It.CancelToken=bw;It.isCancel=Ax;It.VERSION=Bh;It.toFormData=Lc;It.AxiosError=he;It.Cancel=It.CanceledError;It.all=function(e){return Promise.all(e)};It.spread=Tw;It.isAxiosError=Aw;It.mergeConfig=$r;It.AxiosHeaders=sn;It.formToJSON=t=>bx(L.isHTMLForm(t)?new FormData(t):t);It.getAdapter=Dx.getAdapter;It.HttpStatusCode=Rl;It.default=It;const{Axios:X2,AxiosError:q2,CanceledError:$2,isCancel:K2,CancelToken:Y2,VERSION:Z2,all:J2,Cancel:Q2,isAxiosError:eN,spread:tN,toFormData:nN,AxiosHeaders:iN,HttpStatusCode:rN,formToJSON:sN,getAdapter:aN,mergeConfig:oN,create:lN}=It,Gi=It.create({baseURL:fE,headers:{"Content-Type":"application/json"},timeout:15e3});Gi.interceptors.request.use(t=>{const e=localStorage.getItem("admin_token");return e&&(t.headers.Authorization=`Bearer ${e}`),t});Gi.interceptors.response.use(t=>t,t=>{var e;return((e=t.response)==null?void 0:e.status)===401&&localStorage.removeItem("admin_token"),Promise.reject(t)});const Cw=async t=>{const{data:e}=await Gi.post("/api/chatbot/query",{question:t});return e},Rw=async t=>{const{data:e}=await Gi.get(`/api/categories/${encodeURIComponent(t)}`);return e},Nw=()=>`msg_${Date.now()}_${Math.random().toString(36).slice(2)}`,as=(t,e,n={})=>({id:Nw(),role:t,text:e,timestamp:new Date().toISOString(),...n});function Pw(){const[t,e]=Ce.useState([Cm]),[n,i]=Ce.useState(!1),[r,s]=Ce.useState(null),a=Ce.useCallback(u=>{e(h=>[...h,u])},[]),o=Ce.useCallback(async u=>{if(!(!u.trim()||n)){s(null),a(as("user",u)),i(!0);try{const h=await Cw(u);a(as("bot",h.answer,{confidence:h.confidence,matched:h.matched,category:h.category,source:h.source}))}catch{s("Failed to get a response. Please try again."),a(as("bot","Sorry, I encountered an error. Please try again.",{isError:!0}))}finally{i(!1)}}},[n,a]),l=Ce.useCallback(async u=>{var h;if(!n){s(null),a(as("user",`Show me information about: ${u}`)),i(!0);try{const f=await Rw(u),p=[`Here is information about **${f.category}**:
`];f.entries.forEach(x=>{p.push(`❓ ${x.question}
💬 ${x.answer}
`)}),a(as("bot",p.join(`
`),{category:u,source:"knowledge_base"}))}catch(f){((h=f.response)==null?void 0:h.status)===404?a(as("bot",`No information found for category: ${u}`,{isError:!0})):s("Failed to load category. Please try again.")}finally{i(!1)}}},[n,a]),c=Ce.useCallback(()=>{e([Cm]),s(null)},[]);return{messages:t,loading:n,error:r,sendMessage:o,selectCategory:l,resetChat:c}}function Iw({defaultOpen:t=!1}){const[e,n]=Ce.useState(t),[i,r]=Ce.useState(!1),{messages:s,loading:a,error:o,sendMessage:l,selectCategory:c,resetChat:u}=Pw();return Ce.useEffect(()=>{const h=f=>{var p,x;n(!0),(p=f.detail)!=null&&p.fullScreen&&r(!0),(x=f.detail)!=null&&x.category&&c(f.detail.category)};return window.addEventListener("open-mit-chatbot",h),()=>window.removeEventListener("open-mit-chatbot",h)},[c]),m.jsxs(m.Fragment,{children:[!e&&m.jsxs("button",{className:"chat-launcher",onClick:()=>n(!0),"aria-label":"Open MIT Campus Assistant",children:[m.jsx("span",{className:"chat-launcher-icon",children:"💬"}),m.jsx("span",{className:"chat-launcher-label",children:"Ask MIT Assistant"}),m.jsx("span",{className:"chat-launcher-badge",title:"Online"})]}),e&&m.jsxs("div",{className:`chat-window ${i?"full-screen":""}`,role:"dialog","aria-label":"MIT Anna University Campus Assistant","aria-modal":"true",children:[m.jsx(sE,{onClose:()=>n(!1),onReset:u,isFullScreen:i,onToggleFullScreen:()=>r(h=>!h)}),m.jsxs("div",{className:"chat-body",children:[m.jsx(uE,{messages:s,loading:a}),m.jsx(mE,{onSelect:c,disabled:a})]}),m.jsx(_E,{message:o}),m.jsx(gE,{onSend:l,disabled:a})]})]})}var Lw=Object.defineProperty,lc=Object.getOwnPropertySymbols,Fx=Object.prototype.hasOwnProperty,kx=Object.prototype.propertyIsEnumerable,Km=(t,e,n)=>e in t?Lw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Dw=(t,e)=>{for(var n in e||(e={}))Fx.call(e,n)&&Km(t,n,e[n]);if(lc)for(var n of lc(e))kx.call(e,n)&&Km(t,n,e[n]);return t},Uw=(t,e)=>{var n={};for(var i in t)Fx.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&lc)for(var i of lc(t))e.indexOf(i)<0&&kx.call(t,i)&&(n[i]=t[i]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Kr;(t=>{const e=class{constructor(l,c,u,h){if(this.version=l,this.errorCorrectionLevel=c,this.modules=[],this.isFunction=[],l<e.MIN_VERSION||l>e.MAX_VERSION)throw new RangeError("Version value out of range");if(h<-1||h>7)throw new RangeError("Mask value out of range");this.size=l*4+17;let f=[];for(let x=0;x<this.size;x++)f.push(!1);for(let x=0;x<this.size;x++)this.modules.push(f.slice()),this.isFunction.push(f.slice());this.drawFunctionPatterns();const p=this.addEccAndInterleave(u);if(this.drawCodewords(p),h==-1){let x=1e9;for(let M=0;M<8;M++){this.applyMask(M),this.drawFormatBits(M);const _=this.getPenaltyScore();_<x&&(h=M,x=_),this.applyMask(M)}}s(0<=h&&h<=7),this.mask=h,this.applyMask(h),this.drawFormatBits(h),this.isFunction=[]}static encodeText(l,c){const u=t.QrSegment.makeSegments(l);return e.encodeSegments(u,c)}static encodeBinary(l,c){const u=t.QrSegment.makeBytes(l);return e.encodeSegments([u],c)}static encodeSegments(l,c,u=1,h=40,f=-1,p=!0){if(!(e.MIN_VERSION<=u&&u<=h&&h<=e.MAX_VERSION)||f<-1||f>7)throw new RangeError("Invalid value");let x,M;for(x=u;;x++){const S=e.getNumDataCodewords(x,c)*8,v=o.getTotalBits(l,x);if(v<=S){M=v;break}if(x>=h)throw new RangeError("Data too long")}for(const S of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])p&&M<=e.getNumDataCodewords(x,S)*8&&(c=S);let _=[];for(const S of l){i(S.mode.modeBits,4,_),i(S.numChars,S.mode.numCharCountBits(x),_);for(const v of S.getData())_.push(v)}s(_.length==M);const d=e.getNumDataCodewords(x,c)*8;s(_.length<=d),i(0,Math.min(4,d-_.length),_),i(0,(8-_.length%8)%8,_),s(_.length%8==0);for(let S=236;_.length<d;S^=253)i(S,8,_);let g=[];for(;g.length*8<_.length;)g.push(0);return _.forEach((S,v)=>g[v>>>3]|=S<<7-(v&7)),new e(x,c,g,f)}getModule(l,c){return 0<=l&&l<this.size&&0<=c&&c<this.size&&this.modules[c][l]}getModules(){return this.modules}drawFunctionPatterns(){for(let u=0;u<this.size;u++)this.setFunctionModule(6,u,u%2==0),this.setFunctionModule(u,6,u%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const l=this.getAlignmentPatternPositions(),c=l.length;for(let u=0;u<c;u++)for(let h=0;h<c;h++)u==0&&h==0||u==0&&h==c-1||u==c-1&&h==0||this.drawAlignmentPattern(l[u],l[h]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(l){const c=this.errorCorrectionLevel.formatBits<<3|l;let u=c;for(let f=0;f<10;f++)u=u<<1^(u>>>9)*1335;const h=(c<<10|u)^21522;s(h>>>15==0);for(let f=0;f<=5;f++)this.setFunctionModule(8,f,r(h,f));this.setFunctionModule(8,7,r(h,6)),this.setFunctionModule(8,8,r(h,7)),this.setFunctionModule(7,8,r(h,8));for(let f=9;f<15;f++)this.setFunctionModule(14-f,8,r(h,f));for(let f=0;f<8;f++)this.setFunctionModule(this.size-1-f,8,r(h,f));for(let f=8;f<15;f++)this.setFunctionModule(8,this.size-15+f,r(h,f));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let l=this.version;for(let u=0;u<12;u++)l=l<<1^(l>>>11)*7973;const c=this.version<<12|l;s(c>>>18==0);for(let u=0;u<18;u++){const h=r(c,u),f=this.size-11+u%3,p=Math.floor(u/3);this.setFunctionModule(f,p,h),this.setFunctionModule(p,f,h)}}drawFinderPattern(l,c){for(let u=-4;u<=4;u++)for(let h=-4;h<=4;h++){const f=Math.max(Math.abs(h),Math.abs(u)),p=l+h,x=c+u;0<=p&&p<this.size&&0<=x&&x<this.size&&this.setFunctionModule(p,x,f!=2&&f!=4)}}drawAlignmentPattern(l,c){for(let u=-2;u<=2;u++)for(let h=-2;h<=2;h++)this.setFunctionModule(l+h,c+u,Math.max(Math.abs(h),Math.abs(u))!=1)}setFunctionModule(l,c,u){this.modules[c][l]=u,this.isFunction[c][l]=!0}addEccAndInterleave(l){const c=this.version,u=this.errorCorrectionLevel;if(l.length!=e.getNumDataCodewords(c,u))throw new RangeError("Invalid argument");const h=e.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][c],f=e.ECC_CODEWORDS_PER_BLOCK[u.ordinal][c],p=Math.floor(e.getNumRawDataModules(c)/8),x=h-p%h,M=Math.floor(p/h);let _=[];const d=e.reedSolomonComputeDivisor(f);for(let S=0,v=0;S<h;S++){let T=l.slice(v,v+M-f+(S<x?0:1));v+=T.length;const A=e.reedSolomonComputeRemainder(T,d);S<x&&T.push(0),_.push(T.concat(A))}let g=[];for(let S=0;S<_[0].length;S++)_.forEach((v,T)=>{(S!=M-f||T>=x)&&g.push(v[S])});return s(g.length==p),g}drawCodewords(l){if(l.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let c=0;for(let u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(let h=0;h<this.size;h++)for(let f=0;f<2;f++){const p=u-f,M=(u+1&2)==0?this.size-1-h:h;!this.isFunction[M][p]&&c<l.length*8&&(this.modules[M][p]=r(l[c>>>3],7-(c&7)),c++)}}s(c==l.length*8)}applyMask(l){if(l<0||l>7)throw new RangeError("Mask value out of range");for(let c=0;c<this.size;c++)for(let u=0;u<this.size;u++){let h;switch(l){case 0:h=(u+c)%2==0;break;case 1:h=c%2==0;break;case 2:h=u%3==0;break;case 3:h=(u+c)%3==0;break;case 4:h=(Math.floor(u/3)+Math.floor(c/2))%2==0;break;case 5:h=u*c%2+u*c%3==0;break;case 6:h=(u*c%2+u*c%3)%2==0;break;case 7:h=((u+c)%2+u*c%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[c][u]&&h&&(this.modules[c][u]=!this.modules[c][u])}}getPenaltyScore(){let l=0;for(let f=0;f<this.size;f++){let p=!1,x=0,M=[0,0,0,0,0,0,0];for(let _=0;_<this.size;_++)this.modules[f][_]==p?(x++,x==5?l+=e.PENALTY_N1:x>5&&l++):(this.finderPenaltyAddHistory(x,M),p||(l+=this.finderPenaltyCountPatterns(M)*e.PENALTY_N3),p=this.modules[f][_],x=1);l+=this.finderPenaltyTerminateAndCount(p,x,M)*e.PENALTY_N3}for(let f=0;f<this.size;f++){let p=!1,x=0,M=[0,0,0,0,0,0,0];for(let _=0;_<this.size;_++)this.modules[_][f]==p?(x++,x==5?l+=e.PENALTY_N1:x>5&&l++):(this.finderPenaltyAddHistory(x,M),p||(l+=this.finderPenaltyCountPatterns(M)*e.PENALTY_N3),p=this.modules[_][f],x=1);l+=this.finderPenaltyTerminateAndCount(p,x,M)*e.PENALTY_N3}for(let f=0;f<this.size-1;f++)for(let p=0;p<this.size-1;p++){const x=this.modules[f][p];x==this.modules[f][p+1]&&x==this.modules[f+1][p]&&x==this.modules[f+1][p+1]&&(l+=e.PENALTY_N2)}let c=0;for(const f of this.modules)c=f.reduce((p,x)=>p+(x?1:0),c);const u=this.size*this.size,h=Math.ceil(Math.abs(c*20-u*10)/u)-1;return s(0<=h&&h<=9),l+=h*e.PENALTY_N4,s(0<=l&&l<=2568888),l}getAlignmentPatternPositions(){if(this.version==1)return[];{const l=Math.floor(this.version/7)+2,c=this.version==32?26:Math.ceil((this.version*4+4)/(l*2-2))*2;let u=[6];for(let h=this.size-7;u.length<l;h-=c)u.splice(1,0,h);return u}}static getNumRawDataModules(l){if(l<e.MIN_VERSION||l>e.MAX_VERSION)throw new RangeError("Version number out of range");let c=(16*l+128)*l+64;if(l>=2){const u=Math.floor(l/7)+2;c-=(25*u-10)*u-55,l>=7&&(c-=36)}return s(208<=c&&c<=29648),c}static getNumDataCodewords(l,c){return Math.floor(e.getNumRawDataModules(l)/8)-e.ECC_CODEWORDS_PER_BLOCK[c.ordinal][l]*e.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][l]}static reedSolomonComputeDivisor(l){if(l<1||l>255)throw new RangeError("Degree out of range");let c=[];for(let h=0;h<l-1;h++)c.push(0);c.push(1);let u=1;for(let h=0;h<l;h++){for(let f=0;f<c.length;f++)c[f]=e.reedSolomonMultiply(c[f],u),f+1<c.length&&(c[f]^=c[f+1]);u=e.reedSolomonMultiply(u,2)}return c}static reedSolomonComputeRemainder(l,c){let u=c.map(h=>0);for(const h of l){const f=h^u.shift();u.push(0),c.forEach((p,x)=>u[x]^=e.reedSolomonMultiply(p,f))}return u}static reedSolomonMultiply(l,c){if(l>>>8||c>>>8)throw new RangeError("Byte out of range");let u=0;for(let h=7;h>=0;h--)u=u<<1^(u>>>7)*285,u^=(c>>>h&1)*l;return s(u>>>8==0),u}finderPenaltyCountPatterns(l){const c=l[1];s(c<=this.size*3);const u=c>0&&l[2]==c&&l[3]==c*3&&l[4]==c&&l[5]==c;return(u&&l[0]>=c*4&&l[6]>=c?1:0)+(u&&l[6]>=c*4&&l[0]>=c?1:0)}finderPenaltyTerminateAndCount(l,c,u){return l&&(this.finderPenaltyAddHistory(c,u),c=0),c+=this.size,this.finderPenaltyAddHistory(c,u),this.finderPenaltyCountPatterns(u)}finderPenaltyAddHistory(l,c){c[0]==0&&(l+=this.size),c.pop(),c.unshift(l)}};let n=e;n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=n;function i(l,c,u){if(c<0||c>31||l>>>c)throw new RangeError("Value out of range");for(let h=c-1;h>=0;h--)u.push(l>>>h&1)}function r(l,c){return(l>>>c&1)!=0}function s(l){if(!l)throw new Error("Assertion error")}const a=class{constructor(l,c,u){if(this.mode=l,this.numChars=c,this.bitData=u,c<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}static makeBytes(l){let c=[];for(const u of l)i(u,8,c);return new a(a.Mode.BYTE,l.length,c)}static makeNumeric(l){if(!a.isNumeric(l))throw new RangeError("String contains non-numeric characters");let c=[];for(let u=0;u<l.length;){const h=Math.min(l.length-u,3);i(parseInt(l.substr(u,h),10),h*3+1,c),u+=h}return new a(a.Mode.NUMERIC,l.length,c)}static makeAlphanumeric(l){if(!a.isAlphanumeric(l))throw new RangeError("String contains unencodable characters in alphanumeric mode");let c=[],u;for(u=0;u+2<=l.length;u+=2){let h=a.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u))*45;h+=a.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u+1)),i(h,11,c)}return u<l.length&&i(a.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u)),6,c),new a(a.Mode.ALPHANUMERIC,l.length,c)}static makeSegments(l){return l==""?[]:a.isNumeric(l)?[a.makeNumeric(l)]:a.isAlphanumeric(l)?[a.makeAlphanumeric(l)]:[a.makeBytes(a.toUtf8ByteArray(l))]}static makeEci(l){let c=[];if(l<0)throw new RangeError("ECI assignment value out of range");if(l<128)i(l,8,c);else if(l<16384)i(2,2,c),i(l,14,c);else if(l<1e6)i(6,3,c),i(l,21,c);else throw new RangeError("ECI assignment value out of range");return new a(a.Mode.ECI,0,c)}static isNumeric(l){return a.NUMERIC_REGEX.test(l)}static isAlphanumeric(l){return a.ALPHANUMERIC_REGEX.test(l)}getData(){return this.bitData.slice()}static getTotalBits(l,c){let u=0;for(const h of l){const f=h.mode.numCharCountBits(c);if(h.numChars>=1<<f)return 1/0;u+=4+f+h.bitData.length}return u}static toUtf8ByteArray(l){l=encodeURI(l);let c=[];for(let u=0;u<l.length;u++)l.charAt(u)!="%"?c.push(l.charCodeAt(u)):(c.push(parseInt(l.substr(u+1,2),16)),u+=2);return c}};let o=a;o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=o})(Kr||(Kr={}));(t=>{(e=>{const n=class{constructor(r,s){this.ordinal=r,this.formatBits=s}};let i=n;i.LOW=new n(0,1),i.MEDIUM=new n(1,0),i.QUARTILE=new n(2,3),i.HIGH=new n(3,2),e.Ecc=i})(t.QrCode||(t.QrCode={}))})(Kr||(Kr={}));(t=>{(e=>{const n=class{constructor(r,s){this.modeBits=r,this.numBitsCharCount=s}numCharCountBits(r){return this.numBitsCharCount[Math.floor((r+7)/17)]}};let i=n;i.NUMERIC=new n(1,[10,12,14]),i.ALPHANUMERIC=new n(2,[9,11,13]),i.BYTE=new n(4,[8,16,16]),i.KANJI=new n(8,[8,10,12]),i.ECI=new n(7,[0,0,0]),e.Mode=i})(t.QrSegment||(t.QrSegment={}))})(Kr||(Kr={}));var Ra=Kr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Ow={L:Ra.QrCode.Ecc.LOW,M:Ra.QrCode.Ecc.MEDIUM,Q:Ra.QrCode.Ecc.QUARTILE,H:Ra.QrCode.Ecc.HIGH},Fw=128,kw="L",Bw="#FFFFFF",zw="#000000",Hw=!1,Bx=4,Gw=.1;function Vw(t,e=0){const n=[];return t.forEach(function(i,r){let s=null;i.forEach(function(a,o){if(!a&&s!==null){n.push(`M${s+e} ${r+e}h${o-s}v1H${s+e}z`),s=null;return}if(o===i.length-1){if(!a)return;s===null?n.push(`M${o+e},${r+e} h1v1H${o+e}z`):n.push(`M${s+e},${r+e} h${o+1-s}v1H${s+e}z`);return}a&&s===null&&(s=o)})}),n.join("")}function Ww(t,e){return t.slice().map((n,i)=>i<e.y||i>=e.y+e.h?n:n.map((r,s)=>s<e.x||s>=e.x+e.w?r:!1))}function jw(t,e,n,i){if(i==null)return null;const r=n?Bx:0,s=t.length+r*2,a=Math.floor(e*Gw),o=s/e,l=(i.width||a)*o,c=(i.height||a)*o,u=i.x==null?t.length/2-l/2:i.x*o,h=i.y==null?t.length/2-c/2:i.y*o;let f=null;if(i.excavate){let p=Math.floor(u),x=Math.floor(h),M=Math.ceil(l+u-p),_=Math.ceil(c+h-x);f={x:p,y:x,w:M,h:_}}return{x:u,y:h,h:c,w:l,excavation:f}}(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})();function Xw(t){const e=t,{value:n,size:i=Fw,level:r=kw,bgColor:s=Bw,fgColor:a=zw,includeMargin:o=Hw,imageSettings:l}=e,c=Uw(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let u=Ra.QrCode.encodeText(n,Ow[r]).getModules();const h=o?Bx:0,f=u.length+h*2,p=jw(u,i,o,l);let x=null;l!=null&&p!=null&&(p.excavation!=null&&(u=Ww(u,p.excavation)),x=wa.createElement("image",{xlinkHref:l.src,height:p.h,width:p.w,x:p.x+h,y:p.y+h,preserveAspectRatio:"none"}));const M=Vw(u,h);return wa.createElement("svg",Dw({height:i,width:i,viewBox:`0 0 ${f} ${f}`},c),wa.createElement("path",{fill:s,d:`M0,0 h${f}v${f}H0z`,shapeRendering:"crispEdges"}),wa.createElement("path",{fill:a,d:M,shapeRendering:"crispEdges"}),x)}function qw(){const t=hE,e=()=>{const n=document.getElementById("chatbot-qr");if(!n)return;const i=new XMLSerializer().serializeToString(n),r=new Blob([i],{type:"image/svg+xml"}),s=document.createElement("a");s.href=URL.createObjectURL(r),s.download="mit-chatbot-qr.svg",s.click()};return m.jsxs("div",{className:"qr-panel",children:[m.jsxs("div",{className:"qr-panel-info",children:[m.jsx("span",{className:"qr-badge",children:"Mobile Campus Companion"}),m.jsx("h2",{className:"qr-title",children:"Scan to Access on Mobile"}),m.jsx("p",{className:"qr-subtitle",children:"Visiting MIT Anna University campus? Scan this QR code with your smartphone camera to keep the campus guide, office directory, and admission assistant in your pocket."}),m.jsx("div",{className:"qr-url",children:t}),m.jsxs("button",{className:"qr-download-btn",onClick:e,type:"button",children:[m.jsx("span",{children:"⬇"}),m.jsx("span",{children:"Download QR Code (SVG)"})]})]}),m.jsx("div",{className:"qr-code-wrapper",children:m.jsx(Xw,{id:"chatbot-qr",value:t,size:160,bgColor:"#ffffff",fgColor:"#13294b",level:"H",includeMargin:!0})})]})}const $w=[{category:"Departments",icon:"🏛️",title:"Academic Departments",desc:"Explore Aeronautical, Automobile, Computer Science, ECE, IT, Production, and other specialized engineering departments."},{category:"Admission",icon:"🎓",title:"Admission & Cutoffs",desc:"TNEA counseling procedures, eligibility requirements, cutoff score trends, and reservation category details."},{category:"Required Documents",icon:"📑",title:"Required Documents",desc:"Complete checklist of mandatory 10th/12th marksheets, Transfer Certificate, Community Certificate, and allotment copies."},{category:"Facilities",icon:"🏢",title:"Campus Facilities & Offices",desc:"Dean office, Controller of Examinations, research laboratories, library resources, and administrative locations."},{category:"Canteen",icon:"🍽️",title:"Today's Canteen Menu",desc:"Check live breakfast, lunch meals, snack offerings, and beverage prices at the campus canteen."},{category:"Campus Map",icon:"🗺️",title:"Interactive Campus Map",desc:"Official static campus layout with buildings 01–52, Front/Back Gates, live GPS location, and step-by-step walking routes.",isMap:!0},{category:"Hostel",icon:"🛏️",title:"Hostels & Transport",desc:"Hostel accommodation rules, mess facilities, Chromepet railway station proximity, and campus bus routes."}];function Kw({onNavigateToMap:t}){const e=()=>{t?t():window.dispatchEvent(new CustomEvent("mit-navigate",{detail:{route:"map"}}))},n=s=>{const a=new CustomEvent("open-mit-chatbot",{detail:{category:s,fullScreen:!1}});window.dispatchEvent(a)},i=()=>{const s=new CustomEvent("open-mit-chatbot",{detail:{fullScreen:!0}});window.dispatchEvent(s)},r=()=>{const s=new CustomEvent("open-mit-chatbot",{detail:{fullScreen:!1}});window.dispatchEvent(s)};return m.jsxs("div",{className:"chat-page",children:[m.jsx("aside",{className:"top-notice-bar","aria-label":"Official announcement",children:m.jsxs("div",{className:"top-notice-inner",children:[m.jsxs("div",{className:"top-notice-left",children:[m.jsx("span",{className:"top-notice-badge",children:"OFFICIAL"}),m.jsx("span",{children:"Madras Institute of Technology Campus • Anna University, Chennai"})]}),m.jsxs("div",{className:"top-notice-links",children:[m.jsx("a",{href:"/map",className:"top-notice-link",onClick:s=>{s.preventDefault(),e()},children:"🗺 Campus Map"}),m.jsx("a",{href:"#topics",className:"top-notice-link",children:"Directory"}),m.jsx("a",{href:"#mobile-qr",className:"top-notice-link",children:"Mobile QR"}),m.jsx("a",{href:"/admin",className:"top-notice-link",children:"Admin Portal"})]})]})}),m.jsx("header",{className:"site-header",children:m.jsxs("div",{className:"site-header-inner",children:[m.jsxs("div",{className:"brand-section",children:[m.jsx("div",{className:"brand-crest","aria-hidden":"true",children:"🎓"}),m.jsxs("div",{className:"brand-text",children:[m.jsx("span",{className:"brand-title",children:"Madras Institute of Technology"}),m.jsx("span",{className:"brand-subtitle",children:"Anna University, Chromepet, Chennai"})]})]}),m.jsxs("nav",{className:"header-nav","aria-label":"Main Navigation",children:[m.jsxs("button",{type:"button",className:"nav-link",style:{background:"rgba(2, 132, 199, 0.15)",color:"#0284c7",fontWeight:"700",border:"1px solid rgba(2, 132, 199, 0.3)",borderRadius:"8px",padding:"6px 12px",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},onClick:e,children:[m.jsx("span",{children:"🗺️"}),m.jsx("span",{children:"Campus Map"})]}),m.jsx("a",{href:"#topics",className:"nav-link",children:"Topics"}),m.jsx("a",{href:"#how-it-works",className:"nav-link",children:"Guide"}),m.jsx("a",{href:"#mobile-qr",className:"nav-link",children:"Mobile QR"}),m.jsx("a",{href:"/admin",className:"nav-link",children:"Admin"}),m.jsxs("button",{className:"nav-cta-btn",onClick:r,type:"button",children:[m.jsx("span",{children:"💬"}),m.jsx("span",{children:"Open Assistant"})]})]})]})}),m.jsxs("main",{className:"site-main",children:[m.jsxs("section",{className:"hero",children:[m.jsx("div",{className:"hero-tag",children:"Official Campus Knowledge Desk"}),m.jsx("h1",{children:"MIT Campus & Admission Assistant"}),m.jsx("p",{children:"Welcome to the digital campus assistant for Madras Institute of Technology (MIT), Anna University. Get instant, verified guidance on undergraduate admissions, TNEA counseling cutoffs, required verification documents, department locations, hostel facilities, and live canteen menus."}),m.jsxs("div",{className:"hero-actions",children:[m.jsxs("button",{className:"btn-primary",style:{background:"linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",boxShadow:"0 4px 14px rgba(2, 132, 199, 0.35)"},onClick:e,type:"button",children:[m.jsx("span",{children:"🗺️"}),m.jsx("span",{children:"Open Interactive Campus Map"})]}),m.jsxs("button",{className:"btn-secondary",onClick:i,type:"button",children:[m.jsx("span",{children:"💬"}),m.jsx("span",{children:"Launch Full-Screen Assistant"})]}),m.jsx("a",{href:"#topics",className:"btn-secondary",children:m.jsx("span",{children:"Explore Topics ↓"})})]})]}),m.jsxs("section",{id:"topics",className:"topics-section",children:[m.jsxs("div",{className:"section-header",children:[m.jsx("div",{className:"section-eyebrow",children:"Instant Campus Information"}),m.jsx("h2",{className:"section-title",children:"Frequently Requested Campus Topics"}),m.jsx("p",{className:"section-desc",children:"Select any topic below to directly ask the assistant for detailed answers."})]}),m.jsx("div",{className:"topics-grid",children:$w.map(s=>{const a=()=>{s.isMap?e():n(s.category)};return m.jsxs("div",{className:`topic-card ${s.isMap?"topic-card-map-highlight":""}`,onClick:a,role:"button",tabIndex:0,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&a()},children:[m.jsxs("div",{children:[m.jsx("span",{className:"topic-icon","aria-hidden":"true",children:s.icon}),m.jsx("h3",{className:"topic-title",children:s.title}),m.jsx("p",{className:"topic-snippet",children:s.desc})]}),m.jsxs("div",{className:"topic-action",children:[m.jsx("span",{children:s.isMap?"Launch Campus Map":`Ask about ${s.category}`}),m.jsx("span",{children:"→"})]})]},s.category)})})]}),m.jsxs("section",{id:"how-it-works",className:"guide-section",children:[m.jsxs("div",{className:"section-header",children:[m.jsx("div",{className:"section-eyebrow",children:"Virtual Help Desk"}),m.jsx("h2",{className:"section-title",children:"How the Campus Assistant Works"}),m.jsx("p",{className:"section-desc",children:"Designed to reduce walk-in queues and provide fast answers for students, parents, and visitors."})]}),m.jsxs("div",{className:"guide-steps",children:[m.jsxs("div",{className:"step-card",children:[m.jsx("div",{className:"step-number",children:"1"}),m.jsx("h3",{className:"step-title",children:"Ask in Natural English"}),m.jsxs("p",{className:"step-desc",children:["Type queries naturally such as ",m.jsx("em",{children:'"Where is Aeronautical Engineering?"'})," or ",m.jsx("em",{children:'"What certificates do I need for admission?"'})]})]}),m.jsxs("div",{className:"step-card",children:[m.jsx("div",{className:"step-number",children:"2"}),m.jsx("h3",{className:"step-title",children:"Click One-Tap Shortcuts"}),m.jsx("p",{className:"step-desc",children:"Browse consolidated information by tapping quick category tags for Departments, Admission, Hostels, Transport, and Offices."})]}),m.jsxs("div",{className:"step-card",children:[m.jsx("div",{className:"step-number",children:"3"}),m.jsx("h3",{className:"step-title",children:"Check Today's Canteen"}),m.jsx("p",{className:"step-desc",children:"Get today's fresh breakfast, lunch, and snack menu with pricing directly from the smart canteen integration."})]})]})]}),m.jsx("section",{id:"mobile-qr",className:"qr-section",children:m.jsx(qw,{})})]}),m.jsxs("footer",{className:"site-footer",children:[m.jsxs("div",{className:"site-footer-inner",children:[m.jsxs("div",{className:"footer-col",children:[m.jsx("h3",{children:"Madras Institute of Technology"}),m.jsxs("p",{children:["A premier constituent campus of Anna University, established in 1949.",m.jsx("br",{}),"Chromepet, Chennai – 600 044, Tamil Nadu, India.",m.jsx("br",{}),"Phone: +91 44 2251 6002 | Email: admission@mitindia.edu"]})]}),m.jsxs("div",{className:"footer-col",children:[m.jsx("h3",{children:"Quick Links"}),m.jsxs("ul",{className:"footer-links",children:[m.jsx("li",{children:m.jsx("a",{href:"#topics",children:"Campus Directory"})}),m.jsx("li",{children:m.jsx("a",{href:"#mobile-qr",children:"Mobile QR Code"})}),m.jsx("li",{children:m.jsx("a",{href:"/admin",children:"Administrator Portal"})}),m.jsx("li",{children:m.jsx("a",{href:"https://www.annauniv.edu",target:"_blank",rel:"noreferrer",children:"Anna University Official"})})]})]}),m.jsxs("div",{className:"footer-col",children:[m.jsx("h3",{children:"Campus Information Desk"}),m.jsxs("p",{children:["Administrative Office Hours:",m.jsx("br",{}),"Monday to Friday: 9:00 AM – 5:00 PM",m.jsx("br",{}),"Saturday: 9:00 AM – 1:00 PM (Working Saturdays)"]})]})]}),m.jsxs("div",{className:"footer-bottom",children:[m.jsxs("span",{children:["© ",new Date().getFullYear()," Madras Institute of Technology, Anna University. All rights reserved."]}),m.jsx("span",{children:"MIT Campus & Admission Assistant • Version 1.0"})]})]}),m.jsx(Iw,{})]})}const Yw=async(t,e)=>{const{data:n}=await Gi.post("/api/admin/login",{username:t,password:e});return localStorage.setItem("admin_token",n.access_token),n},Zw=()=>localStorage.removeItem("admin_token"),Jw=async()=>{const{data:t}=await Gi.get("/api/admin/knowledge-base");return t},Qw=async t=>{const{data:e}=await Gi.post("/api/admin/knowledge-base",t);return e},e1=async(t,e)=>{const{data:n}=await Gi.put(`/api/admin/knowledge-base/${t}`,e);return n},t1=async t=>{const{data:e}=await Gi.delete(`/api/admin/knowledge-base/${t}`);return e},vu={category:"",question:"",keywords:"",answer:"",metadata_json:""},Ym=["Departments","Required Documents","Facilities","Offices","Canteen","Admission","Hostel","Transport","Contact","General","Fees"];function n1(){const[t,e]=Ce.useState(localStorage.getItem("admin_token")),[n,i]=Ce.useState({username:"",password:""}),[r,s]=Ce.useState([]),[a,o]=Ce.useState(vu),[l,c]=Ce.useState(null),[u,h]=Ce.useState(""),[f,p]=Ce.useState(null),[x,M]=Ce.useState(null),[_,d]=Ce.useState(!1);Ce.useEffect(()=>{t&&g()},[t]);const g=async()=>{try{const w=await Jw();s(w)}catch{M("Failed to load knowledge base entries.")}},S=async w=>{w.preventDefault(),M(null);try{await Yw(n.username,n.password),e(localStorage.getItem("admin_token"))}catch{M("Invalid credentials. Please check your username and password.")}},v=()=>{Zw(),e(null),s([])},T=async w=>{var N,I;w.preventDefault(),M(null),d(!0);try{const k=Object.fromEntries(Object.entries(a).filter(([,W])=>W&&W.trim()));l?(await e1(l,k),p("Entry updated successfully.")):(await Qw(k),p("Entry created successfully.")),o(vu),c(null),await g()}catch(k){M(((I=(N=k.response)==null?void 0:N.data)==null?void 0:I.detail)||"Failed to save entry.")}finally{d(!1)}},A=w=>{c(w.id),o({category:w.category||"",question:w.question||"",keywords:w.keywords||"",answer:w.answer||"",metadata_json:w.metadata_json||""}),window.scrollTo({top:0,behavior:"smooth"})},C=async w=>{if(window.confirm("Are you sure you want to delete this knowledge base entry?"))try{await t1(w),p("Entry deleted successfully."),await g()}catch{M("Failed to delete entry.")}},y=u?r.filter(w=>w.category===u):r;return t?m.jsxs("div",{className:"admin-page",children:[m.jsxs("div",{className:"admin-header",children:[m.jsxs("div",{children:[m.jsxs("h1",{children:[m.jsx("span",{children:"🎓"}),m.jsx("span",{children:"MIT Assistant Administration"})]}),m.jsx("div",{style:{fontSize:"13px",color:"#64748b",marginTop:"2px"},children:"Madras Institute of Technology • Knowledge Base Management"})]}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[m.jsx("a",{href:"/",style:{color:"#13294b",fontSize:"13.5px",fontWeight:600,textDecoration:"none",padding:"8px 14px",borderRadius:"6px",border:"1px solid #cbd5e1",backgroundColor:"#ffffff"},children:"← View Campus Site"}),m.jsx("button",{className:"admin-logout-btn",onClick:v,type:"button",children:"Sign Out"})]})]}),f&&m.jsxs("div",{className:"admin-success",onClick:()=>p(null),role:"status",children:[m.jsxs("span",{children:["✓ ",f]}),m.jsx("span",{style:{fontWeight:700},children:"✕"})]}),x&&m.jsxs("div",{className:"admin-error",onClick:()=>M(null),role:"alert",children:[m.jsxs("span",{children:["⚠️ ",x]}),m.jsx("span",{style:{fontWeight:700},children:"✕"})]}),m.jsxs("section",{className:"admin-form-section",children:[m.jsx("h2",{children:l?`Edit Entry (ID: #${l})`:"Create New Knowledge Base Entry"}),m.jsxs("form",{className:"admin-form",onSubmit:T,children:[m.jsxs("select",{value:a.category,onChange:w=>o({...a,category:w.target.value}),required:!0,children:[m.jsx("option",{value:"",children:"Select Category *"}),Ym.map(w=>m.jsx("option",{value:w,children:w},w))]}),m.jsx("input",{placeholder:"Question * (e.g., 'What are the required certificates for admission?')",value:a.question,onChange:w=>o({...a,question:w.target.value}),required:!0}),m.jsx("input",{placeholder:"Keywords (comma separated, e.g., 'certificates, tc, documents, admission')",value:a.keywords,onChange:w=>o({...a,keywords:w.target.value})}),m.jsx("textarea",{placeholder:"Verified Answer * (provide complete and clear campus details)",rows:5,value:a.answer,onChange:w=>o({...a,answer:w.target.value}),required:!0}),m.jsxs("div",{className:"admin-form-actions",children:[m.jsx("button",{type:"submit",disabled:_,children:l?"Save Changes":"Publish Entry"}),l&&m.jsx("button",{type:"button",onClick:()=>{c(null),o(vu)},children:"Cancel Edit"})]})]})]}),m.jsxs("section",{className:"admin-list-section",children:[m.jsxs("div",{className:"admin-list-header",children:[m.jsxs("h2",{children:["Active Knowledge Base (",m.jsxs("span",{style:{color:"#13294b"},children:[y.length," entries"]}),")"]}),m.jsxs("select",{value:u,onChange:w=>h(w.target.value),children:[m.jsxs("option",{value:"",children:["All Categories (",r.length,")"]}),Ym.map(w=>m.jsxs("option",{value:w,children:[w," (",r.filter(N=>N.category===w).length,")"]},w))]})]}),m.jsx("div",{className:"admin-table-wrapper",children:m.jsxs("table",{className:"admin-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{style:{width:"48px"},children:"ID"}),m.jsx("th",{style:{width:"130px"},children:"Category"}),m.jsx("th",{children:"Question"}),m.jsx("th",{children:"Verified Answer"}),m.jsx("th",{style:{width:"140px",textAlign:"center"},children:"Actions"})]})}),m.jsxs("tbody",{children:[y.map(w=>m.jsxs("tr",{children:[m.jsxs("td",{children:["#",w.id]}),m.jsx("td",{children:m.jsx("span",{className:"cat-badge",children:w.category})}),m.jsx("td",{className:"td-question",children:w.question}),m.jsxs("td",{className:"td-answer",children:[w.answer.slice(0,110),w.answer.length>110?"…":""]}),m.jsxs("td",{style:{textAlign:"center",whiteSpace:"nowrap"},children:[m.jsx("button",{className:"btn-edit",onClick:()=>A(w),type:"button",children:"Edit"}),m.jsx("button",{className:"btn-delete",onClick:()=>C(w.id),type:"button",children:"Delete"})]})]},w.id)),y.length===0&&m.jsx("tr",{children:m.jsx("td",{colSpan:5,style:{textAlign:"center",padding:"2.5rem",color:"#64748b"},children:"No knowledge base entries found in this category."})})]})]})})]})]}):m.jsx("div",{className:"admin-login-page",children:m.jsxs("div",{className:"admin-login-card",children:[m.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"🎓"}),m.jsx("h2",{children:"Admin Portal"}),m.jsx("p",{children:"MIT Anna University Campus Assistant Administration"}),x&&m.jsx("div",{className:"admin-error",children:x}),m.jsxs("form",{onSubmit:S,children:[m.jsx("input",{placeholder:"Username",value:n.username,onChange:w=>i({...n,username:w.target.value}),required:!0,autoComplete:"username"}),m.jsx("input",{type:"password",placeholder:"Password",value:n.password,onChange:w=>i({...n,password:w.target.value}),required:!0,autoComplete:"current-password"}),m.jsx("button",{type:"submit",children:"Sign In to Dashboard"})]}),m.jsx("div",{style:{marginTop:"20px"},children:m.jsx("a",{href:"/",style:{color:"#13294b",fontSize:"13px",fontWeight:600,textDecoration:"none"},children:"← Return to Campus Assistant"})})]})})}const cc=[{id:"bld-01",number:"01",buildingNumber:"01",name:"Instrumentation Engineering - I",category:"Academic / Department",icon:"🏢",buildingPosition:{x:165,y:198,width:66,height:32},entrancePosition:{x:165,y:190},entranceNode:"node-r-01",x:165,y:198,width:66,height:32,gateNodeId:"node-r-01",accessNode:"node-r-01",buildingEntrance:{x:165,y:190},description:"Department of Instrumentation Engineering - Block 1, laboratory spaces, faculty rooms and measurement systems.",tags:["01","instrumentation","ie","engineering","sensors"]},{id:"bld-02",number:"02",buildingNumber:"02",name:"Instrumentation Engineering - II",category:"Academic / Department",icon:"🏢",buildingPosition:{x:168,y:145,width:54,height:25},entrancePosition:{x:168,y:172},entranceNode:"node-r-02",x:168,y:145,width:54,height:25,gateNodeId:"node-r-02",accessNode:"node-r-02",buildingEntrance:{x:168,y:172},description:"Department of Instrumentation Engineering - Block 2, research labs and control engineering setups.",tags:["02","instrumentation","ie","control"]},{id:"bld-03",number:"03",buildingNumber:"03",name:"Instrumentation Engineering",category:"Academic / Department",icon:"🏢",buildingPosition:{x:168,y:120,width:54,height:25},entrancePosition:{x:168,y:172},entranceNode:"node-r-03",x:168,y:120,width:54,height:25,gateNodeId:"node-r-03",accessNode:"node-r-03",buildingEntrance:{x:168,y:172},description:"Instrumentation Engineering Department Main Wing and departmental head office.",tags:["03","instrumentation","hod","department"]},{id:"bld-04",number:"04",buildingNumber:"04",name:"Administrative Block",category:"Administration",icon:"🏛️",buildingPosition:{x:224,y:114,width:64,height:58},entrancePosition:{x:248,y:172},entranceNode:"node-r-04",x:224,y:114,width:64,height:58,gateNodeId:"node-r-04",accessNode:"node-r-04",buildingEntrance:{x:248,y:172},description:"Main Campus Administrative Block, Dean Office, Academic Section, Student Affairs & Accounts.",tags:["04","admin","administrative","dean","office","principal","accounts","fees"]},{id:"bld-05",number:"05",buildingNumber:"05",name:"Golden Jubilee Park",category:"Sports / Recreation",icon:"🌳",buildingPosition:{x:236,y:200,width:56,height:52},entrancePosition:{x:236,y:185},entranceNode:"node-r-05",x:236,y:200,width:56,height:52,gateNodeId:"node-r-05",accessNode:"node-r-05",buildingEntrance:{x:236,y:185},description:"Central lush green park celebrating MIT Golden Jubilee, quiet relaxation space and gathering zone.",tags:["05","park","green","jubilee","garden","relax"]},{id:"bld-06",number:"06",buildingNumber:"06",name:"Rubber & Plastics Technology",category:"Academic / Department",icon:"🏢",buildingPosition:{x:206,y:270,width:34,height:28},entrancePosition:{x:205,y:295},entranceNode:"node-r-06",x:206,y:270,width:34,height:28,gateNodeId:"node-r-06",accessNode:"node-r-06",buildingEntrance:{x:205,y:295},description:"Department of Rubber and Plastics Technology, polymer processing labs and testing facilities.",tags:["06","rubber","plastics","polymer","rpt"]},{id:"bld-07",number:"07",buildingNumber:"07",name:"Avionics",category:"Academic / Department",icon:"✈️",buildingPosition:{x:256,y:260,width:28,height:32},entrancePosition:{x:305,y:265},entranceNode:"node-r-07",x:256,y:260,width:28,height:32,gateNodeId:"node-r-07",accessNode:"node-r-07",buildingEntrance:{x:305,y:265},description:"Division of Avionics, aerospace electronics, guidance, navigation and cockpit display systems.",tags:["07","avionics","aero","aviation","navigation"]},{id:"bld-08",number:"08",buildingNumber:"08",name:"Dept of Computer Technology (CB Block)",category:"Academic / Department",icon:"💻",buildingPosition:{x:234,y:306,width:50,height:40},entrancePosition:{x:258,y:350},entranceNode:"node-r-08",x:234,y:306,width:50,height:40,gateNodeId:"node-r-08",accessNode:"node-r-08",buildingEntrance:{x:258,y:350},description:"Department of Computer Technology - CB Block, computer laboratories and software engineering centers.",tags:["08","computer","ct","cb block","computing","coding","cse"]},{id:"bld-09",number:"09",buildingNumber:"09",name:"Dept of Computer Technology (GJ Block)",category:"Academic / Department",icon:"💻",buildingPosition:{x:222,y:260,width:36,height:28},entrancePosition:{x:250,y:262},entranceNode:"node-r-09",x:222,y:260,width:36,height:28,gateNodeId:"node-r-09",accessNode:"node-r-09",buildingEntrance:{x:250,y:262},description:"Department of Computer Technology - Golden Jubilee Block, network labs and classrooms.",tags:["09","computer","ct","gj block","computing"]},{id:"bld-10",number:"10",buildingNumber:"10",name:"AU-KBC Research Centre",category:"Research Centre",icon:"🔬",buildingPosition:{x:302,y:322,width:50,height:30},entrancePosition:{x:326,y:335},entranceNode:"node-r-10",x:302,y:322,width:50,height:30,gateNodeId:"node-r-10",accessNode:"node-r-10",buildingEntrance:{x:326,y:335},description:"Anna University - K. B. Chandrasekhar (AU-KBC) Research Centre Wing 1, cutting-edge communications & NLP research.",tags:["10","aukbc","kbc","research","nlp","wireless"]},{id:"bld-11",number:"11",buildingNumber:"11",name:"AU-KBC Research Centre",category:"Research Centre",icon:"🔬",buildingPosition:{x:368,y:320,width:52,height:30},entrancePosition:{x:394,y:335},entranceNode:"node-r-11",x:368,y:320,width:52,height:30,gateNodeId:"node-r-11",accessNode:"node-r-11",buildingEntrance:{x:394,y:335},description:"AU-KBC Research Centre Wing 2, bioinformatics, photonics and cryptographic labs.",tags:["11","aukbc","kbc","research","bio"]},{id:"bld-12",number:"12",buildingNumber:"12",name:"Department of Automobile Engineering",category:"Academic / Department",icon:"🚗",buildingPosition:{x:310,y:250,width:112,height:46},entrancePosition:{x:360,y:242},entranceNode:"node-r-12",x:310,y:250,width:112,height:46,gateNodeId:"node-r-12",accessNode:"node-r-12",buildingEntrance:{x:360,y:242},description:"Department of Automobile Engineering, engine testing facility, vehicle dynamics and chassis labs.",tags:["12","automobile","auto","car","vehicle","engine","mechanical"]},{id:"bld-13",number:"13",buildingNumber:"13",name:"Department of Information Technology",category:"Academic / Department",icon:"💻",buildingPosition:{x:302,y:200,width:28,height:36},entrancePosition:{x:302,y:195},entranceNode:"node-r-13",x:302,y:200,width:28,height:36,gateNodeId:"node-r-13",accessNode:"node-r-13",buildingEntrance:{x:302,y:195},description:"Department of Information Technology (IT), cloud computing, AI labs, data science wing.",tags:["13","it","information technology","tech","software","programming","ai"]},{id:"bld-14",number:"14",buildingNumber:"14",name:"Department of Electronics Engineering - I",category:"Academic / Department",icon:"⚡",buildingPosition:{x:342,y:200,width:28,height:36},entrancePosition:{x:345,y:185},entranceNode:"node-r-14",x:342,y:200,width:28,height:36,gateNodeId:"node-r-14",accessNode:"node-r-14",buildingEntrance:{x:345,y:185},description:"Department of Electronics Engineering (ECE) - Block 1, VLSI design, signal processing labs.",tags:["14","electronics","ece","vlsi","circuits"]},{id:"bld-15",number:"15",buildingNumber:"15",name:"Department of Electronics Engineering - II",category:"Academic / Department",icon:"⚡",buildingPosition:{x:384,y:200,width:34,height:36},entrancePosition:{x:435,y:185},entranceNode:"node-r-15",x:384,y:200,width:34,height:36,gateNodeId:"node-r-15",accessNode:"node-r-15",buildingEntrance:{x:435,y:185},description:"Department of Electronics Engineering (ECE) - Block 2, embedded systems and optical comms.",tags:["15","electronics","ece","embedded","microprocessor"]},{id:"bld-16",number:"16",buildingNumber:"16",name:"Lecture Hall Complex",category:"Academic / Department",icon:"🏫",buildingPosition:{x:300,y:122,width:30,height:60},entrancePosition:{x:290,y:125},entranceNode:"node-r-16",x:300,y:122,width:30,height:60,gateNodeId:"node-r-16",accessNode:"node-r-16",buildingEntrance:{x:290,y:125},description:"Central Lecture Hall Complex (LHC), smart audiovisual seminar halls and tiered classrooms.",tags:["16","lhc","lecture","hall","class","classroom"]},{id:"bld-17",number:"17",buildingNumber:"17",name:"Rajam Lecture Hall Complex",category:"Academic / Department",icon:"🏫",buildingPosition:{x:334,y:116,width:44,height:66},entrancePosition:{x:385,y:125},entranceNode:"node-r-17",x:334,y:116,width:44,height:66,gateNodeId:"node-r-17",accessNode:"node-r-17",buildingEntrance:{x:385,y:125},description:"Rajam Lecture Hall Complex (RLHC), multi-tiered state-of-the-art amphitheaters and classrooms.",tags:["17","rajam","rlhc","lecture","complex","exam"]},{id:"bld-18",number:"18",buildingNumber:"18",name:"AU Zone IV Exam Office",category:"Administration",icon:"📑",buildingPosition:{x:408,y:138,width:40,height:30},entrancePosition:{x:415,y:170},entranceNode:"node-r-18",x:408,y:138,width:40,height:30,gateNodeId:"node-r-18",accessNode:"node-r-18",buildingEntrance:{x:415,y:170},description:"Anna University Zone IV Zonal Examination Coordination Centre.",tags:["18","exam","zone iv","coe","evaluation","zonal"]},{id:"bld-19",number:"19",buildingNumber:"19",name:"Canteen",category:"Food / Canteen",icon:"🍴",buildingPosition:{x:386,y:102,width:54,height:30},entrancePosition:{x:415,y:125},entranceNode:"node-r-19",x:386,y:102,width:54,height:30,gateNodeId:"node-r-19",accessNode:"node-r-19",buildingEntrance:{x:415,y:125},description:"Main Campus Canteen offering breakfast, hot lunch meals, snacks, coffee and fresh juices.",tags:["19","canteen","food","meals","lunch","breakfast","tea","coffee","snacks"]},{id:"bld-20",number:"20",buildingNumber:"20",name:"Centre for IOT",category:"Research Centre",icon:"🌐",buildingPosition:{x:392,y:164,width:56,height:26},entrancePosition:{x:435,y:185},entranceNode:"node-r-20",x:392,y:164,width:56,height:26,gateNodeId:"node-r-20",accessNode:"node-r-20",buildingEntrance:{x:435,y:185},description:"Centre for Internet of Things (CIOT), smart embedded sensors, LoRaWAN and cloud connectivity testbeds.",tags:["20","iot","internet of things","smart","sensors"]},{id:"bld-21",number:"21",buildingNumber:"21",name:"Aerospace Engineering",category:"Academic / Department",icon:"🚀",buildingPosition:{x:446,y:248,width:62,height:44},entrancePosition:{x:478,y:244},entranceNode:"node-r-21",x:446,y:248,width:62,height:44,gateNodeId:"node-r-21",accessNode:"node-r-21",buildingEntrance:{x:478,y:244},description:"Department of Aerospace Engineering, supersonic wind tunnels, propulsion labs, aircraft structures.",tags:["21","aerospace","aero","space","rocket","wind tunnel"]},{id:"bld-22",number:"22",buildingNumber:"22",name:"Rajam Hall - Auditorium",category:"Sports / Recreation",icon:"🎭",buildingPosition:{x:516,y:326,width:36,height:40},entrancePosition:{x:534,y:335},entranceNode:"node-r-22",x:516,y:326,width:36,height:40,gateNodeId:"node-r-22",accessNode:"node-r-22",buildingEntrance:{x:534,y:335},description:"Rajam Hall Auditorium, premier campus auditorium for convocations, symposiums and cultural events.",tags:["22","rajam hall","auditorium","audi","hall","event","symposium"]},{id:"bld-23",number:"23",buildingNumber:"23",name:"NSO / NSS / YRC",category:"Administration",icon:"🤝",buildingPosition:{x:564,y:340,width:38,height:30},entrancePosition:{x:582,y:345},entranceNode:"node-r-23",x:564,y:340,width:38,height:30,gateNodeId:"node-r-23",accessNode:"node-r-23",buildingEntrance:{x:582,y:345},description:"National Sports Org (NSO), National Service Scheme (NSS) and Youth Red Cross (YRC) Campus HQ.",tags:["23","nss","nso","yrc","social service","sports"]},{id:"bld-24",number:"24",buildingNumber:"24",name:"Centre for Aerospace Research (MICSAT)",category:"Research Centre",icon:"🛰️",buildingPosition:{x:612,y:334,width:38,height:30},entrancePosition:{x:630,y:345},entranceNode:"node-r-24",x:612,y:334,width:38,height:30,gateNodeId:"node-r-24",accessNode:"node-r-24",buildingEntrance:{x:630,y:345},description:"Centre for Aerospace Research (CASR / MICSAT), drone development, UAV flight testing & satellite research.",tags:["24","micsat","casr","uav","drone","aerospace","satellite"]},{id:"bld-25",number:"25",buildingNumber:"25",name:"C.N.Ramaswamy OAT",category:"Sports / Recreation",icon:"🏟️",buildingPosition:{x:580,y:306,width:24,height:26},entrancePosition:{x:580,y:305},entranceNode:"node-r-25",x:580,y:306,width:24,height:26,gateNodeId:"node-r-25",accessNode:"node-r-25",buildingEntrance:{x:580,y:305},description:"C.N. Ramaswamy Open Air Theatre (OAT), cultural fests, student assemblies and movie screenings.",tags:["25","oat","theatre","ramaswamy","open air","fest"]},{id:"bld-26",number:"26",buildingNumber:"26",name:"MIT Library",category:"Library",icon:"📚",buildingPosition:{x:542,y:246,width:84,height:50},entrancePosition:{x:580,y:242},entranceNode:"node-r-26",x:542,y:246,width:84,height:50,gateNodeId:"node-r-26",accessNode:"node-r-26",buildingEntrance:{x:580,y:242},description:"Central MIT Library, extensive collection of engineering journals, digital library & silent reading halls.",tags:["26","library","books","journals","reading","study","digital"]},{id:"bld-27",number:"27",buildingNumber:"27",name:"Department of Production Technology (Applied Science & Humanities)",category:"Academic / Department",icon:"⚙️",buildingPosition:{x:534,y:206,width:110,height:30},entrancePosition:{x:540,y:185},entranceNode:"node-r-27",x:534,y:206,width:110,height:30,gateNodeId:"node-r-27",accessNode:"node-r-27",buildingEntrance:{x:540,y:185},description:"Department of Production Technology wing, Applied Science, Mathematics, Physics, and Chemistry divisions.",tags:["27","production","pt","science","humanities","maths","physics","chemistry"]},{id:"bld-28",number:"28",buildingNumber:"28",name:"Hanger-2",category:"Academic / Department",icon:"🛩️",buildingPosition:{x:476,y:108,width:54,height:80},entrancePosition:{x:478,y:185},entranceNode:"node-r-28",x:476,y:108,width:54,height:80,gateNodeId:"node-r-28",accessNode:"node-r-28",buildingEntrance:{x:478,y:185},description:"Aeronautical Hanger-2, aircraft maintenance training, fighter jet airframes and structural labs.",tags:["28","hanger","hanger 2","aircraft","jet","aero"]},{id:"bld-29",number:"29",buildingNumber:"29",name:"Department of Production Technology",category:"Academic / Department",icon:"⚙️",buildingPosition:{x:562,y:102,width:72,height:36},entrancePosition:{x:540,y:140},entranceNode:"node-r-29",x:562,y:102,width:72,height:36,gateNodeId:"node-r-29",accessNode:"node-r-29",buildingEntrance:{x:540,y:140},description:"Department of Production Technology Main Block, CNC machining, robotics and automated manufacturing.",tags:["29","production","pt","manufacturing","cnc","robotics"]},{id:"bld-30",number:"30",buildingNumber:"30",name:"Central Workshop",category:"Academic / Department",icon:"🔧",buildingPosition:{x:538,y:140,width:74,height:36},entrancePosition:{x:540,y:185},entranceNode:"node-r-30",x:538,y:140,width:74,height:36,gateNodeId:"node-r-30",accessNode:"node-r-30",buildingEntrance:{x:540,y:185},description:"MIT Central Workshop, foundry, smithy, welding, carpentry, fitting and machine shops.",tags:["30","workshop","welding","carpentry","machine","fitting"]},{id:"bld-31",number:"31",buildingNumber:"31",name:"Mechatronics",category:"Academic / Department",icon:"🤖",buildingPosition:{x:610,y:140,width:28,height:32},entrancePosition:{x:640,y:185},entranceNode:"node-r-31",x:610,y:140,width:28,height:32,gateNodeId:"node-r-31",accessNode:"node-r-31",buildingEntrance:{x:640,y:185},description:"Division of Mechatronics Engineering, PLC automation, industrial robotics and actuator labs.",tags:["31","mechatronics","robotics","automation","plc","sensors"]},{id:"bld-32",number:"32",buildingNumber:"32",name:"Hanger-1",category:"Academic / Department",icon:"🛩️",buildingPosition:{x:646,y:108,width:56,height:80},entrancePosition:{x:640,y:185},entranceNode:"node-r-32",x:646,y:108,width:56,height:80,gateNodeId:"node-r-32",accessNode:"node-r-32",buildingEntrance:{x:640,y:185},description:"Aeronautical Hanger-1, historic aircraft exhibition, flight test instrumentation and avionics integration.",tags:["32","hanger","hanger 1","aircraft","aero","aviation"]},{id:"bld-33",number:"33",buildingNumber:"33",name:"Alumni House",category:"Administration",icon:"🏡",buildingPosition:{x:646,y:210,width:26,height:24},entrancePosition:{x:650,y:242},entranceNode:"node-r-33",x:646,y:210,width:26,height:24,gateNodeId:"node-r-33",accessNode:"node-r-33",buildingEntrance:{x:650,y:242},description:"MIT Alumni Association House, connecting global alumni and hosting visiting dignitaries.",tags:["33","alumni","guest","association","mitaa"]},{id:"bld-34",number:"34",buildingNumber:"34",name:"Pebbles Track",category:"Sports / Recreation",icon:"🛤️",buildingPosition:{x:684,y:206,width:22,height:24},entrancePosition:{x:686,y:230},entranceNode:"node-r-34",x:684,y:206,width:22,height:24,gateNodeId:"node-r-34",accessNode:"node-r-34",buildingEntrance:{x:686,y:230},description:"Acupressure pebbles reflexology walking track in campus gardens.",tags:["34","pebbles","track","walk","garden","health"]},{id:"bld-35",number:"35",buildingNumber:"35",name:"Overhead Treatment Plant",category:"Utility",icon:"💧",buildingPosition:{x:714,y:200,width:28,height:28},entrancePosition:{x:722,y:185},entranceNode:"node-r-35",x:714,y:200,width:28,height:28,shape:"circle",gateNodeId:"node-r-35",accessNode:"node-r-35",buildingEntrance:{x:722,y:185},description:"Campus Water Treatment & Overhead Reservoir Tank supplying clean potable water to campus.",tags:["35","treatment plant","water","tank","overhead","utility"]},{id:"bld-36",number:"36",buildingNumber:"36",name:"[UNNAMED / NOT CLEARLY LISTED IN BUILDING INDEX]",category:"Academic / Department",icon:"🏢",buildingPosition:{x:680,y:258,width:42,height:34},entrancePosition:{x:700,y:315},entranceNode:"node-r-36",x:680,y:258,width:42,height:34,gateNodeId:"node-r-36",accessNode:"node-r-36",buildingEntrance:{x:700,y:315},description:"Campus facility structure labeled 36 on physical layout (flexible entry pending formal index update).",tags:["36","unnamed","annex"]},{id:"bld-37",number:"37",buildingNumber:"37",name:"Rajam Hostel",category:"Hostel",icon:"🏠",buildingPosition:{x:764,y:202,width:30,height:58},entrancePosition:{x:790,y:185},entranceNode:"node-r-37",x:764,y:202,width:30,height:58,gateNodeId:"node-r-37",accessNode:"node-r-37",buildingEntrance:{x:790,y:185},description:"Rajam Hostel block for resident undergraduate engineering students.",tags:["37","rajam hostel","hostel","rooms","boarding"]},{id:"bld-38-tm",number:"38",buildingNumber:"38",name:"Tamil Mandram Office",category:"Administration",icon:"🏛️",buildingPosition:{x:796,y:190,width:24,height:24},entrancePosition:{x:790,y:185},entranceNode:"node-r-38-tm",x:796,y:190,width:24,height:24,gateNodeId:"node-r-38-tm",accessNode:"node-r-38-tm",buildingEntrance:{x:790,y:185},description:"MIT Tamil Mandram cultural affairs office, organizing campus Tamil literary celebrations.",tags:["38","tamil mandram","cultural","club","office"]},{id:"bld-38-ho",number:"38",buildingNumber:"38",name:"Hostel Office",category:"Administration",icon:"🏢",buildingPosition:{x:824,y:200,width:38,height:28},entrancePosition:{x:865,y:185},entranceNode:"node-r-38-ho",x:824,y:200,width:38,height:28,gateNodeId:"node-r-38-ho",accessNode:"node-r-38-ho",buildingEntrance:{x:865,y:185},description:"Chief Hostel Executive Warden Office, fee payments, room allotments and resident student support.",tags:["38","hostel office","warden","hostel admin","fees"]},{id:"bld-39",number:"39",buildingNumber:"39",name:"Health Centre",category:"Health",icon:"🏥",buildingPosition:{x:854,y:262,width:30,height:32},entrancePosition:{x:858,y:305},entranceNode:"node-r-39",x:854,y:262,width:30,height:32,gateNodeId:"node-r-39",accessNode:"node-r-39",buildingEntrance:{x:858,y:305},description:"MIT Campus Health Centre, 24x7 doctor on call, basic medical clinic, pharmacy and emergency first-aid.",tags:["39","health centre","hospital","doctor","clinic","medical","emergency"]},{id:"bld-40",number:"40",buildingNumber:"40",name:"[USE MAP POSITION / VERIFY FROM SOURCE IMAGE]",category:"Academic / Department",icon:"🏢",buildingPosition:{x:842,y:290,width:32,height:40},entrancePosition:{x:858,y:305},entranceNode:"node-r-40",x:842,y:290,width:32,height:40,gateNodeId:"node-r-40",accessNode:"node-r-40",buildingEntrance:{x:858,y:305},description:"Campus facility building 40 on layout image (data structure kept flexible for future verified updates).",tags:["40","building 40"]},{id:"bld-41",number:"41",buildingNumber:"41",name:"Health Centre",category:"Health",icon:"🏥",buildingPosition:{x:894,y:252,width:34,height:48},entrancePosition:{x:858,y:305},entranceNode:"node-r-41",x:894,y:252,width:34,height:48,gateNodeId:"node-r-41",accessNode:"node-r-41",buildingEntrance:{x:858,y:305},description:"MIT Health and Wellness Centre annex, student consultations and nurse station.",tags:["41","health centre","medical","clinic","wellness"]},{id:"bld-42",number:"42",buildingNumber:"42",name:"Cauvery Hostel",category:"Hostel",icon:"🏠",buildingPosition:{x:926,y:266,width:38,height:44},entrancePosition:{x:930,y:290},entranceNode:"node-r-42",x:926,y:266,width:38,height:44,gateNodeId:"node-r-42",accessNode:"node-r-42",buildingEntrance:{x:930,y:290},description:"Cauvery Hostel residential block with spacious rooms and study lounges.",tags:["42","cauvery","hostel","residence"]},{id:"bld-43",number:"43",buildingNumber:"43",name:"Ponni Hostel",category:"Hostel",icon:"🏠",buildingPosition:{x:726,y:116,width:22,height:36},entrancePosition:{x:750,y:130},entranceNode:"node-r-43",x:726,y:116,width:22,height:36,gateNodeId:"node-r-43",accessNode:"node-r-43",buildingEntrance:{x:750,y:130},description:"Ponni Hostel residential block for MIT students.",tags:["43","ponni","hostel","residence"]},{id:"bld-44",number:"44",buildingNumber:"44",name:"Dining Hall",category:"Food / Canteen",icon:"🍽️",buildingPosition:{x:896,y:126,width:46,height:70},entrancePosition:{x:865,y:185},entranceNode:"node-r-44",x:896,y:126,width:46,height:70,gateNodeId:"node-r-44",accessNode:"node-r-44",buildingEntrance:{x:865,y:185},description:"Large Central Hostel Dining Hall providing hygienic vegetarian and non-vegetarian buffet meals.",tags:["44","dining hall","mess","food","hostel mess","breakfast","dinner"]},{id:"bld-45",number:"45",buildingNumber:"45",name:"Amenities Hall",category:"Sports / Recreation",icon:"🛍️",buildingPosition:{x:828,y:166,width:32,height:22},entrancePosition:{x:845,y:185},entranceNode:"node-r-45",x:828,y:166,width:32,height:22,gateNodeId:"node-r-45",accessNode:"node-r-45",buildingEntrance:{x:845,y:185},description:"Student Amenities Hall, utility stationery shop, reprographics and student essentials.",tags:["45","amenities","store","shop","stationery"]},{id:"bld-46",number:"46",buildingNumber:"46",name:"Amaravathi Hostel",category:"Hostel",icon:"🏠",buildingPosition:{x:828,y:136,width:50,height:32},entrancePosition:{x:845,y:130},entranceNode:"node-r-46",x:828,y:136,width:50,height:32,gateNodeId:"node-r-46",accessNode:"node-r-46",buildingEntrance:{x:845,y:130},description:"Amaravathi Hostel block with recreational halls and solar hot water systems.",tags:["46","amaravathi","hostel","residence"]},{id:"bld-47",number:"47",buildingNumber:"47",name:"Birla Hostel",category:"Hostel",icon:"🏠",buildingPosition:{x:770,y:142,width:28,height:26},entrancePosition:{x:790,y:130},entranceNode:"node-r-47",x:770,y:142,width:28,height:26,gateNodeId:"node-r-47",accessNode:"node-r-47",buildingEntrance:{x:790,y:130},description:"Historic Birla Hostel wing named in honor of founder patrons.",tags:["47","birla","hostel","residence"]},{id:"bld-48",number:"48",buildingNumber:"48",name:"Hostel Store",category:"Utility",icon:"📦",buildingPosition:{x:796,y:142,width:30,height:26},entrancePosition:{x:790,y:130},entranceNode:"node-r-48",x:796,y:142,width:30,height:26,gateNodeId:"node-r-48",accessNode:"node-r-48",buildingEntrance:{x:790,y:130},description:"Hostel Central Store and maintenance depot.",tags:["48","hostel store","store","inventory"]},{id:"bld-49",number:"49",buildingNumber:"49",name:"Tamilabharani Hostel",category:"Hostel",icon:"🏠",buildingPosition:{x:756,y:92,width:70,height:30},entrancePosition:{x:790,y:130},entranceNode:"node-r-49",x:756,y:92,width:70,height:30,gateNodeId:"node-r-49",accessNode:"node-r-49",buildingEntrance:{x:790,y:130},description:"Tamilabharani Hostel residential hall overlooking sports grounds.",tags:["49","tamilabharani","hostel","residence"]},{id:"bld-50",number:"50",buildingNumber:"50",name:"Gymnasium",category:"Sports / Recreation",icon:"🏋️",buildingPosition:{x:800,y:118,width:28,height:26},entrancePosition:{x:790,y:130},entranceNode:"node-r-50",x:800,y:118,width:28,height:26,gateNodeId:"node-r-50",accessNode:"node-r-50",buildingEntrance:{x:790,y:130},description:"MIT Campus Gymnasium equipped with modern weight training, cardio machinery & fitness trainers.",tags:["50","gym","gymnasium","fitness","workout","weights"]},{id:"bld-51",number:"51",buildingNumber:"51",name:"Bhavani Hostel",category:"Hostel",icon:"🏠",buildingPosition:{x:830,y:94,width:38,height:42},entrancePosition:{x:845,y:130},entranceNode:"node-r-51",x:830,y:94,width:38,height:42,gateNodeId:"node-r-51",accessNode:"node-r-51",buildingEntrance:{x:845,y:130},description:"Bhavani Hostel residential block with dedicated study cubicles.",tags:["51","bhavani","hostel","residence"]},{id:"bld-52",number:"52",buildingNumber:"52",name:"Recreation Centre",category:"Sports / Recreation",icon:"🏓",buildingPosition:{x:866,y:84,width:54,height:26},entrancePosition:{x:885,y:115},entranceNode:"node-r-52",x:866,y:84,width:54,height:26,gateNodeId:"node-r-52",accessNode:"node-r-52",buildingEntrance:{x:885,y:115},description:"Student Recreation Centre, table tennis, indoor badminton, chess and carrom clubs.",tags:["52","recreation","indoor games","sports","table tennis","badminton"]}],i1=["e-hostel-block-1","e-hostel-block-2","e-hostel-block-3","e-hostel-block-4","e-hostel-block-5","e-hostel-block-6","e-hostel-block-7","e-hostel-block-8","e-hostel-block-9"];function Hh(t){return i1.includes(t)}const di={"node-front-gate-road":{id:"node-front-gate-road",name:"Front Gate Access (Main Entrance)",x:60,y:238,type:"gate"},"node-parking-turn":{id:"node-parking-turn",name:"Parking Access / MIT Road West Entrance",x:60,y:192,type:"junction"},"node-madambakkam-south":{id:"node-madambakkam-south",name:"Madambakkam Main Road / South Access Junction",x:60,y:295,type:"junction"},"node-mit-road-0":{id:"node-mit-road-0",name:"MIT Road - Parking Front Junction",x:100,y:192,type:"road"},"node-mit-1":{id:"node-mit-1",name:"MIT Road - Building 01/02 Junction",x:165,y:190,type:"road"},"node-mit-cross-1":{id:"node-mit-cross-1",name:"MIT Road / Central Park West Crossing",x:200,y:190,type:"junction"},"node-mit-2":{id:"node-mit-2",name:"MIT Road - Admin Block (04) Access Driveway Junction",x:248,y:185,type:"junction"},"node-mit-3":{id:"node-mit-3",name:"MIT Road - Info Tech (13) & Lecture Hall (16) Crossing",x:302,y:185,type:"junction"},"node-mit-cross-2":{id:"node-mit-cross-2",name:"MIT Road - Electronics (14) & Rajam Hall (17) Crossing",x:345,y:185,type:"junction"},"node-mit-4":{id:"node-mit-4",name:"MIT Road / Canteen Avenue Crossing",x:385,y:185,type:"junction"},"node-mit-5":{id:"node-mit-5",name:"MIT Road - Electronics-II (15) & IOT (20) Crossing",x:435,y:185,type:"junction"},"node-mit-6":{id:"node-mit-6",name:"MIT Road - War Planes Monument Plaza / Hanger-2 Crossing",x:480,y:185,type:"junction"},"node-mit-cross-3":{id:"node-mit-cross-3",name:"MIT Road - Production Tech (27) & Workshop (30) Crossing",x:540,y:185,type:"junction"},"node-mit-7":{id:"node-mit-7",name:"MIT Road - Central Library Avenue Crossing",x:580,y:185,type:"road"},"node-mit-8":{id:"node-mit-8",name:"MIT Road - Mechatronics (31) & Hanger-1 (32) Crossing",x:640,y:185,type:"junction"},"node-mit-9":{id:"node-mit-9",name:"MIT Road - Alumni House (33) & Pebbles Track Crossing",x:690,y:185,type:"road"},"node-mit-roundabout":{id:"node-mit-roundabout",name:"MIT Road - Treatment Plant Roundabout",x:722,y:185,type:"junction"},"node-mit-11":{id:"node-mit-11",name:"MIT Road - Rajam Hostel (37) & Amenities Crossing",x:790,y:185,type:"junction"},"node-mit-12":{id:"node-mit-12",name:"MIT Road East boundary connector",x:940,y:185,type:"junction"},"node-mit-east-end":{id:"node-mit-east-end",name:"MIT Road East End",x:960,y:185,type:"road"},"node-south-road-west":{id:"node-south-road-west",name:"South Access Road West End",x:205,y:295,type:"junction"},"node-comp-turn-south":{id:"node-comp-turn-south",name:"South Road - Turning towards Computer Block 08",x:205,y:345,type:"junction"},"node-comp-08-south":{id:"node-comp-08-south",name:"Building 08 Entrance Road (Dept of Computer Tech CB Block)",x:258,y:350,type:"access"},"node-comp-08-east":{id:"node-comp-08-east",name:"Road East of Computer Tech (08) & AU-KBC (10)",x:290,y:310,type:"junction"},"node-comp-07-east":{id:"node-comp-07-east",name:"Road between Avionics (07) and Automobile (12)",x:305,y:265,type:"junction"},"node-comp-north-path":{id:"node-comp-north-path",name:"Road north of Computer Tech GJ Block (09)",x:250,y:262,type:"road"},"node-comp-01-05-path":{id:"node-comp-01-05-path",name:"Road between Building 01 and Golden Jubilee Park (05)",x:200,y:262,type:"junction"},"node-auto-north":{id:"node-auto-north",name:"Road north of Automobile (12) and south of IT (13)",x:360,y:242,type:"road"},"node-auto-east":{id:"node-auto-east",name:"Road between Automobile (12) and Aerospace (21)",x:435,y:242,type:"junction"},"node-ds-10":{id:"node-ds-10",name:"Road in front of AU-KBC Research Centre 1 (10)",x:326,y:335,type:"access"},"node-ds-11":{id:"node-ds-11",name:"Road in front of AU-KBC Research Centre 2 (11)",x:394,y:335,type:"access"},"node-ds-transformer":{id:"node-ds-transformer",name:"Road at Campus Transformer Yard",x:465,y:335,type:"junction"},"node-ds-rajam-hall":{id:"node-ds-rajam-hall",name:"Road in front of Rajam Hall Auditorium (22)",x:534,y:335,type:"access"},"node-ds-nss":{id:"node-ds-nss",name:"Road at NSO / NSS / YRC (23) & OAT (25)",x:582,y:345,type:"access"},"node-ds-micsat":{id:"node-ds-micsat",name:"Road in front of CASR MICSAT (24)",x:630,y:345,type:"access"},"node-ds-36":{id:"node-ds-36",name:"Road at Campus Block 36",x:700,y:315,type:"access"},"node-ds-health":{id:"node-ds-health",name:"Road at Health Centre & Block 40",x:858,y:305,type:"access"},"node-ds-cauvery":{id:"node-ds-cauvery",name:"Road at Cauvery Hostel (42)",x:930,y:290,type:"access"},"node-war-planes-south":{id:"node-war-planes-south",name:"Road south of War Planes Monument Plaza",x:480,y:242,type:"junction"},"node-library-north":{id:"node-library-north",name:"Road north of MIT Library (26) / south of 27",x:580,y:240,type:"access"},"node-library-south":{id:"node-library-south",name:"Road south of MIT Library (26)",x:580,y:305,type:"junction"},"node-library-east":{id:"node-library-east",name:"Road east of MIT Library / near Alumni House (33)",x:650,y:242,type:"junction"},"node-pebbles-path":{id:"node-pebbles-path",name:"Road at Pebbles Track (34)",x:686,y:230,type:"access"},"node-treatment-south":{id:"node-treatment-south",name:"Road south of Water Treatment Plant (35)",x:728,y:245,type:"junction"},"node-north-perimeter-1":{id:"node-north-perimeter-1",name:"North Road - LHC (16) West Junction",x:290,y:68,type:"junction"},"node-north-perimeter-2":{id:"node-north-perimeter-2",name:"North Road - between RLHC (17) and Canteen (19)",x:385,y:68,type:"junction"},"node-canteen-access":{id:"node-canteen-access",name:"Canteen (19) Entrance Access Road",x:415,y:125,type:"access"},"node-north-perimeter-3":{id:"node-north-perimeter-3",name:"North Road - east of Canteen / west of Hanger-2 (28)",x:460,y:68,type:"junction"},"node-north-perimeter-4":{id:"node-north-perimeter-4",name:"North Road - between Hanger-2 (28) and Production Tech (29)",x:540,y:68,type:"junction"},"node-north-perimeter-5":{id:"node-north-perimeter-5",name:"North Road - between Workshop (30) and Hanger-1 (32)",x:640,y:68,type:"junction"},"node-north-perimeter-6":{id:"node-north-perimeter-6",name:"North Road - east of Hanger-1 (32)",x:715,y:68,type:"junction"},backGateAccessNode:{id:"backGateAccessNode",name:"Back Gate Access Road (Chromepet Railway Station Side)",x:885,y:72,type:"gate"},"node-back-gate-access":{id:"node-back-gate-access",name:"Back Gate Access Road (Chromepet Railway Station Side)",x:885,y:72,type:"gate"},"node-back-gate-road":{id:"node-back-gate-road",name:"Back Gate Access (Chromepet Railway Station Side)",x:885,y:72,type:"gate"},"node-back-gate-straight":{id:"node-back-gate-straight",name:"Straight Accessible Campus Road (North-South Corridor)",x:885,y:130,type:"road"},hostelFourWayJunction:{id:"hostelFourWayJunction",name:"East Campus Four-Way Junction (MIT Road / Hostel Boundary)",x:885,y:185,type:"junction"},eastCampusFourWayJunction:{id:"eastCampusFourWayJunction",name:"East Campus Four-Way Junction (MIT Road / Hostel Boundary)",x:885,y:185,type:"junction"},"node-east-campus-four-way-junction":{id:"node-east-campus-four-way-junction",name:"East Campus Four-Way Junction (MIT Road / Hostel Boundary)",x:885,y:185,type:"junction"},"node-east-road-south":{id:"node-east-road-south",name:"East Road South past Health Centre (40)",x:885,y:250,type:"road"},"node-railway-top-road-1":{id:"node-railway-top-road-1",name:"North Perimeter Road above Hostel 51/49",x:820,y:76,type:"road"},"node-railway-top-road-2":{id:"node-railway-top-road-2",name:"North Perimeter Road above Hostel 49/43",x:750,y:76,type:"junction"},"node-hostel-spine-east":{id:"node-hostel-spine-east",name:"East Perimeter Road past Dining Hall (44)",x:885,y:115,type:"road"},"node-hostel-internal-1":{id:"node-hostel-internal-1",name:"Hostel Internal Road (Birla 47 & Gymnasium 50) [RESTRICTED]",x:790,y:130,type:"junction"},"node-hostel-internal-2":{id:"node-hostel-internal-2",name:"Hostel Internal Road (Amaravathi 46 & Bhavani 51) [RESTRICTED]",x:845,y:130,type:"junction"},"node-hostel-dining-north":{id:"node-hostel-dining-north",name:"Hostel Road between Recreation (52) and Dining Hall (44) [RESTRICTED]",x:885,y:115,type:"junction"},"node-radha-nagar-east":{id:"node-radha-nagar-east",name:"Road south towards Radha Nagar & Cauvery Hostel (42)",x:950,y:240,type:"junction"},"node-r-01":{id:"node-r-01",name:"Instrumentation-I (01) Entrance",x:165,y:190,type:"access"},"node-r-02":{id:"node-r-02",name:"Instrumentation-II (02) Entrance",x:168,y:172,type:"access"},"node-r-03":{id:"node-r-03",name:"Instrumentation Engineering (03) Entrance",x:168,y:172,type:"access"},"node-r-04":{id:"node-r-04",name:"Administrative Block (04) Entrance Porch",x:248,y:172,type:"access"},"node-r-05":{id:"node-r-05",name:"Golden Jubilee Park (05) Pathway Entrance",x:236,y:185,type:"access"},"node-r-06":{id:"node-r-06",name:"Rubber & Plastics Tech (06) Entrance",x:205,y:295,type:"access"},"node-r-07":{id:"node-r-07",name:"Avionics (07) Entrance",x:305,y:265,type:"access"},"node-r-08":{id:"node-r-08",name:"Dept of Computer Tech CB Block (08) Entrance",x:258,y:350,type:"access"},"node-r-09":{id:"node-r-09",name:"Dept of Computer Tech GJ Block (09) Entrance",x:250,y:262,type:"access"},"node-r-10":{id:"node-r-10",name:"AU-KBC Research Centre 1 (10) Entrance",x:326,y:335,type:"access"},"node-r-11":{id:"node-r-11",name:"AU-KBC Research Centre 2 (11) Entrance",x:394,y:335,type:"access"},"node-r-12":{id:"node-r-12",name:"Department of Automobile Engineering (12) Entrance",x:360,y:242,type:"access"},"node-r-13":{id:"node-r-13",name:"Department of Information Technology (13) Entrance",x:302,y:195,type:"access"},"node-r-14":{id:"node-r-14",name:"Department of Electronics Eng - I (14) Entrance",x:345,y:185,type:"access"},"node-r-15":{id:"node-r-15",name:"Department of Electronics Eng - II (15) Entrance",x:435,y:185,type:"access"},"node-r-16":{id:"node-r-16",name:"Lecture Hall Complex (16) Entrance",x:290,y:125,type:"access"},"node-r-17":{id:"node-r-17",name:"Rajam Lecture Hall Complex (17) Entrance",x:385,y:125,type:"access"},"node-r-18":{id:"node-r-18",name:"AU Zone IV Exam Office (18) Entrance",x:415,y:170,type:"access"},"node-r-19":{id:"node-r-19",name:"Canteen (19) Main Entrance",x:415,y:125,type:"access"},"node-r-20":{id:"node-r-20",name:"Centre for IOT (20) Entrance",x:435,y:185,type:"access"},"node-r-21":{id:"node-r-21",name:"Aerospace Engineering (21) Entrance",x:478,y:244,type:"access"},"node-r-22":{id:"node-r-22",name:"Rajam Hall - Auditorium (22) Entrance",x:534,y:335,type:"access"},"node-r-23":{id:"node-r-23",name:"NSO / NSS / YRC (23) Entrance",x:582,y:345,type:"access"},"node-r-24":{id:"node-r-24",name:"Centre for Aerospace Research MICSAT (24) Entrance",x:630,y:345,type:"access"},"node-r-25":{id:"node-r-25",name:"C.N. Ramaswamy OAT (25) Entrance",x:580,y:305,type:"access"},"node-r-26":{id:"node-r-26",name:"MIT Library (26) Main Entrance",x:580,y:242,type:"access"},"node-r-27":{id:"node-r-27",name:"Dept of Production Tech Humanities (27) Entrance",x:540,y:185,type:"access"},"node-r-28":{id:"node-r-28",name:"Hanger-2 (28) Entrance",x:478,y:185,type:"access"},"node-r-29":{id:"node-r-29",name:"Dept of Production Technology Main (29) Entrance",x:540,y:140,type:"access"},"node-r-30":{id:"node-r-30",name:"Central Workshop (30) Entrance",x:540,y:185,type:"access"},"node-r-31":{id:"node-r-31",name:"Mechatronics (31) Entrance",x:640,y:185,type:"access"},"node-r-32":{id:"node-r-32",name:"Hanger-1 (32) Entrance",x:640,y:185,type:"access"},"node-r-33":{id:"node-r-33",name:"Alumni House (33) Entrance",x:650,y:242,type:"access"},"node-r-34":{id:"node-r-34",name:"Pebbles Track (34) Entrance",x:686,y:230,type:"access"},"node-r-35":{id:"node-r-35",name:"Overhead Treatment Plant (35) Entrance",x:722,y:185,type:"access"},"node-r-36":{id:"node-r-36",name:"Campus Facility Block 36 Entrance",x:700,y:315,type:"access"},"node-r-37":{id:"node-r-37",name:"Rajam Hostel (37) Entrance",x:790,y:185,type:"access"},"node-r-38-tm":{id:"node-r-38-tm",name:"Tamil Mandram Office (38) Entrance",x:790,y:185,type:"access"},"node-r-38-ho":{id:"node-r-38-ho",name:"Hostel Office (38) Entrance",x:865,y:185,type:"access"},"node-r-39":{id:"node-r-39",name:"Health Centre (39) Entrance",x:858,y:305,type:"access"},"node-r-40":{id:"node-r-40",name:"Campus Block 40 Entrance",x:858,y:305,type:"access"},"node-r-41":{id:"node-r-41",name:"Health Centre (41) Entrance",x:858,y:305,type:"access"},"node-r-42":{id:"node-r-42",name:"Cauvery Hostel (42) Entrance",x:930,y:290,type:"access"},"node-r-43":{id:"node-r-43",name:"Ponni Hostel (43) Entrance",x:750,y:130,type:"access"},"node-r-44":{id:"node-r-44",name:"Dining Hall (44) Entrance",x:865,y:185,type:"access"},"node-r-45":{id:"node-r-45",name:"Amenities Hall (45) Entrance",x:845,y:185,type:"access"},"node-r-46":{id:"node-r-46",name:"Amaravathi Hostel (46) Entrance",x:845,y:130,type:"access"},"node-r-47":{id:"node-r-47",name:"Birla Hostel (47) Entrance",x:790,y:130,type:"access"},"node-r-48":{id:"node-r-48",name:"Hostel Store (48) Entrance",x:790,y:130,type:"access"},"node-r-49":{id:"node-r-49",name:"Tamilabharani Hostel (49) Entrance",x:790,y:130,type:"access"},"node-r-50":{id:"node-r-50",name:"Gymnasium (50) Entrance",x:790,y:130,type:"access"},"node-r-51":{id:"node-r-51",name:"Bhavani Hostel (51) Entrance",x:845,y:130,type:"access"},"node-r-52":{id:"node-r-52",name:"Recreation Centre (52) Entrance",x:885,y:115,type:"access"}},Gh=[{id:"e-fg-1",from:"node-front-gate-road",to:"node-parking-turn",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Main Entrance Approach Road"},{id:"e-fg-2",from:"node-parking-turn",to:"node-mit-road-0",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road West Entry"},{id:"e-fg-3",from:"node-front-gate-road",to:"node-madambakkam-south",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Madambakkam South Road"},{id:"e-mit-0-1",from:"node-mit-road-0",to:"node-mit-1",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road past 01 / 04"},{id:"e-mit-1-c1",from:"node-mit-1",to:"node-mit-cross-1",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road / South Road Crossing"},{id:"e-mit-c1-2",from:"node-mit-cross-1",to:"node-mit-2",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road past Administrative Block"},{id:"e-mit-2-3",from:"node-mit-2",to:"node-mit-3",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road - Approaching Dept of IT (13)"},{id:"e-mit-3-c2",from:"node-mit-3",to:"node-mit-cross-2",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road past IT (13) & Electronics-I (14)"},{id:"e-mit-c2-4",from:"node-mit-cross-2",to:"node-mit-4",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road / Canteen Avenue Crossing"},{id:"e-mit-4-5",from:"node-mit-4",to:"node-mit-5",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road past Electronics-II (15)"},{id:"e-mit-5-6",from:"node-mit-5",to:"node-mit-6",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road past War Planes Monument Plaza"},{id:"e-mit-6-c3",from:"node-mit-6",to:"node-mit-cross-3",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road - Production Tech Crossing"},{id:"e-mit-c3-7",from:"node-mit-cross-3",to:"node-mit-7",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road Central Avenue"},{id:"e-mit-7-8",from:"node-mit-7",to:"node-mit-8",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road past Mechatronics & Hanger-1"},{id:"e-mit-8-9",from:"node-mit-8",to:"node-mit-9",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road past Alumni House & Pebbles Track"},{id:"e-mit-9-rb",from:"node-mit-9",to:"node-mit-roundabout",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road Treatment Plant Roundabout"},{id:"e-mit-rb-11",from:"node-mit-roundabout",to:"node-mit-11",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road past Rajam Hostel"},{id:"e-mit-11-fwj",from:"node-mit-11",to:"hostelFourWayJunction",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road to East Campus Four-Way Junction"},{id:"e-mit-11-fwj-alias",from:"node-mit-11",to:"node-east-campus-four-way-junction",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road to East Campus Four-Way Junction"},{id:"e-fwj-12",from:"hostelFourWayJunction",to:"node-mit-12",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road East boundary connector"},{id:"e-fwj-12-alias",from:"node-east-campus-four-way-junction",to:"node-mit-12",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road East boundary connector"},{id:"e-mit-12-end",from:"node-mit-12",to:"node-mit-east-end",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road East End"},{id:"e-so-1",from:"node-madambakkam-south",to:"node-south-road-west",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"South Access Road West End"},{id:"e-so-2",from:"node-south-road-west",to:"node-comp-turn-south",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"South Road - Turning towards Computer Block 08"},{id:"e-so-3",from:"node-comp-turn-south",to:"node-comp-08-south",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Computer Block 08 South Access Road"},{id:"e-so-4",from:"node-comp-08-south",to:"node-comp-08-east",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road between Computer Block 08 and 09"},{id:"e-so-5",from:"node-comp-08-east",to:"node-comp-07-east",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road east of Avionics (07)"},{id:"e-so-6",from:"node-comp-07-east",to:"node-comp-north-path",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Pathway north of Computer Technology"},{id:"e-so-7",from:"node-comp-north-path",to:"node-comp-01-05-path",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road between 01 and 05"},{id:"e-so-8",from:"node-comp-01-05-path",to:"node-mit-cross-1",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"South Road / MIT Road connection"},{id:"e-so-9",from:"node-comp-07-east",to:"node-auto-north",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road north of Automobile Eng (12)"},{id:"e-so-10",from:"node-auto-north",to:"node-auto-east",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road east of Automobile Eng (12)"},{id:"e-so-11",from:"node-auto-east",to:"node-mit-5",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Automobile East to MIT Road"},{id:"e-ds-1",from:"node-comp-08-south",to:"node-ds-10",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road past AU-KBC Block 10"},{id:"e-ds-2",from:"node-ds-10",to:"node-ds-11",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road past AU-KBC Block 11"},{id:"e-ds-3",from:"node-ds-11",to:"node-ds-transformer",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Deep South Road / Transformer"},{id:"e-ds-4",from:"node-ds-transformer",to:"node-ds-rajam-hall",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road in front of Rajam Hall (22)"},{id:"e-ds-5",from:"node-ds-rajam-hall",to:"node-ds-nss",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road at NSO / NSS / YRC (23)"},{id:"e-ds-6",from:"node-ds-nss",to:"node-ds-micsat",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road at CASR MICSAT (24)"},{id:"e-ds-7",from:"node-ds-micsat",to:"node-ds-36",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road at Campus Block 36"},{id:"e-ds-8",from:"node-ds-36",to:"node-ds-health",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road towards Health Centre (40)"},{id:"e-ds-9",from:"node-ds-health",to:"node-east-road-south",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Road past Health Centre to East Road"},{id:"e-ds-10",from:"node-east-road-south",to:"hostelFourWayJunction",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"East Road South to Four-Way Junction"},{id:"e-ds-10-alias",from:"node-east-road-south",to:"node-east-campus-four-way-junction",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"East Road South to Four-Way Junction"},{id:"e-ds-11",from:"node-ds-rajam-hall",to:"node-library-south",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Auditorium to Library South"},{id:"e-ds-12",from:"node-ds-transformer",to:"node-war-planes-south",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Transformer to War Planes Monument"},{id:"e-cl-1",from:"node-mit-6",to:"node-war-planes-south",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road to War Planes south corridor"},{id:"e-cl-2",from:"node-war-planes-south",to:"node-library-north",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"War Planes to Library North Road"},{id:"e-cl-3",from:"node-library-north",to:"node-mit-cross-3",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Library North to MIT Road"},{id:"e-cl-4",from:"node-library-north",to:"node-library-east",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Library North to Library East"},{id:"e-cl-5",from:"node-library-east",to:"node-mit-8",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Library East to MIT Road"},{id:"e-cl-6",from:"node-library-east",to:"node-pebbles-path",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Library East to Pebbles Track (34)"},{id:"e-cl-7",from:"node-pebbles-path",to:"node-treatment-south",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Pebbles Track to Treatment Plant South"},{id:"e-cl-8",from:"node-treatment-south",to:"node-mit-roundabout",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Treatment Plant to Roundabout"},{id:"e-cl-9",from:"node-treatment-south",to:"node-ds-36",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Treatment Plant to Block 36"},{id:"e-np-1",from:"node-mit-3",to:"node-north-perimeter-1",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"MIT Road past IT (13) to North Perimeter"},{id:"e-np-2",from:"node-north-perimeter-1",to:"node-north-perimeter-2",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"North Road between 16 and 17"},{id:"e-np-3",from:"node-north-perimeter-2",to:"node-canteen-access",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"North Road to Canteen Entrance"},{id:"e-np-4",from:"node-canteen-access",to:"node-mit-4",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Canteen south to MIT Road"},{id:"e-np-5",from:"node-north-perimeter-2",to:"node-north-perimeter-3",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"North Road past 19 / 28"},{id:"e-np-6",from:"node-north-perimeter-3",to:"node-mit-6",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"North Road to War Planes Monument"},{id:"e-np-7",from:"node-north-perimeter-3",to:"node-north-perimeter-4",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"North Road past Production Tech (29)"},{id:"e-np-8",from:"node-north-perimeter-4",to:"node-mit-cross-3",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Production Tech to MIT Road"},{id:"e-np-9",from:"node-north-perimeter-4",to:"node-north-perimeter-5",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"North Road past Central Workshop (30)"},{id:"e-np-10",from:"node-north-perimeter-5",to:"node-mit-8",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Workshop south to MIT Road"},{id:"e-np-11",from:"node-north-perimeter-5",to:"node-north-perimeter-6",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"North Road past Hanger-1 (32)"},{id:"e-np-12",from:"node-north-perimeter-6",to:"node-mit-roundabout",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Hanger-1 south to Roundabout"},{id:"e-bg-straight-1",from:"backGateAccessNode",to:"node-back-gate-straight",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Back Gate Accessible Campus Road"},{id:"e-bg-straight-1-alias",from:"node-back-gate-access",to:"node-back-gate-straight",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Back Gate Accessible Campus Road"},{id:"e-bg-straight-1-old",from:"node-back-gate-road",to:"node-back-gate-straight",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Back Gate Accessible Campus Road"},{id:"e-bg-straight-2",from:"node-back-gate-straight",to:"hostelFourWayJunction",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Straight Road to East Campus Four-Way Junction"},{id:"e-bg-straight-2-alias",from:"node-back-gate-straight",to:"eastCampusFourWayJunction",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Straight Road to East Campus Four-Way Junction"},{id:"e-bg-straight-2-alias2",from:"node-back-gate-straight",to:"node-east-campus-four-way-junction",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"Straight Road to East Campus Four-Way Junction"},{id:"e-top-bg",from:"node-railway-top-road-1",to:"node-back-gate-access",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"North Perimeter Road to Back Gate"},{id:"e-top-bg-2",from:"node-railway-top-road-2",to:"node-railway-top-road-1",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"North Perimeter Road"},{id:"e-top-bg-3",from:"node-north-perimeter-6",to:"node-railway-top-road-2",accessType:"PUBLIC_WALKING_ROAD",walkable:!0,name:"North Perimeter Road west of Hostel 49"},{id:"e-hostel-block-1",from:"node-railway-top-road-1",to:"node-hostel-internal-1",accessType:"RESTRICTED",walkable:!1,name:"Hostel Shortcut (Birla/Gymnasium) - 🚫 BLOCKED"},{id:"e-hostel-block-2",from:"node-hostel-internal-1",to:"node-mit-11",accessType:"RESTRICTED",walkable:!1,name:"Hostel Internal Road to MIT Road - 🚫 BLOCKED"},{id:"e-hostel-block-3",from:"node-hostel-spine-east",to:"node-hostel-internal-2",accessType:"RESTRICTED",walkable:!1,name:"Hostel Internal Cut (Amaravathi/Bhavani) - 🚫 BLOCKED"},{id:"e-hostel-block-4",from:"node-hostel-internal-2",to:"node-mit-11",accessType:"RESTRICTED",walkable:!1,name:"Hostel Internal Road to MIT Road - 🚫 BLOCKED"},{id:"e-hostel-block-5",from:"node-hostel-spine-east",to:"node-hostel-dining-north",accessType:"RESTRICTED",walkable:!1,name:"Hostel Dining Hall Access - 🚫 BLOCKED"},{id:"e-hostel-block-6",from:"node-hostel-dining-north",to:"node-mit-12",accessType:"RESTRICTED",walkable:!1,name:"Hostel Dining Hall to MIT Road - 🚫 BLOCKED"},{id:"e-hostel-block-7",from:"node-ds-cauvery",to:"node-radha-nagar-east",accessType:"RESTRICTED",walkable:!1,name:"Cauvery Hostel Perimeter Road - 🚫 BLOCKED"},{id:"e-hostel-block-8",from:"node-radha-nagar-east",to:"node-mit-12",accessType:"RESTRICTED",walkable:!1,name:"Radha Nagar to MIT Road 12 - 🚫 BLOCKED"},{id:"e-hostel-block-9",from:"node-ds-health",to:"node-ds-cauvery",accessType:"RESTRICTED",walkable:!1,name:"Health Centre to Cauvery Hostel - 🚫 BLOCKED"},{id:"e-bld-01",from:"node-r-01",to:"node-mit-1",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 01 Approach"},{id:"e-bld-02",from:"node-r-02",to:"node-mit-1",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 02 Approach"},{id:"e-bld-03",from:"node-r-03",to:"node-mit-1",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 03 Approach"},{id:"e-bld-04",from:"node-r-04",to:"node-mit-2",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 04 Administrative Block Driveway Approach"},{id:"e-bld-05",from:"node-r-05",to:"node-mit-2",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 05 Approach"},{id:"e-bld-06",from:"node-r-06",to:"node-south-road-west",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 06 Approach"},{id:"e-bld-07",from:"node-r-07",to:"node-comp-07-east",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 07 Approach"},{id:"e-bld-08",from:"node-r-08",to:"node-comp-08-south",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 08 Approach"},{id:"e-bld-09",from:"node-r-09",to:"node-comp-north-path",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 09 Approach"},{id:"e-bld-10",from:"node-r-10",to:"node-ds-10",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 10 Approach"},{id:"e-bld-11",from:"node-r-11",to:"node-ds-11",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 11 Approach"},{id:"e-bld-12",from:"node-r-12",to:"node-auto-north",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 12 Approach"},{id:"e-bld-13",from:"node-r-13",to:"node-mit-3",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 13 IT Dept Approach"},{id:"e-bld-14",from:"node-r-14",to:"node-mit-cross-2",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 14 Approach"},{id:"e-bld-15",from:"node-r-15",to:"node-mit-5",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 15 Approach"},{id:"e-bld-16",from:"node-r-16",to:"node-north-perimeter-1",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 16 Approach"},{id:"e-bld-17",from:"node-r-17",to:"node-north-perimeter-2",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 17 Approach"},{id:"e-bld-18",from:"node-r-18",to:"node-mit-4",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 18 Approach"},{id:"e-bld-19",from:"node-r-19",to:"node-canteen-access",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 19 Canteen Approach"},{id:"e-bld-20",from:"node-r-20",to:"node-mit-5",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 20 Approach"},{id:"e-bld-21",from:"node-r-21",to:"node-war-planes-south",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 21 Aerospace Approach"},{id:"e-bld-22",from:"node-r-22",to:"node-ds-rajam-hall",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 22 Rajam Hall Approach"},{id:"e-bld-23",from:"node-r-23",to:"node-ds-nss",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 23 Approach"},{id:"e-bld-24",from:"node-r-24",to:"node-ds-micsat",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 24 CASR Approach"},{id:"e-bld-25",from:"node-r-25",to:"node-library-south",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 25 Approach"},{id:"e-bld-26",from:"node-r-26",to:"node-library-north",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 26 Library Approach"},{id:"e-bld-27",from:"node-r-27",to:"node-mit-cross-3",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 27 Approach"},{id:"e-bld-28",from:"node-r-28",to:"node-mit-6",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 28 Approach"},{id:"e-bld-29",from:"node-r-29",to:"node-north-perimeter-4",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 29 Approach"},{id:"e-bld-30",from:"node-r-30",to:"node-mit-cross-3",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 30 Approach"},{id:"e-bld-31",from:"node-r-31",to:"node-mit-8",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 31 Approach"},{id:"e-bld-32",from:"node-r-32",to:"node-mit-8",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 32 Approach"},{id:"e-bld-33",from:"node-r-33",to:"node-library-east",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 33 Approach"},{id:"e-bld-34",from:"node-r-34",to:"node-pebbles-path",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 34 Approach"},{id:"e-bld-35",from:"node-r-35",to:"node-mit-roundabout",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 35 Approach"},{id:"e-bld-36",from:"node-r-36",to:"node-ds-36",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 36 Approach"},{id:"e-bld-37",from:"node-r-37",to:"node-mit-11",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 37 Rajam Hostel Approach"},{id:"e-bld-38-tm",from:"node-r-38-tm",to:"node-mit-11",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 38 Tamil Mandram Approach"},{id:"e-bld-38-ho",from:"node-r-38-ho",to:"hostelFourWayJunction",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 38 Hostel Office Approach"},{id:"e-bld-39",from:"node-r-39",to:"node-ds-health",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 39 Approach"},{id:"e-bld-40",from:"node-r-40",to:"node-east-road-south",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 40 Health Centre Approach"},{id:"e-bld-41",from:"node-r-41",to:"node-east-road-south",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 41 Approach"},{id:"e-bld-42",from:"node-r-42",to:"node-east-road-south",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 42 Cauvery Hostel Approach"},{id:"e-bld-43",from:"node-r-43",to:"node-railway-top-road-2",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 43 Ponni Hostel Approach"},{id:"e-bld-44",from:"node-r-44",to:"hostelFourWayJunction",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 44 Dining Hall Public Entrance"},{id:"e-bld-45",from:"node-r-45",to:"hostelFourWayJunction",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 45 Amenities Hall Approach"},{id:"e-bld-46",from:"node-r-46",to:"hostelFourWayJunction",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 46 Amaravathi Hostel Approach"},{id:"e-bld-47",from:"node-r-47",to:"node-mit-11",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 47 Birla Hostel Approach"},{id:"e-bld-48",from:"node-r-48",to:"node-mit-11",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 48 Hostel Store Approach"},{id:"e-bld-49",from:"node-r-49",to:"node-railway-top-road-1",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 49 Tamilabharani Approach"},{id:"e-bld-50",from:"node-r-50",to:"node-railway-top-road-1",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 50 Gymnasium Approach"},{id:"e-bld-51",from:"node-r-51",to:"node-back-gate-straight",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 51 Bhavani Hostel Approach"},{id:"e-bld-52",from:"node-r-52",to:"node-back-gate-straight",accessType:"BUILDING_ACCESS",walkable:!0,name:"Building 52 Recreation Centre Approach"}];function zx(t){return!(!t.walkable||t.accessType==="RESTRICTED"||t.accessType==="RESTRICTED_ROAD"||t.accessType==="BLOCKED_ROAD"||t.accessType==="HOSTEL_ACCESS"||Hh(t.id))}const r1=({fromLocation:t,liveCoords:e,toLocation:n,selectedBuilding:i,onBuildingClick:r,route:s,isNavigating:a,currentStepIndex:o,isDebugMode:l=!1})=>{var _,d,g,S,v,T,A,C,y;const[c,u]=Ce.useState(null),h=a&&(s!=null&&s.steps)?s.steps[o]:null,f=t.id==="live-location"&&e?e.x:((_=t.mapPosition)==null?void 0:_.x)??t.x,p=t.id==="live-location"&&e?e.y:((d=t.mapPosition)==null?void 0:d.y)??t.y,x=n?((g=n.entrancePosition)==null?void 0:g.x)??((S=n.buildingEntrance)==null?void 0:S.x)??n.x+n.width/2:0,M=n?((v=n.entrancePosition)==null?void 0:v.y)??((T=n.buildingEntrance)==null?void 0:T.y)??n.y+n.height/2:0;return m.jsxs("svg",{className:"campus-map-svg-overlay",viewBox:"0 0 1024 512",preserveAspectRatio:"xMidYMid meet","aria-label":"Campus Interactive Map Overlay",children:[m.jsxs("defs",{children:[m.jsx("filter",{id:"route-shadow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:m.jsx("feDropShadow",{dx:"0",dy:"1",stdDeviation:"2",floodColor:"#000000",floodOpacity:"0.6"})}),m.jsx("filter",{id:"pin-shadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:m.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodColor:"#000000",floodOpacity:"0.5"})}),m.jsx("filter",{id:"selected-glow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:m.jsx("feDropShadow",{dx:"0",dy:"0",stdDeviation:"4",floodColor:"#2563eb",floodOpacity:"0.8"})})]}),m.jsx("g",{className:"building-hotspots-layer",children:cc.map(w=>{var B,P,G,Z;const N=(i==null?void 0:i.id)===w.id||(n==null?void 0:n.id)===w.id,I=(c==null?void 0:c.id)===w.id,k=((B=w.buildingPosition)==null?void 0:B.x)??w.x,W=((P=w.buildingPosition)==null?void 0:P.y)??w.y,U=((G=w.buildingPosition)==null?void 0:G.width)??w.width,H=((Z=w.buildingPosition)==null?void 0:Z.height)??w.height,Q=k+U/2,q=W+H/2;return m.jsxs("g",{className:`building-hotspot-group ${N?"is-selected":""} ${I?"is-hovered":""}`,onClick:se=>{se.stopPropagation(),r(w)},onMouseEnter:()=>u(w),onMouseLeave:()=>u(null),cursor:"pointer",tabIndex:0,role:"button","aria-label":`Building ${w.number}: ${w.name}`,onKeyDown:se=>{(se.key==="Enter"||se.key===" ")&&(se.stopPropagation(),r(w))},children:[w.shape==="circle"?m.jsx("circle",{cx:Q,cy:q,r:U/2,className:"building-shape",pointerEvents:"all"}):m.jsx("rect",{x:k,y:W,width:U,height:H,rx:"3",className:"building-shape",pointerEvents:"all"}),N&&m.jsx("rect",{x:k-2,y:W-2,width:U+4,height:H+4,rx:"4",className:"building-selection-outline",filter:"url(#selected-glow)"})]},w.id)})}),s&&m.jsxs("g",{className:"walking-route-layer",children:[m.jsx("path",{d:s.pathD,fill:"none",stroke:"#ffffff",strokeWidth:"9",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:"0.95",filter:"url(#route-shadow)"}),m.jsx("path",{d:s.pathD,fill:"none",stroke:"#1d4ed8",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),m.jsx("path",{d:s.pathD,fill:"none",stroke:"#60a5fa",strokeWidth:"3.5",strokeDasharray:"6 5",strokeLinecap:"round",strokeLinejoin:"round",className:"route-animated-dash"}),h&&m.jsxs("g",{className:"active-segment-group",children:[m.jsx("line",{x1:h.fromNode.x,y1:h.fromNode.y,x2:h.toNode.x,y2:h.toNode.y,stroke:"#ffffff",strokeWidth:"11",strokeLinecap:"round"}),m.jsx("line",{x1:h.fromNode.x,y1:h.fromNode.y,x2:h.toNode.x,y2:h.toNode.y,stroke:"#10b981",strokeWidth:"6",strokeLinecap:"round",className:"active-segment-highlight"})]})]}),m.jsxs("g",{className:"marker-group start-marker",transform:`translate(${f}, ${p})`,filter:"url(#pin-shadow)",children:[m.jsx("circle",{r:"14",fill:"#10b981",fillOpacity:"0.35",className:"marker-pulse-ring"}),m.jsx("circle",{r:"7.5",fill:"#059669",stroke:"#ffffff",strokeWidth:"2.5"}),m.jsx("circle",{r:"3",fill:"#ffffff"}),m.jsx("text",{y:"-14",textAnchor:"middle",className:"svg-marker-label start-label",children:t.name})]}),n&&m.jsxs("g",{className:"marker-group destination-marker",transform:`translate(${x}, ${M})`,filter:"url(#pin-shadow)",children:[m.jsx("circle",{r:"16",fill:"#ef4444",fillOpacity:"0.35",className:"marker-pulse-ring-dest"}),m.jsx("path",{d:"M 0 0 C -6 -10, -8 -15, -8 -18 C -8 -23, -4 -27, 0 -27 C 4 -27, 8 -23, 8 -18 C 8 -15, 6 -10, 0 0 Z",fill:"#dc2626",stroke:"#ffffff",strokeWidth:"1.8"}),m.jsx("circle",{cx:"0",cy:"-18",r:"3.5",fill:"#ffffff"}),m.jsxs("text",{y:"-32",textAnchor:"middle",className:"svg-marker-label dest-label",children:[n.number," — ",n.name]})]}),e&&m.jsxs("g",{className:"marker-group live-location-marker",transform:`translate(${e.x}, ${e.y})`,children:[m.jsx("circle",{r:"18",fill:"#3b82f6",fillOpacity:"0.35",className:"live-radar-pulse"}),m.jsx("circle",{r:"8",fill:"#2563eb",stroke:"#ffffff",strokeWidth:"2.5"}),m.jsx("circle",{r:"3.5",fill:"#ffffff"}),m.jsx("text",{y:"-14",textAnchor:"middle",className:"svg-marker-label live-label",children:"🔵 You are here"})]}),c&&c.id!==(n==null?void 0:n.id)&&m.jsxs("g",{className:"hover-tooltip-group",transform:`translate(${(((A=c.buildingPosition)==null?void 0:A.x)??c.x)+(((C=c.buildingPosition)==null?void 0:C.width)??c.width)/2}, ${(((y=c.buildingPosition)==null?void 0:y.y)??c.y)-10})`,pointerEvents:"none",children:[m.jsx("rect",{x:-Math.max(60,c.name.length*4),y:"-22",width:Math.max(120,c.name.length*8),height:"22",rx:"4",fill:"#0f172a",fillOpacity:"0.94",stroke:"#38bdf8",strokeWidth:"1.2"}),m.jsxs("text",{y:"-7",textAnchor:"middle",fill:"#ffffff",fontSize:"10",fontWeight:"bold",fontFamily:"system-ui, -apple-system, sans-serif",children:[c.number," — ",c.name]})]}),l&&m.jsxs("g",{className:"debug-road-network-layer",pointerEvents:"none",children:[Gh.map(w=>{const N=di[w.from],I=di[w.to];return!N||!I?null:!w.walkable||w.accessType==="RESTRICTED"||w.accessType==="RESTRICTED_ROAD"||w.accessType==="BLOCKED_ROAD"||w.accessType==="HOSTEL_ACCESS"||Hh(w.id)?m.jsxs("g",{children:[m.jsx("line",{x1:N.x,y1:N.y,x2:I.x,y2:I.y,stroke:"#ef4444",strokeWidth:"5",strokeOpacity:"0.4"}),m.jsx("line",{x1:N.x,y1:N.y,x2:I.x,y2:I.y,stroke:"#18181b",strokeWidth:"3.5",strokeDasharray:"5 3",strokeLinecap:"round",strokeOpacity:"0.95"})]},`dbg-e-${w.id}`):m.jsx("line",{x1:N.x,y1:N.y,x2:I.x,y2:I.y,stroke:"#10b981",strokeWidth:"2.2",strokeOpacity:"0.75"},`dbg-e-${w.id}`)}),Object.values(di).map(w=>{const N=w.id==="hostelFourWayJunction"||w.id==="eastCampusFourWayJunction"||w.id==="node-east-campus-four-way-junction",I=w.type==="junction",k=w.type==="access";return N?m.jsxs("g",{transform:`translate(${w.x}, ${w.y})`,children:[m.jsx("circle",{r:"14",fill:"#facc15",fillOpacity:"0.35",className:"marker-pulse-ring"}),m.jsx("circle",{r:"6.5",fill:"#eab308",stroke:"#ffffff",strokeWidth:"2.5"}),m.jsx("text",{y:"-12",textAnchor:"middle",fill:"#facc15",fontSize:"8.5",fontWeight:"800",stroke:"#0f172a",strokeWidth:"2.5",paintOrder:"stroke fill",children:"🟡 FOUR-WAY JUNCTION"})]},`dbg-n-${w.id}`):I?m.jsx("circle",{cx:w.x,cy:w.y,r:"4.5",fill:"#eab308",stroke:"#0f172a",strokeWidth:"1.2"},`dbg-n-${w.id}`):k?m.jsx("circle",{cx:w.x,cy:w.y,r:"3.5",fill:"#38bdf8",stroke:"#ffffff",strokeWidth:"1.2"},`dbg-n-${w.id}`):m.jsx("circle",{cx:w.x,cy:w.y,r:"3",fill:"#10b981",stroke:"#0f172a",strokeWidth:"1"},`dbg-n-${w.id}`)}),m.jsxs("g",{className:"debug-restricted-banner",transform:"translate(835, 125)",children:[m.jsx("rect",{x:"-115",y:"-13",width:"230",height:"26",rx:"5",fill:"#18181b",fillOpacity:"0.95",stroke:"#ef4444",strokeWidth:"2",filter:"url(#pin-shadow)"}),m.jsx("text",{x:"0",y:"4",textAnchor:"middle",fill:"#fee2e2",fontSize:"8.5",fontWeight:"800",fontFamily:"system-ui, -apple-system, sans-serif",children:"⚫ RESTRICTED ROAD — HOSTEL ACCESS CLOSED"})]})]})]})},s1=({zoomLevel:t,fromLocation:e,liveCoords:n,toLocation:i,selectedBuilding:r,onBuildingClick:s,route:a,isNavigating:o,currentStepIndex:l,isDebugMode:c=!1})=>m.jsx("div",{className:"campus-map-viewport",id:"campus-map-viewport",onDragStart:u=>u.preventDefault(),onTouchMove:u=>{u.cancelable&&u.preventDefault()},children:m.jsxs("div",{className:"campus-map-content-container",style:{transform:`scale(${t})`,transformOrigin:"center center"},children:[m.jsx("img",{src:"/mit_campus_layout.jpg",alt:"Official Anna University - Madras Institute of Technology (MIT) Campus Layout",className:"campus-base-image",draggable:!1}),m.jsx(r1,{fromLocation:e,liveCoords:n,toLocation:i,selectedBuilding:r,onBuildingClick:s,route:a,isNavigating:o,currentStepIndex:l,isDebugMode:c})]})}),Nr=[{id:"front-gate",name:"Front Gate",type:"gate",shortLabel:"Front Gate (Main Entrance)",icon:"🟢",mapPosition:{x:55,y:238},x:55,y:238,accessNode:"node-front-gate-road",nodeId:"node-front-gate-road",description:'Official Main Entrance on Madambakkam Main Road side, indicated by "MAIN ENTRANCE" on map.'},{id:"back-gate",name:"Back Gate",type:"gate",shortLabel:"Back Gate (Chromepet Railway Station Side)",icon:"🟢",mapPosition:{x:885,y:72},x:885,y:72,accessNode:"node-back-gate-access",nodeId:"node-back-gate-access",description:"Secondary Rear Campus Entry on the Chromepet Railway Station side, connecting directly to the north-south public roadway."},{id:"live-location",name:"Live Location",type:"live",shortLabel:"📡 Live Location (GPS)",icon:"📡",mapPosition:{x:55,y:238},x:55,y:238,accessNode:"node-front-gate-road",nodeId:"node-front-gate-road",description:"Real-time GPS device location mapped to MIT campus coordinates."}],Qt={minLat:12.946,maxLat:12.9515,minLng:80.138,maxLng:80.147,imgMinX:40,imgMaxX:970,imgMinY:70,imgMaxY:370};function a1(t,e){if(t<Qt.minLat||t>Qt.maxLat||e<Qt.minLng||e>Qt.maxLng)return null;const n=(e-Qt.minLng)/(Qt.maxLng-Qt.minLng),i=(Qt.maxLat-t)/(Qt.maxLat-Qt.minLat),r=Math.round(Qt.imgMinX+n*(Qt.imgMaxX-Qt.imgMinX)),s=Math.round(Qt.imgMinY+i*(Qt.imgMaxY-Qt.imgMinY));return{x:r,y:s}}const o1=({selectedFromId:t,onSelectFrom:e})=>{const[n,i]=Ce.useState(!1),[r,s]=Ce.useState("idle"),[a,o]=Ce.useState(""),l=Ce.useRef(null);Ce.useEffect(()=>{function f(p){l.current&&!l.current.contains(p.target)&&i(!1)}return document.addEventListener("mousedown",f),document.addEventListener("touchstart",f),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("touchstart",f)}},[]);const c=Nr.find(f=>f.id===t)||Nr[0],u=f=>{f.id==="live-location"?h():(s("idle"),o(""),e(f),i(!1))},h=()=>{if(s("requesting"),o(""),!navigator.geolocation){s("error"),o("Geolocation is not supported by your browser.");return}navigator.geolocation.getCurrentPosition(f=>{const{latitude:p,longitude:x}=f.coords,M=a1(p,x);if(M){s("success");const _=Nr.find(d=>d.id==="live-location");e({..._,x:M.x,y:M.y},M),i(!1)}else s("out-of-bounds"),o("Live location cannot currently be mapped to the MIT campus map.")},f=>{f.code===f.PERMISSION_DENIED?(s("denied"),o("Location permission was denied.")):(s("error"),o("Unable to retrieve GPS location."))},{enableHighAccuracy:!0,timeout:8e3})};return m.jsxs("div",{className:"from-selector-container",ref:l,children:[m.jsxs("div",{className:"selector-field-wrapper",children:[m.jsxs("label",{className:"selector-label",id:"from-label",children:[m.jsx("span",{className:"label-dot from-dot",children:"🟢"}),m.jsx("span",{className:"label-text",children:"FROM"})]}),m.jsxs("button",{type:"button",className:"selector-trigger",onClick:()=>i(!n),"aria-haspopup":"listbox","aria-expanded":n,"aria-labelledby":"from-label",children:[m.jsx("span",{className:"selection-icon",children:c.icon}),m.jsx("span",{className:"selection-title",children:c.name}),m.jsx("span",{className:"dropdown-arrow",children:n?"▲":"▼"})]})]}),n&&m.jsxs("div",{className:"selector-dropdown",role:"listbox",children:[m.jsx("div",{className:"dropdown-header",children:"Choose starting location"}),m.jsx("div",{className:"starting-options-list",children:Nr.map(f=>{const p=f.id===t;return m.jsxs("button",{type:"button",className:`starting-option-item ${p?"selected":""}`,onClick:()=>u(f),role:"option","aria-selected":p,children:[m.jsx("span",{className:"option-icon",children:f.icon}),m.jsxs("div",{className:"option-details",children:[m.jsx("div",{className:"option-name",children:f.name}),m.jsx("div",{className:"option-sub",children:f.description})]}),p&&m.jsx("span",{className:"option-check",children:"✓"})]},f.id)})}),r==="requesting"&&m.jsxs("div",{className:"live-location-feedback loading",children:[m.jsx("span",{className:"spinner",children:"⏳"}),m.jsx("span",{children:"Acquiring satellite / device GPS position..."})]}),(r==="out-of-bounds"||r==="denied"||r==="error")&&m.jsxs("div",{className:"live-location-feedback error",children:[m.jsxs("div",{className:"feedback-msg",children:["⚠️ ",a]}),m.jsxs("div",{className:"fallback-actions",children:[m.jsx("button",{type:"button",className:"fallback-btn",onClick:()=>u(Nr[0]),children:"🟢 Use Front Gate"}),m.jsx("button",{type:"button",className:"fallback-btn",onClick:()=>u(Nr[1]),children:"🟢 Use Back Gate"})]})]})]})]})},l1=["All","Academic / Department","Hostel","Food / Canteen","Library","Administration","Research Centre","Sports / Recreation"],c1=({selectedToLocation:t,onSelectTo:e})=>{const[n,i]=Ce.useState(""),[r,s]=Ce.useState(!1),[a,o]=Ce.useState("All"),[l,c]=Ce.useState(0),u=Ce.useRef(null),h=Ce.useRef(null),f=Ce.useRef(null);Ce.useEffect(()=>{function d(g){u.current&&!u.current.contains(g.target)&&s(!1)}return document.addEventListener("mousedown",d),document.addEventListener("touchstart",d),()=>{document.removeEventListener("mousedown",d),document.removeEventListener("touchstart",d)}},[]);const p=Ce.useMemo(()=>{const d=n.toLowerCase().trim();return cc.filter(g=>{if(a!=="All"&&g.category!==a)return!1;if(!d)return!0;const S=g.number.toLowerCase().includes(d),v=g.name.toLowerCase().includes(d),T=g.category.toLowerCase().includes(d),A=g.tags.some(C=>C.toLowerCase().includes(d));return S||v||T||A})},[n,a]);Ce.useEffect(()=>{c(0)},[p]),Ce.useEffect(()=>{if(r&&f.current){const d=f.current.querySelector(".keyboard-highlighted");d&&d.scrollIntoView({block:"nearest"})}},[l,r]);const x=d=>{e(d),i(""),s(!1)},M=d=>{d.stopPropagation(),e(null),i(""),s(!0),setTimeout(()=>{h.current&&h.current.focus()},50)},_=d=>{if(!r){(d.key==="ArrowDown"||d.key==="Enter")&&s(!0);return}d.key==="ArrowDown"?(d.preventDefault(),c(g=>(g+1)%Math.max(1,p.length))):d.key==="ArrowUp"?(d.preventDefault(),c(g=>(g-1+p.length)%Math.max(1,p.length))):d.key==="Enter"?(d.preventDefault(),p.length>0&&p[l]&&x(p[l])):d.key==="Escape"&&s(!1)};return m.jsxs("div",{className:"to-selector-container",ref:u,children:[m.jsxs("div",{className:"selector-field-wrapper",children:[m.jsxs("label",{className:"selector-label",htmlFor:"destination-search-input",children:[m.jsx("span",{className:"label-dot to-dot",children:"🔴"}),m.jsx("span",{className:"label-text",children:"TO"})]}),t&&!r&&!n?m.jsxs("div",{className:"selected-destination-pill",onClick:()=>{s(!0),setTimeout(()=>{var d;return(d=h.current)==null?void 0:d.focus()},50)},title:"Click to change destination",role:"button",tabIndex:0,children:[m.jsx("span",{className:"selected-destination-badge",children:t.number}),m.jsx("span",{className:"selected-destination-name",children:t.name}),m.jsx("span",{className:"change-dest-hint",children:"Change"}),m.jsx("button",{type:"button",className:"clear-destination-btn",onClick:M,title:"Clear Destination","aria-label":"Clear destination",children:"✕"})]}):m.jsxs("div",{className:"search-input-box",onClick:()=>s(!0),children:[m.jsx("span",{className:"search-icon",children:"🔍"}),m.jsx("input",{id:"destination-search-input",ref:h,type:"text",className:"search-input",placeholder:t?`${t.number} — ${t.name}`:"Search building, dept, canteen, lab...",value:n,onChange:d=>{i(d.target.value),s(!0)},onFocus:()=>s(!0),onKeyDown:_,"aria-autocomplete":"list","aria-expanded":r,autoComplete:"off"}),(n||t)&&m.jsx("button",{type:"button",className:"clear-btn",onClick:M,title:"Clear Destination","aria-label":"Clear destination",children:"✕"})]})]}),r&&m.jsxs("div",{className:"destination-dropdown-panel",role:"listbox",children:[m.jsx("div",{className:"category-chips-bar",role:"tablist",children:l1.map(d=>m.jsx("button",{type:"button",className:`category-chip ${a===d?"active":""}`,onClick:g=>{g.stopPropagation(),o(d)},role:"tab","aria-selected":a===d,children:d==="All"?"🌟 All":d},d))}),!n&&a==="All"&&m.jsxs("div",{className:"popular-section",children:[m.jsx("div",{className:"section-title",children:"Popular Destinations"}),m.jsx("div",{className:"popular-tags",children:[{label:"💻 Dept of IT (13)",id:"bld-13"},{label:"🏛️ Admin Block (04)",id:"bld-04"},{label:"📚 MIT Library (26)",id:"bld-26"},{label:"🍴 Canteen (19)",id:"bld-19"},{label:"🚗 Automobile Eng (12)",id:"bld-12"},{label:"✈️ Aerospace Eng (21)",id:"bld-21"},{label:"🏠 Cauvery Hostel (42)",id:"bld-42"}].map(d=>{const g=cc.find(S=>S.id===d.id);return g?m.jsx("button",{type:"button",className:"popular-badge-btn",onClick:()=>x(g),children:d.label},d.id):null})})]}),m.jsx("div",{className:"destinations-scroll-list",ref:f,children:p.length>0?p.map((d,g)=>{const S=(t==null?void 0:t.id)===d.id,v=g===l;return m.jsxs("button",{type:"button",className:`destination-item ${S?"selected":""} ${v?"keyboard-highlighted":""}`,onClick:()=>x(d),onMouseEnter:()=>c(g),role:"option","aria-selected":S,children:[m.jsx("div",{className:"item-icon-box",children:d.icon}),m.jsxs("div",{className:"item-text-box",children:[m.jsxs("div",{className:"item-primary-line",children:[m.jsx("span",{className:"building-num-badge",children:d.number}),m.jsx("span",{className:"building-title",children:d.name})]}),m.jsxs("div",{className:"item-secondary-line",children:[m.jsx("span",{className:"category-tag",children:d.category}),m.jsx("span",{className:"desc-snippet",children:d.description})]})]}),S&&m.jsx("span",{className:"item-check",children:"✓"})]},d.id)}):m.jsxs("div",{className:"no-destinations-found",children:[m.jsxs("span",{children:['🔍 No destinations found matching "',n,'"']}),m.jsx("p",{children:"Try searching by building number (e.g. 13, 04), name, or category."})]})})]})]})},u1=({route:t,fromLocation:e,toLocation:n,onStartNavigation:i,onClearRoute:r,isNavigating:s})=>!n||s?null:m.jsxs("aside",{className:"route-summary-panel","aria-label":"Walking Route Summary",children:[m.jsxs("div",{className:"panel-mode-header",children:[m.jsx("span",{className:"mode-icon",children:"🚶"}),m.jsx("span",{className:"mode-label",children:"Campus Walking Route"})]}),m.jsxs("div",{className:"route-endpoints",children:[m.jsxs("div",{className:"endpoint-item",children:[m.jsx("span",{className:"endpoint-dot from-marker-dot",children:"🟢"}),m.jsxs("div",{className:"endpoint-text",children:[m.jsx("span",{className:"endpoint-type",children:"FROM"}),m.jsx("span",{className:"endpoint-name",children:e.name})]})]}),m.jsx("div",{className:"route-line-connector",children:m.jsx("span",{className:"connector-line"})}),m.jsxs("div",{className:"endpoint-item",children:[m.jsx("span",{className:"endpoint-dot to-marker-dot",children:"🔴"}),m.jsxs("div",{className:"endpoint-text",children:[m.jsx("span",{className:"endpoint-type",children:"TO"}),m.jsxs("span",{className:"endpoint-name",children:[n.number," — ",n.name]})]})]})]}),t?m.jsxs("div",{className:"route-metrics",children:[m.jsxs("div",{className:"metric-box",children:[m.jsx("span",{className:"metric-icon",children:"📏"}),m.jsxs("div",{className:"metric-details",children:[m.jsx("span",{className:"metric-label",children:"Approx. distance"}),m.jsxs("span",{className:"metric-value",children:[t.totalDistanceMeters," m"]})]})]}),m.jsx("div",{className:"metric-divider"}),m.jsxs("div",{className:"metric-box",children:[m.jsx("span",{className:"metric-icon",children:"⏱️"}),m.jsxs("div",{className:"metric-details",children:[m.jsx("span",{className:"metric-label",children:"Est. walking time"}),m.jsxs("span",{className:"metric-value",children:[t.estimatedTimeMinutes," min"]})]})]})]}):m.jsx("div",{className:"route-unavailable-notice",children:"⚠️ Calculating walking pathway across campus roads..."}),n.category==="Hostel"&&m.jsxs("div",{className:"hostel-access-warning-card",children:[m.jsx("span",{className:"warning-icon",children:"⚠️"}),m.jsxs("div",{className:"warning-text-block",children:[m.jsx("span",{className:"warning-heading",children:"Hostel Zone Restriction"}),m.jsx("span",{className:"warning-body",children:"Hostel access may be restricted. Please use an authorized hostel entrance."})]})]}),m.jsxs("div",{className:"route-panel-actions",children:[m.jsxs("button",{type:"button",className:"start-navigation-btn",onClick:i,disabled:!t,children:[m.jsx("span",{children:"🚀"}),m.jsx("span",{children:"Start Navigation"})]}),m.jsx("button",{type:"button",className:"clear-route-btn",onClick:r,title:"Clear Route",children:"Clear Route"})]})]}),d1=({route:t,toLocation:e,currentStepIndex:n,onStepChange:i,onExitNavigation:r})=>{const[s,a]=Ce.useState(!1),o=t.steps,l=o.length,c=o[n],u=()=>{n>0&&i(n-1)},h=()=>{n<l-1&&i(n+1)},f=n===0,p=n===l-1,x=Math.round((n+1)/l*100);return s?m.jsx("aside",{className:"navigation-active-panel collapsed","aria-label":"Walking Navigation (Collapsed)",children:m.jsxs("div",{className:"nav-collapsed-row",children:[m.jsxs("div",{className:"nav-collapsed-info",children:[m.jsx("span",{className:"collapsed-icon",children:"🚶"}),m.jsxs("div",{className:"collapsed-text",children:[m.jsxs("span",{className:"collapsed-title",children:["To: ",e.number," — ",e.name]}),m.jsxs("span",{className:"collapsed-metrics",children:["Step ",n+1,"/",l," • ",t.totalDistanceMeters," m • ~",t.estimatedTimeMinutes," min"]})]})]}),m.jsxs("div",{className:"collapsed-actions",children:[m.jsxs("button",{type:"button",className:"nav-expand-btn",onClick:()=>a(!1),title:"Expand turn-by-turn directions",children:[m.jsx("span",{children:"⌃"}),m.jsx("span",{children:"Expand"})]}),m.jsx("button",{type:"button",className:"nav-exit-small-btn",onClick:r,title:"Exit Navigation",children:"✕"})]})]})}):m.jsxs("aside",{className:"navigation-active-panel expanded","aria-label":"Turn by Turn Walking Directions",children:[m.jsxs("div",{className:"nav-header",children:[m.jsxs("div",{className:"nav-destination-title",children:[m.jsx("span",{className:"nav-walking-icon",children:"🚶"}),m.jsxs("div",{className:"nav-dest-text",children:[m.jsx("span",{className:"nav-sub",children:"Walking to Destination"}),m.jsxs("span",{className:"nav-title",children:[e.number," — ",e.name]})]})]}),m.jsxs("div",{className:"nav-header-buttons",children:[m.jsxs("button",{type:"button",className:"nav-collapse-toggle-btn",onClick:()=>a(!0),title:"Collapse panel to view entire route","aria-label":"Collapse Navigation Panel",children:[m.jsx("span",{children:"⌄"}),m.jsx("span",{children:"Collapse"})]}),m.jsx("button",{type:"button",className:"nav-exit-btn",onClick:r,title:"Exit Navigation Mode","aria-label":"Exit Navigation Mode",children:"✕ Exit"})]})]}),m.jsx("div",{className:"nav-progress-track",children:m.jsx("div",{className:"nav-progress-fill",style:{width:`${x}%`}})}),m.jsxs("div",{className:"nav-step-counter",children:[m.jsxs("span",{className:"step-badge",children:["Step ",n+1," of ",l]}),c&&m.jsxs("span",{className:"step-dist-badge",children:["~",c.distanceMeters," m for this segment"]})]}),m.jsxs("div",{className:"nav-instruction-box",children:[m.jsx("span",{className:"turn-direction-arrow",children:f?"🟢":p?"🎯":"➡️"}),m.jsx("p",{className:"instruction-text",children:(c==null?void 0:c.instruction)||"Follow the highlighted road path."})]}),m.jsxs("div",{className:"nav-controls-row",children:[m.jsx("button",{type:"button",className:"nav-step-btn prev-btn",onClick:u,disabled:f,children:"← Previous"}),m.jsx("button",{type:"button",className:"nav-step-btn next-btn",onClick:h,disabled:p,children:p?"Arrived at Destination 🎯":"Next Step →"})]})]})},f1=({location:t,onClose:e,onSetAsDestination:n,isDestination:i})=>t?m.jsxs("aside",{className:"building-info-card","aria-label":"Building Details",children:[m.jsxs("div",{className:"card-header",children:[m.jsxs("div",{className:"card-badge-row",children:[m.jsxs("span",{className:"building-number-pill",children:["Building ",t.number]}),m.jsx("span",{className:"building-cat-pill",children:t.category})]}),m.jsx("button",{type:"button",className:"card-close-btn",onClick:e,"aria-label":"Close building card",children:"✕"})]}),m.jsxs("div",{className:"card-body",children:[m.jsxs("div",{className:"card-title-row",children:[m.jsx("span",{className:"card-icon",children:t.icon}),m.jsx("h2",{className:"card-title",children:t.name})]}),m.jsx("p",{className:"card-description",children:t.description}),t.category==="Hostel"&&m.jsxs("div",{className:"hostel-access-warning-card",children:[m.jsx("span",{className:"warning-icon",children:"⚠️"}),m.jsxs("div",{className:"warning-text-block",children:[m.jsx("span",{className:"warning-heading",children:"Hostel Zone Restriction"}),m.jsx("span",{className:"warning-body",children:"Hostel access may be restricted. Please use an authorized hostel entrance."})]})]})]}),m.jsxs("div",{className:"card-actions",children:[i?m.jsx("div",{className:"destination-selected-status",children:m.jsx("span",{children:"🔴 Current Destination"})}):m.jsxs("button",{type:"button",className:"action-btn primary-action-btn",onClick:()=>n(t),children:[m.jsx("span",{children:"🚩"}),m.jsx("span",{children:"Set as Destination"})]}),m.jsx("button",{type:"button",className:"action-btn secondary-action-btn",onClick:e,children:"Close"})]})]}):null,h1=({zoomLevel:t,onZoomIn:e,onZoomOut:n,onReset:i,isFullscreen:r,onToggleFullscreen:s,isDebugMode:a=!1,onToggleDebug:o,minZoom:l=1,maxZoom:c=3})=>{const u=Math.round(t*100);return m.jsxs("div",{className:"map-controls-dock",role:"toolbar","aria-label":"Map Zoom and View Controls",children:[m.jsxs("div",{className:"map-compass",title:"Campus North (Standard Orientation)",children:[m.jsx("span",{className:"compass-icon",children:"🧭"}),m.jsx("span",{className:"compass-needle",children:"N"})]}),m.jsxs("div",{className:"map-zoom-buttons",children:[m.jsx("button",{type:"button",className:"map-control-btn",onClick:e,disabled:t>=c,title:"Zoom In (Centered)","aria-label":"Zoom In",children:m.jsx("span",{className:"btn-icon",children:"➕"})}),m.jsxs("div",{className:"zoom-indicator",title:"Current Zoom Scale",children:[u,"%"]}),m.jsx("button",{type:"button",className:"map-control-btn",onClick:n,disabled:t<=l,title:"Zoom Out (Centered)","aria-label":"Zoom Out",children:m.jsx("span",{className:"btn-icon",children:"➖"})})]}),m.jsxs("div",{className:"map-action-buttons",children:[m.jsxs("button",{type:"button",className:"map-control-btn reset-btn",onClick:i,title:"Reset View to 100% Center (Maintains selected route)","aria-label":"Reset View",children:[m.jsx("span",{className:"btn-icon",children:"↻"}),m.jsx("span",{className:"btn-text",children:"Reset"})]}),o&&m.jsx("button",{type:"button",className:`map-control-btn debug-dock-btn ${a?"active":""}`,onClick:o,title:a?"Hide Developer Road Network Debug":"Show Developer Road Network Debug","aria-label":"Toggle Road Network Debug",children:m.jsx("span",{className:"btn-icon",children:"🛠️"})}),m.jsx("button",{type:"button",className:"map-control-btn fullscreen-btn",onClick:s,title:r?"Exit Fullscreen":"View Map Fullscreen","aria-label":"Toggle Fullscreen",children:m.jsx("span",{className:"btn-icon",children:r?"🗗":"⛶"})})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="186",p1=0,Zm=1,m1=2,Nl=1,g1=2,Na=3,Yr=0,Sn=1,Ai=2,Ii=0,Ha=1,Jm=2,Qm=3,eg=4,_1=5,ys=100,x1=101,v1=102,y1=103,S1=104,E1=200,M1=201,w1=202,b1=203,Hx=204,Gx=205,T1=206,A1=207,C1=208,R1=209,N1=210,P1=211,I1=212,L1=213,D1=214,Yd=0,Zd=1,Jd=2,oo=3,Qd=4,ef=5,tf=6,nf=7,Vx=0,U1=1,O1=2,gi=0,Wx=1,jx=2,Xx=3,qx=4,$x=5,Kx=6,Yx=7,Zx=300,Zr=301,Ys=302,yu=303,Su=304,Uc=306,rf=1e3,Ni=1001,sf=1002,jt=1003,F1=1004,jo=1005,rn=1006,Eu=1007,Ur=1008,bn=1009,Jx=1010,Qx=1011,lo=1012,Wh=1013,_i=1014,fi=1015,xi=1016,jh=1017,Xh=1018,co=1020,ev=35902,tv=35899,nv=1021,iv=1022,Jn=1023,zi=1026,Or=1027,rv=1028,qh=1029,Jr=1030,$h=1031,Kh=1033,Pl=33776,Il=33777,Ll=33778,Dl=33779,af=35840,of=35841,lf=35842,cf=35843,uf=36196,df=37492,ff=37496,hf=37488,pf=37489,uc=37490,mf=37491,gf=37808,_f=37809,xf=37810,vf=37811,yf=37812,Sf=37813,Ef=37814,Mf=37815,wf=37816,bf=37817,Tf=37818,Af=37819,Cf=37820,Rf=37821,Nf=36492,Pf=36494,If=36495,Lf=36283,Df=36284,dc=36285,Uf=36286,k1=3200,Of=0,B1=1,rr="",Dn="srgb",fc="srgb-linear",hc="linear",ut="srgb",Mu=7680,z1=519,H1=512,G1=513,V1=514,Yh=515,W1=516,j1=517,Zh=518,X1=519,q1=35044,tg="300 es",hi=2e3,uo=2001;function $1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function K1(){const t=pc("canvas");return t.style.display="block",t}const ng={};function ig(...t){const e="THREE."+t.shift();console.log(e,...t)}function sv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=sv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function it(...t){t=sv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Hs(...t){const e=t.join(" ");e in ng||(ng[e]=!0,ze(...t))}function Y1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Z1={[Yd]:Zd,[Jd]:tf,[Qd]:nf,[oo]:ef,[Zd]:Yd,[tf]:Jd,[nf]:Qd,[ef]:oo};class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=Math.PI/180,Ff=180/Math.PI;function Eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function J1(t,e){return(t%e+e)%e}function bu(t,e,n){return(1-n)*t+n*e}function _a(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const rp=class rp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rp.prototype.isVector2=!0;let et=rp;class ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],x=s[a+2],M=s[a+3];if(h!==M||l!==f||c!==p||u!==x){let _=l*f+c*p+u*x+h*M;_<0&&(f=-f,p=-p,x=-x,M=-M,_=-_);let d=1-o;if(_<.9995){const g=Math.acos(_),S=Math.sin(g);d=Math.sin(d*g)/S,o=Math.sin(o*g)/S,l=l*d+f*o,c=c*d+p*o,u=u*d+x*o,h=h*d+M*o}else{l=l*d+f*o,c=c*d+p*o,u=u*d+x*o,h=h*d+M*o;const g=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=g,c*=g,u*=g,h*=g}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],x=s[a+3];return e[n]=o*x+u*h+l*p-c*f,e[n+1]=l*x+u*f+c*h-o*p,e[n+2]=c*x+u*p+o*f-l*h,e[n+3]=u*x-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"YXZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"ZXY":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"ZYX":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"YZX":this._x=f*u*h+c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h-f*p*x;break;case"XZY":this._x=f*u*h-c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h+f*p*x;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sp=class sp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sp.prototype.isVector3=!0;let K=sp;const Tu=new K,rg=new ia,ap=class ap{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],x=i[8],M=r[0],_=r[3],d=r[6],g=r[1],S=r[4],v=r[7],T=r[2],A=r[5],C=r[8];return s[0]=a*M+o*g+l*T,s[3]=a*_+o*S+l*A,s[6]=a*d+o*v+l*C,s[1]=c*M+u*g+h*T,s[4]=c*_+u*S+h*A,s[7]=c*d+u*v+h*C,s[2]=f*M+p*g+x*T,s[5]=f*_+p*S+x*A,s[8]=f*d+p*v+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,x=n*h+i*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=h*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Au.makeScale(e,n)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Au.makeRotation(-e)),this}translate(e,n){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ap.prototype.isMatrix3=!0;let Ve=ap;const Au=new Ve,sg=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ag=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q1(){const t={enabled:!0,workingColorSpace:fc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=Gs(r.r),r.g=Gs(r.g),r.b=Gs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?hc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[fc]:{primaries:e,whitePoint:i,transfer:hc,toXYZ:sg,fromXYZ:ag,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:sg,fromXYZ:ag,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}const Je=Q1();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class eb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{os===void 0&&(os=pc("canvas")),os.width=e.width,os.height=e.height;const r=os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=os}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tb=0;class Jh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Cu(r[a].image)):s.push(Cu(r[a]))}else s=Cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let nb=0;const Ru=new K;class dn extends ts{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Ni,r=Ni,s=rn,a=Ur,o=Jn,l=bn,c=dn.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Eo(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ru).x}get height(){return this.source.getSize(Ru).y}get depth(){return this.source.getSize(Ru).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rf:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rf:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Zx;dn.DEFAULT_ANISOTROPY=1;const op=class op{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],x=l[9],M=l[2],_=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(x+_)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,v=(p+1)/2,T=(d+1)/2,A=(u+f)/4,C=(h+M)/4,y=(x+_)/4;return S>v&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=A/i,s=C/i):v>T?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=A/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((_-x)*(_-x)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(_-x)/g,this.y=(h-M)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};op.prototype.isVector4=!0;let wt=op;class ib extends ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new dn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Jh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends ib{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class av extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rb extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const mc=class mc{constructor(e,n,i,r,s,a,o,l,c,u,h,f,p,x,M,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,h,f,p,x,M,_)}set(e,n,i,r,s,a,o,l,c,u,h,f,p,x,M,_){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=x,d[11]=M,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,x=o*u,M=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+x*c,n[5]=f-M*c,n[9]=-o*l,n[2]=M-f*c,n[6]=x+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,x=c*u,M=c*h;n[0]=f+M*o,n[4]=x*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=p*o-x,n[6]=M+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,x=c*u,M=c*h;n[0]=f-M*o,n[4]=-a*h,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*u,n[9]=M-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,x=o*u,M=o*h;n[0]=l*u,n[4]=x*c-p,n[8]=f*c+M,n[1]=l*h,n[5]=M*c+f,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,x=o*l,M=o*c;n[0]=l*u,n[4]=M-f*h,n[8]=x*h+p,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+x,n[10]=f-M*h}else if(e.order==="XZY"){const f=a*l,p=a*c,x=o*l,M=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+M,n[5]=a*u,n[9]=p*h-x,n[2]=x*h-p,n[6]=o*u,n[10]=M*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sb,e,ab)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),$i.crossVectors(i,En),$i.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),$i.crossVectors(i,En)),$i.normalize(),Xo.crossVectors(En,$i),r[0]=$i.x,r[4]=Xo.x,r[8]=En.x,r[1]=$i.y,r[5]=Xo.y,r[9]=En.y,r[2]=$i.z,r[6]=Xo.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],x=i[2],M=i[6],_=i[10],d=i[14],g=i[3],S=i[7],v=i[11],T=i[15],A=r[0],C=r[4],y=r[8],w=r[12],N=r[1],I=r[5],k=r[9],W=r[13],U=r[2],H=r[6],Q=r[10],q=r[14],B=r[3],P=r[7],G=r[11],Z=r[15];return s[0]=a*A+o*N+l*U+c*B,s[4]=a*C+o*I+l*H+c*P,s[8]=a*y+o*k+l*Q+c*G,s[12]=a*w+o*W+l*q+c*Z,s[1]=u*A+h*N+f*U+p*B,s[5]=u*C+h*I+f*H+p*P,s[9]=u*y+h*k+f*Q+p*G,s[13]=u*w+h*W+f*q+p*Z,s[2]=x*A+M*N+_*U+d*B,s[6]=x*C+M*I+_*H+d*P,s[10]=x*y+M*k+_*Q+d*G,s[14]=x*w+M*W+_*q+d*Z,s[3]=g*A+S*N+v*U+T*B,s[7]=g*C+S*I+v*H+T*P,s[11]=g*y+S*k+v*Q+T*G,s[15]=g*w+S*W+v*q+T*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],x=e[3],M=e[7],_=e[11],d=e[15],g=l*p-c*f,S=o*p-c*h,v=o*f-l*h,T=a*p-c*u,A=a*f-l*u,C=a*h-o*u;return n*(M*g-_*S+d*v)-i*(x*g-_*T+d*A)+r*(x*S-M*T+d*C)-s*(x*v-M*A+_*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],x=e[12],M=e[13],_=e[14],d=e[15],g=n*o-i*a,S=n*l-r*a,v=n*c-s*a,T=i*l-r*o,A=i*c-s*o,C=r*c-s*l,y=u*M-h*x,w=u*_-f*x,N=u*d-p*x,I=h*_-f*M,k=h*d-p*M,W=f*d-p*_,U=g*W-S*k+v*I+T*N-A*w+C*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/U;return e[0]=(o*W-l*k+c*I)*H,e[1]=(r*k-i*W-s*I)*H,e[2]=(M*C-_*A+d*T)*H,e[3]=(f*A-h*C-p*T)*H,e[4]=(l*N-a*W-c*w)*H,e[5]=(n*W-r*N+s*w)*H,e[6]=(_*v-x*C-d*S)*H,e[7]=(u*C-f*v+p*S)*H,e[8]=(a*k-o*N+c*y)*H,e[9]=(i*N-n*k-s*y)*H,e[10]=(x*A-M*v+d*g)*H,e[11]=(h*v-u*A-p*g)*H,e[12]=(o*w-a*I-l*y)*H,e[13]=(n*I-i*w+r*y)*H,e[14]=(M*S-x*T-_*g)*H,e[15]=(u*T-h*S+f*g)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,x=s*h,M=a*u,_=a*h,d=o*h,g=l*c,S=l*u,v=l*h,T=i.x,A=i.y,C=i.z;return r[0]=(1-(M+d))*T,r[1]=(p+v)*T,r[2]=(x-S)*T,r[3]=0,r[4]=(p-v)*A,r[5]=(1-(f+d))*A,r[6]=(_+g)*A,r[7]=0,r[8]=(x+S)*C,r[9]=(_-g)*C,r[10]=(1-(f+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ls.set(r[0],r[1],r[2]).length();const o=ls.set(r[4],r[5],r[6]).length(),l=ls.set(r[8],r[9],r[10]).length();s<0&&(a=-a),jn.copy(this);const c=1/a,u=1/o,h=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,n.setFromRotationMatrix(jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=hi,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let x,M;if(l)x=s/(a-s),M=a*s/(a-s);else if(o===hi)x=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===uo)x=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let x,M;if(l)x=1/(a-s),M=a/(a-s);else if(o===hi)x=-2/(a-s),M=-(a+s)/(a-s);else if(o===uo)x=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};mc.prototype.isMatrix4=!0;let Rt=mc;const ls=new K,jn=new Rt,sb=new K(0,0,0),ab=new K(1,1,1),$i=new K,Xo=new K,En=new K,og=new Rt,lg=new ia;class xr{constructor(e=0,n=0,i=0,r=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(og,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lg.setFromEuler(this),this.setFromQuaternion(lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class ov{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ob=0;const cg=new K,cs=new ia,yi=new Rt,qo=new K,xa=new K,lb=new K,cb=new ia,ug=new K(1,0,0),dg=new K(0,1,0),fg=new K(0,0,1),hg={type:"added"},ub={type:"removed"},us={type:"childadded",child:null},Nu={type:"childremoved",child:null};class qt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new K,n=new xr,i=new ia,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ve}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(ug,e)}rotateY(e){return this.rotateOnAxis(dg,e)}rotateZ(e){return this.rotateOnAxis(fg,e)}translateOnAxis(e,n){return cg.copy(e).applyQuaternion(this.quaternion),this.position.add(cg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ug,e)}translateY(e){return this.translateOnAxis(dg,e)}translateZ(e){return this.translateOnAxis(fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qo.copy(e):qo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(xa,qo,this.up):yi.lookAt(qo,xa,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(yi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hg),us.child=e,this.dispatchEvent(us),us.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ub),Nu.child=e,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hg),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qt.DEFAULT_UP=new K(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $o extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class Pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const _=n.getJointPose(M,i),d=this._getHandJoint(c,M);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(db)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $o;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Iu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=J1(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Iu(a,s,e+1/3),this.g=Iu(a,s,e),this.b=Iu(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=lv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return Je.workingToColorSpace(tn.copy(this),e),Math.round(Qe(tn.r*255,0,255))*65536+Math.round(Qe(tn.g*255,0,255))*256+Math.round(Qe(tn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Dn){Je.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(Ko);const i=bu(Ki.h,Ko.h,n),r=bu(Ki.s,Ko.s,n),s=bu(Ki.l,Ko.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ke;Ke.NAMES=lv;class Qh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=n}clone(){return new Qh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fb extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xr,this.environmentIntensity=1,this.environmentRotation=new xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Xn=new K,Si=new K,Lu=new K,Ei=new K,ds=new K,fs=new K,pg=new K,Du=new K,Uu=new K,Ou=new K,Fu=new wt,ku=new wt,Bu=new wt;class Zn{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),Si.subVectors(i,n),Lu.subVectors(e,n);const a=Xn.dot(Xn),o=Xn.dot(Si),l=Xn.dot(Lu),c=Si.dot(Si),u=Si.dot(Lu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,x=(a*u-o*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Fu.setScalar(0),ku.setScalar(0),Bu.setScalar(0),Fu.fromBufferAttribute(e,n),ku.fromBufferAttribute(e,i),Bu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fu,s.x),a.addScaledVector(ku,s.y),a.addScaledVector(Bu,s.z),a}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),Si.subVectors(e,n),Xn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Xn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ds.subVectors(r,i),fs.subVectors(s,i),Du.subVectors(e,i);const l=ds.dot(Du),c=fs.dot(Du);if(l<=0&&c<=0)return n.copy(i);Uu.subVectors(e,r);const u=ds.dot(Uu),h=fs.dot(Uu);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(ds,a);Ou.subVectors(e,s);const p=ds.dot(Ou),x=fs.dot(Ou);if(x>=0&&p<=x)return n.copy(s);const M=p*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(fs,o);const _=u*x-p*h;if(_<=0&&h-u>=0&&p-x>=0)return pg.subVectors(s,r),o=(h-u)/(h-u+(p-x)),n.copy(r).addScaledVector(pg,o);const d=1/(_+M+f);return a=M*d,o=f*d,n.copy(i).addScaledVector(ds,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mo{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yo.copy(i.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Zo.subVectors(this.max,va),hs.subVectors(e.a,va),ps.subVectors(e.b,va),ms.subVectors(e.c,va),Yi.subVectors(ps,hs),Zi.subVectors(ms,ps),Mr.subVectors(hs,ms);let n=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-Mr.z,Mr.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,Mr.z,0,-Mr.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-Mr.y,Mr.x,0];return!zu(n,hs,ps,ms,Zo)||(n=[1,0,0,0,1,0,0,0,1],!zu(n,hs,ps,ms,Zo))?!1:(Jo.crossVectors(Yi,Zi),n=[Jo.x,Jo.y,Jo.z],zu(n,hs,ps,ms,Zo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new K,new K,new K,new K,new K,new K,new K,new K],qn=new K,Yo=new Mo,hs=new K,ps=new K,ms=new K,Yi=new K,Zi=new K,Mr=new K,va=new K,Zo=new K,Jo=new K,wr=new K;function zu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){wr.fromArray(t,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=n.dot(wr),u=i.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Dt=new K,Qo=new et;let hb=0;class Di extends ts{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=q1,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qo.fromBufferAttribute(this,n),Qo.applyMatrix3(e),this.setXY(n,Qo.x,Qo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_a(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_a(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_a(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_a(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_a(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class cv extends Di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class uv extends Di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ui extends Di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const pb=new Mo,ya=new K,Hu=new K;class ep{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):pb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const n=ya.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ya,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(Hu)),this.expandByPoint(ya.copy(e.center).sub(Hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mb=0;const Ln=new Rt,Gu=new qt,gs=new K,Mn=new Mo,Sa=new Mo,zt=new K;class Vi extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($1(e)?uv:cv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ui(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ep);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Sa.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(Mn.min,Sa.min),Mn.expandByPoint(zt),zt.addVectors(Mn.max,Sa.max),Mn.expandByPoint(zt)):(Mn.expandByPoint(Sa.min),Mn.expandByPoint(Sa.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)zt.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(e,c),zt.add(gs)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Di(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new K,l[y]=new K;const c=new K,u=new K,h=new K,f=new et,p=new et,x=new et,M=new K,_=new K;function d(y,w,N){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,N),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,w),x.fromBufferAttribute(s,N),u.sub(c),h.sub(c),p.sub(f),x.sub(f);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(I),_.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(I),o[y].add(M),o[w].add(M),o[N].add(M),l[y].add(_),l[w].add(_),l[N].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,w=g.length;y<w;++y){const N=g[y],I=N.start,k=N.count;for(let W=I,U=I+k;W<U;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const S=new K,v=new K,T=new K,A=new K;function C(y){T.fromBufferAttribute(r,y),A.copy(T);const w=o[y];S.copy(w),S.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(A,w);const I=v.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,I)}for(let y=0,w=g.length;y<w;++y){const N=g[y],I=N.start,k=N.count;for(let W=I,U=I+k;W<U;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,h=new K;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),M=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,_),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,_),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let M=0,_=l.length;M<_;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let d=0;d<u;d++)f[x++]=c[p++]}return new Di(f,u,h)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vu=new K,gb=new K,_b=new Ve;class tr{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vu.subVectors(i,n).cross(gb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Vu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_b.getNormalMatrix(e),r=this.coplanarPoint(Vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let xb=0;class wo extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=Ha,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hx,this.blendDst=Gx,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mu,this.stencilZFail=Mu,this.stencilZPass=Mu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new tr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wi=new K,Wu=new K,el=new K,tl=new K;class vb{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wu.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),tl.copy(this.origin).sub(Wu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(el),o=tl.dot(this.direction),l=-tl.dot(el),c=tl.lengthSq(),u=Math.abs(1-a*a);let h,f,p,x;if(u>0)if(h=a*l-o,f=a*o-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const M=1/u;h*=M,f*=M,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wu).addScaledVector(el,f),p}intersectSphere(e,n){if(e.radius<0)return null;wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,x=n.x-a.x,M=n.y-a.y,_=n.z-a.z,d=i.x-a.x,g=i.y-a.y,S=i.z-a.z,v=Math.abs(l),T=Math.abs(c),A=Math.abs(u);let C,y,w,N,I,k,W,U,H,Q,q,B;if(v>=T&&v>=A?(w=l,k=h,H=x,B=d,l>=0?(C=c,y=u,N=f,I=p,W=M,U=_,Q=g,q=S):(C=u,y=c,N=p,I=f,W=_,U=M,Q=S,q=g)):T>=A?(w=c,k=f,H=M,B=g,c>=0?(C=u,y=l,N=p,I=h,W=_,U=x,Q=S,q=d):(C=l,y=u,N=h,I=p,W=x,U=_,Q=d,q=S)):(w=u,k=p,H=_,B=S,u>=0?(C=l,y=c,N=h,I=f,W=x,U=M,Q=d,q=g):(C=c,y=l,N=f,I=h,W=M,U=x,Q=g,q=d)),w===0)return null;const P=C/w,G=y/w,Z=1/w,se=N-P*k,ve=I-G*k,He=W-P*H,Oe=U-G*H,Ge=Q-P*B,V=q-G*B,ee=Ge*Oe-V*He,pe=se*V-ve*Ge,Fe=He*ve-Oe*se;if(r){if(ee<0||pe<0||Fe<0)return null}else if((ee<0||pe<0||Fe<0)&&(ee>0||pe>0||Fe>0))return null;const Se=ee+pe+Fe;if(Se===0)return null;const Ue=Z*(ee*k+pe*H+Fe*B);return(Se>0?Ue<0:Ue>0)?null:this.at(Ue/Se,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dv extends wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.combine=Vx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mg=new Rt,br=new vb,nl=new ep,gg=new K,il=new K,rl=new K,sl=new K,ju=new K,al=new K,_g=new K,ol=new K;class An extends qt{constructor(e=new Vi,n=new dv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ju.fromBufferAttribute(h,e),a?al.addScaledVector(ju,u):al.addScaledVector(ju.sub(n),u))}n.add(al)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(nl.containsPoint(br.origin)===!1&&(br.intersectSphere(nl,gg)===null||br.origin.distanceToSquared(gg)>(e.far-e.near)**2))&&(mg.copy(s).invert(),br.copy(e.ray).applyMatrix4(mg),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=f.length;x<M;x++){const _=f[x],d=a[_.materialIndex],g=Math.max(_.start,p.start),S=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let v=g,T=S;v<T;v+=3){const A=o.getX(v),C=o.getX(v+1),y=o.getX(v+2);r=ll(this,d,e,i,c,u,h,A,C,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let _=x,d=M;_<d;_+=3){const g=o.getX(_),S=o.getX(_+1),v=o.getX(_+2);r=ll(this,a,e,i,c,u,h,g,S,v),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=f.length;x<M;x++){const _=f[x],d=a[_.materialIndex],g=Math.max(_.start,p.start),S=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let v=g,T=S;v<T;v+=3){const A=v,C=v+1,y=v+2;r=ll(this,d,e,i,c,u,h,A,C,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let _=x,d=M;_<d;_+=3){const g=_,S=_+1,v=_+2;r=ll(this,a,e,i,c,u,h,g,S,v),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function yb(t,e,n,i,r,s,a,o){let l;if(e.side===Sn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yr,o),l===null)return null;ol.copy(o),ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ol);return c<n.near||c>n.far?null:{distance:c,point:ol.clone(),object:t}}function ll(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,il),t.getVertexPosition(l,rl),t.getVertexPosition(c,sl);const u=yb(t,e,n,i,il,rl,sl,_g);if(u){const h=new K;Zn.getBarycoord(_g,il,rl,sl,h),r&&(u.uv=Zn.getInterpolatedAttribute(r,o,l,c,h,new et)),s&&(u.uv1=Zn.getInterpolatedAttribute(s,o,l,c,h,new et)),a&&(u.normal=Zn.getInterpolatedAttribute(a,o,l,c,h,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new K,materialIndex:0};Zn.getNormal(il,rl,sl,f.normal),u.face=f,u.barycoord=h}return u}class Sb extends dn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=jt,u=jt,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tr=new ep,Eb=new et(.5,.5),cl=new K;class tp{constructor(e=new tr,n=new tr,i=new tr,r=new tr,s=new tr,a=new tr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],x=s[8],M=s[9],_=s[10],d=s[11],g=s[12],S=s[13],v=s[14],T=s[15];if(r[0].setComponents(c-a,p-u,d-x,T-g).normalize(),r[1].setComponents(c+a,p+u,d+x,T+g).normalize(),r[2].setComponents(c+o,p+h,d+M,T+S).normalize(),r[3].setComponents(c-o,p-h,d-M,T-S).normalize(),i)r[4].setComponents(l,f,_,v).normalize(),r[5].setComponents(c-l,p-f,d-_,T-v).normalize();else if(r[4].setComponents(c-l,p-f,d-_,T-v).normalize(),n===hi)r[5].setComponents(c+l,p+f,d+_,T+v).normalize();else if(n===uo)r[5].setComponents(l,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const n=Eb.distanceTo(e.center);return Tr.radius=.7071067811865476+n,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fv extends dn{constructor(e=[],n=Zr,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fo extends dn{constructor(e,n,i=_i,r,s,a,o=jt,l=jt,c,u=zi,h=1){if(u!==zi&&u!==Or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Mb extends fo{constructor(e,n=_i,i=Zr,r,s,a=jt,o=jt,l,c=zi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hv extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ra extends Vi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ui(c,3)),this.setAttribute("normal",new Ui(u,3)),this.setAttribute("uv",new Ui(h,2));function x(M,_,d,g,S,v,T,A,C,y,w){const N=v/C,I=T/y,k=v/2,W=T/2,U=A/2,H=C+1,Q=y+1;let q=0,B=0;const P=new K;for(let G=0;G<Q;G++){const Z=G*I-W;for(let se=0;se<H;se++){const ve=se*N-k;P[M]=ve*g,P[_]=Z*S,P[d]=U,c.push(P.x,P.y,P.z),P[M]=0,P[_]=0,P[d]=A>0?1:-1,u.push(P.x,P.y,P.z),h.push(se/C),h.push(1-G/y),q+=1}}for(let G=0;G<y;G++)for(let Z=0;Z<C;Z++){const se=f+Z+H*G,ve=f+Z+H*(G+1),He=f+(Z+1)+H*(G+1),Oe=f+(Z+1)+H*G;l.push(se,ve,Oe),l.push(ve,He,Oe),B+=6}o.addGroup(p,B,w),p+=B,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zr extends Vi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=n/l,p=[],x=[],M=[],_=[];for(let d=0;d<u;d++){const g=d*f-a;for(let S=0;S<c;S++){const v=S*h-s;x.push(v,-g,0),M.push(0,0,1),_.push(S/o),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){const S=g+c*d,v=g+c*(d+1),T=g+1+c*(d+1),A=g+1+c*d;p.push(S,v,A),p.push(v,T,A)}this.setIndex(p),this.setAttribute("position",new Ui(x,3)),this.setAttribute("normal",new Ui(M,3)),this.setAttribute("uv",new Ui(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.widthSegments,e.heightSegments)}}function Zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(xg(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(xg(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=Zs(t[n]);for(const r in i)e[r]=i[r]}return e}function xg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function wb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function pv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const bb={clone:Zs,merge:ln};var Tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ab=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tb,this.fragmentShader=Ab,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=wb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(r.value);break;case"v2":this.uniforms[i].value=new et().fromArray(r.value);break;case"v3":this.uniforms[i].value=new K().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Cb extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xu extends wo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Of,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rb extends wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nb extends wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class np extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Pb extends np{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const qu=new Rt,vg=new K,yg=new K;class Ib{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;vg.setFromMatrixPosition(e.matrixWorld),n.position.copy(vg),yg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(yg),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){qu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(qu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===uo||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ul=new K,dl=new ia,ai=new K;class mv extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ul,dl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,dl,ai.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ul,dl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,dl,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new K,Sg=new et,Eg=new et;class Fn extends mv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ff*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ff*2*Math.atan(Math.tan(wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,n){return this.getViewBounds(e,Sg,Eg),n.subVectors(Eg,Sg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ip extends mv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Lb extends Ib{constructor(){super(new ip(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Db extends np{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Lb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Ub extends np{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const _s=-90,xs=1;class Ob extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(_s,xs,e,n);r.layers=this.layers,this.add(r);const s=new Fn(_s,xs,e,n);s.layers=this.layers,this.add(s);const a=new Fn(_s,xs,e,n);a.layers=this.layers,this.add(a);const o=new Fn(_s,xs,e,n);o.layers=this.layers,this.add(o);const l=new Fn(_s,xs,e,n);l.layers=this.layers,this.add(l);const c=new Fn(_s,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Fb extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lp=class lp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};lp.prototype.isMatrix2=!0;let Mg=lp;function wg(t,e,n,i){const r=kb(i);switch(n){case nv:return t*e;case rv:return t*e/r.components*r.byteLength;case qh:return t*e/r.components*r.byteLength;case Jr:return t*e*2/r.components*r.byteLength;case $h:return t*e*2/r.components*r.byteLength;case iv:return t*e*3/r.components*r.byteLength;case Jn:return t*e*4/r.components*r.byteLength;case Kh:return t*e*4/r.components*r.byteLength;case Pl:case Il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case of:case cf:return Math.max(t,16)*Math.max(e,8)/4;case af:case lf:return Math.max(t,8)*Math.max(e,8)/2;case uf:case df:case hf:case pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ff:case uc:case mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case xf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case vf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case yf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case wf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Af:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nf:case Pf:case If:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Lf:case Df:return Math.ceil(t/4)*Math.ceil(e/4)*8;case dc:case Uf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kb(t){switch(t){case bn:case Jx:return{byteLength:1,components:1};case lo:case Qx:case xi:return{byteLength:2,components:1};case jh:case Xh:return{byteLength:2,components:4};case _i:case Wh:case fi:return{byteLength:4,components:1};case ev:case tv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gv(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Bb(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],M=h[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++f,h[f]=M)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const M=h[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$b=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gT="gl_FragColor = linearToOutputTexel( gl_FragColor );",_T=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,IT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,LT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,VT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$A=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_C=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:zb,alphahash_pars_fragment:Hb,alphamap_fragment:Gb,alphamap_pars_fragment:Vb,alphatest_fragment:Wb,alphatest_pars_fragment:jb,aomap_fragment:Xb,aomap_pars_fragment:qb,batching_pars_vertex:$b,batching_vertex:Kb,begin_vertex:Yb,beginnormal_vertex:Zb,bsdfs:Jb,iridescence_fragment:Qb,bumpmap_pars_fragment:eT,clipping_planes_fragment:tT,clipping_planes_pars_fragment:nT,clipping_planes_pars_vertex:iT,clipping_planes_vertex:rT,color_fragment:sT,color_pars_fragment:aT,color_pars_vertex:oT,color_vertex:lT,common:cT,cube_uv_reflection_fragment:uT,defaultnormal_vertex:dT,displacementmap_pars_vertex:fT,displacementmap_vertex:hT,emissivemap_fragment:pT,emissivemap_pars_fragment:mT,colorspace_fragment:gT,colorspace_pars_fragment:_T,envmap_fragment:xT,envmap_common_pars_fragment:vT,envmap_pars_fragment:yT,envmap_pars_vertex:ST,envmap_physical_pars_fragment:IT,envmap_vertex:ET,fog_vertex:MT,fog_pars_vertex:wT,fog_fragment:bT,fog_pars_fragment:TT,gradientmap_pars_fragment:AT,lightmap_pars_fragment:CT,lights_lambert_fragment:RT,lights_lambert_pars_fragment:NT,lights_pars_begin:PT,lights_toon_fragment:LT,lights_toon_pars_fragment:DT,lights_phong_fragment:UT,lights_phong_pars_fragment:OT,lights_physical_fragment:FT,lights_physical_pars_fragment:kT,lights_fragment_begin:BT,lights_fragment_maps:zT,lights_fragment_end:HT,lightprobes_pars_fragment:GT,logdepthbuf_fragment:VT,logdepthbuf_pars_fragment:WT,logdepthbuf_pars_vertex:jT,logdepthbuf_vertex:XT,map_fragment:qT,map_pars_fragment:$T,map_particle_fragment:KT,map_particle_pars_fragment:YT,metalnessmap_fragment:ZT,metalnessmap_pars_fragment:JT,morphinstance_vertex:QT,morphcolor_vertex:eA,morphnormal_vertex:tA,morphtarget_pars_vertex:nA,morphtarget_vertex:iA,normal_fragment_begin:rA,normal_fragment_maps:sA,normal_pars_fragment:aA,normal_pars_vertex:oA,normal_vertex:lA,normalmap_pars_fragment:cA,clearcoat_normal_fragment_begin:uA,clearcoat_normal_fragment_maps:dA,clearcoat_pars_fragment:fA,iridescence_pars_fragment:hA,opaque_fragment:pA,packing:mA,premultiplied_alpha_fragment:gA,project_vertex:_A,dithering_fragment:xA,dithering_pars_fragment:vA,roughnessmap_fragment:yA,roughnessmap_pars_fragment:SA,shadowmap_pars_fragment:EA,shadowmap_pars_vertex:MA,shadowmap_vertex:wA,shadowmask_pars_fragment:bA,skinbase_vertex:TA,skinning_pars_vertex:AA,skinning_vertex:CA,skinnormal_vertex:RA,specularmap_fragment:NA,specularmap_pars_fragment:PA,tonemapping_fragment:IA,tonemapping_pars_fragment:LA,transmission_fragment:DA,transmission_pars_fragment:UA,uv_pars_fragment:OA,uv_pars_vertex:FA,uv_vertex:kA,worldpos_vertex:BA,background_vert:zA,background_frag:HA,backgroundCube_vert:GA,backgroundCube_frag:VA,cube_vert:WA,cube_frag:jA,depth_vert:XA,depth_frag:qA,distance_vert:$A,distance_frag:KA,equirect_vert:YA,equirect_frag:ZA,linedashed_vert:JA,linedashed_frag:QA,meshbasic_vert:eC,meshbasic_frag:tC,meshlambert_vert:nC,meshlambert_frag:iC,meshmatcap_vert:rC,meshmatcap_frag:sC,meshnormal_vert:aC,meshnormal_frag:oC,meshphong_vert:lC,meshphong_frag:cC,meshphysical_vert:uC,meshphysical_frag:dC,meshtoon_vert:fC,meshtoon_frag:hC,points_vert:pC,points_frag:mC,shadow_vert:gC,shadow_frag:_C,sprite_vert:xC,sprite_frag:vC},ge={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ci={basic:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:ln([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:ln([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:ln([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:ln([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:ln([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:ln([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:ln([ge.common,ge.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:ln([ge.lights,ge.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ci.physical={uniforms:ln([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const fl={r:0,b:0,g:0},yC=new Rt,_v=new Ve;_v.set(-1,0,0,0,1,0,0,0,1);function SC(t,e,n,i,r,s){const a=new Ke(0);let o=r===!0?0:1,l,c,u=null,h=0,f=null;function p(g){let S=g.isScene===!0?g.background:null;if(S&&S.isTexture){const v=g.backgroundBlurriness>0;S=e.get(S,v)}return S}function x(g){let S=!1;const v=p(g);v===null?_(a,o):v&&v.isColor&&(_(v,1),S=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(g,S){const v=p(S);v&&(v.isCubeTexture||v.mapping===Uc)?(c===void 0&&(c=new An(new ra(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Zs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yC.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_v),c.material.toneMapped=Je.getTransfer(v.colorSpace)!==ut,(u!==v||h!==v.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new An(new zr(2,2),new vi({name:"BackgroundMaterial",uniforms:Zs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,S){g.getRGB(fl,pv(t)),n.buffers.color.setClear(fl.r,fl.g,fl.b,S,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,S=1){a.set(g),o=S,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,_(a,o)},render:x,addToRenderList:M,dispose:d}}function EC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(I,k,W,U,H){let Q=!1;const q=h(I,U,W,k);s!==q&&(s=q,c(s.object)),Q=p(I,U,W,H),Q&&x(I,U,W,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,v(I,k,W,U),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function u(I){return t.deleteVertexArray(I)}function h(I,k,W,U){const H=U.wireframe===!0;let Q=i[k.id];Q===void 0&&(Q={},i[k.id]=Q);const q=I.isInstancedMesh===!0?I.id:0;let B=Q[q];B===void 0&&(B={},Q[q]=B);let P=B[W.id];P===void 0&&(P={},B[W.id]=P);let G=P[H];return G===void 0&&(G=f(l()),P[H]=G),G}function f(I){const k=[],W=[],U=[];for(let H=0;H<n;H++)k[H]=0,W[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:U,object:I,attributes:{},index:null}}function p(I,k,W,U){const H=s.attributes,Q=k.attributes;let q=0;const B=W.getAttributes();for(const P in B)if(B[P].location>=0){const Z=H[P];let se=Q[P];if(se===void 0&&(P==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),P==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;q++}return s.attributesNum!==q||s.index!==U}function x(I,k,W,U){const H={},Q=k.attributes;let q=0;const B=W.getAttributes();for(const P in B)if(B[P].location>=0){let Z=Q[P];Z===void 0&&(P==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),P==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),H[P]=se,q++}s.attributes=H,s.attributesNum=q,s.index=U}function M(){const I=s.newAttributes;for(let k=0,W=I.length;k<W;k++)I[k]=0}function _(I){d(I,0)}function d(I,k){const W=s.newAttributes,U=s.enabledAttributes,H=s.attributeDivisors;W[I]=1,U[I]===0&&(t.enableVertexAttribArray(I),U[I]=1),H[I]!==k&&(t.vertexAttribDivisor(I,k),H[I]=k)}function g(){const I=s.newAttributes,k=s.enabledAttributes;for(let W=0,U=k.length;W<U;W++)k[W]!==I[W]&&(t.disableVertexAttribArray(W),k[W]=0)}function S(I,k,W,U,H,Q,q){q===!0?t.vertexAttribIPointer(I,k,W,H,Q):t.vertexAttribPointer(I,k,W,U,H,Q)}function v(I,k,W,U){M();const H=U.attributes,Q=W.getAttributes(),q=k.defaultAttributeValues;for(const B in Q){const P=Q[B];if(P.location>=0){let G=H[B];if(G===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){const Z=G.normalized,se=G.itemSize,ve=e.get(G);if(ve===void 0)continue;const He=ve.buffer,Oe=ve.type,Ge=ve.bytesPerElement,V=Oe===t.INT||Oe===t.UNSIGNED_INT||G.gpuType===Wh;if(G.isInterleavedBufferAttribute){const ee=G.data,pe=ee.stride,Fe=G.offset;if(ee.isInstancedInterleavedBuffer){for(let Se=0;Se<P.locationSize;Se++)d(P.location+Se,ee.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<P.locationSize;Se++)_(P.location+Se);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Se=0;Se<P.locationSize;Se++)S(P.location+Se,se/P.locationSize,Oe,Z,pe*Ge,(Fe+se/P.locationSize*Se)*Ge,V)}else{if(G.isInstancedBufferAttribute){for(let ee=0;ee<P.locationSize;ee++)d(P.location+ee,G.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ee=0;ee<P.locationSize;ee++)_(P.location+ee);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ee=0;ee<P.locationSize;ee++)S(P.location+ee,se/P.locationSize,Oe,Z,se*Ge,se/P.locationSize*ee*Ge,V)}}else if(q!==void 0){const Z=q[B];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(P.location,Z);break;case 3:t.vertexAttrib3fv(P.location,Z);break;case 4:t.vertexAttrib4fv(P.location,Z);break;default:t.vertexAttrib1fv(P.location,Z)}}}}g()}function T(){w();for(const I in i){const k=i[I];for(const W in k){const U=k[W];for(const H in U){const Q=U[H];for(const q in Q)u(Q[q].object),delete Q[q];delete U[H]}}delete i[I]}}function A(I){if(i[I.id]===void 0)return;const k=i[I.id];for(const W in k){const U=k[W];for(const H in U){const Q=U[H];for(const q in Q)u(Q[q].object),delete Q[q];delete U[H]}}delete i[I.id]}function C(I){for(const k in i){const W=i[k];for(const U in W){const H=W[U];if(H[I.id]===void 0)continue;const Q=H[I.id];for(const q in Q)u(Q[q].object),delete Q[q];delete H[I.id]}}}function y(I){for(const k in i){const W=i[k],U=I.isInstancedMesh===!0?I.id:0,H=W[U];if(H!==void 0){for(const Q in H){const q=H[Q];for(const B in q)u(q[B].object),delete q[B];delete H[Q]}delete W[U],Object.keys(W).length===0&&delete i[k]}}}function w(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:_,disableUnusedAttributes:g}}function MC(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function wC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Jn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const y=C===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==bn&&C!==fi&&!y&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:v,maxSamples:T,samples:A}}function bC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new tr,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,M=h.clipIntersection,_=h.clipShadows,d=t.get(h);if(!r||x===null||x.length===0||s&&!_)s?u(null):c();else{const g=s?0:i,S=g*4;let v=d.clippingState||null;l.value=v,v=u(x,f,S,p);for(let T=0;T!==S;++T)v[T]=n[T];d.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,x){const M=h!==null?h.length:0;let _=null;if(M!==0){if(_=l.value,x!==!0||_===null){const d=p+M*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<d)&&(_=new Float32Array(d));for(let S=0,v=p;S!==M;++S,v+=4)a.copy(h[S]).applyMatrix4(g,o),a.normal.toArray(_,v),_[v+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}const Ds=4,TC=6,AC=20,CC=256,Ea=new ip,bg=new Ke;let $u=null,Ku=0,Yu=0,Zu=!1;const RC=new K,Ar=new K;class Tg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=RC}=s;$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($u,Ku,Yu),this._renderer.xr.enabled=Zu,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:xi,format:Jn,colorSpace:fc,depthBuffer:!1},r=Ag(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=NC(s)),this._blurMaterial=IC(s,e,n),this._ggxMaterial=PC(s,e,n)}return r}_compileMaterial(e){const n=new An(new Vi,e);this._renderer.compile(n,Ea)}_sceneToCubeUV(e,n,i,r,s){const l=new Fn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(bg),h.toneMapping=gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new An(new ra,new dv({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,_=M.material;let d=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,d=!0):(_.color.copy(bg),d=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const T=this._cubeSize;vs(r,v*T,S>2?T:0,T,T),h.setRenderTarget(r),d&&h.render(M,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Zr||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,p=h*f,{_lodMax:x}=this,M=this._sizeLods[i],_=3*M*(i>x-Ds?i-x+Ds:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-n,vs(s,_,d,3*M,2*M),r.setRenderTarget(s),r.render(o,Ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,vs(e,_,d,3*M,2*M),r.setRenderTarget(e),r.render(o,Ea)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],h=3*u*(r>this._lodMax-Ds?r-this._lodMax+Ds:0),f=4*(this._cubeSize-u);vs(n,h,f,3*u,2*u),a.setRenderTarget(n),a.render(l,Ea)}}function NC(t){const e=[],n=[];let i=t;const r=t-Ds+1+TC;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,p=3,x=new Float32Array(p*f*h),M=new Float32Array(p*f*h);for(let d=0;d<h;d++){const g=d%3*2/3-1,S=d>2?0:-1,v=[g,S,0,g+2/3,S,0,g+2/3,S+1,0,g,S,0,g+2/3,S+1,0,g,S+1,0];x.set(v,p*f*d);for(let T=0;T<f;T++){const A=u[T*2]*2-1,C=u[T*2+1]*2-1;d===0?Ar.set(1,C,A):d===1?Ar.set(-A,1,-C):d===2?Ar.set(-A,C,1):d===3?Ar.set(-1,C,-A):d===4?Ar.set(-A,-1,C):Ar.set(A,C,-1),Ar.toArray(M,(d*f+T)*p)}}const _=new Vi;_.setAttribute("position",new Di(x,p)),_.setAttribute("outputDirection",new Di(M,p)),n.push(new An(_,null)),i>Ds&&i--}return{lodMeshes:n,sizeLods:e}}function Ag(t,e,n){const i=new ti(t,e,n);return i.texture.mapping=Uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PC(t,e,n){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function IC(t,e,n){return new vi({name:"SphericalGaussianBlur",defines:{SAMPLES:AC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Cg(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Rg(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xv extends ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ra(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Ii});s.uniforms.tEquirect.value=n;const a=new An(r,s),o=n.minFilter;return n.minFilter===Ur&&(n.minFilter=rn),new Ob(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function LC(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===yu||p===Su)if(e.has(f)){const x=e.get(f).texture;return o(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const M=new xv(x.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",c),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,x=p===yu||p===Su,M=p===Zr||p===Ys;if(x||M){let _=n.get(f);const d=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Tg(t)),_=x?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),_.texture;if(_!==void 0)return _.texture;{const g=f.image;return x&&g&&g.height>0||M&&g&&l(g)?(i===null&&(i=new Tg(t)),_=x?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),f.addEventListener("dispose",u),_.texture):null}}}return f}function o(f,p){return p===yu?f.mapping=Zr:p===Su&&(f.mapping=Ys),f}function l(f){let p=0;const x=6;for(let M=0;M<x;M++)f[M]!==void 0&&p++;return p===x}function c(f){const p=f.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const x=n.get(p);x!==void 0&&(n.delete(p),x.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function DC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Hs("WebGLRenderer: "+i+" extension not supported."),r}}}function UC(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,x=h.attributes.position;let M=0;if(x===void 0)return;if(p!==null){const g=p.array;M=p.version;for(let S=0,v=g.length;S<v;S+=3){const T=g[S+0],A=g[S+1],C=g[S+2];f.push(T,A,A,C,C,T)}}else{const g=x.array;M=x.version;for(let S=0,v=g.length/3-1;S<v;S+=3){const T=S+0,A=S+1,C=S+2;f.push(T,A,A,C,C,T)}}const _=new(x.count>=65535?uv:cv)(f,1);_.version=M;const d=s.get(h);d&&e.remove(d),s.set(h,_)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function OC(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){t.drawElements(i,f,s,h*a),n.update(f,i,1)}function c(h,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,h*a,p),n.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,p);let M=0;for(let _=0;_<p;_++)M+=f[_];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function FC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kC(t,e,n){const i=new WeakMap,r=new wt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let N=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var p=N;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),_===!0&&(v=3);let T=o.attributes.position.count*v,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*h),y=new av(C,T,A,h);y.type=fi,y.needsUpdate=!0;const w=v*4;for(let I=0;I<h;I++){const k=d[I],W=g[I],U=S[I],H=T*A*4*I;for(let Q=0;Q<k.count;Q++){const q=Q*w;x===!0&&(r.fromBufferAttribute(k,Q),C[H+q+0]=r.x,C[H+q+1]=r.y,C[H+q+2]=r.z,C[H+q+3]=0),M===!0&&(r.fromBufferAttribute(W,Q),C[H+q+4]=r.x,C[H+q+5]=r.y,C[H+q+6]=r.z,C[H+q+7]=0),_===!0&&(r.fromBufferAttribute(U,Q),C[H+q+8]=r.x,C[H+q+9]=r.y,C[H+q+10]=r.z,C[H+q+11]=U.itemSize===4?r.w:1)}}f={count:h,texture:y,size:new et(T,A)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let _=0;_<c.length;_++)x+=c[_];const M=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function BC(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const zC={[Wx]:"LINEAR_TONE_MAPPING",[jx]:"REINHARD_TONE_MAPPING",[Xx]:"CINEON_TONE_MAPPING",[qx]:"ACES_FILMIC_TONE_MAPPING",[Kx]:"AGX_TONE_MAPPING",[Yx]:"NEUTRAL_TONE_MAPPING",[$x]:"CUSTOM_TONE_MAPPING"};function HC(t,e,n,i,r,s){const a=new ti(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Vi;c.setAttribute("position",new Ui([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ui([0,2,0,0,2,0],2));const u=new Cb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new An(c,u),f=new ip(-1,1,1,-1,0,1);let p=null,x=null,M=!1,_,d=null,g=[],S=!1;this.setSize=function(v,T){a.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let A=0;A<g.length;A++){const C=g[A];C.setSize&&C.setSize(v,T)}},this.setEffects=function(v){g=v,S=g.length>0&&g[0].isRenderPass===!0;const T=a.width,A=a.height;g.length>0&&o===null&&(o=new ti(T,A,{type:xi,depthBuffer:!1,stencilBuffer:!1}),l=new ti(T,A,{type:xi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<g.length;C++){const y=g[C];y.setSize&&y.setSize(T,A)}},this.begin=function(v,T){if(M||v.toneMapping===gi&&g.length===0)return!1;if(d=T,T!==null){const A=T.width,C=T.height;(a.width!==A||a.height!==C)&&this.setSize(A,C)}return S===!1&&v.setRenderTarget(a),_=v.toneMapping,v.toneMapping=gi,!0},this.hasRenderPass=function(){return S},this.end=function(v,T){v.toneMapping=_,M=!0;let A=a,C=o;for(let y=0;y<g.length;y++){const w=g[y];w.enabled!==!1&&(w.render(v,C,A,T),w.needsSwap!==!1&&(A=C,C=C===o?l:o))}if(p!==v.outputColorSpace||x!==v.toneMapping){p=v.outputColorSpace,x=v.toneMapping,u.defines={},Je.getTransfer(p)===ut&&(u.defines.SRGB_TRANSFER="");const y=zC[x];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(d),v.render(h,f),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const vv=new dn,kf=new fo(1,1),yv=new av,Sv=new rb,Ev=new fv,Ng=[],Pg=[],Ig=new Float32Array(16),Lg=new Float32Array(9),Dg=new Float32Array(4);function sa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ng[r];if(s===void 0&&(s=new Float32Array(r),Ng[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fc(t,e){let n=Pg[e];n===void 0&&(n=new Int32Array(e),Pg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function WC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function jC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function XC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Dg.set(i),t.uniformMatrix2fv(this.addr,!1,Dg),Bt(n,i)}}function qC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Lg.set(i),t.uniformMatrix3fv(this.addr,!1,Lg),Bt(n,i)}}function $C(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Ig.set(i),t.uniformMatrix4fv(this.addr,!1,Ig),Bt(n,i)}}function KC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function ZC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function JC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function QC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function tR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function iR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(kf.compareFunction=n.isReversedDepthBuffer()?Zh:Yh,s=kf):s=vv,n.setTexture2D(e||s,r)}function rR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Sv,r)}function sR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ev,r)}function aR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||yv,r)}function oR(t){switch(t){case 5126:return GC;case 35664:return VC;case 35665:return WC;case 35666:return jC;case 35674:return XC;case 35675:return qC;case 35676:return $C;case 5124:case 35670:return KC;case 35667:case 35671:return YC;case 35668:case 35672:return ZC;case 35669:case 35673:return JC;case 5125:return QC;case 36294:return eR;case 36295:return tR;case 36296:return nR;case 35678:case 36198:case 36298:case 36306:case 35682:return iR;case 35679:case 36299:case 36307:return rR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return aR}}function lR(t,e){t.uniform1fv(this.addr,e)}function cR(t,e){const n=sa(e,this.size,2);t.uniform2fv(this.addr,n)}function uR(t,e){const n=sa(e,this.size,3);t.uniform3fv(this.addr,n)}function dR(t,e){const n=sa(e,this.size,4);t.uniform4fv(this.addr,n)}function fR(t,e){const n=sa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hR(t,e){const n=sa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pR(t,e){const n=sa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mR(t,e){t.uniform1iv(this.addr,e)}function gR(t,e){t.uniform2iv(this.addr,e)}function _R(t,e){t.uniform3iv(this.addr,e)}function xR(t,e){t.uniform4iv(this.addr,e)}function vR(t,e){t.uniform1uiv(this.addr,e)}function yR(t,e){t.uniform2uiv(this.addr,e)}function SR(t,e){t.uniform3uiv(this.addr,e)}function ER(t,e){t.uniform4uiv(this.addr,e)}function MR(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=kf:a=vv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function wR(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Sv,s[a])}function bR(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Ev,s[a])}function TR(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||yv,s[a])}function AR(t){switch(t){case 5126:return lR;case 35664:return cR;case 35665:return uR;case 35666:return dR;case 35674:return fR;case 35675:return hR;case 35676:return pR;case 5124:case 35670:return mR;case 35667:case 35671:return gR;case 35668:case 35672:return _R;case 35669:case 35673:return xR;case 5125:return vR;case 36294:return yR;case 36295:return SR;case 36296:return ER;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return wR;case 35680:case 36300:case 36308:case 36293:return bR;case 36289:case 36303:case 36311:case 36292:return TR}}class CR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oR(n.type)}}class RR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AR(n.type)}}class NR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function Ug(t,e){t.seq.push(e),t.map[e.id]=e}function PR(t,e,n){const i=t.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),a=Ju.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ug(n,c===void 0?new CR(o,t,e):new RR(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new NR(o),Ug(n,h)),n=h}}}class Ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);PR(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Og(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const IR=37297;let LR=0;function DR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Fg=new Ve;function UR(t){Je._getMatrix(Fg,Je.workingColorSpace,t);const e=`mat3( ${Fg.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case hc:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+DR(t.getShaderSource(e),o)}else return s}function OR(t,e){const n=UR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const FR={[Wx]:"Linear",[jx]:"Reinhard",[Xx]:"Cineon",[qx]:"ACESFilmic",[Kx]:"AgX",[Yx]:"Neutral",[$x]:"Custom"};function kR(t,e){const n=FR[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hl=new K;function BR(){Je.getLuminanceCoefficients(hl);const t=hl.x.toFixed(4),e=hl.y.toFixed(4),n=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function HR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function GR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Pa(t){return t!==""}function Bg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(t){return t.replace(VR,jR)}const WR=new Map;function jR(t,e){let n=Xe[e];if(n===void 0){const i=WR.get(e);if(i!==void 0)n=Xe[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bf(n)}const XR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(t){return t.replace(XR,qR)}function qR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const $R={[Nl]:"SHADOWMAP_TYPE_PCF",[Na]:"SHADOWMAP_TYPE_VSM"};function KR(t){return $R[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YR={[Zr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[Uc]:"ENVMAP_TYPE_CUBE_UV"};function ZR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":YR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const JR={[Ys]:"ENVMAP_MODE_REFRACTION"};function QR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":JR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e2={[Vx]:"ENVMAP_BLENDING_MULTIPLY",[U1]:"ENVMAP_BLENDING_MIX",[O1]:"ENVMAP_BLENDING_ADD"};function t2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":e2[t.combine]||"ENVMAP_BLENDING_NONE"}function n2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function i2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=KR(n),c=ZR(n),u=QR(n),h=t2(n),f=n2(n),p=zR(n),x=HR(s),M=r.createProgram();let _,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Pa).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Pa).join(`
`),d.length>0&&(d+=`
`)):(_=[Gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),d=[Gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gi?"#define TONE_MAPPING":"",n.toneMapping!==gi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==gi?kR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,OR("linearToOutputTexel",n.outputColorSpace),BR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Pa).join(`
`)),a=Bf(a),a=Bg(a,n),a=zg(a,n),o=Bf(o),o=Bg(o,n),o=zg(o,n),a=Hg(a),o=Hg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",n.glslVersion===tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=g+_+a,v=g+d+o,T=Og(r,r.VERTEX_SHADER,S),A=Og(r,r.FRAGMENT_SHADER,v);r.attachShader(M,T),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(I){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(M)||"",W=r.getShaderInfoLog(T)||"",U=r.getShaderInfoLog(A)||"",H=k.trim(),Q=W.trim(),q=U.trim();let B=!0,P=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,T,A);else{const G=kg(r,T,"vertex"),Z=kg(r,A,"fragment");it("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+G+`
`+Z)}else H!==""?ze("WebGLProgram: Program Info Log:",H):(Q===""||q==="")&&(P=!1);P&&(I.diagnostics={runnable:B,programLog:H,vertexShader:{log:Q,prefix:_},fragmentShader:{log:q,prefix:d}})}r.deleteShader(T),r.deleteShader(A),y=new Ul(r,M),w=GR(r,M)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(M,IR)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=A,this}let r2=0;class s2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new a2(e),n.set(e,i)),i}}class a2{constructor(e){this.id=r2++,this.code=e,this.usedTimes=0}}function o2(t){return t===Jr||t===uc||t===dc}function l2(t,e,n,i,r,s){const a=new ov,o=new s2,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,w,N,I,k,W){const U=I.fog,H=k.geometry,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=e.get(y.envMap||Q,q),P=B&&B.mapping===Uc?B.image.height:null,G=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&ze("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=Z!==void 0?Z.length:0;let ve=0;H.morphAttributes.position!==void 0&&(ve=1),H.morphAttributes.normal!==void 0&&(ve=2),H.morphAttributes.color!==void 0&&(ve=3);let He,Oe,Ge,V;if(G){const pt=ci[G];He=pt.vertexShader,Oe=pt.fragmentShader}else{He=y.vertexShader,Oe=y.fragmentShader;const pt=o.getVertexShaderStage(y),at=o.getFragmentShaderStage(y);o.update(y,pt,at),Ge=pt.id,V=at.id}const ee=t.getRenderTarget(),pe=t.state.buffers.depth.getReversed(),Fe=k.isInstancedMesh===!0,Se=k.isBatchedMesh===!0,Ue=!!y.map,lt=!!y.matcap,ke=!!B,Ye=!!y.aoMap,st=!!y.lightMap,Be=!!y.bumpMap&&y.wireframe===!1,Ee=!!y.normalMap,Ze=!!y.displacementMap,St=!!y.emissiveMap,rt=!!y.metalnessMap,Et=!!y.roughnessMap,F=y.anisotropy>0,At=y.clearcoat>0,ct=y.dispersion>0,R=y.retroreflectivity>0,E=y.iridescence>0,z=y.sheen>0,$=y.transmission>0,J=F&&!!y.anisotropyMap,oe=At&&!!y.clearcoatMap,le=At&&!!y.clearcoatNormalMap,te=At&&!!y.clearcoatRoughnessMap,ie=E&&!!y.iridescenceMap,ce=E&&!!y.iridescenceThicknessMap,Pe=z&&!!y.sheenColorMap,me=z&&!!y.sheenRoughnessMap,ue=!!y.specularMap,Ie=!!y.specularColorMap,De=!!y.specularIntensityMap,We=$&&!!y.transmissionMap,O=$&&!!y.thicknessMap,de=!!y.gradientMap,ne=!!y.alphaMap,fe=y.alphaTest>0,ye=!!y.alphaHash,re=!!y.extensions;let Le=gi;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Le=t.toneMapping);const Re={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:He,fragmentShader:Oe,defines:y.defines,customVertexShaderID:Ge,customFragmentShaderID:V,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Se,batchingColor:Se&&k._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&k.instanceColor!==null,instancingMorph:Fe&&k.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ue,matcap:lt,envMap:ke,envMapMode:ke&&B.mapping,envMapCubeUVHeight:P,aoMap:Ye,lightMap:st,bumpMap:Be,normalMap:Ee,displacementMap:Ze,emissiveMap:St,normalMapObjectSpace:Ee&&y.normalMapType===B1,normalMapTangentSpace:Ee&&y.normalMapType===Of,packedNormalMap:Ee&&y.normalMapType===Of&&o2(y.normalMap.format),metalnessMap:rt,roughnessMap:Et,anisotropy:F,anisotropyMap:J,clearcoat:At,clearcoatMap:oe,clearcoatNormalMap:le,clearcoatRoughnessMap:te,dispersion:ct,retroreflection:R,iridescence:E,iridescenceMap:ie,iridescenceThicknessMap:ce,sheen:z,sheenColorMap:Pe,sheenRoughnessMap:me,specularMap:ue,specularColorMap:Ie,specularIntensityMap:De,transmission:$,transmissionMap:We,thicknessMap:O,gradientMap:de,opaque:y.transparent===!1&&y.blending===Ha&&y.alphaToCoverage===!1,alphaMap:ne,alphaTest:fe,alphaHash:ye,combine:y.combine,mapUv:Ue&&x(y.map.channel),aoMapUv:Ye&&x(y.aoMap.channel),lightMapUv:st&&x(y.lightMap.channel),bumpMapUv:Be&&x(y.bumpMap.channel),normalMapUv:Ee&&x(y.normalMap.channel),displacementMapUv:Ze&&x(y.displacementMap.channel),emissiveMapUv:St&&x(y.emissiveMap.channel),metalnessMapUv:rt&&x(y.metalnessMap.channel),roughnessMapUv:Et&&x(y.roughnessMap.channel),anisotropyMapUv:J&&x(y.anisotropyMap.channel),clearcoatMapUv:oe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(y.sheenRoughnessMap.channel),specularMapUv:ue&&x(y.specularMap.channel),specularColorMapUv:Ie&&x(y.specularColorMap.channel),specularIntensityMapUv:De&&x(y.specularIntensityMap.channel),transmissionMapUv:We&&x(y.transmissionMap.channel),thicknessMapUv:O&&x(y.thicknessMap.channel),alphaMapUv:ne&&x(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ee||F),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(Ue||ne),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&Ee===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ve,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ue&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===ut,decodeVideoTextureEmissive:St&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ai,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function _(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)w.push(N),w.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(d(w,y),g(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function d(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function g(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function S(y){const w=p[y.type];let N;if(w){const I=ci[w];N=bb.clone(I.uniforms)}else N=y.uniforms;return N}function v(y,w){let N=u.get(w);return N!==void 0?++N.usedTimes:(N=new i2(t,w,y,r),c.push(N),u.set(w,N)),N}function T(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:S,acquireProgram:v,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:C}}function c2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function u2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Vg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,x,M,_,d){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:x,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:_,group:d},t[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=x,g.materialVariant=a(f),g.groupOrder=M,g.renderOrder=f.renderOrder,g.z=_,g.group=d),e++,g}function l(f,p,x,M,_,d,g){g.reversedDepth===!0&&(_=-_);const S=o(f,p,x,M,_,d);x.transmission>0?i.push(S):x.transparent===!0?r.push(S):n.push(S)}function c(f,p,x,M,_,d){const g=o(f,p,x,M,_,d);x.transmission>0?i.unshift(g):x.transparent===!0?r.unshift(g):n.unshift(g)}function u(f,p){n.length>1&&n.sort(f||u2),i.length>1&&i.sort(p||Vg),r.length>1&&r.sort(p||Vg)}function h(){for(let f=e,p=t.length;f<p;f++){const x=t[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function d2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Wg,t.set(i,[a])):r>=s.length?(a=new Wg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function f2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new K,color:new Ke};break;case"SpotLight":n={position:new K,direction:new K,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function h2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let p2=0;function m2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function g2(t){const e=new f2,n=h2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new Rt,a=new Rt;function o(c){let u=0,h=0,f=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,x=0,M=0,_=0,d=0,g=0,S=0,v=0,T=0,A=0,C=0,y=0,w=0,N=0;c.sort(m2);for(let k=0,W=c.length;k<W;k++){const U=c[k],H=U.color,Q=U.intensity,q=U.distance;let B=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Jr?B=U.shadow.map.texture:B=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=H.r*Q,h+=H.g*Q,f+=H.b*Q;else if(U.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(U.sh.coefficients[P],Q);N++}else if(U.isSunLight){const P=e.get(U);if(P.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const G=U.shadow,Z=n.get(U);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[x]=Z,i.sunShadowMap[x]=B;const se=G.getViewportCount();for(let ve=0;ve<se;ve++)i.sunShadowMatrix[M+ve]=G.getMatrix(ve),i.sunShadowCascade[M+ve]=G._cascadeData[ve];M+=se,x++}i.sun[p]=P,p++}else if(U.isDirectionalLight){const P=e.get(U);if(P.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const G=U.shadow,Z=n.get(U);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=B,i.directionalShadowMatrix[_]=U.shadow.matrix,T++}i.directional[_]=P,_++}else if(U.isSpotLight){const P=e.get(U);P.position.setFromMatrixPosition(U.matrixWorld),P.color.copy(H).multiplyScalar(Q),P.distance=q,P.coneCos=Math.cos(U.angle),P.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),P.decay=U.decay,i.spot[g]=P;const G=U.shadow;if(U.map&&(i.spotLightMap[y]=U.map,y++,G.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[g]=G.matrix,U.castShadow){const Z=n.get(U);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.spotShadow[g]=Z,i.spotShadowMap[g]=B,C++}g++}else if(U.isRectAreaLight){const P=e.get(U);P.color.copy(H).multiplyScalar(Q),P.halfWidth.set(U.width*.5,0,0),P.halfHeight.set(0,U.height*.5,0),i.rectArea[S]=P,S++}else if(U.isPointLight){const P=e.get(U);if(P.color.copy(U.color).multiplyScalar(U.intensity),P.distance=U.distance,P.decay=U.decay,U.castShadow){const G=U.shadow,Z=n.get(U);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,i.pointShadow[d]=Z,i.pointShadowMap[d]=B,i.pointShadowMatrix[d]=U.shadow.matrix,A++}i.point[d]=P,d++}else if(U.isHemisphereLight){const P=e.get(U);P.skyColor.copy(U.color).multiplyScalar(Q),P.groundColor.copy(U.groundColor).multiplyScalar(Q),i.hemi[v]=P,v++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const I=i.hash;(I.sunLength!==p||I.directionalLength!==_||I.pointLength!==d||I.spotLength!==g||I.rectAreaLength!==S||I.hemiLength!==v||I.numSunShadows!==x||I.numDirectionalShadows!==T||I.numPointShadows!==A||I.numSpotShadows!==C||I.numSpotMaps!==y||I.numLightProbes!==N)&&(i.sun.length=p,i.directional.length=_,i.spot.length=g,i.rectArea.length=S,i.point.length=d,i.hemi.length=v,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=N,I.sunLength=p,I.directionalLength=_,I.pointLength=d,I.spotLength=g,I.rectAreaLength=S,I.hemiLength=v,I.numSunShadows=x,I.numDirectionalShadows=T,I.numPointShadows=A,I.numSpotShadows=C,I.numSpotMaps=y,I.numLightProbes=N,i.version=p2++)}function l(c,u){let h=0,f=0,p=0,x=0,M=0,_=0;const d=u.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const v=c[g];if(v.isSunLight){const T=i.sun[h];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(d),h++}else if(v.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),f++}else if(v.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),x++}else if(v.isRectAreaLight){const T=i.rectArea[M];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(v.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:i}}function jg(t){const e=new g2(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function _2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new jg(t),e.set(r,[o])):s>=a.length?(o=new jg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const x2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,y2=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],S2=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Xg=new Rt,Ma=new K,Qu=new K;function E2(t,e,n){let i=new tp;const r=new et,s=new et,a=new wt,o=new Rb,l=new Nb,c={},u=n.maxTextureSize,h={[Yr]:Sn,[Sn]:Yr,[Ai]:Ai},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:x2,fragmentShader:v2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new Vi;x.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new An(x,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let d=this.type;this.render=function(A,C,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===g1&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nl);const w=t.getRenderTarget(),N=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Ii),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const W=d!==this.type;W&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(H=>H.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,H=A.length;U<H;U++){const Q=A[U],q=Q.shadow;if(q===void 0){ze("WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const B=q.getFrameExtents();r.multiply(B),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,q.mapSize.y=s.y));const P=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=P,q.map===null||W===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Na){if(Q.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ti(r.x,r.y,{format:Jr,type:xi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),q.map.texture.name=Q.name+".shadowMap",q.map.depthTexture=new fo(r.x,r.y,fi),q.map.depthTexture.name=Q.name+".shadowMapDepth",q.map.depthTexture.format=zi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=jt,q.map.depthTexture.magFilter=jt}else Q.isPointLight?(q.map=new xv(r.x),q.map.depthTexture=new Mb(r.x,_i)):(q.map=new ti(r.x,r.y),q.map.depthTexture=new fo(r.x,r.y,_i)),q.map.depthTexture.name=Q.name+".shadowMap",q.map.depthTexture.format=zi,this.type===Nl?(q.map.depthTexture.compareFunction=P?Zh:Yh,q.map.depthTexture.minFilter=rn,q.map.depthTexture.magFilter=rn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=jt,q.map.depthTexture.magFilter=jt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const G=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Q.isPointLight!==!0&&q.updateMatrices(Q,y);for(let Z=0;Z<G;Z++){const se=q.getCamera(Z);if(Q.isPointLight){const ve=q.camera,He=q.matrix,Oe=Q.distance||ve.far;Oe!==ve.far&&(ve.far=Oe,ve.updateProjectionMatrix()),Ma.setFromMatrixPosition(Q.matrixWorld),ve.position.copy(Ma),Qu.copy(ve.position),Qu.add(y2[Z]),ve.up.copy(S2[Z]),ve.lookAt(Qu),ve.updateMatrixWorld(),He.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Xg.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Xg,ve.coordinateSystem,ve.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,Z),t.clear();else{Z===0&&(t.setRenderTarget(q.map),t.clear());const ve=q.getViewport(Z);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),k.viewport(a)}i=q.getFrustum(Z),v(C,y,se,Q,this.type)}q.isPointLightShadow!==!0&&this.type===Na&&g(q,y),q.needsUpdate=!1}d=this.type,_.needsUpdate=!1,t.setRenderTarget(w,N,I)};function g(A,C){const y=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new ti(r.x,r.y,{format:Jr,type:xi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,y,f,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,y,p,M,null)}function S(A,C,y,w){let N=null;const I=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)N=I;else if(N=y.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=N.uuid,W=C.uuid;let U=c[k];U===void 0&&(U={},c[k]=U);let H=U[W];H===void 0&&(H=N.clone(),U[W]=H,C.addEventListener("dispose",T)),N=H}if(N.visible=C.visible,N.wireframe=C.wireframe,w===Na?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:h[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const k=t.properties.get(N);k.light=y}return N}function v(A,C,y,w,N){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===Na)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const W=e.update(A),U=A.material;if(Array.isArray(U)){const H=W.groups;for(let Q=0,q=H.length;Q<q;Q++){const B=H[Q],P=U[B.materialIndex];if(P&&P.visible){const G=S(A,P,w,N);A.onBeforeShadow(t,A,C,y,W,G,B),t.renderBufferDirect(y,null,W,G,A,B),A.onAfterShadow(t,A,C,y,W,G,B)}}}else if(U.visible){const H=S(A,U,w,N);A.onBeforeShadow(t,A,C,y,W,H,null),t.renderBufferDirect(y,null,W,H,A,null),A.onAfterShadow(t,A,C,y,W,H,null)}}const k=A.children;for(let W=0,U=k.length;W<U;W++)v(k[W],C,y,w,N)}function T(A){A.target.removeEventListener("dispose",T);for(const y in c){const w=c[y],N=A.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function M2(t,e){function n(){let O=!1;const de=new wt;let ne=null;const fe=new wt(0,0,0,0);return{setMask:function(ye){ne!==ye&&!O&&(t.colorMask(ye,ye,ye,ye),ne=ye)},setLocked:function(ye){O=ye},setClear:function(ye,re,Le,Re,pt){pt===!0&&(ye*=Re,re*=Re,Le*=Re),de.set(ye,re,Le,Re),fe.equals(de)===!1&&(t.clearColor(ye,re,Le,Re),fe.copy(de))},reset:function(){O=!1,ne=null,fe.set(-1,0,0,0)}}}function i(){let O=!1,de=!1,ne=null,fe=null,ye=null;return{setReversed:function(re){if(de!==re){const Le=e.get("EXT_clip_control");re?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),de=re;const Re=ye;ye=null,this.setClear(Re)}},getReversed:function(){return de},setTest:function(re){re?ee(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(re){ne!==re&&!O&&(t.depthMask(re),ne=re)},setFunc:function(re){if(de&&(re=Z1[re]),fe!==re){switch(re){case Yd:t.depthFunc(t.NEVER);break;case Zd:t.depthFunc(t.ALWAYS);break;case Jd:t.depthFunc(t.LESS);break;case oo:t.depthFunc(t.LEQUAL);break;case Qd:t.depthFunc(t.EQUAL);break;case ef:t.depthFunc(t.GEQUAL);break;case tf:t.depthFunc(t.GREATER);break;case nf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=re}},setLocked:function(re){O=re},setClear:function(re){ye!==re&&(ye=re,de&&(re=1-re),t.clearDepth(re))},reset:function(){O=!1,ne=null,fe=null,ye=null,de=!1}}}function r(){let O=!1,de=null,ne=null,fe=null,ye=null,re=null,Le=null,Re=null,pt=null;return{setTest:function(at){O||(at?ee(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(at){de!==at&&!O&&(t.stencilMask(at),de=at)},setFunc:function(at,Vn,ii){(ne!==at||fe!==Vn||ye!==ii)&&(t.stencilFunc(at,Vn,ii),ne=at,fe=Vn,ye=ii)},setOp:function(at,Vn,ii){(re!==at||Le!==Vn||Re!==ii)&&(t.stencilOp(at,Vn,ii),re=at,Le=Vn,Re=ii)},setLocked:function(at){O=at},setClear:function(at){pt!==at&&(t.clearStencil(at),pt=at)},reset:function(){O=!1,de=null,ne=null,fe=null,ye=null,re=null,Le=null,Re=null,pt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f={},p=new WeakMap,x=[],M=null,_=!1,d=null,g=null,S=null,v=null,T=null,A=null,C=null,y=new Ke(0,0,0),w=0,N=!1,I=null,k=null,W=null,U=null,H=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,B=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(P)[1]),q=B>=1):P.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),q=B>=2);let G=null,Z={};const se=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),He=new wt().fromArray(se),Oe=new wt().fromArray(ve);function Ge(O,de,ne,fe){const ye=new Uint8Array(4),re=t.createTexture();t.bindTexture(O,re),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<ne;Le++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(de+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return re}const V={};V[t.TEXTURE_2D]=Ge(t.TEXTURE_2D,t.TEXTURE_2D,1),V[t.TEXTURE_CUBE_MAP]=Ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[t.TEXTURE_2D_ARRAY]=Ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),V[t.TEXTURE_3D]=Ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),a.setFunc(oo),Be(!1),Ee(Zm),ee(t.CULL_FACE),Ye(Ii);function ee(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function pe(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function Fe(O,de){return f[O]!==de?(t.bindFramebuffer(O,de),f[O]=de,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Se(O,de){let ne=x,fe=!1;if(O){ne=p.get(de),ne===void 0&&(ne=[],p.set(de,ne));const ye=O.textures;if(ne.length!==ye.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Le=ye.length;re<Le;re++)ne[re]=t.COLOR_ATTACHMENT0+re;ne.length=ye.length,fe=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,fe=!0);fe&&t.drawBuffers(ne)}function Ue(O){return M!==O?(t.useProgram(O),M=O,!0):!1}const lt={[ys]:t.FUNC_ADD,[x1]:t.FUNC_SUBTRACT,[v1]:t.FUNC_REVERSE_SUBTRACT};lt[y1]=t.MIN,lt[S1]=t.MAX;const ke={[E1]:t.ZERO,[M1]:t.ONE,[w1]:t.SRC_COLOR,[Hx]:t.SRC_ALPHA,[N1]:t.SRC_ALPHA_SATURATE,[C1]:t.DST_COLOR,[T1]:t.DST_ALPHA,[b1]:t.ONE_MINUS_SRC_COLOR,[Gx]:t.ONE_MINUS_SRC_ALPHA,[R1]:t.ONE_MINUS_DST_COLOR,[A1]:t.ONE_MINUS_DST_ALPHA,[P1]:t.CONSTANT_COLOR,[I1]:t.ONE_MINUS_CONSTANT_COLOR,[L1]:t.CONSTANT_ALPHA,[D1]:t.ONE_MINUS_CONSTANT_ALPHA};function Ye(O,de,ne,fe,ye,re,Le,Re,pt,at){if(O===Ii){_===!0&&(pe(t.BLEND),_=!1);return}if(_===!1&&(ee(t.BLEND),_=!0),O!==_1){if(O!==d||at!==N){if((g!==ys||T!==ys)&&(t.blendEquation(t.FUNC_ADD),g=ys,T=ys),at)switch(O){case Ha:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jm:t.blendFunc(t.ONE,t.ONE);break;case Qm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case eg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",O);break}else switch(O){case Ha:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Qm:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eg:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",O);break}S=null,v=null,A=null,C=null,y.set(0,0,0),w=0,d=O,N=at}return}ye=ye||de,re=re||ne,Le=Le||fe,(de!==g||ye!==T)&&(t.blendEquationSeparate(lt[de],lt[ye]),g=de,T=ye),(ne!==S||fe!==v||re!==A||Le!==C)&&(t.blendFuncSeparate(ke[ne],ke[fe],ke[re],ke[Le]),S=ne,v=fe,A=re,C=Le),(Re.equals(y)===!1||pt!==w)&&(t.blendColor(Re.r,Re.g,Re.b,pt),y.copy(Re),w=pt),d=O,N=!1}function st(O,de){O.side===Ai?pe(t.CULL_FACE):ee(t.CULL_FACE);let ne=O.side===Sn;de&&(ne=!ne),Be(ne),O.blending===Ha&&O.transparent===!1?Ye(Ii):Ye(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const fe=O.stencilWrite;o.setTest(fe),fe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),St(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(O){I!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),I=O)}function Ee(O){O!==p1?(ee(t.CULL_FACE),O!==k&&(O===Zm?t.cullFace(t.BACK):O===m1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),k=O}function Ze(O){O!==W&&(q&&t.lineWidth(O),W=O)}function St(O,de,ne){O?(ee(t.POLYGON_OFFSET_FILL),(U!==de||H!==ne)&&(U=de,H=ne,a.getReversed()&&(de=-de),t.polygonOffset(de,ne))):pe(t.POLYGON_OFFSET_FILL)}function rt(O){O?ee(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function Et(O){O===void 0&&(O=t.TEXTURE0+Q-1),G!==O&&(t.activeTexture(O),G=O)}function F(O,de,ne){ne===void 0&&(G===null?ne=t.TEXTURE0+Q-1:ne=G);let fe=Z[ne];fe===void 0&&(fe={type:void 0,texture:void 0},Z[ne]=fe),(fe.type!==O||fe.texture!==de)&&(G!==ne&&(t.activeTexture(ne),G=ne),t.bindTexture(O,de||V[O]),fe.type=O,fe.texture=de)}function At(){const O=Z[G];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ct(){try{t.compressedTexImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function E(){try{t.texSubImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function z(){try{t.texSubImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function oe(){try{t.texStorage2D(...arguments)}catch(O){it("WebGLState:",O)}}function le(){try{t.texStorage3D(...arguments)}catch(O){it("WebGLState:",O)}}function te(){try{t.texImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function ie(){try{t.texImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function ce(O){return h[O]!==void 0?h[O]:t.getParameter(O)}function Pe(O,de){h[O]!==de&&(t.pixelStorei(O,de),h[O]=de)}function me(O){He.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),He.copy(O))}function ue(O){Oe.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Oe.copy(O))}function Ie(O,de){let ne=c.get(de);ne===void 0&&(ne=new WeakMap,c.set(de,ne));let fe=ne.get(O);fe===void 0&&(fe=t.getUniformBlockIndex(de,O.name),ne.set(O,fe))}function De(O,de){const fe=c.get(de).get(O);l.get(de)!==fe&&(t.uniformBlockBinding(de,fe,O.__bindingPointIndex),l.set(de,fe))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},G=null,Z={},f={},p=new WeakMap,x=[],M=null,_=!1,d=null,g=null,S=null,v=null,T=null,A=null,C=null,y=new Ke(0,0,0),w=0,N=!1,I=null,k=null,W=null,U=null,H=null,He.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:pe,bindFramebuffer:Fe,drawBuffers:Se,useProgram:Ue,setBlending:Ye,setMaterial:st,setFlipSided:Be,setCullFace:Ee,setLineWidth:Ze,setPolygonOffset:St,setScissorTest:rt,activeTexture:Et,bindTexture:F,unbindTexture:At,compressedTexImage2D:ct,compressedTexImage3D:R,texImage2D:te,texImage3D:ie,pixelStorei:Pe,getParameter:ce,updateUBOMapping:Ie,uniformBlockBinding:De,texStorage2D:oe,texStorage3D:le,texSubImage2D:E,texSubImage3D:z,compressedTexSubImage2D:$,compressedTexSubImage3D:J,scissor:me,viewport:ue,reset:We}}function w2(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap,h=new Set;let f;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,E){return x?new OffscreenCanvas(R,E):pc("canvas")}function _(R,E,z){let $=1;const J=ct(R);if((J.width>z||J.height>z)&&($=z/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor($*J.width),le=Math.floor($*J.height);f===void 0&&(f=M(oe,le));const te=E?M(oe,le):f;return te.width=oe,te.height=le,te.getContext("2d").drawImage(R,0,0,oe,le),ze("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+oe+"x"+le+")."),te}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function d(R){return R.generateMipmaps}function g(R){t.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(R,E,z,$,J,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;$&&(le=e.get("EXT_texture_norm16"),le||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=E;if(E===t.RED&&(z===t.FLOAT&&(te=t.R32F),z===t.HALF_FLOAT&&(te=t.R16F),z===t.UNSIGNED_BYTE&&(te=t.R8),z===t.UNSIGNED_SHORT&&le&&(te=le.R16_EXT),z===t.SHORT&&le&&(te=le.R16_SNORM_EXT)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(te=t.R8UI),z===t.UNSIGNED_SHORT&&(te=t.R16UI),z===t.UNSIGNED_INT&&(te=t.R32UI),z===t.BYTE&&(te=t.R8I),z===t.SHORT&&(te=t.R16I),z===t.INT&&(te=t.R32I)),E===t.RG&&(z===t.FLOAT&&(te=t.RG32F),z===t.HALF_FLOAT&&(te=t.RG16F),z===t.UNSIGNED_BYTE&&(te=t.RG8),z===t.UNSIGNED_SHORT&&le&&(te=le.RG16_EXT),z===t.SHORT&&le&&(te=le.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(te=t.RG8UI),z===t.UNSIGNED_SHORT&&(te=t.RG16UI),z===t.UNSIGNED_INT&&(te=t.RG32UI),z===t.BYTE&&(te=t.RG8I),z===t.SHORT&&(te=t.RG16I),z===t.INT&&(te=t.RG32I)),E===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(te=t.RGB8UI),z===t.UNSIGNED_SHORT&&(te=t.RGB16UI),z===t.UNSIGNED_INT&&(te=t.RGB32UI),z===t.BYTE&&(te=t.RGB8I),z===t.SHORT&&(te=t.RGB16I),z===t.INT&&(te=t.RGB32I)),E===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),z===t.UNSIGNED_INT&&(te=t.RGBA32UI),z===t.BYTE&&(te=t.RGBA8I),z===t.SHORT&&(te=t.RGBA16I),z===t.INT&&(te=t.RGBA32I)),E===t.RGB&&(z===t.UNSIGNED_SHORT&&le&&(te=le.RGB16_EXT),z===t.SHORT&&le&&(te=le.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(te=t.R11F_G11F_B10F)),E===t.RGBA){const ie=oe?hc:Je.getTransfer(J);z===t.FLOAT&&(te=t.RGBA32F),z===t.HALF_FLOAT&&(te=t.RGBA16F),z===t.UNSIGNED_BYTE&&(te=ie===ut?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&le&&(te=le.RGBA16_EXT),z===t.SHORT&&le&&(te=le.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function T(R,E){let z;return R?E===null||E===_i||E===co?z=t.DEPTH24_STENCIL8:E===fi?z=t.DEPTH32F_STENCIL8:E===lo&&(z=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_i||E===co?z=t.DEPTH_COMPONENT24:E===fi?z=t.DEPTH_COMPONENT32F:E===lo&&(z=t.DEPTH_COMPONENT16),z}function A(R,E){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==rn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),w(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function y(R){const E=R.target;E.removeEventListener("dispose",y),I(E)}function w(R){const E=i.get(R);if(E.__webglInit===void 0)return;const z=R.source,$=p.get(z);if($){const J=$[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(R),Object.keys($).length===0&&p.delete(z)}i.remove(R)}function N(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const z=R.source,$=p.get(z);delete $[E.__cacheKey],a.memory.textures--}function I(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let J=0;J<E.__webglFramebuffer[$].length;J++)t.deleteFramebuffer(E.__webglFramebuffer[$][J]);else t.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)t.deleteFramebuffer(E.__webglFramebuffer[$]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=R.textures;for(let $=0,J=z.length;$<J;$++){const oe=i.get(z[$]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(z[$])}i.remove(R)}let k=0;function W(){k=0}function U(){return k}function H(R){k=R}function Q(){const R=k;return R>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,R}function q(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function B(R,E){const z=i.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const $=R.image;if($===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(z,R,E);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function P(R,E){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){pe(z,R,E);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function G(R,E){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){pe(z,R,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function Z(R,E){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Fe(z,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const se={[rf]:t.REPEAT,[Ni]:t.CLAMP_TO_EDGE,[sf]:t.MIRRORED_REPEAT},ve={[jt]:t.NEAREST,[F1]:t.NEAREST_MIPMAP_NEAREST,[jo]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[Eu]:t.LINEAR_MIPMAP_NEAREST,[Ur]:t.LINEAR_MIPMAP_LINEAR},He={[H1]:t.NEVER,[X1]:t.ALWAYS,[G1]:t.LESS,[Yh]:t.LEQUAL,[V1]:t.EQUAL,[Zh]:t.GEQUAL,[W1]:t.GREATER,[j1]:t.NOTEQUAL};function Oe(R,E){if(E.type===fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===rn||E.magFilter===Eu||E.magFilter===jo||E.magFilter===Ur||E.minFilter===rn||E.minFilter===Eu||E.minFilter===jo||E.minFilter===Ur)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,se[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,se[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,se[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ve[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jt||E.minFilter!==jo&&E.minFilter!==Ur||E.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ge(R,E){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const $=E.source;let J=p.get($);J===void 0&&(J={},p.set($,J));const oe=q(E);if(oe!==R.__cacheKey){J[oe]===void 0&&(J[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[oe].usedTimes++;const le=J[R.__cacheKey];le!==void 0&&(J[R.__cacheKey].usedTimes--,le.usedTimes===0&&N(E)),R.__cacheKey=oe,R.__webglTexture=J[oe].texture}return z}function V(R,E,z){return Math.floor(Math.floor(R/z)/E)}function ee(R,E,z,$){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,z,$,E.data);else{oe.sort((Pe,me)=>Pe.start-me.start);let le=0;for(let Pe=1;Pe<oe.length;Pe++){const me=oe[le],ue=oe[Pe],Ie=me.start+me.count,De=V(ue.start,E.width,4),We=V(me.start,E.width,4);ue.start<=Ie+1&&De===We&&V(ue.start+ue.count-1,E.width,4)===De?me.count=Math.max(me.count,ue.start+ue.count-me.start):(++le,oe[le]=ue)}oe.length=le+1;const te=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,me=oe.length;Pe<me;Pe++){const ue=oe[Pe],Ie=Math.floor(ue.start/4),De=Math.ceil(ue.count/4),We=Ie%E.width,O=Math.floor(Ie/E.width),de=De,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,We),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,We,O,de,ne,z,$,E.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,te),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function pe(R,E,z){let $=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=t.TEXTURE_3D);const J=Ge(R,E),oe=E.source;n.bindTexture($,R.__webglTexture,t.TEXTURE0+z);const le=i.get(oe);if(oe.version!==le.__version||J===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ne=Je.getPrimaries(Je.workingColorSpace),fe=E.colorSpace===rr?null:Je.getPrimaries(E.colorSpace),ye=E.colorSpace===rr||ne===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let ie=_(E.image,!1,r.maxTextureSize);ie=At(E,ie);const ce=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type);let me=v(E.internalFormat,ce,Pe,E.normalized,E.colorSpace,E.isVideoTexture);Oe($,E);let ue;const Ie=E.mipmaps,De=E.isVideoTexture!==!0,We=le.__version===void 0||J===!0,O=oe.dataReady,de=A(E,ie);if(E.isDepthTexture)me=T(E.format===Or,E.type),We&&(De?n.texStorage2D(t.TEXTURE_2D,1,me,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,me,ie.width,ie.height,0,ce,Pe,null));else if(E.isDataTexture)if(Ie.length>0){De&&We&&n.texStorage2D(t.TEXTURE_2D,de,me,Ie[0].width,Ie[0].height);for(let ne=0,fe=Ie.length;ne<fe;ne++)ue=Ie[ne],De?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ue.width,ue.height,ce,Pe,ue.data):n.texImage2D(t.TEXTURE_2D,ne,me,ue.width,ue.height,0,ce,Pe,ue.data);E.generateMipmaps=!1}else De?(We&&n.texStorage2D(t.TEXTURE_2D,de,me,ie.width,ie.height),O&&ee(E,ie,ce,Pe)):n.texImage2D(t.TEXTURE_2D,0,me,ie.width,ie.height,0,ce,Pe,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){De&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,me,Ie[0].width,Ie[0].height,ie.depth);for(let ne=0,fe=Ie.length;ne<fe;ne++)if(ue=Ie[ne],E.format!==Jn)if(ce!==null)if(De){if(O)if(E.layerUpdates.size>0){const ye=wg(ue.width,ue.height,E.format,E.type);for(const re of E.layerUpdates){const Le=ue.data.subarray(re*ye/ue.data.BYTES_PER_ELEMENT,(re+1)*ye/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,re,ue.width,ue.height,1,ce,Le)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,ie.depth,ce,ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,me,ue.width,ue.height,ie.depth,0,ue.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,ie.depth,ce,Pe,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,me,ue.width,ue.height,ie.depth,0,ce,Pe,ue.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{De&&We&&n.texStorage2D(t.TEXTURE_2D,de,me,Ie[0].width,Ie[0].height);for(let ne=0,fe=Ie.length;ne<fe;ne++)ue=Ie[ne],E.format!==Jn?ce!==null?De?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,ue.width,ue.height,ce,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,me,ue.width,ue.height,0,ue.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ue.width,ue.height,ce,Pe,ue.data):n.texImage2D(t.TEXTURE_2D,ne,me,ue.width,ue.height,0,ce,Pe,ue.data)}else if(E.isDataArrayTexture)if(De){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,me,ie.width,ie.height,ie.depth),O)if(E.layerUpdates.size>0){const ne=wg(ie.width,ie.height,E.format,E.type);for(const fe of E.layerUpdates){const ye=ie.data.subarray(fe*ne/ie.data.BYTES_PER_ELEMENT,(fe+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,ie.width,ie.height,1,ce,Pe,ye)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ce,Pe,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,ie.width,ie.height,ie.depth,0,ce,Pe,ie.data);else if(E.isData3DTexture)De?(We&&n.texStorage3D(t.TEXTURE_3D,de,me,ie.width,ie.height,ie.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ce,Pe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,me,ie.width,ie.height,ie.depth,0,ce,Pe,ie.data);else if(E.isFramebufferTexture){if(We)if(De)n.texStorage2D(t.TEXTURE_2D,de,me,ie.width,ie.height);else{let ne=ie.width,fe=ie.height;for(let ye=0;ye<de;ye++)n.texImage2D(t.TEXTURE_2D,ye,me,ne,fe,0,ce,Pe,null),ne>>=1,fe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),h.add(E),ne.onpaint=fe=>{const ye=fe.changedElements;for(const re of h)ye.includes(re.image)&&(re.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const ye=t.RGBA,re=t.RGBA,Le=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,re,Le,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(De&&We){const ne=ct(Ie[0]);n.texStorage2D(t.TEXTURE_2D,de,me,ne.width,ne.height)}for(let ne=0,fe=Ie.length;ne<fe;ne++)ue=Ie[ne],De?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ce,Pe,ue):n.texImage2D(t.TEXTURE_2D,ne,me,ce,Pe,ue);E.generateMipmaps=!1}else if(De){if(We){const ne=ct(ie);n.texStorage2D(t.TEXTURE_2D,de,me,ne.width,ne.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Pe,ie)}else n.texImage2D(t.TEXTURE_2D,0,me,ce,Pe,ie);d(E)&&g($),le.__version=oe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Fe(R,E,z){if(E.image.length!==6)return;const $=Ge(R,E),J=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const oe=i.get(J);if(J.version!==oe.__version||$===!0){n.activeTexture(t.TEXTURE0+z);const le=Je.getPrimaries(Je.workingColorSpace),te=E.colorSpace===rr?null:Je.getPrimaries(E.colorSpace),ie=E.colorSpace===rr||le===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ce=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,me=[];for(let re=0;re<6;re++)!ce&&!Pe?me[re]=_(E.image[re],!0,r.maxCubemapSize):me[re]=Pe?E.image[re].image:E.image[re],me[re]=At(E,me[re]);const ue=me[0],Ie=s.convert(E.format,E.colorSpace),De=s.convert(E.type),We=v(E.internalFormat,Ie,De,E.normalized,E.colorSpace),O=E.isVideoTexture!==!0,de=oe.__version===void 0||$===!0,ne=J.dataReady;let fe=A(E,ue);Oe(t.TEXTURE_CUBE_MAP,E);let ye;if(ce){O&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,We,ue.width,ue.height);for(let re=0;re<6;re++){ye=me[re].mipmaps;for(let Le=0;Le<ye.length;Le++){const Re=ye[Le];E.format!==Jn?Ie!==null?O?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,0,0,Re.width,Re.height,Ie,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,We,Re.width,Re.height,0,Re.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,0,0,Re.width,Re.height,Ie,De,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,We,Re.width,Re.height,0,Ie,De,Re.data)}}}else{if(ye=E.mipmaps,O&&de){ye.length>0&&fe++;const re=ct(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,We,re.width,re.height)}for(let re=0;re<6;re++)if(Pe){O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,me[re].width,me[re].height,Ie,De,me[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,me[re].width,me[re].height,0,Ie,De,me[re].data);for(let Le=0;Le<ye.length;Le++){const pt=ye[Le].image[re].image;O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,0,0,pt.width,pt.height,Ie,De,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,We,pt.width,pt.height,0,Ie,De,pt.data)}}else{O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ie,De,me[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,Ie,De,me[re]);for(let Le=0;Le<ye.length;Le++){const Re=ye[Le];O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,0,0,Ie,De,Re.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,We,Ie,De,Re.image[re])}}}d(E)&&g(t.TEXTURE_CUBE_MAP),oe.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Se(R,E,z,$,J,oe){const le=s.convert(z.format,z.colorSpace),te=s.convert(z.type),ie=v(z.internalFormat,le,te,z.normalized,z.colorSpace),ce=i.get(E),Pe=i.get(z);if(Pe.__renderTarget=E,!ce.__hasExternalTextures){const me=Math.max(1,E.width>>oe),ue=Math.max(1,E.height>>oe);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,oe,ie,me,ue,E.depth,0,le,te,null):n.texImage2D(J,oe,ie,me,ue,0,le,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Et(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,J,Pe.__webglTexture,0,rt(E)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,J,Pe.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(R,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const $=E.depthTexture,J=$&&$.isDepthTexture?$.type:null,oe=T(E.stencilBuffer,J),le=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,rt(E),oe,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,rt(E),oe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,oe,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,R)}else{const $=E.textures;for(let J=0;J<$.length;J++){const oe=$[J],le=s.convert(oe.format,oe.colorSpace),te=s.convert(oe.type),ie=v(oe.internalFormat,le,te,oe.normalized,oe.colorSpace);Et(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,rt(E),ie,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,rt(E),ie,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ie,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function lt(R,E,z){const $=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(E.depthTexture);if(J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,E.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,E.depthTexture);const ce=s.convert(E.depthTexture.format),Pe=s.convert(E.depthTexture.type);let me;E.depthTexture.format===zi?me=t.DEPTH_COMPONENT24:E.depthTexture.format===Or&&(me=t.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,me,E.width,E.height,0,ce,Pe,null)}}else B(E.depthTexture,0);const oe=J.__webglTexture,le=rt(E),te=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,ie=E.depthTexture.format===Or?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===zi)Et(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,oe,0);else if(E.depthTexture.format===Or)Et(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(R){const E=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=$}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(z)for(let $=0;$<6;$++)lt(E.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?lt(E.__webglFramebuffer[0],R,0):lt(E.__webglFramebuffer,R,0)}else if(z){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=t.createRenderbuffer(),Ue(E.__webglDepthbuffer[$],R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,oe)}}else{const $=R.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Ue(E.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(R,E,z){const $=i.get(R);E!==void 0&&Se($.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ke(R)}function st(R){const E=R.texture,z=i.get(R),$=i.get(E);R.addEventListener("dispose",y);const J=R.textures,oe=R.isWebGLCubeRenderTarget===!0,le=J.length>1;if(le||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=E.version,a.memory.textures++),oe){z.__webglFramebuffer=[];for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[te]=[];for(let ie=0;ie<E.mipmaps.length;ie++)z.__webglFramebuffer[te][ie]=t.createFramebuffer()}else z.__webglFramebuffer[te]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let te=0;te<E.mipmaps.length;te++)z.__webglFramebuffer[te]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(le)for(let te=0,ie=J.length;te<ie;te++){const ce=i.get(J[te]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Et(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let te=0;te<J.length;te++){const ie=J[te];z.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[te]);const ce=s.convert(ie.format,ie.colorSpace),Pe=s.convert(ie.type),me=v(ie.internalFormat,ce,Pe,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),ue=rt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,z.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,E);for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)Se(z.__webglFramebuffer[te][ie],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else Se(z.__webglFramebuffer[te],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);d(E)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let te=0,ie=J.length;te<ie;te++){const ce=J[te],Pe=i.get(ce);let me=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Pe.__webglTexture),Oe(me,ce),Se(z.__webglFramebuffer,R,ce,t.COLOR_ATTACHMENT0+te,me,0),d(ce)&&g(me)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,$.__webglTexture),Oe(te,E),E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)Se(z.__webglFramebuffer[ie],R,E,t.COLOR_ATTACHMENT0,te,ie);else Se(z.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,te,0);d(E)&&g(te),n.unbindTexture()}R.depthBuffer&&ke(R)}function Be(R){const E=R.textures;for(let z=0,$=E.length;z<$;z++){const J=E[z];if(d(J)){const oe=S(R),le=i.get(J).__webglTexture;n.bindTexture(oe,le),g(oe),n.unbindTexture()}}}const Ee=[],Ze=[];function St(R){if(R.samples>0){if(Et(R)===!1){const E=R.textures,z=R.width,$=R.height;let J=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(R),te=E.length>1;if(te)for(let ce=0;ce<E.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<E.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Pe=i.get(E[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,z,$,0,0,z,$,J,t.NEAREST),l===!0&&(Ee.length=0,Ze.length=0,Ee.push(t.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Ee.push(oe),Ze.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ee))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let ce=0;ce<E.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Pe=i.get(E[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function rt(R){return Math.min(r.maxSamples,R.samples)}function Et(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function F(R){const E=a.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function At(R,E){const z=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==fc&&z!==rr&&(Je.getTransfer(z)===ut?($!==Jn||J!==bn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",z)),E}function ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.getTextureUnits=U,this.setTextureUnits=H,this.setTexture2D=B,this.setTexture2DArray=P,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=Ye,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function b2(t,e){function n(i,r=rr){let s;const a=Je.getTransfer(r);if(i===bn)return t.UNSIGNED_BYTE;if(i===jh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ev)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===tv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jx)return t.BYTE;if(i===Qx)return t.SHORT;if(i===lo)return t.UNSIGNED_SHORT;if(i===Wh)return t.INT;if(i===_i)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===xi)return t.HALF_FLOAT;if(i===nv)return t.ALPHA;if(i===iv)return t.RGB;if(i===Jn)return t.RGBA;if(i===zi)return t.DEPTH_COMPONENT;if(i===Or)return t.DEPTH_STENCIL;if(i===rv)return t.RED;if(i===qh)return t.RED_INTEGER;if(i===Jr)return t.RG;if(i===$h)return t.RG_INTEGER;if(i===Kh)return t.RGBA_INTEGER;if(i===Pl||i===Il||i===Ll||i===Dl)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===af||i===of||i===lf||i===cf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===af)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===of)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uf||i===df||i===ff||i===hf||i===pf||i===uc||i===mf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uf||i===df)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ff)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===hf)return s.COMPRESSED_R11_EAC;if(i===pf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===uc)return s.COMPRESSED_RG11_EAC;if(i===mf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gf||i===_f||i===xf||i===vf||i===yf||i===Sf||i===Ef||i===Mf||i===wf||i===bf||i===Tf||i===Af||i===Cf||i===Rf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gf)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_f)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xf)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vf)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yf)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sf)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ef)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mf)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wf)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bf)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tf)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Af)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cf)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rf)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nf||i===Pf||i===If)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nf)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===If)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lf||i===Df||i===dc||i===Uf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Df)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===co?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const T2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new hv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vi({vertexShader:T2,fragmentShader:A2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new An(new zr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R2 extends ts{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,x=null;const M=typeof XRWebGLBinding<"u",_=new C2,d={},g=n.getContextAttributes();let S=null,v=null;const T=[],A=[],C=new et;let y=null,w=null;const N=new Fn;N.viewport=new wt;const I=new Fn;I.viewport=new wt;const k=[N,I],W=new Fb;let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ee=T[V];return ee===void 0&&(ee=new Pu,T[V]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(V){let ee=T[V];return ee===void 0&&(ee=new Pu,T[V]=ee),ee.getGripSpace()},this.getHand=function(V){let ee=T[V];return ee===void 0&&(ee=new Pu,T[V]=ee),ee.getHandSpace()};function Q(V){const ee=A.indexOf(V.inputSource);if(ee===-1)return;const pe=T[ee];pe!==void 0&&(pe.update(V.inputSource,V.frame,c||a),pe.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",B);for(let V=0;V<T.length;V++){const ee=A[V];ee!==null&&(A[V]=null,T[V].disconnect(ee))}U=null,H=null,_.reset();for(const V in d)delete d[V];if(e.setRenderTarget(S),p=null,f=null,h=null,r=null,v=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),w!==null){const V=w.camera;V.fov=w.fov,V.zoom=w.zoom,V.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",q),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,Se=null;g.depth&&(Se=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=g.stencil?Or:zi,Fe=g.stencil?co:_i);const Ue={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ti(f.textureWidth,f.textureHeight,{format:Jn,type:bn,depthTexture:new fo(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const pe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ti(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(V){for(let ee=0;ee<V.removed.length;ee++){const pe=V.removed[ee],Fe=A.indexOf(pe);Fe>=0&&(A[Fe]=null,T[Fe].disconnect(pe))}for(let ee=0;ee<V.added.length;ee++){const pe=V.added[ee];let Fe=A.indexOf(pe);if(Fe===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=A.length){A.push(pe),Fe=Ue;break}else if(A[Ue]===null){A[Ue]=pe,Fe=Ue;break}if(Fe===-1)break}const Se=T[Fe];Se&&Se.connect(pe)}}const P=new K,G=new K;function Z(V,ee,pe){P.setFromMatrixPosition(ee.matrixWorld),G.setFromMatrixPosition(pe.matrixWorld);const Fe=P.distanceTo(G),Se=ee.projectionMatrix.elements,Ue=pe.projectionMatrix.elements,lt=Se[14]/(Se[10]-1),ke=Se[14]/(Se[10]+1),Ye=(Se[9]+1)/Se[5],st=(Se[9]-1)/Se[5],Be=(Se[8]-1)/Se[0],Ee=(Ue[8]+1)/Ue[0],Ze=lt*Be,St=lt*Ee,rt=Fe/(-Be+Ee),Et=rt*-Be;if(ee.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Et),V.translateZ(rt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Se[10]===-1)V.projectionMatrix.copy(ee.projectionMatrix),V.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const F=lt+rt,At=ke+rt,ct=Ze-Et,R=St+(Fe-Et),E=Ye*ke/At*F,z=st*ke/At*F;V.projectionMatrix.makePerspective(ct,R,E,z,F,At),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function se(V,ee){ee===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ee.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let ee=V.near,pe=V.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),W.near=I.near=N.near=ee,W.far=I.far=N.far=pe,(U!==W.near||H!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),U=W.near,H=W.far),W.layers.mask=V.layers.mask|6,N.layers.mask=W.layers.mask&-5,I.layers.mask=W.layers.mask&-3;const Fe=V.parent,Se=W.cameras;se(W,Fe);for(let Ue=0;Ue<Se.length;Ue++)se(Se[Ue],Fe);Se.length===2?Z(W,N,I):W.projectionMatrix.copy(N.projectionMatrix),w===null&&V.isPerspectiveCamera&&(w={camera:V,fov:V.fov,zoom:V.zoom}),ve(V,W,Fe)};function ve(V,ee,pe){pe===null?V.matrix.copy(ee.matrixWorld):(V.matrix.copy(pe.matrixWorld),V.matrix.invert(),V.matrix.multiply(ee.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ee.projectionMatrix),V.projectionMatrixInverse.copy(ee.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ff*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(W)},this.getCameraTexture=function(V){return d[V]};let He=null;function Oe(V,ee){if(u=ee.getViewerPose(c||a),x=ee,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Fe=!1;pe.length!==W.cameras.length&&(W.cameras.length=0,Fe=!0);for(let ke=0;ke<pe.length;ke++){const Ye=pe[ke];let st=null;if(p!==null)st=p.getViewport(Ye);else{const Ee=h.getViewSubImage(f,Ye);st=Ee.viewport,ke===0&&(e.setRenderTargetTextures(v,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(v))}let Be=k[ke];Be===void 0&&(Be=new Fn,Be.layers.enable(ke),Be.viewport=new wt,k[ke]=Be),Be.matrix.fromArray(Ye.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ye.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(st.x,st.y,st.width,st.height),ke===0&&(W.matrix.copy(Be.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Fe===!0&&W.cameras.push(Be)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const ke=h.getDepthInformation(pe[0]);ke&&ke.isValid&&ke.texture&&_.init(ke,r.renderState)}if(Se&&Se.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let ke=0;ke<pe.length;ke++){const Ye=pe[ke].camera;if(Ye){let st=d[Ye];st||(st=new hv,d[Ye]=st);const Be=h.getCameraImage(Ye);st.sourceTexture=Be}}}}for(let pe=0;pe<T.length;pe++){const Fe=A[pe],Se=T[pe];Fe!==null&&Se!==void 0&&Se.update(Fe,ee,c||a)}He&&He(V,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),x=null}const Ge=new gv;Ge.setAnimationLoop(Oe),this.setAnimationLoop=function(V){He=V},this.dispose=function(){}}}const N2=new Rt,Mv=new Ve;Mv.set(-1,0,0,0,1,0,0,0,1);function P2(t,e){function n(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function i(_,d){d.color.getRGB(_.fogColor.value,pv(t)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,g,S,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(_,d):d.isMeshLambertMaterial?(s(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(_,d),h(_,d)):d.isMeshPhongMaterial?(s(_,d),u(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(_,d),f(_,d),d.isMeshPhysicalMaterial&&p(_,d,v)):d.isMeshMatcapMaterial?(s(_,d),x(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),M(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(a(_,d),d.isLineDashedMaterial&&o(_,d)):d.isPointsMaterial?l(_,d,g,S):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,n(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===Sn&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,n(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===Sn&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,n(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,n(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const g=e.get(d),S=g.envMap,v=g.envMapRotation;S&&(_.envMap.value=S,_.envMapRotation.value.setFromMatrix4(N2.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Mv),_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,_.aoMapTransform))}function a(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform))}function o(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,g,S){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*g,_.scale.value=S*.5,d.map&&(_.map.value=d.map,n(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function h(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function f(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function p(_,d,g){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Sn&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.retroreflectivity>0&&(_.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,d){d.matcap&&(_.matcap.value=d.matcap)}function M(_,d){const g=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I2(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){const A=T.program;i.uniformBlockBinding(v,A)}function c(v,T){let A=r[v.id];A===void 0&&(_(v),A=u(v),r[v.id]=A,v.addEventListener("dispose",g));const C=T.program;i.updateUBOMapping(v,C);const y=e.render.frame;s[v.id]!==y&&(f(v),s[v.id]=y)}function u(v){const T=h();v.__bindingPointIndex=T;const A=t.createBuffer(),C=v.__size,y=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,C,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const T=r[v.id],A=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let y=0,w=A.length;y<w;y++){const N=A[y];if(Array.isArray(N))for(let I=0,k=N.length;I<k;I++)p(N[I],y,I,C);else p(N,y,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,T,A,C){if(M(v,T,A,C)===!0){const y=v.__offset,w=v.value;if(Array.isArray(w)){let N=0;for(let I=0;I<w.length;I++){const k=w[I],W=d(k);x(k,v.__data,N),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(N+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,v.__data)}}function x(v,T,A){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,A)}function M(v,T,A,C){const y=v.value,w=T+"_"+A;if(C[w]===void 0)return typeof y=="number"||typeof y=="boolean"?C[w]=y:ArrayBuffer.isView(y)?C[w]=y.slice():C[w]=y.clone(),!0;{const N=C[w];if(typeof y=="number"||typeof y=="boolean"){if(N!==y)return C[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(N.equals(y)===!1)return N.copy(y),!0}}return!1}function _(v){const T=v.uniforms;let A=0;const C=16;for(let w=0,N=T.length;w<N;w++){const I=Array.isArray(T[w])?T[w]:[T[w]];for(let k=0,W=I.length;k<W;k++){const U=I[k],H=Array.isArray(U.value)?U.value:[U.value];for(let Q=0,q=H.length;Q<q;Q++){const B=H[Q],P=d(B),G=A%C,Z=G%P.boundary,se=G+Z;A+=Z,se!==0&&C-se<P.storage&&(A+=C-se),U.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=P.storage}}}const y=A%C;return y>0&&(A+=C-y),v.__size=A,v.__cache={},this}function d(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",v),T}function g(v){const T=v.target;T.removeEventListener("dispose",g);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function S(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:S}}const L2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function D2(){return oi===null&&(oi=new Sb(L2,16,16,Jr,xi),oi.name="DFG_LUT",oi.minFilter=rn,oi.magFilter=rn,oi.wrapS=Ni,oi.wrapT=Ni,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class U2{constructor(e={}){const{canvas:n=K1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const M=p,_=new Set([Kh,$h,qh]),d=new Set([bn,_i,lo,co,jh,Xh]),g=new Uint32Array(4),S=new Int32Array(4),v=new K;let T=null,A=null;const C=[],y=[];let w=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let I=!1,k=null,W=null,U=null,H=null;this._outputColorSpace=Dn;let Q=0,q=0,B=null,P=-1,G=null;const Z=new wt,se=new wt;let ve=null;const He=new Ke(0);let Oe=0,Ge=n.width,V=n.height,ee=1,pe=null,Fe=null;const Se=new wt(0,0,Ge,V),Ue=new wt(0,0,Ge,V);let lt=!1;const ke=new tp;let Ye=!1,st=!1;const Be=new Rt,Ee=new K,Ze=new wt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Et(){return B===null?ee:1}let F=i;function At(b,D){return n.getContext(b,D)}let ct,R,E,z,$,J,oe,le,te,ie,ce,Pe,me,ue,Ie,De,We,O,de,ne,fe,ye,re;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vh}`),n.addEventListener("webglcontextlost",pt,!1),n.addEventListener("webglcontextrestored",at,!1),n.addEventListener("webglcontextcreationerror",Vn,!1),F===null){const D="webgl2";if(F=At(D,b),F===null)throw At(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(b){throw n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",Vn,!1),it("WebGLRenderer: "+b.message),b}function Le(){ct=new DC(F),ct.init(),fe=new b2(F,ct),R=new wC(F,ct,e,fe),E=new M2(F,ct),R.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),W=F.createFramebuffer(),U=F.createFramebuffer(),H=F.createFramebuffer(),z=new FC(F),$=new c2,J=new w2(F,ct,E,$,R,fe,z),oe=new LC(N),le=new Bb(F),ye=new EC(F,le),te=new UC(F,le,z,ye),ie=new BC(F,te,le,ye,z),O=new kC(F,R,J),Ie=new bC($),ce=new l2(N,oe,ct,R,ye,Ie),Pe=new P2(N,$),me=new d2,ue=new _2(ct),We=new SC(N,oe,E,ie,x,l),De=new E2(N,ie,R),re=new I2(F,z,R,E),de=new MC(F,ct,z),ne=new OC(F,ct,z),z.programs=ce.programs,N.capabilities=R,N.extensions=ct,N.properties=$,N.renderLists=me,N.shadowMap=De,N.state=E,N.info=z}M!==bn&&(w=new HC(M,n.width,n.height,o,r,s));const Re=new R2(N,F);this.xr=Re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(Ge,V,!1))},this.getSize=function(b){return b.set(Ge,V)},this.setSize=function(b,D,Y=!0){if(Re.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=b,V=D,n.width=Math.floor(b*ee),n.height=Math.floor(D*ee),Y===!0&&(n.style.width=b+"px",n.style.height=D+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(Ge*ee,V*ee).floor()},this.setDrawingBufferSize=function(b,D,Y){Ge=b,V=D,ee=Y,n.width=Math.floor(b*Y),n.height=Math.floor(D*Y),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(M===bn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Z)},this.getViewport=function(b){return b.copy(Se)},this.setViewport=function(b,D,Y,j){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,D,Y,j),E.viewport(Z.copy(Se).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(Ue)},this.setScissor=function(b,D,Y,j){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,D,Y,j),E.scissor(se.copy(Ue).multiplyScalar(ee).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(b){E.setScissorTest(lt=b)},this.setOpaqueSort=function(b){pe=b},this.setTransparentSort=function(b){Fe=b},this.getClearColor=function(b){return b.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,Y=!0){let j=0;if(b){let X=!1;if(B!==null){const xe=B.texture.format;X=_.has(xe)}if(X){const xe=B.texture.type,we=d.has(xe),_e=We.getClearColor(),Te=We.getClearAlpha(),Ne=_e.r,je=_e.g,qe=_e.b;we?(g[0]=Ne,g[1]=je,g[2]=qe,g[3]=Te,F.clearBufferuiv(F.COLOR,0,g)):(S[0]=Ne,S[1]=je,S[2]=qe,S[3]=Te,F.clearBufferiv(F.COLOR,0,S))}else j|=F.COLOR_BUFFER_BIT}D&&(j|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),k=b},this.dispose=function(){n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",Vn,!1),We.dispose(),me.dispose(),ue.dispose(),$.dispose(),oe.dispose(),ie.dispose(),ye.dispose(),re.dispose(),ce.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",up),Re.removeEventListener("sessionend",dp),Er.stop()};function pt(b){b.preventDefault(),ig("WebGLRenderer: Context Lost."),I=!0}function at(){ig("WebGLRenderer: Context Restored."),I=!1;const b=z.autoReset,D=De.enabled,Y=De.autoUpdate,j=De.needsUpdate,X=De.type;Le(),z.autoReset=b,De.enabled=D,De.autoUpdate=Y,De.needsUpdate=j,De.type=X}function Vn(b){it("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ii(b){const D=b.target;D.removeEventListener("dispose",ii),bv(D)}function bv(b){Tv(b),$.remove(b)}function Tv(b){const D=$.get(b).programs;D!==void 0&&(D.forEach(function(Y){ce.releaseProgram(Y)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,Y,j,X,xe){D===null&&(D=St);const we=X.isMesh&&X.matrixWorld.determinantAffine()<0,_e=Rv(b,D,Y,j,X);E.setMaterial(j,we);let Te=Y.index,Ne=1;if(j.wireframe===!0){if(Te=te.getWireframeAttribute(Y),Te===void 0)return;Ne=2}const je=Y.drawRange,qe=Y.attributes.position;let Ae=je.start*Ne,ot=(je.start+je.count)*Ne;xe!==null&&(Ae=Math.max(Ae,xe.start*Ne),ot=Math.min(ot,(xe.start+xe.count)*Ne)),Te!==null?(Ae=Math.max(Ae,0),ot=Math.min(ot,Te.count)):qe!=null&&(Ae=Math.max(Ae,0),ot=Math.min(ot,qe.count));const Lt=ot-Ae;if(Lt<0||Lt===1/0)return;ye.setup(X,j,_e,Y,Te);let _t,ht=de;if(Te!==null&&(_t=le.get(Te),ht=ne,ht.setIndex(_t)),X.isMesh)j.wireframe===!0?(E.setLineWidth(j.wireframeLinewidth*Et()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(X.isLine){let Kt=j.linewidth;Kt===void 0&&(Kt=1),E.setLineWidth(Kt*Et()),X.isLineSegments?ht.setMode(F.LINES):X.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else X.isPoints?ht.setMode(F.POINTS):X.isSprite&&ht.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))ht.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Kt=X._multiDrawStarts,Me=X._multiDrawCounts,on=X._multiDrawCount,tt=Te?le.get(Te).bytesPerElement:1,In=$.get(j).currentProgram.getUniforms();for(let ri=0;ri<on;ri++)In.setValue(F,"_gl_DrawID",ri),ht.render(Kt[ri]/tt,Me[ri])}else if(X.isInstancedMesh)ht.renderInstances(Ae,Lt,X.count);else if(Y.isInstancedBufferGeometry){const Kt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Me=Math.min(Y.instanceCount,Kt);ht.renderInstances(Ae,Lt,Me)}else ht.render(Ae,Lt)};function cp(b,D,Y,j){k!==null&&b.isNodeMaterial&&k.setObject(j,b),Ye===!0&&Ie.setState(b,Y,!1),b.transparent===!0&&b.side===Ai&&b.forceSinglePass===!1?(b.side=Sn,b.needsUpdate=!0,To(b,D,j),b.side=Yr,b.needsUpdate=!0,To(b,D,j),b.side=Ai):To(b,D,j)}this.compile=function(b,D,Y=null){Y===null&&(Y=b),k!==null&&k.renderStart(b,D,Y),A=ue.get(Y),A.init(D),y.push(A),Y.traverseVisible(function(X){X.isLight&&X.layers.test(D.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),b!==Y&&b.traverseVisible(function(X){X.isLight&&X.layers.test(D.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),A.setupLights(),k!==null&&k.updateLights(A.state.lightsArray),st=this.localClippingEnabled,Ye=Ie.init(this.clippingPlanes,st),Ye===!0&&Ie.setGlobalState(this.clippingPlanes,D),k!==null&&De.render(A.state.shadowsArray,Y,D);const j=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xe=X.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const _e=xe[we];cp(_e,Y,D,X),j.add(_e)}else cp(xe,Y,D,X),j.add(xe)}),A=y.pop(),k!==null&&k.renderEnd(),j},this.compileAsync=function(b,D,Y=null){const j=this.compile(b,D,Y);return new Promise(X=>{function xe(){if(j.forEach(function(we){const Te=$.get(we).currentProgram;(Te===void 0||Te.isReady())&&j.delete(we)}),j.size===0){X(b);return}setTimeout(xe,10)}ct.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let kc=null;function Av(b){kc&&kc(b)}function up(){Er.stop()}function dp(){Er.start()}const Er=new gv;Er.setAnimationLoop(Av),typeof self<"u"&&Er.setContext(self),this.setAnimationLoop=function(b){kc=b,Re.setAnimationLoop(b),b===null?Er.stop():Er.start()},Re.addEventListener("sessionstart",up),Re.addEventListener("sessionend",dp),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;k!==null&&k.renderStart(b,D);const Y=Re.enabled===!0&&Re.isPresenting===!0,j=w!==null&&(B===null||Y)&&w.begin(N,B);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(D),D=Re.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,D,B),A=ue.get(b,y.length),A.init(D),A.state.textureUnits=J.getTextureUnits(),y.push(A),Be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ke.setFromProjectionMatrix(Be,hi,D.reversedDepth),st=this.localClippingEnabled,Ye=Ie.init(this.clippingPlanes,st),T=me.get(b,C.length),T.init(),C.push(T),Re.enabled===!0&&Re.isPresenting===!0){const we=N.xr.getDepthSensingMesh();we!==null&&Bc(we,D,-1/0,N.sortObjects)}Bc(b,D,0,N.sortObjects),T.finish(),k!==null&&k.updateLights(A.state.lightsArray),N.sortObjects===!0&&T.sort(pe,Fe),rt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,rt&&We.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Ie.beginShadows();const X=A.state.shadowsArray;if(De.render(X,b,D),Ye===!0&&Ie.endShadows(),(j&&w.hasRenderPass())===!1){const we=T.opaque,_e=T.transmissive;if(A.setupLights(),D.isArrayCamera){const Te=D.cameras;if(_e.length>0)for(let Ne=0,je=Te.length;Ne<je;Ne++){const qe=Te[Ne];hp(we,_e,b,qe)}rt&&We.render(b);for(let Ne=0,je=Te.length;Ne<je;Ne++){const qe=Te[Ne];fp(T,b,qe,qe.viewport)}}else _e.length>0&&hp(we,_e,b,D),rt&&We.render(b),fp(T,b,D)}B!==null&&q===0&&(J.updateMultisampleRenderTarget(B),J.updateRenderTargetMipmap(B)),j&&w.end(N),b.isScene===!0&&b.onAfterRender(N,b,D),ye.resetDefaultState(),P=-1,G=null,y.pop(),y.length>0?(A=y[y.length-1],J.setTextureUnits(A.state.textureUnits),Ye===!0&&Ie.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,k!==null&&k.renderEnd()};function Bc(b,D,Y,j){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ke)){j&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Be);const we=ie.update(b),_e=b.material;_e.visible&&T.push(b,we,_e,Y,Ze.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ke))){const we=ie.update(b),_e=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ze.copy(we.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(Be)),Array.isArray(_e)){const Te=we.groups;for(let Ne=0,je=Te.length;Ne<je;Ne++){const qe=Te[Ne],Ae=_e[qe.materialIndex];Ae&&Ae.visible&&T.push(b,we,Ae,Y,Ze.z,qe,D)}}else _e.visible&&T.push(b,we,_e,Y,Ze.z,null,D)}}const xe=b.children;for(let we=0,_e=xe.length;we<_e;we++)Bc(xe[we],D,Y,j)}function fp(b,D,Y,j){const{opaque:X,transmissive:xe,transparent:we}=b;A.setupLightsView(Y),Ye===!0&&Ie.setGlobalState(N.clippingPlanes,Y),j&&E.viewport(Z.copy(j)),X.length>0&&bo(X,D,Y),xe.length>0&&bo(xe,D,Y),we.length>0&&bo(we,D,Y),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function hp(b,D,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[j.id]===void 0){const Ae=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[j.id]=new ti(1,1,{generateMipmaps:!0,type:Ae?xi:bn,minFilter:Ur,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const xe=A.state.transmissionRenderTarget[j.id],we=j.viewport||Z;xe.setSize(we.z*N.transmissionResolutionScale,we.w*N.transmissionResolutionScale);const _e=N.getRenderTarget(),Te=N.getActiveCubeFace(),Ne=N.getActiveMipmapLevel();N.setRenderTarget(xe),N.getClearColor(He),Oe=N.getClearAlpha(),Oe<1&&N.setClearColor(16777215,.5),N.clear(),rt&&We.render(Y);const je=N.toneMapping;N.toneMapping=gi;const qe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),A.setupLightsView(j),Ye===!0&&Ie.setGlobalState(N.clippingPlanes,j),bo(b,Y,j),J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ot=0,Lt=D.length;ot<Lt;ot++){const _t=D[ot],{object:ht,geometry:Kt,material:Me,group:on}=_t;if(Me.side===Ai&&ht.layers.test(j.layers)){const tt=Me.side;Me.side=Sn,Me.needsUpdate=!0,pp(ht,Y,j,Kt,Me,on),Me.side=tt,Me.needsUpdate=!0,Ae=!0}}Ae===!0&&(J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe))}N.setRenderTarget(_e,Te,Ne),N.setClearColor(He,Oe),qe!==void 0&&(j.viewport=qe),N.toneMapping=je}function bo(b,D,Y){const j=D.isScene===!0?D.overrideMaterial:null;for(let X=0,xe=b.length;X<xe;X++){const we=b[X],{object:_e,geometry:Te,group:Ne}=we;let je=we.material;je.allowOverride===!0&&j!==null&&(je=j),_e.layers.test(Y.layers)&&pp(_e,D,Y,Te,je,Ne)}}function pp(b,D,Y,j,X,xe){k!==null&&X.isNodeMaterial&&k.setObject(b,X),b.onBeforeRender(N,D,Y,j,X,xe),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(N,D,Y,j,b,xe),X.transparent===!0&&X.side===Ai&&X.forceSinglePass===!1?(X.side=Sn,X.needsUpdate=!0,N.renderBufferDirect(Y,D,j,X,b,xe),X.side=Yr,X.needsUpdate=!0,N.renderBufferDirect(Y,D,j,X,b,xe),X.side=Ai):N.renderBufferDirect(Y,D,j,X,b,xe),b.onAfterRender(N,D,Y,j,X,xe)}function To(b,D,Y){D.isScene!==!0&&(D=St);const j=$.get(b),X=A.state.lights,xe=A.state.shadowsArray,we=X.state.version,_e=ce.getParameters(b,X.state,xe,D,Y,A.state.lightProbeGridArray),Te=ce.getProgramCacheKey(_e);let Ne=j.programs;j.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,j.fog=D.fog;const je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;j.envMap=oe.get(b.envMap||j.environment,je),j.envMapRotation=j.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",ii),Ne=new Map,j.programs=Ne);let qe=Ne.get(Te);if(qe!==void 0){if(j.currentProgram===qe&&j.lightsStateVersion===we)return gp(b,_e),qe}else _e.uniforms=ce.getUniforms(b),k!==null&&b.isNodeMaterial&&k.build(b,Y,_e),b.onBeforeCompile(_e,N),qe=ce.acquireProgram(_e,Te),Ne.set(Te,qe),j.uniforms=_e.uniforms;const Ae=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=Ie.uniform),gp(b,_e),j.needsLights=Pv(b),j.lightsStateVersion=we,j.needsLights&&(Ae.ambientLightColor.value=X.state.ambient,Ae.lightProbe.value=X.state.probe,Ae.sunLights.value=X.state.sun,Ae.sunLightShadows.value=X.state.sunShadow,Ae.directionalLights.value=X.state.directional,Ae.directionalLightShadows.value=X.state.directionalShadow,Ae.spotLights.value=X.state.spot,Ae.spotLightShadows.value=X.state.spotShadow,Ae.rectAreaLights.value=X.state.rectArea,Ae.ltc_1.value=X.state.rectAreaLTC1,Ae.ltc_2.value=X.state.rectAreaLTC2,Ae.pointLights.value=X.state.point,Ae.pointLightShadows.value=X.state.pointShadow,Ae.hemisphereLights.value=X.state.hemi,Ae.sunShadowMatrix.value=X.state.sunShadowMatrix,Ae.sunShadowCascade.value=X.state.sunShadowCascade,Ae.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ae.spotLightMatrix.value=X.state.spotLightMatrix,Ae.spotLightMap.value=X.state.spotLightMap,Ae.pointShadowMatrix.value=X.state.pointShadowMatrix),j.lightProbeGrid=A.state.lightProbeGridArray.length>0,j.currentProgram=qe,j.uniformsList=null,qe}function mp(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=Ul.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function gp(b,D){const Y=$.get(b);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function Cv(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let Y=0,j=b.length;Y<j;Y++){const X=b[Y];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function Rv(b,D,Y,j,X){D.isScene!==!0&&(D=St),J.resetTextureUnits();const xe=D.fog,we=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?D.environment:null,_e=B===null?N.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Je.workingColorSpace,Te=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ne=oe.get(j.envMap||we,Te),je=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qe=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ae=!!Y.morphAttributes.position,ot=!!Y.morphAttributes.normal,Lt=!!Y.morphAttributes.color;let _t=gi;j.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(_t=N.toneMapping);const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Kt=ht!==void 0?ht.length:0,Me=$.get(j),on=A.state.lights;if(Ye===!0&&(st===!0||b!==G)){const mt=b===G&&j.id===P;Ie.setState(j,b,mt)}let tt=!1;j.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==on.state.version||Me.outputColorSpace!==_e||X.isBatchedMesh&&Me.batching===!1||!X.isBatchedMesh&&Me.batching===!0||X.isBatchedMesh&&Me.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Me.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Me.instancing===!1||!X.isInstancedMesh&&Me.instancing===!0||X.isSkinnedMesh&&Me.skinning===!1||!X.isSkinnedMesh&&Me.skinning===!0||X.isInstancedMesh&&Me.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Me.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Me.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Me.instancingMorph===!1&&X.morphTexture!==null||Me.envMap!==Ne||j.fog===!0&&Me.fog!==xe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ie.numPlanes||Me.numIntersection!==Ie.numIntersection)||Me.vertexAlphas!==je||Me.vertexTangents!==qe||Me.morphTargets!==Ae||Me.morphNormals!==ot||Me.morphColors!==Lt||Me.toneMapping!==_t||Me.morphTargetsCount!==Kt||!!Me.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Me.__version=j.version);let In=Me.currentProgram;tt===!0&&(In=To(j,D,X),k&&j.isNodeMaterial&&k.onUpdateProgram(j,In,Me));let ri=!1,Wi=!1,ns=!1;const ft=In.getUniforms(),Nt=Me.uniforms;if(E.useProgram(In.program)&&(ri=!0,Wi=!0,ns=!0),j.id!==P&&(P=j.id,Wi=!0),Me.needsLights){const mt=Cv(A.state.lightProbeGridArray,X);Me.lightProbeGrid!==mt&&(Me.lightProbeGrid=mt,Wi=!0)}if(ri||G!==b){E.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(F,"projectionMatrix",b.projectionMatrix),ft.setValue(F,"viewMatrix",b.matrixWorldInverse);const Xi=ft.map.cameraPosition;Xi!==void 0&&Xi.setValue(F,Ee.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&ft.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ft.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,Wi=!0,ns=!0)}if(Me.needsLights&&(on.state.sunShadowMap.length>0&&ft.setValue(F,"sunShadowMap",on.state.sunShadowMap,J),on.state.directionalShadowMap.length>0&&ft.setValue(F,"directionalShadowMap",on.state.directionalShadowMap,J),on.state.spotShadowMap.length>0&&ft.setValue(F,"spotShadowMap",on.state.spotShadowMap,J),on.state.pointShadowMap.length>0&&ft.setValue(F,"pointShadowMap",on.state.pointShadowMap,J)),X.isSkinnedMesh){ft.setOptional(F,X,"bindMatrix"),ft.setOptional(F,X,"bindMatrixInverse");const mt=X.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ft.setValue(F,"boneTexture",mt.boneTexture,J))}X.isBatchedMesh&&(ft.setOptional(F,X,"batchingTexture"),ft.setValue(F,"batchingTexture",X._matricesTexture,J),ft.setOptional(F,X,"batchingIdTexture"),ft.setValue(F,"batchingIdTexture",X._indirectTexture,J),ft.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&ft.setValue(F,"batchingColorTexture",X._colorsTexture,J));const ji=Y.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&O.update(X,Y,In),(Wi||Me.receiveShadow!==X.receiveShadow)&&(Me.receiveShadow=X.receiveShadow,ft.setValue(F,"receiveShadow",X.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&D.environment!==null&&(Nt.envMapIntensity.value=D.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=D2()),Wi){if(ft.setValue(F,"toneMappingExposure",N.toneMappingExposure),Me.needsLights&&Nv(Nt,ns),xe&&j.fog===!0&&Pe.refreshFogUniforms(Nt,xe),Pe.refreshMaterialUniforms(Nt,j,ee,V,A.state.transmissionRenderTarget[b.id]),Me.needsLights&&Me.lightProbeGrid){const mt=Me.lightProbeGrid;Nt.probesSH.value=mt.texture,Nt.probesMin.value.copy(mt.boundingBox.min),Nt.probesMax.value.copy(mt.boundingBox.max),Nt.probesResolution.value.copy(mt.resolution)}Ul.upload(F,mp(Me),Nt,J)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ul.upload(F,mp(Me),Nt,J),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ft.setValue(F,"center",X.center),ft.setValue(F,"modelViewMatrix",X.modelViewMatrix),ft.setValue(F,"normalMatrix",X.normalMatrix),ft.setValue(F,"modelMatrix",X.matrixWorld),j.uniformsGroups!==void 0){const mt=j.uniformsGroups;for(let Xi=0,is=mt.length;Xi<is;Xi++){const xp=mt[Xi];re.update(xp,In),re.bind(xp,In)}}return In}function Nv(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Pv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,D,Y){const j=$.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),$.get(b.texture).__webglTexture=D,$.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){const Y=$.get(b);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,Y=0){B=b,Q=D,q=Y;let j=null,X=!1,xe=!1;if(b){const _e=$.get(b);if(_e.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(F.FRAMEBUFFER,_e.__webglFramebuffer),Z.copy(b.viewport),se.copy(b.scissor),ve=b.scissorTest,E.viewport(Z),E.scissor(se),E.setScissorTest(ve),P=-1;return}else if(_e.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(_e.__hasExternalTextures)J.rebindTextures(b,$.get(b.texture).__webglTexture,$.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(_e.__boundDepthTexture!==je){if(je!==null&&$.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);const Ne=$.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?j=Ne[D][Y]:j=Ne[D],X=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?j=$.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?j=Ne[Y]:j=Ne,Z.copy(b.viewport),se.copy(b.scissor),ve=b.scissorTest}else Z.copy(Se).multiplyScalar(ee).floor(),se.copy(Ue).multiplyScalar(ee).floor(),ve=lt;if(Y!==0&&(j=W),E.bindFramebuffer(F.FRAMEBUFFER,j)&&E.drawBuffers(b,j),E.viewport(Z),E.scissor(se),E.setScissorTest(ve),X){const _e=$.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,Y)}else if(xe){const _e=D;for(let Te=0;Te<b.textures.length;Te++){const Ne=$.get(b.textures[Te]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Te,Ne.__webglTexture,Y,_e)}}else if(b!==null&&Y!==0){const _e=$.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_e.__webglTexture,Y)}P=-1};function _p(b){const D=$.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=R.textureFormatReadable(b.format),D.__typeReadable=R.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,Y,j,X,xe,we,_e=0){if(!(b&&b.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){E.bindFramebuffer(F.FRAMEBUFFER,Te);try{const Ne=b.textures[_e],je=Ne.format,qe=Ne.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_e);const Ae=_p(Ne);if(Ae.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-j&&Y>=0&&Y<=b.height-X&&F.readPixels(D,Y,j,X,fe.convert(je),fe.convert(qe),xe)}finally{const Ne=B!==null?$.get(B).__webglFramebuffer:null;E.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(b,D,Y,j,X,xe,we,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te)if(D>=0&&D<=b.width-j&&Y>=0&&Y<=b.height-X){E.bindFramebuffer(F.FRAMEBUFFER,Te);const Ne=b.textures[_e],je=Ne.format,qe=Ne.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_e);const Ae=_p(Ne);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ot),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(D,Y,j,X,fe.convert(je),fe.convert(qe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Lt=B!==null?$.get(B).__webglFramebuffer:null;E.bindFramebuffer(F.FRAMEBUFFER,Lt);const _t=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Y1(F,_t,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ot),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ot),F.deleteSync(_t),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,Y=0){const j=Math.pow(2,-Y),X=Math.floor(b.image.width*j),xe=Math.floor(b.image.height*j),we=D!==null?D.x:0,_e=D!==null?D.y:0;J.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,we,_e,X,xe),E.unbindTexture()},this.copyTextureToTexture=function(b,D,Y=null,j=null,X=0,xe=0){let we,_e,Te,Ne,je,qe,Ae,ot,Lt;const _t=b.isCompressedTexture?b.mipmaps[xe]:b.image;if(Y!==null)we=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,je=Y.min.y,qe=Y.isBox3?Y.min.z:0;else{const Nt=Math.pow(2,-X);we=Math.floor(_t.width*Nt),_e=Math.floor(_t.height*Nt),b.isDataArrayTexture?Te=_t.depth:b.isData3DTexture?Te=Math.floor(_t.depth*Nt):Te=1,Ne=0,je=0,qe=0}j!==null?(Ae=j.x,ot=j.y,Lt=j.z):(Ae=0,ot=0,Lt=0);const ht=fe.convert(D.format),Kt=fe.convert(D.type);let Me;D.isData3DTexture?(J.setTexture3D(D,0),Me=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(J.setTexture2DArray(D,0),Me=F.TEXTURE_2D_ARRAY):(J.setTexture2D(D,0),Me=F.TEXTURE_2D),E.activeTexture(F.TEXTURE0),E.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),E.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),E.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const on=E.getParameter(F.UNPACK_ROW_LENGTH),tt=E.getParameter(F.UNPACK_IMAGE_HEIGHT),In=E.getParameter(F.UNPACK_SKIP_PIXELS),ri=E.getParameter(F.UNPACK_SKIP_ROWS),Wi=E.getParameter(F.UNPACK_SKIP_IMAGES);E.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),E.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),E.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),E.pixelStorei(F.UNPACK_SKIP_ROWS,je),E.pixelStorei(F.UNPACK_SKIP_IMAGES,qe);const ns=b.isDataArrayTexture||b.isData3DTexture,ft=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){const Nt=$.get(b),ji=$.get(D),mt=$.get(Nt.__renderTarget),Xi=$.get(ji.__renderTarget);E.bindFramebuffer(F.READ_FRAMEBUFFER,mt.__webglFramebuffer),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let is=0;is<Te;is++)ns&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(b).__webglTexture,X,qe+is),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(D).__webglTexture,xe,Lt+is)),F.blitFramebuffer(Ne,je,we,_e,Ae,ot,we,_e,F.DEPTH_BUFFER_BIT,F.NEAREST);E.bindFramebuffer(F.READ_FRAMEBUFFER,null),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||$.has(b)){const Nt=$.get(b),ji=$.get(D);E.bindFramebuffer(F.READ_FRAMEBUFFER,U),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let mt=0;mt<Te;mt++)ns?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,X,qe+mt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,X),ft?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ji.__webglTexture,xe,Lt+mt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ji.__webglTexture,xe),X!==0?F.blitFramebuffer(Ne,je,we,_e,Ae,ot,we,_e,F.COLOR_BUFFER_BIT,F.NEAREST):ft?F.copyTexSubImage3D(Me,xe,Ae,ot,Lt+mt,Ne,je,we,_e):F.copyTexSubImage2D(Me,xe,Ae,ot,Ne,je,we,_e);E.bindFramebuffer(F.READ_FRAMEBUFFER,null),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Me,xe,Ae,ot,Lt,we,_e,Te,ht,Kt,_t.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(Me,xe,Ae,ot,Lt,we,_e,Te,ht,_t.data):F.texSubImage3D(Me,xe,Ae,ot,Lt,we,_e,Te,ht,Kt,_t):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,Ae,ot,we,_e,ht,Kt,_t.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,Ae,ot,_t.width,_t.height,ht,_t.data):F.texSubImage2D(F.TEXTURE_2D,xe,Ae,ot,we,_e,ht,Kt,_t);E.pixelStorei(F.UNPACK_ROW_LENGTH,on),E.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt),E.pixelStorei(F.UNPACK_SKIP_PIXELS,In),E.pixelStorei(F.UNPACK_SKIP_ROWS,ri),E.pixelStorei(F.UNPACK_SKIP_IMAGES,Wi),xe===0&&D.generateMipmaps&&F.generateMipmap(Me),E.unbindTexture()},this.initRenderTarget=function(b){$.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),E.unbindTexture()},this.resetState=function(){Q=0,q=0,B=null,E.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}const O2=({selectedToLocation:t,onSelectBuilding:e})=>{const n=Ce.useRef(null);return Ce.useEffect(()=>{const i=n.current;if(!i)return;const r=i.clientWidth,s=i.clientHeight,a=new fb;a.background=new Ke(988970),a.fog=new Qh(988970,.0015);const o=new Fn(45,r/s,1,3e3);o.position.set(0,450,600),o.lookAt(0,0,0);const l=new U2({antialias:!0,alpha:!0});l.setSize(r,s),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.shadowMap.enabled=!0,i.appendChild(l.domElement);const c=new Ub(16777215,.7);a.add(c);const u=new Db(16777215,1.2);u.position.set(300,500,200),u.castShadow=!0,a.add(u);const h=new Pb(3718648,1976635,.4);a.add(h);const f=new zr(1200,700),p=new Xu({color:1980971,roughness:.8}),x=new An(f,p);x.rotation.x=-Math.PI/2,x.receiveShadow=!0,a.add(x);const M=new Xu({color:3359061,roughness:.5}),_=new zr(1100,30),d=new An(_,M);d.rotation.x=-Math.PI/2,d.position.set(0,1,-50),a.add(d);const g=new zr(900,24),S=new An(g,M);S.rotation.x=-Math.PI/2,S.position.set(0,1,70),a.add(S);const v=P=>{switch(P){case"Academic / Department":return 3718648;case"Administration":return 16096779;case"Hostel":return 15485081;case"Food / Canteen":return 16347926;case"Library":return 11032055;case"Research Centre":return 440020;case"Health":return 1096065;default:return 6583435}};cc.forEach(P=>{const G=P.x+P.width/2-512,Z=P.y+P.height/2-256,se=Math.max(20,P.width),ve=Math.max(20,P.height),He=P.category==="Academic / Department"?45:30,Oe=(t==null?void 0:t.id)===P.id,Ge=Oe?15680580:v(P.category),V=new ra(se,He,ve),ee=new Xu({color:Ge,roughness:.3,metalness:.2,emissive:Oe?15680580:0,emissiveIntensity:Oe?.4:0}),pe=new An(V,ee);pe.position.set(G,He/2,Z),pe.castShadow=!0,pe.receiveShadow=!0,pe.userData={location:P},a.add(pe)});let T=!1,A=0,C=0,y=0,w=Math.PI/4;const N=750,I=()=>{o.position.x=N*Math.sin(w)*Math.sin(y),o.position.y=N*Math.cos(w),o.position.z=N*Math.sin(w)*Math.cos(y),o.lookAt(0,20,0)};I();const k=P=>{T=!0,A=P.clientX,C=P.clientY},W=P=>{if(!T)return;const G=P.clientX-A,Z=P.clientY-C;A=P.clientX,C=P.clientY,y-=G*.006,w=Math.max(.15,Math.min(Math.PI/2.2,w-Z*.006)),I()},U=()=>{T=!1},H=l.domElement;H.addEventListener("mousedown",k),window.addEventListener("mousemove",W),window.addEventListener("mouseup",U);const Q=()=>{if(!i)return;const P=i.clientWidth,G=i.clientHeight;o.aspect=P/G,o.updateProjectionMatrix(),l.setSize(P,G)};window.addEventListener("resize",Q);let q;const B=()=>{q=requestAnimationFrame(B),l.render(a,o)};return B(),()=>{cancelAnimationFrame(q),window.removeEventListener("resize",Q),H.removeEventListener("mousedown",k),window.removeEventListener("mousemove",W),window.removeEventListener("mouseup",U),i.contains(H)&&i.removeChild(H),l.dispose()}},[t]),m.jsxs("div",{className:"campus-3d-wrapper",children:[m.jsxs("div",{className:"campus-3d-hint",children:[m.jsx("span",{children:"🎮 3D Conceptual Campus View"}),m.jsx("small",{children:"Click and drag to rotate the 3D campus block perspective."})]}),m.jsx("div",{className:"campus-3d-canvas-container",ref:n})]})},qg=.85,F2=75;function wv(t,e){const n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)}let Ss=null;function k2(){if(!Ss){Ss={};for(const t of Object.keys(di))Ss[t]=[];for(const t of Gh){if(!zx(t))continue;const e=di[t.from],n=di[t.to];if(!e||!n)continue;const i=wv(e,n);Ss[t.from].push({nodeId:t.to,weight:i,edgeId:t.id}),Ss[t.to].push({nodeId:t.from,weight:i,edgeId:t.id})}}}function B2(t){if(!t||!t.nodes||t.nodes.length<2)return!1;for(let e=0;e<t.nodes.length-1;e++){const n=t.nodes[e].id,i=t.nodes[e+1].id,r=Gh.find(s=>s.from===n&&s.to===i||s.from===i&&s.to===n);if(!r)return console.error(`[Route Validation Failed] No explicit road edge between ${n} and ${i}`),!1;if(!zx(r))return console.error(`[Route Validation Failed] Edge ${r.id} (${r.name}) is restricted or non-walkable`),!1;if(Hh(r.id))return console.error(`[Route Validation Failed] Edge ${r.id} belongs to RESTRICTED_ROAD_EDGE_IDS`),!1}return!0}function z2(t,e){k2();let n=t;(n==="node-back-gate-road"||n==="backGateAccessNode")&&(n="node-back-gate-access");let i=e;if((i==="hostelFourWayJunction"||i==="eastCampusFourWayJunction")&&(i="hostelFourWayJunction"),!di[n]||!di[i])return console.warn(`[findWalkingRoute] Invalid node: start=${n}, dest=${i}`),null;const r={},s={},a=new Set;for(const _ of Object.keys(di))r[_]=1/0,s[_]=null,a.add(_);for(r[n]=0;a.size>0;){let _=null,d=1/0;for(const S of a)r[S]<d&&(d=r[S],_=S);if(!_||d===1/0||_===i)break;a.delete(_);const g=Ss[_]||[];for(const S of g){if(!a.has(S.nodeId))continue;const v=r[_]+S.weight;v<r[S.nodeId]&&(r[S.nodeId]=v,s[S.nodeId]=_)}}const o=[];let l=i;for(;l!==null;)o.unshift(l),l=s[l];if(o.length===0||o[0]!==n)return null;const c=o.map(_=>di[_]);let u=0;const h=[];for(let _=0;_<c.length-1;_++){const d=c[_],g=c[_+1],S=wv(d,g);u+=S;const v=Math.max(10,Math.round(S*qg));let T=`Proceed from ${d.name} to ${g.name}.`;d.id==="node-back-gate-straight"&&(g.id==="hostelFourWayJunction"||g.id==="node-east-campus-four-way-junction")?T="Continue straight along the accessible campus road to the East Campus Four-Way Junction.":(d.id==="hostelFourWayJunction"||d.id==="node-east-campus-four-way-junction")&&g.id==="node-mit-11"?T="At the Four-Way Junction, turn left onto MIT Road toward the campus center.":g.id==="node-r-04"?T="Turn north onto the Administrative Block access driveway to arrive at the entrance porch.":_===0?T=`Start at ${d.name} and follow public roadway toward ${g.name}.`:_===c.length-2?T=`Arrive at destination entrance: ${g.name}.`:T=`Follow public road past ${d.name} towards ${g.name}.`,h.push({stepNumber:_+1,instruction:T,distanceMeters:v,fromNode:d,toNode:g})}const f=Math.max(30,Math.round(u*qg)),p=Math.max(1,Math.ceil(f/F2)),x=c.reduce((_,d,g)=>`${_} ${g===0?"M":"L"} ${d.x} ${d.y}`,""),M={nodeIds:o,nodes:c,totalDistanceMeters:f,estimatedTimeMinutes:p,steps:h,pathD:x};return B2(M)?M:(console.error("[findWalkingRoute] Generated candidate route failed validation and was rejected."),null)}const H2=({onNavigateHome:t})=>{const[e,n]=Ce.useState("2d"),[i,r]=Ce.useState(1),[s,a]=Ce.useState(!1),[o,l]=Ce.useState(!1),[c,u]=Ce.useState(!1),[h,f]=Ce.useState(Nr[0]),[p,x]=Ce.useState(null),[M,_]=Ce.useState(null),[d,g]=Ce.useState(null),[S,v]=Ce.useState(!1),[T,A]=Ce.useState(0),C=Ce.useRef(null),y=Ce.useMemo(()=>{if(!M)return null;let P=h.accessNode||h.nodeId;h.id==="live-location"&&(P="node-front-gate-road");const G=M.entranceNode||M.accessNode||M.gateNodeId;return z2(P,G)},[h,M,p]),w=()=>{r(P=>Math.min(3,Math.round((P+.25)*100)/100))},N=()=>{r(P=>Math.max(1,Math.round((P-.25)*100)/100))},I=()=>{r(1)},k=()=>{var P;document.fullscreenElement?document.exitFullscreen&&(document.exitFullscreen(),a(!1)):(P=C.current)!=null&&P.requestFullscreen&&(C.current.requestFullscreen(),a(!0))};Ce.useEffect(()=>{const P=()=>{a(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",P),()=>document.removeEventListener("fullscreenchange",P)},[]);const W=P=>{g(P),l(!1)},U=P=>{_(P),v(!1),A(0)},H=P=>{_(P),g(P),v(!1),A(0)},Q=()=>{y&&y.steps.length>0&&(v(!0),A(0))},q=()=>{_(null),g(null),v(!1),A(0)},B=()=>{t?t():window.location.href="/"};return m.jsxs("div",{className:"campus-map-page",children:[m.jsxs("header",{className:"map-page-header",children:[m.jsxs("div",{className:"header-left",children:[m.jsxs("button",{type:"button",className:"back-home-btn",onClick:B,title:"Return to MIT Campus Chatbot Homepage",children:[m.jsx("span",{children:"←"}),m.jsx("span",{children:"MIT Campus Home"})]}),m.jsxs("div",{className:"brand-header-box",children:[m.jsx("span",{className:"brand-crest-icon","aria-hidden":"true",children:"🎓"}),m.jsxs("div",{className:"header-title-block",children:[m.jsx("span",{className:"header-main-title",children:"Madras Institute of Technology"}),m.jsx("span",{className:"header-sub-title",children:"Official Campus Map & Road Navigation"})]})]})]}),m.jsxs("div",{className:"header-right",children:[m.jsxs("button",{type:"button",className:`debug-header-btn ${c?"active":""}`,onClick:()=>u(!c),title:c?"Disable Developer Road Debug Overlay":"Enable Developer Road Debug Overlay",children:[m.jsx("span",{className:"debug-btn-icon",children:"🛠️"}),m.jsx("span",{className:"debug-btn-text",children:c?"DEBUG: ON":"DEBUG ROADS"})]}),m.jsxs("div",{className:"view-mode-toggle",role:"group","aria-label":"Map Display Modes",children:[m.jsx("button",{type:"button",className:`mode-toggle-btn ${e==="2d"?"active":""}`,onClick:()=>n("2d"),title:"Official 2D Static Campus Map",children:"🗺 2D MAP"}),m.jsx("button",{type:"button",className:`mode-toggle-btn ${e==="3d"?"active":""}`,onClick:()=>n("3d"),title:"Interactive 3D Conceptual Campus View",children:"🏙 3D VIEW"})]})]})]}),m.jsx("main",{className:"map-stage-wrapper",ref:C,children:e==="2d"?m.jsxs("div",{className:"map-layout-container",children:[m.jsxs("aside",{className:`map-sidebar-panel ${o?"collapsed":""}`,"aria-label":"Navigation Controls",children:[m.jsx("button",{type:"button",className:"sidebar-collapse-tab",onClick:()=>l(!o),title:o?"Expand Navigation Sidebar":"Collapse Sidebar for Full Map","aria-label":"Toggle Navigation Sidebar",children:o?"⮞":"⮜"}),!o&&m.jsxs("div",{className:"sidebar-inner-content",children:[m.jsxs("div",{className:"search-directions-card",children:[m.jsx(o1,{selectedFromId:h.id,onSelectFrom:(P,G)=>{f(P),G&&x(G)}}),m.jsx(c1,{selectedToLocation:M,onSelectTo:H})]}),m.jsx(u1,{route:y,fromLocation:h,toLocation:M,onStartNavigation:Q,onClearRoute:q,isNavigating:S}),S&&y&&M&&m.jsx(d1,{route:y,toLocation:M,currentStepIndex:T,onStepChange:P=>A(P),onExitNavigation:()=>v(!1)}),d&&!S&&m.jsx(f1,{location:d,onClose:()=>g(null),onSetAsDestination:U,isDestination:(M==null?void 0:M.id)===d.id})]})]}),m.jsxs("div",{className:"map-viewport-wrapper",children:[m.jsx(s1,{zoomLevel:i,fromLocation:h,liveCoords:p,toLocation:M,selectedBuilding:d,onBuildingClick:W,route:y,isNavigating:S,currentStepIndex:T,isDebugMode:c}),m.jsx(h1,{zoomLevel:i,onZoomIn:w,onZoomOut:N,onReset:I,isFullscreen:s,onToggleFullscreen:k,isDebugMode:c,onToggleDebug:()=>u(!c)}),m.jsxs("div",{className:"map-ui-legend","aria-hidden":"true",children:[m.jsx("div",{className:"legend-title",children:"Campus Legend"}),m.jsxs("div",{className:"legend-row",children:[m.jsx("span",{className:"legend-symbol",children:"🟢"}),m.jsx("span",{children:"Starting Point"})]}),m.jsxs("div",{className:"legend-row",children:[m.jsx("span",{className:"legend-symbol",children:"🔴"}),m.jsx("span",{children:"Destination (Road Entrance)"})]}),m.jsxs("div",{className:"legend-row",children:[m.jsx("span",{className:"legend-symbol",children:"🔵"}),m.jsx("span",{children:"Live Location"})]}),m.jsxs("div",{className:"legend-row",children:[m.jsx("span",{className:"legend-route-line"}),m.jsx("span",{children:"Walking Route (Roads Only)"})]}),c&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"legend-divider"}),m.jsx("div",{className:"legend-title debug-legend-title",children:"🛠️ Debug Road Graph"}),m.jsxs("div",{className:"legend-row",children:[m.jsx("span",{className:"legend-symbol",children:"🟢"}),m.jsx("span",{children:"Public road node"})]}),m.jsxs("div",{className:"legend-row",children:[m.jsx("span",{className:"legend-symbol",children:"🟡"}),m.jsx("span",{children:"Junction"})]}),m.jsxs("div",{className:"legend-row",children:[m.jsx("span",{className:"legend-symbol",children:"🔵"}),m.jsx("span",{children:"Building entrance"})]}),m.jsxs("div",{className:"legend-row",children:[m.jsx("span",{className:"legend-symbol",children:"🔴"}),m.jsx("span",{children:"Destination"})]}),m.jsxs("div",{className:"legend-row",children:[m.jsx("span",{className:"legend-symbol",children:"⚫"}),m.jsx("span",{children:"Restricted road"})]})]})]})]})]}):m.jsx(O2,{selectedToLocation:M,onSelectBuilding:P=>{_(P),g(P)}})})]})};function G2(){const t=()=>{const r=window.location.pathname.toLowerCase(),s=window.location.hash.toLowerCase();return r.startsWith("/admin")||s.startsWith("#admin")?"admin":r.startsWith("/map")||s.startsWith("#map")?"map":"home"},[e,n]=Ce.useState(t);Ce.useEffect(()=>{const r=()=>{n(t())},s=a=>{var o;(o=a.detail)!=null&&o.route&&i(a.detail.route)};return window.addEventListener("popstate",r),window.addEventListener("hashchange",r),window.addEventListener("mit-navigate",s),()=>{window.removeEventListener("popstate",r),window.removeEventListener("hashchange",r),window.removeEventListener("mit-navigate",s)}},[]);const i=r=>{n(r),r==="map"?window.history.pushState(null,"","/map"):r==="admin"?window.history.pushState(null,"","/admin"):window.history.pushState(null,"","/")};return e==="admin"?m.jsx(n1,{}):e==="map"?m.jsx(H2,{onNavigateHome:()=>i("home")}):m.jsx(Kw,{onNavigateToMap:()=>i("map")})}ed.createRoot(document.getElementById("root")).render(m.jsx(wa.StrictMode,{children:m.jsx(G2,{})}));
