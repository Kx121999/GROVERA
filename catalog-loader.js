(function(){
  const fallback=window.GR_CATALOG_FALLBACK||{products:[],categories:{}};
  window.GR_CATALOG_READY=(async()=>{
    if(location.protocol==='file:'){ window.GR_CATALOG=fallback; return fallback; }
    try{
      const r=await fetch('catalog.json',{cache:'no-cache'});
      if(!r.ok) throw new Error('catalog '+r.status);
      const data=await r.json();
      if(!data||!Array.isArray(data.products)) throw new Error('invalid catalog');
      window.GR_CATALOG=data; return data;
    }catch(err){ console.warn('[Golden Roots] catalog fallback',err); window.GR_CATALOG=fallback; return fallback; }
  })();
})();
