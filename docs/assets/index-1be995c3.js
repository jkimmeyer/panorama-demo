(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const bt="/panorama-demo/assets/logo-a-75185753.png",ut="/panorama-demo/assets/teaser-image-a-4e1722dc.png",ft="/panorama-demo/assets/logo-b-a9bffacb.png",yt="/panorama-demo/assets/teaser-image-b-ad67f50c.png",vt="/panorama-demo/assets/hsd-logo-7f39b0a2.png",mt="/panorama-demo/assets/teaser-image-300bf37b.png",gt="/panorama-demo/assets/zweitag-1f8ebf6b.svg",xt="/panorama-demo/assets/teaser-image-b45e7a4f.webp",$t="/panorama-demo/assets/Ikea_logo-5a2afaf2.png",kt="/panorama-demo/assets/teaser-image-82c142bc.png";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=globalThis,Ne=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ue=Symbol(),He=new WeakMap;let Qe=class{constructor(e,o,r){if(this._$cssResult$=!0,r!==Ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(Ne&&e===void 0){const r=o!==void 0&&o.length===1;r&&(e=He.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&He.set(o,e))}return e}toString(){return this.cssText}};const wt=i=>new Qe(typeof i=="string"?i:i+"",void 0,Ue),p=(i,...e)=>{const o=i.length===1?i[0]:e.reduce((r,t,a)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+i[a+1],i[0]);return new Qe(o,i,Ue)},zt=(i,e)=>{if(Ne)i.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const r=document.createElement("style"),t=we.litNonce;t!==void 0&&r.setAttribute("nonce",t),r.textContent=o.cssText,i.appendChild(r)}},Me=Ne?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let o="";for(const r of e.cssRules)o+=r.cssText;return wt(o)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:St,getOwnPropertyDescriptor:At,getOwnPropertyNames:Ot,getOwnPropertySymbols:Pt,getPrototypeOf:Bt}=Object,ie=globalThis,qe=ie.trustedTypes,Et=qe?qe.emptyScript:"",Le=ie.reactiveElementPolyfillSupport,ye=(i,e)=>i,ze={toAttribute(i,e){switch(e){case Boolean:i=i?Et:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let o=i;switch(e){case Boolean:o=i!==null;break;case Number:o=i===null?null:Number(i);break;case Object:case Array:try{o=JSON.parse(i)}catch{o=null}}return o}},Ie=(i,e)=>!_t(i,e),Re={attribute:!0,type:String,converter:ze,reflect:!1,hasChanged:Ie};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ie.litPropertyMetadata??(ie.litPropertyMetadata=new WeakMap);class be extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=Re){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(e,o),!o.noAccessor){const r=Symbol(),t=this.getPropertyDescriptor(e,r,o);t!==void 0&&St(this.prototype,e,t)}}static getPropertyDescriptor(e,o,r){const{get:t,set:a}=At(this.prototype,e)??{get(){return this[o]},set(n){this[o]=n}};return{get(){return t==null?void 0:t.call(this)},set(n){const s=t==null?void 0:t.call(this);a.call(this,n),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Re}static _$Ei(){if(this.hasOwnProperty(ye("elementProperties")))return;const e=Bt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ye("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ye("properties"))){const o=this.properties,r=[...Ot(o),...Pt(o)];for(const t of r)this.createProperty(t,o[t])}const e=this[Symbol.metadata];if(e!==null){const o=litPropertyMetadata.get(e);if(o!==void 0)for(const[r,t]of o)this.elementProperties.set(r,t)}this._$Eh=new Map;for(const[o,r]of this.elementProperties){const t=this._$Eu(o,r);t!==void 0&&this._$Eh.set(t,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const t of r)o.unshift(Me(t))}else e!==void 0&&o.push(Me(e));return o}static _$Eu(e,o){const r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(o=>o(this))}addController(e){var o;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var o;(o=this._$E_)==null||o.delete(e)}_$ES(){const e=new Map,o=this.constructor.elementProperties;for(const r of o.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(o=>{var r;return(r=o.hostConnected)==null?void 0:r.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(o=>{var r;return(r=o.hostDisconnected)==null?void 0:r.call(o)})}attributeChangedCallback(e,o,r){this._$AK(e,r)}_$EO(e,o){var a;const r=this.constructor.elementProperties.get(e),t=this.constructor._$Eu(e,r);if(t!==void 0&&r.reflect===!0){const n=(((a=r.converter)==null?void 0:a.toAttribute)!==void 0?r.converter:ze).toAttribute(o,r.type);this._$Em=e,n==null?this.removeAttribute(t):this.setAttribute(t,n),this._$Em=null}}_$AK(e,o){var a;const r=this.constructor,t=r._$Eh.get(e);if(t!==void 0&&this._$Em!==t){const n=r.getPropertyOptions(t),s=typeof n.converter=="function"?{fromAttribute:n.converter}:((a=n.converter)==null?void 0:a.fromAttribute)!==void 0?n.converter:ze;this._$Em=t,this[t]=s.fromAttribute(o,n.type),this._$Em=null}}requestUpdate(e,o,r,t=!1,a){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Ie)(t?a:this[e],o))return;this.C(e,o,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,o,r){this._$AL.has(e)||this._$AL.set(e,o),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[a,n]of t)n.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.C(a,this[a],n)}let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(r=this._$E_)==null||r.forEach(t=>{var a;return(a=t.hostUpdate)==null?void 0:a.call(t)}),this.update(o)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(o)}willUpdate(e){}_$AE(e){var o;(o=this._$E_)==null||o.forEach(r=>{var t;return(t=r.hostUpdated)==null?void 0:t.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EO(o,this[o]))),this._$ET()}updated(e){}firstUpdated(e){}}be.elementStyles=[],be.shadowRootOptions={mode:"open"},be[ye("elementProperties")]=new Map,be[ye("finalized")]=new Map,Le==null||Le({ReactiveElement:be}),(ie.reactiveElementVersions??(ie.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=globalThis,_e=ve.trustedTypes,We=_e?_e.createPolicy("lit-html",{createHTML:i=>i}):void 0,Xe="$lit$",re=`lit$${(Math.random()+"").slice(9)}$`,et="?"+re,Lt=`<${et}>`,le=document,me=()=>le.createComment(""),ge=i=>i===null||typeof i!="object"&&typeof i!="function",tt=Array.isArray,Tt=i=>tt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Te=`[ 	
\f\r]`,fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ve=/-->/g,Ge=/>/g,ae=RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ye=/'/g,Ze=/"/g,ot=/^(?:script|style|textarea|title)$/i,Ct=i=>(e,...o)=>({_$litType$:i,strings:e,values:o}),d=Ct(1),ce=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Fe=new WeakMap,ne=le.createTreeWalker(le,129);function rt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return We!==void 0?We.createHTML(e):e}const jt=(i,e)=>{const o=i.length-1,r=[];let t,a=e===2?"<svg>":"",n=fe;for(let s=0;s<o;s++){const c=i[s];let b,h,u=-1,v=0;for(;v<c.length&&(n.lastIndex=v,h=n.exec(c),h!==null);)v=n.lastIndex,n===fe?h[1]==="!--"?n=Ve:h[1]!==void 0?n=Ge:h[2]!==void 0?(ot.test(h[2])&&(t=RegExp("</"+h[2],"g")),n=ae):h[3]!==void 0&&(n=ae):n===ae?h[0]===">"?(n=t??fe,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,b=h[1],n=h[3]===void 0?ae:h[3]==='"'?Ze:Ye):n===Ze||n===Ye?n=ae:n===Ve||n===Ge?n=fe:(n=ae,t=void 0);const oe=n===ae&&i[s+1].startsWith("/>")?" ":"";a+=n===fe?c+Lt:u>=0?(r.push(b),c.slice(0,u)+Xe+c.slice(u)+re+oe):c+re+(u===-2?s:oe)}return[rt(i,a+(i[o]||"<?>")+(e===2?"</svg>":"")),r]};class xe{constructor({strings:e,_$litType$:o},r){let t;this.parts=[];let a=0,n=0;const s=e.length-1,c=this.parts,[b,h]=jt(e,o);if(this.el=xe.createElement(b,r),ne.currentNode=this.el.content,o===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(t=ne.nextNode())!==null&&c.length<s;){if(t.nodeType===1){if(t.hasAttributes())for(const u of t.getAttributeNames())if(u.endsWith(Xe)){const v=h[n++],oe=t.getAttribute(u).split(re),ke=/([.?@])?(.*)/.exec(v);c.push({type:1,index:a,name:ke[2],strings:oe,ctor:ke[1]==="."?Ut:ke[1]==="?"?It:ke[1]==="@"?Dt:Ee}),t.removeAttribute(u)}else u.startsWith(re)&&(c.push({type:6,index:a}),t.removeAttribute(u));if(ot.test(t.tagName)){const u=t.textContent.split(re),v=u.length-1;if(v>0){t.textContent=_e?_e.emptyScript:"";for(let oe=0;oe<v;oe++)t.append(u[oe],me()),ne.nextNode(),c.push({type:2,index:++a});t.append(u[v],me())}}}else if(t.nodeType===8)if(t.data===et)c.push({type:2,index:a});else{let u=-1;for(;(u=t.data.indexOf(re,u+1))!==-1;)c.push({type:7,index:a}),u+=re.length-1}a++}}static createElement(e,o){const r=le.createElement("template");return r.innerHTML=e,r}}function ue(i,e,o=i,r){var n,s;if(e===ce)return e;let t=r!==void 0?(n=o._$Co)==null?void 0:n[r]:o._$Cl;const a=ge(e)?void 0:e._$litDirective$;return(t==null?void 0:t.constructor)!==a&&((s=t==null?void 0:t._$AO)==null||s.call(t,!1),a===void 0?t=void 0:(t=new a(i),t._$AT(i,o,r)),r!==void 0?(o._$Co??(o._$Co=[]))[r]=t:o._$Cl=t),t!==void 0&&(e=ue(i,t._$AS(i,e.values),t,r)),e}let Nt=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:o},parts:r}=this._$AD,t=((e==null?void 0:e.creationScope)??le).importNode(o,!0);ne.currentNode=t;let a=ne.nextNode(),n=0,s=0,c=r[0];for(;c!==void 0;){if(n===c.index){let b;c.type===2?b=new De(a,a.nextSibling,this,e):c.type===1?b=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(b=new Ht(a,this,e)),this._$AV.push(b),c=r[++s]}n!==(c==null?void 0:c.index)&&(a=ne.nextNode(),n++)}return ne.currentNode=le,t}p(e){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,o),o+=r.strings.length-2):r._$AI(e[o])),o++}},De=class it{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,o,r,t){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=r,this.options=t,this._$Cv=(t==null?void 0:t.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=ue(this,e,o),ge(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==ce&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Tt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&ge(this._$AH)?this._$AA.nextSibling.data=e:this.$(le.createTextNode(e)),this._$AH=e}g(e){var a;const{values:o,_$litType$:r}=e,t=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=xe.createElement(rt(r.h,r.h[0]),this.options)),r);if(((a=this._$AH)==null?void 0:a._$AD)===t)this._$AH.p(o);else{const n=new Nt(t,this),s=n.u(this.options);n.p(o),this.$(s),this._$AH=n}}_$AC(e){let o=Fe.get(e.strings);return o===void 0&&Fe.set(e.strings,o=new xe(e)),o}T(e){tt(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,t=0;for(const a of e)t===o.length?o.push(r=new it(this.k(me()),this.k(me()),this,this.options)):r=o[t],r._$AI(a),t++;t<o.length&&(this._$AR(r&&r._$AB.nextSibling,t),o.length=t)}_$AR(e=this._$AA.nextSibling,o){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,o);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var o;this._$AM===void 0&&(this._$Cv=e,(o=this._$AP)==null||o.call(this,e))}};class Ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,r,t,a){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=o,this._$AM=t,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(e,o=this,r,t){const a=this.strings;let n=!1;if(a===void 0)e=ue(this,e,o,0),n=!ge(e)||e!==this._$AH&&e!==ce,n&&(this._$AH=e);else{const s=e;let c,b;for(e=a[0],c=0;c<a.length-1;c++)b=ue(this,s[r+c],o,c),b===ce&&(b=this._$AH[c]),n||(n=!ge(b)||b!==this._$AH[c]),b===m?e=m:e!==m&&(e+=(b??"")+a[c+1]),this._$AH[c]=b}n&&!t&&this.O(e)}O(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ut extends Ee{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===m?void 0:e}}let It=class extends Ee{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},Dt=class extends Ee{constructor(e,o,r,t,a){super(e,o,r,t,a),this.type=5}_$AI(e,o=this){if((e=ue(this,e,o,0)??m)===ce)return;const r=this._$AH,t=e===m&&r!==m||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==m&&(r===m||t);t&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,e):this._$AH.handleEvent(e)}},Ht=class{constructor(e,o,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ue(this,e)}};const Ce=ve.litHtmlPolyfillSupport;Ce==null||Ce(xe,De),(ve.litHtmlVersions??(ve.litHtmlVersions=[])).push("3.1.0");const Mt=(i,e,o)=>{const r=(o==null?void 0:o.renderBefore)??e;let t=r._$litPart$;if(t===void 0){const a=(o==null?void 0:o.renderBefore)??null;r._$litPart$=t=new De(e.insertBefore(me(),a),a,void 0,o??{})}return t._$AI(i),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Mt(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ce}}var Ke;f._$litElement$=!0,f.finalized=!0,(Ke=globalThis.litElementHydrateSupport)==null||Ke.call(globalThis,{LitElement:f});const je=globalThis.litElementPolyfillSupport;je==null||je({LitElement:f});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rt=i=>(...e)=>({_$litDirective$:i,values:e});class Wt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,r){this._$Ct=e,this._$AM=o,this._$Ci=r}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=Rt(class extends Wt{constructor(i){var e;if(super(i),i.type!==qt.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var r,t;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!((r=this.st)!=null&&r.has(a))&&this.it.add(a);return this.render(e)}const o=i.element.classList;for(const a of this.it)a in e||(o.remove(a),this.it.delete(a));for(const a in e){const n=!!e[a];n===this.it.has(a)||(t=this.st)!=null&&t.has(a)||(n?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return ce}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=i=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt={attribute:!0,type:String,converter:ze,reflect:!1,hasChanged:Ie},Gt=(i=Vt,e,o)=>{const{kind:r,metadata:t}=o;let a=globalThis.litPropertyMetadata.get(t);if(a===void 0&&globalThis.litPropertyMetadata.set(t,a=new Map),a.set(o.name,i),r==="accessor"){const{name:n}=o;return{set(s){const c=e.get.call(this);e.set.call(this,s),this.requestUpdate(n,c,i)},init(s){return s!==void 0&&this.C(n,void 0,i),s}}}if(r==="setter"){const{name:n}=o;return function(s){const c=this[n];e.call(this,s),this.requestUpdate(n,c,i)}}throw Error("Unsupported decorator location: "+r)};function l(i){return(e,o)=>typeof o=="object"?Gt(i,e,o):((r,t,a)=>{const n=t.hasOwnProperty(a);return t.constructor.createProperty(a,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(t,a):void 0})(i,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=(i,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(i,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(i,e){return(o,r,t)=>{const a=n=>{var s;return((s=n.renderRoot)==null?void 0:s.querySelector(i))??null};if(e){const{get:n,set:s}=typeof r=="object"?o:t??(()=>{const c=Symbol();return{get(){return this[c]},set(b){this[c]=b}}})();return Je(o,r,{get(){let c=n.call(this);return c===void 0&&(c=a(this),(c!==null||this.hasUpdated)&&s.call(this,c)),c}})}return Je(o,r,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=i=>i??m;p``;p``;p``;p``;p``;var Yt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,at=(i,e,o,r)=>{for(var t=r>1?void 0:r?Zt(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&Yt(e,o,t),t};let Se=class extends f{render(){const{iconName:i}=this;return d`<span class="material-symbols-outlined">${i}</span>`}};Se.styles=p`
    :host {
      display: inline-flex;
      vertical-align: 0;
    }

    .material-symbols-outlined {
      display: inline-block;
      font-family: "Material Symbols Outlined", sans-serif;
      font-size: inherit; /* Preferred icon size */
      font-style: normal;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 1;
      text-transform: none;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
    }
  `;at([l({type:String,reflect:!0,attribute:"icon-name"})],Se.prototype,"iconName",2);Se=at([y("pano-a-icon")],Se);const Ft=p`
  .button {
    --button-height: 48px;
    --button-border: 1px solid;
    --button-border-radius: calc(var(--ds-border-radius));
    --button-inline-padding: var(--space-8);

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-8);
    min-height: var(--button-height);
    border: var(--button-border) var(--button-border-color);
    border-radius: var(--button-border-radius);
    padding-inline: var(--button-inline-padding);
    font-family: var(--ds-default-font);
    font-size: var(--ds-default-font-size);
    line-height: var(--ds-default-line-height);
    text-decoration: none;
    color: var(--button-color);
    background-color: var(--button-background-color);
    cursor: pointer;

    &[data-full-width] {
      width: 100%;
      display: flex;
    }
  }

  /* Link Styles */
  .button:hover,
  .button:visited,
  .button:active {
    text-decoration: none;
  }

  .button:disabled {
    --button-main-color: var(--color-disabled);
    --button-on-main-color: var(--color-on-disabled);

    cursor: default;
    pointer-events: none;
  }

  .button:not(:disabled):where(:focus),
  .button:not(:disabled):where(:hover),
  .button:not(:disabled):where(:active) {
    color: var(--button-on-interaction-color);
    background-color: var(--button-interaction-color);
  }

  .button[data-icon-only] {
    aspect-ratio: 1;
  }

  .button:where([data-theme="primary"]) {
    --button-main-color: var(--color-primary);
    --button-on-main-color: var(--color-on-primary);
    --button-interaction-color: var(--color-primary-container);
    --button-on-interaction-color: var(--color-primary-on-container);
  }

  .button:where([data-theme="secondary"]) {
    --button-main-color: var(--color-secondary);
    --button-on-main-color: var(--color-on-secondary);
    --button-interaction-color: var(--color-secondary-container);
    --button-on-interaction-color: var(--color-secondary-on-container);
  }

  .button:where([data-appearance="filled"]) {
    --button-color: var(--button-on-main-color);
    --button-border-color: transparent;
    --button-background-color: var(--button-main-color);
  }

  .button:where([data-size="medium"]) {
    --button-height: calc(var(--size-factor-medium) * var(--space-12));
  }
`;var Jt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,I=(i,e,o,r)=>{for(var t=r>1?void 0:r?Kt(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&Jt(e,o,t),t};let S=class extends f{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.fullWidth=!1,this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:i,iconBefore:e,iconAfter:o,label:r,href:t,fullWidth:a,disabled:n}=this,s=g({"button--text":!0,"sr-only":i}),c=d`
      <pano-a-icon icon-name="${e}"></pano-a-icon>
      <span class="${s}"> ${r} </span>
      ${i?null:d`<pano-a-icon icon-name="${o}"></pano-a-icon>`}
    `;return t?d`
        <a
          class="button"
          href="${t}"
          ?data-icon-only="${i}"
          ?data-full-width="${a}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </a>
      `:d`
        <button
          class="button"
          ?disabled="${n}"
          ?data-icon-only="${i}"
          ?data-full-width="${a}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </button>
      `}};S.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      a,
      button {
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,Ft];I([l({type:String,reflect:!0})],S.prototype,"appearance",2);I([l({type:String,reflect:!0})],S.prototype,"size",2);I([l({type:String,reflect:!0})],S.prototype,"theme",2);I([l({type:String,reflect:!0})],S.prototype,"label",2);I([l({type:String,reflect:!0})],S.prototype,"buttonType",2);I([l({type:Boolean,reflect:!0,attribute:"icon-only"})],S.prototype,"iconOnly",2);I([l({type:String,reflect:!0,attribute:"icon-before"})],S.prototype,"iconBefore",2);I([l({type:Boolean,reflect:!0,attribute:"full-width"})],S.prototype,"fullWidth",2);I([l({type:String,reflect:!0,attribute:"icon-after"})],S.prototype,"iconAfter",2);I([l({type:String,reflect:!0})],S.prototype,"href",2);I([l({type:Boolean,reflect:!0})],S.prototype,"disabled",2);S=I([y("pano-a-button")],S);const Qt=p`
  :host {
    --checkbox-size: var(--space-10);

    display: inline-flex;
    position: relative;
  }

  .checkbox {
    --_checkbox-size: var(--checkbox-size);

    outline-offset: 2px;

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .checkbox--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding-inline-start: calc(var(--_checkbox-size) * 1.5);
    font-family: var(--ds-default-font);
    font-size: var(--radio-label-font, var(--radio-button-size));
    color: var(--color-black);
    cursor: pointer;
  }

  .checkbox--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: var(--_checkbox-size);
    color: var(--color-primary);
  }

  .checkbox--label::before {
    inset-inline-start: 0;
    inline-size: var(--_checkbox-size);
    block-size: var(--_checkbox-size);
    border: 2px solid var(--color-primary);
    border-radius: calc(var(--_checkbox-size) * 0.3);
    background-color: var(--color-white);
  }

  .checkbox--label::before {
    content: "";
    position: absolute;
  }

  .checkbox--input:checked + .checkbox--label::before {
    border-color: var(--color-primary);
  }

  .checkbox--input:disabled {
    cursor: default;

    & + .checkbox--label {
      cursor: default;
      color: var(--color-disabled);
    }

    & + .checkbox--label::before {
      color: var(--color-disabled);
      border-color: var(--color-disabled);
    }
  }

  .checkbox--input:not(:disabled):hover + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .checkbox--input:not(:disabled):active + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  /* stylelint-disable-next-line selector-max-combinators */
  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input[aria-checked="mixed"] + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input:checked:hover + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }

  .checkbox--input:checked:active + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }
