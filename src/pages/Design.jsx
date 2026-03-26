import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
  Pagination,
  Tooltip,
  IconButton,
  Skeleton,
} from "@mui/material";

import { colors, size, weight } from "../theme/sayviaTheme";
import designs from "../data/designData";
import OrderDialog from "../components/OrderDialog";

// unique filter options
const events = ["Semua", ...new Set(designs.map((d) => d.event))];
const packages = ["Semua", ...new Set(designs.map((d) => d.package))];
const tags = ["Semua", "New", "Popular", "-"];

const ITEMS_PER_PAGE = 10;

export default function Design() {
  const [activeEvent, setActiveEvent] = useState("Semua");
  const [activePackage, setActivePackage] = useState("Semua");
  const [activeTag, setActiveTag] = useState("Semua");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [showFilter, setShowFilter] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    location: "",
    note: "",
  });

  // ── Simulate data loading ────────────────────────────────────────────────
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // ── helper: apply filter and reset to page 1 ────────────────────────────
  const applyFilter = (fn) => {
    fn();
    setPage(1);
  };

  // ── filtering & sorting ──────────────────────────────────────────────────
  let filtered = [...designs];
  if (search)
    filtered = filtered.filter((d) =>
      d.name.toLowerCase().includes(search.toLowerCase()),
    );
  if (activeEvent !== "Semua")
    filtered = filtered.filter((d) => d.event === activeEvent);
  if (activePackage !== "Semua")
    filtered = filtered.filter((d) => d.package === activePackage);
  if (activeTag !== "Semua")
    filtered = filtered.filter((d) => d.tag === activeTag);
  
  // ── Sort by tag priority first (Popular > New > -) ──────────────────────
  const tagPriority = { "Popular": 0, "New": 1, "-": 2 };
  filtered.sort((a, b) => tagPriority[a.tag] - tagPriority[b.tag]);
  
  // ── Then apply additional sorting ─────────────────────────────────────
  if (sort === "az") filtered.sort((a, b) => {
    const tagCompare = tagPriority[a.tag] - tagPriority[b.tag];
    if (tagCompare !== 0) return tagCompare;
    return a.name.localeCompare(b.name);
  });
  else if (sort === "za") filtered.sort((a, b) => {
    const tagCompare = tagPriority[a.tag] - tagPriority[b.tag];
    if (tagCompare !== 0) return tagCompare;
    return b.name.localeCompare(a.name);
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedData = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  // ── dialog handlers ──────────────────────────────────────────────────────
  const handleOpen = (design) => {
    setSelectedDesign(design);
    setForm({ name: "", phone: "", date: "", location: "", note: "" });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    const payload = {
      ...form,
      design: selectedDesign?.name,
      event: selectedDesign?.event,
      package: selectedDesign?.package,
    };
    if (!payload.name || !payload.phone || !payload.date || !payload.location) {
      alert("Mohon lengkapi semua field wajib!");
      return;
    }
    console.log("DATA PESANAN:", payload);
    alert("Pesanan berhasil dikirim!");
    setOpen(false);
  };

  // ── preview: open previewUrl or fallback to image ───────────────────────
  const handlePreview = (design) => {
    window.open(design.previewUrl || design.img, "_blank");
  };

  const resetFilters = () => {
    setActiveEvent("Semua");
    setActivePackage("Semua");
    setActiveTag("Semua");
    setSearch("");
    setSort("default");
    setPage(1);
  };

  // ── Skeleton Card Component ────────────────────────────────────────────
  const SkeletonCard = () => (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Skeleton
          variant="rectangular"
          sx={{
            height: { xs: 180, sm: 240, md: 280 },
            backgroundColor: "rgba(0, 0, 0, 0.11)",
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          p: { xs: 1.2, md: 1.8 },
        }}
      >
        <Skeleton variant="text" sx={{ mb: 1, width: "80%" }} />
        <Skeleton variant="text" sx={{ mb: 0.8, width: "60%", fontSize: "0.75rem" }} />
        <Skeleton variant="rounded" sx={{ mb: 1.5, width: "100px", height: "24px" }} />
        <Stack spacing={0.8}>
          <Skeleton variant="rounded" sx={{ width: "100%", height: "36px" }} />
          <Skeleton variant="rounded" sx={{ width: "100%", height: "32px" }} />
        </Stack>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ background: colors.backgroundLight, minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <Box
        sx={{ textAlign: "center", mt: "4rem", mb: "4rem", background: colors.backgroundLight }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: weight.extraBold,
            background: colors.primary,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Galeri Desain Undangan
        </Typography>

        {/* SUBHEADLINE */}
        <Typography
          sx={{
            fontSize: { xs: "0.95rem", md: "1.15rem" },
            color: colors.textCalm,
            mb: 4,
            maxWidth: "700px",
            mx: "auto",
            lineHeight: 1.6,
            fontWeight: weight.medium,
          }}
        >
          {/* Copywriter Gen Z */}
          Jelajahi berbagai desain undangan kami yang kekinian dan aesthetic
        </Typography>
      </Box>

      {/* ── MAIN LAYOUT ── */}
      <Box
        sx={{
          display: "flex",
          gap: 4,
          px: { xs: 2, md: 6 },
          py: 3,
          alignItems: "flex-start",
        }}
      >
        {/* ── SIDEBAR FILTER ── */}
        {showFilter && (
          <Box
            sx={{
              width: 220,
              flexShrink: 0,
              background: colors.white,
              borderRadius: 3,
              p: 2,
              border: `1px solid ${colors.textMuted}30`,
              position: "sticky",
              top: 80,
              maxHeight: "calc(100vh - 100px)",
              overflowY: "auto",
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
              onChange={(e) => applyFilter(() => setSearch(e.target.value))}
              sx={{ mb: 1.5 }}
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ mr: 1, color: "gray", fontSize: 18 }} />
                ),
              }}
            />

            {/* EVENT */}
            <Accordion
              defaultExpanded
              disableGutters
              elevation={0}
              sx={{ "&:before": { display: "none" } }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={weight.semiBold} fontSize="0.88rem">
                  Event
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0, px: 0 }}>
                <Stack spacing={0.3}>
                  {events.map((ev) => (
                    <Button
                      key={ev}
                      onClick={() => applyFilter(() => setActiveEvent(ev))}
                      size="small"
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "none",
                        borderRadius: 2,
                        fontSize: "0.8rem",
                        backgroundColor:
                          activeEvent === ev ? colors.primary : "transparent",
                        color:
                          activeEvent === ev ? colors.white : colors.textCalm,
                        "&:hover": {
                          backgroundColor:
                            activeEvent === ev
                              ? colors.primary
                              : `${colors.primary}15`,
                        },
                      }}
                    >
                      {ev}
                    </Button>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>

            {/* PACKAGE */}
            <Accordion
              disableGutters
              elevation={0}
              sx={{ "&:before": { display: "none" } }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={weight.semiBold} fontSize="0.88rem">
                  Paket
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0, px: 0 }}>
                <Stack spacing={0.3}>
                  {packages.map((pkg) => (
                    <Button
                      key={pkg}
                      onClick={() => applyFilter(() => setActivePackage(pkg))}
                      size="small"
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "none",
                        borderRadius: 2,
                        fontSize: "0.8rem",
                        backgroundColor:
                          activePackage === pkg
                            ? colors.secondary
                            : "transparent",
                        color:
                          activePackage === pkg
                            ? colors.white
                            : colors.textCalm,
                        "&:hover": {
                          backgroundColor:
                            activePackage === pkg
                              ? colors.secondary
                              : `${colors.secondary}15`,
                        },
                      }}
                    >
                      {pkg}
                    </Button>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
        )}

        {/* ── CONTENT AREA ── */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Result info */}
          <Typography
            sx={{ fontSize: "0.8rem", color: colors.textCalm, mb: 2 }}
          >
            
            {totalPages > 1 && (
              <>
                 Halaman <b>{page}</b> dari <b>{totalPages}</b>
              </>
            )}
          </Typography>

          {/* ── CARD GRID ── */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(5, 1fr)",
              },
              gap: { xs: 1.5, md: 2.5 },
            }}
          >
            {isLoading
              ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                  <SkeletonCard key={`skeleton-${index}`} />
                ))
              : paginatedData.map((design) => (
              <Card
                key={design.id}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    boxShadow: `0 10px 20px ${"#000000"}30`,
                  },
                }}
              >
                {/* IMAGE + TAG */}
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={design.img}
                    alt={design.name}
                    sx={{
                      height: { xs: 180, sm: 240, md: 280 },
                      objectFit: "cover",
                    }}
                  />
                  {design.tag !== "-" && (
                    <Chip
                      label={design.tag}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        background: design.tag === "Popular" ? colors.primary : colors.secondary,
                        color: colors.white,
                        
                        fontWeight: 600,
                        fontSize: "0.68rem",
                      }}
                    />
                  )}
                </Box>

                {/* CARD BODY */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: { xs: 1.2, md: 1.8 },
                    "&:last-child": { pb: 1.5 },
                  }}
                >
                  <Typography
                    fontWeight={600}
                    fontSize={{ xs: "0.82rem", md: "0.92rem" }}
                    noWrap
                  >
                    {design.name}
                  </Typography>
                  <Typography fontSize="0.75rem" color="gray" mb={0.5}>
                    {design.event}
                  </Typography>
                  <Chip
                    label={design.package}
                    size="small"
                    sx={{
                      mb: 1.5,
                      background: colors.secondary,
                      color: colors.white,
                      fontSize: "0.68rem",
                    }}
                  />

                  {/* ── ACTION ROW ── */}
                  <Box sx={{ display: "flex", gap: 0.8, alignItems: "center" }}>
                    {/* Pilih Desain */}
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => handleOpen(design)}
                      sx={{
                        background: colors.primary,
                        textTransform: "none",
                        fontSize: { xs: "0.7rem", md: "0.78rem" },
                        fontWeight: weight.semiBold,
                        py: { xs: 0.6, md: 0.8 },
                        "&:hover": { background: colors.buttonHover },
                      }}
                    >
                      Pilih Desain
                    </Button>

                    {/* Preview icon button */}
                    <Tooltip title="Preview template" placement="top" arrow>
                      <IconButton
                        onClick={() => handlePreview(design)}
                        size="small"
                        sx={{
                          flexShrink: 0,
                          border: `1.5px solid ${colors.primary}`,
                          borderRadius: "8px",
                          color: colors.primary,
                          p: "5px",
                          transition: "0.2s",
                          "&:hover": {
                            background: colors.primary,
                            color: colors.white,
                          },
                        }}
                      >
                        <VisibilityIcon sx={{ fontSize: { xs: 16, md: 18 } }} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* ── EMPTY STATE ── */}
          {filtered.length === 0 && (
            <Box sx={{ textAlign: "center", py: 10 }}>
              <Typography fontSize="2.5rem">😢</Typography>
              <Typography color={colors.textCalm} mt={1} mb={2}>
                Tidak ada desain yang cocok dengan filter kamu.
              </Typography>
              <Button
                onClick={resetFilters}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: colors.primary,
                  borderColor: colors.primary,
                  borderRadius: 2,
                }}
              >
                Reset Filter
              </Button>
            </Box>
          )}

          {/* ── PAGINATION ── */}
          {totalPages > 1 && (
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 5, mb: 2 }}
            >
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => {
                  setPage(value);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                shape="rounded"
                sx={{
                  "& .MuiPaginationItem-root": { color: colors.primary },
                  "& .MuiPaginationItem-root.Mui-selected": {
                    backgroundColor: colors.primary,
                    color: colors.white,
                    "&:hover": { backgroundColor: colors.buttonHover },
                  },
                }}
              />
            </Box>
          )}
        </Box>
      </Box>

      <OrderDialog
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        selectedDesign={selectedDesign}
        form={form}
        setForm={setForm}
      />
    </Box>
  );
}
