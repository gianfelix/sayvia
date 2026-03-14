import { useState } from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { useSayviaTheme } from "../theme/SayviaThemeProvider";
import { size, weight, font } from "../theme/sayviaTheme";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  const { colors } = useSayviaTheme();

  const [animateIcons, setAnimateIcons] = useState(true);

  const slides = [
    "/assets/images/1.webp",
    "/assets/images/2.webp",
    "/assets/images/3.webp",
  ];

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
              opacity: "5%",
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
                ml: { xs: 0, sm: 6, md: -2, lg: -6 },
                textAlign: { xs: "left", md: "left" },
                alignItems: { xs: "left", md: "flex-start" },
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
              }}
            >
              {/* ✅ Satu container untuk HP + screen — semua % mengacu ke sini */}
              <Box
                sx={{
                  position: "relative",
                  width: { md: 320, lg: 420 },
                  transform: "translateY(-20px)",
                }}
              >
                {/* Gambar HP di atas, pointer-events none agar tidak block swiper */}
                <Box
                  component="img"
                  src="/assets/images/Mockup_HP.webp"
                  alt="HP Mockup"
                  sx={{
                    width: "100%",
                    display: "block",
                    pointerEvents: "none",
                    userSelect: "none",
                    position: "relative",
                    zIndex: 2,
                  }}
                />

                {/* ✅ Screen area — % selalu proporsional terhadap gambar HP */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "5%",
                    left: "1%",
                    width: "85%",
                    height: "90%",
                    borderRadius: { md: 5, lg: 10 },
                    overflow: "hidden",
                    zIndex: 1,
                    transform: {
                      md: "perspective(2000px) rotateY(-37deg) rotateX(0deg)",
                      lg: "perspective(3000px) rotateY(-35deg) rotateX(0deg)",
                    },
                  }}
                >
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onSlideChange={(Swiper) => {
                      if (Swiper.activeIndex === 0) {
                        setAnimateIcons(false);

                        setTimeout(() => {
                          setAnimateIcons(true);
                        }, 50);
                      }
                    }}
                    style={{ width: "100%", height: "100%" }}
                  >
                    {slides.map((src, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={src}
                          alt={`Slide ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "fill",
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>

                {/* ICON TYPOGRAPHY */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -10,
                    left: -50,
                    zIndex: 15,

                    clipPath: "inset(100% 0 0 0)",
                    animation: animateIcons
                      ? "wipeUp 0.5s ease-out 0.5s forwards"
                      : "none",

                    "@keyframes wipeUp": {
                      "0%": {
                        clipPath: "inset(100% 0 0 0)",
                      },
                      "100%": {
                        clipPath: "inset(0 0 0 0)",
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/assets/icons/Hero_Icon1.webp"
                    sx={{
                      width: "110px",
                      display: "block",
                    }}
                  />
                </Box>

                {/* ICON FITUR */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 250,
                    left: -50,
                    zIndex: 0,

                    opacity: 0,
                    animation: animateIcons
                      ? "slideLeft 0.5s ease-out 0.5s forwards"
                      : "none",

                    "@keyframes slideLeft": {
                      "0%": {
                        transform: "translateX(60px)",
                        opacity: 0,
                      },
                      "100%": {
                        transform: "translateX(0px)",
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/assets/icons/Hero_Icon2.webp"
                    sx={{
                      width: "90px",
                      display: "block",
                    }}
                  />
                </Box>

                {/* ICON MUSIC */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 100,
                    left: 330,
                    zIndex: 15,

                    clipPath: "inset(0 100% 0 0)",
                    animation: animateIcons
                      ? "wipeRight 0.5s ease-out 0.5s forwards"
                      : "none",

                    "@keyframes wipeRight": {
                      "0%": {
                        clipPath: "inset(0 100% 0 0)",
                      },
                      "100%": {
                        clipPath: "inset(0 0 0 0)",
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/assets/icons/Hero_Icon3.webp"
                    sx={{
                      width: "220px",
                      display: "block",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default HeroSection;
