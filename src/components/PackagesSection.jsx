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

const packageData = [
  {
    name: "Basic Bae",
    price: 53000,
    originalPrice: 56000,
    discount: "5%",
    features: [
      "Masa aktif sampai max. 14 hari",
      "Desain Basic Bae",
      "FREE max. 1x revisi",
      "FREE reschedule",
      "Penyesuaian teks bahasa",
    ],
    special: [
      "Link Custom",
      "Background Musik",
      "Google Maps",
      "Galeri Foto max. 3",
    ],
  },
  {
    name: "Glow-Up",
    price: 89000,
    originalPrice: 98000,
    discount: "47%",
    highlight: true,
    features: [
      "Masa aktif sampai max. 14 hari",
      "Desain Glow-Up",
      "FREE max. 3x revisi",
      "FREE reschedule",
      "Penyesuaian teks bahasa",
    ],
    special: [
      "Love Story",
      "Kirim Ucapan & Doa",
      "Google Maps",
      "Galeri Foto max. 6",
      "Countdown Timer",
    ],
  },
  {
    name: "All Out!",
    price: 153000,
    originalPrice: 158000,
    discount: "3%",
    features: [
      "Masa aktif sampai max. 14 hari",
      "Desain All Out!",
      "FREE max. 5x revisi",
      "FREE reschedule",
      "Penyesuaian teks bahasa",
    ],
    special: [
      "Semua fitur Glow-Up",
      "FREE URL Khusus",
      "RSVP Premium",
      "Galeri Foto max. 10",
      "Video max. 1",
    ],
  },
];

export default function PackagesSection() {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box
      sx={{
        py: 10,
        px: 4,
        textAlign: "center",
        background: "linear-gradient(180deg, #ffffff 0%, #f6fffd 15%)",
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          fontSize: "23px",
          fontWeight: 800,
          color: colors.secondary,
          mb: 1,
        }}
      >
        Pilih Paket Terbaik untuk Hari Spesialmu!
      </Typography>

      <Typography
        sx={{
          fontSize: "15px",
          color: "#6B7280",
          mb: 8,
          maxWidth: 650,
          mx: "auto",
        }}
      >
        Sayvia siap bantu bikin undangan digital kamu makin kece tanpa bikin
        dompet kaget. Pilih paket yang paling cocok untuk hari spesialmu!
      </Typography>

      {/* GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {packageData.map((p, i) => (
          <Card
            key={i}
            sx={{
              borderRadius: 5,
              overflow: "hidden",
              position: "relative",
              boxShadow: p.highlight
                ? "0 25px 50px rgba(0,0,0,0.15)"
                : "0 10px 30px rgba(0,0,0,0.08)",
              transform: p.highlight ? "scale(1.05)" : "none",
              border: p.highlight
                ? `2px solid ${colors.secondary}`
                : "1px solid #e5e7eb",
            }}
          >
            {/* HEADER */}
            <Box
              sx={{
                background: p.highlight ? colors.secondary : "#ffffff",
                color: p.highlight ? "#fff" : colors.secondary,
                py: 3,
                textAlign: "center",
              }}
            >
              <Typography fontSize="18px" fontWeight={800}>
                {p.name}
              </Typography>
            </Box>

            <CardContent sx={{ p: 4 }}>
              {/* PRICE */}
              <Box textAlign="center" mb={3}>
                <Typography
                  sx={{
                    fontSize: "10px",
                    textDecoration: "line-through",
                    color: "#9CA3AF",
                  }}
                >
                  Rp {p.originalPrice.toLocaleString("id-ID")}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: 900,
                    color: p.highlight ? colors.secondary : colors.dark,
                  }}
                >
                  Rp {p.price.toLocaleString("id-ID")}
                </Typography>
              </Box>

              <Divider sx={{ mb: 2 }} />

              {/* FITUR STANDAR */}
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  mb: 1,
                  textAlign: "left",
                }}
              >
                FITUR STANDAR
              </Typography>

              <Stack spacing={1} mb={2}>
                {p.features.map((f, idx) => (
                  <Typography
                    key={idx}
                    sx={{ fontSize: "12px", textAlign: "left" }}
                  >
                    ✔ {f}
                  </Typography>
                ))}
              </Stack>

              {/* EXPAND BUTTON */}
              <Typography
                onClick={() => handleToggle(i)}
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: colors.primary,
                  cursor: "pointer",
                  textAlign: "left",
                  mb: 1,
                }}
              >
                {expanded === i ? "Tutup Detail ▲" : "Lihat Detail ▼"}
              </Typography>

              {/* FITUR KHUSUS */}
              <Collapse in={expanded === i}>
                <Divider sx={{ my: 2 }} />

                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    mb: 1,
                    textAlign: "left",
                  }}
                >
                  FITUR KHUSUS
                </Typography>

                <Stack spacing={1} mb={2}>
                  {p.special.map((f, idx) => (
                    <Typography
                      key={idx}
                      sx={{ fontSize: "12px", textAlign: "left" }}
                    >
                      ✔ {f}
                    </Typography>
                  ))}
                </Stack>
              </Collapse>

              {/* CTA */}
              <Button
                fullWidth
                sx={{
                  mt: 2,
                  borderRadius: 999,
                  fontWeight: 700,
                  bgcolor: colors.primary,
                  color: "#fff",
                  "&:hover": { bgcolor: "#ea580c" },
                }}
              >
                Pesan Sekarang!
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
