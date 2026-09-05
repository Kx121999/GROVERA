(function(){'use strict';
const FILES=['site-config','homepage','campaigns','brands','navigation','translations','pages'];
const clone=o=>JSON.parse(JSON.stringify(o||{}));
const merge=(a,b)=>{if(Array.isArray(b))return clone(b);if(!b||typeof b!=='object')return b===undefined?a:b;const out=(a&&typeof a==='object'&&!Array.isArray(a))?clone(a):{};Object.entries(b).forEach(([k,v])=>{out[k]=(v&&typeof v==='object'&&!Array.isArray(v))?merge(out[k],v):clone(v)});return out};
async function loadFile(name){try{const r=await fetch(`config/${name}.json`,{cache:'no-store'});if(!r.ok)throw new Error(String(r.status));return await r.json()}catch{return clone((window.GR21_DEFAULTS||{})[name])}}
window.GR21_CONTENT_READY=(async()=>{let bundle={};for(const name of FILES)bundle[name]=await loadFile(name);
 const q=new URLSearchParams(location.search);if(q.get('adminPreview')==='1'){try{const p=JSON.parse(localStorage.getItem('gr21_preview_bundle')||'null');if(p&&typeof p==='object')FILES.forEach(name=>{if(p[name])bundle[name]=merge(bundle[name],p[name])})}catch{}}
 window.GR21_BUNDLE=bundle;window.GR_SITE_CONFIG=bundle['site-config']||{};window.GR21_HOMEPAGE=bundle.homepage||{};window.GR21_CAMPAIGNS=bundle.campaigns||{};window.GR21_BRANDS=bundle.brands||{};window.GR21_NAV=bundle.navigation||{};window.GR21_TRANSLATIONS=bundle.translations||{};window.GR21_PAGES=bundle.pages||{};
 const h=window.GR21_HOMEPAGE,c=window.GR21_CAMPAIGNS,p=window.GR21_PAGES;window.GR20_CONTENT={activeCampaign:c.activeCampaign||'',campaigns:Object.fromEntries(Object.entries(c.campaigns||{}).filter(([,x])=>x?.enabled!==false)),categories:h.categoryIntros||{},trust:h.trust||[],crossSell:h.crossSell||{},trustFaq:(p.trustFaq||[]).map(x=>[x.qAr,x.qEn,x.aAr,x.aEn])};
 const th=window.GR_SITE_CONFIG.theme||{},root=document.documentElement;[['--g-dark',th.primary],['--g-dark-2',th.primary2],['--g-green',th.primary2],['--g-leaf',th.leaf],['--g-gold',th.gold],['--g-cream',th.cream]].forEach(([k,v])=>v&&root.style.setProperty(k,v));if(th.radius)root.style.setProperty('--g-radius',th.radius);
 return bundle})();
})();
