(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const At="/assets/panorama-design-system-75185753.png",xt="/assets/greyscale-image-4e1722dc.png";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,Q=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),it=new WeakMap;let ft=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Q&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=it.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&it.set(e,t))}return t}toString(){return this.cssText}};const St=o=>new ft(typeof o=="string"?o:o+"",void 0,X),E=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,i,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new ft(e,o,X)},wt=(o,t)=>{if(Q)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),i=I.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)}},rt=Q?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return St(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Et,defineProperty:Pt,getOwnPropertyDescriptor:kt,getOwnPropertyNames:Ot,getOwnPropertySymbols:Ct,getPrototypeOf:Tt}=Object,S=globalThis,ot=S.trustedTypes,Ut=ot?ot.emptyScript:"",F=S.reactiveElementPolyfillSupport,N=(o,t)=>o,D={toAttribute(o,t){switch(t){case Boolean:o=o?Ut:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},tt=(o,t)=>!Et(o,t),nt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:tt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class T extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Pt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:n}=kt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const l=i==null?void 0:i.call(this);n.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??nt}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const t=Tt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const e=this.properties,r=[...Ot(e),...Ct(e)];for(const i of r)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(rt(i))}else t!==void 0&&e.push(rt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){var n;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:D).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){var n;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:D;this._$Em=i,this[i]=l.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,r,i=!1,n){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??tt)(i?n:this[t],e))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,s]of i)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$E_)==null||r.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[N("elementProperties")]=new Map,T[N("finalized")]=new Map,F==null||F({ReactiveElement:T}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,q=R.trustedTypes,st=q?q.createPolicy("lit-html",{createHTML:o=>o}):void 0,bt="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,$t="?"+x,zt=`<${$t}>`,O=document,H=()=>O.createComment(""),L=o=>o===null||typeof o!="object"&&typeof o!="function",yt=Array.isArray,Nt=o=>yt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",J=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,lt=/>/g,P=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,ht=/"/g,mt=/^(?:script|style|textarea|title)$/i,Rt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),v=Rt(1),C=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),dt=new WeakMap,k=O.createTreeWalker(O,129);function gt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const Ht=(o,t)=>{const e=o.length-1,r=[];let i,n=t===2?"<svg>":"",s=z;for(let l=0;l<e;l++){const a=o[l];let d,u,h=-1,g=0;for(;g<a.length&&(s.lastIndex=g,u=s.exec(a),u!==null);)g=s.lastIndex,s===z?u[1]==="!--"?s=at:u[1]!==void 0?s=lt:u[2]!==void 0?(mt.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=P):u[3]!==void 0&&(s=P):s===P?u[0]===">"?(s=i??z,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?P:u[3]==='"'?ht:ct):s===ht||s===ct?s=P:s===at||s===lt?s=z:(s=P,i=void 0);const A=s===P&&o[l+1].startsWith("/>")?" ":"";n+=s===z?a+zt:h>=0?(r.push(d),a.slice(0,h)+bt+a.slice(h)+x+A):a+x+(h===-2?l:A)}return[gt(o,n+(o[e]||"<?>")+(t===2?"</svg>":"")),r]};class M{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,s=0;const l=t.length-1,a=this.parts,[d,u]=Ht(t,e);if(this.el=M.createElement(d,r),k.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=k.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(bt)){const g=u[s++],A=i.getAttribute(h).split(x),j=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:j[2],strings:A,ctor:j[1]==="."?Mt:j[1]==="?"?Bt:j[1]==="@"?jt:V}),i.removeAttribute(h)}else h.startsWith(x)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(mt.test(i.tagName)){const h=i.textContent.split(x),g=h.length-1;if(g>0){i.textContent=q?q.emptyScript:"";for(let A=0;A<g;A++)i.append(h[A],H()),k.nextNode(),a.push({type:2,index:++n});i.append(h[g],H())}}}else if(i.nodeType===8)if(i.data===$t)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(x,h+1))!==-1;)a.push({type:7,index:n}),h+=x.length-1}n++}}static createElement(t,e){const r=O.createElement("template");return r.innerHTML=t,r}}function U(o,t,e=o,r){var s,l;if(t===C)return t;let i=r!==void 0?(s=e._$Co)==null?void 0:s[r]:e._$Cl;const n=L(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=i:e._$Cl=i),i!==void 0&&(t=U(o,i._$AS(o,t.values),i,r)),t}class Lt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??O).importNode(e,!0);k.currentNode=i;let n=k.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new B(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new It(n,this,t)),this._$AV.push(d),a=r[++l]}s!==(a==null?void 0:a.index)&&(n=k.nextNode(),s++)}return k.currentNode=O,i}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class B{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),L(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Nt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&L(this._$AH)?this._$AA.nextSibling.data=t:this.$(O.createTextNode(t)),this._$AH=t}g(t){var n;const{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=M.createElement(gt(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const s=new Lt(i,this),l=s.u(this.options);s.p(e),this.$(l),this._$AH=s}}_$AC(t){let e=dt.get(t.strings);return e===void 0&&dt.set(t.strings,e=new M(t)),e}T(t){yt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const n of t)i===e.length?e.push(r=new B(this.k(H()),this.k(H()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,i){const n=this.strings;let s=!1;if(n===void 0)t=U(this,t,e,0),s=!L(t)||t!==this._$AH&&t!==C,s&&(this._$AH=t);else{const l=t;let a,d;for(t=n[0],a=0;a<n.length-1;a++)d=U(this,l[r+a],e,a),d===C&&(d=this._$AH[a]),s||(s=!L(d)||d!==this._$AH[a]),d===p?t=p:t!==p&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}s&&!i&&this.O(t)}O(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let Mt=class extends V{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===p?void 0:t}};class Bt extends V{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}let jt=class extends V{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){if((t=U(this,t,e,0)??p)===C)return;const r=this._$AH,i=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==p&&(r===p||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},It=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}};const Y=R.litHtmlPolyfillSupport;Y==null||Y(M,B),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.1.0");const Dt=(o,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;r._$litPart$=i=new B(t.insertBefore(H(),n),n,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let w=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return C}};var ut;w._$litElement$=!0,w.finalized=!0,(ut=globalThis.litElementHydrateSupport)==null||ut.call(globalThis,{LitElement:w});const G=globalThis.litElementPolyfillSupport;G==null||G({LitElement:w});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wt=o=>(...t)=>({_$litDirective$:o,values:t});class Vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=Wt(class extends Vt{constructor(o){var t;if(super(o),o.type!==qt.ATTRIBUTE||o.name!=="class"||((t=o.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var r,i;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((r=this.st)!=null&&r.has(n))&&this.it.add(n);return this.render(t)}const e=o.element.classList;for(const n of this.it)n in t||(e.remove(n),this.it.delete(n));for(const n in t){const s=!!t[n];s===this.it.has(n)||(i=this.st)!=null&&i.has(n)||(s?(e.add(n),this.it.add(n)):(e.remove(n),this.it.delete(n)))}return C}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:tt},Ft=(o=Kt,t,e)=>{const{kind:r,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(e.name,o),r==="accessor"){const{name:s}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,o)},init(l){return l!==void 0&&this.C(s,void 0,o),l}}}if(r==="setter"){const{name:s}=e;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,o)}}throw Error("Unsupported decorator location: "+r)};function c(o){return(t,e)=>typeof e=="object"?Ft(o,t,e):((r,i,n)=>{const s=i.hasOwnProperty(n);return i.constructor.createProperty(n,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,n):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt(o,t){return(e,r,i)=>{const n=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(o))??null};if(t){const{get:s,set:l}=typeof r=="object"?e:i??(()=>{const a=Symbol();return{get(){return this[a]},set(d){this[a]=d}}})();return pt(e,r,{get(){let a=s.call(this);return a===void 0&&(a=n(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return pt(e,r,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=o=>o??p;E``;var Jt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,_t=(o,t,e,r)=>{for(var i=r>1?void 0:r?Yt(t,e):t,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&Jt(t,e,i),i};let W=class extends w{render(){const{iconName:o}=this;return v`<span class="material-symbols-outlined">${o}</span>`}};W.styles=E`
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
  `;_t([c({type:String,reflect:!0,attribute:"icon-name"})],W.prototype,"iconName",2);W=_t([K("material-icon")],W);const Gt=E`
  .button {
    --button-height: 48px;
    --button-border: 1px solid;
    --button-border-radius: calc(var(--ds-border-radius));
    --button-inline-padding: var(--space-medium);

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-medium);
    min-height: var(--button-height);
    border: var(--button-border) var(--button-border-color);
    border-radius: var(--button-border-radius);
    padding-inline: var(--button-inline-padding);
    text-decoration: none;
    color: var(--button-color);
    background-color: var(--button-background-color);
    cursor: pointer;
    font-family: var(--ds-default-font);
    font-size: var(--ds-default-font-size);
    line-height: var(--ds-default-line-height);
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
    filter: brightness(1.2);
  }

  .button:not(:disabled):where(:active) {
    filter: brightness(1.3);
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

  .button:where([data-appearance="outline"]) {
    --button-color: var(--button-main-color);
    --button-border-color: var(--button-main-color);
    --button-background-color: transparent;
  }

  .button:where([data-size="small"]) {
    --button-height: calc(var(--space-small) * 1.5);
  }

  .button:where([data-size="medium"]) {
    --button-height: calc(var(--space-medium) * 1.5);
  }

  .button:where([data-size="large"]) {
    --button-height: calc(var(--space-large) * 1.5);
  }
`;var Zt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,m=(o,t,e,r)=>{for(var i=r>1?void 0:r?Qt(t,e):t,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&Zt(t,e,i),i};let $=class extends w{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:o,iconBefore:t,iconAfter:e,label:r,href:i,disabled:n}=this,s=et({"button--text":!0,"sr-only":o}),l=v`
      <material-icon icon-name="${t}"></material-icon>
      <span class="${s}"> ${r} </span>
      ${o?null:v`<material-icon icon-name="${e}"></material-icon>`}
    `;return i?v`
        <a
          class="button"
          href="${i}"
          ?icon-only="${o}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${l}
        </a>
      `:v`
        <button
          class="button"
          ?disabled="${n}"
          ?icon-only="${o}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${l}
        </button>
      `}};$.styles=[E`
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
    `,Gt];m([c({type:String,reflect:!0})],$.prototype,"appearance",2);m([c({type:String,reflect:!0})],$.prototype,"size",2);m([c({type:String,reflect:!0})],$.prototype,"theme",2);m([c({type:String,reflect:!0})],$.prototype,"label",2);m([c({type:String,reflect:!0})],$.prototype,"buttonType",2);m([c({type:Boolean,reflect:!0})],$.prototype,"iconOnly",2);m([c({type:String,reflect:!0})],$.prototype,"iconBefore",2);m([c({type:String,reflect:!0})],$.prototype,"iconAfter",2);m([c({type:String,reflect:!0})],$.prototype,"href",2);m([c({type:Boolean,reflect:!0})],$.prototype,"disabled",2);$=m([K("pano-button")],$);const Xt=E`
  :host {
    position: relative;
  }

  .checkbox--label {
    display: inline-flex;
    align-items: center;
    position: relative;
    padding-inline-start: calc(var(--space-medium) * 2);
    color: var(--color-primary-700);
    gap: var(--space-small);
    cursor: pointer;
  }

  .checkbox--icon {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  .checkbox--label::before,
  .checkbox--label::after {
    content: "";
    position: absolute;
    z-index: var(--zLayer-default, 1);
  }

  .checkbox--label::before {
    inset-inline-start: 0;
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--color-primary);
    border-radius: var(--space-small);
    background-color: var(--color-white);
  }

  .checkbox--input:checked + .checkbox--label::before {
    border-color: var(--color-primary);
  }

  .checkbox--input:focus + .checkbox--label::before,
  .checkbox--input:hover + .checkbox--label::before {
    border-color: var(--color-secondary);
  }

  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }
