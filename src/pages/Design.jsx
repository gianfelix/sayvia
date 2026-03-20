import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  TextField,
  InputAdornment,
  Stack,
  Divider,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { colors, size, weight } from "../theme/sayviaTheme";
import designs from "../data/designData";

// ambil unique data
const categories = ["Semua", ...new Set(designs.map((d) => d.category))];
const tags = ["Semua", "New", "Popular", "-"];

export default function Design() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeTag, setActiveTag] = useState("Semua");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  let filtered = [...designs];

  // SEARCH
  if (search) {
    filtered = filtered.filter((d) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // CATEGORY
  if (activeCategory !== "Semua") {
    filtered = filtered.filter((d) => d.category === activeCategory);
  }

  // TAG
  if (activeTag !== "Semua") {
    filtered = filtered.filter((d) => d.tag === activeTag);
  }

  // SORT
  if (sort === "az") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "za") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <Box sx={{ background: colors.backgroundLight, minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <Box
        sx={{
          textAlign: "center",
          py: 4,
          background: colors.backgroundPastel,
        }}
      >
        <Typography
          sx={{
            fontSize: size.h1,
            fontWeight: weight.bold,
            color: colors.primary,
          }}
        >
          Galeri Desain
        </Typography>

        <Typography sx={{ fontSize: size.h3, color: colors.textCalm }}>
          Pilih desain terbaik untuk momen spesialmu ✨
        </Typography>
      </Box>

      {/* MAIN LAYOUT */}
      <Box
        sx={{
          display: "flex",
          gap: 4,
          px: { xs: 2, md: 6 },
          py: 4,
        }}
      >
        {/* ================= LEFT FILTER ================= */}
        <Box
          sx={{
            width: 250,
            flexShrink: 0,
            background: colors.white,
            borderRadius: 3,
            p: 3,
            border: `1px solid ${colors.textMuted}30`,
            position: "sticky",
            top: 90,
            height: "fit-content",
          }}
        >
          <Typography
            sx={{
              fontWeight: weight.bold,
              mb: 2,
            }}
          >
            Semua Filter
          </Typography>

          {/* SEARCH */}
          <TextField
            placeholder="Cari desain..."
            size="small"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Divider sx={{ mb: 2 }} />

          {/* CATEGORY */}
          <Typography sx={{ fontWeight: weight.semiBold, mb: 1 }}>
            Kategori
          </Typography>
          <Stack spacing={1} mb={3}>
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  fontSize: "0.8rem",
                  borderRadius: 2,

                  backgroundColor:
                    activeCategory === cat
                      ? colors.primary
                      : "transparent",

                  color:
                    activeCategory === cat
                      ? colors.white
                      : colors.textCalm,
                }}
              >
                {cat}
              </Button>
            ))}
          </Stack>

          {/* TAG */}
          <Typography sx={{ fontWeight: weight.semiBold, mb: 1 }}>
            Tag
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag === "Semua" ? "All" : tag === "-" ? "None" : tag}
                onClick={() => setActiveTag(tag)}
                sx={{
                  cursor: "pointer",
                  backgroundColor:
                    activeTag === tag ? colors.primary : "#eee",
                  color:
                    activeTag === tag ? colors.white : colors.textCalm,
                }}
              />
            ))}
          </Stack>

          <Divider sx={{ mb: 2 }} />

          {/* SORT */}
          <Typography sx={{ fontWeight: weight.semiBold, mb: 1 }}>
            Urutkan
          </Typography>

          <Stack spacing={1}>
            <Button
              onClick={() => setSort("az")}
              sx={{ justifyContent: "flex-start", textTransform: "none" }}
            >
              Nama A - Z
            </Button>

            <Button
              onClick={() => setSort("za")}
              sx={{ justifyContent: "flex-start", textTransform: "none" }}
            >
              Nama Z - A
            </Button>
          </Stack>
        </Box>

        {/* ================= RIGHT CONTENT ================= */}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "2fr",
                sm: "repeat(4, 1fr)",
                md: "repeat(6, 1fr)",
              },
              gap: 3,
            }}
          >
            {filtered.map((design) => (
              <Card
                key={design.id}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: `0 10px 30px ${colors.primary}33`,
                  },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="350"
                    image={design.img}
                  />

                  {design.tag !== "-" && (
                    <Chip
                      label={design.tag}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        background: colors.primary,
                        color: colors.white,
                      }}
                    />
                  )}
                </Box>

                <CardContent>
                  <Typography
                    sx={{
                      fontWeight: weight.semiBold,
                      fontSize: size.h3,
                    }}
                  >
                    {design.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: colors.textCalm,
                      mb: 2,
                    }}
                  >
                    {design.category}
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      background: colors.primary,
                      textTransform: "none",
                      fontSize: "0.8rem",
                      fontWeight: weight.semiBold,
                      "&:hover": {
                        background: colors.buttonHover,
                      },
                    }}
                  >
                    Pilih Desain
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* EMPTY */}
          {filtered.length === 0 && (
            <Box sx={{ textAlign: "center", py: 10 }}>
              <Typography color={colors.textMuted} sx={{ fontSize: "2rem" }}>
                Tidak ada desain ditemukan 😢
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}