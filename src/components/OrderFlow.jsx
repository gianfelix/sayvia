import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import EditNoteIcon from "@mui/icons-material/EditNote";
import RateReviewIcon from "@mui/icons-material/RateReview";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const steps = [
  {
    title: "Pilih Desain",
    desc: "Pilih desain undangan sesuai gaya kamu.",
    icon: <DesignServicesIcon />,
  },
  {
    title: "Isi Data",
    desc: "Masukkan detail acara dengan mudah.",
    icon: <EditNoteIcon />,
  },
  {
    title: "Revisi",
    desc: "Lakukan revisi hingga sesuai keinginan.",
    icon: <RateReviewIcon />,
  },
  {
    title: "Publish & Share",
    desc: "Undangan siap dibagikan ke siapa saja.",
    icon: <RocketLaunchIcon />,
  },
];

const OrderFlow = () => (
  <Box
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 3, md: 8 },
      textAlign: "center",
      background: "linear-gradient(180deg, #ffffffff, #FFF7ED)",
    }}
  >
    <Typography variant="h4" fontWeight={800} mb={2} color="#F97316">
      Alur Pemesanan
    </Typography>

    <Typography color="text.secondary" maxWidth={600} mx="auto" mb={6}>
      Proses sederhana dan cepat, dari pemesanan hingga undangan siap dibagikan.
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {steps.map((step, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              borderRadius: 4,
              border: "1px solid #FFE4D5",
              transition: "all .3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 20px 40px rgba(249,115,22,0.2)",
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  mx: "auto",
                  mb: 2,
                  borderRadius: "50%",
                  bgcolor: "#FFF7ED",
                  color: "#F97316",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </Box>

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
                }}
              >
                {step.icon}
              </Box>

              <Typography variant="h6" fontWeight={700} mb={1}>
                {step.title}
              </Typography>

              <Typography color="text.secondary">{step.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default OrderFlow;
