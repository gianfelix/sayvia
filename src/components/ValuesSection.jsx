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
      px: { xs: 2, md: 6 },
      background: "#ffffffff",
    }}
  >
    {/* BIG CONTAINER */}
    <Box
      sx={{
        background: "#fff",
        borderRadius: 5,
        p: { xs: 2.5, md: 4 },
        boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
      }}
    >
      {/* TITLE */}
      <Typography variant="h4" fontWeight={800} mb={5}>
        Kenapa harus pilih{" "}
        <Box component="span" sx={{ color: "#2DD4BF" }}>
          Say
        </Box>
        <Box component="span" sx={{ color: "#F97316" }}>
          via
        </Box>
        ?
      </Typography>
      <Grid container>
        {values.map((item, i) => (
          <Grid item key={i}>
            <Box
              sx={{
                p: { xs: 2, md: 4 },
                height: "100%",
                maxWidth: 370,
              }}
            >
              {/* Icon */}
              <Box mb={1}>
                <img src={item.icon} width={45} height={45} alt={item.title} />
              </Box>

              {/* Text */}
              <Typography fontWeight={750} fontSize={16} color="#F97316">
                {item.title}
              </Typography>
              <Typography fontSize={15} color="text.secondary" lineHeight={1.5}>
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default ValuesSection;