`;var Xt=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,Q=(i,e,o,r)=>{for(var t=r>1?void 0:r?eo(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&Xt(e,o,t),t};let R=class extends f{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:i,indeterminate:e}=this._checkboxNode;this.checked=i,this.indeterminate=e}render(){const{checked:i,disabled:e,hiddenLabel:o,indeterminate:r,label:t,name:a,value:n,_handleChange:s}=this,c=g({"checkbox--label":!0,"sr-only":o});return d`
      <div class="checkbox">
        <input
          id="checkbox"
          class="checkbox--input | sr-only"
          .disabled="${e}"
          .checked="${i}"
          aria-checked="${r?"mixed":i}"
          name="${a}"
          value="${n}"
          type="checkbox"
          @change="${s}"
        />
        <label class="${c}" for="checkbox">
          <pano-a-icon
            class="checkbox--icon"
            icon-name="${r?"remove":"check"}"
          ></pano-a-icon>
          <div>${t}</div>
        </label>
      </div>
    `}};R.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,Qt];Q([E("input")],R.prototype,"_checkboxNode",2);Q([l({type:Boolean,reflect:!0})],R.prototype,"checked",2);Q([l({type:Boolean,reflect:!0})],R.prototype,"disabled",2);Q([l({type:Boolean,reflect:!0,attribute:"hidden-label"})],R.prototype,"hiddenLabel",2);Q([l({type:Boolean,reflect:!0})],R.prototype,"indeterminate",2);Q([l({type:String,reflect:!0})],R.prototype,"label",2);Q([l({type:String,reflect:!0})],R.prototype,"name",2);Q([l({type:String,reflect:!0})],R.prototype,"value",2);R=Q([y("pano-a-checkbox")],R);const to=p`
  :host {
    --icon-padding: calc(var(--space-8) * 2);
    --input-padding-block: calc(var(--space-8) * 0.5);

    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    font: normal 400 16px/1.5 var(--ds-default-font);
  }

  .input--field {
    width: 100%;
    border: 1px solid var(--color-black);
    border-radius: var(--space-4);
    padding-block: var(--input-padding-block);
    padding-inline: calc(var(--space-8) * 0.5);
    font: normal 400 16px/1.5 var(--ds-default-font);

    .input[data-icon-before] & {
      padding-left: var(--icon-padding);
    }

    .input[data-icon-after] & {
      padding-right: var(--icon-padding);
    }

    &:enabled:not(:read-only):where(:focus, :hover, :active) {
      outline: none;
      border-color: var(--color-primary);
    }

    &:read-only {
      cursor: default;
      color: var(--color-on-read-only-container);
      border-color: var(--color-read-only);
    }

    &:disabled {
      cursor: default;
      color: var(--color-on-disabled-container);
      border-color: var(--color-disabled);
    }
  }

  .input--field:where([data-size="small"]) {
    --input-padding-block: calc(var(--size-factor-small) * var(--space-4));
  }

  .input--field:where([data-size="medium"]) {
    --input-padding-block: calc(var(--size-factor-medium) * var(--space-4));
  }

  .input {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input--icon {
    position: absolute;

    &[data-icon-before] {
      left: var(--space-4);
    }

    &[data-icon-after] {
      right: var(--space-4);
    }
  }
`;var oo=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,L=(i,e,o,r)=>{for(var t=r>1?void 0:r?ro(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&oo(e,o,t),t};let x=class extends f{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:i}){this.value=i.value}render(){const{disabled:i,hiddenLabel:e,inputType:o,label:r,readOnly:t,value:a,iconBefore:n,iconAfter:s,pattern:c,placeholder:b,required:h,_handleInput:u}=this,v=g({"input--label":!0,required:h,"sr-only":e});return d`
      <label class="${v}" for="input">${r}</label>
      <div
        class="input"
        ?data-icon-before="${!!n}"
        ?data-icon-after="${!!s}"
      >
        ${n?d`<pano-a-icon
              class="input--icon"
              data-icon-before
              icon-name="${n}"
            ></pano-a-icon>`:null}
        <input
          class="input--field"
          .disabled="${i}"
          id="input"
          ?disabled="${i}"
          ?readonly="${t}"
          ?required="${h}"
          pattern="${_(c)}"
          placeholder="${_(b)}"
          value="${_(a)}"
          type="${o}"
          @input="${u}"
          data-size="${this.size}"
        />
        ${s?d`<pano-a-icon
              class="input--icon"
              data-icon-after
              icon-name="${s}"
            ></pano-a-icon>`:null}
      </div>
    `}};x.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      input {
        outline: none;
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .required {
        &::after {
          content: "*";
        }
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,to];L([E("input")],x.prototype,"_input",2);L([l({type:String,reflect:!0})],x.prototype,"size",2);L([l({type:Boolean,reflect:!0})],x.prototype,"disabled",2);L([l({type:Boolean,reflect:!0})],x.prototype,"hiddenLabel",2);L([l({type:String,reflect:!0,attribute:"input-type"})],x.prototype,"inputType",2);L([l({type:String,reflect:!0})],x.prototype,"label",2);L([l({type:Boolean,reflect:!0,attribute:"read-only"})],x.prototype,"readOnly",2);L([l({type:Boolean,reflect:!0})],x.prototype,"required",2);L([l({type:String,reflect:!0})],x.prototype,"pattern",2);L([l({type:String,reflect:!0})],x.prototype,"placeholder",2);L([l({type:String,reflect:!0})],x.prototype,"value",2);L([l({type:String,reflect:!0,attribute:"icon-before"})],x.prototype,"iconBefore",2);L([l({type:String,reflect:!0,attribute:"icon-after"})],x.prototype,"iconAfter",2);x=L([y("pano-a-input")],x);const io=p`
  :host {
    --radio-button-size: var(--space-10);

    font-family: var(--ds-default-font);
  }

  .radio-group {
    --_radio-button-size: var(--radio-button-size);

    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .radio-group--items {
    display: flex;
  }

  .radio-group--heading {
    display: block;
    font-size: var(--_radio-button-size);
  }

  .radio {
    position: relative;
    outline-offset: 2px;
    border: 1px solid;

    & + & {
      border-left: none;
    }

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .radio--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding: var(--space-4) var(--space-8);
    font-family: var(--ds-default-font);
    font-size: calc(var(--radio-label-font, var(--radio-button-size)) * 0.8);
    line-height: 1.25;
    color: var(--color-black);
    cursor: pointer;
  }

  .radio--input:disabled {
    cursor: default;

    & + .radio--label {
      color: var(--color-disabled);
      cursor: default;
    }
  }

  .radio--input:enabled {
    &:checked + .radio--label {
      border-color: var(--color-primary);
      color: var(--color-on-primary);
      background-color: var(--color-primary);
    }

    &:hover + .radio--label {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-hover, 1.2));
    }

    &:active + .radio--label {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-active, 1.4));
    }

    /* stylelint-disable-next-line selector-max-combinators */
    &:checked:hover + .radio--label {
      color: var(--color-primary-on-container);
    }

    /* stylelint-disable-next-line selector-max-combinators */
    &:checked:active + .radio--label {
      color: var(--color-primary-on-container);
    }
  }
