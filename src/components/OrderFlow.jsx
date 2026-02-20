import { Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EditIcon from "@mui/icons-material/Edit";
import PaymentsIcon from "@mui/icons-material/Payments";
import SendIcon from "@mui/icons-material/Send";

const steps = [
  {
    title: "Hubungi & Pesan",
    desc: (
      <>
        Hubungi tim Sayvia melalui <b>WhatsApp</b> atau klik tombol{" "}
        <span style={{ color: "#0ea5a4", fontWeight: 600 }}>
          Pesan Sekarang
        </span>{" "}
        untuk memesan undangan digital.
      </>
    ),
    icon: <WhatsAppIcon fontSize="small" />,
  },
  {
    title: "Isi Data, Pilih Paket, & Tentukan Desain",
    desc: (
      <>
        Isi <b>formulir</b> yang disediakan, lalu{" "}
        <span style={{ color: "#0ea5a4" }}>pilih paket</span> yang diinginkan,
        dan <span style={{ color: "#0ea5a4" }}>pilih desain</span> yang kamu
        sukai.
      </>
    ),
    icon: <EditIcon fontSize="small" />,
  },
  {
    title: "Bayar & Konfirmasi",
    desc: (
      <>
        <span style={{ color: "#0ea5a4", fontWeight: 600 }}>
          Lakukan pembayaran
        </span>{" "}
        setelah invoice dikirimkan dan kirim bukti pembayaran kepada tim
        Sayvia.
      </>
    ),
    icon: <PaymentsIcon fontSize="small" />,
  },
  {
    title: "Proses, Siap, & Bagikan",
    desc: (
      <>
        Tim Sayvia <b>langsung mengerjakan</b> undangan digitalmu sampai{" "}
        <span style={{ color: "#0ea5a4", fontWeight: 600 }}>
          siap dibagikan
        </span>{" "}
        kepada tamu.
      </>
    ),
    icon: <SendIcon fontSize="small" />,
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
          Cuma{" "}
          <span style={{ color: "#F97316" }}>4 langkah</span>, undangan digital{" "}
          <span style={{ color: "#F97316" }}>langsung jadi!</span>
        </Typography>

        <Typography fontSize={18} fontWeight={600}>
          Segampang itu —{" "}
          <span style={{ color: "#0ea5a4" }}>
            yuk mulai pesan
          </span>{" "}
          undangan digital kamu{" "}
          <span style={{ color: "#0ea5a4" }}>sekarang!</span>
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
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#0ea5a4",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {step.icon}
              </Box>

              <Typography fontWeight={700} mb={1} position="relative" zIndex={1}>
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