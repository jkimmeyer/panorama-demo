(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const Le="/panorama-demo/assets/panorama-design-system-75185753.png",je="/panorama-demo/assets/greyscale-image-4e1722dc.png";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis,de=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol(),be=new WeakMap;let Se=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(de&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=be.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&be.set(t,e))}return e}toString(){return this.cssText}};const Me=i=>new Se(typeof i=="string"?i:i+"",void 0,pe),b=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,o,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new Se(t,i,pe)},Re=(i,e)=>{if(de)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),o=X.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)}},fe=de?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Me(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:He,defineProperty:De,getOwnPropertyDescriptor:Ie,getOwnPropertyNames:qe,getOwnPropertySymbols:Ve,getPrototypeOf:We}=Object,N=globalThis,ye=N.trustedTypes,Ge=ye?ye.emptyScript:"",ne=N.reactiveElementPolyfillSupport,K=(i,e)=>i,ee={toAttribute(i,e){switch(e){case Boolean:i=i?Ge:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},he=(i,e)=>!He(i,e),ve={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:he};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),N.litPropertyMetadata??(N.litPropertyMetadata=new WeakMap);let q=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ve){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&De(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:n}=Ie(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const c=o==null?void 0:o.call(this);n.call(this,a),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ve}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const e=We(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const t=this.properties,r=[...qe(t),...Ve(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(fe(o))}else e!==void 0&&t.push(fe(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Re(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){var n;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const a=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:ee).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){var n;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:ee;this._$Em=o,this[o]=c.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,r,o=!1,n){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??he)(o?n:this[e],t))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,a]of o)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$E_)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$ET()}catch(o){throw e=!1,this._$ET(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}};q.elementStyles=[],q.shadowRootOptions={mode:"open"},q[K("elementProperties")]=new Map,q[K("finalized")]=new Map,ne==null||ne({ReactiveElement:q}),(N.reactiveElementVersions??(N.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,te=F.trustedTypes,ge=te?te.createPolicy("lit-html",{createHTML:i=>i}):void 0,ze="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,Ee="?"+U,Ye=`<${Ee}>`,R=document,J=()=>R.createComment(""),Z=i=>i===null||typeof i!="object"&&typeof i!="function",Oe=Array.isArray,Ke=i=>Oe(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ae=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,$e=/>/g,j=RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,_e=/"/g,Pe=/^(?:script|style|textarea|title)$/i,Fe=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),u=Fe(1),H=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ke=new WeakMap,M=R.createTreeWalker(R,129);function Ce(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ge!==void 0?ge.createHTML(e):e}const Je=(i,e)=>{const t=i.length-1,r=[];let o,n=e===2?"<svg>":"",a=Y;for(let c=0;c<t;c++){const l=i[c];let d,h,p=-1,O=0;for(;O<l.length&&(a.lastIndex=O,h=a.exec(l),h!==null);)O=a.lastIndex,a===Y?h[1]==="!--"?a=me:h[1]!==void 0?a=$e:h[2]!==void 0?(Pe.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=j):h[3]!==void 0&&(a=j):a===j?h[0]===">"?(a=o??Y,p=-1):h[1]===void 0?p=-2:(p=a.lastIndex-h[2].length,d=h[1],a=h[3]===void 0?j:h[3]==='"'?_e:xe):a===_e||a===xe?a=j:a===me||a===$e?a=Y:(a=j,o=void 0);const B=a===j&&i[c+1].startsWith("/>")?" ":"";n+=a===Y?l+Ye:p>=0?(r.push(d),l.slice(0,p)+ze+l.slice(p)+U+B):l+U+(p===-2?c:B)}return[Ce(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};let ce=class Te{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,a=0;const c=e.length-1,l=this.parts,[d,h]=Je(e,t);if(this.el=Te.createElement(d,r),M.currentNode=this.el.content,t===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=M.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(ze)){const O=h[a++],B=o.getAttribute(p).split(U),Q=/([.?@])?(.*)/.exec(O);l.push({type:1,index:n,name:Q[2],strings:B,ctor:Q[1]==="."?Qe:Q[1]==="?"?Xe:Q[1]==="@"?et:ie}),o.removeAttribute(p)}else p.startsWith(U)&&(l.push({type:6,index:n}),o.removeAttribute(p));if(Pe.test(o.tagName)){const p=o.textContent.split(U),O=p.length-1;if(O>0){o.textContent=te?te.emptyScript:"";for(let B=0;B<O;B++)o.append(p[B],J()),M.nextNode(),l.push({type:2,index:++n});o.append(p[O],J())}}}else if(o.nodeType===8)if(o.data===Ee)l.push({type:2,index:n});else{let p=-1;for(;(p=o.data.indexOf(U,p+1))!==-1;)l.push({type:7,index:n}),p+=U.length-1}n++}}static createElement(e,t){const r=R.createElement("template");return r.innerHTML=e,r}};function W(i,e,t=i,r){var a,c;if(e===H)return e;let o=r!==void 0?(a=t._$Co)==null?void 0:a[r]:t._$Cl;const n=Z(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((c=o==null?void 0:o._$AO)==null||c.call(o,!1),n===void 0?o=void 0:(o=new n(i),o._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=o:t._$Cl=o),o!==void 0&&(e=W(i,o._$AS(i,e.values),o,r)),e}let Ze=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??R).importNode(t,!0);M.currentNode=o;let n=M.nextNode(),a=0,c=0,l=r[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new ue(n,n.nextSibling,this,e):l.type===1?d=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(d=new tt(n,this,e)),this._$AV.push(d),l=r[++c]}a!==(l==null?void 0:l.index)&&(n=M.nextNode(),a++)}return M.currentNode=R,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},ue=class Be{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),Z(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ke(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==f&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.$(R.createTextNode(e)),this._$AH=e}g(e){var n;const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ce.createElement(Ce(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(t);else{const a=new Ze(o,this),c=a.u(this.options);a.p(t),this.$(c),this._$AH=a}}_$AC(e){let t=ke.get(e.strings);return t===void 0&&ke.set(e.strings,t=new ce(e)),t}T(e){Oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new Be(this.k(J()),this.k(J()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},ie=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=f}_$AI(e,t=this,r,o){const n=this.strings;let a=!1;if(n===void 0)e=W(this,e,t,0),a=!Z(e)||e!==this._$AH&&e!==H,a&&(this._$AH=e);else{const c=e;let l,d;for(e=n[0],l=0;l<n.length-1;l++)d=W(this,c[r+l],t,l),d===H&&(d=this._$AH[l]),a||(a=!Z(d)||d!==this._$AH[l]),d===f?e=f:e!==f&&(e+=(d??"")+n[l+1]),this._$AH[l]=d}a&&!o&&this.O(e)}O(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class Qe extends ie{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===f?void 0:e}}let Xe=class extends ie{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}};class et extends ie{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=W(this,e,t,0)??f)===H)return;const r=this._$AH,o=e===f&&r!==f||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==f&&(r===f||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class tt{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const se=F.litHtmlPolyfillSupport;se==null||se(ce,ue),(F.litHtmlVersions??(F.litHtmlVersions=[])).push("3.1.0");const ot=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=o=new ue(e.insertBefore(J(),n),n,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ot(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return H}}var we;g._$litElement$=!0,g.finalized=!0,(we=globalThis.litElementHydrateSupport)==null||we.call(globalThis,{LitElement:g});const le=globalThis.litElementPolyfillSupport;le==null||le({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},it=i=>(...e)=>({_$litDirective$:i,values:e});class nt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=it(class extends nt{constructor(i){var e;if(super(i),i.type!==rt.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var r,o;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((r=this.st)!=null&&r.has(n))&&this.it.add(n);return this.render(e)}const t=i.element.classList;for(const n of this.it)n in e||(t.remove(n),this.it.delete(n));for(const n in e){const a=!!e[n];a===this.it.has(n)||(o=this.st)!=null&&o.has(n)||(a?(t.add(n),this.it.add(n)):(t.remove(n),this.it.delete(n)))}return H}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:he},st=(i=at,e,t)=>{const{kind:r,metadata:o}=t;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(t.name,i),r==="accessor"){const{name:a}=t;return{set(c){const l=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,l,i)},init(c){return c!==void 0&&this.C(a,void 0,i),c}}}if(r==="setter"){const{name:a}=t;return function(c){const l=this[a];e.call(this,c),this.requestUpdate(a,l,i)}}throw Error("Unsupported decorator location: "+r)};function s(i){return(e,t)=>typeof t=="object"?st(i,e,t):((r,o,n)=>{const a=o.hasOwnProperty(n);return o.constructor.createProperty(n,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(o,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=(i,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(i,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(i,e){return(t,r,o)=>{const n=a=>{var c;return((c=a.renderRoot)==null?void 0:c.querySelector(i))??null};if(e){const{get:a,set:c}=typeof r=="object"?t:o??(()=>{const l=Symbol();return{get(){return this[l]},set(d){this[l]=d}}})();return Ae(t,r,{get(){let l=a.call(this);return l===void 0&&(l=n(this),(l!==null||this.hasUpdated)&&c.call(this,l)),l}})}return Ae(t,r,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=i=>i??f;b``;b``;var lt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Ue=(i,e,t,r)=>{for(var o=r>1?void 0:r?ct(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&lt(e,t,o),o};let oe=class extends g{render(){const{iconName:i}=this;return u`<span class="material-symbols-outlined">${i}</span>`}};oe.styles=b`
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
  `;Ue([s({type:String,reflect:!0,attribute:"icon-name"})],oe.prototype,"iconName",2);oe=Ue([z("pano-a-icon")],oe);const dt=b`
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

  .button[icon-only] {
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
`;var pt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,w=(i,e,t,r)=>{for(var o=r>1?void 0:r?ht(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&pt(e,t,o),o};let x=class extends g{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:i,iconBefore:e,iconAfter:t,label:r,href:o,disabled:n}=this,a=L({"button--text":!0,"sr-only":i}),c=u`
      <pano-a-icon icon-name="${e}"></pano-a-icon>
      <span class="${a}"> ${r} </span>
      ${i?null:u`<pano-a-icon icon-name="${t}"></pano-a-icon>`}
    `;return o?u`
        <a
          class="button"
          href="${o}"
          ?icon-only="${i}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </a>
      `:u`
        <button
          class="button"
          ?disabled="${n}"
          ?icon-only="${i}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </button>
      `}};x.styles=[b`
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
    `,dt];w([s({type:String,reflect:!0})],x.prototype,"appearance",2);w([s({type:String,reflect:!0})],x.prototype,"size",2);w([s({type:String,reflect:!0})],x.prototype,"theme",2);w([s({type:String,reflect:!0})],x.prototype,"label",2);w([s({type:String,reflect:!0})],x.prototype,"buttonType",2);w([s({type:Boolean,reflect:!0})],x.prototype,"iconOnly",2);w([s({type:String,reflect:!0})],x.prototype,"iconBefore",2);w([s({type:String,reflect:!0})],x.prototype,"iconAfter",2);w([s({type:String,reflect:!0})],x.prototype,"href",2);w([s({type:Boolean,reflect:!0})],x.prototype,"disabled",2);x=w([z("pano-a-button")],x);const ut=b`
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

  .checkbox--input:hover + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .checkbox--input:active + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  /* stylelint-disable-next-line selector-max-combinators */
  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input:checked:hover + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }

  .checkbox--input:checked:active + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }
`;var bt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,E=(i,e,t,r)=>{for(var o=r>1?void 0:r?ft(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&bt(e,t,o),o};let k=class extends g{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:i,indeterminate:e}=this._checkboxNode;this.checked=i,this.indeterminate=e}render(){const{checked:i,disabled:e,hiddenLabel:t,indeterminate:r,label:o,name:n,value:a,_handleChange:c}=this,l=L({"checkbox--label":!0,"sr-only":t});return u`
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
          <pano-a-icon class="checkbox--icon" icon-name="check"></pano-a-icon>
          <div>${o}</div>
        </label>
      </div>
    `}};k.styles=[b`
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
    `,ut];E([G("input")],k.prototype,"_checkboxNode",2);E([s({type:String,reflect:!0})],k.prototype,"size",2);E([s({type:Boolean,reflect:!0})],k.prototype,"checked",2);E([s({type:Boolean,reflect:!0})],k.prototype,"disabled",2);E([s({type:Boolean,reflect:!0,attribute:"hidden-label"})],k.prototype,"hiddenLabel",2);E([s({type:Boolean,reflect:!0})],k.prototype,"indeterminate",2);E([s({type:String,reflect:!0})],k.prototype,"label",2);E([s({type:String,reflect:!0})],k.prototype,"name",2);E([s({type:String,reflect:!0})],k.prototype,"value",2);k=E([z("pano-a-checkbox")],k);const yt=b`
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
    border: 1px solid var(--color-primary);
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
`;var vt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,m=(i,e,t,r)=>{for(var o=r>1?void 0:r?gt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&vt(e,t,o),o};let y=class extends g{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:i}){this.value=i.value}render(){const{disabled:i,hiddenLabel:e,inputType:t,label:r,readOnly:o,value:n,iconBefore:a,iconAfter:c,pattern:l,placeholder:d,_handleInput:h}=this,p=L({"input--label":!0,"sr-only":e});return u`
      <label class="${p}" for="input">${r}</label>
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
          ?read-only="${o}"
          pattern="${V(l)}"
          placeholder="${V(d)}"
          value="${V(n)}"
          type="${t}"
          @input="${h}"
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
    `,yt];m([G("input")],y.prototype,"_input",2);m([s({type:String,reflect:!0})],y.prototype,"size",2);m([s({type:Boolean,reflect:!0})],y.prototype,"disabled",2);m([s({type:Boolean,reflect:!0})],y.prototype,"hiddenLabel",2);m([s({type:String,reflect:!0,attribute:"input-type"})],y.prototype,"inputType",2);m([s({type:String,reflect:!0})],y.prototype,"label",2);m([s({type:Boolean,reflect:!0,attribute:"read-only"})],y.prototype,"readOnly",2);m([s({type:Boolean,reflect:!0})],y.prototype,"required",2);m([s({type:String,reflect:!0})],y.prototype,"pattern",2);m([s({type:String,reflect:!0})],y.prototype,"placeholder",2);m([s({type:String,reflect:!0})],y.prototype,"value",2);m([s({type:String,reflect:!0,attribute:"icon-before"})],y.prototype,"iconBefore",2);m([s({type:String,reflect:!0,attribute:"icon-after"})],y.prototype,"iconAfter",2);y=m([z("pano-a-input")],y);const mt=b`
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

  .radio--input:checked + .radio--label::before {
    border-color: var(--color-primary);
  }

  .radio--input:hover + .radio--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .radio--input:active + .radio--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  .radio--input:checked + .radio--label > .radio--icon {
    display: inline-flex;
  }

  .radio--input:checked:hover + .radio--label > .radio--icon {
    color: var(--color-primary-on-container);
  }

  .radio--input:checked:active + .radio--label > .radio--icon {
    color: var(--color-primary-on-container);
  }
`;var $t=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,D=(i,e,t,r)=>{for(var o=r>1?void 0:r?xt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&$t(e,t,o),o};let P=class extends g{constructor(){super(...arguments),this.disabled=!1,this.hiddenLabel=!1}_handleChange(){console.log({radioButtonValue:this._radioGroupNode.value})}render(){const{disabled:i,hiddenLabel:e,label:t,options:r,name:o,_handleChange:n}=this,a=L({"radio--label":!0,"sr-only":e});return u`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
        <div class="radio-group--heading" id="a11y-radio-group">${t}</div>
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
                <label class="${a}" for="radio-${l}">
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
    `,mt];D([G("input")],P.prototype,"_radioGroupNode",2);D([s({type:String,reflect:!0})],P.prototype,"name",2);D([s({type:String,reflect:!0})],P.prototype,"label",2);D([s({type:Array,reflect:!0})],P.prototype,"options",2);D([s({type:Boolean,reflect:!0})],P.prototype,"disabled",2);D([s({type:Boolean,reflect:!0})],P.prototype,"hiddenLabel",2);P=D([z("pano-a-radio-group")],P);var _t=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,Ne=(i,e,t,r)=>{for(var o=r>1?void 0:r?kt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&_t(e,t,o),o};let re=class extends g{render(){const{iconName:i}=this;return u`<span class="material-symbols-outlined">${i}</span>`}};re.styles=b`
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
  `;Ne([s({type:String,reflect:!0,attribute:"icon-name"})],re.prototype,"iconName",2);re=Ne([z("pano-b-icon")],re);const At=b`
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

  .button[icon-only] {
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
`;var wt=Object.defineProperty,St=Object.getOwnPropertyDescriptor,S=(i,e,t,r)=>{for(var o=r>1?void 0:r?St(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&wt(e,t,o),o};let _=class extends g{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:i,iconBefore:e,iconAfter:t,label:r,href:o,disabled:n}=this,a=L({"button--text":!0,"sr-only":i}),c=u`
      <pano-b-icon icon-name="${e}"></pano-b-icon>
      <span class="${a}"> ${r} </span>
      ${i?null:u`<pano-b-icon icon-name="${t}"></pano-b-icon>`}
    `;return o?u`
        <a
          class="button"
          href="${o}"
          ?icon-only="${i}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </a>
      `:u`
        <button
          class="button"
          ?disabled="${n}"
          ?icon-only="${i}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${c}
        </button>
      `}};_.styles=[b`
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
    `,At];S([s({type:String,reflect:!0})],_.prototype,"appearance",2);S([s({type:String,reflect:!0})],_.prototype,"size",2);S([s({type:String,reflect:!0})],_.prototype,"theme",2);S([s({type:String,reflect:!0})],_.prototype,"label",2);S([s({type:String,reflect:!0})],_.prototype,"buttonType",2);S([s({type:Boolean,reflect:!0})],_.prototype,"iconOnly",2);S([s({type:String,reflect:!0})],_.prototype,"iconBefore",2);S([s({type:String,reflect:!0})],_.prototype,"iconAfter",2);S([s({type:String,reflect:!0})],_.prototype,"href",2);S([s({type:Boolean,reflect:!0})],_.prototype,"disabled",2);_=S([z("pano-b-button")],_);const zt=b`
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

  .checkbox--input:hover + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .checkbox--input:active + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  /* stylelint-disable-next-line selector-max-combinators */
  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input:checked:hover + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }

  .checkbox--input:checked:active + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }
`;var Et=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,T=(i,e,t,r)=>{for(var o=r>1?void 0:r?Ot(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&Et(e,t,o),o};let A=class extends g{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:i,indeterminate:e}=this._checkboxNode;this.checked=i,this.indeterminate=e}render(){const{checked:i,disabled:e,hiddenLabel:t,indeterminate:r,label:o,name:n,value:a,_handleChange:c}=this,l=L({"checkbox--label":!0,"sr-only":t});return u`
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
          <pano-b-icon class="checkbox--icon" icon-name="check"></pano-b-icon>
          <div>${o}</div>
        </label>
      </div>
    `}};A.styles=[b`
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
    `,zt];T([G("input")],A.prototype,"_checkboxNode",2);T([s({type:Boolean,reflect:!0})],A.prototype,"checked",2);T([s({type:Boolean,reflect:!0})],A.prototype,"disabled",2);T([s({type:Boolean,reflect:!0,attribute:"hidden-label"})],A.prototype,"hiddenLabel",2);T([s({type:Boolean,reflect:!0})],A.prototype,"indeterminate",2);T([s({type:String,reflect:!0})],A.prototype,"label",2);T([s({type:String,reflect:!0})],A.prototype,"name",2);T([s({type:String,reflect:!0})],A.prototype,"value",2);A=T([z("pano-b-checkbox")],A);const Pt=b`
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
    border: 1px solid var(--color-primary);
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
`;var Ct=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,$=(i,e,t,r)=>{for(var o=r>1?void 0:r?Tt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&Ct(e,t,o),o};let v=class extends g{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:i}){this.value=i.value}render(){const{disabled:i,hiddenLabel:e,inputType:t,label:r,readOnly:o,value:n,iconBefore:a,iconAfter:c,pattern:l,placeholder:d,_handleInput:h}=this,p=L({"input--label":!0,"sr-only":e});return u`
      <label class="${p}" for="input">${r}</label>
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
          ?read-only="${o}"
          pattern="${V(l)}"
          placeholder="${V(d)}"
          value="${V(n)}"
          type="${t}"
          @input="${h}"
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
    `,Pt];$([G("input")],v.prototype,"_input",2);$([s({type:String,reflect:!0})],v.prototype,"size",2);$([s({type:Boolean,reflect:!0})],v.prototype,"disabled",2);$([s({type:Boolean,reflect:!0})],v.prototype,"hiddenLabel",2);$([s({type:String,reflect:!0,attribute:"input-type"})],v.prototype,"inputType",2);$([s({type:String,reflect:!0})],v.prototype,"label",2);$([s({type:Boolean,reflect:!0,attribute:"read-only"})],v.prototype,"readOnly",2);$([s({type:Boolean,reflect:!0})],v.prototype,"required",2);$([s({type:String,reflect:!0})],v.prototype,"pattern",2);$([s({type:String,reflect:!0})],v.prototype,"placeholder",2);$([s({type:String,reflect:!0})],v.prototype,"value",2);$([s({type:String,reflect:!0,attribute:"icon-before"})],v.prototype,"iconBefore",2);$([s({type:String,reflect:!0,attribute:"icon-after"})],v.prototype,"iconAfter",2);v=$([z("pano-b-input")],v);const Bt=b`
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

  .radio--input:checked + .radio--label::before {
    border-color: var(--color-primary);
  }

  .radio--input:hover + .radio--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .radio--input:active + .radio--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  .radio--input:checked + .radio--label > .radio--icon {
    display: inline-flex;
  }

  .radio--input:checked:hover + .radio--label > .radio--icon {
    color: var(--color-primary-on-container);
  }

  .radio--input:checked:active + .radio--label > .radio--icon {
    color: var(--color-primary-on-container);
  }
`;var Ut=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,I=(i,e,t,r)=>{for(var o=r>1?void 0:r?Nt(e,t):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&Ut(e,t,o),o};let C=class extends g{constructor(){super(...arguments),this.disabled=!1,this.hiddenLabel=!1}_handleChange(){console.log({radioButtonValue:this._radioGroupNode.value})}render(){const{disabled:i,hiddenLabel:e,label:t,options:r,name:o,_handleChange:n}=this,a=L({"radio--label":!0,"sr-only":e});return u`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
        <div class="radio-group--heading" id="a11y-radio-group">${t}</div>
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
                <label class="${a}" for="radio-${l}">
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
    `,Bt];I([G("input")],C.prototype,"_radioGroupNode",2);I([s({type:String,reflect:!0})],C.prototype,"name",2);I([s({type:String,reflect:!0})],C.prototype,"label",2);I([s({type:Array,reflect:!0})],C.prototype,"options",2);I([s({type:Boolean,reflect:!0})],C.prototype,"disabled",2);I([s({type:Boolean,reflect:!0})],C.prototype,"hiddenLabel",2);C=I([z("pano-b-radio-group")],C);document.querySelector("#app").innerHTML=`
<div class="page">
  <div class="placeholder-image">
    <img class="image" src="${je}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${Le}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

    <pano-input label="Email" input-type="email" size="medium"></pano-input>
    <pano-input label="Passwort" input-type="password" size="medium"></pano-input>

    <div class="repel">
      <pano-checkbox label="Remember me"></pano-checkbox>
      <a href="#">Forgot Password?</a>
    </div>

    <div class="buttons">
      <pano-button label="Log In" appearance="filled" theme="primary" size="large"></pano-button>
      <pano-button label="Log In with Google" appearance="filled" theme="primary" size="large"></pano-button>
    </div>

    <div class="link">
      Don't have an account?
      <a href="#"><strong>Sign up!<strong></a>
    </div>
  </div>
</div>
`;
