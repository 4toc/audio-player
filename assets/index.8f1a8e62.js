import{c as O,d as y,u as k,o as u,a as _,b as r,t as v,e as B,f as T,r as D,F as E,g as j,h as C,i as h,w as q,j as m,k as H,l as g,m as K}from"./vendor.e1482f96.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}};R();var z=[{id:0,title:"Slum Lord",author:"djshanty",duration:"2:11"},{id:1,title:"new song",author:"mixwell",duration:"3:31"},{id:2,title:"Electronic",author:"writer",duration:"1:26"}];const G=O({state:{musicList:[],currentTrack:void 0,currentTrackIndex:0,search:""},getters:{getCurrentTrack(e){return e.currentTrack},getMusicList(e){return e.musicList.filter(s=>{if(s.title.toLowerCase().includes(e.search.toLowerCase())||s.author.toLowerCase().includes(e.search.toLowerCase()))return!0})}},mutations:{setMusicList(e,s){e.musicList=s},setCurrentTrackFromIndex(e,s){e.currentTrackIndex=s,e.currentTrack=e.musicList[s]},setCurrentTrackFromId(e,s){e.currentTrack=e.musicList.find((a,i)=>{if(a.id===s)return e.currentTrackIndex=i,!0})},setSearch(e,s){e.search=s}},actions:{fetchApi(e){e.commit("setMusicList",z),e.commit("setCurrentTrackFromIndex",0)},nextTrack(e){const s=e.state.musicList.length-1===e.state.currentTrackIndex?1:e.state.currentTrackIndex+1;e.commit("setCurrentTrackFromIndex",s)},prevTrack(e){const s=e.state.currentTrackIndex===0?e.state.musicList.length-1:e.state.currentTrackIndex-1;e.commit("setCurrentTrackFromIndex",s)}}});const J={class:"music-list-item__name"},Q={class:"music-list-item__title"},U={class:"music-list-item__author"},W={class:"music-list-item__duration"},X=y({props:{item:null},setup(e){const s=e,a=k(),i=()=>{a.commit("setCurrentTrackFromId",s.item.id)};return(t,o)=>(u(),_("div",{class:"music-list-item",onClick:i},[r("div",J,[r("span",Q,v(s.item.title),1),r("span",U," - "+v(s.item.author),1)]),r("div",W,v(s.item.duration),1)]))}});var Y=(e,s)=>{const a=e.__vccOpts||e;for(const[i,t]of s)a[i]=t;return a};const Z=y({components:{MusicListItem:X},setup(){const e=k();return B(async()=>{await e.dispatch("fetchApi")}),{musicList:T(()=>e.getters.getMusicList)}}});function ee(e,s,a,i,t,o){const l=D("music-list-item");return u(),_("div",null,[(u(!0),_(E,null,j(e.musicList,d=>(u(),C(l,{item:d,key:d.id},null,8,["item"]))),128))])}var te=Y(Z,[["render",ee]]),I="/audio-player/assets/next.c948acdd.svg",se="/audio-player/assets/pause.4d3ca827.svg",re="/audio-player/assets/play.ce1ea835.svg",ae="/audio-player/assets/volume-off.21a1a38b.svg",oe="/audio-player/assets/volume-on.2d284563.svg";function ne(e){return e.toString().padStart(2,"0")}function ie(e){const s=Math.floor(e/6e4),a=Math.round(e%6e4/1e3);return a===60?`${s+1}:00`:`${s}:${ne(a)}`}var ce="/audio-player/assets/track1.b0d3240d.mp3",ue="/audio-player/assets/track2.58f18191.mp3",le="/audio-player/assets/track3.c257af39.mp3";const _e={key:0,class:"audio-player"},de={class:"audio-player__track"},me={class:"audio-player__name"},pe={class:"audio-player__title"},ve=r("div",{class:"audio-player__space"},"-",-1),he={class:"audio-player__author"},ye={class:"audio-player__progress-line"},fe=["value"],ke={class:"audio-player__time"},ge={class:"audio-player__buttons"},Te=r("img",{src:I,alt:""},null,-1),Le=[Te],xe={key:0,src:se,alt:""},Ce={key:1,src:re,alt:""},Ie=r("img",{src:I,alt:""},null,-1),$e=[Ie],be=["src"],Se={class:"audio-player__volume"},Me={key:0,src:ae,alt:""},we={key:1,src:oe,alt:""},Ne={class:"audio-player__volume-line"},Fe=["value"],Pe=y({setup(e){const s=k(),a=T(()=>s.getters.getCurrentTrack);let i=h(0);const t=h();let o=h(!1),l=h(0);const d=h(50),$={0:ce,1:ue,2:le},b=T(()=>i.value?ie(i.value*1e3):"00:00");q(a,n=>{i.value=0,l.value=0,o.value=!1});const S=()=>{s.dispatch("prevTrack")},M=()=>{s.dispatch("nextTrack")},w=()=>{var n,c,p,f;o.value=(n=t.value)==null?void 0:n.paused,(c=t.value)!=null&&c.paused?(p=t.value)==null||p.play():(f=t.value)==null||f.pause()},N=()=>{var n,c,p,f,x;((n=t.value)==null?void 0:n.currentTime)&&((c=t.value)==null?void 0:c.duration)&&(i.value=(p=t.value)==null?void 0:p.currentTime,l.value=((f=t.value)==null?void 0:f.currentTime)/((x=t.value)==null?void 0:x.duration)*100)},F=()=>{var n,c;if((n=t.value)!=null&&n.duration){const p=((c=t.value)==null?void 0:c.duration)*(Number(l.value)/100);t.value.currentTime=p}},P=()=>{d.value=d.value===0?50:0,L()},L=()=>{var n;typeof((n=t.value)==null?void 0:n.volume)=="number"&&(t.value.volume=Number(d.value)/100)},V=n=>{const c=n.target;d.value=Number(c.value)},A=n=>{const c=n.target;l.value=Number(c.value)};return(n,c)=>m(a)?(u(),_("div",_e,[r("div",de,[r("div",me,[r("div",pe,v(m(a).title),1),ve,r("div",he,v(m(a).author),1)]),r("div",ye,[r("input",{type:"range",min:"0",max:"100",step:"1",value:m(l),onInput:A,onChange:F},null,40,fe)]),r("div",ke,[r("span",null,v(m(b)),1),r("span",null,v(m(a).duration),1)]),r("div",ge,[r("div",{class:"audio-player__btn audio-player__btn--prev",onClick:S},Le),r("div",{onClick:w,class:"audio-player__btn"},[m(o)?(u(),_("img",xe)):(u(),_("img",Ce))]),r("div",{class:"audio-player__btn",onClick:M},$e)]),r("audio",{ref_key:"player",ref:t,src:$[m(a).id],preload:"metadata",onTimeupdate:N},null,40,be)]),r("div",Se,[r("div",{class:"audio-player__volume-icon",onClick:P},[d.value===0?(u(),_("img",Me)):(u(),_("img",we))]),r("div",Ne,[r("input",{type:"range",min:"0",max:"100",step:"1",value:d.value,onInput:V,onChange:L},null,40,Fe)])])])):H("",!0)}});const Ve={class:"search-track"},Ae=y({setup(e){const s=k(),a=h(""),i=t=>{if(t&&t.target){const o=t.target;a.value=o.value,s.commit("setSearch",o.value)}};return(t,o)=>(u(),_("div",Ve,[r("input",{type:"text",placeholder:"Search for artist or track",onInput:i},null,32)]))}});const Oe={class:"main-page"},Be=y({setup(e){return(s,a)=>(u(),_("div",Oe,[g(Pe),g(Ae),g(te)]))}});const De=y({setup(e){return(s,a)=>(u(),C(Be))}});K(De).use(G).mount("#app");
