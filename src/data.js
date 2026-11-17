// Semua konten dipindah dari situs lama. Edit di sini, tampilan otomatis ikut.
// Teks bertanda TODO masih placeholder (lorem ipsum) dari template lama — silakan isi.

export const profile = {
  name: 'Muhammad Rayza Jamal',
  short: 'Rayza',
  title: 'App Builder & Data Analyst',
  subtitle: 'Creative Media Specialist',
  photo: './img/my-profile-img.jpg',
  cv: 'https://drive.google.com/file/d/1latfNBDHaf19u9dWy6PaolJ1DujC3lVu/view?usp=sharing',
  email: 'Rayzasix@gmail.com',
  phone: '+6282119378422',
  city: 'Jakarta, Indonesia',
  address: 'Jln Bangka III, Pela Mampang, Jakarta Selatan, Indonesia',
  website: 'muhammadrayzajamal.github.io',
  instagram: '@rayzajml',
  education: 'Computer Engineering, Universitas Pamulang',
  freelance: 'Open to opportunities',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/rayzajml' },
    { label: 'GitHub', href: 'https://github.com/MuhammadRayzaJamal' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rayza-jamal-6094012b7' },
    { label: 'X', href: 'https://x.com/RayzaJamal?t=mFSmi_ZUeHegIqQX6FHtLg&s=09' },
  ],
}

export const nav = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'resume', label: 'Experience' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'highlights', label: 'Collaborations' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  intro: 'A Computer Engineering student who combines technical and creative skills.',
  headline: 'App builder and data analyst with a creative edge.',
  lead:
    'I have experience building and analyzing applications, managing dashboards and data, and producing visual content — from graphic design and video editing to social media management.',
  body:
    'I am results-driven and comfortable working independently or in a team. I believe collaboration and innovation are the keys to outstanding results.',
}

export const stats = [
  { value: 3, suffix: '', label: 'Companies worked with' },
  { value: 1, suffix: '', label: 'App built & released (APK)' },
  { value: 2, suffix: '', label: 'Mobile platforms analyzed' },
  { value: 3, suffix: '', label: 'Films produced' },
]

export const skillGroups = [
  { title: 'Data & Apps', items: ['Web Scraping', 'Data Analysis', 'Android/iOS App Analysis', 'Dashboard'] },
  { title: 'Programming', items: ['Next.js', 'PHP', 'HTML', 'MySQL', 'SQL Server', 'VS Code'] },
  { title: 'Design & Video', items: ['Adobe Illustrator', 'CorelDRAW', 'Canva', 'Premiere Pro', 'CapCut'] },
  { title: 'Other', items: ['AI (Claude)', 'Public Speaking', 'Social Media', 'Infinity (Project Mgmt)'] },
]

export const resume = {
  intro: 'From building and analyzing apps to running dashboards and leading media teams.',
  summary:
    'I am results-driven, comfortable working independently or in a team, and I believe collaboration and innovation are the keys to outstanding results.',
  experience: [
    {
      title: 'Cliploo App Development & Analysis',
      period: '2026',
      place: 'PT Cliploo Teknologi Interaktif',
      points: [
        'Built the Cliploo app (APK) from feature planning and development through testing and release.',
        'Scraped data from multiple sources to power the app’s content and features, then cleaned and structured it so it was ready to use.',
        'Analyzed the Node.js-based app and its data to assess performance, user behavior, and improvement opportunities, turning findings into product recommendations.',
        'Worked with the team to test, fix bugs, and continuously optimize the app.',
      ],
    },
    {
      title: 'Dashboard & App Analyst · Admin PoliceTube',
      period: '2025',
      place: 'PT Digital Unggul Gemilang',
      points: [
        'Managed and maintained the dashboard and oversaw the operations of police channels on the platform.',
        'Conducted in-depth analysis of Android and iOS applications to evaluate their functionality and quality.',
        'Key member of the PoliceTube administrative team: optimized workflows, managed content, and kept operations efficient.',
      ],
    },
    {
      title: 'Content & Dashboard Specialist',
      period: '2024 — 2025',
      place: 'PT Bintang Data Prima Inovasi (HITZTAR)',
      points: [
        'Managed the dashboard, and designed and ran the Instagram account with a consistent content strategy.',
        'Helped organize major events at Casablanca City Mall and produced news content, supporting both digital and on-site initiatives.',
      ],
    },
    {
      title: 'Head of Media',
      period: '2024',
      place: 'IKRIA (At-Taqwa Mosque Youth) & RT.015/RW.003 Youth (ELYON_XXIV)',
      points: [
        'Led the media team: designed and managed Instagram accounts with a cohesive, aesthetic layout.',
        'Created engaging content across platforms using graphic design, branding, and audience engagement techniques to boost visibility and interaction.',
      ],
    },
    {
      title: 'Film Production, Promo Videos & Coverage Projects',
      period: '2021 — 2022',
      place: 'Vocational School',
      points: [
        'Helped produce three films and promotional videos for the school as cameraman, synopsis writer, and editing contributor, and played a lead role in a film for an inter-vocational school competition.',
        'Served as cameraman and journalist on coverage projects and helped edit the results.',
      ],
    },
  ],
  education: [
    {
      title: 'Computer Engineering',
      period: 'Current',
      place: 'Universitas Pamulang',
      text: 'Programming, database management, and software development.',
    },
    {
      title: 'Multimedia',
      period: '2020 — 2022',
      place: 'SMK Cyber Media',
      text: 'Graphic design, video editing, web development, and film and ad production.',
    },
    {
      title: 'Junior High School',
      period: '2017 — 2019',
      place: 'SMP Negeri 141',
    },
  ],
}

