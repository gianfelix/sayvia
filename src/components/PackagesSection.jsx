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

const colors = {
  orange: "#F97316",
  green: "#14B8A6",
  darkGreen: "#0F766E",
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
        Masa aktif sampai <b>max. 14 hari</b>
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
        <b>
          FREE <i>reschedule</i>
        </b>{" "}
        (selama kuota revisi masih ada)
      </>,
      <>Penyesuaian teks Bahasa</>,
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
    desc: "Makin estetik dan interaktif. Fitur lebih lengkap dan tampilan makin standout!",
    discount: "42%",
    original: 154000,
    price: 89000,
    standard: [
      <>
        Masa aktif sampai <b>max. 14 hari</b>
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
        <b>
          FREE <i>reschedule</i>
        </b>{" "}
        (selama kuota revisi masih ada)
      </>,
      <>Penyesuaian teks Bahasa</>,
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
        yes: false,
      },
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
      {
        text: (
          <>
            <b>FREE max. 100</b> Nama Tamu
          </>
        ),
        yes: false,
      },
      {
        text: (
          <>
            <b>FREE</b> URL Khusus
          </>
        ),
        yes: false,
      },
      {
        text: (
          <>
            Galeri Foto (opsional) <b>max. 5</b>
          </>
        ),
        yes: false,
      },
    ],
  },
  {
    name: "All Out!",
    desc: "Totalitas tanpa batas!! Lebih eksklusif dan variative untuk full experience yang memukau.",
    discount: "34%",
    original: 232000,
    price: 153000,
    standard: [
      <>
        Masa aktif sampai <b>max. 14 hari</b>
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
        <b>
          FREE <i>reschedule</i>
        </b>{" "}
        (selama kuota revisi masih ada)
      </>,
      <>Penyesuaian teks Bahasa</>,
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
        yes: false,
      },
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
      {
        text: (
          <>
            <b>FREE max. 100</b> Nama Tamu
          </>
        ),
        yes: false,
      },
      {
        text: (
          <>
            <b>FREE</b> URL Khusus
          </>
        ),
        yes: false,
      },
      {
        text: (
          <>
            Galeri Foto (opsional) <b>max. 5</b>
          </>
        ),
        yes: false,
      },
    ],
  },
];

export default function PackagesSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <Box sx={{ py: 10, px: 3, background: "#ffffff" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
          gap: 4,
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        {packages.map((pkg, index) => {
          const isHighlight = pkg.name === "Glow-Up";

          return (
            <Card
              key={index}
              sx={{
                borderRadius: 6,
                p: 3,
                textAlign: "center",
                background: isHighlight
                  ? `linear-gradient(180deg, #14B8A6 0%, rgba(255, 255, 255) 90%)`
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
                  fontSize={35}
                  fontWeight={900}
                  mb={2}
                  sx={{
                    textAlign: "center",
                    color: isHighlight ? "#fff" : "#14B8A6",
                  }}
                >
                  {pkg.name}
                </Typography>

                {/* Description */}
                <Typography
                  fontSize={14}
                  mb={4}
                  sx={{
                    textAlign: "left",
                    color: isHighlight ? "rgba(255, 255, 255)" : "#000",
                    marginBottom: isHighlight ? 3 : "auto",
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
                    fontSize={13}
                    sx={{
                      color: colors.orange,
                      background: "rgba(255, 255, 255)",
                      textAlign: "left",
                      display: "inline-block",
                      px: 1,
                      py: 0.3,
                      borderRadius: 2,
                      fontWeight: 600,
                    }}
                  >
                    Diskon {pkg.discount}{" "}
                  </Typography>
                  <span
                    style={{
                      textDecoration: "line-through",
                      opacity: 0.7,
                      fontSize: 13,
                      marginLeft: 8,
                      color: isHighlight ? "rgba(255, 255, 255)" : "#8e8e8f",
                    }}
                  >
                    Rp{pkg.original.toLocaleString("id-ID")}
                  </span>
                </Box>

                {/* Price */}
                <Typography
                  fontSize={36}
                  fontWeight={900}
                  mb={3}
                  mt={1}
                  sx={{
                    textAlign: "left",
                    color: isHighlight ? "#fff" : "#14B8A6",
                  }}
                >
                  Rp{pkg.price.toLocaleString("id-ID")}
                </Typography>

                {/* Button */}
                <Button
                  fullWidth
                  sx={{
                    mb: 4,
                    bgcolor: isHighlight ? colors.orange : colors.green,
                    color: "#fff",
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: 18,
                    py: 1.2,
                    "&:hover": {
                      bgcolor: isHighlight ? "#ea580c" : colors.darkGreen,
                    },
                  }}
                >
                  Pesan Sekarang!
                </Button>

                {/* FITUR STANDAR */}
                <Typography
                  fontWeight={800}
                  fontSize={13}
                  mb={2}
                  textAlign="left"
                >
                  FITUR STANDAR
                </Typography>

                <Stack spacing={1.2} mb={2}>
                  {pkg.standard.map((item, i) => (
                    <Box key={i} display="flex" alignItems="flex-start" gap={1}>
                      <img src="assets/icons/Yes.webp" width={16} alt="yes" />
                      <Typography fontSize={13} textAlign="left">
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                {/* FITUR KHUSUS */}
                <Collapse in={expanded === index}>
                  <Typography
                    fontWeight={800}
                    fontSize={13}
                    mb={2}
                    textAlign="left"
                  >
                    FITUR KHUSUS
                  </Typography>

                  <Stack spacing={1.2} mb={2}>
                    {pkg.special.map((item, i) => (
                      <Box
                        key={i}
                        display="flex"
                        alignItems="flex-start"
                        gap={1}
                      >
                        <img
                          src={
                            item.yes
                              ? "assets/icons/Yes.webp"
                              : "assets/icons/No.webp"
                          }
                          width={16}
                          alt="icon"
                        />
                        <Typography fontSize={13} textAlign="left">
                          {item.text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Collapse>
                {/* Toggle */}
                <Typography
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  sx={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#9c9c9c",
                    cursor: "pointer",
                    mb: 0,
                  }}
                >
                  {expanded === index
                    ? "Lihat Lebih Sedikit ▲"
                    : "Lihat Lebih Banyak ▼"}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
