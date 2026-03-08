const faqs = [
  {
    q: <>Apa itu undangan digital dan bagaimana cara kerjanya?</>,
    a: [
      {
        type: "text",
        content: (
          <>
            Undangan digital adalah undangan berbentuk <i>website</i> atau{" "}
            <i>link online</i> yang bisa dibuka lewat <i>handphone</i>,{" "}
            <i>tablet</i>, atau laptop tanpa perlu <i>download</i> aplikasi
            apapun.
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Kamu tinggal bagikan <i>link</i> undangan ke tamu melalui WhatsApp,
            Instagram, <i>email</i>, atau media sosial kamu lainnya.
          </>
        ),
      },
    ],
  },
  {
    q: <>Apakah undangan digital Sayvia hanya untuk acara pernikahan?</>,
    a: [
      {
        type: "text",
        content: (
          <>
            Tidak! Undangan digital Sayvia bisa dipakai untuk berbagai jenis
            acara, seperti pernikahan, lamaran, ulang tahun, reuni, wisuda,
            aqiqah, hingga acara untuk perusahaan.
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Konten dalam undangan akan kami sesuaikan dengan kebutuhan acara
            kamu.
          </>
        ),
      },
    ],
  },
  {
    q: <>Apakah undangan digital Sayvia bisa ditambahkan lagu atau video?</>,
    a: [
      { type: "text", content: <>Bisa, dong! Kamu bisa menambahkan:</> },
      {
        type: "bullet",
        content: (
          <>
            <i>Background music</i>;
          </>
        ),
      },
      {
        type: "bullet",
        content: (
          <>
            Video <i>prewedding</i> atau video ucapan;
          </>
        ),
      },
      { type: "bullet", content: <>Galeri foto.</> },
      {
        type: "text",
        content: (
          <>
            Fitur ini tersedia sesuai paket yang kamu pilih, bikin undangan kamu
            terasa lebih hidup dan personal.
          </>
        ),
      },
    ],
  },
  {
    q: (
      <>
        Bagaimana cara kerja fitur kado <i>cashless</i> di undangan digital
        Sayvia?
      </>
    ),
    a: [
      {
        type: "text",
        content: (
          <>
            Kado <i>cashless</i> bikin tamu lebih praktis ngasih hadiah. Mereka
            bisa langsung kirim hadiah melalui:
          </>
        ),
      },
      { type: "bullet", content: <>Transfer bank;</> },
      {
        type: "bullet",
        content: (
          <>
            <i>E-Wallet</i> (DANA, OVO, GoPay, dll).
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Nomor rekening atau dompet digital akan ditampilkan di undangan
            digital dan dananya langsung masuk ke akun kamu.
          </>
        ),
      },
    ],
  },
  {
    q: <>Apakah jumlah nama tamu undangan digital Sayvia dibatasi?</>,
    a: [
      {
        type: "text",
        content: (
          <>
            Ada batasannya, ya. Untuk undangan digital, tersedia kuota hingga
            100 nama tamu.
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Kalau masih kurang, kamu tetap bisa menambah kuota nama tamu sesuai
            kebutuhan dengan biaya tambahan sesuai ketentuan.
          </>
        ),
      },
    ],
  },
  {
    q: <>Berapa lama proses pengerjaan undangan digital Sayvia?</>,
    a: [
      {
        type: "text",
        content: (
          <>
            Undangan digital kamu biasanya siap maksimal dalam 24 jam setelah
            semua data kami terima.
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Waktu pengerjaan bisa sedikit menyesuaikan jika pesanan sedang
            ramai, tapi kami tetap prioritaskan proses cepat dan rapi.
          </>
        ),
      },
    ],
  },
  {
    q: <>Apakah undangan digital Sayvia bisa direvisi setelah jadi?</>,
    a: [
      {
        type: "text",
        content: (
          <>
            Bisa, kok! Undangan digital bisa direvisi sesuai paket yang kamu
            pilih.
          </>
        ),
      },
      { type: "text", content: <>Revisi mencakup:</> },
      { type: "bullet", content: <>Perubahan data acara;</> },
      { type: "bullet", content: <>Ganti foto atau video;</> },
      {
        type: "bullet",
        content: (
          <>
            Ganti <i>background music</i>.
          </>
        ),
      },
      { type: "text", content: <>Untuk revisi:</> },
      { type: "bullet", content: <>Jenis font;</> },
      { type: "bullet", content: <>Warna;</> },
      { type: "bullet", content: <>Desain utama.</> },
      {
        type: "text",
        content: (
          <>
            <b>Tidak bisa diubah</b> agar tampilannya tetap konsisten.
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Revisi berlaku hingga maksimal 7 hari setelah undangan jadi. Lewat
            dari itu tetap bisa, tapi dikenakan biaya tambahan (kecuali jika ada
            kesalahan dari kami).
          </>
        ),
      },
    ],
  },
  {
    q: <>Berapa lama masa aktif undangan digital Sayvia?</>,
    a: [
      {
        type: "text",
        content: (
          <>
            Undangan digital bisa diakses sejak kamu menerimanya hingga 14 hari
            setelah acara berlangsung.
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Setelah itu, undangan akan dinonaktifkan dan data kami hapus dari{" "}
            <i>database</i> demi menjaga keamanan data kamu.
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Sebagai arsip, kamu tetap mendapatkan salinan undangan digital dalam
            bentuk file pdf.
          </>
        ),
      },
    ],
  },
  {
    q: <>Apakah data tamu di undangan digital Sayvia aman?</>,
    a: [
      {
        type: "text",
        content: (
          <>Aman, ya. Data tamu hanya dipakai untuk keperluan undangan.</>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Kami tidak membagikan data ke pihak lain, dan data akan dihapus
            setelah masa aktif undangan berakhir.
          </>
        ),
      },
    ],
  },
  {
    q: <>Apakah tersedia dukungan pelanggan untuk undangan digital?</>,
    a: [
      {
        type: "text",
        content: (
          <>
            Tersedia, ya! Kamu bisa langsung <i>chat</i> tim kami lewat
            WhatsApp.
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Kami siap bantu kalau ada pertanyaan atau kendala, dari awal pesan
            sampai undangan digital kamu siap dibagikan.
          </>
        ),
      },
    ],
  },
  {
    q: <>Berapa biaya pembuatan undangan digital Sayvia?</>,
    a: [
      {
        type: "text",
        content: <>Harga undangan digital tergantung paket yang kamu pilih.</>,
      },
      {
        type: "text",
        content: (
          <>
            Kalau ada tambahan fitur di luar paket, biayanya akan diinformasikan
            dulu, jadi tetap aman dan transparan.
          </>
        ),
      },
    ],
  },
  {
    q: (
      <>
        Metode pembayaran apa saja yang tersedia untuk undangan digital Sayvia?
      </>
    ),
    a: [
      {
        type: "text",
        content: (
          <>
            Soal pembayaran, tenang aja opsinya lengkap. Kamu bisa bayar lewat:
          </>
        ),
      },
      { type: "bullet", content: <>Transfer bank;</> },
      {
        type: "bullet",
        content: (
          <>
            <i>E-Wallet</i> (DANA, OVO, dan GoPay);
          </>
        ),
      },
      {
        type: "bullet",
        content: (
          <>
            atau <i>platform online</i> (Saweria dan Trakteer).
          </>
        ),
      },
      { type: "text", content: <>Tinggal pilih yang paling nyaman.</> },
    ],
  },
  {
    q: <>Bagaimana cara memesan undangan digital Sayvia?</>,
    a: [
      { type: "text", content: <>Pesan undangan digitalnya gampang banget:</> },
      {
        type: "text",
        content: (
          <>
            1. <i>Chat</i> tim kami lewat WhatsApp;
          </>
        ),
      },
      { type: "text", content: <>2. Isi formulir data yang dikirim;</> },
      { type: "text", content: <>3. Pilih paket dan desain;</> },
      { type: "text", content: <>4. Konfirmasi harga dan bayar;</> },
      {
        type: "text",
        content: <>5. Undangan kamu langsung kami proses dan siap dibagikan.</>,
      },
    ],
  },
];

export default faqs;