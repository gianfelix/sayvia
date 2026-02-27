import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors, size, weight } from "../theme/sayviaTheme";
//import { type } from "@testing-library/user-event/dist/type";

const faqs = [
  {
    q: <>Apa itu undangan digital dan bagaimana cara kerjanya?</>,
    a: [
      { type: "text", content: <>Undangan digital adalah undangan berbentuk <i>website</i> atau <i>link online</i> yang bisa dibuka lewat <i>handphone</i>, <i>tablet</i>, atau laptop tanpa perlu <i>download</i> aplikasi apapun.</> },
      { type: "text", content: <>Kamu tinggal bagikan <i>link</i> undangan ke tamu melalui WhatsApp, Instagram, <i>email</i>, atau media sosial kamu lainnya.</> },
    ]
  },
  {
    q: <>Apakah undangan digital Sayvia hanya untuk acara pernikahan?</>,
    a: [
      { type: "text", content: <>Tidak! Undangan digital Sayvia bisa dipakai untuk berbagai jenis acara, seperti pernikahan, lamaran, ulang tahun, reuni, wisuda, aqiqah, hingga acara untuk perusahaan.</> },
      { type: "text", content: <>Konten dalam undangan akan kami sesuaikan dengan kebutuhan acara kamu.</> },
    ]
  },
  {
    q: <>Apakah undangan digital Sayvia bisa ditambahkan lagu atau video?</>,
    a: [
      { type: "text", content: <>Bisa, dong! Kamu bisa menambahkan:</> },
      { type: "bullet", content: <><i>Background music</i>;</> },
      { type: "bullet", content: <>Video <i>prewedding</i> atau video ucapan;</> },
      { type: "bullet", content: <>Galeri foto.</> },
      { type: "text", content: <>Fitur ini tersedia sesuai paket yang kamu pilih, bikin undangan kamu terasa lebih hidup dan personal.</> },
    ]
  },
  {
    q: <>Bagaimana cara kerja fitur kado <i>cashless</i> di undangan digital Sayvia?</>,
    a: [
      { type: "text", content: <>Kado <i>cashless</i> bikin tamu lebih praktis ngasih hadiah. Mereka bisa langsung kirim hadiah melalui:</> },
      { type: "bullet", content: <>Transfer bank;</> },
      { type: "bullet", content: <><i>E-Wallet</i> (DANA, OVO, GoPay, dll).</> },
      { type: "text", content: <>Nomor rekening atau dompet digital akan ditampilkan di undangan digital dan dananya langsung masuk ke akun kamu.</> },
    ]
  },
  {
    q: <>Apakah jumlah nama tamu undangan digital Sayvia dibatasi?</>,
    a: [
      { type: "text", content: <>Ada batasannya, ya. Untuk undangan digital, tersedia kuota hingga 100 nama tamu.</> },
      { type: "text", content: <>Kalau masih kurang, kamu tetap bisa menambah kuota nama tamu sesuai kebutuhan dengan biaya tambahan sesuai ketentuan.</> },
    ]
  },
  {
    q: <>Berapa lama proses pengerjaan undangan digital Sayvia?</>,
    a: [
      { type: "text", content: <>Undangan digital kamu biasanya siap maksimal dalam 24 jam setelah semua data kami terima.</> },
      { type: "text", content: <>Waktu pengerjaan bisa sedikit menyesuaikan jika pesanan sedang ramai, tapi kami tetap prioritaskan proses cepat dan rapi.</> },
    ]
  },
  {
    q: <>Apakah undangan digital Sayvia bisa direvisi setelah jadi?</>,
    a: [
      { type: "text", content: <>Bisa, kok! Undangan digital bisa direvisi sesuai paket yang kamu pilih.</> },
      { type: "text", content: <>Revisi mencakup:</> },
      { type: "bullet", content: <>Perubahan data acara;</> },
      { type: "bullet", content: <>Ganti foto atau video;</> },
      { type: "bullet", content: <>Ganti <i>background music</i>.</> },
      { type: "text", content: <>Untuk revisi:</> },
      { type: "bullet", content: <>Jenis font;</> },
      { type: "bullet", content: <>Warna;</> },
      { type: "bullet", content: <>Desain utama.</> },
      { type: "text", content: <><b>Tidak bisa diubah</b> agar tampilannya tetap konsisten.</> },
      { type: "text", content: <>Revisi berlaku hingga maksimal 7 hari setelah undangan jadi. Lewat dari itu tetap bisa, tapi dikenakan biaya tambahan (kecuali jika ada kesalahan dari kami).</> },
    ]
  },
  {
    q: <>Berapa lama masa aktif undangan digital Sayvia?</>,
    a: [
      { type: "text", content: <>Undangan digital bisa diakses sejak kamu menerimanya hingga 14 hari setelah acara berlangsung.</> },
      { type: "text", content: <>Setelah itu, undangan akan dinonaktifkan dan data kami hapus dari <i>database</i> demi menjaga keamanan data kamu.</> },
      { type: "text", content: <>Sebagai arsip, kamu tetap mendapatkan salinan undangan digital dalam bentuk file pdf.</> },
    ]
  },
  {
    q: <>Apakah data tamu di undangan digital Sayvia aman?</>,
    a: [
      { type: "text", content: <>Aman, ya. Data tamu hanya dipakai untuk keperluan undangan.</> },
      { type: "text", content: <>Kami tidak membagikan data ke pihak lain, dan data akan dihapus setelah masa aktif undangan berakhir.</> },
    ]
  },
  {
    q: <>Apakah tersedia dukungan pelanggan untuk undangan digital?</>,
    a: [
      { type: "text", content: <>Tersedia, ya! Kamu bisa langsung <i>chat</i> tim kami lewat WhatsApp.</> },
      { type: "text", content: <>Kami siap bantu kalau ada pertanyaan atau kendala, dari awal pesan sampai undangan digital kamu siap dibagikan.</> },
    ]
  },
  {
    q: <>Berapa biaya pembuatan undangan digital Sayvia?</>,
    a: [
      { type: "text", content: <>Harga undangan digital tergantung paket yang kamu pilih.</> },
      { type: "text", content: <>Kalau ada tambahan fitur di luar paket, biayanya akan diinformasikan dulu, jadi tetap aman dan transparan.</> },
    ]
  },
  {
    q: <>Metode pembayaran apa saja yang tersedia untuk undangan digital Sayvia?</>,
    a: [
      { type: "text", content: <>Soal pembayaran, tenang aja opsinya lengkap. Kamu bisa bayar lewat:</> },
      { type: "bullet", content: <>Transfer bank;</> },
      { type: "bullet", content: <><i>E-Wallet</i> (DANA, OVO, dan GoPay);</> },
      { type: "bullet", content: <>atau <i>platform online</i> (Saweria dan Trakteer).</> },
      { type: "text", content: <>Tinggal pilih yang paling nyaman.</> },
    ]
  },
  {
    q: <>Bagaimana cara memesan undangan digital Sayvia?</>,
    a: [
      { type: "text", content: <>Pesan undangan digitalnya gampang banget:</> },
      { type: "text", content: <>1. <i>Chat</i> tim kami lewat WhatsApp;</> },
      { type: "text", content: <>2. Isi formulir data yang dikirim;</> },
      { type: "text", content: <>3. Pilih paket dan desain;</> },
      { type: "text", content: <>4. Konfirmasi harga dan bayar;</> },
      { type: "text", content: <>5. Undangan kamu langsung kami proses dan siap dibagikan.</> },
    ]
  },
];