`;var te=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,_=(o,t,e,r)=>{for(var i=r>1?void 0:r?ee(t,e):t,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&te(t,e,i),i};let y=class extends w{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:o,indeterminate:t}=this._checkboxNode;this.checked=o,this.indeterminate=t}render(){const{checked:o,disabled:t,hiddenLabel:e,indeterminate:r,label:i,name:n,value:s,_handleChange:l}=this,a=et({"checkbox--label":!0,"sr-only":e});return v`
      <input
        id="checkbox"
        class="checkbox--input | sr-only"
        .disabled="${t}"
        .checked="${o}"
        aria-checked="${r?"mixed":o}"
        name="${n}"
        value="${s}"
        type="checkbox"
        @change="${l}"
      />
      <label class="${a}" for="checkbox">
        <material-icon class="checkbox--icon" icon-name="check"></material-icon>
        <div>${i}</div>
      </label>
    `}};y.styles=[E`
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
    `,Xt];_([vt("input")],y.prototype,"_checkboxNode",2);_([c({type:Boolean,reflect:!0})],y.prototype,"checked",2);_([c({type:Boolean,reflect:!0})],y.prototype,"disabled",2);_([c({type:Boolean,reflect:!0,attribute:"hidden-label"})],y.prototype,"hiddenLabel",2);_([c({type:Boolean,reflect:!0})],y.prototype,"indeterminate",2);_([c({type:String,reflect:!0})],y.prototype,"label",2);_([c({type:String,reflect:!0})],y.prototype,"name",2);_([c({type:String,reflect:!0})],y.prototype,"value",2);y=_([K("pano-checkbox")],y);const ie=E`
  :host {
    --icon-padding: calc(var(--space-medium) * 2);
    --input-padding-block: calc(var(--space-medium) * 0.5);

    display: flex;
    flex-direction: column;
    gap: var(--space-small);
    font: normal 400 16px/1.5 var(--ds-default-font);
  }

  .input--field {
    width: 100%;
    border: 1px solid var(--color-primary);
    border-radius: var(--space-small);
    padding-block: var(--input-padding-block);
    padding-inline: calc(var(--space-medium) * 0.5);
    font: normal 400 16px/1.5 var(--ds-default-font);

    .input[data-icon-before] & {
      padding-left: var(--icon-padding);
    }

    .input[data-icon-after] & {
      padding-right: var(--icon-padding);
    }
  }

  .input--field:where([data-size="small"]) {
    --input-padding-block: calc(var(--space-small) * 0.5);
  }

  .input--field:where([data-size="medium"]) {
    --input-padding-block: calc(var(--space-medium) * 0.5);
  }

  .input {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input--icon {
    position: absolute;

    &[data-icon-before] {
      left: var(--space-small);
    }

    &[data-icon-after] {
      right: var(--space-small);
    }
  }
`;var re=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,b=(o,t,e,r)=>{for(var i=r>1?void 0:r?oe(t,e):t,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&re(t,e,i),i};let f=class extends w{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:o}){this.value=o.value}render(){const{disabled:o,hiddenLabel:t,inputType:e,label:r,readOnly:i,value:n,iconBefore:s,iconAfter:l,pattern:a,placeholder:d,_handleInput:u}=this,h=et({"input--label":!0,"sr-only":t});return v`
      <label class="${h}" for="input">${r}</label>
      <div
        class="input"
        ?data-icon-before="${!!s}"
        ?data-icon-after="${!!l}"
      >
        ${s?v`<material-icon
              class="input--icon"
              data-icon-before
              icon-name="${s}"
            ></material-icon>`:null}
        <input
          class="input--field"
          .disabled="${o}"
          id="input"
          ?disabled="${o}"
          ?read-only="${i}"
          pattern="${Z(a)}"
          placeholder="${Z(d)}"
          value="${Z(n)}"
          type="${e}"
          @input="${u}"
          data-size="${this.size}"
        />
        ${l?v`<material-icon
              class="input--icon"
              data-icon-after
              icon-name="${l}"
            ></material-icon>`:null}
      </div>
    `}};f.styles=[E`
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
    `,ie];b([vt("input")],f.prototype,"_input",2);b([c({type:String,reflect:!0})],f.prototype,"size",2);b([c({type:Boolean,reflect:!0})],f.prototype,"disabled",2);b([c({type:Boolean,reflect:!0})],f.prototype,"hiddenLabel",2);b([c({type:String,reflect:!0,attribute:"input-type"})],f.prototype,"inputType",2);b([c({type:String,reflect:!0})],f.prototype,"label",2);b([c({type:Boolean,reflect:!0,attribute:"read-only"})],f.prototype,"readOnly",2);b([c({type:Boolean,reflect:!0})],f.prototype,"required",2);b([c({type:String,reflect:!0})],f.prototype,"pattern",2);b([c({type:String,reflect:!0})],f.prototype,"placeholder",2);b([c({type:String,reflect:!0})],f.prototype,"value",2);b([c({type:String,reflect:!0,attribute:"icon-before"})],f.prototype,"iconBefore",2);b([c({type:String,reflect:!0,attribute:"icon-after"})],f.prototype,"iconAfter",2);f=b([K("pano-input")],f);document.querySelector("#app").innerHTML=`
<div class="page">
  <div class="placeholder-image">
    <img class="image" src="${xt}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${At}">
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
