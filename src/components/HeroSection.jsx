import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { useSayviaTheme } from "../theme/SayviaThemeProvider";
import { size, weight, font } from "../theme/sayviaTheme";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        {/* Background logo */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: { xs: 180, sm: 280, md: 370, lg: 470 },
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
              width: { xs: 200, sm: 300, md: 400, lg: 500 },
              height: { xs: 200, sm: 300, md: 400, lg: 500 },
              opacity: "15%",
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
            {/* LEFT */}
            <Stack
              spacing={{ xs: 4, sm: 5, md: 6, lg: 8 }}
              sx={{
                ml: { xs: 0, sm: 0, md: -6, lg: -14 },
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
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
                <Box
                  component="span"
                  sx={{ color: colors.black, fontStyle: "italic" }}
                >
                  it!
                </Box>
                <br />
                <Box component="span" sx={{ color: colors.primary }}>
                  Via
                </Box>{" "}
                <Box
                  component="span"
                  sx={{ color: colors.black, fontStyle: "italic" }}
                >
                  the new way
                </Box>
              </Typography>

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
                  "& br": { display: { xs: "none", sm: "block" } },
                }}
              >
                Cara baru kirim undangan,{" "}
                <b>
                  <i>no more boring invite! </i>
                </b>
                <br />
                Ekspresikan gayamu lewat undangan digital yang <br />
                <i>fresh, modern</i>, dan <i>anti-mainstream</i>. <br />
                Semua dalam satu tautan, tanpa ribet
              </Typography>

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
                  transition: "transform 0.3s ease",
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
                justifyContent: "flex-end",
                mr: { md: 4, lg: 14 },
                position: "relative",
              }}
            >
              {/* Mockup HP */}
              <Box
                component="img"
                src="/assets/images/Mockup_HP.png"
                alt="HP Mockup"
                sx={{
                  width: "100%",
                  maxWidth: { md: 320, lg: 420 },
                  transform: "translateY(20px)",
                  pointerEvents: "none",
                  userSelect: "none",
                  zIndex: 1,
                }}
              />

              {/* SCREEN AREA */}
              <Box
                sx={{
                  position: "absolute",
                  top:  {md: "8%", lg: "7%" },
                  left: { md: "9%", lg: "23%" },
                  width: { md: "80%", lg: "70%" },
                  height: { md: "89%", lg: "89%" },
                  borderRadius: { md: 5, lg: 10 },
                  // transformOrigin: "center center",
                  transform: {
                    md: "perspective(2000px) rotateY(-37deg) rotateX(0deg)" ,
                    lg: "perspective(2500px) rotateY(-35deg) rotateX(0deg)",
                  },

                  overflow: "hidden",
                }}
              >
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <SwiperSlide>
                    <img
                      src="/assets/images/1.png"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src="/assets/images/2.png"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src="/assets/images/3.png"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                    />
                  </SwiperSlide>
                </Swiper>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default HeroSection;
