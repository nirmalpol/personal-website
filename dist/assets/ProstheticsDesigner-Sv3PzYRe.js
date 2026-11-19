import{g as wl,c as _n,r as Fe,j as Zt}from"./index-Ck3CPdw5.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="182",ci={ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Al=0,Ca=1,Rl=2,ur=1,Cl=2,Ri=3,Dn=0,Le=1,tn=2,xn=0,hi=1,Pa=2,Da=3,La=4,Pl=5,zn=100,Dl=101,Ll=102,Il=103,Ul=104,Nl=200,Fl=201,Ol=202,Bl=203,cs=204,hs=205,kl=206,zl=207,Gl=208,Hl=209,Vl=210,Wl=211,Xl=212,jl=213,Yl=214,us=0,ds=1,fs=2,di=3,ps=4,ms=5,_s=6,gs=7,ra=0,ql=1,Zl=2,rn=0,No=1,Fo=2,Oo=3,Bo=4,ko=5,zo=6,Go=7,Ho=300,Wn=301,fi=302,xs=303,vs=304,br=306,Ss=1e3,gn=1001,Ms=1002,Se=1003,Kl=1004,zi=1005,Ee=1006,Pr=1007,Hn=1008,ze=1009,Vo=1010,Wo=1011,Pi=1012,sa=1013,an=1014,en=1015,Sn=1016,aa=1017,oa=1018,Di=1020,Xo=35902,jo=35899,Yo=1021,qo=1022,Ze=1023,Mn=1026,Vn=1027,Zo=1028,la=1029,pi=1030,ca=1031,ha=1033,dr=33776,fr=33777,pr=33778,mr=33779,ys=35840,bs=35841,Es=35842,Ts=35843,ws=36196,As=37492,Rs=37496,Cs=37488,Ps=37489,Ds=37490,Ls=37491,Is=37808,Us=37809,Ns=37810,Fs=37811,Os=37812,Bs=37813,ks=37814,zs=37815,Gs=37816,Hs=37817,Vs=37818,Ws=37819,Xs=37820,js=37821,Ys=36492,qs=36494,Zs=36495,Ks=36283,$s=36284,Js=36285,Qs=36286,$l=3200,Ko=0,Jl=1,Cn="",ke="srgb",mi="srgb-linear",xr="linear",ie="srgb",qn=7680,Ia=519,Ql=512,tc=513,ec=514,ua=515,nc=516,ic=517,da=518,rc=519,Ua=35044,Na="300 es",nn=2e3,vr=2001;function $o(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sc(){const i=Sr("canvas");return i.style.display="block",i}const Fa={};function Oa(...i){const t="THREE."+i.shift();console.log(t,...i)}function zt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Qt(...i){const t="THREE."+i.shift();console.error(t,...i)}function Li(...i){const t=i.join(" ");t in Fa||(Fa[t]=!0,zt(...i))}function ac(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class jn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,ta=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function oc(i,t){return(i%t+t)%t}function Dr(i,t,e){return(1-e)*i+e*t}function Si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const lc={DEG2RAD:_r};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],m=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a>=1){t[e+0]=m,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==m||l!==d||u!==g){let p=c*m+l*d+u*g+f*_;p<0&&(m=-m,d=-d,g=-g,_=-_,p=-p);let h=1-a;if(p<.9995){const x=Math.acos(p),E=Math.sin(x);h=Math.sin(h*x)/E,a=Math.sin(a*x)/E,c=c*h+m*a,l=l*h+d*a,u=u*h+g*a,f=f*h+_*a}else{c=c*h+m*a,l=l*h+d*a,u=u*h+g*a,f=f*h+_*a;const x=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=x,l*=x,u*=x,f*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[o],m=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+c*d-l*m,t[e+1]=c*g+u*m+l*f-a*d,t[e+2]=l*g+u*d+a*m-c*f,t[e+3]=u*g-a*f-c*m-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),f=a(s/2),m=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=m*u*f+l*d*g,this._y=l*d*f-m*u*g,this._z=l*u*g+m*d*f,this._w=l*u*f-m*d*g;break;case"YXZ":this._x=m*u*f+l*d*g,this._y=l*d*f-m*u*g,this._z=l*u*g-m*d*f,this._w=l*u*f+m*d*g;break;case"ZXY":this._x=m*u*f-l*d*g,this._y=l*d*f+m*u*g,this._z=l*u*g+m*d*f,this._w=l*u*f-m*d*g;break;case"ZYX":this._x=m*u*f-l*d*g,this._y=l*d*f+m*u*g,this._z=l*u*g-m*d*f,this._w=l*u*f+m*d*g;break;case"YZX":this._x=m*u*f+l*d*g,this._y=l*d*f+m*u*g,this._z=l*u*g-m*d*f,this._w=l*u*f-m*d*g;break;case"XZY":this._x=m*u*f-l*d*g,this._y=l*d*f-m*u*g,this._z=l*u*g+m*d*f,this._w=l*u*f+m*d*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],m=n+a+f;if(m>0){const d=.5/Math.sqrt(m+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,n=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lr.copy(this).projectOnVector(t),this.sub(Lr)}reflect(t){return this.sub(Lr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lr=new K,Ba=new Xn;class Xt{constructor(t,e,n,r,s,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],m=n[2],d=n[5],g=n[8],_=r[0],p=r[3],h=r[6],x=r[1],E=r[4],T=r[7],w=r[2],R=r[5],D=r[8];return s[0]=o*_+a*x+c*w,s[3]=o*p+a*E+c*R,s[6]=o*h+a*T+c*D,s[1]=l*_+u*x+f*w,s[4]=l*p+u*E+f*R,s[7]=l*h+u*T+f*D,s[2]=m*_+d*x+g*w,s[5]=m*p+d*E+g*R,s[8]=m*h+d*T+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,m=a*c-u*s,d=l*s-o*c,g=e*f+n*m+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*l-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=m*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ir.makeScale(t,e)),this}rotate(t){return this.premultiply(Ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new Xt,ka=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),za=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cc(){const i={enabled:!0,workingColorSpace:mi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ie&&(r.r=vn(r.r),r.g=vn(r.g),r.b=vn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cn?xr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Li("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Li("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mi]:{primaries:t,whitePoint:n,transfer:xr,toXYZ:ka,fromXYZ:za,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:ka,fromXYZ:za,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}const $t=cc();function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zn;class hc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zn===void 0&&(Zn=Sr("canvas")),Zn.width=t.width,Zn.height=t.height;const r=Zn.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Zn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uc=0;class fa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ur(r[o].image)):s.push(Ur(r[o]))}else s=Ur(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let dc=0;const Nr=new K;class Ae extends jn{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=gn,r=gn,s=Ee,o=Hn,a=Ze,c=ze,l=Ae.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=Ui(),this.name="",this.source=new fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nr).x}get height(){return this.source.getSize(Nr).y}get depth(){return this.source.getSize(Nr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ho)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ss:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case Ms:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ss:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case Ms:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Ho;Ae.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],m=c[1],d=c[5],g=c[9],_=c[2],p=c[6],h=c[10];if(Math.abs(u-m)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+m)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,T=(d+1)/2,w=(h+1)/2,R=(u+m)/4,D=(f+_)/4,F=(g+p)/4;return E>T&&E>w?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=R/n,s=D/n):T>w?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=R/r,s=F/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=D/s,r=F/s),this.set(n,r,s,e),this}let x=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(m-u)*(m-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-_)/x,this.z=(m-u)/x,this.w=Math.acos((l+d+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fc extends jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Ae(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ee,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new fa(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends fc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jo extends Ae{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Se,this.minFilter=Se,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pc extends Ae{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Se,this.minFilter=Se,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(s,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(t.matrixWorld),this.union(Gi)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mi),Hi.subVectors(this.max,Mi),Kn.subVectors(t.a,Mi),$n.subVectors(t.b,Mi),Jn.subVectors(t.c,Mi),yn.subVectors($n,Kn),bn.subVectors(Jn,$n),Un.subVectors(Kn,Jn);let e=[0,-yn.z,yn.y,0,-bn.z,bn.y,0,-Un.z,Un.y,yn.z,0,-yn.x,bn.z,0,-bn.x,Un.z,0,-Un.x,-yn.y,yn.x,0,-bn.y,bn.x,0,-Un.y,Un.x,0];return!Fr(e,Kn,$n,Jn,Hi)||(e=[1,0,0,0,1,0,0,0,1],!Fr(e,Kn,$n,Jn,Hi))?!1:(Vi.crossVectors(yn,bn),e=[Vi.x,Vi.y,Vi.z],Fr(e,Kn,$n,Jn,Hi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const hn=[new K,new K,new K,new K,new K,new K,new K,new K],Xe=new K,Gi=new Ni,Kn=new K,$n=new K,Jn=new K,yn=new K,bn=new K,Un=new K,Mi=new K,Hi=new K,Vi=new K,Nn=new K;function Fr(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Nn.fromArray(i,s);const a=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),c=t.dot(Nn),l=e.dot(Nn),u=n.dot(Nn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const mc=new Ni,yi=new K,Or=new K;class Er{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mc.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Or.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(Or)),this.expandByPoint(yi.copy(t.center).sub(Or))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const un=new K,Br=new K,Wi=new K,En=new K,kr=new K,Xi=new K,zr=new K;class pa{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Br.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Br);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Wi),a=En.dot(this.direction),c=-En.dot(Wi),l=En.lengthSq(),u=Math.abs(1-o*o);let f,m,d,g;if(u>0)if(f=o*c-a,m=o*a-c,g=s*u,f>=0)if(m>=-g)if(m<=g){const _=1/u;f*=_,m*=_,d=f*(f+o*m+2*a)+m*(o*f+m+2*c)+l}else m=s,f=Math.max(0,-(o*m+a)),d=-f*f+m*(m+2*c)+l;else m=-s,f=Math.max(0,-(o*m+a)),d=-f*f+m*(m+2*c)+l;else m<=-g?(f=Math.max(0,-(-o*s+a)),m=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+m*(m+2*c)+l):m<=g?(f=0,m=Math.min(Math.max(-s,-c),s),d=m*(m+2*c)+l):(f=Math.max(0,-(o*s+a)),m=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+m*(m+2*c)+l);else m=o>0?-s:s,f=Math.max(0,-(o*m+a)),d=-f*f+m*(m+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Br).addScaledVector(Wi,m),d}intersectSphere(t,e){un.subVectors(t.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,m=this.origin;return l>=0?(n=(t.min.x-m.x)*l,r=(t.max.x-m.x)*l):(n=(t.max.x-m.x)*l,r=(t.min.x-m.x)*l),u>=0?(s=(t.min.y-m.y)*u,o=(t.max.y-m.y)*u):(s=(t.max.y-m.y)*u,o=(t.min.y-m.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-m.z)*f,c=(t.max.z-m.z)*f):(a=(t.max.z-m.z)*f,c=(t.min.z-m.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,r,s){kr.subVectors(e,t),Xi.subVectors(n,t),zr.crossVectors(kr,Xi);let o=this.direction.dot(zr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);const c=a*this.direction.dot(Xi.crossVectors(En,Xi));if(c<0)return null;const l=a*this.direction.dot(kr.cross(En));if(l<0||c+l>o)return null;const u=-a*En.dot(zr);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,r,s,o,a,c,l,u,f,m,d,g,_,p){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,f,m,d,g,_,p)}set(t,e,n,r,s,o,a,c,l,u,f,m,d,g,_,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=m,h[3]=d,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Qn.setFromMatrixColumn(t,0).length(),s=1/Qn.setFromMatrixColumn(t,1).length(),o=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const m=o*u,d=o*f,g=a*u,_=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=m-_*l,e[9]=-a*c,e[2]=_-m*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const m=c*u,d=c*f,g=l*u,_=l*f;e[0]=m+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+m*a,e[10]=o*c}else if(t.order==="ZXY"){const m=c*u,d=c*f,g=l*u,_=l*f;e[0]=m-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-m*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const m=o*u,d=o*f,g=a*u,_=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=m*l+_,e[1]=c*f,e[5]=_*l+m,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const m=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-m*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=m-_*f}else if(t.order==="XZY"){const m=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=m*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_c,t,gc)}lookAt(t,e,n){const r=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Tn.crossVectors(n,Oe),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Tn.crossVectors(n,Oe)),Tn.normalize(),ji.crossVectors(Oe,Tn),r[0]=Tn.x,r[4]=ji.x,r[8]=Oe.x,r[1]=Tn.y,r[5]=ji.y,r[9]=Oe.y,r[2]=Tn.z,r[6]=ji.z,r[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],m=n[9],d=n[13],g=n[2],_=n[6],p=n[10],h=n[14],x=n[3],E=n[7],T=n[11],w=n[15],R=r[0],D=r[4],F=r[8],b=r[12],A=r[1],O=r[5],P=r[9],U=r[13],v=r[2],B=r[6],W=r[10],k=r[14],Q=r[3],J=r[7],ot=r[11],G=r[15];return s[0]=o*R+a*A+c*v+l*Q,s[4]=o*D+a*O+c*B+l*J,s[8]=o*F+a*P+c*W+l*ot,s[12]=o*b+a*U+c*k+l*G,s[1]=u*R+f*A+m*v+d*Q,s[5]=u*D+f*O+m*B+d*J,s[9]=u*F+f*P+m*W+d*ot,s[13]=u*b+f*U+m*k+d*G,s[2]=g*R+_*A+p*v+h*Q,s[6]=g*D+_*O+p*B+h*J,s[10]=g*F+_*P+p*W+h*ot,s[14]=g*b+_*U+p*k+h*G,s[3]=x*R+E*A+T*v+w*Q,s[7]=x*D+E*O+T*B+w*J,s[11]=x*F+E*P+T*W+w*ot,s[15]=x*b+E*U+T*k+w*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],m=t[10],d=t[14],g=t[3],_=t[7],p=t[11],h=t[15],x=c*d-l*m,E=a*d-l*f,T=a*m-c*f,w=o*d-l*u,R=o*m-c*u,D=o*f-a*u;return e*(_*x-p*E+h*T)-n*(g*x-p*w+h*R)+r*(g*E-_*w+h*D)-s*(g*T-_*R+p*D)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],m=t[10],d=t[11],g=t[12],_=t[13],p=t[14],h=t[15],x=f*p*l-_*m*l+_*c*d-a*p*d-f*c*h+a*m*h,E=g*m*l-u*p*l-g*c*d+o*p*d+u*c*h-o*m*h,T=u*_*l-g*f*l+g*a*d-o*_*d-u*a*h+o*f*h,w=g*f*c-u*_*c-g*a*m+o*_*m+u*a*p-o*f*p,R=e*x+n*E+r*T+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return t[0]=x*D,t[1]=(_*m*s-f*p*s-_*r*d+n*p*d+f*r*h-n*m*h)*D,t[2]=(a*p*s-_*c*s+_*r*l-n*p*l-a*r*h+n*c*h)*D,t[3]=(f*c*s-a*m*s-f*r*l+n*m*l+a*r*d-n*c*d)*D,t[4]=E*D,t[5]=(u*p*s-g*m*s+g*r*d-e*p*d-u*r*h+e*m*h)*D,t[6]=(g*c*s-o*p*s-g*r*l+e*p*l+o*r*h-e*c*h)*D,t[7]=(o*m*s-u*c*s+u*r*l-e*m*l-o*r*d+e*c*d)*D,t[8]=T*D,t[9]=(g*f*s-u*_*s-g*n*d+e*_*d+u*n*h-e*f*h)*D,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*h+e*a*h)*D,t[11]=(u*a*s-o*f*s-u*n*l+e*f*l+o*n*d-e*a*d)*D,t[12]=w*D,t[13]=(u*_*r-g*f*r+g*n*m-e*_*m-u*n*p+e*f*p)*D,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*p-e*a*p)*D,t[15]=(o*f*r-u*a*r+u*n*c-e*f*c-o*n*m+e*a*m)*D,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,m=s*l,d=s*u,g=s*f,_=o*u,p=o*f,h=a*f,x=c*l,E=c*u,T=c*f,w=n.x,R=n.y,D=n.z;return r[0]=(1-(_+h))*w,r[1]=(d+T)*w,r[2]=(g-E)*w,r[3]=0,r[4]=(d-T)*R,r[5]=(1-(m+h))*R,r[6]=(p+x)*R,r[7]=0,r[8]=(g+E)*D,r[9]=(p-x)*D,r[10]=(1-(m+_))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Qn.set(r[0],r[1],r[2]).length();const o=Qn.set(r[4],r[5],r[6]).length(),a=Qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),je.copy(this);const l=1/s,u=1/o,f=1/a;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=f,je.elements[9]*=f,je.elements[10]*=f,e.setFromRotationMatrix(je),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=nn,c=!1){const l=this.elements,u=2*s/(e-t),f=2*s/(n-r),m=(e+t)/(e-t),d=(n+r)/(n-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===nn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===vr)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=nn,c=!1){const l=this.elements,u=2/(e-t),f=2/(n-r),m=-(e+t)/(e-t),d=-(n+r)/(n-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===nn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===vr)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new K,je=new he,_c=new K(0,0,0),gc=new K(1,1,1),Tn=new K,ji=new K,Oe=new K,Ga=new he,Ha=new Xn;class on{constructor(t=0,e=0,n=0,r=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],m=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ga.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ga,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xc=0;const Va=new K,ti=new Xn,dn=new he,Yi=new K,bi=new K,vc=new K,Sc=new Xn,Wa=new K(1,0,0),Xa=new K(0,1,0),ja=new K(0,0,1),Ya={type:"added"},Mc={type:"removed"},ei={type:"childadded",child:null},Gr={type:"childremoved",child:null};class ve extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new K,e=new on,n=new Xn,r=new K(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new he},normalMatrix:{value:new Xt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.multiply(ti),this}rotateOnWorldAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.premultiply(ti),this}rotateX(t){return this.rotateOnAxis(Wa,t)}rotateY(t){return this.rotateOnAxis(Xa,t)}rotateZ(t){return this.rotateOnAxis(ja,t)}translateOnAxis(t,e){return Va.copy(t).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wa,t)}translateY(t){return this.translateOnAxis(Xa,t)}translateZ(t){return this.translateOnAxis(ja,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yi.copy(t):Yi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(bi,Yi,this.up):dn.lookAt(Yi,bi,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),ti.setFromRotationMatrix(dn),this.quaternion.premultiply(ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ya),ei.child=t,this.dispatchEvent(ei),ei.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mc),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ya),ei.child=t,this.dispatchEvent(ei),ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,t,vc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Sc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),m=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ve.DEFAULT_UP=new K(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new K,fn=new K,Hr=new K,pn=new K,ni=new K,ii=new K,qa=new K,Vr=new K,Wr=new K,Xr=new K,jr=new fe,Yr=new fe,qr=new fe;class qe{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ye.subVectors(t,e),r.cross(Ye);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ye.subVectors(r,e),fn.subVectors(n,e),Hr.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(fn),c=Ye.dot(Hr),l=fn.dot(fn),u=fn.dot(Hr),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const m=1/f,d=(l*c-a*u)*m,g=(o*u-a*c)*m;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pn.x),c.addScaledVector(o,pn.y),c.addScaledVector(a,pn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return jr.setScalar(0),Yr.setScalar(0),qr.setScalar(0),jr.fromBufferAttribute(t,e),Yr.fromBufferAttribute(t,n),qr.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(jr,s.x),o.addScaledVector(Yr,s.y),o.addScaledVector(qr,s.z),o}static isFrontFacing(t,e,n,r){return Ye.subVectors(n,e),fn.subVectors(t,e),Ye.cross(fn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ye.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;ni.subVectors(r,n),ii.subVectors(s,n),Vr.subVectors(t,n);const c=ni.dot(Vr),l=ii.dot(Vr);if(c<=0&&l<=0)return e.copy(n);Wr.subVectors(t,r);const u=ni.dot(Wr),f=ii.dot(Wr);if(u>=0&&f<=u)return e.copy(r);const m=c*f-u*l;if(m<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ni,o);Xr.subVectors(t,s);const d=ni.dot(Xr),g=ii.dot(Xr);if(g>=0&&d<=g)return e.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ii,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return qa.subVectors(s,r),a=(f-u)/(f-u+(d-g)),e.copy(r).addScaledVector(qa,a);const h=1/(p+_+m);return o=_*h,a=m*h,e.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=$t.workingColorSpace){if(t=oc(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Zr(o,s,t+1/3),this.g=Zr(o,s,t),this.b=Zr(o,s,t-1/3)}return $t.colorSpaceToWorking(this,r),this}setStyle(t,e=ke){function n(s){s!==void 0&&parseFloat(s)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=tl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return $t.workingToColorSpace(be.copy(this),t),Math.round(Kt(be.r*255,0,255))*65536+Math.round(Kt(be.g*255,0,255))*256+Math.round(Kt(be.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(be.copy(this),e);const n=be.r,r=be.g,s=be.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ke){$t.workingToColorSpace(be.copy(this),t);const e=be.r,n=be.g,r=be.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(qi);const n=Dr(wn.h,qi.h,e),r=Dr(wn.s,qi.s,e),s=Dr(wn.l,qi.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Yt;Yt.NAMES=tl;let yc=0;class gi extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=hi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cs,this.blendDst=hs,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cs&&(n.blendSrc=this.blendSrc),this.blendDst!==hs&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ma extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new K,Zi=new Vt;let bc=0;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ua,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zi.fromBufferAttribute(this,e),Zi.applyMatrix3(t),this.setXY(e,Zi.x,Zi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),r=Pe(r,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ua&&(t.usage=this.usage),t}}class el extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nl extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ec=0;const Ve=new he,Kr=new ve,ri=new K,Be=new Ni,Ei=new Ni,xe=new K;class Ie extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($o(t)?nl:el)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Be.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ei.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Be.min,Ei.min),Be.expandByPoint(xe),xe.addVectors(Be.max,Ei.max),Be.expandByPoint(xe)):(Be.expandByPoint(Ei.min),Be.expandByPoint(Ei.max))}Be.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)xe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(xe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)xe.fromBufferAttribute(a,l),c&&(ri.fromBufferAttribute(t,l),xe.add(ri)),r=Math.max(r,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new K,c[F]=new K;const l=new K,u=new K,f=new K,m=new Vt,d=new Vt,g=new Vt,_=new K,p=new K;function h(F,b,A){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,A),m.fromBufferAttribute(s,F),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,A),u.sub(l),f.sub(l),d.sub(m),g.sub(m);const O=1/(d.x*g.y-g.x*d.y);isFinite(O)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(O),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(O),a[F].add(_),a[b].add(_),a[A].add(_),c[F].add(p),c[b].add(p),c[A].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let F=0,b=x.length;F<b;++F){const A=x[F],O=A.start,P=A.count;for(let U=O,v=O+P;U<v;U+=3)h(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const E=new K,T=new K,w=new K,R=new K;function D(F){w.fromBufferAttribute(r,F),R.copy(w);const b=a[F];E.copy(b),E.sub(w.multiplyScalar(w.dot(b))).normalize(),T.crossVectors(R,b);const O=T.dot(c[F])<0?-1:1;o.setXYZW(F,E.x,E.y,E.z,O)}for(let F=0,b=x.length;F<b;++F){const A=x[F],O=A.start,P=A.count;for(let U=O,v=O+P;U<v;U+=3)D(t.getX(U+0)),D(t.getX(U+1)),D(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,d=n.count;m<d;m++)n.setXYZ(m,0,0,0);const r=new K,s=new K,o=new K,a=new K,c=new K,l=new K,u=new K,f=new K;if(t)for(let m=0,d=t.count;m<d;m+=3){const g=t.getX(m+0),_=t.getX(m+1),p=t.getX(m+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let m=0,d=e.count;m<d;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,m=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let h=0;h<u;h++)m[g++]=l[d++]}return new Ge(m,u,f)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const m=l[u],d=t(m,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,m=l.length;f<m;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let m=0,d=f.length;m<d;m++)u.push(f[m].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new he,Fn=new pa,Ki=new Er,Ka=new K,$i=new K,Ji=new K,Qi=new K,$r=new K,tr=new K,$a=new K,er=new K;class Ke extends ve{constructor(t=new Ie,e=new ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){tr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&($r.fromBufferAttribute(f,t),o?tr.addScaledVector($r,u):tr.addScaledVector($r.sub(e),u))}e.add(tr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(s),Fn.copy(t.ray).recast(t.near),!(Ki.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(Ki,Ka)===null||Fn.origin.distanceToSquared(Ka)>(t.far-t.near)**2))&&(Za.copy(s).invert(),Fn.copy(t.ray).applyMatrix4(Za),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,m=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const p=m[g],h=o[p.materialIndex],x=Math.max(p.start,d.start),E=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let T=x,w=E;T<w;T+=3){const R=a.getX(T),D=a.getX(T+1),F=a.getX(T+2);r=nr(this,h,t,n,l,u,f,R,D,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,h=_;p<h;p+=3){const x=a.getX(p),E=a.getX(p+1),T=a.getX(p+2);r=nr(this,o,t,n,l,u,f,x,E,T),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const p=m[g],h=o[p.materialIndex],x=Math.max(p.start,d.start),E=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let T=x,w=E;T<w;T+=3){const R=T,D=T+1,F=T+2;r=nr(this,h,t,n,l,u,f,R,D,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,h=_;p<h;p+=3){const x=p,E=p+1,T=p+2;r=nr(this,o,t,n,l,u,f,x,E,T),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Tc(i,t,e,n,r,s,o,a){let c;if(t.side===Le?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Dn,a),c===null)return null;er.copy(a),er.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(er);return l<e.near||l>e.far?null:{distance:l,point:er.clone(),object:i}}function nr(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,$i),i.getVertexPosition(c,Ji),i.getVertexPosition(l,Qi);const u=Tc(i,t,e,n,$i,Ji,Qi,$a);if(u){const f=new K;qe.getBarycoord($a,$i,Ji,Qi,f),r&&(u.uv=qe.getInterpolatedAttribute(r,a,c,l,f,new Vt)),s&&(u.uv1=qe.getInterpolatedAttribute(s,a,c,l,f,new Vt)),o&&(u.normal=qe.getInterpolatedAttribute(o,a,c,l,f,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const m={a,b:c,c:l,normal:new K,materialIndex:0};qe.getNormal($i,Ji,Qi,m.normal),u.face=m,u.barycoord=f}return u}class Fi extends Ie{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let m=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(f,2));function g(_,p,h,x,E,T,w,R,D,F,b){const A=T/D,O=w/F,P=T/2,U=w/2,v=R/2,B=D+1,W=F+1;let k=0,Q=0;const J=new K;for(let ot=0;ot<W;ot++){const G=ot*O-U;for(let X=0;X<B;X++){const pt=X*A-P;J[_]=pt*x,J[p]=G*E,J[h]=v,l.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[h]=R>0?1:-1,u.push(J.x,J.y,J.z),f.push(X/D),f.push(1-ot/F),k+=1}}for(let ot=0;ot<F;ot++)for(let G=0;G<D;G++){const X=m+G+B*ot,pt=m+G+B*(ot+1),mt=m+(G+1)+B*(ot+1),ut=m+(G+1)+B*ot;c.push(X,pt,ut),c.push(pt,mt,ut),Q+=6}a.addGroup(d,Q,b),d+=Q,m+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _i(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function we(i){const t={};for(let e=0;e<i.length;e++){const n=_i(i[e]);for(const r in n)t[r]=n[r]}return t}function wc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function il(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Ac={clone:_i,merge:we};var Rc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rc,this.fragmentShader=Cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_i(t.uniforms),this.uniformsGroups=wc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rl extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new K,Ja=new Vt,Qa=new Vt;class We extends rl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,Ja,Qa),e.subVectors(Qa,Ja)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ai=1;class Pc extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new We(si,ai,t,e);r.layers=this.layers,this.add(r);const s=new We(si,ai,t,e);s.layers=this.layers,this.add(s);const o=new We(si,ai,t,e);o.layers=this.layers,this.add(o);const a=new We(si,ai,t,e);a.layers=this.layers,this.add(a);const c=new We(si,ai,t,e);c.layers=this.layers,this.add(c);const l=new We(si,ai,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,m,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sl extends Ae{constructor(t=[],e=Wn,n,r,s,o,a,c,l,u){super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class al extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new sl(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fi(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:xn});s.uniforms.tEquirect.value=e;const o=new Ke(r,s),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Ee),new Pc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class ir extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dc={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),h=this._getHandJoint(l,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],m=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&m>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dc)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Lc extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ic extends Ae{constructor(t=null,e=1,n=1,r,s,o,a,c,l=Se,u=Se,f,m){super(null,o,a,c,l,u,r,s,f,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qr=new K,Uc=new K,Nc=new Xt;class Rn{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Qr.subVectors(n,e).cross(Uc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nc.getNormalMatrix(t),r=this.coplanarPoint(Qr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Er,Fc=new Vt(.5,.5),rr=new K;class _a{constructor(t=new Rn,e=new Rn,n=new Rn,r=new Rn,s=new Rn,o=new Rn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],m=s[6],d=s[7],g=s[8],_=s[9],p=s[10],h=s[11],x=s[12],E=s[13],T=s[14],w=s[15];if(r[0].setComponents(l-o,d-u,h-g,w-x).normalize(),r[1].setComponents(l+o,d+u,h+g,w+x).normalize(),r[2].setComponents(l+a,d+f,h+_,w+E).normalize(),r[3].setComponents(l-a,d-f,h-_,w-E).normalize(),n)r[4].setComponents(c,m,p,T).normalize(),r[5].setComponents(l-c,d-m,h-p,w-T).normalize();else if(r[4].setComponents(l-c,d-m,h-p,w-T).normalize(),e===nn)r[5].setComponents(l+c,d+m,h+p,w+T).normalize();else if(e===vr)r[5].setComponents(c,m,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){On.center.set(0,0,0);const e=Fc.distanceTo(t.center);return On.radius=.7071067811865476+e,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(rr.x=r.normal.x>0?t.max.x:t.min.x,rr.y=r.normal.y>0?t.max.y:t.min.y,rr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ga extends gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mr=new K,yr=new K,to=new he,Ti=new pa,sr=new Er,ts=new K,eo=new K;class Oc extends ve{constructor(t=new Ie,e=new ga){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Mr.fromBufferAttribute(e,r-1),yr.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Mr.distanceTo(yr);t.setAttribute("lineDistance",new Me(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),sr.radius+=s,t.ray.intersectsSphere(sr)===!1)return;to.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(to);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,m=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=l){const h=u.getX(_),x=u.getX(_+1),E=ar(this,t,Ti,c,h,x,_);E&&e.push(E)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(d),h=ar(this,t,Ti,c,_,p,g-1);h&&e.push(h)}}else{const d=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=l){const h=ar(this,t,Ti,c,_,_+1,_);h&&e.push(h)}if(this.isLineLoop){const _=ar(this,t,Ti,c,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ar(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(Mr.fromBufferAttribute(a,r),yr.fromBufferAttribute(a,s),e.distanceSqToSegment(Mr,yr,ts,eo)>n)return;ts.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ts);if(!(l<t.near||l>t.far))return{distance:l,point:eo.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const no=new K,io=new K;class ol extends Oc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)no.fromBufferAttribute(e,r),io.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+no.distanceTo(io);t.setAttribute("lineDistance",new Me(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ii extends Ae{constructor(t,e,n=an,r,s,o,a=Se,c=Se,l,u=Mn,f=1){if(u!==Mn&&u!==Vn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:t,height:e,depth:f};super(m,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bc extends Ii{constructor(t,e=an,n=Wn,r,s,o=Se,a=Se,c,l=Mn){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ll extends Ae{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Oi extends Ie{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,f=t/a,m=e/c,d=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const x=h*m-o;for(let E=0;E<l;E++){const T=E*f-s;g.push(T,-x,0),_.push(0,0,1),p.push(E/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let x=0;x<a;x++){const E=x+l*h,T=x+l*(h+1),w=x+1+l*(h+1),R=x+1+l*h;d.push(E,T,R),d.push(T,w,R)}this.setIndex(d),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.widthSegments,t.heightSegments)}}class kc extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zc extends gi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Yt(16777215),this.specular=new Yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gc extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hc extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ro={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vc{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,m=l.length;f<m;f+=2){const d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Wc=new Vc;class xa{constructor(t){this.manager=t!==void 0?t:Wc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}xa.DEFAULT_MATERIAL_NAME="__DEFAULT";const mn={};class Xc extends Error{constructor(t,e){super(t),this.response=e}}class jc extends xa{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ro.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(mn[t]!==void 0){mn[t].push({onLoad:e,onProgress:n,onError:r});return}mn[t]=[],mn[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&zt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=mn[t],f=l.body.getReader(),m=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=m?parseInt(m):0,g=d!==0;let _=0;const p=new ReadableStream({start(h){x();function x(){f.read().then(({done:E,value:T})=>{if(E)h.close();else{_+=T.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let R=0,D=u.length;R<D;R++){const F=u[R];F.onProgress&&F.onProgress(w)}h.enqueue(T),x()}},E=>{h.error(E)})}}});return new Response(p)}else throw new Xc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),m=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(m);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{ro.add(`file:${t}`,l);const u=mn[t];delete mn[t];for(let f=0,m=u.length;f<m;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=mn[t];if(u===void 0)throw this.manager.itemError(t),l;delete mn[t];for(let f=0,m=u.length;f<m;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class cl extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Yc extends cl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const es=new he,so=new K,ao=new K;class qc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=ze,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;so.setFromMatrixPosition(t.matrixWorld),e.position.copy(so),ao.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ao),e.updateMatrixWorld(),es.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(es,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(es)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class va extends rl{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zc extends qc{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kc extends cl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Zc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class $c extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class oo{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jc extends ol{constructor(t=10,e=10,n=4473924,r=8947848){n=new Yt(n),r=new Yt(r);const s=e/2,o=t/e,a=t/2,c=[],l=[];for(let m=0,d=0,g=-a;m<=e;m++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=m===s?n:r;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const u=new Ie;u.setAttribute("position",new Me(c,3)),u.setAttribute("color",new Me(l,3));const f=new ga({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Qc extends ol{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ie;r.setAttribute("position",new Me(e,3)),r.setAttribute("color",new Me(n,3));const s=new ga({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,n){const r=new Yt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class th extends jn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){zt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function lo(i,t,e,n){const r=eh(n);switch(e){case Yo:return i*t;case Zo:return i*t/r.components*r.byteLength;case la:return i*t/r.components*r.byteLength;case pi:return i*t*2/r.components*r.byteLength;case ca:return i*t*2/r.components*r.byteLength;case qo:return i*t*3/r.components*r.byteLength;case Ze:return i*t*4/r.components*r.byteLength;case ha:return i*t*4/r.components*r.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bs:case Ts:return Math.max(i,16)*Math.max(t,8)/4;case ys:case Es:return Math.max(i,8)*Math.max(t,8)/2;case ws:case As:case Cs:case Ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rs:case Ds:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Us:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ns:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Os:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bs:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ks:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hs:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ws:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xs:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case js:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ys:case qs:case Zs:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ks:case $s:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Js:case Qs:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eh(i){switch(i){case ze:case Vo:return{byteLength:1,components:1};case Pi:case Wo:case Sn:return{byteLength:2,components:1};case aa:case oa:return{byteLength:2,components:4};case an:case sa:case en:return{byteLength:4,components:1};case Xo:case jo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hl(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function nh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let m=0;for(let d=1;d<f.length;d++){const g=f[m],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++m,f[m]=_)}f.length=m+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var ih=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rh=`#ifdef USE_ALPHAHASH
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
#endif`,sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ch=`#ifdef USE_AOMAP
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
#endif`,hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uh=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_h=`#ifdef USE_IRIDESCENCE
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
#endif`,gh=`#ifdef USE_BUMPMAP
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
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wh=`#define PI 3.141592653589793
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
} // validated`,Ah=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wh=`#ifdef USE_GRADIENTMAP
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
}`,Xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qh=`uniform bool receiveShadow;
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
#endif`,Zh=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tu=`PhysicalMaterial material;
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
#endif`,eu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,nu=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iu=`#if defined( RE_IndirectDiffuse )
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
#endif`,ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,su=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,au=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ou=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,du=`#if defined( USE_POINTS_UV )
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
#endif`,fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_u=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xu=`#ifdef USE_MORPHTARGETS
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
#endif`,vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tu=`#ifdef USE_NORMALMAP
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
#endif`,wu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ru=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Du=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ou=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Hu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vu=`#ifdef USE_SKINNING
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
#endif`,Wu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xu=`#ifdef USE_SKINNING
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
#endif`,ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ku=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$u=`#ifdef USE_TRANSMISSION
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
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,id=`uniform sampler2D t2D;
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
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ld=`#include <common>
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
}`,cd=`#if DEPTH_PACKING == 3200
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
}`,hd=`#define DISTANCE
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
}`,ud=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`uniform float scale;
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
}`,md=`uniform vec3 diffuse;
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
}`,_d=`#include <common>
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
}`,gd=`uniform vec3 diffuse;
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
}`,xd=`#define LAMBERT
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
}`,vd=`#define LAMBERT
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
}`,Sd=`#define MATCAP
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
}`,Md=`#define MATCAP
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
}`,yd=`#define NORMAL
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
}`,bd=`#define NORMAL
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
}`,Ed=`#define PHONG
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
}`,Td=`#define PHONG
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
}`,wd=`#define STANDARD
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
}`,Ad=`#define STANDARD
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
}`,Rd=`#define TOON
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
}`,Cd=`#define TOON
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
}`,Pd=`uniform float size;
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
}`,Dd=`uniform vec3 diffuse;
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
}`,Ld=`#include <common>
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
}`,Id=`uniform vec3 color;
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
}`,Ud=`uniform float rotation;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:ih,alphahash_pars_fragment:rh,alphamap_fragment:sh,alphamap_pars_fragment:ah,alphatest_fragment:oh,alphatest_pars_fragment:lh,aomap_fragment:ch,aomap_pars_fragment:hh,batching_pars_vertex:uh,batching_vertex:dh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:_h,bumpmap_pars_fragment:gh,clipping_planes_fragment:xh,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:Sh,clipping_planes_vertex:Mh,color_fragment:yh,color_pars_fragment:bh,color_pars_vertex:Eh,color_vertex:Th,common:wh,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:Rh,displacementmap_pars_vertex:Ch,displacementmap_vertex:Ph,emissivemap_fragment:Dh,emissivemap_pars_fragment:Lh,colorspace_fragment:Ih,colorspace_pars_fragment:Uh,envmap_fragment:Nh,envmap_common_pars_fragment:Fh,envmap_pars_fragment:Oh,envmap_pars_vertex:Bh,envmap_physical_pars_fragment:Zh,envmap_vertex:kh,fog_vertex:zh,fog_pars_vertex:Gh,fog_fragment:Hh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Wh,lightmap_pars_fragment:Xh,lights_lambert_fragment:jh,lights_lambert_pars_fragment:Yh,lights_pars_begin:qh,lights_toon_fragment:Kh,lights_toon_pars_fragment:$h,lights_phong_fragment:Jh,lights_phong_pars_fragment:Qh,lights_physical_fragment:tu,lights_physical_pars_fragment:eu,lights_fragment_begin:nu,lights_fragment_maps:iu,lights_fragment_end:ru,logdepthbuf_fragment:su,logdepthbuf_pars_fragment:au,logdepthbuf_pars_vertex:ou,logdepthbuf_vertex:lu,map_fragment:cu,map_pars_fragment:hu,map_particle_fragment:uu,map_particle_pars_fragment:du,metalnessmap_fragment:fu,metalnessmap_pars_fragment:pu,morphinstance_vertex:mu,morphcolor_vertex:_u,morphnormal_vertex:gu,morphtarget_pars_vertex:xu,morphtarget_vertex:vu,normal_fragment_begin:Su,normal_fragment_maps:Mu,normal_pars_fragment:yu,normal_pars_vertex:bu,normal_vertex:Eu,normalmap_pars_fragment:Tu,clearcoat_normal_fragment_begin:wu,clearcoat_normal_fragment_maps:Au,clearcoat_pars_fragment:Ru,iridescence_pars_fragment:Cu,opaque_fragment:Pu,packing:Du,premultiplied_alpha_fragment:Lu,project_vertex:Iu,dithering_fragment:Uu,dithering_pars_fragment:Nu,roughnessmap_fragment:Fu,roughnessmap_pars_fragment:Ou,shadowmap_pars_fragment:Bu,shadowmap_pars_vertex:ku,shadowmap_vertex:zu,shadowmask_pars_fragment:Gu,skinbase_vertex:Hu,skinning_pars_vertex:Vu,skinning_vertex:Wu,skinnormal_vertex:Xu,specularmap_fragment:ju,specularmap_pars_fragment:Yu,tonemapping_fragment:qu,tonemapping_pars_fragment:Zu,transmission_fragment:Ku,transmission_pars_fragment:$u,uv_pars_fragment:Ju,uv_pars_vertex:Qu,uv_vertex:td,worldpos_vertex:ed,background_vert:nd,background_frag:id,backgroundCube_vert:rd,backgroundCube_frag:sd,cube_vert:ad,cube_frag:od,depth_vert:ld,depth_frag:cd,distance_vert:hd,distance_frag:ud,equirect_vert:dd,equirect_frag:fd,linedashed_vert:pd,linedashed_frag:md,meshbasic_vert:_d,meshbasic_frag:gd,meshlambert_vert:xd,meshlambert_frag:vd,meshmatcap_vert:Sd,meshmatcap_frag:Md,meshnormal_vert:yd,meshnormal_frag:bd,meshphong_vert:Ed,meshphong_frag:Td,meshphysical_vert:wd,meshphysical_frag:Ad,meshtoon_vert:Rd,meshtoon_frag:Cd,points_vert:Pd,points_frag:Dd,shadow_vert:Ld,shadow_frag:Id,sprite_vert:Ud,sprite_frag:Nd},bt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Qe={basic:{uniforms:we([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:we([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:we([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:we([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:we([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:we([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:we([bt.points,bt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:we([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:we([bt.common,bt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:we([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:we([bt.sprite,bt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:we([bt.common,bt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:we([bt.lights,bt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Qe.physical={uniforms:we([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const or={r:0,b:0,g:0},Bn=new on,Fd=new he;function Od(i,t,e,n,r,s,o){const a=new Yt(0);let c=s===!0?0:1,l,u,f=null,m=0,d=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?e:t).get(T)),T}function _(E){let T=!1;const w=g(E);w===null?h(a,c):w&&w.isColor&&(h(w,1),T=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,T){const w=g(T);w&&(w.isCubeTexture||w.mapping===br)?(u===void 0&&(u=new Ke(new Fi(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:_i(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Bn.copy(T.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fd.makeRotationFromEuler(Bn)),u.material.toneMapped=$t.getTransfer(w.colorSpace)!==ie,(f!==w||m!==w.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=w,m=w.version,d=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ke(new Oi(2,2),new ln({name:"BackgroundMaterial",uniforms:_i(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=$t.getTransfer(w.colorSpace)!==ie,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||m!==w.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=w,m=w.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function h(E,T){E.getRGB(or,il(i)),n.buffers.color.setClear(or.r,or.g,or.b,T,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),c=T,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,h(a,c)},render:_,addToRenderList:p,dispose:x}}function Bd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,o=!1;function a(A,O,P,U,v){let B=!1;const W=f(U,P,O);s!==W&&(s=W,l(s.object)),B=d(A,U,P,v),B&&g(A,U,P,v),v!==null&&t.update(v,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,T(A,O,P,U),v!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(v).buffer))}function c(){return i.createVertexArray()}function l(A){return i.bindVertexArray(A)}function u(A){return i.deleteVertexArray(A)}function f(A,O,P){const U=P.wireframe===!0;let v=n[A.id];v===void 0&&(v={},n[A.id]=v);let B=v[O.id];B===void 0&&(B={},v[O.id]=B);let W=B[U];return W===void 0&&(W=m(c()),B[U]=W),W}function m(A){const O=[],P=[],U=[];for(let v=0;v<e;v++)O[v]=0,P[v]=0,U[v]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:P,attributeDivisors:U,object:A,attributes:{},index:null}}function d(A,O,P,U){const v=s.attributes,B=O.attributes;let W=0;const k=P.getAttributes();for(const Q in k)if(k[Q].location>=0){const ot=v[Q];let G=B[Q];if(G===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(G=A.instanceColor)),ot===void 0||ot.attribute!==G||G&&ot.data!==G.data)return!0;W++}return s.attributesNum!==W||s.index!==U}function g(A,O,P,U){const v={},B=O.attributes;let W=0;const k=P.getAttributes();for(const Q in k)if(k[Q].location>=0){let ot=B[Q];ot===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(ot=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(ot=A.instanceColor));const G={};G.attribute=ot,ot&&ot.data&&(G.data=ot.data),v[Q]=G,W++}s.attributes=v,s.attributesNum=W,s.index=U}function _(){const A=s.newAttributes;for(let O=0,P=A.length;O<P;O++)A[O]=0}function p(A){h(A,0)}function h(A,O){const P=s.newAttributes,U=s.enabledAttributes,v=s.attributeDivisors;P[A]=1,U[A]===0&&(i.enableVertexAttribArray(A),U[A]=1),v[A]!==O&&(i.vertexAttribDivisor(A,O),v[A]=O)}function x(){const A=s.newAttributes,O=s.enabledAttributes;for(let P=0,U=O.length;P<U;P++)O[P]!==A[P]&&(i.disableVertexAttribArray(P),O[P]=0)}function E(A,O,P,U,v,B,W){W===!0?i.vertexAttribIPointer(A,O,P,v,B):i.vertexAttribPointer(A,O,P,U,v,B)}function T(A,O,P,U){_();const v=U.attributes,B=P.getAttributes(),W=O.defaultAttributeValues;for(const k in B){const Q=B[k];if(Q.location>=0){let J=v[k];if(J===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(J=A.instanceColor)),J!==void 0){const ot=J.normalized,G=J.itemSize,X=t.get(J);if(X===void 0)continue;const pt=X.buffer,mt=X.type,ut=X.bytesPerElement,it=mt===i.INT||mt===i.UNSIGNED_INT||J.gpuType===sa;if(J.isInterleavedBufferAttribute){const lt=J.data,dt=lt.stride,At=J.offset;if(lt.isInstancedInterleavedBuffer){for(let St=0;St<Q.locationSize;St++)h(Q.location+St,lt.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let St=0;St<Q.locationSize;St++)p(Q.location+St);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let St=0;St<Q.locationSize;St++)E(Q.location+St,G/Q.locationSize,mt,ot,dt*ut,(At+G/Q.locationSize*St)*ut,it)}else{if(J.isInstancedBufferAttribute){for(let lt=0;lt<Q.locationSize;lt++)h(Q.location+lt,J.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let lt=0;lt<Q.locationSize;lt++)p(Q.location+lt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let lt=0;lt<Q.locationSize;lt++)E(Q.location+lt,G/Q.locationSize,mt,ot,G*ut,G/Q.locationSize*lt*ut,it)}}else if(W!==void 0){const ot=W[k];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(Q.location,ot);break;case 3:i.vertexAttrib3fv(Q.location,ot);break;case 4:i.vertexAttrib4fv(Q.location,ot);break;default:i.vertexAttrib1fv(Q.location,ot)}}}}x()}function w(){F();for(const A in n){const O=n[A];for(const P in O){const U=O[P];for(const v in U)u(U[v].object),delete U[v];delete O[P]}delete n[A]}}function R(A){if(n[A.id]===void 0)return;const O=n[A.id];for(const P in O){const U=O[P];for(const v in U)u(U[v].object),delete U[v];delete O[P]}delete n[A.id]}function D(A){for(const O in n){const P=n[O];if(P[A.id]===void 0)continue;const U=P[A.id];for(const v in U)u(U[v].object),delete U[v];delete P[A.id]}}function F(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function kd(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function c(l,u,f,m){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],m[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,m,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*m[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function zd(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Ze&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const F=D===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==ze&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==en&&!F)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(zt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:T,maxSamples:w,samples:R}}function Gd(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Rn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const d=f.length!==0||m||n!==0||r;return r=m,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,m){e=u(f,m,0)},this.setState=function(f,m,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const x=s?0:n,E=x*4;let T=h.clippingState||null;c.value=T,T=u(g,m,E,d);for(let w=0;w!==E;++w)T[w]=e[w];h.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,m,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const h=d+_*4,x=m.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,T=d;E!==_;++E,T+=4)o.copy(f[E]).applyMatrix4(x,a),o.normal.toArray(p,T),p[T+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Hd(i){let t=new WeakMap;function e(o,a){return a===xs?o.mapping=Wn:a===vs&&(o.mapping=fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xs||a===vs)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new al(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Pn=4,co=[.125,.215,.35,.446,.526,.582],Gn=20,Vd=256,wi=new va,ho=new Yt;let ns=null,is=0,rs=0,ss=!1;const Wd=new K;class uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Wd}=s;ns=this._renderer.getRenderTarget(),is=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ns,is,rs),this._renderer.xr.enabled=ss,t.scissorTest=!1,oi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wn||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ns=this._renderer.getRenderTarget(),is=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:Sn,format:Ze,colorSpace:mi,depthBuffer:!1},r=fo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fo(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xd(s)),this._blurMaterial=Yd(s,t,e),this._ggxMaterial=jd(s,t,e)}return r}_compileMaterial(t){const e=new Ke(new Ie,t);this._renderer.compile(e,wi)}_sceneToCubeUV(t,e,n,r,s){const c=new We(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,d=f.toneMapping;f.getClearColor(ho),f.toneMapping=rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new Fi,new ma({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let h=!1;const x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,h=!0):(p.color.copy(ho),h=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[E],s.y,s.z)):T===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[E]));const w=this._cubeSize;oi(r,T*w,E>2?w:0,w,w),f.setRenderTarget(r),h&&f.render(_,c),f.render(t,c)}f.toneMapping=d,f.autoClear=m,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Wn||t.mapping===fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=po());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;oi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,wi)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),m=0+l*1.25,d=f*m,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Pn?n-g+Pn:0),h=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,oi(s,p,h,3*_,2*_),r.setRenderTarget(s),r.render(a,wi),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,oi(t,p,h,3*_,2*_),r.setRenderTarget(t),r.render(a,wi)}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const m=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gn-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Gn;p>Gn&&zt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const h=[];let x=0;for(let D=0;D<Gn;++D){const F=D/_,b=Math.exp(-F*F/2);h.push(b),D===0?x+=b:D<p&&(x+=2*b)}for(let D=0;D<h.length;D++)h[D]=h[D]/x;m.envMap.value=t.texture,m.samples.value=p,m.weights.value=h,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:E}=this;m.dTheta.value=g,m.mipInt.value=E-n;const T=this._sizeLods[r],w=3*T*(r>E-Pn?r-E+Pn:0),R=4*(this._cubeSize-T);oi(e,w,R,3*T,2*T),c.setRenderTarget(e),c.render(f,wi)}}function Xd(i){const t=[],e=[],n=[];let r=i;const s=i-Pn+1+co.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Pn?c=co[o-i+Pn-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,f=1+l,m=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,h=1,x=new Float32Array(_*g*d),E=new Float32Array(p*g*d),T=new Float32Array(h*g*d);for(let R=0;R<d;R++){const D=R%3*2/3-1,F=R>2?0:-1,b=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];x.set(b,_*g*R),E.set(m,p*g*R);const A=[R,R,R,R,R,R];T.set(A,h*g*R)}const w=new Ie;w.setAttribute("position",new Ge(x,_)),w.setAttribute("uv",new Ge(E,p)),w.setAttribute("faceIndex",new Ge(T,h)),n.push(new Ke(w,null)),r>Pn&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function fo(i,t,e){const n=new sn(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oi(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function jd(i,t,e){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tr(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Yd(i,t,e){const n=new Float32Array(Gn),r=new K(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function po(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function mo(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Tr(){return`

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
	`}function qd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===xs||c===vs,u=c===Wn||c===fi;if(l||u){let f=t.get(a);const m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new uo(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new uo(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Zd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Li("WebGLRenderer: "+n+" extension not supported."),r}}}function Kd(i,t,e,n){const r={},s=new WeakMap;function o(f){const m=f.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete r[m.id];const d=s.get(m);d&&(t.remove(d),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(f,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function c(f){const m=f.attributes;for(const d in m)t.update(m[d],i.ARRAY_BUFFER)}function l(f){const m=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let E=0,T=x.length;E<T;E+=3){const w=x[E+0],R=x[E+1],D=x[E+2];m.push(w,R,R,D,D,w)}}else if(g!==void 0){const x=g.array;_=g.version;for(let E=0,T=x.length/3-1;E<T;E+=3){const w=E+0,R=E+1,D=E+2;m.push(w,R,R,D,D,w)}}else return;const p=new($o(m)?nl:el)(m,1);p.version=_;const h=s.get(f);h&&t.remove(h),s.set(f,p)}function u(f){const m=s.get(f);if(m){const d=f.index;d!==null&&m.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function $d(i,t,e){let n;function r(m){n=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function c(m,d){i.drawElements(n,d,s,m*o),e.update(d,n,1)}function l(m,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,m*o,g),e.update(d,n,g))}function u(m,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,m,0,g);let p=0;for(let h=0;h<g;h++)p+=d[h];e.update(p,n,1)}function f(m,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<m.length;h++)l(m[h]/o,d[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,m,0,_,0,g);let h=0;for(let x=0;x<g;x++)h+=d[x]*_[x];e.update(h,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Jd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Qd(i,t,e){const n=new WeakMap,r=new fe;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let m=n.get(a);if(m===void 0||m.count!==f){let b=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",b)};m!==void 0&&m.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let T=a.attributes.position.count*E,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*w*4*f),D=new Jo(R,T,w,f);D.type=en,D.needsUpdate=!0;const F=E*4;for(let A=0;A<f;A++){const O=p[A],P=h[A],U=x[A],v=T*w*4*A;for(let B=0;B<O.count;B++){const W=B*F;d===!0&&(r.fromBufferAttribute(O,B),R[v+W+0]=r.x,R[v+W+1]=r.y,R[v+W+2]=r.z,R[v+W+3]=0),g===!0&&(r.fromBufferAttribute(P,B),R[v+W+4]=r.x,R[v+W+5]=r.y,R[v+W+6]=r.z,R[v+W+7]=0),_===!0&&(r.fromBufferAttribute(U,B),R[v+W+8]=r.x,R[v+W+9]=r.y,R[v+W+10]=r.z,R[v+W+11]=U.itemSize===4?r.w:1)}}m={count:f,texture:D,size:new Vt(T,w)},n.set(a,m),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function tf(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==l&&(m.update(),r.set(m,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const ef={[No]:"LINEAR_TONE_MAPPING",[Fo]:"REINHARD_TONE_MAPPING",[Oo]:"CINEON_TONE_MAPPING",[Bo]:"ACES_FILMIC_TONE_MAPPING",[zo]:"AGX_TONE_MAPPING",[Go]:"NEUTRAL_TONE_MAPPING",[ko]:"CUSTOM_TONE_MAPPING"};function nf(i,t,e,n,r){const s=new sn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),o=new sn(t,e,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),a=new Ie;a.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Me([0,2,0,0,2,0],2));const c=new kc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Ke(a,c),u=new va(-1,1,1,-1,0,1);let f=null,m=null,d=!1,g,_=null,p=[],h=!1;this.setSize=function(x,E){s.setSize(x,E),o.setSize(x,E);for(let T=0;T<p.length;T++){const w=p[T];w.setSize&&w.setSize(x,E)}},this.setEffects=function(x){p=x,h=p.length>0&&p[0].isRenderPass===!0;const E=s.width,T=s.height;for(let w=0;w<p.length;w++){const R=p[w];R.setSize&&R.setSize(E,T)}},this.begin=function(x,E){if(d||x.toneMapping===rn&&p.length===0)return!1;if(_=E,E!==null){const T=E.width,w=E.height;(s.width!==T||s.height!==w)&&this.setSize(T,w)}return h===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=rn,!0},this.hasRenderPass=function(){return h},this.end=function(x,E){x.toneMapping=g,d=!0;let T=s,w=o;for(let R=0;R<p.length;R++){const D=p[R];if(D.enabled!==!1&&(D.render(x,w,T,E),D.needsSwap!==!1)){const F=T;T=w,w=F}}if(f!==x.outputColorSpace||m!==x.toneMapping){f=x.outputColorSpace,m=x.toneMapping,c.defines={},$t.getTransfer(f)===ie&&(c.defines.SRGB_TRANSFER="");const R=ef[m];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(_),x.render(l,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const ul=new Ae,ea=new Ii(1,1),dl=new Jo,fl=new pc,pl=new sl,_o=[],go=[],xo=new Float32Array(16),vo=new Float32Array(9),So=new Float32Array(4);function xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=_o[r];if(s===void 0&&(s=new Float32Array(r),_o[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wr(i,t){let e=go[t];e===void 0&&(e=new Int32Array(t),go[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function lf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;So.set(n),i.uniformMatrix2fv(this.addr,!1,So),ge(e,n)}}function cf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;vo.set(n),i.uniformMatrix3fv(this.addr,!1,vo),ge(e,n)}}function hf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;xo.set(n),i.uniformMatrix4fv(this.addr,!1,xo),ge(e,n)}}function uf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function mf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _f(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function vf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ea.compareFunction=e.isReversedDepthBuffer()?da:ua,s=ea):s=ul,e.setTexture2D(t||s,r)}function Sf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||fl,r)}function Mf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||pl,r)}function yf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||dl,r)}function bf(i){switch(i){case 5126:return rf;case 35664:return sf;case 35665:return af;case 35666:return of;case 35674:return lf;case 35675:return cf;case 35676:return hf;case 5124:case 35670:return uf;case 35667:case 35671:return df;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return _f;case 36295:return gf;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return Mf;case 36289:case 36303:case 36311:case 36292:return yf}}function Ef(i,t){i.uniform1fv(this.addr,t)}function Tf(i,t){const e=xi(t,this.size,2);i.uniform2fv(this.addr,e)}function wf(i,t){const e=xi(t,this.size,3);i.uniform3fv(this.addr,e)}function Af(i,t){const e=xi(t,this.size,4);i.uniform4fv(this.addr,e)}function Rf(i,t){const e=xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cf(i,t){const e=xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pf(i,t){const e=xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Df(i,t){i.uniform1iv(this.addr,t)}function Lf(i,t){i.uniform2iv(this.addr,t)}function If(i,t){i.uniform3iv(this.addr,t)}function Uf(i,t){i.uniform4iv(this.addr,t)}function Nf(i,t){i.uniform1uiv(this.addr,t)}function Ff(i,t){i.uniform2uiv(this.addr,t)}function Of(i,t){i.uniform3uiv(this.addr,t)}function Bf(i,t){i.uniform4uiv(this.addr,t)}function kf(i,t,e){const n=this.cache,r=t.length,s=wr(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=ea:o=ul;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function zf(i,t,e){const n=this.cache,r=t.length,s=wr(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||fl,s[o])}function Gf(i,t,e){const n=this.cache,r=t.length,s=wr(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||pl,s[o])}function Hf(i,t,e){const n=this.cache,r=t.length,s=wr(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||dl,s[o])}function Vf(i){switch(i){case 5126:return Ef;case 35664:return Tf;case 35665:return wf;case 35666:return Af;case 35674:return Rf;case 35675:return Cf;case 35676:return Pf;case 5124:case 35670:return Df;case 35667:case 35671:return Lf;case 35668:case 35672:return If;case 35669:case 35673:return Uf;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return Hf}}class Wf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bf(e.type)}}class Xf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vf(e.type)}}class jf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const as=/(\w+)(\])?(\[|\.)?/g;function Mo(i,t){i.seq.push(t),i.map[t.id]=t}function Yf(i,t,e){const n=i.name,r=n.length;for(as.lastIndex=0;;){const s=as.exec(n),o=as.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Mo(e,l===void 0?new Wf(a,i,t):new Xf(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new jf(a),Mo(e,f)),e=f}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Yf(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function yo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const qf=37297;let Zf=0;function Kf(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const bo=new Xt;function $f(i){$t._getMatrix(bo,$t.workingColorSpace,i);const t=`mat3( ${bo.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case xr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Eo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Kf(i.getShaderSource(t),a)}else return s}function Jf(i,t){const e=$f(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Qf={[No]:"Linear",[Fo]:"Reinhard",[Oo]:"Cineon",[Bo]:"ACESFilmic",[zo]:"AgX",[Go]:"Neutral",[ko]:"Custom"};function tp(i,t){const e=Qf[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lr=new K;function ep(){$t.getLuminanceCoefficients(lr);const i=lr.x.toFixed(4),t=lr.y.toFixed(4),e=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function np(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ci).join(`
`)}function ip(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ci(i){return i!==""}function To(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sp=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(i){return i.replace(sp,op)}const ap=new Map;function op(i,t){let e=jt[t];if(e===void 0){const n=ap.get(t);if(n!==void 0)e=jt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return na(e)}const lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(i){return i.replace(lp,cp)}function cp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ro(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const hp={[ur]:"SHADOWMAP_TYPE_PCF",[Ri]:"SHADOWMAP_TYPE_VSM"};function up(i){return hp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dp={[Wn]:"ENVMAP_TYPE_CUBE",[fi]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function fp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":dp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const pp={[fi]:"ENVMAP_MODE_REFRACTION"};function mp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":pp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _p={[ra]:"ENVMAP_BLENDING_MULTIPLY",[ql]:"ENVMAP_BLENDING_MIX",[Zl]:"ENVMAP_BLENDING_ADD"};function gp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_p[i.combine]||"ENVMAP_BLENDING_NONE"}function xp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vp(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=up(e),l=fp(e),u=mp(e),f=gp(e),m=xp(e),d=np(e),g=ip(s),_=r.createProgram();let p,h,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ci).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ci).join(`
`),h.length>0&&(h+=`
`)):(p=[Ro(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),h=[Ro(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rn?"#define TONE_MAPPING":"",e.toneMapping!==rn?jt.tonemapping_pars_fragment:"",e.toneMapping!==rn?tp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Jf("linearToOutputTexel",e.outputColorSpace),ep(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ci).join(`
`)),o=na(o),o=To(o,e),o=wo(o,e),a=na(a),a=To(a,e),a=wo(a,e),o=Ao(o),a=Ao(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Na?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=x+p+o,T=x+h+a,w=yo(r,r.VERTEX_SHADER,E),R=yo(r,r.FRAGMENT_SHADER,T);r.attachShader(_,w),r.attachShader(_,R),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(O){if(i.debug.checkShaderErrors){const P=r.getProgramInfoLog(_)||"",U=r.getShaderInfoLog(w)||"",v=r.getShaderInfoLog(R)||"",B=P.trim(),W=U.trim(),k=v.trim();let Q=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,w,R);else{const ot=Eo(r,w,"vertex"),G=Eo(r,R,"fragment");Qt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+B+`
`+ot+`
`+G)}else B!==""?zt("WebGLProgram: Program Info Log:",B):(W===""||k==="")&&(J=!1);J&&(O.diagnostics={runnable:Q,programLog:B,vertexShader:{log:W,prefix:p},fragmentShader:{log:k,prefix:h}})}r.deleteShader(w),r.deleteShader(R),F=new gr(r,_),b=rp(r,_)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(_,qf)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let Sp=0;class Mp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yp(t),e.set(t,n)),n}}class yp{constructor(t){this.id=Sp++,this.code=t,this.usedTimes=0}}function bp(i,t,e,n,r,s,o){const a=new Qo,c=new Mp,l=new Set,u=[],f=new Map,m=r.logarithmicDepthBuffer;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,A,O,P,U){const v=P.fog,B=U.geometry,W=b.isMeshStandardMaterial?P.environment:null,k=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),Q=k&&k.mapping===br?k.image.height:null,J=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&zt("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ot=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,G=ot!==void 0?ot.length:0;let X=0;B.morphAttributes.position!==void 0&&(X=1),B.morphAttributes.normal!==void 0&&(X=2),B.morphAttributes.color!==void 0&&(X=3);let pt,mt,ut,it;if(J){const ee=Qe[J];pt=ee.vertexShader,mt=ee.fragmentShader}else pt=b.vertexShader,mt=b.fragmentShader,c.update(b),ut=c.getVertexShaderID(b),it=c.getFragmentShaderID(b);const lt=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),At=U.isInstancedMesh===!0,St=U.isBatchedMesh===!0,Nt=!!b.map,te=!!b.matcap,Gt=!!k,M=!!b.aoMap,et=!!b.lightMap,Y=!!b.bumpMap,N=!!b.normalMap,S=!!b.displacementMap,H=!!b.emissiveMap,rt=!!b.metalnessMap,at=!!b.roughnessMap,z=b.anisotropy>0,C=b.clearcoat>0,y=b.dispersion>0,I=b.iridescence>0,q=b.sheen>0,st=b.transmission>0,Z=z&&!!b.anisotropyMap,Rt=C&&!!b.clearcoatMap,gt=C&&!!b.clearcoatNormalMap,Ct=C&&!!b.clearcoatRoughnessMap,Ft=I&&!!b.iridescenceMap,ct=I&&!!b.iridescenceThicknessMap,xt=q&&!!b.sheenColorMap,Dt=q&&!!b.sheenRoughnessMap,Pt=!!b.specularMap,vt=!!b.specularColorMap,Wt=!!b.specularIntensityMap,V=st&&!!b.transmissionMap,Et=st&&!!b.thicknessMap,_t=!!b.gradientMap,Tt=!!b.alphaMap,ft=b.alphaTest>0,ht=!!b.alphaHash,Mt=!!b.extensions;let Ht=rn;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ht=i.toneMapping);const oe={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:pt,fragmentShader:mt,defines:b.defines,customVertexShaderID:ut,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:St,batchingColor:St&&U._colorsTexture!==null,instancing:At,instancingColor:At&&U.instanceColor!==null,instancingMorph:At&&U.morphTexture!==null,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:mi,alphaToCoverage:!!b.alphaToCoverage,map:Nt,matcap:te,envMap:Gt,envMapMode:Gt&&k.mapping,envMapCubeUVHeight:Q,aoMap:M,lightMap:et,bumpMap:Y,normalMap:N,displacementMap:S,emissiveMap:H,normalMapObjectSpace:N&&b.normalMapType===Jl,normalMapTangentSpace:N&&b.normalMapType===Ko,metalnessMap:rt,roughnessMap:at,anisotropy:z,anisotropyMap:Z,clearcoat:C,clearcoatMap:Rt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ct,dispersion:y,iridescence:I,iridescenceMap:Ft,iridescenceThicknessMap:ct,sheen:q,sheenColorMap:xt,sheenRoughnessMap:Dt,specularMap:Pt,specularColorMap:vt,specularIntensityMap:Wt,transmission:st,transmissionMap:V,thicknessMap:Et,gradientMap:_t,opaque:b.transparent===!1&&b.blending===hi&&b.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ft,alphaHash:ht,combine:b.combine,mapUv:Nt&&_(b.map.channel),aoMapUv:M&&_(b.aoMap.channel),lightMapUv:et&&_(b.lightMap.channel),bumpMapUv:Y&&_(b.bumpMap.channel),normalMapUv:N&&_(b.normalMap.channel),displacementMapUv:S&&_(b.displacementMap.channel),emissiveMapUv:H&&_(b.emissiveMap.channel),metalnessMapUv:rt&&_(b.metalnessMap.channel),roughnessMapUv:at&&_(b.roughnessMap.channel),anisotropyMapUv:Z&&_(b.anisotropyMap.channel),clearcoatMapUv:Rt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:gt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(b.sheenRoughnessMap.channel),specularMapUv:Pt&&_(b.specularMap.channel),specularColorMapUv:vt&&_(b.specularColorMap.channel),specularIntensityMapUv:Wt&&_(b.specularIntensityMap.channel),transmissionMapUv:V&&_(b.transmissionMap.channel),thicknessMapUv:Et&&_(b.thicknessMap.channel),alphaMapUv:Tt&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(N||z),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(Nt||Tt),fog:!!v,useFog:b.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:dt,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:X,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Nt&&b.map.isVideoTexture===!0&&$t.getTransfer(b.map.colorSpace)===ie,decodeVideoTextureEmissive:H&&b.emissiveMap.isVideoTexture===!0&&$t.getTransfer(b.emissiveMap.colorSpace)===ie,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tn,flipSided:b.side===Le,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Mt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&b.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function h(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)A.push(O),A.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(x(A,b),E(A,b),A.push(i.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function x(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function E(b,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),b.push(a.mask)}function T(b){const A=g[b.type];let O;if(A){const P=Qe[A];O=Ac.clone(P.uniforms)}else O=b.uniforms;return O}function w(b,A){let O=f.get(A);return O!==void 0?++O.usedTimes:(O=new vp(i,A,b,s),u.push(O),f.set(A,O)),O}function R(b){if(--b.usedTimes===0){const A=u.indexOf(b);u[A]=u[u.length-1],u.pop(),f.delete(b.cacheKey),b.destroy()}}function D(b){c.remove(b)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:w,releaseProgram:R,releaseShaderCache:D,programs:u,dispose:F}}function Ep(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Tp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Co(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Po(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,m,d,g,_,p){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:m,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[t]=h):(h.id=f.id,h.object=f,h.geometry=m,h.material=d,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=p),t++,h}function a(f,m,d,g,_,p){const h=o(f,m,d,g,_,p);d.transmission>0?n.push(h):d.transparent===!0?r.push(h):e.push(h)}function c(f,m,d,g,_,p){const h=o(f,m,d,g,_,p);d.transmission>0?n.unshift(h):d.transparent===!0?r.unshift(h):e.unshift(h)}function l(f,m){e.length>1&&e.sort(f||Tp),n.length>1&&n.sort(m||Co),r.length>1&&r.sort(m||Co)}function u(){for(let f=t,m=i.length;f<m;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function wp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Po,i.set(n,[o])):r>=s.length?(o=new Po,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ap(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new Yt};break;case"SpotLight":e={position:new K,direction:new K,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new K,halfWidth:new K,halfHeight:new K};break}return i[t.id]=e,e}}}function Rp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cp=0;function Pp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dp(i){const t=new Ap,e=Rp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new K);const r=new K,s=new he,o=new he;function a(l){let u=0,f=0,m=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,p=0,h=0,x=0,E=0,T=0,w=0,R=0,D=0;l.sort(Pp);for(let b=0,A=l.length;b<A;b++){const O=l[b],P=O.color,U=O.intensity,v=O.distance;let B=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===pi?B=O.shadow.map.texture:B=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=P.r*U,f+=P.g*U,m+=P.b*U;else if(O.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(O.sh.coefficients[W],U);D++}else if(O.isDirectionalLight){const W=t.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const k=O.shadow,Q=e.get(O);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.directionalShadow[d]=Q,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=O.shadow.matrix,x++}n.directional[d]=W,d++}else if(O.isSpotLight){const W=t.get(O);W.position.setFromMatrixPosition(O.matrixWorld),W.color.copy(P).multiplyScalar(U),W.distance=v,W.coneCos=Math.cos(O.angle),W.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),W.decay=O.decay,n.spot[_]=W;const k=O.shadow;if(O.map&&(n.spotLightMap[w]=O.map,w++,k.updateMatrices(O),O.castShadow&&R++),n.spotLightMatrix[_]=k.matrix,O.castShadow){const Q=e.get(O);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=B,T++}_++}else if(O.isRectAreaLight){const W=t.get(O);W.color.copy(P).multiplyScalar(U),W.halfWidth.set(O.width*.5,0,0),W.halfHeight.set(0,O.height*.5,0),n.rectArea[p]=W,p++}else if(O.isPointLight){const W=t.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),W.distance=O.distance,W.decay=O.decay,O.castShadow){const k=O.shadow,Q=e.get(O);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,Q.shadowCameraNear=k.camera.near,Q.shadowCameraFar=k.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=O.shadow.matrix,E++}n.point[g]=W,g++}else if(O.isHemisphereLight){const W=t.get(O);W.skyColor.copy(O.color).multiplyScalar(U),W.groundColor.copy(O.groundColor).multiplyScalar(U),n.hemi[h]=W,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=m;const F=n.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==p||F.hemiLength!==h||F.numDirectionalShadows!==x||F.numPointShadows!==E||F.numSpotShadows!==T||F.numSpotMaps!==w||F.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=T+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=D,F.directionalLength=d,F.pointLength=g,F.spotLength=_,F.rectAreaLength=p,F.hemiLength=h,F.numDirectionalShadows=x,F.numPointShadows=E,F.numSpotShadows=T,F.numSpotMaps=w,F.numLightProbes=D,n.version=Cp++)}function c(l,u){let f=0,m=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let h=0,x=l.length;h<x;h++){const E=l[h];if(E.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(E.isSpotLight){const T=n.spot[d];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),d++}else if(E.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(p),m++}else if(E.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Do(i){const t=new Dp(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Lp(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Do(i),t.set(r,[a])):s>=o.length?(a=new Do(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ip=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Up=`uniform sampler2D shadow_pass;
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
}`,Np=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Fp=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Lo=new he,Ai=new K,os=new K;function Op(i,t,e){let n=new _a;const r=new Vt,s=new Vt,o=new fe,a=new Gc,c=new Hc,l={},u=e.maxTextureSize,f={[Dn]:Le,[Le]:Dn,[tn]:tn},m=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Ip,fragmentShader:Up}),d=m.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ke(g,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let h=this.type;this.render=function(R,D,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;R.type===Cl&&(zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=ur);const b=i.getRenderTarget(),A=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),P=i.state;P.setBlending(xn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=h!==this.type;U&&D.traverse(function(v){v.material&&(Array.isArray(v.material)?v.material.forEach(B=>B.needsUpdate=!0):v.material.needsUpdate=!0)});for(let v=0,B=R.length;v<B;v++){const W=R[v],k=W.shadow;if(k===void 0){zt("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Q=k.getFrameExtents();if(r.multiply(Q),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,k.mapSize.y=s.y)),k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ri){if(W.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new sn(r.x,r.y,{format:pi,type:Sn,minFilter:Ee,magFilter:Ee,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new Ii(r.x,r.y,en),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=Mn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Se,k.map.depthTexture.magFilter=Se}else{W.isPointLight?(k.map=new al(r.x),k.map.depthTexture=new Bc(r.x,an)):(k.map=new sn(r.x,r.y),k.map.depthTexture=new Ii(r.x,r.y,an)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=Mn;const ot=i.state.buffers.depth.getReversed();this.type===ur?(k.map.depthTexture.compareFunction=ot?da:ua,k.map.depthTexture.minFilter=Ee,k.map.depthTexture.magFilter=Ee):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Se,k.map.depthTexture.magFilter=Se)}k.camera.updateProjectionMatrix()}const J=k.map.isWebGLCubeRenderTarget?6:1;for(let ot=0;ot<J;ot++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(k.map),i.clear());const G=k.getViewport(ot);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),P.viewport(o)}if(W.isPointLight){const G=k.camera,X=k.matrix,pt=W.distance||G.far;pt!==G.far&&(G.far=pt,G.updateProjectionMatrix()),Ai.setFromMatrixPosition(W.matrixWorld),G.position.copy(Ai),os.copy(G.position),os.add(Np[ot]),G.up.copy(Fp[ot]),G.lookAt(os),G.updateMatrixWorld(),X.makeTranslation(-Ai.x,-Ai.y,-Ai.z),Lo.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Lo,G.coordinateSystem,G.reversedDepth)}else k.updateMatrices(W);n=k.getFrustum(),T(D,F,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Ri&&x(k,F),k.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(b,A,O)};function x(R,D){const F=t.update(_);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new sn(r.x,r.y,{format:pi,type:Sn})),m.uniforms.shadow_pass.value=R.map.depthTexture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(D,null,F,m,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(D,null,F,d,_,null)}function E(R,D,F,b){let A=null;const O=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)A=O;else if(A=F.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const P=A.uuid,U=D.uuid;let v=l[P];v===void 0&&(v={},l[P]=v);let B=v[U];B===void 0&&(B=A.clone(),v[U]=B,D.addEventListener("dispose",w)),A=B}if(A.visible=D.visible,A.wireframe=D.wireframe,b===Ri?A.side=D.shadowSide!==null?D.shadowSide:D.side:A.side=D.shadowSide!==null?D.shadowSide:f[D.side],A.alphaMap=D.alphaMap,A.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,A.map=D.map,A.clipShadows=D.clipShadows,A.clippingPlanes=D.clippingPlanes,A.clipIntersection=D.clipIntersection,A.displacementMap=D.displacementMap,A.displacementScale=D.displacementScale,A.displacementBias=D.displacementBias,A.wireframeLinewidth=D.wireframeLinewidth,A.linewidth=D.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const P=i.properties.get(A);P.light=F}return A}function T(R,D,F,b,A){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===Ri)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const U=t.update(R),v=R.material;if(Array.isArray(v)){const B=U.groups;for(let W=0,k=B.length;W<k;W++){const Q=B[W],J=v[Q.materialIndex];if(J&&J.visible){const ot=E(R,J,b,A);R.onBeforeShadow(i,R,D,F,U,ot,Q),i.renderBufferDirect(F,null,U,ot,R,Q),R.onAfterShadow(i,R,D,F,U,ot,Q)}}}else if(v.visible){const B=E(R,v,b,A);R.onBeforeShadow(i,R,D,F,U,B,null),i.renderBufferDirect(F,null,U,B,R,null),R.onAfterShadow(i,R,D,F,U,B,null)}}const P=R.children;for(let U=0,v=P.length;U<v;U++)T(P[U],D,F,b,A)}function w(R){R.target.removeEventListener("dispose",w);for(const F in l){const b=l[F],A=R.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const Bp={[us]:ds,[fs]:_s,[ps]:gs,[di]:ms,[ds]:us,[_s]:fs,[gs]:ps,[ms]:di};function kp(i,t){function e(){let V=!1;const Et=new fe;let _t=null;const Tt=new fe(0,0,0,0);return{setMask:function(ft){_t!==ft&&!V&&(i.colorMask(ft,ft,ft,ft),_t=ft)},setLocked:function(ft){V=ft},setClear:function(ft,ht,Mt,Ht,oe){oe===!0&&(ft*=Ht,ht*=Ht,Mt*=Ht),Et.set(ft,ht,Mt,Ht),Tt.equals(Et)===!1&&(i.clearColor(ft,ht,Mt,Ht),Tt.copy(Et))},reset:function(){V=!1,_t=null,Tt.set(-1,0,0,0)}}}function n(){let V=!1,Et=!1,_t=null,Tt=null,ft=null;return{setReversed:function(ht){if(Et!==ht){const Mt=t.get("EXT_clip_control");ht?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),Et=ht;const Ht=ft;ft=null,this.setClear(Ht)}},getReversed:function(){return Et},setTest:function(ht){ht?lt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(ht){_t!==ht&&!V&&(i.depthMask(ht),_t=ht)},setFunc:function(ht){if(Et&&(ht=Bp[ht]),Tt!==ht){switch(ht){case us:i.depthFunc(i.NEVER);break;case ds:i.depthFunc(i.ALWAYS);break;case fs:i.depthFunc(i.LESS);break;case di:i.depthFunc(i.LEQUAL);break;case ps:i.depthFunc(i.EQUAL);break;case ms:i.depthFunc(i.GEQUAL);break;case _s:i.depthFunc(i.GREATER);break;case gs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=ht}},setLocked:function(ht){V=ht},setClear:function(ht){ft!==ht&&(Et&&(ht=1-ht),i.clearDepth(ht),ft=ht)},reset:function(){V=!1,_t=null,Tt=null,ft=null,Et=!1}}}function r(){let V=!1,Et=null,_t=null,Tt=null,ft=null,ht=null,Mt=null,Ht=null,oe=null;return{setTest:function(ee){V||(ee?lt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(ee){Et!==ee&&!V&&(i.stencilMask(ee),Et=ee)},setFunc:function(ee,$e,cn){(_t!==ee||Tt!==$e||ft!==cn)&&(i.stencilFunc(ee,$e,cn),_t=ee,Tt=$e,ft=cn)},setOp:function(ee,$e,cn){(ht!==ee||Mt!==$e||Ht!==cn)&&(i.stencilOp(ee,$e,cn),ht=ee,Mt=$e,Ht=cn)},setLocked:function(ee){V=ee},setClear:function(ee){oe!==ee&&(i.clearStencil(ee),oe=ee)},reset:function(){V=!1,Et=null,_t=null,Tt=null,ft=null,ht=null,Mt=null,Ht=null,oe=null}}}const s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},m=new WeakMap,d=[],g=null,_=!1,p=null,h=null,x=null,E=null,T=null,w=null,R=null,D=new Yt(0,0,0),F=0,b=!1,A=null,O=null,P=null,U=null,v=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=k>=1):Q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=k>=2);let J=null,ot={};const G=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),pt=new fe().fromArray(G),mt=new fe().fromArray(X);function ut(V,Et,_t,Tt){const ft=new Uint8Array(4),ht=i.createTexture();i.bindTexture(V,ht),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<_t;Mt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(Et+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ht}const it={};it[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(di),Y(!1),N(Ca),lt(i.CULL_FACE),M(xn);function lt(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function dt(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function At(V,Et){return f[V]!==Et?(i.bindFramebuffer(V,Et),f[V]=Et,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Et),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function St(V,Et){let _t=d,Tt=!1;if(V){_t=m.get(Et),_t===void 0&&(_t=[],m.set(Et,_t));const ft=V.textures;if(_t.length!==ft.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Mt=ft.length;ht<Mt;ht++)_t[ht]=i.COLOR_ATTACHMENT0+ht;_t.length=ft.length,Tt=!0}}else _t[0]!==i.BACK&&(_t[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(_t)}function Nt(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const te={[zn]:i.FUNC_ADD,[Dl]:i.FUNC_SUBTRACT,[Ll]:i.FUNC_REVERSE_SUBTRACT};te[Il]=i.MIN,te[Ul]=i.MAX;const Gt={[Nl]:i.ZERO,[Fl]:i.ONE,[Ol]:i.SRC_COLOR,[cs]:i.SRC_ALPHA,[Vl]:i.SRC_ALPHA_SATURATE,[Gl]:i.DST_COLOR,[kl]:i.DST_ALPHA,[Bl]:i.ONE_MINUS_SRC_COLOR,[hs]:i.ONE_MINUS_SRC_ALPHA,[Hl]:i.ONE_MINUS_DST_COLOR,[zl]:i.ONE_MINUS_DST_ALPHA,[Wl]:i.CONSTANT_COLOR,[Xl]:i.ONE_MINUS_CONSTANT_COLOR,[jl]:i.CONSTANT_ALPHA,[Yl]:i.ONE_MINUS_CONSTANT_ALPHA};function M(V,Et,_t,Tt,ft,ht,Mt,Ht,oe,ee){if(V===xn){_===!0&&(dt(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),V!==Pl){if(V!==p||ee!==b){if((h!==zn||T!==zn)&&(i.blendEquation(i.FUNC_ADD),h=zn,T=zn),ee)switch(V){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFunc(i.ONE,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case La:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",V);break}else switch(V){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Da:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case La:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",V);break}x=null,E=null,w=null,R=null,D.set(0,0,0),F=0,p=V,b=ee}return}ft=ft||Et,ht=ht||_t,Mt=Mt||Tt,(Et!==h||ft!==T)&&(i.blendEquationSeparate(te[Et],te[ft]),h=Et,T=ft),(_t!==x||Tt!==E||ht!==w||Mt!==R)&&(i.blendFuncSeparate(Gt[_t],Gt[Tt],Gt[ht],Gt[Mt]),x=_t,E=Tt,w=ht,R=Mt),(Ht.equals(D)===!1||oe!==F)&&(i.blendColor(Ht.r,Ht.g,Ht.b,oe),D.copy(Ht),F=oe),p=V,b=!1}function et(V,Et){V.side===tn?dt(i.CULL_FACE):lt(i.CULL_FACE);let _t=V.side===Le;Et&&(_t=!_t),Y(_t),V.blending===hi&&V.transparent===!1?M(xn):M(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const Tt=V.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),H(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(V){A!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),A=V)}function N(V){V!==Al?(lt(i.CULL_FACE),V!==O&&(V===Ca?i.cullFace(i.BACK):V===Rl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),O=V}function S(V){V!==P&&(W&&i.lineWidth(V),P=V)}function H(V,Et,_t){V?(lt(i.POLYGON_OFFSET_FILL),(U!==Et||v!==_t)&&(i.polygonOffset(Et,_t),U=Et,v=_t)):dt(i.POLYGON_OFFSET_FILL)}function rt(V){V?lt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function at(V){V===void 0&&(V=i.TEXTURE0+B-1),J!==V&&(i.activeTexture(V),J=V)}function z(V,Et,_t){_t===void 0&&(J===null?_t=i.TEXTURE0+B-1:_t=J);let Tt=ot[_t];Tt===void 0&&(Tt={type:void 0,texture:void 0},ot[_t]=Tt),(Tt.type!==V||Tt.texture!==Et)&&(J!==_t&&(i.activeTexture(_t),J=_t),i.bindTexture(V,Et||it[V]),Tt.type=V,Tt.texture=Et)}function C(){const V=ot[J];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function q(){try{i.texSubImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function st(){try{i.texSubImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function gt(){try{i.texStorage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function Ct(){try{i.texStorage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function Ft(){try{i.texImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function ct(){try{i.texImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function xt(V){pt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),pt.copy(V))}function Dt(V){mt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),mt.copy(V))}function Pt(V,Et){let _t=l.get(Et);_t===void 0&&(_t=new WeakMap,l.set(Et,_t));let Tt=_t.get(V);Tt===void 0&&(Tt=i.getUniformBlockIndex(Et,V.name),_t.set(V,Tt))}function vt(V,Et){const Tt=l.get(Et).get(V);c.get(Et)!==Tt&&(i.uniformBlockBinding(Et,Tt,V.__bindingPointIndex),c.set(Et,Tt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},J=null,ot={},f={},m=new WeakMap,d=[],g=null,_=!1,p=null,h=null,x=null,E=null,T=null,w=null,R=null,D=new Yt(0,0,0),F=0,b=!1,A=null,O=null,P=null,U=null,v=null,pt.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:lt,disable:dt,bindFramebuffer:At,drawBuffers:St,useProgram:Nt,setBlending:M,setMaterial:et,setFlipSided:Y,setCullFace:N,setLineWidth:S,setPolygonOffset:H,setScissorTest:rt,activeTexture:at,bindTexture:z,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:I,texImage2D:Ft,texImage3D:ct,updateUBOMapping:Pt,uniformBlockBinding:vt,texStorage2D:gt,texStorage3D:Ct,texSubImage2D:q,texSubImage3D:st,compressedTexSubImage2D:Z,compressedTexSubImage3D:Rt,scissor:xt,viewport:Dt,reset:Wt}}function zp(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vt,u=new WeakMap;let f;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return d?new OffscreenCanvas(C,y):Sr("canvas")}function _(C,y,I){let q=1;const st=z(C);if((st.width>I||st.height>I)&&(q=I/Math.max(st.width,st.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(q*st.width),Rt=Math.floor(q*st.height);f===void 0&&(f=g(Z,Rt));const gt=y?g(Z,Rt):f;return gt.width=Z,gt.height=Rt,gt.getContext("2d").drawImage(C,0,0,Z,Rt),zt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Z+"x"+Rt+")."),gt}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),C;return C}function p(C){return C.generateMipmaps}function h(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,y,I,q,st=!1){if(C!==null){if(i[C]!==void 0)return i[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=y;if(y===i.RED&&(I===i.FLOAT&&(Z=i.R32F),I===i.HALF_FLOAT&&(Z=i.R16F),I===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(Z=i.R8UI),I===i.UNSIGNED_SHORT&&(Z=i.R16UI),I===i.UNSIGNED_INT&&(Z=i.R32UI),I===i.BYTE&&(Z=i.R8I),I===i.SHORT&&(Z=i.R16I),I===i.INT&&(Z=i.R32I)),y===i.RG&&(I===i.FLOAT&&(Z=i.RG32F),I===i.HALF_FLOAT&&(Z=i.RG16F),I===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(Z=i.RG8UI),I===i.UNSIGNED_SHORT&&(Z=i.RG16UI),I===i.UNSIGNED_INT&&(Z=i.RG32UI),I===i.BYTE&&(Z=i.RG8I),I===i.SHORT&&(Z=i.RG16I),I===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),I===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),I===i.UNSIGNED_INT&&(Z=i.RGB32UI),I===i.BYTE&&(Z=i.RGB8I),I===i.SHORT&&(Z=i.RGB16I),I===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),I===i.UNSIGNED_INT&&(Z=i.RGBA32UI),I===i.BYTE&&(Z=i.RGBA8I),I===i.SHORT&&(Z=i.RGBA16I),I===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),y===i.RGBA){const Rt=st?xr:$t.getTransfer(q);I===i.FLOAT&&(Z=i.RGBA32F),I===i.HALF_FLOAT&&(Z=i.RGBA16F),I===i.UNSIGNED_BYTE&&(Z=Rt===ie?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function T(C,y){let I;return C?y===null||y===an||y===Di?I=i.DEPTH24_STENCIL8:y===en?I=i.DEPTH32F_STENCIL8:y===Pi&&(I=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===an||y===Di?I=i.DEPTH_COMPONENT24:y===en?I=i.DEPTH_COMPONENT32F:y===Pi&&(I=i.DEPTH_COMPONENT16),I}function w(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Se&&C.minFilter!==Ee?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){const y=C.target;y.removeEventListener("dispose",R),F(y),y.isVideoTexture&&u.delete(y)}function D(C){const y=C.target;y.removeEventListener("dispose",D),A(y)}function F(C){const y=n.get(C);if(y.__webglInit===void 0)return;const I=C.source,q=m.get(I);if(q){const st=q[y.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(C),Object.keys(q).length===0&&m.delete(I)}n.remove(C)}function b(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const I=C.source,q=m.get(I);delete q[y.__cacheKey],o.memory.textures--}function A(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let st=0;st<y.__webglFramebuffer[q].length;st++)i.deleteFramebuffer(y.__webglFramebuffer[q][st]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const I=C.textures;for(let q=0,st=I.length;q<st;q++){const Z=n.get(I[q]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(I[q])}n.remove(C)}let O=0;function P(){O=0}function U(){const C=O;return C>=r.maxTextures&&zt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),O+=1,C}function v(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function B(C,y){const I=n.get(C);if(C.isVideoTexture&&rt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){const q=C.image;if(q===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(I,C,y);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+y)}function W(C,y){const I=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){it(I,C,y);return}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+y)}function k(C,y){const I=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){it(I,C,y);return}e.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+y)}function Q(C,y){const I=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&I.__version!==C.version){lt(I,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+y)}const J={[Ss]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[Ms]:i.MIRRORED_REPEAT},ot={[Se]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[zi]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},G={[Ql]:i.NEVER,[rc]:i.ALWAYS,[tc]:i.LESS,[ua]:i.LEQUAL,[ec]:i.EQUAL,[da]:i.GEQUAL,[nc]:i.GREATER,[ic]:i.NOTEQUAL};function X(C,y){if(y.type===en&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ee||y.magFilter===Pr||y.magFilter===zi||y.magFilter===Hn||y.minFilter===Ee||y.minFilter===Pr||y.minFilter===zi||y.minFilter===Hn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,J[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,J[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,J[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ot[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ot[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,G[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Se||y.minFilter!==zi&&y.minFilter!==Hn||y.type===en&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function pt(C,y){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));const q=y.source;let st=m.get(q);st===void 0&&(st={},m.set(q,st));const Z=v(y);if(Z!==C.__cacheKey){st[Z]===void 0&&(st[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),st[Z].usedTimes++;const Rt=st[C.__cacheKey];Rt!==void 0&&(st[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&b(y)),C.__cacheKey=Z,C.__webglTexture=st[Z].texture}return I}function mt(C,y,I){return Math.floor(Math.floor(C/I)/y)}function ut(C,y,I,q){const Z=C.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,I,q,y.data);else{Z.sort((ct,xt)=>ct.start-xt.start);let Rt=0;for(let ct=1;ct<Z.length;ct++){const xt=Z[Rt],Dt=Z[ct],Pt=xt.start+xt.count,vt=mt(Dt.start,y.width,4),Wt=mt(xt.start,y.width,4);Dt.start<=Pt+1&&vt===Wt&&mt(Dt.start+Dt.count-1,y.width,4)===vt?xt.count=Math.max(xt.count,Dt.start+Dt.count-xt.start):(++Rt,Z[Rt]=Dt)}Z.length=Rt+1;const gt=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),Ft=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ct=0,xt=Z.length;ct<xt;ct++){const Dt=Z[ct],Pt=Math.floor(Dt.start/4),vt=Math.ceil(Dt.count/4),Wt=Pt%y.width,V=Math.floor(Pt/y.width),Et=vt,_t=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,Wt,V,Et,_t,I,q,y.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,gt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function it(C,y,I){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);const st=pt(C,y),Z=y.source;e.bindTexture(q,C.__webglTexture,i.TEXTURE0+I);const Rt=n.get(Z);if(Z.version!==Rt.__version||st===!0){e.activeTexture(i.TEXTURE0+I);const gt=$t.getPrimaries($t.workingColorSpace),Ct=y.colorSpace===Cn?null:$t.getPrimaries(y.colorSpace),Ft=y.colorSpace===Cn||gt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let ct=_(y.image,!1,r.maxTextureSize);ct=at(y,ct);const xt=s.convert(y.format,y.colorSpace),Dt=s.convert(y.type);let Pt=E(y.internalFormat,xt,Dt,y.colorSpace,y.isVideoTexture);X(q,y);let vt;const Wt=y.mipmaps,V=y.isVideoTexture!==!0,Et=Rt.__version===void 0||st===!0,_t=Z.dataReady,Tt=w(y,ct);if(y.isDepthTexture)Pt=T(y.format===Vn,y.type),Et&&(V?e.texStorage2D(i.TEXTURE_2D,1,Pt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ct.width,ct.height,0,xt,Dt,null));else if(y.isDataTexture)if(Wt.length>0){V&&Et&&e.texStorage2D(i.TEXTURE_2D,Tt,Pt,Wt[0].width,Wt[0].height);for(let ft=0,ht=Wt.length;ft<ht;ft++)vt=Wt[ft],V?_t&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,vt.width,vt.height,xt,Dt,vt.data):e.texImage2D(i.TEXTURE_2D,ft,Pt,vt.width,vt.height,0,xt,Dt,vt.data);y.generateMipmaps=!1}else V?(Et&&e.texStorage2D(i.TEXTURE_2D,Tt,Pt,ct.width,ct.height),_t&&ut(y,ct,xt,Dt)):e.texImage2D(i.TEXTURE_2D,0,Pt,ct.width,ct.height,0,xt,Dt,ct.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){V&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Pt,Wt[0].width,Wt[0].height,ct.depth);for(let ft=0,ht=Wt.length;ft<ht;ft++)if(vt=Wt[ft],y.format!==Ze)if(xt!==null)if(V){if(_t)if(y.layerUpdates.size>0){const Mt=lo(vt.width,vt.height,y.format,y.type);for(const Ht of y.layerUpdates){const oe=vt.data.subarray(Ht*Mt/vt.data.BYTES_PER_ELEMENT,(Ht+1)*Mt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Ht,vt.width,vt.height,1,xt,oe)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,vt.width,vt.height,ct.depth,xt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Pt,vt.width,vt.height,ct.depth,0,vt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?_t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,vt.width,vt.height,ct.depth,xt,Dt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Pt,vt.width,vt.height,ct.depth,0,xt,Dt,vt.data)}else{V&&Et&&e.texStorage2D(i.TEXTURE_2D,Tt,Pt,Wt[0].width,Wt[0].height);for(let ft=0,ht=Wt.length;ft<ht;ft++)vt=Wt[ft],y.format!==Ze?xt!==null?V?_t&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Pt,vt.width,vt.height,0,vt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?_t&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,vt.width,vt.height,xt,Dt,vt.data):e.texImage2D(i.TEXTURE_2D,ft,Pt,vt.width,vt.height,0,xt,Dt,vt.data)}else if(y.isDataArrayTexture)if(V){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Pt,ct.width,ct.height,ct.depth),_t)if(y.layerUpdates.size>0){const ft=lo(ct.width,ct.height,y.format,y.type);for(const ht of y.layerUpdates){const Mt=ct.data.subarray(ht*ft/ct.data.BYTES_PER_ELEMENT,(ht+1)*ft/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,ct.width,ct.height,1,xt,Dt,Mt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,xt,Dt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ct.width,ct.height,ct.depth,0,xt,Dt,ct.data);else if(y.isData3DTexture)V?(Et&&e.texStorage3D(i.TEXTURE_3D,Tt,Pt,ct.width,ct.height,ct.depth),_t&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,xt,Dt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ct.width,ct.height,ct.depth,0,xt,Dt,ct.data);else if(y.isFramebufferTexture){if(Et)if(V)e.texStorage2D(i.TEXTURE_2D,Tt,Pt,ct.width,ct.height);else{let ft=ct.width,ht=ct.height;for(let Mt=0;Mt<Tt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Pt,ft,ht,0,xt,Dt,null),ft>>=1,ht>>=1}}else if(Wt.length>0){if(V&&Et){const ft=z(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Pt,ft.width,ft.height)}for(let ft=0,ht=Wt.length;ft<ht;ft++)vt=Wt[ft],V?_t&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,xt,Dt,vt):e.texImage2D(i.TEXTURE_2D,ft,Pt,xt,Dt,vt);y.generateMipmaps=!1}else if(V){if(Et){const ft=z(ct);e.texStorage2D(i.TEXTURE_2D,Tt,Pt,ft.width,ft.height)}_t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Dt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Pt,xt,Dt,ct);p(y)&&h(q),Rt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function lt(C,y,I){if(y.image.length!==6)return;const q=pt(C,y),st=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+I);const Z=n.get(st);if(st.version!==Z.__version||q===!0){e.activeTexture(i.TEXTURE0+I);const Rt=$t.getPrimaries($t.workingColorSpace),gt=y.colorSpace===Cn?null:$t.getPrimaries(y.colorSpace),Ct=y.colorSpace===Cn||Rt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Ft=y.isCompressedTexture||y.image[0].isCompressedTexture,ct=y.image[0]&&y.image[0].isDataTexture,xt=[];for(let ht=0;ht<6;ht++)!Ft&&!ct?xt[ht]=_(y.image[ht],!0,r.maxCubemapSize):xt[ht]=ct?y.image[ht].image:y.image[ht],xt[ht]=at(y,xt[ht]);const Dt=xt[0],Pt=s.convert(y.format,y.colorSpace),vt=s.convert(y.type),Wt=E(y.internalFormat,Pt,vt,y.colorSpace),V=y.isVideoTexture!==!0,Et=Z.__version===void 0||q===!0,_t=st.dataReady;let Tt=w(y,Dt);X(i.TEXTURE_CUBE_MAP,y);let ft;if(Ft){V&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Wt,Dt.width,Dt.height);for(let ht=0;ht<6;ht++){ft=xt[ht].mipmaps;for(let Mt=0;Mt<ft.length;Mt++){const Ht=ft[Mt];y.format!==Ze?Pt!==null?V?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,0,0,Ht.width,Ht.height,Pt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,Wt,Ht.width,Ht.height,0,Ht.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,0,0,Ht.width,Ht.height,Pt,vt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,Wt,Ht.width,Ht.height,0,Pt,vt,Ht.data)}}}else{if(ft=y.mipmaps,V&&Et){ft.length>0&&Tt++;const ht=z(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Wt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(ct){V?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,xt[ht].width,xt[ht].height,Pt,vt,xt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Wt,xt[ht].width,xt[ht].height,0,Pt,vt,xt[ht].data);for(let Mt=0;Mt<ft.length;Mt++){const oe=ft[Mt].image[ht].image;V?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,0,0,oe.width,oe.height,Pt,vt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,Wt,oe.width,oe.height,0,Pt,vt,oe.data)}}else{V?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Pt,vt,xt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Wt,Pt,vt,xt[ht]);for(let Mt=0;Mt<ft.length;Mt++){const Ht=ft[Mt];V?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,0,0,Pt,vt,Ht.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,Wt,Pt,vt,Ht.image[ht])}}}p(y)&&h(i.TEXTURE_CUBE_MAP),Z.__version=st.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function dt(C,y,I,q,st,Z){const Rt=s.convert(I.format,I.colorSpace),gt=s.convert(I.type),Ct=E(I.internalFormat,Rt,gt,I.colorSpace),Ft=n.get(y),ct=n.get(I);if(ct.__renderTarget=y,!Ft.__hasExternalTextures){const xt=Math.max(1,y.width>>Z),Dt=Math.max(1,y.height>>Z);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Z,Ct,xt,Dt,y.depth,0,Rt,gt,null):e.texImage2D(st,Z,Ct,xt,Dt,0,Rt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),H(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,st,ct.__webglTexture,0,S(y)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,st,ct.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(C,y,I){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const q=y.depthTexture,st=q&&q.isDepthTexture?q.type:null,Z=T(y.stencilBuffer,st),Rt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;H(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,S(y),Z,y.width,y.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,S(y),Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,C)}else{const q=y.textures;for(let st=0;st<q.length;st++){const Z=q[st],Rt=s.convert(Z.format,Z.colorSpace),gt=s.convert(Z.type),Ct=E(Z.internalFormat,Rt,gt,Z.colorSpace);H(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,S(y),Ct,y.width,y.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,S(y),Ct,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(C,y,I){const q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(y.depthTexture);if(st.__renderTarget=y,(!st.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(st.__webglInit===void 0&&(st.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),X(i.TEXTURE_CUBE_MAP,y.depthTexture);const Ft=s.convert(y.depthTexture.format),ct=s.convert(y.depthTexture.type);let xt;y.depthTexture.format===Mn?xt=i.DEPTH_COMPONENT24:y.depthTexture.format===Vn&&(xt=i.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,xt,y.width,y.height,0,Ft,ct,null)}}else B(y.depthTexture,0);const Z=st.__webglTexture,Rt=S(y),gt=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,Ct=y.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Mn)H(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ct,gt,Z,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,Ct,gt,Z,0);else if(y.depthTexture.format===Vn)H(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ct,gt,Z,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,Ct,gt,Z,0);else throw new Error("Unknown depthTexture format")}function Nt(C){const y=n.get(C),I=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const st=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",st)};q.addEventListener("dispose",st),y.__depthDisposeCallback=st}y.__boundDepthTexture=q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(I)for(let q=0;q<6;q++)St(y.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?St(y.__webglFramebuffer[0],C,0):St(y.__webglFramebuffer,C,0)}else if(I){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),At(y.__webglDepthbuffer[q],C,!1);else{const st=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Z)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),At(y.__webglDepthbuffer,C,!1);else{const st=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(C,y,I){const q=n.get(C);y!==void 0&&dt(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Nt(C)}function Gt(C){const y=C.texture,I=n.get(C),q=n.get(y);C.addEventListener("dispose",D);const st=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Rt=st.length>1;if(Rt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,o.memory.textures++),Z){I.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[gt]=[];for(let Ct=0;Ct<y.mipmaps.length;Ct++)I.__webglFramebuffer[gt][Ct]=i.createFramebuffer()}else I.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)I.__webglFramebuffer[gt]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let gt=0,Ct=st.length;gt<Ct;gt++){const Ft=n.get(st[gt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&H(C)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let gt=0;gt<st.length;gt++){const Ct=st[gt];I.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[gt]);const Ft=s.convert(Ct.format,Ct.colorSpace),ct=s.convert(Ct.type),xt=E(Ct.internalFormat,Ft,ct,Ct.colorSpace,C.isXRRenderTarget===!0),Dt=S(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,xt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,I.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),At(I.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),X(i.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ct=0;Ct<y.mipmaps.length;Ct++)dt(I.__webglFramebuffer[gt][Ct],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct);else dt(I.__webglFramebuffer[gt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);p(y)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let gt=0,Ct=st.length;gt<Ct;gt++){const Ft=st[gt],ct=n.get(Ft);let xt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,ct.__webglTexture),X(xt,Ft),dt(I.__webglFramebuffer,C,Ft,i.COLOR_ATTACHMENT0+gt,xt,0),p(Ft)&&h(xt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,q.__webglTexture),X(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let Ct=0;Ct<y.mipmaps.length;Ct++)dt(I.__webglFramebuffer[Ct],C,y,i.COLOR_ATTACHMENT0,gt,Ct);else dt(I.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,gt,0);p(y)&&h(gt),e.unbindTexture()}C.depthBuffer&&Nt(C)}function M(C){const y=C.textures;for(let I=0,q=y.length;I<q;I++){const st=y[I];if(p(st)){const Z=x(C),Rt=n.get(st).__webglTexture;e.bindTexture(Z,Rt),h(Z),e.unbindTexture()}}}const et=[],Y=[];function N(C){if(C.samples>0){if(H(C)===!1){const y=C.textures,I=C.width,q=C.height;let st=i.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(C),gt=y.length>1;if(gt)for(let Ft=0;Ft<y.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const Ct=C.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Ft=0;Ft<y.length;Ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ft]);const ct=n.get(y[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,I,q,0,0,I,q,st,i.NEAREST),c===!0&&(et.length=0,Y.length=0,et.push(i.COLOR_ATTACHMENT0+Ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(et.push(Z),Y.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Ft=0;Ft<y.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ft]);const ct=n.get(y[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function S(C){return Math.min(r.maxSamples,C.samples)}function H(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function rt(C){const y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function at(C,y){const I=C.colorSpace,q=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==mi&&I!==Cn&&($t.getTransfer(I)===ie?(q!==Ze||st!==ze)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",I)),y}function z(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=B,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=te,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=M,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=H,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Gp(i,t){function e(n,r=Cn){let s;const o=$t.getTransfer(r);if(n===ze)return i.UNSIGNED_BYTE;if(n===aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vo)return i.BYTE;if(n===Wo)return i.SHORT;if(n===Pi)return i.UNSIGNED_SHORT;if(n===sa)return i.INT;if(n===an)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===Yo)return i.ALPHA;if(n===qo)return i.RGB;if(n===Ze)return i.RGBA;if(n===Mn)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===la)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===ca)return i.RG_INTEGER;if(n===ha)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ys||n===bs||n===Es||n===Ts)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ys)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Es)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ts)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ws||n===As||n===Rs||n===Cs||n===Ps||n===Ds||n===Ls)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ws||n===As)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Rs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cs)return s.COMPRESSED_R11_EAC;if(n===Ps)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ds)return s.COMPRESSED_RG11_EAC;if(n===Ls)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Is||n===Us||n===Ns||n===Fs||n===Os||n===Bs||n===ks||n===zs||n===Gs||n===Hs||n===Vs||n===Ws||n===Xs||n===js)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Is)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Us)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ns)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Os)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ks)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ws)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xs)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===js)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ys||n===qs||n===Zs)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ys)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ks||n===$s||n===Js||n===Qs)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ks)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$s)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Hp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vp=`
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

}`;class Wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ll(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ln({vertexShader:Hp,fragmentShader:Vp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xp extends jn{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,m=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",p=new Wp,h={},x=e.getContextAttributes();let E=null,T=null;const w=[],R=[],D=new Vt;let F=null;const b=new We;b.viewport=new fe;const A=new We;A.viewport=new fe;const O=[b,A],P=new $c;let U=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let lt=w[it];return lt===void 0&&(lt=new Jr,w[it]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(it){let lt=w[it];return lt===void 0&&(lt=new Jr,w[it]=lt),lt.getGripSpace()},this.getHand=function(it){let lt=w[it];return lt===void 0&&(lt=new Jr,w[it]=lt),lt.getHandSpace()};function B(it){const lt=R.indexOf(it.inputSource);if(lt===-1)return;const dt=w[lt];dt!==void 0&&(dt.update(it.inputSource,it.frame,l||o),dt.dispatchEvent({type:it.type,data:it.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",k);for(let it=0;it<w.length;it++){const lt=R[it];lt!==null&&(R[it]=null,w[it].disconnect(lt))}U=null,v=null,p.reset();for(const it in h)delete h[it];t.setRenderTarget(E),d=null,m=null,f=null,r=null,T=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(it){l=it},this.getBaseLayer=function(){return m!==null?m:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(E=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,At=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=x.stencil?Vn:Mn,At=x.stencil?Di:an);const Nt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};f=this.getBinding(),m=f.createProjectionLayer(Nt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),T=new sn(m.textureWidth,m.textureHeight,{format:Ze,type:ze,depthTexture:new Ii(m.textureWidth,m.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const dt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,dt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new sn(d.framebufferWidth,d.framebufferHeight,{format:Ze,type:ze,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ut.setContext(r),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(it){for(let lt=0;lt<it.removed.length;lt++){const dt=it.removed[lt],At=R.indexOf(dt);At>=0&&(R[At]=null,w[At].disconnect(dt))}for(let lt=0;lt<it.added.length;lt++){const dt=it.added[lt];let At=R.indexOf(dt);if(At===-1){for(let Nt=0;Nt<w.length;Nt++)if(Nt>=R.length){R.push(dt),At=Nt;break}else if(R[Nt]===null){R[Nt]=dt,At=Nt;break}if(At===-1)break}const St=w[At];St&&St.connect(dt)}}const Q=new K,J=new K;function ot(it,lt,dt){Q.setFromMatrixPosition(lt.matrixWorld),J.setFromMatrixPosition(dt.matrixWorld);const At=Q.distanceTo(J),St=lt.projectionMatrix.elements,Nt=dt.projectionMatrix.elements,te=St[14]/(St[10]-1),Gt=St[14]/(St[10]+1),M=(St[9]+1)/St[5],et=(St[9]-1)/St[5],Y=(St[8]-1)/St[0],N=(Nt[8]+1)/Nt[0],S=te*Y,H=te*N,rt=At/(-Y+N),at=rt*-Y;if(lt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(at),it.translateZ(rt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),St[10]===-1)it.projectionMatrix.copy(lt.projectionMatrix),it.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const z=te+rt,C=Gt+rt,y=S-at,I=H+(At-at),q=M*Gt/C*z,st=et*Gt/C*z;it.projectionMatrix.makePerspective(y,I,q,st,z,C),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function G(it,lt){lt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(lt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let lt=it.near,dt=it.far;p.texture!==null&&(p.depthNear>0&&(lt=p.depthNear),p.depthFar>0&&(dt=p.depthFar)),P.near=A.near=b.near=lt,P.far=A.far=b.far=dt,(U!==P.near||v!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,v=P.far),P.layers.mask=it.layers.mask|6,b.layers.mask=P.layers.mask&3,A.layers.mask=P.layers.mask&5;const At=it.parent,St=P.cameras;G(P,At);for(let Nt=0;Nt<St.length;Nt++)G(St[Nt],At);St.length===2?ot(P,b,A):P.projectionMatrix.copy(b.projectionMatrix),X(it,P,At)};function X(it,lt,dt){dt===null?it.matrix.copy(lt.matrixWorld):(it.matrix.copy(dt.matrixWorld),it.matrix.invert(),it.matrix.multiply(lt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(lt.projectionMatrix),it.projectionMatrixInverse.copy(lt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ta*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(m===null&&d===null))return c},this.setFoveation=function(it){c=it,m!==null&&(m.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(it){return h[it]};let pt=null;function mt(it,lt){if(u=lt.getViewerPose(l||o),g=lt,u!==null){const dt=u.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let At=!1;dt.length!==P.cameras.length&&(P.cameras.length=0,At=!0);for(let Gt=0;Gt<dt.length;Gt++){const M=dt[Gt];let et=null;if(d!==null)et=d.getViewport(M);else{const N=f.getViewSubImage(m,M);et=N.viewport,Gt===0&&(t.setRenderTargetTextures(T,N.colorTexture,N.depthStencilTexture),t.setRenderTarget(T))}let Y=O[Gt];Y===void 0&&(Y=new We,Y.layers.enable(Gt),Y.viewport=new fe,O[Gt]=Y),Y.matrix.fromArray(M.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(M.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(et.x,et.y,et.width,et.height),Gt===0&&(P.matrix.copy(Y.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),At===!0&&P.cameras.push(Y)}const St=r.enabledFeatures;if(St&&St.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Gt=f.getDepthInformation(dt[0]);Gt&&Gt.isValid&&Gt.texture&&p.init(Gt,r.renderState)}if(St&&St.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Gt=0;Gt<dt.length;Gt++){const M=dt[Gt].camera;if(M){let et=h[M];et||(et=new ll,h[M]=et);const Y=f.getCameraImage(M);et.sourceTexture=Y}}}}for(let dt=0;dt<w.length;dt++){const At=R[dt],St=w[dt];At!==null&&St!==void 0&&St.update(At,lt,l||o)}pt&&pt(it,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}const ut=new hl;ut.setAnimationLoop(mt),this.setAnimationLoop=function(it){pt=it},this.dispose=function(){}}}const kn=new on,jp=new he;function Yp(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,il(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,x,E,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),m(p,h),h.isMeshPhysicalMaterial&&d(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,x,E):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Le&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Le&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const x=t.get(h),E=x.envMap,T=x.envMapRotation;E&&(p.envMap.value=E,kn.copy(T),kn.x*=-1,kn.y*=-1,kn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),p.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(kn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,x,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*x,p.scale.value=E*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function m(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,x){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Le&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const x=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function qp(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,E){const T=E.program;n.uniformBlockBinding(x,T)}function l(x,E){let T=r[x.id];T===void 0&&(g(x),T=u(x),r[x.id]=T,x.addEventListener("dispose",p));const w=E.program;n.updateUBOMapping(x,w);const R=t.render.frame;s[x.id]!==R&&(m(x),s[x.id]=R)}function u(x){const E=f();x.__bindingPointIndex=E;const T=i.createBuffer(),w=x.__size,R=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(x){const E=r[x.id],T=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,D=T.length;R<D;R++){const F=Array.isArray(T[R])?T[R]:[T[R]];for(let b=0,A=F.length;b<A;b++){const O=F[b];if(d(O,R,b,w)===!0){const P=O.__offset,U=Array.isArray(O.value)?O.value:[O.value];let v=0;for(let B=0;B<U.length;B++){const W=U[B],k=_(W);typeof W=="number"||typeof W=="boolean"?(O.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,P+v,O.__data)):W.isMatrix3?(O.__data[0]=W.elements[0],O.__data[1]=W.elements[1],O.__data[2]=W.elements[2],O.__data[3]=0,O.__data[4]=W.elements[3],O.__data[5]=W.elements[4],O.__data[6]=W.elements[5],O.__data[7]=0,O.__data[8]=W.elements[6],O.__data[9]=W.elements[7],O.__data[10]=W.elements[8],O.__data[11]=0):(W.toArray(O.__data,v),v+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,E,T,w){const R=x.value,D=E+"_"+T;if(w[D]===void 0)return typeof R=="number"||typeof R=="boolean"?w[D]=R:w[D]=R.clone(),!0;{const F=w[D];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return w[D]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(x){const E=x.uniforms;let T=0;const w=16;for(let D=0,F=E.length;D<F;D++){const b=Array.isArray(E[D])?E[D]:[E[D]];for(let A=0,O=b.length;A<O;A++){const P=b[A],U=Array.isArray(P.value)?P.value:[P.value];for(let v=0,B=U.length;v<B;v++){const W=U[v],k=_(W),Q=T%w,J=Q%k.boundary,ot=Q+J;T+=J,ot!==0&&w-ot<k.storage&&(T+=w-ot),P.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=k.storage}}}const R=T%w;return R>0&&(T+=w-R),x.__size=T,x.__cache={},this}function _(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):zt("WebGLRenderer: Unsupported uniform value type.",x),E}function p(x){const E=x.target;E.removeEventListener("dispose",p);const T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}const Zp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Je=null;function Kp(){return Je===null&&(Je=new Ic(Zp,16,16,pi,Sn),Je.name="DFG_LUT",Je.minFilter=Ee,Je.magFilter=Ee,Je.wrapS=gn,Je.wrapT=gn,Je.generateMipmaps=!1,Je.needsUpdate=!0),Je}class $p{constructor(t={}){const{canvas:e=sc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:d=ze}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=d,p=new Set([ha,ca,la]),h=new Set([ze,an,Pi,Di,aa,oa]),x=new Uint32Array(4),E=new Int32Array(4);let T=null,w=null;const R=[],D=[];let F=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let A=!1;this._outputColorSpace=ke;let O=0,P=0,U=null,v=-1,B=null;const W=new fe,k=new fe;let Q=null;const J=new Yt(0);let ot=0,G=e.width,X=e.height,pt=1,mt=null,ut=null;const it=new fe(0,0,G,X),lt=new fe(0,0,G,X);let dt=!1;const At=new _a;let St=!1,Nt=!1;const te=new he,Gt=new K,M=new fe,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function N(){return U===null?pt:1}let S=n;function H(L,j){return e.getContext(L,j)}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ia}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",ee,!1),S===null){const j="webgl2";if(S=H(j,L),S===null)throw H(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Qt("WebGLRenderer: "+L.message),L}let rt,at,z,C,y,I,q,st,Z,Rt,gt,Ct,Ft,ct,xt,Dt,Pt,vt,Wt,V,Et,_t,Tt,ft;function ht(){rt=new Zd(S),rt.init(),_t=new Gp(S,rt),at=new zd(S,rt,t,_t),z=new kp(S,rt),at.reversedDepthBuffer&&m&&z.buffers.depth.setReversed(!0),C=new Jd(S),y=new Ep,I=new zp(S,rt,z,y,at,_t,C),q=new Hd(b),st=new qd(b),Z=new nh(S),Tt=new Bd(S,Z),Rt=new Kd(S,Z,C,Tt),gt=new tf(S,Rt,Z,C),Wt=new Qd(S,at,I),Dt=new Gd(y),Ct=new bp(b,q,st,rt,at,Tt,Dt),Ft=new Yp(b,y),ct=new wp,xt=new Lp(rt),vt=new Od(b,q,st,z,gt,g,c),Pt=new Op(b,gt,at),ft=new qp(S,C,at,z),V=new kd(S,rt,C),Et=new $d(S,rt,C),C.programs=Ct.programs,b.capabilities=at,b.extensions=rt,b.properties=y,b.renderLists=ct,b.shadowMap=Pt,b.state=z,b.info=C}ht(),_!==ze&&(F=new nf(_,e.width,e.height,r,s));const Mt=new Xp(b,S);this.xr=Mt,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const L=rt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=rt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(L){L!==void 0&&(pt=L,this.setSize(G,X,!1))},this.getSize=function(L){return L.set(G,X)},this.setSize=function(L,j,nt=!0){if(Mt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}G=L,X=j,e.width=Math.floor(L*pt),e.height=Math.floor(j*pt),nt===!0&&(e.style.width=L+"px",e.style.height=j+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(G*pt,X*pt).floor()},this.setDrawingBufferSize=function(L,j,nt){G=L,X=j,pt=nt,e.width=Math.floor(L*nt),e.height=Math.floor(j*nt),this.setViewport(0,0,L,j)},this.setEffects=function(L){if(_===ze){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let j=0;j<L.length;j++)if(L[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(W)},this.getViewport=function(L){return L.copy(it)},this.setViewport=function(L,j,nt,tt){L.isVector4?it.set(L.x,L.y,L.z,L.w):it.set(L,j,nt,tt),z.viewport(W.copy(it).multiplyScalar(pt).round())},this.getScissor=function(L){return L.copy(lt)},this.setScissor=function(L,j,nt,tt){L.isVector4?lt.set(L.x,L.y,L.z,L.w):lt.set(L,j,nt,tt),z.scissor(k.copy(lt).multiplyScalar(pt).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(L){z.setScissorTest(dt=L)},this.setOpaqueSort=function(L){mt=L},this.setTransparentSort=function(L){ut=L},this.getClearColor=function(L){return L.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(L=!0,j=!0,nt=!0){let tt=0;if(L){let $=!1;if(U!==null){const yt=U.texture.format;$=p.has(yt)}if($){const yt=U.texture.type,Lt=h.has(yt),wt=vt.getClearColor(),It=vt.getClearAlpha(),Ut=wt.r,kt=wt.g,Ot=wt.b;Lt?(x[0]=Ut,x[1]=kt,x[2]=Ot,x[3]=It,S.clearBufferuiv(S.COLOR,0,x)):(E[0]=Ut,E[1]=kt,E[2]=Ot,E[3]=It,S.clearBufferiv(S.COLOR,0,E))}else tt|=S.COLOR_BUFFER_BIT}j&&(tt|=S.DEPTH_BUFFER_BIT),nt&&(tt|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),vt.dispose(),ct.dispose(),xt.dispose(),y.dispose(),q.dispose(),st.dispose(),gt.dispose(),Tt.dispose(),ft.dispose(),Ct.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",ya),Mt.removeEventListener("sessionend",ba),Ln.stop()};function Ht(L){L.preventDefault(),Oa("WebGLRenderer: Context Lost."),A=!0}function oe(){Oa("WebGLRenderer: Context Restored."),A=!1;const L=C.autoReset,j=Pt.enabled,nt=Pt.autoUpdate,tt=Pt.needsUpdate,$=Pt.type;ht(),C.autoReset=L,Pt.enabled=j,Pt.autoUpdate=nt,Pt.needsUpdate=tt,Pt.type=$}function ee(L){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function $e(L){const j=L.target;j.removeEventListener("dispose",$e),cn(j)}function cn(L){xl(L),y.remove(L)}function xl(L){const j=y.get(L).programs;j!==void 0&&(j.forEach(function(nt){Ct.releaseProgram(nt)}),L.isShaderMaterial&&Ct.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,nt,tt,$,yt){j===null&&(j=et);const Lt=$.isMesh&&$.matrixWorld.determinant()<0,wt=Sl(L,j,nt,tt,$);z.setMaterial(tt,Lt);let It=nt.index,Ut=1;if(tt.wireframe===!0){if(It=Rt.getWireframeAttribute(nt),It===void 0)return;Ut=2}const kt=nt.drawRange,Ot=nt.attributes.position;let qt=kt.start*Ut,re=(kt.start+kt.count)*Ut;yt!==null&&(qt=Math.max(qt,yt.start*Ut),re=Math.min(re,(yt.start+yt.count)*Ut)),It!==null?(qt=Math.max(qt,0),re=Math.min(re,It.count)):Ot!=null&&(qt=Math.max(qt,0),re=Math.min(re,Ot.count));const ue=re-qt;if(ue<0||ue===1/0)return;Tt.setup($,tt,wt,nt,It);let de,ae=V;if(It!==null&&(de=Z.get(It),ae=Et,ae.setIndex(de)),$.isMesh)tt.wireframe===!0?(z.setLineWidth(tt.wireframeLinewidth*N()),ae.setMode(S.LINES)):ae.setMode(S.TRIANGLES);else if($.isLine){let Bt=tt.linewidth;Bt===void 0&&(Bt=1),z.setLineWidth(Bt*N()),$.isLineSegments?ae.setMode(S.LINES):$.isLineLoop?ae.setMode(S.LINE_LOOP):ae.setMode(S.LINE_STRIP)}else $.isPoints?ae.setMode(S.POINTS):$.isSprite&&ae.setMode(S.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Li("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))ae.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Bt=$._multiDrawStarts,ne=$._multiDrawCounts,Jt=$._multiDrawCount,Ue=It?Z.get(It).bytesPerElement:1,Yn=y.get(tt).currentProgram.getUniforms();for(let Ne=0;Ne<Jt;Ne++)Yn.setValue(S,"_gl_DrawID",Ne),ae.render(Bt[Ne]/Ue,ne[Ne])}else if($.isInstancedMesh)ae.renderInstances(qt,ue,$.count);else if(nt.isInstancedBufferGeometry){const Bt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,ne=Math.min(nt.instanceCount,Bt);ae.renderInstances(qt,ue,ne)}else ae.render(qt,ue)};function Ma(L,j,nt){L.transparent===!0&&L.side===tn&&L.forceSinglePass===!1?(L.side=Le,L.needsUpdate=!0,ki(L,j,nt),L.side=Dn,L.needsUpdate=!0,ki(L,j,nt),L.side=tn):ki(L,j,nt)}this.compile=function(L,j,nt=null){nt===null&&(nt=L),w=xt.get(nt),w.init(j),D.push(w),nt.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),L!==nt&&L.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights();const tt=new Set;return L.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const yt=$.material;if(yt)if(Array.isArray(yt))for(let Lt=0;Lt<yt.length;Lt++){const wt=yt[Lt];Ma(wt,nt,$),tt.add(wt)}else Ma(yt,nt,$),tt.add(yt)}),w=D.pop(),tt},this.compileAsync=function(L,j,nt=null){const tt=this.compile(L,j,nt);return new Promise($=>{function yt(){if(tt.forEach(function(Lt){y.get(Lt).currentProgram.isReady()&&tt.delete(Lt)}),tt.size===0){$(L);return}setTimeout(yt,10)}rt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ar=null;function vl(L){Ar&&Ar(L)}function ya(){Ln.stop()}function ba(){Ln.start()}const Ln=new hl;Ln.setAnimationLoop(vl),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(L){Ar=L,Mt.setAnimationLoop(L),L===null?Ln.stop():Ln.start()},Mt.addEventListener("sessionstart",ya),Mt.addEventListener("sessionend",ba),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const nt=Mt.enabled===!0&&Mt.isPresenting===!0,tt=F!==null&&(U===null||nt)&&F.begin(b,U);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(j),j=Mt.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,j,U),w=xt.get(L,D.length),w.init(j),D.push(w),te.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),At.setFromProjectionMatrix(te,nn,j.reversedDepth),Nt=this.localClippingEnabled,St=Dt.init(this.clippingPlanes,Nt),T=ct.get(L,R.length),T.init(),R.push(T),Mt.enabled===!0&&Mt.isPresenting===!0){const Lt=b.xr.getDepthSensingMesh();Lt!==null&&Rr(Lt,j,-1/0,b.sortObjects)}Rr(L,j,0,b.sortObjects),T.finish(),b.sortObjects===!0&&T.sort(mt,ut),Y=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Y&&vt.addToRenderList(T,L),this.info.render.frame++,St===!0&&Dt.beginShadows();const $=w.state.shadowsArray;if(Pt.render($,L,j),St===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&F.hasRenderPass())===!1){const Lt=T.opaque,wt=T.transmissive;if(w.setupLights(),j.isArrayCamera){const It=j.cameras;if(wt.length>0)for(let Ut=0,kt=It.length;Ut<kt;Ut++){const Ot=It[Ut];Ta(Lt,wt,L,Ot)}Y&&vt.render(L);for(let Ut=0,kt=It.length;Ut<kt;Ut++){const Ot=It[Ut];Ea(T,L,Ot,Ot.viewport)}}else wt.length>0&&Ta(Lt,wt,L,j),Y&&vt.render(L),Ea(T,L,j)}U!==null&&P===0&&(I.updateMultisampleRenderTarget(U),I.updateRenderTargetMipmap(U)),tt&&F.end(b),L.isScene===!0&&L.onAfterRender(b,L,j),Tt.resetDefaultState(),v=-1,B=null,D.pop(),D.length>0?(w=D[D.length-1],St===!0&&Dt.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?T=R[R.length-1]:T=null};function Rr(L,j,nt,tt){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)nt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)w.pushLight(L),L.castShadow&&w.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||At.intersectsSprite(L)){tt&&M.setFromMatrixPosition(L.matrixWorld).applyMatrix4(te);const Lt=gt.update(L),wt=L.material;wt.visible&&T.push(L,Lt,wt,nt,M.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||At.intersectsObject(L))){const Lt=gt.update(L),wt=L.material;if(tt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),M.copy(L.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),M.copy(Lt.boundingSphere.center)),M.applyMatrix4(L.matrixWorld).applyMatrix4(te)),Array.isArray(wt)){const It=Lt.groups;for(let Ut=0,kt=It.length;Ut<kt;Ut++){const Ot=It[Ut],qt=wt[Ot.materialIndex];qt&&qt.visible&&T.push(L,Lt,qt,nt,M.z,Ot)}}else wt.visible&&T.push(L,Lt,wt,nt,M.z,null)}}const yt=L.children;for(let Lt=0,wt=yt.length;Lt<wt;Lt++)Rr(yt[Lt],j,nt,tt)}function Ea(L,j,nt,tt){const{opaque:$,transmissive:yt,transparent:Lt}=L;w.setupLightsView(nt),St===!0&&Dt.setGlobalState(b.clippingPlanes,nt),tt&&z.viewport(W.copy(tt)),$.length>0&&Bi($,j,nt),yt.length>0&&Bi(yt,j,nt),Lt.length>0&&Bi(Lt,j,nt),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Ta(L,j,nt,tt){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[tt.id]===void 0){const qt=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[tt.id]=new sn(1,1,{generateMipmaps:!0,type:qt?Sn:ze,minFilter:Hn,samples:at.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace})}const yt=w.state.transmissionRenderTarget[tt.id],Lt=tt.viewport||W;yt.setSize(Lt.z*b.transmissionResolutionScale,Lt.w*b.transmissionResolutionScale);const wt=b.getRenderTarget(),It=b.getActiveCubeFace(),Ut=b.getActiveMipmapLevel();b.setRenderTarget(yt),b.getClearColor(J),ot=b.getClearAlpha(),ot<1&&b.setClearColor(16777215,.5),b.clear(),Y&&vt.render(nt);const kt=b.toneMapping;b.toneMapping=rn;const Ot=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),w.setupLightsView(tt),St===!0&&Dt.setGlobalState(b.clippingPlanes,tt),Bi(L,nt,tt),I.updateMultisampleRenderTarget(yt),I.updateRenderTargetMipmap(yt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let re=0,ue=j.length;re<ue;re++){const de=j[re],{object:ae,geometry:Bt,material:ne,group:Jt}=de;if(ne.side===tn&&ae.layers.test(tt.layers)){const Ue=ne.side;ne.side=Le,ne.needsUpdate=!0,wa(ae,nt,tt,Bt,ne,Jt),ne.side=Ue,ne.needsUpdate=!0,qt=!0}}qt===!0&&(I.updateMultisampleRenderTarget(yt),I.updateRenderTargetMipmap(yt))}b.setRenderTarget(wt,It,Ut),b.setClearColor(J,ot),Ot!==void 0&&(tt.viewport=Ot),b.toneMapping=kt}function Bi(L,j,nt){const tt=j.isScene===!0?j.overrideMaterial:null;for(let $=0,yt=L.length;$<yt;$++){const Lt=L[$],{object:wt,geometry:It,group:Ut}=Lt;let kt=Lt.material;kt.allowOverride===!0&&tt!==null&&(kt=tt),wt.layers.test(nt.layers)&&wa(wt,j,nt,It,kt,Ut)}}function wa(L,j,nt,tt,$,yt){L.onBeforeRender(b,j,nt,tt,$,yt),L.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),$.onBeforeRender(b,j,nt,tt,L,yt),$.transparent===!0&&$.side===tn&&$.forceSinglePass===!1?($.side=Le,$.needsUpdate=!0,b.renderBufferDirect(nt,j,tt,$,L,yt),$.side=Dn,$.needsUpdate=!0,b.renderBufferDirect(nt,j,tt,$,L,yt),$.side=tn):b.renderBufferDirect(nt,j,tt,$,L,yt),L.onAfterRender(b,j,nt,tt,$,yt)}function ki(L,j,nt){j.isScene!==!0&&(j=et);const tt=y.get(L),$=w.state.lights,yt=w.state.shadowsArray,Lt=$.state.version,wt=Ct.getParameters(L,$.state,yt,j,nt),It=Ct.getProgramCacheKey(wt);let Ut=tt.programs;tt.environment=L.isMeshStandardMaterial?j.environment:null,tt.fog=j.fog,tt.envMap=(L.isMeshStandardMaterial?st:q).get(L.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&L.envMap===null?j.environmentRotation:L.envMapRotation,Ut===void 0&&(L.addEventListener("dispose",$e),Ut=new Map,tt.programs=Ut);let kt=Ut.get(It);if(kt!==void 0){if(tt.currentProgram===kt&&tt.lightsStateVersion===Lt)return Ra(L,wt),kt}else wt.uniforms=Ct.getUniforms(L),L.onBeforeCompile(wt,b),kt=Ct.acquireProgram(wt,It),Ut.set(It,kt),tt.uniforms=wt.uniforms;const Ot=tt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ot.clippingPlanes=Dt.uniform),Ra(L,wt),tt.needsLights=yl(L),tt.lightsStateVersion=Lt,tt.needsLights&&(Ot.ambientLightColor.value=$.state.ambient,Ot.lightProbe.value=$.state.probe,Ot.directionalLights.value=$.state.directional,Ot.directionalLightShadows.value=$.state.directionalShadow,Ot.spotLights.value=$.state.spot,Ot.spotLightShadows.value=$.state.spotShadow,Ot.rectAreaLights.value=$.state.rectArea,Ot.ltc_1.value=$.state.rectAreaLTC1,Ot.ltc_2.value=$.state.rectAreaLTC2,Ot.pointLights.value=$.state.point,Ot.pointLightShadows.value=$.state.pointShadow,Ot.hemisphereLights.value=$.state.hemi,Ot.directionalShadowMap.value=$.state.directionalShadowMap,Ot.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ot.spotShadowMap.value=$.state.spotShadowMap,Ot.spotLightMatrix.value=$.state.spotLightMatrix,Ot.spotLightMap.value=$.state.spotLightMap,Ot.pointShadowMap.value=$.state.pointShadowMap,Ot.pointShadowMatrix.value=$.state.pointShadowMatrix),tt.currentProgram=kt,tt.uniformsList=null,kt}function Aa(L){if(L.uniformsList===null){const j=L.currentProgram.getUniforms();L.uniformsList=gr.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function Ra(L,j){const nt=y.get(L);nt.outputColorSpace=j.outputColorSpace,nt.batching=j.batching,nt.batchingColor=j.batchingColor,nt.instancing=j.instancing,nt.instancingColor=j.instancingColor,nt.instancingMorph=j.instancingMorph,nt.skinning=j.skinning,nt.morphTargets=j.morphTargets,nt.morphNormals=j.morphNormals,nt.morphColors=j.morphColors,nt.morphTargetsCount=j.morphTargetsCount,nt.numClippingPlanes=j.numClippingPlanes,nt.numIntersection=j.numClipIntersection,nt.vertexAlphas=j.vertexAlphas,nt.vertexTangents=j.vertexTangents,nt.toneMapping=j.toneMapping}function Sl(L,j,nt,tt,$){j.isScene!==!0&&(j=et),I.resetTextureUnits();const yt=j.fog,Lt=tt.isMeshStandardMaterial?j.environment:null,wt=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:mi,It=(tt.isMeshStandardMaterial?st:q).get(tt.envMap||Lt),Ut=tt.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,kt=!!nt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ot=!!nt.morphAttributes.position,qt=!!nt.morphAttributes.normal,re=!!nt.morphAttributes.color;let ue=rn;tt.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ue=b.toneMapping);const de=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ae=de!==void 0?de.length:0,Bt=y.get(tt),ne=w.state.lights;if(St===!0&&(Nt===!0||L!==B)){const Te=L===B&&tt.id===v;Dt.setState(tt,L,Te)}let Jt=!1;tt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ne.state.version||Bt.outputColorSpace!==wt||$.isBatchedMesh&&Bt.batching===!1||!$.isBatchedMesh&&Bt.batching===!0||$.isBatchedMesh&&Bt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Bt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Bt.instancing===!1||!$.isInstancedMesh&&Bt.instancing===!0||$.isSkinnedMesh&&Bt.skinning===!1||!$.isSkinnedMesh&&Bt.skinning===!0||$.isInstancedMesh&&Bt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Bt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Bt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Bt.instancingMorph===!1&&$.morphTexture!==null||Bt.envMap!==It||tt.fog===!0&&Bt.fog!==yt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Dt.numPlanes||Bt.numIntersection!==Dt.numIntersection)||Bt.vertexAlphas!==Ut||Bt.vertexTangents!==kt||Bt.morphTargets!==Ot||Bt.morphNormals!==qt||Bt.morphColors!==re||Bt.toneMapping!==ue||Bt.morphTargetsCount!==ae)&&(Jt=!0):(Jt=!0,Bt.__version=tt.version);let Ue=Bt.currentProgram;Jt===!0&&(Ue=ki(tt,j,$));let Yn=!1,Ne=!1,vi=!1;const le=Ue.getUniforms(),Re=Bt.uniforms;if(z.useProgram(Ue.program)&&(Yn=!0,Ne=!0,vi=!0),tt.id!==v&&(v=tt.id,Ne=!0),Yn||B!==L){z.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),le.setValue(S,"projectionMatrix",L.projectionMatrix),le.setValue(S,"viewMatrix",L.matrixWorldInverse);const Ce=le.map.cameraPosition;Ce!==void 0&&Ce.setValue(S,Gt.setFromMatrixPosition(L.matrixWorld)),at.logarithmicDepthBuffer&&le.setValue(S,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&le.setValue(S,"isOrthographic",L.isOrthographicCamera===!0),B!==L&&(B=L,Ne=!0,vi=!0)}if(Bt.needsLights&&(ne.state.directionalShadowMap.length>0&&le.setValue(S,"directionalShadowMap",ne.state.directionalShadowMap,I),ne.state.spotShadowMap.length>0&&le.setValue(S,"spotShadowMap",ne.state.spotShadowMap,I),ne.state.pointShadowMap.length>0&&le.setValue(S,"pointShadowMap",ne.state.pointShadowMap,I)),$.isSkinnedMesh){le.setOptional(S,$,"bindMatrix"),le.setOptional(S,$,"bindMatrixInverse");const Te=$.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),le.setValue(S,"boneTexture",Te.boneTexture,I))}$.isBatchedMesh&&(le.setOptional(S,$,"batchingTexture"),le.setValue(S,"batchingTexture",$._matricesTexture,I),le.setOptional(S,$,"batchingIdTexture"),le.setValue(S,"batchingIdTexture",$._indirectTexture,I),le.setOptional(S,$,"batchingColorTexture"),$._colorsTexture!==null&&le.setValue(S,"batchingColorTexture",$._colorsTexture,I));const He=nt.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&Wt.update($,nt,Ue),(Ne||Bt.receiveShadow!==$.receiveShadow)&&(Bt.receiveShadow=$.receiveShadow,le.setValue(S,"receiveShadow",$.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Re.envMap.value=It,Re.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&j.environment!==null&&(Re.envMapIntensity.value=j.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=Kp()),Ne&&(le.setValue(S,"toneMappingExposure",b.toneMappingExposure),Bt.needsLights&&Ml(Re,vi),yt&&tt.fog===!0&&Ft.refreshFogUniforms(Re,yt),Ft.refreshMaterialUniforms(Re,tt,pt,X,w.state.transmissionRenderTarget[L.id]),gr.upload(S,Aa(Bt),Re,I)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(gr.upload(S,Aa(Bt),Re,I),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&le.setValue(S,"center",$.center),le.setValue(S,"modelViewMatrix",$.modelViewMatrix),le.setValue(S,"normalMatrix",$.normalMatrix),le.setValue(S,"modelMatrix",$.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Te=tt.uniformsGroups;for(let Ce=0,Cr=Te.length;Ce<Cr;Ce++){const In=Te[Ce];ft.update(In,Ue),ft.bind(In,Ue)}}return Ue}function Ml(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function yl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(L,j,nt){const tt=y.get(L);tt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),y.get(L.texture).__webglTexture=j,y.get(L.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:nt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,j){const nt=y.get(L);nt.__webglFramebuffer=j,nt.__useDefaultFramebuffer=j===void 0};const bl=S.createFramebuffer();this.setRenderTarget=function(L,j=0,nt=0){U=L,O=j,P=nt;let tt=null,$=!1,yt=!1;if(L){const wt=y.get(L);if(wt.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(S.FRAMEBUFFER,wt.__webglFramebuffer),W.copy(L.viewport),k.copy(L.scissor),Q=L.scissorTest,z.viewport(W),z.scissor(k),z.setScissorTest(Q),v=-1;return}else if(wt.__webglFramebuffer===void 0)I.setupRenderTarget(L);else if(wt.__hasExternalTextures)I.rebindTextures(L,y.get(L.texture).__webglTexture,y.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const kt=L.depthTexture;if(wt.__boundDepthTexture!==kt){if(kt!==null&&y.has(kt)&&(L.width!==kt.image.width||L.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(L)}}const It=L.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(yt=!0);const Ut=y.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ut[j])?tt=Ut[j][nt]:tt=Ut[j],$=!0):L.samples>0&&I.useMultisampledRTT(L)===!1?tt=y.get(L).__webglMultisampledFramebuffer:Array.isArray(Ut)?tt=Ut[nt]:tt=Ut,W.copy(L.viewport),k.copy(L.scissor),Q=L.scissorTest}else W.copy(it).multiplyScalar(pt).floor(),k.copy(lt).multiplyScalar(pt).floor(),Q=dt;if(nt!==0&&(tt=bl),z.bindFramebuffer(S.FRAMEBUFFER,tt)&&z.drawBuffers(L,tt),z.viewport(W),z.scissor(k),z.setScissorTest(Q),$){const wt=y.get(L.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt.__webglTexture,nt)}else if(yt){const wt=j;for(let It=0;It<L.textures.length;It++){const Ut=y.get(L.textures[It]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+It,Ut.__webglTexture,nt,wt)}}else if(L!==null&&nt!==0){const wt=y.get(L.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,wt.__webglTexture,nt)}v=-1},this.readRenderTargetPixels=function(L,j,nt,tt,$,yt,Lt,wt=0){if(!(L&&L.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=y.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Lt!==void 0&&(It=It[Lt]),It){z.bindFramebuffer(S.FRAMEBUFFER,It);try{const Ut=L.textures[wt],kt=Ut.format,Ot=Ut.type;if(!at.textureFormatReadable(kt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ot)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-tt&&nt>=0&&nt<=L.height-$&&(L.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+wt),S.readPixels(j,nt,tt,$,_t.convert(kt),_t.convert(Ot),yt))}finally{const Ut=U!==null?y.get(U).__webglFramebuffer:null;z.bindFramebuffer(S.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(L,j,nt,tt,$,yt,Lt,wt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=y.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Lt!==void 0&&(It=It[Lt]),It)if(j>=0&&j<=L.width-tt&&nt>=0&&nt<=L.height-$){z.bindFramebuffer(S.FRAMEBUFFER,It);const Ut=L.textures[wt],kt=Ut.format,Ot=Ut.type;if(!at.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,qt),S.bufferData(S.PIXEL_PACK_BUFFER,yt.byteLength,S.STREAM_READ),L.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+wt),S.readPixels(j,nt,tt,$,_t.convert(kt),_t.convert(Ot),0);const re=U!==null?y.get(U).__webglFramebuffer:null;z.bindFramebuffer(S.FRAMEBUFFER,re);const ue=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await ac(S,ue,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,qt),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,yt),S.deleteBuffer(qt),S.deleteSync(ue),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,j=null,nt=0){const tt=Math.pow(2,-nt),$=Math.floor(L.image.width*tt),yt=Math.floor(L.image.height*tt),Lt=j!==null?j.x:0,wt=j!==null?j.y:0;I.setTexture2D(L,0),S.copyTexSubImage2D(S.TEXTURE_2D,nt,0,0,Lt,wt,$,yt),z.unbindTexture()};const El=S.createFramebuffer(),Tl=S.createFramebuffer();this.copyTextureToTexture=function(L,j,nt=null,tt=null,$=0,yt=null){yt===null&&($!==0?(Li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=$,$=0):yt=0);let Lt,wt,It,Ut,kt,Ot,qt,re,ue;const de=L.isCompressedTexture?L.mipmaps[yt]:L.image;if(nt!==null)Lt=nt.max.x-nt.min.x,wt=nt.max.y-nt.min.y,It=nt.isBox3?nt.max.z-nt.min.z:1,Ut=nt.min.x,kt=nt.min.y,Ot=nt.isBox3?nt.min.z:0;else{const He=Math.pow(2,-$);Lt=Math.floor(de.width*He),wt=Math.floor(de.height*He),L.isDataArrayTexture?It=de.depth:L.isData3DTexture?It=Math.floor(de.depth*He):It=1,Ut=0,kt=0,Ot=0}tt!==null?(qt=tt.x,re=tt.y,ue=tt.z):(qt=0,re=0,ue=0);const ae=_t.convert(j.format),Bt=_t.convert(j.type);let ne;j.isData3DTexture?(I.setTexture3D(j,0),ne=S.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(I.setTexture2DArray(j,0),ne=S.TEXTURE_2D_ARRAY):(I.setTexture2D(j,0),ne=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,j.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,j.unpackAlignment);const Jt=S.getParameter(S.UNPACK_ROW_LENGTH),Ue=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Yn=S.getParameter(S.UNPACK_SKIP_PIXELS),Ne=S.getParameter(S.UNPACK_SKIP_ROWS),vi=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,de.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,de.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ut),S.pixelStorei(S.UNPACK_SKIP_ROWS,kt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ot);const le=L.isDataArrayTexture||L.isData3DTexture,Re=j.isDataArrayTexture||j.isData3DTexture;if(L.isDepthTexture){const He=y.get(L),Te=y.get(j),Ce=y.get(He.__renderTarget),Cr=y.get(Te.__renderTarget);z.bindFramebuffer(S.READ_FRAMEBUFFER,Ce.__webglFramebuffer),z.bindFramebuffer(S.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let In=0;In<It;In++)le&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,y.get(L).__webglTexture,$,Ot+In),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,y.get(j).__webglTexture,yt,ue+In)),S.blitFramebuffer(Ut,kt,Lt,wt,qt,re,Lt,wt,S.DEPTH_BUFFER_BIT,S.NEAREST);z.bindFramebuffer(S.READ_FRAMEBUFFER,null),z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if($!==0||L.isRenderTargetTexture||y.has(L)){const He=y.get(L),Te=y.get(j);z.bindFramebuffer(S.READ_FRAMEBUFFER,El),z.bindFramebuffer(S.DRAW_FRAMEBUFFER,Tl);for(let Ce=0;Ce<It;Ce++)le?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,He.__webglTexture,$,Ot+Ce):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,He.__webglTexture,$),Re?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Te.__webglTexture,yt,ue+Ce):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Te.__webglTexture,yt),$!==0?S.blitFramebuffer(Ut,kt,Lt,wt,qt,re,Lt,wt,S.COLOR_BUFFER_BIT,S.NEAREST):Re?S.copyTexSubImage3D(ne,yt,qt,re,ue+Ce,Ut,kt,Lt,wt):S.copyTexSubImage2D(ne,yt,qt,re,Ut,kt,Lt,wt);z.bindFramebuffer(S.READ_FRAMEBUFFER,null),z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Re?L.isDataTexture||L.isData3DTexture?S.texSubImage3D(ne,yt,qt,re,ue,Lt,wt,It,ae,Bt,de.data):j.isCompressedArrayTexture?S.compressedTexSubImage3D(ne,yt,qt,re,ue,Lt,wt,It,ae,de.data):S.texSubImage3D(ne,yt,qt,re,ue,Lt,wt,It,ae,Bt,de):L.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,yt,qt,re,Lt,wt,ae,Bt,de.data):L.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,yt,qt,re,de.width,de.height,ae,de.data):S.texSubImage2D(S.TEXTURE_2D,yt,qt,re,Lt,wt,ae,Bt,de);S.pixelStorei(S.UNPACK_ROW_LENGTH,Jt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ue),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Yn),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ne),S.pixelStorei(S.UNPACK_SKIP_IMAGES,vi),yt===0&&j.generateMipmaps&&S.generateMipmap(ne),z.unbindTexture()},this.initRenderTarget=function(L){y.get(L).__webglFramebuffer===void 0&&I.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),z.unbindTexture()},this.resetState=function(){O=0,P=0,U=null,z.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const Io={type:"change"},Sa={type:"start"},ml={type:"end"},cr=new pa,Uo=new Rn,Jp=Math.cos(70*lc.DEG2RAD),me=new K,De=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ls=1e-6;class Qp extends th{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Xn,this._lastTargetPosition=new K,this._quat=new Xn().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oo,this._sphericalDelta=new oo,this._scale=1,this._panOffset=new K,this._rotateStart=new Vt,this._rotateEnd=new Vt,this._rotateDelta=new Vt,this._panStart=new Vt,this._panEnd=new Vt,this._panDelta=new Vt,this._dollyStart=new Vt,this._dollyEnd=new Vt,this._dollyDelta=new Vt,this._dollyDirection=new K,this._mouse=new Vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=em.bind(this),this._onPointerDown=tm.bind(this),this._onPointerUp=nm.bind(this),this._onContextMenu=cm.bind(this),this._onMouseWheel=sm.bind(this),this._onKeyDown=am.bind(this),this._onTouchStart=om.bind(this),this._onTouchMove=lm.bind(this),this._onMouseDown=im.bind(this),this._onMouseMove=rm.bind(this),this._interceptControlDown=hm.bind(this),this._interceptControlUp=um.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Io),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;me.copy(e).sub(this.target),me.applyQuaternion(this._quat),this._spherical.setFromVector3(me),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=De:n>Math.PI&&(n-=De),r<-Math.PI?r+=De:r>Math.PI&&(r-=De),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(me.setFromSpherical(this._spherical),me.applyQuaternion(this._quatInverse),e.copy(this.target).add(me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=me.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new K(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new K(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(cr.origin.copy(this.object.position),cr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cr.direction))<Jp?this.object.lookAt(this.target):(Uo.setFromNormalAndCoplanarPoint(this.object.up,this.target),cr.intersectPlane(Uo,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ls||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ls||this._lastTargetPosition.distanceToSquared(this.target)>ls?(this.dispatchEvent(Io),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?De/60*this.autoRotateSpeed*t:De/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){me.setFromMatrixColumn(e,0),me.multiplyScalar(-t),this._panOffset.add(me)}_panUp(t,e){this.screenSpacePanning===!0?me.setFromMatrixColumn(e,1):(me.setFromMatrixColumn(e,0),me.crossVectors(this.object.up,me)),me.multiplyScalar(t),this._panOffset.add(me)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;me.copy(r).sub(this.target);let s=me.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function tm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function em(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function nm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ml),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function im(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case ci.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case ci.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Sa)}function rm(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function sm(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Sa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ml))}function am(i){this.enabled!==!1&&this._handleKeyDown(i)}function om(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Sa)}function lm(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function cm(i){this.enabled!==!1&&i.preventDefault()}function hm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function um(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class dm extends xa{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new jc(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t){function e(l){const u=new DataView(l),f=32/8*3+32/8*3*3+16/8,m=u.getUint32(80,!0);if(80+32/8+m*f===u.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(g,u,_))return!1;return!0}function n(l,u,f){for(let m=0,d=l.length;m<d;m++)if(l[m]!==u.getUint8(f+m))return!1;return!0}function r(l){const u=new DataView(l),f=u.getUint32(80,!0);let m,d,g,_=!1,p,h,x,E,T;for(let O=0;O<70;O++)u.getUint32(O,!1)==1129270351&&u.getUint8(O+4)==82&&u.getUint8(O+5)==61&&(_=!0,p=new Float32Array(f*3*3),h=u.getUint8(O+6)/255,x=u.getUint8(O+7)/255,E=u.getUint8(O+8)/255,T=u.getUint8(O+9)/255);const w=84,R=12*4+2,D=new Ie,F=new Float32Array(f*3*3),b=new Float32Array(f*3*3),A=new Yt;for(let O=0;O<f;O++){const P=w+O*R,U=u.getFloat32(P,!0),v=u.getFloat32(P+4,!0),B=u.getFloat32(P+8,!0);if(_){const W=u.getUint16(P+48,!0);W&32768?(m=h,d=x,g=E):(m=(W&31)/31,d=(W>>5&31)/31,g=(W>>10&31)/31)}for(let W=1;W<=3;W++){const k=P+W*12,Q=O*3*3+(W-1)*3;F[Q]=u.getFloat32(k,!0),F[Q+1]=u.getFloat32(k+4,!0),F[Q+2]=u.getFloat32(k+8,!0),b[Q]=U,b[Q+1]=v,b[Q+2]=B,_&&(A.setRGB(m,d,g,ke),p[Q]=A.r,p[Q+1]=A.g,p[Q+2]=A.b)}}return D.setAttribute("position",new Ge(F,3)),D.setAttribute("normal",new Ge(b,3)),_&&(D.setAttribute("color",new Ge(p,3)),D.hasColors=!0,D.alpha=T),D}function s(l){const u=new Ie,f=/solid([\s\S]*?)endsolid/g,m=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let g=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+_+_+_,"g"),h=new RegExp("normal"+_+_+_,"g"),x=[],E=[],T=[],w=new K;let R,D=0,F=0,b=0;for(;(R=f.exec(l))!==null;){F=b;const A=R[0],O=(R=d.exec(A))!==null?R[1]:"";for(T.push(O);(R=m.exec(A))!==null;){let v=0,B=0;const W=R[0];for(;(R=h.exec(W))!==null;)w.x=parseFloat(R[1]),w.y=parseFloat(R[2]),w.z=parseFloat(R[3]),B++;for(;(R=p.exec(W))!==null;)x.push(parseFloat(R[1]),parseFloat(R[2]),parseFloat(R[3])),E.push(w.x,w.y,w.z),v++,b++;B!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),v!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const P=F,U=b-F;u.userData.groupNames=T,u.addGroup(P,U,D),D++}return u.setAttribute("position",new Me(x,3)),u.setAttribute("normal",new Me(E,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let f=0;f<l.length;f++)u[f]=l.charCodeAt(f)&255;return u.buffer||u}else return l}const c=a(t);return e(c)?r(c):s(o(t))}}function hr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var _l={exports:{}};/*!

JSZip v3.10.2 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(l,u){if(!r[l]){if(!n[l]){var f=typeof hr=="function"&&hr;if(!u&&f)return f(l,!0);if(a)return a(l,!0);var m=new Error("Cannot find module '"+l+"'");throw m.code="MODULE_NOT_FOUND",m}var d=r[l]={exports:{}};n[l][0].call(d.exports,function(g){var _=n[l][1][g];return o(_||g)},d,d.exports,e,n,r,s)}return r[l].exports}for(var a=typeof hr=="function"&&hr,c=0;c<s.length;c++)o(s[c]);return o}({1:[function(e,n,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(c){for(var l,u,f,m,d,g,_,p=[],h=0,x=c.length,E=x,T=s.getTypeOf(c)!=="string";h<c.length;)E=x-h,f=T?(l=c[h++],u=h<x?c[h++]:0,h<x?c[h++]:0):(l=c.charCodeAt(h++),u=h<x?c.charCodeAt(h++):0,h<x?c.charCodeAt(h++):0),m=l>>2,d=(3&l)<<4|u>>4,g=1<E?(15&u)<<2|f>>6:64,_=2<E?63&f:64,p.push(a.charAt(m)+a.charAt(d)+a.charAt(g)+a.charAt(_));return p.join("")},r.decode=function(c){var l,u,f,m,d,g,_=0,p=0,h="data:";if(c.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var x,E=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===a.charAt(64)&&E--,c.charAt(c.length-2)===a.charAt(64)&&E--,E%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=o.uint8array?new Uint8Array(0|E):new Array(0|E);_<c.length;)l=a.indexOf(c.charAt(_++))<<2|(m=a.indexOf(c.charAt(_++)))>>4,u=(15&m)<<4|(d=a.indexOf(c.charAt(_++)))>>2,f=(3&d)<<6|(g=a.indexOf(c.charAt(_++))),x[p++]=l,d!==64&&(x[p++]=u),g!==64&&(x[p++]=f);return x}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),c=e("./stream/DataLengthProbe");function l(u,f,m,d,g){this.compressedSize=u,this.uncompressedSize=f,this.crc32=m,this.compression=d,this.compressedContent=g}l.prototype={getContentWorker:function(){var u=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),f=this;return u.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(u,f,m){return u.pipe(new a).pipe(new c("uncompressedSize")).pipe(f.compressWorker(m)).pipe(new c("compressedSize")).withStreamInfo("compression",f)},n.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),o=function(){for(var a,c=[],l=0;l<256;l++){a=l;for(var u=0;u<8;u++)a=1&a?3988292384^a>>>1:a>>>1;c[l]=a}return c}();n.exports=function(a,c){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(l,u,f,m){var d=o,g=m+f;l^=-1;for(var _=m;_<g;_++)l=l>>>8^d[255&(l^u[_])];return-1^l}(0|c,a,a.length,0):function(l,u,f,m){var d=o,g=m+f;l^=-1;for(var _=m;_<g;_++)l=l>>>8^d[255&(l^u.charCodeAt(_))];return-1^l}(0|c,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),c=e("./stream/GenericWorker"),l=s?"uint8array":"array";function u(f,m){c.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=m,this.meta={}}r.magic="\b\0",a.inherits(u,c),u.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(l,f.data),!1)},u.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(m){f.push({data:m,meta:f.meta})}},r.compressWorker=function(f){return new u("Deflate",f)},r.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(d,g){var _,p="";for(_=0;_<g;_++)p+=String.fromCharCode(255&d),d>>>=8;return p}function o(d,g,_,p,h,x){var E,T,w=d.file,R=d.compression,D=x!==l.utf8encode,F=a.transformTo("string",x(w.name)),b=a.transformTo("string",l.utf8encode(w.name)),A=w.comment,O=a.transformTo("string",x(A)),P=a.transformTo("string",l.utf8encode(A)),U=b.length!==w.name.length,v=P.length!==A.length,B="",W="",k="",Q=w.dir,J=w.date,ot={crc32:0,compressedSize:0,uncompressedSize:0};g&&!_||(ot.crc32=d.crc32,ot.compressedSize=d.compressedSize,ot.uncompressedSize=d.uncompressedSize);var G=0;g&&(G|=8),D||!U&&!v||(G|=2048);var X=0,pt=0;Q&&(X|=16),h==="UNIX"?(pt=798,X|=function(ut,it){var lt=ut;return ut||(lt=it?16893:33204),(65535&lt)<<16}(w.unixPermissions,Q)):(pt=20,X|=function(ut){return 63&(ut||0)}(w.dosPermissions)),E=J.getUTCHours(),E<<=6,E|=J.getUTCMinutes(),E<<=5,E|=J.getUTCSeconds()/2,T=J.getUTCFullYear()-1980,T<<=4,T|=J.getUTCMonth()+1,T<<=5,T|=J.getUTCDate(),U&&(W=s(1,1)+s(u(F),4)+b,B+="up"+s(W.length,2)+W),v&&(k=s(1,1)+s(u(O),4)+P,B+="uc"+s(k.length,2)+k);var mt="";return mt+=`
\0`,mt+=s(G,2),mt+=R.magic,mt+=s(E,2),mt+=s(T,2),mt+=s(ot.crc32,4),mt+=s(ot.compressedSize,4),mt+=s(ot.uncompressedSize,4),mt+=s(F.length,2),mt+=s(B.length,2),{fileRecord:f.LOCAL_FILE_HEADER+mt+F+B,dirRecord:f.CENTRAL_FILE_HEADER+s(pt,2)+mt+s(O.length,2)+"\0\0\0\0"+s(X,4)+s(p,4)+F+B+O}}var a=e("../utils"),c=e("../stream/GenericWorker"),l=e("../utf8"),u=e("../crc32"),f=e("../signature");function m(d,g,_,p){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=_,this.encodeFileName=p,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,c),m.prototype.push=function(d){var g=d.meta.percent||0,_=this.entriesCount,p=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,c.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:_?(g+100*(_-p-1))/_:100}}))},m.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var g=this.streamFiles&&!d.file.dir;if(g){var _=o(d,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(d){this.accumulate=!1;var g=this.streamFiles&&!d.file.dir,_=o(d,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),g)this.push({data:function(p){return f.DATA_DESCRIPTOR+s(p.crc32,4)+s(p.compressedSize,4)+s(p.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var d=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var _=this.bytesWritten-d,p=function(h,x,E,T,w){var R=a.transformTo("string",w(T));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(x,4)+s(E,4)+s(R.length,2)+R}(this.dirRecords.length,_,d,this.zipComment,this.encodeFileName);this.push({data:p,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(d){this._sources.push(d);var g=this;return d.on("data",function(_){g.processChunk(_)}),d.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),d.on("error",function(_){g.error(_)}),this},m.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(d){var g=this._sources;if(!c.prototype.error.call(this,d))return!1;for(var _=0;_<g.length;_++)try{g[_].error(d)}catch{}return!0},m.prototype.lock=function(){c.prototype.lock.call(this);for(var d=this._sources,g=0;g<d.length;g++)d[g].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,c,l){var u=new o(c.streamFiles,l,c.platform,c.encodeFileName),f=0;try{a.forEach(function(m,d){f++;var g=function(x,E){var T=x||E,w=s[T];if(!w)throw new Error(T+" is not a valid compression method !");return w}(d.options.compression,c.compression),_=d.options.compressionOptions||c.compressionOptions||{},p=d.dir,h=d.date;d._compressWorker(g,_).withStreamInfo("file",{name:m,dir:p,date:h,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(u)}),u.entriesCount=f}catch(m){u.error(m)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.2",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),c=e("./zipEntries"),l=e("./stream/Crc32Probe"),u=e("./nodejsUtils");function f(m){return new o.Promise(function(d,g){var _=m.decompressed.getContentWorker().pipe(new l);_.on("error",function(p){g(p)}).on("end",function(){_.streamInfo.crc32!==m.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}n.exports=function(m,d){var g=this;return d=s.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),u.isNode&&u.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,d.optimizedBinaryString,d.base64).then(function(_){var p=new c(d);return p.load(_),p}).then(function(_){var p=[o.Promise.resolve(_)],h=_.files;if(d.checkCRC32)for(var x=0;x<h.length;x++)p.push(f(h[x]));return o.Promise.all(p)}).then(function(_){for(var p=_.shift(),h=p.files,x=0;x<h.length;x++){var E=h[x],T=E.fileNameStr,w=s.resolve(E.fileNameStr);g.file(w,E.decompressed,{binary:!0,optimizedBinaryString:!0,date:E.date,dir:E.dir,comment:E.fileCommentStr.length?E.fileCommentStr:null,unixPermissions:E.unixPermissions,dosPermissions:E.dosPermissions,createFolders:d.createFolders}),E.dir||(g.file(w).unsafeOriginalName=T)}return p.zipComment.length&&(g.comment=p.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(c,l){o.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(l)}s.inherits(a,o),a.prototype._bindStream=function(c){var l=this;(this._stream=c).pause(),c.on("data",function(u){l.push({data:u,meta:{percent:0}})}).on("error",function(u){l.isPaused?this.generatedError=u:l.error(u)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function o(a,c,l){s.call(this,c),this._helper=a;var u=this;a.on("data",function(f,m){u.push(f)||u._helper.pause(),l&&l(m)}).on("error",function(f){u.emit("error",f)}).on("end",function(){u.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(w,R,D){var F,b=a.getTypeOf(R),A=a.extend(D||{},u);A.date=A.date||new Date,A.compression!==null&&(A.compression=A.compression.toUpperCase()),typeof A.unixPermissions=="string"&&(A.unixPermissions=parseInt(A.unixPermissions,8)),A.unixPermissions&&16384&A.unixPermissions&&(A.dir=!0),A.dosPermissions&&16&A.dosPermissions&&(A.dir=!0),A.dir&&(w=h(w)),A.createFolders&&(F=p(w))&&x.call(this,F,!0);var O=b==="string"&&A.binary===!1&&A.base64===!1;D&&D.binary!==void 0||(A.binary=!O),(R instanceof f&&R.uncompressedSize===0||A.dir||!R||R.length===0)&&(A.base64=!1,A.binary=!0,R="",A.compression="STORE",b="string");var P=null;P=R instanceof f||R instanceof c?R:g.isNode&&g.isStream(R)?new _(w,R):a.prepareContent(w,R,A.binary,A.optimizedBinaryString,A.base64);var U=new m(w,P,A);this.files[w]=U}var o=e("./utf8"),a=e("./utils"),c=e("./stream/GenericWorker"),l=e("./stream/StreamHelper"),u=e("./defaults"),f=e("./compressedObject"),m=e("./zipObject"),d=e("./generate"),g=e("./nodejsUtils"),_=e("./nodejs/NodejsStreamInputAdapter"),p=function(w){w.slice(-1)==="/"&&(w=w.substring(0,w.length-1));var R=w.lastIndexOf("/");return 0<R?w.substring(0,R):""},h=function(w){return w.slice(-1)!=="/"&&(w+="/"),w},x=function(w,R){return R=R!==void 0?R:u.createFolders,w=h(w),this.files[w]||s.call(this,w,null,{dir:!0,createFolders:R}),this.files[w]};function E(w){return Object.prototype.toString.call(w)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(w){var R,D,F;for(R in this.files)F=this.files[R],(D=R.slice(this.root.length,R.length))&&R.slice(0,this.root.length)===this.root&&w(D,F)},filter:function(w){var R=[];return this.forEach(function(D,F){w(D,F)&&R.push(F)}),R},file:function(w,R,D){if(arguments.length!==1)return w=this.root+w,s.call(this,w,R,D),this;if(E(w)){var F=w;return this.filter(function(A,O){return!O.dir&&F.test(A)})}var b=this.files[this.root+w];return b&&!b.dir?b:null},folder:function(w){if(!w)return this;if(E(w))return this.filter(function(b,A){return A.dir&&w.test(b)});var R=this.root+w,D=x.call(this,R),F=this.clone();return F.root=D.name,F},remove:function(w){w=this.root+w;var R=this.files[w];if(R||(w.slice(-1)!=="/"&&(w+="/"),R=this.files[w]),R&&!R.dir)delete this.files[w];else for(var D=this.filter(function(b,A){return A.name.slice(0,w.length)===w}),F=0;F<D.length;F++)delete this.files[D[F].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(w){var R,D={};try{if((D=a.extend(w||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=D.type.toLowerCase(),D.compression=D.compression.toUpperCase(),D.type==="binarystring"&&(D.type="string"),!D.type)throw new Error("No output type specified.");a.checkSupport(D.type),D.platform!=="darwin"&&D.platform!=="freebsd"&&D.platform!=="linux"&&D.platform!=="sunos"||(D.platform="UNIX"),D.platform==="win32"&&(D.platform="DOS");var F=D.comment||this.comment||"";R=d.generateWorker(this,D,F)}catch(b){(R=new c("error")).error(b)}return new l(R,D.type||"string",D.mimeType)},generateAsync:function(w,R){return this.generateInternalStream(w).accumulate(R)},generateNodeStream:function(w,R){return(w=w||{}).type||(w.type="nodebuffer"),this.generateInternalStream(w).toNodejsStream(R)}};n.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var c=0;c<this.data.length;c++)a[c]=255&a[c]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var c=a.charCodeAt(0),l=a.charCodeAt(1),u=a.charCodeAt(2),f=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===c&&this.data[m+1]===l&&this.data[m+2]===u&&this.data[m+3]===f)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var c=a.charCodeAt(0),l=a.charCodeAt(1),u=a.charCodeAt(2),f=a.charCodeAt(3),m=this.readData(4);return c===m[0]&&l===m[1]&&u===m[2]&&f===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var c,l=0;for(this.checkOffset(a),c=this.index+a-1;c>=this.index;c--)l=(l<<8)+this.byteAt(c);return this.index+=a,l},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),c=e("./StringReader"),l=e("./NodeBufferReader"),u=e("./Uint8ArrayReader");n.exports=function(f){var m=s.getTypeOf(f);return s.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new l(f):o.uint8array?new u(s.transformTo("uint8array",f)):new a(s.transformTo("array",f)):new c(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),o=e("../utils");function a(c){s.call(this,"ConvertWorker to "+c),this.destType=c}o.inherits(a,s),a.prototype.processChunk=function(c){this.push({data:o.transformTo(this.destType,c.data),meta:c.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(c){this.streamInfo.crc32=o(c.data,this.streamInfo.crc32||0),this.push(c)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(c){o.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}s.inherits(a,o),a.prototype.processChunk=function(c){if(c){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+c.data.length}o.prototype.processChunk.call(this,c)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(c){o.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(u){l.dataIsReady=!0,l.data=u,l.max=u&&u.length||0,l.type=s.getTypeOf(u),l.isPaused||l._tickAndRepeat()},function(u){l.error(u)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,l);break;case"uint8array":c=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":c=this.data.slice(this.index,l)}return this.index=l,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var c=0;c<this._listeners[o].length;c++)this._listeners[o][c].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(c){a.processChunk(c)}),o.on("end",function(){a.end()}),o.on("error",function(c){a.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),c=e("../base64"),l=e("../support"),u=e("../external"),f=null;if(l.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(g,_){return new u.Promise(function(p,h){var x=[],E=g._internalType,T=g._outputType,w=g._mimeType;g.on("data",function(R,D){x.push(R),_&&_(D)}).on("error",function(R){x=[],h(R)}).on("end",function(){try{var R=function(D,F,b){switch(D){case"blob":return s.newBlob(s.transformTo("arraybuffer",F),b);case"base64":return c.encode(F);default:return s.transformTo(D,F)}}(T,function(D,F){var b,A=0,O=null,P=0;for(b=0;b<F.length;b++)P+=F[b].length;switch(D){case"string":return F.join("");case"array":return Array.prototype.concat.apply([],F);case"uint8array":for(O=new Uint8Array(P),b=0;b<F.length;b++)O.set(F[b],A),A+=F[b].length;return O;case"nodebuffer":return Buffer.concat(F);default:throw new Error("concat : unsupported type '"+D+"'")}}(E,x),w);p(R)}catch(D){h(D)}x=[]}).resume()})}function d(g,_,p){var h=_;switch(_){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=_,this._mimeType=p,s.checkSupport(h),this._worker=g.pipe(new o(h)),g.lock()}catch(x){this._worker=new a("error"),this._worker.error(x)}}d.prototype={accumulate:function(g){return m(this,g)},on:function(g,_){var p=this;return g==="data"?this._worker.on(g,function(h){_.call(p,h.data,h.meta)}):this._worker.on(g,function(){s.delay(_,arguments,p)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},g)}},n.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),c=e("./stream/GenericWorker"),l=new Array(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;l[254]=l[254]=1;function f(){c.call(this,"utf-8 decode"),this.leftOver=null}function m(){c.call(this,"utf-8 encode")}r.utf8encode=function(d){return o.nodebuffer?a.newBufferFrom(d,"utf-8"):function(g){var _,p,h,x,E,T=g.length,w=0;for(x=0;x<T;x++)(64512&(p=g.charCodeAt(x)))==55296&&x+1<T&&(64512&(h=g.charCodeAt(x+1)))==56320&&(p=65536+(p-55296<<10)+(h-56320),x++),w+=p<128?1:p<2048?2:p<65536?3:4;for(_=o.uint8array?new Uint8Array(w):new Array(w),x=E=0;E<w;x++)(64512&(p=g.charCodeAt(x)))==55296&&x+1<T&&(64512&(h=g.charCodeAt(x+1)))==56320&&(p=65536+(p-55296<<10)+(h-56320),x++),p<128?_[E++]=p:(p<2048?_[E++]=192|p>>>6:(p<65536?_[E++]=224|p>>>12:(_[E++]=240|p>>>18,_[E++]=128|p>>>12&63),_[E++]=128|p>>>6&63),_[E++]=128|63&p);return _}(d)},r.utf8decode=function(d){return o.nodebuffer?s.transformTo("nodebuffer",d).toString("utf-8"):function(g){var _,p,h,x,E=g.length,T=new Array(2*E);for(_=p=0;_<E;)if((h=g[_++])<128)T[p++]=h;else if(4<(x=l[h]))T[p++]=65533,_+=x-1;else{for(h&=x===2?31:x===3?15:7;1<x&&_<E;)h=h<<6|63&g[_++],x--;1<x?T[p++]=65533:h<65536?T[p++]=h:(h-=65536,T[p++]=55296|h>>10&1023,T[p++]=56320|1023&h)}return T.length!==p&&(T.subarray?T=T.subarray(0,p):T.length=p),s.applyFromCharCode(T)}(d=s.transformTo(o.uint8array?"uint8array":"array",d))},s.inherits(f,c),f.prototype.processChunk=function(d){var g=s.transformTo(o.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var _=g;(g=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),g.set(_,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var p=function(x,E){var T;for((E=E||x.length)>x.length&&(E=x.length),T=E-1;0<=T&&(192&x[T])==128;)T--;return T<0||T===0?E:T+l[x[T]]>E?T:E}(g),h=g;p!==g.length&&(o.uint8array?(h=g.subarray(0,p),this.leftOver=g.subarray(p,g.length)):(h=g.slice(0,p),this.leftOver=g.slice(p,g.length))),this.push({data:r.utf8decode(h),meta:d.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(m,c),m.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),c=e("./external");function l(_){return _}function u(_,p){for(var h=0;h<_.length;++h)p[h]=255&_.charCodeAt(h);return p}e("setimmediate"),r.newBlob=function(_,p){r.checkSupport("blob");try{return new Blob([_],{type:p})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(_),h.getBlob(p)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(_,p,h){var x=[],E=0,T=_.length;if(T<=h)return String.fromCharCode.apply(null,_);for(;E<T;)p==="array"||p==="nodebuffer"?x.push(String.fromCharCode.apply(null,_.slice(E,Math.min(E+h,T)))):x.push(String.fromCharCode.apply(null,_.subarray(E,Math.min(E+h,T)))),E+=h;return x.join("")},stringifyByChar:function(_){for(var p="",h=0;h<_.length;h++)p+=String.fromCharCode(_[h]);return p},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(_){var p=65536,h=r.getTypeOf(_),x=!0;if(h==="uint8array"?x=f.applyCanBeUsed.uint8array:h==="nodebuffer"&&(x=f.applyCanBeUsed.nodebuffer),x)for(;1<p;)try{return f.stringifyByChunk(_,h,p)}catch{p=Math.floor(p/2)}return f.stringifyByChar(_)}function d(_,p){for(var h=0;h<_.length;h++)p[h]=_[h];return p}r.applyFromCharCode=m;var g={};g.string={string:l,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return g.string.uint8array(_).buffer},uint8array:function(_){return u(_,new Uint8Array(_.length))},nodebuffer:function(_){return u(_,a.allocBuffer(_.length))}},g.array={string:m,array:l,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(_)}},g.arraybuffer={string:function(_){return m(new Uint8Array(_))},array:function(_){return d(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:l,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(new Uint8Array(_))}},g.uint8array={string:m,array:function(_){return d(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:l,nodebuffer:function(_){return a.newBufferFrom(_)}},g.nodebuffer={string:m,array:function(_){return d(_,new Array(_.length))},arraybuffer:function(_){return g.nodebuffer.uint8array(_).buffer},uint8array:function(_){return d(_,new Uint8Array(_.length))},nodebuffer:l},r.transformTo=function(_,p){if(p=p||"",!_)return p;r.checkSupport(_);var h=r.getTypeOf(p);return g[h][_](p)},r.resolve=function(_){for(var p=_.split("/"),h=[],x=0;x<p.length;x++){var E=p[x];E==="."||E===""&&x!==0&&x!==p.length-1||(E===".."?h.pop():h.push(E))}return h.join("/")},r.getTypeOf=function(_){if(typeof _=="string")return"string";var p=Object.prototype.toString.call(_);return p==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(_)?"nodebuffer":s.uint8array&&p==="[object Uint8Array]"?"uint8array":s.arraybuffer&&p==="[object ArrayBuffer]"?"arraybuffer":void 0},r.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(_){var p,h,x="";for(h=0;h<(_||"").length;h++)x+="\\x"+((p=_.charCodeAt(h))<16?"0":"")+p.toString(16).toUpperCase();return x},r.delay=function(_,p,h){setImmediate(function(){_.apply(h||null,p||[])})},r.inherits=function(_,p){function h(){}h.prototype=p.prototype,_.prototype=new h},r.extend=function(){var _,p,h={};for(_=0;_<arguments.length;_++)for(p in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],p)&&h[p]===void 0&&(h[p]=arguments[_][p]);return h},r.prepareContent=function(_,p,h,x,E){return c.Promise.resolve(p).then(function(T){return s.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)?Blob.prototype.arrayBuffer!==void 0?T.arrayBuffer():typeof FileReader<"u"?new c.Promise(function(w,R){var D=new FileReader;D.onload=function(F){w(F.target.result)},D.onerror=function(F){R(F.target.error)},D.readAsArrayBuffer(T)}):c.Promise.reject(new Error(_+" is a Blob, but we have no way of reading it.")):T}).then(function(T){var w=r.getTypeOf(T);return w?(w==="arraybuffer"?T=r.transformTo("uint8array",T):w==="string"&&(E?T=o.decode(T):h&&x!==!0&&(T=function(R){return u(R,s.uint8array?new Uint8Array(R.length):new Array(R.length))}(T))),T):c.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),c=e("./zipEntry"),l=e("./support");function u(f){this.files=[],this.loadOptions=f}u.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(f)+")")}},isSignature:function(f,m){var d=this.reader.index;this.reader.setIndex(f);var g=this.reader.readString(4)===m;return this.reader.setIndex(d),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),m=l.uint8array?"uint8array":"array",d=o.transformTo(m,f);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,m,d,g=this.zip64EndOfCentralSize-44;0<g;)f=this.reader.readInt(2),m=this.reader.readInt(4),d=this.reader.readData(m),this.zip64ExtensibleData[f]={id:f,length:m,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,m;for(f=0;f<this.files.length;f++)m=this.files[f],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(f=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var m=f;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var g=m-d;if(0<g)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),c=e("./crc32"),l=e("./utf8"),u=e("./compressions"),f=e("./support");function m(d,g){this.options=d,this.loadOptions=g}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var g,_;if(d.skip(22),this.fileNameLength=d.readInt(2),_=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=function(p){for(var h in u)if(Object.prototype.hasOwnProperty.call(u,h)&&u[h].magic===p)return u[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,g,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var g=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(g),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var g,_,p,h=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<h;)g=d.readInt(2),_=d.readInt(2),p=d.readData(_),this.extraFields[g]={id:g,length:_,value:p};d.setIndex(h)},handleUTF8:function(){var d=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var _=o.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var p=this.findExtraFieldUnicodeComment();if(p!==null)this.fileCommentStr=p;else{var h=o.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var g=s(d.value);return g.readInt(1)!==1||c(this.fileName)!==g.readInt(4)?null:l.utf8decode(g.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var g=s(d.value);return g.readInt(1)!==1||c(this.fileComment)!==g.readInt(4)?null:l.utf8decode(g.readData(d.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(g,_,p){this.name=g,this.dir=p.dir,this.date=p.date,this.comment=p.comment,this.unixPermissions=p.unixPermissions,this.dosPermissions=p.dosPermissions,this._data=_,this._dataBinary=p.binary,this.options={compression:p.compression,compressionOptions:p.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),c=e("./utf8"),l=e("./compressedObject"),u=e("./stream/GenericWorker");s.prototype={internalStream:function(g){var _=null,p="string";try{if(!g)throw new Error("No output type specified.");var h=(p=g.toLowerCase())==="string"||p==="text";p!=="binarystring"&&p!=="text"||(p="string"),_=this._decompressWorker();var x=!this._dataBinary;x&&!h&&(_=_.pipe(new c.Utf8EncodeWorker)),!x&&h&&(_=_.pipe(new c.Utf8DecodeWorker))}catch(E){(_=new u("error")).error(E)}return new o(_,p,"")},async:function(g,_){return this.internalStream(g).accumulate(_)},nodeStream:function(g,_){return this.internalStream(g||"nodebuffer").toNodejsStream(_)},_compressWorker:function(g,_){if(this._data instanceof l&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var p=this._decompressWorker();return this._dataBinary||(p=p.pipe(new c.Utf8EncodeWorker)),l.createWorkerFrom(p,g,_)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof u?this._data:new a(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<f.length;d++)s.prototype[f[d]]=m;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var o,a,c=s.MutationObserver||s.WebKitMutationObserver;if(c){var l=0,u=new c(g),f=s.document.createTextNode("");u.observe(f,{characterData:!0}),o=function(){f.data=l=++l%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var _=s.document.createElement("script");_.onreadystatechange=function(){g(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},s.document.documentElement.appendChild(_)}:function(){setTimeout(g,0)};else{var m=new s.MessageChannel;m.port1.onmessage=g,o=function(){m.port2.postMessage(0)}}var d=[];function g(){var _,p;a=!0;for(var h=d.length;h;){for(p=d,d=[],_=-1;++_<h;)p[_]();h=d.length}a=!1}n.exports=function(_){d.push(_)!==1||a||o()}}).call(this,typeof _n<"u"?_n:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function o(){}var a={},c=["REJECTED"],l=["FULFILLED"],u=["PENDING"];function f(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,h!==o&&_(this,h)}function m(h,x,E){this.promise=h,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof E=="function"&&(this.onRejected=E,this.callRejected=this.otherCallRejected)}function d(h,x,E){s(function(){var T;try{T=x(E)}catch(w){return a.reject(h,w)}T===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,T)})}function g(h){var x=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof x=="function")return function(){x.apply(h,arguments)}}function _(h,x){var E=!1;function T(D){E||(E=!0,a.reject(h,D))}function w(D){E||(E=!0,a.resolve(h,D))}var R=p(function(){x(w,T)});R.status==="error"&&T(R.value)}function p(h,x){var E={};try{E.value=h(x),E.status="success"}catch(T){E.status="error",E.value=T}return E}(n.exports=f).prototype.finally=function(h){if(typeof h!="function")return this;var x=this.constructor;return this.then(function(E){return x.resolve(h()).then(function(){return E})},function(E){return x.resolve(h()).then(function(){throw E})})},f.prototype.catch=function(h){return this.then(null,h)},f.prototype.then=function(h,x){if(typeof h!="function"&&this.state===l||typeof x!="function"&&this.state===c)return this;var E=new this.constructor(o);return this.state!==u?d(E,this.state===l?h:x,this.outcome):this.queue.push(new m(E,h,x)),E},m.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},m.prototype.otherCallFulfilled=function(h){d(this.promise,this.onFulfilled,h)},m.prototype.callRejected=function(h){a.reject(this.promise,h)},m.prototype.otherCallRejected=function(h){d(this.promise,this.onRejected,h)},a.resolve=function(h,x){var E=p(g,x);if(E.status==="error")return a.reject(h,E.value);var T=E.value;if(T)_(h,T);else{h.state=l,h.outcome=x;for(var w=-1,R=h.queue.length;++w<R;)h.queue[w].callFulfilled(x)}return h},a.reject=function(h,x){h.state=c,h.outcome=x;for(var E=-1,T=h.queue.length;++E<T;)h.queue[E].callRejected(x);return h},f.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},f.reject=function(h){var x=new this(o);return a.reject(x,h)},f.all=function(h){var x=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=h.length,T=!1;if(!E)return this.resolve([]);for(var w=new Array(E),R=0,D=-1,F=new this(o);++D<E;)b(h[D],D);return F;function b(A,O){x.resolve(A).then(function(P){w[O]=P,++R!==E||T||(T=!0,a.resolve(F,w))},function(P){T||(T=!0,a.reject(F,P))})}},f.race=function(h){var x=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=h.length,T=!1;if(!E)return this.resolve([]);for(var w=-1,R=new this(o);++w<E;)D=h[w],x.resolve(D).then(function(F){T||(T=!0,a.resolve(R,F))},function(F){T||(T=!0,a.reject(R,F))});var D;return R}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),c=e("./zlib/messages"),l=e("./zlib/zstream"),u=Object.prototype.toString,f=0,m=-1,d=0,g=8;function _(h){if(!(this instanceof _))return new _(h);this.options=o.assign({level:m,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},h||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var E=s.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(E!==f)throw new Error(c[E]);if(x.header&&s.deflateSetHeader(this.strm,x.header),x.dictionary){var T;if(T=typeof x.dictionary=="string"?a.string2buf(x.dictionary):u.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(E=s.deflateSetDictionary(this.strm,T))!==f)throw new Error(c[E]);this._dict_set=!0}}function p(h,x){var E=new _(x);if(E.push(h,!0),E.err)throw E.msg||c[E.err];return E.result}_.prototype.push=function(h,x){var E,T,w=this.strm,R=this.options.chunkSize;if(this.ended)return!1;T=x===~~x?x:x===!0?4:0,typeof h=="string"?w.input=a.string2buf(h):u.call(h)==="[object ArrayBuffer]"?w.input=new Uint8Array(h):w.input=h,w.next_in=0,w.avail_in=w.input.length;do{if(w.avail_out===0&&(w.output=new o.Buf8(R),w.next_out=0,w.avail_out=R),(E=s.deflate(w,T))!==1&&E!==f)return this.onEnd(E),!(this.ended=!0);w.avail_out!==0&&(w.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(w.output,w.next_out))):this.onData(o.shrinkBuf(w.output,w.next_out)))}while((0<w.avail_in||w.avail_out===0)&&E!==1);return T===4?(E=s.deflateEnd(this.strm),this.onEnd(E),this.ended=!0,E===f):T!==2||(this.onEnd(f),!(w.avail_out=0))},_.prototype.onData=function(h){this.chunks.push(h)},_.prototype.onEnd=function(h){h===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=_,r.deflate=p,r.deflateRaw=function(h,x){return(x=x||{}).raw=!0,p(h,x)},r.gzip=function(h,x){return(x=x||{}).gzip=!0,p(h,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),c=e("./zlib/constants"),l=e("./zlib/messages"),u=e("./zlib/zstream"),f=e("./zlib/gzheader"),m=Object.prototype.toString;function d(_){if(!(this instanceof d))return new d(_);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},_||{});var p=this.options;p.raw&&0<=p.windowBits&&p.windowBits<16&&(p.windowBits=-p.windowBits,p.windowBits===0&&(p.windowBits=-15)),!(0<=p.windowBits&&p.windowBits<16)||_&&_.windowBits||(p.windowBits+=32),15<p.windowBits&&p.windowBits<48&&!(15&p.windowBits)&&(p.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,p.windowBits);if(h!==c.Z_OK)throw new Error(l[h]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function g(_,p){var h=new d(p);if(h.push(_,!0),h.err)throw h.msg||l[h.err];return h.result}d.prototype.push=function(_,p){var h,x,E,T,w,R,D=this.strm,F=this.options.chunkSize,b=this.options.dictionary,A=!1;if(this.ended)return!1;x=p===~~p?p:p===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof _=="string"?D.input=a.binstring2buf(_):m.call(_)==="[object ArrayBuffer]"?D.input=new Uint8Array(_):D.input=_,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new o.Buf8(F),D.next_out=0,D.avail_out=F),(h=s.inflate(D,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&b&&(R=typeof b=="string"?a.string2buf(b):m.call(b)==="[object ArrayBuffer]"?new Uint8Array(b):b,h=s.inflateSetDictionary(this.strm,R)),h===c.Z_BUF_ERROR&&A===!0&&(h=c.Z_OK,A=!1),h!==c.Z_STREAM_END&&h!==c.Z_OK)return this.onEnd(h),!(this.ended=!0);D.next_out&&(D.avail_out!==0&&h!==c.Z_STREAM_END&&(D.avail_in!==0||x!==c.Z_FINISH&&x!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(E=a.utf8border(D.output,D.next_out),T=D.next_out-E,w=a.buf2string(D.output,E),D.next_out=T,D.avail_out=F-T,T&&o.arraySet(D.output,D.output,E,T,0),this.onData(w)):this.onData(o.shrinkBuf(D.output,D.next_out)))),D.avail_in===0&&D.avail_out===0&&(A=!0)}while((0<D.avail_in||D.avail_out===0)&&h!==c.Z_STREAM_END);return h===c.Z_STREAM_END&&(x=c.Z_FINISH),x===c.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===c.Z_OK):x!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(D.avail_out=0))},d.prototype.onData=function(_){this.chunks.push(_)},d.prototype.onEnd=function(_){_===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},r.Inflate=d,r.inflate=g,r.inflateRaw=function(_,p){return(p=p||{}).raw=!0,g(_,p)},r.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(c){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var u=l.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var f in u)u.hasOwnProperty(f)&&(c[f]=u[f])}}return c},r.shrinkBuf=function(c,l){return c.length===l?c:c.subarray?c.subarray(0,l):(c.length=l,c)};var o={arraySet:function(c,l,u,f,m){if(l.subarray&&c.subarray)c.set(l.subarray(u,u+f),m);else for(var d=0;d<f;d++)c[m+d]=l[u+d]},flattenChunks:function(c){var l,u,f,m,d,g;for(l=f=0,u=c.length;l<u;l++)f+=c[l].length;for(g=new Uint8Array(f),l=m=0,u=c.length;l<u;l++)d=c[l],g.set(d,m),m+=d.length;return g}},a={arraySet:function(c,l,u,f,m){for(var d=0;d<f;d++)c[m+d]=l[u+d]},flattenChunks:function(c){return[].concat.apply([],c)}};r.setTyped=function(c){c?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var c=new s.Buf8(256),l=0;l<256;l++)c[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function u(f,m){if(m<65537&&(f.subarray&&a||!f.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(f,m));for(var d="",g=0;g<m;g++)d+=String.fromCharCode(f[g]);return d}c[254]=c[254]=1,r.string2buf=function(f){var m,d,g,_,p,h=f.length,x=0;for(_=0;_<h;_++)(64512&(d=f.charCodeAt(_)))==55296&&_+1<h&&(64512&(g=f.charCodeAt(_+1)))==56320&&(d=65536+(d-55296<<10)+(g-56320),_++),x+=d<128?1:d<2048?2:d<65536?3:4;for(m=new s.Buf8(x),_=p=0;p<x;_++)(64512&(d=f.charCodeAt(_)))==55296&&_+1<h&&(64512&(g=f.charCodeAt(_+1)))==56320&&(d=65536+(d-55296<<10)+(g-56320),_++),d<128?m[p++]=d:(d<2048?m[p++]=192|d>>>6:(d<65536?m[p++]=224|d>>>12:(m[p++]=240|d>>>18,m[p++]=128|d>>>12&63),m[p++]=128|d>>>6&63),m[p++]=128|63&d);return m},r.buf2binstring=function(f){return u(f,f.length)},r.binstring2buf=function(f){for(var m=new s.Buf8(f.length),d=0,g=m.length;d<g;d++)m[d]=f.charCodeAt(d);return m},r.buf2string=function(f,m){var d,g,_,p,h=m||f.length,x=new Array(2*h);for(d=g=0;d<h;)if((_=f[d++])<128)x[g++]=_;else if(4<(p=c[_]))x[g++]=65533,d+=p-1;else{for(_&=p===2?31:p===3?15:7;1<p&&d<h;)_=_<<6|63&f[d++],p--;1<p?x[g++]=65533:_<65536?x[g++]=_:(_-=65536,x[g++]=55296|_>>10&1023,x[g++]=56320|1023&_)}return u(x,g)},r.utf8border=function(f,m){var d;for((m=m||f.length)>f.length&&(m=f.length),d=m-1;0<=d&&(192&f[d])==128;)d--;return d<0||d===0?m:d+c[f[d]]>m?d:m}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,o,a,c){for(var l=65535&s|0,u=s>>>16&65535|0,f=0;a!==0;){for(a-=f=2e3<a?2e3:a;u=u+(l=l+o[c++]|0)|0,--f;);l%=65521,u%=65521}return l|u<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var o,a=[],c=0;c<256;c++){o=c;for(var l=0;l<8;l++)o=1&o?3988292384^o>>>1:o>>>1;a[c]=o}return a}();n.exports=function(o,a,c,l){var u=s,f=l+c;o^=-1;for(var m=l;m<f;m++)o=o>>>8^u[255&(o^a[m])];return-1^o}},{}],46:[function(e,n,r){var s,o=e("../utils/common"),a=e("./trees"),c=e("./adler32"),l=e("./crc32"),u=e("./messages"),f=0,m=4,d=0,g=-2,_=-1,p=4,h=2,x=8,E=9,T=286,w=30,R=19,D=2*T+1,F=15,b=3,A=258,O=A+b+1,P=42,U=113,v=1,B=2,W=3,k=4;function Q(M,et){return M.msg=u[et],et}function J(M){return(M<<1)-(4<M?9:0)}function ot(M){for(var et=M.length;0<=--et;)M[et]=0}function G(M){var et=M.state,Y=et.pending;Y>M.avail_out&&(Y=M.avail_out),Y!==0&&(o.arraySet(M.output,et.pending_buf,et.pending_out,Y,M.next_out),M.next_out+=Y,et.pending_out+=Y,M.total_out+=Y,M.avail_out-=Y,et.pending-=Y,et.pending===0&&(et.pending_out=0))}function X(M,et){a._tr_flush_block(M,0<=M.block_start?M.block_start:-1,M.strstart-M.block_start,et),M.block_start=M.strstart,G(M.strm)}function pt(M,et){M.pending_buf[M.pending++]=et}function mt(M,et){M.pending_buf[M.pending++]=et>>>8&255,M.pending_buf[M.pending++]=255&et}function ut(M,et){var Y,N,S=M.max_chain_length,H=M.strstart,rt=M.prev_length,at=M.nice_match,z=M.strstart>M.w_size-O?M.strstart-(M.w_size-O):0,C=M.window,y=M.w_mask,I=M.prev,q=M.strstart+A,st=C[H+rt-1],Z=C[H+rt];M.prev_length>=M.good_match&&(S>>=2),at>M.lookahead&&(at=M.lookahead);do if(C[(Y=et)+rt]===Z&&C[Y+rt-1]===st&&C[Y]===C[H]&&C[++Y]===C[H+1]){H+=2,Y++;do;while(C[++H]===C[++Y]&&C[++H]===C[++Y]&&C[++H]===C[++Y]&&C[++H]===C[++Y]&&C[++H]===C[++Y]&&C[++H]===C[++Y]&&C[++H]===C[++Y]&&C[++H]===C[++Y]&&H<q);if(N=A-(q-H),H=q-A,rt<N){if(M.match_start=et,at<=(rt=N))break;st=C[H+rt-1],Z=C[H+rt]}}while((et=I[et&y])>z&&--S!=0);return rt<=M.lookahead?rt:M.lookahead}function it(M){var et,Y,N,S,H,rt,at,z,C,y,I=M.w_size;do{if(S=M.window_size-M.lookahead-M.strstart,M.strstart>=I+(I-O)){for(o.arraySet(M.window,M.window,I,I,0),M.match_start-=I,M.strstart-=I,M.block_start-=I,et=Y=M.hash_size;N=M.head[--et],M.head[et]=I<=N?N-I:0,--Y;);for(et=Y=I;N=M.prev[--et],M.prev[et]=I<=N?N-I:0,--Y;);S+=I}if(M.strm.avail_in===0)break;if(rt=M.strm,at=M.window,z=M.strstart+M.lookahead,C=S,y=void 0,y=rt.avail_in,C<y&&(y=C),Y=y===0?0:(rt.avail_in-=y,o.arraySet(at,rt.input,rt.next_in,y,z),rt.state.wrap===1?rt.adler=c(rt.adler,at,y,z):rt.state.wrap===2&&(rt.adler=l(rt.adler,at,y,z)),rt.next_in+=y,rt.total_in+=y,y),M.lookahead+=Y,M.lookahead+M.insert>=b)for(H=M.strstart-M.insert,M.ins_h=M.window[H],M.ins_h=(M.ins_h<<M.hash_shift^M.window[H+1])&M.hash_mask;M.insert&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[H+b-1])&M.hash_mask,M.prev[H&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=H,H++,M.insert--,!(M.lookahead+M.insert<b)););}while(M.lookahead<O&&M.strm.avail_in!==0)}function lt(M,et){for(var Y,N;;){if(M.lookahead<O){if(it(M),M.lookahead<O&&et===f)return v;if(M.lookahead===0)break}if(Y=0,M.lookahead>=b&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+b-1])&M.hash_mask,Y=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),Y!==0&&M.strstart-Y<=M.w_size-O&&(M.match_length=ut(M,Y)),M.match_length>=b)if(N=a._tr_tally(M,M.strstart-M.match_start,M.match_length-b),M.lookahead-=M.match_length,M.match_length<=M.max_lazy_match&&M.lookahead>=b){for(M.match_length--;M.strstart++,M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+b-1])&M.hash_mask,Y=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart,--M.match_length!=0;);M.strstart++}else M.strstart+=M.match_length,M.match_length=0,M.ins_h=M.window[M.strstart],M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+1])&M.hash_mask;else N=a._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++;if(N&&(X(M,!1),M.strm.avail_out===0))return v}return M.insert=M.strstart<b-1?M.strstart:b-1,et===m?(X(M,!0),M.strm.avail_out===0?W:k):M.last_lit&&(X(M,!1),M.strm.avail_out===0)?v:B}function dt(M,et){for(var Y,N,S;;){if(M.lookahead<O){if(it(M),M.lookahead<O&&et===f)return v;if(M.lookahead===0)break}if(Y=0,M.lookahead>=b&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+b-1])&M.hash_mask,Y=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),M.prev_length=M.match_length,M.prev_match=M.match_start,M.match_length=b-1,Y!==0&&M.prev_length<M.max_lazy_match&&M.strstart-Y<=M.w_size-O&&(M.match_length=ut(M,Y),M.match_length<=5&&(M.strategy===1||M.match_length===b&&4096<M.strstart-M.match_start)&&(M.match_length=b-1)),M.prev_length>=b&&M.match_length<=M.prev_length){for(S=M.strstart+M.lookahead-b,N=a._tr_tally(M,M.strstart-1-M.prev_match,M.prev_length-b),M.lookahead-=M.prev_length-1,M.prev_length-=2;++M.strstart<=S&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+b-1])&M.hash_mask,Y=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),--M.prev_length!=0;);if(M.match_available=0,M.match_length=b-1,M.strstart++,N&&(X(M,!1),M.strm.avail_out===0))return v}else if(M.match_available){if((N=a._tr_tally(M,0,M.window[M.strstart-1]))&&X(M,!1),M.strstart++,M.lookahead--,M.strm.avail_out===0)return v}else M.match_available=1,M.strstart++,M.lookahead--}return M.match_available&&(N=a._tr_tally(M,0,M.window[M.strstart-1]),M.match_available=0),M.insert=M.strstart<b-1?M.strstart:b-1,et===m?(X(M,!0),M.strm.avail_out===0?W:k):M.last_lit&&(X(M,!1),M.strm.avail_out===0)?v:B}function At(M,et,Y,N,S){this.good_length=M,this.max_lazy=et,this.nice_length=Y,this.max_chain=N,this.func=S}function St(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*D),this.dyn_dtree=new o.Buf16(2*(2*w+1)),this.bl_tree=new o.Buf16(2*(2*R+1)),ot(this.dyn_ltree),ot(this.dyn_dtree),ot(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(F+1),this.heap=new o.Buf16(2*T+1),ot(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*T+1),ot(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Nt(M){var et;return M&&M.state?(M.total_in=M.total_out=0,M.data_type=h,(et=M.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?P:U,M.adler=et.wrap===2?0:1,et.last_flush=f,a._tr_init(et),d):Q(M,g)}function te(M){var et=Nt(M);return et===d&&function(Y){Y.window_size=2*Y.w_size,ot(Y.head),Y.max_lazy_match=s[Y.level].max_lazy,Y.good_match=s[Y.level].good_length,Y.nice_match=s[Y.level].nice_length,Y.max_chain_length=s[Y.level].max_chain,Y.strstart=0,Y.block_start=0,Y.lookahead=0,Y.insert=0,Y.match_length=Y.prev_length=b-1,Y.match_available=0,Y.ins_h=0}(M.state),et}function Gt(M,et,Y,N,S,H){if(!M)return g;var rt=1;if(et===_&&(et=6),N<0?(rt=0,N=-N):15<N&&(rt=2,N-=16),S<1||E<S||Y!==x||N<8||15<N||et<0||9<et||H<0||p<H)return Q(M,g);N===8&&(N=9);var at=new St;return(M.state=at).strm=M,at.wrap=rt,at.gzhead=null,at.w_bits=N,at.w_size=1<<at.w_bits,at.w_mask=at.w_size-1,at.hash_bits=S+7,at.hash_size=1<<at.hash_bits,at.hash_mask=at.hash_size-1,at.hash_shift=~~((at.hash_bits+b-1)/b),at.window=new o.Buf8(2*at.w_size),at.head=new o.Buf16(at.hash_size),at.prev=new o.Buf16(at.w_size),at.lit_bufsize=1<<S+6,at.pending_buf_size=4*at.lit_bufsize,at.pending_buf=new o.Buf8(at.pending_buf_size),at.d_buf=1*at.lit_bufsize,at.l_buf=3*at.lit_bufsize,at.level=et,at.strategy=H,at.method=Y,te(M)}s=[new At(0,0,0,0,function(M,et){var Y=65535;for(Y>M.pending_buf_size-5&&(Y=M.pending_buf_size-5);;){if(M.lookahead<=1){if(it(M),M.lookahead===0&&et===f)return v;if(M.lookahead===0)break}M.strstart+=M.lookahead,M.lookahead=0;var N=M.block_start+Y;if((M.strstart===0||M.strstart>=N)&&(M.lookahead=M.strstart-N,M.strstart=N,X(M,!1),M.strm.avail_out===0)||M.strstart-M.block_start>=M.w_size-O&&(X(M,!1),M.strm.avail_out===0))return v}return M.insert=0,et===m?(X(M,!0),M.strm.avail_out===0?W:k):(M.strstart>M.block_start&&(X(M,!1),M.strm.avail_out),v)}),new At(4,4,8,4,lt),new At(4,5,16,8,lt),new At(4,6,32,32,lt),new At(4,4,16,16,dt),new At(8,16,32,32,dt),new At(8,16,128,128,dt),new At(8,32,128,256,dt),new At(32,128,258,1024,dt),new At(32,258,258,4096,dt)],r.deflateInit=function(M,et){return Gt(M,et,x,15,8,0)},r.deflateInit2=Gt,r.deflateReset=te,r.deflateResetKeep=Nt,r.deflateSetHeader=function(M,et){return M&&M.state?M.state.wrap!==2?g:(M.state.gzhead=et,d):g},r.deflate=function(M,et){var Y,N,S,H;if(!M||!M.state||5<et||et<0)return M?Q(M,g):g;if(N=M.state,!M.output||!M.input&&M.avail_in!==0||N.status===666&&et!==m)return Q(M,M.avail_out===0?-5:g);if(N.strm=M,Y=N.last_flush,N.last_flush=et,N.status===P)if(N.wrap===2)M.adler=0,pt(N,31),pt(N,139),pt(N,8),N.gzhead?(pt(N,(N.gzhead.text?1:0)+(N.gzhead.hcrc?2:0)+(N.gzhead.extra?4:0)+(N.gzhead.name?8:0)+(N.gzhead.comment?16:0)),pt(N,255&N.gzhead.time),pt(N,N.gzhead.time>>8&255),pt(N,N.gzhead.time>>16&255),pt(N,N.gzhead.time>>24&255),pt(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),pt(N,255&N.gzhead.os),N.gzhead.extra&&N.gzhead.extra.length&&(pt(N,255&N.gzhead.extra.length),pt(N,N.gzhead.extra.length>>8&255)),N.gzhead.hcrc&&(M.adler=l(M.adler,N.pending_buf,N.pending,0)),N.gzindex=0,N.status=69):(pt(N,0),pt(N,0),pt(N,0),pt(N,0),pt(N,0),pt(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),pt(N,3),N.status=U);else{var rt=x+(N.w_bits-8<<4)<<8;rt|=(2<=N.strategy||N.level<2?0:N.level<6?1:N.level===6?2:3)<<6,N.strstart!==0&&(rt|=32),rt+=31-rt%31,N.status=U,mt(N,rt),N.strstart!==0&&(mt(N,M.adler>>>16),mt(N,65535&M.adler)),M.adler=1}if(N.status===69)if(N.gzhead.extra){for(S=N.pending;N.gzindex<(65535&N.gzhead.extra.length)&&(N.pending!==N.pending_buf_size||(N.gzhead.hcrc&&N.pending>S&&(M.adler=l(M.adler,N.pending_buf,N.pending-S,S)),G(M),S=N.pending,N.pending!==N.pending_buf_size));)pt(N,255&N.gzhead.extra[N.gzindex]),N.gzindex++;N.gzhead.hcrc&&N.pending>S&&(M.adler=l(M.adler,N.pending_buf,N.pending-S,S)),N.gzindex===N.gzhead.extra.length&&(N.gzindex=0,N.status=73)}else N.status=73;if(N.status===73)if(N.gzhead.name){S=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>S&&(M.adler=l(M.adler,N.pending_buf,N.pending-S,S)),G(M),S=N.pending,N.pending===N.pending_buf_size)){H=1;break}H=N.gzindex<N.gzhead.name.length?255&N.gzhead.name.charCodeAt(N.gzindex++):0,pt(N,H)}while(H!==0);N.gzhead.hcrc&&N.pending>S&&(M.adler=l(M.adler,N.pending_buf,N.pending-S,S)),H===0&&(N.gzindex=0,N.status=91)}else N.status=91;if(N.status===91)if(N.gzhead.comment){S=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>S&&(M.adler=l(M.adler,N.pending_buf,N.pending-S,S)),G(M),S=N.pending,N.pending===N.pending_buf_size)){H=1;break}H=N.gzindex<N.gzhead.comment.length?255&N.gzhead.comment.charCodeAt(N.gzindex++):0,pt(N,H)}while(H!==0);N.gzhead.hcrc&&N.pending>S&&(M.adler=l(M.adler,N.pending_buf,N.pending-S,S)),H===0&&(N.status=103)}else N.status=103;if(N.status===103&&(N.gzhead.hcrc?(N.pending+2>N.pending_buf_size&&G(M),N.pending+2<=N.pending_buf_size&&(pt(N,255&M.adler),pt(N,M.adler>>8&255),M.adler=0,N.status=U)):N.status=U),N.pending!==0){if(G(M),M.avail_out===0)return N.last_flush=-1,d}else if(M.avail_in===0&&J(et)<=J(Y)&&et!==m)return Q(M,-5);if(N.status===666&&M.avail_in!==0)return Q(M,-5);if(M.avail_in!==0||N.lookahead!==0||et!==f&&N.status!==666){var at=N.strategy===2?function(z,C){for(var y;;){if(z.lookahead===0&&(it(z),z.lookahead===0)){if(C===f)return v;break}if(z.match_length=0,y=a._tr_tally(z,0,z.window[z.strstart]),z.lookahead--,z.strstart++,y&&(X(z,!1),z.strm.avail_out===0))return v}return z.insert=0,C===m?(X(z,!0),z.strm.avail_out===0?W:k):z.last_lit&&(X(z,!1),z.strm.avail_out===0)?v:B}(N,et):N.strategy===3?function(z,C){for(var y,I,q,st,Z=z.window;;){if(z.lookahead<=A){if(it(z),z.lookahead<=A&&C===f)return v;if(z.lookahead===0)break}if(z.match_length=0,z.lookahead>=b&&0<z.strstart&&(I=Z[q=z.strstart-1])===Z[++q]&&I===Z[++q]&&I===Z[++q]){st=z.strstart+A;do;while(I===Z[++q]&&I===Z[++q]&&I===Z[++q]&&I===Z[++q]&&I===Z[++q]&&I===Z[++q]&&I===Z[++q]&&I===Z[++q]&&q<st);z.match_length=A-(st-q),z.match_length>z.lookahead&&(z.match_length=z.lookahead)}if(z.match_length>=b?(y=a._tr_tally(z,1,z.match_length-b),z.lookahead-=z.match_length,z.strstart+=z.match_length,z.match_length=0):(y=a._tr_tally(z,0,z.window[z.strstart]),z.lookahead--,z.strstart++),y&&(X(z,!1),z.strm.avail_out===0))return v}return z.insert=0,C===m?(X(z,!0),z.strm.avail_out===0?W:k):z.last_lit&&(X(z,!1),z.strm.avail_out===0)?v:B}(N,et):s[N.level].func(N,et);if(at!==W&&at!==k||(N.status=666),at===v||at===W)return M.avail_out===0&&(N.last_flush=-1),d;if(at===B&&(et===1?a._tr_align(N):et!==5&&(a._tr_stored_block(N,0,0,!1),et===3&&(ot(N.head),N.lookahead===0&&(N.strstart=0,N.block_start=0,N.insert=0))),G(M),M.avail_out===0))return N.last_flush=-1,d}return et!==m?d:N.wrap<=0?1:(N.wrap===2?(pt(N,255&M.adler),pt(N,M.adler>>8&255),pt(N,M.adler>>16&255),pt(N,M.adler>>24&255),pt(N,255&M.total_in),pt(N,M.total_in>>8&255),pt(N,M.total_in>>16&255),pt(N,M.total_in>>24&255)):(mt(N,M.adler>>>16),mt(N,65535&M.adler)),G(M),0<N.wrap&&(N.wrap=-N.wrap),N.pending!==0?d:1)},r.deflateEnd=function(M){var et;return M&&M.state?(et=M.state.status)!==P&&et!==69&&et!==73&&et!==91&&et!==103&&et!==U&&et!==666?Q(M,g):(M.state=null,et===U?Q(M,-3):d):g},r.deflateSetDictionary=function(M,et){var Y,N,S,H,rt,at,z,C,y=et.length;if(!M||!M.state||(H=(Y=M.state).wrap)===2||H===1&&Y.status!==P||Y.lookahead)return g;for(H===1&&(M.adler=c(M.adler,et,y,0)),Y.wrap=0,y>=Y.w_size&&(H===0&&(ot(Y.head),Y.strstart=0,Y.block_start=0,Y.insert=0),C=new o.Buf8(Y.w_size),o.arraySet(C,et,y-Y.w_size,Y.w_size,0),et=C,y=Y.w_size),rt=M.avail_in,at=M.next_in,z=M.input,M.avail_in=y,M.next_in=0,M.input=et,it(Y);Y.lookahead>=b;){for(N=Y.strstart,S=Y.lookahead-(b-1);Y.ins_h=(Y.ins_h<<Y.hash_shift^Y.window[N+b-1])&Y.hash_mask,Y.prev[N&Y.w_mask]=Y.head[Y.ins_h],Y.head[Y.ins_h]=N,N++,--S;);Y.strstart=N,Y.lookahead=b-1,it(Y)}return Y.strstart+=Y.lookahead,Y.block_start=Y.strstart,Y.insert=Y.lookahead,Y.lookahead=0,Y.match_length=Y.prev_length=b-1,Y.match_available=0,M.next_in=at,M.input=z,M.avail_in=rt,Y.wrap=H,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,o){var a,c,l,u,f,m,d,g,_,p,h,x,E,T,w,R,D,F,b,A,O,P,U,v,B;a=s.state,c=s.next_in,v=s.input,l=c+(s.avail_in-5),u=s.next_out,B=s.output,f=u-(o-s.avail_out),m=u+(s.avail_out-257),d=a.dmax,g=a.wsize,_=a.whave,p=a.wnext,h=a.window,x=a.hold,E=a.bits,T=a.lencode,w=a.distcode,R=(1<<a.lenbits)-1,D=(1<<a.distbits)-1;t:do{E<15&&(x+=v[c++]<<E,E+=8,x+=v[c++]<<E,E+=8),F=T[x&R];e:for(;;){if(x>>>=b=F>>>24,E-=b,(b=F>>>16&255)===0)B[u++]=65535&F;else{if(!(16&b)){if(!(64&b)){F=T[(65535&F)+(x&(1<<b)-1)];continue e}if(32&b){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}A=65535&F,(b&=15)&&(E<b&&(x+=v[c++]<<E,E+=8),A+=x&(1<<b)-1,x>>>=b,E-=b),E<15&&(x+=v[c++]<<E,E+=8,x+=v[c++]<<E,E+=8),F=w[x&D];n:for(;;){if(x>>>=b=F>>>24,E-=b,!(16&(b=F>>>16&255))){if(!(64&b)){F=w[(65535&F)+(x&(1<<b)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(O=65535&F,E<(b&=15)&&(x+=v[c++]<<E,(E+=8)<b&&(x+=v[c++]<<E,E+=8)),d<(O+=x&(1<<b)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(x>>>=b,E-=b,(b=u-f)<O){if(_<(b=O-b)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(U=h,(P=0)===p){if(P+=g-b,b<A){for(A-=b;B[u++]=h[P++],--b;);P=u-O,U=B}}else if(p<b){if(P+=g+p-b,(b-=p)<A){for(A-=b;B[u++]=h[P++],--b;);if(P=0,p<A){for(A-=b=p;B[u++]=h[P++],--b;);P=u-O,U=B}}}else if(P+=p-b,b<A){for(A-=b;B[u++]=h[P++],--b;);P=u-O,U=B}for(;2<A;)B[u++]=U[P++],B[u++]=U[P++],B[u++]=U[P++],A-=3;A&&(B[u++]=U[P++],1<A&&(B[u++]=U[P++]))}else{for(P=u-O;B[u++]=B[P++],B[u++]=B[P++],B[u++]=B[P++],2<(A-=3););A&&(B[u++]=B[P++],1<A&&(B[u++]=B[P++]))}break}}break}}while(c<l&&u<m);c-=A=E>>3,x&=(1<<(E-=A<<3))-1,s.next_in=c,s.next_out=u,s.avail_in=c<l?l-c+5:5-(c-l),s.avail_out=u<m?m-u+257:257-(u-m),a.hold=x,a.bits=E}},{}],49:[function(e,n,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),c=e("./inffast"),l=e("./inftrees"),u=1,f=2,m=0,d=-2,g=1,_=852,p=592;function h(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function E(P){var U;return P&&P.state?(U=P.state,P.total_in=P.total_out=U.total=0,P.msg="",U.wrap&&(P.adler=1&U.wrap),U.mode=g,U.last=0,U.havedict=0,U.dmax=32768,U.head=null,U.hold=0,U.bits=0,U.lencode=U.lendyn=new s.Buf32(_),U.distcode=U.distdyn=new s.Buf32(p),U.sane=1,U.back=-1,m):d}function T(P){var U;return P&&P.state?((U=P.state).wsize=0,U.whave=0,U.wnext=0,E(P)):d}function w(P,U){var v,B;return P&&P.state?(B=P.state,U<0?(v=0,U=-U):(v=1+(U>>4),U<48&&(U&=15)),U&&(U<8||15<U)?d:(B.window!==null&&B.wbits!==U&&(B.window=null),B.wrap=v,B.wbits=U,T(P))):d}function R(P,U){var v,B;return P?(B=new x,(P.state=B).window=null,(v=w(P,U))!==m&&(P.state=null),v):d}var D,F,b=!0;function A(P){if(b){var U;for(D=new s.Buf32(512),F=new s.Buf32(32),U=0;U<144;)P.lens[U++]=8;for(;U<256;)P.lens[U++]=9;for(;U<280;)P.lens[U++]=7;for(;U<288;)P.lens[U++]=8;for(l(u,P.lens,0,288,D,0,P.work,{bits:9}),U=0;U<32;)P.lens[U++]=5;l(f,P.lens,0,32,F,0,P.work,{bits:5}),b=!1}P.lencode=D,P.lenbits=9,P.distcode=F,P.distbits=5}function O(P,U,v,B){var W,k=P.state;return k.window===null&&(k.wsize=1<<k.wbits,k.wnext=0,k.whave=0,k.window=new s.Buf8(k.wsize)),B>=k.wsize?(s.arraySet(k.window,U,v-k.wsize,k.wsize,0),k.wnext=0,k.whave=k.wsize):(B<(W=k.wsize-k.wnext)&&(W=B),s.arraySet(k.window,U,v-B,W,k.wnext),(B-=W)?(s.arraySet(k.window,U,v-B,B,0),k.wnext=B,k.whave=k.wsize):(k.wnext+=W,k.wnext===k.wsize&&(k.wnext=0),k.whave<k.wsize&&(k.whave+=W))),0}r.inflateReset=T,r.inflateReset2=w,r.inflateResetKeep=E,r.inflateInit=function(P){return R(P,15)},r.inflateInit2=R,r.inflate=function(P,U){var v,B,W,k,Q,J,ot,G,X,pt,mt,ut,it,lt,dt,At,St,Nt,te,Gt,M,et,Y,N,S=0,H=new s.Buf8(4),rt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return d;(v=P.state).mode===12&&(v.mode=13),Q=P.next_out,W=P.output,ot=P.avail_out,k=P.next_in,B=P.input,J=P.avail_in,G=v.hold,X=v.bits,pt=J,mt=ot,et=m;t:for(;;)switch(v.mode){case g:if(v.wrap===0){v.mode=13;break}for(;X<16;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}if(2&v.wrap&&G===35615){H[v.check=0]=255&G,H[1]=G>>>8&255,v.check=a(v.check,H,2,0),X=G=0,v.mode=2;break}if(v.flags=0,v.head&&(v.head.done=!1),!(1&v.wrap)||(((255&G)<<8)+(G>>8))%31){P.msg="incorrect header check",v.mode=30;break}if((15&G)!=8){P.msg="unknown compression method",v.mode=30;break}if(X-=4,M=8+(15&(G>>>=4)),v.wbits===0)v.wbits=M;else if(M>v.wbits){P.msg="invalid window size",v.mode=30;break}v.dmax=1<<M,P.adler=v.check=1,v.mode=512&G?10:12,X=G=0;break;case 2:for(;X<16;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}if(v.flags=G,(255&v.flags)!=8){P.msg="unknown compression method",v.mode=30;break}if(57344&v.flags){P.msg="unknown header flags set",v.mode=30;break}v.head&&(v.head.text=G>>8&1),512&v.flags&&(H[0]=255&G,H[1]=G>>>8&255,v.check=a(v.check,H,2,0)),X=G=0,v.mode=3;case 3:for(;X<32;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}v.head&&(v.head.time=G),512&v.flags&&(H[0]=255&G,H[1]=G>>>8&255,H[2]=G>>>16&255,H[3]=G>>>24&255,v.check=a(v.check,H,4,0)),X=G=0,v.mode=4;case 4:for(;X<16;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}v.head&&(v.head.xflags=255&G,v.head.os=G>>8),512&v.flags&&(H[0]=255&G,H[1]=G>>>8&255,v.check=a(v.check,H,2,0)),X=G=0,v.mode=5;case 5:if(1024&v.flags){for(;X<16;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}v.length=G,v.head&&(v.head.extra_len=G),512&v.flags&&(H[0]=255&G,H[1]=G>>>8&255,v.check=a(v.check,H,2,0)),X=G=0}else v.head&&(v.head.extra=null);v.mode=6;case 6:if(1024&v.flags&&(J<(ut=v.length)&&(ut=J),ut&&(v.head&&(M=v.head.extra_len-v.length,v.head.extra||(v.head.extra=new Array(v.head.extra_len)),s.arraySet(v.head.extra,B,k,ut,M)),512&v.flags&&(v.check=a(v.check,B,ut,k)),J-=ut,k+=ut,v.length-=ut),v.length))break t;v.length=0,v.mode=7;case 7:if(2048&v.flags){if(J===0)break t;for(ut=0;M=B[k+ut++],v.head&&M&&v.length<65536&&(v.head.name+=String.fromCharCode(M)),M&&ut<J;);if(512&v.flags&&(v.check=a(v.check,B,ut,k)),J-=ut,k+=ut,M)break t}else v.head&&(v.head.name=null);v.length=0,v.mode=8;case 8:if(4096&v.flags){if(J===0)break t;for(ut=0;M=B[k+ut++],v.head&&M&&v.length<65536&&(v.head.comment+=String.fromCharCode(M)),M&&ut<J;);if(512&v.flags&&(v.check=a(v.check,B,ut,k)),J-=ut,k+=ut,M)break t}else v.head&&(v.head.comment=null);v.mode=9;case 9:if(512&v.flags){for(;X<16;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}if(G!==(65535&v.check)){P.msg="header crc mismatch",v.mode=30;break}X=G=0}v.head&&(v.head.hcrc=v.flags>>9&1,v.head.done=!0),P.adler=v.check=0,v.mode=12;break;case 10:for(;X<32;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}P.adler=v.check=h(G),X=G=0,v.mode=11;case 11:if(v.havedict===0)return P.next_out=Q,P.avail_out=ot,P.next_in=k,P.avail_in=J,v.hold=G,v.bits=X,2;P.adler=v.check=1,v.mode=12;case 12:if(U===5||U===6)break t;case 13:if(v.last){G>>>=7&X,X-=7&X,v.mode=27;break}for(;X<3;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}switch(v.last=1&G,X-=1,3&(G>>>=1)){case 0:v.mode=14;break;case 1:if(A(v),v.mode=20,U!==6)break;G>>>=2,X-=2;break t;case 2:v.mode=17;break;case 3:P.msg="invalid block type",v.mode=30}G>>>=2,X-=2;break;case 14:for(G>>>=7&X,X-=7&X;X<32;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}if((65535&G)!=(G>>>16^65535)){P.msg="invalid stored block lengths",v.mode=30;break}if(v.length=65535&G,X=G=0,v.mode=15,U===6)break t;case 15:v.mode=16;case 16:if(ut=v.length){if(J<ut&&(ut=J),ot<ut&&(ut=ot),ut===0)break t;s.arraySet(W,B,k,ut,Q),J-=ut,k+=ut,ot-=ut,Q+=ut,v.length-=ut;break}v.mode=12;break;case 17:for(;X<14;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}if(v.nlen=257+(31&G),G>>>=5,X-=5,v.ndist=1+(31&G),G>>>=5,X-=5,v.ncode=4+(15&G),G>>>=4,X-=4,286<v.nlen||30<v.ndist){P.msg="too many length or distance symbols",v.mode=30;break}v.have=0,v.mode=18;case 18:for(;v.have<v.ncode;){for(;X<3;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}v.lens[rt[v.have++]]=7&G,G>>>=3,X-=3}for(;v.have<19;)v.lens[rt[v.have++]]=0;if(v.lencode=v.lendyn,v.lenbits=7,Y={bits:v.lenbits},et=l(0,v.lens,0,19,v.lencode,0,v.work,Y),v.lenbits=Y.bits,et){P.msg="invalid code lengths set",v.mode=30;break}v.have=0,v.mode=19;case 19:for(;v.have<v.nlen+v.ndist;){for(;At=(S=v.lencode[G&(1<<v.lenbits)-1])>>>16&255,St=65535&S,!((dt=S>>>24)<=X);){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}if(St<16)G>>>=dt,X-=dt,v.lens[v.have++]=St;else{if(St===16){for(N=dt+2;X<N;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}if(G>>>=dt,X-=dt,v.have===0){P.msg="invalid bit length repeat",v.mode=30;break}M=v.lens[v.have-1],ut=3+(3&G),G>>>=2,X-=2}else if(St===17){for(N=dt+3;X<N;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}X-=dt,M=0,ut=3+(7&(G>>>=dt)),G>>>=3,X-=3}else{for(N=dt+7;X<N;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}X-=dt,M=0,ut=11+(127&(G>>>=dt)),G>>>=7,X-=7}if(v.have+ut>v.nlen+v.ndist){P.msg="invalid bit length repeat",v.mode=30;break}for(;ut--;)v.lens[v.have++]=M}}if(v.mode===30)break;if(v.lens[256]===0){P.msg="invalid code -- missing end-of-block",v.mode=30;break}if(v.lenbits=9,Y={bits:v.lenbits},et=l(u,v.lens,0,v.nlen,v.lencode,0,v.work,Y),v.lenbits=Y.bits,et){P.msg="invalid literal/lengths set",v.mode=30;break}if(v.distbits=6,v.distcode=v.distdyn,Y={bits:v.distbits},et=l(f,v.lens,v.nlen,v.ndist,v.distcode,0,v.work,Y),v.distbits=Y.bits,et){P.msg="invalid distances set",v.mode=30;break}if(v.mode=20,U===6)break t;case 20:v.mode=21;case 21:if(6<=J&&258<=ot){P.next_out=Q,P.avail_out=ot,P.next_in=k,P.avail_in=J,v.hold=G,v.bits=X,c(P,mt),Q=P.next_out,W=P.output,ot=P.avail_out,k=P.next_in,B=P.input,J=P.avail_in,G=v.hold,X=v.bits,v.mode===12&&(v.back=-1);break}for(v.back=0;At=(S=v.lencode[G&(1<<v.lenbits)-1])>>>16&255,St=65535&S,!((dt=S>>>24)<=X);){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}if(At&&!(240&At)){for(Nt=dt,te=At,Gt=St;At=(S=v.lencode[Gt+((G&(1<<Nt+te)-1)>>Nt)])>>>16&255,St=65535&S,!(Nt+(dt=S>>>24)<=X);){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}G>>>=Nt,X-=Nt,v.back+=Nt}if(G>>>=dt,X-=dt,v.back+=dt,v.length=St,At===0){v.mode=26;break}if(32&At){v.back=-1,v.mode=12;break}if(64&At){P.msg="invalid literal/length code",v.mode=30;break}v.extra=15&At,v.mode=22;case 22:if(v.extra){for(N=v.extra;X<N;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}v.length+=G&(1<<v.extra)-1,G>>>=v.extra,X-=v.extra,v.back+=v.extra}v.was=v.length,v.mode=23;case 23:for(;At=(S=v.distcode[G&(1<<v.distbits)-1])>>>16&255,St=65535&S,!((dt=S>>>24)<=X);){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}if(!(240&At)){for(Nt=dt,te=At,Gt=St;At=(S=v.distcode[Gt+((G&(1<<Nt+te)-1)>>Nt)])>>>16&255,St=65535&S,!(Nt+(dt=S>>>24)<=X);){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}G>>>=Nt,X-=Nt,v.back+=Nt}if(G>>>=dt,X-=dt,v.back+=dt,64&At){P.msg="invalid distance code",v.mode=30;break}v.offset=St,v.extra=15&At,v.mode=24;case 24:if(v.extra){for(N=v.extra;X<N;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}v.offset+=G&(1<<v.extra)-1,G>>>=v.extra,X-=v.extra,v.back+=v.extra}if(v.offset>v.dmax){P.msg="invalid distance too far back",v.mode=30;break}v.mode=25;case 25:if(ot===0)break t;if(ut=mt-ot,v.offset>ut){if((ut=v.offset-ut)>v.whave&&v.sane){P.msg="invalid distance too far back",v.mode=30;break}it=ut>v.wnext?(ut-=v.wnext,v.wsize-ut):v.wnext-ut,ut>v.length&&(ut=v.length),lt=v.window}else lt=W,it=Q-v.offset,ut=v.length;for(ot<ut&&(ut=ot),ot-=ut,v.length-=ut;W[Q++]=lt[it++],--ut;);v.length===0&&(v.mode=21);break;case 26:if(ot===0)break t;W[Q++]=v.length,ot--,v.mode=21;break;case 27:if(v.wrap){for(;X<32;){if(J===0)break t;J--,G|=B[k++]<<X,X+=8}if(mt-=ot,P.total_out+=mt,v.total+=mt,mt&&(P.adler=v.check=v.flags?a(v.check,W,mt,Q-mt):o(v.check,W,mt,Q-mt)),mt=ot,(v.flags?G:h(G))!==v.check){P.msg="incorrect data check",v.mode=30;break}X=G=0}v.mode=28;case 28:if(v.wrap&&v.flags){for(;X<32;){if(J===0)break t;J--,G+=B[k++]<<X,X+=8}if(G!==(4294967295&v.total)){P.msg="incorrect length check",v.mode=30;break}X=G=0}v.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;case 32:default:return d}return P.next_out=Q,P.avail_out=ot,P.next_in=k,P.avail_in=J,v.hold=G,v.bits=X,(v.wsize||mt!==P.avail_out&&v.mode<30&&(v.mode<27||U!==4))&&O(P,P.output,P.next_out,mt-P.avail_out)?(v.mode=31,-4):(pt-=P.avail_in,mt-=P.avail_out,P.total_in+=pt,P.total_out+=mt,v.total+=mt,v.wrap&&mt&&(P.adler=v.check=v.flags?a(v.check,W,mt,P.next_out-mt):o(v.check,W,mt,P.next_out-mt)),P.data_type=v.bits+(v.last?64:0)+(v.mode===12?128:0)+(v.mode===20||v.mode===15?256:0),(pt==0&&mt===0||U===4)&&et===m&&(et=-5),et)},r.inflateEnd=function(P){if(!P||!P.state)return d;var U=P.state;return U.window&&(U.window=null),P.state=null,m},r.inflateGetHeader=function(P,U){var v;return P&&P.state&&2&(v=P.state).wrap?((v.head=U).done=!1,m):d},r.inflateSetDictionary=function(P,U){var v,B=U.length;return P&&P.state?(v=P.state).wrap!==0&&v.mode!==11?d:v.mode===11&&o(1,U,B,0)!==v.check?-3:O(P,U,B,B)?(v.mode=31,-4):(v.havedict=1,m):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(u,f,m,d,g,_,p,h){var x,E,T,w,R,D,F,b,A,O=h.bits,P=0,U=0,v=0,B=0,W=0,k=0,Q=0,J=0,ot=0,G=0,X=null,pt=0,mt=new s.Buf16(16),ut=new s.Buf16(16),it=null,lt=0;for(P=0;P<=15;P++)mt[P]=0;for(U=0;U<d;U++)mt[f[m+U]]++;for(W=O,B=15;1<=B&&mt[B]===0;B--);if(B<W&&(W=B),B===0)return g[_++]=20971520,g[_++]=20971520,h.bits=1,0;for(v=1;v<B&&mt[v]===0;v++);for(W<v&&(W=v),P=J=1;P<=15;P++)if(J<<=1,(J-=mt[P])<0)return-1;if(0<J&&(u===0||B!==1))return-1;for(ut[1]=0,P=1;P<15;P++)ut[P+1]=ut[P]+mt[P];for(U=0;U<d;U++)f[m+U]!==0&&(p[ut[f[m+U]]++]=U);if(D=u===0?(X=it=p,19):u===1?(X=o,pt-=257,it=a,lt-=257,256):(X=c,it=l,-1),P=v,R=_,Q=U=G=0,T=-1,w=(ot=1<<(k=W))-1,u===1&&852<ot||u===2&&592<ot)return 1;for(;;){for(F=P-Q,A=p[U]<D?(b=0,p[U]):p[U]>D?(b=it[lt+p[U]],X[pt+p[U]]):(b=96,0),x=1<<P-Q,v=E=1<<k;g[R+(G>>Q)+(E-=x)]=F<<24|b<<16|A|0,E!==0;);for(x=1<<P-1;G&x;)x>>=1;if(x!==0?(G&=x-1,G+=x):G=0,U++,--mt[P]==0){if(P===B)break;P=f[m+p[U]]}if(W<P&&(G&w)!==T){for(Q===0&&(Q=W),R+=v,J=1<<(k=P-Q);k+Q<B&&!((J-=mt[k+Q])<=0);)k++,J<<=1;if(ot+=1<<k,u===1&&852<ot||u===2&&592<ot)return 1;g[T=G&w]=W<<24|k<<16|R-_|0}}return G!==0&&(g[R+G]=P-Q<<24|64<<16|0),h.bits=W,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),o=0,a=1;function c(S){for(var H=S.length;0<=--H;)S[H]=0}var l=0,u=29,f=256,m=f+1+u,d=30,g=19,_=2*m+1,p=15,h=16,x=7,E=256,T=16,w=17,R=18,D=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],F=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],O=new Array(2*(m+2));c(O);var P=new Array(2*d);c(P);var U=new Array(512);c(U);var v=new Array(256);c(v);var B=new Array(u);c(B);var W,k,Q,J=new Array(d);function ot(S,H,rt,at,z){this.static_tree=S,this.extra_bits=H,this.extra_base=rt,this.elems=at,this.max_length=z,this.has_stree=S&&S.length}function G(S,H){this.dyn_tree=S,this.max_code=0,this.stat_desc=H}function X(S){return S<256?U[S]:U[256+(S>>>7)]}function pt(S,H){S.pending_buf[S.pending++]=255&H,S.pending_buf[S.pending++]=H>>>8&255}function mt(S,H,rt){S.bi_valid>h-rt?(S.bi_buf|=H<<S.bi_valid&65535,pt(S,S.bi_buf),S.bi_buf=H>>h-S.bi_valid,S.bi_valid+=rt-h):(S.bi_buf|=H<<S.bi_valid&65535,S.bi_valid+=rt)}function ut(S,H,rt){mt(S,rt[2*H],rt[2*H+1])}function it(S,H){for(var rt=0;rt|=1&S,S>>>=1,rt<<=1,0<--H;);return rt>>>1}function lt(S,H,rt){var at,z,C=new Array(p+1),y=0;for(at=1;at<=p;at++)C[at]=y=y+rt[at-1]<<1;for(z=0;z<=H;z++){var I=S[2*z+1];I!==0&&(S[2*z]=it(C[I]++,I))}}function dt(S){var H;for(H=0;H<m;H++)S.dyn_ltree[2*H]=0;for(H=0;H<d;H++)S.dyn_dtree[2*H]=0;for(H=0;H<g;H++)S.bl_tree[2*H]=0;S.dyn_ltree[2*E]=1,S.opt_len=S.static_len=0,S.last_lit=S.matches=0}function At(S){8<S.bi_valid?pt(S,S.bi_buf):0<S.bi_valid&&(S.pending_buf[S.pending++]=S.bi_buf),S.bi_buf=0,S.bi_valid=0}function St(S,H,rt,at){var z=2*H,C=2*rt;return S[z]<S[C]||S[z]===S[C]&&at[H]<=at[rt]}function Nt(S,H,rt){for(var at=S.heap[rt],z=rt<<1;z<=S.heap_len&&(z<S.heap_len&&St(H,S.heap[z+1],S.heap[z],S.depth)&&z++,!St(H,at,S.heap[z],S.depth));)S.heap[rt]=S.heap[z],rt=z,z<<=1;S.heap[rt]=at}function te(S,H,rt){var at,z,C,y,I=0;if(S.last_lit!==0)for(;at=S.pending_buf[S.d_buf+2*I]<<8|S.pending_buf[S.d_buf+2*I+1],z=S.pending_buf[S.l_buf+I],I++,at===0?ut(S,z,H):(ut(S,(C=v[z])+f+1,H),(y=D[C])!==0&&mt(S,z-=B[C],y),ut(S,C=X(--at),rt),(y=F[C])!==0&&mt(S,at-=J[C],y)),I<S.last_lit;);ut(S,E,H)}function Gt(S,H){var rt,at,z,C=H.dyn_tree,y=H.stat_desc.static_tree,I=H.stat_desc.has_stree,q=H.stat_desc.elems,st=-1;for(S.heap_len=0,S.heap_max=_,rt=0;rt<q;rt++)C[2*rt]!==0?(S.heap[++S.heap_len]=st=rt,S.depth[rt]=0):C[2*rt+1]=0;for(;S.heap_len<2;)C[2*(z=S.heap[++S.heap_len]=st<2?++st:0)]=1,S.depth[z]=0,S.opt_len--,I&&(S.static_len-=y[2*z+1]);for(H.max_code=st,rt=S.heap_len>>1;1<=rt;rt--)Nt(S,C,rt);for(z=q;rt=S.heap[1],S.heap[1]=S.heap[S.heap_len--],Nt(S,C,1),at=S.heap[1],S.heap[--S.heap_max]=rt,S.heap[--S.heap_max]=at,C[2*z]=C[2*rt]+C[2*at],S.depth[z]=(S.depth[rt]>=S.depth[at]?S.depth[rt]:S.depth[at])+1,C[2*rt+1]=C[2*at+1]=z,S.heap[1]=z++,Nt(S,C,1),2<=S.heap_len;);S.heap[--S.heap_max]=S.heap[1],function(Z,Rt){var gt,Ct,Ft,ct,xt,Dt,Pt=Rt.dyn_tree,vt=Rt.max_code,Wt=Rt.stat_desc.static_tree,V=Rt.stat_desc.has_stree,Et=Rt.stat_desc.extra_bits,_t=Rt.stat_desc.extra_base,Tt=Rt.stat_desc.max_length,ft=0;for(ct=0;ct<=p;ct++)Z.bl_count[ct]=0;for(Pt[2*Z.heap[Z.heap_max]+1]=0,gt=Z.heap_max+1;gt<_;gt++)Tt<(ct=Pt[2*Pt[2*(Ct=Z.heap[gt])+1]+1]+1)&&(ct=Tt,ft++),Pt[2*Ct+1]=ct,vt<Ct||(Z.bl_count[ct]++,xt=0,_t<=Ct&&(xt=Et[Ct-_t]),Dt=Pt[2*Ct],Z.opt_len+=Dt*(ct+xt),V&&(Z.static_len+=Dt*(Wt[2*Ct+1]+xt)));if(ft!==0){do{for(ct=Tt-1;Z.bl_count[ct]===0;)ct--;Z.bl_count[ct]--,Z.bl_count[ct+1]+=2,Z.bl_count[Tt]--,ft-=2}while(0<ft);for(ct=Tt;ct!==0;ct--)for(Ct=Z.bl_count[ct];Ct!==0;)vt<(Ft=Z.heap[--gt])||(Pt[2*Ft+1]!==ct&&(Z.opt_len+=(ct-Pt[2*Ft+1])*Pt[2*Ft],Pt[2*Ft+1]=ct),Ct--)}}(S,H),lt(C,st,S.bl_count)}function M(S,H,rt){var at,z,C=-1,y=H[1],I=0,q=7,st=4;for(y===0&&(q=138,st=3),H[2*(rt+1)+1]=65535,at=0;at<=rt;at++)z=y,y=H[2*(at+1)+1],++I<q&&z===y||(I<st?S.bl_tree[2*z]+=I:z!==0?(z!==C&&S.bl_tree[2*z]++,S.bl_tree[2*T]++):I<=10?S.bl_tree[2*w]++:S.bl_tree[2*R]++,C=z,st=(I=0)===y?(q=138,3):z===y?(q=6,3):(q=7,4))}function et(S,H,rt){var at,z,C=-1,y=H[1],I=0,q=7,st=4;for(y===0&&(q=138,st=3),at=0;at<=rt;at++)if(z=y,y=H[2*(at+1)+1],!(++I<q&&z===y)){if(I<st)for(;ut(S,z,S.bl_tree),--I!=0;);else z!==0?(z!==C&&(ut(S,z,S.bl_tree),I--),ut(S,T,S.bl_tree),mt(S,I-3,2)):I<=10?(ut(S,w,S.bl_tree),mt(S,I-3,3)):(ut(S,R,S.bl_tree),mt(S,I-11,7));C=z,st=(I=0)===y?(q=138,3):z===y?(q=6,3):(q=7,4)}}c(J);var Y=!1;function N(S,H,rt,at){mt(S,(l<<1)+(at?1:0),3),function(z,C,y,I){At(z),pt(z,y),pt(z,~y),s.arraySet(z.pending_buf,z.window,C,y,z.pending),z.pending+=y}(S,H,rt)}r._tr_init=function(S){Y||(function(){var H,rt,at,z,C,y=new Array(p+1);for(z=at=0;z<u-1;z++)for(B[z]=at,H=0;H<1<<D[z];H++)v[at++]=z;for(v[at-1]=z,z=C=0;z<16;z++)for(J[z]=C,H=0;H<1<<F[z];H++)U[C++]=z;for(C>>=7;z<d;z++)for(J[z]=C<<7,H=0;H<1<<F[z]-7;H++)U[256+C++]=z;for(rt=0;rt<=p;rt++)y[rt]=0;for(H=0;H<=143;)O[2*H+1]=8,H++,y[8]++;for(;H<=255;)O[2*H+1]=9,H++,y[9]++;for(;H<=279;)O[2*H+1]=7,H++,y[7]++;for(;H<=287;)O[2*H+1]=8,H++,y[8]++;for(lt(O,m+1,y),H=0;H<d;H++)P[2*H+1]=5,P[2*H]=it(H,5);W=new ot(O,D,f+1,m,p),k=new ot(P,F,0,d,p),Q=new ot(new Array(0),b,0,g,x)}(),Y=!0),S.l_desc=new G(S.dyn_ltree,W),S.d_desc=new G(S.dyn_dtree,k),S.bl_desc=new G(S.bl_tree,Q),S.bi_buf=0,S.bi_valid=0,dt(S)},r._tr_stored_block=N,r._tr_flush_block=function(S,H,rt,at){var z,C,y=0;0<S.level?(S.strm.data_type===2&&(S.strm.data_type=function(I){var q,st=4093624447;for(q=0;q<=31;q++,st>>>=1)if(1&st&&I.dyn_ltree[2*q]!==0)return o;if(I.dyn_ltree[18]!==0||I.dyn_ltree[20]!==0||I.dyn_ltree[26]!==0)return a;for(q=32;q<f;q++)if(I.dyn_ltree[2*q]!==0)return a;return o}(S)),Gt(S,S.l_desc),Gt(S,S.d_desc),y=function(I){var q;for(M(I,I.dyn_ltree,I.l_desc.max_code),M(I,I.dyn_dtree,I.d_desc.max_code),Gt(I,I.bl_desc),q=g-1;3<=q&&I.bl_tree[2*A[q]+1]===0;q--);return I.opt_len+=3*(q+1)+5+5+4,q}(S),z=S.opt_len+3+7>>>3,(C=S.static_len+3+7>>>3)<=z&&(z=C)):z=C=rt+5,rt+4<=z&&H!==-1?N(S,H,rt,at):S.strategy===4||C===z?(mt(S,2+(at?1:0),3),te(S,O,P)):(mt(S,4+(at?1:0),3),function(I,q,st,Z){var Rt;for(mt(I,q-257,5),mt(I,st-1,5),mt(I,Z-4,4),Rt=0;Rt<Z;Rt++)mt(I,I.bl_tree[2*A[Rt]+1],3);et(I,I.dyn_ltree,q-1),et(I,I.dyn_dtree,st-1)}(S,S.l_desc.max_code+1,S.d_desc.max_code+1,y+1),te(S,S.dyn_ltree,S.dyn_dtree)),dt(S),at&&At(S)},r._tr_tally=function(S,H,rt){return S.pending_buf[S.d_buf+2*S.last_lit]=H>>>8&255,S.pending_buf[S.d_buf+2*S.last_lit+1]=255&H,S.pending_buf[S.l_buf+S.last_lit]=255&rt,S.last_lit++,H===0?S.dyn_ltree[2*rt]++:(S.matches++,H--,S.dyn_ltree[2*(v[rt]+f+1)]++,S.dyn_dtree[2*X(H)]++),S.last_lit===S.lit_bufsize-1},r._tr_align=function(S){mt(S,2,3),ut(S,E,O),function(H){H.bi_valid===16?(pt(H,H.bi_buf),H.bi_buf=0,H.bi_valid=0):8<=H.bi_valid&&(H.pending_buf[H.pending++]=255&H.bi_buf,H.bi_buf>>=8,H.bi_valid-=8)}(S)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(o,a){if(!o.setImmediate){var c,l,u,f,m=1,d={},g=!1,_=o.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(o);p=p&&p.setTimeout?p:o,c={}.toString.call(o.process)==="[object process]"?function(T){process.nextTick(function(){x(T)})}:function(){if(o.postMessage&&!o.importScripts){var T=!0,w=o.onmessage;return o.onmessage=function(){T=!1},o.postMessage("","*"),o.onmessage=w,T}}()?(f="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",E,!1):o.attachEvent("onmessage",E),function(T){o.postMessage(f+T,"*")}):o.MessageChannel?((u=new MessageChannel).port1.onmessage=function(T){x(T.data)},function(T){u.port2.postMessage(T)}):_&&"onreadystatechange"in _.createElement("script")?(l=_.documentElement,function(T){var w=_.createElement("script");w.onreadystatechange=function(){x(T),w.onreadystatechange=null,l.removeChild(w),w=null},l.appendChild(w)}):function(T){setTimeout(x,0,T)},p.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var w=new Array(arguments.length-1),R=0;R<w.length;R++)w[R]=arguments[R+1];var D={callback:T,args:w};return d[m]=D,c(m),m++},p.clearImmediate=h}function h(T){delete d[T]}function x(T){if(g)setTimeout(x,0,T);else{var w=d[T];if(w){g=!0;try{(function(R){var D=R.callback,F=R.args;switch(F.length){case 0:D();break;case 1:D(F[0]);break;case 2:D(F[0],F[1]);break;case 3:D(F[0],F[1],F[2]);break;default:D.apply(a,F)}})(w)}finally{h(T),g=!1}}}}function E(T){T.source===o&&typeof T.data=="string"&&T.data.indexOf(f)===0&&x(+T.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof _n<"u"?_n:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(_l);var fm=_l.exports;const pm=wl(fm);var gl={exports:{}};(function(i,t){(function(e,n){n()})(_n,function(){function e(l,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\uFEFF",l],{type:l.type}):l}function n(l,u,f){var m=new XMLHttpRequest;m.open("GET",l),m.responseType="blob",m.onload=function(){c(m.response,u,f)},m.onerror=function(){console.error("could not download file")},m.send()}function r(l){var u=new XMLHttpRequest;u.open("HEAD",l,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function s(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof _n=="object"&&_n.global===_n?_n:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(l,u,f){var m=o.URL||o.webkitURL,d=document.createElement("a");u=u||l.name||"download",d.download=u,d.rel="noopener",typeof l=="string"?(d.href=l,d.origin===location.origin?s(d):r(d.href)?n(l,u,f):s(d,d.target="_blank")):(d.href=m.createObjectURL(l),setTimeout(function(){m.revokeObjectURL(d.href)},4e4),setTimeout(function(){s(d)},0))}:"msSaveOrOpenBlob"in navigator?function(l,u,f){if(u=u||l.name||"download",typeof l!="string")navigator.msSaveOrOpenBlob(e(l,f),u);else if(r(l))n(l,u,f);else{var m=document.createElement("a");m.href=l,m.target="_blank",setTimeout(function(){s(m)})}}:function(l,u,f,m){if(m=m||open("","_blank"),m&&(m.document.title=m.document.body.innerText="downloading..."),typeof l=="string")return n(l,u,f);var d=l.type==="application/octet-stream",g=/constructor/i.test(o.HTMLElement)||o.safari,_=/CriOS\/[\d]+/.test(navigator.userAgent);if((_||d&&g||a)&&typeof FileReader<"u"){var p=new FileReader;p.onloadend=function(){var E=p.result;E=_?E:E.replace(/^data:[^;]*;/,"data:attachment/file;"),m?m.location.href=E:location=E,m=null},p.readAsDataURL(l)}else{var h=o.URL||o.webkitURL,x=h.createObjectURL(l);m?m.location=x:location.href=x,m=null,setTimeout(function(){h.revokeObjectURL(x)},4e4)}});o.saveAs=c.saveAs=c,i.exports=c})})(gl);var mm=gl.exports;const _m="_pageContainer_th00n_1",gm="_pageTitle_th00n_12",xm="_pageDescription_th00n_19",vm="_activitySelector_th00n_27",Sm="_activityCard_th00n_34",Mm="_active_th00n_51",ym="_mainLayout_th00n_58",bm="_canvasContainer_th00n_72",Em="_controlsPanel_th00n_86",Tm="_controlCard_th00n_97",wm="_pillGroup_th00n_113",Am="_pill_th00n_113",Rm="_specsTable_th00n_141",Cm="_sizeHelper_th00n_167",Pm="_downloadButton_th00n_185",Dm="_bottomInfo_th00n_208",Lm="_infoCard_th00n_215",Im="_materialsGrid_th00n_231",Um="_materialItem_th00n_237",ce={pageContainer:_m,pageTitle:gm,pageDescription:xm,activitySelector:vm,activityCard:Sm,active:Mm,mainLayout:ym,canvasContainer:bm,controlsPanel:Em,controlCard:Tm,pillGroup:wm,pill:Am,specsTable:Rm,sizeHelper:Cm,downloadButton:Pm,bottomInfo:Dm,infoCard:Lm,materialsGrid:Im,materialItem:Um},Fm=()=>{const[i,t]=Fe.useState(null),[e,n]=Fe.useState(""),[r,s]=Fe.useState("Right"),[o,a]=Fe.useState("Child"),[c,l]=Fe.useState(0),u=Fe.useRef(null),f=Fe.useRef(null),m=Fe.useRef(null),d=Fe.useRef(null),g=Fe.useRef(null);Fe.useEffect(()=>{fetch("/prosthetics/main.json").then(x=>x.json()).then(x=>{t(x);const E=Object.keys(x);E.length>0&&n(E[0])}).catch(x=>console.error("Error loading prosthetics data:",x))},[]),Fe.useEffect(()=>{const x=setTimeout(()=>{if(!u.current){console.log("Mount ref not ready");return}const E=u.current;for(;E.firstChild;)E.removeChild(E.firstChild);const T=E.clientWidth||600,w=350;console.log("Initializing Three.js with dimensions:",T,w);const R=new Lc;R.background=new Yt(2763306),f.current=R;const D=new We(60,T/w,.1,5e3);D.position.set(100,100,100),D.lookAt(0,0,0),m.current=D;const F=new $p({antialias:!0});F.setSize(T,w),F.setPixelRatio(window.devicePixelRatio),E.appendChild(F.domElement),d.current=F;const b=new Yc(16777215,4473924,2);R.add(b);const A=new Kc(16777215,2);A.position.set(50,100,50),R.add(A);const O=new Ke(new Oi(200,200),new ma({color:4473924,side:tn}));O.rotation.x=-Math.PI/2,R.add(O);const P=new Jc(200,20,16777215,8947848);R.add(P);const U=new Qc(30);R.add(U);const v=new Qp(D,F.domElement);v.target.set(0,0,0),v.update(),g.current=v;const B=()=>{requestAnimationFrame(B),v.update(),F.render(R,D)};B(),console.log("Three.js initialized successfully"),l(W=>W+1)},100);return()=>{clearTimeout(x)}},[]),Fe.useEffect(()=>{if(!i||!e||!r||!o||!f.current||c===0)return;console.log(`Updating models: ${e}, ${r}, ${o}`);const x=i[e];if(!x)return;const E=[];f.current.traverse(D=>{D.name&&D.name.endsWith(".stl")&&E.push(D)}),E.forEach(D=>{var F;return(F=f.current)==null?void 0:F.remove(D)});const T=new dm,w=new zc({color:11184810,specular:1118481,shininess:200}),R=x.numParts;for(let D=1;D<=R;D++){const F=`${e}/${r}/${o}/part${D}.stl`,b=`/prosthetics/models/${F}`;console.log(`Loading STL: ${b}`),T.load(b,A=>{var U;console.log(`Loaded STL: ${b}`);const O=new Ke(A,w),P=x.Coordinates[F];P&&O.position.set(P[0],P[1],P[2]),O.rotation.set(-Math.PI/2,0,0),O.scale.set(.5,.5,.5),O.castShadow=!0,O.receiveShadow=!0,O.name=F,(U=f.current)==null||U.add(O)},void 0,A=>{console.error("Error loading STL:",b,A)})}},[i,e,r,o,c]);const _=async()=>{if(!i||!e||!r||!o)return;const x=i[e],E=new pm,T=x.numParts,w=[];for(let R=1;R<=T;R++){const F=`/prosthetics/models/${`${e}/${r}/${o}/part${R}.stl`}`;w.push(fetch(F).then(b=>{if(!b.ok)throw new Error(`Failed to fetch ${F}`);return b.arrayBuffer()}).then(b=>{E.file(`part${R}.stl`,b)}))}try{await Promise.all(w);const R=await E.generateAsync({type:"blob"});mm.saveAs(R,`${e}_${r}_${o}_DesignFiles.zip`)}catch(R){console.error("Error creating zip:",R),alert("Failed to create download package.")}};if(!i)return Zt.jsx("div",{children:"Loading..."});const p=i[e],h=(p==null?void 0:p.Size.indexOf(o))??0;return Zt.jsxs("div",{className:ce.pageContainer,children:[Zt.jsx("h2",{className:ce.pageTitle,children:"Open-source prosthetics database"}),Zt.jsx("p",{className:ce.pageDescription,children:"An open-source database of 3D-printable recreational terminal devices for individuals with upper limb differences. This tool provides affordable, customizable prosthetic designs that can be sized for children through adults. Select an activity, customize the size and side, preview the 3D model, and download the STL files for printing."}),Zt.jsx("div",{className:ce.activitySelector,children:Object.keys(i).map(x=>Zt.jsx("button",{className:`${ce.activityCard} ${e===x?ce.active:""}`,onClick:()=>n(x),children:x},x))}),Zt.jsxs("div",{className:ce.mainLayout,children:[Zt.jsx("div",{className:ce.canvasContainer,ref:u}),p&&Zt.jsxs("div",{className:ce.controlsPanel,children:[Zt.jsxs("div",{className:ce.controlCard,children:[Zt.jsx("h3",{children:"Side of Body"}),Zt.jsx("div",{className:ce.pillGroup,children:p["Side of Body"].map(x=>Zt.jsxs("button",{className:`${ce.pill} ${r===x?ce.active:""}`,onClick:()=>s(x),children:[x," Hand"]},x))})]}),Zt.jsxs("div",{className:ce.controlCard,children:[Zt.jsx("h3",{children:"Size"}),Zt.jsx("div",{className:ce.pillGroup,children:p.Size.map(x=>Zt.jsx("button",{className:`${ce.pill} ${o===x?ce.active:""}`,onClick:()=>a(x),children:x},x))})]}),Zt.jsx("div",{className:ce.sizeHelper,children:Zt.jsx("img",{src:p.SizeImageSrc.replace("../static","/prosthetics"),alt:p.SizeImageAlt})}),Zt.jsxs("button",{className:ce.downloadButton,onClick:_,children:[Zt.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:Zt.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"})}),"Download STL Files"]})]})]}),p&&Zt.jsxs("div",{className:ce.bottomInfo,children:[Zt.jsxs("div",{className:ce.infoCard,children:[Zt.jsx("h3",{children:"Dimensions"}),Zt.jsx("table",{className:ce.specsTable,children:Zt.jsx("tbody",{children:p.Dimension.map((x,E)=>{var T;return Zt.jsxs("tr",{children:[Zt.jsx("td",{children:x}),Zt.jsx("td",{children:((T=p.Measurement[h])==null?void 0:T[E])??"-"})]},x)})})})]}),Zt.jsxs("div",{className:ce.infoCard,children:[Zt.jsx("h3",{children:"Material Estimates"}),Zt.jsx("div",{className:ce.materialsGrid,children:p.Materials.map((x,E)=>{var T,w;return Zt.jsxs("div",{className:ce.materialItem,children:[Zt.jsx("div",{className:"name",children:x}),Zt.jsxs("div",{className:"value",children:[((T=p.Weight[h])==null?void 0:T[E])??"-","g"]}),Zt.jsxs("div",{className:"value",style:{color:"var(--accent-primary)"},children:["$",((w=p.Costs[h])==null?void 0:w[E])??"-"]})]},x)})})]})]})]})};export{Fm as default};
