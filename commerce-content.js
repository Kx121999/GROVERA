window.GR20_CONTENT={
  activeCampaign:'selected-offers',
  campaigns:{
    'selected-offers':{
      kicker:'SELECTED OFFERS',
      ar:'عروض مختارة على احتياجات زراعية',
      en:'Selected value across agricultural essentials',
      copy_ar:'تصفح المنتجات التي يظهر عليها سعر سابق وسعر حالي داخل الكتالوج، مع وصول مباشر للقسم والمنتج.',
      copy_en:'Browse catalog items that currently show a previous and current price, with direct paths to category and product.',
      cta_ar:'تصفح العروض', cta_en:'Browse offers', target:'offers.html'
    },
    'season-start':{
      kicker:'SEASON START',
      ar:'بداية مرتبة للموسم',
      en:'A cleaner start to the season',
      copy_ar:'مسار تجاري يجمع البذور والتغذية والري في صفحة واحدة لتقليل خطوات التصفح.',
      copy_en:'A commercial path bringing seeds, nutrition and irrigation into one page to reduce browsing steps.',
      cats:['seeds','fertilizers','irrigation']
    },
    'farm-orders':{
      kicker:'FARM & B2B',
      ar:'طلبات المزارع والشركات',
      en:'Farm and business ordering',
      copy_ar:'طلب سريع للكميات وقوائم محفوظة ومسار عرض سعر للطلبات الأكبر.',
      copy_en:'Quick quantity ordering, saved lists and a quote path for larger orders.',
      cats:['tools','irrigation','greenhouses']
    }
  },
  categories:{
    seeds:{kicker:'SEEDS',ar:'ابدأ باختيار البذور بشكل أوضح',en:'Start with a clearer seed selection',copy_ar:'تصفح البذور حسب المحصول والعبوة، ثم انتقل للمنتج مباشرة بدون زحمة معلومات.',copy_en:'Browse seeds by crop and pack, then move directly to the product without unnecessary clutter.',points_ar:['حسب المحصول','حسب العبوة','بحث بالاسم أو SKU'],points_en:['By crop','By pack','Search by name or SKU']},
    fertilizers:{kicker:'NUTRITION',ar:'التغذية في كتالوج مرتب',en:'Nutrition in a structured catalog',copy_ar:'قارن التركيبات والأحجام والأسعار داخل مسار واضح، مع إبقاء تفاصيل المنتج في مكانها الصحيح.',copy_en:'Compare formulations, sizes and prices in a clean path while keeping product detail where it belongs.',points_ar:['تركيبات واضحة','أحجام مختلفة','فلترة بالسعر والتوفر'],points_en:['Clear formulations','Multiple sizes','Price & stock filters']},
    pesticides:{kicker:'CROP PROTECTION',ar:'حماية المحصول باختيار مسؤول',en:'Crop protection with responsible selection',copy_ar:'تصفح منتجات الحماية حسب الفئة، واقرأ بيانات المنتج واتبع الملصق والتوصيات المعتمدة قبل الاستخدام.',copy_en:'Browse crop-protection products by category, read product data and follow the label and approved recommendations before use.',points_ar:['بيانات المنتج أولاً','فلترة حسب الفئة','تنبيه استخدام واضح'],points_en:['Product data first','Filter by category','Clear use notice']},
    irrigation:{kicker:'IRRIGATION',ar:'الري والتوصيلات في مسار واحد',en:'Irrigation and fittings in one path',copy_ar:'من النقاطات والوصلات إلى مكونات التجهيز، مع بحث سريع وطلب كميات للمشروعات.',copy_en:'From emitters and fittings to setup components, with faster search and volume ordering for projects.',points_ar:['مكونات وتجهيزات','بحث سريع','طلب كميات'],points_en:['Components & setup','Fast search','Volume ordering']},
    tools:{kicker:'TOOLS',ar:'أدوات واضحة للمهمة',en:'Tools matched to the job',copy_ar:'تصفح الأدوات والمعدات ببطاقات مختصرة، مع المواصفات الأساسية والسعر والتوفر في المقدمة.',copy_en:'Browse tools and equipment with concise cards that surface key specs, price and availability.',points_ar:['مواصفات أساسية','سعر واضح','توفر مباشر'],points_en:['Key specs','Clear price','Live availability']},
    greenhouses:{kicker:'GREENHOUSES',ar:'مستلزمات البيوت المحمية',en:'Greenhouse essentials',copy_ar:'مسار مخصص للتجهيزات والمستلزمات مع وصول سريع لطلبات المشاريع والكميات.',copy_en:'A dedicated path for greenhouse supplies with quick access to project and volume-order flows.',points_ar:['مستلزمات المشروع','كميات ومشروعات','تواصل مباشر'],points_en:['Project essentials','Volume & projects','Direct contact']}
  },
  trust:[
    {icon:'01',ar:'كتالوج منظم',en:'Structured catalog',copy_ar:'الأقسام والبحث والفلاتر مبنية لتقليل وقت الوصول للمنتج.',copy_en:'Categories, search and filters are built to reduce time-to-product.'},
    {icon:'02',ar:'طلبات أفراد ومزارع',en:'Retail & farm flows',copy_ar:'مسار شراء عادي ومسار طلب سريع وقوائم للطلبات المتكررة.',copy_en:'Standard shopping plus quick order and reusable lists for repeat needs.'},
    {icon:'03',ar:'شفافية التوفر والسعر',en:'Clear price & availability',copy_ar:'السعر وحالة التوفر تظهران قبل دخول العميل في خطوات الطلب.',copy_en:'Price and availability are surfaced before the customer enters ordering steps.'},
    {icon:'04',ar:'عربي وإنجليزي',en:'Arabic & English',copy_ar:'تجربة RTL وLTR من نفس الكتالوج ونفس الصفحات.',copy_en:'RTL and LTR experiences from the same catalog and pages.'}
  ],
  crossSell:{
    seeds:['fertilizers','irrigation'],
    fertilizers:['tools','irrigation'],
    pesticides:['tools'],
    irrigation:['tools','greenhouses'],
    tools:['irrigation'],
    greenhouses:['irrigation','tools']
  },
  trustFaq:[
    ['كيف أعرف حالة توفر المنتج؟','How do I know product availability?','تظهر حالة التوفر على بطاقة المنتج وداخل صفحة المنتج قبل الإضافة للسلة.','Availability appears on the product card and product page before adding to cart.'],
    ['هل يوجد مسار للكميات؟','Is there a volume-order path?','نعم، الطلب السريع وقوائم المزرعة وطلب عرض السعر موجودة كمسارات منفصلة.','Yes. Quick Order, Farm Lists and Request Quote are separate flows.'],
    ['هل الدفع الإلكتروني يعمل الآن؟','Is online payment live now?','لا. صفحة إتمام الطلب الحالية تعرض تجربة الواجهة فقط إلى أن يتم ربط مزود دفع حقيقي.','No. The current checkout demonstrates the interface until a real payment provider is connected.'],
    ['هل السياسات نهائية؟','Are the policies final?','تصميم صفحات الشحن والاسترجاع والخصوصية جاهز، أما النصوص التشغيلية والقانونية النهائية فتُعتمد من الشركة قبل الإطلاق.','Shipping, returns and privacy page designs are ready; final operational and legal wording must be approved by the company before launch.']
  ]
};