const p = './img/portfolio/'
export const portfolio = {
  intro:
    'Applications, platforms and digital content I have worked on at Digital Unggul and Hitztar, from dashboards and apps to event branding and certificates.',
  filters: ['All', 'App', 'Branding', 'Certificate'],
  items: [
    { cat: 'App', title: 'Web Hitztar', img: p + 'app.png' },
    { cat: 'App', title: 'Web PoliceTube', img: p + 'app5.png' },
    { cat: 'App', title: 'App Hitztar / PoliceTube', img: p + 'app3.png' },
    { cat: 'Branding', title: 'Event Hitztar I', img: p + 'branding-1.jpg' },
    { cat: 'Branding', title: 'Event Hitztar II', img: p + 'branding-2.jpg' },
    { cat: 'Branding', title: 'Event Hitztar III', img: p + 'branding-3.jpg' },
    { cat: 'Certificate', title: 'Design Award', img: p + 'certif1.jpg' },
    { cat: 'Certificate', title: 'AI Seminar', img: p + 'certif2.png' },
    { cat: 'Certificate', title: 'Persuasive Technology & Gamification', img: p + 'certif3.png' },
    { cat: 'Certificate', title: 'Hitztar', img: p + 'certif4.png' },
    { cat: 'Certificate', title: 'Basic Investment', img: p + 'certif5.png' },
    { cat: 'Certificate', title: 'Digital Entrepreneurship Innovative', img: p + 'certif7.png' },
  ],
}

export const showcase = {
  intro: 'The four areas where I contribute most — from shipping apps to turning data and visuals into results.',
  items: [
    {
      id: 'build',
      title: 'App Development',
      text: 'Planning features, building, testing and releasing apps, backed by a web and database toolkit.',
      tags: ['Node.js', 'Next.js', 'PHP', 'HTML', 'MySQL', 'SQL Server'],
      links: [],
    },
    {
      id: 'data',
      title: 'Data Scraping & Analysis',
      text: 'Collecting data from multiple sources, cleaning and structuring it, then analyzing it into product recommendations.',
      tags: ['Web scraping', 'Data cleaning', 'Data analysis', 'Insights'],
      links: [],
    },
    {
      id: 'ops',
      title: 'App & Dashboard Analysis',
      text: 'Analyzing Android and iOS apps and running dashboards and admin operations for content platforms.',
      tags: ['Android', 'iOS', 'Dashboard', 'Admin', 'QA'],
      links: [
        { label: 'Hitztar Dashboard', href: 'https://app.hitztar.com/dashboard/posts' },
        { label: 'PoliceTube', href: 'https://www.policetube.com/' },
        { label: 'Cliploo', href: 'https://www.cliploo.com/' },
      ],
    },
    {
      id: 'creative',
      title: 'Creative Media',
      text: 'Graphic design, video editing and social media management that keep brands consistent and engaging.',
      tags: ['Illustrator', 'CorelDRAW', 'Canva', 'Premiere Pro', 'CapCut'],
      links: [
        { label: 'Graphic Design folder', href: 'https://drive.google.com/drive/folders/16QfBLX-ds3o1tgaTMgGjO5vB13LnQghu' },
        { label: 'Video folder', href: 'https://drive.google.com/drive/folders/17JyEAN9IdvtYj404_Xe8Kt5dpKt6dxko' },
      ],
    },
  ],
}

