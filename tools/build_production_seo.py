#!/usr/bin/env python3
from pathlib import Path
import sys,re,xml.etree.ElementTree as ET
from urllib.parse import urljoin
if len(sys.argv)!=2 or not sys.argv[1].startswith(('http://','https://')):
    raise SystemExit('Usage: python tools/build_production_seo.py https://www.example.com/')
base=sys.argv[1].rstrip('/')+'/'
root=Path(__file__).resolve().parents[1]
public=[]
private={'cart.html','checkout.html','account.html','wishlist.html','compare.html','quick-order.html','saved-lists.html','search.html','order-confirmation.html','offline.html','404.html'}
for f in root.glob('*.html'):
    h=f.read_text(encoding='utf-8')
    if f.name not in private:
        h=h.replace('content="noindex,nofollow"','content="index,follow,max-image-preview:large,max-snippet:-1"')
        public.append(f.name)
    f.write_text(h,encoding='utf-8')
config=root/'site-config.js'
s=config.read_text(encoding='utf-8')
s=re.sub(r"seoIndexable:(true|false)","seoIndexable:true",s)
s=re.sub(r"baseUrl:'[^']*'",f"baseUrl:'{base}'",s)
config.write_text(s,encoding='utf-8')
ns='http://www.sitemaps.org/schemas/sitemap/0.9'; ET.register_namespace('',ns); urlset=ET.Element('{%s}urlset'%ns)
for name in sorted(public):
    u=ET.SubElement(urlset,'{%s}url'%ns); ET.SubElement(u,'{%s}loc'%ns).text=urljoin(base,name)
ET.ElementTree(urlset).write(root/'sitemap.xml',encoding='utf-8',xml_declaration=True)
(root/'robots.txt').write_text(f'User-agent: *\\nAllow: /\\nSitemap: {urljoin(base,"sitemap.xml")}\\n',encoding='utf-8')
print('Production SEO enabled for',base)
