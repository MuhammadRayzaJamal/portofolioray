// Bilingual support. English is the base language; Indonesian lives in the dictionary below.
// Every English string (from data.js or the UI) that has an entry here is swapped when lang === 'id'.
import * as data from './data.js'

export const ID = {
  // ---- profile / nav / about
  'App Builder & Data Analyst': 'App Builder & Data Analyst',
  'Creative Media Specialist': 'Spesialis Media Kreatif',
  'Open to opportunities': 'Terbuka untuk peluang',
  'Home': 'Beranda',
  'About': 'Tentang',
  'Expertise': 'Keahlian',
  'Experience': 'Pengalaman',
  'Projects': 'Proyek',
  'Collaborations': 'Kolaborasi',
  'Contact': 'Kontak',
  'Work': 'Karya',
  'A Computer Engineering student who combines technical and creative skills.':
    'Mahasiswa Teknik Informatika yang memadukan kemampuan teknis dan kreatif.',
  'App builder and data analyst with a creative edge.': 'App builder dan data analyst dengan sentuhan kreatif.',
  'I have experience building and analyzing applications, managing dashboards and data, and producing visual content — from graphic design and video editing to social media management.':
    'Saya berpengalaman membangun dan menganalisis aplikasi, mengelola dashboard dan data, serta membuat konten visual — mulai dari desain grafis dan editing video hingga pengelolaan media sosial.',
  'I am results-driven and comfortable working independently or in a team. I believe collaboration and innovation are the keys to outstanding results.':
    'Saya berorientasi pada hasil dan nyaman bekerja mandiri maupun dalam tim. Saya percaya kolaborasi dan inovasi adalah kunci hasil yang luar biasa.',
  'Computer Engineering, Universitas Pamulang': 'Teknik Informatika, Universitas Pamulang',
  'Companies worked with': 'Perusahaan yang pernah bekerja sama',
  'App built & released (APK)': 'Aplikasi dibuat & dirilis (APK)',
  'Mobile platforms analyzed': 'Platform mobile dianalisis',
  'Films produced': 'Film diproduksi',

  // ---- skills
  'Data & Apps': 'Data & Aplikasi',
  'Programming': 'Pemrograman',
  'Design & Video': 'Desain & Video',
  'Other': 'Lainnya',
  'Web Scraping': 'Web Scraping',
  'Data Analysis': 'Analisis Data',
  'Android/iOS App Analysis': 'Analisis Aplikasi Android/iOS',
  'Public Speaking': 'Public Speaking',
  'Social Media': 'Media Sosial',
  'Infinity (Project Mgmt)': 'Infinity (Manajemen Proyek)',

  // ---- resume
  'From building and analyzing apps to running dashboards and leading media teams.':
    'Dari membangun dan menganalisis aplikasi hingga mengelola dashboard dan memimpin tim media.',
  'I am results-driven, comfortable working independently or in a team, and I believe collaboration and innovation are the keys to outstanding results.':
    'Saya berorientasi pada hasil, nyaman bekerja mandiri maupun dalam tim, dan percaya kolaborasi serta inovasi adalah kunci hasil yang luar biasa.',
  'Cliploo App Development & Analysis': 'Pengembangan & Analisis Aplikasi Cliploo',
  'Built the Cliploo app (APK) from feature planning and development through testing and release.':
    'Membangun aplikasi Cliploo (APK) mulai dari perencanaan fitur dan pengembangan hingga pengujian dan rilis.',
  'Scraped data from multiple sources to power the app’s content and features, then cleaned and structured it so it was ready to use.':
    'Mengumpulkan data (scraping) dari berbagai sumber untuk mendukung konten dan fitur aplikasi, lalu membersihkan dan menyusunnya agar siap dipakai.',
  'Analyzed the Node.js-based app and its data to assess performance, user behavior, and improvement opportunities, turning findings into product recommendations.':
    'Menganalisis aplikasi berbasis Node.js beserta datanya untuk menilai performa, perilaku pengguna, dan peluang perbaikan, lalu mengubah temuan menjadi rekomendasi produk.',
  'Worked with the team to test, fix bugs, and continuously optimize the app.':
    'Bekerja bersama tim untuk menguji, memperbaiki bug, dan terus mengoptimalkan aplikasi.',
  'Dashboard & App Analyst · Admin PoliceTube': 'Dashboard & App Analyst · Admin PoliceTube',
  'Managed and maintained the dashboard and oversaw the operations of police channels on the platform.':
    'Mengelola dan merawat dashboard serta mengawasi operasional kanal kepolisian di platform.',
  'Conducted in-depth analysis of Android and iOS applications to evaluate their functionality and quality.':
    'Melakukan analisis mendalam terhadap aplikasi Android dan iOS untuk menilai fungsi dan kualitasnya.',
  'Key member of the PoliceTube administrative team: optimized workflows, managed content, and kept operations efficient.':
    'Anggota kunci tim administrasi PoliceTube: mengoptimalkan alur kerja, mengelola konten, dan menjaga operasional tetap efisien.',
  'Content & Dashboard Specialist': 'Spesialis Konten & Dashboard',
  'Managed the dashboard, and designed and ran the Instagram account with a consistent content strategy.':
    'Mengelola dashboard, serta merancang dan menjalankan akun Instagram dengan strategi konten yang konsisten.',
  'Helped organize major events at Casablanca City Mall and produced news content, supporting both digital and on-site initiatives.':
    'Membantu menyelenggarakan acara besar di Casablanca City Mall dan memproduksi konten berita, mendukung inisiatif digital maupun langsung di lokasi.',
  'Head of Media': 'Ketua Media',
  'IKRIA (At-Taqwa Mosque Youth) & RT.015/RW.003 Youth (ELYON_XXIV)':
    'IKRIA (Remaja Masjid At-Taqwa) & Karang Taruna RT.015/RW.003 (ELYON_XXIV)',
  'Led the media team: designed and managed Instagram accounts with a cohesive, aesthetic layout.':
    'Memimpin tim media: merancang dan mengelola akun Instagram dengan tata letak yang rapi dan estetik.',
  'Created engaging content across platforms using graphic design, branding, and audience engagement techniques to boost visibility and interaction.':
    'Membuat konten menarik di berbagai platform dengan desain grafis, branding, dan teknik keterlibatan audiens untuk meningkatkan jangkauan dan interaksi.',
  'Film Production, Promo Videos & Coverage Projects': 'Produksi Film, Video Promosi & Proyek Liputan',
  'Vocational School': 'SMK',
  'Helped produce three films and promotional videos for the school as cameraman, synopsis writer, and editing contributor, and played a lead role in a film for an inter-vocational school competition.':
    'Membantu memproduksi tiga film dan video promosi sekolah sebagai kameramen, penulis sinopsis, dan kontributor editing, serta berperan sebagai pemeran utama dalam film untuk lomba antar-SMK.',
  'Served as cameraman and journalist on coverage projects and helped edit the results.':
    'Bertugas sebagai kameramen dan jurnalis pada proyek liputan serta membantu mengedit hasilnya.',
  'Computer Engineering': 'Teknik Informatika',
  'Current': 'Saat ini',
  'Programming, database management, and software development.': 'Pemrograman, manajemen basis data, dan pengembangan perangkat lunak.',
  'Multimedia': 'Multimedia',
  'Graphic design, video editing, web development, and film and ad production.':
    'Desain grafis, editing video, pengembangan web, serta produksi film dan iklan.',
  'Junior High School': 'SMP',

  // ---- portfolio
  'Applications, platforms and digital content I have worked on at Digital Unggul and Hitztar, from dashboards and apps to event branding and certificates.':
    'Aplikasi, platform, dan konten digital yang saya kerjakan di Digital Unggul dan Hitztar, dari dashboard dan aplikasi hingga branding acara dan sertifikat.',
  'Event Hitztar I': 'Acara Hitztar I',
  'Event Hitztar II': 'Acara Hitztar II',
  'Event Hitztar III': 'Acara Hitztar III',
  'Design Award': 'Penghargaan Desain',
  'AI Seminar': 'Seminar AI',
  'Persuasive Technology & Gamification': 'Teknologi Persuasif & Gamifikasi',
  'Basic Investment': 'Investasi Dasar',
  'Digital Entrepreneurship Innovative': 'Kewirausahaan Digital Inovatif',

  // ---- showcase
  'The four areas where I contribute most — from shipping apps to turning data and visuals into results.':
    'Empat bidang tempat saya paling berkontribusi — dari merilis aplikasi hingga mengubah data dan visual menjadi hasil nyata.',
  'App Development': 'Pengembangan Aplikasi',
  'Planning features, building, testing and releasing apps, backed by a web and database toolkit.':
    'Merencanakan fitur, membangun, menguji, dan merilis aplikasi, didukung perangkat web dan basis data.',
  'Data Scraping & Analysis': 'Scraping & Analisis Data',
  'Collecting data from multiple sources, cleaning and structuring it, then analyzing it into product recommendations.':
    'Mengumpulkan data dari berbagai sumber, membersihkan dan menyusunnya, lalu menganalisisnya menjadi rekomendasi produk.',
  'Web scraping': 'Web scraping',
  'Data cleaning': 'Pembersihan data',
  'Data analysis': 'Analisis data',
  'Insights': 'Insight',
  'App & Dashboard Analysis': 'Analisis Aplikasi & Dashboard',
  'Analyzing Android and iOS apps and running dashboards and admin operations for content platforms.':
    'Menganalisis aplikasi Android dan iOS serta menjalankan dashboard dan operasional admin untuk platform konten.',
  'Creative Media': 'Media Kreatif',
  'Graphic design, video editing and social media management that keep brands consistent and engaging.':
    'Desain grafis, editing video, dan pengelolaan media sosial yang menjaga merek tetap konsisten dan menarik.',
  'Graphic Design folder': 'Folder Desain Grafis',
  'Video folder': 'Folder Video',

  // ---- featured
  'Featured project · 2026': 'Proyek unggulan · 2026',
  'App Development & Analysis · PT Cliploo Teknologi Interaktif': 'Pengembangan & Analisis Aplikasi · PT Cliploo Teknologi Interaktif',
  'An Android app (APK) built end to end — from feature planning to release — with content and features powered by data I collected, cleaned and analyzed myself.':
    'Aplikasi Android (APK) yang dibangun dari awal hingga akhir — dari perencanaan fitur sampai rilis — dengan konten dan fitur yang didukung data yang saya kumpulkan, bersihkan, dan analisis sendiri.',
  'Testing': 'Pengujian',
  'Plan': 'Rencana',
  'Defined the app’s features and what content it needed.': 'Menentukan fitur aplikasi dan konten yang dibutuhkan.',
  'Build': 'Bangun',
  'Developed the Cliploo app (APK) with the team.': 'Mengembangkan aplikasi Cliploo (APK) bersama tim.',
  'Collect & clean': 'Kumpulkan & bersihkan',
  'Scraped data from multiple sources, then cleaned and structured it for use.':
    'Mengumpulkan data dari berbagai sumber, lalu membersihkan dan menyusunnya agar siap dipakai.',
  'Analyze': 'Analisis',
  'Assessed performance, user behavior and improvement opportunities in the Node.js-based app.':
    'Menilai performa, perilaku pengguna, dan peluang perbaikan pada aplikasi berbasis Node.js.',
  'Test & optimize': 'Uji & optimalkan',
  'Tested, fixed bugs and kept optimizing, turning findings into product recommendations.':
    'Menguji, memperbaiki bug, dan terus mengoptimalkan, lalu mengubah temuan menjadi rekomendasi produk.',

  // ---- highlights
  'A collection of my works and collaborations that reflect my skills and impact.':
    'Kumpulan karya dan kolaborasi saya yang mencerminkan kemampuan dan dampak saya.',
  'Instagram Content & Design Creator': 'Kreator Konten & Desain Instagram',
  'Responsible for managing Hitztar’s Instagram by consistently creating engaging visual content, writing captions that resonate with the audience, and ensuring brand identity is maintained across all social media platforms.':
    'Bertanggung jawab mengelola Instagram Hitztar dengan konsisten membuat konten visual yang menarik, menulis caption yang dekat dengan audiens, dan menjaga identitas merek di semua platform media sosial.',
  'Instagram Designer': 'Desainer Instagram',
  'Handled the creative management of Karang Taruna RT.015 by developing posters, event promotions, and social media layouts that not only informed but also inspired participation from the youth in the community.':
    'Menangani pengelolaan kreatif Karang Taruna RT.015 dengan membuat poster, promosi acara, dan tata letak media sosial yang tidak hanya menginformasikan tetapi juga mengajak partisipasi pemuda di lingkungan.',
  'Created and managed Instagram design content for the Youth Association of At-Taqwa Mosque, focusing on da’wah visuals, interactive posts, and informative announcements that connected with the younger generation.':
    'Membuat dan mengelola konten desain Instagram untuk Ikatan Remaja Masjid At-Taqwa, dengan fokus pada visual dakwah, unggahan interaktif, dan pengumuman informatif yang dekat dengan generasi muda.',
  'Content Creator': 'Kreator Konten',
  'Oversaw content production for TrendBlinkID, including short videos, infographics, and news highlights that boosted the channel’s engagement rate and attracted more viewers across multiple platforms.':
    'Mengawasi produksi konten TrendBlinkID, termasuk video pendek, infografis, dan sorotan berita yang meningkatkan tingkat interaksi kanal dan menarik lebih banyak penonton di berbagai platform.',
  'Contributed to NineGlobal News channel by producing design and editorial content that highlighted trending global topics, ensuring information was delivered in a creative and visually appealing way to attract wider audiences.':
    'Berkontribusi pada kanal NineGlobal News dengan memproduksi konten desain dan editorial yang menyoroti topik global terkini, menyampaikan informasi secara kreatif dan menarik secara visual untuk menjangkau audiens lebih luas.',

  // ---- cliploo section
  'Cliploo app & dashboard analysis': 'Analisis aplikasi & dashboard Cliploo',
  'My work at PT Cliploo Teknologi Interaktif: analyzing the Cliploo app (APK) and the seller dashboard, feature by feature, and turning the findings into product recommendations.':
    'Pekerjaan saya di PT Cliploo Teknologi Interaktif: menganalisis aplikasi Cliploo (APK) dan dashboard seller, fitur demi fitur, lalu mengubah temuan menjadi rekomendasi produk.',
  'Technical contributions': 'Kontribusi teknis',
  'APK analysis of every Cliploo app feature.': 'Analisis APK untuk setiap fitur aplikasi Cliploo.',
  'Frontend analysis of all 31 seller dashboard pages (dashboard.cliploo.com).':
    'Analisis frontend seluruh 31 halaman dashboard seller (dashboard.cliploo.com).',
  'Hands-on work with source code on several features.': 'Mengerjakan langsung source code pada beberapa fitur.',
  'Web scraping of product data from other e-commerce platforms, then cleaning and structuring it into the category structure used in Cliploo Shop (12 main categories).':
    'Web scraping data produk dari platform e-commerce lain, lalu membersihkan dan menyusunnya menjadi struktur kategori yang dipakai di Cliploo Shop (12 kategori utama).',
  'Home & Explore': 'Beranda & Jelajah',
  'Video upload': 'Unggah video',
  'LIVE & gifts': 'LIVE & hadiah',
  'Shop': 'Toko',
  'Orders & shipping': 'Pesanan & pengiriman',
  'Monetization': 'Monetisasi',
  'Inbox & chat': 'Kotak masuk & chat',
  'App & dashboard analysis': 'Analisis aplikasi & dashboard',
  'Cliploo Shop & LIVE (what I analyzed)': 'Cliploo Shop & LIVE (yang saya analisis)',
  'Shop page': 'Halaman toko',
  'Product search with keyword suggestions.': 'Pencarian produk dengan saran kata kunci.',
  'Quick access: Orders, Favorites, Addresses, Live, Video, Best sellers, Discounts, Following, Local, Vouchers, All categories.':
    'Akses cepat: Pesanan, Favorit, Alamat, Live, Video, Terlaris, Diskon, Mengikuti, Lokal, Voucher, Semua kategori.',
  'Promo banners, plus Cliploo Live and Cliploo Video lanes linked to products.':
    'Banner promo, ditambah jalur Cliploo Live dan Cliploo Video yang terhubung ke produk.',
  'Product feed with discount labels, strikethrough prices, 1–2 day delivery estimates and seller location.':
    'Feed produk dengan label diskon, harga coret, estimasi pengiriman 1–2 hari, dan lokasi penjual.',
  '“Most viewed” label, cart, chat and Seller Center access.': 'Label “Paling banyak dilihat”, keranjang, chat, dan akses Seller Center.',
  'LIVE list': 'Daftar LIVE',
  'Tabs: All, Top creators, Shopping, plus a Start LIVE button.': 'Tab: Semua, Kreator teratas, Belanja, ditambah tombol Mulai LIVE.',
  'LIVE cards show LIVE badge, rank, Shopping label, title, viewer count and host.':
    'Kartu LIVE menampilkan badge LIVE, peringkat, label Belanja, judul, jumlah penonton, dan host.',
  'LIVE room': 'Ruang LIVE',
  'Host profile with likes and Follow button, viewer count, share and close.':
    'Profil host dengan jumlah suka dan tombol Ikuti, jumlah penonton, bagikan, dan tutup.',
  'Pinned product card with discount, price and Buy button.': 'Kartu produk tersemat dengan diskon, harga, dan tombol Beli.',
  'LIVE chat, comments, likes, shopping cart and gift sending.': 'Chat LIVE, komentar, suka, keranjang belanja, dan pengiriman hadiah.',
  'Purple cart with 8 LIVE products: LIVE voucher with Claim, product search, numbering, discounts, “Special LIVE Price” label, Show/Ask, add to cart and Buy Now.':
    'Keranjang ungu dengan 8 produk LIVE: voucher LIVE dengan tombol Klaim, pencarian produk, penomoran, diskon, label “Harga Spesial LIVE”, Tampil/Tanya, tambah ke keranjang, dan Beli Sekarang.',
  'Shop home': 'Beranda toko',
  'LIVE product cart': 'Keranjang produk LIVE',
  'Categories': 'Kategori',
  'Map': 'Peta',
  'Seller dashboard: all 31 pages analyzed (dashboard.cliploo.com)': 'Dashboard seller: seluruh 31 halaman dianalisis (dashboard.cliploo.com)',
  'Overview · 1': 'Ringkasan · 1',
  'Home: shop KPIs, Creator Studio, revenue chart, order status, recent orders, store health, stock alerts, best sellers.':
    'Beranda: KPI toko, Creator Studio, grafik pendapatan, status pesanan, pesanan terbaru, kesehatan toko, peringatan stok, produk terlaris.',
  'Orders · 5': 'Pesanan · 5',
  'All Orders: status summary, margin chart, search and filters.': 'Semua Pesanan: ringkasan status, grafik margin, pencarian dan filter.',
  'Returns & Refunds: accept or appeal with reasons and photos, auto-approve after 2 days, QC tracking.':
    'Retur & Pengembalian Dana: terima atau ajukan banding dengan alasan dan foto, persetujuan otomatis setelah 2 hari, pelacakan QC.',
  'Abandoned Carts: shoppers who stopped before checkout, held units, value at risk, reminders.':
    'Keranjang Ditinggalkan: pembeli yang berhenti sebelum checkout, unit yang tertahan, nilai berisiko, pengingat.',
  'Transactions: money in and out, available / in transit / withdrawn balance.':
    'Transaksi: uang masuk dan keluar, saldo tersedia / dalam proses / sudah ditarik.',
  'Shipping Services: standard, economy, next day and same-day options with couriers.':
    'Layanan Pengiriman: opsi reguler, hemat, next day, dan same-day dengan berbagai kurir.',
  'Finance · 3': 'Keuangan · 3',
  'Sales Income: gross sales, platform fees, refunds and coupons, net income.':
    'Pendapatan Penjualan: penjualan kotor, biaya platform, pengembalian dana dan kupon, pendapatan bersih.',
  'Withdrawals: request payouts, status of available / in transit / processing balance.':
    'Penarikan: ajukan pencairan, status saldo tersedia / dalam proses / diproses.',
  'Refunds: pending, held, refunded and rejected.': 'Pengembalian Dana: menunggu, ditahan, dikembalikan, dan ditolak.',
  'Products · 7': 'Produk · 7',
  'All Products, Product Drafts, Q&A, Reviews with seller replies, Brands (submit and review), Stock Management (low stock, bulk add, analysis), Stock History log.':
    'Semua Produk, Draf Produk, Tanya Jawab, Ulasan dengan balasan penjual, Merek (ajukan dan tinjau), Manajemen Stok (stok menipis, tambah massal, analisis), Riwayat Stok.',
  'Creator Studio · 7': 'Creator Studio · 7',
  'Content (VClip & LIVE performance), Audience growth (7/30/90 days), Sales Video (link products), Affiliate (find creators, orders, analytics), Creator Income, Payout Methods, My Coins.':
    'Konten (performa VClip & LIVE), Pertumbuhan audiens (7/30/90 hari), Video Penjualan (tautkan produk), Afiliasi (cari kreator, pesanan, analitik), Pendapatan Kreator, Metode Pencairan, Koin Saya.',
  'Reports & Analytics · 4': 'Laporan & Analitik · 4',
  'Sales Report with CSV export, Store Health weekly evaluation, Store Performance (ship speed, failed orders, ratings), LIVE Analytics (viewer-to-buyer funnel).':
    'Laporan Penjualan dengan ekspor CSV, evaluasi mingguan Kesehatan Toko, Performa Toko (kecepatan kirim, pesanan gagal, rating), Analitik LIVE (funnel penonton ke pembeli).',
  'Promotions · 2': 'Promosi · 2',
  'Coupons (store and product vouchers), Flash Sale (max 24h with countdown).':
    'Kupon (voucher toko dan produk), Flash Sale (maks. 24 jam dengan hitung mundur).',
  'Communication · 2': 'Komunikasi · 2',
  'Inbox (orders, funds, products, payouts, creator content, Store/Creator filter), Support Tickets.':
    'Kotak Masuk (pesanan, dana, produk, pencairan, konten kreator, filter Toko/Kreator), Tiket Bantuan.',

  // ---- UI (components)
  'All rights reserved.': 'Hak cipta dilindungi.',
  'Back to top': 'Kembali ke atas',
  'Back to top ↑': 'Kembali ke atas ↑',
  'Worked with': 'Pernah bekerja dengan',
  'View projects': 'Lihat proyek',
  'Download CV': 'Unduh CV',
  'App Builder': 'App Builder',
  'Data Analyst': 'Data Analyst',
  'Creative Media': 'Media Kreatif',
  'About me': 'Tentang saya',
  'Skills & Tools': 'Keahlian & Alat',
  'Location': 'Lokasi',
  'Education': 'Pendidikan',
  'Email': 'Email',
  'Phone': 'Telepon',
  'Instagram': 'Instagram',
  'Status': 'Status',
  'Building Cliploo, end to end': 'Membangun Cliploo, dari awal sampai akhir',
  'Building Cliploo': 'Membangun Cliploo',
  'What I do': 'Yang saya kerjakan',
  'Experience & Education': 'Pengalaman & Pendidikan',
  'Professional Experience': 'Pengalaman Profesional',
  'All': 'Semua',
  'Get in touch': 'Hubungi saya',
  'Have a project in mind, or just want to say hello? Send a message and I’ll get back to you soon.':
    'Punya proyek atau sekadar ingin menyapa? Kirim pesan dan saya akan segera membalas.',
  'Address': 'Alamat',
  'Chat on WhatsApp': 'Chat via WhatsApp',
  'Call': 'Telepon',
  'Name': 'Nama',
  'Subject': 'Subjek',
  'Message': 'Pesan',
  'Your name': 'Nama kamu',
  'Your email': 'Email kamu',
  'you@email.com': 'kamu@email.com',
  'How can I help?': 'Ada yang bisa saya bantu?',
  'Tell me about your project': 'Ceritakan tentang proyekmu',
  'Your message': 'Pesan kamu',
  'Send message': 'Kirim pesan',
  'Opening…': 'Membuka…',
  'Sending…': 'Mengirim…',
  'Gmail opened with your message ready — just press Send there. Thank you!':
    'Gmail terbuka dengan pesanmu sudah terisi — tinggal tekan Kirim di sana. Terima kasih!',
  'Your email app opened with the message ready — just press Send. Thank you!':
    'Aplikasi email terbuka dengan pesanmu sudah terisi — tinggal tekan Kirim. Terima kasih!',
  'Couldn’t send — please use the WhatsApp or Email button above.':
    'Gagal mengirim — silakan pakai tombol WhatsApp atau Email di atas.',
  'Couldn’t send — please ': 'Gagal mengirim — silakan ',
  'email me': 'email saya',
  ' or ': ' atau ',
  'message me on WhatsApp': 'chat saya via WhatsApp',
  'Previous': 'Sebelumnya',
  'Next': 'Berikutnya',
  'Close': 'Tutup',
  'Menu': 'Menu',
  'Light theme': 'Tema terang',
  'Dark theme': 'Tema gelap',
  'Switch to light theme': 'Ganti ke tema terang',
  'Switch to dark theme': 'Ganti ke tema gelap',
  'Open ': 'Buka ',
  'Primary': 'Utama',
}

let lang = 'en'
export const getLang = () => lang

// English snapshot of every exported data object (taken once, after data.js finished executing).
const live = Object.fromEntries(Object.entries(data))
const snapshot = structuredClone(live)

const URLISH = /^(https?:|\.\/|mailto:|tel:)/
// Values under these keys are identifiers/filter keys, never translated.
const KEEP = new Set(['filters', 'cat', 'id', 'kind'])
function assign(target, src, tr) {
  for (const k of Object.keys(src)) {
    const v = src[k]
    if (KEEP.has(k)) continue
    if (typeof v === 'string') target[k] = URLISH.test(v) ? v : tr(v)
    else if (v && typeof v === 'object') assign(target[k], v, tr)
    else target[k] = v
  }
}

export function setLang(next) {
  lang = next === 'id' ? 'id' : 'en'
  const tr = lang === 'id' ? (s) => ID[s] ?? s : (s) => s
  for (const name of Object.keys(live)) assign(live[name], snapshot[name], tr)
  try { document.documentElement.lang = lang } catch { /* ignore */ }
}

// UI string lookup used directly in components.
export const t = (s) => (lang === 'id' ? ID[s] ?? s : s)
