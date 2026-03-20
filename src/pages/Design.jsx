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
  Stack,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { colors, size, weight } from "../theme/sayviaTheme";
import designs from "../data/designData";

// ambil category unik
const categories = ["Semua", ...new Set(designs.map((d) => d.category))];

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
          py: 8,
          px: 2,
          background: colors.backgroundPastel,
        }}
      >
        <Typography
          sx={{
            fontSize: size.h1,
            fontWeight: weight.bold,
            color: colors.primary,
            mb: 1,
          }}
        >
          Pilih Desain Undangan
        </Typography>

        <Typography
          sx={{
            fontSize: size.h3,
            color: colors.textCalm,
          }}
        >
          Temukan desain terbaik untuk momen spesialmu ✨
        </Typography>
      </Box>

      <Container maxWidth="xl" sx={{ py: 5 }}>
        <Grid container spacing={3}>
          {/* SIDEBAR FILTER (LEBIH RAMPING) */}
          <Grid item xs={4} md={2.5}>
            <Box
              sx={{
                p: 2.5,
                borderRadius: 3,
                background: colors.white,
                border: `1px solid ${colors.textMuted}30`,
                position: "sticky",
                top: 90,
              }}
            >
              <Typography
                sx={{
                  fontWeight: weight.semiBold,
                  fontSize: size.h3,
                  mb: 2,
                }}
              >
                Filter
              </Typography>

              <Stack spacing={1}>
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    fullWidth
                    onClick={() => setActiveCategory(cat)}
                    sx={{
                      justifyContent: "flex-start",
                      textTransform: "none",
                      borderRadius: 2,
                      fontSize: "0.8rem",

                      backgroundColor:
                        activeCategory === cat ? colors.primary : "transparent",

                      color:
                        activeCategory === cat ? colors.white : colors.textCalm,

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
              </Stack>
            </Box>
          </Grid>

          {/* MAIN CONTENT */}
          <Grid item xs={8} md={9.5}>
            {/* SEARCH + SORT */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 3,
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <TextField
                placeholder="Cari desain..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="small"
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
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="az">A - Z</MenuItem>
              </Select>
            </Box>

            {/* GRID DESAIN */}
            <Grid container spacing={2.5}>
              {filtered.map((design) => (
                <Grid item xs={12} sm={6} md={4} key={design.id}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "0.3s",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",

                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: `0 12px 30px ${colors.primary}33`,
                      },
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        height="360"
                        image={design.img}
                      />

                      {/* TAG */}
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
                            fontWeight: 600,
                            fontSize: "0.7rem",
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
                          mb: 1.5,
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
                        Gunakan
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* EMPTY STATE */}
            {filtered.length === 0 && (
              <Box sx={{ textAlign: "center", py: 10 }}>
                <Typography color={colors.textMuted}>
                  Desain tidak ditemukan 😢
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
