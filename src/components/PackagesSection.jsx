import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";

const colors = {
  primary: "#F97316", // Sayvia Orange
  secondary: "#2DD4BF", // Sayvia Teal
  dark: "#292121",
};

const packageData = [
  {
    name: "Basic Bae",
    price: 60000,
    originalPrice: 65000,
    discount: "5%",
    features: ["1 desain undangan", "1x revisi", "Publish cepat"],
  },
  {
    name: "Glow-Up",
    price: 75000,
    originalPrice: 82000,
    discount: "8%",
    features: ["3 desain pilihan", "3x revisi", "Support penuh"],
    highlight: true,
  },
  {
    name: "All Out!",
    price: 100000,
    originalPrice: 112000,
    discount: "10%",
    features: [
      "Custom desain eksklusif",
      "Revisi bebas",
      "Prioritas pengerjaan",
    ],
  },
];

export default function PackagesSection() {
  return (
    <Box
      sx={{
        py: 10,
        px: 4,
        background: "linear-gradient(180deg, #ffffff 0%, #e9fcfbff 10%)",
        textAlign: "center",
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 42 },
          fontWeight: 900,
          color: colors.dark,
          mb: 1,
        }}
      >
        Pilih Paket Sayvia 💍
      </Typography>

      <Typography sx={{ color: "#6B7280", mb: 6 }}>
        Harga jujur, desain niat, bikin undanganmu tampil premium ✨
      </Typography>

      {/* PACKAGES */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
          gap: 4,
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        {packageData.map((p, i) => (
          <Card
            key={i}
            sx={{
              position: "relative",
              overflow: "visible",
              p: 4,
              borderRadius: 5,
              boxShadow: p.highlight
                ? "0 25px 60px rgba(249,115,22,0.35)"
                : "0 10px 30px rgba(0,0,0,0.08)",
              border: p.highlight
                ? `3px solid ${colors.primary}`
                : "1px solid #E5E7EB",
              transform: p.highlight ? "scale(1.05)" : "none",
              background: "#ffffff",
            }}
          >
            {/* BEST SELLER */}
            {p.highlight && (
              <Chip
                label="🔥 Best Seller"
                sx={{
                  position: "absolute",
                  top: -20, // naik lebih keluar
                  right: 24,
                  zIndex: 2, // pastikan di atas card
                  bgcolor: colors.primary,
                  color: "#fff",
                  fontWeight: 800,
                  px: 2,
                  py: 0.5,
                  boxShadow: "0 8px 20px rgba(249,115,22,0.4)",
                  borderRadius: "999px",
                }}
              />
            )}

            {/* DISCOUNT */}
            <Chip
              label={`-${p.discount}`}
              sx={{
                position: "absolute",
                top: 18,
                left: 18,
                bgcolor: "#22C55E",
                color: "#fff",
                fontWeight: 800,
                fontSize: 12,
              }}
            />

            <CardContent>
              {/* NAME */}
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 800,
                  mb: 2,
                  color: colors.dark,
                }}
              >
                {p.name}
              </Typography>

              {/* PRICE */}
              <Box mb={3}>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#9CA3AF",
                    textDecoration: "line-through",
                    fontWeight: 600,
                  }}
                >
                  Rp {p.originalPrice.toLocaleString("id-ID")}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 40,
                    fontWeight: 900,
                    color: colors.primary,
                    lineHeight: 1.1,
                  }}
                >
                  Rp {p.price.toLocaleString("id-ID")}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    color: "#16A34A",
                    fontWeight: 600,
                  }}
                >
                  Hemat {p.discount}
                </Typography>
              </Box>

              {/* FEATURES */}
              <Stack spacing={1} mb={4}>
                {p.features.map((f, idx) => (
                  <Typography
                    key={idx}
                    sx={{
                      fontSize: 14,
                      color: "#374151",
                    }}
                  >
                    ✔ {f}
                  </Typography>
                ))}
              </Stack>

              {/* CTA */}
              <Button
                fullWidth
                sx={{
                  py: 1.5,
                  borderRadius: 999,
                  fontWeight: 700,
                  bgcolor: p.highlight ? colors.primary : colors.secondary,
                  color: "#fff",
                  "&:hover": {
                    bgcolor: p.highlight ? "#ea580c" : "#14b8a6",
                  },
                }}
              >
                Pilih Paket
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

// End of PackagesSection.jsx
