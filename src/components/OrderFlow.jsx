import { Box, Typography } from "@mui/material";
import { colors, size, weight } from "../theme/sayviaTheme";

const steps = [
  {
    title: "Hubungi & Pesan",
    desc: (
      <>
        Hubungi tim Sayvia melalui{" "}
        <span style={{ color: "#068f7f", fontWeight: weight.bold, fontStyle: "italic" }}>
          WhatsApp
        </span>{" "}
        atau klik tombol{" "}
        <span style={{ color: "#068f7f", fontWeight: 600 }}>Pesan Sekarang</span>{" "}
        untuk memesan undangan digital.
      </>
    ),
    icon: "assets/icons/01.webp",
  },
  {
    title: "Isi Data, Pilih Paket, & Tentukan Desain",
    desc: (
      <>
        <span style={{ color: "#068f7f" }}><b>Isi formulir</b></span>{" "}
        yang disediakan, lalu{" "}
        <span style={{ color: "#068f7f" }}><b>pilih paket</b></span>{" "}
        yang diinginkan, dan{" "}
        <span style={{ color: "#068f7f" }}><b>pilih desain</b></span>{" "}
        yang kamu sukai.
      </>
    ),
    icon: "assets/icons/02.webp",
  },
  {
    title: "Bayar & Konfirmasi",
    desc: (
      <>
        <span style={{ color: "#068f7f", fontWeight: weight.bold }}>Lakukan pembayaran</span>{" "}
        setelah <i>invoice</i> dikirimkan dan{" "}
        <span style={{ color: "#068f7f", fontWeight: weight.bold }}>kirim bukti pembayaran</span>{" "}
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
        <span style={{ color: "#068f7f", fontWeight: 600 }}>langsung mengerjakan</span>{" "}
        undangan digitalmu sampai{" "}
        <span style={{ color: "#068f7f", fontWeight: 600 }}>siap dibagikan</span>{" "}
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
          px: { xs: 3, sm: 5, md: 8, lg: 10 },
          background: colors.backgroundLight,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
            gap: { xs: 6, md: 4 },
            maxWidth: "95%",
            mx: "auto",
            alignItems: "start",
          }}
        >
          {/* ── KOLOM KIRI ── */}
          <Box
            sx={{
              ml: { xs: 0, sm: 0, md: 4, lg: 9 },
              mt: 0,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* TITLE */}
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: size.h1 },
                fontWeight: weight.bold,
                mb: 1,
                lineHeight: 1.5,
              }}
            >
              Cuma <span style={{ color: colors.primary }}>4 langkah</span>,
              undangan digital{" "}
              <span style={{ color: colors.primary }}>langsung jadi</span>
              <span>!</span>
              {/* hide manual <br> on mobile */}
              <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                <br />
              </Box>{" "}
              Segampang itu —{" "}
              <span style={{ color: colors.secondary }}>yuk mulai pesan</span>{" "}
              undangan
              <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                <br />
              </Box>{" "}
              digital kamu{" "}
              <span style={{ color: colors.secondary }}>sekarang</span>
              <span>!</span>
            </Typography>

            {/* MOCKUP IMAGE */}
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: 500, md: 700 },
                aspectRatio: "14 / 9",
                borderRadius: 6,
                background: "#d1d5db",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#555",
                fontSize: { xs: 14, md: 20 },
                mt: { xs: 4, md: 7 },
                mx: "auto",
              }}
            >
              Mockup Image
            </Box>
          </Box>

          {/* ── KOLOM KANAN — STEPS ── */}
          <Box>
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  background: colors.white,
                  borderRadius: 5,
                  p: { xs: 2, sm: 2.5 },
                  mb: 3,
                  ml: { xs: 0, md: 3 },
                  overflow: "hidden",
                }}
              >
                {/* BIG NUMBER — background decoration */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: 2.5,
                    right: 20,
                    fontSize: { xs: "3rem", md: size.h0 },
                    fontWeight: weight.bold,
                    color: "#e5e5e5",
                    zIndex: 0,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {index + 1}
                </Typography>

                {/* ICON */}
                <Box
                  component="img"
                  src={step.icon}
                  alt={`step-${index + 1}`}
                  sx={{
                    width: { xs: 32, md: 40 },
                    mb: 0.5,
                    position: "relative",
                    zIndex: 1,
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: weight.bold,
                    fontSize: { xs: "0.95rem", sm: size.h3, md: size.h2 },
                    mb: 1.5,
                    position: "relative",
                    zIndex: 1,
                    lineHeight: 1.4,
                    pr: { xs: 4, md: 6 }, // prevent overlap with big number
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.85rem", sm: size.h3 },
                    fontWeight: weight.regular,
                    position: "relative",
                    zIndex: 1,
                    lineHeight: 1.7,
                  }}
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