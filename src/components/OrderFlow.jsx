import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PaletteIcon from "@mui/icons-material/Palette";
import PaymentsIcon from "@mui/icons-material/Payments";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const steps = [
  {
    title: "Chat via WhatsApp",
    desc: "Hubungi tim Sayvia melalui WhatsApp di 08xxxxx untuk mulai pemesanan.",
    icon: <WhatsAppIcon />,
  },
  {
    title: "Isi Data Acara",
    desc: "Kami kirimkan formulir, kamu tinggal isi detail acara dengan mudah.",
    icon: <AssignmentIcon />,
  },
  {
    title: "Pilih Paket & Desain",
    desc: "Tentukan paket dan desain undangan sesuai dengan gaya acara kamu.",
    icon: <PaletteIcon />,
  },
  {
    title: "Konfirmasi & Bayar",
    desc: "Setelah harga disepakati, lakukan pembayaran untuk memulai proses.",
    icon: <PaymentsIcon />,
  },
  {
    title: "Undangan Diproses",
    desc: "Tim kami langsung mengerjakan undanganmu sampai siap dibagikan.",
    icon: <RocketLaunchIcon />,
  },
];

const OrderFlow = () => (
  <Box
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 3, md: 8 },
      textAlign: "center",
      background: "#e9fcfbff",
    }}
  >
    <Typography variant="h4" fontWeight={800} mb={2} color="#F97316">
      Alur Pemesanan
    </Typography>

    <Typography color="text.secondary" maxWidth={600} mx="auto" mb={6}>
      Proses sederhana dan cepat, dari pemesanan hingga undangan siap dibagikan.
    </Typography>

    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{ position: "relative" }}
    >
      {steps.map((step, i) => (
        <Grid item xs={12} md={2.2} key={i} sx={{ position: "relative" }}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              borderRadius: 4,
              border: "1px solid #FFE4D5",
              position: "relative",
              zIndex: 1,
              background: "#fff",
              transition: "all .35s ease",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 20px 40px rgba(249,115,22,0.25)",
                borderColor: "#F97316",
              },
            }}
          >
            <CardContent sx={{ p: 4, textAlign: "center" }}>
              {/* STEP CIRCLE */}
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  mx: "auto",
                  mb: 2,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F97316, #FDBA74)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 900,
                  boxShadow: "0 8px 20px rgba(249,115,22,0.4)",
                }}
              >
                {i + 1}
              </Box>

              {/* ICON */}
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  mx: "auto",
                  mb: 2,
                  color: "#F97316",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 30,
                }}
              >
                {step.icon}
              </Box>

              <Typography fontWeight={800} mb={1}>
                {step.title}
              </Typography>

              <Typography fontSize={14} color="text.secondary">
                {step.desc}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default OrderFlow;
