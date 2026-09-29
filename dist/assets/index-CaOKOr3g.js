var $f=Object.defineProperty;var Kf=(i,t,e)=>t in i?$f(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var k=(i,t,e)=>Kf(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dl="165",Xi={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zf=0,lc=1,Jf=2,ld=1,cd=2,Fn=3,ui=0,De=1,hn=2,Wn=0,_s=1,Mo=2,cc=3,hc=4,Qf=5,Ii=100,tp=101,ep=102,np=103,ip=104,sp=200,rp=201,op=202,ap=203,ol=204,al=205,lp=206,cp=207,hp=208,up=209,dp=210,fp=211,pp=212,mp=213,gp=214,_p=0,vp=1,xp=2,bo=3,yp=4,Mp=5,bp=6,Sp=7,hd=0,Ep=1,Tp=2,li=0,ud=1,dd=2,fd=3,Il=4,wp=5,pd=6,md=7,gd=300,bs=301,Ss=302,ll=303,cl=304,Bo=306,hl=1e3,Ni=1001,ul=1002,We=1003,Ap=1004,Sr=1005,un=1006,sa=1007,Ui=1008,di=1009,Cp=1010,Rp=1011,So=1012,_d=1013,Es=1014,Vn=1015,ci=1016,vd=1017,xd=1018,Ts=1020,Pp=35902,Lp=1021,Dp=1022,wn=1023,Ip=1024,Op=1025,vs=1026,ws=1027,yd=1028,Md=1029,Np=1030,bd=1031,Sd=1033,ra=33776,oa=33777,aa=33778,la=33779,uc=35840,dc=35841,fc=35842,pc=35843,mc=36196,gc=37492,_c=37496,vc=37808,xc=37809,yc=37810,Mc=37811,bc=37812,Sc=37813,Ec=37814,Tc=37815,wc=37816,Ac=37817,Cc=37818,Rc=37819,Pc=37820,Lc=37821,ca=36492,Dc=36494,Ic=36495,Up=36283,Oc=36284,Nc=36285,Uc=36286,Fp=3200,kp=3201,Ed=0,zp=1,ni="",cn="srgb",gi="srgb-linear",Ol="display-p3",Ho="display-p3-linear",Eo="linear",ie="srgb",To="rec709",wo="p3",Yi=7680,Fc=519,Bp=512,Hp=513,Vp=514,Td=515,Gp=516,Wp=517,Xp=518,qp=519,kc=35044,Yp=35048,zc="300 es",Gn=2e3,Ao=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const nr=Math.PI/180,As=180/Math.PI;function Is(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Nl(i,t){return(i%t+t)%t}function jp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $p(i,t,e){return i!==t?(e-i)/(t-i):0}function ir(i,t,e){return(1-e)*i+e*t}function Kp(i,t,e,n){return ir(i,t,1-Math.exp(-e*n))}function Zp(i,t=1){return t-Math.abs(Nl(i,t*2)-t)}function Jp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function tm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function em(i,t){return i+Math.random()*(t-i)}function nm(i){return i*(.5-Math.random())}function im(i){i!==void 0&&(Bc=i);let t=Bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sm(i){return i*nr}function rm(i){return i*As}function om(i){return(i&i-1)===0&&i!==0}function am(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cm(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ri={DEG2RAD:nr,RAD2DEG:As,generateUUID:Is,clamp:ye,euclideanModulo:Nl,mapLinear:jp,inverseLerp:$p,lerp:ir,damp:Kp,pingpong:Zp,smoothstep:Jp,smootherstep:Qp,randInt:tm,randFloat:em,randFloatSpread:nm,seededRandom:im,degToRad:sm,radToDeg:rm,isPowerOfTwo:om,ceilPowerOfTwo:am,floorPowerOfTwo:lm,setQuaternionFromProperEuler:cm,normalize:Fe,denormalize:fs};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,o,a,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],M=s[1],x=s[4],E=s[7],C=s[2],A=s[5],w=s[8];return r[0]=o*_+a*M+l*C,r[3]=o*p+a*x+l*A,r[6]=o*m+a*E+l*w,r[1]=c*_+h*M+u*C,r[4]=c*p+h*x+u*A,r[7]=c*m+h*E+u*w,r[2]=d*_+f*M+g*C,r[5]=d*p+f*x+g*A,r[8]=d*m+f*E+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Ft;function wd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hm(){const i=Co("canvas");return i.style.display="block",i}const Hc={};function Ad(i){i in Hc||(Hc[i]=!0,console.warn(i))}function um(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Vc=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gc=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Er={[gi]:{transfer:Eo,primaries:To,toReference:i=>i,fromReference:i=>i},[cn]:{transfer:ie,primaries:To,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ho]:{transfer:Eo,primaries:wo,toReference:i=>i.applyMatrix3(Gc),fromReference:i=>i.applyMatrix3(Vc)},[Ol]:{transfer:ie,primaries:wo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gc),fromReference:i=>i.applyMatrix3(Vc).convertLinearToSRGB()}},dm=new Set([gi,Ho]),Zt={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!dm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Er[t].toReference,s=Er[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Er[i].primaries},getTransfer:function(i){return i===ni?Eo:Er[i].transfer}};function xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class fm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=Co("canvas")),ji.width=t.width,ji.height=t.height;const n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Co("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xs(e[n]/255)*255):e[n]=xs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pm=0;class Cd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mm=0;class ze extends Vi{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=Ni,s=Ni,r=un,o=Ui,a=wn,l=di,c=ze.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Is(),this.name="",this.source=new Cd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=gd;ze.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,E=(f+1)/2,C=(m+1)/2,A=(h+d)/4,w=(u+_)/4,R=(g+p)/4;return x>E&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=w/n):E>C?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=A/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=R/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gm extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends gm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rd extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _m extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,m*M);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const E=a*M;if(l=l*p+d*E,c=c*p+f*E,h=h*p+g*E,u=u*p+_*E,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new D,Wc=new qn;class Gi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),wr.subVectors(this.max,zs),$i.subVectors(t.a,zs),Ki.subVectors(t.b,zs),Zi.subVectors(t.c,zs),$n.subVectors(Ki,$i),Kn.subVectors(Zi,Ki),yi.subVectors($i,Zi);let e=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-yi.z,yi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,yi.z,0,-yi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-yi.y,yi.x,0];return!pa(e,$i,Ki,Zi,wr)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,$i,Ki,Zi,wr))?!1:(Ar.crossVectors($n,Kn),e=[Ar.x,Ar.y,Ar.z],pa(e,$i,Ki,Zi,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new D,new D,new D,new D,new D,new D,new D,new D],rn=new D,Tr=new Gi,$i=new D,Ki=new D,Zi=new D,$n=new D,Kn=new D,yi=new D,zs=new D,wr=new D,Ar=new D,Mi=new D;function pa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mi.fromArray(i,r);const a=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const vm=new Gi,Bs=new D,ma=new D;class Os{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(ma)),this.expandByPoint(Bs.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new D,ga=new D,Cr=new D,Zn=new D,_a=new D,Rr=new D,va=new D;class Ul{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ga.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(ga);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Cr),a=Zn.dot(this.direction),l=-Zn.dot(Cr),c=Zn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ga).addScaledVector(Cr,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){_a.subVectors(e,t),Rr.subVectors(n,t),va.crossVectors(_a,Rr);let o=this.direction.dot(va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const l=a*this.direction.dot(Rr.crossVectors(Zn,Rr));if(l<0)return null;const c=a*this.direction.dot(_a.cross(Zn));if(c<0||l+c>o)return null;const h=-a*Zn.dot(va);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xm,t,ym)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Jn.crossVectors(n,$e),Jn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Jn.crossVectors(n,$e)),Jn.normalize(),Pr.crossVectors($e,Jn),s[0]=Jn.x,s[4]=Pr.x,s[8]=$e.x,s[1]=Jn.y,s[5]=Pr.y,s[9]=$e.y,s[2]=Jn.z,s[6]=Pr.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],x=n[7],E=n[11],C=n[15],A=s[0],w=s[4],R=s[8],S=s[12],y=s[1],P=s[5],O=s[9],U=s[13],Y=s[2],X=s[6],V=s[10],K=s[14],j=s[3],ct=s[7],dt=s[11],pt=s[15];return r[0]=o*A+a*y+l*Y+c*j,r[4]=o*w+a*P+l*X+c*ct,r[8]=o*R+a*O+l*V+c*dt,r[12]=o*S+a*U+l*K+c*pt,r[1]=h*A+u*y+d*Y+f*j,r[5]=h*w+u*P+d*X+f*ct,r[9]=h*R+u*O+d*V+f*dt,r[13]=h*S+u*U+d*K+f*pt,r[2]=g*A+_*y+p*Y+m*j,r[6]=g*w+_*P+p*X+m*ct,r[10]=g*R+_*O+p*V+m*dt,r[14]=g*S+_*U+p*K+m*pt,r[3]=M*A+x*y+E*Y+C*j,r[7]=M*w+x*P+E*X+C*ct,r[11]=M*R+x*O+E*V+C*dt,r[15]=M*S+x*U+E*K+C*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,x=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,E=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,C=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,A=e*M+n*x+s*E+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=M*w,t[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*m-n*d*m)*w,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*w,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*w,t[4]=x*w,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*w,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*w,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*w,t[8]=E*w,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*m-e*u*m)*w,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*w,t[12]=C*w,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*p+e*u*p)*w,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*w,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,M=l*c,x=l*h,E=l*u,C=n.x,A=n.y,w=n.z;return s[0]=(1-(_+m))*C,s[1]=(f+E)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(f-E)*A,s[5]=(1-(d+m))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+x)*w,s[9]=(p-M)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const o=Ji.set(s[4],s[5],s[6]).length(),a=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Gn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Gn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ao)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Gn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let g,_;if(a===Gn)g=(o+r)*u,_=-2*u;else if(a===Ao)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new D,on=new ee,xm=new D(0,0,0),ym=new D(1,1,1),Jn=new D,Pr=new D,$e=new D,Xc=new ee,qc=new qn;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qc.setFromEuler(this),this.setFromQuaternion(qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mm=0;const Yc=new D,Qi=new qn,Dn=new ee,Lr=new D,Hs=new D,bm=new D,Sm=new qn,jc=new D(1,0,0),$c=new D(0,1,0),Kc=new D(0,0,1),Zc={type:"added"},Em={type:"removed"},ts={type:"childadded",child:null},xa={type:"childremoved",child:null};class fe extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new D,e=new An,n=new qn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ft}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(jc,t)}rotateY(t){return this.rotateOnAxis($c,t)}rotateZ(t){return this.rotateOnAxis(Kc,t)}translateOnAxis(t,e){return Yc.copy(t).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jc,t)}translateY(t){return this.translateOnAxis($c,t)}translateZ(t){return this.translateOnAxis(Kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Hs,Lr,this.up):Dn.lookAt(Lr,Hs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zc),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Em),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zc),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,bm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Sm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new D(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new D,In=new D,ya=new D,On=new D,es=new D,ns=new D,Jc=new D,Ma=new D,ba=new D,Sa=new D;class Tn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),In.subVectors(n,e),ya.subVectors(t,e);const o=an.dot(an),a=an.dot(In),l=an.dot(ya),c=In.dot(In),h=In.dot(ya),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),In.subVectors(t,e),an.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),In.subVectors(this.a,this.b),an.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;es.subVectors(s,n),ns.subVectors(r,n),Ma.subVectors(t,n);const l=es.dot(Ma),c=ns.dot(Ma);if(l<=0&&c<=0)return e.copy(n);ba.subVectors(t,s);const h=es.dot(ba),u=ns.dot(ba);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(es,o);Sa.subVectors(t,r);const f=es.dot(Sa),g=ns.dot(Sa);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ns,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Jc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Jc,a);const m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(es,o).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Nl(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ea(o,r,t+1/3),this.g=Ea(o,r,t),this.b=Ea(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Ld[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}copyLinearToSRGB(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return Zt.fromWorkingColorSpace(Le.copy(this),t),Math.round(ye(Le.r*255,0,255))*65536+Math.round(ye(Le.g*255,0,255))*256+Math.round(ye(Le.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=cn){Zt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Dr);const n=ir(Qn.h,Dr.h,e),s=ir(Qn.s,Dr.s,e),r=ir(Qn.l,Dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Le=new bt;bt.NAMES=Ld;let Tm=0;class Ns extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=_s,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xn extends Ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new D,Ir=new nt;class sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ad("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kc&&(t.usage=this.usage),t}}class Dd extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Id extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wm=0;const Qe=new ee,Ta=new fe,is=new D,Ke=new Gi,Vs=new Gi,Te=new D;class Ne extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wd(t)?Id:Dd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Ke.min,Vs.min),Ke.expandByPoint(Te),Te.addVectors(Ke.max,Vs.max),Ke.expandByPoint(Te)):(Ke.expandByPoint(Vs.min),Ke.expandByPoint(Vs.max))}Ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Te.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(t,c),Te.add(is)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new D,l[R]=new D;const c=new D,h=new D,u=new D,d=new nt,f=new nt,g=new nt,_=new D,p=new D;function m(R,S,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(_),a[S].add(_),a[y].add(_),l[R].add(p),l[S].add(p),l[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const y=M[R],P=y.start,O=y.count;for(let U=P,Y=P+O;U<Y;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const x=new D,E=new D,C=new D,A=new D;function w(R){C.fromBufferAttribute(s,R),A.copy(C);const S=a[R];x.copy(S),x.sub(C.multiplyScalar(C.dot(S))).normalize(),E.crossVectors(A,S);const P=E.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,S=M.length;R<S;++R){const y=M[R],P=y.start,O=y.count;for(let U=P,Y=P+O;U<Y;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new sn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qc=new ee,bi=new Ul,Or=new Os,th=new D,ss=new D,rs=new D,os=new D,wa=new D,Nr=new D,Ur=new nt,Fr=new nt,kr=new nt,eh=new D,nh=new D,ih=new D,zr=new D,Br=new D;class gt extends fe{constructor(t=new Ne,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(wa.fromBufferAttribute(u,t),o?Nr.addScaledVector(wa,h):Nr.addScaledVector(wa.sub(e),h))}e.add(Nr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Or.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Or,th)===null||bi.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Qc.copy(r).invert(),bi.copy(t.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=M,C=x;E<C;E+=3){const A=a.getX(E),w=a.getX(E+1),R=a.getX(E+2);s=Hr(this,m,t,n,c,h,u,A,w,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),x=a.getX(p+1),E=a.getX(p+2);s=Hr(this,o,t,n,c,h,u,M,x,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let E=M,C=x;E<C;E+=3){const A=E,w=E+1,R=E+2;s=Hr(this,m,t,n,c,h,u,A,w,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=p,x=p+1,E=p+2;s=Hr(this,o,t,n,c,h,u,M,x,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Am(i,t,e,n,s,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ui,a),l===null)return null;Br.copy(a),Br.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Br);return c<e.near||c>e.far?null:{distance:c,point:Br.clone(),object:i}}function Hr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ss),i.getVertexPosition(l,rs),i.getVertexPosition(c,os);const h=Am(i,t,e,n,ss,rs,os,zr);if(h){s&&(Ur.fromBufferAttribute(s,a),Fr.fromBufferAttribute(s,l),kr.fromBufferAttribute(s,c),h.uv=Tn.getInterpolation(zr,ss,rs,os,Ur,Fr,kr,new nt)),r&&(Ur.fromBufferAttribute(r,a),Fr.fromBufferAttribute(r,l),kr.fromBufferAttribute(r,c),h.uv1=Tn.getInterpolation(zr,ss,rs,os,Ur,Fr,kr,new nt)),o&&(eh.fromBufferAttribute(o,a),nh.fromBufferAttribute(o,l),ih.fromBufferAttribute(o,c),h.normal=Tn.getInterpolation(zr,ss,rs,os,eh,nh,ih,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};Tn.getNormal(ss,rs,os,u.normal),h.face=u}return h}class dn extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(_,p,m,M,x,E,C,A,w,R,S){const y=E/w,P=C/R,O=E/2,U=C/2,Y=A/2,X=w+1,V=R+1;let K=0,j=0;const ct=new D;for(let dt=0;dt<V;dt++){const pt=dt*P-U;for(let Rt=0;Rt<X;Rt++){const Ht=Rt*y-O;ct[_]=Ht*M,ct[p]=pt*x,ct[m]=Y,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[p]=0,ct[m]=A>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Rt/w),u.push(1-dt/R),K+=1}}for(let dt=0;dt<R;dt++)for(let pt=0;pt<w;pt++){const Rt=d+pt+X*dt,Ht=d+pt+X*(dt+1),$=d+(pt+1)+X*(dt+1),et=d+(pt+1)+X*dt;l.push(Rt,Ht,et),l.push(Ht,$,et),j+=6}a.addGroup(f,j,S),f+=j,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=Cs(i[e]);for(const s in n)t[s]=n[s]}return t}function Cm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Od(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const fr={clone:Cs,merge:ke};var Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Me extends Ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=Cm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Nd extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new D,sh=new nt,rh=new nt;class Ve extends Nd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=As*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return As*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const as=-90,ls=1;class Lm extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(as,ls,t,e);s.layers=this.layers,this.add(s);const r=new Ve(as,ls,t,e);r.layers=this.layers,this.add(r);const o=new Ve(as,ls,t,e);o.layers=this.layers,this.add(o);const a=new Ve(as,ls,t,e);a.layers=this.layers,this.add(a);const l=new Ve(as,ls,t,e);l.layers=this.layers,this.add(l);const c=new Ve(as,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ud extends ze{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dm extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ud(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new Me({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Wn});r.uniforms.tEquirect.value=e;const o=new gt(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=un),new Lm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Aa=new D,Im=new D,Om=new Ft;class Bn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Aa.subVectors(n,e).cross(Im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Om.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Os,Vr=new D;class Fl{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],M=s[13],x=s[14],E=s[15];if(n[0].setComponents(l-r,d-c,p-f,E-m).normalize(),n[1].setComponents(l+r,d+c,p+f,E+m).normalize(),n[2].setComponents(l+o,d+h,p+g,E+M).normalize(),n[3].setComponents(l-o,d-h,p-g,E-M).normalize(),n[4].setComponents(l-a,d-u,p-_,E-x).normalize(),e===Gn)n[5].setComponents(l+a,d+u,p+_,E+x).normalize();else if(e===Ao)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nm(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class fi extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const M=m*d-o;for(let x=0;x<c;x++){const E=x*u-r;g.push(E,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+c*m,E=M+c*(m+1),C=M+1+c*(m+1),A=M+1+c*m;f.push(x,E,A),f.push(E,C,A)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fm=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
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
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,Km=`#ifdef USE_BUMPMAP
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,rg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ag=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",fg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sg=`#ifdef USE_GRADIENTMAP
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
}`,Eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ig=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Og=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ng=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xg=`#if defined( USE_POINTS_UV )
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
#endif`,qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
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
#endif`,Jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s0=`#ifdef USE_NORMALMAP
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
#endif`,r0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b0=`#ifdef USE_SKINNING
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
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P0=`#ifdef USE_TRANSMISSION
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`#include <common>
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
}`,V0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,G0=`#define DISTANCE
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
}`,W0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`uniform float scale;
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
}`,j0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,K0=`uniform vec3 diffuse;
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
}`,Z0=`#define LAMBERT
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
}`,J0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Q0=`#define MATCAP
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
}`,t_=`#define MATCAP
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
}`,e_=`#define NORMAL
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
}`,n_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i_=`#define PHONG
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
}`,s_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,r_=`#define STANDARD
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
}`,o_=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,a_=`#define TOON
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
}`,l_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,c_=`uniform float size;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,f_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,p_=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Um,alphahash_pars_fragment:Fm,alphamap_fragment:km,alphamap_pars_fragment:zm,alphatest_fragment:Bm,alphatest_pars_fragment:Hm,aomap_fragment:Vm,aomap_pars_fragment:Gm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:jm,iridescence_fragment:$m,bumpmap_pars_fragment:Km,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:Jm,clipping_planes_pars_vertex:Qm,clipping_planes_vertex:tg,color_fragment:eg,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:sg,common:rg,cube_uv_reflection_fragment:og,defaultnormal_vertex:ag,displacementmap_pars_vertex:lg,displacementmap_vertex:cg,emissivemap_fragment:hg,emissivemap_pars_fragment:ug,colorspace_fragment:dg,colorspace_pars_fragment:fg,envmap_fragment:pg,envmap_common_pars_fragment:mg,envmap_pars_fragment:gg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Cg,envmap_vertex:vg,fog_vertex:xg,fog_pars_vertex:yg,fog_fragment:Mg,fog_pars_fragment:bg,gradientmap_pars_fragment:Sg,lightmap_pars_fragment:Eg,lights_lambert_fragment:Tg,lights_lambert_pars_fragment:wg,lights_pars_begin:Ag,lights_toon_fragment:Rg,lights_toon_pars_fragment:Pg,lights_phong_fragment:Lg,lights_phong_pars_fragment:Dg,lights_physical_fragment:Ig,lights_physical_pars_fragment:Og,lights_fragment_begin:Ng,lights_fragment_maps:Ug,lights_fragment_end:Fg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:zg,logdepthbuf_pars_vertex:Bg,logdepthbuf_vertex:Hg,map_fragment:Vg,map_pars_fragment:Gg,map_particle_fragment:Wg,map_particle_pars_fragment:Xg,metalnessmap_fragment:qg,metalnessmap_pars_fragment:Yg,morphinstance_vertex:jg,morphcolor_vertex:$g,morphnormal_vertex:Kg,morphtarget_pars_vertex:Zg,morphtarget_vertex:Jg,normal_fragment_begin:Qg,normal_fragment_maps:t0,normal_pars_fragment:e0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:s0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:o0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:l0,opaque_fragment:c0,packing:h0,premultiplied_alpha_fragment:u0,project_vertex:d0,dithering_fragment:f0,dithering_pars_fragment:p0,roughnessmap_fragment:m0,roughnessmap_pars_fragment:g0,shadowmap_pars_fragment:_0,shadowmap_pars_vertex:v0,shadowmap_vertex:x0,shadowmask_pars_fragment:y0,skinbase_vertex:M0,skinning_pars_vertex:b0,skinning_vertex:S0,skinnormal_vertex:E0,specularmap_fragment:T0,specularmap_pars_fragment:w0,tonemapping_fragment:A0,tonemapping_pars_fragment:C0,transmission_fragment:R0,transmission_pars_fragment:P0,uv_pars_fragment:L0,uv_pars_vertex:D0,uv_vertex:I0,worldpos_vertex:O0,background_vert:N0,background_frag:U0,backgroundCube_vert:F0,backgroundCube_frag:k0,cube_vert:z0,cube_frag:B0,depth_vert:H0,depth_frag:V0,distanceRGBA_vert:G0,distanceRGBA_frag:W0,equirect_vert:X0,equirect_frag:q0,linedashed_vert:Y0,linedashed_frag:j0,meshbasic_vert:$0,meshbasic_frag:K0,meshlambert_vert:Z0,meshlambert_frag:J0,meshmatcap_vert:Q0,meshmatcap_frag:t_,meshnormal_vert:e_,meshnormal_frag:n_,meshphong_vert:i_,meshphong_frag:s_,meshphysical_vert:r_,meshphysical_frag:o_,meshtoon_vert:a_,meshtoon_frag:l_,points_vert:c_,points_frag:h_,shadow_vert:u_,shadow_frag:d_,sprite_vert:f_,sprite_frag:p_},at={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Sn={basic:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new bt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ke([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ke([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new bt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ke([at.points,at.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ke([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ke([at.common,at.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ke([at.sprite,at.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ke([at.common,at.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ke([at.lights,at.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Sn.physical={uniforms:ke([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Gr={r:0,b:0,g:0},Ei=new An,m_=new ee;function g_(i,t,e,n,s,r,o){const a=new bt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const E=g(M);E===null?m(a,l):E&&E.isColor&&(m(E,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===Bo)?(h===void 0&&(h=new gt(new dn(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:Cs(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(x.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m_.makeRotationFromEuler(Ei)),h.material.toneMapped=Zt.getTransfer(E.colorSpace)!==ie,(u!==E||d!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new gt(new fi(2,2),new Me({name:"BackgroundMaterial",uniforms:Cs(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(E.colorSpace)!==ie,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(Gr,Od(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:p}}function __(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,P,O,U,Y){let X=!1;const V=u(U,O,P);r!==V&&(r=V,c(r.object)),X=f(y,U,O,Y),X&&g(y,U,O,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,E(y,P,O,U),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,O){const U=O.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let X=Y[P.id];X===void 0&&(X={},Y[P.id]=X);let V=X[U];return V===void 0&&(V=d(l()),X[U]=V),V}function d(y){const P=[],O=[],U=[];for(let Y=0;Y<e;Y++)P[Y]=0,O[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,P,O,U){const Y=r.attributes,X=P.attributes;let V=0;const K=O.getAttributes();for(const j in K)if(K[j].location>=0){const dt=Y[j];let pt=X[j];if(pt===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor)),dt===void 0||dt.attribute!==pt||pt&&dt.data!==pt.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function g(y,P,O,U){const Y={},X=P.attributes;let V=0;const K=O.getAttributes();for(const j in K)if(K[j].location>=0){let dt=X[j];dt===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));const pt={};pt.attribute=dt,dt&&dt.data&&(pt.data=dt.data),Y[j]=pt,V++}r.attributes=Y,r.attributesNum=V,r.index=U}function _(){const y=r.newAttributes;for(let P=0,O=y.length;P<O;P++)y[P]=0}function p(y){m(y,0)}function m(y,P){const O=r.newAttributes,U=r.enabledAttributes,Y=r.attributeDivisors;O[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),Y[y]!==P&&(i.vertexAttribDivisor(y,P),Y[y]=P)}function M(){const y=r.newAttributes,P=r.enabledAttributes;for(let O=0,U=P.length;O<U;O++)P[O]!==y[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function x(y,P,O,U,Y,X,V){V===!0?i.vertexAttribIPointer(y,P,O,Y,X):i.vertexAttribPointer(y,P,O,U,Y,X)}function E(y,P,O,U){_();const Y=U.attributes,X=O.getAttributes(),V=P.defaultAttributeValues;for(const K in X){const j=X[K];if(j.location>=0){let ct=Y[K];if(ct===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){const dt=ct.normalized,pt=ct.itemSize,Rt=t.get(ct);if(Rt===void 0)continue;const Ht=Rt.buffer,$=Rt.type,et=Rt.bytesPerElement,ut=$===i.INT||$===i.UNSIGNED_INT||ct.gpuType===_d;if(ct.isInterleavedBufferAttribute){const lt=ct.data,kt=lt.stride,Pt=ct.offset;if(lt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<j.locationSize;Gt++)m(j.location+Gt,lt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Gt=0;Gt<j.locationSize;Gt++)p(j.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Gt=0;Gt<j.locationSize;Gt++)x(j.location+Gt,pt/j.locationSize,$,dt,kt*et,(Pt+pt/j.locationSize*Gt)*et,ut)}else{if(ct.isInstancedBufferAttribute){for(let lt=0;lt<j.locationSize;lt++)m(j.location+lt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let lt=0;lt<j.locationSize;lt++)p(j.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let lt=0;lt<j.locationSize;lt++)x(j.location+lt,pt/j.locationSize,$,dt,pt*et,pt/j.locationSize*lt*et,ut)}}else if(V!==void 0){const dt=V[K];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(j.location,dt);break;case 3:i.vertexAttrib3fv(j.location,dt);break;case 4:i.vertexAttrib4fv(j.location,dt);break;default:i.vertexAttrib1fv(j.location,dt)}}}}M()}function C(){R();for(const y in n){const P=n[y];for(const O in P){const U=P[O];for(const Y in U)h(U[Y].object),delete U[Y];delete P[O]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const O in P){const U=P[O];for(const Y in U)h(U[Y].object),delete U[Y];delete P[O]}delete n[y.id]}function w(y){for(const P in n){const O=n[P];if(O[y.id]===void 0)continue;const U=O[y.id];for(const Y in U)h(U[Y].object),delete U[Y];delete O[y.id]}}function R(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function v_(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function x_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==di&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Vn&&!w)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:E,maxSamples:C}}function y_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Bn,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,x=M*4;let E=m.clippingState||null;l.value=E,E=h(g,d,x,f);for(let C=0;C!==x;++C)E[C]=e[C];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,E=f;x!==_;++x,E+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function M_(i){let t=new WeakMap;function e(o,a){return a===ll?o.mapping=bs:a===cl&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ll||a===cl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dm(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class kl extends Nd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=4,oh=[.125,.215,.35,.446,.526,.582],Oi=20,Ca=new kl,ah=new bt;let Ra=null,Pa=0,La=0,Da=!1;const Pi=(1+Math.sqrt(5))/2,cs=1/Pi,lh=[new D(-Pi,cs,0),new D(Pi,cs,0),new D(-cs,0,Pi),new D(cs,0,Pi),new D(0,Pi,-cs),new D(0,Pi,cs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class dl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ra,Pa,La),this._renderer.xr.enabled=Da,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:ci,format:wn,colorSpace:gi,depthBuffer:!1},s=ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b_(r)),this._blurMaterial=S_(r,t,e)}return s}_compileMaterial(t){const e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,Ca)}_sceneToCubeUV(t,e,n,s){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ah),h.toneMapping=li,h.autoClear=!1;const f=new Xn({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new gt(new dn,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(ah),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Wr(s,M*x,m>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===bs||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ca)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lh[(s-r-1)%lh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new gt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Oi;p>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Oi}`);const m=[];let M=0;for(let w=0;w<Oi;++w){const R=w/_,S=Math.exp(-R*R/2);m.push(S),w===0?M+=S:w<p&&(M+=2*S)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const E=this._sizeLods[s],C=3*E*(s>x-ps?s-x+ps:0),A=4*(this._cubeSize-E);Wr(e,C,A,3*E,2*E),l.setRenderTarget(e),l.render(u,Ca)}}function b_(i){const t=[],e=[],n=[];let s=i;const r=i-ps+1+oh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ps?l=oh[o-i+ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*f),x=new Float32Array(p*g*f),E=new Float32Array(m*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,R=A>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(S,_*g*A),x.set(d,p*g*A);const y=[A,A,A,A,A,A];E.set(y,m*g*A)}const C=new Ne;C.setAttribute("position",new sn(M,_)),C.setAttribute("uv",new sn(x,p)),C.setAttribute("faceIndex",new sn(E,m)),t.push(C),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ch(i,t,e){const n=new mn(i,t,e);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function S_(i,t,e){const n=new Float32Array(Oi),s=new D(0,1,0);return new Me({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function hh(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function uh(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function E_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ll||l===cl,h=l===bs||l===Ss;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new dl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new dl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function T_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ad("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function w_(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,E=M.length;x<E;x+=3){const C=M[x+0],A=M[x+1],w=M[x+2];d.push(C,A,A,w,w,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,E=M.length/3-1;x<E;x+=3){const C=x+0,A=x+1,w=x+2;d.push(C,A,A,w,w,C)}}else return;const p=new(wd(d)?Id:Dd)(d,1);p.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function A_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(d[p]/o,f[p]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}}function u(d,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function C_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function R_(i,t,e){const n=new WeakMap,s=new oe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let C=a.attributes.position.count*E,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const w=new Float32Array(C*A*4*u),R=new Rd(w,C,A,u);R.type=Vn,R.needsUpdate=!0;const S=E*4;for(let P=0;P<u;P++){const O=m[P],U=M[P],Y=x[P],X=C*A*4*P;for(let V=0;V<O.count;V++){const K=V*S;g===!0&&(s.fromBufferAttribute(O,V),w[X+K+0]=s.x,w[X+K+1]=s.y,w[X+K+2]=s.z,w[X+K+3]=0),_===!0&&(s.fromBufferAttribute(U,V),w[X+K+4]=s.x,w[X+K+5]=s.y,w[X+K+6]=s.z,w[X+K+7]=0),p===!0&&(s.fromBufferAttribute(Y,V),w[X+K+8]=s.x,w[X+K+9]=s.y,w[X+K+10]=s.z,w[X+K+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new nt(C,A)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function P_(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class kd extends ze{constructor(t,e,n,s,r,o,a,l,c,h=vs){if(h!==vs&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Es),n===void 0&&h===ws&&(n=Ts),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zd=new ze,Bd=new kd(1,1);Bd.compareFunction=Td;const Hd=new Rd,Vd=new _m,Gd=new Ud,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function Us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vo(i,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function L_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function D_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function N_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;gh.set(n),i.uniformMatrix2fv(this.addr,!1,gh),Se(e,n)}}function U_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;mh.set(n),i.uniformMatrix3fv(this.addr,!1,mh),Se(e,n)}}function F_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;ph.set(n),i.uniformMatrix4fv(this.addr,!1,ph),Se(e,n)}}function k_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function B_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function V_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function q_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Bd:zd;e.setTexture2D(t||r,s)}function Y_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vd,s)}function j_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gd,s)}function $_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hd,s)}function K_(i){switch(i){case 5126:return L_;case 35664:return D_;case 35665:return I_;case 35666:return O_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return k_;case 35667:case 35671:return z_;case 35668:case 35672:return B_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return G_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return $_}}function Z_(i,t){i.uniform1fv(this.addr,t)}function J_(i,t){const e=Us(t,this.size,2);i.uniform2fv(this.addr,e)}function Q_(i,t){const e=Us(t,this.size,3);i.uniform3fv(this.addr,e)}function tv(i,t){const e=Us(t,this.size,4);i.uniform4fv(this.addr,e)}function ev(i,t){const e=Us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function nv(i,t){const e=Us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function iv(i,t){const e=Us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sv(i,t){i.uniform1iv(this.addr,t)}function rv(i,t){i.uniform2iv(this.addr,t)}function ov(i,t){i.uniform3iv(this.addr,t)}function av(i,t){i.uniform4iv(this.addr,t)}function lv(i,t){i.uniform1uiv(this.addr,t)}function cv(i,t){i.uniform2uiv(this.addr,t)}function hv(i,t){i.uniform3uiv(this.addr,t)}function uv(i,t){i.uniform4uiv(this.addr,t)}function dv(i,t,e){const n=this.cache,s=t.length,r=Vo(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zd,r[o])}function fv(i,t,e){const n=this.cache,s=t.length,r=Vo(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vd,r[o])}function pv(i,t,e){const n=this.cache,s=t.length,r=Vo(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gd,r[o])}function mv(i,t,e){const n=this.cache,s=t.length,r=Vo(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hd,r[o])}function gv(i){switch(i){case 5126:return Z_;case 35664:return J_;case 35665:return Q_;case 35666:return tv;case 35674:return ev;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return sv;case 35667:case 35671:return rv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return hv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}class _v{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=K_(e.type)}}class vv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gv(e.type)}}class xv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function _h(i,t){i.seq.push(t),i.map[t.id]=t}function yv(i,t,e){const n=i.name,s=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),o=Ia.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_h(e,c===void 0?new _v(a,i,t):new vv(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new xv(a),_h(e,u)),e=u}}}class go{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);yv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function vh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Mv=37297;let bv=0;function Sv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Ev(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===wo&&e===To?n="LinearDisplayP3ToLinearSRGB":t===To&&e===wo&&(n="LinearSRGBToLinearDisplayP3"),i){case gi:case Ho:return[n,"LinearTransferOETF"];case cn:case Ol:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Sv(i.getShaderSource(t),o)}else return s}function Tv(i,t){const e=Ev(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function wv(i,t){let e;switch(t){case ud:e="Linear";break;case dd:e="Reinhard";break;case fd:e="OptimizedCineon";break;case Il:e="ACESFilmic";break;case pd:e="AgX";break;case md:e="Neutral";break;case wp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function Cv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Js(i){return i!==""}function yh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(i){return i.replace(Pv,Dv)}const Lv=new Map;function Dv(i,t){let e=Nt[t];if(e===void 0){const n=Lv.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fl(e)}const Iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(i){return i.replace(Iv,Ov)}function Ov(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ld?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Uv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ss:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function kv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hd:t="ENVMAP_BLENDING_MULTIPLY";break;case Ep:t="ENVMAP_BLENDING_MIX";break;case Tp:t="ENVMAP_BLENDING_ADD";break}return t}function zv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Nv(e),c=Uv(e),h=Fv(e),u=kv(e),d=zv(e),f=Av(e),g=Cv(r),_=s.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Js).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Js).join(`
`),m.length>0&&(m+=`
`)):(p=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),m=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Nt.tonemapping_pars_fragment:"",e.toneMapping!==li?wv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Tv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),o=fl(o),o=yh(o,e),o=Mh(o,e),a=fl(a),a=yh(a,e),a=Mh(a,e),o=bh(o),a=bh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+o,E=M+m+a,C=vh(s,s.VERTEX_SHADER,x),A=vh(s,s.FRAGMENT_SHADER,E);s.attachShader(_,C),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(C).trim(),Y=s.getShaderInfoLog(A).trim();let X=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,A);else{const K=xh(s,C,"vertex"),j=xh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+K+`
`+j)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||Y==="")&&(V=!1);V&&(P.diagnostics={runnable:X,programLog:O,vertexShader:{log:U,prefix:p},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(C),s.deleteShader(A),R=new go(s,_),S=Rv(s,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Mv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let Hv=0;class Vv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gv(t),e.set(t,n)),n}}class Gv{constructor(t){this.id=Hv++,this.code=t,this.usedTimes=0}}function Wv(i,t,e,n,s,r,o){const a=new Pd,l=new Vv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,y,P,O,U){const Y=O.fog,X=U.geometry,V=S.isMeshStandardMaterial?O.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),j=K&&K.mapping===Bo?K.image.height:null,ct=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=dt!==void 0?dt.length:0;let Rt=0;X.morphAttributes.position!==void 0&&(Rt=1),X.morphAttributes.normal!==void 0&&(Rt=2),X.morphAttributes.color!==void 0&&(Rt=3);let Ht,$,et,ut;if(ct){const $t=Sn[ct];Ht=$t.vertexShader,$=$t.fragmentShader}else Ht=S.vertexShader,$=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),ut=l.getFragmentShaderID(S);const lt=i.getRenderTarget(),kt=U.isInstancedMesh===!0,Pt=U.isBatchedMesh===!0,Gt=!!S.map,I=!!S.matcap,Wt=!!K,Vt=!!S.aoMap,ne=!!S.lightMap,St=!!S.bumpMap,Xt=!!S.normalMap,zt=!!S.displacementMap,Lt=!!S.emissiveMap,le=!!S.metalnessMap,L=!!S.roughnessMap,b=S.anisotropy>0,G=S.clearcoat>0,Z=S.dispersion>0,Q=S.iridescence>0,tt=S.sheen>0,xt=S.transmission>0,ot=b&&!!S.anisotropyMap,rt=G&&!!S.clearcoatMap,Dt=G&&!!S.clearcoatNormalMap,it=G&&!!S.clearcoatRoughnessMap,_t=Q&&!!S.iridescenceMap,Bt=Q&&!!S.iridescenceThicknessMap,Tt=tt&&!!S.sheenColorMap,ht=tt&&!!S.sheenRoughnessMap,It=!!S.specularMap,Ot=!!S.specularColorMap,ce=!!S.specularIntensityMap,v=xt&&!!S.transmissionMap,W=xt&&!!S.thicknessMap,z=!!S.gradientMap,q=!!S.alphaMap,J=S.alphaTest>0,yt=!!S.alphaHash,Ct=!!S.extensions;let he=li;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(he=i.toneMapping);const me={shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:Ht,fragmentShader:$,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:ut,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Pt,batchingColor:Pt&&U._colorsTexture!==null,instancing:kt,instancingColor:kt&&U.instanceColor!==null,instancingMorph:kt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:gi,alphaToCoverage:!!S.alphaToCoverage,map:Gt,matcap:I,envMap:Wt,envMapMode:Wt&&K.mapping,envMapCubeUVHeight:j,aoMap:Vt,lightMap:ne,bumpMap:St,normalMap:Xt,displacementMap:d&&zt,emissiveMap:Lt,normalMapObjectSpace:Xt&&S.normalMapType===zp,normalMapTangentSpace:Xt&&S.normalMapType===Ed,metalnessMap:le,roughnessMap:L,anisotropy:b,anisotropyMap:ot,clearcoat:G,clearcoatMap:rt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:it,dispersion:Z,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:Bt,sheen:tt,sheenColorMap:Tt,sheenRoughnessMap:ht,specularMap:It,specularColorMap:Ot,specularIntensityMap:ce,transmission:xt,transmissionMap:v,thicknessMap:W,gradientMap:z,opaque:S.transparent===!1&&S.blending===_s&&S.alphaToCoverage===!1,alphaMap:q,alphaTest:J,alphaHash:yt,combine:S.combine,mapUv:Gt&&_(S.map.channel),aoMapUv:Vt&&_(S.aoMap.channel),lightMapUv:ne&&_(S.lightMap.channel),bumpMapUv:St&&_(S.bumpMap.channel),normalMapUv:Xt&&_(S.normalMap.channel),displacementMapUv:zt&&_(S.displacementMap.channel),emissiveMapUv:Lt&&_(S.emissiveMap.channel),metalnessMapUv:le&&_(S.metalnessMap.channel),roughnessMapUv:L&&_(S.roughnessMap.channel),anisotropyMapUv:ot&&_(S.anisotropyMap.channel),clearcoatMapUv:rt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ht&&_(S.sheenRoughnessMap.channel),specularMapUv:It&&_(S.specularMap.channel),specularColorMapUv:Ot&&_(S.specularColorMap.channel),specularIntensityMapUv:ce&&_(S.specularIntensityMap.channel),transmissionMapUv:v&&_(S.transmissionMap.channel),thicknessMapUv:W&&_(S.thicknessMap.channel),alphaMapUv:q&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Xt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Gt||q),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:Gt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ie,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hn,flipSided:S.side===De,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ct&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ct&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function m(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(y,S),x(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),S.push(a.mask)}function E(S){const y=g[S.type];let P;if(y){const O=Sn[y];P=fr.clone(O.uniforms)}else P=S.uniforms;return P}function C(S,y){let P;for(let O=0,U=h.length;O<U;O++){const Y=h[O];if(Y.cacheKey===y){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new Bv(i,y,S,r),h.push(P)),P}function A(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function Xv(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function qv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Th(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||qv),n.length>1&&n.sort(d||Eh),s.length>1&&s.sort(d||Eh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Yv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Th,i.set(n,[o])):s>=r.length?(o=new Th,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new bt};break;case"SpotLight":e={position:new D,direction:new D,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function $v(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Kv=0;function Zv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jv(i){const t=new jv,e=$v(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new ee,o=new ee;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,x=0,E=0,C=0,A=0,w=0;c.sort(Zv);for(let S=0,y=c.length;S<y;S++){const P=c[S],O=P.color,U=P.intensity,Y=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*U,u+=O.g*U,d+=O.b*U;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],U);w++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,j=e.get(P);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(O).multiplyScalar(U),V.distance=Y,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const K=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,K.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const j=e.get(P);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=X,E++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(O).multiplyScalar(U),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=V,p++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const K=P.shadow,j=e.get(P);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(U),V.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[m]=V,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==E||R.numSpotMaps!==C||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=E,R.numSpotMaps=C,R.numLightProbes=w,n.version=Kv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(x.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function wh(i){const t=new Jv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Qv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new wh(i),t.set(s,[a])):r>=o.length?(a=new wh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class tx extends Ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ex extends Ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ix=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sx(i,t,e){let n=new Fl;const s=new nt,r=new nt,o=new oe,a=new tx({depthPacking:kp}),l=new ex,c={},h=e.maxTextureSize,u={[ui]:De,[De]:ui,[hn]:hn},d=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:nx,fragmentShader:ix}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let m=this.type;this.render=function(A,w,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Wn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=m!==Fn&&this.type===Fn,Y=m===Fn&&this.type!==Fn;for(let X=0,V=A.length;X<V;X++){const K=A[X],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const ct=j.getFrameExtents();if(s.multiply(ct),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,j.mapSize.y=r.y)),j.map===null||U===!0||Y===!0){const pt=this.type!==Fn?{minFilter:We,magFilter:We}:{};j.map!==null&&j.map.dispose(),j.map=new mn(s.x,s.y,pt),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const dt=j.getViewportCount();for(let pt=0;pt<dt;pt++){const Rt=j.getViewport(pt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),O.viewport(o),j.updateMatrices(K,pt),n=j.getFrustum(),E(w,R,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===Fn&&M(j,R),j.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(S,y,P)};function M(A,w){const R=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new mn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,R,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,R,f,_,null)}function x(A,w,R,S){let y=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=y.uuid,U=w.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let X=Y[U];X===void 0&&(X=y.clone(),Y[U]=X,w.addEventListener("dispose",C)),y=X}if(y.visible=w.visible,y.wireframe=w.wireframe,S===Fn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=R}return y}function E(A,w,R,S,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const U=t.update(A),Y=A.material;if(Array.isArray(Y)){const X=U.groups;for(let V=0,K=X.length;V<K;V++){const j=X[V],ct=Y[j.materialIndex];if(ct&&ct.visible){const dt=x(A,ct,S,y);A.onBeforeShadow(i,A,w,R,U,dt,j),i.renderBufferDirect(R,null,U,dt,A,j),A.onAfterShadow(i,A,w,R,U,dt,j)}}}else if(Y.visible){const X=x(A,Y,S,y);A.onBeforeShadow(i,A,w,R,U,X,null),i.renderBufferDirect(R,null,U,X,A,null),A.onAfterShadow(i,A,w,R,U,X,null)}}const O=A.children;for(let U=0,Y=O.length;U<Y;U++)E(O[U],w,R,S,y)}function C(A){A.target.removeEventListener("dispose",C);for(const R in c){const S=c[R],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function rx(i){function t(){let v=!1;const W=new oe;let z=null;const q=new oe(0,0,0,0);return{setMask:function(J){z!==J&&!v&&(i.colorMask(J,J,J,J),z=J)},setLocked:function(J){v=J},setClear:function(J,yt,Ct,he,me){me===!0&&(J*=he,yt*=he,Ct*=he),W.set(J,yt,Ct,he),q.equals(W)===!1&&(i.clearColor(J,yt,Ct,he),q.copy(W))},reset:function(){v=!1,z=null,q.set(-1,0,0,0)}}}function e(){let v=!1,W=null,z=null,q=null;return{setTest:function(J){J?ut(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(J){W!==J&&!v&&(i.depthMask(J),W=J)},setFunc:function(J){if(z!==J){switch(J){case _p:i.depthFunc(i.NEVER);break;case vp:i.depthFunc(i.ALWAYS);break;case xp:i.depthFunc(i.LESS);break;case bo:i.depthFunc(i.LEQUAL);break;case yp:i.depthFunc(i.EQUAL);break;case Mp:i.depthFunc(i.GEQUAL);break;case bp:i.depthFunc(i.GREATER);break;case Sp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}z=J}},setLocked:function(J){v=J},setClear:function(J){q!==J&&(i.clearDepth(J),q=J)},reset:function(){v=!1,W=null,z=null,q=null}}}function n(){let v=!1,W=null,z=null,q=null,J=null,yt=null,Ct=null,he=null,me=null;return{setTest:function($t){v||($t?ut(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function($t){W!==$t&&!v&&(i.stencilMask($t),W=$t)},setFunc:function($t,ge,_e){(z!==$t||q!==ge||J!==_e)&&(i.stencilFunc($t,ge,_e),z=$t,q=ge,J=_e)},setOp:function($t,ge,_e){(yt!==$t||Ct!==ge||he!==_e)&&(i.stencilOp($t,ge,_e),yt=$t,Ct=ge,he=_e)},setLocked:function($t){v=$t},setClear:function($t){me!==$t&&(i.clearStencil($t),me=$t)},reset:function(){v=!1,W=null,z=null,q=null,J=null,yt=null,Ct=null,he=null,me=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,x=null,E=null,C=null,A=new bt(0,0,0),w=0,R=!1,S=null,y=null,P=null,O=null,U=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,V=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=V>=1):K.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=V>=2);let j=null,ct={};const dt=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Rt=new oe().fromArray(dt),Ht=new oe().fromArray(pt);function $(v,W,z,q){const J=new Uint8Array(4),yt=i.createTexture();i.bindTexture(v,yt),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<z;Ct++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(W,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(W+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return yt}const et={};et[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),r.setFunc(bo),St(!1),Xt(lc),ut(i.CULL_FACE),Vt(Wn);function ut(v){c[v]!==!0&&(i.enable(v),c[v]=!0)}function lt(v){c[v]!==!1&&(i.disable(v),c[v]=!1)}function kt(v,W){return h[v]!==W?(i.bindFramebuffer(v,W),h[v]=W,v===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=W),v===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=W),!0):!1}function Pt(v,W){let z=d,q=!1;if(v){z=u.get(W),z===void 0&&(z=[],u.set(W,z));const J=v.textures;if(z.length!==J.length||z[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Ct=J.length;yt<Ct;yt++)z[yt]=i.COLOR_ATTACHMENT0+yt;z.length=J.length,q=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,q=!0);q&&i.drawBuffers(z)}function Gt(v){return f!==v?(i.useProgram(v),f=v,!0):!1}const I={[Ii]:i.FUNC_ADD,[tp]:i.FUNC_SUBTRACT,[ep]:i.FUNC_REVERSE_SUBTRACT};I[np]=i.MIN,I[ip]=i.MAX;const Wt={[sp]:i.ZERO,[rp]:i.ONE,[op]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[dp]:i.SRC_ALPHA_SATURATE,[hp]:i.DST_COLOR,[lp]:i.DST_ALPHA,[ap]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[up]:i.ONE_MINUS_DST_COLOR,[cp]:i.ONE_MINUS_DST_ALPHA,[fp]:i.CONSTANT_COLOR,[pp]:i.ONE_MINUS_CONSTANT_COLOR,[mp]:i.CONSTANT_ALPHA,[gp]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(v,W,z,q,J,yt,Ct,he,me,$t){if(v===Wn){g===!0&&(lt(i.BLEND),g=!1);return}if(g===!1&&(ut(i.BLEND),g=!0),v!==Qf){if(v!==_||$t!==R){if((p!==Ii||x!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,x=Ii),$t)switch(v){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mo:i.blendFunc(i.ONE,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}m=null,M=null,E=null,C=null,A.set(0,0,0),w=0,_=v,R=$t}return}J=J||W,yt=yt||z,Ct=Ct||q,(W!==p||J!==x)&&(i.blendEquationSeparate(I[W],I[J]),p=W,x=J),(z!==m||q!==M||yt!==E||Ct!==C)&&(i.blendFuncSeparate(Wt[z],Wt[q],Wt[yt],Wt[Ct]),m=z,M=q,E=yt,C=Ct),(he.equals(A)===!1||me!==w)&&(i.blendColor(he.r,he.g,he.b,me),A.copy(he),w=me),_=v,R=!1}function ne(v,W){v.side===hn?lt(i.CULL_FACE):ut(i.CULL_FACE);let z=v.side===De;W&&(z=!z),St(z),v.blending===_s&&v.transparent===!1?Vt(Wn):Vt(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),s.setMask(v.colorWrite);const q=v.stencilWrite;o.setTest(q),q&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Lt(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(v){S!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),S=v)}function Xt(v){v!==Zf?(ut(i.CULL_FACE),v!==y&&(v===lc?i.cullFace(i.BACK):v===Jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),y=v}function zt(v){v!==P&&(X&&i.lineWidth(v),P=v)}function Lt(v,W,z){v?(ut(i.POLYGON_OFFSET_FILL),(O!==W||U!==z)&&(i.polygonOffset(W,z),O=W,U=z)):lt(i.POLYGON_OFFSET_FILL)}function le(v){v?ut(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function L(v){v===void 0&&(v=i.TEXTURE0+Y-1),j!==v&&(i.activeTexture(v),j=v)}function b(v,W,z){z===void 0&&(j===null?z=i.TEXTURE0+Y-1:z=j);let q=ct[z];q===void 0&&(q={type:void 0,texture:void 0},ct[z]=q),(q.type!==v||q.texture!==W)&&(j!==z&&(i.activeTexture(z),j=z),i.bindTexture(v,W||et[v]),q.type=v,q.texture=W)}function G(){const v=ct[j];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Dt(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Tt(v){Rt.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),Rt.copy(v))}function ht(v){Ht.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),Ht.copy(v))}function It(v,W){let z=l.get(W);z===void 0&&(z=new WeakMap,l.set(W,z));let q=z.get(v);q===void 0&&(q=i.getUniformBlockIndex(W,v.name),z.set(v,q))}function Ot(v,W){const q=l.get(W).get(v);a.get(W)!==q&&(i.uniformBlockBinding(W,q,v.__bindingPointIndex),a.set(W,q))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},j=null,ct={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,x=null,E=null,C=null,A=new bt(0,0,0),w=0,R=!1,S=null,y=null,P=null,O=null,U=null,Rt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ut,disable:lt,bindFramebuffer:kt,drawBuffers:Pt,useProgram:Gt,setBlending:Vt,setMaterial:ne,setFlipSided:St,setCullFace:Xt,setLineWidth:zt,setPolygonOffset:Lt,setScissorTest:le,activeTexture:L,bindTexture:b,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:_t,texImage3D:Bt,updateUBOMapping:It,uniformBlockBinding:Ot,texStorage2D:Dt,texStorage3D:it,texSubImage2D:tt,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:rt,scissor:Tt,viewport:ht,reset:ce}}function ox(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return f?new OffscreenCanvas(L,b):Co("canvas")}function _(L,b,G){let Z=1;const Q=le(L);if((Q.width>G||Q.height>G)&&(Z=G/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const tt=Math.floor(Z*Q.width),xt=Math.floor(Z*Q.height);u===void 0&&(u=g(tt,xt));const ot=b?g(tt,xt):u;return ot.width=tt,ot.height=xt,ot.getContext("2d").drawImage(L,0,0,tt,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+tt+"x"+xt+")."),ot}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function p(L){return L.generateMipmaps&&L.minFilter!==We&&L.minFilter!==un}function m(L){i.generateMipmap(L)}function M(L,b,G,Z,Q=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let tt=b;if(b===i.RED&&(G===i.FLOAT&&(tt=i.R32F),G===i.HALF_FLOAT&&(tt=i.R16F),G===i.UNSIGNED_BYTE&&(tt=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.R8UI),G===i.UNSIGNED_SHORT&&(tt=i.R16UI),G===i.UNSIGNED_INT&&(tt=i.R32UI),G===i.BYTE&&(tt=i.R8I),G===i.SHORT&&(tt=i.R16I),G===i.INT&&(tt=i.R32I)),b===i.RG&&(G===i.FLOAT&&(tt=i.RG32F),G===i.HALF_FLOAT&&(tt=i.RG16F),G===i.UNSIGNED_BYTE&&(tt=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RG8UI),G===i.UNSIGNED_SHORT&&(tt=i.RG16UI),G===i.UNSIGNED_INT&&(tt=i.RG32UI),G===i.BYTE&&(tt=i.RG8I),G===i.SHORT&&(tt=i.RG16I),G===i.INT&&(tt=i.RG32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),b===i.RGBA){const xt=Q?Eo:Zt.getTransfer(Z);G===i.FLOAT&&(tt=i.RGBA32F),G===i.HALF_FLOAT&&(tt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(tt=xt===ie?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(L,b){let G;return L?b===null||b===Es||b===Ts?G=i.DEPTH24_STENCIL8:b===Vn?G=i.DEPTH32F_STENCIL8:b===So&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Es||b===Ts?G=i.DEPTH_COMPONENT24:b===Vn?G=i.DEPTH_COMPONENT32F:b===So&&(G=i.DEPTH_COMPONENT16),G}function E(L,b){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==We&&L.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function C(L){const b=L.target;b.removeEventListener("dispose",C),w(b),b.isVideoTexture&&h.delete(b)}function A(L){const b=L.target;b.removeEventListener("dispose",A),S(b)}function w(L){const b=n.get(L);if(b.__webglInit===void 0)return;const G=L.source,Z=d.get(G);if(Z){const Q=Z[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(L),Object.keys(Z).length===0&&d.delete(G)}n.remove(L)}function R(L){const b=n.get(L);i.deleteTexture(b.__webglTexture);const G=L.source,Z=d.get(G);delete Z[b.__cacheKey],o.memory.textures--}function S(L){const b=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let Q=0;Q<b.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=L.textures;for(let Z=0,Q=G.length;Z<Q;Z++){const tt=n.get(G[Z]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(L)}let y=0;function P(){y=0}function O(){const L=y;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),y+=1,L}function U(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function Y(L,b){const G=n.get(L);if(L.isVideoTexture&&zt(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(G,L,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function X(L,b){const G=n.get(L);if(L.version>0&&G.__version!==L.version){Ht(G,L,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function V(L,b){const G=n.get(L);if(L.version>0&&G.__version!==L.version){Ht(G,L,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function K(L,b){const G=n.get(L);if(L.version>0&&G.__version!==L.version){$(G,L,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const j={[hl]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[ul]:i.MIRRORED_REPEAT},ct={[We]:i.NEAREST,[Ap]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},dt={[Bp]:i.NEVER,[qp]:i.ALWAYS,[Hp]:i.LESS,[Td]:i.LEQUAL,[Vp]:i.EQUAL,[Xp]:i.GEQUAL,[Gp]:i.GREATER,[Wp]:i.NOTEQUAL};function pt(L,b){if(b.type===Vn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===sa||b.magFilter===Sr||b.magFilter===Ui||b.minFilter===un||b.minFilter===sa||b.minFilter===Sr||b.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,j[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,j[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,j[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ct[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,dt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===We||b.minFilter!==Sr&&b.minFilter!==Ui||b.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Rt(L,b){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",C));const Z=b.source;let Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));const tt=U(b);if(tt!==L.__cacheKey){Q[tt]===void 0&&(Q[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[tt].usedTimes++;const xt=Q[L.__cacheKey];xt!==void 0&&(Q[L.__cacheKey].usedTimes--,xt.usedTimes===0&&R(b)),L.__cacheKey=tt,L.__webglTexture=Q[tt].texture}return G}function Ht(L,b,G){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);const Q=Rt(L,b),tt=b.source;e.bindTexture(Z,L.__webglTexture,i.TEXTURE0+G);const xt=n.get(tt);if(tt.version!==xt.__version||Q===!0){e.activeTexture(i.TEXTURE0+G);const ot=Zt.getPrimaries(Zt.workingColorSpace),rt=b.colorSpace===ni?null:Zt.getPrimaries(b.colorSpace),Dt=b.colorSpace===ni||ot===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let it=_(b.image,!1,s.maxTextureSize);it=Lt(b,it);const _t=r.convert(b.format,b.colorSpace),Bt=r.convert(b.type);let Tt=M(b.internalFormat,_t,Bt,b.colorSpace,b.isVideoTexture);pt(Z,b);let ht;const It=b.mipmaps,Ot=b.isVideoTexture!==!0,ce=xt.__version===void 0||Q===!0,v=tt.dataReady,W=E(b,it);if(b.isDepthTexture)Tt=x(b.format===ws,b.type),ce&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Tt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Tt,it.width,it.height,0,_t,Bt,null));else if(b.isDataTexture)if(It.length>0){Ot&&ce&&e.texStorage2D(i.TEXTURE_2D,W,Tt,It[0].width,It[0].height);for(let z=0,q=It.length;z<q;z++)ht=It[z],Ot?v&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ht.width,ht.height,_t,Bt,ht.data):e.texImage2D(i.TEXTURE_2D,z,Tt,ht.width,ht.height,0,_t,Bt,ht.data);b.generateMipmaps=!1}else Ot?(ce&&e.texStorage2D(i.TEXTURE_2D,W,Tt,it.width,it.height),v&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,_t,Bt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,it.width,it.height,0,_t,Bt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ot&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,W,Tt,It[0].width,It[0].height,it.depth);for(let z=0,q=It.length;z<q;z++)if(ht=It[z],b.format!==wn)if(_t!==null)if(Ot){if(v)if(b.layerUpdates.size>0){for(const J of b.layerUpdates){const yt=ht.width*ht.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,J,ht.width,ht.height,1,_t,ht.data.slice(yt*J,yt*(J+1)),0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ht.width,ht.height,it.depth,_t,ht.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Tt,ht.width,ht.height,it.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?v&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ht.width,ht.height,it.depth,_t,Bt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,Tt,ht.width,ht.height,it.depth,0,_t,Bt,ht.data)}else{Ot&&ce&&e.texStorage2D(i.TEXTURE_2D,W,Tt,It[0].width,It[0].height);for(let z=0,q=It.length;z<q;z++)ht=It[z],b.format!==wn?_t!==null?Ot?v&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,ht.width,ht.height,_t,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,z,Tt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?v&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ht.width,ht.height,_t,Bt,ht.data):e.texImage2D(i.TEXTURE_2D,z,Tt,ht.width,ht.height,0,_t,Bt,ht.data)}else if(b.isDataArrayTexture)if(Ot){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,W,Tt,it.width,it.height,it.depth),v)if(b.layerUpdates.size>0){let z;switch(Bt){case i.UNSIGNED_BYTE:switch(_t){case i.ALPHA:z=1;break;case i.LUMINANCE:z=1;break;case i.LUMINANCE_ALPHA:z=2;break;case i.RGB:z=3;break;case i.RGBA:z=4;break;default:throw new Error(`Unknown texel size for format ${_t}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:z=1;break;default:throw new Error(`Unknown texel size for type ${Bt}.`)}const q=it.width*it.height*z;for(const J of b.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,_t,Bt,it.data.slice(q*J,q*(J+1)));b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,Bt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,it.width,it.height,it.depth,0,_t,Bt,it.data);else if(b.isData3DTexture)Ot?(ce&&e.texStorage3D(i.TEXTURE_3D,W,Tt,it.width,it.height,it.depth),v&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,Bt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,it.width,it.height,it.depth,0,_t,Bt,it.data);else if(b.isFramebufferTexture){if(ce)if(Ot)e.texStorage2D(i.TEXTURE_2D,W,Tt,it.width,it.height);else{let z=it.width,q=it.height;for(let J=0;J<W;J++)e.texImage2D(i.TEXTURE_2D,J,Tt,z,q,0,_t,Bt,null),z>>=1,q>>=1}}else if(It.length>0){if(Ot&&ce){const z=le(It[0]);e.texStorage2D(i.TEXTURE_2D,W,Tt,z.width,z.height)}for(let z=0,q=It.length;z<q;z++)ht=It[z],Ot?v&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,_t,Bt,ht):e.texImage2D(i.TEXTURE_2D,z,Tt,_t,Bt,ht);b.generateMipmaps=!1}else if(Ot){if(ce){const z=le(it);e.texStorage2D(i.TEXTURE_2D,W,Tt,z.width,z.height)}v&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Bt,it)}else e.texImage2D(i.TEXTURE_2D,0,Tt,_t,Bt,it);p(b)&&m(Z),xt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function $(L,b,G){if(b.image.length!==6)return;const Z=Rt(L,b),Q=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+G);const tt=n.get(Q);if(Q.version!==tt.__version||Z===!0){e.activeTexture(i.TEXTURE0+G);const xt=Zt.getPrimaries(Zt.workingColorSpace),ot=b.colorSpace===ni?null:Zt.getPrimaries(b.colorSpace),rt=b.colorSpace===ni||xt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const Dt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let q=0;q<6;q++)!Dt&&!it?_t[q]=_(b.image[q],!0,s.maxCubemapSize):_t[q]=it?b.image[q].image:b.image[q],_t[q]=Lt(b,_t[q]);const Bt=_t[0],Tt=r.convert(b.format,b.colorSpace),ht=r.convert(b.type),It=M(b.internalFormat,Tt,ht,b.colorSpace),Ot=b.isVideoTexture!==!0,ce=tt.__version===void 0||Z===!0,v=Q.dataReady;let W=E(b,Bt);pt(i.TEXTURE_CUBE_MAP,b);let z;if(Dt){Ot&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,W,It,Bt.width,Bt.height);for(let q=0;q<6;q++){z=_t[q].mipmaps;for(let J=0;J<z.length;J++){const yt=z[J];b.format!==wn?Tt!==null?Ot?v&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,J,0,0,yt.width,yt.height,Tt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,J,It,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?v&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,J,0,0,yt.width,yt.height,Tt,ht,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,J,It,yt.width,yt.height,0,Tt,ht,yt.data)}}}else{if(z=b.mipmaps,Ot&&ce){z.length>0&&W++;const q=le(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,W,It,q.width,q.height)}for(let q=0;q<6;q++)if(it){Ot?v&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,_t[q].width,_t[q].height,Tt,ht,_t[q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,It,_t[q].width,_t[q].height,0,Tt,ht,_t[q].data);for(let J=0;J<z.length;J++){const Ct=z[J].image[q].image;Ot?v&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,J+1,0,0,Ct.width,Ct.height,Tt,ht,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,J+1,It,Ct.width,Ct.height,0,Tt,ht,Ct.data)}}else{Ot?v&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Tt,ht,_t[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,It,Tt,ht,_t[q]);for(let J=0;J<z.length;J++){const yt=z[J];Ot?v&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,J+1,0,0,Tt,ht,yt.image[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,J+1,It,Tt,ht,yt.image[q])}}}p(b)&&m(i.TEXTURE_CUBE_MAP),tt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function et(L,b,G,Z,Q,tt){const xt=r.convert(G.format,G.colorSpace),ot=r.convert(G.type),rt=M(G.internalFormat,xt,ot,G.colorSpace);if(!n.get(b).__hasExternalTextures){const it=Math.max(1,b.width>>tt),_t=Math.max(1,b.height>>tt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,tt,rt,it,_t,b.depth,0,xt,ot,null):e.texImage2D(Q,tt,rt,it,_t,0,xt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,n.get(G).__webglTexture,0,St(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,n.get(G).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(L,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){const Z=b.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,tt=x(b.stencilBuffer,Q),xt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=St(b);Xt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,tt,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,tt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,tt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,L)}else{const Z=b.textures;for(let Q=0;Q<Z.length;Q++){const tt=Z[Q],xt=r.convert(tt.format,tt.colorSpace),ot=r.convert(tt.type),rt=M(tt.internalFormat,xt,ot,tt.colorSpace),Dt=St(b);G&&Xt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,rt,b.width,b.height):Xt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,rt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,rt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const Z=n.get(b.depthTexture).__webglTexture,Q=St(b);if(b.depthTexture.format===vs)Xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(b.depthTexture.format===ws)Xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function kt(L){const b=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");lt(b.__webglFramebuffer,L)}else if(G){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]=i.createRenderbuffer(),ut(b.__webglDepthbuffer[Z],L,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),ut(b.__webglDepthbuffer,L,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(L,b,G){const Z=n.get(L);b!==void 0&&et(Z.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&kt(L)}function Gt(L){const b=L.texture,G=n.get(L),Z=n.get(b);L.addEventListener("dispose",A);const Q=L.textures,tt=L.isWebGLCubeRenderTarget===!0,xt=Q.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,o.memory.textures++),tt){G.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ot]=[];for(let rt=0;rt<b.mipmaps.length;rt++)G.__webglFramebuffer[ot][rt]=i.createFramebuffer()}else G.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)G.__webglFramebuffer[ot]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ot=0,rt=Q.length;ot<rt;ot++){const Dt=n.get(Q[ot]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Xt(L)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const rt=Q[ot];G.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ot]);const Dt=r.convert(rt.format,rt.colorSpace),it=r.convert(rt.type),_t=M(rt.internalFormat,Dt,it,rt.colorSpace,L.isXRRenderTarget===!0),Bt=St(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,_t,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,G.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(G.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),pt(i.TEXTURE_CUBE_MAP,b);for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)et(G.__webglFramebuffer[ot][rt],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,rt);else et(G.__webglFramebuffer[ot],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,rt=Q.length;ot<rt;ot++){const Dt=Q[ot],it=n.get(Dt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),pt(i.TEXTURE_2D,Dt),et(G.__webglFramebuffer,L,Dt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),p(Dt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ot=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),pt(ot,b),b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)et(G.__webglFramebuffer[rt],L,b,i.COLOR_ATTACHMENT0,ot,rt);else et(G.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,ot,0);p(b)&&m(ot),e.unbindTexture()}L.depthBuffer&&kt(L)}function I(L){const b=L.textures;for(let G=0,Z=b.length;G<Z;G++){const Q=b[G];if(p(Q)){const tt=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(Q).__webglTexture;e.bindTexture(tt,xt),m(tt),e.unbindTexture()}}}const Wt=[],Vt=[];function ne(L){if(L.samples>0){if(Xt(L)===!1){const b=L.textures,G=L.width,Z=L.height;let Q=i.COLOR_BUFFER_BIT;const tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(L),ot=b.length>1;if(ot)for(let rt=0;rt<b.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let rt=0;rt<b.length;rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[rt]);const Dt=n.get(b[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,Q,i.NEAREST),l===!0&&(Wt.length=0,Vt.length=0,Wt.push(i.COLOR_ATTACHMENT0+rt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Wt.push(tt),Vt.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let rt=0;rt<b.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[rt]);const Dt=n.get(b[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function St(L){return Math.min(s.maxSamples,L.samples)}function Xt(L){const b=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function zt(L){const b=o.render.frame;h.get(L)!==b&&(h.set(L,b),L.update())}function Lt(L,b){const G=L.colorSpace,Z=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==gi&&G!==ni&&(Zt.getTransfer(G)===ie?(Z!==wn||Q!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function le(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=Pt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Xt}function ax(i,t){function e(n,s=ni){let r;const o=Zt.getTransfer(s);if(n===di)return i.UNSIGNED_BYTE;if(n===vd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cp)return i.BYTE;if(n===Rp)return i.SHORT;if(n===So)return i.UNSIGNED_SHORT;if(n===_d)return i.INT;if(n===Es)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===ci)return i.HALF_FLOAT;if(n===Lp)return i.ALPHA;if(n===Dp)return i.RGB;if(n===wn)return i.RGBA;if(n===Ip)return i.LUMINANCE;if(n===Op)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===yd)return i.RED;if(n===Md)return i.RED_INTEGER;if(n===Np)return i.RG;if(n===bd)return i.RG_INTEGER;if(n===Sd)return i.RGBA_INTEGER;if(n===ra||n===oa||n===aa||n===la)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uc||n===dc||n===fc||n===pc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mc||n===gc||n===_c)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mc||n===gc)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_c)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vc||n===xc||n===yc||n===Mc||n===bc||n===Sc||n===Ec||n===Tc||n===wc||n===Ac||n===Cc||n===Rc||n===Pc||n===Lc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===Dc||n===Ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ca)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Up||n===Oc||n===Nc||n===Uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class lx extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fn extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cx={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ux=`
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

}`;class dx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Me({vertexShader:hx,fragmentShader:ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class fx extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new dx,p=e.getContextAttributes();let m=null,M=null;const x=[],E=[],C=new nt;let A=null;const w=new Ve;w.layers.enable(1),w.viewport=new oe;const R=new Ve;R.layers.enable(2),R.viewport=new oe;const S=[w,R],y=new lx;y.layers.enable(1),y.layers.enable(2);let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=x[$];return et===void 0&&(et=new Oa,x[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=x[$];return et===void 0&&(et=new Oa,x[$]=et),et.getGripSpace()},this.getHand=function($){let et=x[$];return et===void 0&&(et=new Oa,x[$]=et),et.getHandSpace()};function U($){const et=E.indexOf($.inputSource);if(et===-1)return;const ut=x[et];ut!==void 0&&(ut.update($.inputSource,$.frame,c||o),ut.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",X);for(let $=0;$<x.length;$++){const et=E[$];et!==null&&(E[$]=null,x[$].disconnect(et))}P=null,O=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,M=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new mn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:di,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,ut=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?ws:vs,ut=p.stencil?Ts:Es);const kt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new mn(d.textureWidth,d.textureHeight,{format:wn,type:di,depthTexture:new kd(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X($){for(let et=0;et<$.removed.length;et++){const ut=$.removed[et],lt=E.indexOf(ut);lt>=0&&(E[lt]=null,x[lt].disconnect(ut))}for(let et=0;et<$.added.length;et++){const ut=$.added[et];let lt=E.indexOf(ut);if(lt===-1){for(let Pt=0;Pt<x.length;Pt++)if(Pt>=E.length){E.push(ut),lt=Pt;break}else if(E[Pt]===null){E[Pt]=ut,lt=Pt;break}if(lt===-1)break}const kt=x[lt];kt&&kt.connect(ut)}}const V=new D,K=new D;function j($,et,ut){V.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(ut.matrixWorld);const lt=V.distanceTo(K),kt=et.projectionMatrix.elements,Pt=ut.projectionMatrix.elements,Gt=kt[14]/(kt[10]-1),I=kt[14]/(kt[10]+1),Wt=(kt[9]+1)/kt[5],Vt=(kt[9]-1)/kt[5],ne=(kt[8]-1)/kt[0],St=(Pt[8]+1)/Pt[0],Xt=Gt*ne,zt=Gt*St,Lt=lt/(-ne+St),le=Lt*-ne;et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(le),$.translateZ(Lt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const L=Gt+Lt,b=I+Lt,G=Xt-le,Z=zt+(lt-le),Q=Wt*I/b*L,tt=Vt*I/b*L;$.projectionMatrix.makePerspective(G,Z,Q,tt,L,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ct($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;_.texture!==null&&($.near=_.depthNear,$.far=_.depthFar),y.near=R.near=w.near=$.near,y.far=R.far=w.far=$.far,(P!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,O=y.far,w.near=P,w.far=O,R.near=P,R.far=O,w.updateProjectionMatrix(),R.updateProjectionMatrix(),$.updateProjectionMatrix());const et=$.parent,ut=y.cameras;ct(y,et);for(let lt=0;lt<ut.length;lt++)ct(ut[lt],et);ut.length===2?j(y,w,R):y.projectionMatrix.copy(w.projectionMatrix),dt($,y,et)};function dt($,et,ut){ut===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(ut.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=As*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let pt=null;function Rt($,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let lt=!1;ut.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let Pt=0;Pt<ut.length;Pt++){const Gt=ut[Pt];let I=null;if(f!==null)I=f.getViewport(Gt);else{const Vt=u.getViewSubImage(d,Gt);I=Vt.viewport,Pt===0&&(t.setRenderTargetTextures(M,Vt.colorTexture,d.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(M))}let Wt=S[Pt];Wt===void 0&&(Wt=new Ve,Wt.layers.enable(Pt),Wt.viewport=new oe,S[Pt]=Wt),Wt.matrix.fromArray(Gt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Gt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(I.x,I.y,I.width,I.height),Pt===0&&(y.matrix.copy(Wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(Wt)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Pt=u.getDepthInformation(ut[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let ut=0;ut<x.length;ut++){const lt=E[ut],kt=x[ut];lt!==null&&kt!==void 0&&kt.update(lt,et,c||o)}pt&&pt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Ht=new Fd;Ht.setAnimationLoop(Rt),this.setAnimationLoop=function($){pt=$},this.dispose=function(){}}}const Ti=new An,px=new ee;function mx(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Od(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,x,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===De&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===De&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),x=M.envMap,E=M.envMapRotation;x&&(p.envMap.value=x,Ti.copy(E),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),p.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(Ti)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===De&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gx(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const E=x.program;n.uniformBlockBinding(M,E)}function c(M,x){let E=s[M.id];E===void 0&&(g(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",p));const C=x.program;n.updateUBOMapping(M,C);const A=t.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function h(M){const x=u();M.__bindingPointIndex=x;const E=i.createBuffer(),C=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],E=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,w=E.length;A<w;A++){const R=Array.isArray(E[A])?E[A]:[E[A]];for(let S=0,y=R.length;S<y;S++){const P=R[S];if(f(P,A,S,C)===!0){const O=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let X=0;X<U.length;X++){const V=U[X],K=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,O+Y,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,E,C){const A=M.value,w=x+"_"+E;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const R=C[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(M){const x=M.uniforms;let E=0;const C=16;for(let w=0,R=x.length;w<R;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,P=S.length;y<P;y++){const O=S[y],U=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,X=U.length;Y<X;Y++){const V=U[Y],K=_(V),j=E%C;j!==0&&C-j<K.boundary&&(E+=C-j),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=K.storage}}}const A=E%C;return A>0&&(E+=C-A),M.__size=E,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class _x{constructor(t={}){const{canvas:e=hm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=li,this.toneMappingExposure=1;const x=this;let E=!1,C=0,A=0,w=null,R=-1,S=null;const y=new oe,P=new oe;let O=null;const U=new bt(0);let Y=0,X=e.width,V=e.height,K=1,j=null,ct=null;const dt=new oe(0,0,X,V),pt=new oe(0,0,X,V);let Rt=!1;const Ht=new Fl;let $=!1,et=!1;const ut=new ee,lt=new D,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Gt(){return w===null?K:1}let I=n;function Wt(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dl}`),e.addEventListener("webglcontextlost",W,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",q,!1),I===null){const N="webgl2";if(I=Wt(N,T),I===null)throw Wt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Vt,ne,St,Xt,zt,Lt,le,L,b,G,Z,Q,tt,xt,ot,rt,Dt,it,_t,Bt,Tt,ht,It,Ot;function ce(){Vt=new T_(I),Vt.init(),ht=new ax(I,Vt),ne=new x_(I,Vt,t,ht),St=new rx(I),Xt=new C_(I),zt=new Xv,Lt=new ox(I,Vt,St,zt,ne,ht,Xt),le=new M_(x),L=new E_(x),b=new Nm(I),It=new __(I,b),G=new w_(I,b,Xt,It),Z=new P_(I,G,b,Xt),_t=new R_(I,ne,Lt),rt=new y_(zt),Q=new Wv(x,le,L,Vt,ne,It,rt),tt=new mx(x,zt),xt=new Yv,ot=new Qv(Vt),it=new g_(x,le,L,St,Z,d,l),Dt=new sx(x,Z,ne),Ot=new gx(I,Xt,ne,St),Bt=new v_(I,Vt,Xt),Tt=new A_(I,Vt,Xt),Xt.programs=Q.programs,x.capabilities=ne,x.extensions=Vt,x.properties=zt,x.renderLists=xt,x.shadowMap=Dt,x.state=St,x.info=Xt}ce();const v=new fx(x,I);this.xr=v,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Vt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Vt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(X,V,!1))},this.getSize=function(T){return T.set(X,V)},this.setSize=function(T,N,B=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,V=N,e.width=Math.floor(T*K),e.height=Math.floor(N*K),B===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(X*K,V*K).floor()},this.setDrawingBufferSize=function(T,N,B){X=T,V=N,K=B,e.width=Math.floor(T*B),e.height=Math.floor(N*B),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(dt)},this.setViewport=function(T,N,B,H){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,N,B,H),St.viewport(y.copy(dt).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(pt)},this.setScissor=function(T,N,B,H){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,N,B,H),St.scissor(P.copy(pt).multiplyScalar(K).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(T){St.setScissorTest(Rt=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(T=!0,N=!0,B=!0){let H=0;if(T){let F=!1;if(w!==null){const st=w.texture.format;F=st===Sd||st===bd||st===Md}if(F){const st=w.texture.type,ft=st===di||st===Es||st===So||st===Ts||st===vd||st===xd,mt=it.getClearColor(),vt=it.getClearAlpha(),wt=mt.r,At=mt.g,Et=mt.b;ft?(f[0]=wt,f[1]=At,f[2]=Et,f[3]=vt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=wt,g[1]=At,g[2]=Et,g[3]=vt,I.clearBufferiv(I.COLOR,0,g))}else H|=I.COLOR_BUFFER_BIT}N&&(H|=I.DEPTH_BUFFER_BIT),B&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",W,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",q,!1),xt.dispose(),ot.dispose(),zt.dispose(),le.dispose(),L.dispose(),Z.dispose(),It.dispose(),Ot.dispose(),Q.dispose(),v.dispose(),v.removeEventListener("sessionstart",ge),v.removeEventListener("sessionend",_e),qe.stop()};function W(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=Xt.autoReset,N=Dt.enabled,B=Dt.autoUpdate,H=Dt.needsUpdate,F=Dt.type;ce(),Xt.autoReset=T,Dt.enabled=N,Dt.autoUpdate=B,Dt.needsUpdate=H,Dt.type=F}function q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function J(T){const N=T.target;N.removeEventListener("dispose",J),yt(N)}function yt(T){Ct(T),zt.remove(T)}function Ct(T){const N=zt.get(T).programs;N!==void 0&&(N.forEach(function(B){Q.releaseProgram(B)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,B,H,F,st){N===null&&(N=kt);const ft=F.isMesh&&F.matrixWorld.determinant()<0,mt=Xf(T,N,B,H,F);St.setMaterial(H,ft);let vt=B.index,wt=1;if(H.wireframe===!0){if(vt=G.getWireframeAttribute(B),vt===void 0)return;wt=2}const At=B.drawRange,Et=B.attributes.position;let Kt=At.start*wt,ue=(At.start+At.count)*wt;st!==null&&(Kt=Math.max(Kt,st.start*wt),ue=Math.min(ue,(st.start+st.count)*wt)),vt!==null?(Kt=Math.max(Kt,0),ue=Math.min(ue,vt.count)):Et!=null&&(Kt=Math.max(Kt,0),ue=Math.min(ue,Et.count));const de=ue-Kt;if(de<0||de===1/0)return;It.setup(F,H,mt,B,vt);let je,Jt=Bt;if(vt!==null&&(je=b.get(vt),Jt=Tt,Jt.setIndex(je)),F.isMesh)H.wireframe===!0?(St.setLineWidth(H.wireframeLinewidth*Gt()),Jt.setMode(I.LINES)):Jt.setMode(I.TRIANGLES);else if(F.isLine){let Mt=H.linewidth;Mt===void 0&&(Mt=1),St.setLineWidth(Mt*Gt()),F.isLineSegments?Jt.setMode(I.LINES):F.isLineLoop?Jt.setMode(I.LINE_LOOP):Jt.setMode(I.LINE_STRIP)}else F.isPoints?Jt.setMode(I.POINTS):F.isSprite&&Jt.setMode(I.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?Jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):Jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Jt.renderInstances(Kt,de,F.count);else if(B.isInstancedBufferGeometry){const Mt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ue=Math.min(B.instanceCount,Mt);Jt.renderInstances(Kt,de,Ue)}else Jt.render(Kt,de)};function he(T,N,B){T.transparent===!0&&T.side===hn&&T.forceSinglePass===!1?(T.side=De,T.needsUpdate=!0,Mr(T,N,B),T.side=ui,T.needsUpdate=!0,Mr(T,N,B),T.side=hn):Mr(T,N,B)}this.compile=function(T,N,B=null){B===null&&(B=T),p=ot.get(B),p.init(N),M.push(p),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==B&&T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return T.traverse(function(F){const st=F.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const mt=st[ft];he(mt,B,F),H.add(mt)}else he(st,B,F),H.add(st)}),M.pop(),p=null,H},this.compileAsync=function(T,N,B=null){const H=this.compile(T,N,B);return new Promise(F=>{function st(){if(H.forEach(function(ft){zt.get(ft).currentProgram.isReady()&&H.delete(ft)}),H.size===0){F(T);return}setTimeout(st,10)}Vt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let me=null;function $t(T){me&&me(T)}function ge(){qe.stop()}function _e(){qe.start()}const qe=new Fd;qe.setAnimationLoop($t),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(T){me=T,v.setAnimationLoop(T),T===null?qe.stop():qe.start()},v.addEventListener("sessionstart",ge),v.addEventListener("sessionend",_e),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(N),N=v.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,w),p=ot.get(T,M.length),p.init(N),M.push(p),ut.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ht.setFromProjectionMatrix(ut),et=this.localClippingEnabled,$=rt.init(this.clippingPlanes,et),_=xt.get(T,m.length),_.init(),m.push(_),v.enabled===!0&&v.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Ye(st,N,-1/0,x.sortObjects)}Ye(T,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(j,ct),Pt=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,Pt&&it.addToRenderList(_,T),this.info.render.frame++,$===!0&&rt.beginShadows();const B=p.state.shadowsArray;Dt.render(B,T,N),$===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,F=_.transmissive;if(p.setupLights(),N.isArrayCamera){const st=N.cameras;if(F.length>0)for(let ft=0,mt=st.length;ft<mt;ft++){const vt=st[ft];_i(H,F,T,vt)}Pt&&it.render(T);for(let ft=0,mt=st.length;ft<mt;ft++){const vt=st[ft];Yn(_,T,vt,vt.viewport)}}else F.length>0&&_i(H,F,T,N),Pt&&it.render(T),Yn(_,T,N);w!==null&&(Lt.updateMultisampleRenderTarget(w),Lt.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,N),It.resetDefaultState(),R=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],$===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ye(T,N,B,H){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ht.intersectsSprite(T)){H&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);const ft=Z.update(T),mt=T.material;mt.visible&&_.push(T,ft,mt,B,lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ht.intersectsObject(T))){const ft=Z.update(T),mt=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),lt.copy(ft.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(ut)),Array.isArray(mt)){const vt=ft.groups;for(let wt=0,At=vt.length;wt<At;wt++){const Et=vt[wt],Kt=mt[Et.materialIndex];Kt&&Kt.visible&&_.push(T,ft,Kt,B,lt.z,Et)}}else mt.visible&&_.push(T,ft,mt,B,lt.z,null)}}const st=T.children;for(let ft=0,mt=st.length;ft<mt;ft++)Ye(st[ft],N,B,H)}function Yn(T,N,B,H){const F=T.opaque,st=T.transmissive,ft=T.transparent;p.setupLightsView(B),$===!0&&rt.setGlobalState(x.clippingPlanes,B),H&&St.viewport(y.copy(H)),F.length>0&&vi(F,N,B),st.length>0&&vi(st,N,B),ft.length>0&&vi(ft,N,B),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function _i(T,N,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new mn(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?ci:di,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const st=p.state.transmissionRenderTarget[H.id],ft=H.viewport||y;st.setSize(ft.z,ft.w);const mt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(U),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),Pt?it.render(B):x.clear();const vt=x.toneMapping;x.toneMapping=li;const wt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),$===!0&&rt.setGlobalState(x.clippingPlanes,H),vi(T,B,H),Lt.updateMultisampleRenderTarget(st),Lt.updateRenderTargetMipmap(st),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let Et=0,Kt=N.length;Et<Kt;Et++){const ue=N[Et],de=ue.object,je=ue.geometry,Jt=ue.material,Mt=ue.group;if(Jt.side===hn&&de.layers.test(H.layers)){const Ue=Jt.side;Jt.side=De,Jt.needsUpdate=!0,sc(de,B,H,je,Jt,Mt),Jt.side=Ue,Jt.needsUpdate=!0,At=!0}}At===!0&&(Lt.updateMultisampleRenderTarget(st),Lt.updateRenderTargetMipmap(st))}x.setRenderTarget(mt),x.setClearColor(U,Y),wt!==void 0&&(H.viewport=wt),x.toneMapping=vt}function vi(T,N,B){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,st=T.length;F<st;F++){const ft=T[F],mt=ft.object,vt=ft.geometry,wt=H===null?ft.material:H,At=ft.group;mt.layers.test(B.layers)&&sc(mt,N,B,vt,wt,At)}}function sc(T,N,B,H,F,st){T.onBeforeRender(x,N,B,H,F,st),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(x,N,B,H,T,st),F.transparent===!0&&F.side===hn&&F.forceSinglePass===!1?(F.side=De,F.needsUpdate=!0,x.renderBufferDirect(B,N,H,F,T,st),F.side=ui,F.needsUpdate=!0,x.renderBufferDirect(B,N,H,F,T,st),F.side=hn):x.renderBufferDirect(B,N,H,F,T,st),T.onAfterRender(x,N,B,H,F,st)}function Mr(T,N,B){N.isScene!==!0&&(N=kt);const H=zt.get(T),F=p.state.lights,st=p.state.shadowsArray,ft=F.state.version,mt=Q.getParameters(T,F.state,st,N,B),vt=Q.getProgramCacheKey(mt);let wt=H.programs;H.environment=T.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(T.isMeshStandardMaterial?L:le).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,wt===void 0&&(T.addEventListener("dispose",J),wt=new Map,H.programs=wt);let At=wt.get(vt);if(At!==void 0){if(H.currentProgram===At&&H.lightsStateVersion===ft)return oc(T,mt),At}else mt.uniforms=Q.getUniforms(T),T.onBuild(B,mt,x),T.onBeforeCompile(mt,x),At=Q.acquireProgram(mt,vt),wt.set(vt,At),H.uniforms=mt.uniforms;const Et=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Et.clippingPlanes=rt.uniform),oc(T,mt),H.needsLights=Yf(T),H.lightsStateVersion=ft,H.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=At,H.uniformsList=null,At}function rc(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=go.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function oc(T,N){const B=zt.get(T);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Xf(T,N,B,H,F){N.isScene!==!0&&(N=kt),Lt.resetTextureUnits();const st=N.fog,ft=H.isMeshStandardMaterial?N.environment:null,mt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:gi,vt=(H.isMeshStandardMaterial?L:le).get(H.envMap||ft),wt=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,At=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!B.morphAttributes.position,Kt=!!B.morphAttributes.normal,ue=!!B.morphAttributes.color;let de=li;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(de=x.toneMapping);const je=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Jt=je!==void 0?je.length:0,Mt=zt.get(H),Ue=p.state.lights;if($===!0&&(et===!0||T!==S)){const Je=T===S&&H.id===R;rt.setState(H,T,Je)}let te=!1;H.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Ue.state.version||Mt.outputColorSpace!==mt||F.isBatchedMesh&&Mt.batching===!1||!F.isBatchedMesh&&Mt.batching===!0||F.isBatchedMesh&&Mt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Mt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Mt.instancing===!1||!F.isInstancedMesh&&Mt.instancing===!0||F.isSkinnedMesh&&Mt.skinning===!1||!F.isSkinnedMesh&&Mt.skinning===!0||F.isInstancedMesh&&Mt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Mt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Mt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Mt.instancingMorph===!1&&F.morphTexture!==null||Mt.envMap!==vt||H.fog===!0&&Mt.fog!==st||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==rt.numPlanes||Mt.numIntersection!==rt.numIntersection)||Mt.vertexAlphas!==wt||Mt.vertexTangents!==At||Mt.morphTargets!==Et||Mt.morphNormals!==Kt||Mt.morphColors!==ue||Mt.toneMapping!==de||Mt.morphTargetsCount!==Jt)&&(te=!0):(te=!0,Mt.__version=H.version);let Rn=Mt.currentProgram;te===!0&&(Rn=Mr(H,N,F));let br=!1,xi=!1,ea=!1;const Ee=Rn.getUniforms(),jn=Mt.uniforms;if(St.useProgram(Rn.program)&&(br=!0,xi=!0,ea=!0),H.id!==R&&(R=H.id,xi=!0),br||S!==T){Ee.setValue(I,"projectionMatrix",T.projectionMatrix),Ee.setValue(I,"viewMatrix",T.matrixWorldInverse);const Je=Ee.map.cameraPosition;Je!==void 0&&Je.setValue(I,lt.setFromMatrixPosition(T.matrixWorld)),ne.logarithmicDepthBuffer&&Ee.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ee.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,xi=!0,ea=!0)}if(F.isSkinnedMesh){Ee.setOptional(I,F,"bindMatrix"),Ee.setOptional(I,F,"bindMatrixInverse");const Je=F.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Ee.setValue(I,"boneTexture",Je.boneTexture,Lt))}F.isBatchedMesh&&(Ee.setOptional(I,F,"batchingTexture"),Ee.setValue(I,"batchingTexture",F._matricesTexture,Lt),Ee.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Ee.setValue(I,"batchingColorTexture",F._colorsTexture,Lt));const na=B.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0)&&_t.update(F,B,Rn),(xi||Mt.receiveShadow!==F.receiveShadow)&&(Mt.receiveShadow=F.receiveShadow,Ee.setValue(I,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(jn.envMap.value=vt,jn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(jn.envMapIntensity.value=N.environmentIntensity),xi&&(Ee.setValue(I,"toneMappingExposure",x.toneMappingExposure),Mt.needsLights&&qf(jn,ea),st&&H.fog===!0&&tt.refreshFogUniforms(jn,st),tt.refreshMaterialUniforms(jn,H,K,V,p.state.transmissionRenderTarget[T.id]),go.upload(I,rc(Mt),jn,Lt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(go.upload(I,rc(Mt),jn,Lt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ee.setValue(I,"center",F.center),Ee.setValue(I,"modelViewMatrix",F.modelViewMatrix),Ee.setValue(I,"normalMatrix",F.normalMatrix),Ee.setValue(I,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Je=H.uniformsGroups;for(let ia=0,jf=Je.length;ia<jf;ia++){const ac=Je[ia];Ot.update(ac,Rn),Ot.bind(ac,Rn)}}return Rn}function qf(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Yf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,N,B){zt.get(T.texture).__webglTexture=N,zt.get(T.depthTexture).__webglTexture=B;const H=zt.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const B=zt.get(T);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,B=0){w=T,C=N,A=B;let H=!0,F=null,st=!1,ft=!1;if(T){const vt=zt.get(T);vt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(I.FRAMEBUFFER,null),H=!1):vt.__webglFramebuffer===void 0?Lt.setupRenderTarget(T):vt.__hasExternalTextures&&Lt.rebindTextures(T,zt.get(T.texture).__webglTexture,zt.get(T.depthTexture).__webglTexture);const wt=T.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ft=!0);const At=zt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(At[N])?F=At[N][B]:F=At[N],st=!0):T.samples>0&&Lt.useMultisampledRTT(T)===!1?F=zt.get(T).__webglMultisampledFramebuffer:Array.isArray(At)?F=At[B]:F=At,y.copy(T.viewport),P.copy(T.scissor),O=T.scissorTest}else y.copy(dt).multiplyScalar(K).floor(),P.copy(pt).multiplyScalar(K).floor(),O=Rt;if(St.bindFramebuffer(I.FRAMEBUFFER,F)&&H&&St.drawBuffers(T,F),St.viewport(y),St.scissor(P),St.setScissorTest(O),st){const vt=zt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,vt.__webglTexture,B)}else if(ft){const vt=zt.get(T.texture),wt=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.__webglTexture,B||0,wt)}R=-1},this.readRenderTargetPixels=function(T,N,B,H,F,st,ft){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt){St.bindFramebuffer(I.FRAMEBUFFER,mt);try{const vt=T.texture,wt=vt.format,At=vt.type;if(!ne.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-H&&B>=0&&B<=T.height-F&&I.readPixels(N,B,H,F,ht.convert(wt),ht.convert(At),st)}finally{const vt=w!==null?zt.get(w).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(T,N,B,H,F,st,ft){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt){St.bindFramebuffer(I.FRAMEBUFFER,mt);try{const vt=T.texture,wt=vt.format,At=vt.type;if(!ne.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-H&&B>=0&&B<=T.height-F){const Et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.bufferData(I.PIXEL_PACK_BUFFER,st.byteLength,I.STREAM_READ),I.readPixels(N,B,H,F,ht.convert(wt),ht.convert(At),0),I.flush();const Kt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await um(I,Kt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,st)}finally{I.deleteBuffer(Et),I.deleteSync(Kt)}return st}}finally{const vt=w!==null?zt.get(w).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(T,N=null,B=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-B),F=Math.floor(T.image.width*H),st=Math.floor(T.image.height*H),ft=N!==null?N.x:0,mt=N!==null?N.y:0;Lt.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,ft,mt,F,st),St.unbindTexture()},this.copyTextureToTexture=function(T,N,B=null,H=null,F=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],N=arguments[2],F=arguments[3]||0,B=null);let st,ft,mt,vt,wt,At;B!==null?(st=B.max.x-B.min.x,ft=B.max.y-B.min.y,mt=B.min.x,vt=B.min.y):(st=T.image.width,ft=T.image.height,mt=0,vt=0),H!==null?(wt=H.x,At=H.y):(wt=0,At=0);const Et=ht.convert(N.format),Kt=ht.convert(N.type);Lt.setTexture2D(N,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const ue=I.getParameter(I.UNPACK_ROW_LENGTH),de=I.getParameter(I.UNPACK_IMAGE_HEIGHT),je=I.getParameter(I.UNPACK_SKIP_PIXELS),Jt=I.getParameter(I.UNPACK_SKIP_ROWS),Mt=I.getParameter(I.UNPACK_SKIP_IMAGES),Ue=T.isCompressedTexture?T.mipmaps[F]:T.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,mt),I.pixelStorei(I.UNPACK_SKIP_ROWS,vt),T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,wt,At,st,ft,Et,Kt,Ue.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,wt,At,Ue.width,Ue.height,Et,Ue.data):I.texSubImage2D(I.TEXTURE_2D,F,wt,At,Et,Kt,Ue),I.pixelStorei(I.UNPACK_ROW_LENGTH,ue),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de),I.pixelStorei(I.UNPACK_SKIP_PIXELS,je),I.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Mt),F===0&&N.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(T,N,B=null,H=null,F=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,T=arguments[2],N=arguments[3],F=arguments[4]||0);let st,ft,mt,vt,wt,At,Et,Kt,ue;const de=T.isCompressedTexture?T.mipmaps[F]:T.image;B!==null?(st=B.max.x-B.min.x,ft=B.max.y-B.min.y,mt=B.max.z-B.min.z,vt=B.min.x,wt=B.min.y,At=B.min.z):(st=de.width,ft=de.height,mt=de.depth,vt=0,wt=0,At=0),H!==null?(Et=H.x,Kt=H.y,ue=H.z):(Et=0,Kt=0,ue=0);const je=ht.convert(N.format),Jt=ht.convert(N.type);let Mt;if(N.isData3DTexture)Lt.setTexture3D(N,0),Mt=I.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Lt.setTexture2DArray(N,0),Mt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Ue=I.getParameter(I.UNPACK_ROW_LENGTH),te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Rn=I.getParameter(I.UNPACK_SKIP_PIXELS),br=I.getParameter(I.UNPACK_SKIP_ROWS),xi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,de.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vt),I.pixelStorei(I.UNPACK_SKIP_ROWS,wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,At),T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Mt,F,Et,Kt,ue,st,ft,mt,je,Jt,de.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,F,Et,Kt,ue,st,ft,mt,je,de.data):I.texSubImage3D(Mt,F,Et,Kt,ue,st,ft,mt,je,Jt,de),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ue),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rn),I.pixelStorei(I.UNPACK_SKIP_ROWS,br),I.pixelStorei(I.UNPACK_SKIP_IMAGES,xi),F===0&&N.generateMipmaps&&I.generateMipmap(Mt),St.unbindTexture()},this.initRenderTarget=function(T){zt.get(T).__webglFramebuffer===void 0&&Lt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Lt.setTextureCube(T,0):T.isData3DTexture?Lt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Lt.setTexture2DArray(T,0):Lt.setTexture2D(T,0),St.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,St.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ol?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Ho?"display-p3":"srgb"}}class Bl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new Bl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wd extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vx extends ze{constructor(t=null,e=1,n=1,s,r,o,a,l,c=We,h=We,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr extends sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new ee,Ah=new ee,Xr=[],Ch=new Gi,xx=new ee,Gs=new gt,Ws=new Os;class yx extends gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Ch.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Ch)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Ws.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),t.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),Ah.multiplyMatrices(n,hs),Gs.matrixWorld=Ah,Gs.raycast(t,Xr);for(let o=0,a=Xr.length;o<a;o++){const l=Xr[o];l.instanceId=r,l.object=this,e.push(l)}Xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vx(new Float32Array(s*this.count),s,this.count,yd,Vn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Xd extends Ns{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Rh=new ee,pl=new Ul,qr=new Os,Yr=new D;class Mx extends fe{constructor(t=new Ne,e=new Xd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;Rh.copy(s).invert(),pl.copy(t.ray).applyMatrix4(Rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);Yr.fromBufferAttribute(u,p),Ph(Yr,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Yr.fromBufferAttribute(u,g),Ph(Yr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ph(i,t,e,n,s,r,o){const a=pl.distanceSqToPoint(i);if(a<e){const l=new D;pl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],a=new D,l=new ee;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ye(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hl extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bx extends Hl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const jr=new D,Na=new Vl,Ua=new Vl,Fa=new Vl;class qd extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(jr.subVectors(s[0],s[1]).add(s[0]),c=jr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Na.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,p),Ua.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,p),Fa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ua.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Na.calc(l),Ua.calc(l),Fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Sx(i,t){const e=1-i;return e*e*t}function Ex(i,t){return 2*(1-i)*i*t}function Tx(i,t){return i*i*t}function rr(i,t,e,n){return Sx(i,t)+Ex(i,e)+Tx(i,n)}function wx(i,t){const e=1-i;return e*e*e*t}function Ax(i,t){const e=1-i;return 3*e*e*i*t}function Cx(i,t){return 3*(1-i)*i*i*t}function Rx(i,t){return i*i*i*t}function or(i,t,e,n,s){return wx(i,t)+Ax(i,e)+Cx(i,n)+Rx(i,s)}class Yd extends Cn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Px extends Cn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y),or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jd extends Cn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lx extends Cn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $d extends Cn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kd extends Cn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y),rr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zd extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Lh(a,l.x,c.x,h.x,u.x),Lh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var ml=Object.freeze({__proto__:null,ArcCurve:bx,CatmullRomCurve3:qd,CubicBezierCurve:Yd,CubicBezierCurve3:Px,EllipseCurve:Hl,LineCurve:jd,LineCurve3:Lx,QuadraticBezierCurve:$d,QuadraticBezierCurve3:Kd,SplineCurve:Zd});class Dx extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ml[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ml[s.type]().fromJSON(s))}return this}}class Ix extends Dx{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new jd(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new $d(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Yd(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Hl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Go extends Ne{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ye(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new D,d=new nt,f=new D,g=new D,_=new D;let p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const x=n+M*h*s,E=Math.sin(x),C=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*E,u.y=t[A].y,u.z=t[A].x*C,o.push(u.x,u.y,u.z),d.x=M/e,d.y=A/(t.length-1),a.push(d.x,d.y);const w=l[3*A+0]*E,R=l[3*A+1],S=l[3*A+0]*C;c.push(w,R,S)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const E=x+M*t.length,C=E,A=E+t.length,w=E+t.length+1,R=E+1;r.push(C,A,R),r.push(w,R,A)}this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.points,t.segments,t.phiStart,t.phiLength)}}class Ro extends Go{constructor(t=1,e=1,n=4,s=8){const r=new Ix;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Ro(t.radius,t.length,t.capSegments,t.radialSegments)}}class we extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function M(){const E=new D,C=new D;let A=0;const w=(e-t)/n;for(let R=0;R<=r;R++){const S=[],y=R/r,P=y*(e-t)+t;for(let O=0;O<=s;O++){const U=O/s,Y=U*l+a,X=Math.sin(Y),V=Math.cos(Y);C.x=P*X,C.y=-y*n+p,C.z=P*V,u.push(C.x,C.y,C.z),E.set(X,w,V).normalize(),d.push(E.x,E.y,E.z),f.push(U,1-y),S.push(g++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const y=_[S][R],P=_[S+1][R],O=_[S+1][R+1],U=_[S][R+1];h.push(y,P,U),h.push(P,O,U),A+=6}c.addGroup(m,A,0),m+=A}function x(E){const C=g,A=new nt,w=new D;let R=0;const S=E===!0?t:e,y=E===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=s;O++){const Y=O/s*l+a,X=Math.cos(Y),V=Math.sin(Y);w.x=S*V,w.y=p*y,w.z=S*X,u.push(w.x,w.y,w.z),d.push(0,y,0),A.x=X*.5+.5,A.y=V*.5*y+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){const U=C+O,Y=P+O;E===!0?h.push(Y,Y+1,U):h.push(Y+1,Y,U),R+=3}c.addGroup(m,R,E===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ys extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const M=[],x=m/n;let E=0;m===0&&o===0?E=.5/e:m===n&&l===Math.PI&&(E=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(A+E,1-x),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const x=h[m][M+1],E=h[m][M],C=h[m+1][M],A=h[m+1][M+1];(m!==0||o>0)&&f.push(x,E,A),(m!==n-1||l<Math.PI)&&f.push(E,C,A)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fi extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(_,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Gl extends Ne{constructor(t=new Kd(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new nt;let h=new D;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function _(){for(let x=0;x<e;x++)p(x);p(r===!1?e:0),M(),m()}function p(x){h=t.getPointAt(x/e,h);const E=o.normals[x],C=o.binormals[x];for(let A=0;A<=s;A++){const w=A/s*Math.PI*2,R=Math.sin(w),S=-Math.cos(w);l.x=S*E.x+R*C.x,l.y=S*E.y+R*C.y,l.z=S*E.z+R*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let E=1;E<=s;E++){const C=(s+1)*(x-1)+(E-1),A=(s+1)*x+(E-1),w=(s+1)*x+E,R=(s+1)*(x-1)+E;g.push(C,A,R),g.push(A,w,R)}}function M(){for(let x=0;x<=e;x++)for(let E=0;E<=s;E++)c.x=x/e,c.y=E/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Gl(new ml[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ox extends Me{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ce extends Ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ed,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nx extends Ce{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Wo extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Ux extends Wo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ka=new ee,Dh=new D,Ih=new D;class Wl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dh),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fx extends Wl{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=As*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Oh extends Wo{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Nh=new ee,Xs=new D,za=new D;class kx extends Wl{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Xs),za.copy(n.position),za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(za),n.updateMatrixWorld(),s.makeTranslation(-Xs.x,-Xs.y,-Xs.z),Nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh)}}class Jd extends Wo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zx extends Wl{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bx extends Wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new zx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hx extends Ne{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Qd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Uh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Uh(){return(typeof performance>"u"?Date:performance).now()}class Fh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);const Xo={G:9.81,RHO_WATER:998.2,P_ATM:101325,GAMMA_AIR:1.4,T_AMBIENT_K:293.15,C_D_ORIFICE:.62},qo=(()=>{const t=Math.PI*.61*.61*.25;return{barrelDiameter:.61,barrelLength:7.5,accumulatorVolume:4.2,nozzleArea:t*.62,barrelArea:t}})();var qt=(i=>(i.IDLE="IDLE",i.CHARGE="CHARGE",i.ARM="ARM",i.FIRE="FIRE",i.RECOVER="RECOVER",i))(qt||{});const gl={chargePressureBar:7.5,valvePulseMs:220,elevationDeg:78,azimuthDeg:0,slewRateDps:120,pumpFlowM3h:340,particleDensity:1,bloomEnabled:!0,bloomStrength:.85,cutawayEnabled:!1,cutawayOffset:0,audioEnabled:!0,masterVolume:.8,autoSequence:!1,showRateBpm:12,timeScale:1};class Vx{constructor(){k(this,"listeners",[])}on(t){return this.listeners.push(t),()=>{const e=this.listeners.indexOf(t);e>=0&&this.listeners.splice(e,1)}}emit(t){for(const e of this.listeners)e(t)}}const xe=(i,t,e)=>i<t?t:i>e?e:i,qs=(i,t,e)=>i+(t-i)*e,kh=(i,t,e)=>{const n=xe((e-i)/(t-i),0,1);return n*n*(3-2*n)},{RHO_WATER:Yo,G:tf}=Xo,ii=qo;function Gx(i){const t=Math.max(.4,ii.barrelLength*(1-i));return Yo*ii.barrelArea*t+850+320}const Wx=1.6,_l=()=>Yo*tf*Wx,Xx=9500;function qx(i,t,e){const s=Math.max(0,i-_l())*ii.barrelArea,r=.5*Yo*t*Math.abs(t)*ii.nozzleArea*(Math.pow(ii.barrelArea/ii.nozzleArea,2)-1),o=Xx*t,a=Gx(e);return(s-r-o)/a}function Yx(i){return i<=0?0:Xo.C_D_ORIFICE*Math.sqrt(2*i/Yo)}function jx(i){return Math.max(0,i)*ii.nozzleArea}function $x(i){const t=Math.min(i,145);return xe(t*t/(2*tf)*.92,0,160)}function Kx(i,t,e=.72){return i/3600*t*1e5/1e3/e}function Zx(i){return i*ii.barrelDiameter/1004e-9}const $r=qo,{GAMMA_AIR:Kr,P_ATM:ln,T_AMBIENT_K:Zr}=Xo,zo=class zo{constructor(){k(this,"v0");k(this,"gasVolume");k(this,"pAbs");k(this,"tGas");k(this,"chargeTargetPa");this.v0=$r.accumulatorVolume,this.gasVolume=$r.accumulatorVolume,this.chargeTargetPa=75e4+ln,this.pAbs=this.chargeTargetPa,this.tGas=Zr}setChargePressureGauge(t){this.chargeTargetPa=Math.max(ln*.5,t+ln)}get gaugePressurePa(){return this.pAbs-ln}get gasTemperatureK(){return this.tGas}get currentGasVolume(){return this.gasVolume}pressureAtVolume(t){const e=Math.max(.05*this.v0,t);return this.pAbs*Math.pow(this.gasVolume/e,Kr)}step(t,e,n,s){const r=$r.barrelArea*e*t,o=Kr-1;if(r!==0){const l=Math.max(.05*this.v0,this.gasVolume+r),c=this.gasVolume/l;this.pAbs*=Math.pow(c,Kr),this.tGas*=Math.pow(c,o),this.gasVolume=l}if(s>0&&this.pAbs<this.chargeTargetPa){const l=s*t*ln/this.pAbs,c=Math.min(this.v0,this.gasVolume+l);this.pAbs*=Math.pow(this.gasVolume/c,Kr),this.gasVolume=c}if(this.pAbs-ln>0){const c=zo.LEAK_AREA*(.6+4*n)*this.pAbs*9e-4*t/this.gasVolume;this.pAbs=Math.max(ln,this.pAbs-c)}this.tGas+=(Zr-this.tGas)*xe(t*.35,0,1),this.pAbs=xe(this.pAbs,ln*.4,125e4+ln)}resetAfterRecoil(t){this.gasVolume=$r.accumulatorVolume*xe(t,.2,1)}forceChargeToTarget(){this.pAbs=this.chargeTargetPa,this.gasVolume=this.v0,this.tGas=Zr}ventToAtmosphere(){this.pAbs=ln*1.02,this.tGas=Zr}get chargeFraction(){return xe(this.gaugePressurePa/(this.chargeTargetPa-ln),0,1)}};k(zo,"LEAK_AREA",2e-5);let vl=zo;const{G:zh}=Xo;class Jx{constructor(t=1.4,e=5.5){k(this,"vesselArea");k(this,"windowArea");k(this,"cd",.68);k(this,"level");k(this,"lakeHead");k(this,"pumpFlow");this.vesselArea=t,this.windowArea=.16,this.lakeHead=e,this.level=e,this.pumpFlow=0}setPumpFlow(t){this.pumpFlow=t/3600}inflow(){const t=Math.max(0,this.lakeHead-this.level);return this.cd*this.windowArea*Math.sqrt(2*zh*t)}step(t,e){const n=(this.inflow()+this.pumpFlow-e)/this.vesselArea;this.level=xe(this.level+n*t,0,this.lakeHead)}get fillFraction(){return this.level/this.lakeHead}estimatedFillTime(t=.02){const e=this.lakeHead*xe(t,.001,.999),n=2*this.vesselArea*(Math.sqrt(this.lakeHead)-Math.sqrt(e)),s=this.cd*this.windowArea*Math.sqrt(2*zh);return n/s}forceDrain(t){this.level=xe(this.level*(1-t),0,this.lakeHead)}}const ei=qo;class Qx{constructor(){k(this,"bus",new Vx);k(this,"config",{...gl});k(this,"accumulator",new vl);k(this,"vessels",new Jx);k(this,"phase",qt.IDLE);k(this,"time",0);k(this,"phaseTime",0);k(this,"pistonTravel",0);k(this,"pistonSpeed",0);k(this,"chamberPGauge",0);k(this,"jetVelocity",0);k(this,"flowRate",0);k(this,"valveOpening",0);k(this,"jetHeight",0);k(this,"muzzleBroken",!1);k(this,"oarsmanAzimuth",0);k(this,"oarsmanTargetAzimuth",0);k(this,"oarsmanElevation",gl.elevationDeg);k(this,"oarsmanVelocityDps",0);k(this,"compressorOn",!0);k(this,"showTimer",0);k(this,"HISTORY_SIZE",60*40);k(this,"histBuf",[]);k(this,"histHead",0);k(this,"histCount",0);k(this,"historyAccum",0);k(this,"lastRe",0);this.accumulator.setChargePressureGauge(this.config.chargePressureBar*1e5),this.vessels.setPumpFlow(this.config.pumpFlowM3h),this.oarsmanTargetAzimuth=this.config.azimuthDeg}*history(){const t=(this.histHead-this.histCount+this.HISTORY_SIZE)%this.HISTORY_SIZE;for(let e=0;e<this.histCount;e++)yield this.histBuf[(t+e)%this.HISTORY_SIZE]}historyAt(t){if(t<0||t>=this.histCount)return;const e=(this.histHead-this.histCount+this.HISTORY_SIZE)%this.HISTORY_SIZE;return this.histBuf[(e+t)%this.HISTORY_SIZE]}get historyLength(){return this.histCount}setConfig(t){const e=this.config.azimuthDeg;this.config={...this.config,...t},this.accumulator.setChargePressureGauge(this.config.chargePressureBar*1e5),this.vessels.setPumpFlow(this.config.pumpFlowM3h),this.oarsmanTargetAzimuth=this.config.azimuthDeg,Math.abs(e-this.config.azimuthDeg)>.01&&this.bus.emit({type:"oarsman-move",fromDeg:e,toDeg:this.config.azimuthDeg})}triggerFire(){return this.phase!==qt.IDLE||this.accumulator.chargeFraction<.35?!1:(this.enterPhase(qt.ARM),!0)}emergencyVent(){this.accumulator.resetAfterRecoil(1),this.accumulator.ventToAtmosphere(),this.chamberPGauge=0}enterPhase(t){this.phase=t,this.phaseTime=0}step(t){const e=Math.min(t,.03333333333333333);this.time+=e,this.phaseTime+=e,this.updateValve(e),this.updateGas(e),this.updateHydro(e),this.updateVessels(e),this.updateStateMachine(),this.updateAutoSequence(e),this.updateOarsman(e),this.jetHeight=this.muzzleBroken?$x(this.jetVelocity):0,this.lastRe=Zx(this.jetVelocity),this.sampleHistory(e)}updateValve(t){const e=this.phase===qt.FIRE,n=.04,s=e?1:0,r=qs(this.valveOpening,s,xe(t/n,0,1));!e&&this.valveOpening>.5&&r<=.5&&this.bus.emit({type:"valve-close"}),this.valveOpening=r}updateGas(t){const e=this.pistonSpeed*ei.barrelLength,n=this.compressorOn&&(this.phase===qt.IDLE||this.phase===qt.CHARGE)?.9:0;this.accumulator.step(t,this.phase===qt.FIRE?e:0,this.valveOpening,n);const s=this.accumulator.gaugePressurePa;if(this.valveOpening>.01){const r=s*kh(0,.6,this.valveOpening);this.chamberPGauge=qs(this.chamberPGauge,r,xe(t*28,0,1))}else this.chamberPGauge=qs(this.chamberPGauge,_l()*.4,xe(t*3.5,0,1))}updateHydro(t){const e=qx(this.chamberPGauge,this.pistonSpeed*ei.barrelLength,this.pistonTravel);let n=this.pistonSpeed*ei.barrelLength+e*t;this.phase!==qt.FIRE&&this.phase!==qt.RECOVER&&(n*=Math.pow(.02,t)),n=xe(n,-6,70),this.pistonTravel=xe(this.pistonTravel+n/ei.barrelLength*t,0,1),this.pistonSpeed=this.pistonTravel>=1?Math.max(0,n)/ei.barrelLength:n/ei.barrelLength,this.pistonTravel>=1&&!this.muzzleBroken&&this.phase===qt.FIRE&&(this.pistonSpeed=0,this.bus.emit({type:"piston-endstop"}));const s=Yx(Math.max(0,this.chamberPGauge-_l())),r=Math.max(0,n)*(ei.barrelArea/ei.nozzleArea);this.jetVelocity=Math.min(s,r*1.08),this.flowRate=jx(this.jetVelocity),!this.muzzleBroken&&this.jetVelocity>12&&this.phase===qt.FIRE&&(this.muzzleBroken=!0,this.bus.emit({type:"muzzle-break",velocityMs:this.jetVelocity,flowLps:this.flowRate*1e3}))}updateVessels(t){const e=this.phase===qt.FIRE?this.flowRate:-this.vessels.inflow()*.15;this.vessels.step(t,Math.max(0,e))}updateStateMachine(){switch(this.phase){case qt.IDLE:break;case qt.ARM:this.phaseTime>=.12&&(this.muzzleBroken=!1,this.enterPhase(qt.FIRE),this.bus.emit({type:"valve-open",pressureBar:this.accumulator.gaugePressurePa/1e5}));break;case qt.FIRE:{const t=this.config.valvePulseMs/1e3;this.pistonTravel>=.995&&this.phaseTime>t*.5&&(this.valveOpening=0);const e=this.pistonTravel>=.995||this.phaseTime>t+.55;this.phaseTime>t&&this.valveOpening<.05&&(e||this.phaseTime>t+.2)?this.enterPhase(qt.RECOVER):this.phaseTime>t+3&&(this.valveOpening=0,this.enterPhase(qt.RECOVER));break}case qt.RECOVER:{this.pistonTravel=qs(this.pistonTravel,0,xe(this.phaseTime*.9,0,1)*.12),this.pistonTravel<.02&&this.vessels.fillFraction>.9&&(this.pistonTravel=0,this.pistonSpeed=0,this.muzzleBroken=!1,this.accumulator.resetAfterRecoil(1),this.enterPhase(qt.IDLE),this.bus.emit({type:"recharge-complete"})),this.phaseTime>6&&(this.pistonTravel=0,this.pistonSpeed=0,this.muzzleBroken=!1,this.accumulator.resetAfterRecoil(1),this.enterPhase(qt.IDLE),this.bus.emit({type:"recharge-complete"}));break}case qt.CHARGE:this.vessels.fillFraction>.98&&this.enterPhase(qt.IDLE);break}}updateAutoSequence(t){if(!this.config.autoSequence){this.showTimer=0;return}const e=60/xe(this.config.showRateBpm,1,60);this.showTimer+=t,this.showTimer>=e&&(this.showTimer=0,this.config.azimuthDeg=Math.round((Math.random()*80-40)*10)/10,this.oarsmanTargetAzimuth=this.config.azimuthDeg,this.triggerFire())}updateOarsman(t){const e=xe(this.config.slewRateDps,5,360),s=xe(this.oarsmanTargetAzimuth,-180,180)-this.oarsmanAzimuth,r=Math.abs(s),o=r<12?e*kh(0,12,r):e,a=xe(o*t,0,r),l=Math.sign(s)*a;this.oarsmanAzimuth+=l,this.oarsmanVelocityDps=t>0?l/t:0,this.oarsmanElevation=qs(this.oarsmanElevation,this.config.elevationDeg,xe(t*4,0,1))}sampleHistory(t){if(this.historyAccum+=t,this.historyAccum<1/60)return;this.historyAccum=0;const e={t:this.time,pAccumBar:this.accumulator.gaugePressurePa/1e5,pChamberBar:this.chamberPGauge/1e5,qLps:this.flowRate*1e3,vMs:this.jetVelocity,jetH:this.jetHeight,valve:this.valveOpening*100,fill:this.vessels.fillFraction*100,azimuth:this.oarsmanAzimuth,elevation:this.oarsmanElevation};this.histBuf.length<this.HISTORY_SIZE?this.histBuf.push(e):this.histBuf[this.histHead]=e,this.histHead=(this.histHead+1)%this.HISTORY_SIZE,this.histCount<this.HISTORY_SIZE&&this.histCount++}get readout(){return{phase:this.phase,time:this.time,pAccumBar:this.accumulator.gaugePressurePa/1e5,pChamberBar:this.chamberPGauge/1e5,chargeFrac:this.accumulator.chargeFraction,gasTempC:this.accumulator.gasTemperatureK-273.15,jetVelocity:this.jetVelocity,flowLps:this.flowRate*1e3,jetHeight:this.jetHeight,valvePct:this.valveOpening*100,pistonTravel:this.pistonTravel,fillPct:this.vessels.fillFraction*100,reynolds:this.lastRe,pumpKw:Kx(this.config.pumpFlowM3h,Math.max(1,this.config.chargePressureBar)),azimuth:this.oarsmanAzimuth,azimuthTarget:this.oarsmanTargetAzimuth,azimuthVel:this.oarsmanVelocityDps,elevation:this.oarsmanElevation}}}const Bh={type:"change"},Ba={type:"start"},Hh={type:"end"},Jr=new Ul,Vh=new Bn,ty=Math.cos(70*Ri.DEG2RAD);class ey extends Vi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",rt),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bh),n.update(),r=s.NONE},this.update=function(){const v=new D,W=new qn().setFromUnitVectors(t.up,new D(0,1,0)),z=W.clone().invert(),q=new D,J=new qn,yt=new D,Ct=2*Math.PI;return function(me=null){const $t=n.object.position;v.copy($t).sub(n.target),v.applyQuaternion(W),a.setFromVector3(v),n.autoRotate&&r===s.NONE&&O(y(me)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ge=n.minAzimuthAngle,_e=n.maxAzimuthAngle;isFinite(ge)&&isFinite(_e)&&(ge<-Math.PI?ge+=Ct:ge>Math.PI&&(ge-=Ct),_e<-Math.PI?_e+=Ct:_e>Math.PI&&(_e-=Ct),ge<=_e?a.theta=Math.max(ge,Math.min(_e,a.theta)):a.theta=a.theta>(ge+_e)/2?Math.max(ge,a.theta):Math.min(_e,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let qe=!1;if(n.zoomToCursor&&A||n.object.isOrthographicCamera)a.radius=dt(a.radius);else{const Ye=a.radius;a.radius=dt(a.radius*c),qe=Ye!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(z),$t.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&A){let Ye=null;if(n.object.isPerspectiveCamera){const Yn=v.length();Ye=dt(Yn*c);const _i=Yn-Ye;n.object.position.addScaledVector(E,_i),n.object.updateMatrixWorld(),qe=!!_i}else if(n.object.isOrthographicCamera){const Yn=new D(C.x,C.y,0);Yn.unproject(n.object);const _i=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),qe=_i!==n.object.zoom;const vi=new D(C.x,C.y,0);vi.unproject(n.object),n.object.position.sub(vi).add(Yn),n.object.updateMatrixWorld(),Ye=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ye!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ye).add(n.object.position):(Jr.origin.copy(n.object.position),Jr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Jr.direction))<ty?t.lookAt(n.target):(Vh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Jr.intersectPlane(Vh,n.target))))}else if(n.object.isOrthographicCamera){const Ye=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Ye!==n.object.zoom&&(n.object.updateProjectionMatrix(),qe=!0)}return c=1,A=!1,qe||q.distanceToSquared(n.object.position)>o||8*(1-J.dot(n.object.quaternion))>o||yt.distanceToSquared(n.target)>o?(n.dispatchEvent(Bh),q.copy(n.object.position),J.copy(n.object.quaternion),yt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",_t),n.domElement.removeEventListener("pointerdown",le),n.domElement.removeEventListener("pointercancel",b),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",b),n.domElement.getRootNode().removeEventListener("keydown",xt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",rt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Fh,l=new Fh;let c=1;const h=new D,u=new nt,d=new nt,f=new nt,g=new nt,_=new nt,p=new nt,m=new nt,M=new nt,x=new nt,E=new D,C=new nt;let A=!1;const w=[],R={};let S=!1;function y(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function P(v){const W=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*W)}function O(v){l.theta-=v}function U(v){l.phi-=v}const Y=function(){const v=new D;return function(z,q){v.setFromMatrixColumn(q,0),v.multiplyScalar(-z),h.add(v)}}(),X=function(){const v=new D;return function(z,q){n.screenSpacePanning===!0?v.setFromMatrixColumn(q,1):(v.setFromMatrixColumn(q,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(z),h.add(v)}}(),V=function(){const v=new D;return function(z,q){const J=n.domElement;if(n.object.isPerspectiveCamera){const yt=n.object.position;v.copy(yt).sub(n.target);let Ct=v.length();Ct*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*z*Ct/J.clientHeight,n.object.matrix),X(2*q*Ct/J.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(z*(n.object.right-n.object.left)/n.object.zoom/J.clientWidth,n.object.matrix),X(q*(n.object.top-n.object.bottom)/n.object.zoom/J.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ct(v,W){if(!n.zoomToCursor)return;A=!0;const z=n.domElement.getBoundingClientRect(),q=v-z.left,J=W-z.top,yt=z.width,Ct=z.height;C.x=q/yt*2-1,C.y=-(J/Ct)*2+1,E.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function dt(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function pt(v){u.set(v.clientX,v.clientY)}function Rt(v){ct(v.clientX,v.clientX),m.set(v.clientX,v.clientY)}function Ht(v){g.set(v.clientX,v.clientY)}function $(v){d.set(v.clientX,v.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const W=n.domElement;O(2*Math.PI*f.x/W.clientHeight),U(2*Math.PI*f.y/W.clientHeight),u.copy(d),n.update()}function et(v){M.set(v.clientX,v.clientY),x.subVectors(M,m),x.y>0?K(P(x.y)):x.y<0&&j(P(x.y)),m.copy(M),n.update()}function ut(v){_.set(v.clientX,v.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_),n.update()}function lt(v){ct(v.clientX,v.clientY),v.deltaY<0?j(P(v.deltaY)):v.deltaY>0&&K(P(v.deltaY)),n.update()}function kt(v){let W=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),W=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),W=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),W=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),W=!0;break}W&&(v.preventDefault(),n.update())}function Pt(v){if(w.length===1)u.set(v.pageX,v.pageY);else{const W=Ot(v),z=.5*(v.pageX+W.x),q=.5*(v.pageY+W.y);u.set(z,q)}}function Gt(v){if(w.length===1)g.set(v.pageX,v.pageY);else{const W=Ot(v),z=.5*(v.pageX+W.x),q=.5*(v.pageY+W.y);g.set(z,q)}}function I(v){const W=Ot(v),z=v.pageX-W.x,q=v.pageY-W.y,J=Math.sqrt(z*z+q*q);m.set(0,J)}function Wt(v){n.enableZoom&&I(v),n.enablePan&&Gt(v)}function Vt(v){n.enableZoom&&I(v),n.enableRotate&&Pt(v)}function ne(v){if(w.length==1)d.set(v.pageX,v.pageY);else{const z=Ot(v),q=.5*(v.pageX+z.x),J=.5*(v.pageY+z.y);d.set(q,J)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const W=n.domElement;O(2*Math.PI*f.x/W.clientHeight),U(2*Math.PI*f.y/W.clientHeight),u.copy(d)}function St(v){if(w.length===1)_.set(v.pageX,v.pageY);else{const W=Ot(v),z=.5*(v.pageX+W.x),q=.5*(v.pageY+W.y);_.set(z,q)}p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_)}function Xt(v){const W=Ot(v),z=v.pageX-W.x,q=v.pageY-W.y,J=Math.sqrt(z*z+q*q);M.set(0,J),x.set(0,Math.pow(M.y/m.y,n.zoomSpeed)),K(x.y),m.copy(M);const yt=(v.pageX+W.x)*.5,Ct=(v.pageY+W.y)*.5;ct(yt,Ct)}function zt(v){n.enableZoom&&Xt(v),n.enablePan&&St(v)}function Lt(v){n.enableZoom&&Xt(v),n.enableRotate&&ne(v)}function le(v){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",L),n.domElement.addEventListener("pointerup",b)),!ht(v)&&(Bt(v),v.pointerType==="touch"?Dt(v):G(v)))}function L(v){n.enabled!==!1&&(v.pointerType==="touch"?it(v):Z(v))}function b(v){switch(Tt(v),w.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",b),n.dispatchEvent(Hh),r=s.NONE;break;case 1:const W=w[0],z=R[W];Dt({pointerId:W,pageX:z.x,pageY:z.y});break}}function G(v){let W;switch(v.button){case 0:W=n.mouseButtons.LEFT;break;case 1:W=n.mouseButtons.MIDDLE;break;case 2:W=n.mouseButtons.RIGHT;break;default:W=-1}switch(W){case Xi.DOLLY:if(n.enableZoom===!1)return;Rt(v),r=s.DOLLY;break;case Xi.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;Ht(v),r=s.PAN}else{if(n.enableRotate===!1)return;pt(v),r=s.ROTATE}break;case Xi.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;pt(v),r=s.ROTATE}else{if(n.enablePan===!1)return;Ht(v),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ba)}function Z(v){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;$(v);break;case s.DOLLY:if(n.enableZoom===!1)return;et(v);break;case s.PAN:if(n.enablePan===!1)return;ut(v);break}}function Q(v){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(v.preventDefault(),n.dispatchEvent(Ba),lt(tt(v)),n.dispatchEvent(Hh))}function tt(v){const W=v.deltaMode,z={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(W){case 1:z.deltaY*=16;break;case 2:z.deltaY*=100;break}return v.ctrlKey&&!S&&(z.deltaY*=10),z}function xt(v){v.key==="Control"&&(S=!0,n.domElement.getRootNode().addEventListener("keyup",ot,{passive:!0,capture:!0}))}function ot(v){v.key==="Control"&&(S=!1,n.domElement.getRootNode().removeEventListener("keyup",ot,{passive:!0,capture:!0}))}function rt(v){n.enabled===!1||n.enablePan===!1||kt(v)}function Dt(v){switch(It(v),w.length){case 1:switch(n.touches.ONE){case qi.ROTATE:if(n.enableRotate===!1)return;Pt(v),r=s.TOUCH_ROTATE;break;case qi.PAN:if(n.enablePan===!1)return;Gt(v),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Wt(v),r=s.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Vt(v),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ba)}function it(v){switch(It(v),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ne(v),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;St(v),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;zt(v),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Lt(v),n.update();break;default:r=s.NONE}}function _t(v){n.enabled!==!1&&v.preventDefault()}function Bt(v){w.push(v.pointerId)}function Tt(v){delete R[v.pointerId];for(let W=0;W<w.length;W++)if(w[W]==v.pointerId){w.splice(W,1);return}}function ht(v){for(let W=0;W<w.length;W++)if(w[W]==v.pointerId)return!0;return!1}function It(v){let W=R[v.pointerId];W===void 0&&(W=new nt,R[v.pointerId]=W),W.set(v.pageX,v.pageY)}function Ot(v){const W=v.pointerId===w[0]?w[1]:w[0];return R[W]}n.domElement.addEventListener("contextmenu",_t),n.domElement.addEventListener("pointerdown",le),n.domElement.addEventListener("pointercancel",b),n.domElement.addEventListener("wheel",Q,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",xt,{passive:!0,capture:!0}),this.update()}}const ef={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ny=new kl(-1,1,1,-1,0,1);class iy extends Ne{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}}const sy=new iy;class Xl{constructor(t){this._mesh=new gt(sy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ny)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ry extends Fs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fr.clone(t.uniforms),this.material=new Me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Xl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gh extends Fs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class oy extends Fs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ay{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ry(ef),this.copyPass.material.blending=Wn,this.clock=new Qd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Gh!==void 0&&(o instanceof Gh?n=!0:o instanceof oy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ly extends Fs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new bt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const cy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Rs extends Fs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,o,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new mn(r,o,{type:ci});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new mn(r,o,{type:ci});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=cy;this.highPassUniforms=fr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Me({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=ef;this.copyUniforms=fr.clone(h.uniforms),this.blendMaterial=new Me({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Mo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new bt,this.oldClearAlpha=1,this.basic=new Xn,this.fsQuad=new Xl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Rs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Rs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Rs.BlurDirectionX=new nt(1,0);Rs.BlurDirectionY=new nt(0,1);const hy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class uy extends Fs{constructor(){super();const t=hy;this.uniforms=fr.clone(t.uniforms),this.material=new Ox({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Xl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ud?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===md&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class dy extends Wd{constructor(t=null){super();const e=new dn;e.deleteAttribute("uv");const n=new Ce({side:De}),s=new Ce,r=new Jd(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const o=new gt(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const a=new gt(e,s);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const l=new gt(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);const c=new gt(e,s);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const h=new gt(e,s);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const u=new gt(e,s);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new gt(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const f=new gt(e,us(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const g=new gt(e,us(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const _=new gt(e,us(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const p=new gt(e,us(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const m=new gt(e,us(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const M=new gt(e,us(100));M.position.set(0,20,0),M.scale.set(1,.1,1),this.add(M)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function us(i){const t=new Xn;return t.color.setScalar(i),t}class fy{constructor(){k(this,"group",new fn);k(this,"lakeMaterial");k(this,"uTime",{value:0});k(this,"uRipple",{value:new oe(0,0,0,0)});this.buildSkyDome(),this.buildLakeBed(),this.buildWater(),this.buildBurjKhalifa(),this.buildPromenade()}buildSkyDome(){const t=new ys(900,32,16),e=new Me({side:De,depthWrite:!1,uniforms:{uTop:{value:new bt("#050b18")},uBot:{value:new bt("#123a5c")}},vertexShader:`
        varying vec3 vPos;
        void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
      `,fragmentShader:`
        uniform vec3 uTop; uniform vec3 uBot;
        varying vec3 vPos;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        void main(){
          float h = clamp(vPos.y / 900.0, 0.0, 1.0);
          vec3 col = mix(uBot, uTop, pow(h, 0.7));
          // лёгкое городское свечение у горизонта
          col += vec3(0.25,0.16,0.06) * pow(1.0 - abs(vPos.y)/900.0, 8.0);
          gl_FragColor = vec4(col, 1.0);
        }
      `}),n=new gt(t,e);n.name="skydome",this.group.add(n);const s=new Ne,r=1200,o=new Float32Array(r*3);for(let l=0;l<r;l++){const c=Math.random()*Math.PI*2,h=Math.acos(Math.random()*.85+.15),u=880;o[l*3]=u*Math.sin(h)*Math.cos(c),o[l*3+1]=u*Math.cos(h),o[l*3+2]=u*Math.sin(h)*Math.sin(c)}s.setAttribute("position",new sn(o,3));const a=new Mx(s,new Xd({color:13625599,size:1.4,sizeAttenuation:!1,transparent:!0,opacity:.8}));this.group.add(a)}buildLakeBed(){const t=new fi(600,600,64,64),e=t.attributes.position;for(let r=0;r<e.count;r++){const o=e.getX(r),a=e.getY(r),l=Math.sqrt(o*o+a*a),c=-6.2-.9*Math.sin(l*.05)-.35*Math.sin(o*.13+a*.11);e.setZ(r,c)}t.computeVertexNormals();const n=new Ce({color:1780280,roughness:.95,metalness:.02}),s=new gt(t,n);s.rotation.x=-Math.PI/2,s.position.y=-6.5,s.receiveShadow=!0,s.name="lakebed",this.group.add(s)}buildWater(){const t=new fi(600,600,180,180);this.lakeMaterial=new Me({transparent:!0,uniforms:{uTime:this.uTime,uRipple:this.uRipple,uDeep:{value:new bt("#03121f")},uShallow:{value:new bt("#0b3d5e")},uSky:{value:new bt("#1d4e73")},uLightDir:{value:new D(.4,.8,.3).normalize()},uMoonColor:{value:new bt("#cfe3ff")}},vertexShader:`
        uniform float uTime;
        uniform vec4 uRipple; // xz центр, z birth, w strength
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying float vRippleH;

        // Gerstner-lite сумма волн
        float wave(vec2 p, vec2 dir, float freq, float speed, float t){
          return sin(dot(p, dir) * freq + t * speed);
        }

        void main(){
          vec3 pos = position;
          vec2 p = pos.xy; // плоскость до поворота: xy → world xz
          float t = uTime;

          float h =
              0.055 * wave(p, vec2(1.0, 0.35), 0.55, 1.1, t)
            + 0.040 * wave(p, vec2(-0.4, 1.0), 0.9, 1.7, t)
            + 0.022 * wave(p, vec2(0.7, -0.7), 2.1, 2.6, t)
            + 0.012 * wave(p, vec2(-1.0, 0.2), 3.7, 3.4, t);

          // Радиальная волна рассеивания после падения струи
          float age = t - uRipple.z;
          float rr = length(p - uRipple.xy);
          float ring = 0.0;
          if (age > 0.0 && age < 6.0) {
            float front = age * 14.0;             // скорость расхождения ~14 м/с
            float w = exp(-pow(rr - front, 2.0) / (6.0 + age * 10.0));
            ring = w * uRipple.w * exp(-age * 0.7) * sin(rr * 1.6 - age * 20.0) * 0.5;
            ring += exp(-rr * 0.06) * uRipple.w * 0.18 * sin(rr * 3.0 - age * 9.0) * exp(-age * 1.2);
          }
          h += ring;
          vRippleH = abs(ring);

          pos.z += h; // локальный z → мировой Y после rotation.x=-PI/2

          // Нормаль через конечные разности (аппроксимация)
          float e = 0.75;
          float hx =
              0.055 * wave(p + vec2(e,0), vec2(1.0,0.35), 0.55, 1.1, t)
            + 0.040 * wave(p + vec2(e,0), vec2(-0.4,1.0), 0.9, 1.7, t)
            + 0.022 * wave(p + vec2(e,0), vec2(0.7,-0.7), 2.1, 2.6, t);
          float hy =
              0.055 * wave(p + vec2(0,e), vec2(1.0,0.35), 0.55, 1.1, t)
            + 0.040 * wave(p + vec2(0,e), vec2(-0.4,1.0), 0.9, 1.7, t)
            + 0.022 * wave(p + vec2(0,e), vec2(0.7,-0.7), 2.1, 2.6, t);
          vec3 n = normalize(vec3((h - hx) / e, 1.0, (h - hy) / e));
          vNormalW = n;

          vec4 world = modelMatrix * vec4(pos, 1.0);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,fragmentShader:`
        precision highp float;
        uniform vec3 uDeep; uniform vec3 uShallow; uniform vec3 uSky;
        uniform vec3 uLightDir; uniform vec3 uMoonColor;
        uniform float uTime;
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying float vRippleH;

        void main(){
          vec3 V = normalize(cameraPosition - vWorld);
          vec3 N = normalize(vNormalW);

          // Френель (Schlick F0=0.02 для воды)
          float F = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);

          // Глубина по расстоянию от центра озера — имитация бирюсы Дубая
          float d = length(vWorld.xz);
          vec3 base = mix(uShallow, uDeep, smoothstep(30.0, 260.0, d));

          // Отражение «неба» + блик луны
          vec3 R = reflect(-V, N);
          vec3 sky = mix(uSky * 0.6, uSky, clamp(R.y, 0.0, 1.0));
          float moonSpec = pow(max(dot(R, normalize(uLightDir)), 0.0), 220.0) * 2.4;

          // Подповерхностное светорассеяние в зоне удара струи
          vec3 sss = vec3(0.15, 0.55, 0.75) * vRippleH * 3.0;

          vec3 col = mix(base, sky, F) + uMoonColor * moonSpec + sss;

          // Тени понтонов — мягкий градиент яркости не нужен: добавим лёгкий fog
          float fog = 1.0 - exp(-d * 0.0035);
          col = mix(col, uSky * 0.5, fog * 0.6);

          gl_FragColor = vec4(col, 0.94);
        }
      `});const e=new gt(t,this.lakeMaterial);e.rotation.x=-Math.PI/2,e.position.y=0,e.name="lake-water",this.group.add(e)}spawnRipple(t,e,n){this.uRipple.value.set(t,e,this.uTime.value,n)}buildBurjKhalifa(){const t=new fn;t.name="burj-khalifa";const e=new Ce({color:660512,roughness:.6,metalness:.4,emissive:new bt("#0a2038"),emissiveIntensity:.35}),n=[{r:14,h:60},{r:11.5,h:55},{r:9.2,h:48},{r:7.2,h:42},{r:5.4,h:36},{r:3.9,h:30},{r:2.7,h:26},{r:1.8,h:22}];let s=0;for(const f of n){const g=new we(f.r*.82,f.r,f.h,6),_=new gt(g,e);_.position.y=s+f.h/2,t.add(_),s+=f.h}const r=new gt(new we(.12,.9,60,6),e);r.position.y=s+30,t.add(r);const o=new dn(.35,1.6,.06),a=new Xn({color:16767114}),l=700,c=new yx(o,a,l),h=new fe;let u=4;for(let f=0;f<l;f++){const g=Math.min(n.length-1,Math.floor(u/s*n.length)),_=n[g].r*(1-.18*(u/s)),p=Math.random()*Math.PI*2,m=_+.05;h.position.set(Math.cos(p)*m,u,Math.sin(p)*m),h.lookAt(0,u,0),h.rotateY(Math.PI),h.updateMatrix(),c.setMatrixAt(f,h.matrix),u+=1.9+Math.random()*1.4,u>s-6&&(u=4+Math.random()*10)}t.add(c);const d=new gt(new ys(.6,8,8),new Xn({color:16726843}));d.position.y=s+60,d.name="beacon",t.add(d),t.position.set(-190,-6.5,-320),t.scale.setScalar(1.35),this.group.add(t)}buildPromenade(){const t=new Ce({color:2832710,roughness:.8,metalness:.2}),e=new Fi(92,1.6,8,96,Math.PI*.9),n=new gt(e,t);n.rotation.x=-Math.PI/2,n.rotation.z=Math.PI*.05,n.position.y=.9,this.group.add(n);const s=new Ce({color:1120287,roughness:.5,metalness:.7}),r=new Xn({color:6737151});for(let o=0;o<28;o++){const a=Math.PI*.05+o/27*Math.PI*.9,l=Math.cos(a)*92,c=-Math.sin(a)*92,h=new gt(new we(.12,.16,1.4,6),s);h.position.set(l,1.6,c),this.group.add(h);const u=new gt(new ys(.16,6,6),r);u.position.set(l,2.35,c),this.group.add(u)}}update(t){this.uTime.value=t}}const Ha=qo;class py{constructor(){k(this,"group",new fn);k(this,"refs");k(this,"clipMaterials",[]);k(this,"steelMat");k(this,"darkSteel");k(this,"brassMat");k(this,"rubberMat");k(this,"glassMat");k(this,"waterMat");this.steelMat=new Ce({color:9279910,metalness:.92,roughness:.34}),this.darkSteel=new Ce({color:3752782,metalness:.85,roughness:.5}),this.brassMat=new Ce({color:11570495,metalness:.95,roughness:.28}),this.rubberMat=new Ce({color:1316636,metalness:.05,roughness:.9}),this.glassMat=new Nx({color:11195647,metalness:0,roughness:.08,transmission:.9,transparent:!0,opacity:.32,thickness:.4,side:hn}),this.waterMat=new Ce({color:3112888,transparent:!0,opacity:.55,roughness:.15,metalness:.1,emissive:new bt("#0a2c44"),emissiveIntensity:.6}),this.clipMaterials.push(this.steelMat,this.darkSteel,this.brassMat,this.rubberMat,this.glassMat,this.waterMat),this.buildGun(),this.buildBarge(),this.buildServiceRig()}buildGun(){const e=new fn;e.name="oarsman-yaw",e.position.set(0,-.95+.75,0),this.group.add(e);const n=new fn;n.name="oarsman-pitch",e.add(n);const s=new fn;s.name="gun-assembly",n.add(s);const r=Ha.barrelDiameter/2,o=Ha.barrelLength,a=new gt(new we(r,r,o,40,1,!0),this.glassMat);a.name="barrel-glass",a.rotation.x=Math.PI/2,a.position.z=o/2,s.add(a);for(let O=0;O<6;O++){const U=new gt(new Fi(r+.03,.035,8,40),this.darkSteel);U.name=`barrel-ring-${O}`,U.position.z=.7+O*(o/6.4),s.add(U)}const l=[];for(let O=0;O<=12;O++){const U=O/12;l.push(new nt(Ri.lerp(r,r*.78,Math.pow(U,1.6)),U*.9))}const c=new gt(new Go(l,40),this.brassMat);c.name="nozzle",c.rotation.x=-Math.PI/2,c.position.z=o,s.add(c);const h=new fe;h.name="nozzle-tip",h.position.set(0,0,o+.95),s.add(h);const u=new gt(new we(r*.96,r*.96,1,32),this.waterMat);u.name="water-slug",u.rotation.x=Math.PI/2,s.add(u);const d=new gt(new we(r*.98,r*.98,.22,32),this.steelMat);d.name="piston-head",d.rotation.x=Math.PI/2,s.add(d);const f=new gt(new Fi(r*.95,.06,10,32),this.rubberMat);f.name="piston-seal",s.add(f);const g=new gt(new we(.07,.07,2.4,12),this.steelMat);g.name="piston-rod",g.rotation.x=Math.PI/2,s.add(g);const _=new gt(new we(r*1.25,r*1.25,1.1,32,1,!0),this.steelMat);_.name="chamber",_.rotation.x=Math.PI/2,_.position.z=-.7,s.add(_);const p=new gt(new Fi(r*1.26,.07,10,40),this.brassMat);p.name="valve-seat",p.rotation.x=Math.PI/2,p.position.z=-1.25,s.add(p);const m=new gt(new we(r*1.2,r*1.2,.07,32),this.steelMat);m.name="impact-valve",m.rotation.x=Math.PI/2,m.position.z=-1.25,s.add(m);const M=new gt(new dn(.34,.34,.5),this.darkSteel);M.name="solenoid-pilot",M.position.set(r+.35,0,-1.25),s.add(M);const x=new gt(new ys(.06,8,8),new Xn({color:16729156}));x.name="pilot-lamp",x.position.set(r+.35,.22,-1.25),s.add(x);const E=3.1,C=.95,A=-1.805,w=new gt(new Ro(C,E,8,28),this.steelMat);w.name="air-receiver",w.rotation.x=Math.PI/2,w.position.set(0,A,-1.4),s.add(w);const R=new gt(new we(C+.02,C+.02,.16,28),new Xn({color:3718648,transparent:!0,opacity:.95}));R.name="receiver-gauge",R.rotation.x=Math.PI/2,R.position.set(0,A,-1.4-E/2),s.add(R);const S=new gt(new we(.16,.16,2,12),this.brassMat);S.name="feed-pipe",S.position.set(0,A/2,-1.6),S.rotation.x=.5,s.add(S);const y=new gt(new we(1.15,1.35,.7,28),this.darkSteel);y.name="oarsman-turntable",y.position.y=-.35,e.add(y);const P=new gt(new Fi(1.2,.09,8,48),this.brassMat);P.name="oarsman-gear",P.rotation.x=Math.PI/2,P.position.y=-.05,e.add(P);for(const O of[-1,1]){const U=new gt(new we(.09,.09,2.6,10),this.steelMat);U.name=`elevation-cyl-${O}`,U.position.set(O*.8,-.4,1.2),U.rotation.x=-.9,s.add(U)}n.rotation.x=-Ri.degToRad(12),this.refs={yawGroup:e,pitchGroup:n,nozzleTip:h,pistonHead:d,pistonSeal:f,pistonRod:g,valveDisc:m,waterSlug:u,receiverGlow:R,pilotLamp:x}}buildBarge(){const t=new Ce({color:2371644,roughness:.85,metalness:.25}),e=new Ce({color:1317924,roughness:.9,metalness:.15});this.clipMaterials.push(t,e);const n=new gt(new dn(6.5,.5,12),t);n.name="barge-deck",n.position.y=-1.2,this.group.add(n);const s=new gt(new dn(5.6,1.6,11),e);s.name="barge-hull",s.position.y=-2.1,this.group.add(s);for(const o of[-1,1]){const a=new gt(new Ro(.7,9,6,16),e);a.name=`pontoon-${o>0?"R":"L"}`,a.rotation.x=Math.PI/2,a.position.set(o*3.1,-1.9,0),this.group.add(a)}const r=new Ce({color:10465986,metalness:.9,roughness:.35});this.clipMaterials.push(r);for(let o=-5;o<=5;o++)for(const a of[-1,1]){const l=new gt(new we(.03,.03,.9,6),r);l.position.set(a*3,-.5,o*1.1),this.group.add(l)}for(const o of[-1,1]){const a=new gt(new we(.035,.035,11.6,6),r);a.rotation.x=Math.PI/2,a.position.set(o*3,-.05,0),this.group.add(a)}}buildServiceRig(){const t=new Ce({color:14251782,roughness:.6,metalness:.3}),e=new Ce({color:3359061,metalness:.8,roughness:.4});this.clipMaterials.push(t,e);const n=new gt(new dn(1.6,1.1,2.4),t);n.name="compressor",n.position.set(-1.9,-.4,-4.2),this.group.add(n);const s=new gt(new we(.42,.42,1.2,20),e);s.name="compressor-motor",s.rotation.z=Math.PI/2,s.position.set(-1.9,.25,-4.2),this.group.add(s);const r=new qd([new D(-1.2,0,-4),new D(-.5,-1.2,-3),new D(0,-1.9,-2)]),o=new gt(new Gl(r,24,.075,8),this.rubberMat);o.name="hp-hose",this.group.add(o)}update(t){const e=this.refs,n=Ha.barrelLength;e.yawGroup.rotation.y=Ri.degToRad(t.azimuthDeg),e.pitchGroup.rotation.x=-Ri.degToRad(90-t.elevationDeg);const s=.4+t.pistonTravel*(n-1.2);e.pistonHead.position.z=s,e.pistonSeal.position.z=s-.14,e.pistonRod.position.z=s-1.3;const r=Math.max(.25,n-.9-s);e.waterSlug.scale.y=r,e.waterSlug.position.z=s+.15+r/2,e.valveDisc.position.z=-1.25-t.valveOpening*.5,e.valveDisc.rotation.y=t.valveOpening*1.25;const o=Ri.clamp(t.chargeFrac,0,1);e.receiverGlow.material.color.setHSL(Ri.lerp(.02,.54,o),.95,.55),e.receiverGlow.scale.y=.4+o*2.2;const a=e.pilotLamp.material;t.firing?a.color.setHex(3407718):a.color.setHex(Date.now()%500<250?16729156:4526353)}getMuzzleWorld(t,e){const n=this.refs.nozzleTip;n.getWorldPosition(t),n.getWorldQuaternion(new qn),e.set(0,0,1).applyQuaternion(n.getWorldQuaternion(new qn)).normalize()}}const Nn=6e4,my=`
precision highp float;

attribute float aSpawn;   // время спавна порции (-1e3 = мёртвая)
attribute float aSeed;    // 0..1 случайное зерно
attribute vec3 aJitter;   // xy — конус разлёта, z — масштаб капли

uniform float uTime;
uniform float uGravity;
uniform float uPixelRatio;

uniform vec3 uOrigin;
uniform vec3 uDir;
uniform float uSpeed;     // м/с
uniform float uSpread;    // радиан конуса
uniform float uDuration;  // окно эмиссии внутри burst
uniform float uTurb;      // коэффициент распада струи

varying vec2 vUv;
varying float vAge;
varying float vLife;
varying float vSpeedT;
varying float vSeed;

float hash(float n) { return fract(sin(n) * 43758.5453123); }

void main() {
  vUv = uv;
  vSeed = aSeed;

  float life = 2.2 + aSeed * 3.4;                       // жизнь капли, сек
  float emitDelay = hash(aSeed * 91.7) * uDuration;     // момент внутри окна эмиссии
  float birth = aSpawn + emitDelay;
  float age = uTime - birth;

  vAge = age;
  vLife = life;

  if (age < 0.0 || age > life) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);              // за NDC — invisible
    return;
  }

  // Начальная скорость: ядро струи + экспоненциальный распад фронта
  float frontDecay = exp(-age * 0.55);
  float v0 = uSpeed * (0.55 + 0.45 * frontDecay) * (0.85 + 0.3 * hash(aSeed * 13.0));

  // Конус разлёта вокруг оси ствола (референтная ось без вырождения при uDir ∥ Y)
  vec2 rnd = vec2(hash(aSeed * 7.0), hash(aSeed * 17.0)) - 0.5;
  vec3 j = normalize(vec3(aJitter.xy + rnd, 1e-3));
  vec3 refAxis = abs(uDir.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 tangent = normalize(cross(uDir, refAxis));
  vec3 bitangent = cross(uDir, tangent);
  float ang = uSpread * (0.35 + 0.65 * hash(aSeed * 31.0)) * sqrt(age * 0.8 + 0.15);
  vec3 dir = normalize(uDir + (tangent * j.x + bitangent * j.y) * ang);

  vec3 pos = uOrigin + dir * v0 * age;
  pos.y += 0.5 * uGravity * age * age;

  // Турбулентный распад на брызги
  float swirl = uTurb * age * age;
  pos += vec3(
    sin(age * 6.0 + aSeed * 40.0),
    cos(age * 5.0 + aSeed * 60.0) * 0.4,
    sin(age * 7.0 + aSeed * 80.0)
  ) * swirl * 0.35;

  // Поверхность озера y≈0 — гасим вертикальную составляющую (визуально: пена)
  float splashKill = step(pos.y, 0.02);
  pos.y = max(pos.y, 0.02);

  vSpeedT = clamp(v0 / 60.0, 0.0, 1.0);

  // Billboard в экранном пространстве: мировой размер капли проецируется
  // через view-матрицу (корректная перспектива, масштаб по devicePixelRatio)
  float sizeBase = mix(0.10, 0.34, aJitter.z);
  float grow = mix(1.0, 2.6, smoothstep(0.4, 1.0, age / life));
  float shrink = 1.0 - splashKill * 0.7;
  float size = sizeBase * grow * shrink * (1.0 + uTurb * 0.5) * uPixelRatio;

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  mv.xy += position.xy * size;
  gl_Position = projectionMatrix * mv;
}
`,gy=`
precision highp float;

uniform vec3 uColorCore;
uniform vec3 uColorSpray;
uniform vec3 uColorFoam;
uniform float uFade;

varying vec2 vUv;
varying float vAge;
varying float vLife;
varying float vSpeedT;
varying float vSeed;

void main() {
  vec2 p = vUv - 0.5;
  float r = length(p) * 2.0;
  float disc = smoothstep(1.0, 0.35, r);
  if (disc <= 0.01) discard;

  float t = clamp(vAge / vLife, 0.0, 1.0);
  // Быстрая капля — белое ядро (bloom), медленная — синий спрей, в конце — пена
  vec3 col = mix(uColorCore, uColorSpray, smoothstep(0.15, 0.85, t));
  col = mix(col, uColorFoam, vSpeedT * 0.55 * (1.0 - t));

  float alpha = disc * (1.0 - t * t) * mix(0.35, 0.9, vSpeedT) * uFade;
  alpha *= 0.8 + 0.2 * sin(vSeed * 100.0 + vAge * 30.0);

  // Конвертация из линейного пространства в выходной color space и
  // тонмаппинг — иначе при renderer.outputColorSpace = SRGB / ACES цвета
  // шейдерных частиц выглядят «выжженными» и рассинхронизированы с PBR-сценой
  vec4 outColor = vec4(col * (0.7 + vSpeedT), alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor = outColor;
}
`;class _y{constructor(t){k(this,"mesh");k(this,"geometry");k(this,"material");k(this,"aSpawn");k(this,"cursor",0);this.scene=t;const e=new fi(1,1);this.geometry=new Hx,this.geometry.index=e.index,this.geometry.attributes.position=e.attributes.position,this.geometry.attributes.uv=e.attributes.uv,this.geometry.instanceCount=Nn;const n=new Float32Array(Nn).fill(-1e3),s=new Float32Array(Nn),r=new Float32Array(Nn*3);for(let o=0;o<Nn;o++)s[o]=Math.random(),r[o*3+0]=(Math.random()*2-1)*.5,r[o*3+1]=(Math.random()*2-1)*.5,r[o*3+2]=Math.random();this.aSpawn=new sr(n,1).setUsage(Yp),this.geometry.setAttribute("aSpawn",this.aSpawn),this.geometry.setAttribute("aSeed",new sr(s,1)),this.geometry.setAttribute("aJitter",new sr(r,3)),this.material=new Me({transparent:!0,depthWrite:!1,blending:Mo,uniforms:{uTime:{value:0},uGravity:{value:-9.81},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uOrigin:{value:new D(0,2,0)},uDir:{value:new D(0,1,0)},uSpeed:{value:0},uSpread:{value:.08},uDuration:{value:.3},uTurb:{value:.05},uColorCore:{value:new bt("#bfeaff")},uColorSpray:{value:new bt("#4aa8d8")},uColorFoam:{value:new bt("#ffffff")},uFade:{value:1}},vertexShader:my,fragmentShader:gy}),this.mesh=new gt(this.geometry,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=30,t.add(this.mesh)}burst(t,e=1){const n=Math.floor(vy(2e4*e*(t.flowLps/900+.35),4e3,Nn)),s=this.aSpawn.array,r=this.material.uniforms.uTime.value;for(let a=0;a<n;a++)s[this.cursor]=r,this.cursor=(this.cursor+1)%Nn;this.aSpawn.needsUpdate=!0;const o=this.material.uniforms;o.uOrigin.value.copy(t.origin),o.uDir.value.copy(t.direction).normalize(),o.uSpeed.value=t.velocity,o.uDuration.value=t.duration,o.uSpread.value=.055+.05/(1+t.velocity*.02),o.uTurb.value=.02+t.velocity*.0016}ambientDrip(){const t=this.aSpawn.array,e=this.material.uniforms.uTime.value;for(let n=0;n<80;n++)t[this.cursor]=e,this.cursor=(this.cursor+1)%Nn;this.aSpawn.needsUpdate=!0}update(t,e){this.material.uniforms.uTime.value+=e}setPixelRatio(t){this.material.uniforms.uPixelRatio.value=Math.min(t,2)}get particleBudget(){return Nn}dispose(){this.scene.remove(this.mesh),this.geometry.dispose(),this.material.dispose()}}function vy(i,t,e){return i<t?t:i>e?e:i}class xy{constructor(){k(this,"plane");k(this,"helper");k(this,"glowMat");k(this,"enabled",!1);this.plane=new Bn(new D(-1,0,0),0),this.glowMat=new Me({transparent:!0,depthWrite:!1,side:hn,uniforms:{uTime:{value:0},uColor:{value:new bt("#38bdf8")},uOpacity:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        // Хатчинг CAD-сечения
        float hatch(vec2 uv, float scale) {
          vec2 g = fract(uv * scale);
          float d = abs(g.x - g.y);
          return smoothstep(0.06, 0.12, d);
        }
        void main() {
          vec2 uv = vUv;
          float border = min(min(uv.x, 1.0-uv.x), min(uv.y, 1.0-uv.y));
          float edge = 1.0 - smoothstep(0.0, 0.015, border);
          float scan = 0.5 + 0.5 * sin((uv.y + uTime * 0.15) * 140.0);
          float h = 1.0 - hatch(uv, 42.0);
          float a = uOpacity * (edge * 0.9 + h * 0.16 * scan);
          gl_FragColor = vec4(uColor, a);
        }
      `});const t=new fi(11,6.4),e=new gt(t,this.glowMat);e.rotation.y=Math.PI/2,this.helper=new fn,this.helper.add(e),this.helper.visible=!1,this.helper.renderOrder=50}get object(){return this.helper}setEnabled(t){this.enabled=t,this.helper.visible=t,this.glowMat.uniforms.uOpacity.value=t?1:0}update(t,e,n){if(this.glowMat.uniforms.uTime.value=t,!this.enabled)return;const r=n.x+e*5.5;this.plane.constant=r,this.helper.position.set(r,n.y,n.z)}dispose(){this.glowMat.dispose()}}class yy{constructor(t){k(this,"renderer");k(this,"scene",new Wd);k(this,"camera");k(this,"controls");k(this,"composer");k(this,"bloomPass");k(this,"environment",new fy);k(this,"fountain",new py);k(this,"particles");k(this,"cutaway",new xy);k(this,"clock",new Qd);k(this,"visualTime",0);k(this,"rafId",0);k(this,"running",!1);k(this,"callbacks",null);k(this,"muzzleFlash");k(this,"flashEnergy",0);k(this,"shakeAmp",0);k(this,"cutawayOffset",0);k(this,"cutCenter",new D(0,2.2,0));k(this,"lastMuzzlePos",new D(0,8,0));k(this,"onResize",()=>{const t=this.container,e=Math.max(1,t.clientWidth),n=Math.max(1,t.clientHeight);this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.composer.setSize(e,n),this.bloomPass.resolution.set(e,n),this.particles.setPixelRatio(Math.min(window.devicePixelRatio,2))});this.container=t,this.renderer=new _x({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.outputColorSpace=cn,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cd,this.renderer.toneMapping=Il,this.renderer.toneMappingExposure=1.05,this.renderer.localClippingEnabled=!0,this.renderer.domElement.className="webgl",t.appendChild(this.renderer.domElement),this.scene.fog=new Bl(529183,.0038),this.camera=new Ve(55,t.clientWidth/t.clientHeight,.1,2500),this.camera.position.set(26,14,34),this.controls=new ey(this.camera,this.renderer.domElement),this.controls.target.set(0,6,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.maxPolarAngle=Math.PI*.52,this.controls.minDistance=6,this.controls.maxDistance=320,this.controls.update();const e=new dl(this.renderer);this.scene.environment=e.fromScene(new dy,.04).texture,e.dispose(),this.scene.add(new Ux(10471423,662054,.55));const n=new Bx(13623551,1.15);n.position.set(120,180,90),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.left=-60,n.shadow.camera.right=60,n.shadow.camera.top=60,n.shadow.camera.bottom=-60,n.shadow.camera.far=500,n.shadow.bias=-4e-4,this.scene.add(n);const s=new Oh(3718648,320,90,Math.PI/5,.45,1.4);s.position.set(18,26,18),s.target.position.set(0,2,0),this.scene.add(s,s.target);const r=new Oh(16757854,160,120,Math.PI/4.5,.6,1.2);r.position.set(-30,18,-24),r.target.position.set(0,4,0),this.scene.add(r,r.target),this.muzzleFlash=new Jd(12575743,0,160,1.6),this.muzzleFlash.position.set(0,8,0),this.scene.add(this.muzzleFlash),this.scene.add(this.environment.group),this.fountain.group.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.scene.add(this.fountain.group),this.particles=new _y(this.scene),this.scene.add(this.cutaway.object);for(const o of this.fountain.clipMaterials)o.clippingPlanes=[this.cutaway.plane],o.clipShadows=!0,o.needsUpdate=!0;this.composer=new ay(this.renderer),this.composer.addPass(new ly(this.scene,this.camera)),this.bloomPass=new Rs(new nt(t.clientWidth,t.clientHeight),.85,.75,.82),this.composer.addPass(this.bloomPass),this.composer.addPass(new uy),window.addEventListener("resize",this.onResize)}get time(){return this.visualTime}setBloom(t,e){this.bloomPass.enabled=t,this.bloomPass.strength=e}fireFeedback(t){this.flashEnergy=Math.min(1,t),this.shakeAmp=Math.min(.5,this.flashEnergy*.35)}start(t){if(this.running)return;this.running=!0,this.callbacks=t,this.clock.start();const e=()=>{if(!this.running)return;this.rafId=requestAnimationFrame(e);const n=Math.min(this.clock.getDelta(),.1);this.tick(n)};e()}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}tick(t){if(this.callbacks?.onFrame(t,this.visualTime),this.visualTime+=t,this.environment.update(this.visualTime),this.cutaway.update(this.visualTime,this.cutawayOffset,this.cutCenter),this.flashEnergy>0&&(this.muzzleFlash.intensity=this.flashEnergy*9e3,this.muzzleFlash.position.copy(this.lastMuzzlePos),this.flashEnergy*=Math.pow(.0012,t),this.flashEnergy<.012&&(this.flashEnergy=0,this.muzzleFlash.intensity=0)),this.shakeAmp>.0015){const e=this.shakeAmp;this.camera.position.x+=(Math.random()-.5)*e,this.camera.position.y+=(Math.random()-.5)*e,this.shakeAmp*=Math.pow(.012,t)}this.controls.update(),this.composer.render()}setCutaway(t,e){this.cutaway.setEnabled(t),this.cutawayOffset=e}muzzleWorld(t,e){this.fountain.getMuzzleWorld(t,e),this.lastMuzzlePos.copy(t)}focusGun(){this.controls.target.set(0,5,0),this.camera.position.set(14,8,18)}focusJet(t){this.controls.target.set(0,Math.max(8,t*.45),0)}wideShot(){this.controls.target.set(0,10,0),this.camera.position.set(60,26,80)}fpsMeterTarget(){return null}dispose(){this.stop(),window.removeEventListener("resize",this.onResize),this.renderer.dispose(),this.particles.dispose(),this.cutaway.dispose()}}class My{constructor(){k(this,"ctx",null);k(this,"master");k(this,"comp");k(this,"noiseBuf");k(this,"enabled",!0);k(this,"volume",.8)}ensureContext(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t({latencyHint:"interactive"}),this.comp=this.ctx.createDynamicsCompressor(),this.comp.threshold.value=-16,this.comp.knee.value=24,this.comp.ratio.value=6,this.comp.attack.value=.003,this.comp.release.value=.25,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.comp.connect(this.master).connect(this.ctx.destination);const e=this.ctx.sampleRate*4;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noiseBuf.getChannelData(0);let s=0,r=0,o=0;for(let a=0;a<e;a++){const l=Math.random()*2-1;s=.99765*s+l*.099046,r=.963*r+l*.2965164,o=.57*o+l*1.0526913,n[a]=Math.max(-1,Math.min(1,(s+r+o+l*.1848)*.25))}}setVolume(t){this.volume=t,this.ctx&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}setEnabled(t){this.enabled=t,!t&&this.ctx&&this.master.gain.setTargetAtTime(0,this.ctx.currentTime,.03),t&&this.ctx&&this.master.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.03)}handleEvent(t){if(this.enabled&&(this.ensureContext(),!!this.ctx))switch(t.type){case"valve-open":this.valveClick(),this.hiss(.35,900);break;case"muzzle-break":this.shot(t.velocityMs,t.flowLps);break;case"piston-endstop":this.thud(70,.5);break;case"recharge-complete":this.chime();break;case"oarsman-move":this.servoWhir();break}}splash(t=.6){if(!this.enabled||(this.ensureContext(),!this.ctx))return;const e=this.ctx.currentTime,n=this.ctx.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(1600,e),s.frequency.exponentialRampToValueAtTime(320,e+1.4),s.Q.value=.8;const r=this.ctx.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.5*t,e+.05),r.gain.exponentialRampToValueAtTime(.001,e+1.8),n.connect(s).connect(r).connect(this.comp),n.start(e),n.stop(e+2)}valveClick(){const t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="square",n.frequency.setValueAtTime(2400,e),n.frequency.exponentialRampToValueAtTime(300,e+.03);const s=t.createGain();s.gain.setValueAtTime(.22,e),s.gain.exponentialRampToValueAtTime(5e-4,e+.05),n.connect(s).connect(this.comp),n.start(e),n.stop(e+.06)}hiss(t,e){const n=this.ctx,s=n.currentTime,r=n.createBufferSource();r.buffer=this.noiseBuf,r.loop=!0,r.playbackRate.value=.85+Math.random()*.3;const o=n.createBiquadFilter();o.type="highpass",o.frequency.value=e;const a=n.createGain();a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(t*.3,s+.04),a.gain.exponentialRampToValueAtTime(5e-4,s+.7),r.connect(o).connect(a).connect(this.comp),r.start(s),r.stop(s+.8)}shot(t,e){const n=this.ctx,s=n.currentTime,r=Math.min(1,t/120)*Math.min(1,e/1e3+.4),o=n.createOscillator();o.type="sine",o.frequency.setValueAtTime(95,s),o.frequency.exponentialRampToValueAtTime(33,s+.35);const a=n.createGain();a.gain.setValueAtTime(.9*r,s),a.gain.exponentialRampToValueAtTime(.001,s+.5),o.connect(a).connect(this.comp),o.start(s),o.stop(s+.55);const l=n.createBufferSource();l.buffer=this.noiseBuf,l.loop=!0,l.playbackRate.value=1.4;const c=n.createWaveShaper();c.curve=this.distortionCurve(18*r),c.oversample="4x";const h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(9e3,s),h.frequency.exponentialRampToValueAtTime(220,s+.4),h.Q.value=1.2;const u=n.createGain();u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(.85*r+.1,s+.004),u.gain.exponentialRampToValueAtTime(.001,s+.5),l.connect(c).connect(h).connect(u).connect(this.comp),l.start(s),l.stop(s+.6);const d=n.createBufferSource();d.buffer=this.noiseBuf,d.loop=!0;const f=n.createBiquadFilter();f.type="bandpass",f.frequency.setValueAtTime(500,s+.02),f.frequency.exponentialRampToValueAtTime(2600+t*12,s+.25),f.Q.value=2.2;const g=n.createGain();g.gain.setValueAtTime(1e-4,s+.02),g.gain.exponentialRampToValueAtTime(.28*r,s+.12),g.gain.exponentialRampToValueAtTime(5e-4,s+.9),d.connect(f).connect(g).connect(this.comp),d.start(s+.02),d.stop(s+1);const _=n.createDelay();_.delayTime.value=.19;const p=n.createGain();p.gain.value=.32;const m=n.createBiquadFilter();m.type="lowpass",m.frequency.value=1800,u.connect(_),_.connect(m).connect(p).connect(_),_.connect(this.comp)}thud(t,e){const n=this.ctx,s=n.currentTime,r=n.createOscillator();r.type="triangle",r.frequency.setValueAtTime(t*1.6,s),r.frequency.exponentialRampToValueAtTime(t*.6,s+.12);const o=n.createGain();o.gain.setValueAtTime(e,s),o.gain.exponentialRampToValueAtTime(8e-4,s+.22),r.connect(o).connect(this.comp),r.start(s),r.stop(s+.25)}chime(){const t=this.ctx,e=t.currentTime;[880,1320].forEach((n,s)=>{const r=t.createOscillator();r.type="sine",r.frequency.value=n;const o=t.createGain(),a=e+s*.09;o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.12,a+.01),o.gain.exponentialRampToValueAtTime(5e-4,a+.3),r.connect(o).connect(this.comp),r.start(a),r.stop(a+.32)})}servoWhir(){const t=this.ctx,e=t.currentTime,n=.9,s=t.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(48,e);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=320;const o=t.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(.06,e+.08),o.gain.setValueAtTime(.06,e+n-.15),o.gain.linearRampToValueAtTime(1e-4,e+n),s.connect(r).connect(o).connect(this.comp),s.start(e),s.stop(e+n);const a=14;for(let l=0;l<a;l++){const c=e+l/a*n+Math.random()*.01,h=t.createOscillator();h.type="square",h.frequency.value=1800+Math.random()*500;const u=t.createGain();u.gain.setValueAtTime(.028,c),u.gain.exponentialRampToValueAtTime(2e-4,c+.012),h.connect(u).connect(this.comp),h.start(c),h.stop(c+.02)}}rechargeSwell(t){if(!this.enabled||(this.ensureContext(),!this.ctx))return;const e=this.ctx,n=e.currentTime,s=e.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;const r=e.createBiquadFilter();r.type="bandpass",r.Q.value=6,r.frequency.setValueAtTime(240,n),r.frequency.exponentialRampToValueAtTime(1400,n+1.6);const o=e.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.09*t,n+.8),o.gain.exponentialRampToValueAtTime(2e-4,n+1.9),s.connect(r).connect(o).connect(this.comp),s.start(n),s.stop(n+2)}distortionCurve(t){const n=new Float32Array(1024);for(let s=0;s<1024;s++){const r=s*2/1024-1;n[s]=(3+t)*r*20*(Math.PI/180)/(Math.PI+t*Math.abs(r))}return n}dispose(){this.ctx&&this.ctx.close(),this.ctx=null}}const Va=[{id:"gAcc",label:"РЕСИВЕР P·Vᵞ",unit:"бар",max:12,color:"#38bdf8",get:i=>i.pAccumBar},{id:"gCh",label:"КАМЕРА ΔP",unit:"бар",max:12,color:"#fbbf24",get:i=>i.pChamberBar},{id:"gV",label:"ФРОНТ V_JET",unit:"м/с",max:150,color:"#34d399",get:i=>i.jetVelocity},{id:"gQ",label:"РАСХОД Q",unit:"л/с",max:1600,color:"#f472b6",get:i=>i.flowLps}],by={[qt.IDLE]:{ru:"ГОТОВ",led:"led-green"},[qt.CHARGE]:{ru:"ЗАРЯД ВОДЫ",led:"led-amber"},[qt.ARM]:{ru:"ВЗВОД ПИЛОТА",led:"led-amber"},[qt.FIRE]:{ru:"▮ ВЫСТРЕЛ ▮",led:"led-red"},[qt.RECOVER]:{ru:"ПЕРЕЗАРЯДКА",led:"led-amber"}},gs=class gs{constructor(t,e){k(this,"root");k(this,"canvases",new Map);k(this,"gaugeCtxs",new Map);k(this,"needles",new Map);k(this,"digital",{});k(this,"ledEl");k(this,"phaseEl");k(this,"clockEl");k(this,"compassCtx");k(this,"jetBar");k(this,"lastLedClass","");k(this,"lastPhaseColor","");k(this,"lastJetPct",-1);k(this,"uiAccum",1/0);this.sim=e,this.root=document.createElement("div"),this.root.id="hud",this.root.className="pointer-events-none absolute inset-0 z-10",t.appendChild(this.root),this.buildLayout()}buildLayout(){this.root.insertAdjacentHTML("beforeend",`
      <!-- Верхняя строка -->
      <div class="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-4 hud-panel px-5 py-2">
        <div class="text-[11px] tracking-[0.3em] text-sky-300 font-bold">DUBAI&nbsp;FOUNTAIN · DIGITAL&nbsp;TWIN</div>
        <div class="w-px h-4 bg-sky-500/30"></div>
        <div class="flex items-center gap-2">
          <span id="hud-led" class="led led-green"></span>
          <span id="hud-phase" class="text-[11px] font-bold tracking-widest text-emerald-300">ГОТОВ</span>
        </div>
        <div class="w-px h-4 bg-sky-500/30"></div>
        <div class="text-[10px] text-slate-400 tabular-nums">T+<span id="hud-clock">0.00</span>s</div>
      </div>

      <!-- Спидометры слева -->
      <div class="absolute left-3 top-16 grid grid-cols-2 gap-2" id="hud-gauges"></div>

      <!-- Цифровые датчики справа -->
      <div class="absolute right-3 top-16 w-56 hud-panel p-3 space-y-2 text-[11px]" id="hud-digital">
        <div class="hud-title mb-1">ТЕЛЕМЕТРИЯ УЗЛА</div>
        ${tn("JET HEIGHT","hJet","м")}
        ${tn("SLUG TRAVEL","hSlug","%")}
        ${tn("VALVE","hValve","%")}
        ${tn("VESSEL FILL","hFill","%")}
        ${tn("GAS TEMP","hTemp","°C")}
        ${tn("Re NUMBER","hRe","")}
        ${tn("REGIME","hRegime","",!0)}
        ${tn("PUMP POWER","hPump","кВт")}
        ${tn("OARSMEN AZ","hAz","°")}
        ${tn("AZ RATE","hAzR","°/с")}
        ${tn("ELEVATION","hEl","°")}
        ${tn("PARTICLES","hParts","")}
      </div>

      <!-- Компас Oarsmen снизу справа -->
      <div class="absolute right-3 bottom-3 hud-panel p-2">
        <canvas id="hud-compass" width="120" height="120"></canvas>
      </div>

      <!-- Шкала высоты струи снизу слева -->
      <div class="absolute left-3 bottom-3 hud-panel p-2 hidden md:block">
        <div class="hud-title mb-1">ВЫСОТА СТРУИ</div>
        <div class="relative h-40 w-10 bg-slate-900/60 rounded border border-sky-500/20 overflow-hidden">
          <div id="hud-jetbar" class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-600 to-cyan-300 transition-none" style="height:0%"></div>
          <div class="absolute inset-0 flex flex-col justify-between text-[7px] text-slate-500 px-1 py-0.5">
            <span>160</span><span>120</span><span>80</span><span>40</span><span>0 м</span>
          </div>
        </div>
      </div>
      `);const t=this.root.querySelector("#hud-gauges");for(const e of Va){const n=document.createElement("div");n.className="hud-panel p-1.5",n.innerHTML=`<canvas width="118" height="96" data-g="${e.id}"></canvas>
        <div class="gauge-label text-center -mt-1">${e.label}</div>`,t.appendChild(n),this.canvases.set(e.id,n.querySelector("canvas"))}for(const e of["hJet","hSlug","hValve","hFill","hTemp","hRe","hRegime","hPump","hAz","hAzR","hEl","hParts"])this.digital[e]=this.root.querySelector(`#v-${e}`);for(const e of Va)this.gaugeCtxs.set(e.id,this.canvases.get(e.id).getContext("2d"));this.ledEl=this.root.querySelector("#hud-led"),this.phaseEl=this.root.querySelector("#hud-phase"),this.clockEl=this.root.querySelector("#hud-clock"),this.jetBar=this.root.querySelector("#hud-jetbar"),this.compassCtx=this.root.querySelector("#hud-compass").getContext("2d")}update(t,e,n){if(this.uiAccum+=n,this.uiAccum<gs.UI_INTERVAL)return;this.uiAccum=Math.min(this.uiAccum-gs.UI_INTERVAL,gs.UI_INTERVAL);const s=this.sim.readout,r=by[s.phase],o=`led ${r.led}`;o!==this.lastLedClass&&(this.ledEl.className=o,this.lastLedClass=o),Be(this.phaseEl,r.ru);const a=s.phase===qt.FIRE?"#f87171":s.phase===qt.IDLE?"#34d399":"#fbbf24";a!==this.lastPhaseColor&&(this.phaseEl.style.color=a,this.lastPhaseColor=a),Be(this.clockEl,s.time.toFixed(2));for(const h of Va){const u=h.get(s),d=Math.min(1,Math.max(0,u/h.max)),f=this.needles.get(h.id)??0,g=f+(d-f)*.22;this.needles.set(h.id,g),this.drawGauge(h,g,u)}const l=this.digital;Be(l.hJet,s.jetHeight.toFixed(1)),Be(l.hSlug,(s.pistonTravel*100).toFixed(0)),Be(l.hValve,s.valvePct.toFixed(0)),Be(l.hFill,s.fillPct.toFixed(0)),Be(l.hTemp,s.gasTempC.toFixed(1)),Be(l.hRe,Ey(s.reynolds)),Be(l.hRegime,Ty(s.reynolds)),Be(l.hPump,s.pumpKw.toFixed(1)),Be(l.hAz,s.azimuth.toFixed(1)),Be(l.hAzR,s.azimuthVel.toFixed(0)),Be(l.hEl,s.elevation.toFixed(1)),Be(l.hParts,`${e.toLocaleString("ru-RU")} @${t.toFixed(0)}fps`);const c=Math.round(Math.min(100,s.jetHeight/160*100)*2)/2;c!==this.lastJetPct&&(this.jetBar.style.height=`${c}%`,this.lastJetPct=c),this.drawCompass(s.azimuth,s.azimuthTarget,s.azimuthVel)}drawGauge(t,e,n){const s=this.gaugeCtxs.get(t.id);if(!s)return;const r=s.canvas,o=r.width,a=r.height,l=o/2,c=a*.62,h=Math.min(o,a)*.44;s.clearRect(0,0,o,a);const u=Math.PI*.78,d=Math.PI*2.22;s.lineWidth=7,s.strokeStyle="rgba(148,163,184,0.12)",s.beginPath(),s.arc(l,c,h,u,d),s.stroke();const f=u+(d-u)*e;s.strokeStyle=t.color,s.shadowColor=t.color,s.shadowBlur=10,s.beginPath(),s.arc(l,c,h,u,f),s.stroke(),s.shadowBlur=0,s.strokeStyle="rgba(203,213,225,0.5)",s.lineWidth=1;for(let g=0;g<=10;g++){const _=u+(d-u)*g/10,p=h-10,m=h-(g%5===0?3:6);s.beginPath(),s.moveTo(l+Math.cos(_)*p,c+Math.sin(_)*p),s.lineTo(l+Math.cos(_)*m,c+Math.sin(_)*m),s.stroke()}s.save(),s.translate(l,c),s.rotate(f),s.fillStyle="#e2e8f0",s.beginPath(),s.moveTo(0,-2.2),s.lineTo(h-6,0),s.lineTo(0,2.2),s.closePath(),s.fill(),s.restore(),s.fillStyle="#0f172a",s.beginPath(),s.arc(l,c,4.5,0,Math.PI*2),s.fill(),s.strokeStyle=t.color,s.stroke(),s.fillStyle=t.color,s.font='bold 15px "JetBrains Mono", monospace',s.textAlign="center",s.fillText(Sy(n),l,c+h*.62),s.fillStyle="rgba(148,163,184,0.8)",s.font='8px "JetBrains Mono", monospace',s.fillText(t.unit,l,c+h*.62+11)}drawCompass(t,e,n){const s=this.compassCtx,r=s.canvas,o=r.width,a=r.height,l=o/2,c=a/2,h=o*.38;s.clearRect(0,0,o,a),s.strokeStyle="rgba(56,189,248,0.35)",s.lineWidth=1.5,s.beginPath(),s.arc(l,c,h,0,Math.PI*2),s.stroke(),s.fillStyle="rgba(148,163,184,0.7)",s.font='9px "JetBrains Mono", monospace',s.textAlign="center";for(let f=0;f<360;f+=30){const g=(f-90)*Math.PI/180,_=f%90===0;s.strokeStyle="rgba(148,163,184,0.4)",s.beginPath(),s.moveTo(l+Math.cos(g)*(h-(_?8:4)),c+Math.sin(g)*(h-(_?8:4))),s.lineTo(l+Math.cos(g)*h,c+Math.sin(g)*h),s.stroke(),_&&s.fillText(String(f),l+Math.cos(g)*(h+9),c+Math.sin(g)*(h+11))}const u=(e-90)*Math.PI/180;s.strokeStyle="rgba(251,191,36,0.8)",s.setLineDash([3,3]),s.beginPath(),s.moveTo(l,c),s.lineTo(l+Math.cos(u)*h,c+Math.sin(u)*h),s.stroke(),s.setLineDash([]);const d=(t-90)*Math.PI/180;s.strokeStyle="#38bdf8",s.lineWidth=2.5,s.shadowColor="#38bdf8",s.shadowBlur=8,s.beginPath(),s.moveTo(l,c),s.lineTo(l+Math.cos(d)*(h-4),c+Math.sin(d)*(h-4)),s.stroke(),s.shadowBlur=0,s.fillStyle="#e2e8f0",s.font='bold 11px "JetBrains Mono", monospace',s.fillText(`${t.toFixed(0)}°`,l,c+h+22>a?a-2:c+4),s.fillStyle="rgba(148,163,184,0.8)",s.font='8px "JetBrains Mono", monospace',s.fillText("OARSMEN AZ",l,12),s.fillText(`${n.toFixed(0)}°/s`,l,a-5)}};k(gs,"UI_INTERVAL",1/30);let xl=gs;function tn(i,t,e,n=!1){return`
  <div class="flex items-baseline justify-between gap-2">
    <span class="text-slate-400 text-[9px] uppercase tracking-wider">${i}</span>
    <span class="flex items-baseline gap-1">
      <span id="v-${t}" class="hud-value ${n?"text-[10px] !font-semibold":"text-sm"}">—</span>
      <span class="hud-unit">${e}</span>
    </span>
  </div>`}function Be(i,t){i&&i.textContent!==t&&(i.textContent=t)}function Sy(i){return i>=100?i.toFixed(0):i>=10?i.toFixed(1):i.toFixed(2)}function Ey(i){return i<=0?"0":i>=1e6?(i/1e6).toFixed(2)+"M":i>=1e3?(i/1e3).toFixed(1)+"k":i.toFixed(0)}function Ty(i){return i<2300?i===0?"СТОЙ":"ЛАМ":i<4e3?"ПЕР":"ТУРБ"}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function xr(i){return i+.5|0}const si=(i,t,e)=>Math.max(Math.min(i,e),t);function Qs(i){return si(xr(i*2.55),0,255)}function hi(i){return si(xr(i*255),0,255)}function Hn(i){return si(xr(i/2.55)/100,0,1)}function Wh(i){return si(xr(i*100),0,100)}const en={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},yl=[..."0123456789ABCDEF"],wy=i=>yl[i&15],Ay=i=>yl[(i&240)>>4]+yl[i&15],Qr=i=>(i&240)>>4===(i&15),Cy=i=>Qr(i.r)&&Qr(i.g)&&Qr(i.b)&&Qr(i.a);function Ry(i){var t=i.length,e;return i[0]==="#"&&(t===4||t===5?e={r:255&en[i[1]]*17,g:255&en[i[2]]*17,b:255&en[i[3]]*17,a:t===5?en[i[4]]*17:255}:(t===7||t===9)&&(e={r:en[i[1]]<<4|en[i[2]],g:en[i[3]]<<4|en[i[4]],b:en[i[5]]<<4|en[i[6]],a:t===9?en[i[7]]<<4|en[i[8]]:255})),e}const Py=(i,t)=>i<255?t(i):"";function Ly(i){var t=Cy(i)?wy:Ay;return i?"#"+t(i.r)+t(i.g)+t(i.b)+Py(i.a,t):void 0}const Dy=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function nf(i,t,e){const n=t*Math.min(e,1-e),s=(r,o=(r+i/30)%12)=>e-n*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function Iy(i,t,e){const n=(s,r=(s+i/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[n(5),n(3),n(1)]}function Oy(i,t,e){const n=nf(i,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)n[s]*=1-t-e,n[s]+=t;return n}function Ny(i,t,e,n,s){return i===s?(t-e)/n+(t<e?6:0):t===s?(e-i)/n+2:(i-t)/n+4}function ql(i){const e=i.r/255,n=i.g/255,s=i.b/255,r=Math.max(e,n,s),o=Math.min(e,n,s),a=(r+o)/2;let l,c,h;return r!==o&&(h=r-o,c=a>.5?h/(2-r-o):h/(r+o),l=Ny(e,n,s,h,r),l=l*60+.5),[l|0,c||0,a]}function Yl(i,t,e,n){return(Array.isArray(t)?i(t[0],t[1],t[2]):i(t,e,n)).map(hi)}function jl(i,t,e){return Yl(nf,i,t,e)}function Uy(i,t,e){return Yl(Oy,i,t,e)}function Fy(i,t,e){return Yl(Iy,i,t,e)}function sf(i){return(i%360+360)%360}function ky(i){const t=Dy.exec(i);let e=255,n;if(!t)return;t[5]!==n&&(e=t[6]?Qs(+t[5]):hi(+t[5]));const s=sf(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?n=Uy(s,r,o):t[1]==="hsv"?n=Fy(s,r,o):n=jl(s,r,o),{r:n[0],g:n[1],b:n[2],a:e}}function zy(i,t){var e=ql(i);e[0]=sf(e[0]+t),e=jl(e),i.r=e[0],i.g=e[1],i.b=e[2]}function By(i){if(!i)return;const t=ql(i),e=t[0],n=Wh(t[1]),s=Wh(t[2]);return i.a<255?`hsla(${e}, ${n}%, ${s}%, ${Hn(i.a)})`:`hsl(${e}, ${n}%, ${s}%)`}const Xh={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},qh={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Hy(){const i={},t=Object.keys(qh),e=Object.keys(Xh);let n,s,r,o,a;for(n=0;n<t.length;n++){for(o=a=t[n],s=0;s<e.length;s++)r=e[s],a=a.replace(r,Xh[r]);r=parseInt(qh[o],16),i[a]=[r>>16&255,r>>8&255,r&255]}return i}let to;function Vy(i){to||(to=Hy(),to.transparent=[0,0,0,0]);const t=to[i.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Gy=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Wy(i){const t=Gy.exec(i);let e=255,n,s,r;if(t){if(t[7]!==n){const o=+t[7];e=t[8]?Qs(o):si(o*255,0,255)}return n=+t[1],s=+t[3],r=+t[5],n=255&(t[2]?Qs(n):si(n,0,255)),s=255&(t[4]?Qs(s):si(s,0,255)),r=255&(t[6]?Qs(r):si(r,0,255)),{r:n,g:s,b:r,a:e}}}function Xy(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${Hn(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Ga=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,ds=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function qy(i,t,e){const n=ds(Hn(i.r)),s=ds(Hn(i.g)),r=ds(Hn(i.b));return{r:hi(Ga(n+e*(ds(Hn(t.r))-n))),g:hi(Ga(s+e*(ds(Hn(t.g))-s))),b:hi(Ga(r+e*(ds(Hn(t.b))-r))),a:i.a+e*(t.a-i.a)}}function eo(i,t,e){if(i){let n=ql(i);n[t]=Math.max(0,Math.min(n[t]+n[t]*e,t===0?360:1)),n=jl(n),i.r=n[0],i.g=n[1],i.b=n[2]}}function rf(i,t){return i&&Object.assign(t||{},i)}function Yh(i){var t={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(t={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(t.a=hi(i[3]))):(t=rf(i,{r:0,g:0,b:0,a:1}),t.a=hi(t.a)),t}function Yy(i){return i.charAt(0)==="r"?Wy(i):ky(i)}class pr{constructor(t){if(t instanceof pr)return t;const e=typeof t;let n;e==="object"?n=Yh(t):e==="string"&&(n=Ry(t)||Vy(t)||Yy(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=rf(this._rgb);return t&&(t.a=Hn(t.a)),t}set rgb(t){this._rgb=Yh(t)}rgbString(){return this._valid?Xy(this._rgb):void 0}hexString(){return this._valid?Ly(this._rgb):void 0}hslString(){return this._valid?By(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,l=n.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,n.r=255&c*n.r+r*s.r+.5,n.g=255&c*n.g+r*s.g+.5,n.b=255&c*n.b+r*s.b+.5,n.a=o*n.a+(1-o)*s.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=qy(this._rgb,t._rgb,e)),this}clone(){return new pr(this.rgb)}alpha(t){return this._rgb.a=hi(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=xr(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return eo(this._rgb,2,t),this}darken(t){return eo(this._rgb,2,-t),this}saturate(t){return eo(this._rgb,1,t),this}desaturate(t){return eo(this._rgb,1,-t),this}rotate(t){return zy(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Un(){}const jy=(()=>{let i=0;return()=>i++})();function se(i){return i==null}function Ae(i){if(Array.isArray&&Array.isArray(i))return!0;const t=Object.prototype.toString.call(i);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function jt(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function Oe(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function vn(i,t){return Oe(i)?i:t}function Yt(i,t){return typeof i>"u"?t:i}const $y=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*t:+i;function re(i,t,e){if(i&&typeof i.call=="function")return i.apply(e,t)}function Qt(i,t,e,n){let s,r,o;if(Ae(i))for(r=i.length,s=0;s<r;s++)t.call(e,i[s],s);else if(jt(i))for(o=Object.keys(i),r=o.length,s=0;s<r;s++)t.call(e,i[o[s]],o[s])}function Po(i,t){let e,n,s,r;if(!i||!t||i.length!==t.length)return!1;for(e=0,n=i.length;e<n;++e)if(s=i[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Lo(i){if(Ae(i))return i.map(Lo);if(jt(i)){const t=Object.create(null),e=Object.keys(i),n=e.length;let s=0;for(;s<n;++s)t[e[s]]=Lo(i[e[s]]);return t}return i}function of(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function Ky(i,t,e,n){if(!of(i))return;const s=t[i],r=e[i];jt(s)&&jt(r)?mr(s,r,n):t[i]=Lo(r)}function mr(i,t,e){const n=Ae(t)?t:[t],s=n.length;if(!jt(i))return i;e=e||{};const r=e.merger||Ky;let o;for(let a=0;a<s;++a){if(o=n[a],!jt(o))continue;const l=Object.keys(o);for(let c=0,h=l.length;c<h;++c)r(l[c],i,o,e)}return i}function ar(i,t){return mr(i,t,{merger:Zy})}function Zy(i,t,e){if(!of(i))return;const n=t[i],s=e[i];jt(n)&&jt(s)?ar(n,s):Object.prototype.hasOwnProperty.call(t,i)||(t[i]=Lo(s))}const jh={"":i=>i,x:i=>i.x,y:i=>i.y};function Jy(i){const t=i.split("."),e=[];let n="";for(const s of t)n+=s,n.endsWith("\\")?n=n.slice(0,-1)+".":(e.push(n),n="");return e}function Qy(i){const t=Jy(i);return e=>{for(const n of t){if(n==="")break;e=e&&e[n]}return e}}function Do(i,t){return(jh[t]||(jh[t]=Qy(t)))(i)}function $l(i){return i.charAt(0).toUpperCase()+i.slice(1)}const Io=i=>typeof i<"u",pi=i=>typeof i=="function",$h=(i,t)=>{if(i.size!==t.size)return!1;for(const e of i)if(!t.has(e))return!1;return!0};function tM(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const Ie=Math.PI,gn=2*Ie,eM=gn+Ie,Oo=Number.POSITIVE_INFINITY,nM=Ie/180,pn=Ie/2,wi=Ie/4,Kh=Ie*2/3,af=Math.log10,Ps=Math.sign;function lr(i,t,e){return Math.abs(i-t)<e}function Zh(i){const t=Math.round(i);i=lr(i,t,i/1e3)?t:i;const e=Math.pow(10,Math.floor(af(i))),n=i/e;return(n<=1?1:n<=2?2:n<=5?5:10)*e}function iM(i){const t=[],e=Math.sqrt(i);let n;for(n=1;n<e;n++)i%n===0&&(t.push(n),t.push(i/n));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function sM(i){return typeof i=="symbol"||typeof i=="object"&&i!==null&&!(Symbol.toPrimitive in i||"toString"in i||"valueOf"in i)}function gr(i){return!sM(i)&&!isNaN(parseFloat(i))&&isFinite(i)}function rM(i,t){const e=Math.round(i);return e-t<=i&&e+t>=i}function oM(i,t,e){let n,s,r;for(n=0,s=i.length;n<s;n++)r=i[n][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function ki(i){return i*(Ie/180)}function aM(i){return i*(180/Ie)}function Jh(i){if(!Oe(i))return;let t=1,e=0;for(;Math.round(i*t)/t!==i;)t*=10,e++;return e}function lM(i,t){const e=t.x-i.x,n=t.y-i.y,s=Math.sqrt(e*e+n*n);let r=Math.atan2(n,e);return r<-.5*Ie&&(r+=gn),{angle:r,distance:s}}function Ml(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function cM(i,t){return(i-t+eM)%gn-Ie}function bn(i){return(i%gn+gn)%gn}function lf(i,t,e,n){const s=bn(i),r=bn(t),o=bn(e),a=bn(r-s),l=bn(o-s),c=bn(s-r),h=bn(s-o);return s===r||s===o||n&&r===o||a>l&&c<h}function nn(i,t,e){return Math.max(t,Math.min(e,i))}function hM(i){return nn(i,-32768,32767)}function ms(i,t,e,n=1e-6){return i>=Math.min(t,e)-n&&i<=Math.max(t,e)+n}function Kl(i,t,e){e=e||(o=>i[o]<t);let n=i.length-1,s=0,r;for(;n-s>1;)r=s+n>>1,e(r)?s=r:n=r;return{lo:s,hi:n}}const zi=(i,t,e,n)=>Kl(i,e,n?s=>{const r=i[s][t];return r<e||r===e&&i[s+1][t]===e}:s=>i[s][t]<e),uM=(i,t,e)=>Kl(i,e,n=>i[n][t]>=e);function dM(i,t,e){let n=0,s=i.length;for(;n<s&&i[n]<t;)n++;for(;s>n&&i[s-1]>e;)s--;return n>0||s<i.length?i.slice(n,s):i}const cf=["push","pop","shift","splice","unshift"];function fM(i,t){if(i._chartjs){i._chartjs.listeners.push(t);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),cf.forEach(e=>{const n="_onData"+$l(e),s=i[e];Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return i._chartjs.listeners.forEach(a=>{typeof a[n]=="function"&&a[n](...r)}),o}})})}function Qh(i,t){const e=i._chartjs;if(!e)return;const n=e.listeners,s=n.indexOf(t);s!==-1&&n.splice(s,1),!(n.length>0)&&(cf.forEach(r=>{delete i[r]}),delete i._chartjs)}function pM(i){const t=new Set(i);return t.size===i.length?i:Array.from(t)}const hf=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function uf(i,t){let e=[],n=!1;return function(...s){e=s,n||(n=!0,hf.call(window,()=>{n=!1,i.apply(t,e)}))}}function mM(i,t){let e;return function(...n){return t?(clearTimeout(e),e=setTimeout(i,t,n)):i.apply(this,n),t}}const df=i=>i==="start"?"left":i==="end"?"right":"center",Ze=(i,t,e)=>i==="start"?t:i==="end"?e:(t+e)/2,gM=(i,t,e,n)=>i===(n?"left":"right")?e:i==="center"?(t+e)/2:t;function _M(i,t,e){const n=t.length;let s=0,r=n;if(i._sorted){const{iScale:o,vScale:a,_parsed:l}=i,c=i.dataset&&i.dataset.options?i.dataset.options.spanGaps:null,h=o.axis,{min:u,max:d,minDefined:f,maxDefined:g}=o.getUserBounds();if(f){if(s=Math.min(zi(l,h,u).lo,e?n:zi(t,h,o.getPixelForValue(u)).lo),c){const _=l.slice(0,s+1).reverse().findIndex(p=>!se(p[a.axis]));s-=Math.max(0,_)}s=nn(s,0,n-1)}if(g){let _=Math.max(zi(l,o.axis,d,!0).hi+1,e?0:zi(t,h,o.getPixelForValue(d),!0).hi+1);if(c){const p=l.slice(_-1).findIndex(m=>!se(m[a.axis]));_+=Math.max(0,p)}r=nn(_,s,n)-s}else r=n-s}return{start:s,count:r}}function vM(i){const{xScale:t,yScale:e,_scaleRanges:n}=i,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!n)return i._scaleRanges=s,!0;const r=n.xmin!==t.min||n.xmax!==t.max||n.ymin!==e.min||n.ymax!==e.max;return Object.assign(n,s),r}const no=i=>i===0||i===1,tu=(i,t,e)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-t)*gn/e)),eu=(i,t,e)=>Math.pow(2,-10*i)*Math.sin((i-t)*gn/e)+1,cr={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*pn)+1,easeOutSine:i=>Math.sin(i*pn),easeInOutSine:i=>-.5*(Math.cos(Ie*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>no(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>no(i)?i:tu(i,.075,.3),easeOutElastic:i=>no(i)?i:eu(i,.075,.3),easeInOutElastic(i){return no(i)?i:i<.5?.5*tu(i*2,.1125,.45):.5+.5*eu(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let t=1.70158;return(i/=.5)<1?.5*(i*i*(((t*=1.525)+1)*i-t)):.5*((i-=2)*i*(((t*=1.525)+1)*i+t)+2)},easeInBounce:i=>1-cr.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?cr.easeInBounce(i*2)*.5:cr.easeOutBounce(i*2-1)*.5+.5};function Zl(i){if(i&&typeof i=="object"){const t=i.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function nu(i){return Zl(i)?i:new pr(i)}function Wa(i){return Zl(i)?i:new pr(i).saturate(.5).darken(.1).hexString()}const xM=["x","y","borderWidth","radius","tension"],yM=["color","borderColor","backgroundColor"];function MM(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),i.set("animations",{colors:{type:"color",properties:yM},numbers:{type:"number",properties:xM}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function bM(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const iu=new Map;function SM(i,t){t=t||{};const e=i+JSON.stringify(t);let n=iu.get(e);return n||(n=new Intl.NumberFormat(i,t),iu.set(e,n)),n}function ff(i,t,e){return SM(t,e).format(i)}const EM={values(i){return Ae(i)?i:""+i},numeric(i,t,e){if(i===0)return"0";const n=this.chart.options.locale;let s,r=i;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=TM(i,e)}const o=af(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),ff(i,n,l)}};function TM(i,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&i!==Math.floor(i)&&(e=i-Math.floor(i)),e}var pf={formatters:EM};function wM(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:pf.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Hi=Object.create(null),bl=Object.create(null);function hr(i,t){if(!t)return i;const e=t.split(".");for(let n=0,s=e.length;n<s;++n){const r=e[n];i=i[r]||(i[r]=Object.create(null))}return i}function Xa(i,t,e){return typeof t=="string"?mr(hr(i,t),e):mr(hr(i,""),t)}class AM{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,s)=>Wa(s.backgroundColor),this.hoverBorderColor=(n,s)=>Wa(s.borderColor),this.hoverColor=(n,s)=>Wa(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Xa(this,t,e)}get(t){return hr(this,t)}describe(t,e){return Xa(bl,t,e)}override(t,e){return Xa(Hi,t,e)}route(t,e,n,s){const r=hr(this,t),o=hr(this,n),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],c=o[s];return jt(l)?Object.assign({},c,l):Yt(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var pe=new AM({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[MM,bM,wM]);function CM(i){return!i||se(i.size)||se(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function su(i,t,e,n,s){let r=t[s];return r||(r=t[s]=i.measureText(s).width,e.push(s)),r>n&&(n=r),n}function Ai(i,t,e){const n=i.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*n)/n+s}function ru(i,t){!t&&!i||(t=t||i.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,i.width,i.height),t.restore())}function Sl(i,t,e,n){mf(i,t,e,n,null)}function mf(i,t,e,n,s){let r,o,a,l,c,h,u,d;const f=t.pointStyle,g=t.rotation,_=t.radius;let p=(g||0)*nM;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){i.save(),i.translate(e,n),i.rotate(p),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(_)||_<=0)){switch(i.beginPath(),f){default:s?i.ellipse(e,n,s/2,_,0,0,gn):i.arc(e,n,_,0,gn),i.closePath();break;case"triangle":h=s?s/2:_,i.moveTo(e+Math.sin(p)*h,n-Math.cos(p)*_),p+=Kh,i.lineTo(e+Math.sin(p)*h,n-Math.cos(p)*_),p+=Kh,i.lineTo(e+Math.sin(p)*h,n-Math.cos(p)*_),i.closePath();break;case"rectRounded":c=_*.516,l=_-c,o=Math.cos(p+wi)*l,u=Math.cos(p+wi)*(s?s/2-c:l),a=Math.sin(p+wi)*l,d=Math.sin(p+wi)*(s?s/2-c:l),i.arc(e-u,n-a,c,p-Ie,p-pn),i.arc(e+d,n-o,c,p-pn,p),i.arc(e+u,n+a,c,p,p+pn),i.arc(e-d,n+o,c,p+pn,p+Ie),i.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*_,h=s?s/2:l,i.rect(e-h,n-l,2*h,2*l);break}p+=wi;case"rectRot":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+d,n-o),i.lineTo(e+u,n+a),i.lineTo(e-d,n+o),i.closePath();break;case"crossRot":p+=wi;case"cross":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o);break;case"star":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o),p+=wi,u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o);break;case"line":o=s?s/2:Math.cos(p)*_,a=Math.sin(p)*_,i.moveTo(e-o,n-a),i.lineTo(e+o,n+a);break;case"dash":i.moveTo(e,n),i.lineTo(e+Math.cos(p)*(s?s/2:_),n+Math.sin(p)*_);break;case!1:i.closePath();break}i.fill(),t.borderWidth>0&&i.stroke()}}function _r(i,t,e){return e=e||.5,!t||i&&i.x>t.left-e&&i.x<t.right+e&&i.y>t.top-e&&i.y<t.bottom+e}function jo(i,t){i.save(),i.beginPath(),i.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),i.clip()}function $o(i){i.restore()}function RM(i,t,e,n,s){if(!t)return i.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;i.lineTo(r,t.y),i.lineTo(r,e.y)}else s==="after"!=!!n?i.lineTo(t.x,e.y):i.lineTo(e.x,t.y);i.lineTo(e.x,e.y)}function PM(i,t,e,n){if(!t)return i.lineTo(e.x,e.y);i.bezierCurveTo(n?t.cp1x:t.cp2x,n?t.cp1y:t.cp2y,n?e.cp2x:e.cp1x,n?e.cp2y:e.cp1y,e.x,e.y)}function LM(i,t){t.translation&&i.translate(t.translation[0],t.translation[1]),se(t.rotation)||i.rotate(t.rotation),t.color&&(i.fillStyle=t.color),t.textAlign&&(i.textAlign=t.textAlign),t.textBaseline&&(i.textBaseline=t.textBaseline)}function DM(i,t,e,n,s){if(s.strikethrough||s.underline){const r=i.measureText(n),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,c=e+r.actualBoundingBoxDescent,h=s.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=s.decorationWidth||2,i.moveTo(o,h),i.lineTo(a,h),i.stroke()}}function IM(i,t){const e=i.fillStyle;i.fillStyle=t.color,i.fillRect(t.left,t.top,t.width,t.height),i.fillStyle=e}function No(i,t,e,n,s,r={}){const o=Ae(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(i.save(),i.font=s.string,LM(i,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&IM(i,r.backdrop),a&&(r.strokeColor&&(i.strokeStyle=r.strokeColor),se(r.strokeWidth)||(i.lineWidth=r.strokeWidth),i.strokeText(c,e,n,r.maxWidth)),i.fillText(c,e,n,r.maxWidth),DM(i,e,n,c,r),n+=Number(s.lineHeight);i.restore()}function El(i,t){const{x:e,y:n,w:s,h:r,radius:o}=t;i.arc(e+o.topLeft,n+o.topLeft,o.topLeft,1.5*Ie,Ie,!0),i.lineTo(e,n+r-o.bottomLeft),i.arc(e+o.bottomLeft,n+r-o.bottomLeft,o.bottomLeft,Ie,pn,!0),i.lineTo(e+s-o.bottomRight,n+r),i.arc(e+s-o.bottomRight,n+r-o.bottomRight,o.bottomRight,pn,0,!0),i.lineTo(e+s,n+o.topRight),i.arc(e+s-o.topRight,n+o.topRight,o.topRight,0,-pn,!0),i.lineTo(e+o.topLeft,n)}const OM=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,NM=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function UM(i,t){const e=(""+i).match(OM);if(!e||e[1]==="normal")return t*1.2;switch(i=+e[2],e[3]){case"px":return i;case"%":i/=100;break}return t*i}const FM=i=>+i||0;function gf(i,t){const e={},n=jt(t),s=n?Object.keys(t):t,r=jt(i)?n?o=>Yt(i[o],i[t[o]]):o=>i[o]:()=>i;for(const o of s)e[o]=FM(r(o));return e}function kM(i){return gf(i,{top:"y",right:"x",bottom:"y",left:"x"})}function ur(i){return gf(i,["topLeft","topRight","bottomLeft","bottomRight"])}function _n(i){const t=kM(i);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Xe(i,t){i=i||{},t=t||pe.font;let e=Yt(i.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let n=Yt(i.style,t.style);n&&!(""+n).match(NM)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const s={family:Yt(i.family,t.family),lineHeight:UM(Yt(i.lineHeight,t.lineHeight),e),size:e,style:n,weight:Yt(i.weight,t.weight),string:""};return s.string=CM(s),s}function io(i,t,e,n){let s,r,o;for(s=0,r=i.length;s<r;++s)if(o=i[s],o!==void 0&&o!==void 0)return o}function zM(i,t,e){const{min:n,max:s}=i,r=$y(t,(s-n)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(n,-Math.abs(r)),max:o(s,r)}}function Wi(i,t){return Object.assign(Object.create(i),t)}function Jl(i,t=[""],e,n,s=()=>i[0]){const r=e||i;typeof n>"u"&&(n=yf("_fallback",i));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:r,_fallback:n,_getTarget:s,override:a=>Jl([a,...i],t,r,n)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete i[0][l],!0},get(a,l){return vf(a,l,()=>YM(l,t,i,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(a,l){return au(a).includes(l)},ownKeys(a){return au(a)},set(a,l,c){const h=a._storage||(a._storage=s());return a[l]=h[l]=c,delete a._keys,!0}})}function Ls(i,t,e,n){const s={_cacheable:!1,_proxy:i,_context:t,_subProxy:e,_stack:new Set,_descriptors:_f(i,n),setContext:r=>Ls(i,r,e,n),override:r=>Ls(i.override(r),t,e,n)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete i[o],!0},get(r,o,a){return vf(r,o,()=>HM(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(i,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,o)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(r,o){return Reflect.has(i,o)},ownKeys(){return Reflect.ownKeys(i)},set(r,o,a){return i[o]=a,delete r[o],!0}})}function _f(i,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:n=t.indexable,_allKeys:s=t.allKeys}=i;return{allKeys:s,scriptable:e,indexable:n,isScriptable:pi(e)?e:()=>e,isIndexable:pi(n)?n:()=>n}}const BM=(i,t)=>i?i+$l(t):t,Ql=(i,t)=>jt(t)&&i!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function vf(i,t,e){if(Object.prototype.hasOwnProperty.call(i,t)||t==="constructor")return i[t];const n=e();return i[t]=n,n}function HM(i,t,e){const{_proxy:n,_context:s,_subProxy:r,_descriptors:o}=i;let a=n[t];return pi(a)&&o.isScriptable(t)&&(a=VM(t,a,i,e)),Ae(a)&&a.length&&(a=GM(t,a,i,o.isIndexable)),Ql(t,a)&&(a=Ls(a,s,r&&r[t],o)),a}function VM(i,t,e,n){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(i))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+i);a.add(i);let l=t(r,o||n);return a.delete(i),Ql(i,l)&&(l=tc(s._scopes,s,i,l)),l}function GM(i,t,e,n){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&n(i))return t[r.index%t.length];if(jt(t[0])){const l=t,c=s._scopes.filter(h=>h!==l);t=[];for(const h of l){const u=tc(c,s,i,h);t.push(Ls(u,r,o&&o[i],a))}}return t}function xf(i,t,e){return pi(i)?i(t,e):i}const WM=(i,t)=>i===!0?t:typeof i=="string"?Do(t,i):void 0;function XM(i,t,e,n,s){for(const r of t){const o=WM(e,r);if(o){i.add(o);const a=xf(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==n)return a}else if(o===!1&&typeof n<"u"&&e!==n)return null}return!1}function tc(i,t,e,n){const s=t._rootScopes,r=xf(t._fallback,e,n),o=[...i,...s],a=new Set;a.add(n);let l=ou(a,o,e,r||e,n);return l===null||typeof r<"u"&&r!==e&&(l=ou(a,o,r,l,n),l===null)?!1:Jl(Array.from(a),[""],s,r,()=>qM(t,e,n))}function ou(i,t,e,n,s){for(;e;)e=XM(i,t,e,n,s);return e}function qM(i,t,e){const n=i._getTarget();t in n||(n[t]={});const s=n[t];return Ae(s)&&jt(e)?e:s||{}}function YM(i,t,e,n){let s;for(const r of t)if(s=yf(BM(r,i),e),typeof s<"u")return Ql(i,s)?tc(e,n,i,s):s}function yf(i,t){for(const e of t){if(!e)continue;const n=e[i];if(typeof n<"u")return n}}function au(i){let t=i._keys;return t||(t=i._keys=jM(i._scopes)),t}function jM(i){const t=new Set;for(const e of i)for(const n of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(n);return Array.from(t)}const $M=Number.EPSILON||1e-14,Ds=(i,t)=>t<i.length&&!i[t].skip&&i[t],Mf=i=>i==="x"?"y":"x";function KM(i,t,e,n){const s=i.skip?t:i,r=t,o=e.skip?t:e,a=Ml(r,s),l=Ml(o,r);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const u=n*c,d=n*h;return{previous:{x:r.x-u*(o.x-s.x),y:r.y-u*(o.y-s.y)},next:{x:r.x+d*(o.x-s.x),y:r.y+d*(o.y-s.y)}}}function ZM(i,t,e){const n=i.length;let s,r,o,a,l,c=Ds(i,0);for(let h=0;h<n-1;++h)if(l=c,c=Ds(i,h+1),!(!l||!c)){if(lr(t[h],0,$M)){e[h]=e[h+1]=0;continue}s=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=s*o*t[h],e[h+1]=r*o*t[h])}}function JM(i,t,e="x"){const n=Mf(e),s=i.length;let r,o,a,l=Ds(i,0);for(let c=0;c<s;++c){if(o=a,a=l,l=Ds(i,c+1),!a)continue;const h=a[e],u=a[n];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${n}`]=u-r*t[c]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${n}`]=u+r*t[c])}}function QM(i,t="x"){const e=Mf(t),n=i.length,s=Array(n).fill(0),r=Array(n);let o,a,l,c=Ds(i,0);for(o=0;o<n;++o)if(a=l,l=c,c=Ds(i,o+1),!!l){if(c){const h=c[t]-l[t];s[o]=h!==0?(c[e]-l[e])/h:0}r[o]=a?c?Ps(s[o-1])!==Ps(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}ZM(i,s,r),JM(i,r,t)}function so(i,t,e){return Math.max(Math.min(i,e),t)}function tb(i,t){let e,n,s,r,o,a=_r(i[0],t);for(e=0,n=i.length;e<n;++e)o=r,r=a,a=e<n-1&&_r(i[e+1],t),r&&(s=i[e],o&&(s.cp1x=so(s.cp1x,t.left,t.right),s.cp1y=so(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=so(s.cp2x,t.left,t.right),s.cp2y=so(s.cp2y,t.top,t.bottom)))}function eb(i,t,e,n,s){let r,o,a,l;if(t.spanGaps&&(i=i.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")QM(i,s);else{let c=n?i[i.length-1]:i[0];for(r=0,o=i.length;r<o;++r)a=i[r],l=KM(c,a,i[Math.min(r+1,o-(n?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&tb(i,e)}function ec(){return typeof window<"u"&&typeof document<"u"}function nc(i){let t=i.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Uo(i,t,e){let n;return typeof i=="string"?(n=parseInt(i,10),i.indexOf("%")!==-1&&(n=n/100*t.parentNode[e])):n=i,n}const Ko=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function nb(i,t){return Ko(i).getPropertyValue(t)}const ib=["top","right","bottom","left"];function Bi(i,t,e){const n={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=ib[s];n[r]=parseFloat(i[t+"-"+r+e])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const sb=(i,t,e)=>(i>0||t>0)&&(!e||!e.shadowRoot);function rb(i,t){const e=i.touches,n=e&&e.length?e[0]:i,{offsetX:s,offsetY:r}=n;let o=!1,a,l;if(sb(s,r,i.target))a=s,l=r;else{const c=t.getBoundingClientRect();a=n.clientX-c.left,l=n.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Li(i,t){if("native"in i)return i;const{canvas:e,currentDevicePixelRatio:n}=t,s=Ko(e),r=s.boxSizing==="border-box",o=Bi(s,"padding"),a=Bi(s,"border","width"),{x:l,y:c,box:h}=rb(i,e),u=o.left+(h&&a.left),d=o.top+(h&&a.top);let{width:f,height:g}=t;return r&&(f-=o.width+a.width,g-=o.height+a.height),{x:Math.round((l-u)/f*e.width/n),y:Math.round((c-d)/g*e.height/n)}}function ob(i,t,e){let n,s;if(t===void 0||e===void 0){const r=i&&nc(i);if(!r)t=i.clientWidth,e=i.clientHeight;else{const o=r.getBoundingClientRect(),a=Ko(r),l=Bi(a,"border","width"),c=Bi(a,"padding");t=o.width-c.width-l.width,e=o.height-c.height-l.height,n=Uo(a.maxWidth,r,"clientWidth"),s=Uo(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:n||Oo,maxHeight:s||Oo}}const ri=i=>Math.round(i*10)/10;function ab(i,t,e,n){const s=Ko(i),r=Bi(s,"margin"),o=Uo(s.maxWidth,i,"clientWidth")||Oo,a=Uo(s.maxHeight,i,"clientHeight")||Oo,l=ob(i,t,e);let{width:c,height:h}=l;if(s.boxSizing==="content-box"){const d=Bi(s,"border","width"),f=Bi(s,"padding");c-=f.width+d.width,h-=f.height+d.height}return c=Math.max(0,c-r.width),h=Math.max(0,n?c/n:h-r.height),c=ri(Math.min(c,o,l.maxWidth)),h=ri(Math.min(h,a,l.maxHeight)),c&&!h&&(h=ri(c/2)),(t!==void 0||e!==void 0)&&n&&l.height&&h>l.height&&(h=l.height,c=ri(Math.floor(h*n))),{width:c,height:h}}function lu(i,t,e){const n=t||1,s=ri(i.height*n),r=ri(i.width*n);i.height=ri(i.height),i.width=ri(i.width);const o=i.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${i.height}px`,o.style.width=`${i.width}px`),i.currentDevicePixelRatio!==n||o.height!==s||o.width!==r?(i.currentDevicePixelRatio=n,o.height=s,o.width=r,i.ctx.setTransform(n,0,0,n,0,0),!0):!1}const lb=function(){let i=!1;try{const t={get passive(){return i=!0,!1}};ec()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return i}();function cu(i,t){const e=nb(i,t),n=e&&e.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Di(i,t,e,n){return{x:i.x+e*(t.x-i.x),y:i.y+e*(t.y-i.y)}}function cb(i,t,e,n){return{x:i.x+e*(t.x-i.x),y:n==="middle"?e<.5?i.y:t.y:n==="after"?e<1?i.y:t.y:e>0?t.y:i.y}}function hb(i,t,e,n){const s={x:i.cp2x,y:i.cp2y},r={x:t.cp1x,y:t.cp1y},o=Di(i,s,e),a=Di(s,r,e),l=Di(r,t,e),c=Di(o,a,e),h=Di(a,l,e);return Di(c,h,e)}const ub=function(i,t){return{x(e){return i+i+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,n){return e-n},leftForLtr(e,n){return e-n}}},db=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,t){return i+t},leftForLtr(i,t){return i}}};function Ms(i,t,e){return i?ub(t,e):db()}function bf(i,t){let e,n;(t==="ltr"||t==="rtl")&&(e=i.canvas.style,n=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),i.prevTextDirection=n)}function Sf(i,t){t!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",t[0],t[1]))}function Ef(i){return i==="angle"?{between:lf,compare:cM,normalize:bn}:{between:ms,compare:(t,e)=>t-e,normalize:t=>t}}function hu({start:i,end:t,count:e,loop:n,style:s}){return{start:i%e,end:t%e,loop:n&&(t-i+1)%e===0,style:s}}function fb(i,t,e){const{property:n,start:s,end:r}=e,{between:o,normalize:a}=Ef(n),l=t.length;let{start:c,end:h,loop:u}=i,d,f;if(u){for(c+=l,h+=l,d=0,f=l;d<f&&o(a(t[c%l][n]),s,r);++d)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:u,style:i.style}}function Tf(i,t,e){if(!e)return[i];const{property:n,start:s,end:r}=e,o=t.length,{compare:a,between:l,normalize:c}=Ef(n),{start:h,end:u,loop:d,style:f}=fb(i,t,e),g=[];let _=!1,p=null,m,M,x;const E=()=>l(s,x,m)&&a(s,x)!==0,C=()=>a(r,m)===0||l(r,x,m),A=()=>_||E(),w=()=>!_||C();for(let R=h,S=h;R<=u;++R)M=t[R%o],!M.skip&&(m=c(M[n]),m!==x&&(_=l(m,s,r),p===null&&A()&&(p=a(m,s)===0?R:S),p!==null&&w()&&(g.push(hu({start:p,end:R,loop:d,count:o,style:f})),p=null),S=R,x=m));return p!==null&&g.push(hu({start:p,end:u,loop:d,count:o,style:f})),g}function wf(i,t){const e=[],n=i.segments;for(let s=0;s<n.length;s++){const r=Tf(n[s],i.points,t);r.length&&e.push(...r)}return e}function pb(i,t,e,n){let s=0,r=t-1;if(e&&!n)for(;s<t&&!i[s].skip;)s++;for(;s<t&&i[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&i[r%t].skip;)r--;return r%=t,{start:s,end:r}}function mb(i,t,e,n){const s=i.length,r=[];let o=t,a=i[t],l;for(l=t+1;l<=e;++l){const c=i[l%s];c.skip||c.stop?a.skip||(n=!1,r.push({start:t%s,end:(l-1)%s,loop:n}),t=o=c.stop?l:null):(o=l,a.skip&&(t=l)),a=c}return o!==null&&r.push({start:t%s,end:o%s,loop:n}),r}function gb(i,t){const e=i.points,n=i.options.spanGaps,s=e.length;if(!s)return[];const r=!!i._loop,{start:o,end:a}=pb(e,s,r,n);if(n===!0)return uu(i,[{start:o,end:a,loop:r}],e,t);const l=a<o?a+s:a,c=!!i._fullLoop&&o===0&&a===s-1;return uu(i,mb(e,o,l,c),e,t)}function uu(i,t,e,n){return!n||!n.setContext||!e?t:_b(i,t,e,n)}function _b(i,t,e,n){const s=i._chart.getContext(),r=du(i.options),{_datasetIndex:o,options:{spanGaps:a}}=i,l=e.length,c=[];let h=r,u=t[0].start,d=u;function f(g,_,p,m){const M=a?-1:1;if(g!==_){for(g+=l;e[g%l].skip;)g-=M;for(;e[_%l].skip;)_+=M;g%l!==_%l&&(c.push({start:g%l,end:_%l,loop:p,style:m}),h=m,u=_%l)}}for(const g of t){u=a?u:g.start;let _=e[u%l],p;for(d=u+1;d<=g.end;d++){const m=e[d%l];p=du(n.setContext(Wi(s,{type:"segment",p0:_,p1:m,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),vb(p,h)&&f(u,d-1,g.loop,h),_=m,h=p}u<d-1&&f(u,d-1,g.loop,h)}return c}function du(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function vb(i,t){if(!t)return!1;const e=[],n=function(s,r){return Zl(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(i,n)!==JSON.stringify(t,n)}function ro(i,t,e){return i.options.clip?i[e]:t[e]}function xb(i,t){const{xScale:e,yScale:n}=i;return e&&n?{left:ro(e,t,"left"),right:ro(e,t,"right"),top:ro(n,t,"top"),bottom:ro(n,t,"bottom")}:t}function Af(i,t){const e=t._clip;if(e.disabled)return!1;const n=xb(t,i.chartArea);return{left:e.left===!1?0:n.left-(e.left===!0?0:e.left),right:e.right===!1?i.width:n.right+(e.right===!0?0:e.right),top:e.top===!1?0:n.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?i.height:n.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class yb{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(n-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=hf.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((n,s)=>{if(!n.running||!n.items.length)return;const r=n.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,n,t,"progress")),r.length||(n.running=!1,this._notify(s,n,t,"complete"),n.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((n,s)=>Math.max(n,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const n=e.items;let s=n.length-1;for(;s>=0;--s)n[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var kn=new yb;const fu="transparent",Mb={boolean(i,t,e){return e>.5?t:i},color(i,t,e){const n=nu(i||fu),s=n.valid&&nu(t||fu);return s&&s.valid?s.mix(n,e).hexString():t},number(i,t,e){return i+(t-i)*e}};class bb{constructor(t,e,n,s){const r=e[n];s=io([t.to,s,r,t.from]);const o=io([t.from,r,s]);this._active=!0,this._fn=t.fn||Mb[t.type||typeof o],this._easing=cr[t.easing]||cr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,n){if(this._active){this._notify(!1);const s=this._target[this._prop],r=n-this._start,o=this._duration-r;this._start=n,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=io([t.to,e,s,t.from]),this._from=io([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,n=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||e<n),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}l=e/n%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,n)=>{t.push({res:e,rej:n})})}_notify(t){const e=t?"res":"rej",n=this._promises||[];for(let s=0;s<n.length;s++)n[s][e]()}}class Cf{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!jt(t))return;const e=Object.keys(pe.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!jt(r))return;const o={};for(const a of e)o[a]=r[a];(Ae(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!n.has(a))&&n.set(a,o)})})}_animateOptions(t,e){const n=e.options,s=Eb(t,n);if(!s)return[];const r=this._createAnimations(s,n);return n.$shared&&Sb(t.options.$animations,n).then(()=>{t.options=n},()=>{}),r}_createAnimations(t,e){const n=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(t,e));continue}const h=e[c];let u=r[c];const d=n.get(c);if(u)if(d&&u.active()){u.update(d,h,a);continue}else u.cancel();if(!d||!d.duration){t[c]=h;continue}r[c]=u=new bb(d,t,c,h),s.push(u)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const n=this._createAnimations(t,e);if(n.length)return kn.add(this._chart,n),!0}}function Sb(i,t){const e=[],n=Object.keys(t);for(let s=0;s<n.length;s++){const r=i[n[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function Eb(i,t){if(!t)return;let e=i.options;if(!e){i.options=t;return}return e.$shared&&(i.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function pu(i,t){const e=i&&i.options||{},n=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:n?r:s,end:n?s:r}}function Tb(i,t,e){if(e===!1)return!1;const n=pu(i,e),s=pu(t,e);return{top:s.end,right:n.end,bottom:s.start,left:n.start}}function wb(i){let t,e,n,s;return jt(i)?(t=i.top,e=i.right,n=i.bottom,s=i.left):t=e=n=s=i,{top:t,right:e,bottom:n,left:s,disabled:i===!1}}function Rf(i,t){const e=[],n=i._getSortedDatasetMetas(t);let s,r;for(s=0,r=n.length;s<r;++s)e.push(n[s].index);return e}function mu(i,t,e,n={}){const s=i.keys,r=n.mode==="single";let o,a,l,c;if(t===null)return;let h=!1;for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===e){if(h=!0,n.all)continue;break}c=i.values[l],Oe(c)&&(r||t===0||Ps(t)===Ps(c))&&(t+=c)}return!h&&!n.all?0:t}function Ab(i,t){const{iScale:e,vScale:n}=t,s=e.axis==="x"?"x":"y",r=n.axis==="x"?"x":"y",o=Object.keys(i),a=new Array(o.length);let l,c,h;for(l=0,c=o.length;l<c;++l)h=o[l],a[l]={[s]:h,[r]:i[h]};return a}function qa(i,t){const e=i&&i.options.stacked;return e||e===void 0&&t.stack!==void 0}function Cb(i,t,e){return`${i.id}.${t.id}.${e.stack||e.type}`}function Rb(i){const{min:t,max:e,minDefined:n,maxDefined:s}=i.getUserBounds();return{min:n?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function Pb(i,t,e){const n=i[t]||(i[t]={});return n[e]||(n[e]={})}function gu(i,t,e,n){for(const s of t.getMatchingVisibleMetas(n).reverse()){const r=i[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function _u(i,t){const{chart:e,_cachedMeta:n}=i,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=n,l=r.axis,c=o.axis,h=Cb(r,o,n),u=t.length;let d;for(let f=0;f<u;++f){const g=t[f],{[l]:_,[c]:p}=g,m=g._stacks||(g._stacks={});d=m[c]=Pb(s,h,_),d[a]=p,d._top=gu(d,o,!0,n.type),d._bottom=gu(d,o,!1,n.type);const M=d._visualValues||(d._visualValues={});M[a]=p}}function Ya(i,t){const e=i.scales;return Object.keys(e).filter(n=>e[n].axis===t).shift()}function Lb(i,t){return Wi(i,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Db(i,t,e){return Wi(i,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Ys(i,t){const e=i.controller.index,n=i.vScale&&i.vScale.axis;if(n){t=t||i._parsed;for(const s of t){const r=s._stacks;if(!r||r[n]===void 0||r[n][e]===void 0)return;delete r[n][e],r[n]._visualValues!==void 0&&r[n]._visualValues[e]!==void 0&&delete r[n]._visualValues[e]}}}const ja=i=>i==="reset"||i==="none",vu=(i,t)=>t?i:Object.assign({},i),Ib=(i,t,e)=>i&&!t.hidden&&t._stacked&&{keys:Rf(e,!0),values:null};class dr{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=qa(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Ys(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,n=this.getDataset(),s=(u,d,f,g)=>u==="x"?d:u==="r"?g:f,r=e.xAxisID=Yt(n.xAxisID,Ya(t,"x")),o=e.yAxisID=Yt(n.yAxisID,Ya(t,"y")),a=e.rAxisID=Yt(n.rAxisID,Ya(t,"r")),l=e.indexAxis,c=e.iAxisID=s(l,r,o,a),h=e.vAxisID=s(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Qh(this._data,this),t._stacked&&Ys(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),n=this._data;if(jt(e)){const s=this._cachedMeta;this._data=Ab(e,s)}else if(n!==e){if(n){Qh(n,this);const s=this._cachedMeta;Ys(s),s._parsed=[]}e&&Object.isExtensible(e)&&fM(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,n=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=qa(e.vScale,e),e.stack!==n.stack&&(s=!0,Ys(e),e.stack=n.stack),this._resyncElements(t),(s||r!==e._stacked)&&(_u(this,e._parsed),e._stacked=qa(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:n,_data:s}=this,{iScale:r,_stacked:o}=n,a=r.axis;let l=t===0&&e===s.length?!0:n._sorted,c=t>0&&n._parsed[t-1],h,u,d;if(this._parsing===!1)n._parsed=s,n._sorted=!0,d=s;else{Ae(s[t])?d=this.parseArrayData(n,s,t,e):jt(s[t])?d=this.parseObjectData(n,s,t,e):d=this.parsePrimitiveData(n,s,t,e);const f=()=>u[a]===null||c&&u[a]<c[a];for(h=0;h<e;++h)n._parsed[h+t]=u=d[h],l&&(f()&&(l=!1),c=u);n._sorted=l}o&&_u(this,d)}parsePrimitiveData(t,e,n,s){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,c=r.getLabels(),h=r===o,u=new Array(s);let d,f,g;for(d=0,f=s;d<f;++d)g=d+n,u[d]={[a]:h||r.parse(c[g],g),[l]:o.parse(e[g],g)};return u}parseArrayData(t,e,n,s){const{xScale:r,yScale:o}=t,a=new Array(s);let l,c,h,u;for(l=0,c=s;l<c;++l)h=l+n,u=e[h],a[l]={x:r.parse(u[0],h),y:o.parse(u[1],h)};return a}parseObjectData(t,e,n,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let h,u,d,f;for(h=0,u=s;h<u;++h)d=h+n,f=e[d],c[h]={x:r.parse(Do(f,a),d),y:o.parse(Do(f,l),d)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,n){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:Rf(s,!0),values:e._stacks[t.axis]._visualValues};return mu(a,o,r.index,{mode:n})}updateRangeFromParsed(t,e,n,s){const r=n[e.axis];let o=r===null?NaN:r;const a=s&&n._stacks[e.axis];s&&a&&(s.values=a,o=mu(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const n=this._cachedMeta,s=n._parsed,r=n._sorted&&t===n.iScale,o=s.length,a=this._getOtherScale(t),l=Ib(e,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:u}=Rb(a);let d,f;function g(){f=s[d];const _=f[a.axis];return!Oe(f[t.axis])||h>_||u<_}for(d=0;d<o&&!(!g()&&(this.updateRangeFromParsed(c,t,f,l),r));++d);if(r){for(d=o-1;d>=0;--d)if(!g()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,n=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],Oe(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,n=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:n?""+n.getLabelForValue(r[n.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=wb(Yt(this.options.clip,Tb(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,n=this._cachedMeta,s=n.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let h;for(n.dataset&&n.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const u=s[h];u.hidden||(u.active&&c?o.push(u):u.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const n=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,e,n){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=Db(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=Lb(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=n,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",n){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&Io(n);if(a)return vu(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),u=s?[`${t}Hover`,"hover",t,""]:[t,""],d=c.getOptionScopes(this.getDataset(),h),f=Object.keys(pe.elements[t]),g=()=>this.getContext(n,s,e),_=c.resolveNamedOptions(d,f,g,u);return _.$shared&&(_.$shared=l,r[o]=Object.freeze(vu(_,l))),_}_resolveAnimations(t,e,n){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const h=this.chart.config,u=h.datasetAnimationScopeKeys(this._type,e),d=h.getOptionScopes(this.getDataset(),u);l=h.createResolver(d,this.getContext(t,n,e))}const c=new Cf(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||ja(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const n=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(n),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,n),{sharedOptions:r,includeOptions:o}}updateElement(t,e,n,s){ja(s)?Object.assign(t,n):this._resolveAnimations(e,s).update(t,n)}updateSharedOptions(t,e,n){t&&!ja(e)&&this._resolveAnimations(void 0,e).update(t,n)}_setStyle(t,e,n,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,n,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,e,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,n=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=n.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,n=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const l=c=>{for(c.length+=e,a=c.length-1;a>=o;a--)c[a]=c[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(t,e),n&&this.updateElements(r,t,e,"reset")}updateElements(t,e,n,s){}_removeElements(t,e){const n=this._cachedMeta;if(this._parsing){const s=n._parsed.splice(t,e);n._stacked&&Ys(n,s)}n.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,n,s]=t;this[e](n,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}k(dr,"defaults",{}),k(dr,"datasetElementType",null),k(dr,"dataElementType",null);class _o extends dr{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:n,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:l}=_M(e,s,o);this._drawStart=a,this._drawCount=l,vM(e)&&(a=0,l=s.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!r._decimated,n.points=s;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:c},t),this.updateElements(s,a,l,t)}updateElements(t,e,n,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:u}=this._getSharedOptions(e,s),d=o.axis,f=a.axis,{spanGaps:g,segment:_}=this.options,p=gr(g)?g:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||r||s==="none",M=e+n,x=t.length;let E=e>0&&this.getParsed(e-1);for(let C=0;C<x;++C){const A=t[C],w=m?A:{};if(C<e||C>=M){w.skip=!0;continue}const R=this.getParsed(C),S=se(R[f]),y=w[d]=o.getPixelForValue(R[d],C),P=w[f]=r||S?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,R,l):R[f],C);w.skip=isNaN(y)||isNaN(P)||S,w.stop=C>0&&Math.abs(R[d]-E[d])>p,_&&(w.parsed=R,w.raw=c.data[C]),u&&(w.options=h||this.resolveDataElementOptions(C,A.active?"active":s)),m||this.updateElement(A,C,w,s),E=R}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,n=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return n;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(n,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}k(_o,"id","line"),k(_o,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),k(_o,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Ci(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class ic{constructor(t){k(this,"options");this.options=t||{}}static override(t){Object.assign(ic.prototype,t)}init(){}formats(){return Ci()}parse(){return Ci()}format(){return Ci()}add(){return Ci()}diff(){return Ci()}startOf(){return Ci()}endOf(){return Ci()}}var Ob={_date:ic};function Nb(i,t,e,n){const{controller:s,data:r,_sorted:o}=i,a=s._cachedMeta.iScale,l=i.dataset&&i.dataset.options?i.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const c=a._reversePixels?uM:zi;if(n){if(s._sharedOptions){const h=r[0],u=typeof h.getRange=="function"&&h.getRange(t);if(u){const d=c(r,t,e-u),f=c(r,t,e+u);return{lo:d.lo,hi:f.hi}}}}else{const h=c(r,t,e);if(l){const{vScale:u}=s._cachedMeta,{_parsed:d}=i,f=d.slice(0,h.lo+1).reverse().findIndex(_=>!se(_[u.axis]));h.lo-=Math.max(0,f);const g=d.slice(h.hi).findIndex(_=>!se(_[u.axis]));h.hi+=Math.max(0,g)}return h}}return{lo:0,hi:r.length-1}}function Zo(i,t,e,n,s){const r=i.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){const{index:c,data:h}=r[a],{lo:u,hi:d}=Nb(r[a],t,o,s);for(let f=u;f<=d;++f){const g=h[f];g.skip||n(g,c,f)}}}function Ub(i){const t=i.indexOf("x")!==-1,e=i.indexOf("y")!==-1;return function(n,s){const r=t?Math.abs(n.x-s.x):0,o=e?Math.abs(n.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function $a(i,t,e,n,s){const r=[];return!s&&!i.isPointInArea(t)||Zo(i,e,t,function(a,l,c){!s&&!_r(a,i.chartArea,0)||a.inRange(t.x,t.y,n)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function Fb(i,t,e,n){let s=[];function r(o,a,l){const{startAngle:c,endAngle:h}=o.getProps(["startAngle","endAngle"],n),{angle:u}=lM(o,{x:t.x,y:t.y});lf(u,c,h)&&s.push({element:o,datasetIndex:a,index:l})}return Zo(i,e,t,r),s}function kb(i,t,e,n,s,r){let o=[];const a=Ub(e);let l=Number.POSITIVE_INFINITY;function c(h,u,d){const f=h.inRange(t.x,t.y,s);if(n&&!f)return;const g=h.getCenterPoint(s);if(!(!!r||i.isPointInArea(g))&&!f)return;const p=a(t,g);p<l?(o=[{element:h,datasetIndex:u,index:d}],l=p):p===l&&o.push({element:h,datasetIndex:u,index:d})}return Zo(i,e,t,c),o}function Ka(i,t,e,n,s,r){return!r&&!i.isPointInArea(t)?[]:e==="r"&&!n?Fb(i,t,e,s):kb(i,t,e,n,s,r)}function xu(i,t,e,n,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Zo(i,e,t,(l,c,h)=>{l[o]&&l[o](t[e],s)&&(r.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,s))}),n&&!a?[]:r}var zb={modes:{index(i,t,e,n){const s=Li(t,i),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?$a(i,s,r,n,o):Ka(i,s,r,!1,n,o),l=[];return a.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,u=c.data[h];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:h})}),l):[]},dataset(i,t,e,n){const s=Li(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?$a(i,s,r,n,o):Ka(i,s,r,!1,n,o);if(a.length>0){const l=a[0].datasetIndex,c=i.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(i,t,e,n){const s=Li(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;return $a(i,s,r,n,o)},nearest(i,t,e,n){const s=Li(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;return Ka(i,s,r,e.intersect,n,o)},x(i,t,e,n){const s=Li(t,i);return xu(i,s,"x",e.intersect,n)},y(i,t,e,n){const s=Li(t,i);return xu(i,s,"y",e.intersect,n)}}};const Pf=["left","top","right","bottom"];function js(i,t){return i.filter(e=>e.pos===t)}function yu(i,t){return i.filter(e=>Pf.indexOf(e.pos)===-1&&e.box.axis===t)}function $s(i,t){return i.sort((e,n)=>{const s=t?n:e,r=t?e:n;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function Bb(i){const t=[];let e,n,s,r,o,a;for(e=0,n=(i||[]).length;e<n;++e)s=i[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function Hb(i){const t={};for(const e of i){const{stack:n,pos:s,stackWeight:r}=e;if(!n||!Pf.includes(s))continue;const o=t[n]||(t[n]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function Vb(i,t){const e=Hb(i),{vBoxMaxWidth:n,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=i.length;r<o;++r){a=i[r];const{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*n:l&&t.availableWidth,a.height=s):(a.width=n,a.height=h?h*s:l&&t.availableHeight)}return e}function Gb(i){const t=Bb(i),e=$s(t.filter(c=>c.box.fullSize),!0),n=$s(js(t,"left"),!0),s=$s(js(t,"right")),r=$s(js(t,"top"),!0),o=$s(js(t,"bottom")),a=yu(t,"x"),l=yu(t,"y");return{fullSize:e,leftAndTop:n.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:js(t,"chartArea"),vertical:n.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function Mu(i,t,e,n){return Math.max(i[e],t[e])+Math.max(i[n],t[n])}function Lf(i,t){i.top=Math.max(i.top,t.top),i.left=Math.max(i.left,t.left),i.bottom=Math.max(i.bottom,t.bottom),i.right=Math.max(i.right,t.right)}function Wb(i,t,e,n){const{pos:s,box:r}=e,o=i.maxPadding;if(!jt(s)){e.size&&(i[s]-=e.size);const u=n[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?r.height:r.width),e.size=u.size/u.count,i[s]+=e.size}r.getPadding&&Lf(o,r.getPadding());const a=Math.max(0,t.outerWidth-Mu(o,i,"left","right")),l=Math.max(0,t.outerHeight-Mu(o,i,"top","bottom")),c=a!==i.w,h=l!==i.h;return i.w=a,i.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function Xb(i){const t=i.maxPadding;function e(n){const s=Math.max(t[n]-i[n],0);return i[n]+=s,s}i.y+=e("top"),i.x+=e("left"),e("right"),e("bottom")}function qb(i,t){const e=t.maxPadding;function n(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return n(i?["left","right"]:["top","bottom"])}function tr(i,t,e,n){const s=[];let r,o,a,l,c,h;for(r=0,o=i.length,c=0;r<o;++r){a=i[r],l=a.box,l.update(a.width||t.w,a.height||t.h,qb(a.horizontal,t));const{same:u,other:d}=Wb(t,e,a,n);c|=u&&s.length,h=h||d,l.fullSize||s.push(a)}return c&&tr(s,t,e,n)||h}function oo(i,t,e,n,s){i.top=e,i.left=t,i.right=t+n,i.bottom=e+s,i.width=n,i.height=s}function bu(i,t,e,n){const s=e.padding;let{x:r,y:o}=t;for(const a of i){const l=a.box,c=n[a.stack]||{placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const u=t.w*h,d=c.size||l.height;Io(c.start)&&(o=c.start),l.fullSize?oo(l,s.left,o,e.outerWidth-s.right-s.left,d):oo(l,t.left+c.placed,o,u,d),c.start=o,c.placed+=u,o=l.bottom}else{const u=t.h*h,d=c.size||l.width;Io(c.start)&&(r=c.start),l.fullSize?oo(l,r,s.top,d,e.outerHeight-s.bottom-s.top):oo(l,r,t.top+c.placed,d,u),c.start=r,c.placed+=u,r=l.right}}t.x=r,t.y=o}var oi={addBox(i,t){i.boxes||(i.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},i.boxes.push(t)},removeBox(i,t){const e=i.boxes?i.boxes.indexOf(t):-1;e!==-1&&i.boxes.splice(e,1)},configure(i,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(i,t,e,n){if(!i)return;const s=_n(i.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=Gb(i.boxes),l=a.vertical,c=a.horizontal;Qt(i.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const h=l.reduce((_,p)=>p.box.options&&p.box.options.display===!1?_:_+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),d=Object.assign({},s);Lf(d,_n(n));const f=Object.assign({maxPadding:d,w:r,h:o,x:s.left,y:s.top},s),g=Vb(l.concat(c),u);tr(a.fullSize,f,u,g),tr(l,f,u,g),tr(c,f,u,g)&&tr(l,f,u,g),Xb(f),bu(a.leftAndTop,f,u,g),f.x+=f.w,f.y+=f.h,bu(a.rightAndBottom,f,u,g),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},Qt(a.chartArea,_=>{const p=_.box;Object.assign(p,i.chartArea),p.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Df{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,s){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):n)}}isAttached(t){return!0}updateConfig(t){}}class Yb extends Df{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const vo="$chartjs",jb={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Su=i=>i===null||i==="";function $b(i,t){const e=i.style,n=i.getAttribute("height"),s=i.getAttribute("width");if(i[vo]={initial:{height:n,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Su(s)){const r=cu(i,"width");r!==void 0&&(i.width=r)}if(Su(n))if(i.style.height==="")i.height=i.width/(t||2);else{const r=cu(i,"height");r!==void 0&&(i.height=r)}return i}const If=lb?{passive:!0}:!1;function Kb(i,t,e){i&&i.addEventListener(t,e,If)}function Zb(i,t,e){i&&i.canvas&&i.canvas.removeEventListener(t,e,If)}function Jb(i,t){const e=jb[i.type]||i.type,{x:n,y:s}=Li(i,t);return{type:e,chart:t,native:i,x:n!==void 0?n:null,y:s!==void 0?s:null}}function Fo(i,t){for(const e of i)if(e===t||e.contains(t))return!0}function Qb(i,t,e){const n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Fo(a.addedNodes,n),o=o&&!Fo(a.removedNodes,n);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function tS(i,t,e){const n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Fo(a.removedNodes,n),o=o&&!Fo(a.addedNodes,n);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const vr=new Map;let Eu=0;function Of(){const i=window.devicePixelRatio;i!==Eu&&(Eu=i,vr.forEach((t,e)=>{e.currentDevicePixelRatio!==i&&t()}))}function eS(i,t){vr.size||window.addEventListener("resize",Of),vr.set(i,t)}function nS(i){vr.delete(i),vr.size||window.removeEventListener("resize",Of)}function iS(i,t,e){const n=i.canvas,s=n&&nc(n);if(!s)return;const r=uf((a,l)=>{const c=s.clientWidth;e(a,l),c<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||r(c,h)});return o.observe(s),eS(i,r),o}function Za(i,t,e){e&&e.disconnect(),t==="resize"&&nS(i)}function sS(i,t,e){const n=i.canvas,s=uf(r=>{i.ctx!==null&&e(Jb(r,i))},i);return Kb(n,t,s),s}class rS extends Df{acquireContext(t,e){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?($b(t,e),n):null}releaseContext(t){const e=t.canvas;if(!e[vo])return!1;const n=e[vo].initial;["height","width"].forEach(r=>{const o=n[r];se(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=n.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[vo],!0}addEventListener(t,e,n){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:Qb,detach:tS,resize:iS}[e]||sS;s[e]=o(t,e,n)}removeEventListener(t,e){const n=t.$proxies||(t.$proxies={}),s=n[e];if(!s)return;({attach:Za,detach:Za,resize:Za}[e]||Zb)(t,e,s),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,s){return ab(t,e,n,s)}isAttached(t){const e=t&&nc(t);return!!(e&&e.isConnected)}}function oS(i){return!ec()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Yb:rS}class mi{constructor(){k(this,"x");k(this,"y");k(this,"active",!1);k(this,"options");k(this,"$animations")}tooltipPosition(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return gr(this.x)&&gr(this.y)}getProps(t,e){const n=this.$animations;if(!e||!n)return this;const s={};return t.forEach(r=>{s[r]=n[r]&&n[r].active()?n[r]._to:this[r]}),s}}k(mi,"defaults",{}),k(mi,"defaultRoutes");function aS(i,t){const e=i.options.ticks,n=lS(i),s=Math.min(e.maxTicksLimit||n,n),r=e.major.enabled?hS(t):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return uS(t,c,r,o/s),c;const h=cS(r,t,s);if(o>0){let u,d;const f=o>1?Math.round((l-a)/(o-1)):null;for(ao(t,c,h,se(f)?0:a-f,a),u=0,d=o-1;u<d;u++)ao(t,c,h,r[u],r[u+1]);return ao(t,c,h,l,se(f)?t.length:l+f),c}return ao(t,c,h),c}function lS(i){const t=i.options.offset,e=i._tickSize(),n=i._length/e+(t?0:1),s=i._maxLength/e;return Math.floor(Math.min(n,s))}function cS(i,t,e){const n=dS(i),s=t.length/e;if(!n)return Math.max(s,1);const r=iM(n);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function hS(i){const t=[];let e,n;for(e=0,n=i.length;e<n;e++)i[e].major&&t.push(e);return t}function uS(i,t,e,n){let s=0,r=e[0],o;for(n=Math.ceil(n),o=0;o<i.length;o++)o===r&&(t.push(i[o]),s++,r=e[s*n])}function ao(i,t,e,n,s){const r=Yt(n,0),o=Math.min(Yt(s,i.length),i.length);let a=0,l,c,h;for(e=Math.ceil(e),s&&(l=s-n,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(c=Math.max(r,0);c<o;c++)c===h&&(t.push(i[c]),a++,h=Math.round(r+a*e))}function dS(i){const t=i.length;let e,n;if(t<2)return!1;for(n=i[0],e=1;e<t;++e)if(i[e]-i[e-1]!==n)return!1;return n}const fS=i=>i==="left"?"right":i==="right"?"left":i,Tu=(i,t,e)=>t==="top"||t==="left"?i[t]+e:i[t]-e,wu=(i,t)=>Math.min(t||i,i);function Au(i,t){const e=[],n=i.length/t,s=i.length;let r=0;for(;r<s;r+=n)e.push(i[Math.floor(r)]);return e}function pS(i,t,e){const n=i.ticks.length,s=Math.min(t,n-1),r=i._startPixel,o=i._endPixel,a=1e-6;let l=i.getPixelForTick(s),c;if(!(e&&(n===1?c=Math.max(l-r,o-l):t===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(s-1))/2,l+=s<t?c:-c,l<r-a||l>o+a)))return l}function mS(i,t){Qt(i,e=>{const n=e.gc,s=n.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[n[r]];n.splice(0,s)}})}function Ks(i){return i.drawTicks?i.tickLength:0}function Cu(i,t){if(!i.display)return 0;const e=Xe(i.font,t),n=_n(i.padding);return(Ae(i.text)?i.text.length:1)*e.lineHeight+n.height}function gS(i,t){return Wi(i,{scale:t,type:"scale"})}function _S(i,t,e){return Wi(i,{tick:e,index:t,type:"tick"})}function vS(i,t,e){let n=df(i);return(e&&t!=="right"||!e&&t==="right")&&(n=fS(n)),n}function xS(i,t,e,n){const{top:s,left:r,bottom:o,right:a,chart:l}=i,{chartArea:c,scales:h}=l;let u=0,d,f,g;const _=o-s,p=a-r;if(i.isHorizontal()){if(f=Ze(n,r,a),jt(e)){const m=Object.keys(e)[0],M=e[m];g=h[m].getPixelForValue(M)+_-t}else e==="center"?g=(c.bottom+c.top)/2+_-t:g=Tu(i,e,t);d=a-r}else{if(jt(e)){const m=Object.keys(e)[0],M=e[m];f=h[m].getPixelForValue(M)-p+t}else e==="center"?f=(c.left+c.right)/2-p+t:f=Tu(i,e,t);g=Ze(n,o,s),u=e==="left"?-pn:pn}return{titleX:f,titleY:g,maxWidth:d,rotation:u}}class ks extends mi{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:s}=this;return t=vn(t,Number.POSITIVE_INFINITY),e=vn(e,Number.NEGATIVE_INFINITY),n=vn(n,Number.POSITIVE_INFINITY),s=vn(s,Number.NEGATIVE_INFINITY),{min:vn(t,n),max:vn(e,s),minDefined:Oe(t),maxDefined:Oe(e)}}getMinMax(t){let{min:e,max:n,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:n};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(n=Math.max(n,o.max));return e=r&&e>n?n:e,n=s&&e>n?e:n,{min:vn(e,vn(n,e)),max:vn(n,vn(e,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){re(this.options.beforeUpdate,[this])}update(t,e,n){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=zM(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Au(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=aS(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,n;this.isHorizontal()?(e=this.left,n=this.right):(e=this.top,n=this.bottom,t=!t),this._startPixel=e,this._endPixel=n,this._reversePixels=t,this._length=n-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){re(this.options.afterUpdate,[this])}beforeSetDimensions(){re(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){re(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),re(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){re(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let n,s,r;for(n=0,s=t.length;n<s;n++)r=t[n],r.label=re(e.callback,[r.value,n,t],this)}afterTickToLabelConversion(){re(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){re(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,n=wu(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!e.display||s>=r||n<=1||!this.isHorizontal()){this.labelRotation=s;return}const h=this._getLabelSizes(),u=h.widest.width,d=h.highest.height,f=nn(this.chart.width-u,0,this.maxWidth);a=t.offset?this.maxWidth/n:f/(n-1),u+6>a&&(a=f/(n-(t.offset?.5:1)),l=this.maxHeight-Ks(t.grid)-e.padding-Cu(t.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),o=aM(Math.min(Math.asin(nn((h.highest.height+6)/a,-1,1)),Math.asin(nn(l/c,-1,1))-Math.asin(nn(d/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){re(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){re(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:n,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=Cu(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ks(r)+l):(t.height=this.maxHeight,t.width=Ks(r)+l),n.display&&this.ticks.length){const{first:c,last:h,widest:u,highest:d}=this._getLabelSizes(),f=n.padding*2,g=ki(this.labelRotation),_=Math.cos(g),p=Math.sin(g);if(a){const m=n.mirror?0:p*u.width+_*d.height;t.height=Math.min(this.maxHeight,t.height+m+f)}else{const m=n.mirror?0:_*u.width+p*d.height;t.width=Math.min(this.maxWidth,t.width+m+f)}this._calculatePadding(c,h,p,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,n,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,f=0;l?c?(d=s*t.width,f=n*e.height):(d=n*t.height,f=s*e.width):r==="start"?f=e.width:r==="end"?d=t.width:r!=="inner"&&(d=t.width/2,f=e.width/2),this.paddingLeft=Math.max((d-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-u+o)*this.width/(this.width-u),0)}else{let h=e.height/2,u=t.height/2;r==="start"?(h=0,u=t.height):r==="end"&&(h=e.height,u=0),this.paddingTop=h+o,this.paddingBottom=u+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){re(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,n;for(e=0,n=t.length;e<n;e++)se(t[e].label)&&(t.splice(e,1),n--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let n=this.ticks;e<n.length&&(n=Au(n,e)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,n){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/wu(e,n));let c=0,h=0,u,d,f,g,_,p,m,M,x,E,C;for(u=0;u<e;u+=l){if(g=t[u].label,_=this._resolveTickFontOptions(u),s.font=p=_.string,m=r[p]=r[p]||{data:{},gc:[]},M=_.lineHeight,x=E=0,!se(g)&&!Ae(g))x=su(s,m.data,m.gc,x,g),E=M;else if(Ae(g))for(d=0,f=g.length;d<f;++d)C=g[d],!se(C)&&!Ae(C)&&(x=su(s,m.data,m.gc,x,C),E+=M);o.push(x),a.push(E),c=Math.max(x,c),h=Math.max(E,h)}mS(r,e);const A=o.indexOf(c),w=a.indexOf(h),R=S=>({width:o[S]||0,height:a[S]||0});return{first:R(0),last:R(e-1),widest:R(A),highest:R(w),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return hM(this._alignToPixels?Ai(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const n=e[t];return n.$context||(n.$context=_S(this.getContext(),t,n))}return this.$context||(this.$context=gS(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=ki(this.labelRotation),n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*n>a*s?a/n:l/s:l*s<a*n?l/n:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,n=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),u=this.ticks.length+(l?1:0),d=Ks(r),f=[],g=a.setContext(this.getContext()),_=g.display?g.width:0,p=_/2,m=function(V){return Ai(n,V,_)};let M,x,E,C,A,w,R,S,y,P,O,U;if(o==="top")M=m(this.bottom),w=this.bottom-d,S=M-p,P=m(t.top)+p,U=t.bottom;else if(o==="bottom")M=m(this.top),P=t.top,U=m(t.bottom)-p,w=M+p,S=this.top+d;else if(o==="left")M=m(this.right),A=this.right-d,R=M-p,y=m(t.left)+p,O=t.right;else if(o==="right")M=m(this.left),y=t.left,O=m(t.right)-p,A=M+p,R=this.left+d;else if(e==="x"){if(o==="center")M=m((t.top+t.bottom)/2+.5);else if(jt(o)){const V=Object.keys(o)[0],K=o[V];M=m(this.chart.scales[V].getPixelForValue(K))}P=t.top,U=t.bottom,w=M+p,S=w+d}else if(e==="y"){if(o==="center")M=m((t.left+t.right)/2);else if(jt(o)){const V=Object.keys(o)[0],K=o[V];M=m(this.chart.scales[V].getPixelForValue(K))}A=M-p,R=A-d,y=t.left,O=t.right}const Y=Yt(s.ticks.maxTicksLimit,u),X=Math.max(1,Math.ceil(u/Y));for(x=0;x<u;x+=X){const V=this.getContext(x),K=r.setContext(V),j=a.setContext(V),ct=K.lineWidth,dt=K.color,pt=j.dash||[],Rt=j.dashOffset,Ht=K.tickWidth,$=K.tickColor,et=K.tickBorderDash||[],ut=K.tickBorderDashOffset;E=pS(this,x,l),E!==void 0&&(C=Ai(n,E,ct),c?A=R=y=O=C:w=S=P=U=C,f.push({tx1:A,ty1:w,tx2:R,ty2:S,x1:y,y1:P,x2:O,y2:U,width:ct,color:dt,borderDash:pt,borderDashOffset:Rt,tickWidth:Ht,tickColor:$,tickBorderDash:et,tickBorderDashOffset:ut}))}return this._ticksLength=u,this._borderValue=M,f}_computeLabelItems(t){const e=this.axis,n=this.options,{position:s,ticks:r}=n,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:u}=r,d=Ks(n.grid),f=d+h,g=u?-h:f,_=-ki(this.labelRotation),p=[];let m,M,x,E,C,A,w,R,S,y,P,O,U="middle";if(s==="top")A=this.bottom-g,w=this._getXAxisLabelAlignment();else if(s==="bottom")A=this.top+g,w=this._getXAxisLabelAlignment();else if(s==="left"){const X=this._getYAxisLabelAlignment(d);w=X.textAlign,C=X.x}else if(s==="right"){const X=this._getYAxisLabelAlignment(d);w=X.textAlign,C=X.x}else if(e==="x"){if(s==="center")A=(t.top+t.bottom)/2+f;else if(jt(s)){const X=Object.keys(s)[0],V=s[X];A=this.chart.scales[X].getPixelForValue(V)+f}w=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")C=(t.left+t.right)/2-f;else if(jt(s)){const X=Object.keys(s)[0],V=s[X];C=this.chart.scales[X].getPixelForValue(V)}w=this._getYAxisLabelAlignment(d).textAlign}e==="y"&&(l==="start"?U="top":l==="end"&&(U="bottom"));const Y=this._getLabelSizes();for(m=0,M=a.length;m<M;++m){x=a[m],E=x.label;const X=r.setContext(this.getContext(m));R=this.getPixelForTick(m)+r.labelOffset,S=this._resolveTickFontOptions(m),y=S.lineHeight,P=Ae(E)?E.length:1;const V=P/2,K=X.color,j=X.textStrokeColor,ct=X.textStrokeWidth;let dt=w;o?(C=R,w==="inner"&&(m===M-1?dt=this.options.reverse?"left":"right":m===0?dt=this.options.reverse?"right":"left":dt="center"),s==="top"?c==="near"||_!==0?O=-P*y+y/2:c==="center"?O=-Y.highest.height/2-V*y+y:O=-Y.highest.height+y/2:c==="near"||_!==0?O=y/2:c==="center"?O=Y.highest.height/2-V*y:O=Y.highest.height-P*y,u&&(O*=-1),_!==0&&!X.showLabelBackdrop&&(C+=y/2*Math.sin(_))):(A=R,O=(1-P)*y/2);let pt;if(X.showLabelBackdrop){const Rt=_n(X.backdropPadding),Ht=Y.heights[m],$=Y.widths[m];let et=O-Rt.top,ut=0-Rt.left;switch(U){case"middle":et-=Ht/2;break;case"bottom":et-=Ht;break}switch(w){case"center":ut-=$/2;break;case"right":ut-=$;break;case"inner":m===M-1?ut-=$:m>0&&(ut-=$/2);break}pt={left:ut,top:et,width:$+Rt.width,height:Ht+Rt.height,color:X.backdropColor}}p.push({label:E,font:S,textOffset:O,options:{rotation:_,color:K,strokeColor:j,strokeWidth:ct,textAlign:dt,textBaseline:U,translation:[C,A],backdrop:pt}})}return p}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-ki(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:n,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let c,h;return e==="left"?s?(h=this.right+r,n==="near"?c="left":n==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,n==="near"?c="right":n==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?s?(h=this.left+r,n==="near"?c="right":n==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,n==="near"?c="left":n==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:n,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,n=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,c,h)=>{!h.width||!h.color||(n.save(),n.lineWidth=h.width,n.strokeStyle=h.color,n.setLineDash(h.borderDash||[]),n.lineDashOffset=h.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const l=s[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:n,grid:s}}=this,r=n.setContext(this.getContext()),o=n.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,u,d;this.isHorizontal()?(c=Ai(t,this.left,o)-o/2,h=Ai(t,this.right,a)+a/2,u=d=l):(u=Ai(t,this.top,o)-o/2,d=Ai(t,this.bottom,a)+a/2,c=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(c,u),e.lineTo(h,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const n=this.ctx,s=this._computeLabelArea();s&&jo(n,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,c=o.label,h=o.textOffset;No(n,c,0,h,l,a)}s&&$o(n)}drawTitle(){const{ctx:t,options:{position:e,title:n,reverse:s}}=this;if(!n.display)return;const r=Xe(n.font),o=_n(n.padding),a=n.align;let l=r.lineHeight/2;e==="bottom"||e==="center"||jt(e)?(l+=o.bottom,Ae(n.text)&&(l+=r.lineHeight*(n.text.length-1))):l+=o.top;const{titleX:c,titleY:h,maxWidth:u,rotation:d}=xS(this,l,e,a);No(t,n.text,0,0,r,{color:n.color,maxWidth:u,rotation:d,textAlign:vS(a,e,s),textBaseline:"middle",translation:[c,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,n=Yt(t.grid&&t.grid.z,-1),s=Yt(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==ks.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:n,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[n]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Xe(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class lo{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let n;bS(e)&&(n=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,yS(t,o,n),this.override&&pe.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,n=t.id,s=this.scope;n in e&&delete e[n],s&&n in pe[s]&&(delete pe[s][n],this.override&&delete Hi[n])}}function yS(i,t,e){const n=mr(Object.create(null),[e?pe.get(e):{},pe.get(t),i.defaults]);pe.set(t,n),i.defaultRoutes&&MS(t,i.defaultRoutes),i.descriptors&&pe.describe(t,i.descriptors)}function MS(i,t){Object.keys(t).forEach(e=>{const n=e.split("."),s=n.pop(),r=[i].concat(n).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");pe.route(r,s,l,a)})}function bS(i){return"id"in i&&"defaults"in i}class SS{constructor(){this.controllers=new lo(dr,"datasets",!0),this.elements=new lo(mi,"elements"),this.plugins=new lo(Object,"plugins"),this.scales=new lo(ks,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,n){[...e].forEach(s=>{const r=n||this._getRegistryForType(s);n||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):Qt(s,o=>{const a=n||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,n){const s=$l(t);re(n["before"+s],[],n),e[t](n),re(n["after"+s],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+n+".");return s}}var Mn=new SS;class ES{constructor(){this._init=void 0}notify(t,e,n,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,n);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,n,s){s=s||{};for(const r of t){const o=r.plugin,a=o[n],l=[e,s,r.options];if(re(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){se(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const n=t&&t.config,s=Yt(n.options&&n.options.plugins,{}),r=TS(n);return s===!1&&!e?[]:AS(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],n=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(e,n),t,"stop"),this._notify(s(n,e),t,"start")}}function TS(i){const t={},e=[],n=Object.keys(Mn.plugins.items);for(let r=0;r<n.length;r++)e.push(Mn.getPlugin(n[r]));const s=i.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function wS(i,t){return!t&&i===!1?null:i===!0?{}:i}function AS(i,{plugins:t,localIds:e},n,s){const r=[],o=i.getContext();for(const a of t){const l=a.id,c=wS(n[l],s);c!==null&&r.push({plugin:a,options:CS(i.config,{plugin:a,local:e[l]},c,o)})}return r}function CS(i,{plugin:t,local:e},n,s){const r=i.pluginScopeKeys(t),o=i.getOptionScopes(n,r);return e&&t.defaults&&o.push(t.defaults),i.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Tl(i,t){const e=pe.datasets[i]||{};return((t.datasets||{})[i]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function RS(i,t){let e=i;return i==="_index_"?e=t:i==="_value_"&&(e=t==="x"?"y":"x"),e}function PS(i,t){return i===t?"_index_":"_value_"}function Ru(i){if(i==="x"||i==="y"||i==="r")return i}function LS(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function wl(i,...t){if(Ru(i))return i;for(const e of t){const n=e.axis||LS(e.position)||i.length>1&&Ru(i[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function Pu(i,t,e){if(e[t+"AxisID"]===i)return{axis:t}}function DS(i,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(n=>n.xAxisID===i||n.yAxisID===i);if(e.length)return Pu(i,"x",e[0])||Pu(i,"y",e[0])}return{}}function IS(i,t){const e=Hi[i.type]||{scales:{}},n=t.scales||{},s=Tl(i.type,t),r=Object.create(null);return Object.keys(n).forEach(o=>{const a=n[o];if(!jt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=wl(o,a,DS(o,i),pe.scales[a.type]),c=PS(l,s),h=e.scales||{};r[o]=ar(Object.create(null),[{axis:l},a,h[l],h[c]])}),i.data.datasets.forEach(o=>{const a=o.type||i.type,l=o.indexAxis||Tl(a,t),h=(Hi[a]||{}).scales||{};Object.keys(h).forEach(u=>{const d=RS(u,l),f=o[d+"AxisID"]||d;r[f]=r[f]||Object.create(null),ar(r[f],[{axis:d},n[f],h[u]])})}),Object.keys(r).forEach(o=>{const a=r[o];ar(a,[pe.scales[a.type],pe.scale])}),r}function Nf(i){const t=i.options||(i.options={});t.plugins=Yt(t.plugins,{}),t.scales=IS(i,t)}function Uf(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function OS(i){return i=i||{},i.data=Uf(i.data),Nf(i),i}const Lu=new Map,Ff=new Set;function co(i,t){let e=Lu.get(i);return e||(e=t(),Lu.set(i,e),Ff.add(e)),e}const Zs=(i,t,e)=>{const n=Do(t,e);n!==void 0&&i.add(n)};class NS{constructor(t){this._config=OS(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Uf(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Nf(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return co(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return co(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return co(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,n=this.type;return co(`${n}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const n=this._scopeCache;let s=n.get(t);return(!s||e)&&(s=new Map,n.set(t,s)),s}getOptionScopes(t,e,n){const{options:s,type:r}=this,o=this._cachedScopes(t,n),a=o.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(u=>Zs(l,t,u))),h.forEach(u=>Zs(l,s,u)),h.forEach(u=>Zs(l,Hi[r]||{},u)),h.forEach(u=>Zs(l,pe,u)),h.forEach(u=>Zs(l,bl,u))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Ff.has(e)&&o.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,Hi[e]||{},pe.datasets[e]||{},{type:e},pe,bl]}resolveNamedOptions(t,e,n,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Du(this._resolverCache,t,s);let l=o;if(FS(o,e)){r.$shared=!1,n=pi(n)?n():n;const c=this.createResolver(t,n,a);l=Ls(o,n,c)}for(const c of e)r[c]=l[c];return r}createResolver(t,e,n=[""],s){const{resolver:r}=Du(this._resolverCache,t,n);return jt(e)?Ls(r,e,void 0,s):r}}function Du(i,t,e){let n=i.get(t);n||(n=new Map,i.set(t,n));const s=e.join();let r=n.get(s);return r||(r={resolver:Jl(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},n.set(s,r)),r}const US=i=>jt(i)&&Object.getOwnPropertyNames(i).some(t=>pi(i[t]));function FS(i,t){const{isScriptable:e,isIndexable:n}=_f(i);for(const s of t){const r=e(s),o=n(s),a=(o||r)&&i[s];if(r&&(pi(a)||US(a))||o&&Ae(a))return!0}return!1}var kS="4.5.1";const zS=["top","bottom","left","right","chartArea"];function Iu(i,t){return i==="top"||i==="bottom"||zS.indexOf(i)===-1&&t==="x"}function Ou(i,t){return function(e,n){return e[i]===n[i]?e[t]-n[t]:e[i]-n[i]}}function Nu(i){const t=i.chart,e=t.options.animation;t.notifyPlugins("afterRender"),re(e&&e.onComplete,[i],t)}function BS(i){const t=i.chart,e=t.options.animation;re(e&&e.onProgress,[i],t)}function kf(i){return ec()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const xo={},Uu=i=>{const t=kf(i);return Object.values(xo).filter(e=>e.canvas===t).pop()};function HS(i,t,e){const n=Object.keys(i);for(const s of n){const r=+s;if(r>=t){const o=i[s];delete i[s],(e>0||r>t)&&(i[r+e]=o)}}}function VS(i,t,e,n){return!e||i.type==="mouseout"?null:n?t:i}class En{static register(...t){Mn.add(...t),Fu()}static unregister(...t){Mn.remove(...t),Fu()}constructor(t,e){const n=this.config=new NS(e),s=kf(t),r=Uu(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||oS(s)),this.platform.updateConfig(n);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=jy(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new ES,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=mM(u=>this.update(u),o.resizeDelay||0),this._dataChanges=[],xo[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}kn.listen(this,"complete",Nu),kn.listen(this,"progress",BS),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:n,height:s,_aspectRatio:r}=this;return se(t)?e&&r?r:s?n/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Mn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():lu(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return ru(this.canvas,this.ctx),this}stop(){return kn.stop(this),this}resize(t,e){kn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const n=this.options,s=this.canvas,r=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,lu(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),re(n.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};Qt(e,(n,s)=>{n.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,n=this.scales,s=Object.keys(n).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],l=wl(o,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),Qt(r,o=>{const a=o.options,l=a.id,c=wl(l,a),h=Yt(a.type,o.dtype);(a.position===void 0||Iu(a.position,c)!==Iu(o.dposition))&&(a.position=o.dposition),s[l]=!0;let u=null;if(l in n&&n[l].type===h)u=n[l];else{const d=Mn.getScale(h);u=new d({id:l,type:h,ctx:this.ctx,chart:this}),n[u.id]=u}u.init(a,t)}),Qt(s,(o,a)=>{o||delete n[a]}),Qt(n,o=>{oi.configure(this,o,o.options),oi.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,n=t.length;if(t.sort((s,r)=>s.index-r.index),n>e){for(let s=e;s<n;++s)this._destroyDatasetMeta(s);t.splice(e,n-e)}this._sortedMetasets=t.slice(0).sort(Ou("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((n,s)=>{e.filter(r=>r===n._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let n,s;for(this._removeUnreferencedMetasets(),n=0,s=e.length;n<s;n++){const r=e[n];let o=this.getDatasetMeta(n);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(n),o=this.getDatasetMeta(n)),o.type=a,o.indexAxis=r.indexAxis||Tl(a,this.options),o.order=r.order||0,o.index=n,o.label=""+r.label,o.visible=this.isDatasetVisible(n),o.controller)o.controller.updateIndex(n),o.controller.linkScales();else{const l=Mn.getController(a),{datasetElementType:c,dataElementType:h}=pe.datasets[a];Object.assign(l,{dataElementType:Mn.getElement(h),datasetElementType:c&&Mn.getElement(c)}),o.controller=new l(this,n),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){Qt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const n=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,h=this.data.datasets.length;c<h;c++){const{controller:u}=this.getDatasetMeta(c),d=!s&&r.indexOf(u)===-1;u.buildOrUpdateElements(d),o=Math.max(+u.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),s||Qt(r,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Ou("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Qt(this.scales,t=>{oi.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),n=new Set(t.events);(!$h(e,n)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:n,start:s,count:r}of e){const o=n==="_removeElements"?-r:r;HS(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,n=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=n(0);for(let r=1;r<e;r++)if(!$h(s,n(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;oi.update(this,this.width,this.height,t);const e=this.chartArea,n=e.width<=0||e.height<=0;this._layers=[],Qt(this.boxes,s=>{n&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,n=this.data.datasets.length;e<n;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,n=this.data.datasets.length;e<n;++e)this._updateDataset(e,pi(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const n=this.getDatasetMeta(t),s={meta:n,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(n.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(kn.has(this)?this.attached&&!kn.running(this)&&kn.start(this):(this.draw(),Nu({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:n,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(n,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,n=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&n.push(o)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,n={meta:t,index:t.index,cancelable:!0},s=Af(this,t);this.notifyPlugins("beforeDatasetDraw",n)!==!1&&(s&&jo(e,s),t.controller.draw(),s&&$o(e),n.cancelable=!1,this.notifyPlugins("afterDatasetDraw",n))}isPointInArea(t){return _r(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,n,s){const r=zb.modes[e];return typeof r=="function"?r(this,t,n,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],n=this._metasets;let s=n.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},n.push(s)),s}getContext(){return this.$context||(this.$context=Wi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const n=this.getDatasetMeta(t);return typeof n.hidden=="boolean"?!n.hidden:!e.hidden}setDatasetVisibility(t,e){const n=this.getDatasetMeta(t);n.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,n){const s=n?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);Io(e)?(r.data[e].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),o.update(r,{visible:n}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),kn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),ru(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete xo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,n=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};Qt(this.options.events,r=>n(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,n=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},s=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),n("resize",r),n("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),n("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){Qt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},Qt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,n){const s=n?"set":"remove";let r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],n=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Po(n,e)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,e))}notifyPlugins(t,e,n){return this._plugins.notify(this,t,e,n)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,n){const s=this.options.hover,r=(l,c)=>l.filter(h=>!c.some(u=>h.datasetIndex===u.datasetIndex&&h.index===u.index)),o=r(e,t),a=n?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const n={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",n,s)===!1)return;const r=this._handleEvent(t,e,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,s),(r||n.changed)&&this.render(),this}_handleEvent(t,e,n){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,n,o),l=tM(t),c=VS(t,this._lastEvent,n,l);n&&(this._lastEvent=null,re(r.onHover,[t,a,this],this),l&&re(r.onClick,[t,a,this],this));const h=!Po(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=c,h}_getActiveElements(t,e,n,s){if(t.type==="mouseout")return[];if(!n)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}k(En,"defaults",pe),k(En,"instances",xo),k(En,"overrides",Hi),k(En,"registry",Mn),k(En,"version",kS),k(En,"getChart",Uu);function Fu(){return Qt(En.instances,i=>i._plugins.invalidate())}function zf(i,t,e=t){i.lineCap=Yt(e.borderCapStyle,t.borderCapStyle),i.setLineDash(Yt(e.borderDash,t.borderDash)),i.lineDashOffset=Yt(e.borderDashOffset,t.borderDashOffset),i.lineJoin=Yt(e.borderJoinStyle,t.borderJoinStyle),i.lineWidth=Yt(e.borderWidth,t.borderWidth),i.strokeStyle=Yt(e.borderColor,t.borderColor)}function GS(i,t,e){i.lineTo(e.x,e.y)}function WS(i){return i.stepped?RM:i.tension||i.cubicInterpolationMode==="monotone"?PM:GS}function Bf(i,t,e={}){const n=i.length,{start:s=0,end:r=n-1}=e,{start:o,end:a}=t,l=Math.max(s,o),c=Math.min(r,a),h=s<o&&r<o||s>a&&r>a;return{count:n,start:l,loop:t.loop,ilen:c<l&&!h?n+c-l:c-l}}function XS(i,t,e,n){const{points:s,options:r}=t,{count:o,start:a,loop:l,ilen:c}=Bf(s,e,n),h=WS(r);let{move:u=!0,reverse:d}=n||{},f,g,_;for(f=0;f<=c;++f)g=s[(a+(d?c-f:f))%o],!g.skip&&(u?(i.moveTo(g.x,g.y),u=!1):h(i,_,g,d,r.stepped),_=g);return l&&(g=s[(a+(d?c:0))%o],h(i,_,g,d,r.stepped)),!!l}function qS(i,t,e,n){const s=t.points,{count:r,start:o,ilen:a}=Bf(s,e,n),{move:l=!0,reverse:c}=n||{};let h=0,u=0,d,f,g,_,p,m;const M=E=>(o+(c?a-E:E))%r,x=()=>{_!==p&&(i.lineTo(h,p),i.lineTo(h,_),i.lineTo(h,m))};for(l&&(f=s[M(0)],i.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=s[M(d)],f.skip)continue;const E=f.x,C=f.y,A=E|0;A===g?(C<_?_=C:C>p&&(p=C),h=(u*h+E)/++u):(x(),i.lineTo(E,C),g=A,u=0,_=p=C),m=C}x()}function Al(i){const t=i.options,e=t.borderDash&&t.borderDash.length;return!i._decimated&&!i._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?qS:XS}function YS(i){return i.stepped?cb:i.tension||i.cubicInterpolationMode==="monotone"?hb:Di}function jS(i,t,e,n){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,n)&&s.closePath()),zf(i,t.options),i.stroke(s)}function $S(i,t,e,n){const{segments:s,options:r}=t,o=Al(t);for(const a of s)zf(i,r,a.style),i.beginPath(),o(i,t,a,{start:e,end:e+n-1})&&i.closePath(),i.stroke()}const KS=typeof Path2D=="function";function ZS(i,t,e,n){KS&&!t.options.segment?jS(i,t,e,n):$S(i,t,e,n)}class ai extends mi{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const s=n.spanGaps?this._loop:this._fullLoop;eb(this._points,n,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=gb(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,n=t.length;return n&&e[t[n-1].end]}interpolate(t,e){const n=this.options,s=t[e],r=this.points,o=wf(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],l=YS(n);let c,h;for(c=0,h=o.length;c<h;++c){const{start:u,end:d}=o[c],f=r[u],g=r[d];if(f===g){a.push(f);continue}const _=Math.abs((s-f[e])/(g[e]-f[e])),p=l(f,g,_,n.stepped);p[e]=t[e],a.push(p)}return a.length===1?a[0]:a}pathSegment(t,e,n){return Al(this)(t,this,e,n)}path(t,e,n){const s=this.segments,r=Al(this);let o=this._loop;e=e||0,n=n||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+n-1});return!!o}draw(t,e,n,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),ZS(t,this,n,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}k(ai,"id","line"),k(ai,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),k(ai,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),k(ai,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function ku(i,t,e,n){const s=i.options,{[e]:r}=i.getProps([e],n);return Math.abs(t-r)<s.radius+s.hitRadius}class yo extends mi{constructor(e){super();k(this,"parsed");k(this,"skip");k(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,n,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(n-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,n){return ku(this,e,"x",n)}inYRange(e,n){return ku(this,e,"y",n)}getCenterPoint(e){const{x:n,y:s}=this.getProps(["x","y"],e);return{x:n,y:s}}size(e){e=e||this.options||{};let n=e.radius||0;n=Math.max(n,n&&e.hoverRadius||0);const s=n&&e.borderWidth||0;return(n+s)*2}draw(e,n){const s=this.options;this.skip||s.radius<.1||!_r(this,n,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,Sl(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}k(yo,"id","point"),k(yo,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),k(yo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function JS(i,t,e){const n=i.segments,s=i.points,r=t.points,o=[];for(const a of n){let{start:l,end:c}=a;c=Jo(l,c,s);const h=Cl(e,s[l],s[c],a.loop);if(!t.segments){o.push({source:a,target:h,start:s[l],end:s[c]});continue}const u=wf(t,h);for(const d of u){const f=Cl(e,r[d.start],r[d.end],d.loop),g=Tf(a,s,f);for(const _ of g)o.push({source:_,target:d,start:{[e]:zu(h,f,"start",Math.max)},end:{[e]:zu(h,f,"end",Math.min)}})}}return o}function Cl(i,t,e,n){if(n)return;let s=t[i],r=e[i];return i==="angle"&&(s=bn(s),r=bn(r)),{property:i,start:s,end:r}}function QS(i,t){const{x:e=null,y:n=null}=i||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Jo(o,a,s);const l=s[o],c=s[a];n!==null?(r.push({x:l.x,y:n}),r.push({x:c.x,y:n})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:c.y}))}),r}function Jo(i,t,e){for(;t>i;t--){const n=e[t];if(!isNaN(n.x)&&!isNaN(n.y))break}return t}function zu(i,t,e,n){return i&&t?n(i[e],t[e]):i?i[e]:t?t[e]:0}function Hf(i,t){let e=[],n=!1;return Ae(i)?(n=!0,e=i):e=QS(i,t),e.length?new ai({points:e,options:{tension:0},_loop:n,_fullLoop:n}):null}function Bu(i){return i&&i.fill!==!1}function tE(i,t,e){let s=i[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!Oe(s))return s;if(o=i[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function eE(i,t,e){const n=rE(i);if(jt(n))return isNaN(n.value)?!1:n;let s=parseFloat(n);return Oe(s)&&Math.floor(s)===s?nE(n[0],t,s,e):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function nE(i,t,e,n){return(i==="-"||i==="+")&&(e=t+e),e===t||e<0||e>=n?!1:e}function iE(i,t){let e=null;return i==="start"?e=t.bottom:i==="end"?e=t.top:jt(i)?e=t.getPixelForValue(i.value):t.getBasePixel&&(e=t.getBasePixel()),e}function sE(i,t,e){let n;return i==="start"?n=e:i==="end"?n=t.options.reverse?t.min:t.max:jt(i)?n=i.value:n=t.getBaseValue(),n}function rE(i){const t=i.options,e=t.fill;let n=Yt(e&&e.target,e);return n===void 0&&(n=!!t.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function oE(i){const{scale:t,index:e,line:n}=i,s=[],r=n.segments,o=n.points,a=aE(t,e);a.push(Hf({x:null,y:t.bottom},n));for(let l=0;l<r.length;l++){const c=r[l];for(let h=c.start;h<=c.end;h++)lE(s,o[h],a)}return new ai({points:s,options:{}})}function aE(i,t){const e=[],n=i.getMatchingVisibleMetas("line");for(let s=0;s<n.length;s++){const r=n[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function lE(i,t,e){const n=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:l}=cE(r,t,"x");if(!(!l||o&&a)){if(o)n.unshift(l);else if(i.push(l),!a)break}}i.push(...n)}function cE(i,t,e){const n=i.interpolate(t,e);if(!n)return{};const s=n[e],r=i.segments,o=i.points;let a=!1,l=!1;for(let c=0;c<r.length;c++){const h=r[c],u=o[h.start][e],d=o[h.end][e];if(ms(s,u,d)){a=s===u,l=s===d;break}}return{first:a,last:l,point:n}}class Vf{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,n){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:gn},t.arc(s,r,o,e.end,e.start,!0),!n.bounds}interpolate(t){const{x:e,y:n,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:n+Math.sin(r)*s,angle:r}}}function hE(i){const{chart:t,fill:e,line:n}=i;if(Oe(e))return uE(t,e);if(e==="stack")return oE(i);if(e==="shape")return!0;const s=dE(i);return s instanceof Vf?s:Hf(s,n)}function uE(i,t){const e=i.getDatasetMeta(t);return e&&i.isDatasetVisible(t)?e.dataset:null}function dE(i){return(i.scale||{}).getPointPositionForValue?pE(i):fE(i)}function fE(i){const{scale:t={},fill:e}=i,n=iE(e,t);if(Oe(n)){const s=t.isHorizontal();return{x:s?n:null,y:s?null:n}}return null}function pE(i){const{scale:t,fill:e}=i,n=t.options,s=t.getLabels().length,r=n.reverse?t.max:t.min,o=sE(e,t,r),a=[];if(n.grid.circular){const l=t.getPointPositionForValue(0,r);return new Vf({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<s;++l)a.push(t.getPointPositionForValue(l,o));return a}function Ja(i,t,e){const n=hE(t),{chart:s,index:r,line:o,scale:a,axis:l}=t,c=o.options,h=c.fill,u=c.backgroundColor,{above:d=u,below:f=u}=h||{},g=s.getDatasetMeta(r),_=Af(s,g);n&&o.points.length&&(jo(i,e),mE(i,{line:o,target:n,above:d,below:f,area:e,scale:a,axis:l,clip:_}),$o(i))}function mE(i,t){const{line:e,target:n,above:s,below:r,area:o,scale:a,clip:l}=t,c=e._loop?"angle":t.axis;i.save();let h=r;r!==s&&(c==="x"?(Hu(i,n,o.top),Qa(i,{line:e,target:n,color:s,scale:a,property:c,clip:l}),i.restore(),i.save(),Hu(i,n,o.bottom)):c==="y"&&(Vu(i,n,o.left),Qa(i,{line:e,target:n,color:r,scale:a,property:c,clip:l}),i.restore(),i.save(),Vu(i,n,o.right),h=s)),Qa(i,{line:e,target:n,color:h,scale:a,property:c,clip:l}),i.restore()}function Hu(i,t,e){const{segments:n,points:s}=t;let r=!0,o=!1;i.beginPath();for(const a of n){const{start:l,end:c}=a,h=s[l],u=s[Jo(l,c,s)];r?(i.moveTo(h.x,h.y),r=!1):(i.lineTo(h.x,e),i.lineTo(h.x,h.y)),o=!!t.pathSegment(i,a,{move:o}),o?i.closePath():i.lineTo(u.x,e)}i.lineTo(t.first().x,e),i.closePath(),i.clip()}function Vu(i,t,e){const{segments:n,points:s}=t;let r=!0,o=!1;i.beginPath();for(const a of n){const{start:l,end:c}=a,h=s[l],u=s[Jo(l,c,s)];r?(i.moveTo(h.x,h.y),r=!1):(i.lineTo(e,h.y),i.lineTo(h.x,h.y)),o=!!t.pathSegment(i,a,{move:o}),o?i.closePath():i.lineTo(e,u.y)}i.lineTo(e,t.first().y),i.closePath(),i.clip()}function Qa(i,t){const{line:e,target:n,property:s,color:r,scale:o,clip:a}=t,l=JS(e,n,s);for(const{source:c,target:h,start:u,end:d}of l){const{style:{backgroundColor:f=r}={}}=c,g=n!==!0;i.save(),i.fillStyle=f,gE(i,o,a,g&&Cl(s,u,d)),i.beginPath();const _=!!e.pathSegment(i,c);let p;if(g){_?i.closePath():Gu(i,n,d,s);const m=!!n.pathSegment(i,h,{move:_,reverse:!0});p=_&&m,p||Gu(i,n,u,s)}i.closePath(),i.fill(p?"evenodd":"nonzero"),i.restore()}}function gE(i,t,e,n){const s=t.chart.chartArea,{property:r,start:o,end:a}=n||{};if(r==="x"||r==="y"){let l,c,h,u;r==="x"?(l=o,c=s.top,h=a,u=s.bottom):(l=s.left,c=o,h=s.right,u=a),i.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),c=Math.max(c,e.top),u=Math.min(u,e.bottom)),i.rect(l,c,h-l,u-c),i.clip()}}function Gu(i,t,e,n){const s=t.interpolate(e,n);s&&i.lineTo(s.x,s.y)}var _E={id:"filler",afterDatasetsUpdate(i,t,e){const n=(i.data.datasets||[]).length,s=[];let r,o,a,l;for(o=0;o<n;++o)r=i.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof ai&&(l={visible:i.isDatasetVisible(o),index:o,fill:eE(a,o,n),chart:i,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,s.push(l);for(o=0;o<n;++o)l=s[o],!(!l||l.fill===!1)&&(l.fill=tE(s,o,e.propagate))},beforeDraw(i,t,e){const n=e.drawTime==="beforeDraw",s=i.getSortedVisibleDatasetMetas(),r=i.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),n&&a.fill&&Ja(i.ctx,a,r))}},beforeDatasetsDraw(i,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const n=i.getSortedVisibleDatasetMetas();for(let s=n.length-1;s>=0;--s){const r=n[s].$filler;Bu(r)&&Ja(i.ctx,r,i.chartArea)}},beforeDatasetDraw(i,t,e){const n=t.meta.$filler;!Bu(n)||e.drawTime!=="beforeDatasetDraw"||Ja(i.ctx,n,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Wu=(i,t)=>{let{boxHeight:e=t,boxWidth:n=t}=i;return i.usePointStyle&&(e=Math.min(e,t),n=i.pointStyleWidth||Math.min(n,t)),{boxWidth:n,boxHeight:e,itemHeight:Math.max(t,e)}},vE=(i,t)=>i!==null&&t!==null&&i.datasetIndex===t.datasetIndex&&i.index===t.index;class Xu extends mi{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){this.maxWidth=t,this.maxHeight=e,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=re(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(n=>t.filter(n,this.chart.data))),t.sort&&(e=e.sort((n,s)=>t.sort(n,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const n=t.labels,s=Xe(n.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Wu(n,r);let c,h;e.font=s.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,n,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=s+a;let u=t;r.textAlign="left",r.textBaseline="middle";let d=-1,f=-h;return this.legendItems.forEach((g,_)=>{const p=n+e/2+r.measureText(g.text).width;(_===0||c[c.length-1]+p+2*a>o)&&(u+=h,c[c.length-(_>0?0:1)]=0,f+=h,d++),l[_]={left:0,top:f,row:d,width:p,height:s},c[c.length-1]+=p+a}),u}_fitCols(t,e,n,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=o-t;let u=a,d=0,f=0,g=0,_=0;return this.legendItems.forEach((p,m)=>{const{itemWidth:M,itemHeight:x}=xE(n,e,r,p,s);m>0&&f+x+2*a>h&&(u+=d+a,c.push({width:d,height:f}),g+=d+a,_++,d=f=0),l[m]={left:g,top:f,col:_,width:M,height:x},d=Math.max(d,M),f+=x+a}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:n,labels:{padding:s},rtl:r}}=this,o=Ms(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Ze(n,this.left+s,this.right-this.lineWidths[a]);for(const c of e)a!==c.row&&(a=c.row,l=Ze(n,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+t+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=Ze(n,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const c of e)c.col!==a&&(a=c.col,l=Ze(n,this.top+t+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;jo(t,this),this._draw(),$o(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:n,ctx:s}=this,{align:r,labels:o}=t,a=pe.color,l=Ms(t.rtl,this.left,this.width),c=Xe(o.font),{padding:h}=o,u=c.size,d=u/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:g,boxHeight:_,itemHeight:p}=Wu(o,u),m=function(A,w,R){if(isNaN(g)||g<=0||isNaN(_)||_<0)return;s.save();const S=Yt(R.lineWidth,1);if(s.fillStyle=Yt(R.fillStyle,a),s.lineCap=Yt(R.lineCap,"butt"),s.lineDashOffset=Yt(R.lineDashOffset,0),s.lineJoin=Yt(R.lineJoin,"miter"),s.lineWidth=S,s.strokeStyle=Yt(R.strokeStyle,a),s.setLineDash(Yt(R.lineDash,[])),o.usePointStyle){const y={radius:_*Math.SQRT2/2,pointStyle:R.pointStyle,rotation:R.rotation,borderWidth:S},P=l.xPlus(A,g/2),O=w+d;mf(s,y,P,O,o.pointStyleWidth&&g)}else{const y=w+Math.max((u-_)/2,0),P=l.leftForLtr(A,g),O=ur(R.borderRadius);s.beginPath(),Object.values(O).some(U=>U!==0)?El(s,{x:P,y,w:g,h:_,radius:O}):s.rect(P,y,g,_),s.fill(),S!==0&&s.stroke()}s.restore()},M=function(A,w,R){No(s,R.text,A,w+p/2,c,{strikethrough:R.hidden,textAlign:l.textAlign(R.textAlign)})},x=this.isHorizontal(),E=this._computeTitleHeight();x?f={x:Ze(r,this.left+h,this.right-n[0]),y:this.top+h+E,line:0}:f={x:this.left+h,y:Ze(r,this.top+E+h,this.bottom-e[0].height),line:0},bf(this.ctx,t.textDirection);const C=p+h;this.legendItems.forEach((A,w)=>{s.strokeStyle=A.fontColor,s.fillStyle=A.fontColor;const R=s.measureText(A.text).width,S=l.textAlign(A.textAlign||(A.textAlign=o.textAlign)),y=g+d+R;let P=f.x,O=f.y;l.setWidth(this.width),x?w>0&&P+y+h>this.right&&(O=f.y+=C,f.line++,P=f.x=Ze(r,this.left+h,this.right-n[f.line])):w>0&&O+C>this.bottom&&(P=f.x=P+e[f.line].width+h,f.line++,O=f.y=Ze(r,this.top+E+h,this.bottom-e[f.line].height));const U=l.x(P);if(m(U,O,A),P=gM(S,P+g+d,x?P+y:this.right,t.rtl),M(l.x(P),O,A),x)f.x+=y+h;else if(typeof A.text!="string"){const Y=c.lineHeight;f.y+=Gf(A,Y)+h}else f.y+=C}),Sf(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,n=Xe(e.font),s=_n(e.padding);if(!e.display)return;const r=Ms(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=n.size/2,c=s.top+l;let h,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+c,u=Ze(t.align,u,this.right-d);else{const g=this.columnSizes.reduce((_,p)=>Math.max(_,p.height),0);h=c+Ze(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const f=Ze(a,u,u+d);o.textAlign=r.textAlign(df(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=n.string,No(o,e.text,f,h,n)}_computeTitleHeight(){const t=this.options.title,e=Xe(t.font),n=_n(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){let n,s,r;if(ms(t,this.left,this.right)&&ms(e,this.top,this.bottom)){for(r=this.legendHitBoxes,n=0;n<r.length;++n)if(s=r[n],ms(t,s.left,s.left+s.width)&&ms(e,s.top,s.top+s.height))return this.legendItems[n]}return null}handleEvent(t){const e=this.options;if(!bE(t.type,e))return;const n=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=vE(s,n);s&&!r&&re(e.onLeave,[t,s,this],this),this._hoveredItem=n,n&&!r&&re(e.onHover,[t,n,this],this)}else n&&re(e.onClick,[t,n,this],this)}}function xE(i,t,e,n,s){const r=yE(n,i,t,e),o=ME(s,n,t.lineHeight);return{itemWidth:r,itemHeight:o}}function yE(i,t,e,n){let s=i.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+n.measureText(s).width}function ME(i,t,e){let n=i;return typeof t.text!="string"&&(n=Gf(t,e)),n}function Gf(i,t){const e=i.text?i.text.length:0;return t*e}function bE(i,t){return!!((i==="mousemove"||i==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(i==="click"||i==="mouseup"))}var SE={id:"legend",_element:Xu,start(i,t,e){const n=i.legend=new Xu({ctx:i.ctx,options:e,chart:i});oi.configure(i,n,e),oi.addBox(i,n)},stop(i){oi.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,t,e){const n=i.legend;oi.configure(i,n,e),n.options=e},afterUpdate(i){const t=i.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(i,t){t.replay||i.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,t,e){const n=t.datasetIndex,s=e.chart;s.isDatasetVisible(n)?(s.hide(n),t.hidden=!0):(s.show(n),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const t=i.data.datasets,{labels:{usePointStyle:e,pointStyle:n,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),h=_n(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};const er={average(i){if(!i.length)return!1;let t,e,n=new Set,s=0,r=0;for(t=0,e=i.length;t<e;++t){const a=i[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();n.add(l.x),s+=l.y,++r}}return r===0||n.size===0?!1:{x:[...n].reduce((a,l)=>a+l)/n.size,y:s/r}},nearest(i,t){if(!i.length)return!1;let e=t.x,n=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=i.length;r<o;++r){const l=i[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=Ml(t,c);h<s&&(s=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,n=l.y}return{x:e,y:n}}};function xn(i,t){return t&&(Ae(t)?Array.prototype.push.apply(i,t):i.push(t)),i}function zn(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function EE(i,t){const{element:e,datasetIndex:n,index:s}=t,r=i.getDatasetMeta(n).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:i,label:o,parsed:r.getParsed(s),raw:i.data.datasets[n].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:n,element:e}}function qu(i,t){const e=i.chart.ctx,{body:n,footer:s,title:r}=i,{boxWidth:o,boxHeight:a}=t,l=Xe(t.bodyFont),c=Xe(t.titleFont),h=Xe(t.footerFont),u=r.length,d=s.length,f=n.length,g=_n(t.padding);let _=g.height,p=0,m=n.reduce((E,C)=>E+C.before.length+C.lines.length+C.after.length,0);if(m+=i.beforeBody.length+i.afterBody.length,u&&(_+=u*c.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),m){const E=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;_+=f*E+(m-f)*l.lineHeight+(m-1)*t.bodySpacing}d&&(_+=t.footerMarginTop+d*h.lineHeight+(d-1)*t.footerSpacing);let M=0;const x=function(E){p=Math.max(p,e.measureText(E).width+M)};return e.save(),e.font=c.string,Qt(i.title,x),e.font=l.string,Qt(i.beforeBody.concat(i.afterBody),x),M=t.displayColors?o+2+t.boxPadding:0,Qt(n,E=>{Qt(E.before,x),Qt(E.lines,x),Qt(E.after,x)}),M=0,e.font=h.string,Qt(i.footer,x),e.restore(),p+=g.width,{width:p,height:_}}function TE(i,t){const{y:e,height:n}=t;return e<n/2?"top":e>i.height-n/2?"bottom":"center"}function wE(i,t,e,n){const{x:s,width:r}=n,o=e.caretSize+e.caretPadding;if(i==="left"&&s+r+o>t.width||i==="right"&&s-r-o<0)return!0}function AE(i,t,e,n){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:l}}=i;let c="center";return n==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),wE(c,i,t,e)&&(c="center"),c}function Yu(i,t,e){const n=e.yAlign||t.yAlign||TE(i,e);return{xAlign:e.xAlign||t.xAlign||AE(i,t,e,n),yAlign:n}}function CE(i,t){let{x:e,width:n}=i;return t==="right"?e-=n:t==="center"&&(e-=n/2),e}function RE(i,t,e){let{y:n,height:s}=i;return t==="top"?n+=e:t==="bottom"?n-=s+e:n-=s/2,n}function ju(i,t,e,n){const{caretSize:s,caretPadding:r,cornerRadius:o}=i,{xAlign:a,yAlign:l}=e,c=s+r,{topLeft:h,topRight:u,bottomLeft:d,bottomRight:f}=ur(o);let g=CE(t,a);const _=RE(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(h,d)+s:a==="right"&&(g+=Math.max(u,f)+s),{x:nn(g,0,n.width-t.width),y:nn(_,0,n.height-t.height)}}function ho(i,t,e){const n=_n(e.padding);return t==="center"?i.x+i.width/2:t==="right"?i.x+i.width-n.right:i.x+n.left}function $u(i){return xn([],zn(i))}function PE(i,t,e){return Wi(i,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Ku(i,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?i.override(e):i}const Wf={beforeTitle:Un,title(i){if(i.length>0){const t=i[0],e=t.chart.data.labels,n=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(n>0&&t.dataIndex<n)return e[t.dataIndex]}return""},afterTitle:Un,beforeBody:Un,beforeLabel:Un,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let t=i.dataset.label||"";t&&(t+=": ");const e=i.formattedValue;return se(e)||(t+=e),t},labelColor(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Un,afterBody:Un,beforeFooter:Un,footer:Un,afterFooter:Un};function He(i,t,e,n){const s=i[t].call(e,n);return typeof s>"u"?Wf[t].call(e,n):s}class Rl extends mi{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,n=this.options.setContext(this.getContext()),s=n.enabled&&e.options.animation&&n.animations,r=new Cf(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=PE(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:n}=e,s=He(n,"beforeTitle",this,t),r=He(n,"title",this,t),o=He(n,"afterTitle",this,t);let a=[];return a=xn(a,zn(s)),a=xn(a,zn(r)),a=xn(a,zn(o)),a}getBeforeBody(t,e){return $u(He(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:n}=e,s=[];return Qt(t,r=>{const o={before:[],lines:[],after:[]},a=Ku(n,r);xn(o.before,zn(He(a,"beforeLabel",this,r))),xn(o.lines,He(a,"label",this,r)),xn(o.after,zn(He(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return $u(He(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:n}=e,s=He(n,"beforeFooter",this,t),r=He(n,"footer",this,t),o=He(n,"afterFooter",this,t);let a=[];return a=xn(a,zn(s)),a=xn(a,zn(r)),a=xn(a,zn(o)),a}_createItems(t){const e=this._active,n=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=e.length;l<c;++l)a.push(EE(this.chart,e[l]));return t.filter&&(a=a.filter((h,u,d)=>t.filter(h,u,d,n))),t.itemSort&&(a=a.sort((h,u)=>t.itemSort(h,u,n))),Qt(a,h=>{const u=Ku(t.callbacks,h);s.push(He(u,"labelColor",this,h)),r.push(He(u,"labelPointStyle",this,h)),o.push(He(u,"labelTextColor",this,h))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const n=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=er[n.position].call(this,s,this._eventPosition);o=this._createItems(n),this.title=this.getTitle(o,n),this.beforeBody=this.getBeforeBody(o,n),this.body=this.getBody(o,n),this.afterBody=this.getAfterBody(o,n),this.footer=this.getFooter(o,n);const l=this._size=qu(this,n),c=Object.assign({},a,l),h=Yu(this.chart,n,c),u=ju(n,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,n,s){const r=this.getCaretPosition(t,n,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,n){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=n,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:u}=ur(a),{x:d,y:f}=t,{width:g,height:_}=e;let p,m,M,x,E,C;return r==="center"?(E=f+_/2,s==="left"?(p=d,m=p-o,x=E+o,C=E-o):(p=d+g,m=p+o,x=E-o,C=E+o),M=p):(s==="left"?m=d+Math.max(l,h)+o:s==="right"?m=d+g-Math.max(c,u)-o:m=this.caretX,r==="top"?(x=f,E=x-o,p=m-o,M=m+o):(x=f+_,E=x+o,p=m+o,M=m-o),C=x),{x1:p,x2:m,x3:M,y1:x,y2:E,y3:C}}drawTitle(t,e,n){const s=this.title,r=s.length;let o,a,l;if(r){const c=Ms(n.rtl,this.x,this.width);for(t.x=ho(this,n.titleAlign,n),e.textAlign=c.textAlign(n.titleAlign),e.textBaseline="middle",o=Xe(n.titleFont),a=n.titleSpacing,e.fillStyle=n.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(s[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=n.titleMarginBottom-a)}}_drawColorBox(t,e,n,s,r){const o=this.labelColors[n],a=this.labelPointStyles[n],{boxHeight:l,boxWidth:c}=r,h=Xe(r.bodyFont),u=ho(this,"left",r),d=s.x(u),f=l<h.lineHeight?(h.lineHeight-l)/2:0,g=e.y+f;if(r.usePointStyle){const _={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},p=s.leftForLtr(d,c)+c/2,m=g+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Sl(t,_,p,m),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Sl(t,_,p,m)}else{t.lineWidth=jt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=s.leftForLtr(d,c),p=s.leftForLtr(s.xPlus(d,1),c-2),m=ur(o.borderRadius);Object.values(m).some(M=>M!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,El(t,{x:_,y:g,w:c,h:l,radius:m}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),El(t,{x:p,y:g+1,w:c-2,h:l-2,radius:m}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(_,g,c,l),t.strokeRect(_,g,c,l),t.fillStyle=o.backgroundColor,t.fillRect(p,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,e,n){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=n,u=Xe(n.bodyFont);let d=u.lineHeight,f=0;const g=Ms(n.rtl,this.x,this.width),_=function(R){e.fillText(R,g.x(t.x+f),t.y+d/2),t.y+=d+r},p=g.textAlign(o);let m,M,x,E,C,A,w;for(e.textAlign=o,e.textBaseline="middle",e.font=u.string,t.x=ho(this,p,n),e.fillStyle=n.bodyColor,Qt(this.beforeBody,_),f=a&&p!=="right"?o==="center"?c/2+h:c+2+h:0,E=0,A=s.length;E<A;++E){for(m=s[E],M=this.labelTextColors[E],e.fillStyle=M,Qt(m.before,_),x=m.lines,a&&x.length&&(this._drawColorBox(e,t,E,g,n),d=Math.max(u.lineHeight,l)),C=0,w=x.length;C<w;++C)_(x[C]),d=u.lineHeight;Qt(m.after,_)}f=0,d=u.lineHeight,Qt(this.afterBody,_),t.y-=r}drawFooter(t,e,n){const s=this.footer,r=s.length;let o,a;if(r){const l=Ms(n.rtl,this.x,this.width);for(t.x=ho(this,n.footerAlign,n),t.y+=n.footerMarginTop,e.textAlign=l.textAlign(n.footerAlign),e.textBaseline="middle",o=Xe(n.footerFont),e.fillStyle=n.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+n.footerSpacing}}drawBackground(t,e,n,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:c,height:h}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:g}=ur(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+u,l),o==="top"&&this.drawCaret(t,e,n,s),e.lineTo(a+c-d,l),e.quadraticCurveTo(a+c,l,a+c,l+d),o==="center"&&r==="right"&&this.drawCaret(t,e,n,s),e.lineTo(a+c,l+h-g),e.quadraticCurveTo(a+c,l+h,a+c-g,l+h),o==="bottom"&&this.drawCaret(t,e,n,s),e.lineTo(a+f,l+h),e.quadraticCurveTo(a,l+h,a,l+h-f),o==="center"&&r==="left"&&this.drawCaret(t,e,n,s),e.lineTo(a,l+u),e.quadraticCurveTo(a,l,a+u,l),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,n=this.$animations,s=n&&n.x,r=n&&n.y;if(s||r){const o=er[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=qu(this,t),l=Object.assign({},o,this._size),c=Yu(e,t,l),h=ju(t,l,c,e);(s._to!==h.x||r._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const o=_n(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=n,this.drawBackground(r,t,s,e),bf(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),Sf(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const n=this._active,s=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!Po(n,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,n=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,n),a=this._positionChanged(o,t),l=e||!Po(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,n,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,n);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:n,caretY:s,options:r}=this,o=er[r.position].call(this,t,e);return o!==!1&&(n!==o.x||s!==o.y)}}k(Rl,"positioners",er);var LE={id:"tooltip",_element:Rl,positioners:er,afterInit(i,t,e){e&&(i.tooltip=new Rl({chart:i,options:e}))},beforeUpdate(i,t,e){i.tooltip&&i.tooltip.initialize(e)},reset(i,t,e){i.tooltip&&i.tooltip.initialize(e)},afterDraw(i){const t=i.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(i.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",e)}},afterEvent(i,t){if(i.tooltip){const e=t.replay;i.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,t)=>t.bodyFont.size,boxWidth:(i,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Wf},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const DE=(i,t,e,n)=>(typeof t=="string"?(e=i.push(t)-1,n.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function IE(i,t,e,n){const s=i.indexOf(t);if(s===-1)return DE(i,t,e,n);const r=i.lastIndexOf(t);return s!==r?e:s}const OE=(i,t)=>i===null?null:nn(Math.round(i),0,t);function Zu(i){const t=this.getLabels();return i>=0&&i<t.length?t[i]:i}class Pl extends ks{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const n=this.getLabels();for(const{index:s,label:r}of e)n[s]===r&&n.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(se(t))return null;const n=this.getLabels();return e=isFinite(e)&&n[e]===t?e:IE(n,t,Yt(e,t),this._addedLabels),OE(e,n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:n,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(n=0),e||(s=this.getLabels().length-1)),this.min=n,this.max=s}buildTicks(){const t=this.min,e=this.max,n=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return Zu.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}k(Pl,"id","category"),k(Pl,"defaults",{ticks:{callback:Zu}});function NE(i,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:h,maxDigits:u,includeBounds:d}=i,f=r||1,g=h-1,{min:_,max:p}=t,m=!se(o),M=!se(a),x=!se(c),E=(p-_)/(u+1);let C=Zh((p-_)/g/f)*f,A,w,R,S;if(C<1e-14&&!m&&!M)return[{value:_},{value:p}];S=Math.ceil(p/C)-Math.floor(_/C),S>g&&(C=Zh(S*C/g/f)*f),se(l)||(A=Math.pow(10,l),C=Math.ceil(C*A)/A),s==="ticks"?(w=Math.floor(_/C)*C,R=Math.ceil(p/C)*C):(w=_,R=p),m&&M&&r&&rM((a-o)/r,C/1e3)?(S=Math.round(Math.min((a-o)/C,h)),C=(a-o)/S,w=o,R=a):x?(w=m?o:w,R=M?a:R,S=c-1,C=(R-w)/S):(S=(R-w)/C,lr(S,Math.round(S),C/1e3)?S=Math.round(S):S=Math.ceil(S));const y=Math.max(Jh(C),Jh(w));A=Math.pow(10,se(l)?y:l),w=Math.round(w*A)/A,R=Math.round(R*A)/A;let P=0;for(m&&(d&&w!==o?(e.push({value:o}),w<o&&P++,lr(Math.round((w+P*C)*A)/A,o,Ju(o,E,i))&&P++):w<o&&P++);P<S;++P){const O=Math.round((w+P*C)*A)/A;if(M&&O>a)break;e.push({value:O})}return M&&d&&R!==a?e.length&&lr(e[e.length-1].value,a,Ju(a,E,i))?e[e.length-1].value=a:e.push({value:a}):(!M||R===a)&&e.push({value:R}),e}function Ju(i,t,{horizontal:e,minRotation:n}){const s=ki(n),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+i).length;return Math.min(t/r,o)}class UE extends ks{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return se(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=e?s:l,a=l=>r=n?r:l;if(t){const l=Ps(s),c=Ps(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(s-l)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:n}=t,s;return n?(s=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const s={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=NE(s,r);return t.bounds==="ticks"&&oM(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const s=(n-e)/Math.max(t.length-1,1)/2;e-=s,n+=s}this._startValue=e,this._endValue=n,this._valueRange=n-e}getLabelForValue(t){return ff(t,this.chart.options.locale,this.options.ticks.format)}}class Ll extends UE{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Oe(t)?t:0,this.max=Oe(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,n=ki(this.options.ticks.minRotation),s=(t?Math.sin(n):Math.cos(n))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}k(Ll,"id","linear"),k(Ll,"defaults",{ticks:{callback:pf.formatters.numeric}});const Qo={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ge=Object.keys(Qo);function Qu(i,t){return i-t}function td(i,t){if(se(t))return null;const e=i._adapter,{parser:n,round:s,isoWeekday:r}=i._parseOpts;let o=t;return typeof n=="function"&&(o=n(o)),Oe(o)||(o=typeof n=="string"?e.parse(o,n):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(gr(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function ed(i,t,e,n){const s=Ge.length;for(let r=Ge.indexOf(i);r<s-1;++r){const o=Qo[Ge[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=n)return Ge[r]}return Ge[s-1]}function FE(i,t,e,n,s){for(let r=Ge.length-1;r>=Ge.indexOf(e);r--){const o=Ge[r];if(Qo[o].common&&i._adapter.diff(s,n,o)>=t-1)return o}return Ge[e?Ge.indexOf(e):0]}function kE(i){for(let t=Ge.indexOf(i)+1,e=Ge.length;t<e;++t)if(Qo[Ge[t]].common)return Ge[t]}function nd(i,t,e){if(!e)i[t]=!0;else if(e.length){const{lo:n,hi:s}=Kl(e,t),r=e[n]>=t?e[n]:e[s];i[r]=!0}}function zE(i,t,e,n){const s=i._adapter,r=+s.startOf(t[0].value,n),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,n))l=e[a],l>=0&&(t[l].major=!0);return t}function id(i,t,e){const n=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,n.push({value:a,major:!1});return r===0||!e?n:zE(i,n,s,e)}class ko extends ks{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const n=t.time||(t.time={}),s=this._adapter=new Ob._date(t.adapters.date);s.init(e),ar(n.displayFormats,s.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:td(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,n=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Oe(s)&&!isNaN(s)?s:+e.startOf(Date.now(),n),r=Oe(r)&&!isNaN(r)?r:+e.endOf(Date.now(),n)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],n=t[t.length-1]),{min:e,max:n}}buildTicks(){const t=this.options,e=t.time,n=t.ticks,s=n.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=dM(s,r,o);return this._unit=e.unit||(n.autoSkip?ed(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):FE(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:kE(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),id(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,n=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?n=r:n=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=nn(e,0,o),n=nn(n,0,o),this._offsets={start:e,end:n,factor:1/(e+1+n)}}_generate(){const t=this._adapter,e=this.min,n=this.max,s=this.options,r=s.time,o=r.unit||ed(r.minUnit,e,n,this._getLabelCapacity(e)),a=Yt(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=gr(l)||l===!0,h={};let u=e,d,f;if(c&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,c?"day":o),t.diff(n,e,o)>1e5*a)throw new Error(e+" and "+n+" are too far apart with stepSize of "+a+" "+o);const g=s.ticks.source==="data"&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+t.add(d,a,o),f++)nd(h,d,g);return(d===n||s.bounds==="ticks"||f===1)&&nd(h,d,g),Object.keys(h).sort(Qu).map(_=>+_)}getLabelForValue(t){const e=this._adapter,n=this.options.time;return n.tooltipFormat?e.format(t,n.tooltipFormat):e.format(t,n.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,n,s){const r=this.options,o=r.ticks.callback;if(o)return re(o,[t,e,n],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],u=c&&a[c],d=n[e],f=c&&u&&d&&d.major;return this._adapter.format(t,s||(f?u:h))}generateTickLabels(t){let e,n,s;for(e=0,n=t.length;e<n;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+n)*e.factor)}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,n=this.ctx.measureText(t).width,s=ki(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:n*r+a*o,h:n*o+a*r}}_getLabelCapacity(t){const e=this.options.time,n=e.displayFormats,s=n[e.unit]||n.millisecond,r=this._tickFormatFunction(t,0,id(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,n;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,n=s.length;e<n;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,n;if(t.length)return t;const s=this.getLabels();for(e=0,n=s.length;e<n;++e)t.push(td(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return pM(t.sort(Qu))}}k(ko,"id","time"),k(ko,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function uo(i,t,e){let n=0,s=i.length-1,r,o,a,l;e?(t>=i[n].pos&&t<=i[s].pos&&({lo:n,hi:s}=zi(i,"pos",t)),{pos:r,time:a}=i[n],{pos:o,time:l}=i[s]):(t>=i[n].time&&t<=i[s].time&&({lo:n,hi:s}=zi(i,"time",t)),{time:r,pos:a}=i[n],{time:o,pos:l}=i[s]);const c=o-r;return c?a+(l-a)*(t-r)/c:a}class sd extends ko{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=uo(e,this.min),this._tableRange=uo(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:n}=this,s=[],r=[];let o,a,l,c,h;for(o=0,a=t.length;o<a;++o)c=t[o],c>=e&&c<=n&&s.push(c);if(s.length<2)return[{time:e,pos:0},{time:n,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],l=s[o-1],c=s[o],Math.round((h+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let n=super.getDataTimestamps();return(!n.includes(t)||!n.length)&&n.splice(0,0,t),(!n.includes(e)||n.length===1)&&n.push(e),n.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),n=this.getLabelTimestamps();return e.length&&n.length?t=this.normalize(e.concat(n)):t=e.length?e:n,t=this._cache.all=t,t}getDecimalForValue(t){return(uo(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return uo(this._table,n*this._tableRange+this._minPos,!0)}}k(sd,"id","timeseries"),k(sd,"defaults",ko.defaults);En.register(_o,ai,yo,Ll,Pl,_E,SE,LE);class BE{constructor(t,e){k(this,"chartP");k(this,"chartQ");k(this,"root");k(this,"sentIdx",0);this.sim=e,this.root=document.createElement("div"),this.root.id="telemetry",this.root.className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2 pointer-events-auto",t.appendChild(this.root),this.root.innerHTML=`
      <div class="hud-panel p-2 w-[340px] md:w-[430px]">
        <div class="flex justify-between items-center mb-0.5">
          <span class="hud-title">P(t) · РЕСИВЕР / КАМЕРА, бар</span>
          <span class="text-[8px] text-slate-500">ОКНО 8 c</span>
        </div>
        <canvas id="chart-p" height="96"></canvas>
      </div>
      <div class="hud-panel p-2 w-[340px] md:w-[430px] hidden sm:block">
        <div class="flex justify-between items-center mb-0.5">
          <span class="hud-title">Q(t) · РАСХОД / ФРОНТ СТРУИ</span>
          <span class="text-[8px] text-slate-500">ОКНО 8 c</span>
        </div>
        <canvas id="chart-q" height="96"></canvas>
      </div>
    `;const n={responsive:!0,animation:!1,maintainAspectRatio:!1,interaction:{intersect:!1,mode:"nearest"},elements:{point:{radius:0},line:{borderWidth:1.6,tension:.12}},scales:{x:{type:"linear",grid:{color:"rgba(56,189,248,0.06)"},ticks:{color:"#475569",font:{size:8,family:"JetBrains Mono"},maxTicksLimit:9,callback:s=>`${Number(s).toFixed(1)}s`}},y:{min:0,grid:{color:"rgba(56,189,248,0.06)"},ticks:{color:"#475569",font:{size:8,family:"JetBrains Mono"},maxTicksLimit:5}}},plugins:{legend:{display:!0,position:"bottom",labels:{boxWidth:8,boxHeight:2,color:"#64748b",font:{size:8,family:"JetBrains Mono"}}},tooltip:{enabled:!1}}};this.chartP=new En(this.root.querySelector("#chart-p"),{type:"line",data:{datasets:[{label:"P ресивера",data:[],borderColor:"#38bdf8",backgroundColor:"rgba(56,189,248,0.08)",fill:!0},{label:"P камеры",data:[],borderColor:"#fbbf24",backgroundColor:"rgba(251,191,36,0.06)",fill:!0}]},options:structuredClone(n)}),this.chartQ=new En(this.root.querySelector("#chart-q"),{type:"line",data:{datasets:[{label:"Q, л/с",data:[],borderColor:"#f472b6",backgroundColor:"rgba(244,114,182,0.08)",fill:!0,yAxisID:"y"},{label:"V, м/с",data:[],borderColor:"#34d399",backgroundColor:"transparent",fill:!1,yAxisID:"y1"}]},options:Object.assign(structuredClone(n),{scales:Object.assign(structuredClone(n.scales),{y:{...n.scales.y,title:{display:!1}},y1:{position:"right",min:0,grid:{drawOnChartArea:!1},ticks:{color:"#475569",font:{size:8,family:"JetBrains Mono"},maxTicksLimit:5}}})})})}update(){const t=this.sim.historyLength,n=this.sim.time-8,s=t>0?this.sim.historyAt(0):void 0;if(!s||s.t>this.sim.time-this.sim.HISTORY_SIZE/60+1e-9){this.sentIdx=0,this.rebuildWindow(n);return}const r=Math.min(this.sentIdx,t);let o=0;for(;o<r;){const a=this.sim.historyAt(o);if(!a||a.t>=n)break;o++}if(o>0){for(const a of this.chartP.data.datasets)a.data.splice(0,o);for(const a of this.chartQ.data.datasets)a.data.splice(0,o);this.sentIdx-=o}for(let a=this.sentIdx;a<t;a++){const l=this.sim.historyAt(a);!l||l.t<n||this.pushSample(l)}this.sentIdx=t,this.applyXRange(n),this.chartP.update("none"),this.chartQ.update("none")}rebuildWindow(t){const e=this.chartP.data.datasets,n=this.chartQ.data.datasets;for(const r of[e[0],e[1],n[0],n[1]])r.data.length=0;const s=this.sim.historyLength;for(let r=0;r<s;r++){const o=this.sim.historyAt(r);!o||o.t<t||this.pushSample(o)}this.sentIdx=s,this.applyXRange(t),this.chartP.update("none"),this.chartQ.update("none")}pushSample(t){const e={x:t.t,y:t.pAccumBar},n={x:t.t,y:t.pChamberBar},s={x:t.t,y:t.qLps},r={x:t.t,y:t.vMs};this.chartP.data.datasets[0].data.push(e),this.chartP.data.datasets[1].data.push(n),this.chartQ.data.datasets[0].data.push(s),this.chartQ.data.datasets[1].data.push(r)}applyXRange(t){this.chartP.options.scales.x.min=t,this.chartP.options.scales.x.max=this.sim.time,this.chartQ.options.scales.x.min=t,this.chartQ.options.scales.x.max=this.sim.time}setVisible(t){this.root.style.display=t?"":"none"}dispose(){this.chartP.destroy(),this.chartQ.destroy(),this.root.remove()}}const HE=[{key:"chargePressureBar",label:"Заряд ресивера",min:2,max:12,step:.1,unit:"бар"},{key:"valvePulseMs",label:"Импульс клапана",min:60,max:700,step:10,unit:"мс"},{key:"elevationDeg",label:"Возвышение",min:45,max:90,step:1,unit:"°"},{key:"azimuthDeg",label:"Азимут Oarsmen",min:-180,max:180,step:1,unit:"°"},{key:"slewRateDps",label:"Slew-rate серво",min:10,max:300,step:5,unit:"°/с"},{key:"pumpFlowM3h",label:"Подпиточный насос",min:0,max:800,step:10,unit:"м³/ч"},{key:"particleDensity",label:"Плотность частиц",min:.2,max:2.5,step:.1,unit:"×"},{key:"bloomStrength",label:"Bloom",min:0,max:2,step:.05,unit:""},{key:"masterVolume",label:"Громкость",min:0,max:1,step:.05,unit:""},{key:"showRateBpm",label:"Темп шоу",min:2,max:40,step:1,unit:"в/мин"},{key:"timeScale",label:"Time scale",min:.1,max:2,step:.05,unit:"×",fmt:i=>i.toFixed(2)}],VE={key:"cutawayOffset",label:"Смещение реза X",min:-1,max:1,step:.01,unit:"",fmt:i=>i.toFixed(2)};class GE{constructor(t,e,n,s){k(this,"root");k(this,"fireBtn");k(this,"toggles",new Map);k(this,"sliderEls",new Map);k(this,"collapsed",!1);this.sim=e,this.sm=n,this.audio=s,this.root=document.createElement("div"),this.root.id="control-panel",this.root.className="absolute top-1/2 -translate-y-1/2 left-3 z-20 w-[228px] pointer-events-auto hidden lg:block",t.appendChild(this.root),this.build(),this.pushAll()}build(){const t=this.sim.config;this.root.innerHTML=`
      <div class="hud-panel p-3 space-y-2.5 max-h-[86vh] overflow-y-auto scroll-slim">
        <div class="flex items-center justify-between">
          <span class="hud-title">УПРАВЛЕНИЕ КОМПЛЕКСОМ</span>
          <button id="cp-collapse" class="text-sky-400 text-xs px-1 hover:text-sky-200">▾</button>
        </div>

        <div id="cp-body" class="space-y-2.5">
          <button id="btn-fire" class="hud-btn-fire w-full">⬤ ОГОНЬ&nbsp;<span class="opacity-60 normal-case tracking-normal">[SPACE]</span></button>
          <div class="grid grid-cols-2 gap-1.5">
            <button id="btn-arm" class="hud-btn">ARM</button>
            <button id="btn-vent" class="hud-btn !border-red-500/40 !bg-red-500/10 !text-red-300">VENT</button>
          </div>

          <div class="pt-1 space-y-2" id="cp-sliders"></div>

          <div class="border-t border-sky-500/15 pt-2 space-y-1.5">
            ${fo("tCut","CAD-разрез",t.cutawayEnabled)}
            ${fo("tBloom","Bloom",t.bloomEnabled)}
            ${fo("tAudio","Звук",t.audioEnabled)}
            ${fo("tShow","Авто-шоу",t.autoSequence)}
            <div id="cp-cut-slider" class="hidden pt-1"></div>
          </div>

          <div class="border-t border-sky-500/15 pt-2 grid grid-cols-3 gap-1.5">
            <button id="cam-gun" class="hud-btn !text-[9px] !px-1">ПУШКА</button>
            <button id="cam-jet" class="hud-btn !text-[9px] !px-1">СТРУЯ</button>
            <button id="cam-wide" class="hud-btn !text-[9px] !px-1">ОБЩИЙ</button>
          </div>

          <div class="text-[8px] leading-relaxed text-slate-500 pt-1">
            <kbd class="key">Space</kbd> огонь · <kbd class="key">C</kbd> разрез ·
            <kbd class="key">B</kbd> bloom · <kbd class="key">A</kbd> авто-шоу ·
            <kbd class="key">←</kbd><kbd class="key">→</kbd> азимут · <kbd class="key">↑</kbd><kbd class="key">↓</kbd> возвышение
          </div>
        </div>
      </div>
    `;const e=this.root.querySelector("#cp-sliders");for(const s of HE)e.appendChild(this.makeSlider(s));this.root.querySelector("#cp-cut-slider").appendChild(this.makeSlider(VE)),this.fireBtn=this.root.querySelector("#btn-fire"),this.fireBtn.addEventListener("click",()=>this.fire()),this.root.querySelector("#btn-arm").addEventListener("click",()=>{this.sim.accumulator.forceChargeToTarget()}),this.root.querySelector("#btn-vent").addEventListener("click",()=>{this.sim.emergencyVent()}),this.root.querySelector("#cam-gun").addEventListener("click",()=>this.sm.focusGun()),this.root.querySelector("#cam-jet").addEventListener("click",()=>this.sm.focusJet(this.sim.readout.jetHeight||100)),this.root.querySelector("#cam-wide").addEventListener("click",()=>this.sm.wideShot());const n=this.root.querySelector("#cp-collapse");n.addEventListener("click",()=>{this.collapsed=!this.collapsed,this.root.querySelector("#cp-body").style.display=this.collapsed?"none":"",n.textContent=this.collapsed?"▸":"▾"});for(const s of["tCut","tBloom","tAudio","tShow"]){const r=this.root.querySelector(`#wrap-${s}`);this.toggles.set(s,r),r.addEventListener("click",()=>this.flipToggle(s))}}makeSlider(t){const e=document.createElement("div"),n=this.sim.config[t.key];e.innerHTML=`
      <div class="flex justify-between items-baseline">
        <span class="text-[9px] uppercase tracking-wider text-slate-400">${t.label}</span>
        <span class="text-[10px] text-sky-300 tabular-nums" data-val>${t.fmt?t.fmt(n):n.toFixed(t.step<.1?2:t.step<1?1:0)}${t.unit}</span>
      </div>
      <input type="range" class="hud-slider" min="${t.min}" max="${t.max}" step="${t.step}" value="${n}" />
    `;const s=e.querySelector("input"),r=e.querySelector("[data-val]"),o=()=>{const a=(Number(s.value)-t.min)/(t.max-t.min)*100;s.style.setProperty("--fill",`${a}%`),r.textContent=(t.fmt?t.fmt(Number(s.value)):Number(s.value).toFixed(t.step<.1?2:t.step<1?1:0))+t.unit};return o(),s.addEventListener("input",()=>{o(),this.sim.setConfig({[t.key]:Number(s.value)}),this.applySideEffects(t.key)}),this.sliderEls.set(t.key,s),e}applySideEffects(t){const e=this.sim.config;switch(t){case"bloomStrength":case"bloomEnabled":this.sm.setBloom(e.bloomEnabled,e.bloomStrength);break;case"cutawayEnabled":case"cutawayOffset":this.sm.setCutaway(e.cutawayEnabled,e.cutawayOffset);break;case"audioEnabled":this.audio.setEnabled(e.audioEnabled);break;case"masterVolume":this.audio.setVolume(e.masterVolume);break}}flipToggle(t){const e=this.sim.config;let n={};t==="tCut"&&(n={cutawayEnabled:!e.cutawayEnabled}),t==="tBloom"&&(n={bloomEnabled:!e.bloomEnabled}),t==="tAudio"&&(n={audioEnabled:!e.audioEnabled}),t==="tShow"&&(n={autoSequence:!e.autoSequence}),this.sim.setConfig(n),this.applySideEffects(Object.keys(n)[0]),this.syncToggles(),this.root.querySelector("#cp-cut-slider").classList.toggle("hidden",!e.cutawayEnabled)}syncToggles(){const t=this.sim.config,e={tCut:t.cutawayEnabled,tBloom:t.bloomEnabled,tAudio:t.audioEnabled,tShow:t.autoSequence};for(const[n,s]of Object.entries(e)){const r=this.toggles.get(n);if(!r)continue;r.querySelector(".hud-toggle").classList.toggle("on",s)}}refresh(){for(const[e,n]of this.sliderEls){const s=this.sim.config[e];Math.abs(Number(n.value)-s)>Number(n.step)/2&&(n.value=String(s),n.dispatchEvent(new Event("input")))}this.syncToggles(),this.root.querySelector("#cp-cut-slider").classList.toggle("hidden",!this.sim.config.cutawayEnabled)}setFireEnabled(t){this.fireBtn.disabled!==!t&&(this.fireBtn.disabled=!t)}pulseFire(){this.fireBtn.classList.remove("fire-pulse"),this.fireBtn.offsetWidth,this.fireBtn.classList.add("fire-pulse")}fire(){this.audio.ensureContext(),this.sim.triggerFire()&&this.pulseFire()}get config(){return this.sim.config}resetDefaults(){this.sim.setConfig({...gl}),this.refresh(),this.pushAll()}pushAll(){this.sm.setBloom(this.sim.config.bloomEnabled,this.sim.config.bloomStrength),this.sm.setCutaway(this.sim.config.cutawayEnabled,this.sim.config.cutawayOffset),this.audio.setEnabled(this.sim.config.audioEnabled),this.audio.setVolume(this.sim.config.masterVolume),this.syncToggles()}}function fo(i,t,e){return`
  <div id="wrap-${i}" class="flex items-center justify-between cursor-pointer group">
    <span class="text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-slate-200">${t}</span>
    <span class="hud-toggle ${e?"on":""}"><span class="knob"></span></span>
  </div>`}const ta=document.getElementById("app"),tl=document.getElementById("boot"),Ut=new Qx,Re=new yy(ta),yr=new My,WE=new xl(ta,Ut),XE=new BE(ta,Ut),yn=new GE(ta,Ut,Re,yr);Ut.bus.on(i=>{if(yr.handleEvent(i),i.type==="muzzle-break"){const t=new D,e=new D;Re.muzzleWorld(t,e),Re.particles.burst({velocity:i.velocityMs,direction:e,origin:t.clone().addScaledVector(e,.2),flowLps:i.flowLps,duration:Math.max(.18,Ut.config.valvePulseMs/1e3)},Ut.config.particleDensity),Re.fireFeedback(Math.min(1,i.velocityMs/120))}});const el=1/240;let po=0,rd=Ut.phase;const nl=new D,il=new D;let sl=0,mo=0,od=60,rl=0;Re.start({onFrame:i=>{po+=i*Ut.config.timeScale;let t=0;for(;po>=el&&t<24;)Ut.step(el),po-=el,t++;if(t>=24&&(po=0),Ut.phase!==rd&&(Ut.phase===qt.RECOVER&&yr.rechargeSwell(Ut.accumulator.chargeFraction),rd=Ut.phase),Re.fountain.update({pistonTravel:Ut.pistonTravel,valveOpening:Ut.valveOpening,jetVelocity:Ut.jetVelocity,chargeFrac:Ut.accumulator.chargeFraction,azimuthDeg:Ut.oarsmanAzimuth,elevationDeg:Ut.oarsmanElevation,firing:Ut.phase===qt.FIRE||Ut.phase===qt.ARM}),Re.particles.update(Re.time,i),Ut.jetHeight>5){rl+=i,rl>.12&&(rl=0,Re.particles.ambientDrip()),Re.muzzleWorld(nl,il);const e=Ut.jetHeight*.18;Re.environment.spawnRipple(nl.x+il.x*e,nl.z+il.z*e,Math.min(1,Ut.jetVelocity/90))}sl++,mo+=i,mo>=.5&&(od=sl/mo,sl=0,mo=0),WE.update(od,Re.particles.particleBudget,i),XE.update(),yn.setFireEnabled(Ut.phase===qt.IDLE&&Ut.accumulator.chargeFraction>.35)}});window.addEventListener("keydown",i=>{if(i.target?.tagName==="INPUT")return;const t=Ut.config;switch(i.code){case"Space":i.preventDefault(),yr.ensureContext(),Ut.triggerFire()&&yn.pulseFire();break;case"KeyC":Ut.setConfig({cutawayEnabled:!t.cutawayEnabled}),Re.setCutaway(Ut.config.cutawayEnabled,Ut.config.cutawayOffset),yn.refresh();break;case"KeyB":Ut.setConfig({bloomEnabled:!t.bloomEnabled}),Re.setBloom(Ut.config.bloomEnabled,Ut.config.bloomStrength),yn.refresh();break;case"KeyA":Ut.setConfig({autoSequence:!t.autoSequence}),yn.refresh();break;case"KeyR":yn.resetDefaults();break;case"ArrowLeft":i.preventDefault(),Ut.setConfig({azimuthDeg:ad(t.azimuthDeg-5)}),yn.refresh();break;case"ArrowRight":i.preventDefault(),Ut.setConfig({azimuthDeg:ad(t.azimuthDeg+5)}),yn.refresh();break;case"ArrowUp":i.preventDefault(),Ut.setConfig({elevationDeg:Math.min(90,t.elevationDeg+2)}),yn.refresh();break;case"ArrowDown":i.preventDefault(),Ut.setConfig({elevationDeg:Math.max(45,t.elevationDeg-2)}),yn.refresh();break}});function ad(i){for(;i>180;)i-=360;for(;i<-180;)i+=360;return Math.round(i*10)/10}window.addEventListener("pointerdown",()=>yr.ensureContext(),{once:!0});requestAnimationFrame(()=>{setTimeout(()=>{tl&&(tl.style.opacity="0",setTimeout(()=>tl.remove(),700))},350)});window.__DF_SIM=Ut;window.__DF_SCENE=Re;window.__DF_PARTICLES=Re.particles;console.info("%c DUBAI FOUNTAIN · DIGITAL TWIN %c ExtremeShooter + Oarsmen · GPU particles: "+Re.particles.particleBudget.toLocaleString("en-US"),"background:#0ea5e9;color:#04121f;font-weight:bold;padding:2px 6px;border-radius:3px","color:#38bdf8");
//# sourceMappingURL=index-CaOKOr3g.js.map
