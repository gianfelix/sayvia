import { Grid, Box, Typography, Card, CardContent } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const values = [
  {
    title: "Cepat",
    desc: "Proses cepat & terjadwal tanpa ribet.",
    icon: <BoltIcon />,
  },
  {
    title: "Elegan",
    desc: "Desain premium, modern, dan anti-mainstream.",
    icon: <AutoAwesomeIcon />,
  },
  {
    title: "Support",
    desc: "Didampingi penuh sampai undangan publish.",
    icon: <SupportAgentIcon />,
  },
];

const ValuesSection = () => (
  <Box
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 3, md: 8 },
      textAlign: "center",
      background: "linear-gradient(180deg, #FFF7ED, #FFFFFF)",
    }}
  >
    <Typography variant="h4" fontWeight={800} mb={2} color="#F97316">
      Kenapa SAYVIA?
    </Typography>

    <Typography color="text.secondary" maxWidth={600} mx="auto" mb={6}>
      Kami hadir sebagai cara baru menyampaikan undangan dengan pengalaman
      digital yang elegan dan berkesan.
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {values.map((v, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
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
                  bgcolor: "#F97316",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: " #FFF7ED",
                  fontSize: 28,
                }}
              >
                {v.icon}
              </Box>

              <Typography variant="h6" fontWeight={700} mb={1}>
                {v.title}
              </Typography>

              <Typography color="text.secondary">{v.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ValuesSection;
