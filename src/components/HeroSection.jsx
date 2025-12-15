import { Box, Typography, Button, Stack } from "@mui/material";
import DesignCarousel from "./DesignCarousel";

// preview desain (reusable juga di page Desain)
const designPreviews = [
  "/assets/images/design-1.jpg",
  "/assets/images/design-2.jpg",
  "/assets/images/design-3.jpg",
];

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        alignItems: "center",
        px: { xs: 4, md: 15 },
        background: "linear-gradient(180deg, #FFFFFF, #FFF7ED)",
      }}
    >
      {/* FRAME KIRI */}
      <Stack spacing={3} maxWidth={540}>
        <Typography
          variant="h2"
          fontWeight={800}
          lineHeight={1.1}
          color="#F97316"
        >
          Say it! <br /> Via the new way
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Cara baru kirim undangan, no more boring invite!
        </Typography>

        <Typography color="text.secondary">
          Ekspresikan gayamu lewat undangan digital yang fresh, modern, dan
          anti-mainstream. Semua dalam satu tautan, tanpa ribet.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            width: "fit-content",
            px: 5,
            py: 1.4,
            borderRadius: 999,
            bgcolor: "#F97316",
            boxShadow: "0 10px 25px rgba(249,115,22,0.35)",
            "&:hover": { bgcolor: "#EA580C" },
          }}
        >
          Pesan Sekarang
        </Button>
      </Stack>

      {/* FRAME KANAN – CAROUSEL */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 6, md: 0 },
        }}
      >
        <DesignCarousel images={designPreviews} />
      </Box>
    </Box>
  );
};

export default HeroSection;
