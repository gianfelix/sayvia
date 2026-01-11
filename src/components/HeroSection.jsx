import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { useSayviaTheme } from "../theme/SayviaThemeProvider";

const HeroSection = () => {
  const { colors } = useSayviaTheme();

  return (
    <Box
      sx={{
        minHeight: "94vh",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(180deg, ${colors.backgroundLight} 90%, ${colors.white} 100%)`,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            alignItems: "center",
            gap: { xs: 5, md: 10 },
          }}
        >
          {/* LEFT */}
          <Stack spacing={4} ml={3}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 1000,
                lineHeight: 1.1,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <Box component="span" sx={{ color: colors.secondary }}>
                Say
              </Box>{" "}
              <Box component="span" sx={{ color: colors.black }}>
                it!
              </Box>
              <br />
              <Box component="span" sx={{ color: colors.primary }}>
                Via
              </Box>{" "}
              <Box component="span" sx={{ color: colors.black }}>
                the new way
              </Box>
            </Typography>

            <Typography
              sx={{
                color: colors.textMuted,
                maxWidth: 510,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Cara baru kirim undangan, <b>no more boring invite!</b>
              <br />
              Ekspresikan gayamu lewat undangan digital yang{" "}
              <i>fresh, modern</i>, dan <i>anti-mainstream</i>.
              <br />
              Semua dalam satu tautan, tanpa ribet.
            </Typography>

            <Button
              sx={{
                width: "fit-content",
                px: 4,
                py: 1.4,
                borderRadius: 999,
                fontWeight: 700,
                textTransform: "none",
                backgroundColor: colors.primary,
                color: colors.white,
                boxShadow: "0 10px 25px rgba(249,115,22,0.3)",
                "&:hover": {
                  backgroundColor: colors.buttonHover,
                },
              }}
            >
              Pesan Sekarang!
            </Button>
          </Stack>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Box
              component="img"
              src="/assets/images/hero-phone.png"
              alt="Preview Undangan Digital"
              sx={{
                width: "100%",
                maxWidth: 420,
                transform: "translateY(20px)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
