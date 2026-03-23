import { useState } from "react";
import Navbar from "../components/Navbar";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  TextField,
  Stack,
} from "@mui/material";

import { colors, size, weight } from "../theme/sayviaTheme";
import designs from "../data/designData";

// unique data
const events = ["Semua", ...new Set(designs.map((d) => d.event))];
const packages = ["Semua", ...new Set(designs.map((d) => d.package))];
const tags = ["Semua", "New", "Popular", "-"];

export default function Design() {
  const [activeEvent, setActiveEvent] = useState("Semua");
  const [activePackage, setActivePackage] = useState("Semua");
  const [activeTag, setActiveTag] = useState("Semua");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [showFilter, setShowFilter] = useState(true);

  let filtered = [...designs];

  if (search) {
    filtered = filtered.filter((d) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (activeEvent !== "Semua") {
    filtered = filtered.filter((d) => d.event === activeEvent);
  }

  if (activePackage !== "Semua") {
    filtered = filtered.filter((d) => d.package === activePackage);
  }

  if (activeTag !== "Semua") {
    filtered = filtered.filter((d) => d.tag === activeTag);
  }

  if (sort === "az") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "za") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <Box sx={{ background: colors.backgroundLight, minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <Box sx={{ textAlign: "center", py: 4, background: colors.backgroundPastel }}>
        <Typography sx={{ fontSize: size.h1, fontWeight: weight.bold, color: colors.primary }}>
          Galeri Desain
        </Typography>
        <Typography sx={{ fontSize: size.h3, color: colors.textCalm }}>
          Pilih desain terbaik untuk momen spesialmu ✨
        </Typography>
      </Box>

      {/* TOGGLE */}
      <Box sx={{ px: 4, mt: 2 }}>
        <Button
          startIcon={<FilterListIcon />}
          onClick={() => setShowFilter(!showFilter)}
          sx={{ textTransform: "none" }}
        >
          {showFilter ? "Sembunyikan Filter" : "Tampilkan Filter"}
        </Button>
      </Box>

      {/* MAIN */}
      <Box sx={{ display: "flex", gap: 4, px: { xs: 2, md: 6 }, py: 3 }}>

        {/* FILTER */}
        {showFilter && (
          <Box
            sx={{
              width: 260,
              flexShrink: 0,
              background: colors.white,
              borderRadius: 3,
              p: 2,
              border: `1px solid ${colors.textMuted}30`,
              height: "fit-content",
            }}
          >
            <Typography sx={{ fontWeight: weight.bold, mb: 2 }}>
              Filter
            </Typography>

            {/* SEARCH */}
            <TextField
              placeholder="Cari desain..."
              size="small"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: <SearchIcon sx={{ mr: 1 }} />,
              }}
            />

            {/* EVENT */}
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Event</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={1}>
                  {events.map((ev) => (
                    <Button
                      key={ev}
                      onClick={() => setActiveEvent(ev)}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "none",
                        backgroundColor:
                          activeEvent === ev ? colors.primary : "transparent",
                        color:
                          activeEvent === ev ? colors.white : colors.textCalm,
                      }}
                    >
                      {ev}
                    </Button>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>

            {/* PACKAGE */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Package</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={1}>
                  {packages.map((pkg) => (
                    <Button
                      key={pkg}
                      onClick={() => setActivePackage(pkg)}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "none",
                        backgroundColor:
                          activePackage === pkg
                            ? colors.secondary
                            : "transparent",
                        color:
                          activePackage === pkg
                            ? colors.white
                            : colors.textCalm,
                      }}
                    >
                      {pkg}
                    </Button>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>

            {/* TAG */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Tag</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag === "-" ? "None" : tag}
                      onClick={() => setActiveTag(tag)}
                      sx={{
                        cursor: "pointer",
                        backgroundColor:
                          activeTag === tag ? colors.primary : "#eee",
                        color:
                          activeTag === tag
                            ? colors.white
                            : colors.textCalm,
                      }}
                    />
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>

            {/* SORT */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Urutkan</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={1}>
                  <Button onClick={() => setSort("az")}>A - Z</Button>
                  <Button onClick={() => setSort("za")}>Z - A</Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
        )}

        {/* CONTENT */}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(5, 1fr)",
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
                {/* IMAGE + TAG */}
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="300"
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
                        fontWeight: 600,
                      }}
                    />
                  )}
                </Box>

                {/* CONTENT */}
                <CardContent>
                  <Typography fontWeight={600}>
                    {design.name}
                  </Typography>

                  <Typography fontSize="0.8rem" color="gray">
                    {design.event}
                  </Typography>

                  <Chip
                    label={design.package}
                    size="small"
                    sx={{
                      mt: 1,
                      mb: 2,
                      background: colors.secondary,
                      color: colors.white,
                    }}
                  />

                  {/* BUTTON (INI YANG TADI HILANG) */}
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

          {filtered.length === 0 && (
            <Box sx={{ textAlign: "center", py: 10 }}>
              <Typography color={colors.textMuted}>
                Tidak ada desain 😢
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}