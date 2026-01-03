import { Grid, Box, Typography } from "@mui/material";

const values = [
  {
    title: "Harga Terjangkau",
    desc: "Harga paket ramah di kantong, cocok untuk semua kalangan.",
    icon: "/assets/icons/Icon_Harga.png",
  },
  {
    title: "Desain Beragam",
    desc: "Tersedia 100+ template desain kekinian yang bisa disesuaikan.",
    icon: "/assets/icons/Icon_Desain.png",
  },
  {
    title: "Proses Cepat",
    desc: "Pesan hari ini, undangan digital bisa tayang dalam <24 jam.",
    icon: "/assets/icons/Icon_Cepat.png",
  },
  {
    title: "Keamanan Ekstra",
    desc: "Fitur keamanan tambahan agar undangan bisa dibagikan tanpa khawatir.",
    icon: "/assets/icons/Icon_Keamanan.png",
  },
  {
    title: "Fitur Lengkap",
    desc: "Semua fitur tersedia agar praktis digunakan tanpa ribet.",
    icon: "/assets/icons/Icon_Fitur.png",
  },
  {
    title: "Pelayanan Terbaik",
    desc: "Tim kami selalu siap membantu agar proses terasa nyaman.",
    icon: "/assets/icons/Icon_Servis.png",
  },
  {
    title: "Ramah Lingkungan",
    desc: "Tanpa cetak kertas dan plastik, lebih ramah lingkungan.",
    icon: "/assets/icons/Icon_Ramah Lingkungan.png",
  },
  {
    title: "Kualitas Profesional",
    desc: "Dibuat dengan standar profesional agar terlihat berkelas.",
    icon: "/assets/icons/Icon_Kualitas.png",
  },
];

const ValuesSection = () => (
  <Box
    sx={{
      py: { xs: 6, md: 10 },
      px: { xs: 3, md: 6 },
      background: "linear-gradient(180deg, #F8FAF9 0%, #FFFFFF 100%)",
    }}
  >
    {/* TITLE */}
    <Typography variant="h4" fontWeight={800} textAlign="left" mb={6}>
      Kenapa harus pilih{" "}
      <Box component="span" sx={{ color: "#2DD4BF" }}>
        Say
      </Box>
      <Box component="span" sx={{ color: "#F97316" }}>
        via
      </Box>
      ?
    </Typography>

    {/* GRID */}
    <Grid container spacing={3}>
      {values.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Box
            sx={{
              // height: "auto",
              width: "auto",
              p: 4,
              borderRadius: 5,
              backgroundColor: "#FFFFFF",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              transition: "all .3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 20px 40px rgba(249,115,22,0.2)",
              },
            }}
          >
            {/* ICON */}
            <Box mb={1}>
              <img
                src={item.icon}
                alt={item.title}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </Box>

            {/* TEXT */}
            <Typography fontWeight={700} color="#F97316">
              {item.title}
            </Typography>

            <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
              {item.desc}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ValuesSection;
