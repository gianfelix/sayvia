const packages = [
  {
    name: "Basic Bae",
    desc: "Simpel tapi tetep kece. Paket hemat dengan fitur utama yang cukup buat acara kamu.",
    discount: "52%",
    original: 110000,
    price: 53000,
    standard: [
      <>
        Masa aktif sampai <b>max. 14 hari</b> setelah acara
      </>,
      <>
        Desain{" "}
        <b>
          <i>Basic Bae</i>
        </b>
      </>,
      <>
        <b>FREE max. 1x</b> revisi
      </>,
      <>
        <b>FREE</b> <i>reschedule</i>
        {" "}
        (selama kuota revisi masih ada)
      </>,
      <>Penyesuaian teks/bahasa</>,
    ],
    special: [
      {
        text: (
          <>
            <i>Love Story</i>
          </>
        ),
        yes: true,
      },
      { text: <>Kirim Ucapan & Doa</>, yes: true },
      {
        text: (
          <>
            Peta Lokasi (<i>Google Maps</i>)
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            <i>Background Music</i> <b>LIST</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Foto <b>max. 3</b>
          </>
        ),
        yes: true,
      },
      { text: <>Video</>, yes: false },
      {
        text: (
          <>
            Hitung Mundur (<i>Countdown Timer</i>)
          </>
        ),
        yes: false,
      },
      { text: <>Konfirmasi Kehadiran (RSVP)</>, yes: false },
      { text: <>Angpao Digital</>, yes: false },
      { text: <>Tambah ke Pengingat/Kalender</>, yes: false },
      { text: <>Nama Tamu</>, yes: false },
      { text: <>URL Khusus</>, yes: false },
      { text: <>Galeri Foto (opsional)</>, yes: false },
    ],
  },
  {
    name: "Glow-Up",
    desc: (
      <>Makin estetik dan interaktif. Fitur lebih lengkap dan tampilan makin <i>standout!</i></>),
    discount: "42%",
    original: 154000,
    price: 89000,
    standard: [
      <>
        Masa aktif sampai <b>max. 14 hari</b> setelah acara
      </>,
      <>
        Desain{" "}
        <b>
          <i>Glow-Up</i>
        </b>
      </>,
      <>
        <b>FREE max. 3x</b> revisi
      </>,
      <>
        <b>FREE</b> <i>reschedule</i>
        {" "}
        (selama kuota revisi masih ada)
      </>,
      <>Penyesuaian teks/bahasa</>,
    ],
    special: [
      {
        text: (
          <>
            <i>Love Story</i>
          </>
        ),
        yes: true,
      },
      { text: <>Kirim Ucapan & Doa</>, yes: true },
      {
        text: (
          <>
            Peta Lokasi (<i>Google Maps</i>)
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            <i>Background Music</i> <b>REQUEST</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Foto <b>max. 6</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Video <b>max. 1</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Hitung Mundur (<i>Countdown Timer</i>)
          </>
        ),
        yes: true,
      },
      { text: <>Konfirmasi Kehadiran (RSVP)</>, yes: true },
      { text: <>Angpao Digital</>, yes: true },
      { text: <>Tambah ke Pengingat/Kalender</>, yes: true },
      {
        text: (
          <>
            <b>FREE max. 100</b> Nama Tamu
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            <b>FREE</b> URL Khusus
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Galeri Foto (opsional) <b>max. 5</b>
          </>
        ),
        yes: true,
      },
    ],
  },
  {
    name: "All Out!",
    desc: (
      <>Totalitas tanpa batas!! Lebih eksklusif dan variatif untuk <i>full experience</i> yang memukau.</>),
    discount: "34%",
    original: 232000,
    price: 153000,
    standard: [
      <>
        Masa aktif sampai <b>max. 14 hari</b> setelah acara
      </>,
      <>
        Desain{" "}
        <b>
          <i>All Out!</i>
        </b>
      </>,
      <>
        <b>FREE max. 5x</b> revisi
      </>,
      <>
        <b>FREE</b> <i>reschedule</i>
        {" "}
        (selama kuota revisi masih ada)
      </>,
      <>Penyesuaian teks/bahasa</>,
    ],
    special: [
      {
        text: (
          <>
            <i>Love Story</i>
          </>
        ),
        yes: true,
      },
      { text: <>Kirim Ucapan & Doa</>, yes: true },
      {
        text: (
          <>
            Peta Lokasi (<i>Google Maps</i>)
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            <i>Background Music</i> <b>REQUEST</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Foto <b>max. 10</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Video <b>max. 1</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Hitung Mundur (<i>Countdown Timer</i>)
          </>
        ),
        yes: true,
      },
      { text: <>Konfirmasi Kehadiran (RSVP)</>, yes: true },
      { text: <>Angpao Digital</>, yes: true },
      { text: <>Tambah ke Pengingat/Kalender</>, yes: true },
      {
        text: (
          <>
            <b>FREE max. 100</b> Nama Tamu
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            <b>FREE</b> URL Khusus
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Galeri Foto (opsional) <b>max. 5</b>
          </>
        ),
        yes: true,
      },
    ],
  },
];

export default packages;