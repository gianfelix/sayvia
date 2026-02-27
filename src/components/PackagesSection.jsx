import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Collapse,
  Divider,
} from "@mui/material";
import sayviaTheme, { size, weight } from "../theme/sayviaTheme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const colors = {
  orange: "#eb862c",
  green: "#068f7f",
  darkGreen: "#056156",
};

const packages = [
  {
    name: "Basic Bae",
    desc: "Simpel tapi tetep kece. Paket hemat dengan fitur utama yang cukup buat acara kamu.",
    discount: "52%",
    original: 110000,
    price: 53000,
    standard: [
      <>
        Masa aktif sampai <b>max. 14 hari</b> setelah acara
      </>,
      <>
        Desain{" "}
        <b>
          <i>Basic Bae</i>
        </b>
      </>,
      <>
        <b>FREE max. 1x</b> revisi
      </>,
      <>
        <b>FREE</b> <i>reschedule</i>
        {" "}
        (selama kuota revisi masih ada)
      </>,
      <>Penyesuaian teks/bahasa</>,
    ],
    special: [
      {
        text: (
          <>
            <i>Love Story</i>
          </>
        ),
        yes: true,
      },
      { text: <>Kirim Ucapan & Doa</>, yes: true },
      {
        text: (
          <>
            Peta Lokasi (<i>Google Maps</i>)
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            <i>Background Music</i> <b>LIST</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Foto <b>max. 3</b>
          </>
        ),
        yes: true,
      },
      { text: <>Video</>, yes: false },
      {
        text: (
          <>
            Hitung Mundur (<i>Countdown Timer</i>)
          </>
        ),
        yes: false,
      },
      { text: <>Konfirmasi Kehadiran (RSVP)</>, yes: false },
      { text: <>Angpao Digital</>, yes: false },
      { text: <>Tambah ke Pengingat/Kalender</>, yes: false },
      { text: <>Nama Tamu</>, yes: false },
      { text: <>URL Khusus</>, yes: false },
      { text: <>Galeri Foto (opsional)</>, yes: false },
    ],
  },
  {
    name: "Glow-Up",
    desc: (
      <>Makin estetik dan interaktif. Fitur lebih lengkap dan tampilan makin <i>standout!</i></>),
    discount: "42%",
    original: 154000,
    price: 89000,
    standard: [
      <>
        Masa aktif sampai <b>max. 14 hari</b> setelah acara
      </>,
      <>
        Desain{" "}
        <b>
          <i>Glow-Up</i>
        </b>
      </>,
      <>
        <b>FREE max. 3x</b> revisi
      </>,
      <>
        <b>FREE</b> <i>reschedule</i>
        {" "}
        (selama kuota revisi masih ada)
      </>,
      <>Penyesuaian teks/bahasa</>,
    ],
    special: [
      {
        text: (
          <>
            <i>Love Story</i>
          </>
        ),
        yes: true,
      },
      { text: <>Kirim Ucapan & Doa</>, yes: true },
      {
        text: (
          <>
            Peta Lokasi (<i>Google Maps</i>)
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            <i>Background Music</i> <b>REQUEST</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Foto <b>max. 6</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Video <b>max. 1</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Hitung Mundur (<i>Countdown Timer</i>)
          </>
        ),
        yes: true,
      },
      { text: <>Konfirmasi Kehadiran (RSVP)</>, yes: true },
      { text: <>Angpao Digital</>, yes: true },
      { text: <>Tambah ke Pengingat/Kalender</>, yes: true },
      {
        text: (
          <>
            <b>FREE max. 100</b> Nama Tamu
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            <b>FREE</b> URL Khusus
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Galeri Foto (opsional) <b>max. 5</b>
          </>
        ),
        yes: true,
      },
    ],
  },
  {
    name: "All Out!",
    desc: (
      <>Totalitas tanpa batas!! Lebih eksklusif dan variatif untuk <i>full experience</i> yang memukau.</>),
    discount: "34%",
    original: 232000,
    price: 153000,
    standard: [
      <>
        Masa aktif sampai <b>max. 14 hari</b> setelah acara
      </>,
      <>
        Desain{" "}
        <b>
          <i>All Out!</i>
        </b>
      </>,
      <>
        <b>FREE max. 5x</b> revisi
      </>,
      <>
        <b>FREE</b> <i>reschedule</i>
        {" "}
        (selama kuota revisi masih ada)
      </>,
      <>Penyesuaian teks/bahasa</>,
    ],
    special: [
      {
        text: (
          <>
            <i>Love Story</i>
          </>
        ),
        yes: true,
      },
      { text: <>Kirim Ucapan & Doa</>, yes: true },
      {
        text: (
          <>
            Peta Lokasi (<i>Google Maps</i>)
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            <i>Background Music</i> <b>REQUEST</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Foto <b>max. 10</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Video <b>max. 1</b>
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Hitung Mundur (<i>Countdown Timer</i>)
          </>
        ),
        yes: true,
      },
      { text: <>Konfirmasi Kehadiran (RSVP)</>, yes: true },
      { text: <>Angpao Digital</>, yes: true },
      { text: <>Tambah ke Pengingat/Kalender</>, yes: true },
      {
        text: (
          <>
            <b>FREE max. 100</b> Nama Tamu
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            <b>FREE</b> URL Khusus
          </>
        ),
        yes: true,
      },
      {
        text: (
          <>
            Galeri Foto (opsional) <b>max. 5</b>
          </>
        ),
        yes: true,
      },
    ],
  },
];

