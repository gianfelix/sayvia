import { Box, Icon, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EditIcon from "@mui/icons-material/Edit";
import PaymentsIcon from "@mui/icons-material/Payments";
import SendIcon from "@mui/icons-material/Send";
import { Image } from "@mui/icons-material";

const steps = [
  {
    title: "Hubungi & Pesan",
    desc: (
      <>
        Hubungi tim Sayvia melalui{" "}
        <span style={{ color: "#0ea5a4", fontWeight: 600 }}>WhatsApp</span> atau
        klik tombol{" "}
        <span style={{ color: "#0ea5a4", fontWeight: 600 }}>
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
        <span style={{ color: "#0ea5a4" }}>Isi formulir</span> yang disediakan, lalu{" "}
        <span style={{ color: "#0ea5a4" }}>pilih paket</span> yang diinginkan,
        dan <span style={{ color: "#0ea5a4" }}>pilih desain</span> yang kamu
        sukai.
      </>
    ),
    icon: "assets/icons/02.webp",
  },
  {
    title: "Bayar & Konfirmasi",
    desc: (
      <>
        <span style={{ color: "#0ea5a4", fontWeight: 600 }}>
          Lakukan pembayaran
        </span>{" "}
        setelah invoice dikirimkan dan <span style={{ color: "#0ea5a4", fontWeight: 600 }}>
          kirim bukti pembayaran
        </span>{" "} kepada tim Sayvia.
      </>
    ),
    icon: "assets/icons/03.webp",
  },
  {
    title: "Proses, Siap, & Bagikan",
    desc: (
      <>
        Tim Sayvia <span style={{ color: "#0ea5a4", fontWeight: 600 }}>
          langsung mengerjakan
        </span>{" "} undangan digitalmu sampai{" "}
        <span style={{ color: "#0ea5a4", fontWeight: 600 }}>
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
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 10 },
        background: "#ffffff",
      }}
    >
      {/* TITLE */}
      <Box maxWidth={1100} mx="auto" mb={8}>
        <Typography fontSize={20} fontWeight={700} mb={1}>
          Cuma <span style={{ color: "#F97316" }}>4 langkah</span>, undangan
          digital <span style={{ color: "#F97316" }}>langsung jadi</span>
          <span> !</span>
        </Typography>

        <Typography fontSize={18} fontWeight={600}>
          Segampang itu —{" "}
          <span style={{ color: "#14B8A6" }}>yuk mulai pesan</span> undangan
          digital kamu <span style={{ color: "#14B8A6" }}>sekarang!</span>
        </Typography>
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" },
          gap: 6,
          maxWidth: 1100,
          mx: "auto",
          alignItems: "center",
        }}
      >
        {/* MOCKUP IMAGE */}
        <Box
          sx={{
            width: "100%",
            height: 500,
            borderRadius: 6,
            background: "#d1d5db",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#555",
            fontSize: 20,
          }}
        >
          Mockup Image
        </Box>

        {/* STEPS */}
        <Box>
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                background: "#fff",
                borderRadius: 4,
                p: 4,
                mb: 3,
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                border: "1px solid #e5e7eb",
              }}
            >
              {/* BIG NUMBER */}
              <Typography
                sx={{
                  position: "absolute",
                  right: 20,
                  top: 10,
                  fontSize: 80,
                  fontWeight: 800,
                  color: "#e5e7eb",
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
                  marginBottom: 16,
                  position: "relative",
                  zIndex: 1,
                }}
              />

              <Typography
                fontWeight={700}
                mb={1}
                position="relative"
                zIndex={1}
              >
                {step.title}
              </Typography>

              <Typography
                fontSize={14}
                color="text.secondary"
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
  );
}