export const featured = {
  label: 'Featured project · 2026',
  title: 'Cliploo',
  role: 'App Development & Analysis · PT Cliploo Teknologi Interaktif',
  text: 'An Android app (APK) built end to end — from feature planning to release — with content and features powered by data I collected, cleaned and analyzed myself.',
  tags: ['Android APK', 'Node.js', 'Web scraping', 'Data analysis', 'Testing'],
  steps: [
    { title: 'Plan', text: 'Defined the app’s features and what content it needed.' },
    { title: 'Build', text: 'Developed the Cliploo app (APK) with the team.' },
    { title: 'Collect & clean', text: 'Scraped data from multiple sources, then cleaned and structured it for use.' },
    { title: 'Analyze', text: 'Assessed performance, user behavior and improvement opportunities in the Node.js-based app.' },
    { title: 'Test & optimize', text: 'Tested, fixed bugs and kept optimizing, turning findings into product recommendations.' },
  ],
}

const t = './img/testimonials/'
export const highlights = {
  intro: 'A collection of my works and collaborations that reflect my skills and impact.',
  items: [
    {
      name: 'Hitztar',
      role: 'Instagram Content & Design Creator',
      text: 'Responsible for managing Hitztar’s Instagram by consistently creating engaging visual content, writing captions that resonate with the audience, and ensuring brand identity is maintained across all social media platforms.',
      href: 'https://www.instagram.com/hitztar/',
      img: t + 'testi1.png',
    },
    {
      name: 'Karang Taruna (Elyon_XXIV)',
      role: 'Instagram Designer',
      text: 'Handled the creative management of Karang Taruna RT.015 by developing posters, event promotions, and social media layouts that not only informed but also inspired participation from the youth in the community.',
      href: 'https://www.instagram.com/elyon_xxiv/',
      img: t + 'testi2.png',
    },
    {
      name: 'IKRIA At-Taqwa Mosque',
      role: 'Instagram Designer',
      text: 'Created and managed Instagram design content for the Youth Association of At-Taqwa Mosque, focusing on da’wah visuals, interactive posts, and informative announcements that connected with the younger generation.',
      href: 'https://www.instagram.com/ikria.attaqwa/',
      img: t + 'testi3.png',
    },
    {
      name: 'TrendBlinkID',
      role: 'Content Creator',
      text: 'Oversaw content production for TrendBlinkID, including short videos, infographics, and news highlights that boosted the channel’s engagement rate and attracted more viewers across multiple platforms.',
      href: 'https://www.policetube.com/@TrendBlinkID',
      img: t + 'testi4.png',
    },
    {
      name: 'NineGlobal News',
      role: 'Content Creator',
      text: 'Contributed to NineGlobal News channel by producing design and editorial content that highlighted trending global topics, ensuring information was delivered in a creative and visually appealing way to attract wider audiences.',
      href: 'https://www.policetube.com/@NineGlobal',
      img: t + 'testi5.png',
    },
  ],
}

export const contact = {
  // Form dikirim lewat formsubmit.co (sama seperti situs lama).
  // Pertama kali dipakai, FormSubmit akan kirim email aktivasi ke alamat ini.
  endpoint: 'https://formsubmit.co/ajax/rayzasix@gmail.com',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d106.816975!3d-6.246298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnNDguMSJTIDEwNsKwNDknMTAuMCJF!5e0!3m2!1sid!2sid!4v1694688000000!5m2!1sid!2sid',
}

