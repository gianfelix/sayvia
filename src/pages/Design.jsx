import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { colors, size, weight } from "../theme/sayviaTheme";

const categories = ["Semua", "Rustic", "Modern", "Floral", "Minimalis", "Mewah"];

const designs = [
  {
    id: 1,
    name: "Golden Serenity",
    category: "Mewah",
    img: "https://picsum.photos/400/700?1",
    tag: "Populer",
  },
  {
    id: 2,
    name: "Sakura Bloom",
    category: "Floral",
    img: "https://picsum.photos/400/700?2",
    tag: "Baru",
  },
  {
    id: 3,
    name: "Sage Minimal",
    category: "Minimalis",
    img: "https://picsum.photos/400/700?3",
  },
  {
    id: 4,
    name: "Rustic Wood",
    category: "Rustic",
    img: "https://picsum.photos/400/700?4",
  },
  {
    id: 5,
    name: "Midnight Azure",
    category: "Modern",
    img: "https://picsum.photos/400/700?5",
  },
  {
    id: 6,
    name: "Ivory Lace",
    category: "Floral",
    img: "https://picsum.photos/400/700?6",
  },
];

export default function Design() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  let filtered = designs.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  if (activeCategory !== "Semua") {
    filtered = filtered.filter((d) => d.category === activeCategory);
  }

  if (sort === "az") {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <Box sx={{ background: colors.backgroundLight, minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          px: 2,
          background: colors.backgroundPastel,
        }}
      >
        <Typography
          sx={{
            fontSize: size.h0,
            fontWeight: weight.bold,
            color: colors.primary,
            mb: 2,
          }}
        >
          Galeri Desain Undangan
        </Typography>

        <Typography
          sx={{
            fontSize: size.h2,
            color: colors.textCalm,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Pilih desain undangan digital yang paling cocok untuk momen spesialmu.
        </Typography>
      </Box>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* FILTER SIDEBAR */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                background: colors.white,
                border: `1px solid ${colors.textMuted}30`,
                position: "sticky",
                top: 100,
              }}
            >
              <Typography
                sx={{
                  fontWeight: weight.semiBold,
                  fontSize: size.h2,
                  mb: 2,
                }}
              >
                Filter
              </Typography>

              {categories.map((cat) => (
                <Button
                  key={cat}
                  fullWidth
                  onClick={() => setActiveCategory(cat)}
                  sx={{
                    justifyContent: "flex-start",
                    mb: 1,
                    textTransform: "none",
                    borderRadius: 2,
                    fontWeight: weight.medium,

                    backgroundColor:
                      activeCategory === cat
                        ? colors.primary
                        : "transparent",

                    color:
                      activeCategory === cat
                        ? colors.white
                        : colors.textCalm,

                    "&:hover": {
                      backgroundColor:
                        activeCategory === cat
                          ? colors.buttonHover
                          : `${colors.primary}15`,
                    },
                  }}
                >
                  {cat}
                </Button>
              ))}
            </Box>
          </Grid>

          {/* MAIN CONTENT */}
          <Grid item xs={12} md={9}>
            {/* SEARCH + SORT */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 4,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextField
                placeholder="Cari desain..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ width: 260 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                size="small"
              >
                <MenuItem value="default">Urutan Default</MenuItem>
                <MenuItem value="az">Nama A-Z</MenuItem>
              </Select>
            </Box>

            {/* GRID */}
            <Grid container spacing={3}>
              {filtered.map((design) => (
                <Grid item xs={12} sm={6} lg={4} key={design.id}>
                  <Card
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
                        height="380"
                        image={design.img}
                      />

                      {design.tag && (
                        <Chip
                          label={design.tag}
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 10,
                            left: 10,
                            background: colors.primary,
                            color: colors.white,
                            fontWeight: weight.bold,
                          }}
                        />
                      )}
                    </Box>

                    <CardContent>
                      <Typography
                        sx={{
                          fontWeight: weight.semiBold,
                          fontSize: size.h2,
                        }}
                      >
                        {design.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: size.h3,
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
                          fontWeight: weight.semiBold,
                          "&:hover": {
                            background: colors.buttonHover,
                          },
                        }}
                      >
                        Gunakan Desain
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {filtered.length === 0 && (
              <Box sx={{ textAlign: "center", py: 10 }}>
                <Typography color={colors.textMuted}>
                  Desain tidak ditemukan
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}