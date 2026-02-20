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
  primary: "#F97316",
  secondary: "#2DD4BF",
  dark: "#292121",
};

const packages = [
  {
    name: "Basic Bae",
    desc: "Simpel tapi tetep kece. Paket hemat dengan fitur utama yang cukup buat acara kamu.",
    discount: "52%",
    original: 110000,
    price: 53000,
    standard: [
      <>Masa aktif sampai <b>max. 14 hari</b></>,
      <>Desain <b><i>Basic Bae</i></b></>,
      <><b>FREE max. 1x</b> revisi</>,
      <><b>FREE <i>reschedule</i></b> (selama kuota revisi masih ada)</>,
      <>Penyesuaian teks Bahasa</>,
    ],
    special: [
      { text: <><i>Love Story</i></>, yes: true },
      { text: <>Kirim Ucapan & Doa</>, yes: true },
      { text: <>Peta Lokasi (<i>Google Maps</i>)</>, yes: true },
      { text: <><i>Background Music</i> <b>LIST</b></>, yes: true },
      { text: <>Foto <b>max. 3</b></>, yes: true },
      { text: <>Video</>, yes: false },
      { text: <>Hitung Mundur (<i>Countdown Timer</i>)</>, yes: false },
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
      <>Masa aktif sampai <b>max. 14 hari</b></>,
      <>Desain <b><i>Glow-Up</i></b></>,
      <><b>FREE max. 3x</b> revisi</>,
      <><b>FREE <i>reschedule</i></b> (selama kuota revisi masih ada)</>,
      <>Penyesuaian teks Bahasa</>,
    ],
    special: [
      { text: <><i>Love Story</i></>, yes: true },
      { text: <>Kirim Ucapan & Doa</>, yes: true },
      { text: <>Peta Lokasi (<i>Google Maps</i>)</>, yes: true },
      { text: <><i>Background Music</i> <b>REQUEST</b></>, yes: true },
      { text: <>Foto <b>max. 6</b></>, yes: true },
      { text: <>Video <b>max. 1</b></>, yes: false },
      { text: <>Hitung Mundur (<i>Countdown Timer</i>)</>, yes: false },
      { text: <>Konfirmasi Kehadiran (RSVP)</>, yes: false },
      { text: <>Angpao Digital</>, yes: false },
      { text: <>Tambah ke Pengingat/Kalender</>, yes: false },
      { text: <><b>FREE max. 100</b> Nama Tamu</>, yes: false },
      { text: <><b>FREE</b> URL Khusus</>, yes: false },
      { text: <>Galeri Foto (opsional) <b>max. 5</b></>, yes: false },
    ],
  },
  {
    name: "All Out!",
    desc: "Totalitas tanpa batas!! Lebih eksklusif dan variative untuk full experience yang memukau.",
    discount: "34%",
    original: 232000,
    price: 153000,
    standard: [
      <>Masa aktif sampai <b>max. 14 hari</b></>,
      <>Desain <b><i>All Out!</i></b></>,
      <><b>FREE max. 5x</b> revisi</>,
      <><b>FREE <i>reschedule</i></b> (selama kuota revisi masih ada)</>,
      <>Penyesuaian teks Bahasa</>,
    ],
    special: [
      { text: <><i>Love Story</i></>, yes: true },
      { text: <>Kirim Ucapan & Doa</>, yes: true },
      { text: <>Peta Lokasi (<i>Google Maps</i>)</>, yes: true },
      { text: <><i>Background Music</i> <b>REQUEST</b></>, yes: true },
      { text: <>Foto <b>max. 10</b></>, yes: true },
      { text: <>Video <b>max. 1</b></>, yes: false },
      { text: <>Hitung Mundur (<i>Countdown Timer</i>)</>, yes: false },
      { text: <>Konfirmasi Kehadiran (RSVP)</>, yes: false },
      { text: <>Angpao Digital</>, yes: false },
      { text: <>Tambah ke Pengingat/Kalender</>, yes: false },
      { text: <><b>FREE max. 100</b> Nama Tamu</>, yes: false },
      { text: <><b>FREE</b> URL Khusus</>, yes: false },
      { text: <>Galeri Foto (opsional) <b>max. 5</b></>, yes: false },
    ],
  },
];

export default function PackagesSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <Box sx={{ py: 10, px: 4, background: "#fff" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
          gap: 4,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {packages.map((pkg, index) => (
          <Card key={index} sx={{ borderRadius: 5, p: 3 }}>
            <CardContent>
              <Typography fontSize={20} fontWeight={800} color={colors.secondary}>
                {pkg.name}
              </Typography>

              <Typography fontSize={14} mt={1} mb={2}>
                {pkg.desc}
              </Typography>

              <Typography fontSize={12} color="error">
                Diskon {pkg.discount}{" "}
                <span style={{ textDecoration: "line-through", color: "#888" }}>
                  Rp{pkg.original.toLocaleString("id-ID")}
                </span>
              </Typography>

              <Typography fontSize={26} fontWeight={900} mb={2}>
                Rp{pkg.price.toLocaleString("id-ID")}
              </Typography>

              <Button
                fullWidth
                sx={{
                  mb: 3,
                  bgcolor: colors.primary,
                  color: "#fff",
                  borderRadius: 999,
                  "&:hover": { bgcolor: "#ea580c" },
                }}
              >
                Pesan Sekarang!
              </Button>

              <Divider sx={{ mb: 2 }} />

              <Typography fontWeight={700} fontSize={13} mb={1}>
                FITUR STANDAR
              </Typography>

              <Stack spacing={1} mb={2}>
                {pkg.standard.map((item, i) => (
                  <Box key={i} display="flex" alignItems="flex-start" gap={1}>
                    <img src="assets/icons/Yes.webp" width={16} alt="yes" />
                    <Typography fontSize={13}>{item}</Typography>
                  </Box>
                ))}
              </Stack>

              <Typography
                onClick={() =>
                  setExpanded(expanded === index ? null : index)
                }
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: colors.primary,
                  cursor: "pointer",
                  mb: 1,
                }}
              >
                {expanded === index
                  ? "Lihat Lebih Sedikit ▲"
                  : "Lihat Lebih Banyak ▼"}
              </Typography>

              <Collapse in={expanded === index}>
                <Typography fontWeight={700} fontSize={13} mb={1}>
                  FITUR KHUSUS
                </Typography>

                <Stack spacing={1}>
                  {pkg.special.map((item, i) => (
                    <Box key={i} display="flex" alignItems="flex-start" gap={1}>
                      <img
                        src={item.yes ? "assets/icons/Yes.webp" : "assets/icons/No.webp"}
                        width={16}
                        alt="icon"
                      />
                      <Typography fontSize={13}>{item.text}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Collapse>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}