export const cliploo = {
  eyebrow: '// cliploo',
  title: 'Cliploo app & dashboard analysis',
  intro: 'My work at PT Cliploo Teknologi Interaktif: analyzing the Cliploo app (APK) and the seller dashboard, feature by feature, and turning the findings into product recommendations.',
  profileLink: { label: 'cliploo.com/@rayza', href: 'https://www.cliploo.com/@rayza' },
  creator: {
    title: 'Creator Studio',
    handle: '@rayza',
    items: [
      { value: '2,074', label: 'Total views' },
      { value: '57', label: 'Videos uploaded' },
      { value: '31', label: 'Followers' },
      { value: '104', label: 'Gift coins received' },
    ],
    note: 'Top video: 201 views. Income from video gifts, LIVE gifts and affiliate commission.',
  },
  shop: {
    title: 'Toko Bangsan · Cliploo Shop',
    items: [
      { value: '46', label: 'Products managed' },
      { value: '27', label: 'Categories' },
      { value: '30', label: 'Paid orders' },
      { value: '10', label: 'Customers' },
    ],
    note: 'Store health: good, 0 penalty points. Best sellers: toy cars, newborn shoes, bath toys.',
  },
  contributions: {
    title: 'Technical contributions',
    items: [
      'APK analysis of every Cliploo app feature.',
      'Frontend analysis of all 31 seller dashboard pages (dashboard.cliploo.com).',
      'Hands-on work with source code on several features.',
      'Web scraping of product data from other e-commerce platforms, then cleaning and structuring it into the category structure used in Cliploo Shop (12 main categories).',
    ],
    tags: ['Home & Explore', 'Video upload', 'LIVE & gifts', 'Shop', 'Orders & shipping', 'Monetization', 'Inbox & chat'],
  },
}

const cl = './img/cliploo/'
cliploo.videos = [
  { img: cl + '01.jpg', title: 'Aku Api Merah', meta: '108 views' },
  { img: cl + '02.jpg', title: 'Hei Liberty', meta: '73 views' },
  { img: cl + '05.jpg', title: 'Kolase pose', meta: '70 views' },
  { img: cl + '03.jpg', title: 'Fraksi Genz', meta: '38 views' },
  { img: cl + '04.jpg', title: 'Suasana keramaian', meta: '35 views' },
]
cliploo.products = [
  { img: cl + '06.jpg', title: 'Music-spinning toy car', meta: '9 units' },
  { img: cl + '07.jpg', title: 'Newborn baby shoes', meta: '7 units' },
  { img: cl + '08.jpg', title: 'Baby bath toys', meta: '6 units' },
  { img: cl + '09.jpg', title: 'Premium wet wipes', meta: '3 units' },
]
cliploo.shots = [
  { img: cl + '12.jpg', title: 'Shop home', kind: 'wide' },
  { img: cl + '13.jpg', title: 'Categories', kind: 'wide' },
  { img: cl + '14.jpg', title: 'LIVE list', kind: 'wide' },
  { img: cl + '16.jpg', title: 'LIVE product cart', kind: 'phone' },
]