`;var ao=Object.defineProperty,no=Object.getOwnPropertyDescriptor,se=(i,e,o,r)=>{for(var t=r>1?void 0:r?no(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&ao(e,o,t),t};let Z=class extends f{constructor(){super(...arguments),this.disabled=!1,this.hiddenLabel=!1}_handleChange(){console.log({radioButtonValue:this._radioGroupNode.value})}render(){const{disabled:i,hiddenLabel:e,label:o,options:r,name:t,_handleChange:a}=this,n=g({"radio-group--heading":!0,"sr-only":e});return d`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
        <div class="${n}" id="a11y-radio-group">
          ${o}
        </div>

        <div class="radio-group--items">
          ${r.map((s,c)=>Object.entries(s).map(([b,h])=>d`
                <div class="radio">
                  <input
                    id="radio-${c}"
                    class="radio--input | sr-only"
                    .disabled="${i}"
                    name="${t}"
                    value="${b}"
                    type="radio"
                    @change="${a}"
                  />
                  <label class="radio--label" for="radio-${c}">
                    <div>${h}</div>
                  </label>
                </div>
              `))}
        </div>
      </div>
    `}};Z.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,io];se([E("input")],Z.prototype,"_radioGroupNode",2);se([l({type:String,reflect:!0})],Z.prototype,"name",2);se([l({type:String,reflect:!0})],Z.prototype,"label",2);se([l({type:Array,reflect:!0})],Z.prototype,"options",2);se([l({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);se([l({type:Boolean,reflect:!0})],Z.prototype,"hiddenLabel",2);Z=se([y("pano-a-radio-group")],Z);var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,nt=(i,e,o,r)=>{for(var t=r>1?void 0:r?co(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&lo(e,o,t),t};let Ae=class extends f{render(){const{iconName:i}=this;return d`<span class="material-symbols-outlined">${i}</span>`}};Ae.styles=p`
    :host {
      display: inline-flex;
      vertical-align: 0;
    }

    .material-symbols-outlined {
      display: inline-block;
      font-family: "Material Symbols Outlined", sans-serif;
      font-size: inherit; /* Preferred icon size */
      font-style: normal;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 1;
      text-transform: none;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
    }
  `;nt([l({type:String,reflect:!0,attribute:"icon-name"})],Ae.prototype,"iconName",2);Ae=nt([y("pano-b-icon")],Ae);const so=p`
  .button {
    --button-height: 48px;
    --button-border: 1px solid;
    --button-border-radius: calc(var(--ds-border-radius));
    --button-inline-padding: var(--space-8);

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-8);
    min-height: var(--button-height);
    border: var(--button-border) var(--button-border-color);
    border-radius: var(--button-border-radius);
    padding-inline: var(--button-inline-padding);
    font-family: var(--ds-default-font);
    font-size: var(--ds-default-font-size);
    line-height: var(--ds-default-line-height);
    text-decoration: none;
    color: var(--button-color);
    background-color: var(--button-background-color);
    cursor: pointer;

    &[data-full-width] {
      width: 100%;
      display: flex;
    }
  }

  /* Link Styles */
  .button:hover,
  .button:visited,
  .button:active {
    text-decoration: none;
  }

  .button:disabled {
    --button-main-color: var(--color-disabled);
    --button-on-main-color: var(--color-on-disabled);

    cursor: default;
    pointer-events: none;
  }

  .button:not(:disabled):where(:focus),
  .button:not(:disabled):where(:hover),
  .button:not(:disabled):where(:active) {
    color: var(--button-on-interaction-color);
    background-color: var(--button-interaction-color);
  }

  .button[data-icon-only] {
    aspect-ratio: 1;
  }

  .button:where([data-theme="primary"]) {
    --button-main-color: var(--color-primary);
    --button-on-main-color: var(--color-on-primary);
    --button-interaction-color: var(--color-primary-container);
    --button-on-interaction-color: var(--color-primary-on-container);
  }

  .button:where([data-appearance="filled"]) {
    --button-color: var(--button-on-main-color);
    --button-border-color: transparent;
    --button-background-color: var(--button-main-color);
  }

  .button:where([data-appearance="outline"]) {
    --button-color: var(--button-main-color);
    --button-border-color: var(--button-main-color);
    --button-background-color: transparent;
  }

  .button:where([data-size="medium"]) {
    --button-height: calc(var(--size-factor-medium) * var(--space-12));
  }
`;var po=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,D=(i,e,o,r)=>{for(var t=r>1?void 0:r?ho(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&po(e,o,t),t};let A=class extends f{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.fullWidth=!1,this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:i,iconBefore:e,iconAfter:o,label:r,href:t,fullWidth:a,disabled:n}=this,s=g({"button--text":!0,"sr-only":i}),c=d`
      <pano-b-icon icon-name="${e}"></pano-b-icon>
      <span class="${s}"> ${r} </span>
      ${i?null:d`<pano-b-icon icon-name="${o}"></pano-b-icon>`}
    `;return t?d`
        <a
          class="button"
          href="${t}"
          ?data-icon-only="${i}"
          ?data-full-width="${a}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </a>
      `:d`
        <button
          class="button"
          ?disabled="${n}"
          ?data-icon-only="${i}"
          ?data-full-width="${a}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </button>
      `}};A.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      a,
      button {
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,so];D([l({type:String,reflect:!0})],A.prototype,"appearance",2);D([l({type:String,reflect:!0})],A.prototype,"size",2);D([l({type:String,reflect:!0})],A.prototype,"theme",2);D([l({type:String,reflect:!0})],A.prototype,"label",2);D([l({type:String,reflect:!0})],A.prototype,"buttonType",2);D([l({type:Boolean,reflect:!0,attribute:"icon-only"})],A.prototype,"iconOnly",2);D([l({type:String,reflect:!0,attribute:"icon-before"})],A.prototype,"iconBefore",2);D([l({type:Boolean,reflect:!0,attribute:"full-width"})],A.prototype,"fullWidth",2);D([l({type:String,reflect:!0,attribute:"icon-after"})],A.prototype,"iconAfter",2);D([l({type:String,reflect:!0})],A.prototype,"href",2);D([l({type:Boolean,reflect:!0})],A.prototype,"disabled",2);A=D([y("pano-b-button")],A);const bo=p`
  :host {
    --checkbox-size: var(--space-10);

    display: inline-flex;
    position: relative;
  }

  .checkbox {
    --_checkbox-size: var(--checkbox-size);

    outline-offset: 2px;

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }

    &[data-size="small"] {
      --_checkbox-size: calc(var(--size-factor-small) * var(--checkbox-size));
    }
  }

  .checkbox--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding-inline-start: calc(var(--_checkbox-size) * 1.5);
    font-family: var(--ds-default-font);
    font-size: var(--radio-label-font, var(--radio-button-size));
    color: var(--color-black);
    cursor: pointer;
  }

  .checkbox--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: var(--_checkbox-size);
    color: var(--color-primary);
  }

  .checkbox--label::before {
    inset-inline-start: 0;
    inline-size: var(--_checkbox-size);
    block-size: var(--_checkbox-size);
    border: 2px solid var(--color-primary);
    border-radius: calc(var(--_checkbox-size) * 0.3);
    background-color: var(--color-white);
  }

  .checkbox--label::before {
    content: "";
    position: absolute;
  }

  .checkbox--input:checked + .checkbox--label::before {
    border-color: var(--color-primary);
  }

  .checkbox--input:disabled {
    cursor: default;

    & + .checkbox--label {
      cursor: default;
      color: var(--color-disabled);
    }

    & + .checkbox--label::before {
      color: var(--color-disabled);
      border-color: var(--color-disabled);
    }
  }

  .checkbox--input:not(:disabled):hover + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .checkbox--input:not(:disabled):active + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  /* stylelint-disable-next-line selector-max-combinators */
  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input[aria-checked="mixed"] + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input:checked:hover + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }

  .checkbox--input:checked:active + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }
