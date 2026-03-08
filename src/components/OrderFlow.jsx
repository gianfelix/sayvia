import { Box, Icon, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EditIcon from "@mui/icons-material/Edit";
import PaymentsIcon from "@mui/icons-material/Payments";
import SendIcon from "@mui/icons-material/Send";
import { Image } from "@mui/icons-material";
import { colors, size, weight } from "../theme/sayviaTheme";

const steps = [
  {
    title: "Hubungi & Pesan",
    desc: (
      <>
        Hubungi tim Sayvia melalui{" "}
        <span
          style={{
            color: "#068f7f",
            fontWeight: weight.bold,
            fontStyle: "italic",
          }}
        >
          WhatsApp
        </span>{" "}
        atau klik tombol{" "}
        <span style={{ color: "#068f7f", fontWeight: 600 }}>
          Pesan Sekarang
        </span>{" "}
        untuk memesan undangan digital.
      </>
    ),
    icon: "assets/icons/01.webp",
  },
  {
    title: "Isi Data, Pilih Paket, & Tentukan Desain",
    desc: (
      <>
        <span style={{ color: "#068f7f" }}>
          <b>Isi formulir</b>
        </span>{" "}
        yang disediakan, lalu{" "}
        <span style={{ color: "#068f7f" }}>
          <b>pilih paket</b>
        </span>{" "}
        yang diinginkan, dan{" "}
        <span style={{ color: "#068f7f" }}>
          <b>pilih desain</b>
        </span>{" "}
        yang kamu sukai.
      </>
    ),
    icon: "assets/icons/02.webp",
  },
  {
    title: "Bayar & Konfirmasi",
    desc: (
      <>
        <span style={{ color: "#068f7f", fontWeight: weight.bold }}>
          Lakukan pembayaran
        </span>{" "}
        setelah <i>invoice</i> dikirimkan dan{" "}
        <span style={{ color: "#068f7f", fontWeight: weight.bold }}>
          kirim bukti pembayaran
        </span>{" "}
        kepada tim Sayvia.
      </>
    ),
    icon: "assets/icons/03.webp",
  },
  {
    title: "Proses, Siap, & Bagikan",
    desc: (
      <>
        Tim Sayvia{" "}
        <span style={{ color: "#068f7f", fontWeight: 600 }}>
          langsung mengerjakan
        </span>{" "}
        undangan digitalmu sampai{" "}
        <span style={{ color: "#068f7f", fontWeight: 600 }}>
          siap dibagikan
        </span>{" "}
        kepada tamu.
      </>
    ),
    icon: "assets/icons/04.webp",
  },
];

export default function OrderFlow() {
  return (
    <section id="order-flow">
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 10 },
          background: colors.backgroundLight,
        }}
      >
        {/* GRID 2 UTAMA */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
            gap: 4,
            maxWidth: "95%",
            alignItems: "start",
          }}
        >
          {/* KOLOM KIRI */}
          {/* TITLE */}
          <Box maxWidth={1100} ml={9} mt={0}>
            <Typography fontSize={size.h1} fontWeight={weight.bold} mb={1}>
              Cuma <span style={{ color: colors.primary }}>4 langkah</span>,
              undangan digital{" "}
              <span style={{ color: colors.primary }}>langsung jadi</span>
              <span>!</span>
              <br />
              Segampang itu —{" "}
              <span style={{ color: colors.secondary }}>
                yuk mulai pesan
              </span>{" "}
              undangan
              <br />
              digital kamu{" "}
              <span style={{ color: colors.secondary }}>sekarang</span>
              <span>!</span>
            </Typography>

            {/* MOCKUP IMAGE */}
            <Box
              sx={{
                width: 700,
                height: 450,
                borderRadius: 6,
                background: "#d1d5db",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#555",
                fontSize: 20,
                mt: 7,
                mx: "auto",
              }}
            >
              Mockup Image
            </Box>
          </Box>

          {/* KOLOM KANAN */}
          {/* STEPS */}
          <Box>
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  background: colors.white,
                  borderRadius: 5,
                  p: 2.5,
                  mb: 3,
                  ml: 3,
                }}
              >
                {/* BIG NUMBER */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: 2.5,
                    right: 20,
                    fontSize: size.h0,
                    fontWeight: weight.bold,
                    color: "#e5e5e5",
                    zIndex: 0,
                  }}
                >
                  {index + 1}
                </Typography>

                {/* ICON */}
                <img
                  src={step.icon}
                  alt={`step-${index + 1}`}
                  style={{
                    width: 40,
                    marginBottom: 5,
                    position: "relative",
                    zIndex: 1,
                  }}
                />

                <Typography
                  fontWeight={weight.bold}
                  fontSize={size.h2}
                  mb={2.5}
                  position="relative"
                  zIndex={1}
                >
                  {step.title}
                </Typography>

                <Typography
                  fontSize={size.h3}
                  fontWeight={weight.regular}
                  position="relative"
                  zIndex={1}
                >
                  {step.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </section>
  );
}
