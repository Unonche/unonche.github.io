import{l as S,k as v,D as U,Q as F,A as j,E as T,V as H,m as N}from"./globals.B0M_B2BR.js";let B;function q(s){return B=s,s}function l(){return B}class y{constructor(e,t){this.init(e,t)}init(e,t){this.destination=e,this.source=t||e}connect(e){var t;(t=this.source)==null||t.connect(e)}disconnect(){var e;(e=this.source)==null||e.disconnect()}destroy(){this.disconnect(),this.destination=null,this.source=null}}class z extends y{constructor(e=0){let t;if(!l().useLegacy){const{audioContext:i}=l().context;t=i.createWaveShaper()}super(t),this._distortion=t,this.amount=e}set amount(e){if(this._amount=e,l().useLegacy)return;const t=e*1e3,i=44100,n=new Float32Array(i),o=Math.PI/180;let r=0,a;for(;r<i;++r)a=r*2/i-1,n[r]=(3+t)*a*20*o/(Math.PI+t*Math.abs(a));this._distortion.curve=n,this._distortion.oversample="4x"}get amount(){return this._amount}destroy(){this._distortion=null,super.destroy()}}class _{static setParamValue(e,t){if(e.setValueAtTime){const i=l().context;e.setValueAtTime(t,i.audioContext.currentTime)}else e.value=t;return t}}const u=class extends y{constructor(s=0,e=0,t=0,i=0,n=0,o=0,r=0,a=0,h=0,d=0){let c=[];const g=[{f:u.F32,type:"lowshelf",gain:s},{f:u.F64,type:"peaking",gain:e},{f:u.F125,type:"peaking",gain:t},{f:u.F250,type:"peaking",gain:i},{f:u.F500,type:"peaking",gain:n},{f:u.F1K,type:"peaking",gain:o},{f:u.F2K,type:"peaking",gain:r},{f:u.F4K,type:"peaking",gain:a},{f:u.F8K,type:"peaking",gain:h},{f:u.F16K,type:"highshelf",gain:d}];l().useLegacy||(c=g.map(f=>{const p=l().context.audioContext.createBiquadFilter();return p.type=f.type,_.setParamValue(p.Q,1),p.frequency.value=f.f,_.setParamValue(p.gain,f.gain),p})),super(c[0],c[c.length-1]),this.bands=c,this.bandsMap={};for(let f=0;f<this.bands.length;f++){const p=this.bands[f];f>0&&this.bands[f-1].connect(p),this.bandsMap[p.frequency.value]=p}}setGain(s,e=0){if(!this.bandsMap[s])throw new Error(`No band found for frequency ${s}`);_.setParamValue(this.bandsMap[s].gain,e)}getGain(s){if(!this.bandsMap[s])throw new Error(`No band found for frequency ${s}`);return this.bandsMap[s].gain.value}set f32(s){this.setGain(u.F32,s)}get f32(){return this.getGain(u.F32)}set f64(s){this.setGain(u.F64,s)}get f64(){return this.getGain(u.F64)}set f125(s){this.setGain(u.F125,s)}get f125(){return this.getGain(u.F125)}set f250(s){this.setGain(u.F250,s)}get f250(){return this.getGain(u.F250)}set f500(s){this.setGain(u.F500,s)}get f500(){return this.getGain(u.F500)}set f1k(s){this.setGain(u.F1K,s)}get f1k(){return this.getGain(u.F1K)}set f2k(s){this.setGain(u.F2K,s)}get f2k(){return this.getGain(u.F2K)}set f4k(s){this.setGain(u.F4K,s)}get f4k(){return this.getGain(u.F4K)}set f8k(s){this.setGain(u.F8K,s)}get f8k(){return this.getGain(u.F8K)}set f16k(s){this.setGain(u.F16K,s)}get f16k(){return this.getGain(u.F16K)}reset(){this.bands.forEach(s=>{_.setParamValue(s.gain,0)})}destroy(){this.bands.forEach(s=>{s.disconnect()}),this.bands=null,this.bandsMap=null}};let m=u;m.F32=32;m.F64=64;m.F125=125;m.F250=250;m.F500=500;m.F1K=1e3;m.F2K=2e3;m.F4K=4e3;m.F8K=8e3;m.F16K=16e3;class Q extends y{constructor(){let e,t;if(!l().useLegacy){const{audioContext:i}=l().context;t=i.createChannelSplitter(),e=i.createChannelMerger(),e.connect(t)}super(e,t),this._merger=e}destroy(){var e;(e=this._merger)==null||e.disconnect(),this._merger=null,super.destroy()}}class W extends y{constructor(e=3,t=2,i=!1){super(null),this._seconds=this._clamp(e,1,50),this._decay=this._clamp(t,0,100),this._reverse=i,this._rebuild()}_clamp(e,t,i){return Math.min(i,Math.max(t,e))}get seconds(){return this._seconds}set seconds(e){this._seconds=this._clamp(e,1,50),this._rebuild()}get decay(){return this._decay}set decay(e){this._decay=this._clamp(e,0,100),this._rebuild()}get reverse(){return this._reverse}set reverse(e){this._reverse=e,this._rebuild()}_rebuild(){if(l().useLegacy)return;const{audioContext:e}=l().context,t=e.sampleRate,i=t*this._seconds,n=e.createBuffer(2,i,t),o=n.getChannelData(0),r=n.getChannelData(1);let a;for(let d=0;d<i;d++)a=this._reverse?i-d:d,o[d]=(Math.random()*2-1)*Math.pow(1-a/i,this._decay),r[d]=(Math.random()*2-1)*Math.pow(1-a/i,this._decay);const h=e.createConvolver();h.buffer=n,this.init(h)}}class Y extends y{constructor(e=0){let t,i,n;if(!l().useLegacy){const{audioContext:o}=l().context;o.createStereoPanner?(t=o.createStereoPanner(),n=t):(i=o.createPanner(),i.panningModel="equalpower",n=i)}super(n),this._stereo=t,this._panner=i,this.pan=e}set pan(e){this._pan=e,this._stereo?_.setParamValue(this._stereo.pan,e):this._panner&&this._panner.setPosition(e,0,1-Math.abs(e))}get pan(){return this._pan}destroy(){super.destroy(),this._stereo=null,this._panner=null}}class Z extends y{constructor(){let e,t;if(!l().useLegacy){const{audioContext:i}=l().context;e=i.createMediaStreamDestination(),t=i.createMediaStreamSource(e.stream)}super(e,t),this._stream=e==null?void 0:e.stream}get stream(){return this._stream}destroy(){this._stream=null,super.destroy()}}class J extends y{constructor(){let e,t;if(!l().useLegacy){const{audioContext:i}=l().context,n=i.createBiquadFilter(),o=i.createBiquadFilter(),r=i.createBiquadFilter(),a=i.createBiquadFilter();n.type="lowpass",_.setParamValue(n.frequency,2e3),o.type="lowpass",_.setParamValue(o.frequency,2e3),r.type="highpass",_.setParamValue(r.frequency,500),a.type="highpass",_.setParamValue(a.frequency,500),n.connect(o),o.connect(r),r.connect(a),e=n,t=a}super(e,t)}}const ue=Object.freeze(Object.defineProperty({__proto__:null,DistortionFilter:z,EqualizerFilter:m,Filter:y,MonoFilter:Q,ReverbFilter:W,StereoFilter:Y,StreamFilter:Z,TelephoneFilter:J},Symbol.toStringTag,{value:"Module"}));class I extends S{constructor(){super(...arguments),this.speed=1,this.muted=!1,this.volume=1,this.paused=!1}refresh(){this.emit("refresh")}refreshPaused(){this.emit("refreshPaused")}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(e){console.warn("HTML Audio does not support filters")}get audioContext(){return console.warn("HTML Audio does not support audioContext"),null}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this.paused}destroy(){this.removeAllListeners()}}let X=0;const C=class extends S{constructor(s){super(),this.id=X++,this.init(s)}set(s,e){if(this[s]===void 0)throw new Error(`Property with name ${s} does not exist.`);switch(s){case"speed":this.speed=e;break;case"volume":this.volume=e;break;case"paused":this.paused=e;break;case"loop":this.loop=e;break;case"muted":this.muted=e;break}return this}get progress(){const{currentTime:s}=this._source;return s/this._duration}get paused(){return this._paused}set paused(s){this._paused=s,this.refreshPaused()}_onPlay(){this._playing=!0}_onPause(){this._playing=!1}init(s){this._playing=!1,this._duration=s.source.duration;const e=this._source=s.source.cloneNode(!1);e.src=s.parent.url,e.onplay=this._onPlay.bind(this),e.onpause=this._onPause.bind(this),s.context.on("refresh",this.refresh,this),s.context.on("refreshPaused",this.refreshPaused,this),this._media=s}_internalStop(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())}stop(){this._internalStop(),this._source&&this.emit("stop")}get speed(){return this._speed}set speed(s){this._speed=s,this.refresh()}get volume(){return this._volume}set volume(s){this._volume=s,this.refresh()}get loop(){return this._loop}set loop(s){this._loop=s,this.refresh()}get muted(){return this._muted}set muted(s){this._muted=s,this.refresh()}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(s){console.warn("HTML Audio does not support filters")}refresh(){const s=this._media.context,e=this._media.parent;this._source.loop=this._loop||e.loop;const t=s.volume*(s.muted?0:1),i=e.volume*(e.muted?0:1),n=this._volume*(this._muted?0:1);this._source.volume=n*t*i,this._source.playbackRate=this._speed*s.speed*e.speed}refreshPaused(){const s=this._media.context,e=this._media.parent,t=this._paused||e.paused||s.paused;t!==this._pausedReal&&(this._pausedReal=t,t?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._source.currentTime,end:this._end,volume:this._volume,speed:this._speed,loop:this._loop})),this.emit("pause",t))}play(s){const{start:e,end:t,speed:i,loop:n,volume:o,muted:r}=s;t&&console.assert(t>e,"End time is before start time"),this._speed=i,this._volume=o,this._loop=!!n,this._muted=r,this.refresh(),this.loop&&t!==null&&(console.warn('Looping not support when specifying an "end" time'),this.loop=!1),this._start=e,this._end=t||this._duration,this._start=Math.max(0,this._start-C.PADDING),this._end=Math.min(this._end+C.PADDING,this._duration),this._source.onloadedmetadata=()=>{this._source&&(this._source.currentTime=e,this._source.onloadedmetadata=null,this.emit("progress",e/this._duration,this._duration),v.shared.add(this._onUpdate,this))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit("start")}_onUpdate(){this.emit("progress",this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()}_onComplete(){v.shared.remove(this._onUpdate,this),this._internalStop(),this.emit("progress",1,this._duration),this.emit("end",this)}destroy(){v.shared.remove(this._onUpdate,this),this.removeAllListeners();const s=this._source;s&&(s.onended=null,s.onplay=null,s.onpause=null,this._internalStop()),this._source=null,this._speed=1,this._volume=1,this._loop=!1,this._end=null,this._start=0,this._duration=0,this._playing=!1,this._pausedReal=!1,this._paused=!1,this._muted=!1,this._media&&(this._media.context.off("refresh",this.refresh,this),this._media.context.off("refreshPaused",this.refreshPaused,this),this._media=null)}toString(){return`[HTMLAudioInstance id=${this.id}]`}};let E=C;E.PADDING=.1;class G extends S{init(e){this.parent=e,this._source=e.options.source||new Audio,e.url&&(this._source.src=e.url)}create(){return new E(this)}get isPlayable(){return!!this._source&&this._source.readyState===4}get duration(){return this._source.duration}get context(){return this.parent.context}get filters(){return null}set filters(e){console.warn("HTML Audio does not support filters")}destroy(){this.removeAllListeners(),this.parent=null,this._source&&(this._source.src="",this._source.load(),this._source=null)}get source(){return this._source}load(e){const t=this._source,i=this.parent;if(t.readyState===4){i.isLoaded=!0;const h=i.autoPlayStart();e&&setTimeout(()=>{e(null,i,h)},0);return}if(!i.url){e(new Error("sound.url or sound.source must be set"));return}t.src=i.url;const n=()=>{a(),i.isLoaded=!0;const h=i.autoPlayStart();e&&e(null,i,h)},o=()=>{a(),e&&e(new Error("Sound loading has been aborted"))},r=()=>{a();const h=`Failed to load audio element (code: ${t.error.code})`;e?e(new Error(h)):console.error(h)},a=()=>{t.removeEventListener("canplaythrough",n),t.removeEventListener("load",n),t.removeEventListener("abort",o),t.removeEventListener("error",r)};t.addEventListener("canplaythrough",n,!1),t.addEventListener("load",n,!1),t.addEventListener("abort",o,!1),t.addEventListener("error",r,!1),t.load()}}const he=Object.freeze(Object.defineProperty({__proto__:null,HTMLAudioContext:I,HTMLAudioInstance:E,HTMLAudioMedia:G},Symbol.toStringTag,{value:"Module"}));class ee{constructor(e,t){this.parent=e,Object.assign(this,t),this.duration=this.end-this.start,console.assert(this.duration>0,"End time must be after start time")}play(e){return this.parent.play({complete:e,speed:this.speed||this.parent.speed,end:this.end,start:this.start,loop:this.loop})}destroy(){this.parent=null}}const P=["ogg","oga","opus","m4a","mp3","mpeg","wav","aiff","wma","mid","caf"],O=["audio/mpeg","audio/ogg"],A={};function R(s){const e={m4a:"audio/mp4",oga:"audio/ogg",opus:'audio/ogg; codecs="opus"',caf:'audio/x-caf; codecs="opus"',...s||{}},t=document.createElement("audio"),i={},n=/^no$/;P.forEach(o=>{const r=t.canPlayType(`audio/${o}`).replace(n,""),a=e[o]?t.canPlayType(e[o]).replace(n,""):"";i[o]=!!r||!!a}),Object.assign(A,i)}R();let te=0;class V extends S{constructor(e){super(),this.id=te++,this._media=null,this._paused=!1,this._muted=!1,this._elapsed=0,this.init(e)}set(e,t){if(this[e]===void 0)throw new Error(`Property with name ${e} does not exist.`);switch(e){case"speed":this.speed=t;break;case"volume":this.volume=t;break;case"muted":this.muted=t;break;case"loop":this.loop=t;break;case"paused":this.paused=t;break}return this}stop(){this._source&&(this._internalStop(),this.emit("stop"))}get speed(){return this._speed}set speed(e){this._speed=e,this.refresh(),this._update(!0)}get volume(){return this._volume}set volume(e){this._volume=e,this.refresh()}get muted(){return this._muted}set muted(e){this._muted=e,this.refresh()}get loop(){return this._loop}set loop(e){this._loop=e,this.refresh()}get filters(){return this._filters}set filters(e){var t;this._filters&&((t=this._filters)==null||t.filter(i=>i).forEach(i=>i.disconnect()),this._filters=null,this._source.connect(this._gain)),this._filters=e!=null&&e.length?e.slice(0):null,this.refresh()}refresh(){if(!this._source)return;const e=this._media.context,t=this._media.parent;this._source.loop=this._loop||t.loop;const i=e.volume*(e.muted?0:1),n=t.volume*(t.muted?0:1),o=this._volume*(this._muted?0:1);_.setParamValue(this._gain.gain,o*n*i),_.setParamValue(this._source.playbackRate,this._speed*t.speed*e.speed),this.applyFilters()}applyFilters(){var e;if((e=this._filters)!=null&&e.length){this._source.disconnect();let t=this._source;this._filters.forEach(i=>{t.connect(i.destination),t=i}),t.connect(this._gain)}}refreshPaused(){const e=this._media.context,t=this._media.parent,i=this._paused||t.paused||e.paused;i!==this._pausedReal&&(this._pausedReal=i,i?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._elapsed%this._duration,end:this._end,speed:this._speed,loop:this._loop,volume:this._volume})),this.emit("pause",i))}play(e){const{start:t,end:i,speed:n,loop:o,volume:r,muted:a,filters:h}=e;i&&console.assert(i>t,"End time is before start time"),this._paused=!1;const{source:d,gain:c}=this._media.nodes.cloneBufferSource();this._source=d,this._gain=c,this._speed=n,this._volume=r,this._loop=!!o,this._muted=a,this._filters=h,this.refresh();const g=this._source.buffer.duration;this._duration=g,this._end=i,this._lastUpdate=this._now(),this._elapsed=t,this._source.onended=this._onComplete.bind(this),this._loop?(this._source.loopEnd=i,this._source.loopStart=t,this._source.start(0,t)):i?this._source.start(0,t,i-t):this._source.start(0,t),this.emit("start"),this._update(!0),this.enableTicker(!0)}enableTicker(e){v.shared.remove(this._updateListener,this),e&&v.shared.add(this._updateListener,this)}get progress(){return this._progress}get paused(){return this._paused}set paused(e){this._paused=e,this.refreshPaused()}destroy(){var e;this.removeAllListeners(),this._internalStop(),this._gain&&(this._gain.disconnect(),this._gain=null),this._media&&(this._media.context.events.off("refresh",this.refresh,this),this._media.context.events.off("refreshPaused",this.refreshPaused,this),this._media=null),(e=this._filters)==null||e.forEach(t=>t.disconnect()),this._filters=null,this._end=null,this._speed=1,this._volume=1,this._loop=!1,this._elapsed=0,this._duration=0,this._paused=!1,this._muted=!1,this._pausedReal=!1}toString(){return`[WebAudioInstance id=${this.id}]`}_now(){return this._media.context.audioContext.currentTime}_updateListener(){this._update()}_update(e=!1){if(this._source){const t=this._now(),i=t-this._lastUpdate;if(i>0||e){const n=this._source.playbackRate.value;this._elapsed+=i*n,this._lastUpdate=t;const o=this._duration;let r;if(this._source.loopStart){const a=this._source.loopEnd-this._source.loopStart;r=(this._source.loopStart+this._elapsed%a)/o}else r=this._elapsed%o/o;this._progress=r,this.emit("progress",this._progress,o)}}}init(e){this._media=e,e.context.events.on("refresh",this.refresh,this),e.context.events.on("refreshPaused",this.refreshPaused,this)}_internalStop(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.stop(0),this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}this._source=null}}_onComplete(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.disconnect();try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}}this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)}}class K{constructor(e,t){this._output=t,this._input=e}get destination(){return this._input}get filters(){return this._filters}set filters(e){if(this._filters&&(this._filters.forEach(t=>{t&&t.disconnect()}),this._filters=null,this._input.connect(this._output)),e&&e.length){this._filters=e.slice(0),this._input.disconnect();let t=null;e.forEach(i=>{t===null?this._input.connect(i.destination):t.connect(i.destination),t=i}),t.connect(this._output)}}destroy(){this.filters=null,this._input=null,this._output=null}}const $=class extends K{constructor(s){const e=s.audioContext,t=e.createBufferSource(),i=e.createGain(),n=e.createAnalyser();t.connect(n),n.connect(i),i.connect(s.destination),super(n,i),this.context=s,this.bufferSource=t,this.gain=i,this.analyser=n}get script(){return this._script||(this._script=this.context.audioContext.createScriptProcessor($.BUFFER_SIZE),this._script.connect(this.context.destination)),this._script}destroy(){super.destroy(),this.bufferSource.disconnect(),this._script&&this._script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this._script=null,this.gain=null,this.analyser=null,this.context=null}cloneBufferSource(){const s=this.bufferSource,e=this.context.audioContext.createBufferSource();e.buffer=s.buffer,_.setParamValue(e.playbackRate,s.playbackRate.value),e.loop=s.loop;const t=this.context.audioContext.createGain();return e.connect(t),t.connect(this.destination),{source:e,gain:t}}get bufferSize(){return this.script.bufferSize}};let M=$;M.BUFFER_SIZE=0;class L{init(e){this.parent=e,this._nodes=new M(this.context),this._source=this._nodes.bufferSource,this.source=e.options.source}destroy(){this.parent=null,this._nodes.destroy(),this._nodes=null;try{this._source.buffer=null}catch(e){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",e)}this._source=null,this.source=null}create(){return new V(this)}get context(){return this.parent.context}get isPlayable(){return!!this._source&&!!this._source.buffer}get filters(){return this._nodes.filters}set filters(e){this._nodes.filters=e}get duration(){return console.assert(this.isPlayable,"Sound not yet playable, no duration"),this._source.buffer.duration}get buffer(){return this._source.buffer}set buffer(e){this._source.buffer=e}get nodes(){return this._nodes}load(e){this.source?this._decode(this.source,e):this.parent.url?this._loadUrl(e):e?e(new Error("sound.url or sound.source must be set")):console.error("sound.url or sound.source must be set")}async _loadUrl(e){const t=this.parent.url,i=await U.get().fetch(t);this._decode(await i.arrayBuffer(),e)}_decode(e,t){const i=(n,o)=>{if(n)t&&t(n);else{this.parent.isLoaded=!0,this.buffer=o;const r=this.parent.autoPlayStart();t&&t(null,this.parent,r)}};e instanceof AudioBuffer?i(null,e):this.parent.context.decode(e,i)}}const x=class{static from(s){let e={};typeof s=="string"?e.url=s:s instanceof ArrayBuffer||s instanceof AudioBuffer||s instanceof HTMLAudioElement?e.source=s:Array.isArray(s)?e.url=s:e=s,e={autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1,...e},Object.freeze(e);const t=l().useLegacy?new G:new L;return new x(t,e)}constructor(s,e){this.media=s,this.options=e,this._instances=[],this._sprites={},this.media.init(this);const t=e.complete;this._autoPlayOptions=t?{complete:t}:null,this.isLoaded=!1,this._preloadQueue=null,this.isPlaying=!1,this.autoPlay=e.autoPlay,this.singleInstance=e.singleInstance,this.preload=e.preload||this.autoPlay,this.url=Array.isArray(e.url)?this.preferUrl(e.url):e.url,this.speed=e.speed,this.volume=e.volume,this.loop=e.loop,e.sprites&&this.addSprites(e.sprites),this.preload&&this._preload(e.loaded)}preferUrl(s){const[e]=s.map(t=>({url:t,ext:F.extname(t).slice(1)})).filter(({ext:t})=>A[t]).sort((t,i)=>P.indexOf(t.ext)-P.indexOf(i.ext));if(!e)throw new Error("No supported file type found");return e.url}get context(){return l().context}pause(){return this.isPlaying=!1,this.paused=!0,this}resume(){return this.isPlaying=this._instances.length>0,this.paused=!1,this}get paused(){return this._paused}set paused(s){this._paused=s,this.refreshPaused()}get speed(){return this._speed}set speed(s){this._speed=s,this.refresh()}get filters(){return this.media.filters}set filters(s){this.media.filters=s}addSprites(s,e){if(typeof s=="object"){const i={};for(const n in s)i[n]=this.addSprites(n,s[n]);return i}console.assert(!this._sprites[s],`Alias ${s} is already taken`);const t=new ee(this,e);return this._sprites[s]=t,t}destroy(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null}removeSprites(s){if(s){const e=this._sprites[s];e!==void 0&&(e.destroy(),delete this._sprites[s])}else for(const e in this._sprites)this.removeSprites(e);return this}get isPlayable(){return this.isLoaded&&this.media&&this.media.isPlayable}stop(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(let s=this._instances.length-1;s>=0;s--)this._instances[s].stop();return this}play(s,e){let t;if(typeof s=="string"?t={sprite:s,loop:this.loop,complete:e}:typeof s=="function"?(t={},t.complete=s):t=s,t={complete:null,loaded:null,sprite:null,end:null,start:0,volume:1,speed:1,muted:!1,loop:!1,...t||{}},t.sprite){const n=t.sprite;console.assert(!!this._sprites[n],`Alias ${n} is not available`);const o=this._sprites[n];t.start=o.start+(t.start||0),t.end=o.end,t.speed=o.speed||1,t.loop=o.loop||t.loop,delete t.sprite}if(t.offset&&(t.start=t.offset),!this.isLoaded)return this._preloadQueue?new Promise(n=>{this._preloadQueue.push(()=>{n(this.play(t))})}):(this._preloadQueue=[],this.autoPlay=!0,this._autoPlayOptions=t,new Promise((n,o)=>{this._preload((r,a,h)=>{this._preloadQueue.forEach(d=>d()),this._preloadQueue=null,r?o(r):(t.loaded&&t.loaded(r,a,h),n(h))})}));(this.singleInstance||t.singleInstance)&&this._removeInstances();const i=this._createInstance();return this._instances.push(i),this.isPlaying=!0,i.once("end",()=>{t.complete&&t.complete(this),this._onComplete(i)}),i.once("stop",()=>{this._onComplete(i)}),i.play(t),i}refresh(){const s=this._instances.length;for(let e=0;e<s;e++)this._instances[e].refresh()}refreshPaused(){const s=this._instances.length;for(let e=0;e<s;e++)this._instances[e].refreshPaused()}get volume(){return this._volume}set volume(s){this._volume=s,this.refresh()}get muted(){return this._muted}set muted(s){this._muted=s,this.refresh()}get loop(){return this._loop}set loop(s){this._loop=s,this.refresh()}_preload(s){this.media.load(s)}get instances(){return this._instances}get sprites(){return this._sprites}get duration(){return this.media.duration}autoPlayStart(){let s;return this.autoPlay&&(s=this.play(this._autoPlayOptions)),s}_removeInstances(){for(let s=this._instances.length-1;s>=0;s--)this._poolInstance(this._instances[s]);this._instances.length=0}_onComplete(s){if(this._instances){const e=this._instances.indexOf(s);e>-1&&this._instances.splice(e,1),this.isPlaying=this._instances.length>0}this._poolInstance(s)}_createInstance(){if(x._pool.length>0){const s=x._pool.pop();return s.init(this.media),s}return this.media.create()}_poolInstance(s){s.destroy(),x._pool.indexOf(s)<0&&x._pool.push(s)}};let w=x;w._pool=[];class b extends K{constructor(){const e=window,t=new b.AudioContext,i=t.createDynamicsCompressor(),n=t.createAnalyser();n.connect(i),i.connect(t.destination),super(n,i),this.autoPause=!0,this._ctx=t,this._offlineCtx=new b.OfflineAudioContext(1,2,e.OfflineAudioContext?Math.max(8e3,Math.min(96e3,t.sampleRate)):44100),this.compressor=i,this.analyser=n,this.events=new S,this.volume=1,this.speed=1,this.muted=!1,this.paused=!1,this._locked=t.state==="suspended"&&("ontouchstart"in globalThis||"onclick"in globalThis),this._locked&&(this._unlock(),this._unlock=this._unlock.bind(this),document.addEventListener("mousedown",this._unlock,!0),document.addEventListener("touchstart",this._unlock,!0),document.addEventListener("touchend",this._unlock,!0)),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),globalThis.addEventListener("focus",this.onFocus),globalThis.addEventListener("blur",this.onBlur)}onFocus(){if(!this.autoPause)return;const e=this._ctx.state;(e==="suspended"||e==="interrupted"||!this._locked)&&(this.paused=this._pausedOnBlur,this.refreshPaused())}onBlur(){this.autoPause&&(this._locked||(this._pausedOnBlur=this._paused,this.paused=!0,this.refreshPaused()))}_unlock(){this._locked&&(this.playEmptySound(),this._ctx.state==="running"&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._locked=!1))}playEmptySound(){const e=this._ctx.createBufferSource();e.buffer=this._ctx.createBuffer(1,1,22050),e.connect(this._ctx.destination),e.start(0,0,0),e.context.state==="suspended"&&e.context.resume()}static get AudioContext(){const e=window;return e.AudioContext||e.webkitAudioContext||null}static get OfflineAudioContext(){const e=window;return e.OfflineAudioContext||e.webkitOfflineAudioContext||null}destroy(){super.destroy();const e=this._ctx;typeof e.close<"u"&&e.close(),globalThis.removeEventListener("focus",this.onFocus),globalThis.removeEventListener("blur",this.onBlur),this.events.removeAllListeners(),this.analyser.disconnect(),this.compressor.disconnect(),this.analyser=null,this.compressor=null,this.events=null,this._offlineCtx=null,this._ctx=null}get audioContext(){return this._ctx}get offlineContext(){return this._offlineCtx}set paused(e){e&&this._ctx.state==="running"?this._ctx.suspend():!e&&this._ctx.state==="suspended"&&this._ctx.resume(),this._paused=e}get paused(){return this._paused}refresh(){this.events.emit("refresh")}refreshPaused(){this.events.emit("refreshPaused")}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this._paused}decode(e,t){const i=o=>{t(new Error((o==null?void 0:o.message)||"Unable to decode file"))},n=this._offlineCtx.decodeAudioData(e,o=>{t(null,o)},i);n&&n.catch(i)}}class se{constructor(){this.init()}init(){return this.supported&&(this._webAudioContext=new b),this._htmlAudioContext=new I,this._sounds={},this.useLegacy=!this.supported,this}get context(){return this._context}get filtersAll(){return this.useLegacy?[]:this._context.filters}set filtersAll(e){this.useLegacy||(this._context.filters=e)}get supported(){return b.AudioContext!==null}add(e,t){if(typeof e=="object"){const o={};for(const r in e){const a=this._getOptions(e[r],t);o[r]=this.add(r,a)}return o}if(console.assert(!this._sounds[e],`Sound with alias ${e} already exists.`),t instanceof w)return this._sounds[e]=t,t;const i=this._getOptions(t),n=w.from(i);return this._sounds[e]=n,n}_getOptions(e,t){let i;return typeof e=="string"?i={url:e}:Array.isArray(e)?i={url:e}:e instanceof ArrayBuffer||e instanceof AudioBuffer||e instanceof HTMLAudioElement?i={source:e}:i=e,i={...i,...t||{}},i}get useLegacy(){return this._useLegacy}set useLegacy(e){this._useLegacy=e,this._context=!e&&this.supported?this._webAudioContext:this._htmlAudioContext}get disableAutoPause(){return!this._webAudioContext.autoPause}set disableAutoPause(e){this._webAudioContext.autoPause=!e}remove(e){return this.exists(e,!0),this._sounds[e].destroy(),delete this._sounds[e],this}get volumeAll(){return this._context.volume}set volumeAll(e){this._context.volume=e,this._context.refresh()}get speedAll(){return this._context.speed}set speedAll(e){this._context.speed=e,this._context.refresh()}togglePauseAll(){return this._context.togglePause()}pauseAll(){return this._context.paused=!0,this._context.refreshPaused(),this}resumeAll(){return this._context.paused=!1,this._context.refreshPaused(),this}toggleMuteAll(){return this._context.toggleMute()}muteAll(){return this._context.muted=!0,this._context.refresh(),this}unmuteAll(){return this._context.muted=!1,this._context.refresh(),this}removeAll(){for(const e in this._sounds)this._sounds[e].destroy(),delete this._sounds[e];return this}stopAll(){for(const e in this._sounds)this._sounds[e].stop();return this}exists(e,t=!1){const i=!!this._sounds[e];return t&&console.assert(i,`No sound matching alias '${e}'.`),i}isPlaying(){for(const e in this._sounds)if(this._sounds[e].isPlaying)return!0;return!1}find(e){return this.exists(e,!0),this._sounds[e]}play(e,t){return this.find(e).play(t)}stop(e){return this.find(e).stop()}pause(e){return this.find(e).pause()}resume(e){return this.find(e).resume()}volume(e,t){const i=this.find(e);return t!==void 0&&(i.volume=t),i.volume}speed(e,t){const i=this.find(e);return t!==void 0&&(i.speed=t),i.speed}duration(e){return this.find(e).duration}close(){return this.removeAll(),this._sounds=null,this._webAudioContext&&(this._webAudioContext.destroy(),this._webAudioContext=null),this._htmlAudioContext&&(this._htmlAudioContext.destroy(),this._htmlAudioContext=null),this._context=null,this}}let D=0;function ie(s,e){const t=`alias${D++}`;return l().add(t,{url:s,preload:!0,autoPlay:!0,loaded:i=>{i&&(console.error(i),l().remove(t),e&&e(i))},complete:()=>{l().remove(t),e&&e(null)}}),t}function ne(s,e){const t=document.createElement("canvas");e={width:512,height:128,fill:"black",...e||{}},t.width=e.width,t.height=e.height;const i=new j({resource:t});if(!(s.media instanceof L))return i;const n=s.media;console.assert(!!n.buffer,"No buffer found, load first");const o=t.getContext("2d");o.fillStyle=e.fill;const r=n.buffer.getChannelData(0),a=Math.ceil(r.length/e.width),h=e.height/2;for(let d=0;d<e.width;d++){let c=1,g=-1;for(let f=0;f<a;f++){const p=r[d*a+f];p<c&&(c=p),p>g&&(g=p)}o.fillRect(d,(1+c)*h,1,Math.max(1,(g-c)*h))}return i}function oe(s=200,e=1){const t=w.from({singleInstance:!0});if(!(t.media instanceof L))return t;const i=t.media,n=t.context,o=1,r=48e3,a=2,h=n.audioContext.createBuffer(o,e*r,r),d=h.getChannelData(0);for(let c=0;c<d.length;c++){const g=c/h.sampleRate,f=s*g*2*Math.PI;d[c]=Math.sin(f)*a}return i.buffer=h,t.isLoaded=!0,t}const le=Object.freeze(Object.defineProperty({__proto__:null,get PLAY_ID(){return D},extensions:P,mimes:O,playOnce:ie,render:ne,sineTone:oe,supported:A,validateFormats:R},Symbol.toStringTag,{value:"Module"})),de=Object.freeze(Object.defineProperty({__proto__:null,WebAudioContext:b,WebAudioInstance:V,WebAudioMedia:L,WebAudioNodes:M,WebAudioUtils:_},Symbol.toStringTag,{value:"Module"})),k=s=>{var i;const e=s.src;let t=(i=s==null?void 0:s.alias)==null?void 0:i[0];return(!t||s.src===t)&&(t=F.basename(e,F.extname(e))),t},re={extension:T.Asset,detection:{test:async()=>!0,add:async s=>[...s,...P.filter(e=>A[e])],remove:async s=>s.filter(e=>s.includes(e))},loader:{name:"sound",extension:{type:[T.LoadParser],priority:H.High},test(s){const e=F.extname(s).slice(1);return!!A[e]||O.some(t=>s.startsWith(`data:${t}`))},async load(s,e){const t=await new Promise((i,n)=>w.from({...e.data,url:s,preload:!0,loaded(o,r){var a,h;o?n(o):i(r),(h=(a=e.data)==null?void 0:a.loaded)==null||h.call(a,o,r)}}));return l().add(k(e),t),t},async unload(s,e){l().remove(k(e))}}};N.add(re);const ce=q(new se);export{y as Filter,K as Filterable,w as Sound,se as SoundLibrary,ee as SoundSprite,ue as filters,he as htmlaudio,ce as sound,re as soundAsset,le as utils,de as webaudio};