`;var uo=Object.defineProperty,fo=Object.getOwnPropertyDescriptor,Y=(i,e,o,r)=>{for(var t=r>1?void 0:r?fo(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&uo(e,o,t),t};let U=class extends f{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:i,indeterminate:e}=this._checkboxNode;this.checked=i,this.indeterminate=e}render(){const{checked:i,disabled:e,hiddenLabel:o,indeterminate:r,label:t,name:a,value:n,_handleChange:s}=this,c=g({"checkbox--label":!0,"sr-only":o});return d`
      <div class="checkbox" data-size="${this.size}">
        <input
          id="checkbox"
          class="checkbox--input | sr-only"
          .disabled="${e}"
          .checked="${i}"
          aria-checked="${r?"mixed":i}"
          name="${a}"
          value="${n}"
          type="checkbox"
          @change="${s}"
        />
        <label class="${c}" for="checkbox">
          <pano-b-icon
            class="checkbox--icon"
            icon-name="${r?"remove":"check"}"
          ></pano-b-icon>
          <div>${t}</div>
        </label>
      </div>
    `}};U.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,bo];Y([E("input")],U.prototype,"_checkboxNode",2);Y([l({type:String,reflect:!0})],U.prototype,"size",2);Y([l({type:Boolean,reflect:!0})],U.prototype,"checked",2);Y([l({type:Boolean,reflect:!0})],U.prototype,"disabled",2);Y([l({type:Boolean,reflect:!0,attribute:"hidden-label"})],U.prototype,"hiddenLabel",2);Y([l({type:Boolean,reflect:!0})],U.prototype,"indeterminate",2);Y([l({type:String,reflect:!0})],U.prototype,"label",2);Y([l({type:String,reflect:!0})],U.prototype,"name",2);Y([l({type:String,reflect:!0})],U.prototype,"value",2);U=Y([y("pano-b-checkbox")],U);const yo=p`
  :host {
    --icon-padding: calc(var(--space-8) * 2);
    --input-padding-block: calc(var(--space-8) * 0.5);

    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    font: normal 400 16px/1.5 var(--ds-default-font);
  }

  .input--field {
    width: 100%;
    border: 1px solid var(--color-black);
    border-radius: var(--space-4);
    padding-block: var(--input-padding-block);
    padding-inline: calc(var(--space-8) * 0.5);
    font: normal 400 16px/1.5 var(--ds-default-font);

    .input[data-icon-before] & {
      padding-left: var(--icon-padding);
    }

    .input[data-icon-after] & {
      padding-right: var(--icon-padding);
    }

    &:enabled:not(:read-only):where(:focus, :hover, :active) {
      outline: none;
      border-color: var(--color-primary);
    }

    &:read-only {
      cursor: default;
      color: var(--color-on-read-only-container);
      border-color: var(--color-read-only);
    }

    &:disabled {
      cursor: default;
      color: var(--color-on-disabled-container);
      border-color: var(--color-disabled);
    }
  }

  .input--field:where([data-size="medium"]) {
    --input-padding-block: calc(var(--size-factor-medium) * var(--space-4));
  }

  .input {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input--icon {
    position: absolute;

    &[data-icon-before] {
      left: var(--space-4);
    }

    &[data-icon-after] {
      right: var(--space-4);
    }
  }
`;var vo=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,T=(i,e,o,r)=>{for(var t=r>1?void 0:r?mo(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&vo(e,o,t),t};let $=class extends f{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:i}){this.value=i.value}render(){const{disabled:i,hiddenLabel:e,inputType:o,label:r,readOnly:t,value:a,iconBefore:n,iconAfter:s,pattern:c,placeholder:b,required:h,_handleInput:u}=this,v=g({"input--label":!0,required:h,"sr-only":e});return d`
      <label class="${v}" for="input">${r}</label>
      <div
        class="input"
        ?data-icon-before="${!!n}"
        ?data-icon-after="${!!s}"
      >
        ${n?d`<pano-b-icon
              class="input--icon"
              data-icon-before
              icon-name="${n}"
            ></pano-b-icon>`:null}
        <input
          class="input--field"
          .disabled="${i}"
          id="input"
          ?disabled="${i}"
          ?readonly="${t}"
          ?required="${h}"
          pattern="${_(c)}"
          placeholder="${_(b)}"
          value="${_(a)}"
          type="${o}"
          @input="${u}"
          data-size="${this.size}"
        />
        ${s?d`<pano-b-icon
              class="input--icon"
              data-icon-after
              icon-name="${s}"
            ></pano-b-icon>`:null}
      </div>
    `}};$.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      input {
        outline: none;
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .required {
        &::after {
          content: "*";
        }
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,yo];T([E("input")],$.prototype,"_input",2);T([l({type:String,reflect:!0})],$.prototype,"size",2);T([l({type:Boolean,reflect:!0})],$.prototype,"disabled",2);T([l({type:Boolean,reflect:!0})],$.prototype,"hiddenLabel",2);T([l({type:String,reflect:!0,attribute:"input-type"})],$.prototype,"inputType",2);T([l({type:String,reflect:!0})],$.prototype,"label",2);T([l({type:Boolean,reflect:!0,attribute:"read-only"})],$.prototype,"readOnly",2);T([l({type:Boolean,reflect:!0})],$.prototype,"required",2);T([l({type:String,reflect:!0})],$.prototype,"pattern",2);T([l({type:String,reflect:!0})],$.prototype,"placeholder",2);T([l({type:String,reflect:!0})],$.prototype,"value",2);T([l({type:String,reflect:!0,attribute:"icon-before"})],$.prototype,"iconBefore",2);T([l({type:String,reflect:!0,attribute:"icon-after"})],$.prototype,"iconAfter",2);$=T([y("pano-b-input")],$);const go=p`
  :host {
    --radio-button-size: var(--space-10);

    font-family: var(--ds-default-font);
  }

  .radio-group {
    --_radio-button-size: var(--radio-button-size);

    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .radio-group--items {
    display: flex;
  }

  .radio-group--heading {
    display: block;
    font-size: var(--_radio-button-size);
  }

  .radio {
    position: relative;
    outline-offset: 2px;
    border: 1px solid;

    & + & {
      border-left: none;
    }

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .radio--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding: var(--space-4) var(--space-8);
    font-family: var(--ds-default-font);
    font-size: calc(var(--radio-label-font, var(--radio-button-size)) * 0.8);
    line-height: 1.25;
    color: var(--color-black);
    cursor: pointer;
  }

  .radio--input:disabled {
    cursor: default;

    & + .radio--label {
      color: var(--color-disabled);
      cursor: default;
    }
  }

  .radio--input:enabled {
    &:checked + .radio--label {
      border-color: var(--color-primary);
      color: var(--color-on-primary);
      background-color: var(--color-primary);
    }

    &:hover + .radio--label {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-hover, 1.2));
    }

    &:active + .radio--label {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-active, 1.4));
    }

    /* stylelint-disable-next-line selector-max-combinators */
    &:checked:hover + .radio--label {
      color: var(--color-primary-on-container);
    }

    /* stylelint-disable-next-line selector-max-combinators */
    &:checked:active + .radio--label {
      color: var(--color-primary-on-container);
    }
  }
`;var xo=Object.defineProperty,$o=Object.getOwnPropertyDescriptor,de=(i,e,o,r)=>{for(var t=r>1?void 0:r?$o(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&xo(e,o,t),t};let F=class extends f{constructor(){super(...arguments),this.disabled=!1,this.hiddenLabel=!1}_handleChange(){console.log({radioButtonValue:this._radioGroupNode.value})}render(){const{disabled:i,hiddenLabel:e,label:o,options:r,name:t,_handleChange:a}=this,n=g({"radio-group--heading":!0,"sr-only":e});return d`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
        <div class="${n}" id="a11y-radio-group">
          ${o}
        </div>
        <div class="radio-group--items">
          ${r.map((s,c)=>Object.entries(s).map(([b,h])=>d`
                <div class="radio">
                  <input
                    id="radio-${c}"
                    class="radio--input | sr-only"
                    .disabled="${i}"
                    name="${t}"
                    value="${b}"
                    type="radio"
                    @change="${a}"
                  />
                  <label class="radio--label" for="radio-${c}">
                    ${h}
                  </label>
                </div>
              `))}
        </div>
      </div>
    `}};F.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,go];de([E("input")],F.prototype,"_radioGroupNode",2);de([l({type:String,reflect:!0})],F.prototype,"name",2);de([l({type:String,reflect:!0})],F.prototype,"label",2);de([l({type:Array,reflect:!0})],F.prototype,"options",2);de([l({type:Boolean,reflect:!0})],F.prototype,"disabled",2);de([l({type:Boolean,reflect:!0})],F.prototype,"hiddenLabel",2);F=de([y("pano-b-radio-group")],F);var ko=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,lt=(i,e,o,r)=>{for(var t=r>1?void 0:r?wo(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&ko(e,o,t),t};let Oe=class extends f{render(){const{iconName:i}=this;return d`<span class="material-symbols-outlined">${i}</span>`}};Oe.styles=p`
    :host {
      display: inline-flex;
      vertical-align: 0;
    }

    .material-symbols-outlined {
      display: inline-block;
      font-family: "Material Symbols Outlined", sans-serif;
      font-size: inherit; /* Preferred icon size */
      font-style: normal;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 1;
      text-transform: none;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
    }
  `;lt([l({type:String,reflect:!0,attribute:"icon-name"})],Oe.prototype,"iconName",2);Oe=lt([y("hsd-icon")],Oe);const zo=p`
  .button {
    --button-height: 48px;
    --button-border: 1px solid;
    --button-border-radius: calc(var(--ds-border-radius));
    --button-inline-padding: var(--space-8);

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-8);
    min-height: var(--button-height);
    border: var(--button-border) var(--button-border-color);
    border-radius: var(--button-border-radius);
    padding-inline: var(--button-inline-padding);
    font-family: var(--ds-default-font);
    font-size: var(--ds-default-font-size);
    line-height: var(--ds-default-line-height);
    text-decoration: none;
    color: var(--button-color);
    background-color: var(--button-background-color);
    cursor: pointer;

    &[data-full-width] {
      width: 100%;
      display: flex;
    }
  }

  /* Link Styles */
  .button:hover,
  .button:visited,
  .button:active {
    text-decoration: none;
  }

  .button:disabled {
    --button-main-color: var(--color-disabled);
    --button-on-main-color: var(--color-on-disabled);

    cursor: default;
    pointer-events: none;
  }

  .button:not(:disabled):where(:focus),
  .button:not(:disabled):where(:hover),
  .button:not(:disabled):where(:active) {
    color: var(--button-on-interaction-color);
    background-color: var(--button-interaction-color);
  }

  .button[data-icon-only] {
    aspect-ratio: 1;
  }

  .button:where([data-theme="primary"]) {
    --button-main-color: var(--color-primary);
    --button-on-main-color: var(--color-on-primary);
    --button-interaction-color: var(--color-primary-container);
    --button-on-interaction-color: var(--color-primary-on-container);
  }

  .button:where([data-appearance="filled"]) {
    --button-color: var(--button-on-main-color);
    --button-border-color: transparent;
    --button-background-color: var(--button-main-color);
  }

  .button:where([data-appearance="text"]) {
    --button-color: var(--button-on-main-color);
    --button-border-color: transparent;
    --button-background-color: transparent;
  }

  .button:where([data-size="small"]) {
    --button-height: calc(var(--size-factor-small) * var(--space-12));
  }

  .button:where([data-size="medium"]) {
    --button-height: calc(var(--size-factor-medium) * var(--space-12));
  }

  .button:where([data-size="large"]) {
    --button-height: calc(var(--size-factor-large) * var(--space-12));
  }
