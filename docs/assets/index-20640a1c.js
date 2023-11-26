(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const Me="/panorama-demo/assets/logo-a-75185753.png",je="/panorama-demo/assets/teaser-image-a-4e1722dc.png",Re="/panorama-demo/assets/logo-b-a9bffacb.png",He="/panorama-demo/assets/teaser-image-b-ad67f50c.png";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis,de=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol(),be=new WeakMap;let Se=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(de&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=be.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&be.set(t,e))}return e}toString(){return this.cssText}};const Ie=i=>new Se(typeof i=="string"?i:i+"",void 0,pe),b=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,o,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new Se(t,i,pe)},De=(i,e)=>{if(de)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),o=X.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)}},fe=de?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ie(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:qe,defineProperty:We,getOwnPropertyDescriptor:Ve,getOwnPropertyNames:Ge,getOwnPropertySymbols:Ye,getPrototypeOf:Fe}=Object,L=globalThis,ye=L.trustedTypes,Ke=ye?ye.emptyScript:"",ne=L.reactiveElementPolyfillSupport,F=(i,e)=>i,ee={toAttribute(i,e){switch(e){case Boolean:i=i?Ke:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},he=(i,e)=>!qe(i,e),ve={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:he};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),L.litPropertyMetadata??(L.litPropertyMetadata=new WeakMap);let q=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ve){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&We(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:n}=Ve(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const c=o==null?void 0:o.call(this);n.call(this,a),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ve}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const e=Fe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const t=this.properties,r=[...Ge(t),...Ye(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(fe(o))}else e!==void 0&&t.push(fe(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return De(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){var n;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const a=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:ee).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){var n;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:ee;this._$Em=o,this[o]=c.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,r,o=!1,n){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??he)(o?n:this[e],t))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,a]of o)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$E_)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$ET()}catch(o){throw e=!1,this._$ET(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}};q.elementStyles=[],q.shadowRootOptions={mode:"open"},q[F("elementProperties")]=new Map,q[F("finalized")]=new Map,ne==null||ne({ReactiveElement:q}),(L.reactiveElementVersions??(L.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,te=K.trustedTypes,ge=te?te.createPolicy("lit-html",{createHTML:i=>i}):void 0,ze="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,Ee="?"+U,Je=`<${Ee}>`,R=document,J=()=>R.createComment(""),Z=i=>i===null||typeof i!="object"&&typeof i!="function",Oe=Array.isArray,Ze=i=>Oe(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ae=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,$e=/>/g,M=RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,_e=/"/g,Pe=/^(?:script|style|textarea|title)$/i,Qe=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),u=Qe(1),H=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ke=new WeakMap,j=R.createTreeWalker(R,129);function Ce(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ge!==void 0?ge.createHTML(e):e}const Xe=(i,e)=>{const t=i.length-1,r=[];let o,n=e===2?"<svg>":"",a=Y;for(let c=0;c<t;c++){const l=i[c];let d,h,p=-1,k=0;for(;k<l.length&&(a.lastIndex=k,h=a.exec(l),h!==null);)k=a.lastIndex,a===Y?h[1]==="!--"?a=me:h[1]!==void 0?a=$e:h[2]!==void 0?(Pe.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=M):h[3]!==void 0&&(a=M):a===M?h[0]===">"?(a=o??Y,p=-1):h[1]===void 0?p=-2:(p=a.lastIndex-h[2].length,d=h[1],a=h[3]===void 0?M:h[3]==='"'?_e:xe):a===_e||a===xe?a=M:a===me||a===$e?a=Y:(a=M,o=void 0);const B=a===M&&i[c+1].startsWith("/>")?" ":"";n+=a===Y?l+Je:p>=0?(r.push(d),l.slice(0,p)+ze+l.slice(p)+U+B):l+U+(p===-2?c:B)}return[Ce(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};let ce=class Te{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,a=0;const c=e.length-1,l=this.parts,[d,h]=Xe(e,t);if(this.el=Te.createElement(d,r),j.currentNode=this.el.content,t===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=j.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(ze)){const k=h[a++],B=o.getAttribute(p).split(U),Q=/([.?@])?(.*)/.exec(k);l.push({type:1,index:n,name:Q[2],strings:B,ctor:Q[1]==="."?tt:Q[1]==="?"?ot:Q[1]==="@"?rt:ie}),o.removeAttribute(p)}else p.startsWith(U)&&(l.push({type:6,index:n}),o.removeAttribute(p));if(Pe.test(o.tagName)){const p=o.textContent.split(U),k=p.length-1;if(k>0){o.textContent=te?te.emptyScript:"";for(let B=0;B<k;B++)o.append(p[B],J()),j.nextNode(),l.push({type:2,index:++n});o.append(p[k],J())}}}else if(o.nodeType===8)if(o.data===Ee)l.push({type:2,index:n});else{let p=-1;for(;(p=o.data.indexOf(U,p+1))!==-1;)l.push({type:7,index:n}),p+=U.length-1}n++}}static createElement(e,t){const r=R.createElement("template");return r.innerHTML=e,r}};function V(i,e,t=i,r){var a,c;if(e===H)return e;let o=r!==void 0?(a=t._$Co)==null?void 0:a[r]:t._$Cl;const n=Z(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((c=o==null?void 0:o._$AO)==null||c.call(o,!1),n===void 0?o=void 0:(o=new n(i),o._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=o:t._$Cl=o),o!==void 0&&(e=V(i,o._$AS(i,e.values),o,r)),e}let et=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??R).importNode(t,!0);j.currentNode=o;let n=j.nextNode(),a=0,c=0,l=r[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new ue(n,n.nextSibling,this,e):l.type===1?d=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(d=new it(n,this,e)),this._$AV.push(d),l=r[++c]}a!==(l==null?void 0:l.index)&&(n=j.nextNode(),a++)}return j.currentNode=R,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},ue=class Be{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),Z(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ze(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==f&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.$(R.createTextNode(e)),this._$AH=e}g(e){var n;const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ce.createElement(Ce(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(t);else{const a=new et(o,this),c=a.u(this.options);a.p(t),this.$(c),this._$AH=a}}_$AC(e){let t=ke.get(e.strings);return t===void 0&&ke.set(e.strings,t=new ce(e)),t}T(e){Oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new Be(this.k(J()),this.k(J()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},ie=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=f}_$AI(e,t=this,r,o){const n=this.strings;let a=!1;if(n===void 0)e=V(this,e,t,0),a=!Z(e)||e!==this._$AH&&e!==H,a&&(this._$AH=e);else{const c=e;let l,d;for(e=n[0],l=0;l<n.length-1;l++)d=V(this,c[r+l],t,l),d===H&&(d=this._$AH[l]),a||(a=!Z(d)||d!==this._$AH[l]),d===f?e=f:e!==f&&(e+=(d??"")+n[l+1]),this._$AH[l]=d}a&&!o&&this.O(e)}O(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class tt extends ie{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===f?void 0:e}}let ot=class extends ie{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}},rt=class extends ie{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=V(this,e,t,0)??f)===H)return;const r=this._$AH,o=e===f&&r!==f||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==f&&(r===f||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}};class it{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}}const se=K.litHtmlPolyfillSupport;se==null||se(ce,ue),(K.litHtmlVersions??(K.litHtmlVersions=[])).push("3.1.0");const nt=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=o=new ue(e.insertBefore(J(),n),n,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return H}}var Ae;g._$litElement$=!0,g.finalized=!0,(Ae=globalThis.litElementHydrateSupport)==null||Ae.call(globalThis,{LitElement:g});const le=globalThis.litElementPolyfillSupport;le==null||le({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},st=i=>(...e)=>({_$litDirective$:i,values:e});class lt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=st(class extends lt{constructor(i){var e;if(super(i),i.type!==at.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var r,o;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((r=this.st)!=null&&r.has(n))&&this.it.add(n);return this.render(e)}const t=i.element.classList;for(const n of this.it)n in e||(t.remove(n),this.it.delete(n));for(const n in e){const a=!!e[n];a===this.it.has(n)||(o=this.st)!=null&&o.has(n)||(a?(t.add(n),this.it.add(n)):(t.remove(n),this.it.delete(n)))}return H}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:he},dt=(i=ct,e,t)=>{const{kind:r,metadata:o}=t;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(t.name,i),r==="accessor"){const{name:a}=t;return{set(c){const l=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,l,i)},init(c){return c!==void 0&&this.C(a,void 0,i),c}}}if(r==="setter"){const{name:a}=t;return function(c){const l=this[a];e.call(this,c),this.requestUpdate(a,l,i)}}throw Error("Unsupported decorator location: "+r)};function s(i){return(e,t)=>typeof t=="object"?dt(i,e,t):((r,o,n)=>{const a=o.hasOwnProperty(n);return o.constructor.createProperty(n,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(o,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=(i,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(i,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(i,e){return(t,r,o)=>{const n=a=>{var c;return((c=a.renderRoot)==null?void 0:c.querySelector(i))??null};if(e){const{get:a,set:c}=typeof r=="object"?t:o??(()=>{const l=Symbol();return{get(){return this[l]},set(d){this[l]=d}}})();return we(t,r,{get(){let l=a.call(this);return l===void 0&&(l=n(this),(l!==null||this.hasUpdated)&&c.call(this,l)),l}})}return we(t,r,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=i=>i??f;b``;b``;var pt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Ue=(i,e,t,r)=>{for(var o=r>1?void 0:r?ht(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&pt(e,t,o),o};let oe=class extends g{render(){const{iconName:i}=this;return u`<span class="material-symbols-outlined">${i}</span>`}};oe.styles=b`
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
  `;Ue([s({type:String,reflect:!0,attribute:"icon-name"})],oe.prototype,"iconName",2);oe=Ue([E("pano-a-icon")],oe);const ut=b`
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

  .button:not(:disabled):where(:focus) {
    filter: brightness(1.1);
  }

  .button:not(:disabled):where(:hover) {
    filter: brightness(var(--interaction-state-hover));
  }

  .button:not(:disabled):where(:active) {
    filter: brightness(var(--interaction-state-active));
  }

  .button[data-icon-only] {
    aspect-ratio: 1;
  }

  .button:where([data-theme="primary"]) {
    --button-main-color: var(--color-primary);
    --button-on-main-color: var(--color-on-primary);
    --button-container-color: var(--color-primary-container);
    --button-on-container-color: var(--color-primary-on-container);
  }

  .button:where([data-theme="secondary"]) {
    --button-main-color: var(--color-secondary);
    --button-on-main-color: var(--color-on-secondary);
    --button-container-color: var(--color-secondary-container);
    --button-on-container-color: var(--color-secondary-on-container);
  }

  .button:where([data-appearance="filled"]) {
    --button-color: var(--button-on-main-color);
    --button-border-color: transparent;
    --button-background-color: var(--button-main-color);
  }

  .button:where([data-size="medium"]) {
    --button-height: calc(var(--size-factor-medium) * var(--space-12));
  }
`;var bt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,A=(i,e,t,r)=>{for(var o=r>1?void 0:r?ft(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&bt(e,t,o),o};let m=class extends g{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.fullWidth=!1,this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:i,iconBefore:e,iconAfter:t,label:r,href:o,fullWidth:n,disabled:a}=this,c=N({"button--text":!0,"sr-only":i}),l=u`
      <pano-a-icon icon-name="${e}"></pano-a-icon>
      <span class="${c}"> ${r} </span>
      ${i?null:u`<pano-a-icon icon-name="${t}"></pano-a-icon>`}
    `;return o?u`
        <a
          class="button"
          href="${o}"
          ?data-icon-only="${i}"
          ?data-full-width="${n}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${l}
        </a>
      `:u`
        <button
          class="button"
          ?disabled="${a}"
          ?data-icon-only="${i}"
          ?data-full-width="${n}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${l}
        </button>
      `}};m.styles=[b`
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
    `,ut];A([s({type:String,reflect:!0})],m.prototype,"appearance",2);A([s({type:String,reflect:!0})],m.prototype,"size",2);A([s({type:String,reflect:!0})],m.prototype,"theme",2);A([s({type:String,reflect:!0})],m.prototype,"label",2);A([s({type:String,reflect:!0})],m.prototype,"buttonType",2);A([s({type:Boolean,reflect:!0,attribute:"icon-only"})],m.prototype,"iconOnly",2);A([s({type:String,reflect:!0,attribute:"icon-before"})],m.prototype,"iconBefore",2);A([s({type:Boolean,reflect:!0,attribute:"full-width"})],m.prototype,"fullWidth",2);A([s({type:String,reflect:!0,attribute:"icon-after"})],m.prototype,"iconAfter",2);A([s({type:String,reflect:!0})],m.prototype,"href",2);A([s({type:Boolean,reflect:!0})],m.prototype,"disabled",2);m=A([E("pano-a-button")],m);const yt=b`
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
`;var vt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,T=(i,e,t,r)=>{for(var o=r>1?void 0:r?gt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&vt(e,t,o),o};let z=class extends g{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:i,indeterminate:e}=this._checkboxNode;this.checked=i,this.indeterminate=e}render(){const{checked:i,disabled:e,hiddenLabel:t,indeterminate:r,label:o,name:n,value:a,_handleChange:c}=this,l=N({"checkbox--label":!0,"sr-only":t});return u`
      <div class="checkbox">
        <input
          id="checkbox"
          class="checkbox--input | sr-only"
          .disabled="${e}"
          .checked="${i}"
          aria-checked="${r?"mixed":i}"
          name="${n}"
          value="${a}"
          type="checkbox"
          @change="${c}"
        />
        <label class="${l}" for="checkbox">
          <pano-a-icon
            class="checkbox--icon"
            icon-name="${r?"remove":"check"}"
          ></pano-a-icon>
          <div>${o}</div>
        </label>
      </div>
    `}};z.styles=[b`
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
    `,yt];T([G("input")],z.prototype,"_checkboxNode",2);T([s({type:Boolean,reflect:!0})],z.prototype,"checked",2);T([s({type:Boolean,reflect:!0})],z.prototype,"disabled",2);T([s({type:Boolean,reflect:!0,attribute:"hidden-label"})],z.prototype,"hiddenLabel",2);T([s({type:Boolean,reflect:!0})],z.prototype,"indeterminate",2);T([s({type:String,reflect:!0})],z.prototype,"label",2);T([s({type:String,reflect:!0})],z.prototype,"name",2);T([s({type:String,reflect:!0})],z.prototype,"value",2);z=T([E("pano-a-checkbox")],z);const mt=b`
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
`;var $t=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,x=(i,e,t,r)=>{for(var o=r>1?void 0:r?xt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&$t(e,t,o),o};let y=class extends g{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:i}){this.value=i.value}render(){const{disabled:i,hiddenLabel:e,inputType:t,label:r,readOnly:o,value:n,iconBefore:a,iconAfter:c,pattern:l,placeholder:d,required:h,_handleInput:p}=this,k=N({"input--label":!0,required:h,"sr-only":e});return u`
      <label class="${k}" for="input">${r}</label>
      <div
        class="input"
        ?data-icon-before="${!!a}"
        ?data-icon-after="${!!c}"
      >
        ${a?u`<pano-a-icon
              class="input--icon"
              data-icon-before
              icon-name="${a}"
            ></pano-a-icon>`:null}
        <input
          class="input--field"
          .disabled="${i}"
          id="input"
          ?disabled="${i}"
          ?readonly="${o}"
          ?required="${h}"
          pattern="${W(l)}"
          placeholder="${W(d)}"
          value="${W(n)}"
          type="${t}"
          @input="${p}"
          data-size="${this.size}"
        />
        ${c?u`<pano-a-icon
              class="input--icon"
              data-icon-after
              icon-name="${c}"
            ></pano-a-icon>`:null}
      </div>
    `}};y.styles=[b`
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
    `,mt];x([G("input")],y.prototype,"_input",2);x([s({type:String,reflect:!0})],y.prototype,"size",2);x([s({type:Boolean,reflect:!0})],y.prototype,"disabled",2);x([s({type:Boolean,reflect:!0})],y.prototype,"hiddenLabel",2);x([s({type:String,reflect:!0,attribute:"input-type"})],y.prototype,"inputType",2);x([s({type:String,reflect:!0})],y.prototype,"label",2);x([s({type:Boolean,reflect:!0,attribute:"read-only"})],y.prototype,"readOnly",2);x([s({type:Boolean,reflect:!0})],y.prototype,"required",2);x([s({type:String,reflect:!0})],y.prototype,"pattern",2);x([s({type:String,reflect:!0})],y.prototype,"placeholder",2);x([s({type:String,reflect:!0})],y.prototype,"value",2);x([s({type:String,reflect:!0,attribute:"icon-before"})],y.prototype,"iconBefore",2);x([s({type:String,reflect:!0,attribute:"icon-after"})],y.prototype,"iconAfter",2);y=x([E("pano-a-input")],y);const _t=b`
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
`;var kt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,I=(i,e,t,r)=>{for(var o=r>1?void 0:r?wt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&kt(e,t,o),o};let P=class extends g{constructor(){super(...arguments),this.disabled=!1,this.hiddenLabel=!1}_handleChange(){console.log({radioButtonValue:this._radioGroupNode.value})}render(){const{disabled:i,hiddenLabel:e,label:t,options:r,name:o,_handleChange:n}=this,a=N({"radio-group--heading":!0,"sr-only":e});return u`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
        <div class="${a}" id="a11y-radio-group">
          ${t}
        </div>
        ${r.map((c,l)=>Object.entries(c).map(([d,h])=>u`
              <div class="radio">
                <input
                  id="radio-${l}"
                  class="radio--input | sr-only"
                  .disabled="${i}"
                  name="${o}"
                  value="${d}"
                  type="radio"
                  @change="${n}"
                />
                <label class="radio--label" for="radio-${l}">
                  <pano-a-icon
                    class="radio--icon"
                    icon-name="check"
                  ></pano-a-icon>
                  <div>${h}</div>
                </label>
              </div>
            `))}
      </div>
    `}};P.styles=[b`
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
    `,_t];I([G("input")],P.prototype,"_radioGroupNode",2);I([s({type:String,reflect:!0})],P.prototype,"name",2);I([s({type:String,reflect:!0})],P.prototype,"label",2);I([s({type:Array,reflect:!0})],P.prototype,"options",2);I([s({type:Boolean,reflect:!0})],P.prototype,"disabled",2);I([s({type:Boolean,reflect:!0})],P.prototype,"hiddenLabel",2);P=I([E("pano-a-radio-group")],P);var At=Object.defineProperty,St=Object.getOwnPropertyDescriptor,Le=(i,e,t,r)=>{for(var o=r>1?void 0:r?St(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&At(e,t,o),o};let re=class extends g{render(){const{iconName:i}=this;return u`<span class="material-symbols-outlined">${i}</span>`}};re.styles=b`
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
  `;Le([s({type:String,reflect:!0,attribute:"icon-name"})],re.prototype,"iconName",2);re=Le([E("pano-b-icon")],re);const zt=b`
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

  .button:not(:disabled):where(:focus) {
    filter: brightness(1.1);
  }

  .button:not(:disabled):where(:hover) {
    filter: brightness(var(--interaction-state-hover));
  }

  .button:not(:disabled):where(:active) {
    filter: brightness(var(--interaction-state-active));
  }

  .button[data-icon-only] {
    aspect-ratio: 1;
  }

  .button:where([data-theme="primary"]) {
    --button-main-color: var(--color-primary);
    --button-on-main-color: var(--color-on-primary);
    --button-container-color: var(--color-primary-container);
    --button-on-container-color: var(--color-primary-on-container);
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
`;var Et=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,S=(i,e,t,r)=>{for(var o=r>1?void 0:r?Ot(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&Et(e,t,o),o};let $=class extends g{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.fullWidth=!1,this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:i,iconBefore:e,iconAfter:t,label:r,href:o,fullWidth:n,disabled:a}=this,c=N({"button--text":!0,"sr-only":i}),l=u`
      <pano-b-icon icon-name="${e}"></pano-b-icon>
      <span class="${c}"> ${r} </span>
      ${i?null:u`<pano-b-icon icon-name="${t}"></pano-b-icon>`}
    `;return o?u`
        <a
          class="button"
          href="${o}"
          ?data-icon-only="${i}"
          ?data-full-width="${n}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${l}
        </a>
      `:u`
        <button
          class="button"
          ?disabled="${a}"
          ?data-icon-only="${i}"
          ?data-full-width="${n}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${l}
        </button>
      `}};$.styles=[b`
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
    `,zt];S([s({type:String,reflect:!0})],$.prototype,"appearance",2);S([s({type:String,reflect:!0})],$.prototype,"size",2);S([s({type:String,reflect:!0})],$.prototype,"theme",2);S([s({type:String,reflect:!0})],$.prototype,"label",2);S([s({type:String,reflect:!0})],$.prototype,"buttonType",2);S([s({type:Boolean,reflect:!0,attribute:"icon-only"})],$.prototype,"iconOnly",2);S([s({type:String,reflect:!0,attribute:"icon-before"})],$.prototype,"iconBefore",2);S([s({type:Boolean,reflect:!0,attribute:"full-width"})],$.prototype,"fullWidth",2);S([s({type:String,reflect:!0,attribute:"icon-after"})],$.prototype,"iconAfter",2);S([s({type:String,reflect:!0})],$.prototype,"href",2);S([s({type:Boolean,reflect:!0})],$.prototype,"disabled",2);$=S([E("pano-b-button")],$);const Pt=b`
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
`;var Ct=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,O=(i,e,t,r)=>{for(var o=r>1?void 0:r?Tt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&Ct(e,t,o),o};let w=class extends g{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:i,indeterminate:e}=this._checkboxNode;this.checked=i,this.indeterminate=e}render(){const{checked:i,disabled:e,hiddenLabel:t,indeterminate:r,label:o,name:n,value:a,_handleChange:c}=this,l=N({"checkbox--label":!0,"sr-only":t});return u`
      <div class="checkbox" data-size="${this.size}">
        <input
          id="checkbox"
          class="checkbox--input | sr-only"
          .disabled="${e}"
          .checked="${i}"
          aria-checked="${r?"mixed":i}"
          name="${n}"
          value="${a}"
          type="checkbox"
          @change="${c}"
        />
        <label class="${l}" for="checkbox">
          <pano-b-icon
            class="checkbox--icon"
            icon-name="${r?"remove":"check"}"
          ></pano-b-icon>
          <div>${o}</div>
        </label>
      </div>
    `}};w.styles=[b`
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
    `,Pt];O([G("input")],w.prototype,"_checkboxNode",2);O([s({type:String,reflect:!0})],w.prototype,"size",2);O([s({type:Boolean,reflect:!0})],w.prototype,"checked",2);O([s({type:Boolean,reflect:!0})],w.prototype,"disabled",2);O([s({type:Boolean,reflect:!0,attribute:"hidden-label"})],w.prototype,"hiddenLabel",2);O([s({type:Boolean,reflect:!0})],w.prototype,"indeterminate",2);O([s({type:String,reflect:!0})],w.prototype,"label",2);O([s({type:String,reflect:!0})],w.prototype,"name",2);O([s({type:String,reflect:!0})],w.prototype,"value",2);w=O([E("pano-b-checkbox")],w);const Bt=b`
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
`;var Ut=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,_=(i,e,t,r)=>{for(var o=r>1?void 0:r?Lt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&Ut(e,t,o),o};let v=class extends g{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:i}){this.value=i.value}render(){const{disabled:i,hiddenLabel:e,inputType:t,label:r,readOnly:o,value:n,iconBefore:a,iconAfter:c,pattern:l,placeholder:d,required:h,_handleInput:p}=this,k=N({"input--label":!0,required:h,"sr-only":e});return u`
      <label class="${k}" for="input">${r}</label>
      <div
        class="input"
        ?data-icon-before="${!!a}"
        ?data-icon-after="${!!c}"
      >
        ${a?u`<pano-b-icon
              class="input--icon"
              data-icon-before
              icon-name="${a}"
            ></pano-b-icon>`:null}
        <input
          class="input--field"
          .disabled="${i}"
          id="input"
          ?disabled="${i}"
          ?readonly="${o}"
          ?required="${h}"
          pattern="${W(l)}"
          placeholder="${W(d)}"
          value="${W(n)}"
          type="${t}"
          @input="${p}"
          data-size="${this.size}"
        />
        ${c?u`<pano-b-icon
              class="input--icon"
              data-icon-after
              icon-name="${c}"
            ></pano-b-icon>`:null}
      </div>
    `}};v.styles=[b`
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
    `,Bt];_([G("input")],v.prototype,"_input",2);_([s({type:String,reflect:!0})],v.prototype,"size",2);_([s({type:Boolean,reflect:!0})],v.prototype,"disabled",2);_([s({type:Boolean,reflect:!0})],v.prototype,"hiddenLabel",2);_([s({type:String,reflect:!0,attribute:"input-type"})],v.prototype,"inputType",2);_([s({type:String,reflect:!0})],v.prototype,"label",2);_([s({type:Boolean,reflect:!0,attribute:"read-only"})],v.prototype,"readOnly",2);_([s({type:Boolean,reflect:!0})],v.prototype,"required",2);_([s({type:String,reflect:!0})],v.prototype,"pattern",2);_([s({type:String,reflect:!0})],v.prototype,"placeholder",2);_([s({type:String,reflect:!0})],v.prototype,"value",2);_([s({type:String,reflect:!0,attribute:"icon-before"})],v.prototype,"iconBefore",2);_([s({type:String,reflect:!0,attribute:"icon-after"})],v.prototype,"iconAfter",2);v=_([E("pano-b-input")],v);const Nt=b`
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
`;var Mt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,D=(i,e,t,r)=>{for(var o=r>1?void 0:r?jt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&Mt(e,t,o),o};let C=class extends g{constructor(){super(...arguments),this.disabled=!1,this.hiddenLabel=!1}_handleChange(){console.log({radioButtonValue:this._radioGroupNode.value})}render(){const{disabled:i,hiddenLabel:e,label:t,options:r,name:o,_handleChange:n}=this,a=N({"radio-group--heading":!0,"sr-only":e});return u`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
        <div class="${a}" id="a11y-radio-group">
          ${t}
        </div>
        ${r.map((c,l)=>Object.entries(c).map(([d,h])=>u`
              <div class="radio">
                <input
                  id="radio-${l}"
                  class="radio--input | sr-only"
                  .disabled="${i}"
                  name="${o}"
                  value="${d}"
                  type="radio"
                  @change="${n}"
                />
                <label class="radio--label" for="radio-${l}">
                  <pano-b-icon
                    class="radio--icon"
                    icon-name="check"
                  ></pano-b-icon>
                  <div>${h}</div>
                </label>
              </div>
            `))}
      </div>
    `}};C.styles=[b`
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
    `,Nt];D([G("input")],C.prototype,"_radioGroupNode",2);D([s({type:String,reflect:!0})],C.prototype,"name",2);D([s({type:String,reflect:!0})],C.prototype,"label",2);D([s({type:Array,reflect:!0})],C.prototype,"options",2);D([s({type:Boolean,reflect:!0})],C.prototype,"disabled",2);D([s({type:Boolean,reflect:!0})],C.prototype,"hiddenLabel",2);C=D([E("pano-b-radio-group")],C);const Ne=()=>{document.querySelector("#app").innerHTML=`
  <div class="page" data-theme-a>
    <div class="page-container">
      <pano-a-button id="theme-switcher" label="Switch to Example B" appearance="filled" theme="secondary" size="medium"></pano-a-button>
    </div>

    <div class="placeholder-image">
      <img class="image" src="${je}">
    </div>

    <div class="login-form">

      <div class="headings">
        <img class="brand-image" src="${Me}">
        <h1>Welcome Back!</h1>
        <h2>Please enter your details</h2>
      </div>

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
  `,document.querySelector("#theme-switcher").addEventListener("click",Rt)},Rt=()=>{document.querySelector("#app").innerHTML=`
<div class="page" data-theme-b>
  <div class="page-container">
    <pano-b-button id="theme-switcher" label="Switch to Example A" appearance="filled" theme="primary" size="medium"></pano-b-button>
  </div>

  <div class="placeholder-image">
    <img class="image" src="${He}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${Re}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

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
`,document.querySelector("#theme-switcher").addEventListener("click",Ne)};Ne();
