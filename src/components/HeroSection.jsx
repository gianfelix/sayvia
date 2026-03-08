import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { useSayviaTheme } from "../theme/SayviaThemeProvider";
import { size, weight, font } from "../theme/sayviaTheme";

const HeroSection = () => {
  const { colors } = useSayviaTheme();

  return (
    <section id="homepage">
      <Box
        sx={{
          minHeight: "94vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: colors.backgroundPastel,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 470,
            height: 430,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <Box
            component="img"
            src="/assets/images/Logo_Sect_One.webp"
            alt="Logo Background"
            sx={{
              width: 500,
              height: 500,
              maxWidth: "none",
              maxHeight: "none",
              opacity: "15%",
              position: "relative",
              bottom: 0,
              right: 0,
            }}
          />
        </Box>

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
            <Stack spacing={8} ml={-14}>
              <Typography
                sx={{
                  fontWeight: weight.bold,
                  fontSize: size.h0,
                  lineHeight: 1.5,
                  fontFamily: font.primary,
                }}
              >
                <Box component="span" sx={{ color: colors.secondary }}>
                  Say
                </Box>{" "}
                <Box
                  component="span"
                  sx={{
                    color: colors.black,
                    fontStyle: "italic",
                  }}
                >
                  it!
                </Box>
                <br />
                <Box component="span" sx={{ color: colors.primary }}>
                  Via
                </Box>{" "}
                <Box
                  component="span"
                  sx={{
                    color: colors.black,
                    fontStyle: "italic",
                  }}
                >
                  the new way
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: colors.textCalm,
                  maxWidth: 600,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: weight.medium,
                  fontSize: size.h2,
                }}
              >
                Cara baru kirim undangan,{" "}
                <b>
                  <i>no more boring invite!</i>
                </b>
                <br />
                Ekspresikan gayamu lewat undangan digital yang
                <br />
                <i>fresh, modern</i>, dan <i>anti-mainstream</i>.
                <br />
                Semua dalam satu tautan, tanpa ribet
              </Typography>

              <Button
                sx={{
                  width: "fit-content",
                  px: 2,
                  borderRadius: "7px",
                  backgroundColor: colors.primary,
                  color: colors.white,
                  fontSize: size.h3,
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

            {/* RIGHT IMAGE */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                marginRight: 14,
                justifyContent: "flex-end",
              }}
            >
              <Box
                component="img"
                src="/assets/images/Logo_Sect_One.png"
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
    </section>
  );
};

export default HeroSection;