`;var _o=Object.defineProperty,So=Object.getOwnPropertyDescriptor,H=(i,e,o,r)=>{for(var t=r>1?void 0:r?So(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&_o(e,o,t),t};let O=class extends f{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.fullWidth=!1,this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:i,iconBefore:e,iconAfter:o,label:r,href:t,fullWidth:a,disabled:n}=this,s=g({"button--text":!0,"sr-only":i}),c=d`
      <hsd-icon icon-name="${e}"></hsd-icon>
      <span class="${s}"> ${r} </span>
      ${i?null:d`<hsd-icon icon-name="${o}"></hsd-icon>`}
    `;return t?d`
        <a
          class="button"
          href="${t}"
          ?data-icon-only="${i}"
          ?data-full-width="${a}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </a>
      `:d`
        <button
          class="button"
          ?disabled="${n}"
          ?data-icon-only="${i}"
          ?data-full-width="${a}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </button>
      `}};O.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      a,
      button {
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,zo];H([l({type:String,reflect:!0})],O.prototype,"appearance",2);H([l({type:String,reflect:!0})],O.prototype,"size",2);H([l({type:String,reflect:!0})],O.prototype,"theme",2);H([l({type:String,reflect:!0})],O.prototype,"label",2);H([l({type:String,reflect:!0})],O.prototype,"buttonType",2);H([l({type:Boolean,reflect:!0,attribute:"icon-only"})],O.prototype,"iconOnly",2);H([l({type:String,reflect:!0,attribute:"icon-before"})],O.prototype,"iconBefore",2);H([l({type:Boolean,reflect:!0,attribute:"full-width"})],O.prototype,"fullWidth",2);H([l({type:String,reflect:!0,attribute:"icon-after"})],O.prototype,"iconAfter",2);H([l({type:String,reflect:!0})],O.prototype,"href",2);H([l({type:Boolean,reflect:!0})],O.prototype,"disabled",2);O=H([y("hsd-button")],O);const Ao=p`
  :host {
    --checkbox-size: var(--space-10);

    display: inline-flex;
    position: relative;
  }

  .checkbox {
    --_checkbox-size: var(--checkbox-size);

    outline-offset: 2px;

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .checkbox--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding-inline-start: calc(var(--_checkbox-size) * 1.5);
    font-family: var(--ds-default-font);
    font-size: var(--radio-label-font, var(--radio-button-size));
    color: var(--color-black);
    cursor: pointer;
  }

  .checkbox--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: var(--_checkbox-size);
    color: var(--color-primary);
  }

  .checkbox--label::before {
    inset-inline-start: 0;
    inline-size: var(--_checkbox-size);
    block-size: var(--_checkbox-size);
    border: 2px solid var(--color-primary);
    border-radius: calc(var(--_checkbox-size) * 0.3);
    background-color: var(--color-white);
  }

  .checkbox--label::before {
    content: "";
    position: absolute;
  }

  .checkbox--input:checked + .checkbox--label::before {
    border-color: var(--color-primary);
  }

  .checkbox--input:disabled {
    cursor: default;

    & + .checkbox--label {
      cursor: default;
      color: var(--color-disabled);
    }

    & + .checkbox--label::before {
      color: var(--color-disabled);
      border-color: var(--color-disabled);
    }
  }

  .checkbox--input:not(:disabled):hover + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .checkbox--input:not(:disabled):active + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  /* stylelint-disable-next-line selector-max-combinators */
  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input[aria-checked="mixed"] + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input:checked:hover + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }

  .checkbox--input:checked:active + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }
`;var Oo=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,X=(i,e,o,r)=>{for(var t=r>1?void 0:r?Po(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&Oo(e,o,t),t};let W=class extends f{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:i,indeterminate:e}=this._checkboxNode;this.checked=i,this.indeterminate=e}render(){const{checked:i,disabled:e,hiddenLabel:o,indeterminate:r,label:t,name:a,value:n,_handleChange:s}=this,c=g({"checkbox--label":!0,"sr-only":o});return d`
      <div class="checkbox">
        <input
          id="checkbox"
          class="checkbox--input | sr-only"
          .disabled="${e}"
          .checked="${i}"
          aria-checked="${r?"mixed":i}"
          name="${a}"
          value="${n}"
          type="checkbox"
          @change="${s}"
        />
        <label class="${c}" for="checkbox">
          <hsd-icon
            class="checkbox--icon"
            icon-name="${r?"remove":"check"}"
          ></hsd-icon>
          <div>${t}</div>
        </label>
      </div>
    `}};W.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,Ao];X([E("input")],W.prototype,"_checkboxNode",2);X([l({type:Boolean,reflect:!0})],W.prototype,"checked",2);X([l({type:Boolean,reflect:!0})],W.prototype,"disabled",2);X([l({type:Boolean,reflect:!0,attribute:"hidden-label"})],W.prototype,"hiddenLabel",2);X([l({type:Boolean,reflect:!0})],W.prototype,"indeterminate",2);X([l({type:String,reflect:!0})],W.prototype,"label",2);X([l({type:String,reflect:!0})],W.prototype,"name",2);X([l({type:String,reflect:!0})],W.prototype,"value",2);W=X([y("hsd-checkbox")],W);const Bo=p`
  :host {
    --icon-padding: calc(var(--space-8) * 2);
    --input-padding-block: calc(var(--space-8) * 0.5);

    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    font: normal 400 16px/1.5 var(--ds-default-font);
  }

  .input--field {
    width: 100%;
    border: 1px solid var(--color-black);
    border-radius: var(--space-4);
    padding-block: var(--input-padding-block);
    padding-inline: calc(var(--space-8) * 0.5);
    font: normal 400 16px/1.5 var(--ds-default-font);

    .input[data-icon-before] & {
      padding-left: var(--icon-padding);
    }

    .input[data-icon-after] & {
      padding-right: var(--icon-padding);
    }

    &:enabled:not(:read-only):where(:focus, :hover, :active) {
      outline: none;
      border-color: var(--color-primary);
    }

    &:read-only {
      cursor: default;
      color: var(--color-on-read-only-container);
      border-color: var(--color-read-only);
    }

    &:disabled {
      cursor: default;
      color: var(--color-on-disabled-container);
      border-color: var(--color-disabled);
    }
  }

  .input--field:where([data-size="small"]) {
    --input-padding-block: calc(var(--size-factor-small) * var(--space-4));
  }

  .input--field:where([data-size="medium"]) {
    --input-padding-block: calc(var(--size-factor-medium) * var(--space-4));
  }

  .input--field:where([data-size="large"]) {
    --input-padding-block: calc(var(--size-factor-large) * var(--space-4));
  }

  .input {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input--icon {
    position: absolute;

    &[data-icon-before] {
      left: var(--space-4);
    }

    &[data-icon-after] {
      right: var(--space-4);
    }
  }
`;var Eo=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,C=(i,e,o,r)=>{for(var t=r>1?void 0:r?Lo(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&Eo(e,o,t),t};let k=class extends f{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:i}){this.value=i.value}render(){const{disabled:i,hiddenLabel:e,inputType:o,label:r,readOnly:t,value:a,iconBefore:n,iconAfter:s,pattern:c,placeholder:b,required:h,_handleInput:u}=this,v=g({"input--label":!0,required:h,"sr-only":e});return d`
      <label class="${v}" for="input">${r}</label>
      <div
        class="input"
        ?data-icon-before="${!!n}"
        ?data-icon-after="${!!s}"
      >
        ${n?d`<hsd-icon
              class="input--icon"
              data-icon-before
              icon-name="${n}"
            ></hsd-icon>`:null}
        <input
          class="input--field"
          .disabled="${i}"
          id="input"
          ?disabled="${i}"
          ?readonly="${t}"
          ?required="${h}"
          pattern="${_(c)}"
          placeholder="${_(b)}"
          value="${_(a)}"
          type="${o}"
          @input="${u}"
          data-size="${this.size}"
        />
        ${s?d`<hsd-icon
              class="input--icon"
              data-icon-after
              icon-name="${s}"
            ></hsd-icon>`:null}
      </div>
    `}};k.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      input {
        outline: none;
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .required {
        &::after {
          content: "*";
        }
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,Bo];C([E("input")],k.prototype,"_input",2);C([l({type:String,reflect:!0})],k.prototype,"size",2);C([l({type:Boolean,reflect:!0})],k.prototype,"disabled",2);C([l({type:Boolean,reflect:!0})],k.prototype,"hiddenLabel",2);C([l({type:String,reflect:!0,attribute:"input-type"})],k.prototype,"inputType",2);C([l({type:String,reflect:!0})],k.prototype,"label",2);C([l({type:Boolean,reflect:!0,attribute:"read-only"})],k.prototype,"readOnly",2);C([l({type:Boolean,reflect:!0})],k.prototype,"required",2);C([l({type:String,reflect:!0})],k.prototype,"pattern",2);C([l({type:String,reflect:!0})],k.prototype,"placeholder",2);C([l({type:String,reflect:!0})],k.prototype,"value",2);C([l({type:String,reflect:!0,attribute:"icon-before"})],k.prototype,"iconBefore",2);C([l({type:String,reflect:!0,attribute:"icon-after"})],k.prototype,"iconAfter",2);k=C([y("hsd-input")],k);var To=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,ct=(i,e,o,r)=>{for(var t=r>1?void 0:r?Co(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&To(e,o,t),t};let Pe=class extends f{render(){const{iconName:i}=this;return d`<span class="material-symbols-outlined">${i}</span>`}};Pe.styles=p`
    :host {
      display: inline-flex;
      vertical-align: 0;
    }

    .material-symbols-outlined {
      display: inline-block;
      font-family: "Material Symbols Outlined", sans-serif;
      font-size: inherit; /* Preferred icon size */
      font-style: normal;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 1;
      text-transform: none;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
    }
  `;ct([l({type:String,reflect:!0,attribute:"icon-name"})],Pe.prototype,"iconName",2);Pe=ct([y("ikea-icon")],Pe);const jo=p`
  .button {
    --button-height: 48px;
    --button-border: 1px solid;
    --button-border-radius: calc(var(--ds-border-radius));
    --button-inline-padding: var(--space-8);

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-8);
    min-height: var(--button-height);
    border: var(--button-border) var(--button-border-color);
    border-radius: var(--button-border-radius);
    padding-inline: var(--button-inline-padding);
    font-family: var(--ds-default-font);
    font-size: var(--ds-default-font-size);
    line-height: var(--ds-default-line-height);
    text-decoration: none;
    color: var(--button-color);
    background-color: var(--button-background-color);
    cursor: pointer;

    &[data-full-width] {
      width: 100%;
      display: flex;
    }
  }

  /* Link Styles */
  .button:hover,
  .button:visited,
  .button:active {
    text-decoration: none;
  }

  .button:disabled {
    --button-main-color: var(--color-disabled);
    --button-on-main-color: var(--color-on-disabled);

    cursor: default;
    pointer-events: none;
  }

  .button:not(:disabled):where(:focus),
  .button:not(:disabled):where(:hover),
  .button:not(:disabled):where(:active) {
    color: var(--button-on-interaction-color);
    background-color: var(--button-interaction-color);
  }

  .button[data-icon-only] {
    aspect-ratio: 1;
  }

  .button:where([data-theme="primary"]) {
    --button-main-color: var(--color-primary);
    --button-on-main-color: var(--color-on-primary);
    --button-interaction-color: var(--color-primary-container);
    --button-on-interaction-color: var(--color-primary-on-container);
  }

  .button:where([data-theme="secondary"]) {
    --button-main-color: var(--color-secondary);
    --button-on-main-color: var(--color-on-secondary);
    --button-interaction-color: var(--color-secondary-container);
    --button-on-interaction-color: var(--color-secondary-on-container);
  }

  .button:where([data-appearance="filled"]) {
    --button-color: var(--button-on-main-color);
    --button-border-color: transparent;
    --button-background-color: var(--button-main-color);
  }

  .button:where([data-appearance="outline"]) {
    --button-color: var(--button-main-color);
    --button-border-color: var(--button-main-color);
    --button-background-color: transparent;
  }

  .button:where([data-appearance="text"]) {
    --button-color: var(--button-main-color);
    --button-border-color: transparent;
    --button-background-color: transparent;
  }

  .button:where([data-size="medium"]) {
    --button-height: calc(var(--size-factor-medium) * var(--space-12));
  }
