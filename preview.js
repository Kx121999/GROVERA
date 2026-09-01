(() => {
  const q = (s, root=document) => root.querySelector(s);
  const qa = (s, root=document) => [...root.querySelectorAll(s)];
  const backdrop = q('.g-backdrop');
  const search = q('.g-search-overlay');
  const cart = q('.g-cart-drawer');
  const wishlist = q('.g-wishlist-drawer');
  const mobile = q('.g-mobile-menu');

  function closeAll(){
    search?.classList.remove('is-open');
    cart?.classList.remove('is-open');
    wishlist?.classList.remove('is-open');
    mobile?.classList.remove('is-open');
    mobile?.setAttribute('aria-hidden','true');
    backdrop?.classList.remove('is-open');
    document.documentElement.style.overflow='';
  }
  function open(el){
    closeAll();
    el?.classList.add('is-open');
    backdrop?.classList.add('is-open');
    document.documentElement.style.overflow='hidden';
  }

  qa('[data-search-open]').forEach(b=>b.addEventListener('click',()=>open(search)));
  qa('[data-search-close]').forEach(b=>b.addEventListener('click',closeAll));
  qa('[data-cart-open]').forEach(b=>b.addEventListener('click',()=>open(cart)));
  qa('[data-cart-close]').forEach(b=>b.addEventListener('click',closeAll));
  qa('[data-wishlist-open]').forEach(b=>b.addEventListener('click',()=>open(wishlist)));
  qa('[data-wishlist-close]').forEach(b=>b.addEventListener('click',closeAll));
  qa('[data-menu-open]').forEach(b=>b.addEventListener('click',()=>{
    closeAll();
    mobile?.classList.add('is-open');
    mobile?.setAttribute('aria-hidden','false');
    backdrop?.classList.add('is-open');
    document.documentElement.style.overflow='hidden';
  }));
  qa('[data-menu-close]').forEach(b=>b.addEventListener('click',closeAll));
  backdrop?.addEventListener('click',closeAll);
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeAll(); });

  qa('[data-wishlist-toggle]').forEach(btn=>btn.addEventListener('click',e=>{
    e.preventDefault();
    btn.classList.toggle('is-active');
    btn.textContent = btn.classList.contains('is-active') ? '♥' : '♡';
  }));

  // Simple preview quantity controls
  qa('.g-drawer-item-controls').forEach(row=>{
    const buttons=qa('button',row).filter(b=>!b.classList.contains('g-drawer-remove'));
    const count=q('span',row);
    if(buttons.length>=2 && count){
      buttons[0].addEventListener('click',()=>count.textContent=Math.max(1,(+count.textContent||1)-1));
      buttons[1].addEventListener('click',()=>count.textContent=(+count.textContent||1)+1);
    }
  });

  // Keep preview links usable when href is omitted in demo anchors
  qa('a:not([href])').forEach(a=>a.setAttribute('href','#'));
})();
