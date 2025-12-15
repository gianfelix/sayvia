import { Box, Typography, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const CTASection = () => (
  <Box
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 3, md: 8 },
      textAlign: "center",
      background: "linear-gradient(135deg, #F97316, #EA580C)",
      color: "#FFFFFF",
    }}
  >
    <Typography
      variant="h4"
      fontWeight={800}
      mb={2}
    >
      Siap Buat Undangan Digital?
    </Typography>

    <Typography
      maxWidth={600}
      mx="auto"
      mb={4}
      sx={{ opacity: 0.9 }}
    >
      Tinggalkan undangan konvensional. Saatnya tampil lebih
      modern, praktis, dan berkesan bersama SAYVIA.
    </Typography>

    <Button
      variant="contained"
      size="large"
      startIcon={<WhatsAppIcon />}
      sx={{
        bgcolor: "#FFFFFF",
        color: "#F97316",
        px: 5,
        py: 1.5,
        borderRadius: 999,
        fontWeight: 700,
        boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
        "&:hover": {
          bgcolor: "#FFF7ED",
        },
      }}
      href="https://wa.me/628xxxxxxxxx"
      target="_blank"
    >
      Chat WhatsApp
    </Button>
  </Box>
);

export default CTASection;