`;var No=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,M=(i,e,o,r)=>{for(var t=r>1?void 0:r?Uo(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&No(e,o,t),t};let P=class extends f{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.fullWidth=!1,this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:i,iconBefore:e,iconAfter:o,label:r,href:t,fullWidth:a,disabled:n}=this,s=g({"button--text":!0,"sr-only":i}),c=d`
      <ikea-icon icon-name="${e}"></ikea-icon>
      <span class="${s}"> ${r} </span>
      ${i?null:d`<ikea-icon icon-name="${o}"></ikea-icon>`}
    `;return t?d`
        <a
          class="button"
          href="${t}"
          ?data-icon-only="${i}"
          ?data-full-width="${a}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </a>
      `:d`
        <button
          class="button"
          ?disabled="${n}"
          ?data-icon-only="${i}"
          ?data-full-width="${a}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </button>
      `}};P.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      a,
      button {
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,jo];M([l({type:String,reflect:!0})],P.prototype,"appearance",2);M([l({type:String,reflect:!0})],P.prototype,"size",2);M([l({type:String,reflect:!0})],P.prototype,"theme",2);M([l({type:String,reflect:!0})],P.prototype,"label",2);M([l({type:String,reflect:!0})],P.prototype,"buttonType",2);M([l({type:Boolean,reflect:!0,attribute:"icon-only"})],P.prototype,"iconOnly",2);M([l({type:String,reflect:!0,attribute:"icon-before"})],P.prototype,"iconBefore",2);M([l({type:Boolean,reflect:!0,attribute:"full-width"})],P.prototype,"fullWidth",2);M([l({type:String,reflect:!0,attribute:"icon-after"})],P.prototype,"iconAfter",2);M([l({type:String,reflect:!0})],P.prototype,"href",2);M([l({type:Boolean,reflect:!0})],P.prototype,"disabled",2);P=M([y("ikea-button")],P);const Io=p`
  :host {
    --checkbox-size: var(--space-10);

    display: inline-flex;
    position: relative;
  }

  .checkbox {
    --_checkbox-size: var(--checkbox-size);

    outline-offset: 2px;

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .checkbox--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding-inline-start: calc(var(--_checkbox-size) * 1.5);
    font-family: var(--ds-default-font);
    font-size: var(--radio-label-font, var(--radio-button-size));
    color: var(--color-black);
    cursor: pointer;
  }

  .checkbox--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: var(--_checkbox-size);
    color: var(--color-primary);
  }

  .checkbox--label::before {
    inset-inline-start: 0;
    inline-size: var(--_checkbox-size);
    block-size: var(--_checkbox-size);
    border: 2px solid var(--color-primary);
    border-radius: calc(var(--_checkbox-size) * 0.3);
    background-color: var(--color-white);
  }

  .checkbox--label::before {
    content: "";
    position: absolute;
  }

  .checkbox--input:checked + .checkbox--label::before {
    border-color: var(--color-primary);
  }

  .checkbox--input:disabled {
    cursor: default;

    & + .checkbox--label {
      cursor: default;
      color: var(--color-disabled);
    }

    & + .checkbox--label::before {
      color: var(--color-disabled);
      border-color: var(--color-disabled);
    }
  }

  .checkbox--input:not(:disabled):hover + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .checkbox--input:not(:disabled):active + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  /* stylelint-disable-next-line selector-max-combinators */
  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input[aria-checked="mixed"] + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input:checked:hover + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }

  .checkbox--input:checked:active + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }
`;var Do=Object.defineProperty,Ho=Object.getOwnPropertyDescriptor,ee=(i,e,o,r)=>{for(var t=r>1?void 0:r?Ho(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&Do(e,o,t),t};let V=class extends f{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:i,indeterminate:e}=this._checkboxNode;this.checked=i,this.indeterminate=e}render(){const{checked:i,disabled:e,hiddenLabel:o,indeterminate:r,label:t,name:a,value:n,_handleChange:s}=this,c=g({"checkbox--label":!0,"sr-only":o});return d`
      <div class="checkbox">
        <input
          id="checkbox"
          class="checkbox--input | sr-only"
          .disabled="${e}"
          .checked="${i}"
          aria-checked="${r?"mixed":i}"
          name="${a}"
          value="${n}"
          type="checkbox"
          @change="${s}"
        />
        <label class="${c}" for="checkbox">
          <ikea-icon
            class="checkbox--icon"
            icon-name="${r?"remove":"check"}"
          ></ikea-icon>
          <div>${t}</div>
        </label>
      </div>
    `}};V.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,Io];ee([E("input")],V.prototype,"_checkboxNode",2);ee([l({type:Boolean,reflect:!0})],V.prototype,"checked",2);ee([l({type:Boolean,reflect:!0})],V.prototype,"disabled",2);ee([l({type:Boolean,reflect:!0,attribute:"hidden-label"})],V.prototype,"hiddenLabel",2);ee([l({type:Boolean,reflect:!0})],V.prototype,"indeterminate",2);ee([l({type:String,reflect:!0})],V.prototype,"label",2);ee([l({type:String,reflect:!0})],V.prototype,"name",2);ee([l({type:String,reflect:!0})],V.prototype,"value",2);V=ee([y("ikea-checkbox")],V);const Mo=p`
  :host {
    --icon-padding: calc(var(--space-8) * 2);
    --input-padding-block: calc(var(--space-8) * 0.5);

    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    font: normal 400 16px/1.5 var(--ds-default-font);
  }

  .input--field {
    width: 100%;
    border: 1px solid var(--color-black);
    border-radius: var(--space-4);
    padding-block: var(--input-padding-block);
    padding-inline: calc(var(--space-8) * 0.5);
    font: normal 400 16px/1.5 var(--ds-default-font);

    .input[data-icon-before] & {
      padding-left: var(--icon-padding);
    }

    .input[data-icon-after] & {
      padding-right: var(--icon-padding);
    }

    &:enabled:not(:read-only):where(:focus, :hover, :active) {
      outline: none;
      border-color: var(--color-primary);
    }

    &:read-only {
      cursor: default;
      color: var(--color-on-read-only-container);
      border-color: var(--color-read-only);
    }

    &:disabled {
      cursor: default;
      color: var(--color-on-disabled-container);
      border-color: var(--color-disabled);
    }
  }

  .input--field:where([data-size="small"]) {
    --input-padding-block: calc(var(--size-factor-small) * var(--space-4));
  }

  .input--field:where([data-size="medium"]) {
    --input-padding-block: calc(var(--size-factor-medium) * var(--space-4));
  }

  .input {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input--icon {
    position: absolute;

    &[data-icon-before] {
      left: var(--space-4);
    }

    &[data-icon-after] {
      right: var(--space-4);
    }
  }
`;var qo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,j=(i,e,o,r)=>{for(var t=r>1?void 0:r?Ro(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&qo(e,o,t),t};let w=class extends f{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:i}){this.value=i.value}render(){const{disabled:i,hiddenLabel:e,inputType:o,label:r,readOnly:t,value:a,iconBefore:n,iconAfter:s,pattern:c,placeholder:b,required:h,_handleInput:u}=this,v=g({"input--label":!0,required:h,"sr-only":e});return d`
      <label class="${v}" for="input">${r}</label>
      <div
        class="input"
        ?data-icon-before="${!!n}"
        ?data-icon-after="${!!s}"
      >
        ${n?d`<ikea-icon
              class="input--icon"
              data-icon-before
              icon-name="${n}"
            ></ikea-icon>`:null}
        <input
          class="input--field"
          .disabled="${i}"
          id="input"
          ?disabled="${i}"
          ?readonly="${t}"
          ?required="${h}"
          pattern="${_(c)}"
          placeholder="${_(b)}"
          value="${_(a)}"
          type="${o}"
          @input="${u}"
          data-size="${this.size}"
        />
        ${s?d`<ikea-icon
              class="input--icon"
              data-icon-after
              icon-name="${s}"
            ></ikea-icon>`:null}
      </div>
    `}};w.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      input {
        outline: none;
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .required {
        &::after {
          content: "*";
        }
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,Mo];j([E("input")],w.prototype,"_input",2);j([l({type:String,reflect:!0})],w.prototype,"size",2);j([l({type:Boolean,reflect:!0})],w.prototype,"disabled",2);j([l({type:Boolean,reflect:!0})],w.prototype,"hiddenLabel",2);j([l({type:String,reflect:!0,attribute:"input-type"})],w.prototype,"inputType",2);j([l({type:String,reflect:!0})],w.prototype,"label",2);j([l({type:Boolean,reflect:!0,attribute:"read-only"})],w.prototype,"readOnly",2);j([l({type:Boolean,reflect:!0})],w.prototype,"required",2);j([l({type:String,reflect:!0})],w.prototype,"pattern",2);j([l({type:String,reflect:!0})],w.prototype,"placeholder",2);j([l({type:String,reflect:!0})],w.prototype,"value",2);j([l({type:String,reflect:!0,attribute:"icon-before"})],w.prototype,"iconBefore",2);j([l({type:String,reflect:!0,attribute:"icon-after"})],w.prototype,"iconAfter",2);w=j([y("ikea-input")],w);const Wo=p`
  :host {
    --radio-button-size: var(--space-10);
    font-family: var(--ds-default-font);
  }

  .radio-group {
    --_radio-button-size: var(--radio-button-size);

    display: inline-flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .radio-group--heading {
    font-size: var(--_radio-button-size);
  }

  .radio {
    position: relative;
    outline-offset: 2px;

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .radio--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding-inline-start: calc(var(--space-8) * 2);
    font-size: calc(var(--radio-label-font, var(--radio-button-size)) * 0.8);
    line-height: 1.25;
    font-family: var(--ds-default-font);
    color: var(--color-black);
    cursor: pointer;
  }

  .radio--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    font-size: var(--radio-button-size);
    line-height: 1;
    color: var(--color-primary);
    transform: translateY(-50%);
  }

  .radio--label::before {
    content: "";
    position: absolute;
  }

  .radio--label::before {
    inset-inline-start: 0;
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--color-primary);
    border-radius: 100%;
    background-color: var(--color-white);
  }

  .radio--input:disabled {
    cursor: default;

    & + .radio--label {
      cursor: default;
      color: var(--color-disabled);
    }

    & + .radio--label::before {
      color: var(--color-disabled);
      border-color: var(--color-disabled);
    }
  }

  .radio--input:enabled {
    &:checked + .radio--label::before {
      border-color: var(--color-primary);
    }

    &:hover + .radio--label::before {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-hover, 1.2));
    }

    &:active + .radio--label::before {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-active, 1.4));
    }

    &:checked + .radio--label > .radio--icon {
      display: inline-flex;
    }

    &:checked:hover + .radio--label > .radio--icon {
      color: var(--color-primary-on-container);
    }

    &:checked:active + .radio--label > .radio--icon {
      color: var(--color-primary-on-container);
    }
  }
