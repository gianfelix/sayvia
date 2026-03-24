import { useState } from "react";
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
} from "@mui/material";

import { colors, size, weight } from "../theme/sayviaTheme";
import designs from "../data/designData";
import OrderDialog from "../components/OrderDialog";

// unique filter options
const events = ["Semua", ...new Set(designs.map((d) => d.event))];
const packages = ["Semua", ...new Set(designs.map((d) => d.package))];
const tags = ["Semua", "New", "Popular", "-"];

const ITEMS_PER_PAGE = 8;

export default function Design() {
  const [activeEvent, setActiveEvent] = useState("Semua");
  const [activePackage, setActivePackage] = useState("Semua");
  const [activeTag, setActiveTag] = useState("Semua");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [showFilter, setShowFilter] = useState(true);
  const [page, setPage] = useState(1);

  const [open, setOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", date: "", location: "", note: "" });

  // ── helper: apply filter and reset to page 1 ────────────────────────────
  const applyFilter = (fn) => { fn(); setPage(1); };

  // ── filtering & sorting ──────────────────────────────────────────────────
  let filtered = [...designs];
  if (search) filtered = filtered.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));
  if (activeEvent !== "Semua") filtered = filtered.filter((d) => d.event === activeEvent);
  if (activePackage !== "Semua") filtered = filtered.filter((d) => d.package === activePackage);
  if (activeTag !== "Semua") filtered = filtered.filter((d) => d.tag === activeTag);
  if (sort === "az") filtered.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === "za") filtered.sort((a, b) => b.name.localeCompare(a.name));

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedData = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // ── dialog handlers ──────────────────────────────────────────────────────
  const handleOpen = (design) => {
    setSelectedDesign(design);
    setForm({ name: "", phone: "", date: "", location: "", note: "" });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    const payload = { ...form, design: selectedDesign?.name, event: selectedDesign?.event, package: selectedDesign?.package };
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

  return (
    <Box sx={{ background: colors.backgroundLight, minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <Box sx={{ textAlign: "center", py: 4, background: colors.backgroundPastel }}>
        <Typography sx={{ fontSize: size.h1, fontWeight: weight.bold, color: colors.primary }}>
          Galeri Desain
        </Typography>
        <Typography sx={{ fontSize: size.h3, color: colors.textCalm }}>
          Pilih desain terbaik untuk momen spesialmu ✨
        </Typography>
      </Box>

      {/* ── FILTER TOGGLE BUTTON ── */}
      <Box sx={{ px: { xs: 2, md: 4 }, mt: 2 }}>
        <Button
          startIcon={<FilterListIcon />}
          onClick={() => setShowFilter(!showFilter)}
          sx={{ textTransform: "none", color: colors.primary }}
        >
          {showFilter ? "Sembunyikan Filter" : "Tampilkan Filter"}
        </Button>
      </Box>

      {/* ── MAIN LAYOUT ── */}
      <Box sx={{ display: "flex", gap: 4, px: { xs: 2, md: 6 }, py: 3, alignItems: "flex-start" }}>

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
            <Typography sx={{ fontWeight: weight.bold, mb: 2 }}>Filter</Typography>

            {/* SEARCH */}
            <TextField
              placeholder="Cari desain..."
              size="small"
              fullWidth
              value={search}
              onChange={(e) => applyFilter(() => setSearch(e.target.value))}
              sx={{ mb: 1.5 }}
              InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1, color: "gray", fontSize: 18 }} /> }}
            />

            {/* EVENT */}
            <Accordion defaultExpanded disableGutters elevation={0} sx={{ "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={weight.semiBold} fontSize="0.88rem">Event</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0, px: 0 }}>
                <Stack spacing={0.3}>
                  {events.map((ev) => (
                    <Button key={ev} onClick={() => applyFilter(() => setActiveEvent(ev))} size="small"
                      sx={{
                        justifyContent: "flex-start", textTransform: "none", borderRadius: 2, fontSize: "0.8rem",
                        backgroundColor: activeEvent === ev ? colors.primary : "transparent",
                        color: activeEvent === ev ? colors.white : colors.textCalm,
                        "&:hover": { backgroundColor: activeEvent === ev ? colors.primary : `${colors.primary}15` },
                      }}
                    >{ev}</Button>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>

            {/* PACKAGE */}
            <Accordion disableGutters elevation={0} sx={{ "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={weight.semiBold} fontSize="0.88rem">Paket</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0, px: 0 }}>
                <Stack spacing={0.3}>
                  {packages.map((pkg) => (
                    <Button key={pkg} onClick={() => applyFilter(() => setActivePackage(pkg))} size="small"
                      sx={{
                        justifyContent: "flex-start", textTransform: "none", borderRadius: 2, fontSize: "0.8rem",
                        backgroundColor: activePackage === pkg ? colors.secondary : "transparent",
                        color: activePackage === pkg ? colors.white : colors.textCalm,
                        "&:hover": { backgroundColor: activePackage === pkg ? colors.secondary : `${colors.secondary}15` },
                      }}
                    >{pkg}</Button>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>

            {/* TAG */}
            <Accordion disableGutters elevation={0} sx={{ "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={weight.semiBold} fontSize="0.88rem">Tag</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Stack direction="row" flexWrap="wrap" gap={0.7}>
                  {tags.map((tag) => (
                    <Chip key={tag} label={tag === "-" ? "None" : tag} onClick={() => applyFilter(() => setActiveTag(tag))} size="small"
                      sx={{
                        cursor: "pointer", fontSize: "0.72rem",
                        backgroundColor: activeTag === tag ? colors.primary : "#eee",
                        color: activeTag === tag ? colors.white : colors.textCalm,
                      }}
                    />
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>

            {/* SORT */}
            <Accordion disableGutters elevation={0} sx={{ "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={weight.semiBold} fontSize="0.88rem">Urutkan</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0, px: 0 }}>
                <Stack spacing={0.3}>
                  {[{ label: "Default", value: "default" }, { label: "A – Z", value: "az" }, { label: "Z – A", value: "za" }].map((s) => (
                    <Button key={s.value} size="small" onClick={() => applyFilter(() => setSort(s.value))}
                      sx={{
                        justifyContent: "flex-start", textTransform: "none", borderRadius: 2, fontSize: "0.8rem",
                        backgroundColor: sort === s.value ? `${colors.primary}18` : "transparent",
                        color: sort === s.value ? colors.primary : colors.textCalm,
                        fontWeight: sort === s.value ? weight.semiBold : weight.regular,
                      }}
                    >{s.label}</Button>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
        )}

        {/* ── CONTENT AREA ── */}
        <Box sx={{ flex: 1, minWidth: 0 }}>

          {/* Result info */}
          <Typography sx={{ fontSize: "0.8rem", color: colors.textCalm, mb: 2 }}>
            Menampilkan <b>{filtered.length}</b> desain
            {totalPages > 1 && <> &nbsp;·&nbsp; Halaman <b>{page}</b> dari <b>{totalPages}</b></>}
          </Typography>

          {/* ── CARD GRID ── */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: showFilter ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
                xl: showFilter ? "repeat(4, 1fr)" : "repeat(5, 1fr)",
              },
              gap: { xs: 1.5, md: 2.5 },
            }}
          >
            {paginatedData.map((design) => (
              <Card
                key={design.id}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: `0 10px 30px ${colors.primary}33`,
                  },
                }}
              >
                {/* IMAGE + TAG */}
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={design.img}
                    alt={design.name}
                    sx={{ height: { xs: 180, sm: 240, md: 280 }, objectFit: "cover" }}
                  />
                  {design.tag !== "-" && (
                    <Chip label={design.tag} size="small"
                      sx={{ position: "absolute", top: 8, left: 8, background: colors.primary, color: colors.white, fontWeight: 600, fontSize: "0.68rem" }}
                    />
                  )}
                </Box>

                {/* CARD BODY */}
                <CardContent sx={{ flexGrow: 1, p: { xs: 1.2, md: 1.8 }, "&:last-child": { pb: 1.5 } }}>
                  <Typography fontWeight={600} fontSize={{ xs: "0.82rem", md: "0.92rem" }} noWrap>
                    {design.name}
                  </Typography>
                  <Typography fontSize="0.75rem" color="gray" mb={0.5}>
                    {design.event}
                  </Typography>
                  <Chip label={design.package} size="small"
                    sx={{ mb: 1.5, background: colors.secondary, color: colors.white, fontSize: "0.68rem" }}
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
                          "&:hover": { background: colors.primary, color: colors.white },
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
              <Button onClick={resetFilters} variant="outlined"
                sx={{ textTransform: "none", color: colors.primary, borderColor: colors.primary, borderRadius: 2 }}>
                Reset Filter
              </Button>
            </Box>
          )}

          {/* ── PAGINATION ── */}
          {totalPages > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5, mb: 2 }}>
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