export interface Waypoint {
  name: string;
  elevation: string;
  time: string;
  desc: string;
  isSummit?: boolean;
}

export interface TrailData {
  id: string;
  name: string;
  location: string;
  elevation: string;
  distance: string;
  duration: string;
  difficulty: string;
  season: string;
  capacity: string;
  status: "BUKA" | "TUTUP";
  lastUpdated: string;
  description: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  waypoints: Waypoint[];
  rules: { wajib: string[]; larangan: string[] };
  videos: { title: string; channel: string; duration: string }[];
  gpxDistance: string;
  gpxDuration: string;
  gpxUpdated: string;
}

export const trails: TrailData[] = [
  {
    id: "sembalun",
    name: "Jalur Sembalun",
    location: "Sembalun Lawang, Lombok Timur",
    elevation: "3,726",
    distance: "15 km",
    duration: "3-4 Hari",
    difficulty: "Sulit",
    season: "Mei – Oktober",
    capacity: "150 pendaki/hari",
    status: "BUKA",
    lastUpdated: "1 Juni 2025",
    description:
      "Jalur Sembalun adalah jalur paling populer dan paling sering dipilih para pendaki. Melewati padang savana yang luas, jalur ini menawarkan pemandangan terbuka yang menakjubkan sebelum memasuki zona hutan. Jalur ini merupakan satu-satunya jalur yang mengizinkan kuda beban hingga Plawangan Sembalun.",
    tags: ["Jalur Terpopuler", "Savana Luas", "PemandanganKawah", "Rute Terbaik"],
    rating: 4.8,
    reviewCount: 393,
    waypoints: [
      { name: "Basecamp Sembalun", elevation: "1,156 mdpl", time: "–", desc: "Titik awal pendakian dengan fasilitas lengkap: toilet, warung makan, dan pos registrasi resmi TNGR. Kapasitas parkir memadai." },
      { name: "Pos 1 — Pos Pemantauan", elevation: "1,300 mdpl", time: "2 jam", desc: "Berada di hamparan padang savana luas. Cocok untuk beristirahat sejenak sambil berfoto dengan latar perbukitan." },
      { name: "Pos 2 — Tengengean", elevation: "1,500 mdpl", time: "1 jam", desc: "Masih berada di zona savana. Terdapat jembatan dan shelter sederhana. Pemandangan Rinjani mulai terlihat jelas." },
      { name: "Pos 3 — Pada Balong", elevation: "1,800 mdpl", time: "1–2 jam", desc: "Titik sebelum jalur mulai menanjak dan sudah banyak pohon cemara." },
      { name: "Pos 4 — Cemara Siu", elevation: "2,115 mdpl", time: "2,5 jam", desc: "Tempat ideal untuk beristirahat dan memulihkan tenaga sebelum menghadapi tantangan bukit penyesalan menuju Plawangan Sembalun." },
      { name: "Plawangan Sembalun", elevation: "2,639 mdpl", time: "3 jam", desc: "Titik camp utama dengan pemandangan Danau Segara Anak yang menakjubkan. Pendaki bermalam di sini sebelum summit attack." },
      { name: "Puncak Rinjani", elevation: "3,726 mdpl", time: "4–5 jam", desc: "Puncak tertinggi kedua di Indonesia. Pemandangan 360 derajat mencakup Pulau Lombok, Sumbawa, dan Bali di hari cerah.", isSummit: true },
    ],
    rules: {
      wajib: ["Wajib mendaftar di pos registrasi sebelum mendaki", "Surat keterangan sehat dari fasilitas kesehatan resmi", "Jaga jarak aman dari tepi kawah di luar jalur resmi", "Bawa turun semua sampah dari jalur pendakian"],
      larangan: ["Mendirikan kemping di luar area yang ditentukan", "Memotret atau memanen tanaman yang dilindungi", "Menyalakan api di zona yang dilarang", "Membawa atau meminum minuman keras sembarangan"],
    },
    videos: [
      { title: "Pendakian Jalur Sembalun – Rinjani", channel: "Lombok Hiking Club", duration: "18" },
      { title: "Sunrise dari Puncak Rinjani via Sembalun", duration: "12", channel: "Trail Hiking" },
    ],
    gpxDistance: "15 km",
    gpxDuration: "3–4 Hari",
    gpxUpdated: "1 Juni 2025",
  },
  {
    id: "senaru",
    name: "Jalur Senaru",
    location: "Senaru, Lombok Utara",
    elevation: "2,641",
    distance: "10 km",
    duration: "2-3 Hari",
    difficulty: "Menengah",
    season: "April – Oktober",
    capacity: "150 pendaki/hari",
    status: "BUKA",
    lastUpdated: "15 Mei 2025",
    description:
      "Jalur Senaru melewati hutan hujan tropis yang lebat dan lebih panjang dibanding jalur Sembalun. Jalur ini sangat kaya biodiversitas dengan flora dan fauna endemik. Melewati Plawangan Senaru sebelum turun ke tepi Danau Segara Anak.",
    tags: ["Hutan Tropis", "Danau Segara Anak", "Biodiversitas", "Air Terjun"],
    rating: 4.7,
    reviewCount: 226,
    waypoints: [
      { name: "Basecamp Senaru", elevation: "601 mdpl", time: "–", desc: "Pusat informasi dan titik awal pendakian dari utara. Terdapat banyak fasilitas wisata dan penginapan di sekitar desa." },
      { name: "Pos 1 — Bunut Ngengkang", elevation: "1,300 mdpl", time: "2,5 jam", desc: "Terletak di ketinggian sekitar 915 mdpl, biasanya menjadi tempat istirahat pertama setelah berjalan melalui hutan." },
      { name: "Pos 2 — Montong Satas", elevation: "1,500 mdpl", time: "2 jam", desc: "Berada di tengah hutan belantara yang rapat. Kaya akan flora dan fauna liar, termasuk lutung hitam endemik." },
      { name: "Pos 3 — Mondokan Lolak", elevation: "2,124 mdpl", time: "2 jam", desc: "Vegetasi hutan mulai terbuka dan berganti menjadi pohon cemara gunung. Tempat istirahat sebelum tanjakan bebatuan." },
      { name: "Pos 4 — Cemara Lima", elevation: "2,482 mdpl", time: "1,5 jam", desc: "Terletak di ketinggian sekitar 2.482 mdpl, di mana vegetasi mulai berubah menjadi hutan cemara yang lebih terbuka." },
      { name: "Plawangan Senaru", elevation: "2,641 mdpl", time: "2,5 jam", desc: "Titik tertinggi untuk jalur ini. Tempat mendirikan tenda dengan pemandangan sunset terbaik ke arah kawah Segara Anak.", isSummit: true },
    ],
    rules: {
      wajib: ["Wajib mendaftar di pos Senaru sebelum mendaki", "Gunakan tenda dan perlengkapan ramah lingkungan", "Ikuti arahan ranger TNGR"],
      larangan: ["Berburu atau membuat satwa liar", "Merusak atau mengambil tanaman apapun", "Meninggalkan sampah di jalur", "Membuat jalur baru di luar jalur resmi"],
    },
    videos: [
      { title: "Jalur Senaru – Hutan Tropis Menuju Danau Segara Anak", channel: "Lombok Hiking Club", duration: "15" },
      { title: "Danau Segara Anak via Senaru 1.6K", channel: "Alam Lombok", duration: "9" },
    ],
    gpxDistance: "10 km",
    gpxDuration: "2–3 Hari",
    gpxUpdated: "15 Mei 2025",
  },
  {
    id: "torean",
    name: "Jalur Torean",
    location: "Torean, Lombok Utara",
    elevation: "2,000",
    distance: "12,5 km",
    duration: "3-4 Hari",
    difficulty: "Sulit",
    season: "Juni – September",
    capacity: "100 pendaki/hari",
    status: "BUKA",
    lastUpdated: "10 Juni 2025",
    description:
      "Jalur Torean adalah jalur paling menantang dan paling jarang dilalui. Direkomendasikan hanya untuk pendaki berpengalaman dengan fisik prima. Melewati aliran sungai, tebing terjal, dan hutan yang sangat lebat dengan navigasi yang membutuhkan keahlian khusus.",
    tags: ["Jalur Eksotik", "Sungai", "Trekking", "Expert Only"],
    rating: 4.9,
    reviewCount: 97,
    waypoints: [
      { name: "Basecamp Torean", elevation: "585 mdpl", time: "–", desc: "Terletak di Desa Torean. Jalur ini lebih diperuntukkan bagi pendaki yang sudah berpengalaman karena lintasannya cukup ekstrem." },
      { name: "Pos 1 — Pos Perokok", elevation: "1,000 mdpl", time: "2 jam", desc: "Menyusuri kawasan hutan lebat dan perkebunan warga. Jalur mulai menanjak secara perlahan." },
      { name: "Pos 2 — Lembah Propok", elevation: "1,585 mdpl", time: "2–3 jam", desc: "Hutan mulai terbuka memperlihatkan tebing-tebing raksasa yang mengapit jalur, diiringi suara aliran sungai putih." },
      { name: "Pos 3 — Plawangan Torean / Goa Susu", elevation: "1,885 mdpl", time: "2–3 jam", desc: "Area ikonik dengan pemandangan lembah hijau menjulang. Terdapat sumber air panas alami dan Goa Susu untuk berendam." },
      { name: "Danau Segara Anak", elevation: "2,008 mdpl", time: "2 jam", desc: "Destinasi akhir dari rute naik Torean. Danau vulkanik luas dengan pemandangan Gunung Barujari di bagian tengahnya.", isSummit: true },
    ],
    rules: {
      wajib: ["Wajib menggunakan pemandu bersertifikat", "Perlengkapan navigasi wajib dibawa", "Bawa P3K lengkap untuk kondisi darurat"],
      larangan: ["Mendaki solo tanpa pemandu resmi", "Mendaki di musim hujan tanpa izin khusus", "Membawa peralatan yang tidak standar TNGR", "Memasuki zona larangan tanpa izin khusus"],
    },
    videos: [
      { title: "Jalur Torean – Rute Tersembunyi Rinjani", channel: "Hidden Lombok", duration: "22" },
      { title: "Trek Torean Menyusuri Hutan Purba", channel: "Alam Lombok", duration: "17" },
    ],
    gpxDistance: "12.5 km",
    gpxDuration: "3–4 Hari",
    gpxUpdated: "10 Juni 2025",
  },
  {
    id: "aik-berik",
    name: "Jalur Aik Berik",
    location: "Aik Berik, Lombok Tengah",
    elevation: "2,500",
    distance: "12 km",
    duration: "2-3 Hari",
    difficulty: "Menengah",
    season: "Mei – Oktober",
    capacity: "100 pendaki/hari",
    status: "BUKA",
    lastUpdated: "20 Mei 2025",
    description:
      "Jalur Aik Berik menawarkan pengalaman pendakian yang lebih tenang dan asri. Melewati perkebunan kopi, hutan pinus, dan padang edelweis yang indah. Jalur ini dikenal dengan panorama matahari terbenam yang spektakuler dari Plawangan.",
    tags: ["Perkebunan Kopi", "Edelweis", "Sunset Spektakuler", "Menenangkan"],
    rating: 4.6,
    reviewCount: 166,
    waypoints: [
      { name: "Basecamp Aik Berik", elevation: "600 mdpl", time: "–", desc: "Titik awal di kawasan Desa Aik Berik, dekat dengan wisata Air Terjun Benang Kelambu dan Benang Stokel." },
      { name: "Pos 1 — Mata Air", elevation: "915 mdpl", time: "1,5 jam", desc: "Berada di tengah hutan tropis yang lebat dan asri. Banyak sumber mata air jernih dari aliran sungai terdekat yang bisa langsung digunakan oleh pendaki." },
      { name: "Pos 2 — Kayu Jalin", elevation: "1,400 mdpl", time: "1,5 jam", desc: "Trek tanah mulai menanjak konstan namun tetap teduh dari terik matahari. Masih terdapat persediaan air alami di sekitar area ini." },
      { name: "Pos 3 — Cemara Lima", elevation: "1,850 mdpl", time: "2 jam", desc: "Pohon-pohon besar mulai berganti menjadi hutan cemara. Memiliki lahan datar yang sering digunakan sebagai tempat camp sementara." },
      { name: "Plawangan Aik Berik (Umar Maya)", elevation: "2,500 mdpl", time: "2,5 jam", desc: "Titik akhir pendakian jalur ini. Menawarkan pemandangan bibir kawah sebelah selatan, Gunung Barujari, dan sisi belakang Puncak Rinjani.", isSummit: true },
    ],
    rules: {
      wajib: ["Registrasi di pos Aik Berik sebelum mendaki", "Tidak boleh memetik edelweis atau tanaman apapun", "Bawa turun semua sampah organik maupun anorganik"],
      larangan: ["Membuat api atau memasak di luar area yang ditentukan", "Mendaki musim larangan tanpa izin khusus", "Membiarkan api atau memasak tanpa headlamp saat malam"],
    },
    videos: [
      { title: "Aik Berik – Jalur Edelweis & Kopi Rinjani", channel: "Lombok Hiking Club", duration: "14" },
      { title: "Sunset Spektakuler dari Plawangan Aik Berik", channel: "Alam Lombok", duration: "8" },
    ],
    gpxDistance: "12 km",
    gpxDuration: "2–3 Hari",
    gpxUpdated: "20 Mei 2025",
  },
  {
    id: "timbanuh",
    name: "Jalur Timbanuh",
    location: "Timbanuh, Lombok Timur",
    elevation: "2,820",
    distance: "10,5 km",
    duration: "2-3 Hari",
    difficulty: "Menengah",
    season: "Juli – September",
    capacity: "100 pendaki/hari",
    status: "BUKA",
    lastUpdated: "1 April 2025",
    description:
      "Jelajahi keindahan tersembunyi Gunung Rinjani melalui Jalur Timbanuh. Rute ini menawarkan pesona hutan tropis yang asri, hamparan savana luas, dan panorama magis Danau Segara Anak langsung dari Puncak Selatan.",
    tags: ["Hutan Konservasi", "Biodiversitas Tinggi", "Pemulihan Ekosistem"],
    rating: 4.8,
    reviewCount: 314,
    waypoints: [
      { name: "Basecamp Timbanuh", elevation: "800 mdpl", time: "–", desc: "Fasilitas di basecamp ini cukup minim namun suasananya sangat asri. Menjadi pintu gerbang menuju sisi selatan Rinjani." },
      { name: "Pos 1 — Bukit Tong-Tong", elevation: "1,300 mdpl", time: "1 jam", desc: "Medan awal melewati batas kawasan hutan dan perkebunan warga yang relatif landai." },
      { name: "Pos 2 — Pancor Tayib", elevation: "1,600 mdpl", time: "1,5 jam", desc: "Terdapat sumber mata air. Di sekitar pos ini sering terdapat bekas galian babi hutan, sehingga kurang disarankan untuk mendirikan tenda." },
      { name: "Pos 3 — Momot Yamin", elevation: "2,245 mdpl", time: "2,5 jam", desc: "Batas vegetasi hutan lebat. Merupakan lokasi favorit dan aman bagi para pendaki untuk mendirikan tenda (camp site)." },
      { name: "Pos 4 — Aik Sagaq", elevation: "2,500 mdpl", time: "1 jam", desc: "Jalur mulai terbuka dan didominasi oleh medan sabana yang menanjak terjal menuju bibir kawah." },
      { name: "Puncak Selatan Rinjani", elevation: "2,900 mdpl", time: "3–4 jam", desc: "Titik tertinggi di jalur Timbanuh. Memberikan panorama luar biasa langsung ke arah Danau Segara Anak dari ketinggian sisi selatan kawah.", isSummit: true },
    ],
    rules: {
      wajib: ["Pendakian dilakukan secara resmi sesuai prosedur TNGR", "Pastikan jalur saat status aktif BUKA", "Bawa jalur dari jalur resmi bukan jalur liar"],
      larangan: ["Memasuki jalur saat status TUTUP", "Turun ke danau dari plawangan Timbanuh tanpa izin khusus"],
    },
    videos: [
      { title: "Jalur Timbanuh – Hutan Konservasi Rinjani", channel: "Trail Rinjani", duration: "20" },
      { title: "Biodiversitas Timbanuh | Dokumenter TNGR", channel: "TNGR Official", duration: "16" },
    ],
    gpxDistance: "10,5 km",
    gpxDuration: "2–3 Hari",
    gpxUpdated: "1 April 2025",
  },
  {
    id: "tete-batu",
    name: "Jalur Tete Batu",
    location: "Tete Batu, Lombok Timur",
    elevation: "3,200",
    distance: "16 km",
    duration: "3-4 Hari",
    difficulty: "Sulit",
    season: "Juni – Oktober",
    capacity: "100 pendaki/hari",
    status: "BUKA",
    lastUpdated: "5 Juni 2025",
    description:
      "Jalur Tete Batu adalah jalur terpanjang dan paling jarang diketahui wisatawan umum. Melewati kampung-kampung terpencil dan hutan primordial yang hampir tidak tersentuh manusia. Pengalaman pendakian yang paling autentik dan imersif di Rinjani.",
    tags: ["Wisata Primordial", "Kampung Terpencil", "Trekking Autentik", "Jalur Terjal"],
    rating: 4.9,
    reviewCount: 93,
    waypoints: [
      { name: "Basecamp Tetebatu", elevation: "700 mdpl", time: "–", desc: "Berada di desa wisata Tetebatu yang sejuk. Memiliki banyak fasilitas homestay dan kebun tembakau/padi yang indah." },
      { name: "Pos 1", elevation: "1,300 mdpl", time: "1,5 jam", desc: "Berjalan menembus kawasan \"Monkey Forest\" atau Hutan Kera Hantu. Suasana sangat teduh dengan kanopi pohon yang rapat." },
      { name: "Pos 2", elevation: "1,800 mdpl", time: "2 jam", desc: "Trek mulai menanjak konstan melintasi vegetasi hutan lebat. Terdapat beberapa aliran air kecil saat musim tertentu." },
      { name: "Pos 3", elevation: "2,200 mdpl", time: "2 jam", desc: "Kawasan transisi dari hutan menuju area perbukitan terbuka. Area camp favorit sebelum melakukan perjalanan akhir ke puncak." },
      { name: "Plawangan Tetebatu (Campsite Utama)", elevation: "2,640 mdpl", time: "2 jam", desc: "Area terbuka tempat mendirikan tenda untuk bermalam. Dari titik ini, bisa melihat pemandangan kawah, Danau Segara Anak, dan Gunung Baru Jari dari sisi selatan." },
      { name: "Puncak Sangkareang (Gunung Kondo)", elevation: "3,200 mdpl", time: "2,5 jam", desc: "Puncak akhir dari rute Tetebatu. Menghadap langsung ke megahnya Puncak Rinjani dan lekukan kawah Segara Anak.", isSummit: true },
    ],
    rules: {
      wajib: ["Pendaki di bawah 17 tahun harus didampingi orang dewasa", "Membawa logistik yang sesuai kapasitas jalur", "Menggunakan wadah yang bisa digunakan kembali", "Membawa turun semua sampah"],
      larangan: ["Dilarang membuka atau melintasi api sembarangan", "Dilarang memasuki kawasan satwa liar", "Dilarang menganggu flora liar dan endemik", "Dilarang membuat api unggun bebas"],
    },
    videos: [
      { title: "Tete Batu – Jalur Terpanjang Rinjani", channel: "Exploasia.com", duration: "25" },
      { title: "Kampung Tersembunyi di Kaki Rinjani", channel: "Exploasia.com", duration: "13" },
    ],
    gpxDistance: "16 km",
    gpxDuration: "3–4 Hari",
    gpxUpdated: "5 Juni 2025",
  },
];

export const getTrailById = (id: string) => trails.find((t) => t.id === id);
