import { Grid, Box, Typography } from "@mui/material";
import { useSayviaTheme } from "../theme/SayviaThemeProvider";
import { size, weight } from "../theme/sayviaTheme";

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
    <section id="value">
      <Box
        sx={{
          position: "relative",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3, md: 2 },
          background: colors.backgroundLight,
          overflow: "hidden",
        }}
      >
        {/* Top accent band */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "25%",
            backgroundColor: colors.backgroundPastel,
            zIndex: 0,
          }}
        />

        {/* Card container */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: { xs: "100%", sm: "92%", md: "88%", lg: "85%" },
            mx: "auto",
            background: colors.white,
            borderRadius: { xs: 4, md: 7 },
            p: { xs: 3, sm: 4, md: 0 },
            pb: { xs: 4, sm: 5, md: 8.5 },
            boxShadow: "15px 25px 60px rgba(0,0,0,0.2)",
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.42rem", md: size.h1 },
              fontWeight: weight.semiBold,
              pt: { xs: 0, md: 8.5 },
              pl: { xs: 0, md: 8.5 },
              mt: 0,
              mb: { xs: 4, md: 7 },
              textAlign: { xs: "center", md: "left" },
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
          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={12} justifyContent="center">
            {values.map((item, i) => (
              <Grid item xs={6} sm={6} md={3} key={i}>
                <Box
                  sx={{
                    p: { xs: 2, sm: 2.5, md: 4 },
                    borderRadius: { xs: 3, md: 4 },
                    height: "100%",
                    maxWidth: { xs: "100%", md: 310 },
                    // subtle hover lift
                    
                  }}
                >
                  {/* Icon — scales with screen */}
                  <Box mb={{ xs: 1, md: 1.5 }}>
                    <Box
                      component="img"
                      src={item.icon}
                      alt={item.title}
                      sx={{
                        width: { xs: 40, sm: 48, md: 56, lg: 64 },
                        height: { xs: 40, sm: 48, md: 56, lg: 64 },
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: size.h2 },
                      fontWeight: weight.semiBold,
                      color: colors.primary,
                      mb: { xs: 0.75, md: 1.5 },
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.8rem", md: size.h3 },
                      fontWeight: weight.regular,
                      color: colors.black,
                      lineHeight: { xs: 1.4, md: 1.5 },
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
    </section>
  );
};

export default ValuesSection;