import { Grid, Box, Typography } from "@mui/material";
import { useSayviaTheme } from "../theme/SayviaThemeProvider";

const values = [
  {
    title: "Harga Terjangkau",
    desc: "Harga paket ramah di kantong, cocok untuk semua kalangan.",
    icon: "/assets/icons/1_Harga_terjangkau.webp",
  },
  {
    title: "Desain Beragam",
    desc: "Tersedia 100+ template desain kekinian yang bisa disesuaikan.",
    icon: "/assets/icons/2_Desain_Beragam.webp",
  },
  {
    title: "Proses Cepat",
    desc: "Pesan hari ini, undangan digital bisa tayang dalam <24 jam.",
    icon: "/assets/icons/3_Proses_Cepat.webp",
  },
  {
    title: "Keamanan Ekstra",
    desc: "Fitur keamanan tambahan agar undangan bisa dibagikan tanpa khawatir.",
    icon: "/assets/icons/4_Keamanan_Ekstra.webp",
  },
  {
    title: "Fitur Lengkap",
    desc: "Semua fitur tersedia agar praktis digunakan tanpa ribet.",
    icon: "/assets/icons/5_Fitur_Lengkap.webp",
  },
  {
    title: "Pelayanan Terbaik",
    desc: "Tim kami selalu siap membantu agar proses terasa nyaman.",
    icon: "/assets/icons/6_Pelayanan_Terbaik.webp",
  },
  {
    title: "Ramah Lingkungan",
    desc: "Tanpa cetak kertas dan plastik, lebih ramah lingkungan.",
    icon: "/assets/icons/7_Ramah_Lingkungan.webp",
  },
  {
    title: "Kualitas Profesional",
    desc: "Dibuat dengan standar profesional agar terlihat berkelas.",
    icon: "/assets/icons/8_Kualitas_Profesional.webp",
  },
];

const ValuesSection = () => {
  const { colors } = useSayviaTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        background: `linear-gradient(180deg, ${colors.backgroundLight} 30%, ${colors.white} 40%)`,
      }}
    >
      {/* Container */}
      <Box
        sx={{
          maxWidth: "1540px",
          mx: "auto",
          background: colors.white,
          borderRadius: 5,
          p: { xs: 3, md: 6 },
          boxShadow: "15px 25px 60px rgba(0,0,0,0.2)",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "1.42rem", md: "2.33rem" },
            fontWeight: 900,
            mb: 6,
            textAlign: "left",
          }}
        >
          Kenapa harus pilih{" "}
          <Box component="span" sx={{ color: colors.secondary }}>
            Say
          </Box>
          <Box component="span" sx={{ color: colors.primary }}>
            via
          </Box>
          ?
        </Typography>

        {/* Values Grid */}
        <Grid container spacing={3}>
          {values.map((item, i) => (
            <Grid item xs={10} sm={4} md={2} key={i}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  height: "100%",
                  maxWidth: 300,
                  // transition: "all .3s ease",
                  // "&:hover": {
                  //   transform: "translateY(-6px)",
                  //   boxShadow: "0 15px 40px rgba(249,115,22,0.15)",
                  // },
                }}
              >
                {/* Icon */}
                <Box mb={2}>
                  <img
                    src={item.icon}
                    width={50}
                    height={50}
                    style={{ objectFit: "contain" }}
                    alt={item.title}
                  />
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: 16,
                    color: colors.primary,
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: 14,
                    color: colors.textSecondary,
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ValuesSection;