export default function FAQSection() {
  return (
    <Box
      sx={{
        pt: { xs: 8, md: 1 },
        pb: { xs: 8, md: 18 },
        px: { xs: 3, md: 8 },
        background: colors.backgroundLight,
      }}
    >
      {/* TITLE */}
      <Typography
        textAlign="center"
        sx={{
          fontSize: size.h0,
          fontWeight: weight.bold,
          color: colors.primary,
          mb: 1,
        }}
      >
        FAQ
      </Typography>

      <Typography textAlign="center" fontSize={size.h2} fontWeight={weight.semiBold} mb={0}>
        Masih bingung soal layanan undangan digital Sayvia?
      </Typography>

      <Typography textAlign="center" fontSize={size.h2} fontWeight={weight.semiBold} mb={10}>
        Santai, cek semua jawabannya di FAQ ini ya
      </Typography>

      {/* FAQ GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
          maxWidth: "75%",
          mx: "auto",
          px: 1.5,
          alignItems: "start",
        }}
      >
        {faqs.map((faq, index) => (
          <Accordion
            //defaultExpanded
            key={index}
            disableGutters
            elevation={0}
            square={true}
            sx={{
              borderRadius: 3.5,
              overflow: "hidden",
              border: `2px solid ${colors.primary}`,
              background: colors.white,

              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: colors.primary }} />}
              sx={{
                px: 3,
                py: 2,
                borderRadius: "inherit",
                backgroundColor: colors.white,

                "&.Mui-expanded": {
                  minHeight: "unset",
                },

                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
              }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                {/* NUMBER */}
                <Typography
                  sx={{
                    fontWeight: weight.semiBold,
                    fontSize: size.h3,
                    color: colors.primary,
                  }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </Typography>

                {/* QUESTION */}
                <Typography
                  sx={{
                    fontSize: size.h3,
                    fontWeight: weight.semiBold,
                    color: colors.primary,
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails 
              sx={{ 
                px: 7, 
                pb: 3,
                backgroundColor: colors.white, }}>
              {faq.a.map((item, i) => {
                const isObject = typeof item === "object" && item !== null && "type" in item;
                const isBullet = isObject && item.type === "bullet";

                const content = isObject ? item.content : item;

                return (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: 1.2,
                      pl: isBullet ? 2 : 0,
                    }}
                  >
                    {/* Bullet Dot */}
                    {isBullet && (
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: colors.primary,
                          mt: "8px",
                          mr: 1.5,
                          flexShrink: 0,
                        }}
                      />
                    )}

                    <Typography 
                      sx={{ 
                        fontSize: size.h3, 
                        fontWeight: weight.medium, 
                        lineHeight: 1.6, 
                      }}
                    >
                      {content}
                    </Typography>
                  </Box>
                );
              })}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
