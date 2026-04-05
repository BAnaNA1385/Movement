(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Dc="183",Bs={ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},im=0,Mh=1,sm=2,zr=1,om=2,po=3,ki=0,gn=1,ui=2,_i=0,zs=1,Sh=2,Eh=3,Th=4,rm=5,as=100,am=101,lm=102,cm=103,hm=104,um=200,dm=201,fm=202,pm=203,Tl=204,Al=205,mm=206,gm=207,_m=208,xm=209,vm=210,bm=211,ym=212,Mm=213,Sm=214,wl=0,Cl=1,Rl=2,Gs=3,Pl=4,Dl=5,Ll=6,Il=7,rf=0,Em=1,Tm=2,Yn=0,af=1,lf=2,cf=3,hf=4,uf=5,df=6,ff=7,pf=300,ps=301,Ws=302,Sa=303,Ea=304,la=306,Fl=1e3,fi=1001,Ol=1002,$e=1003,Am=1004,Zo=1005,rn=1006,Ta=1007,cs=1008,Mn=1009,mf=1010,gf=1011,Io=1012,Lc=1013,Kn=1014,Wn=1015,vi=1016,Ic=1017,Fc=1018,Fo=1020,_f=35902,xf=35899,vf=1021,bf=1022,On=1023,bi=1026,hs=1027,yf=1028,Oc=1029,Xs=1030,Nc=1031,Uc=1033,kr=33776,Vr=33777,Hr=33778,Gr=33779,Nl=35840,Ul=35841,Bl=35842,zl=35843,kl=36196,Vl=37492,Hl=37496,Gl=37488,Wl=37489,Xl=37490,Yl=37491,ql=37808,jl=37809,$l=37810,Kl=37811,Zl=37812,Jl=37813,Ql=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,oc=37820,rc=37821,ac=36492,lc=36494,cc=36495,hc=36283,uc=36284,dc=36285,fc=36286,wm=3200,Mf=0,Cm=1,Li="",An="srgb",Ys="srgb-linear",jr="linear",ae="srgb",ys=7680,Ah=519,Rm=512,Pm=513,Dm=514,Bc=515,Lm=516,Im=517,zc=518,Fm=519,wh=35044,Ch="300 es",Xn=2e3,Oo=2001;function Om(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nm(){const n=$r("canvas");return n.style.display="block",n}const Rh={};function Ph(...n){const t="THREE."+n.shift();console.log(t,...n)}function Sf(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Lt(...n){n=Sf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ne(...n){n=Sf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Kr(...n){const t=n.join(" ");t in Rh||(Rh[t]=!0,Lt(...n))}function Um(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}const Bm={[wl]:Cl,[Rl]:Ll,[Pl]:Il,[Gs]:Dl,[Cl]:wl,[Ll]:Rl,[Il]:Pl,[Dl]:Gs};class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wr=Math.PI/180,pc=180/Math.PI;function Wo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function zm(n,t){return(n%t+t)%t}function Aa(n,t,e){return(1-e)*n+e*t}function Qs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const km={DEG2RAD:Wr};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=o[r+0],f=o[r+1],m=o[r+2],_=o[r+3];if(u!==_||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const x=Math.acos(p),y=Math.sin(x);g=Math.sin(g*x)/y,a=Math.sin(a*x)/y,l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+_*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+_*a;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=o[r],d=o[r+1],f=o[r+2],m=o[r+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(o/2),d=l(i/2),f=l(s/2),m=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-i*c,this._z=o*h+r*c+i*l-s*a,this._w=r*h-i*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+l*c+r*u-a*h,this.y=i+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-i*l,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new F,Dh=new Vi;class zt{constructor(t,e,i,s,o,r,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c)}set(t,e,i,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],_=s[0],p=s[3],g=s[6],x=s[1],y=s[4],M=s[7],T=s[2],A=s[5],C=s[8];return o[0]=r*_+a*x+l*T,o[3]=r*p+a*y+l*A,o[6]=r*g+a*M+l*C,o[1]=c*_+h*x+u*T,o[4]=c*p+h*y+u*A,o[7]=c*g+h*M+u*C,o[2]=d*_+f*x+m*T,o[5]=d*p+f*y+m*A,o[8]=d*g+f*M+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-i*o*h+i*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,f=c*o-r*l,m=e*u+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*r)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(r*e-i*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new zt,Lh=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vm(){const n={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ae&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ae&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ys]:{primaries:t,whitePoint:i,transfer:jr,toXYZ:Lh,fromXYZ:Ih,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:Lh,fromXYZ:Ih,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}const Qt=Vm();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ms;class Hm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ms===void 0&&(Ms=$r("canvas")),Ms.width=t.width,Ms.height=t.height;const s=Ms.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ms}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$r("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=xi(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xi(e[i]/255)*255):e[i]=xi(e[i]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gm=0;class kc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Wo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ra(s[r].image)):o.push(Ra(s[r]))}else o=Ra(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function Ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}let Wm=0;const Pa=new F;class hn extends _s{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,i=fi,s=fi,o=rn,r=cs,a=On,l=Mn,c=hn.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Wo(),this.name="",this.source=new kc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fl:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fl:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=pf;hn.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,i=0,s=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(f+1)/2,T=(g+1)/2,A=(h+d)/4,C=(u+_)/4,v=(m+p)/4;return y>M&&y>T?y<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(y),s=A/i,o=C/i):M>T?M<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(M),i=A/s,o=v/s):T<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),i=C/o,s=v/o),this.set(i,s,o,e),this}let x=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xm extends _s{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},o=new hn(s),r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new kc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Xm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ef extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ym extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Se{constructor(t,e,i,s,o,r,a,l,c,h,u,d,f,m,_,p){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c,h,u,d,f,m,_,p)}set(t,e,i,s,o,r,a,l,c,h,u,d,f,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=o,g[5]=r,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Ss.setFromMatrixColumn(t,0).length(),o=1/Ss.setFromMatrixColumn(t,1).length(),r=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*a,e[4]=-r*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=_-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,f=r*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*l,f=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=r*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qm,t,jm)}lookAt(t,e,i){const s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ti.crossVectors(i,vn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ti.crossVectors(i,vn)),Ti.normalize(),Jo.crossVectors(vn,Ti),s[0]=Ti.x,s[4]=Jo.x,s[8]=vn.x,s[1]=Ti.y,s[5]=Jo.y,s[9]=vn.y,s[2]=Ti.z,s[6]=Jo.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],_=i[6],p=i[10],g=i[14],x=i[3],y=i[7],M=i[11],T=i[15],A=s[0],C=s[4],v=s[8],E=s[12],V=s[1],w=s[5],P=s[9],U=s[13],k=s[2],D=s[6],N=s[10],I=s[14],K=s[3],X=s[7],J=s[11],nt=s[15];return o[0]=r*A+a*V+l*k+c*K,o[4]=r*C+a*w+l*D+c*X,o[8]=r*v+a*P+l*N+c*J,o[12]=r*E+a*U+l*I+c*nt,o[1]=h*A+u*V+d*k+f*K,o[5]=h*C+u*w+d*D+f*X,o[9]=h*v+u*P+d*N+f*J,o[13]=h*E+u*U+d*I+f*nt,o[2]=m*A+_*V+p*k+g*K,o[6]=m*C+_*w+p*D+g*X,o[10]=m*v+_*P+p*N+g*J,o[14]=m*E+_*U+p*I+g*nt,o[3]=x*A+y*V+M*k+T*K,o[7]=x*C+y*w+M*D+T*X,o[11]=x*v+y*P+M*N+T*J,o[15]=x*E+y*U+M*I+T*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],x=l*f-c*d,y=a*f-c*u,M=a*d-l*u,T=r*f-c*h,A=r*d-l*h,C=r*u-a*h;return e*(_*x-p*y+g*M)-i*(m*x-p*T+g*A)+s*(m*y-_*T+g*C)-o*(m*M-_*A+p*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],x=e*a-i*r,y=e*l-s*r,M=e*c-o*r,T=i*l-s*a,A=i*c-o*a,C=s*c-o*l,v=h*_-u*m,E=h*p-d*m,V=h*g-f*m,w=u*p-d*_,P=u*g-f*_,U=d*g-f*p,k=x*U-y*P+M*w+T*V-A*E+C*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/k;return t[0]=(a*U-l*P+c*w)*D,t[1]=(s*P-i*U-o*w)*D,t[2]=(_*C-p*A+g*T)*D,t[3]=(d*A-u*C-f*T)*D,t[4]=(l*V-r*U-c*E)*D,t[5]=(e*U-s*V+o*E)*D,t[6]=(p*M-m*C-g*y)*D,t[7]=(h*C-d*M+f*y)*D,t[8]=(r*P-a*V+c*v)*D,t[9]=(i*V-e*P-o*v)*D,t[10]=(m*A-_*M+g*x)*D,t[11]=(u*M-h*A-f*x)*D,t[12]=(a*E-r*w-l*v)*D,t[13]=(e*w-i*E+s*v)*D,t[14]=(_*y-m*T-p*x)*D,t[15]=(h*T-u*y+d*x)*D,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,f=o*h,m=o*u,_=r*h,p=r*u,g=a*u,x=l*c,y=l*h,M=l*u,T=i.x,A=i.y,C=i.z;return s[0]=(1-(_+g))*T,s[1]=(f+M)*T,s[2]=(m-y)*T,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+g))*A,s[6]=(p+x)*A,s[7]=0,s[8]=(m+y)*C,s[9]=(p-x)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const o=this.determinant();if(o===0)return i.set(1,1,1),e.identity(),this;let r=Ss.set(s[0],s[1],s[2]).length();const a=Ss.set(s[4],s[5],s[6]).length(),l=Ss.set(s[8],s[9],s[10]).length();o<0&&(r=-r),Pn.copy(this);const c=1/r,h=1/a,u=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),i.x=r,i.y=a,i.z=l,this}makePerspective(t,e,i,s,o,r,a=Xn,l=!1){const c=this.elements,h=2*o/(e-t),u=2*o/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let m,_;if(l)m=o/(r-o),_=r*o/(r-o);else if(a===Xn)m=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Oo)m=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Xn,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s);let m,_;if(l)m=1/(r-o),_=r/(r-o);else if(a===Xn)m=-2/(r-o),_=-(r+o)/(r-o);else if(a===Oo)m=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ss=new F,Pn=new Se,qm=new F(0,0,0),jm=new F(1,1,1),Ti=new F,Jo=new F,vn=new F,Fh=new Se,Oh=new Vi;class Zn{constructor(t=0,e=0,i=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Wt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Tf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $m=0;const Nh=new F,Es=new Vi,ei=new Se,Qo=new F,to=new F,Km=new F,Zm=new Vi,Uh=new F(1,0,0),Bh=new F(0,1,0),zh=new F(0,0,1),kh={type:"added"},Jm={type:"removed"},Ts={type:"childadded",child:null},Da={type:"childremoved",child:null};class Ke extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new F,e=new Zn,i=new Vi,s=new F(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new zt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Nh.copy(t).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qo.copy(t):Qo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(to,Qo,this.up):ei.lookAt(Qo,to,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(ei),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jm),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,Km),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,Zm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*i-o[8]*s,o[13]+=i-o[1]*e-o[5]*i-o[9]*s,o[14]+=s-o[2]*e-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ke.DEFAULT_UP=new F(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tr extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qm={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new tr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},er={h:0,s:0,l:0};function Ia(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}let $t=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=zm(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Ia(r,o,t+1/3),this.g=Ia(r,o,t),this.b=Ia(r,o,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=An){function i(o){o!==void 0&&parseFloat(o)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const i=Af[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return Qt.workingToColorSpace(Qe.copy(this),t),Math.round(Wt(Qe.r*255,0,255))*65536+Math.round(Wt(Qe.g*255,0,255))*256+Math.round(Wt(Qe.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Qe.copy(this),e);const i=Qe.r,s=Qe.g,o=Qe.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case i:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-i)/u+2;break;case o:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=An){Qt.workingToColorSpace(Qe.copy(this),t);const e=Qe.r,i=Qe.g,s=Qe.b;return t!==An?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(er);const i=Aa(Ai.h,er.h,e),s=Aa(Ai.s,er.s,e),o=Aa(Ai.l,er.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Qe=new $t;$t.NAMES=Af;class tg extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Dn=new F,ni=new F,Fa=new F,ii=new F,As=new F,ws=new F,Vh=new F,Oa=new F,Na=new F,Ua=new F,Ba=new Te,za=new Te,ka=new Te;class Fn{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Dn.subVectors(t,e),s.cross(Dn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Dn.subVectors(s,e),ni.subVectors(i,e),Fa.subVectors(t,e);const r=Dn.dot(Dn),a=Dn.dot(ni),l=Dn.dot(Fa),c=ni.dot(ni),h=ni.dot(Fa),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(r*h-a*l)*d;return o.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,i,s,o,r,a,l){return this.getBarycoord(t,e,i,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ii.x),l.addScaledVector(r,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,i,s,o,r){return Ba.setScalar(0),za.setScalar(0),ka.setScalar(0),Ba.fromBufferAttribute(t,e),za.fromBufferAttribute(t,i),ka.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ba,o.x),r.addScaledVector(za,o.y),r.addScaledVector(ka,o.z),r}static isFrontFacing(t,e,i,s){return Dn.subVectors(i,e),ni.subVectors(t,e),Dn.cross(ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Dn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return Fn.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return Fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;As.subVectors(s,i),ws.subVectors(o,i),Oa.subVectors(t,i);const l=As.dot(Oa),c=ws.dot(Oa);if(l<=0&&c<=0)return e.copy(i);Na.subVectors(t,s);const h=As.dot(Na),u=ws.dot(Na);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(As,r);Ua.subVectors(t,o);const f=As.dot(Ua),m=ws.dot(Ua);if(m>=0&&f<=m)return e.copy(o);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(ws,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Vh.subVectors(o,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Vh,a);const g=1/(p+_+d);return r=_*g,a=d*g,e.copy(i).addScaledVector(As,r).addScaledVector(ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Xo{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Ln):Ln.fromBufferAttribute(o,r),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nr.copy(i.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(eo),ir.subVectors(this.max,eo),Cs.subVectors(t.a,eo),Rs.subVectors(t.b,eo),Ps.subVectors(t.c,eo),wi.subVectors(Rs,Cs),Ci.subVectors(Ps,Rs),ji.subVectors(Cs,Ps);let e=[0,-wi.z,wi.y,0,-Ci.z,Ci.y,0,-ji.z,ji.y,wi.z,0,-wi.x,Ci.z,0,-Ci.x,ji.z,0,-ji.x,-wi.y,wi.x,0,-Ci.y,Ci.x,0,-ji.y,ji.x,0];return!Va(e,Cs,Rs,Ps,ir)||(e=[1,0,0,0,1,0,0,0,1],!Va(e,Cs,Rs,Ps,ir))?!1:(sr.crossVectors(wi,Ci),e=[sr.x,sr.y,sr.z],Va(e,Cs,Rs,Ps,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const si=[new F,new F,new F,new F,new F,new F,new F,new F],Ln=new F,nr=new Xo,Cs=new F,Rs=new F,Ps=new F,wi=new F,Ci=new F,ji=new F,eo=new F,ir=new F,sr=new F,$i=new F;function Va(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){$i.fromArray(n,o);const a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),h=i.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Le=new F,or=new Mt;let eg=0;class jn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wh,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=dn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array),o=dn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wh&&(t.usage=this.usage),t}}class wf extends jn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Cf extends jn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class we extends jn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const ng=new Xo,no=new F,Ha=new F;class ca{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ng.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;no.subVectors(t,this.center);const e=no.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(no,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(no.copy(t.center).add(Ha)),this.expandByPoint(no.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ig=0;const Sn=new Se,Ga=new Ke,Ds=new F,bn=new Xo,io=new Xo,Ye=new F;class _n extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Om(t)?Cf:wf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new zt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,i){return Sn.makeTranslation(t,e,i),this.applyMatrix4(Sn),this}scale(t,e,i){return Sn.makeScale(t,e,i),this.applyMatrix4(Sn),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new we(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];bn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(bn.min,io.min),bn.expandByPoint(Ye),Ye.addVectors(bn.max,io.max),bn.expandByPoint(Ye)):(bn.expandByPoint(io.min),bn.expandByPoint(io.max))}bn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Ye.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Ye));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ye.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(t,c),Ye.add(Ds)),s=Math.max(s,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new F,l[v]=new F;const c=new F,h=new F,u=new F,d=new Mt,f=new Mt,m=new Mt,_=new F,p=new F;function g(v,E,V){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,V),d.fromBufferAttribute(o,v),f.fromBufferAttribute(o,E),m.fromBufferAttribute(o,V),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(w),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(w),a[v].add(_),a[E].add(_),a[V].add(_),l[v].add(p),l[E].add(p),l[V].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let v=0,E=x.length;v<E;++v){const V=x[v],w=V.start,P=V.count;for(let U=w,k=w+P;U<k;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const y=new F,M=new F,T=new F,A=new F;function C(v){T.fromBufferAttribute(s,v),A.copy(T);const E=a[v];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),M.crossVectors(A,E);const w=M.dot(l[v])<0?-1:1;r.setXYZW(v,y.x,y.y,y.z,w)}for(let v=0,E=x.length;v<E;++v){const V=x[v],w=V.start,P=V.count;for(let U=w,k=w+P;U<k;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new F,o=new F,r=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new jn(d,h,u)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sg=0;class Zs extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=zs,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=Al,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tl&&(i.blendSrc=this.blendSrc),this.blendDst!==Al&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const oi=new F,Wa=new F,rr=new F,Ri=new F,Xa=new F,ar=new F,Ya=new F;class Vc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Wa.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(Wa);const o=t.distanceTo(e)*.5,r=-this.direction.dot(rr),a=Ri.dot(this.direction),l=-Ri.dot(rr),c=Ri.lengthSq(),h=Math.abs(1-r*r);let u,d,f,m;if(h>0)if(u=r*l-a,d=r*a-l,m=o*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wa).addScaledVector(rr,d),f}intersectSphere(t,e){oi.subVectors(t.center,this.origin);const i=oi.dot(this.direction),s=oi.dot(oi)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,i,s,o){Xa.subVectors(e,t),ar.subVectors(i,t),Ya.crossVectors(Xa,ar);let r=this.direction.dot(Ya),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ri.subVectors(this.origin,t);const l=a*this.direction.dot(ar.crossVectors(Ri,ar));if(l<0)return null;const c=a*this.direction.dot(Xa.cross(Ri));if(c<0||l+c>r)return null;const h=-a*Ri.dot(Ya);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rf extends Zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Hh=new Se,Ki=new Vc,lr=new ca,Gh=new F,cr=new F,hr=new F,ur=new F,qa=new F,dr=new F,Wh=new F,fr=new F;class Cn extends Ke{constructor(t=new _n,e=new Rf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){dr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(qa.fromBufferAttribute(u,t),r?dr.addScaledVector(qa,h):dr.addScaledVector(qa.sub(e),h))}e.add(dr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere),lr.applyMatrix4(o),Ki.copy(t.ray).recast(t.near),!(lr.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(lr,Gh)===null||Ki.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Hh.copy(o).invert(),Ki.copy(t.ray).applyMatrix4(Hh),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=r[p.materialIndex],x=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,T=y;M<T;M+=3){const A=a.getX(M),C=a.getX(M+1),v=a.getX(M+2);s=pr(this,g,t,i,c,h,u,A,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const x=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);s=pr(this,r,t,i,c,h,u,x,y,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=r[p.materialIndex],x=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,T=y;M<T;M+=3){const A=M,C=M+1,v=M+2;s=pr(this,g,t,i,c,h,u,A,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const x=p,y=p+1,M=p+2;s=pr(this,r,t,i,c,h,u,x,y,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function og(n,t,e,i,s,o,r,a){let l;if(t.side===gn?l=i.intersectTriangle(r,o,s,!0,a):l=i.intersectTriangle(s,o,r,t.side===ki,a),l===null)return null;fr.copy(a),fr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(fr);return c<e.near||c>e.far?null:{distance:c,point:fr.clone(),object:n}}function pr(n,t,e,i,s,o,r,a,l,c){n.getVertexPosition(a,cr),n.getVertexPosition(l,hr),n.getVertexPosition(c,ur);const h=og(n,t,e,i,cr,hr,ur,Wh);if(h){const u=new F;Fn.getBarycoord(Wh,cr,hr,ur,u),s&&(h.uv=Fn.getInterpolatedAttribute(s,a,l,c,u,new Mt)),o&&(h.uv1=Fn.getInterpolatedAttribute(o,a,l,c,u,new Mt)),r&&(h.normal=Fn.getInterpolatedAttribute(r,a,l,c,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new F,materialIndex:0};Fn.getNormal(cr,hr,ur,d.normal),h.face=d,h.barycoord=u}return h}class rg extends hn{constructor(t=null,e=1,i=1,s,o,r,a,l,c=$e,h=$e,u,d){super(null,r,a,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ja=new F,ag=new F,lg=new zt;class Di{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ja.subVectors(i,e).cross(ag.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ja),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||lg.getNormalMatrix(t),s=this.coplanarPoint(ja).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new ca,cg=new Mt(.5,.5),mr=new F;class Hc{constructor(t=new Di,e=new Di,i=new Di,s=new Di,o=new Di,r=new Di){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xn,i=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],d=o[6],f=o[7],m=o[8],_=o[9],p=o[10],g=o[11],x=o[12],y=o[13],M=o[14],T=o[15];if(s[0].setComponents(c-r,f-h,g-m,T-x).normalize(),s[1].setComponents(c+r,f+h,g+m,T+x).normalize(),s[2].setComponents(c+a,f+u,g+_,T+y).normalize(),s[3].setComponents(c-a,f-u,g-_,T-y).normalize(),i)s[4].setComponents(l,d,p,M).normalize(),s[5].setComponents(c-l,f-d,g-p,T-M).normalize();else if(s[4].setComponents(c-l,f-d,g-p,T-M).normalize(),e===Xn)s[5].setComponents(c+l,f+d,g+p,T+M).normalize();else if(e===Oo)s[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);const e=cg.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(mr.x=s.normal.x>0?t.max.x:t.min.x,mr.y=s.normal.y>0?t.max.y:t.min.y,mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pf extends Zs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zr=new F,Jr=new F,Xh=new Se,so=new Vc,gr=new ca,$a=new F,Yh=new F;let hg=class extends Ke{constructor(t=new _n,e=new Pf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)Zr.fromBufferAttribute(e,s-1),Jr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Zr.distanceTo(Jr);t.setAttribute("lineDistance",new we(i,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),gr.radius+=o,t.ray.intersectsSphere(gr)===!1)return;Xh.copy(s).invert(),so.copy(t.ray).applyMatrix4(Xh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let _=f,p=m-1;_<p;_+=c){const g=h.getX(_),x=h.getX(_+1),y=_r(this,t,so,l,g,x,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(m-1),p=h.getX(f),g=_r(this,t,so,l,_,p,m-1);g&&e.push(g)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let _=f,p=m-1;_<p;_+=c){const g=_r(this,t,so,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){const _=_r(this,t,so,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function _r(n,t,e,i,s,o,r){const a=n.geometry.attributes.position;if(Zr.fromBufferAttribute(a,s),Jr.fromBufferAttribute(a,o),e.distanceSqToSegment(Zr,Jr,$a,Yh)>i)return;$a.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo($a);if(!(c<t.near||c>t.far))return{distance:c,point:Yh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const qh=new F,jh=new F;class ug extends hg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)qh.fromBufferAttribute(e,s),jh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+qh.distanceTo(jh);t.setAttribute("lineDistance",new we(i,1))}else Lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Df extends hn{constructor(t=[],e=ps,i,s,o,r,a,l,c,h){super(t,e,i,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class No extends hn{constructor(t,e,i=Kn,s,o,r,a=$e,l=$e,c,h=bi,u=1){if(h!==bi&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,o,r,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class dg extends No{constructor(t,e=Kn,i=ps,s,o,r=$e,a=$e,l,c=bi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,o,r,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Lf extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yo extends _n{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,e,t,r,o,0),m("z","y","x",1,-1,i,e,-t,r,o,1),m("x","z","y",1,1,t,i,e,s,r,2),m("x","z","y",1,-1,t,i,-e,s,r,3),m("x","y","z",1,-1,t,e,i,s,o,4),m("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2));function m(_,p,g,x,y,M,T,A,C,v,E){const V=M/C,w=T/v,P=M/2,U=T/2,k=A/2,D=C+1,N=v+1;let I=0,K=0;const X=new F;for(let J=0;J<N;J++){const nt=J*w-U;for(let et=0;et<D;et++){const mt=et*V-P;X[_]=mt*x,X[p]=nt*y,X[g]=k,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[g]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(et/C),u.push(1-J/v),I+=1}}for(let J=0;J<v;J++)for(let nt=0;nt<C;nt++){const et=d+nt+D*J,mt=d+nt+D*(J+1),It=d+(nt+1)+D*(J+1),jt=d+(nt+1)+D*J;l.push(et,mt,jt),l.push(mt,It,jt),K+=6}a.addGroup(f,K,E),f+=K,d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Lt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(o-1);const h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new Mt:new F);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new F,s=[],o=[],r=[],a=new F,l=new Se;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new F)}o[0]=new F,r[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Wt(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,m))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Wt(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let m=1;m<=t;m++)o[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class If extends yi{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class fg extends If{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Gc(){let n=0,t=0,e=0,i=0;function s(o,r,a,l){n=o,t=a,e=-3*o+3*r-2*a-l,i=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const xr=new F,Ka=new Gc,Za=new Gc,Ja=new Gc;class pg extends yi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(xr.subVectors(s[0],s[1]).add(s[0]),c=xr);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(xr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=xr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Ka.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,p),Za.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,p),Ja.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Za.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ja.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Ka.calc(l),Za.calc(l),Ja.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $h(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+o+r)*l+(-3*e+3*i-2*o-r)*a+o*n+e}function mg(n,t){const e=1-n;return e*e*t}function gg(n,t){return 2*(1-n)*n*t}function _g(n,t){return n*n*t}function To(n,t,e,i){return mg(n,t)+gg(n,e)+_g(n,i)}function xg(n,t){const e=1-n;return e*e*e*t}function vg(n,t){const e=1-n;return 3*e*e*n*t}function bg(n,t){return 3*(1-n)*n*n*t}function yg(n,t){return n*n*n*t}function Ao(n,t,e,i,s){return xg(n,t)+vg(n,e)+bg(n,i)+yg(n,s)}class Mg extends yi{constructor(t=new Mt,e=new Mt,i=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Mt){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Ao(t,s.x,o.x,r.x,a.x),Ao(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sg extends yi{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Ao(t,s.x,o.x,r.x,a.x),Ao(t,s.y,o.y,r.y,a.y),Ao(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Eg extends yi{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mc extends yi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tg extends yi{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(To(t,s.x,o.x,r.x),To(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ff extends yi{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(To(t,s.x,o.x,r.x),To(t,s.y,o.y,r.y),To(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ag extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set($h(a,l.x,c.x,h.x,u.x),$h(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}}var wg=Object.freeze({__proto__:null,ArcCurve:fg,CatmullRomCurve3:pg,CubicBezierCurve:Mg,CubicBezierCurve3:Sg,EllipseCurve:If,LineCurve:Eg,LineCurve3:mc,QuadraticBezierCurve:Tg,QuadraticBezierCurve3:Ff,SplineCurve:Ag});class ha extends _n{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const x=g*d-r;for(let y=0;y<c;y++){const M=y*u-o;m.push(M,-x,0),_.push(0,0,1),p.push(y/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const y=x+c*g,M=x+c*(g+1),T=x+1+c*(g+1),A=x+1+c*g;f.push(y,M,A),f.push(M,T,A)}this.setIndex(f),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wc extends _n{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new F,d=new F,f=[],m=[],_=[],p=[];for(let g=0;g<=i;g++){const x=[],y=g/i;let M=0;g===0&&r===0?M=.5/e:g===i&&l===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){const A=T/e;u.x=-t*Math.cos(s+A*o)*Math.sin(r+y*a),u.y=t*Math.cos(r+y*a),u.z=t*Math.sin(s+A*o)*Math.sin(r+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(A+M,1-y),x.push(c++)}h.push(x)}for(let g=0;g<i;g++)for(let x=0;x<e;x++){const y=h[g][x+1],M=h[g][x],T=h[g+1][x],A=h[g+1][x+1];(g!==0||r>0)&&f.push(y,M,A),(g!==i-1||l<Math.PI)&&f.push(M,T,A)}this.setIndex(f),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xc extends _n{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o,thetaStart:r,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],u=[],d=new F,f=new F,m=new F;for(let _=0;_<=i;_++){const p=r+_/i*a;for(let g=0;g<=s;g++){const x=g/s*o;f.x=(t+e*Math.cos(p))*Math.cos(x),f.y=(t+e*Math.cos(p))*Math.sin(x),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let p=1;p<=s;p++){const g=(s+1)*_+p-1,x=(s+1)*(_-1)+p-1,y=(s+1)*(_-1)+p,M=(s+1)*_+p;l.push(g,x,M),l.push(x,y,M)}this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qr extends _n{constructor(t=new Ff(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,i=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new F,l=new F,c=new Mt;let h=new F;const u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2));function _(){for(let y=0;y<e;y++)p(y);p(o===!1?e:0),x(),g()}function p(y){h=t.getPointAt(y/e,h);const M=r.normals[y],T=r.binormals[y];for(let A=0;A<=s;A++){const C=A/s*Math.PI*2,v=Math.sin(C),E=-Math.cos(C);l.x=E*M.x+v*T.x,l.y=E*M.y+v*T.y,l.z=E*M.z+v*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=e;y++)for(let M=1;M<=s;M++){const T=(s+1)*(y-1)+(M-1),A=(s+1)*y+(M-1),C=(s+1)*y+M,v=(s+1)*(y-1)+M;m.push(T,A,v),m.push(A,C,v)}}function x(){for(let y=0;y<=e;y++)for(let M=0;M<=s;M++)c.x=y/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qr(new wg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function qs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function cn(n){const t={};for(let e=0;e<n.length;e++){const i=qs(n[e]);for(const s in i)t[s]=i[s]}return t}function Cg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Of(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Rg={clone:qs,merge:cn};var Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=Cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Lg extends Jn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qa extends Zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ig extends Zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fg extends Zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Nf extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const tl=new Se,Kh=new F,Zh=new F;class Og{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hc,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Oo||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vr=new F,br=new Vi,Bn=new F;class Uf extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(vr,br,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vr,br,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(vr,br,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vr,br,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new F,Jh=new Mt,Qh=new Mt;class wn extends Uf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,Qh),e.subVectors(Qh,Jh)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Yc extends Uf{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ng extends Og{constructor(){super(new Yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ug extends Nf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new Ng}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Bg extends Nf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ls=-90,Is=1;class zg extends Ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Ls,Is,t,e);s.layers=this.layers,this.add(s);const o=new wn(Ls,Is,t,e);o.layers=this.layers,this.add(o);const r=new wn(Ls,Is,t,e);r.layers=this.layers,this.add(r);const a=new wn(Ls,Is,t,e);a.layers=this.layers,this.add(a);const l=new wn(Ls,Is,t,e);l.layers=this.layers,this.add(l);const c=new wn(Ls,Is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class kg extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class tu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Vg extends ug{constructor(t=10,e=10,i=4473924,s=8947848){i=new $t(i),s=new $t(s);const o=e/2,r=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=r){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=d===o?i:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new _n;h.setAttribute("position",new we(l,3)),h.setAttribute("color",new we(c,3));const u=new Pf({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hg extends _s{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function eu(n,t,e,i){const s=Gg(i);switch(e){case vf:return n*t;case yf:return n*t/s.components*s.byteLength;case Oc:return n*t/s.components*s.byteLength;case Xs:return n*t*2/s.components*s.byteLength;case Nc:return n*t*2/s.components*s.byteLength;case bf:return n*t*3/s.components*s.byteLength;case On:return n*t*4/s.components*s.byteLength;case Uc:return n*t*4/s.components*s.byteLength;case kr:case Vr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:case zl:return Math.max(n,16)*Math.max(t,8)/4;case Nl:case Bl:return Math.max(n,8)*Math.max(t,8)/2;case kl:case Vl:case Gl:case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Hl:case Xl:case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ac:case lc:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case hc:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case dc:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gg(n){switch(n){case Mn:case mf:return{byteLength:1,components:1};case Io:case gf:case vi:return{byteLength:2,components:1};case Ic:case Fc:return{byteLength:2,components:4};case Kn:case Lc:case Wn:return{byteLength:4,components:1};case _f:case xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);function Bf(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Wg(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var Xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yg=`#ifdef USE_ALPHAHASH
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
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
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
#endif`,Jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qg=`#ifdef USE_BATCHING
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
#endif`,t_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s_=`#ifdef USE_IRIDESCENCE
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
#endif`,o_=`#ifdef USE_BUMPMAP
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,u_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,f_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,p_=`#define PI 3.141592653589793
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
} // validated`,m_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g_=`vec3 transformedNormal = objectNormal;
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
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",M_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S_=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L_=`#ifdef USE_GRADIENTMAP
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
}`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
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
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,B_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H_=`PhysicalMaterial material;
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
#endif`,G_=`uniform sampler2D dfgLUT;
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
}`,W_=`
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
#endif`,X_=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t0=`#if defined( USE_POINTS_UV )
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
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R0=`float getShadowMask() {
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,F0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
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
}`,Z0=`#if DEPTH_PACKING == 3200
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
}`,J0=`#define DISTANCE
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
}`,Q0=`#define DISTANCE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`uniform float scale;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,ox=`uniform vec3 diffuse;
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
}`,rx=`#define LAMBERT
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
}`,ax=`#define LAMBERT
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
}`,lx=`#define MATCAP
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
}`,cx=`#define MATCAP
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
}`,hx=`#define NORMAL
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
}`,ux=`#define NORMAL
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
}`,dx=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,px=`#define STANDARD
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
}`,mx=`#define STANDARD
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
}`,gx=`#define TOON
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
}`,_x=`#define TOON
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
}`,xx=`uniform float size;
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
}`,vx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,yx=`uniform vec3 color;
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
}`,Mx=`uniform float rotation;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Xg,alphahash_pars_fragment:Yg,alphamap_fragment:qg,alphamap_pars_fragment:jg,alphatest_fragment:$g,alphatest_pars_fragment:Kg,aomap_fragment:Zg,aomap_pars_fragment:Jg,batching_pars_vertex:Qg,batching_vertex:t_,begin_vertex:e_,beginnormal_vertex:n_,bsdfs:i_,iridescence_fragment:s_,bumpmap_pars_fragment:o_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:l_,clipping_planes_vertex:c_,color_fragment:h_,color_pars_fragment:u_,color_pars_vertex:d_,color_vertex:f_,common:p_,cube_uv_reflection_fragment:m_,defaultnormal_vertex:g_,displacementmap_pars_vertex:__,displacementmap_vertex:x_,emissivemap_fragment:v_,emissivemap_pars_fragment:b_,colorspace_fragment:y_,colorspace_pars_fragment:M_,envmap_fragment:S_,envmap_common_pars_fragment:E_,envmap_pars_fragment:T_,envmap_pars_vertex:A_,envmap_physical_pars_fragment:U_,envmap_vertex:w_,fog_vertex:C_,fog_pars_vertex:R_,fog_fragment:P_,fog_pars_fragment:D_,gradientmap_pars_fragment:L_,lightmap_pars_fragment:I_,lights_lambert_fragment:F_,lights_lambert_pars_fragment:O_,lights_pars_begin:N_,lights_toon_fragment:B_,lights_toon_pars_fragment:z_,lights_phong_fragment:k_,lights_phong_pars_fragment:V_,lights_physical_fragment:H_,lights_physical_pars_fragment:G_,lights_fragment_begin:W_,lights_fragment_maps:X_,lights_fragment_end:Y_,logdepthbuf_fragment:q_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:$_,logdepthbuf_vertex:K_,map_fragment:Z_,map_pars_fragment:J_,map_particle_fragment:Q_,map_particle_pars_fragment:t0,metalnessmap_fragment:e0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:o0,morphtarget_pars_vertex:r0,morphtarget_vertex:a0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:_0,opaque_fragment:x0,packing:v0,premultiplied_alpha_fragment:b0,project_vertex:y0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:w0,shadowmap_vertex:C0,shadowmask_pars_fragment:R0,skinbase_vertex:P0,skinning_pars_vertex:D0,skinning_vertex:L0,skinnormal_vertex:I0,specularmap_fragment:F0,specularmap_pars_fragment:O0,tonemapping_fragment:N0,tonemapping_pars_fragment:U0,transmission_fragment:B0,transmission_pars_fragment:z0,uv_pars_fragment:k0,uv_pars_vertex:V0,uv_vertex:H0,worldpos_vertex:G0,background_vert:W0,background_frag:X0,backgroundCube_vert:Y0,backgroundCube_frag:q0,cube_vert:j0,cube_frag:$0,depth_vert:K0,depth_frag:Z0,distance_vert:J0,distance_frag:Q0,equirect_vert:tx,equirect_frag:ex,linedashed_vert:nx,linedashed_frag:ix,meshbasic_vert:sx,meshbasic_frag:ox,meshlambert_vert:rx,meshlambert_frag:ax,meshmatcap_vert:lx,meshmatcap_frag:cx,meshnormal_vert:hx,meshnormal_frag:ux,meshphong_vert:dx,meshphong_frag:fx,meshphysical_vert:px,meshphysical_frag:mx,meshtoon_vert:gx,meshtoon_frag:_x,points_vert:xx,points_frag:vx,shadow_vert:bx,shadow_frag:yx,sprite_vert:Mx,sprite_frag:Sx},ct={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Gn={basic:{uniforms:cn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:cn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:cn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:cn([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:cn([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new $t(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:cn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:cn([ct.points,ct.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:cn([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:cn([ct.common,ct.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:cn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:cn([ct.sprite,ct.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:cn([ct.common,ct.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:cn([ct.lights,ct.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Gn.physical={uniforms:cn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const yr={r:0,b:0,g:0},Ji=new Zn,Ex=new Se;function Tx(n,t,e,i,s,o){const r=new $t(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const M=x.backgroundBlurriness>0;y=t.get(y,M)}return y}function m(x){let y=!1;const M=f(x);M===null?p(r,a):M&&M.isColor&&(p(M,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(x,y){const M=f(y);M&&(M.isCubeTexture||M.mapping===la)?(c===void 0&&(c=new Cn(new Yo(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:qs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ji.copy(y.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(Ji)),c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ae,(h!==M||u!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Cn(new ha(2,2),new Jn({name:"BackgroundMaterial",uniforms:qs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(yr,Of(n)),e.buffers.color.setClear(yr.r,yr.g,yr.b,y,o)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,y=1){r.set(x),a=y,p(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(r,a)},render:m,addToRenderList:_,dispose:g}}function Ax(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(w,P,U,k,D){let N=!1;const I=u(w,k,U,P);o!==I&&(o=I,c(o.object)),N=f(w,k,U,D),N&&m(w,k,U,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,M(w,P,U,k),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function h(w){return n.deleteVertexArray(w)}function u(w,P,U,k){const D=k.wireframe===!0;let N=i[P.id];N===void 0&&(N={},i[P.id]=N);const I=w.isInstancedMesh===!0?w.id:0;let K=N[I];K===void 0&&(K={},N[I]=K);let X=K[U.id];X===void 0&&(X={},K[U.id]=X);let J=X[D];return J===void 0&&(J=d(l()),X[D]=J),J}function d(w){const P=[],U=[],k=[];for(let D=0;D<e;D++)P[D]=0,U[D]=0,k[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:k,object:w,attributes:{},index:null}}function f(w,P,U,k){const D=o.attributes,N=P.attributes;let I=0;const K=U.getAttributes();for(const X in K)if(K[X].location>=0){const nt=D[X];let et=N[X];if(et===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(et=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(et=w.instanceColor)),nt===void 0||nt.attribute!==et||et&&nt.data!==et.data)return!0;I++}return o.attributesNum!==I||o.index!==k}function m(w,P,U,k){const D={},N=P.attributes;let I=0;const K=U.getAttributes();for(const X in K)if(K[X].location>=0){let nt=N[X];nt===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(nt=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(nt=w.instanceColor));const et={};et.attribute=nt,nt&&nt.data&&(et.data=nt.data),D[X]=et,I++}o.attributes=D,o.attributesNum=I,o.index=k}function _(){const w=o.newAttributes;for(let P=0,U=w.length;P<U;P++)w[P]=0}function p(w){g(w,0)}function g(w,P){const U=o.newAttributes,k=o.enabledAttributes,D=o.attributeDivisors;U[w]=1,k[w]===0&&(n.enableVertexAttribArray(w),k[w]=1),D[w]!==P&&(n.vertexAttribDivisor(w,P),D[w]=P)}function x(){const w=o.newAttributes,P=o.enabledAttributes;for(let U=0,k=P.length;U<k;U++)P[U]!==w[U]&&(n.disableVertexAttribArray(U),P[U]=0)}function y(w,P,U,k,D,N,I){I===!0?n.vertexAttribIPointer(w,P,U,D,N):n.vertexAttribPointer(w,P,U,k,D,N)}function M(w,P,U,k){_();const D=k.attributes,N=U.getAttributes(),I=P.defaultAttributeValues;for(const K in N){const X=N[K];if(X.location>=0){let J=D[K];if(J===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),J!==void 0){const nt=J.normalized,et=J.itemSize,mt=t.get(J);if(mt===void 0)continue;const It=mt.buffer,jt=mt.type,Y=mt.bytesPerElement,it=jt===n.INT||jt===n.UNSIGNED_INT||J.gpuType===Lc;if(J.isInterleavedBufferAttribute){const rt=J.data,Ut=rt.stride,Rt=J.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<X.locationSize;Ft++)g(X.location+Ft,rt.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<X.locationSize;Ft++)p(X.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,It);for(let Ft=0;Ft<X.locationSize;Ft++)y(X.location+Ft,et/X.locationSize,jt,nt,Ut*Y,(Rt+et/X.locationSize*Ft)*Y,it)}else{if(J.isInstancedBufferAttribute){for(let rt=0;rt<X.locationSize;rt++)g(X.location+rt,J.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let rt=0;rt<X.locationSize;rt++)p(X.location+rt);n.bindBuffer(n.ARRAY_BUFFER,It);for(let rt=0;rt<X.locationSize;rt++)y(X.location+rt,et/X.locationSize,jt,nt,et*Y,et/X.locationSize*rt*Y,it)}}else if(I!==void 0){const nt=I[K];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(X.location,nt);break;case 3:n.vertexAttrib3fv(X.location,nt);break;case 4:n.vertexAttrib4fv(X.location,nt);break;default:n.vertexAttrib1fv(X.location,nt)}}}}x()}function T(){E();for(const w in i){const P=i[w];for(const U in P){const k=P[U];for(const D in k){const N=k[D];for(const I in N)h(N[I].object),delete N[I];delete k[D]}}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const P=i[w.id];for(const U in P){const k=P[U];for(const D in k){const N=k[D];for(const I in N)h(N[I].object),delete N[I];delete k[D]}}delete i[w.id]}function C(w){for(const P in i){const U=i[P];for(const k in U){const D=U[k];if(D[w.id]===void 0)continue;const N=D[w.id];for(const I in N)h(N[I].object),delete N[I];delete D[w.id]}}}function v(w){for(const P in i){const U=i[P],k=w.isInstancedMesh===!0?w.id:0,D=U[k];if(D!==void 0){for(const N in D){const I=D[N];for(const K in I)h(I[K].object),delete I[K];delete D[N]}delete U[k],Object.keys(U).length===0&&delete i[P]}}}function E(){V(),r=!0,o!==s&&(o=s,c(o.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:V,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function wx(n,t,e){let i;function s(c){i=c}function o(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)r(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cx(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==On&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const v=C===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Mn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Wn&&!v)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:M,maxSamples:T,samples:A}}function Rx(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new Di,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=n.get(u);if(!s||m===null||m.length===0||o&&!p)o?h(null):c();else{const x=o?0:i,y=x*4;let M=g.clippingState||null;l.value=M,M=h(m,d,y,f);for(let T=0;T!==y;++T)M[T]=e[T];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,M=f;y!==_;++y,M+=4)r.copy(u[y]).applyMatrix4(x,a),r.normal.toArray(p,M),p[M+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}const Fi=4,nu=[.125,.215,.35,.446,.526,.582],ls=20,Px=256,oo=new Yc,iu=new $t;let el=null,nl=0,il=0,sl=!1;const Dx=new F;class su{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,o={}){const{size:r=256,position:a=Dx}=o;el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(el,nl,il),this._renderer.xr.enabled=sl,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:vi,format:On,colorSpace:Ys,depthBuffer:!1},s=ou(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(t,e,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Lx(o)),this._blurMaterial=Fx(o,t,e),this._ggxMaterial=Ix(o,t,e)}return s}_compileMaterial(t){const e=new Cn(new _n,t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,i,s,o){const l=new wn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(iu),u.toneMapping=Yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Cn(new Yo,new Rf({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,g=!0):(p.color.copy(iu),g=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[y],o.y,o.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[y],o.z)):(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[y]));const T=this._cubeSize;Fs(s,M*T,y>2?T:0,T,T),u.setRenderTarget(s),g&&u.render(_,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ps||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const o=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Fs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,oo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[i];a.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:m}=this,_=this._sizeLods[i],p=3*_*(i>m-Fi?i-m+Fi:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Fs(o,p,g,3*_,2*_),s.setRenderTarget(o),s.render(a,oo),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=m-i,Fs(t,p,g,3*_,2*_),s.setRenderTarget(t),s.render(a,oo)}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ne("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ls-1),_=o/m,p=isFinite(o)?1+Math.floor(h*_):ls;p>ls&&Lt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ls}`);const g=[];let x=0;for(let C=0;C<ls;++C){const v=C/_,E=Math.exp(-v*v/2);g.push(E),C===0?x+=E:C<p&&(x+=2*E)}for(let C=0;C<g.length;C++)g[C]=g[C]/x;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-i;const M=this._sizeLods[s],T=3*M*(s>y-Fi?s-y+Fi:0),A=4*(this._cubeSize-M);Fs(e,T,A,3*M,2*M),l.setRenderTarget(e),l.render(u,oo)}}function Lx(n){const t=[],e=[],i=[];let s=n;const o=n-Fi+1+nu.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let l=1/a;r>n-Fi?l=nu[r-n+Fi-1]:r===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,p=2,g=1,x=new Float32Array(_*m*f),y=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,v=A>2?0:-1,E=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];x.set(E,_*m*A),y.set(d,p*m*A);const V=[A,A,A,A,A,A];M.set(V,g*m*A)}const T=new _n;T.setAttribute("position",new jn(x,_)),T.setAttribute("uv",new jn(y,p)),T.setAttribute("faceIndex",new jn(M,g)),i.push(new Cn(T,null)),s>Fi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ou(n,t,e){const i=new qn(n,t,e);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ix(n,t,e){return new Jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Px,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ua(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Fx(n,t,e){const i=new Float32Array(ls),s=new F(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ua(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function ru(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function au(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function ua(){return`

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
	`}class zf extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Df(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yo(5,5,5),o=new Jn({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:_i});o.uniforms.tEquirect.value=e;const r=new Cn(s,o),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=rn),new zg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}function Ox(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?r(d):o(d)}function o(d){if(d&&d.isTexture){const f=d.mapping;if(f===Sa||f===Ea)if(t.has(d)){const m=t.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new zf(m.height);return _.fromEquirectangularTexture(n,d),t.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const f=d.mapping,m=f===Sa||f===Ea,_=f===ps||f===Ws;if(m||_){let p=e.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new su(n)),p=m?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const x=d.image;return m&&x&&x.height>0||_&&x&&l(x)?(i===null&&(i=new su(n)),p=m?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===Sa?d.mapping=ps:f===Ea&&(d.mapping=Ws),d}function l(d){let f=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Nx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Kr("WebGLRenderer: "+i+" extension not supported."),s}}}function Ux(n,t,e,i){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],n.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let y=0,M=x.length;y<M;y+=3){const T=x[y+0],A=x[y+1],C=x[y+2];d.push(T,A,A,C,C,T)}}else{const x=m.array;_=m.version;for(let y=0,M=x.length/3-1;y<M;y+=3){const T=y+0,A=y+1,C=y+2;d.push(T,A,A,C,C,T)}}const p=new(m.count>=65535?Cf:wf)(d,1);p.version=_;const g=o.get(u);g&&t.remove(g),o.set(u,p)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Bx(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){n.drawElements(i,f,o,d*r),e.update(f,i,1)}function c(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,o,d*r,m),e.update(f,i,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];e.update(p,i,1)}function u(d,f,m,_){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/r,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,_,0,m);let g=0;for(let x=0;x<m;x++)g+=f[x]*_[x];e.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:ne("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function kx(n,t,e){const i=new WeakMap,s=new Te;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let V=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",V)};var f=V;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let T=a.attributes.position.count*M,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*A*4*u),v=new Ef(C,T,A,u);v.type=Wn,v.needsUpdate=!0;const E=M*4;for(let w=0;w<u;w++){const P=g[w],U=x[w],k=y[w],D=T*A*4*w;for(let N=0;N<P.count;N++){const I=N*E;m===!0&&(s.fromBufferAttribute(P,N),C[D+I+0]=s.x,C[D+I+1]=s.y,C[D+I+2]=s.z,C[D+I+3]=0),_===!0&&(s.fromBufferAttribute(U,N),C[D+I+4]=s.x,C[D+I+5]=s.y,C[D+I+6]=s.z,C[D+I+7]=0),p===!0&&(s.fromBufferAttribute(k,N),C[D+I+8]=s.x,C[D+I+9]=s.y,C[D+I+10]=s.z,C[D+I+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new Mt(T,A)},i.set(a,d),a.addEventListener("dispose",V)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function Vx(n,t,e,i,s){let o=new WeakMap;function r(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(o.get(d)!==h&&(t.update(d),o.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;o.get(f)!==h&&(f.update(),o.set(f,h))}return d}function a(){o=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const Hx={[af]:"LINEAR_TONE_MAPPING",[lf]:"REINHARD_TONE_MAPPING",[cf]:"CINEON_TONE_MAPPING",[hf]:"ACES_FILMIC_TONE_MAPPING",[df]:"AGX_TONE_MAPPING",[ff]:"NEUTRAL_TONE_MAPPING",[uf]:"CUSTOM_TONE_MAPPING"};function Gx(n,t,e,i,s){const o=new qn(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),r=new qn(t,e,{type:vi,depthBuffer:!1,stencilBuffer:!1}),a=new _n;a.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new we([0,2,0,0,2,0],2));const l=new Lg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Cn(a,l),h=new Yc(-1,1,1,-1,0,1);let u=null,d=null,f=!1,m,_=null,p=[],g=!1;this.setSize=function(x,y){o.setSize(x,y),r.setSize(x,y);for(let M=0;M<p.length;M++){const T=p[M];T.setSize&&T.setSize(x,y)}},this.setEffects=function(x){p=x,g=p.length>0&&p[0].isRenderPass===!0;const y=o.width,M=o.height;for(let T=0;T<p.length;T++){const A=p[T];A.setSize&&A.setSize(y,M)}},this.begin=function(x,y){if(f||x.toneMapping===Yn&&p.length===0)return!1;if(_=y,y!==null){const M=y.width,T=y.height;(o.width!==M||o.height!==T)&&this.setSize(M,T)}return g===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=Yn,!0},this.hasRenderPass=function(){return g},this.end=function(x,y){x.toneMapping=m,f=!0;let M=o,T=r;for(let A=0;A<p.length;A++){const C=p[A];if(C.enabled!==!1&&(C.render(x,T,M,y),C.needsSwap!==!1)){const v=M;M=T,T=v}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,l.defines={},Qt.getTransfer(u)===ae&&(l.defines.SRGB_TRANSFER="");const A=Hx[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(_),x.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){o.dispose(),r.dispose(),a.dispose(),l.dispose()}}const kf=new hn,gc=new No(1,1),Vf=new Ef,Hf=new Ym,Gf=new Df,lu=[],cu=[],hu=new Float32Array(16),uu=new Float32Array(9),du=new Float32Array(4);function Js(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=lu[s];if(o===void 0&&(o=new Float32Array(s),lu[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function da(n,t){let e=cu[t];e===void 0&&(e=new Int32Array(t),cu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Wx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),Ge(e,t)}}function Yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),Ge(e,t)}}function qx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),Ge(e,t)}}function jx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;du.set(i),n.uniformMatrix2fv(this.addr,!1,du),Ge(e,i)}}function $x(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;uu.set(i),n.uniformMatrix3fv(this.addr,!1,uu),Ge(e,i)}}function Kx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;hu.set(i),n.uniformMatrix4fv(this.addr,!1,hu),Ge(e,i)}}function Zx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Jx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),Ge(e,t)}}function Qx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),Ge(e,t)}}function tv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),Ge(e,t)}}function ev(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function nv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),Ge(e,t)}}function iv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),Ge(e,t)}}function sv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),Ge(e,t)}}function ov(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(gc.compareFunction=e.isReversedDepthBuffer()?zc:Bc,o=gc):o=kf,e.setTexture2D(t||o,s)}function rv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Hf,s)}function av(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Gf,s)}function lv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vf,s)}function cv(n){switch(n){case 5126:return Wx;case 35664:return Xx;case 35665:return Yx;case 35666:return qx;case 35674:return jx;case 35675:return $x;case 35676:return Kx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function hv(n,t){n.uniform1fv(this.addr,t)}function uv(n,t){const e=Js(t,this.size,2);n.uniform2fv(this.addr,e)}function dv(n,t){const e=Js(t,this.size,3);n.uniform3fv(this.addr,e)}function fv(n,t){const e=Js(t,this.size,4);n.uniform4fv(this.addr,e)}function pv(n,t){const e=Js(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function mv(n,t){const e=Js(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function gv(n,t){const e=Js(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _v(n,t){n.uniform1iv(this.addr,t)}function xv(n,t){n.uniform2iv(this.addr,t)}function vv(n,t){n.uniform3iv(this.addr,t)}function bv(n,t){n.uniform4iv(this.addr,t)}function yv(n,t){n.uniform1uiv(this.addr,t)}function Mv(n,t){n.uniform2uiv(this.addr,t)}function Sv(n,t){n.uniform3uiv(this.addr,t)}function Ev(n,t){n.uniform4uiv(this.addr,t)}function Tv(n,t,e){const i=this.cache,s=t.length,o=da(e,s);He(i,o)||(n.uniform1iv(this.addr,o),Ge(i,o));let r;this.type===n.SAMPLER_2D_SHADOW?r=gc:r=kf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function Av(n,t,e){const i=this.cache,s=t.length,o=da(e,s);He(i,o)||(n.uniform1iv(this.addr,o),Ge(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Hf,o[r])}function wv(n,t,e){const i=this.cache,s=t.length,o=da(e,s);He(i,o)||(n.uniform1iv(this.addr,o),Ge(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Gf,o[r])}function Cv(n,t,e){const i=this.cache,s=t.length,o=da(e,s);He(i,o)||(n.uniform1iv(this.addr,o),Ge(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Vf,o[r])}function Rv(n){switch(n){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return bv;case 5125:return yv;case 36294:return Mv;case 36295:return Sv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Cv}}class Pv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cv(e.type)}}class Dv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rv(e.type)}}class Lv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function fu(n,t){n.seq.push(t),n.map[t.id]=t}function Iv(n,t,e){const i=n.name,s=i.length;for(ol.lastIndex=0;;){const o=ol.exec(i),r=ol.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){fu(e,c===void 0?new Pv(a,n,t):new Dv(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Lv(a),fu(e,u)),e=u}}}class Xr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);Iv(a,l,this)}const s=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function pu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Fv=37297;let Ov=0;function Nv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}const mu=new zt;function Uv(n){Qt._getMatrix(mu,Qt.workingColorSpace,n);const t=`mat3( ${mu.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case jr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function gu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+Nv(n.getShaderSource(t),a)}else return o}function Bv(n,t){const e=Uv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const zv={[af]:"Linear",[lf]:"Reinhard",[cf]:"Cineon",[hf]:"ACESFilmic",[df]:"AgX",[ff]:"Neutral",[uf]:"Custom"};function kv(n,t){const e=zv[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mr=new F;function Vv(){Qt.getLuminanceCoefficients(Mr);const n=Mr.x.toFixed(4),t=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function Gv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Wv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function mo(n){return n!==""}function _u(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(n){return n.replace(Xv,qv)}const Yv=new Map;function qv(n,t){let e=kt[t];if(e===void 0){const i=Yv.get(t);if(i!==void 0)e=kt[i],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _c(e)}const jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(n){return n.replace(jv,$v)}function $v(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function bu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Kv={[zr]:"SHADOWMAP_TYPE_PCF",[po]:"SHADOWMAP_TYPE_VSM"};function Zv(n){return Kv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jv={[ps]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE_UV"};function Qv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Jv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const tb={[Ws]:"ENVMAP_MODE_REFRACTION"};function eb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nb={[rf]:"ENVMAP_BLENDING_MULTIPLY",[Em]:"ENVMAP_BLENDING_MIX",[Tm]:"ENVMAP_BLENDING_ADD"};function ib(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":nb[n.combine]||"ENVMAP_BLENDING_NONE"}function sb(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ob(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Zv(e),c=Qv(e),h=eb(e),u=ib(e),d=sb(e),f=Hv(e),m=Gv(o),_=s.createProgram();let p,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(mo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(mo).join(`
`),g.length>0&&(g+=`
`)):(p=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),g=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?kv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Bv("linearToOutputTexel",e.outputColorSpace),Vv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mo).join(`
`)),r=_c(r),r=_u(r,e),r=xu(r,e),a=_c(a),a=_u(a,e),a=xu(a,e),r=vu(r),a=vu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=x+p+r,M=x+g+a,T=pu(s,s.VERTEX_SHADER,y),A=pu(s,s.FRAGMENT_SHADER,M);s.attachShader(_,T),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(w){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(T)||"",k=s.getShaderInfoLog(A)||"",D=P.trim(),N=U.trim(),I=k.trim();let K=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,A);else{const J=gu(s,T,"vertex"),nt=gu(s,A,"fragment");ne("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+D+`
`+J+`
`+nt)}else D!==""?Lt("WebGLProgram: Program Info Log:",D):(N===""||I==="")&&(X=!1);X&&(w.diagnostics={runnable:K,programLog:D,vertexShader:{log:N,prefix:p},fragmentShader:{log:I,prefix:g}})}s.deleteShader(T),s.deleteShader(A),v=new Xr(s,_),E=Wv(s,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(_,Fv)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ov++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let rb=0;class ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new lb(t),e.set(t,i)),i}}class lb{constructor(t){this.id=rb++,this.code=t,this.usedTimes=0}}function cb(n,t,e,i,s,o){const r=new Tf,a=new ab,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,E,V,w,P){const U=w.fog,k=P.geometry,D=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,I=t.get(v.envMap||D,N),K=I&&I.mapping===la?I.image.height:null,X=f[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Lt("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const J=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,nt=J!==void 0?J.length:0;let et=0;k.morphAttributes.position!==void 0&&(et=1),k.morphAttributes.normal!==void 0&&(et=2),k.morphAttributes.color!==void 0&&(et=3);let mt,It,jt,Y;if(X){const re=Gn[X];mt=re.vertexShader,It=re.fragmentShader}else mt=v.vertexShader,It=v.fragmentShader,a.update(v),jt=a.getVertexShaderID(v),Y=a.getFragmentShaderID(v);const it=n.getRenderTarget(),rt=n.state.buffers.depth.getReversed(),Ut=P.isInstancedMesh===!0,Rt=P.isBatchedMesh===!0,Ft=!!v.map,We=!!v.matcap,Zt=!!I,oe=!!v.aoMap,fe=!!v.lightMap,Vt=!!v.bumpMap,Ce=!!v.normalMap,L=!!v.displacementMap,De=!!v.emissiveMap,se=!!v.metalnessMap,me=!!v.roughnessMap,St=v.anisotropy>0,R=v.clearcoat>0,b=v.dispersion>0,B=v.iridescence>0,$=v.sheen>0,Z=v.transmission>0,j=St&&!!v.anisotropyMap,gt=R&&!!v.clearcoatMap,at=R&&!!v.clearcoatNormalMap,wt=R&&!!v.clearcoatRoughnessMap,Dt=B&&!!v.iridescenceMap,Q=B&&!!v.iridescenceThicknessMap,st=$&&!!v.sheenColorMap,_t=$&&!!v.sheenRoughnessMap,bt=!!v.specularMap,dt=!!v.specularColorMap,Ht=!!v.specularIntensityMap,O=Z&&!!v.transmissionMap,lt=Z&&!!v.thicknessMap,ot=!!v.gradientMap,pt=!!v.alphaMap,tt=v.alphaTest>0,q=!!v.alphaHash,xt=!!v.extensions;let Ot=Yn;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const ge={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:mt,fragmentShader:It,defines:v.defines,customVertexShaderID:jt,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&P._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&P.instanceColor!==null,instancingMorph:Ut&&P.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ys,alphaToCoverage:!!v.alphaToCoverage,map:Ft,matcap:We,envMap:Zt,envMapMode:Zt&&I.mapping,envMapCubeUVHeight:K,aoMap:oe,lightMap:fe,bumpMap:Vt,normalMap:Ce,displacementMap:L,emissiveMap:De,normalMapObjectSpace:Ce&&v.normalMapType===Cm,normalMapTangentSpace:Ce&&v.normalMapType===Mf,metalnessMap:se,roughnessMap:me,anisotropy:St,anisotropyMap:j,clearcoat:R,clearcoatMap:gt,clearcoatNormalMap:at,clearcoatRoughnessMap:wt,dispersion:b,iridescence:B,iridescenceMap:Dt,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:st,sheenRoughnessMap:_t,specularMap:bt,specularColorMap:dt,specularIntensityMap:Ht,transmission:Z,transmissionMap:O,thicknessMap:lt,gradientMap:ot,opaque:v.transparent===!1&&v.blending===zs&&v.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:q,combine:v.combine,mapUv:Ft&&m(v.map.channel),aoMapUv:oe&&m(v.aoMap.channel),lightMapUv:fe&&m(v.lightMap.channel),bumpMapUv:Vt&&m(v.bumpMap.channel),normalMapUv:Ce&&m(v.normalMap.channel),displacementMapUv:L&&m(v.displacementMap.channel),emissiveMapUv:De&&m(v.emissiveMap.channel),metalnessMapUv:se&&m(v.metalnessMap.channel),roughnessMapUv:me&&m(v.roughnessMap.channel),anisotropyMapUv:j&&m(v.anisotropyMap.channel),clearcoatMapUv:gt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:st&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&m(v.sheenRoughnessMap.channel),specularMapUv:bt&&m(v.specularMap.channel),specularColorMapUv:dt&&m(v.specularColorMap.channel),specularIntensityMapUv:Ht&&m(v.specularIntensityMap.channel),transmissionMapUv:O&&m(v.transmissionMap.channel),thicknessMapUv:lt&&m(v.thicknessMap.channel),alphaMapUv:pt&&m(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ce||St),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(Ft||pt),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&Ce===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:rt,skinning:P.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Ft&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:De&&v.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ui,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&v.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ge.vertexUv1s=l.has(1),ge.vertexUv2s=l.has(2),ge.vertexUv3s=l.has(3),l.clear(),ge}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)E.push(V),E.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(g(E,v),x(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),v.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),v.push(r.mask)}function y(v){const E=f[v.type];let V;if(E){const w=Gn[E];V=Rg.clone(w.uniforms)}else V=v.uniforms;return V}function M(v,E){let V=h.get(E);return V!==void 0?++V.usedTimes:(V=new ob(n,E,v,s),c.push(V),h.set(E,V)),V}function T(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){a.remove(v)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:C}}function hb(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,l){n.get(r)[a]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function ub(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function yu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Mu(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,_,p,g){let x=n[t];return x===void 0?(x={id:d.id,object:d,geometry:f,material:m,materialVariant:r(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},n[t]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=m,x.materialVariant=r(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=p,x.group=g),t++,x}function l(d,f,m,_,p,g){const x=a(d,f,m,_,p,g);m.transmission>0?i.push(x):m.transparent===!0?s.push(x):e.push(x)}function c(d,f,m,_,p,g){const x=a(d,f,m,_,p,g);m.transmission>0?i.unshift(x):m.transparent===!0?s.unshift(x):e.unshift(x)}function h(d,f){e.length>1&&e.sort(d||ub),i.length>1&&i.sort(f||yu),s.length>1&&s.sort(f||yu)}function u(){for(let d=t,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:l,unshift:c,finish:u,sort:h}}function db(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new Mu,n.set(i,[r])):s>=o.length?(r=new Mu,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function fb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new $t};break;case"SpotLight":e={position:new F,direction:new F,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function pb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let mb=0;function gb(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function _b(n){const t=new fb,e=pb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,o=new Se,r=new Se;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,x=0,y=0,M=0,T=0,A=0,C=0;c.sort(gb);for(let E=0,V=c.length;E<V;E++){const w=c[E],P=w.color,U=w.intensity,k=w.distance;let D=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Xs?D=w.shadow.map.texture:D=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=P.r*U,u+=P.g*U,d+=P.b*U;else if(w.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(w.sh.coefficients[N],U);C++}else if(w.isDirectionalLight){const N=t.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const I=w.shadow,K=e.get(w);K.shadowIntensity=I.intensity,K.shadowBias=I.bias,K.shadowNormalBias=I.normalBias,K.shadowRadius=I.radius,K.shadowMapSize=I.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=D,i.directionalShadowMatrix[f]=w.shadow.matrix,x++}i.directional[f]=N,f++}else if(w.isSpotLight){const N=t.get(w);N.position.setFromMatrixPosition(w.matrixWorld),N.color.copy(P).multiplyScalar(U),N.distance=k,N.coneCos=Math.cos(w.angle),N.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),N.decay=w.decay,i.spot[_]=N;const I=w.shadow;if(w.map&&(i.spotLightMap[T]=w.map,T++,I.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[_]=I.matrix,w.castShadow){const K=e.get(w);K.shadowIntensity=I.intensity,K.shadowBias=I.bias,K.shadowNormalBias=I.normalBias,K.shadowRadius=I.radius,K.shadowMapSize=I.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=D,M++}_++}else if(w.isRectAreaLight){const N=t.get(w);N.color.copy(P).multiplyScalar(U),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=N,p++}else if(w.isPointLight){const N=t.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),N.distance=w.distance,N.decay=w.decay,w.castShadow){const I=w.shadow,K=e.get(w);K.shadowIntensity=I.intensity,K.shadowBias=I.bias,K.shadowNormalBias=I.normalBias,K.shadowRadius=I.radius,K.shadowMapSize=I.mapSize,K.shadowCameraNear=I.camera.near,K.shadowCameraFar=I.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=D,i.pointShadowMatrix[m]=w.shadow.matrix,y++}i.point[m]=N,m++}else if(w.isHemisphereLight){const N=t.get(w);N.skyColor.copy(w.color).multiplyScalar(U),N.groundColor.copy(w.groundColor).multiplyScalar(U),i.hemi[g]=N,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==f||v.pointLength!==m||v.spotLength!==_||v.rectAreaLength!==p||v.hemiLength!==g||v.numDirectionalShadows!==x||v.numPointShadows!==y||v.numSpotShadows!==M||v.numSpotMaps!==T||v.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,v.directionalLength=f,v.pointLength=m,v.spotLength=_,v.rectAreaLength=p,v.hemiLength=g,v.numDirectionalShadows=x,v.numPointShadows=y,v.numSpotShadows=M,v.numSpotMaps=T,v.numLightProbes=C,i.version=mb++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0;const p=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const y=c[g];if(y.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(y.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),r.identity(),o.copy(y.matrixWorld),o.premultiply(p),r.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Su(n){const t=new _b(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function xb(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Su(n),t.set(s,[a])):o>=r.length?(a=new Su(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
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
}`,yb=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Mb=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Eu=new Se,ro=new F,rl=new F;function Sb(n,t,e){let i=new Hc;const s=new Mt,o=new Mt,r=new Te,a=new Ig,l=new Fg,c={},h=e.maxTextureSize,u={[ki]:gn,[gn]:ki,[ui]:ui},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:vb,fragmentShader:bb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new _n;m.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Cn(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let g=this.type;this.render=function(A,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===om&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zr);const E=n.getRenderTarget(),V=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),P=n.state;P.setBlending(_i),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=g!==this.type;U&&C.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(D=>D.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,D=A.length;k<D;k++){const N=A[k],I=N.shadow;if(I===void 0){Lt("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const K=I.getFrameExtents();s.multiply(K),o.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/K.x),s.x=o.x*K.x,I.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/K.y),s.y=o.y*K.y,I.mapSize.y=o.y));const X=n.state.buffers.depth.getReversed();if(I.camera._reversedDepth=X,I.map===null||U===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===po){if(N.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new qn(s.x,s.y,{format:Xs,type:vi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new No(s.x,s.y,Wn),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=bi,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=$e,I.map.depthTexture.magFilter=$e}else N.isPointLight?(I.map=new zf(s.x),I.map.depthTexture=new dg(s.x,Kn)):(I.map=new qn(s.x,s.y),I.map.depthTexture=new No(s.x,s.y,Kn)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=bi,this.type===zr?(I.map.depthTexture.compareFunction=X?zc:Bc,I.map.depthTexture.minFilter=rn,I.map.depthTexture.magFilter=rn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=$e,I.map.depthTexture.magFilter=$e);I.camera.updateProjectionMatrix()}const J=I.map.isWebGLCubeRenderTarget?6:1;for(let nt=0;nt<J;nt++){if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,nt),n.clear();else{nt===0&&(n.setRenderTarget(I.map),n.clear());const et=I.getViewport(nt);r.set(o.x*et.x,o.y*et.y,o.x*et.z,o.y*et.w),P.viewport(r)}if(N.isPointLight){const et=I.camera,mt=I.matrix,It=N.distance||et.far;It!==et.far&&(et.far=It,et.updateProjectionMatrix()),ro.setFromMatrixPosition(N.matrixWorld),et.position.copy(ro),rl.copy(et.position),rl.add(yb[nt]),et.up.copy(Mb[nt]),et.lookAt(rl),et.updateMatrixWorld(),mt.makeTranslation(-ro.x,-ro.y,-ro.z),Eu.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Eu,et.coordinateSystem,et.reversedDepth)}else I.updateMatrices(N);i=I.getFrustum(),M(C,v,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===po&&x(I,v),I.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(E,V,w)};function x(A,C){const v=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new qn(s.x,s.y,{format:Xs,type:vi})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,v,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,v,f,_,null)}function y(A,C,v,E){let V=null;const w=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)V=w;else if(V=v.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const P=V.uuid,U=C.uuid;let k=c[P];k===void 0&&(k={},c[P]=k);let D=k[U];D===void 0&&(D=V.clone(),k[U]=D,C.addEventListener("dispose",T)),V=D}if(V.visible=C.visible,V.wireframe=C.wireframe,E===po?V.side=C.shadowSide!==null?C.shadowSide:C.side:V.side=C.shadowSide!==null?C.shadowSide:u[C.side],V.alphaMap=C.alphaMap,V.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,V.map=C.map,V.clipShadows=C.clipShadows,V.clippingPlanes=C.clippingPlanes,V.clipIntersection=C.clipIntersection,V.displacementMap=C.displacementMap,V.displacementScale=C.displacementScale,V.displacementBias=C.displacementBias,V.wireframeLinewidth=C.wireframeLinewidth,V.linewidth=C.linewidth,v.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const P=n.properties.get(V);P.light=v}return V}function M(A,C,v,E,V){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&V===po)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const U=t.update(A),k=A.material;if(Array.isArray(k)){const D=U.groups;for(let N=0,I=D.length;N<I;N++){const K=D[N],X=k[K.materialIndex];if(X&&X.visible){const J=y(A,X,E,V);A.onBeforeShadow(n,A,C,v,U,J,K),n.renderBufferDirect(v,null,U,J,A,K),A.onAfterShadow(n,A,C,v,U,J,K)}}}else if(k.visible){const D=y(A,k,E,V);A.onBeforeShadow(n,A,C,v,U,D,null),n.renderBufferDirect(v,null,U,D,A,null),A.onAfterShadow(n,A,C,v,U,D,null)}}const P=A.children;for(let U=0,k=P.length;U<k;U++)M(P[U],C,v,E,V)}function T(A){A.target.removeEventListener("dispose",T);for(const v in c){const E=c[v],V=A.target.uuid;V in E&&(E[V].dispose(),delete E[V])}}}function Eb(n,t){function e(){let O=!1;const lt=new Te;let ot=null;const pt=new Te(0,0,0,0);return{setMask:function(tt){ot!==tt&&!O&&(n.colorMask(tt,tt,tt,tt),ot=tt)},setLocked:function(tt){O=tt},setClear:function(tt,q,xt,Ot,ge){ge===!0&&(tt*=Ot,q*=Ot,xt*=Ot),lt.set(tt,q,xt,Ot),pt.equals(lt)===!1&&(n.clearColor(tt,q,xt,Ot),pt.copy(lt))},reset:function(){O=!1,ot=null,pt.set(-1,0,0,0)}}}function i(){let O=!1,lt=!1,ot=null,pt=null,tt=null;return{setReversed:function(q){if(lt!==q){const xt=t.get("EXT_clip_control");q?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),lt=q;const Ot=tt;tt=null,this.setClear(Ot)}},getReversed:function(){return lt},setTest:function(q){q?it(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(q){ot!==q&&!O&&(n.depthMask(q),ot=q)},setFunc:function(q){if(lt&&(q=Bm[q]),pt!==q){switch(q){case wl:n.depthFunc(n.NEVER);break;case Cl:n.depthFunc(n.ALWAYS);break;case Rl:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case Pl:n.depthFunc(n.EQUAL);break;case Dl:n.depthFunc(n.GEQUAL);break;case Ll:n.depthFunc(n.GREATER);break;case Il:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=q}},setLocked:function(q){O=q},setClear:function(q){tt!==q&&(tt=q,lt&&(q=1-q),n.clearDepth(q))},reset:function(){O=!1,ot=null,pt=null,tt=null,lt=!1}}}function s(){let O=!1,lt=null,ot=null,pt=null,tt=null,q=null,xt=null,Ot=null,ge=null;return{setTest:function(re){O||(re?it(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(re){lt!==re&&!O&&(n.stencilMask(re),lt=re)},setFunc:function(re,Qn,ti){(ot!==re||pt!==Qn||tt!==ti)&&(n.stencilFunc(re,Qn,ti),ot=re,pt=Qn,tt=ti)},setOp:function(re,Qn,ti){(q!==re||xt!==Qn||Ot!==ti)&&(n.stencilOp(re,Qn,ti),q=re,xt=Qn,Ot=ti)},setLocked:function(re){O=re},setClear:function(re){ge!==re&&(n.clearStencil(re),ge=re)},reset:function(){O=!1,lt=null,ot=null,pt=null,tt=null,q=null,xt=null,Ot=null,ge=null}}}const o=new e,r=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,x=null,y=null,M=null,T=null,A=null,C=new $t(0,0,0),v=0,E=!1,V=null,w=null,P=null,U=null,k=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(K)[1]),N=I>=1):K.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),N=I>=2);let X=null,J={};const nt=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),mt=new Te().fromArray(nt),It=new Te().fromArray(et);function jt(O,lt,ot,pt){const tt=new Uint8Array(4),q=n.createTexture();n.bindTexture(O,q),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xt=0;xt<ot;xt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,tt):n.texImage2D(lt+xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,tt);return q}const Y={};Y[n.TEXTURE_2D]=jt(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=jt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=jt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=jt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),it(n.DEPTH_TEST),r.setFunc(Gs),Vt(!1),Ce(Mh),it(n.CULL_FACE),oe(_i);function it(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function rt(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Ut(O,lt){return u[O]!==lt?(n.bindFramebuffer(O,lt),u[O]=lt,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=lt),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function Rt(O,lt){let ot=f,pt=!1;if(O){ot=d.get(lt),ot===void 0&&(ot=[],d.set(lt,ot));const tt=O.textures;if(ot.length!==tt.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let q=0,xt=tt.length;q<xt;q++)ot[q]=n.COLOR_ATTACHMENT0+q;ot.length=tt.length,pt=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,pt=!0);pt&&n.drawBuffers(ot)}function Ft(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const We={[as]:n.FUNC_ADD,[am]:n.FUNC_SUBTRACT,[lm]:n.FUNC_REVERSE_SUBTRACT};We[cm]=n.MIN,We[hm]=n.MAX;const Zt={[um]:n.ZERO,[dm]:n.ONE,[fm]:n.SRC_COLOR,[Tl]:n.SRC_ALPHA,[vm]:n.SRC_ALPHA_SATURATE,[_m]:n.DST_COLOR,[mm]:n.DST_ALPHA,[pm]:n.ONE_MINUS_SRC_COLOR,[Al]:n.ONE_MINUS_SRC_ALPHA,[xm]:n.ONE_MINUS_DST_COLOR,[gm]:n.ONE_MINUS_DST_ALPHA,[bm]:n.CONSTANT_COLOR,[ym]:n.ONE_MINUS_CONSTANT_COLOR,[Mm]:n.CONSTANT_ALPHA,[Sm]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(O,lt,ot,pt,tt,q,xt,Ot,ge,re){if(O===_i){_===!0&&(rt(n.BLEND),_=!1);return}if(_===!1&&(it(n.BLEND),_=!0),O!==rm){if(O!==p||re!==E){if((g!==as||M!==as)&&(n.blendEquation(n.FUNC_ADD),g=as,M=as),re)switch(O){case zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFunc(n.ONE,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ne("WebGLState: Invalid blending: ",O);break}else switch(O){case zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Eh:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",O);break}x=null,y=null,T=null,A=null,C.set(0,0,0),v=0,p=O,E=re}return}tt=tt||lt,q=q||ot,xt=xt||pt,(lt!==g||tt!==M)&&(n.blendEquationSeparate(We[lt],We[tt]),g=lt,M=tt),(ot!==x||pt!==y||q!==T||xt!==A)&&(n.blendFuncSeparate(Zt[ot],Zt[pt],Zt[q],Zt[xt]),x=ot,y=pt,T=q,A=xt),(Ot.equals(C)===!1||ge!==v)&&(n.blendColor(Ot.r,Ot.g,Ot.b,ge),C.copy(Ot),v=ge),p=O,E=!1}function fe(O,lt){O.side===ui?rt(n.CULL_FACE):it(n.CULL_FACE);let ot=O.side===gn;lt&&(ot=!ot),Vt(ot),O.blending===zs&&O.transparent===!1?oe(_i):oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const pt=O.stencilWrite;a.setTest(pt),pt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),De(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(O){V!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),V=O)}function Ce(O){O!==im?(it(n.CULL_FACE),O!==w&&(O===Mh?n.cullFace(n.BACK):O===sm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),w=O}function L(O){O!==P&&(N&&n.lineWidth(O),P=O)}function De(O,lt,ot){O?(it(n.POLYGON_OFFSET_FILL),(U!==lt||k!==ot)&&(U=lt,k=ot,r.getReversed()&&(lt=-lt),n.polygonOffset(lt,ot))):rt(n.POLYGON_OFFSET_FILL)}function se(O){O?it(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function me(O){O===void 0&&(O=n.TEXTURE0+D-1),X!==O&&(n.activeTexture(O),X=O)}function St(O,lt,ot){ot===void 0&&(X===null?ot=n.TEXTURE0+D-1:ot=X);let pt=J[ot];pt===void 0&&(pt={type:void 0,texture:void 0},J[ot]=pt),(pt.type!==O||pt.texture!==lt)&&(X!==ot&&(n.activeTexture(ot),X=ot),n.bindTexture(O,lt||Y[O]),pt.type=O,pt.texture=lt)}function R(){const O=J[X];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function $(){try{n.texSubImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function Z(){try{n.texSubImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function gt(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function at(){try{n.texStorage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function wt(){try{n.texStorage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function Dt(){try{n.texImage2D(...arguments)}catch(O){ne("WebGLState:",O)}}function Q(){try{n.texImage3D(...arguments)}catch(O){ne("WebGLState:",O)}}function st(O){mt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),mt.copy(O))}function _t(O){It.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),It.copy(O))}function bt(O,lt){let ot=c.get(lt);ot===void 0&&(ot=new WeakMap,c.set(lt,ot));let pt=ot.get(O);pt===void 0&&(pt=n.getUniformBlockIndex(lt,O.name),ot.set(O,pt))}function dt(O,lt){const pt=c.get(lt).get(O);l.get(lt)!==pt&&(n.uniformBlockBinding(lt,pt,O.__bindingPointIndex),l.set(lt,pt))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},X=null,J={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,x=null,y=null,M=null,T=null,A=null,C=new $t(0,0,0),v=0,E=!1,V=null,w=null,P=null,U=null,k=null,mt.set(0,0,n.canvas.width,n.canvas.height),It.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:it,disable:rt,bindFramebuffer:Ut,drawBuffers:Rt,useProgram:Ft,setBlending:oe,setMaterial:fe,setFlipSided:Vt,setCullFace:Ce,setLineWidth:L,setPolygonOffset:De,setScissorTest:se,activeTexture:me,bindTexture:St,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:B,texImage2D:Dt,texImage3D:Q,updateUBOMapping:bt,uniformBlockBinding:dt,texStorage2D:at,texStorage3D:wt,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:gt,scissor:st,viewport:_t,reset:Ht}}function Tb(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):$r("canvas")}function _(R,b,B){let $=1;const Z=St(R);if((Z.width>B||Z.height>B)&&($=B/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor($*Z.width),gt=Math.floor($*Z.height);u===void 0&&(u=m(j,gt));const at=b?m(j,gt):u;return at.width=j,at.height=gt,at.getContext("2d").drawImage(R,0,0,j,gt),Lt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+gt+")."),at}else return"data"in R&&Lt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps}function g(R){n.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,b,B,$,Z=!1){if(R!==null){if(n[R]!==void 0)return n[R];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===n.RED&&(B===n.FLOAT&&(j=n.R32F),B===n.HALF_FLOAT&&(j=n.R16F),B===n.UNSIGNED_BYTE&&(j=n.R8)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.R8UI),B===n.UNSIGNED_SHORT&&(j=n.R16UI),B===n.UNSIGNED_INT&&(j=n.R32UI),B===n.BYTE&&(j=n.R8I),B===n.SHORT&&(j=n.R16I),B===n.INT&&(j=n.R32I)),b===n.RG&&(B===n.FLOAT&&(j=n.RG32F),B===n.HALF_FLOAT&&(j=n.RG16F),B===n.UNSIGNED_BYTE&&(j=n.RG8)),b===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RG8UI),B===n.UNSIGNED_SHORT&&(j=n.RG16UI),B===n.UNSIGNED_INT&&(j=n.RG32UI),B===n.BYTE&&(j=n.RG8I),B===n.SHORT&&(j=n.RG16I),B===n.INT&&(j=n.RG32I)),b===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGB8UI),B===n.UNSIGNED_SHORT&&(j=n.RGB16UI),B===n.UNSIGNED_INT&&(j=n.RGB32UI),B===n.BYTE&&(j=n.RGB8I),B===n.SHORT&&(j=n.RGB16I),B===n.INT&&(j=n.RGB32I)),b===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),B===n.UNSIGNED_INT&&(j=n.RGBA32UI),B===n.BYTE&&(j=n.RGBA8I),B===n.SHORT&&(j=n.RGBA16I),B===n.INT&&(j=n.RGBA32I)),b===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),b===n.RGBA){const gt=Z?jr:Qt.getTransfer($);B===n.FLOAT&&(j=n.RGBA32F),B===n.HALF_FLOAT&&(j=n.RGBA16F),B===n.UNSIGNED_BYTE&&(j=gt===ae?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(R,b){let B;return R?b===null||b===Kn||b===Fo?B=n.DEPTH24_STENCIL8:b===Wn?B=n.DEPTH32F_STENCIL8:b===Io&&(B=n.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Kn||b===Fo?B=n.DEPTH_COMPONENT24:b===Wn?B=n.DEPTH_COMPONENT32F:b===Io&&(B=n.DEPTH_COMPONENT16),B}function T(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==$e&&R.minFilter!==rn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){const b=R.target;b.removeEventListener("dispose",A),v(b),b.isVideoTexture&&h.delete(b)}function C(R){const b=R.target;b.removeEventListener("dispose",C),V(b)}function v(R){const b=i.get(R);if(b.__webglInit===void 0)return;const B=R.source,$=d.get(B);if($){const Z=$[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(R),Object.keys($).length===0&&d.delete(B)}i.remove(R)}function E(R){const b=i.get(R);n.deleteTexture(b.__webglTexture);const B=R.source,$=d.get(B);delete $[b.__cacheKey],r.memory.textures--}function V(R){const b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let Z=0;Z<b.__webglFramebuffer[$].length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[$][Z]);else n.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)n.deleteFramebuffer(b.__webglFramebuffer[$]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=R.textures;for(let $=0,Z=B.length;$<Z;$++){const j=i.get(B[$]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),r.memory.textures--),i.remove(B[$])}i.remove(R)}let w=0;function P(){w=0}function U(){const R=w;return R>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),w+=1,R}function k(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function D(R,b){const B=i.get(R);if(R.isVideoTexture&&se(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const $=R.image;if($===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,R,b);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}function N(R,b){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Y(B,R,b);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b)}function I(R,b){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Y(B,R,b);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)}function K(R,b){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){it(B,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)}const X={[Fl]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Ol]:n.MIRRORED_REPEAT},J={[$e]:n.NEAREST,[Am]:n.NEAREST_MIPMAP_NEAREST,[Zo]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[cs]:n.LINEAR_MIPMAP_LINEAR},nt={[Rm]:n.NEVER,[Fm]:n.ALWAYS,[Pm]:n.LESS,[Bc]:n.LEQUAL,[Dm]:n.EQUAL,[zc]:n.GEQUAL,[Lm]:n.GREATER,[Im]:n.NOTEQUAL};function et(R,b){if(b.type===Wn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===rn||b.magFilter===Ta||b.magFilter===Zo||b.magFilter===cs||b.minFilter===rn||b.minFilter===Ta||b.minFilter===Zo||b.minFilter===cs)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,X[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,X[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,X[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,J[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,J[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$e||b.minFilter!==Zo&&b.minFilter!==cs||b.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function mt(R,b){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));const $=b.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const j=k(b);if(j!==R.__cacheKey){Z[j]===void 0&&(Z[j]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,B=!0),Z[j].usedTimes++;const gt=Z[R.__cacheKey];gt!==void 0&&(Z[R.__cacheKey].usedTimes--,gt.usedTimes===0&&E(b)),R.__cacheKey=j,R.__webglTexture=Z[j].texture}return B}function It(R,b,B){return Math.floor(Math.floor(R/B)/b)}function jt(R,b,B,$){const j=R.updateRanges;if(j.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,B,$,b.data);else{j.sort((Q,st)=>Q.start-st.start);let gt=0;for(let Q=1;Q<j.length;Q++){const st=j[gt],_t=j[Q],bt=st.start+st.count,dt=It(_t.start,b.width,4),Ht=It(st.start,b.width,4);_t.start<=bt+1&&dt===Ht&&It(_t.start+_t.count-1,b.width,4)===dt?st.count=Math.max(st.count,_t.start+_t.count-st.start):(++gt,j[gt]=_t)}j.length=gt+1;const at=n.getParameter(n.UNPACK_ROW_LENGTH),wt=n.getParameter(n.UNPACK_SKIP_PIXELS),Dt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Q=0,st=j.length;Q<st;Q++){const _t=j[Q],bt=Math.floor(_t.start/4),dt=Math.ceil(_t.count/4),Ht=bt%b.width,O=Math.floor(bt/b.width),lt=dt,ot=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,Ht,O,lt,ot,B,$,b.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,at),n.pixelStorei(n.UNPACK_SKIP_PIXELS,wt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Dt)}}function Y(R,b,B){let $=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=n.TEXTURE_3D);const Z=mt(R,b),j=b.source;e.bindTexture($,R.__webglTexture,n.TEXTURE0+B);const gt=i.get(j);if(j.version!==gt.__version||Z===!0){e.activeTexture(n.TEXTURE0+B);const at=Qt.getPrimaries(Qt.workingColorSpace),wt=b.colorSpace===Li?null:Qt.getPrimaries(b.colorSpace),Dt=b.colorSpace===Li||at===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Q=_(b.image,!1,s.maxTextureSize);Q=me(b,Q);const st=o.convert(b.format,b.colorSpace),_t=o.convert(b.type);let bt=y(b.internalFormat,st,_t,b.colorSpace,b.isVideoTexture);et($,b);let dt;const Ht=b.mipmaps,O=b.isVideoTexture!==!0,lt=gt.__version===void 0||Z===!0,ot=j.dataReady,pt=T(b,Q);if(b.isDepthTexture)bt=M(b.format===hs,b.type),lt&&(O?e.texStorage2D(n.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,bt,Q.width,Q.height,0,st,_t,null));else if(b.isDataTexture)if(Ht.length>0){O&&lt&&e.texStorage2D(n.TEXTURE_2D,pt,bt,Ht[0].width,Ht[0].height);for(let tt=0,q=Ht.length;tt<q;tt++)dt=Ht[tt],O?ot&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,dt.width,dt.height,st,_t,dt.data):e.texImage2D(n.TEXTURE_2D,tt,bt,dt.width,dt.height,0,st,_t,dt.data);b.generateMipmaps=!1}else O?(lt&&e.texStorage2D(n.TEXTURE_2D,pt,bt,Q.width,Q.height),ot&&jt(b,Q,st,_t)):e.texImage2D(n.TEXTURE_2D,0,bt,Q.width,Q.height,0,st,_t,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,bt,Ht[0].width,Ht[0].height,Q.depth);for(let tt=0,q=Ht.length;tt<q;tt++)if(dt=Ht[tt],b.format!==On)if(st!==null)if(O){if(ot)if(b.layerUpdates.size>0){const xt=eu(dt.width,dt.height,b.format,b.type);for(const Ot of b.layerUpdates){const ge=dt.data.subarray(Ot*xt/dt.data.BYTES_PER_ELEMENT,(Ot+1)*xt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,Ot,dt.width,dt.height,1,st,ge)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,Q.depth,st,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,bt,dt.width,dt.height,Q.depth,0,dt.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ot&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,Q.depth,st,_t,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,bt,dt.width,dt.height,Q.depth,0,st,_t,dt.data)}else{O&&lt&&e.texStorage2D(n.TEXTURE_2D,pt,bt,Ht[0].width,Ht[0].height);for(let tt=0,q=Ht.length;tt<q;tt++)dt=Ht[tt],b.format!==On?st!==null?O?ot&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,dt.width,dt.height,st,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,bt,dt.width,dt.height,0,dt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ot&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,dt.width,dt.height,st,_t,dt.data):e.texImage2D(n.TEXTURE_2D,tt,bt,dt.width,dt.height,0,st,_t,dt.data)}else if(b.isDataArrayTexture)if(O){if(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,bt,Q.width,Q.height,Q.depth),ot)if(b.layerUpdates.size>0){const tt=eu(Q.width,Q.height,b.format,b.type);for(const q of b.layerUpdates){const xt=Q.data.subarray(q*tt/Q.data.BYTES_PER_ELEMENT,(q+1)*tt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,st,_t,xt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,st,_t,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,st,_t,Q.data);else if(b.isData3DTexture)O?(lt&&e.texStorage3D(n.TEXTURE_3D,pt,bt,Q.width,Q.height,Q.depth),ot&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,st,_t,Q.data)):e.texImage3D(n.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,st,_t,Q.data);else if(b.isFramebufferTexture){if(lt)if(O)e.texStorage2D(n.TEXTURE_2D,pt,bt,Q.width,Q.height);else{let tt=Q.width,q=Q.height;for(let xt=0;xt<pt;xt++)e.texImage2D(n.TEXTURE_2D,xt,bt,tt,q,0,st,_t,null),tt>>=1,q>>=1}}else if(Ht.length>0){if(O&&lt){const tt=St(Ht[0]);e.texStorage2D(n.TEXTURE_2D,pt,bt,tt.width,tt.height)}for(let tt=0,q=Ht.length;tt<q;tt++)dt=Ht[tt],O?ot&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,st,_t,dt):e.texImage2D(n.TEXTURE_2D,tt,bt,st,_t,dt);b.generateMipmaps=!1}else if(O){if(lt){const tt=St(Q);e.texStorage2D(n.TEXTURE_2D,pt,bt,tt.width,tt.height)}ot&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st,_t,Q)}else e.texImage2D(n.TEXTURE_2D,0,bt,st,_t,Q);p(b)&&g($),gt.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function it(R,b,B){if(b.image.length!==6)return;const $=mt(R,b),Z=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const j=i.get(Z);if(Z.version!==j.__version||$===!0){e.activeTexture(n.TEXTURE0+B);const gt=Qt.getPrimaries(Qt.workingColorSpace),at=b.colorSpace===Li?null:Qt.getPrimaries(b.colorSpace),wt=b.colorSpace===Li||gt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Dt=b.isCompressedTexture||b.image[0].isCompressedTexture,Q=b.image[0]&&b.image[0].isDataTexture,st=[];for(let q=0;q<6;q++)!Dt&&!Q?st[q]=_(b.image[q],!0,s.maxCubemapSize):st[q]=Q?b.image[q].image:b.image[q],st[q]=me(b,st[q]);const _t=st[0],bt=o.convert(b.format,b.colorSpace),dt=o.convert(b.type),Ht=y(b.internalFormat,bt,dt,b.colorSpace),O=b.isVideoTexture!==!0,lt=j.__version===void 0||$===!0,ot=Z.dataReady;let pt=T(b,_t);et(n.TEXTURE_CUBE_MAP,b);let tt;if(Dt){O&&lt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Ht,_t.width,_t.height);for(let q=0;q<6;q++){tt=st[q].mipmaps;for(let xt=0;xt<tt.length;xt++){const Ot=tt[xt];b.format!==On?bt!==null?O?ot&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt,0,0,Ot.width,Ot.height,bt,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt,Ht,Ot.width,Ot.height,0,Ot.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt,0,0,Ot.width,Ot.height,bt,dt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt,Ht,Ot.width,Ot.height,0,bt,dt,Ot.data)}}}else{if(tt=b.mipmaps,O&&lt){tt.length>0&&pt++;const q=St(st[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Ht,q.width,q.height)}for(let q=0;q<6;q++)if(Q){O?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,st[q].width,st[q].height,bt,dt,st[q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ht,st[q].width,st[q].height,0,bt,dt,st[q].data);for(let xt=0;xt<tt.length;xt++){const ge=tt[xt].image[q].image;O?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt+1,0,0,ge.width,ge.height,bt,dt,ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt+1,Ht,ge.width,ge.height,0,bt,dt,ge.data)}}else{O?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,bt,dt,st[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ht,bt,dt,st[q]);for(let xt=0;xt<tt.length;xt++){const Ot=tt[xt];O?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt+1,0,0,bt,dt,Ot.image[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,xt+1,Ht,bt,dt,Ot.image[q])}}}p(b)&&g(n.TEXTURE_CUBE_MAP),j.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function rt(R,b,B,$,Z,j){const gt=o.convert(B.format,B.colorSpace),at=o.convert(B.type),wt=y(B.internalFormat,gt,at,B.colorSpace),Dt=i.get(b),Q=i.get(B);if(Q.__renderTarget=b,!Dt.__hasExternalTextures){const st=Math.max(1,b.width>>j),_t=Math.max(1,b.height>>j);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,j,wt,st,_t,b.depth,0,gt,at,null):e.texImage2D(Z,j,wt,st,_t,0,gt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),De(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,Q.__webglTexture,0,L(b)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,Q.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(R,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){const $=b.depthTexture,Z=$&&$.isDepthTexture?$.type:null,j=M(b.stencilBuffer,Z),gt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;De(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(b),j,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(b),j,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,R)}else{const $=b.textures;for(let Z=0;Z<$.length;Z++){const j=$[Z],gt=o.convert(j.format,j.colorSpace),at=o.convert(j.type),wt=y(j.internalFormat,gt,at,j.colorSpace);De(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(b),wt,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(b),wt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,wt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(R,b,B){const $=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(b.depthTexture);if(Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),et(n.TEXTURE_CUBE_MAP,b.depthTexture);const Dt=o.convert(b.depthTexture.format),Q=o.convert(b.depthTexture.type);let st;b.depthTexture.format===bi?st=n.DEPTH_COMPONENT24:b.depthTexture.format===hs&&(st=n.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,st,b.width,b.height,0,Dt,Q,null)}}else D(b.depthTexture,0);const j=Z.__webglTexture,gt=L(b),at=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,wt=b.depthTexture.format===hs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===bi)De(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,wt,at,j,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,wt,at,j,0);else if(b.depthTexture.format===hs)De(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,wt,at,j,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,wt,at,j,0);else throw new Error("Unknown depthTexture format")}function Ft(R){const b=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=$}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let $=0;$<6;$++)Rt(b.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?Rt(b.__webglFramebuffer[0],R,0):Rt(b.__webglFramebuffer,R,0)}else if(B){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=n.createRenderbuffer(),Ut(b.__webglDepthbuffer[$],R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,j)}}else{const $=R.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ut(b.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,j)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function We(R,b,B){const $=i.get(R);b!==void 0&&rt($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ft(R)}function Zt(R){const b=R.texture,B=i.get(R),$=i.get(b);R.addEventListener("dispose",C);const Z=R.textures,j=R.isWebGLCubeRenderTarget===!0,gt=Z.length>1;if(gt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=b.version,r.memory.textures++),j){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let wt=0;wt<b.mipmaps.length;wt++)B.__webglFramebuffer[at][wt]=n.createFramebuffer()}else B.__webglFramebuffer[at]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)B.__webglFramebuffer[at]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(gt)for(let at=0,wt=Z.length;at<wt;at++){const Dt=i.get(Z[at]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),r.memory.textures++)}if(R.samples>0&&De(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const wt=Z[at];B.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const Dt=o.convert(wt.format,wt.colorSpace),Q=o.convert(wt.type),st=y(wt.internalFormat,Dt,Q,wt.colorSpace,R.isXRRenderTarget===!0),_t=L(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,st,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,B.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ut(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),et(n.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let wt=0;wt<b.mipmaps.length;wt++)rt(B.__webglFramebuffer[at][wt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt);else rt(B.__webglFramebuffer[at],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(b)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let at=0,wt=Z.length;at<wt;at++){const Dt=Z[at],Q=i.get(Dt);let st=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,Q.__webglTexture),et(st,Dt),rt(B.__webglFramebuffer,R,Dt,n.COLOR_ATTACHMENT0+at,st,0),p(Dt)&&g(st)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),et(at,b),b.mipmaps&&b.mipmaps.length>0)for(let wt=0;wt<b.mipmaps.length;wt++)rt(B.__webglFramebuffer[wt],R,b,n.COLOR_ATTACHMENT0,at,wt);else rt(B.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,at,0);p(b)&&g(at),e.unbindTexture()}R.depthBuffer&&Ft(R)}function oe(R){const b=R.textures;for(let B=0,$=b.length;B<$;B++){const Z=b[B];if(p(Z)){const j=x(R),gt=i.get(Z).__webglTexture;e.bindTexture(j,gt),g(j),e.unbindTexture()}}}const fe=[],Vt=[];function Ce(R){if(R.samples>0){if(De(R)===!1){const b=R.textures,B=R.width,$=R.height;let Z=n.COLOR_BUFFER_BIT;const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(R),at=b.length>1;if(at)for(let Dt=0;Dt<b.length;Dt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const wt=R.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Dt=0;Dt<b.length;Dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Dt]);const Q=i.get(b[Dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,B,$,0,0,B,$,Z,n.NEAREST),l===!0&&(fe.length=0,Vt.length=0,fe.push(n.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(fe.push(j),Vt.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Vt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let Dt=0;Dt<b.length;Dt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Dt]);const Q=i.get(b[Dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,Q,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function L(R){return Math.min(s.maxSamples,R.samples)}function De(R){const b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function se(R){const b=r.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function me(R,b){const B=R.colorSpace,$=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ys&&B!==Li&&(Qt.getTransfer(B)===ae?($!==On||Z!==Mn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",B)),b}function St(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=D,this.setTexture2DArray=N,this.setTexture3D=I,this.setTextureCube=K,this.rebindTextures=We,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ab(n,t){function e(i,s=Li){let o;const r=Qt.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_f)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mf)return n.BYTE;if(i===gf)return n.SHORT;if(i===Io)return n.UNSIGNED_SHORT;if(i===Lc)return n.INT;if(i===Kn)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===vi)return n.HALF_FLOAT;if(i===vf)return n.ALPHA;if(i===bf)return n.RGB;if(i===On)return n.RGBA;if(i===bi)return n.DEPTH_COMPONENT;if(i===hs)return n.DEPTH_STENCIL;if(i===yf)return n.RED;if(i===Oc)return n.RED_INTEGER;if(i===Xs)return n.RG;if(i===Nc)return n.RG_INTEGER;if(i===Uc)return n.RGBA_INTEGER;if(i===kr||i===Vr||i===Hr||i===Gr)if(r===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===kr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===kr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ul||i===Bl||i===zl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Nl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kl||i===Vl||i===Hl||i===Gl||i===Wl||i===Xl||i===Yl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===kl||i===Vl)return r===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Hl)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gl)return o.COMPRESSED_R11_EAC;if(i===Wl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Xl)return o.COMPRESSED_RG11_EAC;if(i===Yl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ql||i===jl||i===$l||i===Kl||i===Zl||i===Jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===oc||i===rc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ql)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jl)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kl)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jl)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ql)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===lc||i===cc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===ac)return r===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===uc||i===dc||i===fc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===hc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===uc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cb=`
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

}`;class Rb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Lf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Jn({vertexShader:wb,fragmentShader:Cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Cn(new ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pb extends _s{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new Rb,g={},x=e.getContextAttributes();let y=null,M=null;const T=[],A=[],C=new Mt;let v=null;const E=new wn;E.viewport=new Te;const V=new wn;V.viewport=new Te;const w=[E,V],P=new kg;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=T[Y];return it===void 0&&(it=new La,T[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=T[Y];return it===void 0&&(it=new La,T[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=T[Y];return it===void 0&&(it=new La,T[Y]=it),it.getHandSpace()};function D(Y){const it=A.indexOf(Y.inputSource);if(it===-1)return;const rt=T[it];rt!==void 0&&(rt.update(Y.inputSource,Y.frame,c||r),rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",I);for(let Y=0;Y<T.length;Y++){const it=A[Y];it!==null&&(A[Y]=null,T[Y].disconnect(it))}U=null,k=null,p.reset();for(const Y in g)delete g[Y];t.setRenderTarget(y),f=null,d=null,u=null,s=null,M=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Ut=null,Rt=null;x.depth&&(Rt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=x.stencil?hs:bi,Ut=x.stencil?Fo:Kn);const Ft={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:o};u=this.getBinding(),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new qn(d.textureWidth,d.textureHeight,{format:On,type:Mn,depthTexture:new No(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new qn(f.framebufferWidth,f.framebufferHeight,{format:On,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function I(Y){for(let it=0;it<Y.removed.length;it++){const rt=Y.removed[it],Ut=A.indexOf(rt);Ut>=0&&(A[Ut]=null,T[Ut].disconnect(rt))}for(let it=0;it<Y.added.length;it++){const rt=Y.added[it];let Ut=A.indexOf(rt);if(Ut===-1){for(let Ft=0;Ft<T.length;Ft++)if(Ft>=A.length){A.push(rt),Ut=Ft;break}else if(A[Ft]===null){A[Ft]=rt,Ut=Ft;break}if(Ut===-1)break}const Rt=T[Ut];Rt&&Rt.connect(rt)}}const K=new F,X=new F;function J(Y,it,rt){K.setFromMatrixPosition(it.matrixWorld),X.setFromMatrixPosition(rt.matrixWorld);const Ut=K.distanceTo(X),Rt=it.projectionMatrix.elements,Ft=rt.projectionMatrix.elements,We=Rt[14]/(Rt[10]-1),Zt=Rt[14]/(Rt[10]+1),oe=(Rt[9]+1)/Rt[5],fe=(Rt[9]-1)/Rt[5],Vt=(Rt[8]-1)/Rt[0],Ce=(Ft[8]+1)/Ft[0],L=We*Vt,De=We*Ce,se=Ut/(-Vt+Ce),me=se*-Vt;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(me),Y.translateZ(se),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const St=We+se,R=Zt+se,b=L-me,B=De+(Ut-me),$=oe*Zt/R*St,Z=fe*Zt/R*St;Y.projectionMatrix.makePerspective(b,B,$,Z,St,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,rt=Y.far;p.texture!==null&&(p.depthNear>0&&(it=p.depthNear),p.depthFar>0&&(rt=p.depthFar)),P.near=V.near=E.near=it,P.far=V.far=E.far=rt,(U!==P.near||k!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,k=P.far),P.layers.mask=Y.layers.mask|6,E.layers.mask=P.layers.mask&-5,V.layers.mask=P.layers.mask&-3;const Ut=Y.parent,Rt=P.cameras;nt(P,Ut);for(let Ft=0;Ft<Rt.length;Ft++)nt(Rt[Ft],Ut);Rt.length===2?J(P,E,V):P.projectionMatrix.copy(E.projectionMatrix),et(Y,P,Ut)};function et(Y,it,rt){rt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=pc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(Y){return g[Y]};let mt=null;function It(Y,it){if(h=it.getViewerPose(c||r),m=it,h!==null){const rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ut=!1;rt.length!==P.cameras.length&&(P.cameras.length=0,Ut=!0);for(let Zt=0;Zt<rt.length;Zt++){const oe=rt[Zt];let fe=null;if(f!==null)fe=f.getViewport(oe);else{const Ce=u.getViewSubImage(d,oe);fe=Ce.viewport,Zt===0&&(t.setRenderTargetTextures(M,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(M))}let Vt=w[Zt];Vt===void 0&&(Vt=new wn,Vt.layers.enable(Zt),Vt.viewport=new Te,w[Zt]=Vt),Vt.matrix.fromArray(oe.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(oe.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(fe.x,fe.y,fe.width,fe.height),Zt===0&&(P.matrix.copy(Vt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ut===!0&&P.cameras.push(Vt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const Zt=u.getDepthInformation(rt[0]);Zt&&Zt.isValid&&Zt.texture&&p.init(Zt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let Zt=0;Zt<rt.length;Zt++){const oe=rt[Zt].camera;if(oe){let fe=g[oe];fe||(fe=new Lf,g[oe]=fe);const Vt=u.getCameraImage(oe);fe.sourceTexture=Vt}}}}for(let rt=0;rt<T.length;rt++){const Ut=A[rt],Rt=T[rt];Ut!==null&&Rt!==void 0&&Rt.update(Ut,it,c||r)}mt&&mt(Y,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),m=null}const jt=new Bf;jt.setAnimationLoop(It),this.setAnimationLoop=function(Y){mt=Y},this.dispose=function(){}}}const Qi=new Zn,Db=new Se;function Lb(n,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Of(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,x,y,M){g.isMeshBasicMaterial?o(p,g):g.isMeshLambertMaterial?(o(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(o(p,g),u(p,g)):g.isMeshPhongMaterial?(o(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(o(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(o(p,g),m(p,g)):g.isMeshDepthMaterial?o(p,g):g.isMeshDistanceMaterial?(o(p,g),_(p,g)):g.isMeshNormalMaterial?o(p,g):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,x,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===gn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===gn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=t.get(g),y=x.envMap,M=x.envMapRotation;y&&(p.envMap.value=y,Qi.copy(M),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),p.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(Qi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=y*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const x=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ib(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const M=y.program;i.uniformBlockBinding(x,M)}function c(x,y){let M=s[x.id];M===void 0&&(m(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",p));const T=y.program;i.updateUBOMapping(x,T);const A=t.render.frame;o[x.id]!==A&&(d(x),o[x.id]=A)}function h(x){const y=u();x.__bindingPointIndex=y;const M=n.createBuffer(),T=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function u(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],M=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,C=M.length;A<C;A++){const v=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,V=v.length;E<V;E++){const w=v[E];if(f(w,A,E,T)===!0){const P=w.__offset,U=Array.isArray(w.value)?w.value:[w.value];let k=0;for(let D=0;D<U.length;D++){const N=U[D],I=_(N);typeof N=="number"||typeof N=="boolean"?(w.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,P+k,w.__data)):N.isMatrix3?(w.__data[0]=N.elements[0],w.__data[1]=N.elements[1],w.__data[2]=N.elements[2],w.__data[3]=0,w.__data[4]=N.elements[3],w.__data[5]=N.elements[4],w.__data[6]=N.elements[5],w.__data[7]=0,w.__data[8]=N.elements[6],w.__data[9]=N.elements[7],w.__data[10]=N.elements[8],w.__data[11]=0):(N.toArray(w.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,y,M,T){const A=x.value,C=y+"_"+M;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const v=T[C];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return T[C]=A,!0}else if(v.equals(A)===!1)return v.copy(A),!0}return!1}function m(x){const y=x.uniforms;let M=0;const T=16;for(let C=0,v=y.length;C<v;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let V=0,w=E.length;V<w;V++){const P=E[V],U=Array.isArray(P.value)?P.value:[P.value];for(let k=0,D=U.length;k<D;k++){const N=U[k],I=_(N),K=M%T,X=K%I.boundary,J=K+X;M+=X,J!==0&&T-J<I.storage&&(M+=T-J),P.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=I.storage}}}const A=M%T;return A>0&&(M+=T-A),x.__size=M,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Lt("WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function g(){for(const x in s)n.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:l,update:c,dispose:g}}const Fb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function Ob(){return zn===null&&(zn=new rg(Fb,16,16,Xs,vi),zn.name="DFG_LUT",zn.minFilter=rn,zn.magFilter=rn,zn.wrapS=fi,zn.wrapT=fi,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class Nb{constructor(t={}){const{canvas:e=Nm(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Mn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;const _=f,p=new Set([Uc,Nc,Oc]),g=new Set([Mn,Kn,Io,Fo,Ic,Fc]),x=new Uint32Array(4),y=new Int32Array(4);let M=null,T=null;const A=[],C=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let V=!1;this._outputColorSpace=An;let w=0,P=0,U=null,k=-1,D=null;const N=new Te,I=new Te;let K=null;const X=new $t(0);let J=0,nt=e.width,et=e.height,mt=1,It=null,jt=null;const Y=new Te(0,0,nt,et),it=new Te(0,0,nt,et);let rt=!1;const Ut=new Hc;let Rt=!1,Ft=!1;const We=new Se,Zt=new F,oe=new Te,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Ce(){return U===null?mt:1}let L=i;function De(S,z){return e.getContext(S,z)}try{const S={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dc}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",ge,!1),L===null){const z="webgl2";if(L=De(z,S),L===null)throw De(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw ne("WebGLRenderer: "+S.message),S}let se,me,St,R,b,B,$,Z,j,gt,at,wt,Dt,Q,st,_t,bt,dt,Ht,O,lt,ot,pt;function tt(){se=new Nx(L),se.init(),lt=new Ab(L,se),me=new Cx(L,se,t,lt),St=new Eb(L,se),me.reversedDepthBuffer&&d&&St.buffers.depth.setReversed(!0),R=new zx(L),b=new hb,B=new Tb(L,se,St,b,me,lt,R),$=new Ox(E),Z=new Wg(L),ot=new Ax(L,Z),j=new Ux(L,Z,R,ot),gt=new Vx(L,j,Z,ot,R),dt=new kx(L,me,B),st=new Rx(b),at=new cb(E,$,se,me,ot,st),wt=new Lb(E,b),Dt=new db,Q=new xb(se),bt=new Tx(E,$,St,gt,m,l),_t=new Sb(E,gt,me),pt=new Ib(L,R,me,St),Ht=new wx(L,se,R),O=new Bx(L,se,R),R.programs=at.programs,E.capabilities=me,E.extensions=se,E.properties=b,E.renderLists=Dt,E.shadowMap=_t,E.state=St,E.info=R}tt(),_!==Mn&&(v=new Gx(_,e.width,e.height,s,o));const q=new Pb(E,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(S){S!==void 0&&(mt=S,this.setSize(nt,et,!1))},this.getSize=function(S){return S.set(nt,et)},this.setSize=function(S,z,W=!0){if(q.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=S,et=z,e.width=Math.floor(S*mt),e.height=Math.floor(z*mt),W===!0&&(e.style.width=S+"px",e.style.height=z+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(nt*mt,et*mt).floor()},this.setDrawingBufferSize=function(S,z,W){nt=S,et=z,mt=W,e.width=Math.floor(S*W),e.height=Math.floor(z*W),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(_===Mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,z,W,G){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,z,W,G),St.viewport(N.copy(Y).multiplyScalar(mt).round())},this.getScissor=function(S){return S.copy(it)},this.setScissor=function(S,z,W,G){S.isVector4?it.set(S.x,S.y,S.z,S.w):it.set(S,z,W,G),St.scissor(I.copy(it).multiplyScalar(mt).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(S){St.setScissorTest(rt=S)},this.setOpaqueSort=function(S){It=S},this.setTransparentSort=function(S){jt=S},this.getClearColor=function(S){return S.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,W=!0){let G=0;if(S){let H=!1;if(U!==null){const ht=U.texture.format;H=p.has(ht)}if(H){const ht=U.texture.type,ft=g.has(ht),ut=bt.getClearColor(),yt=bt.getClearAlpha(),Tt=ut.r,Bt=ut.g,Gt=ut.b;ft?(x[0]=Tt,x[1]=Bt,x[2]=Gt,x[3]=yt,L.clearBufferuiv(L.COLOR,0,x)):(y[0]=Tt,y[1]=Bt,y[2]=Gt,y[3]=yt,L.clearBufferiv(L.COLOR,0,y))}else G|=L.COLOR_BUFFER_BIT}z&&(G|=L.DEPTH_BUFFER_BIT),W&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),bt.dispose(),Dt.dispose(),Q.dispose(),b.dispose(),$.dispose(),gt.dispose(),ot.dispose(),pt.dispose(),at.dispose(),q.dispose(),q.removeEventListener("sessionstart",ph),q.removeEventListener("sessionend",mh),Yi.stop()};function xt(S){S.preventDefault(),Ph("WebGLRenderer: Context Lost."),V=!0}function Ot(){Ph("WebGLRenderer: Context Restored."),V=!1;const S=R.autoReset,z=_t.enabled,W=_t.autoUpdate,G=_t.needsUpdate,H=_t.type;tt(),R.autoReset=S,_t.enabled=z,_t.autoUpdate=W,_t.needsUpdate=G,_t.type=H}function ge(S){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function re(S){const z=S.target;z.removeEventListener("dispose",re),Qn(z)}function Qn(S){ti(S),b.remove(S)}function ti(S){const z=b.get(S).programs;z!==void 0&&(z.forEach(function(W){at.releaseProgram(W)}),S.isShaderMaterial&&at.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,W,G,H,ht){z===null&&(z=fe);const ft=H.isMesh&&H.matrixWorld.determinant()<0,ut=Zp(S,z,W,G,H);St.setMaterial(G,ft);let yt=W.index,Tt=1;if(G.wireframe===!0){if(yt=j.getWireframeAttribute(W),yt===void 0)return;Tt=2}const Bt=W.drawRange,Gt=W.attributes.position;let At=Bt.start*Tt,he=(Bt.start+Bt.count)*Tt;ht!==null&&(At=Math.max(At,ht.start*Tt),he=Math.min(he,(ht.start+ht.count)*Tt)),yt!==null?(At=Math.max(At,0),he=Math.min(he,yt.count)):Gt!=null&&(At=Math.max(At,0),he=Math.min(he,Gt.count));const Re=he-At;if(Re<0||Re===1/0)return;ot.setup(H,G,ut,W,yt);let Ee,ue=Ht;if(yt!==null&&(Ee=Z.get(yt),ue=O,ue.setIndex(Ee)),H.isMesh)G.wireframe===!0?(St.setLineWidth(G.wireframeLinewidth*Ce()),ue.setMode(L.LINES)):ue.setMode(L.TRIANGLES);else if(H.isLine){let Ze=G.linewidth;Ze===void 0&&(Ze=1),St.setLineWidth(Ze*Ce()),H.isLineSegments?ue.setMode(L.LINES):H.isLineLoop?ue.setMode(L.LINE_LOOP):ue.setMode(L.LINE_STRIP)}else H.isPoints?ue.setMode(L.POINTS):H.isSprite&&ue.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Kr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ue.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ze=H._multiDrawStarts,Et=H._multiDrawCounts,xn=H._multiDrawCount,ee=yt?Z.get(yt).bytesPerElement:1,Rn=b.get(G).currentProgram.getUniforms();for(let Un=0;Un<xn;Un++)Rn.setValue(L,"_gl_DrawID",Un),ue.render(Ze[Un]/ee,Et[Un])}else if(H.isInstancedMesh)ue.renderInstances(At,Re,H.count);else if(W.isInstancedBufferGeometry){const Ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Et=Math.min(W.instanceCount,Ze);ue.renderInstances(At,Re,Et)}else ue.render(At,Re)};function fh(S,z,W){S.transparent===!0&&S.side===ui&&S.forceSinglePass===!1?(S.side=gn,S.needsUpdate=!0,Ko(S,z,W),S.side=ki,S.needsUpdate=!0,Ko(S,z,W),S.side=ui):Ko(S,z,W)}this.compile=function(S,z,W=null){W===null&&(W=S),T=Q.get(W),T.init(z),C.push(T),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==W&&S.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const G=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ht=H.material;if(ht)if(Array.isArray(ht))for(let ft=0;ft<ht.length;ft++){const ut=ht[ft];fh(ut,W,H),G.add(ut)}else fh(ht,W,H),G.add(ht)}),T=C.pop(),G},this.compileAsync=function(S,z,W=null){const G=this.compile(S,z,W);return new Promise(H=>{function ht(){if(G.forEach(function(ft){b.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){H(S);return}setTimeout(ht,10)}se.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ya=null;function Kp(S){ya&&ya(S)}function ph(){Yi.stop()}function mh(){Yi.start()}const Yi=new Bf;Yi.setAnimationLoop(Kp),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(S){ya=S,q.setAnimationLoop(S),S===null?Yi.stop():Yi.start()},q.addEventListener("sessionstart",ph),q.addEventListener("sessionend",mh),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;const W=q.enabled===!0&&q.isPresenting===!0,G=v!==null&&(U===null||W)&&v.begin(E,U);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(z),z=q.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,z,U),T=Q.get(S,C.length),T.init(z),C.push(T),We.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ut.setFromProjectionMatrix(We,Xn,z.reversedDepth),Ft=this.localClippingEnabled,Rt=st.init(this.clippingPlanes,Ft),M=Dt.get(S,A.length),M.init(),A.push(M),q.enabled===!0&&q.isPresenting===!0){const ft=E.xr.getDepthSensingMesh();ft!==null&&Ma(ft,z,-1/0,E.sortObjects)}Ma(S,z,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(It,jt),Vt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Vt&&bt.addToRenderList(M,S),this.info.render.frame++,Rt===!0&&st.beginShadows();const H=T.state.shadowsArray;if(_t.render(H,S,z),Rt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&v.hasRenderPass())===!1){const ft=M.opaque,ut=M.transmissive;if(T.setupLights(),z.isArrayCamera){const yt=z.cameras;if(ut.length>0)for(let Tt=0,Bt=yt.length;Tt<Bt;Tt++){const Gt=yt[Tt];_h(ft,ut,S,Gt)}Vt&&bt.render(S);for(let Tt=0,Bt=yt.length;Tt<Bt;Tt++){const Gt=yt[Tt];gh(M,S,Gt,Gt.viewport)}}else ut.length>0&&_h(ft,ut,S,z),Vt&&bt.render(S),gh(M,S,z)}U!==null&&P===0&&(B.updateMultisampleRenderTarget(U),B.updateRenderTargetMipmap(U)),G&&v.end(E),S.isScene===!0&&S.onAfterRender(E,S,z),ot.resetDefaultState(),k=-1,D=null,C.pop(),C.length>0?(T=C[C.length-1],Rt===!0&&st.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Ma(S,z,W,G){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ut.intersectsSprite(S)){G&&oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(We);const ft=gt.update(S),ut=S.material;ut.visible&&M.push(S,ft,ut,W,oe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ut.intersectsObject(S))){const ft=gt.update(S),ut=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),oe.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),oe.copy(ft.boundingSphere.center)),oe.applyMatrix4(S.matrixWorld).applyMatrix4(We)),Array.isArray(ut)){const yt=ft.groups;for(let Tt=0,Bt=yt.length;Tt<Bt;Tt++){const Gt=yt[Tt],At=ut[Gt.materialIndex];At&&At.visible&&M.push(S,ft,At,W,oe.z,Gt)}}else ut.visible&&M.push(S,ft,ut,W,oe.z,null)}}const ht=S.children;for(let ft=0,ut=ht.length;ft<ut;ft++)Ma(ht[ft],z,W,G)}function gh(S,z,W,G){const{opaque:H,transmissive:ht,transparent:ft}=S;T.setupLightsView(W),Rt===!0&&st.setGlobalState(E.clippingPlanes,W),G&&St.viewport(N.copy(G)),H.length>0&&$o(H,z,W),ht.length>0&&$o(ht,z,W),ft.length>0&&$o(ft,z,W),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function _h(S,z,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const At=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new qn(1,1,{generateMipmaps:!0,type:At?vi:Mn,minFilter:cs,samples:Math.max(4,me.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const ht=T.state.transmissionRenderTarget[G.id],ft=G.viewport||N;ht.setSize(ft.z*E.transmissionResolutionScale,ft.w*E.transmissionResolutionScale);const ut=E.getRenderTarget(),yt=E.getActiveCubeFace(),Tt=E.getActiveMipmapLevel();E.setRenderTarget(ht),E.getClearColor(X),J=E.getClearAlpha(),J<1&&E.setClearColor(16777215,.5),E.clear(),Vt&&bt.render(W);const Bt=E.toneMapping;E.toneMapping=Yn;const Gt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Rt===!0&&st.setGlobalState(E.clippingPlanes,G),$o(S,W,G),B.updateMultisampleRenderTarget(ht),B.updateRenderTargetMipmap(ht),se.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let he=0,Re=z.length;he<Re;he++){const Ee=z[he],{object:ue,geometry:Ze,material:Et,group:xn}=Ee;if(Et.side===ui&&ue.layers.test(G.layers)){const ee=Et.side;Et.side=gn,Et.needsUpdate=!0,xh(ue,W,G,Ze,Et,xn),Et.side=ee,Et.needsUpdate=!0,At=!0}}At===!0&&(B.updateMultisampleRenderTarget(ht),B.updateRenderTargetMipmap(ht))}E.setRenderTarget(ut,yt,Tt),E.setClearColor(X,J),Gt!==void 0&&(G.viewport=Gt),E.toneMapping=Bt}function $o(S,z,W){const G=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ht=S.length;H<ht;H++){const ft=S[H],{object:ut,geometry:yt,group:Tt}=ft;let Bt=ft.material;Bt.allowOverride===!0&&G!==null&&(Bt=G),ut.layers.test(W.layers)&&xh(ut,z,W,yt,Bt,Tt)}}function xh(S,z,W,G,H,ht){S.onBeforeRender(E,z,W,G,H,ht),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(E,z,W,G,S,ht),H.transparent===!0&&H.side===ui&&H.forceSinglePass===!1?(H.side=gn,H.needsUpdate=!0,E.renderBufferDirect(W,z,G,H,S,ht),H.side=ki,H.needsUpdate=!0,E.renderBufferDirect(W,z,G,H,S,ht),H.side=ui):E.renderBufferDirect(W,z,G,H,S,ht),S.onAfterRender(E,z,W,G,H,ht)}function Ko(S,z,W){z.isScene!==!0&&(z=fe);const G=b.get(S),H=T.state.lights,ht=T.state.shadowsArray,ft=H.state.version,ut=at.getParameters(S,H.state,ht,z,W),yt=at.getProgramCacheKey(ut);let Tt=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,G.fog=z.fog;const Bt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=$.get(S.envMap||G.environment,Bt),G.envMapRotation=G.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Tt===void 0&&(S.addEventListener("dispose",re),Tt=new Map,G.programs=Tt);let Gt=Tt.get(yt);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===ft)return bh(S,ut),Gt}else ut.uniforms=at.getUniforms(S),S.onBeforeCompile(ut,E),Gt=at.acquireProgram(ut,yt),Tt.set(yt,Gt),G.uniforms=ut.uniforms;const At=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(At.clippingPlanes=st.uniform),bh(S,ut),G.needsLights=Qp(S),G.lightsStateVersion=ft,G.needsLights&&(At.ambientLightColor.value=H.state.ambient,At.lightProbe.value=H.state.probe,At.directionalLights.value=H.state.directional,At.directionalLightShadows.value=H.state.directionalShadow,At.spotLights.value=H.state.spot,At.spotLightShadows.value=H.state.spotShadow,At.rectAreaLights.value=H.state.rectArea,At.ltc_1.value=H.state.rectAreaLTC1,At.ltc_2.value=H.state.rectAreaLTC2,At.pointLights.value=H.state.point,At.pointLightShadows.value=H.state.pointShadow,At.hemisphereLights.value=H.state.hemi,At.directionalShadowMatrix.value=H.state.directionalShadowMatrix,At.spotLightMatrix.value=H.state.spotLightMatrix,At.spotLightMap.value=H.state.spotLightMap,At.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=Gt,G.uniformsList=null,Gt}function vh(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=Xr.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function bh(S,z){const W=b.get(S);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Zp(S,z,W,G,H){z.isScene!==!0&&(z=fe),B.resetTextureUnits();const ht=z.fog,ft=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?z.environment:null,ut=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ys,yt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Tt=$.get(G.envMap||ft,yt),Bt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),At=!!W.morphAttributes.position,he=!!W.morphAttributes.normal,Re=!!W.morphAttributes.color;let Ee=Yn;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ee=E.toneMapping);const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ze=ue!==void 0?ue.length:0,Et=b.get(G),xn=T.state.lights;if(Rt===!0&&(Ft===!0||S!==D)){const Xe=S===D&&G.id===k;st.setState(G,S,Xe)}let ee=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==xn.state.version||Et.outputColorSpace!==ut||H.isBatchedMesh&&Et.batching===!1||!H.isBatchedMesh&&Et.batching===!0||H.isBatchedMesh&&Et.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Et.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Et.instancing===!1||!H.isInstancedMesh&&Et.instancing===!0||H.isSkinnedMesh&&Et.skinning===!1||!H.isSkinnedMesh&&Et.skinning===!0||H.isInstancedMesh&&Et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Et.instancingMorph===!1&&H.morphTexture!==null||Et.envMap!==Tt||G.fog===!0&&Et.fog!==ht||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==st.numPlanes||Et.numIntersection!==st.numIntersection)||Et.vertexAlphas!==Bt||Et.vertexTangents!==Gt||Et.morphTargets!==At||Et.morphNormals!==he||Et.morphColors!==Re||Et.toneMapping!==Ee||Et.morphTargetsCount!==Ze)&&(ee=!0):(ee=!0,Et.__version=G.version);let Rn=Et.currentProgram;ee===!0&&(Rn=Ko(G,z,H));let Un=!1,qi=!1,vs=!1;const pe=Rn.getUniforms(),je=Et.uniforms;if(St.useProgram(Rn.program)&&(Un=!0,qi=!0,vs=!0),G.id!==k&&(k=G.id,qi=!0),Un||D!==S){St.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pe.setValue(L,"projectionMatrix",S.projectionMatrix),pe.setValue(L,"viewMatrix",S.matrixWorldInverse);const Ei=pe.map.cameraPosition;Ei!==void 0&&Ei.setValue(L,Zt.setFromMatrixPosition(S.matrixWorld)),me.logarithmicDepthBuffer&&pe.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pe.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),D!==S&&(D=S,qi=!0,vs=!0)}if(Et.needsLights&&(xn.state.directionalShadowMap.length>0&&pe.setValue(L,"directionalShadowMap",xn.state.directionalShadowMap,B),xn.state.spotShadowMap.length>0&&pe.setValue(L,"spotShadowMap",xn.state.spotShadowMap,B),xn.state.pointShadowMap.length>0&&pe.setValue(L,"pointShadowMap",xn.state.pointShadowMap,B)),H.isSkinnedMesh){pe.setOptional(L,H,"bindMatrix"),pe.setOptional(L,H,"bindMatrixInverse");const Xe=H.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),pe.setValue(L,"boneTexture",Xe.boneTexture,B))}H.isBatchedMesh&&(pe.setOptional(L,H,"batchingTexture"),pe.setValue(L,"batchingTexture",H._matricesTexture,B),pe.setOptional(L,H,"batchingIdTexture"),pe.setValue(L,"batchingIdTexture",H._indirectTexture,B),pe.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&pe.setValue(L,"batchingColorTexture",H._colorsTexture,B));const Si=W.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&dt.update(H,W,Rn),(qi||Et.receiveShadow!==H.receiveShadow)&&(Et.receiveShadow=H.receiveShadow,pe.setValue(L,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&z.environment!==null&&(je.envMapIntensity.value=z.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=Ob()),qi&&(pe.setValue(L,"toneMappingExposure",E.toneMappingExposure),Et.needsLights&&Jp(je,vs),ht&&G.fog===!0&&wt.refreshFogUniforms(je,ht),wt.refreshMaterialUniforms(je,G,mt,et,T.state.transmissionRenderTarget[S.id]),Xr.upload(L,vh(Et),je,B)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Xr.upload(L,vh(Et),je,B),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pe.setValue(L,"center",H.center),pe.setValue(L,"modelViewMatrix",H.modelViewMatrix),pe.setValue(L,"normalMatrix",H.normalMatrix),pe.setValue(L,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xe=G.uniformsGroups;for(let Ei=0,bs=Xe.length;Ei<bs;Ei++){const yh=Xe[Ei];pt.update(yh,Rn),pt.bind(yh,Rn)}}return Rn}function Jp(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Qp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,z,W){const G=b.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),b.get(S.texture).__webglTexture=z,b.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){const W=b.get(S);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const tm=L.createFramebuffer();this.setRenderTarget=function(S,z=0,W=0){U=S,w=z,P=W;let G=null,H=!1,ht=!1;if(S){const ut=b.get(S);if(ut.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(L.FRAMEBUFFER,ut.__webglFramebuffer),N.copy(S.viewport),I.copy(S.scissor),K=S.scissorTest,St.viewport(N),St.scissor(I),St.setScissorTest(K),k=-1;return}else if(ut.__webglFramebuffer===void 0)B.setupRenderTarget(S);else if(ut.__hasExternalTextures)B.rebindTextures(S,b.get(S.texture).__webglTexture,b.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Bt=S.depthTexture;if(ut.__boundDepthTexture!==Bt){if(Bt!==null&&b.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(S)}}const yt=S.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ht=!0);const Tt=b.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Tt[z])?G=Tt[z][W]:G=Tt[z],H=!0):S.samples>0&&B.useMultisampledRTT(S)===!1?G=b.get(S).__webglMultisampledFramebuffer:Array.isArray(Tt)?G=Tt[W]:G=Tt,N.copy(S.viewport),I.copy(S.scissor),K=S.scissorTest}else N.copy(Y).multiplyScalar(mt).floor(),I.copy(it).multiplyScalar(mt).floor(),K=rt;if(W!==0&&(G=tm),St.bindFramebuffer(L.FRAMEBUFFER,G)&&St.drawBuffers(S,G),St.viewport(N),St.scissor(I),St.setScissorTest(K),H){const ut=b.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,ut.__webglTexture,W)}else if(ht){const ut=z;for(let yt=0;yt<S.textures.length;yt++){const Tt=b.get(S.textures[yt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+yt,Tt.__webglTexture,W,ut)}}else if(S!==null&&W!==0){const ut=b.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ut.__webglTexture,W)}k=-1},this.readRenderTargetPixels=function(S,z,W,G,H,ht,ft,ut=0){if(!(S&&S.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){St.bindFramebuffer(L.FRAMEBUFFER,yt);try{const Tt=S.textures[ut],Bt=Tt.format,Gt=Tt.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut),!me.textureFormatReadable(Bt)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Gt)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-G&&W>=0&&W<=S.height-H&&L.readPixels(z,W,G,H,lt.convert(Bt),lt.convert(Gt),ht)}finally{const Tt=U!==null?b.get(U).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(S,z,W,G,H,ht,ft,ut=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt)if(z>=0&&z<=S.width-G&&W>=0&&W<=S.height-H){St.bindFramebuffer(L.FRAMEBUFFER,yt);const Tt=S.textures[ut],Bt=Tt.format,Gt=Tt.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut),!me.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),L.readPixels(z,W,G,H,lt.convert(Bt),lt.convert(Gt),0);const he=U!==null?b.get(U).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,he);const Re=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Um(L,Re,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.deleteBuffer(At),L.deleteSync(Re),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,W=0){const G=Math.pow(2,-W),H=Math.floor(S.image.width*G),ht=Math.floor(S.image.height*G),ft=z!==null?z.x:0,ut=z!==null?z.y:0;B.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ft,ut,H,ht),St.unbindTexture()};const em=L.createFramebuffer(),nm=L.createFramebuffer();this.copyTextureToTexture=function(S,z,W=null,G=null,H=0,ht=0){let ft,ut,yt,Tt,Bt,Gt,At,he,Re;const Ee=S.isCompressedTexture?S.mipmaps[ht]:S.image;if(W!==null)ft=W.max.x-W.min.x,ut=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Bt=W.min.y,Gt=W.isBox3?W.min.z:0;else{const je=Math.pow(2,-H);ft=Math.floor(Ee.width*je),ut=Math.floor(Ee.height*je),S.isDataArrayTexture?yt=Ee.depth:S.isData3DTexture?yt=Math.floor(Ee.depth*je):yt=1,Tt=0,Bt=0,Gt=0}G!==null?(At=G.x,he=G.y,Re=G.z):(At=0,he=0,Re=0);const ue=lt.convert(z.format),Ze=lt.convert(z.type);let Et;z.isData3DTexture?(B.setTexture3D(z,0),Et=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(B.setTexture2DArray(z,0),Et=L.TEXTURE_2D_ARRAY):(B.setTexture2D(z,0),Et=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const xn=L.getParameter(L.UNPACK_ROW_LENGTH),ee=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Rn=L.getParameter(L.UNPACK_SKIP_PIXELS),Un=L.getParameter(L.UNPACK_SKIP_ROWS),qi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ee.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ee.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt);const vs=S.isDataArrayTexture||S.isData3DTexture,pe=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){const je=b.get(S),Si=b.get(z),Xe=b.get(je.__renderTarget),Ei=b.get(Si.__renderTarget);St.bindFramebuffer(L.READ_FRAMEBUFFER,Xe.__webglFramebuffer),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let bs=0;bs<yt;bs++)vs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(S).__webglTexture,H,Gt+bs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(z).__webglTexture,ht,Re+bs)),L.blitFramebuffer(Tt,Bt,ft,ut,At,he,ft,ut,L.DEPTH_BUFFER_BIT,L.NEAREST);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||b.has(S)){const je=b.get(S),Si=b.get(z);St.bindFramebuffer(L.READ_FRAMEBUFFER,em),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,nm);for(let Xe=0;Xe<yt;Xe++)vs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,je.__webglTexture,H,Gt+Xe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,je.__webglTexture,H),pe?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Si.__webglTexture,ht,Re+Xe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Si.__webglTexture,ht),H!==0?L.blitFramebuffer(Tt,Bt,ft,ut,At,he,ft,ut,L.COLOR_BUFFER_BIT,L.NEAREST):pe?L.copyTexSubImage3D(Et,ht,At,he,Re+Xe,Tt,Bt,ft,ut):L.copyTexSubImage2D(Et,ht,At,he,Tt,Bt,ft,ut);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pe?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Et,ht,At,he,Re,ft,ut,yt,ue,Ze,Ee.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Et,ht,At,he,Re,ft,ut,yt,ue,Ee.data):L.texSubImage3D(Et,ht,At,he,Re,ft,ut,yt,ue,Ze,Ee):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ht,At,he,ft,ut,ue,Ze,Ee.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ht,At,he,Ee.width,Ee.height,ue,Ee.data):L.texSubImage2D(L.TEXTURE_2D,ht,At,he,ft,ut,ue,Ze,Ee);L.pixelStorei(L.UNPACK_ROW_LENGTH,xn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Un),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qi),ht===0&&z.generateMipmaps&&L.generateMipmap(Et),St.unbindTexture()},this.initRenderTarget=function(S){b.get(S).__webglFramebuffer===void 0&&B.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?B.setTextureCube(S,0):S.isData3DTexture?B.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?B.setTexture2DArray(S,0):B.setTexture2D(S,0),St.unbindTexture()},this.resetState=function(){w=0,P=0,U=null,St.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const Tu={type:"change"},qc={type:"start"},Wf={type:"end"},Sr=new Vc,Au=new Di,Ub=Math.cos(70*km.DEG2RAD),Fe=new F,fn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},al=1e-6;class Bb extends Hg{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bs.ROTATE,MIDDLE:Bs.DOLLY,RIGHT:Bs.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Vi,this._lastTargetPosition=new F,this._quat=new Vi().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tu,this._sphericalDelta=new tu,this._scale=1,this._panOffset=new F,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new F,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kb.bind(this),this._onPointerDown=zb.bind(this),this._onPointerUp=Vb.bind(this),this._onContextMenu=jb.bind(this),this._onMouseWheel=Wb.bind(this),this._onKeyDown=Xb.bind(this),this._onTouchStart=Yb.bind(this),this._onTouchMove=qb.bind(this),this._onMouseDown=Hb.bind(this),this._onMouseMove=Gb.bind(this),this._interceptControlDown=$b.bind(this),this._interceptControlUp=Kb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tu),this.update(),this.state=de.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=fn:i>Math.PI&&(i-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Fe.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Sr.origin.copy(this.object.position),Sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sr.direction))<Ub?this.object.lookAt(this.target):(Au.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sr.intersectPlane(Au,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>al||8*(1-this._lastQuaternion.dot(this.object.quaternion))>al||this._lastTargetPosition.distanceToSquared(this.target)>al?(this.dispatchEvent(Tu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?fn/60*this.autoRotateSpeed*t:fn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Fe.copy(s).sub(this.target);let o=Fe.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,r=i.width,a=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function zb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function kb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Vb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wf),this.state=de.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Hb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=de.DOLLY;break;case Bs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}break;case Bs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(qc)}function Gb(n){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Wb(n){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(n.preventDefault(),this.dispatchEvent(qc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Wf))}function Xb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Yb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=de.TOUCH_ROTATE;break;case Us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case Us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=de.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(qc)}function qb(n){switch(this._trackPointer(n),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=de.NONE}}function jb(n){this.enabled!==!1&&n.preventDefault()}function $b(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Zb{position;color;name;index;constructor(t,e,i,s){this.position=t,this.color=e,this.name=i,this.index=s}}class Ii{x;y;z;constructor(t,e,i){this.x=t,this.y=e,this.z=i}add(t){return new Ii(this.x+t.x,this.y+t.y,this.z+t.z)}toVector3(){return new F(this.x,this.y,this.z)}subtract(t){return new Ii(this.x-t.x,this.y-t.y,this.z-t.z)}scale(t){return new Ii(this.x*t,this.y*t,this.z*t)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}set(t,e,i){this.x=t,this.y=e,this.z=i}cross(t){return new Ii(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)}length(){return Math.sqrt(this.x**2+this.y**2+this.z**2)}normalize(){const t=this.length();return t===0?new Ii(1,0,0):this.scale(1/t)}dict(){return{x:this.x,y:this.y,z:this.z}}array(){return[this.x,this.y,this.z]}}class Jb{panel;items=new Map;constructor(t){this.panel=document.createElement("div"),this.panel.id="vector-panel",this.panel.innerHTML=`
            <div class="panel-header">
                <span>Values</span>
                <button class="collapse-btn">−</button>
            </div>
            <div class="panel-content"></div>
        `,t.appendChild(this.panel);const e=document.createElement("style");e.textContent=`
            #vector-panel {
                position: absolute;
                top: 20px;
                right: 20px;
                background: rgba(20, 20, 40, 0.9);
                border: 1px solid rgba(100, 150, 255, 0.3);
                border-radius: 8px;
                color: #e0e0e0;
                font-family: 'JetBrains Mono', 'Fira Code', monospace;
                font-size: 12px;
                min-width: 220px;
                max-width: 340px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                overflow: hidden;
            }
            .panel-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 16px;
                background: rgba(60, 80, 140, 0.4);
                cursor: pointer;
                user-select: none;
            }
            .panel-header span {
                font-weight: 600;
                letter-spacing: 0.5px;
            }
            .collapse-btn {
                background: none;
                border: none;
                color: #a0a0c0;
                font-size: 18px;
                cursor: pointer;
                padding: 0 4px;
                line-height: 1;
            }
            .collapse-btn:hover {
                color: #fff;
            }
            .panel-content {
                max-height: 500px;
                overflow-y: auto;
            }
            .panel-content.collapsed {
                display: none;
            }
            .item-row {
                padding: 8px 16px;
                border-bottom: 1px solid rgba(100, 150, 255, 0.1);
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .item-row:last-child {
                border-bottom: none;
            }
            .item-color {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                flex-shrink: 0;
            }
            .item-label {
                font-weight: 600;
                color: #b0c0e0;
                min-width: 24px;
            }
            .item-values {
                display: flex;
                gap: 12px;
                font-family: monospace;
                font-size: 11px;
                color: #a0a0c0;
            }
            .item-x { color: #ff6b6b; }
            .item-y { color: #6bff6b; }
            .item-z { color: #6b6bff; }
            .item-mag {
                color: #f0c040;
                font-size: 10px;
            }
            ::-webkit-scrollbar {
                width: 6px;
            }
            ::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.2);
            }
            ::-webkit-scrollbar-thumb {
                background: rgba(100, 150, 255, 0.4);
                border-radius: 3px;
            }
        `,document.head.appendChild(e);const i=this.panel.querySelector(".panel-header"),s=this.panel.querySelector(".panel-content"),o=this.panel.querySelector(".collapse-btn");i.addEventListener("click",()=>{s.classList.toggle("collapsed"),o.textContent=s.classList.contains("collapsed")?"+":"−"})}updatePoint(t){const e=t.index,i=t.position,s=Object(t).name,o=t.color,r=this.panel.querySelector(".panel-content");if(!this.items.has(e)){const _=document.createElement("div");_.className="item-row",_.innerHTML=`
                <div class="item-color"></div>
                <div class="item-label"></div>
                <div class="item-values">
                    <span><span class="item-x">x:</span> <span class="val-x"></span></span>
                    <span><span class="item-y">y:</span> <span class="val-y"></span></span>
                    <span><span class="item-z">z:</span> <span class="val-z"></span></span>
                    <span class="item-mag"></span>
                </div>
            `,r.appendChild(_),this.items.set(e,_)}const a=this.items.get(e),l=a.querySelector(".item-color"),c=a.querySelector(".item-label"),h=a.querySelector(".val-x"),u=a.querySelector(".val-y"),d=a.querySelector(".val-z"),f=a.querySelector(".item-mag");l.style.backgroundColor=o,c.textContent=s,h.textContent=i.x.toFixed(3),u.textContent=i.y.toFixed(3),d.textContent=i.z.toFixed(3);const m=i.length();f.textContent=`|${s}|=${m.toFixed(3)}`}remove(t){const e=this.items.get(t);e&&(e.remove(),this.items.delete(t))}clear(){const t=this.panel.querySelector(".panel-content");t.innerHTML="",this.items.clear()}}const wu=["blue","red","green","yellow","orange","white","blue","pink","black"];class Qb{scene;camera;renderer;controls;points=[];lines=[];vectorPanel;pointMeshes=[];lineMeshes=[];guideLineMeshes=[];arrowHelpers=[];pointPositions=[];wheelMesh=null;wheelVisible=!0;LINE_DIAMETER=.04;POINT_DIAMETER=.12;constructor(t){this.scene=new tg,this.scene.background=new $t(1710638),this.camera=new wn(45,t.clientWidth/t.clientHeight,.1,1e3),this.camera.up.set(0,0,1),this.camera.position.set(-5,0,15),this.renderer=new Nb({antialias:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),t.appendChild(this.renderer.domElement),this.controls=new Bb(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=1,this.controls.maxDistance=50,this.controls.enablePan=!0,this.controls.panSpeed=.5,this.controls.rotateSpeed=.8,this.controls.target.set(0,4,4);const e=new Bg(16777215,.6);this.scene.add(e);const i=new Ug(16777215,.8);i.position.set(10,20,10),this.scene.add(i);const s=new Vg(20,20,4473924,2236962);s.rotation.x=Math.PI/2,this.scene.add(s),this.vectorPanel=new Jb(t),window.addEventListener("resize",()=>{this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(t.clientWidth,t.clientHeight)})}addPoint(t,e,i,s){const o=this.points.length,r=wu[o%wu.length],a=new Zb(new Ii(t,e,i),r,s,o);this.points.push(a);const l=new Wc(this.POINT_DIAMETER,32,32),c=new Qa({color:r}),h=new Cn(l,c);return h.position.set(t,e,i),this.scene.add(h),this.pointMeshes.push(h),this.pointPositions.push(h.position),a}addLine(t){this.lines.push(t);const e=this.points[t.startIndex].position,i=this.points[t.endIndex].position,s=new mc(new F(e.x,e.y,e.z),new F(i.x,i.y,i.z)),o=new Qr(s,1,this.LINE_DIAMETER,8,!1),r=new Qa({color:8947848,roughness:.4,metalness:.6}),a=new Cn(o,r);this.scene.add(a),this.lineMeshes.push(a)}setCameraTarget(t){this.controls.target.set(t.x,t.y,t.z)}getVectorPanel(){return this.vectorPanel}setWheelVisible(t){this.wheelVisible=t,this.wheelMesh&&(this.wheelMesh.visible=t)}isWheelVisible(){return this.wheelVisible}createWheel(t,e){this.wheelMesh&&this.scene.remove(this.wheelMesh);const i=new Xc(e,1.016,16,32);i.rotateX(Math.PI/2);const s=new Qa({color:3355443,roughness:.7,metalness:.3});this.wheelMesh=new Cn(i,s),this.wheelMesh.position.copy(t),this.wheelMesh.visible=this.wheelVisible,this.scene.add(this.wheelMesh)}updateWheelPosition(t){this.wheelMesh&&this.wheelMesh.position.copy(t)}update(){for(let t=0;t<this.points.length;t++)this.pointMeshes[t].position.copy(this.points[t].position.toVector3());for(let t=0;t<this.lines.length;t++){const e=this.lines[t],i=this.points[e.startIndex].position,s=this.points[e.endIndex].position,o=new mc(new F(i.x,i.y,i.z),new F(s.x,s.y,s.z));this.lineMeshes[t].geometry.dispose(),this.lineMeshes[t].geometry=new Qr(o,1,this.LINE_DIAMETER,8,!1)}this.controls.update(),this.renderer.render(this.scene,this.camera)}}class un{startIndex;endIndex;constructor(t,e){this.startIndex=t,this.endIndex=e}}function qo(n){return n+.5|0}const Oi=(n,t,e)=>Math.max(Math.min(n,e),t);function go(n){return Oi(qo(n*2.55),0,255)}function zi(n){return Oi(qo(n*255),0,255)}function hi(n){return Oi(qo(n/2.55)/100,0,1)}function Cu(n){return Oi(qo(n*100),0,100)}const En={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},xc=[..."0123456789ABCDEF"],ty=n=>xc[n&15],ey=n=>xc[(n&240)>>4]+xc[n&15],Er=n=>(n&240)>>4===(n&15),ny=n=>Er(n.r)&&Er(n.g)&&Er(n.b)&&Er(n.a);function iy(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&En[n[1]]*17,g:255&En[n[2]]*17,b:255&En[n[3]]*17,a:t===5?En[n[4]]*17:255}:(t===7||t===9)&&(e={r:En[n[1]]<<4|En[n[2]],g:En[n[3]]<<4|En[n[4]],b:En[n[5]]<<4|En[n[6]],a:t===9?En[n[7]]<<4|En[n[8]]:255})),e}const sy=(n,t)=>n<255?t(n):"";function oy(n){var t=ny(n)?ty:ey;return n?"#"+t(n.r)+t(n.g)+t(n.b)+sy(n.a,t):void 0}const ry=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Xf(n,t,e){const i=t*Math.min(e,1-e),s=(o,r=(o+n/30)%12)=>e-i*Math.max(Math.min(r-3,9-r,1),-1);return[s(0),s(8),s(4)]}function ay(n,t,e){const i=(s,o=(s+n/60)%6)=>e-e*t*Math.max(Math.min(o,4-o,1),0);return[i(5),i(3),i(1)]}function ly(n,t,e){const i=Xf(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function cy(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function jc(n){const e=n.r/255,i=n.g/255,s=n.b/255,o=Math.max(e,i,s),r=Math.min(e,i,s),a=(o+r)/2;let l,c,h;return o!==r&&(h=o-r,c=a>.5?h/(2-o-r):h/(o+r),l=cy(e,i,s,h,o),l=l*60+.5),[l|0,c||0,a]}function $c(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(zi)}function Kc(n,t,e){return $c(Xf,n,t,e)}function hy(n,t,e){return $c(ly,n,t,e)}function uy(n,t,e){return $c(ay,n,t,e)}function Yf(n){return(n%360+360)%360}function dy(n){const t=ry.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?go(+t[5]):zi(+t[5]));const s=Yf(+t[2]),o=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?i=hy(s,o,r):t[1]==="hsv"?i=uy(s,o,r):i=Kc(s,o,r),{r:i[0],g:i[1],b:i[2],a:e}}function fy(n,t){var e=jc(n);e[0]=Yf(e[0]+t),e=Kc(e),n.r=e[0],n.g=e[1],n.b=e[2]}function py(n){if(!n)return;const t=jc(n),e=t[0],i=Cu(t[1]),s=Cu(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${hi(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const Ru={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Pu={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function my(){const n={},t=Object.keys(Pu),e=Object.keys(Ru);let i,s,o,r,a;for(i=0;i<t.length;i++){for(r=a=t[i],s=0;s<e.length;s++)o=e[s],a=a.replace(o,Ru[o]);o=parseInt(Pu[r],16),n[a]=[o>>16&255,o>>8&255,o&255]}return n}let Tr;function gy(n){Tr||(Tr=my(),Tr.transparent=[0,0,0,0]);const t=Tr[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const _y=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function xy(n){const t=_y.exec(n);let e=255,i,s,o;if(t){if(t[7]!==i){const r=+t[7];e=t[8]?go(r):Oi(r*255,0,255)}return i=+t[1],s=+t[3],o=+t[5],i=255&(t[2]?go(i):Oi(i,0,255)),s=255&(t[4]?go(s):Oi(s,0,255)),o=255&(t[6]?go(o):Oi(o,0,255)),{r:i,g:s,b:o,a:e}}}function vy(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${hi(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const ll=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Os=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function by(n,t,e){const i=Os(hi(n.r)),s=Os(hi(n.g)),o=Os(hi(n.b));return{r:zi(ll(i+e*(Os(hi(t.r))-i))),g:zi(ll(s+e*(Os(hi(t.g))-s))),b:zi(ll(o+e*(Os(hi(t.b))-o))),a:n.a+e*(t.a-n.a)}}function Ar(n,t,e){if(n){let i=jc(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=Kc(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function qf(n,t){return n&&Object.assign(t||{},n)}function Du(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=zi(n[3]))):(t=qf(n,{r:0,g:0,b:0,a:1}),t.a=zi(t.a)),t}function yy(n){return n.charAt(0)==="r"?xy(n):dy(n)}class Uo{constructor(t){if(t instanceof Uo)return t;const e=typeof t;let i;e==="object"?i=Du(t):e==="string"&&(i=iy(t)||gy(t)||yy(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=qf(this._rgb);return t&&(t.a=hi(t.a)),t}set rgb(t){this._rgb=Du(t)}rgbString(){return this._valid?vy(this._rgb):void 0}hexString(){return this._valid?oy(this._rgb):void 0}hslString(){return this._valid?py(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let o;const r=e===o?.5:e,a=2*r-1,l=i.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;o=1-c,i.r=255&c*i.r+o*s.r+.5,i.g=255&c*i.g+o*s.g+.5,i.b=255&c*i.b+o*s.b+.5,i.a=r*i.a+(1-r)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=by(this._rgb,t._rgb,e)),this}clone(){return new Uo(this.rgb)}alpha(t){return this._rgb.a=zi(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=qo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Ar(this._rgb,2,t),this}darken(t){return Ar(this._rgb,2,-t),this}saturate(t){return Ar(this._rgb,1,t),this}desaturate(t){return Ar(this._rgb,1,-t),this}rotate(t){return fy(this._rgb,t),this}}function ri(){}const My=(()=>{let n=0;return()=>n++})();function Xt(n){return n==null}function ye(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function qt(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Ae(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function yn(n,t){return Ae(n)?n:t}function Nt(n,t){return typeof n>"u"?t:n}const Sy=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,jf=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function _e(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function le(n,t,e,i){let s,o,r;if(ye(n))for(o=n.length,s=0;s<o;s++)t.call(e,n[s],s);else if(qt(n))for(r=Object.keys(n),o=r.length,s=0;s<o;s++)t.call(e,n[r[s]],r[s])}function ta(n,t){let e,i,s,o;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],o=t[e],s.datasetIndex!==o.datasetIndex||s.index!==o.index)return!1;return!0}function ea(n){if(ye(n))return n.map(ea);if(qt(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=ea(n[e[s]]);return t}return n}function $f(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function Ey(n,t,e,i){if(!$f(n))return;const s=t[n],o=e[n];qt(s)&&qt(o)?Bo(s,o,i):t[n]=ea(o)}function Bo(n,t,e){const i=ye(t)?t:[t],s=i.length;if(!qt(n))return n;e=e||{};const o=e.merger||Ey;let r;for(let a=0;a<s;++a){if(r=i[a],!qt(r))continue;const l=Object.keys(r);for(let c=0,h=l.length;c<h;++c)o(l[c],n,r,e)}return n}function wo(n,t){return Bo(n,t,{merger:Ty})}function Ty(n,t,e){if(!$f(n))return;const i=t[n],s=e[n];qt(i)&&qt(s)?wo(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=ea(s))}const Lu={"":n=>n,x:n=>n.x,y:n=>n.y};function Ay(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function wy(n){const t=Ay(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function Hi(n,t){return(Lu[t]||(Lu[t]=wy(t)))(n)}function Zc(n){return n.charAt(0).toUpperCase()+n.slice(1)}const zo=n=>typeof n<"u",Gi=n=>typeof n=="function",Iu=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function Cy(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const ie=Math.PI,ve=2*ie,Ry=ve+ie,na=Number.POSITIVE_INFINITY,Py=ie/180,Pe=ie/2,ts=ie/4,Fu=ie*2/3,Ni=Math.log10,$n=Math.sign;function Co(n,t,e){return Math.abs(n-t)<e}function Ou(n){const t=Math.round(n);n=Co(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Ni(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function Dy(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,o)=>s-o).pop(),t}function Ly(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function js(n){return!Ly(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function Iy(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function Kf(n,t,e){let i,s,o;for(i=0,s=n.length;i<s;i++)o=n[i][e],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function Nn(n){return n*(ie/180)}function Jc(n){return n*(180/ie)}function Nu(n){if(!Ae(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function Zf(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let o=Math.atan2(i,e);return o<-.5*ie&&(o+=ve),{angle:o,distance:s}}function vc(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function Fy(n,t){return(n-t+Ry)%ve-ie}function nn(n){return(n%ve+ve)%ve}function ko(n,t,e,i){const s=nn(n),o=nn(t),r=nn(e),a=nn(o-s),l=nn(r-s),c=nn(s-o),h=nn(s-r);return s===o||s===r||i&&o===r||a>l&&c<h}function qe(n,t,e){return Math.max(t,Math.min(e,n))}function Oy(n){return qe(n,-32768,32767)}function pi(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function Qc(n,t,e){e=e||(r=>n[r]<t);let i=n.length-1,s=0,o;for(;i-s>1;)o=s+i>>1,e(o)?s=o:i=o;return{lo:s,hi:i}}const mi=(n,t,e,i)=>Qc(n,e,i?s=>{const o=n[s][t];return o<e||o===e&&n[s+1][t]===e}:s=>n[s][t]<e),Ny=(n,t,e)=>Qc(n,e,i=>n[i][t]>=e);function Uy(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const Jf=["push","pop","shift","splice","unshift"];function By(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Jf.forEach(e=>{const i="_onData"+Zc(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...o){const r=s.apply(this,o);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...o)}),r}})})}function Uu(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(Jf.forEach(o=>{delete n[o]}),delete n._chartjs)}function Qf(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const tp=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function ep(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,tp.call(window,()=>{i=!1,n.apply(t,e)}))}}function zy(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const th=n=>n==="start"?"left":n==="end"?"right":"center",en=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,ky=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function np(n,t,e){const i=t.length;let s=0,o=i;if(n._sorted){const{iScale:r,vScale:a,_parsed:l}=n,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,h=r.axis,{min:u,max:d,minDefined:f,maxDefined:m}=r.getUserBounds();if(f){if(s=Math.min(mi(l,h,u).lo,e?i:mi(t,h,r.getPixelForValue(u)).lo),c){const _=l.slice(0,s+1).reverse().findIndex(p=>!Xt(p[a.axis]));s-=Math.max(0,_)}s=qe(s,0,i-1)}if(m){let _=Math.max(mi(l,r.axis,d,!0).hi+1,e?0:mi(t,h,r.getPixelForValue(d),!0).hi+1);if(c){const p=l.slice(_-1).findIndex(g=>!Xt(g[a.axis]));_+=Math.max(0,p)}o=qe(_,s,i)-s}else o=i-s}return{start:s,count:o}}function ip(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const o=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),o}const wr=n=>n===0||n===1,Bu=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*ve/e)),zu=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*ve/e)+1,Ro={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Pe)+1,easeOutSine:n=>Math.sin(n*Pe),easeInOutSine:n=>-.5*(Math.cos(ie*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>wr(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>wr(n)?n:Bu(n,.075,.3),easeOutElastic:n=>wr(n)?n:zu(n,.075,.3),easeInOutElastic(n){return wr(n)?n:n<.5?.5*Bu(n*2,.1125,.45):.5+.5*zu(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Ro.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Ro.easeInBounce(n*2)*.5:Ro.easeOutBounce(n*2-1)*.5+.5};function eh(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function ku(n){return eh(n)?n:new Uo(n)}function cl(n){return eh(n)?n:new Uo(n).saturate(.5).darken(.1).hexString()}const Vy=["x","y","borderWidth","radius","tension"],Hy=["color","borderColor","backgroundColor"];function Gy(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:Hy},numbers:{type:"number",properties:Vy}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Wy(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Vu=new Map;function Xy(n,t){t=t||{};const e=n+JSON.stringify(t);let i=Vu.get(e);return i||(i=new Intl.NumberFormat(n,t),Vu.set(e,i)),i}function jo(n,t,e){return Xy(t,e).format(n)}const sp={values(n){return ye(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,o=n;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),o=Yy(n,e)}const r=Ni(Math.abs(o)),a=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),jo(n,i,l)},logarithmic(n,t,e){if(n===0)return"0";const i=e[t].significand||n/Math.pow(10,Math.floor(Ni(n)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?sp.numeric.call(this,n,t,e):""}};function Yy(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var fa={formatters:sp};function qy(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:fa.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ms=Object.create(null),bc=Object.create(null);function Po(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const o=e[i];n=n[o]||(n[o]=Object.create(null))}return n}function hl(n,t,e){return typeof t=="string"?Bo(Po(n,t),e):Bo(Po(n,""),t)}class jy{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>cl(s.backgroundColor),this.hoverBorderColor=(i,s)=>cl(s.borderColor),this.hoverColor=(i,s)=>cl(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return hl(this,t,e)}get(t){return Po(this,t)}describe(t,e){return hl(bc,t,e)}override(t,e){return hl(ms,t,e)}route(t,e,i,s){const o=Po(this,t),r=Po(this,i),a="_"+e;Object.defineProperties(o,{[a]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],c=r[s];return qt(l)?Object.assign({},c,l):Nt(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var Me=new jy({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Gy,Wy,qy]);function $y(n){return!n||Xt(n.size)||Xt(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function ia(n,t,e,i,s){let o=t[s];return o||(o=t[s]=n.measureText(s).width,e.push(s)),o>i&&(i=o),i}function Ky(n,t,e,i){i=i||{};let s=i.data=i.data||{},o=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(s=i.data={},o=i.garbageCollect=[],i.font=t),n.save(),n.font=t;let r=0;const a=e.length;let l,c,h,u,d;for(l=0;l<a;l++)if(u=e[l],u!=null&&!ye(u))r=ia(n,s,o,r,u);else if(ye(u))for(c=0,h=u.length;c<h;c++)d=u[c],d!=null&&!ye(d)&&(r=ia(n,s,o,r,d));n.restore();const f=o.length/2;if(f>e.length){for(l=0;l<f;l++)delete s[o[l]];o.splice(0,f)}return r}function es(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function Hu(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function yc(n,t,e,i){op(n,t,e,i,null)}function op(n,t,e,i,s){let o,r,a,l,c,h,u,d;const f=t.pointStyle,m=t.rotation,_=t.radius;let p=(m||0)*Py;if(f&&typeof f=="object"&&(o=f.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(p),n.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),n.restore();return}if(!(isNaN(_)||_<=0)){switch(n.beginPath(),f){default:s?n.ellipse(e,i,s/2,_,0,0,ve):n.arc(e,i,_,0,ve),n.closePath();break;case"triangle":h=s?s/2:_,n.moveTo(e+Math.sin(p)*h,i-Math.cos(p)*_),p+=Fu,n.lineTo(e+Math.sin(p)*h,i-Math.cos(p)*_),p+=Fu,n.lineTo(e+Math.sin(p)*h,i-Math.cos(p)*_),n.closePath();break;case"rectRounded":c=_*.516,l=_-c,r=Math.cos(p+ts)*l,u=Math.cos(p+ts)*(s?s/2-c:l),a=Math.sin(p+ts)*l,d=Math.sin(p+ts)*(s?s/2-c:l),n.arc(e-u,i-a,c,p-ie,p-Pe),n.arc(e+d,i-r,c,p-Pe,p),n.arc(e+u,i+a,c,p,p+Pe),n.arc(e-d,i+r,c,p+Pe,p+ie),n.closePath();break;case"rect":if(!m){l=Math.SQRT1_2*_,h=s?s/2:l,n.rect(e-h,i-l,2*h,2*l);break}p+=ts;case"rectRot":u=Math.cos(p)*(s?s/2:_),r=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+d,i-r),n.lineTo(e+u,i+a),n.lineTo(e-d,i+r),n.closePath();break;case"crossRot":p+=ts;case"cross":u=Math.cos(p)*(s?s/2:_),r=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+u,i+a),n.moveTo(e+d,i-r),n.lineTo(e-d,i+r);break;case"star":u=Math.cos(p)*(s?s/2:_),r=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+u,i+a),n.moveTo(e+d,i-r),n.lineTo(e-d,i+r),p+=ts,u=Math.cos(p)*(s?s/2:_),r=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+u,i+a),n.moveTo(e+d,i-r),n.lineTo(e-d,i+r);break;case"line":r=s?s/2:Math.cos(p)*_,a=Math.sin(p)*_,n.moveTo(e-r,i-a),n.lineTo(e+r,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(p)*(s?s/2:_),i+Math.sin(p)*_);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function gi(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function pa(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function ma(n){n.restore()}function Zy(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const o=(t.x+e.x)/2;n.lineTo(o,t.y),n.lineTo(o,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function Jy(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function Qy(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),Xt(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function tM(n,t,e,i,s){if(s.strikethrough||s.underline){const o=n.measureText(i),r=t-o.actualBoundingBoxLeft,a=t+o.actualBoundingBoxRight,l=e-o.actualBoundingBoxAscent,c=e+o.actualBoundingBoxDescent,h=s.strikethrough?(l+c)/2:c;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(r,h),n.lineTo(a,h),n.stroke()}}function eM(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function gs(n,t,e,i,s,o={}){const r=ye(t)?t:[t],a=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(n.save(),n.font=s.string,Qy(n,o),l=0;l<r.length;++l)c=r[l],o.backdrop&&eM(n,o.backdrop),a&&(o.strokeColor&&(n.strokeStyle=o.strokeColor),Xt(o.strokeWidth)||(n.lineWidth=o.strokeWidth),n.strokeText(c,e,i,o.maxWidth)),n.fillText(c,e,i,o.maxWidth),tM(n,e,i,c,o),i+=Number(s.lineHeight);n.restore()}function Vo(n,t){const{x:e,y:i,w:s,h:o,radius:r}=t;n.arc(e+r.topLeft,i+r.topLeft,r.topLeft,1.5*ie,ie,!0),n.lineTo(e,i+o-r.bottomLeft),n.arc(e+r.bottomLeft,i+o-r.bottomLeft,r.bottomLeft,ie,Pe,!0),n.lineTo(e+s-r.bottomRight,i+o),n.arc(e+s-r.bottomRight,i+o-r.bottomRight,r.bottomRight,Pe,0,!0),n.lineTo(e+s,i+r.topRight),n.arc(e+s-r.topRight,i+r.topRight,r.topRight,0,-Pe,!0),n.lineTo(e+r.topLeft,i)}const nM=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,iM=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function sM(n,t){const e=(""+n).match(nM);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const oM=n=>+n||0;function nh(n,t){const e={},i=qt(t),s=i?Object.keys(t):t,o=qt(n)?i?r=>Nt(n[r],n[t[r]]):r=>n[r]:()=>n;for(const r of s)e[r]=oM(o(r));return e}function rp(n){return nh(n,{top:"y",right:"x",bottom:"y",left:"x"})}function us(n){return nh(n,["topLeft","topRight","bottomLeft","bottomRight"])}function ln(n){const t=rp(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ve(n,t){n=n||{},t=t||Me.font;let e=Nt(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=Nt(n.style,t.style);i&&!(""+i).match(iM)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Nt(n.family,t.family),lineHeight:sM(Nt(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:Nt(n.weight,t.weight),string:""};return s.string=$y(s),s}function _o(n,t,e,i){let s,o,r;for(s=0,o=n.length;s<o;++s)if(r=n[s],r!==void 0&&r!==void 0)return r}function rM(n,t,e){const{min:i,max:s}=n,o=jf(t,(s-i)/2),r=(a,l)=>e&&a===0?0:a+l;return{min:r(i,-Math.abs(o)),max:r(s,o)}}function Wi(n,t){return Object.assign(Object.create(n),t)}function ih(n,t=[""],e,i,s=()=>n[0]){const o=e||n;typeof i>"u"&&(i=hp("_fallback",n));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:o,_fallback:i,_getTarget:s,override:a=>ih([a,...n],t,o,i)};return new Proxy(r,{deleteProperty(a,l){return delete a[l],delete a._keys,delete n[0][l],!0},get(a,l){return lp(a,l,()=>pM(l,t,n,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,l){return Wu(a).includes(l)},ownKeys(a){return Wu(a)},set(a,l,c){const h=a._storage||(a._storage=s());return a[l]=h[l]=c,delete a._keys,!0}})}function $s(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:ap(n,i),setContext:o=>$s(n,o,e,i),override:o=>$s(n.override(o),t,e,i)};return new Proxy(s,{deleteProperty(o,r){return delete o[r],delete n[r],!0},get(o,r,a){return lp(o,r,()=>lM(o,r,a))},getOwnPropertyDescriptor(o,r){return o._descriptors.allKeys?Reflect.has(n,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,r)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(o,r){return Reflect.has(n,r)},ownKeys(){return Reflect.ownKeys(n)},set(o,r,a){return n[r]=a,delete o[r],!0}})}function ap(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:Gi(e)?e:()=>e,isIndexable:Gi(i)?i:()=>i}}const aM=(n,t)=>n?n+Zc(t):t,sh=(n,t)=>qt(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function lp(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function lM(n,t,e){const{_proxy:i,_context:s,_subProxy:o,_descriptors:r}=n;let a=i[t];return Gi(a)&&r.isScriptable(t)&&(a=cM(t,a,n,e)),ye(a)&&a.length&&(a=hM(t,a,n,r.isIndexable)),sh(t,a)&&(a=$s(a,s,o&&o[t],r)),a}function cM(n,t,e,i){const{_proxy:s,_context:o,_subProxy:r,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let l=t(o,r||i);return a.delete(n),sh(n,l)&&(l=oh(s._scopes,s,n,l)),l}function hM(n,t,e,i){const{_proxy:s,_context:o,_subProxy:r,_descriptors:a}=e;if(typeof o.index<"u"&&i(n))return t[o.index%t.length];if(qt(t[0])){const l=t,c=s._scopes.filter(h=>h!==l);t=[];for(const h of l){const u=oh(c,s,n,h);t.push($s(u,o,r&&r[n],a))}}return t}function cp(n,t,e){return Gi(n)?n(t,e):n}const uM=(n,t)=>n===!0?t:typeof n=="string"?Hi(t,n):void 0;function dM(n,t,e,i,s){for(const o of t){const r=uM(e,o);if(r){n.add(r);const a=cp(r._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(r===!1&&typeof i<"u"&&e!==i)return null}return!1}function oh(n,t,e,i){const s=t._rootScopes,o=cp(t._fallback,e,i),r=[...n,...s],a=new Set;a.add(i);let l=Gu(a,r,e,o||e,i);return l===null||typeof o<"u"&&o!==e&&(l=Gu(a,r,o,l,i),l===null)?!1:ih(Array.from(a),[""],s,o,()=>fM(t,e,i))}function Gu(n,t,e,i,s){for(;e;)e=dM(n,t,e,i,s);return e}function fM(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return ye(s)&&qt(e)?e:s||{}}function pM(n,t,e,i){let s;for(const o of t)if(s=hp(aM(o,n),e),typeof s<"u")return sh(n,s)?oh(e,i,n,s):s}function hp(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function Wu(n){let t=n._keys;return t||(t=n._keys=mM(n._scopes)),t}function mM(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}function up(n,t,e,i){const{iScale:s}=n,{key:o="r"}=this._parsing,r=new Array(i);let a,l,c,h;for(a=0,l=i;a<l;++a)c=a+e,h=t[c],r[a]={r:s.parse(Hi(h,o),c)};return r}const gM=Number.EPSILON||1e-14,Ks=(n,t)=>t<n.length&&!n[t].skip&&n[t],dp=n=>n==="x"?"y":"x";function _M(n,t,e,i){const s=n.skip?t:n,o=t,r=e.skip?t:e,a=vc(o,s),l=vc(r,o);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const u=i*c,d=i*h;return{previous:{x:o.x-u*(r.x-s.x),y:o.y-u*(r.y-s.y)},next:{x:o.x+d*(r.x-s.x),y:o.y+d*(r.y-s.y)}}}function xM(n,t,e){const i=n.length;let s,o,r,a,l,c=Ks(n,0);for(let h=0;h<i-1;++h)if(l=c,c=Ks(n,h+1),!(!l||!c)){if(Co(t[h],0,gM)){e[h]=e[h+1]=0;continue}s=e[h]/t[h],o=e[h+1]/t[h],a=Math.pow(s,2)+Math.pow(o,2),!(a<=9)&&(r=3/Math.sqrt(a),e[h]=s*r*t[h],e[h+1]=o*r*t[h])}}function vM(n,t,e="x"){const i=dp(e),s=n.length;let o,r,a,l=Ks(n,0);for(let c=0;c<s;++c){if(r=a,a=l,l=Ks(n,c+1),!a)continue;const h=a[e],u=a[i];r&&(o=(h-r[e])/3,a[`cp1${e}`]=h-o,a[`cp1${i}`]=u-o*t[c]),l&&(o=(l[e]-h)/3,a[`cp2${e}`]=h+o,a[`cp2${i}`]=u+o*t[c])}}function bM(n,t="x"){const e=dp(t),i=n.length,s=Array(i).fill(0),o=Array(i);let r,a,l,c=Ks(n,0);for(r=0;r<i;++r)if(a=l,l=c,c=Ks(n,r+1),!!l){if(c){const h=c[t]-l[t];s[r]=h!==0?(c[e]-l[e])/h:0}o[r]=a?c?$n(s[r-1])!==$n(s[r])?0:(s[r-1]+s[r])/2:s[r-1]:s[r]}xM(n,s,o),vM(n,o,t)}function Cr(n,t,e){return Math.max(Math.min(n,e),t)}function yM(n,t){let e,i,s,o,r,a=gi(n[0],t);for(e=0,i=n.length;e<i;++e)r=o,o=a,a=e<i-1&&gi(n[e+1],t),o&&(s=n[e],r&&(s.cp1x=Cr(s.cp1x,t.left,t.right),s.cp1y=Cr(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=Cr(s.cp2x,t.left,t.right),s.cp2y=Cr(s.cp2y,t.top,t.bottom)))}function MM(n,t,e,i,s){let o,r,a,l;if(t.spanGaps&&(n=n.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")bM(n,s);else{let c=i?n[n.length-1]:n[0];for(o=0,r=n.length;o<r;++o)a=n[o],l=_M(c,a,n[Math.min(o+1,r-(i?0:1))%r],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&yM(n,e)}function rh(){return typeof window<"u"&&typeof document<"u"}function ah(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function sa(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const ga=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function SM(n,t){return ga(n).getPropertyValue(t)}const EM=["top","right","bottom","left"];function ds(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const o=EM[s];i[o]=parseFloat(n[t+"-"+o+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const TM=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function AM(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:o}=i;let r=!1,a,l;if(TM(s,o,n.target))a=s,l=o;else{const c=t.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,r=!0}return{x:a,y:l,box:r}}function ss(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=ga(e),o=s.boxSizing==="border-box",r=ds(s,"padding"),a=ds(s,"border","width"),{x:l,y:c,box:h}=AM(n,e),u=r.left+(h&&a.left),d=r.top+(h&&a.top);let{width:f,height:m}=t;return o&&(f-=r.width+a.width,m-=r.height+a.height),{x:Math.round((l-u)/f*e.width/i),y:Math.round((c-d)/m*e.height/i)}}function wM(n,t,e){let i,s;if(t===void 0||e===void 0){const o=n&&ah(n);if(!o)t=n.clientWidth,e=n.clientHeight;else{const r=o.getBoundingClientRect(),a=ga(o),l=ds(a,"border","width"),c=ds(a,"padding");t=r.width-c.width-l.width,e=r.height-c.height-l.height,i=sa(a.maxWidth,o,"clientWidth"),s=sa(a.maxHeight,o,"clientHeight")}}return{width:t,height:e,maxWidth:i||na,maxHeight:s||na}}const Ui=n=>Math.round(n*10)/10;function CM(n,t,e,i){const s=ga(n),o=ds(s,"margin"),r=sa(s.maxWidth,n,"clientWidth")||na,a=sa(s.maxHeight,n,"clientHeight")||na,l=wM(n,t,e);let{width:c,height:h}=l;if(s.boxSizing==="content-box"){const d=ds(s,"border","width"),f=ds(s,"padding");c-=f.width+d.width,h-=f.height+d.height}return c=Math.max(0,c-o.width),h=Math.max(0,i?c/i:h-o.height),c=Ui(Math.min(c,r,l.maxWidth)),h=Ui(Math.min(h,a,l.maxHeight)),c&&!h&&(h=Ui(c/2)),(t!==void 0||e!==void 0)&&i&&l.height&&h>l.height&&(h=l.height,c=Ui(Math.floor(h*i))),{width:c,height:h}}function Xu(n,t,e){const i=t||1,s=Ui(n.height*i),o=Ui(n.width*i);n.height=Ui(n.height),n.width=Ui(n.width);const r=n.canvas;return r.style&&(e||!r.style.height&&!r.style.width)&&(r.style.height=`${n.height}px`,r.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||r.height!==s||r.width!==o?(n.currentDevicePixelRatio=i,r.height=s,r.width=o,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const RM=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};rh()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function Yu(n,t){const e=SM(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function os(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function PM(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function DM(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},o={x:t.cp1x,y:t.cp1y},r=os(n,s,e),a=os(s,o,e),l=os(o,t,e),c=os(r,a,e),h=os(a,l,e);return os(c,h,e)}const LM=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},IM=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function Vs(n,t,e){return n?LM(t,e):IM()}function fp(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function pp(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function mp(n){return n==="angle"?{between:ko,compare:Fy,normalize:nn}:{between:pi,compare:(t,e)=>t-e,normalize:t=>t}}function qu({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function FM(n,t,e){const{property:i,start:s,end:o}=e,{between:r,normalize:a}=mp(i),l=t.length;let{start:c,end:h,loop:u}=n,d,f;if(u){for(c+=l,h+=l,d=0,f=l;d<f&&r(a(t[c%l][i]),s,o);++d)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:u,style:n.style}}function gp(n,t,e){if(!e)return[n];const{property:i,start:s,end:o}=e,r=t.length,{compare:a,between:l,normalize:c}=mp(i),{start:h,end:u,loop:d,style:f}=FM(n,t,e),m=[];let _=!1,p=null,g,x,y;const M=()=>l(s,y,g)&&a(s,y)!==0,T=()=>a(o,g)===0||l(o,y,g),A=()=>_||M(),C=()=>!_||T();for(let v=h,E=h;v<=u;++v)x=t[v%r],!x.skip&&(g=c(x[i]),g!==y&&(_=l(g,s,o),p===null&&A()&&(p=a(g,s)===0?v:E),p!==null&&C()&&(m.push(qu({start:p,end:v,loop:d,count:r,style:f})),p=null),E=v,y=g));return p!==null&&m.push(qu({start:p,end:u,loop:d,count:r,style:f})),m}function _p(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const o=gp(i[s],n.points,t);o.length&&e.push(...o)}return e}function OM(n,t,e,i){let s=0,o=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(o+=s);o>s&&n[o%t].skip;)o--;return o%=t,{start:s,end:o}}function NM(n,t,e,i){const s=n.length,o=[];let r=t,a=n[t],l;for(l=t+1;l<=e;++l){const c=n[l%s];c.skip||c.stop?a.skip||(i=!1,o.push({start:t%s,end:(l-1)%s,loop:i}),t=r=c.stop?l:null):(r=l,a.skip&&(t=l)),a=c}return r!==null&&o.push({start:t%s,end:r%s,loop:i}),o}function UM(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const o=!!n._loop,{start:r,end:a}=OM(e,s,o,i);if(i===!0)return ju(n,[{start:r,end:a,loop:o}],e,t);const l=a<r?a+s:a,c=!!n._fullLoop&&r===0&&a===s-1;return ju(n,NM(e,r,l,c),e,t)}function ju(n,t,e,i){return!i||!i.setContext||!e?t:BM(n,t,e,i)}function BM(n,t,e,i){const s=n._chart.getContext(),o=$u(n.options),{_datasetIndex:r,options:{spanGaps:a}}=n,l=e.length,c=[];let h=o,u=t[0].start,d=u;function f(m,_,p,g){const x=a?-1:1;if(m!==_){for(m+=l;e[m%l].skip;)m-=x;for(;e[_%l].skip;)_+=x;m%l!==_%l&&(c.push({start:m%l,end:_%l,loop:p,style:g}),h=g,u=_%l)}}for(const m of t){u=a?u:m.start;let _=e[u%l],p;for(d=u+1;d<=m.end;d++){const g=e[d%l];p=$u(i.setContext(Wi(s,{type:"segment",p0:_,p1:g,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:r}))),zM(p,h)&&f(u,d-1,m.loop,h),_=g,h=p}u<d-1&&f(u,d-1,m.loop,h)}return c}function $u(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function zM(n,t){if(!t)return!1;const e=[],i=function(s,o){return eh(o)?(e.includes(o)||e.push(o),e.indexOf(o)):o};return JSON.stringify(n,i)!==JSON.stringify(t,i)}function Rr(n,t,e){return n.options.clip?n[e]:t[e]}function kM(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:Rr(e,t,"left"),right:Rr(e,t,"right"),top:Rr(i,t,"top"),bottom:Rr(i,t,"bottom")}:t}function xp(n,t){const e=t._clip;if(e.disabled)return!1;const i=kM(t,n.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:i.bottom+(e.bottom===!0?0:e.bottom)}}class VM{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const o=e.listeners[s],r=e.duration;o.forEach(a=>a({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(i-e.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=tp.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const o=i.items;let r=o.length-1,a=!1,l;for(;r>=0;--r)l=o[r],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(t),a=!0):(o[r]=o[o.length-1],o.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),o.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=o.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var ai=new VM;const Ku="transparent",HM={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=ku(n||Ku),s=i.valid&&ku(t||Ku);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class GM{constructor(t,e,i,s){const o=e[i];s=_o([t.to,s,o,t.from]);const r=_o([t.from,o,s]);this._active=!0,this._fn=t.fn||HM[t.type||typeof r],this._easing=Ro[t.easing]||Ro.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=r,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],o=i-this._start,r=this._duration-o;this._start=i,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=_o([t.to,e,s,t.from]),this._from=_o([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,o=this._from,r=this._loop,a=this._to;let l;if(this._active=o!==a&&(r||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=o;return}l=e/i%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(o,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class vp{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!qt(t))return;const e=Object.keys(Me.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const o=t[s];if(!qt(o))return;const r={};for(const a of e)r[a]=o[a];(ye(o.properties)&&o.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,r)})})}_animateOptions(t,e){const i=e.options,s=XM(t,i);if(!s)return[];const o=this._createAnimations(s,i);return i.$shared&&WM(t.options.$animations,i).then(()=>{t.options=i},()=>{}),o}_createAnimations(t,e){const i=this._properties,s=[],o=t.$animations||(t.$animations={}),r=Object.keys(e),a=Date.now();let l;for(l=r.length-1;l>=0;--l){const c=r[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(t,e));continue}const h=e[c];let u=o[c];const d=i.get(c);if(u)if(d&&u.active()){u.update(d,h,a);continue}else u.cancel();if(!d||!d.duration){t[c]=h;continue}o[c]=u=new GM(d,t,c,h),s.push(u)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return ai.add(this._chart,i),!0}}function WM(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const o=n[i[s]];o&&o.active()&&e.push(o.wait())}return Promise.all(e)}function XM(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Zu(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,o=e.max===void 0?t:0;return{start:i?o:s,end:i?s:o}}function YM(n,t,e){if(e===!1)return!1;const i=Zu(n,e),s=Zu(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function qM(n){let t,e,i,s;return qt(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function bp(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,o;for(s=0,o=i.length;s<o;++s)e.push(i[s].index);return e}function Ju(n,t,e,i={}){const s=n.keys,o=i.mode==="single";let r,a,l,c;if(t===null)return;let h=!1;for(r=0,a=s.length;r<a;++r){if(l=+s[r],l===e){if(h=!0,i.all)continue;break}c=n.values[l],Ae(c)&&(o||t===0||$n(t)===$n(c))&&(t+=c)}return!h&&!i.all?0:t}function jM(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",o=i.axis==="x"?"x":"y",r=Object.keys(n),a=new Array(r.length);let l,c,h;for(l=0,c=r.length;l<c;++l)h=r[l],a[l]={[s]:h,[o]:n[h]};return a}function ul(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function $M(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function KM(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function ZM(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function Qu(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const o=n[s.index];if(e&&o>0||!e&&o<0)return s.index}return null}function td(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:o,vScale:r,index:a}=i,l=o.axis,c=r.axis,h=$M(o,r,i),u=t.length;let d;for(let f=0;f<u;++f){const m=t[f],{[l]:_,[c]:p}=m,g=m._stacks||(m._stacks={});d=g[c]=ZM(s,h,_),d[a]=p,d._top=Qu(d,r,!0,i.type),d._bottom=Qu(d,r,!1,i.type);const x=d._visualValues||(d._visualValues={});x[a]=p}}function dl(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function JM(n,t){return Wi(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function QM(n,t,e){return Wi(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function ao(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const o=s._stacks;if(!o||o[i]===void 0||o[i][e]===void 0)return;delete o[i][e],o[i]._visualValues!==void 0&&o[i]._visualValues[e]!==void 0&&delete o[i]._visualValues[e]}}}const fl=n=>n==="reset"||n==="none",ed=(n,t)=>t?n:Object.assign({},n),tS=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:bp(e,!0),values:null};class Xi{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ul(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&ao(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(u,d,f,m)=>u==="x"?d:u==="r"?m:f,o=e.xAxisID=Nt(i.xAxisID,dl(t,"x")),r=e.yAxisID=Nt(i.yAxisID,dl(t,"y")),a=e.rAxisID=Nt(i.rAxisID,dl(t,"r")),l=e.indexAxis,c=e.iAxisID=s(l,o,r,a),h=e.vAxisID=s(l,r,o,a);e.xScale=this.getScaleForId(o),e.yScale=this.getScaleForId(r),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Uu(this._data,this),t._stacked&&ao(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(qt(e)){const s=this._cachedMeta;this._data=jM(e,s)}else if(i!==e){if(i){Uu(i,this);const s=this._cachedMeta;ao(s),s._parsed=[]}e&&Object.isExtensible(e)&&By(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const o=e._stacked;e._stacked=ul(e.vScale,e),e.stack!==i.stack&&(s=!0,ao(e),e.stack=i.stack),this._resyncElements(t),(s||o!==e._stacked)&&(td(this,e._parsed),e._stacked=ul(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:o,_stacked:r}=i,a=o.axis;let l=t===0&&e===s.length?!0:i._sorted,c=t>0&&i._parsed[t-1],h,u,d;if(this._parsing===!1)i._parsed=s,i._sorted=!0,d=s;else{ye(s[t])?d=this.parseArrayData(i,s,t,e):qt(s[t])?d=this.parseObjectData(i,s,t,e):d=this.parsePrimitiveData(i,s,t,e);const f=()=>u[a]===null||c&&u[a]<c[a];for(h=0;h<e;++h)i._parsed[h+t]=u=d[h],l&&(f()&&(l=!1),c=u);i._sorted=l}r&&td(this,d)}parsePrimitiveData(t,e,i,s){const{iScale:o,vScale:r}=t,a=o.axis,l=r.axis,c=o.getLabels(),h=o===r,u=new Array(s);let d,f,m;for(d=0,f=s;d<f;++d)m=d+i,u[d]={[a]:h||o.parse(c[m],m),[l]:r.parse(e[m],m)};return u}parseArrayData(t,e,i,s){const{xScale:o,yScale:r}=t,a=new Array(s);let l,c,h,u;for(l=0,c=s;l<c;++l)h=l+i,u=e[h],a[l]={x:o.parse(u[0],h),y:r.parse(u[1],h)};return a}parseObjectData(t,e,i,s){const{xScale:o,yScale:r}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let h,u,d,f;for(h=0,u=s;h<u;++h)d=h+i,f=e[d],c[h]={x:o.parse(Hi(f,a),d),y:r.parse(Hi(f,l),d)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,o=this._cachedMeta,r=e[t.axis],a={keys:bp(s,!0),values:e._stacks[t.axis]._visualValues};return Ju(a,r,o.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const o=i[e.axis];let r=o===null?NaN:o;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,r=Ju(s,o,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,o=i._sorted&&t===i.iScale,r=s.length,a=this._getOtherScale(t),l=tS(e,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:u}=KM(a);let d,f;function m(){f=s[d];const _=f[a.axis];return!Ae(f[t.axis])||h>_||u<_}for(d=0;d<r&&!(!m()&&(this.updateRangeFromParsed(c,t,f,l),o));++d);if(o){for(d=r-1;d>=0;--d)if(!m()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,o,r;for(s=0,o=e.length;s<o;++s)r=e[s][t.axis],Ae(r)&&i.push(r);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,o=this.getParsed(t);return{label:i?""+i.getLabelForValue(o[i.axis]):"",value:s?""+s.getLabelForValue(o[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=qM(Nt(this.options.clip,YM(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],o=e.chartArea,r=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let h;for(i.dataset&&i.dataset.draw(t,o,a,l),h=a;h<a+l;++h){const u=s[h];u.hidden||(u.active&&c?r.push(u):u.draw(t,o))}for(h=0;h<r.length;++h)r[h].draw(t,o)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];o=r.$context||(r.$context=QM(this.getContext(),t,r)),o.parsed=this.getParsed(t),o.raw=s.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=JM(this.chart.getContext(),this.index)),o.dataset=s,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=i,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",o=this._cachedDataOpts,r=t+"-"+e,a=o[r],l=this.enableOptionSharing&&zo(i);if(a)return ed(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),u=s?[`${t}Hover`,"hover",t,""]:[t,""],d=c.getOptionScopes(this.getDataset(),h),f=Object.keys(Me.elements[t]),m=()=>this.getContext(i,s,e),_=c.resolveNamedOptions(d,f,m,u);return _.$shared&&(_.$shared=l,o[r]=Object.freeze(ed(_,l))),_}_resolveAnimations(t,e,i){const s=this.chart,o=this._cachedDataOpts,r=`animation-${e}`,a=o[r];if(a)return a;let l;if(s.options.animation!==!1){const h=this.chart.config,u=h.datasetAnimationScopeKeys(this._type,e),d=h.getOptionScopes(this.getDataset(),u);l=h.createResolver(d,this.getContext(t,i,e))}const c=new vp(s,l&&l.animations);return l&&l._cacheable&&(o[r]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||fl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,o=this.getSharedOptions(i),r=this.includeOptions(e,o)||o!==s;return this.updateSharedOptions(o,e,i),{sharedOptions:o,includeOptions:r}}updateElement(t,e,i,s){fl(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!fl(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const o=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=i.length,o=e.length,r=Math.min(o,s);r&&this.parse(0,r),o>s?this._insertElements(s,o-s,t):o<s&&this._removeElements(o,s-o)}_insertElements(t,e,i=!0){const s=this._cachedMeta,o=s.data,r=t+e;let a;const l=c=>{for(c.length+=e,a=c.length-1;a>=r;a--)c[a]=c[a-e]};for(l(o),a=t;a<r;++a)o[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(t,e),i&&this.updateElements(o,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&ao(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function eS(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let i=[];for(let s=0,o=e.length;s<o;s++)i=i.concat(e[s].controller.getAllParsedValues(n));n._cache.$bar=Qf(i.sort((s,o)=>s-o))}return n._cache.$bar}function nS(n){const t=n.iScale,e=eS(t,n.type);let i=t._length,s,o,r,a;const l=()=>{r===32767||r===-32768||(zo(a)&&(i=Math.min(i,Math.abs(r-a)||i)),a=r)};for(s=0,o=e.length;s<o;++s)r=t.getPixelForValue(e[s]),l();for(a=void 0,s=0,o=t.ticks.length;s<o;++s)r=t.getPixelForTick(s),l();return i}function iS(n,t,e,i){const s=e.barThickness;let o,r;return Xt(s)?(o=t.min*e.categoryPercentage,r=e.barPercentage):(o=s*i,r=1),{chunk:o/i,ratio:r,start:t.pixels[n]-o/2}}function sS(n,t,e,i){const s=t.pixels,o=s[n];let r=n>0?s[n-1]:null,a=n<s.length-1?s[n+1]:null;const l=e.categoryPercentage;r===null&&(r=o-(a===null?t.end-t.start:a-o)),a===null&&(a=o+o-r);const c=o-(o-Math.min(r,a))/2*l;return{chunk:Math.abs(a-r)/2*l/i,ratio:e.barPercentage,start:c}}function oS(n,t,e,i){const s=e.parse(n[0],i),o=e.parse(n[1],i),r=Math.min(s,o),a=Math.max(s,o);let l=r,c=a;Math.abs(r)>Math.abs(a)&&(l=a,c=r),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:s,end:o,min:r,max:a}}function yp(n,t,e,i){return ye(n)?oS(n,t,e,i):t[e.axis]=e.parse(n,i),t}function nd(n,t,e,i){const s=n.iScale,o=n.vScale,r=s.getLabels(),a=s===o,l=[];let c,h,u,d;for(c=e,h=e+i;c<h;++c)d=t[c],u={},u[s.axis]=a||s.parse(r[c],c),l.push(yp(d,u,o,c));return l}function pl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function rS(n,t,e){return n!==0?$n(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function aS(n){let t,e,i,s,o;return n.horizontal?(t=n.base>n.x,e="left",i="right"):(t=n.base<n.y,e="bottom",i="top"),t?(s="end",o="start"):(s="start",o="end"),{start:e,end:i,reverse:t,top:s,bottom:o}}function lS(n,t,e,i){let s=t.borderSkipped;const o={};if(!s){n.borderSkipped=o;return}if(s===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:a,reverse:l,top:c,bottom:h}=aS(n);s==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===i?s=c:(e._bottom||0)===i?s=h:(o[id(h,r,a,l)]=!0,s=c)),o[id(s,r,a,l)]=!0,n.borderSkipped=o}function id(n,t,e,i){return i?(n=cS(n,t,e),n=sd(n,e,t)):n=sd(n,t,e),n}function cS(n,t,e){return n===t?e:n===e?t:n}function sd(n,t,e){return n==="start"?t:n==="end"?e:n}function hS(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class uS extends Xi{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,e,i,s){return nd(t,e,i,s)}parseArrayData(t,e,i,s){return nd(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:o,vScale:r}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=o.axis==="x"?a:l,h=r.axis==="x"?a:l,u=[];let d,f,m,_;for(d=i,f=i+s;d<f;++d)_=e[d],m={},m[o.axis]=o.parse(Hi(_,c),d),u.push(yp(Hi(_,h),m,r,d));return u}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const o=i._custom;o&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,o=this.getParsed(t),r=o._custom,a=pl(r)?"["+r.start+", "+r.end+"]":""+s.getLabelForValue(o[s.axis]);return{label:""+i.getLabelForValue(o[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const o=s==="reset",{index:r,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),h=this._getRuler(),{sharedOptions:u,includeOptions:d}=this._getSharedOptions(e,s);for(let f=e;f<e+i;f++){const m=this.getParsed(f),_=o||Xt(m[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),p=this._calculateBarIndexPixels(f,h),g=(m._stacks||{})[a.axis],x={horizontal:c,base:_.base,enableBorderRadius:!g||pl(m._custom)||r===g._top||r===g._bottom,x:c?_.head:p.center,y:c?p.center:_.head,height:c?p.size:Math.abs(_.size),width:c?Math.abs(_.size):p.size};d&&(x.options=u||this.resolveDataElementOptions(f,t[f].active?"active":s));const y=x.options||t[f].options;lS(x,y,g,r),hS(x,y,h.ratio),this.updateElement(t[f],f,x,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),o=i.options.stacked,r=[],a=this._cachedMeta.controller.getParsed(e),l=a&&a[i.axis],c=h=>{const u=h._parsed.find(f=>f[i.axis]===l),d=u&&u[h.vScale.axis];if(Xt(d)||isNaN(d))return!0};for(const h of s)if(!(e!==void 0&&c(h))&&((o===!1||r.indexOf(h.stack)===-1||o===void 0&&h.stack===void 0)&&r.push(h.stack),h.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[Nt(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),o=e!==void 0?s.indexOf(e):-1;return o===-1?s.length-1:o}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let o,r;for(o=0,r=e.data.length;o<r;++o)s.push(i.getPixelForValue(this.getParsed(o)[i.axis],o));const a=t.barThickness;return{min:a||nS(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:o,minBarLength:r}}=this,a=o||0,l=this.getParsed(t),c=l._custom,h=pl(c);let u=l[e.axis],d=0,f=i?this.applyStack(e,l,i):u,m,_;f!==u&&(d=f-u,f=u),h&&(u=c.barStart,f=c.barEnd-c.barStart,u!==0&&$n(u)!==$n(c.barEnd)&&(d=0),d+=u);const p=!Xt(o)&&!h?o:d;let g=e.getPixelForValue(p);if(this.chart.getDataVisibility(t)?m=e.getPixelForValue(d+f):m=g,_=m-g,Math.abs(_)<r){_=rS(_,e,a)*r,u===a&&(g-=_/2);const x=e.getPixelForDecimal(0),y=e.getPixelForDecimal(1),M=Math.min(x,y),T=Math.max(x,y);g=Math.max(Math.min(g,T),M),m=g+_,i&&!h&&(l._stacks[e.axis]._visualValues[s]=e.getValueForPixel(m)-e.getValueForPixel(g))}if(g===e.getPixelForValue(a)){const x=$n(_)*e.getLineWidthForValue(a)/2;g+=x,_-=x}return{size:_,base:g,head:m,center:m+_/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,o=s.skipNull,r=Nt(s.maxBarThickness,1/0);let a,l;const c=this._getAxisCount();if(e.grouped){const h=o?this._getStackCount(t):e.stackCount,u=s.barThickness==="flex"?sS(t,e,s,h*c):iS(t,e,s,h*c),d=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(Nt(d,this.getFirstScaleIdForIndexAxis())),m=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0)+f;a=u.start+u.chunk*m+u.chunk/2,l=Math.min(r,u.chunk*u.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),l=Math.min(r,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let o=0;for(;o<s;++o)this.getParsed(o)[e.axis]!==null&&!i[o].hidden&&i[o].draw(this._ctx)}}class dS extends Xi{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const o=super.parsePrimitiveData(t,e,i,s);for(let r=0;r<o.length;r++)o[r]._custom=this.resolveDataElementOptions(r+i).radius;return o}parseArrayData(t,e,i,s){const o=super.parseArrayData(t,e,i,s);for(let r=0;r<o.length;r++){const a=e[i+r];o[r]._custom=Nt(a[2],this.resolveDataElementOptions(r+i).radius)}return o}parseObjectData(t,e,i,s){const o=super.parseObjectData(t,e,i,s);for(let r=0;r<o.length;r++){const a=e[i+r];o[r]._custom=Nt(a&&a.r&&+a.r,this.resolveDataElementOptions(r+i).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:o}=e,r=this.getParsed(t),a=s.getLabelForValue(r.x),l=o.getLabelForValue(r.y),c=r._custom;return{label:i[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const o=s==="reset",{iScale:r,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,s),h=r.axis,u=a.axis;for(let d=e;d<e+i;d++){const f=t[d],m=!o&&this.getParsed(d),_={},p=_[h]=o?r.getPixelForDecimal(.5):r.getPixelForValue(m[h]),g=_[u]=o?a.getBasePixel():a.getPixelForValue(m[u]);_.skip=isNaN(p)||isNaN(g),c&&(_.options=l||this.resolveDataElementOptions(d,f.active?"active":s),o&&(_.options.radius=0)),this.updateElement(f,d,_,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const o=s.radius;return e!=="active"&&(s.radius=0),s.radius+=Nt(i&&i._custom,o),s}}function fS(n,t,e){let i=1,s=1,o=0,r=0;if(t<ve){const a=n,l=a+t,c=Math.cos(a),h=Math.sin(a),u=Math.cos(l),d=Math.sin(l),f=(y,M,T)=>ko(y,a,l,!0)?1:Math.max(M,M*e,T,T*e),m=(y,M,T)=>ko(y,a,l,!0)?-1:Math.min(M,M*e,T,T*e),_=f(0,c,u),p=f(Pe,h,d),g=m(ie,c,u),x=m(ie+Pe,h,d);i=(_-g)/2,s=(p-x)/2,o=-(_+g)/2,r=-(p+x)/2}return{ratioX:i,ratioY:s,offsetX:o,offsetY:r}}class lh extends Xi{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:o,useBorderRadius:r,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,c)=>{const u=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:u.backgroundColor,fontColor:o,hidden:!t.getDataVisibility(c),lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:u.borderWidth,strokeStyle:u.borderColor,textAlign:s,pointStyle:i,borderRadius:r&&(a||u.borderRadius),index:c}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}};constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let o=l=>+i[l];if(qt(i[t])){const{key:l="value"}=this._parsing;o=c=>+Hi(i[c],l)}let r,a;for(r=t,a=t+e;r<a;++r)s._parsed[r]=o(r)}}_getRotation(){return Nn(this.options.rotation-90)}_getCircumference(){return Nn(this.options.circumference)}_getRotationExtents(){let t=ve,e=-ve;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,o=s._getRotation(),r=s._getCircumference();t=Math.min(t,o),e=Math.max(e,o+r)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,o=s.data,r=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-r)/2,0),l=Math.min(Sy(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:h,rotation:u}=this._getRotationExtents(),{ratioX:d,ratioY:f,offsetX:m,offsetY:_}=fS(u,h,l),p=(i.width-r)/d,g=(i.height-r)/f,x=Math.max(Math.min(p,g)/2,0),y=jf(this.options.radius,x),M=Math.max(y*l,0),T=(y-M)/this._getVisibleDatasetWeightTotal();this.offsetX=m*y,this.offsetY=_*y,s.total=this.calculateTotal(),this.outerRadius=y-T*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-T*c,0),this.updateElements(o,0,o.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,o=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*o/ve)}updateElements(t,e,i,s){const o=s==="reset",r=this.chart,a=r.chartArea,c=r.options.animation,h=(a.left+a.right)/2,u=(a.top+a.bottom)/2,d=o&&c.animateScale,f=d?0:this.innerRadius,m=d?0:this.outerRadius,{sharedOptions:_,includeOptions:p}=this._getSharedOptions(e,s);let g=this._getRotation(),x;for(x=0;x<e;++x)g+=this._circumference(x,o);for(x=e;x<e+i;++x){const y=this._circumference(x,o),M=t[x],T={x:h+this.offsetX,y:u+this.offsetY,startAngle:g,endAngle:g+y,circumference:y,outerRadius:m,innerRadius:f};p&&(T.options=_||this.resolveDataElementOptions(x,M.active?"active":s)),g+=y,this.updateElement(M,x,T,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,s;for(s=0;s<e.length;s++){const o=t._parsed[s];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(i+=Math.abs(o))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?ve*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],o=jo(e._parsed[t],i.options.locale);return{label:s[t]||"",value:o}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,o,r,a,l;if(!t){for(s=0,o=i.data.datasets.length;s<o;++s)if(i.isDatasetVisible(s)){r=i.getDatasetMeta(s),t=r.data,a=r.controller;break}}if(!t)return 0;for(s=0,o=t.length;s<o;++s)l=a.resolveDataElementOptions(s),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const o=this.resolveDataElementOptions(i);e=Math.max(e,o.offset||0,o.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(Nt(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class pS extends Xi{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:o}=e,r=this.chart._animationsDisabled;let{start:a,count:l}=np(e,s,r);this._drawStart=a,this._drawCount=l,ip(e)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!o._decimated,i.points=s;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!r,options:c},t),this.updateElements(s,a,l,t)}updateElements(t,e,i,s){const o=s==="reset",{iScale:r,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:u}=this._getSharedOptions(e,s),d=r.axis,f=a.axis,{spanGaps:m,segment:_}=this.options,p=js(m)?m:Number.POSITIVE_INFINITY,g=this.chart._animationsDisabled||o||s==="none",x=e+i,y=t.length;let M=e>0&&this.getParsed(e-1);for(let T=0;T<y;++T){const A=t[T],C=g?A:{};if(T<e||T>=x){C.skip=!0;continue}const v=this.getParsed(T),E=Xt(v[f]),V=C[d]=r.getPixelForValue(v[d],T),w=C[f]=o||E?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,v,l):v[f],T);C.skip=isNaN(V)||isNaN(w)||E,C.stop=T>0&&Math.abs(v[d]-M[d])>p,_&&(C.parsed=v,C.raw=c.data[T]),u&&(C.options=h||this.resolveDataElementOptions(T,A.active?"active":s)),g||this.updateElement(A,T,C,s),M=v}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const o=s[0].size(this.resolveDataElementOptions(0)),r=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,o,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}class Mp extends Xi{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map((o,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:s,lineWidth:l.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],o=jo(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:o}}parseObjectData(t,e,i,s){return up.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,s)=>{const o=this.getParsed(s).r;!isNaN(o)&&this.chart.getDataVisibility(s)&&(o<e.min&&(e.min=o),o>e.max&&(e.max=o))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),o=Math.max(s/2,0),r=Math.max(i.cutoutPercentage?o/100*i.cutoutPercentage:1,0),a=(o-r)/t.getVisibleDatasetCount();this.outerRadius=o-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,s){const o=s==="reset",r=this.chart,l=r.options.animation,c=this._cachedMeta.rScale,h=c.xCenter,u=c.yCenter,d=c.getIndexAngle(0)-.5*ie;let f=d,m;const _=360/this.countVisibleElements();for(m=0;m<e;++m)f+=this._computeAngle(m,s,_);for(m=e;m<e+i;m++){const p=t[m];let g=f,x=f+this._computeAngle(m,s,_),y=r.getDataVisibility(m)?c.getDistanceFromCenterForValue(this.getParsed(m).r):0;f=x,o&&(l.animateScale&&(y=0),l.animateRotate&&(g=x=d));const M={x:h,y:u,innerRadius:0,outerRadius:y,startAngle:g,endAngle:x,options:this.resolveDataElementOptions(m,p.active?"active":s)};this.updateElement(p,m,M,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((i,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?Nn(this.resolveDataElementOptions(t,e).angle||i):0}}class mS extends lh{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}class gS extends Xi{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return up.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],o=e.iScale.getLabels();if(i.points=s,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const a={_loop:!0,_fullLoop:o.length===s.length,options:r};this.updateElement(i,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const o=this._cachedMeta.rScale,r=s==="reset";for(let a=e;a<e+i;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":s),h=o.getPointPositionForValue(a,this.getParsed(a).r),u=r?o.xCenter:h.x,d=r?o.yCenter:h.y,f={x:u,y:d,angle:h.angle,skip:isNaN(u)||isNaN(d),options:c};this.updateElement(l,a,f,s)}}}class _S extends Xi{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:o}=e,r=this.getParsed(t),a=s.getLabelForValue(r.x),l=o.getLabelForValue(r.y);return{label:i[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:o,count:r}=np(e,i,s);if(this._drawStart=o,this._drawCount=r,ip(e)&&(o=0,r=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=i;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,o,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const o=s==="reset",{iScale:r,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),u=this.getSharedOptions(h),d=this.includeOptions(s,u),f=r.axis,m=a.axis,{spanGaps:_,segment:p}=this.options,g=js(_)?_:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||o||s==="none";let y=e>0&&this.getParsed(e-1);for(let M=e;M<e+i;++M){const T=t[M],A=this.getParsed(M),C=x?T:{},v=Xt(A[m]),E=C[f]=r.getPixelForValue(A[f],M),V=C[m]=o||v?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,A,l):A[m],M);C.skip=isNaN(E)||isNaN(V)||v,C.stop=M>0&&Math.abs(A[f]-y[f])>g,p&&(C.parsed=A,C.raw=c.data[M]),d&&(C.options=u||this.resolveDataElementOptions(M,T.active?"active":s)),x||this.updateElement(T,M,C,s),y=A}this.updateSharedOptions(u,s,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const o=e[0].size(this.resolveDataElementOptions(0)),r=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,o,r)/2}}var xS=Object.freeze({__proto__:null,BarController:uS,BubbleController:dS,DoughnutController:lh,LineController:pS,PieController:mS,PolarAreaController:Mp,RadarController:gS,ScatterController:_S});function ns(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class ch{static override(t){Object.assign(ch.prototype,t)}options;constructor(t){this.options=t||{}}init(){}formats(){return ns()}parse(){return ns()}format(){return ns()}add(){return ns()}diff(){return ns()}startOf(){return ns()}endOf(){return ns()}}var vS={_date:ch};function bS(n,t,e,i){const{controller:s,data:o,_sorted:r}=n,a=s._cachedMeta.iScale,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&r&&o.length){const c=a._reversePixels?Ny:mi;if(i){if(s._sharedOptions){const h=o[0],u=typeof h.getRange=="function"&&h.getRange(t);if(u){const d=c(o,t,e-u),f=c(o,t,e+u);return{lo:d.lo,hi:f.hi}}}}else{const h=c(o,t,e);if(l){const{vScale:u}=s._cachedMeta,{_parsed:d}=n,f=d.slice(0,h.lo+1).reverse().findIndex(_=>!Xt(_[u.axis]));h.lo-=Math.max(0,f);const m=d.slice(h.hi).findIndex(_=>!Xt(_[u.axis]));h.hi+=Math.max(0,m)}return h}}return{lo:0,hi:o.length-1}}function _a(n,t,e,i,s){const o=n.getSortedVisibleDatasetMetas(),r=e[t];for(let a=0,l=o.length;a<l;++a){const{index:c,data:h}=o[a],{lo:u,hi:d}=bS(o[a],t,r,s);for(let f=u;f<=d;++f){const m=h[f];m.skip||i(m,c,f)}}}function yS(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const o=t?Math.abs(i.x-s.x):0,r=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}}function ml(n,t,e,i,s){const o=[];return!s&&!n.isPointInArea(t)||_a(n,e,t,function(a,l,c){!s&&!gi(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&o.push({element:a,datasetIndex:l,index:c})},!0),o}function MS(n,t,e,i){let s=[];function o(r,a,l){const{startAngle:c,endAngle:h}=r.getProps(["startAngle","endAngle"],i),{angle:u}=Zf(r,{x:t.x,y:t.y});ko(u,c,h)&&s.push({element:r,datasetIndex:a,index:l})}return _a(n,e,t,o),s}function SS(n,t,e,i,s,o){let r=[];const a=yS(e);let l=Number.POSITIVE_INFINITY;function c(h,u,d){const f=h.inRange(t.x,t.y,s);if(i&&!f)return;const m=h.getCenterPoint(s);if(!(!!o||n.isPointInArea(m))&&!f)return;const p=a(t,m);p<l?(r=[{element:h,datasetIndex:u,index:d}],l=p):p===l&&r.push({element:h,datasetIndex:u,index:d})}return _a(n,e,t,c),r}function gl(n,t,e,i,s,o){return!o&&!n.isPointInArea(t)?[]:e==="r"&&!i?MS(n,t,e,s):SS(n,t,e,i,s,o)}function od(n,t,e,i,s){const o=[],r=e==="x"?"inXRange":"inYRange";let a=!1;return _a(n,e,t,(l,c,h)=>{l[r]&&l[r](t[e],s)&&(o.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,s))}),i&&!a?[]:o}var ES={modes:{index(n,t,e,i){const s=ss(t,n),o=e.axis||"x",r=e.includeInvisible||!1,a=e.intersect?ml(n,s,o,i,r):gl(n,s,o,!1,i,r),l=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,u=c.data[h];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:h})}),l):[]},dataset(n,t,e,i){const s=ss(t,n),o=e.axis||"xy",r=e.includeInvisible||!1;let a=e.intersect?ml(n,s,o,i,r):gl(n,s,o,!1,i,r);if(a.length>0){const l=a[0].datasetIndex,c=n.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(n,t,e,i){const s=ss(t,n),o=e.axis||"xy",r=e.includeInvisible||!1;return ml(n,s,o,i,r)},nearest(n,t,e,i){const s=ss(t,n),o=e.axis||"xy",r=e.includeInvisible||!1;return gl(n,s,o,e.intersect,i,r)},x(n,t,e,i){const s=ss(t,n);return od(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=ss(t,n);return od(n,s,"y",e.intersect,i)}}};const Sp=["left","top","right","bottom"];function lo(n,t){return n.filter(e=>e.pos===t)}function rd(n,t){return n.filter(e=>Sp.indexOf(e.pos)===-1&&e.box.axis===t)}function co(n,t){return n.sort((e,i)=>{const s=t?i:e,o=t?e:i;return s.weight===o.weight?s.index-o.index:s.weight-o.weight})}function TS(n){const t=[];let e,i,s,o,r,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:o,options:{stack:r,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:o,horizontal:s.isHorizontal(),weight:s.weight,stack:r&&o+r,stackWeight:a});return t}function AS(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:o}=e;if(!i||!Sp.includes(s))continue;const r=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=o}return t}function wS(n,t){const e=AS(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let o,r,a;for(o=0,r=n.length;o<r;++o){a=n[o];const{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*i:l&&t.availableWidth,a.height=s):(a.width=i,a.height=h?h*s:l&&t.availableHeight)}return e}function CS(n){const t=TS(n),e=co(t.filter(c=>c.box.fullSize),!0),i=co(lo(t,"left"),!0),s=co(lo(t,"right")),o=co(lo(t,"top"),!0),r=co(lo(t,"bottom")),a=rd(t,"x"),l=rd(t,"y");return{fullSize:e,leftAndTop:i.concat(o),rightAndBottom:s.concat(l).concat(r).concat(a),chartArea:lo(t,"chartArea"),vertical:i.concat(s).concat(l),horizontal:o.concat(r).concat(a)}}function ad(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function Ep(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function RS(n,t,e,i){const{pos:s,box:o}=e,r=n.maxPadding;if(!qt(s)){e.size&&(n[s]-=e.size);const u=i[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?o.height:o.width),e.size=u.size/u.count,n[s]+=e.size}o.getPadding&&Ep(r,o.getPadding());const a=Math.max(0,t.outerWidth-ad(r,n,"left","right")),l=Math.max(0,t.outerHeight-ad(r,n,"top","bottom")),c=a!==n.w,h=l!==n.h;return n.w=a,n.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function PS(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function DS(n,t){const e=t.maxPadding;function i(s){const o={left:0,top:0,right:0,bottom:0};return s.forEach(r=>{o[r]=Math.max(t[r],e[r])}),o}return i(n?["left","right"]:["top","bottom"])}function xo(n,t,e,i){const s=[];let o,r,a,l,c,h;for(o=0,r=n.length,c=0;o<r;++o){a=n[o],l=a.box,l.update(a.width||t.w,a.height||t.h,DS(a.horizontal,t));const{same:u,other:d}=RS(t,e,a,i);c|=u&&s.length,h=h||d,l.fullSize||s.push(a)}return c&&xo(s,t,e,i)||h}function Pr(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function ld(n,t,e,i){const s=e.padding;let{x:o,y:r}=t;for(const a of n){const l=a.box,c=i[a.stack]||{placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const u=t.w*h,d=c.size||l.height;zo(c.start)&&(r=c.start),l.fullSize?Pr(l,s.left,r,e.outerWidth-s.right-s.left,d):Pr(l,t.left+c.placed,r,u,d),c.start=r,c.placed+=u,r=l.bottom}else{const u=t.h*h,d=c.size||l.width;zo(c.start)&&(o=c.start),l.fullSize?Pr(l,o,s.top,d,e.outerHeight-s.bottom-s.top):Pr(l,o,t.top+c.placed,d,u),c.start=o,c.placed+=u,o=l.right}}t.x=o,t.y=r}var an={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=ln(n.options.layout.padding),o=Math.max(t-s.width,0),r=Math.max(e-s.height,0),a=CS(n.boxes),l=a.vertical,c=a.horizontal;le(n.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const h=l.reduce((_,p)=>p.box.options&&p.box.options.display===!1?_:_+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:o,availableHeight:r,vBoxMaxWidth:o/2/h,hBoxMaxHeight:r/2}),d=Object.assign({},s);Ep(d,ln(i));const f=Object.assign({maxPadding:d,w:o,h:r,x:s.left,y:s.top},s),m=wS(l.concat(c),u);xo(a.fullSize,f,u,m),xo(l,f,u,m),xo(c,f,u,m)&&xo(l,f,u,m),PS(f),ld(a.leftAndTop,f,u,m),f.x+=f.w,f.y+=f.h,ld(a.rightAndBottom,f,u,m),n.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},le(a.chartArea,_=>{const p=_.box;Object.assign(p,n.chartArea),p.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Tp{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class LS extends Tp{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Yr="$chartjs",IS={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},cd=n=>n===null||n==="";function FS(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[Yr]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",cd(s)){const o=Yu(n,"width");o!==void 0&&(n.width=o)}if(cd(i))if(n.style.height==="")n.height=n.width/(t||2);else{const o=Yu(n,"height");o!==void 0&&(n.height=o)}return n}const Ap=RM?{passive:!0}:!1;function OS(n,t,e){n&&n.addEventListener(t,e,Ap)}function NS(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Ap)}function US(n,t){const e=IS[n.type]||n.type,{x:i,y:s}=ss(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function oa(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function BS(n,t,e){const i=n.canvas,s=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||oa(a.addedNodes,i),r=r&&!oa(a.removedNodes,i);r&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function zS(n,t,e){const i=n.canvas,s=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||oa(a.removedNodes,i),r=r&&!oa(a.addedNodes,i);r&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const Ho=new Map;let hd=0;function wp(){const n=window.devicePixelRatio;n!==hd&&(hd=n,Ho.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function kS(n,t){Ho.size||window.addEventListener("resize",wp),Ho.set(n,t)}function VS(n){Ho.delete(n),Ho.size||window.removeEventListener("resize",wp)}function HS(n,t,e){const i=n.canvas,s=i&&ah(i);if(!s)return;const o=ep((a,l)=>{const c=s.clientWidth;e(a,l),c<s.clientWidth&&e()},window),r=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||o(c,h)});return r.observe(s),kS(n,o),r}function _l(n,t,e){e&&e.disconnect(),t==="resize"&&VS(n)}function GS(n,t,e){const i=n.canvas,s=ep(o=>{n.ctx!==null&&e(US(o,n))},n);return OS(i,t,s),s}class WS extends Tp{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(FS(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[Yr])return!1;const i=e[Yr].initial;["height","width"].forEach(o=>{const r=i[o];Xt(r)?e.removeAttribute(o):e.setAttribute(o,r)});const s=i.style||{};return Object.keys(s).forEach(o=>{e.style[o]=s[o]}),e.width=e.width,delete e[Yr],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),r={attach:BS,detach:zS,resize:HS}[e]||GS;s[e]=r(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:_l,detach:_l,resize:_l}[e]||NS)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return CM(t,e,i,s)}isAttached(t){const e=t&&ah(t);return!!(e&&e.isConnected)}}function XS(n){return!rh()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?LS:WS}class Mi{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return js(this.x)&&js(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(o=>{s[o]=i[o]&&i[o].active()?i[o]._to:this[o]}),s}}function YS(n,t){const e=n.options.ticks,i=qS(n),s=Math.min(e.maxTicksLimit||i,i),o=e.major.enabled?$S(t):[],r=o.length,a=o[0],l=o[r-1],c=[];if(r>s)return KS(t,c,o,r/s),c;const h=jS(o,t,s);if(r>0){let u,d;const f=r>1?Math.round((l-a)/(r-1)):null;for(Dr(t,c,h,Xt(f)?0:a-f,a),u=0,d=r-1;u<d;u++)Dr(t,c,h,o[u],o[u+1]);return Dr(t,c,h,l,Xt(f)?t.length:l+f),c}return Dr(t,c,h),c}function qS(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function jS(n,t,e){const i=ZS(n),s=t.length/e;if(!i)return Math.max(s,1);const o=Dy(i);for(let r=0,a=o.length-1;r<a;r++){const l=o[r];if(l>s)return l}return Math.max(s,1)}function $S(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function KS(n,t,e,i){let s=0,o=e[0],r;for(i=Math.ceil(i),r=0;r<n.length;r++)r===o&&(t.push(n[r]),s++,o=e[s*i])}function Dr(n,t,e,i,s){const o=Nt(i,0),r=Math.min(Nt(s,n.length),n.length);let a=0,l,c,h;for(e=Math.ceil(e),s&&(l=s-i,e=l/Math.floor(l/e)),h=o;h<0;)a++,h=Math.round(o+a*e);for(c=Math.max(o,0);c<r;c++)c===h&&(t.push(n[c]),a++,h=Math.round(o+a*e))}function ZS(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const JS=n=>n==="left"?"right":n==="right"?"left":n,ud=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,dd=(n,t)=>Math.min(t||n,n);function fd(n,t){const e=[],i=n.length/t,s=n.length;let o=0;for(;o<s;o+=i)e.push(n[Math.floor(o)]);return e}function QS(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),o=n._startPixel,r=n._endPixel,a=1e-6;let l=n.getPixelForTick(s),c;if(!(e&&(i===1?c=Math.max(l-o,r-l):t===0?c=(n.getPixelForTick(1)-l)/2:c=(l-n.getPixelForTick(s-1))/2,l+=s<t?c:-c,l<o-a||l>r+a)))return l}function tE(n,t){le(n,e=>{const i=e.gc,s=i.length/2;let o;if(s>t){for(o=0;o<s;++o)delete e.data[i[o]];i.splice(0,s)}})}function ho(n){return n.drawTicks?n.tickLength:0}function pd(n,t){if(!n.display)return 0;const e=Ve(n.font,t),i=ln(n.padding);return(ye(n.text)?n.text.length:1)*e.lineHeight+i.height}function eE(n,t){return Wi(n,{scale:t,type:"scale"})}function nE(n,t,e){return Wi(n,{tick:e,index:t,type:"tick"})}function iE(n,t,e){let i=th(n);return(e&&t!=="right"||!e&&t==="right")&&(i=JS(i)),i}function sE(n,t,e,i){const{top:s,left:o,bottom:r,right:a,chart:l}=n,{chartArea:c,scales:h}=l;let u=0,d,f,m;const _=r-s,p=a-o;if(n.isHorizontal()){if(f=en(i,o,a),qt(e)){const g=Object.keys(e)[0],x=e[g];m=h[g].getPixelForValue(x)+_-t}else e==="center"?m=(c.bottom+c.top)/2+_-t:m=ud(n,e,t);d=a-o}else{if(qt(e)){const g=Object.keys(e)[0],x=e[g];f=h[g].getPixelForValue(x)-p+t}else e==="center"?f=(c.left+c.right)/2-p+t:f=ud(n,e,t);m=en(i,r,s),u=e==="left"?-Pe:Pe}return{titleX:f,titleY:m,maxWidth:d,rotation:u}}class xs extends Mi{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=yn(t,Number.POSITIVE_INFINITY),e=yn(e,Number.NEGATIVE_INFINITY),i=yn(i,Number.POSITIVE_INFINITY),s=yn(s,Number.NEGATIVE_INFINITY),{min:yn(t,i),max:yn(e,s),minDefined:Ae(t),maxDefined:Ae(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:o}=this.getUserBounds(),r;if(s&&o)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)r=a[l].controller.getMinMax(this,t),s||(e=Math.min(e,r.min)),o||(i=Math.max(i,r.max));return e=o&&e>i?i:e,i=s&&e>i?e:i,{min:yn(e,yn(i,e)),max:yn(i,yn(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){_e(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:o,ticks:r}=this.options,a=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=rM(this,o,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?fd(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=YS(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){_e(this.options.afterUpdate,[this])}beforeSetDimensions(){_e(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){_e(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),_e(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){_e(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,o;for(i=0,s=t.length;i<s;i++)o=t[i],o.label=_e(e.callback,[o.value,i,t],this)}afterTickToLabelConversion(){_e(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){_e(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=dd(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,o=e.maxRotation;let r=s,a,l,c;if(!this._isVisible()||!e.display||s>=o||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const h=this._getLabelSizes(),u=h.widest.width,d=h.highest.height,f=qe(this.chart.width-u,0,this.maxWidth);a=t.offset?this.maxWidth/i:f/(i-1),u+6>a&&(a=f/(i-(t.offset?.5:1)),l=this.maxHeight-ho(t.grid)-e.padding-pd(t.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),r=Jc(Math.min(Math.asin(qe((h.highest.height+6)/a,-1,1)),Math.asin(qe(l/c,-1,1))-Math.asin(qe(d/c,-1,1)))),r=Math.max(s,Math.min(o,r))),this.labelRotation=r}afterCalculateLabelRotation(){_e(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){_e(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:o}}=this,r=this._isVisible(),a=this.isHorizontal();if(r){const l=pd(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=ho(o)+l):(t.height=this.maxHeight,t.width=ho(o)+l),i.display&&this.ticks.length){const{first:c,last:h,widest:u,highest:d}=this._getLabelSizes(),f=i.padding*2,m=Nn(this.labelRotation),_=Math.cos(m),p=Math.sin(m);if(a){const g=i.mirror?0:p*u.width+_*d.height;t.height=Math.min(this.maxHeight,t.height+g+f)}else{const g=i.mirror?0:_*u.width+p*d.height;t.width=Math.min(this.maxWidth,t.width+g+f)}this._calculatePadding(c,h,p,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:o,padding:r},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,f=0;l?c?(d=s*t.width,f=i*e.height):(d=i*t.height,f=s*e.width):o==="start"?f=e.width:o==="end"?d=t.width:o!=="inner"&&(d=t.width/2,f=e.width/2),this.paddingLeft=Math.max((d-h+r)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-u+r)*this.width/(this.width-u),0)}else{let h=e.height/2,u=t.height/2;o==="start"?(h=0,u=t.height):o==="end"&&(h=e.height,u=0),this.paddingTop=h+r,this.paddingBottom=u+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){_e(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)Xt(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=fd(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:o}=this,r=[],a=[],l=Math.floor(e/dd(e,i));let c=0,h=0,u,d,f,m,_,p,g,x,y,M,T;for(u=0;u<e;u+=l){if(m=t[u].label,_=this._resolveTickFontOptions(u),s.font=p=_.string,g=o[p]=o[p]||{data:{},gc:[]},x=_.lineHeight,y=M=0,!Xt(m)&&!ye(m))y=ia(s,g.data,g.gc,y,m),M=x;else if(ye(m))for(d=0,f=m.length;d<f;++d)T=m[d],!Xt(T)&&!ye(T)&&(y=ia(s,g.data,g.gc,y,T),M+=x);r.push(y),a.push(M),c=Math.max(y,c),h=Math.max(M,h)}tE(o,e);const A=r.indexOf(c),C=a.indexOf(h),v=E=>({width:r[E]||0,height:a[E]||0});return{first:v(0),last:v(e-1),widest:v(A),highest:v(C),widths:r,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Oy(this._alignToPixels?es(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=nE(this.getContext(),t,i))}return this.$context||(this.$context=eE(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Nn(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),o=this._getLabelSizes(),r=t.autoSkipPadding||0,a=o?o.widest.width+r:0,l=o?o.highest.height+r:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:o,position:r,border:a}=s,l=o.offset,c=this.isHorizontal(),u=this.ticks.length+(l?1:0),d=ho(o),f=[],m=a.setContext(this.getContext()),_=m.display?m.width:0,p=_/2,g=function(N){return es(i,N,_)};let x,y,M,T,A,C,v,E,V,w,P,U;if(r==="top")x=g(this.bottom),C=this.bottom-d,E=x-p,w=g(t.top)+p,U=t.bottom;else if(r==="bottom")x=g(this.top),w=t.top,U=g(t.bottom)-p,C=x+p,E=this.top+d;else if(r==="left")x=g(this.right),A=this.right-d,v=x-p,V=g(t.left)+p,P=t.right;else if(r==="right")x=g(this.left),V=t.left,P=g(t.right)-p,A=x+p,v=this.left+d;else if(e==="x"){if(r==="center")x=g((t.top+t.bottom)/2+.5);else if(qt(r)){const N=Object.keys(r)[0],I=r[N];x=g(this.chart.scales[N].getPixelForValue(I))}w=t.top,U=t.bottom,C=x+p,E=C+d}else if(e==="y"){if(r==="center")x=g((t.left+t.right)/2);else if(qt(r)){const N=Object.keys(r)[0],I=r[N];x=g(this.chart.scales[N].getPixelForValue(I))}A=x-p,v=A-d,V=t.left,P=t.right}const k=Nt(s.ticks.maxTicksLimit,u),D=Math.max(1,Math.ceil(u/k));for(y=0;y<u;y+=D){const N=this.getContext(y),I=o.setContext(N),K=a.setContext(N),X=I.lineWidth,J=I.color,nt=K.dash||[],et=K.dashOffset,mt=I.tickWidth,It=I.tickColor,jt=I.tickBorderDash||[],Y=I.tickBorderDashOffset;M=QS(this,y,l),M!==void 0&&(T=es(i,M,X),c?A=v=V=P=T:C=E=w=U=T,f.push({tx1:A,ty1:C,tx2:v,ty2:E,x1:V,y1:w,x2:P,y2:U,width:X,color:J,borderDash:nt,borderDashOffset:et,tickWidth:mt,tickColor:It,tickBorderDash:jt,tickBorderDashOffset:Y}))}return this._ticksLength=u,this._borderValue=x,f}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:o}=i,r=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:u}=o,d=ho(i.grid),f=d+h,m=u?-h:f,_=-Nn(this.labelRotation),p=[];let g,x,y,M,T,A,C,v,E,V,w,P,U="middle";if(s==="top")A=this.bottom-m,C=this._getXAxisLabelAlignment();else if(s==="bottom")A=this.top+m,C=this._getXAxisLabelAlignment();else if(s==="left"){const D=this._getYAxisLabelAlignment(d);C=D.textAlign,T=D.x}else if(s==="right"){const D=this._getYAxisLabelAlignment(d);C=D.textAlign,T=D.x}else if(e==="x"){if(s==="center")A=(t.top+t.bottom)/2+f;else if(qt(s)){const D=Object.keys(s)[0],N=s[D];A=this.chart.scales[D].getPixelForValue(N)+f}C=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")T=(t.left+t.right)/2-f;else if(qt(s)){const D=Object.keys(s)[0],N=s[D];T=this.chart.scales[D].getPixelForValue(N)}C=this._getYAxisLabelAlignment(d).textAlign}e==="y"&&(l==="start"?U="top":l==="end"&&(U="bottom"));const k=this._getLabelSizes();for(g=0,x=a.length;g<x;++g){y=a[g],M=y.label;const D=o.setContext(this.getContext(g));v=this.getPixelForTick(g)+o.labelOffset,E=this._resolveTickFontOptions(g),V=E.lineHeight,w=ye(M)?M.length:1;const N=w/2,I=D.color,K=D.textStrokeColor,X=D.textStrokeWidth;let J=C;r?(T=v,C==="inner"&&(g===x-1?J=this.options.reverse?"left":"right":g===0?J=this.options.reverse?"right":"left":J="center"),s==="top"?c==="near"||_!==0?P=-w*V+V/2:c==="center"?P=-k.highest.height/2-N*V+V:P=-k.highest.height+V/2:c==="near"||_!==0?P=V/2:c==="center"?P=k.highest.height/2-N*V:P=k.highest.height-w*V,u&&(P*=-1),_!==0&&!D.showLabelBackdrop&&(T+=V/2*Math.sin(_))):(A=v,P=(1-w)*V/2);let nt;if(D.showLabelBackdrop){const et=ln(D.backdropPadding),mt=k.heights[g],It=k.widths[g];let jt=P-et.top,Y=0-et.left;switch(U){case"middle":jt-=mt/2;break;case"bottom":jt-=mt;break}switch(C){case"center":Y-=It/2;break;case"right":Y-=It;break;case"inner":g===x-1?Y-=It:g>0&&(Y-=It/2);break}nt={left:Y,top:jt,width:It+et.width,height:mt+et.height,color:D.backdropColor}}p.push({label:M,font:E,textOffset:P,options:{rotation:_,color:I,strokeColor:K,strokeWidth:X,textAlign:J,textBaseline:U,translation:[T,A],backdrop:nt}})}return p}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Nn(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:o}}=this.options,r=this._getLabelSizes(),a=t+o,l=r.widest.width;let c,h;return e==="left"?s?(h=this.right+o,i==="near"?c="left":i==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,i==="near"?c="right":i==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?s?(h=this.left+o,i==="near"?c="right":i==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,i==="near"?c="left":i==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:o,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,o,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(o=>o.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,r;const a=(l,c,h)=>{!h.width||!h.color||(i.save(),i.lineWidth=h.width,i.strokeStyle=h.color,i.setLineDash(h.borderDash||[]),i.lineDashOffset=h.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(e.display)for(o=0,r=s.length;o<r;++o){const l=s[o];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,o=i.setContext(this.getContext()),r=i.display?o.width:0;if(!r)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,u,d;this.isHorizontal()?(c=es(t,this.left,r)-r/2,h=es(t,this.right,a)+a/2,u=d=l):(u=es(t,this.top,r)-r/2,d=es(t,this.bottom,a)+a/2,c=h=l),e.save(),e.lineWidth=o.width,e.strokeStyle=o.color,e.beginPath(),e.moveTo(c,u),e.lineTo(h,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&pa(i,s);const o=this.getLabelItems(t);for(const r of o){const a=r.options,l=r.font,c=r.label,h=r.textOffset;gs(i,c,0,h,l,a)}s&&ma(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const o=Ve(i.font),r=ln(i.padding),a=i.align;let l=o.lineHeight/2;e==="bottom"||e==="center"||qt(e)?(l+=r.bottom,ye(i.text)&&(l+=o.lineHeight*(i.text.length-1))):l+=r.top;const{titleX:c,titleY:h,maxWidth:u,rotation:d}=sE(this,l,e,a);gs(t,i.text,0,0,o,{color:i.color,maxWidth:u,rotation:d,textAlign:iE(a,e,s),textBaseline:"middle",translation:[c,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=Nt(t.grid&&t.grid.z,-1),s=Nt(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==xs.prototype.draw?[{z:e,draw:o=>{this.draw(o)}}]:[{z:i,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let o,r;for(o=0,r=e.length;o<r;++o){const a=e[o];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Ve(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Lr{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;aE(e)&&(i=this.register(e));const s=this.items,o=t.id,r=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in s||(s[o]=t,oE(t,r,i),this.override&&Me.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in Me[s]&&(delete Me[s][i],this.override&&delete ms[i])}}function oE(n,t,e){const i=Bo(Object.create(null),[e?Me.get(e):{},Me.get(t),n.defaults]);Me.set(t,i),n.defaultRoutes&&rE(t,n.defaultRoutes),n.descriptors&&Me.describe(t,n.descriptors)}function rE(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),o=[n].concat(i).join("."),r=t[e].split("."),a=r.pop(),l=r.join(".");Me.route(o,s,l,a)})}function aE(n){return"id"in n&&"defaults"in n}class lE{constructor(){this.controllers=new Lr(Xi,"datasets",!0),this.elements=new Lr(Mi,"elements"),this.plugins=new Lr(Object,"plugins"),this.scales=new Lr(xs,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const o=i||this._getRegistryForType(s);i||o.isForType(s)||o===this.plugins&&s.id?this._exec(t,o,s):le(s,r=>{const a=i||this._getRegistryForType(r);this._exec(t,a,r)})})}_exec(t,e,i){const s=Zc(t);_e(i["before"+s],[],i),e[t](i),_e(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var Hn=new lE;class cE{constructor(){this._init=void 0}notify(t,e,i,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const o=s?this._descriptors(t).filter(s):this._descriptors(t),r=this._notify(o,t,e,i);return e==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),r}_notify(t,e,i,s){s=s||{};for(const o of t){const r=o.plugin,a=r[i],l=[e,s,o.options];if(_e(a,l,r)===!1&&s.cancelable)return!1}return!0}invalidate(){Xt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=Nt(i.options&&i.options.plugins,{}),o=hE(i);return s===!1&&!e?[]:dE(t,o,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(o,r)=>o.filter(a=>!r.some(l=>a.plugin.id===l.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function hE(n){const t={},e=[],i=Object.keys(Hn.plugins.items);for(let o=0;o<i.length;o++)e.push(Hn.getPlugin(i[o]));const s=n.plugins||[];for(let o=0;o<s.length;o++){const r=s[o];e.indexOf(r)===-1&&(e.push(r),t[r.id]=!0)}return{plugins:e,localIds:t}}function uE(n,t){return!t&&n===!1?null:n===!0?{}:n}function dE(n,{plugins:t,localIds:e},i,s){const o=[],r=n.getContext();for(const a of t){const l=a.id,c=uE(i[l],s);c!==null&&o.push({plugin:a,options:fE(n.config,{plugin:a,local:e[l]},c,r)})}return o}function fE(n,{plugin:t,local:e},i,s){const o=n.pluginScopeKeys(t),r=n.getOptionScopes(i,o);return e&&t.defaults&&r.push(t.defaults),n.createResolver(r,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Mc(n,t){const e=Me.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function pE(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function mE(n,t){return n===t?"_index_":"_value_"}function md(n){if(n==="x"||n==="y"||n==="r")return n}function gE(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Sc(n,...t){if(md(n))return n;for(const e of t){const i=e.axis||gE(e.position)||n.length>1&&md(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function gd(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function _E(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return gd(n,"x",e[0])||gd(n,"y",e[0])}return{}}function xE(n,t){const e=ms[n.type]||{scales:{}},i=t.scales||{},s=Mc(n.type,t),o=Object.create(null);return Object.keys(i).forEach(r=>{const a=i[r];if(!qt(a))return console.error(`Invalid scale configuration for scale: ${r}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=Sc(r,a,_E(r,n),Me.scales[a.type]),c=mE(l,s),h=e.scales||{};o[r]=wo(Object.create(null),[{axis:l},a,h[l],h[c]])}),n.data.datasets.forEach(r=>{const a=r.type||n.type,l=r.indexAxis||Mc(a,t),h=(ms[a]||{}).scales||{};Object.keys(h).forEach(u=>{const d=pE(u,l),f=r[d+"AxisID"]||d;o[f]=o[f]||Object.create(null),wo(o[f],[{axis:d},i[f],h[u]])})}),Object.keys(o).forEach(r=>{const a=o[r];wo(a,[Me.scales[a.type],Me.scale])}),o}function Cp(n){const t=n.options||(n.options={});t.plugins=Nt(t.plugins,{}),t.scales=xE(n,t)}function Rp(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function vE(n){return n=n||{},n.data=Rp(n.data),Cp(n),n}const _d=new Map,Pp=new Set;function Ir(n,t){let e=_d.get(n);return e||(e=t(),_d.set(n,e),Pp.add(e)),e}const uo=(n,t,e)=>{const i=Hi(t,e);i!==void 0&&n.add(i)};class bE{constructor(t){this._config=vE(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Rp(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Cp(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ir(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Ir(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Ir(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return Ir(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:o}=this,r=this._cachedScopes(t,i),a=r.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(u=>uo(l,t,u))),h.forEach(u=>uo(l,s,u)),h.forEach(u=>uo(l,ms[o]||{},u)),h.forEach(u=>uo(l,Me,u)),h.forEach(u=>uo(l,bc,u))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Pp.has(e)&&r.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,ms[e]||{},Me.datasets[e]||{},{type:e},Me,bc]}resolveNamedOptions(t,e,i,s=[""]){const o={$shared:!0},{resolver:r,subPrefixes:a}=xd(this._resolverCache,t,s);let l=r;if(ME(r,e)){o.$shared=!1,i=Gi(i)?i():i;const c=this.createResolver(t,i,a);l=$s(r,i,c)}for(const c of e)o[c]=l[c];return o}createResolver(t,e,i=[""],s){const{resolver:o}=xd(this._resolverCache,t,i);return qt(e)?$s(o,e,void 0,s):o}}function xd(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let o=i.get(s);return o||(o={resolver:ih(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,o)),o}const yE=n=>qt(n)&&Object.getOwnPropertyNames(n).some(t=>Gi(n[t]));function ME(n,t){const{isScriptable:e,isIndexable:i}=ap(n);for(const s of t){const o=e(s),r=i(s),a=(r||o)&&n[s];if(o&&(Gi(a)||yE(a))||r&&ye(a))return!0}return!1}var SE="4.5.1";const EE=["top","bottom","left","right","chartArea"];function vd(n,t){return n==="top"||n==="bottom"||EE.indexOf(n)===-1&&t==="x"}function bd(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function yd(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),_e(e&&e.onComplete,[n],t)}function TE(n){const t=n.chart,e=t.options.animation;_e(e&&e.onProgress,[n],t)}function Dp(n){return rh()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const qr={},Md=n=>{const t=Dp(n);return Object.values(qr).filter(e=>e.canvas===t).pop()};function AE(n,t,e){const i=Object.keys(n);for(const s of i){const o=+s;if(o>=t){const r=n[s];delete n[s],(e>0||o>t)&&(n[o+e]=r)}}}function wE(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}class hh{static defaults=Me;static instances=qr;static overrides=ms;static registry=Hn;static version=SE;static getChart=Md;static register(...t){Hn.add(...t),Sd()}static unregister(...t){Hn.remove(...t),Sd()}constructor(t,e){const i=this.config=new bE(e),s=Dp(t),o=Md(s);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const r=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||XS(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,r.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=My(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new cE,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=zy(u=>this.update(u),r.resizeDelay||0),this._dataChanges=[],qr[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}ai.listen(this,"complete",yd),ai.listen(this,"progress",TE),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:o}=this;return Xt(t)?e&&o?o:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Hn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Xu(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Hu(this.canvas,this.ctx),this}stop(){return ai.stop(this),this}resize(t,e){ai.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,o=i.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(s,t,e,o),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,Xu(this,a,!0)&&(this.notifyPlugins("resize",{size:r}),_e(i.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};le(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((r,a)=>(r[a]=!1,r),{});let o=[];e&&(o=o.concat(Object.keys(e).map(r=>{const a=e[r],l=Sc(r,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),le(o,r=>{const a=r.options,l=a.id,c=Sc(l,a),h=Nt(a.type,r.dtype);(a.position===void 0||vd(a.position,c)!==vd(r.dposition))&&(a.position=r.dposition),s[l]=!0;let u=null;if(l in i&&i[l].type===h)u=i[l];else{const d=Hn.getScale(h);u=new d({id:l,type:h,ctx:this.ctx,chart:this}),i[u.id]=u}u.init(a,t)}),le(s,(r,a)=>{r||delete i[a]}),le(i,r=>{an.configure(this,r,r.options),an.addBox(this,r)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,o)=>s.index-o.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(bd("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(o=>o===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const o=e[i];let r=this.getDatasetMeta(i);const a=o.type||this.config.type;if(r.type&&r.type!==a&&(this._destroyDatasetMeta(i),r=this.getDatasetMeta(i)),r.type=a,r.indexAxis=o.indexAxis||Mc(a,this.options),r.order=o.order||0,r.index=i,r.label=""+o.label,r.visible=this.isDatasetVisible(i),r.controller)r.controller.updateIndex(i),r.controller.linkScales();else{const l=Hn.getController(a),{datasetElementType:c,dataElementType:h}=Me.datasets[a];Object.assign(l,{dataElementType:Hn.getElement(h),datasetElementType:c&&Hn.getElement(c)}),r.controller=new l(this,i),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){le(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let c=0,h=this.data.datasets.length;c<h;c++){const{controller:u}=this.getDatasetMeta(c),d=!s&&o.indexOf(u)===-1;u.buildOrUpdateElements(d),r=Math.max(+u.getMaxOverflow(),r)}r=this._minPadding=i.layout.autoPadding?r:0,this._updateLayout(r),s||le(o,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(bd("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){le(this.scales,t=>{an.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Iu(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:o}of e){const r=i==="_removeElements"?-o:o;AE(t,s,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=o=>new Set(t.filter(r=>r[0]===o).map((r,a)=>a+","+r.splice(1).join(","))),s=i(0);for(let o=1;o<e;o++)if(!Iu(s,i(o)))return;return Array.from(s).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;an.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],le(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,o)=>{s._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,Gi(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(ai.has(this)?this.attached&&!ai.running(this)&&ai.start(this):(this.draw(),yd({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,o;for(s=0,o=e.length;s<o;++s){const r=e[s];(!t||r.visible)&&i.push(r)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=xp(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&pa(e,s),t.controller.draw(),s&&ma(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return gi(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const o=ES.modes[e];return typeof o=="function"?o(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(o=>o&&o._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Wi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",o=this.getDatasetMeta(t),r=o.controller._resolveAnimations(void 0,s);zo(e)?(o.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),r.update(o,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),ai.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Hu(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete qr[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(o,r)=>{e.addEventListener(this,o,r),t[o]=r},s=(o,r,a)=>{o.offsetX=r,o.offsetY=a,this._eventHandler(o)};le(this.options.events,o=>i(o,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},s=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let r;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",o),i("detach",r)};r=()=>{this.attached=!1,s("resize",o),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():r()}unbindEvents(){le(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},le(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let o,r,a,l;for(e==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){r=t[a];const c=r&&this.getDatasetMeta(r.datasetIndex).controller;c&&c[s+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:o,index:r})=>{const a=this.getDatasetMeta(o);if(!a)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:a.data[r],index:r}});!ta(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,o=(l,c)=>l.filter(h=>!c.some(u=>h.datasetIndex===u.datasetIndex&&h.index===u.index)),r=o(e,t),a=i?t:o(t,e);r.length&&this.updateHoverStyle(r,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const o=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(o||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:o}=this,r=e,a=this._getActiveElements(t,s,i,r),l=Cy(t),c=wE(t,this._lastEvent,i,l);i&&(this._lastEvent=null,_e(o.onHover,[t,a,this],this),l&&_e(o.onClick,[t,a,this],this));const h=!ta(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=c,h}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,s)}}function Sd(){return le(hh.instances,n=>n._plugins.invalidate())}function CE(n,t,e){const{startAngle:i,x:s,y:o,outerRadius:r,innerRadius:a,options:l}=t,{borderWidth:c,borderJoinStyle:h}=l,u=Math.min(c/r,nn(i-e));if(n.beginPath(),n.arc(s,o,r-c/2,i+u/2,e-u/2),a>0){const d=Math.min(c/a,nn(i-e));n.arc(s,o,a+c/2,e-d/2,i+d/2,!0)}else{const d=Math.min(c/2,r*nn(i-e));if(h==="round")n.arc(s,o,d,e-ie/2,i+ie/2,!0);else if(h==="bevel"){const f=2*d*d,m=-f*Math.cos(e+ie/2)+s,_=-f*Math.sin(e+ie/2)+o,p=f*Math.cos(i+ie/2)+s,g=f*Math.sin(i+ie/2)+o;n.lineTo(m,_),n.lineTo(p,g)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function RE(n,t,e){const{startAngle:i,pixelMargin:s,x:o,y:r,outerRadius:a,innerRadius:l}=t;let c=s/a;n.beginPath(),n.arc(o,r,a,i-c,e+c),l>s?(c=s/l,n.arc(o,r,l,e+c,i-c,!0)):n.arc(o,r,s,e+Pe,i-Pe),n.closePath(),n.clip()}function PE(n){return nh(n,["outerStart","outerEnd","innerStart","innerEnd"])}function DE(n,t,e,i){const s=PE(n.options.borderRadius),o=(e-t)/2,r=Math.min(o,i*t/2),a=l=>{const c=(e-Math.min(o,l))*i/2;return qe(l,0,Math.min(o,c))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:qe(s.innerStart,0,r),innerEnd:qe(s.innerEnd,0,r)}}function Ns(n,t,e,i){return{x:e+n*Math.cos(t),y:i+n*Math.sin(t)}}function ra(n,t,e,i,s,o){const{x:r,y:a,startAngle:l,pixelMargin:c,innerRadius:h}=t,u=Math.max(t.outerRadius+i+e-c,0),d=h>0?h+i+e+c:0;let f=0;const m=s-l;if(i){const D=h>0?h-i:0,N=u>0?u-i:0,I=(D+N)/2,K=I!==0?m*I/(I+i):m;f=(m-K)/2}const _=Math.max(.001,m*u-e/ie)/u,p=(m-_)/2,g=l+p+f,x=s-p-f,{outerStart:y,outerEnd:M,innerStart:T,innerEnd:A}=DE(t,d,u,x-g),C=u-y,v=u-M,E=g+y/C,V=x-M/v,w=d+T,P=d+A,U=g+T/w,k=x-A/P;if(n.beginPath(),o){const D=(E+V)/2;if(n.arc(r,a,u,E,D),n.arc(r,a,u,D,V),M>0){const X=Ns(v,V,r,a);n.arc(X.x,X.y,M,V,x+Pe)}const N=Ns(P,x,r,a);if(n.lineTo(N.x,N.y),A>0){const X=Ns(P,k,r,a);n.arc(X.x,X.y,A,x+Pe,k+Math.PI)}const I=(x-A/d+(g+T/d))/2;if(n.arc(r,a,d,x-A/d,I,!0),n.arc(r,a,d,I,g+T/d,!0),T>0){const X=Ns(w,U,r,a);n.arc(X.x,X.y,T,U+Math.PI,g-Pe)}const K=Ns(C,g,r,a);if(n.lineTo(K.x,K.y),y>0){const X=Ns(C,E,r,a);n.arc(X.x,X.y,y,g-Pe,E)}}else{n.moveTo(r,a);const D=Math.cos(E)*u+r,N=Math.sin(E)*u+a;n.lineTo(D,N);const I=Math.cos(V)*u+r,K=Math.sin(V)*u+a;n.lineTo(I,K)}n.closePath()}function LE(n,t,e,i,s){const{fullCircles:o,startAngle:r,circumference:a}=t;let l=t.endAngle;if(o){ra(n,t,e,i,l,s);for(let c=0;c<o;++c)n.fill();isNaN(a)||(l=r+(a%ve||ve))}return ra(n,t,e,i,l,s),n.fill(),l}function IE(n,t,e,i,s){const{fullCircles:o,startAngle:r,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:h,borderDash:u,borderDashOffset:d,borderRadius:f}=l,m=l.borderAlign==="inner";if(!c)return;n.setLineDash(u||[]),n.lineDashOffset=d,m?(n.lineWidth=c*2,n.lineJoin=h||"round"):(n.lineWidth=c,n.lineJoin=h||"bevel");let _=t.endAngle;if(o){ra(n,t,e,i,_,s);for(let p=0;p<o;++p)n.stroke();isNaN(a)||(_=r+(a%ve||ve))}m&&RE(n,t,_),l.selfJoin&&_-r>=ie&&f===0&&h!=="miter"&&CE(n,t,_),o||(ra(n,t,e,i,_,s),n.stroke())}class FE extends Mi{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.getProps(["x","y"],i),{angle:o,distance:r}=Zf(s,{x:t,y:e}),{startAngle:a,endAngle:l,innerRadius:c,outerRadius:h,circumference:u}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),d=(this.options.spacing+this.options.borderWidth)/2,f=Nt(u,l-a),m=ko(o,a,l)&&a!==l,_=f>=ve||m,p=pi(r,c+d,h+d);return _&&p}getCenterPoint(t){const{x:e,y:i,startAngle:s,endAngle:o,innerRadius:r,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:l,spacing:c}=this.options,h=(s+o)/2,u=(r+a+c+l)/2;return{x:e+Math.cos(h)*u,y:i+Math.sin(h)*u}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,s=(e.offset||0)/4,o=(e.spacing||0)/2,r=e.circular;if(this.pixelMargin=e.borderAlign==="inner"?.33:0,this.fullCircles=i>ve?Math.floor(i/ve):0,i===0||this.innerRadius<0||this.outerRadius<0)return;t.save();const a=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(a)*s,Math.sin(a)*s);const l=1-Math.sin(Math.min(ie,i||0)),c=s*l;t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor,LE(t,this,c,o,r),IE(t,this,c,o,r),t.restore()}}function Lp(n,t,e=t){n.lineCap=Nt(e.borderCapStyle,t.borderCapStyle),n.setLineDash(Nt(e.borderDash,t.borderDash)),n.lineDashOffset=Nt(e.borderDashOffset,t.borderDashOffset),n.lineJoin=Nt(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=Nt(e.borderWidth,t.borderWidth),n.strokeStyle=Nt(e.borderColor,t.borderColor)}function OE(n,t,e){n.lineTo(e.x,e.y)}function NE(n){return n.stepped?Zy:n.tension||n.cubicInterpolationMode==="monotone"?Jy:OE}function Ip(n,t,e={}){const i=n.length,{start:s=0,end:o=i-1}=e,{start:r,end:a}=t,l=Math.max(s,r),c=Math.min(o,a),h=s<r&&o<r||s>a&&o>a;return{count:i,start:l,loop:t.loop,ilen:c<l&&!h?i+c-l:c-l}}function UE(n,t,e,i){const{points:s,options:o}=t,{count:r,start:a,loop:l,ilen:c}=Ip(s,e,i),h=NE(o);let{move:u=!0,reverse:d}=i||{},f,m,_;for(f=0;f<=c;++f)m=s[(a+(d?c-f:f))%r],!m.skip&&(u?(n.moveTo(m.x,m.y),u=!1):h(n,_,m,d,o.stepped),_=m);return l&&(m=s[(a+(d?c:0))%r],h(n,_,m,d,o.stepped)),!!l}function BE(n,t,e,i){const s=t.points,{count:o,start:r,ilen:a}=Ip(s,e,i),{move:l=!0,reverse:c}=i||{};let h=0,u=0,d,f,m,_,p,g;const x=M=>(r+(c?a-M:M))%o,y=()=>{_!==p&&(n.lineTo(h,p),n.lineTo(h,_),n.lineTo(h,g))};for(l&&(f=s[x(0)],n.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=s[x(d)],f.skip)continue;const M=f.x,T=f.y,A=M|0;A===m?(T<_?_=T:T>p&&(p=T),h=(u*h+M)/++u):(y(),n.lineTo(M,T),m=A,u=0,_=p=T),g=T}y()}function Ec(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?BE:UE}function zE(n){return n.stepped?PM:n.tension||n.cubicInterpolationMode==="monotone"?DM:os}function kE(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),Lp(n,t.options),n.stroke(s)}function VE(n,t,e,i){const{segments:s,options:o}=t,r=Ec(t);for(const a of s)Lp(n,o,a.style),n.beginPath(),r(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const HE=typeof Path2D=="function";function GE(n,t,e,i){HE&&!t.options.segment?kE(n,t,e,i):VE(n,t,e,i)}class xa extends Mi{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;MM(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=UM(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],o=this.points,r=_p(this,{property:e,start:s,end:s});if(!r.length)return;const a=[],l=zE(i);let c,h;for(c=0,h=r.length;c<h;++c){const{start:u,end:d}=r[c],f=o[u],m=o[d];if(f===m){a.push(f);continue}const _=Math.abs((s-f[e])/(m[e]-f[e])),p=l(f,m,_,i.stepped);p[e]=t[e],a.push(p)}return a.length===1?a[0]:a}pathSegment(t,e,i){return Ec(this)(t,this,e,i)}path(t,e,i){const s=this.segments,o=Ec(this);let r=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)r&=o(t,this,a,{start:e,end:e+i-1});return!!r}draw(t,e,i,s){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),GE(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Ed(n,t,e,i){const s=n.options,{[e]:o}=n.getProps([e],i);return Math.abs(t-o)<s.radius+s.hitRadius}class WE extends Mi{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.options,{x:o,y:r}=this.getProps(["x","y"],i);return Math.pow(t-o,2)+Math.pow(e-r,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(t,e){return Ed(this,t,"x",e)}inYRange(t,e){return Ed(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){t=t||this.options||{};let e=t.radius||0;e=Math.max(e,e&&t.hoverRadius||0);const i=e&&t.borderWidth||0;return(e+i)*2}draw(t,e){const i=this.options;this.skip||i.radius<.1||!gi(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,yc(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function Fp(n,t){const{x:e,y:i,base:s,width:o,height:r}=n.getProps(["x","y","base","width","height"],t);let a,l,c,h,u;return n.horizontal?(u=r/2,a=Math.min(e,s),l=Math.max(e,s),c=i-u,h=i+u):(u=o/2,a=e-u,l=e+u,c=Math.min(i,s),h=Math.max(i,s)),{left:a,top:c,right:l,bottom:h}}function Bi(n,t,e,i){return n?0:qe(t,e,i)}function XE(n,t,e){const i=n.options.borderWidth,s=n.borderSkipped,o=rp(i);return{t:Bi(s.top,o.top,0,e),r:Bi(s.right,o.right,0,t),b:Bi(s.bottom,o.bottom,0,e),l:Bi(s.left,o.left,0,t)}}function YE(n,t,e){const{enableBorderRadius:i}=n.getProps(["enableBorderRadius"]),s=n.options.borderRadius,o=us(s),r=Math.min(t,e),a=n.borderSkipped,l=i||qt(s);return{topLeft:Bi(!l||a.top||a.left,o.topLeft,0,r),topRight:Bi(!l||a.top||a.right,o.topRight,0,r),bottomLeft:Bi(!l||a.bottom||a.left,o.bottomLeft,0,r),bottomRight:Bi(!l||a.bottom||a.right,o.bottomRight,0,r)}}function qE(n){const t=Fp(n),e=t.right-t.left,i=t.bottom-t.top,s=XE(n,e/2,i/2),o=YE(n,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:o},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,o.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(s.b,s.r))}}}}function xl(n,t,e,i){const s=t===null,o=e===null,a=n&&!(s&&o)&&Fp(n,i);return a&&(s||pi(t,a.left,a.right))&&(o||pi(e,a.top,a.bottom))}function jE(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function $E(n,t){n.rect(t.x,t.y,t.w,t.h)}function vl(n,t,e={}){const i=n.x!==e.x?-t:0,s=n.y!==e.y?-t:0,o=(n.x+n.w!==e.x+e.w?t:0)-i,r=(n.y+n.h!==e.y+e.h?t:0)-s;return{x:n.x+i,y:n.y+s,w:n.w+o,h:n.h+r,radius:n.radius}}class KE extends Mi{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:o,outer:r}=qE(this),a=jE(r.radius)?Vo:$E;t.save(),(r.w!==o.w||r.h!==o.h)&&(t.beginPath(),a(t,vl(r,e,o)),t.clip(),a(t,vl(o,-e,r)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,vl(o,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return xl(this,t,e,i)}inXRange(t,e){return xl(this,t,null,e)}inYRange(t,e){return xl(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(e+s)/2:e,y:o?i:(i+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}var ZE=Object.freeze({__proto__:null,ArcElement:FE,BarElement:KE,LineElement:xa,PointElement:WE});const Tc=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Td=Tc.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function Op(n){return Tc[n%Tc.length]}function Np(n){return Td[n%Td.length]}function JE(n,t){return n.borderColor=Op(t),n.backgroundColor=Np(t),++t}function QE(n,t){return n.backgroundColor=n.data.map(()=>Op(t++)),t}function tT(n,t){return n.backgroundColor=n.data.map(()=>Np(t++)),t}function eT(n){let t=0;return(e,i)=>{const s=n.getDatasetMeta(i).controller;s instanceof lh?t=QE(e,t):s instanceof Mp?t=tT(e,t):s&&(t=JE(e,t))}}function Ad(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function nT(n){return n&&(n.borderColor||n.backgroundColor)}function iT(){return Me.borderColor!=="rgba(0,0,0,0.1)"||Me.backgroundColor!=="rgba(0,0,0,0.1)"}var sT={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:i},options:s}=n.config,{elements:o}=s,r=Ad(i)||nT(s)||o&&Ad(o)||iT();if(!e.forceOverride&&r)return;const a=eT(n);i.forEach(a)}};function oT(n,t,e,i,s){const o=s.samples||i;if(o>=e)return n.slice(t,t+e);const r=[],a=(e-2)/(o-2);let l=0;const c=t+e-1;let h=t,u,d,f,m,_;for(r[l++]=n[h],u=0;u<o-2;u++){let p=0,g=0,x;const y=Math.floor((u+1)*a)+1+t,M=Math.min(Math.floor((u+2)*a)+1,e)+t,T=M-y;for(x=y;x<M;x++)p+=n[x].x,g+=n[x].y;p/=T,g/=T;const A=Math.floor(u*a)+1+t,C=Math.min(Math.floor((u+1)*a)+1,e)+t,{x:v,y:E}=n[h];for(f=m=-1,x=A;x<C;x++)m=.5*Math.abs((v-p)*(n[x].y-E)-(v-n[x].x)*(g-E)),m>f&&(f=m,d=n[x],_=x);r[l++]=d,h=_}return r[l++]=n[c],r}function rT(n,t,e,i){let s=0,o=0,r,a,l,c,h,u,d,f,m,_;const p=[],g=t+e-1,x=n[t].x,M=n[g].x-x;for(r=t;r<t+e;++r){a=n[r],l=(a.x-x)/M*i,c=a.y;const T=l|0;if(T===h)c<m?(m=c,u=r):c>_&&(_=c,d=r),s=(o*s+a.x)/++o;else{const A=r-1;if(!Xt(u)&&!Xt(d)){const C=Math.min(u,d),v=Math.max(u,d);C!==f&&C!==A&&p.push({...n[C],x:s}),v!==f&&v!==A&&p.push({...n[v],x:s})}r>0&&A!==f&&p.push(n[A]),p.push(a),h=T,o=0,m=_=c,u=d=f=r}}return p}function Up(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function wd(n){n.data.datasets.forEach(t=>{Up(t)})}function aT(n,t){const e=t.length;let i=0,s;const{iScale:o}=n,{min:r,max:a,minDefined:l,maxDefined:c}=o.getUserBounds();return l&&(i=qe(mi(t,o.axis,r).lo,0,e-1)),c?s=qe(mi(t,o.axis,a).hi+1,i,e)-i:s=e-i,{start:i,count:s}}var lT={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){wd(n);return}const i=n.width;n.data.datasets.forEach((s,o)=>{const{_data:r,indexAxis:a}=s,l=n.getDatasetMeta(o),c=r||s.data;if(_o([a,n.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const h=n.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||n.options.parsing)return;let{start:u,count:d}=aT(l,c);const f=e.threshold||4*i;if(d<=f){Up(s);return}Xt(r)&&(s._data=c,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let m;switch(e.algorithm){case"lttb":m=oT(c,u,d,i,e);break;case"min-max":m=rT(c,u,d,i);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=m})},destroy(n){wd(n)}};function cT(n,t,e){const i=n.segments,s=n.points,o=t.points,r=[];for(const a of i){let{start:l,end:c}=a;c=va(l,c,s);const h=Ac(e,s[l],s[c],a.loop);if(!t.segments){r.push({source:a,target:h,start:s[l],end:s[c]});continue}const u=_p(t,h);for(const d of u){const f=Ac(e,o[d.start],o[d.end],d.loop),m=gp(a,s,f);for(const _ of m)r.push({source:_,target:d,start:{[e]:Cd(h,f,"start",Math.max)},end:{[e]:Cd(h,f,"end",Math.min)}})}}return r}function Ac(n,t,e,i){if(i)return;let s=t[n],o=e[n];return n==="angle"&&(s=nn(s),o=nn(o)),{property:n,start:s,end:o}}function hT(n,t){const{x:e=null,y:i=null}=n||{},s=t.points,o=[];return t.segments.forEach(({start:r,end:a})=>{a=va(r,a,s);const l=s[r],c=s[a];i!==null?(o.push({x:l.x,y:i}),o.push({x:c.x,y:i})):e!==null&&(o.push({x:e,y:l.y}),o.push({x:e,y:c.y}))}),o}function va(n,t,e){for(;t>n;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Cd(n,t,e,i){return n&&t?i(n[e],t[e]):n?n[e]:t?t[e]:0}function Bp(n,t){let e=[],i=!1;return ye(n)?(i=!0,e=n):e=hT(n,t),e.length?new xa({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Rd(n){return n&&n.fill!==!1}function uT(n,t,e){let s=n[t].fill;const o=[t];let r;if(!e)return s;for(;s!==!1&&o.indexOf(s)===-1;){if(!Ae(s))return s;if(r=n[s],!r)return!1;if(r.visible)return s;o.push(s),s=r.fill}return!1}function dT(n,t,e){const i=gT(n);if(qt(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return Ae(s)&&Math.floor(s)===s?fT(i[0],t,s,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function fT(n,t,e,i){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function pT(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:qt(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function mT(n,t,e){let i;return n==="start"?i=e:n==="end"?i=t.options.reverse?t.min:t.max:qt(n)?i=n.value:i=t.getBaseValue(),i}function gT(n){const t=n.options,e=t.fill;let i=Nt(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function _T(n){const{scale:t,index:e,line:i}=n,s=[],o=i.segments,r=i.points,a=xT(t,e);a.push(Bp({x:null,y:t.bottom},i));for(let l=0;l<o.length;l++){const c=o[l];for(let h=c.start;h<=c.end;h++)vT(s,r[h],a)}return new xa({points:s,options:{}})}function xT(n,t){const e=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const o=i[s];if(o.index===t)break;o.hidden||e.unshift(o.dataset)}return e}function vT(n,t,e){const i=[];for(let s=0;s<e.length;s++){const o=e[s],{first:r,last:a,point:l}=bT(o,t,"x");if(!(!l||r&&a)){if(r)i.unshift(l);else if(n.push(l),!a)break}}n.push(...i)}function bT(n,t,e){const i=n.interpolate(t,e);if(!i)return{};const s=i[e],o=n.segments,r=n.points;let a=!1,l=!1;for(let c=0;c<o.length;c++){const h=o[c],u=r[h.start][e],d=r[h.end][e];if(pi(s,u,d)){a=s===u,l=s===d;break}}return{first:a,last:l,point:i}}class zp{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:o,radius:r}=this;return e=e||{start:0,end:ve},t.arc(s,o,r,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,o=t.angle;return{x:e+Math.cos(o)*s,y:i+Math.sin(o)*s,angle:o}}}function yT(n){const{chart:t,fill:e,line:i}=n;if(Ae(e))return MT(t,e);if(e==="stack")return _T(n);if(e==="shape")return!0;const s=ST(n);return s instanceof zp?s:Bp(s,i)}function MT(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function ST(n){return(n.scale||{}).getPointPositionForValue?TT(n):ET(n)}function ET(n){const{scale:t={},fill:e}=n,i=pT(e,t);if(Ae(i)){const s=t.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function TT(n){const{scale:t,fill:e}=n,i=t.options,s=t.getLabels().length,o=i.reverse?t.max:t.min,r=mT(e,t,o),a=[];if(i.grid.circular){const l=t.getPointPositionForValue(0,o);return new zp({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<s;++l)a.push(t.getPointPositionForValue(l,r));return a}function bl(n,t,e){const i=yT(t),{chart:s,index:o,line:r,scale:a,axis:l}=t,c=r.options,h=c.fill,u=c.backgroundColor,{above:d=u,below:f=u}=h||{},m=s.getDatasetMeta(o),_=xp(s,m);i&&r.points.length&&(pa(n,e),AT(n,{line:r,target:i,above:d,below:f,area:e,scale:a,axis:l,clip:_}),ma(n))}function AT(n,t){const{line:e,target:i,above:s,below:o,area:r,scale:a,clip:l}=t,c=e._loop?"angle":t.axis;n.save();let h=o;o!==s&&(c==="x"?(Pd(n,i,r.top),yl(n,{line:e,target:i,color:s,scale:a,property:c,clip:l}),n.restore(),n.save(),Pd(n,i,r.bottom)):c==="y"&&(Dd(n,i,r.left),yl(n,{line:e,target:i,color:o,scale:a,property:c,clip:l}),n.restore(),n.save(),Dd(n,i,r.right),h=s)),yl(n,{line:e,target:i,color:h,scale:a,property:c,clip:l}),n.restore()}function Pd(n,t,e){const{segments:i,points:s}=t;let o=!0,r=!1;n.beginPath();for(const a of i){const{start:l,end:c}=a,h=s[l],u=s[va(l,c,s)];o?(n.moveTo(h.x,h.y),o=!1):(n.lineTo(h.x,e),n.lineTo(h.x,h.y)),r=!!t.pathSegment(n,a,{move:r}),r?n.closePath():n.lineTo(u.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Dd(n,t,e){const{segments:i,points:s}=t;let o=!0,r=!1;n.beginPath();for(const a of i){const{start:l,end:c}=a,h=s[l],u=s[va(l,c,s)];o?(n.moveTo(h.x,h.y),o=!1):(n.lineTo(e,h.y),n.lineTo(h.x,h.y)),r=!!t.pathSegment(n,a,{move:r}),r?n.closePath():n.lineTo(e,u.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function yl(n,t){const{line:e,target:i,property:s,color:o,scale:r,clip:a}=t,l=cT(e,i,s);for(const{source:c,target:h,start:u,end:d}of l){const{style:{backgroundColor:f=o}={}}=c,m=i!==!0;n.save(),n.fillStyle=f,wT(n,r,a,m&&Ac(s,u,d)),n.beginPath();const _=!!e.pathSegment(n,c);let p;if(m){_?n.closePath():Ld(n,i,d,s);const g=!!i.pathSegment(n,h,{move:_,reverse:!0});p=_&&g,p||Ld(n,i,u,s)}n.closePath(),n.fill(p?"evenodd":"nonzero"),n.restore()}}function wT(n,t,e,i){const s=t.chart.chartArea,{property:o,start:r,end:a}=i||{};if(o==="x"||o==="y"){let l,c,h,u;o==="x"?(l=r,c=s.top,h=a,u=s.bottom):(l=s.left,c=r,h=s.right,u=a),n.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),c=Math.max(c,e.top),u=Math.min(u,e.bottom)),n.rect(l,c,h-l,u-c),n.clip()}}function Ld(n,t,e,i){const s=t.interpolate(e,i);s&&n.lineTo(s.x,s.y)}var CT={id:"filler",afterDatasetsUpdate(n,t,e){const i=(n.data.datasets||[]).length,s=[];let o,r,a,l;for(r=0;r<i;++r)o=n.getDatasetMeta(r),a=o.dataset,l=null,a&&a.options&&a instanceof xa&&(l={visible:n.isDatasetVisible(r),index:r,fill:dT(a,r,i),chart:n,axis:o.controller.options.indexAxis,scale:o.vScale,line:a}),o.$filler=l,s.push(l);for(r=0;r<i;++r)l=s[r],!(!l||l.fill===!1)&&(l.fill=uT(s,r,e.propagate))},beforeDraw(n,t,e){const i=e.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),o=n.chartArea;for(let r=s.length-1;r>=0;--r){const a=s[r].$filler;a&&(a.line.updateControlPoints(o,a.axis),i&&a.fill&&bl(n.ctx,a,o))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const o=i[s].$filler;Rd(o)&&bl(n.ctx,o,n.chartArea)}},beforeDatasetDraw(n,t,e){const i=t.meta.$filler;!Rd(i)||e.drawTime!=="beforeDatasetDraw"||bl(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Id=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},RT=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Fd extends Mi{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=_e(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=Ve(i.font),o=s.size,r=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Id(i,o);let c,h;e.font=s.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(r,o,a,l)+10):(h=this.maxHeight,c=this._fitCols(r,s,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:o,maxWidth:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=s+a;let u=t;o.textAlign="left",o.textBaseline="middle";let d=-1,f=-h;return this.legendItems.forEach((m,_)=>{const p=i+e/2+o.measureText(m.text).width;(_===0||c[c.length-1]+p+2*a>r)&&(u+=h,c[c.length-(_>0?0:1)]=0,f+=h,d++),l[_]={left:0,top:f,row:d,width:p,height:s},c[c.length-1]+=p+a}),u}_fitCols(t,e,i,s){const{ctx:o,maxHeight:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=r-t;let u=a,d=0,f=0,m=0,_=0;return this.legendItems.forEach((p,g)=>{const{itemWidth:x,itemHeight:y}=PT(i,e,o,p,s);g>0&&f+y+2*a>h&&(u+=d+a,c.push({width:d,height:f}),m+=d+a,_++,d=f=0),l[g]={left:m,top:f,col:_,width:x,height:y},d=Math.max(d,x),f+=y+a}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:o}}=this,r=Vs(o,this.left,this.width);if(this.isHorizontal()){let a=0,l=en(i,this.left+s,this.right-this.lineWidths[a]);for(const c of e)a!==c.row&&(a=c.row,l=en(i,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+t+s,c.left=r.leftForLtr(r.x(l),c.width),l+=c.width+s}else{let a=0,l=en(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const c of e)c.col!==a&&(a=c.col,l=en(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=r.leftForLtr(r.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;pa(t,this),this._draw(),ma(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:o,labels:r}=t,a=Me.color,l=Vs(t.rtl,this.left,this.width),c=Ve(r.font),{padding:h}=r,u=c.size,d=u/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:m,boxHeight:_,itemHeight:p}=Id(r,u),g=function(A,C,v){if(isNaN(m)||m<=0||isNaN(_)||_<0)return;s.save();const E=Nt(v.lineWidth,1);if(s.fillStyle=Nt(v.fillStyle,a),s.lineCap=Nt(v.lineCap,"butt"),s.lineDashOffset=Nt(v.lineDashOffset,0),s.lineJoin=Nt(v.lineJoin,"miter"),s.lineWidth=E,s.strokeStyle=Nt(v.strokeStyle,a),s.setLineDash(Nt(v.lineDash,[])),r.usePointStyle){const V={radius:_*Math.SQRT2/2,pointStyle:v.pointStyle,rotation:v.rotation,borderWidth:E},w=l.xPlus(A,m/2),P=C+d;op(s,V,w,P,r.pointStyleWidth&&m)}else{const V=C+Math.max((u-_)/2,0),w=l.leftForLtr(A,m),P=us(v.borderRadius);s.beginPath(),Object.values(P).some(U=>U!==0)?Vo(s,{x:w,y:V,w:m,h:_,radius:P}):s.rect(w,V,m,_),s.fill(),E!==0&&s.stroke()}s.restore()},x=function(A,C,v){gs(s,v.text,A,C+p/2,c,{strikethrough:v.hidden,textAlign:l.textAlign(v.textAlign)})},y=this.isHorizontal(),M=this._computeTitleHeight();y?f={x:en(o,this.left+h,this.right-i[0]),y:this.top+h+M,line:0}:f={x:this.left+h,y:en(o,this.top+M+h,this.bottom-e[0].height),line:0},fp(this.ctx,t.textDirection);const T=p+h;this.legendItems.forEach((A,C)=>{s.strokeStyle=A.fontColor,s.fillStyle=A.fontColor;const v=s.measureText(A.text).width,E=l.textAlign(A.textAlign||(A.textAlign=r.textAlign)),V=m+d+v;let w=f.x,P=f.y;l.setWidth(this.width),y?C>0&&w+V+h>this.right&&(P=f.y+=T,f.line++,w=f.x=en(o,this.left+h,this.right-i[f.line])):C>0&&P+T>this.bottom&&(w=f.x=w+e[f.line].width+h,f.line++,P=f.y=en(o,this.top+M+h,this.bottom-e[f.line].height));const U=l.x(w);if(g(U,P,A),w=ky(E,w+m+d,y?w+V:this.right,t.rtl),x(l.x(w),P,A),y)f.x+=V+h;else if(typeof A.text!="string"){const k=c.lineHeight;f.y+=kp(A,k)+h}else f.y+=T}),pp(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=Ve(e.font),s=ln(e.padding);if(!e.display)return;const o=Vs(t.rtl,this.left,this.width),r=this.ctx,a=e.position,l=i.size/2,c=s.top+l;let h,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+c,u=en(t.align,u,this.right-d);else{const m=this.columnSizes.reduce((_,p)=>Math.max(_,p.height),0);h=c+en(t.align,this.top,this.bottom-m-t.labels.padding-this._computeTitleHeight())}const f=en(a,u,u+d);r.textAlign=o.textAlign(th(a)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=i.string,gs(r,e.text,f,h,i)}_computeTitleHeight(){const t=this.options.title,e=Ve(t.font),i=ln(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,o;if(pi(t,this.left,this.right)&&pi(e,this.top,this.bottom)){for(o=this.legendHitBoxes,i=0;i<o.length;++i)if(s=o[i],pi(t,s.left,s.left+s.width)&&pi(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!IT(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,o=RT(s,i);s&&!o&&_e(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!o&&_e(e.onHover,[t,i,this],this)}else i&&_e(e.onClick,[t,i,this],this)}}function PT(n,t,e,i,s){const o=DT(i,n,t,e),r=LT(s,i,t.lineHeight);return{itemWidth:o,itemHeight:r}}function DT(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((o,r)=>o.length>r.length?o:r)),t+e.size/2+i.measureText(s).width}function LT(n,t,e){let i=n;return typeof t.text!="string"&&(i=kp(t,e)),i}function kp(n,t){const e=n.text?n.text.length:0;return t*e}function IT(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var FT={id:"legend",_element:Fd,start(n,t,e){const i=n.legend=new Fd({ctx:n.ctx,options:e,chart:n});an.configure(n,i,e),an.addBox(n,i)},stop(n){an.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;an.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:o,useBorderRadius:r,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),h=ln(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:r&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class uh extends Mi{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=ye(i.text)?i.text.length:1;this._padding=ln(i.padding);const o=s*Ve(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:i,bottom:s,right:o,options:r}=this,a=r.align;let l=0,c,h,u;return this.isHorizontal()?(h=en(a,i,o),u=e+t,c=o-i):(r.position==="left"?(h=i+t,u=en(a,s,e),l=ie*-.5):(h=o-t,u=en(a,e,s),l=ie*.5),c=s-e),{titleX:h,titleY:u,maxWidth:c,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=Ve(e.font),o=i.lineHeight/2+this._padding.top,{titleX:r,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(o);gs(t,e.text,0,0,i,{color:e.color,maxWidth:l,rotation:c,textAlign:th(e.align),textBaseline:"middle",translation:[r,a]})}}function OT(n,t){const e=new uh({ctx:n.ctx,options:t,chart:n});an.configure(n,e,t),an.addBox(n,e),n.titleBlock=e}var NT={id:"title",_element:uh,start(n,t,e){OT(n,e)},stop(n){const t=n.titleBlock;an.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const i=n.titleBlock;an.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Fr=new WeakMap;var UT={id:"subtitle",start(n,t,e){const i=new uh({ctx:n.ctx,options:e,chart:n});an.configure(n,i,e),an.addBox(n,i),Fr.set(n,i)},stop(n){an.removeBox(n,Fr.get(n)),Fr.delete(n)},beforeUpdate(n,t,e){const i=Fr.get(n);an.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const vo={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,o=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();i.add(l.x),s+=l.y,++o}}return o===0||i.size===0?!1:{x:[...i].reduce((a,l)=>a+l)/i.size,y:s/o}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,o,r,a;for(o=0,r=n.length;o<r;++o){const l=n[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=vc(t,c);h<s&&(s=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,i=l.y}return{x:e,y:i}}};function Vn(n,t){return t&&(ye(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function li(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function BT(n,t){const{element:e,datasetIndex:i,index:s}=t,o=n.getDatasetMeta(i).controller,{label:r,value:a}=o.getLabelAndValue(s);return{chart:n,label:r,parsed:o.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:o.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function Od(n,t){const e=n.chart.ctx,{body:i,footer:s,title:o}=n,{boxWidth:r,boxHeight:a}=t,l=Ve(t.bodyFont),c=Ve(t.titleFont),h=Ve(t.footerFont),u=o.length,d=s.length,f=i.length,m=ln(t.padding);let _=m.height,p=0,g=i.reduce((M,T)=>M+T.before.length+T.lines.length+T.after.length,0);if(g+=n.beforeBody.length+n.afterBody.length,u&&(_+=u*c.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),g){const M=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;_+=f*M+(g-f)*l.lineHeight+(g-1)*t.bodySpacing}d&&(_+=t.footerMarginTop+d*h.lineHeight+(d-1)*t.footerSpacing);let x=0;const y=function(M){p=Math.max(p,e.measureText(M).width+x)};return e.save(),e.font=c.string,le(n.title,y),e.font=l.string,le(n.beforeBody.concat(n.afterBody),y),x=t.displayColors?r+2+t.boxPadding:0,le(i,M=>{le(M.before,y),le(M.lines,y),le(M.after,y)}),x=0,e.font=h.string,le(n.footer,y),e.restore(),p+=m.width,{width:p,height:_}}function zT(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function kT(n,t,e,i){const{x:s,width:o}=i,r=e.caretSize+e.caretPadding;if(n==="left"&&s+o+r>t.width||n==="right"&&s-o-r<0)return!0}function VT(n,t,e,i){const{x:s,width:o}=e,{width:r,chartArea:{left:a,right:l}}=n;let c="center";return i==="center"?c=s<=(a+l)/2?"left":"right":s<=o/2?c="left":s>=r-o/2&&(c="right"),kT(c,n,t,e)&&(c="center"),c}function Nd(n,t,e){const i=e.yAlign||t.yAlign||zT(n,e);return{xAlign:e.xAlign||t.xAlign||VT(n,t,e,i),yAlign:i}}function HT(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function GT(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function Ud(n,t,e,i){const{caretSize:s,caretPadding:o,cornerRadius:r}=n,{xAlign:a,yAlign:l}=e,c=s+o,{topLeft:h,topRight:u,bottomLeft:d,bottomRight:f}=us(r);let m=HT(t,a);const _=GT(t,l,c);return l==="center"?a==="left"?m+=c:a==="right"&&(m-=c):a==="left"?m-=Math.max(h,d)+s:a==="right"&&(m+=Math.max(u,f)+s),{x:qe(m,0,i.width-t.width),y:qe(_,0,i.height-t.height)}}function Or(n,t,e){const i=ln(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function Bd(n){return Vn([],li(n))}function WT(n,t,e){return Wi(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function zd(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const Vp={beforeTitle:ri,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:ri,beforeBody:ri,beforeLabel:ri,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return Xt(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:ri,afterBody:ri,beforeFooter:ri,footer:ri,afterFooter:ri};function pn(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?Vp[t].call(e,i):s}class kd extends Mi{static positioners=vo;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,o=new vp(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=WT(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=pn(i,"beforeTitle",this,t),o=pn(i,"title",this,t),r=pn(i,"afterTitle",this,t);let a=[];return a=Vn(a,li(s)),a=Vn(a,li(o)),a=Vn(a,li(r)),a}getBeforeBody(t,e){return Bd(pn(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return le(t,o=>{const r={before:[],lines:[],after:[]},a=zd(i,o);Vn(r.before,li(pn(a,"beforeLabel",this,o))),Vn(r.lines,pn(a,"label",this,o)),Vn(r.after,li(pn(a,"afterLabel",this,o))),s.push(r)}),s}getAfterBody(t,e){return Bd(pn(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=pn(i,"beforeFooter",this,t),o=pn(i,"footer",this,t),r=pn(i,"afterFooter",this,t);let a=[];return a=Vn(a,li(s)),a=Vn(a,li(o)),a=Vn(a,li(r)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],o=[],r=[];let a=[],l,c;for(l=0,c=e.length;l<c;++l)a.push(BT(this.chart,e[l]));return t.filter&&(a=a.filter((h,u,d)=>t.filter(h,u,d,i))),t.itemSort&&(a=a.sort((h,u)=>t.itemSort(h,u,i))),le(a,h=>{const u=zd(t.callbacks,h);s.push(pn(u,"labelColor",this,h)),o.push(pn(u,"labelPointStyle",this,h)),r.push(pn(u,"labelTextColor",this,h))}),this.labelColors=s,this.labelPointStyles=o,this.labelTextColors=r,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let o,r=[];if(!s.length)this.opacity!==0&&(o={opacity:0});else{const a=vo[i.position].call(this,s,this._eventPosition);r=this._createItems(i),this.title=this.getTitle(r,i),this.beforeBody=this.getBeforeBody(r,i),this.body=this.getBody(r,i),this.afterBody=this.getAfterBody(r,i),this.footer=this.getFooter(r,i);const l=this._size=Od(this,i),c=Object.assign({},a,l),h=Nd(this.chart,i,c),u=Ud(i,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,o={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=r,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const o=this.getCaretPosition(t,i,s);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:o}=this,{caretSize:r,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:u}=us(a),{x:d,y:f}=t,{width:m,height:_}=e;let p,g,x,y,M,T;return o==="center"?(M=f+_/2,s==="left"?(p=d,g=p-r,y=M+r,T=M-r):(p=d+m,g=p+r,y=M-r,T=M+r),x=p):(s==="left"?g=d+Math.max(l,h)+r:s==="right"?g=d+m-Math.max(c,u)-r:g=this.caretX,o==="top"?(y=f,M=y-r,p=g-r,x=g+r):(y=f+_,M=y+r,p=g+r,x=g-r),T=y),{x1:p,x2:g,x3:x,y1:y,y2:M,y3:T}}drawTitle(t,e,i){const s=this.title,o=s.length;let r,a,l;if(o){const c=Vs(i.rtl,this.x,this.width);for(t.x=Or(this,i.titleAlign,i),e.textAlign=c.textAlign(i.titleAlign),e.textBaseline="middle",r=Ve(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=r.string,l=0;l<o;++l)e.fillText(s[l],c.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+a,l+1===o&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,o){const r=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=o,h=Ve(o.bodyFont),u=Or(this,"left",o),d=s.x(u),f=l<h.lineHeight?(h.lineHeight-l)/2:0,m=e.y+f;if(o.usePointStyle){const _={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},p=s.leftForLtr(d,c)+c/2,g=m+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,yc(t,_,p,g),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,yc(t,_,p,g)}else{t.lineWidth=qt(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const _=s.leftForLtr(d,c),p=s.leftForLtr(s.xPlus(d,1),c-2),g=us(r.borderRadius);Object.values(g).some(x=>x!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,Vo(t,{x:_,y:m,w:c,h:l,radius:g}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),Vo(t,{x:p,y:m+1,w:c-2,h:l-2,radius:g}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(_,m,c,l),t.strokeRect(_,m,c,l),t.fillStyle=r.backgroundColor,t.fillRect(p,m+1,c-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:o,bodyAlign:r,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=i,u=Ve(i.bodyFont);let d=u.lineHeight,f=0;const m=Vs(i.rtl,this.x,this.width),_=function(v){e.fillText(v,m.x(t.x+f),t.y+d/2),t.y+=d+o},p=m.textAlign(r);let g,x,y,M,T,A,C;for(e.textAlign=r,e.textBaseline="middle",e.font=u.string,t.x=Or(this,p,i),e.fillStyle=i.bodyColor,le(this.beforeBody,_),f=a&&p!=="right"?r==="center"?c/2+h:c+2+h:0,M=0,A=s.length;M<A;++M){for(g=s[M],x=this.labelTextColors[M],e.fillStyle=x,le(g.before,_),y=g.lines,a&&y.length&&(this._drawColorBox(e,t,M,m,i),d=Math.max(u.lineHeight,l)),T=0,C=y.length;T<C;++T)_(y[T]),d=u.lineHeight;le(g.after,_)}f=0,d=u.lineHeight,le(this.afterBody,_),t.y-=o}drawFooter(t,e,i){const s=this.footer,o=s.length;let r,a;if(o){const l=Vs(i.rtl,this.x,this.width);for(t.x=Or(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=l.textAlign(i.footerAlign),e.textBaseline="middle",r=Ve(i.footerFont),e.fillStyle=i.footerColor,e.font=r.string,a=0;a<o;++a)e.fillText(s[a],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:o,yAlign:r}=this,{x:a,y:l}=t,{width:c,height:h}=i,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:m}=us(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+u,l),r==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+c-d,l),e.quadraticCurveTo(a+c,l,a+c,l+d),r==="center"&&o==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+c,l+h-m),e.quadraticCurveTo(a+c,l+h,a+c-m,l+h),r==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+f,l+h),e.quadraticCurveTo(a,l+h,a,l+h-f),r==="center"&&o==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,l+u),e.quadraticCurveTo(a,l,a+u,l),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,o=i&&i.y;if(s||o){const r=vo[t.position].call(this,this._active,this._eventPosition);if(!r)return;const a=this._size=Od(this,t),l=Object.assign({},r,this._size),c=Nd(e,t,l),h=Ud(t,l,c,e);(s._to!==h.x||o._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},o={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const r=ln(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(o,t,s,e),fp(t,e.textDirection),o.y+=r.top,this.drawTitle(o,t,e),this.drawBody(o,t,e),this.drawFooter(o,t,e),pp(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),o=!ta(i,s),r=this._positionChanged(s,e);(o||r)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,o=this._active||[],r=this._getActiveElements(t,o,e,i),a=this._positionChanged(r,t),l=e||!ta(r,o)||a;return l&&(this._active=r,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,i,s){const o=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,o.mode,o,i);return o.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:i,caretY:s,options:o}=this,r=vo[o.position].call(this,t,e);return r!==!1&&(i!==r.x||s!==r.y)}}var XT={id:"tooltip",_element:kd,positioners:vo,afterInit(n,t,e){e&&(n.tooltip=new kd({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Vp},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},YT=Object.freeze({__proto__:null,Colors:sT,Decimation:lT,Filler:CT,Legend:FT,SubTitle:UT,Title:NT,Tooltip:XT});const qT=(n,t,e,i)=>(typeof t=="string"?(e=n.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function jT(n,t,e,i){const s=n.indexOf(t);if(s===-1)return qT(n,t,e,i);const o=n.lastIndexOf(t);return s!==o?e:s}const $T=(n,t)=>n===null?null:qe(Math.round(n),0,t);function Vd(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class KT extends xs{static id="category";static defaults={ticks:{callback:Vd}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:s,label:o}of e)i[s]===o&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(Xt(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:jT(i,t,Nt(e,t),this._addedLabels),$T(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let o=this.getLabels();o=t===0&&e===o.length-1?o:o.slice(t,e+1),this._valueRange=Math.max(o.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let r=t;r<=e;r++)s.push({value:r});return s}getLabelForValue(t){return Vd.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function ZT(n,t){const e=[],{bounds:s,step:o,min:r,max:a,precision:l,count:c,maxTicks:h,maxDigits:u,includeBounds:d}=n,f=o||1,m=h-1,{min:_,max:p}=t,g=!Xt(r),x=!Xt(a),y=!Xt(c),M=(p-_)/(u+1);let T=Ou((p-_)/m/f)*f,A,C,v,E;if(T<1e-14&&!g&&!x)return[{value:_},{value:p}];E=Math.ceil(p/T)-Math.floor(_/T),E>m&&(T=Ou(E*T/m/f)*f),Xt(l)||(A=Math.pow(10,l),T=Math.ceil(T*A)/A),s==="ticks"?(C=Math.floor(_/T)*T,v=Math.ceil(p/T)*T):(C=_,v=p),g&&x&&o&&Iy((a-r)/o,T/1e3)?(E=Math.round(Math.min((a-r)/T,h)),T=(a-r)/E,C=r,v=a):y?(C=g?r:C,v=x?a:v,E=c-1,T=(v-C)/E):(E=(v-C)/T,Co(E,Math.round(E),T/1e3)?E=Math.round(E):E=Math.ceil(E));const V=Math.max(Nu(T),Nu(C));A=Math.pow(10,Xt(l)?V:l),C=Math.round(C*A)/A,v=Math.round(v*A)/A;let w=0;for(g&&(d&&C!==r?(e.push({value:r}),C<r&&w++,Co(Math.round((C+w*T)*A)/A,r,Hd(r,M,n))&&w++):C<r&&w++);w<E;++w){const P=Math.round((C+w*T)*A)/A;if(x&&P>a)break;e.push({value:P})}return x&&d&&v!==a?e.length&&Co(e[e.length-1].value,a,Hd(a,M,n))?e[e.length-1].value=a:e.push({value:a}):(!x||v===a)&&e.push({value:v}),e}function Hd(n,t,{horizontal:e,minRotation:i}){const s=Nn(i),o=(e?Math.sin(s):Math.cos(s))||.001,r=.75*t*(""+n).length;return Math.min(t/o,r)}class aa extends xs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Xt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:o}=this;const r=l=>s=e?s:l,a=l=>o=i?o:l;if(t){const l=$n(s),c=$n(o);l<0&&c<0?a(0):l>0&&c>0&&r(0)}if(s===o){let l=o===0?1:Math.abs(o*.05);a(o+l),t||r(s-l)}this.min=s,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},o=this._range||this,r=ZT(s,o);return t.bounds==="ticks"&&Kf(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return jo(t,this.chart.options.locale,this.options.ticks.format)}}class JT extends aa{static id="linear";static defaults={ticks:{callback:fa.formatters.numeric}};determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ae(t)?t:0,this.max=Ae(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Nn(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,o.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const Go=n=>Math.floor(Ni(n)),is=(n,t)=>Math.pow(10,Go(n)+t);function Gd(n){return n/Math.pow(10,Go(n))===1}function Wd(n,t,e){const i=Math.pow(10,e),s=Math.floor(n/i);return Math.ceil(t/i)-s}function QT(n,t){const e=t-n;let i=Go(e);for(;Wd(n,t,i)>10;)i++;for(;Wd(n,t,i)<10;)i--;return Math.min(i,Go(n))}function tA(n,{min:t,max:e}){t=yn(n.min,t);const i=[],s=Go(t);let o=QT(t,e),r=o<0?Math.pow(10,Math.abs(o)):1;const a=Math.pow(10,o),l=s>o?Math.pow(10,s):0,c=Math.round((t-l)*r)/r,h=Math.floor((t-l)/a/10)*a*10;let u=Math.floor((c-h)/Math.pow(10,o)),d=yn(n.min,Math.round((l+h+u*Math.pow(10,o))*r)/r);for(;d<e;)i.push({value:d,major:Gd(d),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(o++,u=2,r=o>=0?1:r),d=Math.round((l+h+u*Math.pow(10,o))*r)/r;const f=yn(n.max,d);return i.push({value:f,major:Gd(f),significand:u}),i}class eA extends xs{static id="logarithmic";static defaults={ticks:{callback:fa.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=aa.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return Ae(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ae(t)?Math.max(0,t):null,this.max=Ae(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Ae(this._userMin)&&(this.min=t===is(this.min,0)?is(this.min,-1):is(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const o=a=>i=t?i:a,r=a=>s=e?s:a;i===s&&(i<=0?(o(1),r(10)):(o(is(i,-1)),r(is(s,1)))),i<=0&&o(is(s,-1)),s<=0&&r(is(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},i=tA(e,this);return t.bounds==="ticks"&&Kf(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":jo(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Ni(t),this._valueRange=Ni(this.max)-Ni(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Ni(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function wc(n){const t=n.ticks;if(t.display&&n.display){const e=ln(t.backdropPadding);return Nt(t.font&&t.font.size,Me.font.size)+e.height}return 0}function nA(n,t,e){return e=ye(e)?e:[e],{w:Ky(n,t.string,e),h:e.length*t.lineHeight}}function Xd(n,t,e,i,s){return n===i||n===s?{start:t-e/2,end:t+e/2}:n<i||n>s?{start:t-e,end:t}:{start:t,end:t+e}}function iA(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),i=[],s=[],o=n._pointLabels.length,r=n.options.pointLabels,a=r.centerPointLabels?ie/o:0;for(let l=0;l<o;l++){const c=r.setContext(n.getPointLabelContext(l));s[l]=c.padding;const h=n.getPointPosition(l,n.drawingArea+s[l],a),u=Ve(c.font),d=nA(n.ctx,u,n._pointLabels[l]);i[l]=d;const f=nn(n.getIndexAngle(l)+a),m=Math.round(Jc(f)),_=Xd(m,h.x,d.w,0,180),p=Xd(m,h.y,d.h,90,270);sA(e,t,f,_,p)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=aA(n,i,s)}function sA(n,t,e,i,s){const o=Math.abs(Math.sin(e)),r=Math.abs(Math.cos(e));let a=0,l=0;i.start<t.l?(a=(t.l-i.start)/o,n.l=Math.min(n.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/o,n.r=Math.max(n.r,t.r+a)),s.start<t.t?(l=(t.t-s.start)/r,n.t=Math.min(n.t,t.t-l)):s.end>t.b&&(l=(s.end-t.b)/r,n.b=Math.max(n.b,t.b+l))}function oA(n,t,e){const i=n.drawingArea,{extra:s,additionalAngle:o,padding:r,size:a}=e,l=n.getPointPosition(t,i+s+r,o),c=Math.round(Jc(nn(l.angle+Pe))),h=hA(l.y,a.h,c),u=lA(c),d=cA(l.x,a.w,u);return{visible:!0,x:l.x,y:h,textAlign:u,left:d,top:h,right:d+a.w,bottom:h+a.h}}function rA(n,t){if(!t)return!0;const{left:e,top:i,right:s,bottom:o}=n;return!(gi({x:e,y:i},t)||gi({x:e,y:o},t)||gi({x:s,y:i},t)||gi({x:s,y:o},t))}function aA(n,t,e){const i=[],s=n._pointLabels.length,o=n.options,{centerPointLabels:r,display:a}=o.pointLabels,l={extra:wc(o)/2,additionalAngle:r?ie/s:0};let c;for(let h=0;h<s;h++){l.padding=e[h],l.size=t[h];const u=oA(n,h,l);i.push(u),a==="auto"&&(u.visible=rA(u,c),u.visible&&(c=u))}return i}function lA(n){return n===0||n===180?"center":n<180?"left":"right"}function cA(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function hA(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function uA(n,t,e){const{left:i,top:s,right:o,bottom:r}=e,{backdropColor:a}=t;if(!Xt(a)){const l=us(t.borderRadius),c=ln(t.backdropPadding);n.fillStyle=a;const h=i-c.left,u=s-c.top,d=o-i+c.width,f=r-s+c.height;Object.values(l).some(m=>m!==0)?(n.beginPath(),Vo(n,{x:h,y:u,w:d,h:f,radius:l}),n.fill()):n.fillRect(h,u,d,f)}}function dA(n,t){const{ctx:e,options:{pointLabels:i}}=n;for(let s=t-1;s>=0;s--){const o=n._pointLabelItems[s];if(!o.visible)continue;const r=i.setContext(n.getPointLabelContext(s));uA(e,r,o);const a=Ve(r.font),{x:l,y:c,textAlign:h}=o;gs(e,n._pointLabels[s],l,c+a.lineHeight/2,a,{color:r.color,textAlign:h,textBaseline:"middle"})}}function Hp(n,t,e,i){const{ctx:s}=n;if(e)s.arc(n.xCenter,n.yCenter,t,0,ve);else{let o=n.getPointPosition(0,t);s.moveTo(o.x,o.y);for(let r=1;r<i;r++)o=n.getPointPosition(r,t),s.lineTo(o.x,o.y)}}function fA(n,t,e,i,s){const o=n.ctx,r=t.circular,{color:a,lineWidth:l}=t;!r&&!i||!a||!l||e<0||(o.save(),o.strokeStyle=a,o.lineWidth=l,o.setLineDash(s.dash||[]),o.lineDashOffset=s.dashOffset,o.beginPath(),Hp(n,e,r,i),o.closePath(),o.stroke(),o.restore())}function pA(n,t,e){return Wi(n,{label:e,index:t,type:"pointLabel"})}class mA extends aa{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:fa.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ln(wc(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Ae(t)&&!isNaN(t)?t:0,this.max=Ae(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/wc(this.options))}generateTickLabels(t){aa.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{const s=_e(this.options.pointLabels.callback,[e,i],this);return s||s===0?s:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?iA(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){const e=ve/(this._pointLabels.length||1),i=this.options.startAngle||0;return nn(t*e+Nn(i))}getDistanceFromCenterForValue(t){if(Xt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(Xt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return pA(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-Pe+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:o}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Hp(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:o}=e,r=this._pointLabels.length;let a,l,c;if(e.pointLabels.display&&dA(this,r),s.display&&this.ticks.forEach((h,u)=>{if(u!==0||u===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const d=this.getContext(u),f=s.setContext(d),m=o.setContext(d);fA(this,f,l,r,m)}}),i.display){for(t.save(),a=r-1;a>=0;a--){const h=i.setContext(this.getPointLabelContext(a)),{color:u,lineWidth:d}=h;!d||!u||(t.lineWidth=d,t.strokeStyle=u,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let o,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;const c=i.setContext(this.getContext(l)),h=Ve(c.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=h.string,r=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const u=ln(c.backdropPadding);t.fillRect(-r/2-u.left,-o-h.size/2-u.top,r+u.width,h.size+u.height)}gs(t,a.label,0,-o,h,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}const ba={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},mn=Object.keys(ba);function Yd(n,t){return n-t}function qd(n,t){if(Xt(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:o}=n._parseOpts;let r=t;return typeof i=="function"&&(r=i(r)),Ae(r)||(r=typeof i=="string"?e.parse(r,i):e.parse(r)),r===null?null:(s&&(r=s==="week"&&(js(o)||o===!0)?e.startOf(r,"isoWeek",o):e.startOf(r,s)),+r)}function jd(n,t,e,i){const s=mn.length;for(let o=mn.indexOf(n);o<s-1;++o){const r=ba[mn[o]],a=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((e-t)/(a*r.size))<=i)return mn[o]}return mn[s-1]}function gA(n,t,e,i,s){for(let o=mn.length-1;o>=mn.indexOf(e);o--){const r=mn[o];if(ba[r].common&&n._adapter.diff(s,i,r)>=t-1)return r}return mn[e?mn.indexOf(e):0]}function _A(n){for(let t=mn.indexOf(n)+1,e=mn.length;t<e;++t)if(ba[mn[t]].common)return mn[t]}function $d(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=Qc(e,t),o=e[i]>=t?e[i]:e[s];n[o]=!0}}function xA(n,t,e,i){const s=n._adapter,o=+s.startOf(t[0].value,i),r=t[t.length-1].value;let a,l;for(a=o;a<=r;a=+s.add(a,1,i))l=e[a],l>=0&&(t[l].major=!0);return t}function Kd(n,t,e){const i=[],s={},o=t.length;let r,a;for(r=0;r<o;++r)a=t[r],s[a]=r,i.push({value:a,major:!1});return o===0||!e?i:xA(n,i,s,e)}class Cc extends xs{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new vS._date(t.adapters.date);s.init(e),wo(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:qd(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:o,minDefined:r,maxDefined:a}=this.getUserBounds();function l(c){!r&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!r||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Ae(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),o=Ae(o)&&!isNaN(o)?o:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,o-1),this.max=Math.max(s+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const o=this.min,r=this.max,a=Uy(s,o,r);return this._unit=e.unit||(i.autoSkip?jd(e.minUnit,this.min,this.max,this._getLabelCapacity(o)):gA(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:_A(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),Kd(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,o;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?i=o:i=(o-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;e=qe(e,0,r),i=qe(i,0,r),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,o=s.time,r=o.unit||jd(o.minUnit,e,i,this._getLabelCapacity(e)),a=Nt(s.ticks.stepSize,1),l=r==="week"?o.isoWeekday:!1,c=js(l)||l===!0,h={};let u=e,d,f;if(c&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,c?"day":r),t.diff(i,e,r)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+r);const m=s.ticks.source==="data"&&this.getDataTimestamps();for(d=u,f=0;d<i;d=+t.add(d,a,r),f++)$d(h,d,m);return(d===i||s.bounds==="ticks"||f===1)&&$d(h,d,m),Object.keys(h).sort(Yd).map(_=>+_)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,o=this._unit,r=e||s[o];return this._adapter.format(t,r)}_tickFormatFunction(t,e,i,s){const o=this.options,r=o.ticks.callback;if(r)return _e(r,[t,e,i],this);const a=o.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],u=c&&a[c],d=i[e],f=c&&u&&d&&d.major;return this._adapter.format(t,s||(f?u:h))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=Nn(this.isHorizontal()?e.maxRotation:e.minRotation),o=Math.cos(s),r=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*o+a*r,h:i*r+a*o}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,o=this._tickFormatFunction(t,0,Kd(this,[t],this._majorUnit),s),r=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(qd(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Qf(t.sort(Yd))}}function Nr(n,t,e){let i=0,s=n.length-1,o,r,a,l;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=mi(n,"pos",t)),{pos:o,time:a}=n[i],{pos:r,time:l}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=mi(n,"time",t)),{time:o,pos:a}=n[i],{time:r,pos:l}=n[s]);const c=r-o;return c?a+(l-a)*(t-o)/c:a}class vA extends Cc{static id="timeseries";static defaults=Cc.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Nr(e,this.min),this._tableRange=Nr(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],o=[];let r,a,l,c,h;for(r=0,a=t.length;r<a;++r)c=t[r],c>=e&&c<=i&&s.push(c);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(r=0,a=s.length;r<a;++r)h=s[r+1],l=s[r-1],c=s[r],Math.round((h+l)/2)!==c&&o.push({time:c,pos:r/(a-1)});return o}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,o)=>s-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Nr(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Nr(this._table,i*this._tableRange+this._minPos,!0)}}var bA=Object.freeze({__proto__:null,CategoryScale:KT,LinearScale:JT,LogarithmicScale:eA,RadialLinearScale:mA,TimeScale:Cc,TimeSeriesScale:vA});const yA=[xS,ZE,YT,bA];hh.register(...yA);const Ur=["#58a6ff","#3fb950","#d29922","#f85149","#a371f7"];class MA{chart;maxDataPoints=500;times=[];datasets={};startTime;constructor(t){this.startTime=Date.now(),this.chart=new hh(t,{type:"line",data:{labels:this.times,datasets:[]},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,plugins:{legend:{display:!0,position:"top",labels:{color:"#8b949e",font:{size:10,family:"Inter"},boxWidth:12,padding:8}}},scales:{x:{grid:{color:"rgba(139, 148, 158, 0.1)"},ticks:{color:"#8b949e"}},"y-degrees":{type:"linear",position:"left",title:{display:!0,text:"Degrees (°)",color:"#8b949e"},grid:{color:"rgba(139, 148, 158, 0.1)"},ticks:{color:"#8b949e"}},"y-mm":{type:"linear",position:"right",title:{display:!0,text:"Travel (mm)",color:"#8b949e"},grid:{drawOnChartArea:!1},ticks:{color:"#8b949e"}},"y-ratio":{type:"linear",position:"right",title:{display:!0,text:"Ratio",color:"#8b949e"},grid:{drawOnChartArea:!1},ticks:{color:"#8b949e"}},"y-rate":{type:"linear",position:"right",display:!1}}}})}addDataset(t){this.datasets[t]={values:[]};const e=Object.keys(this.datasets).length-1;let i="y-degrees";t.toLowerCase().includes("compression")&&(i="y-mm"),t.toLowerCase().includes("ratio")&&(i="y-ratio"),t.toLowerCase().includes("rate")&&(i="y-rate"),this.chart.data.datasets.push({label:t,data:this.datasets[t].values,yAxisID:i,borderColor:Ur[e%Ur.length],backgroundColor:Ur[e%Ur.length]+"20",borderWidth:1.5,tension:.3,pointRadius:0,fill:!1})}addValue(t,e){this.datasets[t].values.push(e),this.datasets[t].values.length>this.maxDataPoints&&this.datasets[t].values.shift()}update(){this.times.push(Math.round((Date.now()-this.startTime)/100)/10),this.times.length>this.maxDataPoints&&this.times.shift(),this.chart.update("none")}}function SA(n){const t=n.rcHeight+(n.rcHeight-n.contactPatchZ)/Math.sqrt(n.contactPatchX**2+(n.contactPatchZ-n.rcHeight)**2)*n.distanceRCtoIC;let e=-99999;if(n.mode==="anti-dive"){const _=n.targetAntiDive/100;_>0&&(_*(n.cgHeight/n.wheelbase)/n.brakeBias,e=(n.rcHeight-n.contactPatchZ)/Math.sqrt(n.contactPatchX**2+(n.contactPatchZ-n.rcHeight)**2)*n.distanceRCtoIC)}else{const _=n.targetAntiSquat/100;_>0&&(_*(n.cgHeight/n.wheelbase)/n.driveBias,e=(n.rcHeight-n.contactPatchZ)/Math.sqrt(n.contactPatchX**2+(n.contactPatchZ-n.rcHeight)**2)*n.distanceRCtoIC)}const i=(n.uprightUpperJoint.z-t)/(n.uprightUpperJoint.x-e),s=(n.uprightLowerJoint.z-t)/(n.uprightLowerJoint.x-e),o=n.spanUpperFront,r=-n.spanUpperRear,a=n.spanLowerFront,l=-n.spanLowerRear,c=n.uprightUpperJoint.z+i*(o-n.uprightUpperJoint.x),h=n.uprightUpperJoint.z+i*(r-n.uprightUpperJoint.x),u=n.uprightLowerJoint.z+s*(a-n.uprightLowerJoint.x),d=n.uprightLowerJoint.z+s*(l-n.uprightLowerJoint.x),f=(n.uprightTieRodJoint.z-t)/(n.uprightTieRodJoint.x-e),m=n.uprightTieRodJoint.z+f*(n.tieRodInnerX-n.uprightTieRodJoint.x);return{svicX:e,svicZ:t,upperArmSlope:i,lowerArmSlope:s,chassisUpperFront:{x:o,y:n.yChassisUpper,z:c},chassisUpperRear:{x:r,y:n.yChassisUpper,z:h},chassisLowerFront:{x:a,y:n.yChassisLower,z:u},chassisLowerRear:{x:l,y:n.yChassisLower,z:d},tieRodInnerX:n.tieRodInnerX,tieRodInnerZ:m}}function EA(n,t,e,i,s,o,r){function a(w,P){return{x:w.x-P.x,y:w.y-P.y,z:w.z-P.z}}function l(w,P){return{x:w.x+P.x,y:w.y+P.y,z:w.z+P.z}}function c(w,P){return{x:w.y*P.z-w.z*P.y,y:w.z*P.x-w.x*P.z,z:w.x*P.y-w.y*P.x}}function h(w,P){return w.x*P.x+w.y*P.y+w.z*P.z}function u(w){return Math.sqrt(w.x*w.x+w.y*w.y+w.z*w.z)}function d(w,P){return{x:w.x*P,y:w.y*P,z:w.z*P}}function f(w){const P=u(w);return P===0?w:d(w,1/P)}const m=a(s,e),_=a(i,e);let p=c(m,_);u(p)<1e-6&&(p={x:1,y:0,z:0}),p=f(p);const g=a(t,n),x=a(e,n),y=h(g,p);let M=.5;Math.abs(y)>1e-4&&(M=h(x,p)/y),M=Math.max(0,Math.min(1,M));const T=l(n,d(g,M)),A=f(a(s,i)),C=u(c(_,A));let v={...o},E=1;for(let w=0;w<25;w++){const P=a(v,T),U=f(P);let k=Math.abs(U.z);k<.05&&(k=.05);let D=E*.5+k*.5;w===0&&(D=k),E=D;const N=C*D/r,I=a(T,e),K=u(I);if(K<1e-4)break;let X;if(K<=N)X=l(e,d(f(I),N));else{const J=Math.max(-1,Math.min(1,N/K)),nt=Math.acos(J),et=f(I),mt=c(p,et),It=l(d(et,Math.cos(nt)),d(mt,Math.sin(nt))),jt=l(d(et,Math.cos(-nt)),d(mt,Math.sin(-nt))),Y=l(e,d(It,N)),it=l(e,d(jt,N)),rt=u(a(Y,v)),Ut=u(a(it,v));X=rt<Ut?Y:it}v=l(d(v,.4),d(X,.6))}const V=l(e,d(p,.5));return{uprightPoint:T,rockerPoint:v,rockerAxisPoint:V,currentMR:r}}function tn(n,t){return Math.sqrt((n.x-t.x)**2+(n.y-t.y)**2+(n.z-t.z)**2)}function Ie(n,t,e){const i=t.x-n.x,s=t.y-n.y,o=t.z-n.z,r=Math.sqrt(i*i+s*s+o*o);if(r===0)return[{...n},{...t}];const a=(r-e)/r,l=i*.5*a,c=s*.5*a,h=o*.5*a;return[{x:n.x+l,y:n.y+c,z:n.z+h},{x:t.x-l,y:t.y-c,z:t.z-h}]}function kn(n,t,e){const i=n.x-t.x,s=n.y-t.y,o=n.z-t.z,r=Math.sqrt(i*i+s*s+o*o);if(r===0)return{...n};const a=e/r;return{x:t.x+i*a,y:t.y+s*a,z:t.z+o*a}}function TA(n){const t=n.heaveRange,e={x:n.staticWheelCenter.x+1,y:n.staticWheelCenter.y,z:n.staticWheelCenter.z},i=tn(n.uprightUpperJoint,n.uprightLowerJoint),s=tn(n.uprightUpperJoint,n.tieRodOuter),o=tn(n.uprightUpperJoint,n.staticWheelCenter),r=tn(n.uprightUpperJoint,e),a=tn(n.uprightLowerJoint,n.tieRodOuter),l=tn(n.uprightLowerJoint,n.staticWheelCenter),c=tn(n.uprightLowerJoint,e),h=tn(n.tieRodOuter,n.staticWheelCenter),u=tn(n.tieRodOuter,e),d=tn(n.staticWheelCenter,e),f=tn(n.uprightUpperJoint,n.chassisUpperFront),m=tn(n.uprightUpperJoint,n.chassisUpperRear),_=tn(n.uprightLowerJoint,n.chassisLowerFront),p=tn(n.uprightLowerJoint,n.chassisLowerRear);function g(P){const U=tn(P,n.tieRodOuter),k=[],N=t*2/10;for(let X=-t;X<=t;X+=N){let J={...n.uprightUpperJoint};J.z+=X;let nt={...n.uprightLowerJoint};nt.z+=X;let et={...n.tieRodOuter};et.z+=X;let mt={...n.staticWheelCenter};mt.z+=X;let It={...e};It.z+=X;for(let Y=0;Y<60;Y++)J=kn(J,n.chassisUpperFront,f),J=kn(J,n.chassisUpperRear,m),nt=kn(nt,n.chassisLowerFront,_),nt=kn(nt,n.chassisLowerRear,p),et=kn(et,P,U),mt.z=n.staticWheelCenter.z+X,[J,nt]=Ie(J,nt,i),[J,et]=Ie(J,et,s),[J,mt]=Ie(J,mt,o),[J,It]=Ie(J,It,r),[nt,et]=Ie(nt,et,a),[nt,mt]=Ie(nt,mt,l),[nt,It]=Ie(nt,It,c),[et,mt]=Ie(et,mt,h),[et,It]=Ie(et,It,u),[mt,It]=Ie(mt,It,d);const jt=Math.atan2(It.y-mt.y,It.x-mt.x)*(180/Math.PI);k.push(jt)}const I=Math.max(...k)-Math.min(...k),K=Math.sqrt(k.reduce((X,J)=>X+(J-k[0])**2,0)/k.length);return I*100+K*10}const x=[];for(let P of[-1,0,1])for(let U of[-1,0,1])for(let k of[-1,0,1]){if(P===0&&U===0&&k===0)continue;const D=Math.sqrt(P*P+U*U+k*k);x.push({x:P/D,y:U/D,z:k/D})}let y={x:n.chassisLowerFront.x,y:n.chassisLowerFront.y,z:n.tieRodOuter.z},M=g(y),T=.05;const A=1e-4,C=5e3;for(let P=0;P<C&&!(T<A);P++){let U=M,k={...y},D=!1;for(const N of x){const I={x:y.x+N.x*T,y:y.y+N.y*T,z:y.z+N.z*T},K=g(I);K<U&&(U=K,k=I,D=!0)}D&&U<M?(y={...k},M=U,T*=1.1):T*=.5}const v=[],E=tn(y,n.tieRodOuter),w=t*2/30;for(let P=-t;P<=t;P+=w){let U={...n.uprightUpperJoint};U.z+=P;let k={...n.uprightLowerJoint};k.z+=P;let D={...n.tieRodOuter};D.z+=P;let N={...n.staticWheelCenter};N.z+=P;let I={...e};I.z+=P;for(let X=0;X<60;X++)U=kn(U,n.chassisUpperFront,f),U=kn(U,n.chassisUpperRear,m),k=kn(k,n.chassisLowerFront,_),k=kn(k,n.chassisLowerRear,p),D=kn(D,y,E),N.z=n.staticWheelCenter.z+P,[U,k]=Ie(U,k,i),[U,D]=Ie(U,D,s),[U,N]=Ie(U,N,o),[U,I]=Ie(U,I,r),[k,D]=Ie(k,D,a),[k,N]=Ie(k,N,l),[k,I]=Ie(k,I,c),[D,N]=Ie(D,N,h),[D,I]=Ie(D,I,u),[N,I]=Ie(N,I,d);const K=Math.atan2(I.y-N.y,I.x-N.x)*(180/Math.PI);v.push(K)}return{optimizedTieRodInner:y,toeVariation:Math.max(...v)-Math.min(...v),toeValues:v}}const Gp=document.getElementById("app");if(!Gp)throw new Error("No #app element");const Kt=new Qb(Gp);Kt.getVectorPanel();const vt=Kt.addPoint(5/100,580.16/100,112.65/100,"O"),Ct=Kt.addPoint(-6.5/100,566.138/100,274.6/100,"E"),Oe=Kt.addPoint(160/100,100/100,108.075/100,"A"),Ne=Kt.addPoint(-40/100,100/100,108.075/100,"B"),Ue=Kt.addPoint(-120/100,245/100,226.292/100,"C"),Be=Kt.addPoint(120/100,245/100,274.719/100,"D"),Yt=Kt.addPoint(67.176/100,576.546/100,223.748/100,"F"),ze=Kt.addPoint(0,145.01/100,185.65/100,"T"),te=Kt.addPoint(-4.993/100,526.45/100,298.85/100,"H"),ce=Kt.addPoint(-33.835/100,80/100,663.5/100,"I"),sn=Kt.addPoint(65/100,132.3/100,546.43/100,"J"),be=Kt.addPoint(65/100,168.74/100,591.02/100,"K"),on=Kt.addPoint(235/100,80/100,663.5/100,"L"),xe=Kt.addPoint(65/100,80/100,663.5/100,"M"),Wp=3.2;let bo=!0;Kt.createWheel(vt.position.toVector3(),Wp);const Zd=document.getElementById("btn-stop-time");document.getElementById("btn-stop-camera");const Jd=document.getElementById("btn-toggle-chart"),Qd=document.getElementById("btn-toggle-wheel");let tf=0,Hs=!1;Zd?.addEventListener("click",()=>{Hs=!Hs,Zd.textContent=Hs?"Resume":"Pause"});let Br=!0;Jd?.addEventListener("click",()=>{Br=!Br;const n=document.getElementById("chart-container");n&&(n.style.display=Br?"block":"none"),Jd.textContent=Br?"Hide Chart":"Show Chart"});Qd?.addEventListener("click",()=>{bo=!bo,Kt.setWheelVisible(bo),Qd.textContent=bo?"Hide Wheel":"Show Wheel"});function AA(){return new Ii(be.position.x-sn.position.x,be.position.y-sn.position.y,be.position.z-sn.position.z).normalize()}const ci={contactPatch:{},rollCenter:{y:.5},distRCtoIC:.8,xChassisUpper:-.3,xChassisLower:-.3};Kt.addLine(new un(vt.index,Ne.index));Kt.addLine(new un(Oe.index,vt.index));Kt.addLine(new un(Ue.index,Ct.index));Kt.addLine(new un(Be.index,Ct.index));Kt.addLine(new un(vt.index,Ct.index));Kt.addLine(new un(Yt.index,ze.index));Kt.addLine(new un(vt.index,Yt.index));Kt.addLine(new un(Ct.index,Yt.index));Kt.addLine(new un(vt.index,te.index));Kt.addLine(new un(Ct.index,te.index));Kt.addLine(new un(te.index,ce.index));Kt.addLine(new un(ce.index,be.index));Kt.addLine(new un(sn.index,be.index));Kt.addLine(new un(xe.index,be.index));Kt.addLine(new un(on.index,xe.index));const wA=8e4;function Jt(n,t){const e=t.x-n.x,i=t.y-n.y,s=t.z-n.z;return Math.sqrt(e*e+i*i+s*s)}const Pt={Lf:{...Oe.position},Lr:{...Ne.position},Uf:{...Ue.position},Ur:{...Be.position},Tc:{...ze.position},Ic:{...ce.position},Hc:{...te.position},Jc:{...sn.position},Kc:{...be.position},Lc:{...on.position},Mc:{...xe.position},lowerFront:Jt(Oe.position,vt.position),lowerRear:Jt(Ne.position,vt.position),upperFront:Jt(Ue.position,Ct.position),upperRear:Jt(Be.position,Ct.position),upright:Jt(vt.position,Ct.position),tie:Jt(Yt.position,ze.position),F_relative_to_O:Jt(Yt.position,vt.position),F_relative_to_E:Jt(Yt.position,Ct.position),pushrod:Jt(te.position,ce.position),H_relative_to_O:Jt(te.position,vt.position),H_relative_to_E:Jt(te.position,Ct.position),H_relative_to_F:Jt(te.position,Yt.position),rockerPushrod:Jt(ce.position,be.position),rockerBase:Jt(be.position,xe.position),rockerDamper:Jt(ce.position,xe.position)};function yo(){Pt.Lf={...Oe.position},Pt.Lr={...Ne.position},Pt.Uf={...Ue.position},Pt.Ur={...Be.position},Pt.Tc={...ze.position},Pt.Ic={...ce.position},Pt.Hc={...te.position},Pt.Jc={...sn.position},Pt.Kc={...be.position},Pt.Lc={...on.position},Pt.Mc={...xe.position},Pt.lowerFront=Jt(Oe.position,vt.position),Pt.lowerRear=Jt(Ne.position,vt.position),Pt.upperFront=Jt(Ue.position,Ct.position),Pt.upperRear=Jt(Be.position,Ct.position),Pt.upright=Jt(vt.position,Ct.position),Pt.tie=Jt(Yt.position,ze.position),Pt.F_relative_to_O=Jt(Yt.position,vt.position),Pt.F_relative_to_E=Jt(Yt.position,Ct.position),Pt.pushrod=Jt(te.position,ce.position),Pt.H_relative_to_O=Jt(te.position,vt.position),Pt.H_relative_to_E=Jt(te.position,Ct.position),Pt.H_relative_to_F=Jt(te.position,Yt.position),Pt.rockerPushrod=Jt(ce.position,be.position),Pt.rockerBase=Jt(be.position,xe.position),Pt.rockerDamper=Jt(ce.position,xe.position)}let di={...vt.position},Do={...Ct.position},Lo={...Yt.position},Xp=Math.atan2(Do.y-di.y,Do.z-di.z)*(180/Math.PI),Yp=Math.atan2(Lo.y-di.y,Lo.x-di.x)*(180/Math.PI);const ke={O:{...vt.position},E:{...Ct.position},F:{...Yt.position},H:{...te.position},I:{...ce.position},M:{...xe.position}};function rs(){Object.assign(vt.position,ke.O),Object.assign(Ct.position,ke.E),Object.assign(Yt.position,ke.F),Object.assign(te.position,ke.H),Object.assign(ce.position,ke.I),Object.assign(xe.position,ke.M)}function Mo(){ke.O={...vt.position},ke.E={...Ct.position},ke.F={...Yt.position},ke.H={...te.position},ke.I={...ce.position},ke.M={...xe.position},di={...vt.position},Do={...Ct.position},Lo={...Yt.position},Xp=Math.atan2(Do.y-di.y,Do.z-di.z)*(180/Math.PI),Yp=Math.atan2(Lo.y-di.y,Lo.x-di.x)*(180/Math.PI)}(vt.position.z+Ct.position.z)*.5;let qp=Jt(on.position,xe.position),ef=0,fo=0;function CA(n){Object.assign(Oe.position,Pt.Lf),Object.assign(Ne.position,Pt.Lr),Object.assign(Ue.position,Pt.Uf),Object.assign(Be.position,Pt.Ur),Object.assign(ze.position,Pt.Tc),Object.assign(sn.position,Pt.Jc),Object.assign(be.position,Pt.Kc),Object.assign(on.position,Pt.Lc),vt.position.z=ke.O.z+n,Ct.position.z=ke.E.z+n,Yt.position.z=ke.F.z+n,te.position.z=ke.H.z+n;for(let t=0;t<120;t++){Tn(Oe.position,vt.position,Pt.lowerFront),Tn(Ne.position,vt.position,Pt.lowerRear),Tn(Ue.position,Ct.position,Pt.upperFront),Tn(Be.position,Ct.position,Pt.upperRear),Tn(ze.position,Yt.position,Pt.tie),Ml(te.position,ce.position,Pt.pushrod),Tn(be.position,ce.position,Pt.rockerPushrod),Tn(be.position,xe.position,Pt.rockerBase),Ml(ce.position,xe.position,Pt.rockerDamper);const e=AA();nf(ce.position,ke.I,e),nf(xe.position,ke.M,e),Ml(vt.position,Ct.position,Pt.upright),Tn(vt.position,Yt.position,Pt.F_relative_to_O),Tn(Ct.position,Yt.position,Pt.F_relative_to_E),Tn(vt.position,te.position,Pt.H_relative_to_O),Tn(Ct.position,te.position,Pt.H_relative_to_E),Tn(Yt.position,te.position,Pt.H_relative_to_F),vt.position.z=ke.O.z+n}}function Ml(n,t,e){const i=t.x-n.x,s=t.y-n.y,o=t.z-n.z,r=Math.sqrt(i*i+s*s+o*o);if(r===0)return;const a=(r-e)*.5,l=i/r,c=s/r,h=o/r;n.x+=l*a,n.y+=c*a,n.z+=h*a,t.x-=l*a,t.y-=c*a,t.z-=h*a}function Tn(n,t,e){const i=t.x-n.x,s=t.y-n.y,o=t.z-n.z,r=Math.sqrt(i*i+s*s+o*o);if(r===0)return;const a=r-e,l=i/r,c=s/r,h=o/r;t.x-=l*a,t.y-=c*a,t.z-=h*a}function nf(n,t,e){const i=n.x-t.x,s=n.y-t.y,o=n.z-t.z,r=i*e.x+s*e.y+o*e.z;n.x-=r*e.x,n.y-=r*e.y,n.z-=r*e.z}const RA=document.getElementById("speed-chart"),In=new MA(RA);In.addDataset("Camber Gain");In.addDataset("Toe Change");In.addDataset("Damper compression");In.addDataset("Motion ratio");In.addDataset("Wheel rate");const sf=[{point:vt,name:"O (Upright Lower)"},{point:Ct,name:"E (Upright Upper)"},{point:Oe,name:"A (Lower Front)"},{point:Ne,name:"B (Lower Rear)"},{point:Ue,name:"C (Upper Front)"},{point:Be,name:"D (Upper Rear)"},{point:Yt,name:"F (Tie Rod Hub)"},{point:ze,name:"T (Tie Rod Chassis)"},{point:te,name:"H (Pushrod Hub)"},{point:ce,name:"I (Pushrod Rocker)"},{point:sn,name:"J (Rocker Axis)"},{point:be,name:"K (Rocker Pivot)"},{point:on,name:"L (Damper Chassis)"},{point:xe,name:"M (Damper Rocker)"}];function So(){const n=document.querySelector("#values-table tbody");n.innerHTML="",sf.forEach(i=>{const s=document.createElement("tr"),o=i.name.split(" ")[0];s.innerHTML=`
            <td><span class="point-name">${o}</span><span class="point-desc">${i.name.split("(")[1]?.replace(")","")||""}</span></td>
            <td>
                <div style="display: flex; gap: 4px; align-items: center; margin-bottom: 2px;">
                    <span style="color: var(--text-muted); font-size: 10px; width: 12px;">X</span>
                    <input type="number" step="0.001" data-point="${i.name}" data-coord="x" value="${(i.point.position.x*100).toFixed(2)}">
                </div>
                <div style="display: flex; gap: 4px; align-items: center; margin-bottom: 2px;">
                    <span style="color: var(--text-muted); font-size: 10px; width: 12px;">Y</span>
                    <input type="number" step="0.001" data-point="${i.name}" data-coord="y" value="${(i.point.position.y*100).toFixed(2)}">
                </div>
                <div style="display: flex; gap: 4px; align-items: center;">
                    <span style="color: var(--text-muted); font-size: 10px; width: 12px;">Z</span>
                    <input type="number" step="0.001" data-point="${i.name}" data-coord="z" value="${(i.point.position.z*100).toFixed(2)}">
                </div>
            </td>
        `,n.appendChild(s)});const t=document.createElement("tr");t.innerHTML='<td colspan="2" style="padding: 10px 4px; background: var(--bg-tertiary); font-weight: 600; color: var(--text-secondary); font-size: 10px; text-transform: uppercase; letter-spacing: 0.3px;">Front View (2D)</td>',n.appendChild(t);const e=[{key:"rollCenterY",label:"Roll Center Y",get:()=>ci.rollCenter.y,set:i=>{ci.rollCenter.y=i}},{key:"distRCtoIC",label:"RC to IC Distance",get:()=>ci.distRCtoIC,set:i=>{ci.distRCtoIC=i}},{key:"xChassisUpper",label:"Chassis Upper X",get:()=>ci.xChassisUpper,set:i=>{ci.xChassisUpper=i}},{key:"xChassisLower",label:"Chassis Lower X",get:()=>ci.xChassisLower,set:i=>{ci.xChassisLower=i}}];e.forEach(i=>{const s=document.createElement("tr");s.innerHTML=`<td style="color: var(--text-secondary);">${i.label}</td><td><input type="number" step="0.01" data-front="${i.key}" value="${i.get().toFixed(3)}"></td>`,n.appendChild(s)}),n.querySelectorAll("input").forEach(i=>{i.addEventListener("change",s=>{const o=s.target;if(o.dataset.point){const r=o.dataset.coord,a=parseFloat(o.value)/100,l=sf.find(c=>c.name===o.dataset.point);l&&(rs(),l.point.position[r]=a,yo(),Mo(),(vt.position.z+Ct.position.z)*.5,qp=Jt(on.position,xe.position))}if(o.dataset.front){const r=e.find(a=>a.key===o.dataset.front);r&&r.set(parseFloat(o.value))}})})}So();let dh=!1;const fs=[],Rc=document.getElementById("btn-record-start"),Pc=document.getElementById("btn-record-stop"),PA=document.getElementById("btn-record-clear"),DA=document.getElementById("btn-record-download"),jp=document.getElementById("record-count"),Eo=document.querySelector("#database-table tbody");function LA(n,t,e,i,s,o,r){const a={time:n,travel:t,camber:e,toe:i,damperCompression:s,motionRatio:o,wheelRate:r,points:{O:{...vt.position},E:{...Ct.position},A:{...Oe.position},B:{...Ne.position},C:{...Ue.position},D:{...Be.position},F:{...Yt.position},T:{...ze.position},H:{...te.position},I:{...ce.position},J:{...sn.position},K:{...be.position},L:{...on.position},M:{...xe.position}}};fs.push(a),fs.length%10===0&&IA(),jp.textContent=fs.length.toString()}function IA(){Eo.innerHTML="",fs.slice(-20).forEach(n=>{const t=document.createElement("tr");t.innerHTML=`<td>${n.time.toFixed(2)}</td><td class="data-value">${(n.travel*100).toFixed(1)}</td><td class="data-value">${(n.camber*100).toFixed(2)}</td><td class="data-value">${(n.damperCompression*100).toFixed(2)}</td>`,Eo.appendChild(t)}),Eo.parentElement?.scrollTo(0,Eo.parentElement?.scrollHeight??0)}function FA(){if(fs.length===0)return;let n="time,travel,camber,toe,damperCompression,motionRatio,wheelRate,";const t=["O","E","A","B","C","D","F","T","H","I","J","K","L","M"],e=["x","y","z"];t.forEach(r=>{e.forEach(a=>n+=`${r}_${a},`)}),n=n.slice(0,-1)+`
`,fs.forEach(r=>{n+=`${r.time},${r.travel},${r.camber},${r.toe},${r.damperCompression},${r.motionRatio},${r.wheelRate},`,t.forEach(a=>{const l=r.points[a];e.forEach(c=>n+=`${l[c]},`)}),n=n.slice(0,-1)+`
`});const i=new Blob([n],{type:"text/csv"}),s=URL.createObjectURL(i),o=document.createElement("a");o.href=s,o.download=`suspension_data_${Date.now()}.csv`,o.click(),URL.revokeObjectURL(s)}Rc.addEventListener("click",()=>{dh=!0,Rc.disabled=!0,Pc.disabled=!1});Pc.addEventListener("click",()=>{dh=!1,Rc.disabled=!1,Pc.disabled=!0});PA.addEventListener("click",()=>{fs.length=0,Eo.innerHTML="",jp.textContent="0"});DA.addEventListener("click",FA);function Sl(n){const t=document.getElementById(n);t&&t.classList.add("active")}function El(n){const t=document.getElementById(n);t&&t.classList.remove("active")}function of(){document.querySelectorAll(".modal-overlay").forEach(n=>n.classList.remove("active"))}function OA(){document.querySelectorAll(".modal-overlay").forEach(m=>{m.addEventListener("click",_=>{_.target===m&&of()})}),document.querySelectorAll('.modal-close, [data-action="cancel"]').forEach(m=>{m.addEventListener("click",()=>of())}),document.getElementById("btn-anti-dive")?.addEventListener("click",()=>{rs(),Sl("modal-anti-dive")}),document.getElementById("btn-apply-anti-dive")?.addEventListener("click",m=>{m.preventDefault();const _=document.getElementById("anti-dive-mode")?.value,p=parseFloat(document.getElementById("anti-dive-wheelbase")?.value||"1550")/100,g=parseFloat(document.getElementById("anti-dive-cg-height")?.value||"330")/100,x=parseFloat(document.getElementById("anti-dive-brake-bias")?.value||"0.55"),y=parseFloat(document.getElementById("anti-dive-drive-bias")?.value||"0.55"),M=parseFloat(document.getElementById("anti-dive-target")?.value||"50"),T=parseFloat(document.getElementById("anti-dive-squat")?.value||"60"),A=parseFloat(document.getElementById("anti-dive-rc-height")?.value||"100")/100,C=parseFloat(document.getElementById("anti-dive-rc-ic-dist")?.value||"50")/100,v=parseFloat(document.getElementById("anti-dive-y-upper")?.value||"245"),E=parseFloat(document.getElementById("anti-dive-y-lower")?.value||"150"),V=parseFloat(document.getElementById("anti-dive-span-upper")?.value||"100"),w=parseFloat(document.getElementById("anti-dive-span-lower")?.value||"100"),P=(Ct.position.x+vt.position.x)*.5,U=(vt.position.z+Ct.position.z)*.5-Wp,k={wheelbase:p,cgHeight:g,brakeBias:x,driveBias:y,targetAntiDive:M,targetAntiSquat:T,mode:_,rcHeight:A,distanceRCtoIC:C,contactPatchX:P,contactPatchZ:U,uprightUpperJoint:{x:Ct.position.x,y:Ct.position.y,z:Ct.position.z},uprightLowerJoint:{x:vt.position.x,y:vt.position.y,z:vt.position.z},uprightTieRodJoint:{x:Yt.position.x,y:Yt.position.y,z:Yt.position.z},zChassisUpperRef:Ct.position.z,zChassisLowerRef:vt.position.z,zChassisTieRodRef:Yt.position.z,yChassisUpper:v/100,yChassisLower:E/100,spanUpperFront:V/100,spanUpperRear:V/100,spanLowerFront:w/100,spanLowerRear:w/100,tieRodInnerX:ze.position.x},D=SA(k);rs(),Oe.position.x=w/100,Oe.position.y=E/100,Oe.position.z=D.chassisLowerFront.z,Ne.position.x=-w/100,Ne.position.y=E/100,Ne.position.z=D.chassisLowerRear.z,Ue.position.x=V/100,Ue.position.y=v/100,Ue.position.z=D.chassisUpperFront.z,Be.position.x=-V/100,Be.position.y=v/100,Be.position.z=D.chassisUpperRear.z,D.tieRodInnerX!==void 0&&D.tieRodInnerZ!==void 0&&(ze.position.x=D.tieRodInnerX,ze.position.z=D.tieRodInnerZ),yo(),Mo(),So();const N=document.getElementById("result-svic-x"),I=document.getElementById("result-svic-z"),K=document.getElementById("result-upper-slope"),X=document.getElementById("result-lower-slope");N&&(N.textContent=`${(D.svicX*100).toFixed(1)} mm`),I&&(I.textContent=`${(D.svicZ*100).toFixed(1)} mm`),K&&(K.textContent=`${(D.upperArmSlope*180/Math.PI).toFixed(2)}°`),X&&(X.textContent=`${(D.lowerArmSlope*180/Math.PI).toFixed(2)}°`),El("modal-anti-dive")}),document.getElementById("btn-optimize-toe")?.addEventListener("click",()=>{rs(),Sl("modal-optimize-toe")}),document.getElementById("btn-run-toe-optimize")?.addEventListener("click",m=>{m.preventDefault();const _=parseFloat(document.getElementById("toe-heave-range")?.value||"30"),p={chassisUpperFront:{x:Ue.position.x,y:Ue.position.y,z:Ue.position.z},chassisUpperRear:{x:Be.position.x,y:Be.position.y,z:Be.position.z},chassisLowerFront:{x:Oe.position.x,y:Oe.position.y,z:Oe.position.z},chassisLowerRear:{x:Ne.position.x,y:Ne.position.y,z:Ne.position.z},uprightUpperJoint:{x:Ct.position.x,y:Ct.position.y,z:Ct.position.z},uprightLowerJoint:{x:vt.position.x,y:vt.position.y,z:vt.position.z},tieRodOuter:{x:Yt.position.x,y:Yt.position.y,z:Yt.position.z},staticWheelCenter:{x:(vt.position.x+Ct.position.x)*.5,y:vt.position.y+.5,z:(vt.position.z+Ct.position.z)*.5},heaveRange:_/1e3},g=TA(p);rs(),ze.position.x=g.optimizedTieRodInner.x,ze.position.y=g.optimizedTieRodInner.y,ze.position.z=g.optimizedTieRodInner.z,yo(),Mo(),So();const x=document.getElementById("toe-variation");x&&(x.textContent=g.toeVariation.toFixed(2)),El("modal-optimize-toe")}),document.getElementById("btn-calculate-actuation")?.addEventListener("click",()=>{rs(),Sl("modal-actuation")}),document.getElementById("btn-calculate-actuation-apply")?.addEventListener("click",m=>{m.preventDefault();const _=parseFloat(document.getElementById("actuation-desired-mr")?.value||"1.0"),p=EA({x:vt.position.x,y:vt.position.y,z:vt.position.z},{x:Ct.position.x,y:Ct.position.y,z:Ct.position.z},{x:be.position.x,y:be.position.y,z:be.position.z},{x:xe.position.x,y:xe.position.y,z:xe.position.z},{x:on.position.x,y:on.position.y,z:on.position.z},{x:ce.position.x,y:ce.position.y,z:ce.position.z},_);rs(),te.position.x=p.uprightPoint.x,te.position.y=p.uprightPoint.y,te.position.z=p.uprightPoint.z,ce.position.x=p.rockerPoint.x,ce.position.y=p.rockerPoint.y,ce.position.z=p.rockerPoint.z,sn.position.x=p.rockerAxisPoint.x,sn.position.y=p.rockerAxisPoint.y,sn.position.z=p.rockerAxisPoint.z,yo(),Mo(),So();const g=document.getElementById("actuation-current-mr"),x=document.getElementById("actuation-pushrod-x"),y=document.getElementById("actuation-pushrod-z");g&&(g.textContent=p.currentMR.toFixed(3)),x&&(x.textContent=`${(te.position.x*100).toFixed(1)} cm`),y&&(y.textContent=`${(te.position.z*100).toFixed(1)} cm`),El("modal-actuation")});let n=null;const t="SuspensionSimDB",e=1,i="snapshots",s=document.getElementById("snapshot-count");function o(){return new Promise((m,_)=>{const p=indexedDB.open(t,e);p.onerror=()=>_(p.error),p.onsuccess=()=>{n=p.result,m(n)},p.onupgradeneeded=g=>{const x=g.target.result;if(!x.objectStoreNames.contains(i)){const y=x.createObjectStore(i,{keyPath:"id",autoIncrement:!0});y.createIndex("name","name",{unique:!1}),y.createIndex("createdAt","createdAt",{unique:!1})}}})}function r(){return new Promise((m,_)=>{if(!n){m([]);return}const x=n.transaction(i,"readonly").objectStore(i).getAll();x.onsuccess=()=>m(x.result),x.onerror=()=>_(x.error)})}function a(m){return new Promise((_,p)=>{if(!n){p(new Error("Database not initialized"));return}const y=n.transaction(i,"readwrite").objectStore(i).add(m);y.onsuccess=()=>_(y.result),y.onerror=()=>p(y.error)})}function l(m){return new Promise((_,p)=>{if(!n){p(new Error("Database not initialized"));return}const y=n.transaction(i,"readwrite").objectStore(i).delete(m);y.onsuccess=()=>_(),y.onerror=()=>p(y.error)})}async function c(){const m=prompt("Enter snapshot name:",`Snapshot ${Date.now()}`);if(!m)return;const _={name:m,points:{A:{x:Oe.position.x,y:Oe.position.y,z:Oe.position.z},B:{x:Ne.position.x,y:Ne.position.y,z:Ne.position.z},C:{x:Ue.position.x,y:Ue.position.y,z:Ue.position.z},D:{x:Be.position.x,y:Be.position.y,z:Be.position.z},E:{x:Ct.position.x,y:Ct.position.y,z:Ct.position.z},F:{x:Yt.position.x,y:Yt.position.y,z:Yt.position.z},H:{x:te.position.x,y:te.position.y,z:te.position.z},I:{x:ce.position.x,y:ce.position.y,z:ce.position.z},J:{x:sn.position.x,y:sn.position.y,z:sn.position.z},K:{x:be.position.x,y:be.position.y,z:be.position.z},L:{x:on.position.x,y:on.position.y,z:on.position.z},M:{x:xe.position.x,y:xe.position.y,z:xe.position.z},O:{x:vt.position.x,y:vt.position.y,z:vt.position.z},T:{x:ze.position.x,y:ze.position.y,z:ze.position.z}},createdAt:new Date};await a(_),await d()}function h(m,_){const p=_.find(g=>g.id===m);p&&(Object.assign(Oe.position,p.points.A),Object.assign(Ne.position,p.points.B),Object.assign(Ue.position,p.points.C),Object.assign(Be.position,p.points.D),Object.assign(Ct.position,p.points.E),Object.assign(Yt.position,p.points.F),Object.assign(te.position,p.points.H),Object.assign(ce.position,p.points.I),Object.assign(sn.position,p.points.J),Object.assign(be.position,p.points.K),Object.assign(on.position,p.points.L),Object.assign(xe.position,p.points.M),Object.assign(vt.position,p.points.O),Object.assign(ze.position,p.points.T),yo(),Mo(),So())}async function u(m){await l(m),await d()}async function d(){const m=await r();s&&(s.textContent=m.length.toString())}async function f(){const m=await r();if(m.length===0){alert("No snapshots saved yet.");return}const _=m.map((x,y)=>{const M=x.createdAt?new Date(x.createdAt).toLocaleString():"Unknown";return`${y+1}. ${x.name} (${M})`}).join(`
`),p=prompt(`Saved Snapshots:
${_}

Enter number to load, or 'delete N' to remove a snapshot:`);if(!p)return;if(p.toLowerCase().startsWith("delete ")){const x=parseInt(p.split(" ")[1])-1;!isNaN(x)&&m[x]&&(await u(m[x].id),f());return}const g=parseInt(p)-1;!isNaN(g)&&m[g]&&h(m[g].id,m)}o().then(()=>d()).catch(console.error),document.getElementById("btn-save-snapshot")?.addEventListener("click",c),document.getElementById("btn-load-snapshots")?.addEventListener("click",f)}function $p(){const n=Date.now()*.001;let t=0;Hs||(t=Math.sin(n*2)*.75),CA(t),ci.contactPatch={x:vt.position.y,y:vt.position.z};const e=Jt(on.position,xe.position),i=qp-e;(vt.position.z+Ct.position.z)*.5;const s=i-ef,o=te.position.z,r=o-tf;Math.abs(r)>.001&&(fo=Math.abs(s/r)),tf=o,ef=i;const a=wA*(fo*fo),l=Ct.position.y-vt.position.y,c=Ct.position.z-vt.position.z,h=Math.atan2(l,c)*(180/Math.PI)-Xp,u=Yt.position.x-vt.position.x,d=Yt.position.y-vt.position.y,f=Math.atan2(d,u)*(180/Math.PI)-Yp;if(In.addValue("Camber Gain",h),In.addValue("Toe Change",f),In.addValue("Damper compression",i*100),In.addValue("Motion ratio",fo),In.addValue("Wheel rate",a/1e3),dh&&!Hs&&LA(n,t,h,f,i,fo,a),Hs||In.update(),bo){const m=new F,_=(vt.position.x+Ct.position.x)*.5,p=(vt.position.z+Ct.position.z)*.5,g=Math.max(vt.position.y,Ct.position.y)+.8;m.set(_,g,p),Kt.updateWheelPosition(m)}Kt.update(),requestAnimationFrame($p)}OA();requestAnimationFrame($p);
