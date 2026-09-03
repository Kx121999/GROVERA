(() => {
  'use strict';
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>Array.from(c.querySelectorAll(s));
  const body=document.body, cfg=window.GoldenRoots||{};
  const root=(cfg.root||'/').endsWith('/')?(cfg.root||'/'):(cfg.root||'/')+'/';
  const route=p=>root+p.replace(/^\//,'');
  const isAR=(document.documentElement.lang||'').toLowerCase().startsWith('ar');
  const money=cents=>{try{return new Intl.NumberFormat(document.documentElement.lang||'en',{style:'currency',currency:cfg.currency||body.dataset.currency||'AED'}).format((Number(cents)||0)/100)}catch(e){return ((Number(cents)||0)/100).toFixed(2)+' '+(cfg.currency||'AED')}};
  const esc=s=>String(s??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));

  const backdrop=$('[data-backdrop]'), search=$('[data-search-overlay]'), cart=$('[data-cart-drawer]'), menu=$('[data-mobile-menu]'), wishlistDrawer=$('[data-wishlist-drawer]'), filterDrawer=$('[data-filter-drawer]');
  const layers=[search,cart,menu,wishlistDrawer,filterDrawer].filter(Boolean);
  const openLayer=el=>{if(!el)return; layers.forEach(x=>{if(x!==el)x.classList.remove('is-open')});el.classList.add('is-open');el.setAttribute('aria-hidden','false');backdrop?.classList.add('is-open');body.style.overflow='hidden';};
  const closeLayer=el=>{if(!el)return;el.classList.remove('is-open');el.setAttribute('aria-hidden','true');if(!layers.some(x=>x.classList.contains('is-open'))){backdrop?.classList.remove('is-open');body.style.overflow='';}};
  const closeAll=()=>layers.forEach(closeLayer);
  $$('[data-search-open]').forEach(b=>b.addEventListener('click',()=>{openLayer(search);setTimeout(()=>$('[data-predictive-search-input]')?.focus(),80)}));
  $('[data-search-close]')?.addEventListener('click',()=>closeLayer(search));
  $$('[data-cart-open]').forEach(b=>b.addEventListener('click',async()=>{await refreshCart();openLayer(cart)}));
  $('[data-cart-close]')?.addEventListener('click',()=>closeLayer(cart));
  $('[data-menu-open]')?.addEventListener('click',()=>openLayer(menu)); $('[data-menu-close]')?.addEventListener('click',()=>closeLayer(menu));
  $$('[data-wishlist-open]').forEach(b=>b.addEventListener('click',()=>{renderWishlist();openLayer(wishlistDrawer)}));
  $('[data-wishlist-close]')?.addEventListener('click',()=>closeLayer(wishlistDrawer));
  $('[data-filter-open]')?.addEventListener('click',()=>openLayer(filterDrawer)); $('[data-filter-close]')?.addEventListener('click',()=>closeLayer(filterDrawer));
  backdrop?.addEventListener('click',closeAll); document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()});

  $('[data-locale-toggle]')?.addEventListener('click',e=>e.currentTarget.closest('.g-locale-form')?.classList.toggle('is-open'));
  document.addEventListener('click',e=>{if(!e.target.closest('.g-locale-form'))$('.g-locale-form')?.classList.remove('is-open')});
  $$('[data-mobile-sub-toggle]').forEach(b=>b.addEventListener('click',()=>{const g=b.closest('.g-mobile-nav-group');g?.classList.toggle('is-open');b.textContent=g?.classList.contains('is-open')?'−':'+'}));

  const toast=msg=>{let t=$('.g-toast');if(!t){t=document.createElement('div');t.className='g-toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('is-visible');clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove('is-visible'),2200)};

  // Product quantity, gallery, variants, zoom & sticky CTA
  $$('[data-qty-plus]').forEach(b=>b.addEventListener('click',()=>{const i=b.parentElement.querySelector('input');i.value=Math.max(1,(+i.value||1)+1)}));
  $$('[data-qty-minus]').forEach(b=>b.addEventListener('click',()=>{const i=b.parentElement.querySelector('input');i.value=Math.max(1,(+i.value||1)-1)}));
  $$('[data-thumb]').forEach(btn=>btn.addEventListener('click',()=>{const img=$('[data-main-media] img');if(img&&btn.dataset.src){img.src=btn.dataset.src;$('[data-zoom-image]')?.setAttribute('src',btn.dataset.src);$$('[data-thumb]').forEach(x=>x.classList.remove('is-active'));btn.classList.add('is-active')}}));
  $('[data-zoom-open]')?.addEventListener('click',()=>{$('[data-image-zoom]')?.classList.add('is-open');body.style.overflow='hidden'});
  $('[data-zoom-close]')?.addEventListener('click',()=>{$('[data-image-zoom]')?.classList.remove('is-open');body.style.overflow=''});
  $('[data-image-zoom]')?.addEventListener('click',e=>{if(e.target.matches('[data-image-zoom]')){$('[data-image-zoom]').classList.remove('is-open');body.style.overflow=''}});

  const variantSelect=$('[data-product-root] [data-variant-select]');
  const updateVariantUI=()=>{if(!variantSelect)return;const opt=variantSelect.selectedOptions[0];if(!opt)return;const available=opt.dataset.available==='true';const price=$('[data-product-price]'), compare=$('[data-product-compare]'), sticky=$('[data-sticky-price]'), add=$('[data-main-add]');if(price&&opt.dataset.price)price.textContent=opt.dataset.price;if(sticky&&opt.dataset.price)sticky.textContent=opt.dataset.price;if(compare){compare.textContent=opt.dataset.compare||'';compare.hidden=!opt.dataset.compare}if(add){add.disabled=!available;add.textContent=available?(isAR?'أضف إلى السلة':'Add to cart'):(isAR?'غير متوفر':'Sold out')}const stock=$('[data-stock-line]');if(stock){stock.classList.toggle('is-out',!available);stock.innerHTML=available?`<span></span>${isAR?'متوفر وجاهز للطلب':'In stock and ready to order'}`:(isAR?'غير متوفر حالياً':'Currently unavailable')}};
  variantSelect?.addEventListener('change',updateVariantUI);
  $$('[data-option-radio]').forEach(r=>r.addEventListener('change',()=>{if(!variantSelect)return;const values=[];$$('.g-option-group').forEach(g=>{const c=g.querySelector('input:checked');if(c)values.push(c.value)});const key=values.join('||');const opt=Array.from(variantSelect.options).find(o=>o.dataset.options===key);if(opt){variantSelect.value=opt.value;variantSelect.dispatchEvent(new Event('change',{bubbles:true}))}}));
  updateVariantUI();
  const mainForm=$('[data-product-form]');
  $('[data-sticky-add]')?.addEventListener('click',()=>mainForm?.requestSubmit());
  if(mainForm){const sticky=$('[data-sticky-atc]');const observer=new IntersectionObserver(entries=>{sticky?.classList.toggle('is-visible',!entries[0].isIntersecting)},{threshold:.15});observer.observe(mainForm)}

  // Cart
  async function getCart(){const r=await fetch(route('cart.js'),{headers:{Accept:'application/json'}});if(!r.ok)throw new Error('Cart fetch failed');return r.json()}
  function renderShippingProgress(data){const wrap=$('[data-shipping-progress]'), msg=$('[data-shipping-message]'), bar=$('[data-shipping-progress-bar]');const threshold=Number(cfg.freeShipping||0);if(!wrap||!threshold){if(wrap)wrap.hidden=true;return}wrap.hidden=false;const remaining=Math.max(0,threshold-data.total_price),pct=Math.min(100,Math.round((data.total_price/threshold)*100));bar?.style.setProperty('--progress',pct+'%');if(msg)msg.textContent=remaining>0?(isAR?`أضف ${money(remaining)} للوصول إلى حد الشحن المجاني`:`Add ${money(remaining)} to reach the free-shipping threshold`):(isAR?'وصلت إلى حد الشحن المجاني':'You reached the free-shipping threshold')}
  function renderCart(data){$$('[data-cart-count]').forEach(el=>el.textContent=data.item_count);const total=$('[data-cart-total]');if(total)total.textContent=money(data.total_price);renderShippingProgress(data);const items=$('[data-cart-items]');if(!items)return;if(!data.items.length){items.innerHTML=`<div class="g-empty-state"><div class="g-empty-icon">✓</div><h4>${isAR?'السلة فارغة':'Your cart is empty'}</h4><p>${isAR?'ابدأ بإضافة المنتجات التي تحتاجها.':'Add the products you need to get started.'}</p></div>`;return}items.innerHTML=data.items.map((i,index)=>`<div class="g-drawer-item" data-cart-line="${index+1}"><a class="g-drawer-thumb" href="${esc(i.url)}">${i.image?`<img src="${esc(i.image)}" alt="${esc(i.product_title)}">`:''}</a><div><a class="g-drawer-title" href="${esc(i.url)}">${esc(i.product_title)}</a>${i.variant_title&&i.variant_title!=='Default Title'?`<small>${esc(i.variant_title)}</small>`:''}<span>${money(i.final_price)}</span><div class="g-drawer-item-controls"><button type="button" data-cart-dec aria-label="minus">−</button><span>${i.quantity}</span><button type="button" data-cart-inc aria-label="plus">+</button><button class="g-drawer-remove" type="button" data-cart-remove>${isAR?'حذف':'Remove'}</button></div></div><strong>${money(i.final_line_price)}</strong></div>`).join('')}
  async function refreshCart(){try{const data=await getCart();renderCart(data);return data}catch(err){console.warn(err)}}
  async function changeCart(line,quantity){const r=await fetch(route('cart/change.js'),{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({line:Number(line),quantity:Number(quantity)})});if(!r.ok)throw new Error('Cart update failed');const data=await r.json();renderCart(data);return data}
  $('[data-cart-items]')?.addEventListener('click',async e=>{const row=e.target.closest('[data-cart-line]');if(!row)return;const line=row.dataset.cartLine, qty=Number(row.querySelector('.g-drawer-item-controls span')?.textContent||1);try{if(e.target.closest('[data-cart-inc]'))await changeCart(line,qty+1);else if(e.target.closest('[data-cart-dec]'))await changeCart(line,Math.max(0,qty-1));else if(e.target.closest('[data-cart-remove]'))await changeCart(line,0)}catch(err){toast(isAR?'تعذر تحديث السلة':'Could not update cart')}});
  async function ajaxAdd(form){const btn=form.querySelector('[type="submit"]');const old=btn?.innerHTML;try{if(btn){btn.disabled=true;btn.textContent='…'}const fd=new FormData(form);const r=await fetch(route('cart/add.js'),{method:'POST',body:fd,headers:{Accept:'application/json'}});if(!r.ok){const err=await r.json().catch(()=>({}));throw new Error(err.description||'Add failed')}await refreshCart();openLayer(cart);toast(isAR?'تمت الإضافة إلى السلة':'Added to cart')}finally{if(btn){btn.disabled=false;btn.innerHTML=old}}}
  $$('[data-product-form],[data-quick-add-form]').forEach(form=>form.addEventListener('submit',async e=>{if(!window.fetch)return;e.preventDefault();try{await ajaxAdd(form)}catch(err){toast(err.message|| (isAR?'تعذر إضافة المنتج':'Could not add product'))}}));
  refreshCart();

  // Predictive search
  const searchInput=$('[data-predictive-search-input]'), searchResults=$('[data-predictive-results]');let searchTimer;
  const renderPredictive=products=>{if(!searchResults)return;if(!products.length){searchResults.innerHTML=`<div class="g-predictive-empty">${isAR?'لا توجد منتجات مطابقة':'No matching products'}</div>`;return}searchResults.innerHTML=products.map(p=>`<a class="g-predictive-item" href="${esc(p.url)}">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.title)}">`:'<span></span>'}<div><strong>${esc(p.title)}</strong>${p.vendor?`<small>${esc(p.vendor)}</small>`:''}</div><span>${p.price?money(Number(p.price)*100):''}</span></a>`).join('')};
  searchInput?.addEventListener('input',()=>{clearTimeout(searchTimer);const q=searchInput.value.trim();if(q.length<2){if(searchResults)searchResults.innerHTML='';return}if(searchResults)searchResults.innerHTML='<div class="g-search-loading"></div>';searchTimer=setTimeout(async()=>{try{const url=new URL(route('search/suggest.json'),location.origin);url.searchParams.set('q',q);url.searchParams.set('resources[type]','product');url.searchParams.set('resources[limit]','6');const r=await fetch(url,{headers:{Accept:'application/json'}});const data=await r.json();renderPredictive(data?.resources?.results?.products||[])}catch(e){if(searchResults)searchResults.innerHTML=''}},250)});

  // Wishlist
  const WKEY='golden_roots_wishlist_v1';const getWishlist=()=>{try{return JSON.parse(localStorage.getItem(WKEY)||'[]')}catch(e){return[]}};const saveWishlist=v=>{localStorage.setItem(WKEY,JSON.stringify(v));syncWishlist()};
  function syncWishlist(){const list=getWishlist();$$('[data-wishlist-count]').forEach(x=>x.textContent=list.length);$$('[data-wishlist-toggle]').forEach(btn=>btn.classList.toggle('is-active',list.some(x=>x.handle===btn.dataset.handle)))}
  function renderWishlist(){const box=$('[data-wishlist-items]');if(!box)return;const list=getWishlist();if(!list.length){box.innerHTML=`<div class="g-empty-state"><h4>${isAR?'لا توجد منتجات في المفضلة':'Your wishlist is empty'}</h4><p>${isAR?'اضغط على رمز القلب لحفظ أي منتج.':'Tap the heart icon to save a product.'}</p></div>`;return}box.innerHTML=list.map(x=>`<div class="g-wishlist-item" data-wishlist-row="${esc(x.handle)}"><a href="${esc(x.url)}">${x.image?`<img src="${esc(x.image)}" alt="${esc(x.title)}">`:''}</a><a href="${esc(x.url)}"><strong>${esc(x.title)}</strong></a><button type="button" data-wishlist-remove aria-label="remove">×</button></div>`).join('')}
  document.addEventListener('click',e=>{const btn=e.target.closest('[data-wishlist-toggle]');if(!btn)return;let list=getWishlist();const handle=btn.dataset.handle,idx=list.findIndex(x=>x.handle===handle);if(idx>=0){list.splice(idx,1);toast(isAR?'تمت الإزالة من المفضلة':'Removed from wishlist')}else{list.unshift({handle,title:btn.dataset.title,url:btn.dataset.url,image:btn.dataset.image});toast(isAR?'تمت الإضافة إلى المفضلة':'Added to wishlist')}saveWishlist(list)});
  $('[data-wishlist-items]')?.addEventListener('click',e=>{const b=e.target.closest('[data-wishlist-remove]');if(!b)return;const handle=b.closest('[data-wishlist-row]')?.dataset.wishlistRow;saveWishlist(getWishlist().filter(x=>x.handle!==handle));renderWishlist()});syncWishlist();

  // Recently viewed
  const RKEY='golden_roots_recent_v1';const current=$('[data-current-product]');if(current){try{const p=JSON.parse(current.textContent),list=JSON.parse(localStorage.getItem(RKEY)||'[]').filter(x=>x.handle!==p.handle);list.unshift(p);localStorage.setItem(RKEY,JSON.stringify(list.slice(0,8)))}catch(e){}}
  const recentSection=$('[data-recently-viewed-section]'), recentGrid=$('[data-recently-viewed-grid]');if(recentSection&&recentGrid){try{const currentHandle=current?JSON.parse(current.textContent).handle:null;const list=JSON.parse(localStorage.getItem(RKEY)||'[]').filter(x=>x.handle!==currentHandle).slice(0,4);if(list.length){recentSection.hidden=false;recentGrid.innerHTML=list.map(x=>`<a class="g-recent-card" href="${esc(x.url)}">${x.image?`<img src="${esc(x.image)}" alt="${esc(x.title)}">`:''}<div><strong>${esc(x.title)}</strong><span>${esc(x.price)}</span></div></a>`).join('')}}catch(e){}}

  // Product recommendations loaded through Shopify section endpoint
  const rec=$('[data-product-recommendations]');if(rec&&rec.dataset.url&&rec.querySelector('.g-products-grid')===null){fetch(rec.dataset.url).then(r=>r.text()).then(html=>{const doc=new DOMParser().parseFromString(html,'text/html'),fresh=doc.querySelector('[data-product-recommendations]');if(fresh&&fresh.querySelector('.g-products-grid'))rec.innerHTML=fresh.innerHTML}).catch(()=>{})}
})();