`;var Vo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,pe=(i,e,o,r)=>{for(var t=r>1?void 0:r?Go(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&Vo(e,o,t),t};let J=class extends f{constructor(){super(...arguments),this.disabled=!1,this.hiddenLabel=!1}_handleChange(){console.log({radioButtonValue:this._radioGroupNode.value})}render(){const{disabled:i,hiddenLabel:e,label:o,options:r,name:t,_handleChange:a}=this,n=g({"radio-group--heading":!0,"sr-only":e});return d`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
        <div class="${n}" id="a11y-radio-group">
          ${o}
        </div>
        ${r.map((s,c)=>Object.entries(s).map(([b,h])=>d`
              <div class="radio">
                <input
                  id="radio-${c}"
                  class="radio--input | sr-only"
                  .disabled="${i}"
                  name="${t}"
                  value="${b}"
                  type="radio"
                  @change="${a}"
                />
                <label class="radio--label" for="radio-${c}">
                  <ikea-icon class="radio--icon" icon-name="check"></ikea-icon>
                  <div>${h}</div>
                </label>
              </div>
            `))}
      </div>
    `}};J.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,Wo];pe([E("input")],J.prototype,"_radioGroupNode",2);pe([l({type:String,reflect:!0})],J.prototype,"name",2);pe([l({type:String,reflect:!0})],J.prototype,"label",2);pe([l({type:Array,reflect:!0})],J.prototype,"options",2);pe([l({type:Boolean,reflect:!0})],J.prototype,"disabled",2);pe([l({type:Boolean,reflect:!0})],J.prototype,"hiddenLabel",2);J=pe([y("ikea-radio-group")],J);var Yo=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,st=(i,e,o,r)=>{for(var t=r>1?void 0:r?Zo(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&Yo(e,o,t),t};let Be=class extends f{render(){const{iconName:i}=this;return d`<span class="material-symbols-outlined">${i}</span>`}};Be.styles=p`
    :host {
      display: inline-flex;
      vertical-align: 0;
    }

    .material-symbols-outlined {
      display: inline-block;
      font-family: "Material Symbols Outlined", sans-serif;
      font-size: inherit; /* Preferred icon size */
      font-style: normal;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 1;
      text-transform: none;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
    }
  `;st([l({type:String,reflect:!0,attribute:"icon-name"})],Be.prototype,"iconName",2);Be=st([y("zw-icon")],Be);const Fo=p`
  .button {
    --button-height: 48px;
    --button-border: 1px solid;
    --button-border-radius: calc(var(--ds-border-radius));
    --button-inline-padding: var(--space-8);

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-8);
    min-height: var(--button-height);
    border: var(--button-border) var(--button-border-color);
    border-radius: var(--button-border-radius);
    padding-inline: var(--button-inline-padding);
    font-family: var(--ds-default-font);
    font-size: var(--ds-default-font-size);
    line-height: var(--ds-default-line-height);
    text-decoration: none;
    color: var(--button-color);
    background-color: var(--button-background-color);
    cursor: pointer;

    &[data-full-width] {
      width: 100%;
      display: flex;
    }
  }

  /* Link Styles */
  .button:hover,
  .button:visited,
  .button:active {
    text-decoration: none;
  }

  .button:disabled {
    --button-main-color: var(--color-disabled);
    --button-on-main-color: var(--color-on-disabled);

    cursor: default;
    pointer-events: none;
  }

  .button:not(:disabled):where(:focus),
  .button:not(:disabled):where(:hover),
  .button:not(:disabled):where(:active) {
    color: var(--button-on-interaction-color);
    background-color: var(--button-interaction-color);
  }

  .button[data-icon-only] {
    aspect-ratio: 1;
  }

  .button:where([data-theme="primary"]) {
    --button-main-color: var(--color-primary);
    --button-on-main-color: var(--color-on-primary);
    --button-interaction-color: var(--color-primary-container);
    --button-on-interaction-color: var(--color-primary-on-container);
  }

  .button:where([data-theme="secondary"]) {
    --button-main-color: var(--color-secondary);
    --button-on-main-color: var(--color-on-secondary);
    --button-interaction-color: var(--color-secondary-container);
    --button-on-interaction-color: var(--color-secondary-on-container);
  }

  .button:where([data-theme="highlight"]) {
    --button-main-color: var(--color-highlight);
    --button-on-main-color: var(--color-on-highlight);
    --button-interaction-color: var(--color-highlight-container);
    --button-on-interaction-color: var(--color-highlight-on-container);
  }

  .button:where([data-appearance="filled"]) {
    --button-color: var(--button-on-main-color);
    --button-border-color: transparent;
    --button-background-color: var(--button-main-color);
  }

  .button:where([data-size="small"]) {
    --button-height: calc(var(--size-factor-small) * var(--space-12));
  }

  .button:where([data-size="medium"]) {
    --button-height: calc(var(--size-factor-medium) * var(--space-12));
  }

  .button:where([data-size="large"]) {
    --button-height: calc(var(--size-factor-large) * var(--space-12));
  }
`;var Jo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,q=(i,e,o,r)=>{for(var t=r>1?void 0:r?Ko(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&Jo(e,o,t),t};let B=class extends f{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.fullWidth=!1,this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:i,iconBefore:e,iconAfter:o,label:r,href:t,fullWidth:a,disabled:n}=this,s=g({"button--text":!0,"sr-only":i}),c=d`
      <zw-icon icon-name="${e}"></zw-icon>
      <span class="${s}"> ${r} </span>
      ${i?null:d`<zw-icon icon-name="${o}"></zw-icon>`}
    `;return t?d`
        <a
          class="button"
          href="${t}"
          ?data-icon-only="${i}"
          ?data-full-width="${a}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </a>
      `:d`
        <button
          class="button"
          ?disabled="${n}"
          ?data-icon-only="${i}"
          ?data-full-width="${a}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </button>
      `}};B.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      a,
      button {
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,Fo];q([l({type:String,reflect:!0})],B.prototype,"appearance",2);q([l({type:String,reflect:!0})],B.prototype,"size",2);q([l({type:String,reflect:!0})],B.prototype,"theme",2);q([l({type:String,reflect:!0})],B.prototype,"label",2);q([l({type:String,reflect:!0})],B.prototype,"buttonType",2);q([l({type:Boolean,reflect:!0,attribute:"icon-only"})],B.prototype,"iconOnly",2);q([l({type:String,reflect:!0,attribute:"icon-before"})],B.prototype,"iconBefore",2);q([l({type:Boolean,reflect:!0,attribute:"full-width"})],B.prototype,"fullWidth",2);q([l({type:String,reflect:!0,attribute:"icon-after"})],B.prototype,"iconAfter",2);q([l({type:String,reflect:!0})],B.prototype,"href",2);q([l({type:Boolean,reflect:!0})],B.prototype,"disabled",2);B=q([y("zw-button")],B);const Qo=p`
  :host {
    --checkbox-size: var(--space-10);

    display: inline-flex;
    position: relative;
  }

  .checkbox {
    --_checkbox-size: var(--checkbox-size);

    outline-offset: 2px;

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .checkbox--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding-inline-start: calc(var(--_checkbox-size) * 1.5);
    font-family: var(--ds-default-font);
    font-size: var(--radio-label-font, var(--radio-button-size));
    color: var(--color-black);
    cursor: pointer;
  }

  .checkbox--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: var(--_checkbox-size);
    color: var(--color-primary);
  }

  .checkbox--label::before {
    inset-inline-start: 0;
    inline-size: var(--_checkbox-size);
    block-size: var(--_checkbox-size);
    border: 2px solid var(--color-primary);
    border-radius: calc(var(--_checkbox-size) * 0.3);
    background-color: var(--color-white);
  }

  .checkbox--label::before {
    content: "";
    position: absolute;
  }

  .checkbox--input:checked + .checkbox--label::before {
    border-color: var(--color-primary);
  }

  .checkbox--input:disabled {
    cursor: default;

    & + .checkbox--label {
      cursor: default;
      color: var(--color-disabled);
    }

    & + .checkbox--label::before {
      color: var(--color-disabled);
      border-color: var(--color-disabled);
    }
  }

  .checkbox--input:not(:disabled):hover + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .checkbox--input:not(:disabled):active + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  /* stylelint-disable-next-line selector-max-combinators */
  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input[aria-checked="mixed"] + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input:checked:hover + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }

  .checkbox--input:checked:active + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }
`;var Xo=Object.defineProperty,er=Object.getOwnPropertyDescriptor,te=(i,e,o,r)=>{for(var t=r>1?void 0:r?er(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&Xo(e,o,t),t};let G=class extends f{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:i,indeterminate:e}=this._checkboxNode;this.checked=i,this.indeterminate=e}render(){const{checked:i,disabled:e,hiddenLabel:o,indeterminate:r,label:t,name:a,value:n,_handleChange:s}=this,c=g({"checkbox--label":!0,"sr-only":o});return d`
      <div class="checkbox">
        <input
          id="checkbox"
          class="checkbox--input | sr-only"
          .disabled="${e}"
          .checked="${i}"
          aria-checked="${r?"mixed":i}"
          name="${a}"
          value="${n}"
          type="checkbox"
          @change="${s}"
        />
        <label class="${c}" for="checkbox">
          <zw-icon
            class="checkbox--icon"
            icon-name="${r?"remove":"check"}"
          ></zw-icon>
          <div>${t}</div>
        </label>
      </div>
    `}};G.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,Qo];te([E("input")],G.prototype,"_checkboxNode",2);te([l({type:Boolean,reflect:!0})],G.prototype,"checked",2);te([l({type:Boolean,reflect:!0})],G.prototype,"disabled",2);te([l({type:Boolean,reflect:!0,attribute:"hidden-label"})],G.prototype,"hiddenLabel",2);te([l({type:Boolean,reflect:!0})],G.prototype,"indeterminate",2);te([l({type:String,reflect:!0})],G.prototype,"label",2);te([l({type:String,reflect:!0})],G.prototype,"name",2);te([l({type:String,reflect:!0})],G.prototype,"value",2);G=te([y("zw-checkbox")],G);const tr=p`
  :host {
    --icon-padding: calc(var(--space-8) * 2);
    --input-padding-block: calc(var(--space-8) * 0.5);

    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    font: normal 400 16px/1.5 var(--ds-default-font);
  }

  .input--field {
    width: 100%;
    border: 1px solid var(--color-black);
    border-radius: var(--space-4);
    padding-block: var(--input-padding-block);
    padding-inline: calc(var(--space-8) * 0.5);
    font: normal 400 16px/1.5 var(--ds-default-font);

    .input[data-icon-before] & {
      padding-left: var(--icon-padding);
    }

    .input[data-icon-after] & {
      padding-right: var(--icon-padding);
    }

    &:enabled:not(:read-only):where(:focus, :hover, :active) {
      outline: none;
      border-color: var(--color-primary);
    }

    &:read-only {
      cursor: default;
      color: var(--color-on-read-only-container);
      border-color: var(--color-read-only);
    }

    &:disabled {
      cursor: default;
      color: var(--color-on-disabled-container);
      border-color: var(--color-disabled);
    }
  }

  .input--field:where([data-size="small"]) {
    --input-padding-block: calc(var(--size-factor-small) * var(--space-4));
  }

  .input--field:where([data-size="medium"]) {
    --input-padding-block: calc(var(--size-factor-medium) * var(--space-4));
  }

  .input {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input--icon {
    position: absolute;

    &[data-icon-before] {
      left: var(--space-4);
    }

    &[data-icon-after] {
      right: var(--space-4);
    }
  }
`;var or=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,N=(i,e,o,r)=>{for(var t=r>1?void 0:r?rr(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&or(e,o,t),t};let z=class extends f{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:i}){this.value=i.value}render(){const{disabled:i,hiddenLabel:e,inputType:o,label:r,readOnly:t,value:a,iconBefore:n,iconAfter:s,pattern:c,placeholder:b,required:h,_handleInput:u}=this,v=g({"input--label":!0,required:h,"sr-only":e});return d`
      <label class="${v}" for="input">${r}</label>
      <div
        class="input"
        ?data-icon-before="${!!n}"
        ?data-icon-after="${!!s}"
      >
        ${n?d`<zw-icon
              class="input--icon"
              data-icon-before
              icon-name="${n}"
            ></zw-icon>`:null}
        <input
          class="input--field"
          .disabled="${i}"
          id="input"
          ?disabled="${i}"
          ?readonly="${t}"
          ?required="${h}"
          pattern="${_(c)}"
          placeholder="${_(b)}"
          value="${_(a)}"
          type="${o}"
          @input="${u}"
          data-size="${this.size}"
        />
        ${s?d`<zw-icon
              class="input--icon"
              data-icon-after
              icon-name="${s}"
            ></zw-icon>`:null}
      </div>
    `}};z.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      input {
        outline: none;
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .required {
        &::after {
          content: "*";
        }
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,tr];N([E("input")],z.prototype,"_input",2);N([l({type:String,reflect:!0})],z.prototype,"size",2);N([l({type:Boolean,reflect:!0})],z.prototype,"disabled",2);N([l({type:Boolean,reflect:!0})],z.prototype,"hiddenLabel",2);N([l({type:String,reflect:!0,attribute:"input-type"})],z.prototype,"inputType",2);N([l({type:String,reflect:!0})],z.prototype,"label",2);N([l({type:Boolean,reflect:!0,attribute:"read-only"})],z.prototype,"readOnly",2);N([l({type:Boolean,reflect:!0})],z.prototype,"required",2);N([l({type:String,reflect:!0})],z.prototype,"pattern",2);N([l({type:String,reflect:!0})],z.prototype,"placeholder",2);N([l({type:String,reflect:!0})],z.prototype,"value",2);N([l({type:String,reflect:!0,attribute:"icon-before"})],z.prototype,"iconBefore",2);N([l({type:String,reflect:!0,attribute:"icon-after"})],z.prototype,"iconAfter",2);z=N([y("zw-input")],z);const ir=p`
  :host {
    --radio-button-size: var(--space-10);
    font-family: var(--ds-default-font);
  }

  .radio-group {
    --_radio-button-size: var(--radio-button-size);

    display: inline-flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .radio-group--heading {
    font-size: var(--_radio-button-size);
  }

  .radio {
    position: relative;
    outline-offset: 2px;

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .radio--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding-inline-start: calc(var(--space-8) * 2);
    font-size: calc(var(--radio-label-font, var(--radio-button-size)) * 0.8);
    line-height: 1.25;
    font-family: var(--ds-default-font);
    color: var(--color-black);
    cursor: pointer;
  }

  .radio--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    font-size: var(--radio-button-size);
    line-height: 1;
    color: var(--color-primary);
    transform: translateY(-50%);
  }

  .radio--label::before {
    content: "";
    position: absolute;
  }

  .radio--label::before {
    inset-inline-start: 0;
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--color-primary);
    border-radius: 100%;
    background-color: var(--color-white);
  }

  .radio--input:disabled {
    cursor: default;

    & + .radio--label {
      cursor: default;
      color: var(--color-disabled);
    }

    & + .radio--label::before {
      color: var(--color-disabled);
      border-color: var(--color-disabled);
    }
  }

  .radio--input:enabled {
    &:checked + .radio--label::before {
      border-color: var(--color-primary);
    }

    &:hover + .radio--label::before {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-hover, 1.2));
    }

    &:active + .radio--label::before {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-active, 1.4));
    }

    &:checked + .radio--label > .radio--icon {
      display: inline-flex;
    }

    &:checked:hover + .radio--label > .radio--icon {
      color: var(--color-primary-on-container);
    }

    &:checked:active + .radio--label > .radio--icon {
      color: var(--color-primary-on-container);
    }
  }
