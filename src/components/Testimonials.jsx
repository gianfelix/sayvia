import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    name: "Alya & Rizky",
    text: "Undangannya cantik, prosesnya cepat, dan hasilnya sesuai ekspektasi. Recommended!",
  },
  {
    name: "Dina & Fajar",
    text: "Desainnya elegan dan modern. Adminnya responsif banget.",
  },
  {
    name: "Nisa & Arif",
    text: "Tinggal share link, semua beres. Simpel dan berkesan!",
  },
];

const Testimonials = () => (
  <Box
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 3, md: 8 },
      background: "linear-gradient(180deg, #e9fcfbff, #ffffffff)",
      textAlign: "center",
    }}
  >
    <Typography variant="h4" fontWeight={800} mb={2} color="#F97316">
      Apa Kata Mereka?
    </Typography>

    <Typography color="text.secondary" maxWidth={600} mx="auto" mb={6}>
      Cerita dari klien yang sudah menggunakan undangan digital SAYVIA.
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {testimonials.map((t, i) => (
        <Grid item xs={12} md={4} key={i}>
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
              {/* Rating */}
              <Box mb={2}>
                {[...Array(5)].map((_, idx) => (
                  <StarIcon
                    key={idx}
                    sx={{
                      fontSize: 18,
                      color: "#F97316",
                    }}
                  />
                ))}
              </Box>

              <Typography fontStyle="italic" color="text.secondary" mb={3}>
                “{t.text}”
              </Typography>

              <Avatar
                sx={{
                  mx: "auto",
                  mb: 1,
                  bgcolor: "#F97316",
                }}
              >
                {t.name.charAt(0)}
              </Avatar>

              <Typography fontWeight={700}>{t.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Testimonials;