cliploo.photo = cl + '00.jpg'
cliploo.badge = 'Verified · Creator & Seller'
cliploo.bio = 'Content creator & seller on Cliploo (@rayza). I make videos, go LIVE and run Toko Bangsan with 46 products, from kids’ toys to baby gear.'
cliploo.products.push(
  { img: cl + '10.jpg', title: 'Baby girl shoes', meta: '1 unit · Rp 110.000' },
  { img: cl + '11.jpg', title: 'Baby boy shoes', meta: 'Rp 110.000' },
)
cliploo.shots.push(
)
cliploo.creator.items.push(
  { value: '100', label: 'Likes (10 saves)' },
  { value: '43', label: 'Comments' },
  { value: '761', label: 'Unique viewers (2026)' },
  { value: 'Rp 104.000', label: 'Creator income 2026' },
)
cliploo.creator.note = 'Top video: 201 views on one video. Income split: video gifts Rp 83.000 (80%), LIVE gifts & battles Rp 21.000 (20%). 42 gifts from 9 people.'
cliploo.shop.items.push(
  { value: 'Rp 2.603.941', label: 'Sales income 2026' },
  { value: 'Rp 86.798', label: 'Avg per order' },
  { value: '28 / 18', label: 'Published / draft' },
  { value: 'Rp 3.263.460', label: 'Gross sales (28 units)' },
)
cliploo.shop.note = 'Best month: September, Rp 2.447.575. Store health: good, 0 penalty points. 40 products available, all approved.'
cliploo.categories = ['Coffee 11', 'Imitation jewelry 8', 'Baby girl 2', 'Baby boy 2', 'Sportswear 1', 'Accessories 1', 'Electronics & gadgets 1', 'Home storage 1', 'Kitchenware 1', 'Kids bicycle 1', 'Wet wipes 1', 'Disposable diapers 1', 'Cloth diapers 1', 'Baby skincare 1', 'Baby bags 1', 'Stroller 1', 'Bed & mosquito net 1', 'Car seat 1', 'Feeding 1', 'Sterilizers 1', 'Baby bottles 1', 'Breast pumps 1', 'Baby shoes 1', 'Kids toys 1', 'Baby toys 1', "Women's tops 1", 'Carpet 1']
cliploo.platform = {
  title: 'Cliploo Shop & LIVE (what I analyzed)',
  groups: [
    { name: 'Shop page', items: ['Product search with keyword suggestions.', 'Quick access: Orders, Favorites, Addresses, Live, Video, Best sellers, Discounts, Following, Local, Vouchers, All categories.', 'Promo banners, plus Cliploo Live and Cliploo Video lanes linked to products.', 'Product feed with discount labels, strikethrough prices, 1–2 day delivery estimates and seller location.', '“Most viewed” label, cart, chat and Seller Center access.'] },
    { name: 'LIVE list', items: ['Tabs: All, Top creators, Shopping, plus a Start LIVE button.', 'LIVE cards show LIVE badge, rank, Shopping label, title, viewer count and host.'] },
    { name: 'LIVE room', items: ['Host profile with likes and Follow button, viewer count, share and close.', 'Pinned product card with discount, price and Buy button.', 'LIVE chat, comments, likes, shopping cart and gift sending.', 'Purple cart with 8 LIVE products: LIVE voucher with Claim, product search, numbering, discounts, “Special LIVE Price” label, Show/Ask, add to cart and Buy Now.'] },
  ],
  categories: ['Household & Kitchen', "Women's Clothing", 'Beauty & Personal Care', 'Mother & Baby', "Men's Clothing & Accessories", 'Books & Magazines', "Women's Shoes", "Men's Shoes", 'Electronics & Gadgets', 'Food & Beverages', 'Sports & Outdoor', 'Motorcycles'],
}
cliploo.seller = {
  title: 'Seller dashboard: all 31 pages analyzed (dashboard.cliploo.com)',
  groups: [
    { name: 'Overview · 1', items: ['Home: shop KPIs, Creator Studio, revenue chart, order status, recent orders, store health, stock alerts, best sellers.'] },
    { name: 'Orders · 5', items: ['All Orders: status summary, margin chart, search and filters.', 'Returns & Refunds: accept or appeal with reasons and photos, auto-approve after 2 days, QC tracking.', 'Abandoned Carts: shoppers who stopped before checkout, held units, value at risk, reminders.', 'Transactions: money in and out, available / in transit / withdrawn balance.', 'Shipping Services: standard, economy, next day and same-day options with couriers.'] },
    { name: 'Finance · 3', items: ['Sales Income: gross sales, platform fees, refunds and coupons, net income.', 'Withdrawals: request payouts, status of available / in transit / processing balance.', 'Refunds: pending, held, refunded and rejected.'] },
    { name: 'Products · 7', items: ['All Products, Product Drafts, Q&A, Reviews with seller replies, Brands (submit and review), Stock Management (low stock, bulk add, analysis), Stock History log.'] },
    { name: 'Creator Studio · 7', items: ['Content (VClip & LIVE performance), Audience growth (7/30/90 days), Sales Video (link products), Affiliate (find creators, orders, analytics), Creator Income, Payout Methods, My Coins.'] },
    { name: 'Reports & Analytics · 4', items: ['Sales Report with CSV export, Store Health weekly evaluation, Store Performance (ship speed, failed orders, ratings), LIVE Analytics (viewer-to-buyer funnel).'] },
    { name: 'Promotions · 2', items: ['Coupons (store and product vouchers), Flash Sale (max 24h with countdown).'] },
    { name: 'Communication · 2', items: ['Inbox (orders, funds, products, payouts, creator content, Store/Creator filter), Support Tickets.'] },
  ],
}