`;var ar=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,he=(i,e,o,r)=>{for(var t=r>1?void 0:r?nr(e,o):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(t=(r?n(e,o,t):n(t))||t);return r&&t&&ar(e,o,t),t};let K=class extends f{constructor(){super(...arguments),this.disabled=!1,this.hiddenLabel=!1}_handleChange(){console.log({radioButtonValue:this._radioGroupNode.value})}render(){const{disabled:i,hiddenLabel:e,label:o,options:r,name:t,_handleChange:a}=this,n=g({"radio-group--heading":!0,"sr-only":e});return d`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
        <div class="${n}" id="a11y-radio-group">
          ${o}
        </div>
        ${r.map((s,c)=>Object.entries(s).map(([b,h])=>d`
              <div class="radio">
                <input
                  id="radio-${c}"
                  class="radio--input | sr-only"
                  .disabled="${i}"
                  name="${t}"
                  value="${b}"
                  type="radio"
                  @change="${a}"
                />
                <label class="radio--label" for="radio-${c}">
                  <zw-icon class="radio--icon" icon-name="check"></zw-icon>
                  <div>${h}</div>
                </label>
              </div>
            `))}
      </div>
    `}};K.styles=[p`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,ir];he([E("input")],K.prototype,"_radioGroupNode",2);he([l({type:String,reflect:!0})],K.prototype,"name",2);he([l({type:String,reflect:!0})],K.prototype,"label",2);he([l({type:Array,reflect:!0})],K.prototype,"options",2);he([l({type:Boolean,reflect:!0})],K.prototype,"disabled",2);he([l({type:Boolean,reflect:!0})],K.prototype,"hiddenLabel",2);K=he([y("zw-radio-group")],K);function dt(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const pt=JSON.stringify([{login:"Log In"},{signUp:"Sign Up"}]),$e=()=>{const i=document.querySelector("#theme-switcher-example-a");i==null||i.addEventListener("click",ht);const e=document.querySelector("#theme-switcher-example-b");e==null||e.addEventListener("click",lr);const o=document.querySelector("#theme-switcher-hsd");o==null||o.addEventListener("click",cr);const r=document.querySelector("#theme-switcher-ikea");r==null||r.addEventListener("click",dr);const t=document.querySelector("#theme-switcher-zw");t==null||t.addEventListener("click",sr)},ht=()=>{document.querySelector("#app").innerHTML=`
  <div class="page" data-theme-a>
    <div class="page-container">
      <pano-a-button id="theme-switcher-example-a" label="Example A" appearance="filled" theme="secondary" size="medium"></pano-a-button>
      <pano-a-button id="theme-switcher-example-b" label="Example B" appearance="filled" theme="secondary" size="medium"></pano-a-button>
      <pano-a-button id="theme-switcher-hsd" label="HSD" appearance="filled" theme="secondary" size="medium"></pano-a-button>
      <pano-a-button id="theme-switcher-ikea" label="Ikea" appearance="filled" theme="secondary" size="medium"></pano-a-button>
      <pano-a-button id="theme-switcher-zw" label="Zweitag" appearance="filled" theme="secondary" size="medium"></pano-a-button>
    </div>

    <div class="placeholder-image">
      <img class="image" src="${ut}">
    </div>

    <div class="login-form">

      <div class="headings">
        <img class="brand-image" src="${bt}">
        <h1>Welcome Back!</h1>
        <h2>Please enter your details</h2>
      </div>

      <pano-a-radio-group class="radio-group" name="radio-a" label="Account Method" hiddenlabel options="${dt(pt)}"></pano-a-radio-group>

      <pano-a-input label="Email" input-type="email" size="medium"></pano-a-input>
      <pano-a-input label="Passwort" input-type="password" size="medium"></pano-a-input>

      <div class="repel">
        <pano-a-checkbox label="Remember me"></pano-a-checkbox>
        <a href="#">Forgot Password?</a>
      </div>

      <div class="buttons">
        <pano-a-button full-width label="Log In" appearance="filled" theme="primary" size="large"></pano-a-button>
        <pano-a-button full-width label="Log In with Google" appearance="filled" theme="secondary" size="large"></pano-a-button>
      </div>

      <div class="link">
        Don't have an account?
        <a href="#"><strong>Sign up!<strong></a>
      </div>
    </div>
  </div>
  `,$e()},lr=()=>{document.querySelector("#app").innerHTML=`
<div class="page" data-theme-b>
  <div class="page-container">
    <pano-b-button id="theme-switcher-example-a" label="Example A" appearance="filled" theme="primary" size="medium"></pano-b-button>
    <pano-b-button id="theme-switcher-example-b" label="Example B" appearance="filled" theme="primary" size="medium"></pano-b-button>
    <pano-b-button id="theme-switcher-hsd" label="HSD" appearance="filled" theme="primary" size="medium"></pano-b-button>
    <pano-b-button id="theme-switcher-ikea" label="Ikea" appearance="filled" theme="primary" size="medium"></pano-b-button>
    <pano-b-button id="theme-switcher-zw" label="Zweitag" appearance="filled" theme="primary" size="medium"></pano-b-button>
  </div>

  <div class="placeholder-image">
    <img class="image" src="${yt}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${ft}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

    <pano-b-radio-group class="radio-group" name="radio-b" label="Account Method" hiddenlabel options="${dt(pt)}"></pano-b-radio-group>

    <pano-b-input label="Email" input-type="email" size="medium"></pano-b-input>
    <pano-b-input label="Passwort" input-type="password" size="medium"></pano-b-input>

    <div class="repel">
      <pano-b-checkbox label="Remember me"></pano-b-checkbox>
      <a href="#">Forgot Password?</a>
    </div>

    <div class="buttons">
      <pano-b-button full-width label="Log In" appearance="filled" theme="primary" size="large"></pano-b-button>
      <pano-b-button full-width label="Log In with Google" appearance="outline" theme="primary" size="large"></pano-b-button>
    </div>

    <div class="link">
      Don't have an account?
      <a href="#"><strong>Sign up!<strong></a>
    </div>
  </div>
</div>
`,$e()},cr=()=>{document.querySelector("#app").innerHTML=`
<div class="page" data-theme-hsd>
  <div class="page-container">
    <hsd-button id="theme-switcher-example-a" label="Example A" appearance="filled" theme="primary" size="medium"></hsd-button>
    <hsd-button id="theme-switcher-example-b" label="Example B" appearance="filled" theme="primary" size="medium"></hsd-button>
    <hsd-button id="theme-switcher-example-hsd" label="HSD" appearance="filled" theme="primary" size="medium"></hsd-button>
    <hsd-button id="theme-switcher-ikea" label="Ikea" appearance="filled" theme="primary" size="medium"></hsd-button>
    <hsd-button id="theme-switcher-zw" label="Zweitag" appearance="filled" theme="primary" size="medium"></hsd-button>
  </div>

  <div class="placeholder-image">
    <img class="image" src="${mt}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${vt}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

    <hsd-input label="Email" input-type="email" size="medium"></hsd-input>
    <hsd-input label="Passwort" input-type="password" size="medium"></hsd-input>

    <div class="repel">
      <hsd-checkbox label="Remember me"></hsd-checkbox>
      <a href="#">Forgot Password?</a>
    </div>

    <div class="buttons">
      <hsd-button full-width label="Log In" appearance="filled" theme="primary" size="large"></hsd-button>
      <hsd-button full-width label="Log In with Google" appearance="text" theme="primary" size="large"></hsd-button>
    </div>

    <div class="link">
      Don't have an account?
      <a href="#"><strong>Sign up!<strong></a>
    </div>
  </div>
</div>
`,$e()},sr=()=>{document.querySelector("#app").innerHTML=`
<div class="page" data-theme-zweitag>
  <div class="page-container">
      <zw-button id="theme-switcher-example-a" label="Example A" appearance="filled" theme="secondary" size="medium"></zw-button>
      <zw-button id="theme-switcher-example-b" label="Example B" appearance="filled" theme="secondary" size="medium"></zw-button>
      <zw-button id="theme-switcher-hsd" label="HSD" appearance="filled" theme="secondary" size="medium"></zw-button>
      <zw-button id="theme-switcher-ikea" label="Ikea" appearance="filled" theme="secondary" size="medium"></zw-button>
      <zw-button id="theme-switcher-zw" label="Zweitag" appearance="filled" theme="secondary" size="medium"></zw-button>
  </div>

  <div class="placeholder-image">
    <img class="image" src="${xt}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${gt}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

    <zw-input label="Email" input-type="email" size="medium"></zw-input>
    <zw-input label="Passwort" input-type="password" size="medium"></zw-input>

    <div class="repel">
      <zw-checkbox label="Remember me"></zw-checkbox>
      <a href="#">Forgot Password?</a>
    </div>

    <div class="buttons">
      <zw-button full-width label="Log In" appearance="filled" theme="primary" size="large"></zw-button>
      <zw-button full-width label="Log In with Google" appearance="outline" theme="primary" size="large"></zw-button>
    </div>

    <div class="link">
      Don't have an account?
      <a href="#"><strong>Sign up!<strong></a>
    </div>
  </div>
</div>
`,$e()},dr=()=>{document.querySelector("#app").innerHTML=`
<div class="page" data-theme-ikea>
  <div class="page-container">
    <ikea-button id="theme-switcher-example-a" label="Example A" appearance="filled" theme="secondary" size="medium"></ikea-button>
    <ikea-button id="theme-switcher-example-b" label="Example B" appearance="filled" theme="secondary" size="medium"></ikea-button>
    <ikea-button id="theme-switcher-hsd" label="HSD" appearance="filled" theme="secondary" size="medium"></ikea-button>
    <ikea-button id="theme-switcher-ikea" label="Ikea" appearance="filled" theme="secondary" size="medium"></ikea-button>
    <ikea-button id="theme-switcher-zw" label="Zweitag" appearance="filled" theme="secondary" size="medium"></ikea-button>
  </div>

  <div class="placeholder-image">
    <img class="image" src="${kt}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${$t}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

    <ikea-input label="Email" input-type="email" size="medium"></ikea-input>
    <ikea-input label="Passwort" input-type="password" size="medium"></ikea-input>

    <div class="repel">
      <ikea-checkbox label="Remember me"></ikea-checkbox>
      <a href="#">Forgot Password?</a>
    </div>

    <div class="buttons">
      <ikea-button full-width label="Log In" appearance="filled" theme="highlight" size="large"></ikea-button>
      <ikea-button full-width label="Log In with Google" appearance="filled" theme="primary" size="large"></ikea-button>
    </div>

    <div class="link">
      Don't have an account?
      <a href="#"><strong>Sign up!<strong></a>
    </div>
  </div>
</div>
`,$e()};ht();
