import { Box, Typography, Button, Stack, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F3FBF8",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            alignItems: "center",
            gap: { xs: 6, md: 10 },
          }}
        >
          {/* LEFT CONTENT */}
          <Stack spacing={3}>
            {/* TITLE */}
            <Typography variant="h2" fontWeight={900} lineHeight={1.1}>
              <Box component="span" color="#2DD4BF">
                Say
              </Box>{" "}
              <Box component="span" color="#111827">
                it!
              </Box>
              <br />
              <Box component="span" color="#F97316">
                Via
              </Box>{" "}
              <Box component="span" color="#111827">
                the new way
              </Box>
            </Typography>

            {/* DESCRIPTION */}
            <Typography color="text.secondary" maxWidth={520}>
              Cara baru kirim undangan, <b>no more boring invite!</b>
              <br />
              Ekspresikan gayamu lewat undangan digital yang{" "}
              <i>fresh, modern</i>, dan <i>anti-mainstream</i>.
              <br />
              Semua dalam satu tautan, tanpa ribet.
            </Typography>

            {/* CTA */}
            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                px: 4,
                py: 1.4,
                borderRadius: 999,
                fontWeight: 700,
                bgcolor: "#F97316",
                boxShadow: "0 10px 25px rgba(249,115,22,0.35)",
                "&:hover": { bgcolor: "#EA580C" },
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
