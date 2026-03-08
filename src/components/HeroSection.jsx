import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { useSayviaTheme } from "../theme/SayviaThemeProvider";
import { size, weight, font } from "../theme/sayviaTheme";

const HeroSection = () => {
  const { colors } = useSayviaTheme();

  return (
    <section id="homepage">
      <Box
        sx={{
          minHeight: { xs: "100svh", sm: "94vh" },
          display: "flex",
          alignItems: "center",
          backgroundColor: colors.backgroundPastel,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background logo — responsive size & positioning */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width:  { xs: 180, sm: 280, md: 370, lg: 470 },
            height: { xs: 180, sm: 280, md: 370, lg: 430 },
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <Box
            component="img"
            src="/assets/images/Logo_Sect_One.webp"
            alt=""
            aria-hidden="true"
            sx={{
              width:   { xs: 200, sm: 300, md: 400, lg: 500 },
              height:  { xs: 200, sm: 300, md: 400, lg: 500 },
              maxWidth: "none",
              maxHeight: "none",
              opacity: "15%",
              position: "relative",
              bottom: 0,
              right: 0,
            }}
          />
        </Box>

        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              alignItems: "center",
              gap: { xs: 4, sm: 6, md: 8, lg: 10 },
              py: { xs: 8, sm: 6, md: 0 },
            }}
          >
            {/* ── LEFT ── */}
            <Stack
              spacing={{ xs: 4, sm: 5, md: 6, lg: 8 }}
              sx={{
                ml: { xs: 0, sm: 0, md: -6, lg: -14 },
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              {/* Heading */}
              <Typography
                sx={{
                  fontWeight: weight.bold,
                  fontSize: {
                    xs: size.h1 ?? "2rem",
                    sm: "2.5rem",
                    md: size.h0 ?? "3.5rem",
                    lg: size.h0,
                  },
                  lineHeight: 1.4,
                  fontFamily: font.primary,
                }}
              >
                <Box component="span" sx={{ color: colors.secondary }}>
                  Say
                </Box>{" "}
                <Box component="span" sx={{ color: colors.black, fontStyle: "italic" }}>
                  it!
                </Box>
                <br />
                <Box component="span" sx={{ color: colors.primary }}>
                  Via
                </Box>{" "}
                <Box component="span" sx={{ color: colors.black, fontStyle: "italic" }}>
                  the new way
                </Box>
              </Typography>

              {/* Body copy */}
              <Typography
                sx={{
                  color: colors.textCalm,
                  maxWidth: { xs: "100%", sm: 480, md: 520, lg: 600 },
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: weight.medium,
                  fontSize: {
                    xs: "0.95rem",
                    sm: size.h3 ?? "1rem",
                    md: size.h2 ?? "1.125rem",
                  },
                  lineHeight: 1.8,
                  // on mobile collapse the manual <br /> tags visually
                  "& br": { display: { xs: "none", sm: "block" } },
                }}
              >
                Cara baru kirim undangan,{" "}
                <b>
                  <i>no more boring invite!{" "}</i>
                </b>
                <br />
                Ekspresikan gayamu lewat undangan digital yang {" "}
                <br />
                <i>fresh, modern</i>, dan <i>anti-mainstream</i>. {" "}
                <br />
                Semua dalam satu tautan, tanpa ribet
              </Typography>

              {/* CTA Button */}
              <Button
                sx={{
                  width: "fit-content",
                  px: { xs: 3, md: 2 },
                  py: { xs: 1.2, md: 1 },
                  borderRadius: "7px",
                  backgroundColor: colors.primary,
                  color: colors.white,
                  fontSize: {
                    xs: "0.9rem",
                    md: size.h3,
                  },
                  fontWeight: weight.semiBold,
                  textTransform: "none",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  willChange: "transform",
                  "&:hover": {
                    backgroundColor: colors.buttonHover,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Pesan Sekarang!
              </Button>
            </Stack>

            {/* ── RIGHT IMAGE ── */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                mr: { md: 4, lg: 14 },
              }}
            >
              <Box
                component="img"
                src="/assets/images/Logo_Sect_One.png"
                alt="Preview Undangan Digital"
                sx={{
                  width: "100%",
                  maxWidth: { md: 320, lg: 420 },
                  transform: "translateY(20px)",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default HeroSection;