export default function PackagesSection() {
  const [expanded, setExpanded] = useState({});

  return (
    <Box 
      sx={{ 
        py: 10, 
        px: 3, 
        background: sayviaTheme.colors.backgroundLight }}>
    
    {/* TITLE */}
      <Typography
        textAlign="center"
        sx={{
          fontSize: size.h0,
          fontWeight: weight.bold,
          color: sayviaTheme.colors.secondary,
          mt: 1,
        }}
      >
        Pilih Paket Terbaik untuk Hari Spesialmu!
      </Typography>

      <Typography 
      textAlign="center" 
      fontSize={size.h2} 
      fontWeight={weight.regular}
      mt={1.5}>
        Sayvia siap bantu bikin undangan digital kamu makin kece tanpa bikin dompet kaget
      </Typography>

      <Typography 
      textAlign="center" 
      fontSize={size.h2} 
      fontWeight={weight.regular}
      mb={12}>
        Pilih paket yang paling cocok untuk hari spesialmu!
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
          gap: 4,
          maxWidth: 1100,
          mx: "auto",
          alignItems: "start"
        }}
      >
        {packages.map((pkg, index) => {
          const isHighlight = pkg.name === "Glow-Up";

          return (
            <Card
              key={index}
              sx={{
                borderRadius: 6,
                p: 2,
                textAlign: "center",
                background: isHighlight
                  ? `linear-gradient(180deg, #2ac1b0 0px, #2ac1b0 400px, rgba(42,193,176,0.6) 450px, rgba(42,193,176,0.2) 500px, transparent 550px) top / 100% 550px no-repeat,
                   #ffffff`
                  : "#fff",
                color: "#000",

                boxShadow: isHighlight
                  ? "0 10px 25px rgba(0,0,0,0.20)"
                  : "0 10px 25px rgba(0,0,0,0.20)",
              }}
            >
              <CardContent>
                {/* Title */}
                <Typography
                  fontSize={size.h1}
                  fontWeight={weight.bold}
                  mt={2}
                  mb={4}
                  sx={{
                    textAlign: "center",
                    color: isHighlight ? "#ffffff" : sayviaTheme.colors.secondary,
                  }}
                >
                  {pkg.name}
                </Typography>

                {/* Description */}
                <Typography
                  fontSize={size.h3}
                  fontWeight={weight.semiBold}
                  sx={{
                    textAlign: "left",
                    color: isHighlight ? "#ffffff" : sayviaTheme.colors.black,
                    mb: 4,
                    minHeight: 72,
                  }}
                >
                  {pkg.desc}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    mt: isHighlight ? 4 : 1,
                  }}
                >
                  {/* Discount */}
                  <Typography
                    fontSize={size.h3}
                    fontWeight={weight.semiBold}
                    sx={{
                      color: colors.orange,
                      background: isHighlight ? "#ffffff" : "#f7f7f7",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: 1,
                      px: "12px",
                      py: "8px",
                      borderRadius: 1,
                    }}
                  >
                    Diskon {pkg.discount}{" "}
                  </Typography>
                  <Box
                    component="span"
                    sx={{
                      position: "relative",
                      fontSize: size.h3,
                      marginLeft: 2,
                      color: isHighlight ? "#ffffff" : sayviaTheme.colors.textMuted,
                      display: "inline-block",

                      "&::after":{
                        content:'""',
                        position: "absolute",
                        left: -2.5,
                        right: -2.5,
                        top: "50%",
                        height: "1.9px",
                        backgroundColor: isHighlight ? "#ffffff" : sayviaTheme.colors.textMuted,
                      },
                    }}
                  >
                    Rp{pkg.original.toLocaleString("id-ID")}
                  </Box>
                </Box>

                {/* Price */}
                <Typography
                  fontSize={size.h1}
                  fontWeight={weight.bold}
                  mb={4}
                  mt={0}
                  sx={{
                    textAlign: "left",
                    color: isHighlight ? "#ffff" : "#07a693",
                  }}
                >
                  Rp{pkg.price.toLocaleString("id-ID")}
                </Typography>

                {/* Button */}
                <Button
                  fullWidth
                  sx={{
                    mb: 6,
                    bgcolor: isHighlight ? sayviaTheme.colors.primary : colors.green,
                    color: "#fff",
                    borderRadius: 3,
                    fontSize: size.h2,
                    fontWeight: weight.semiBold,
                    textTransform: "none",
                    transition: "transform 0.3s ease, background-color 0.3s ease",
                    willChange: "transform",
                    //py: 1.2,

                    "&:hover": {
                      bgcolor: isHighlight ? sayviaTheme.colors.buttonHover : colors.darkGreen,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Pesan Sekarang!
                </Button>

                {/* FITUR STANDAR */}
                <Typography
                  fontWeight={weight.semiBold}
                  fontSize={size.h3}
                  mb={2}
                  textAlign="left"
                >
                  FITUR STANDAR
                </Typography>

                <Stack spacing={1.5} mb={6}>
                  {pkg.standard.map((item, i) => (
                    <Box key={i} display="flex" alignItems="flex-start" gap={1}>
                      <Box
                        component="img"
                        src="assets/icons/Yes.webp"
                        alt="yes"
                        sx={{
                          width: 16,
                          height: 15.5,
                          mt: "2.5px",
                        }} 
                        />
                      <Typography 
                        fontSize={size.h3} 
                        fontWeight={weight.regular}
                        textAlign="left"
                        sx={{
                          lineHeight: 1.5,
                        }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                {/* FITUR KHUSUS */}
                <Collapse in={expanded[index] || false}>
                  <Typography
                    fontWeight={weight.semiBold}
                    fontSize={size.h3}
                    mb={2}
                    textAlign="left"
                  >
                    FITUR KHUSUS
                  </Typography>

                  <Stack spacing={1.5} mb={6}>
                    {pkg.special.map((item, i) => (
                      <Box
                        key={i}
                        display="flex"
                        alignItems="flex-start"
                        gap={1}
                      >
                        <Box
                          component="img"
                          src={
                            item.yes
                              ? "assets/icons/Yes.webp"
                              : "assets/icons/No.webp"
                          }
                          alt="icon"
                          sx={{
                            width: 16,
                            height: 15.5,
                            mt: "2.5px",
                          }}
                        />
                        <Typography 
                          fontSize={size.h3} 
                          fontWeight={weight.regular} 
                          textAlign="left"
                          sx={{
                            lineHeight: 1.5,
                            color: item.yes
                              ? (isHighlight ? sayviaTheme.colors.black : sayviaTheme.colors.black)
                              : (isHighlight ? sayviaTheme.colors.black : sayviaTheme.colors.textMuted)
                          }}>
                          {item.text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Collapse>
                {/* Toggle */}
                <Typography
                  onClick={() => 
                    setExpanded((prev) => ({
                      ...prev,
                      [index]: !prev[index],
                    }))
                  }
                  sx={{
                    fontSize: size.h3,
                    fontWeight: weight.semiBold,
                    color: "#b3b3b3",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.5,
                    userSelect: "none",
                    mb: 0,

                    "&:hover":{
                      transform: "translateY(-2px)",
                      transition: "transform 0.3s ease",
                    }
                  }}
                >
                  Lihat {expanded[index] ? "Lebih Sedikit" : "Selengkapnya"}

                  <ExpandMoreIcon
                    sx={{
                      fontSize: 30,
                      transition: "transform 0.3s ease",
                      transform: expanded[index]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                  
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
