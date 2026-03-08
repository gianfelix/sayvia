import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Typography,
  Chip,
  Button,
  Grid,
  Container,
  Tabs,
  Tab,
  Fade,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  "Semua",
  "Rustic",
  "Modern",
  "Floral",
  "Minimalis",
  "Mewah",
];

const designs = [
  {
    id: 1,
    name: "Golden Serenity",
    category: "Mewah",
    tag: "Terpopuler",
    tagColor: "#B8860B",
    palette: ["#1a1208", "#B8860B", "#f5e6c8", "#fff8ec"],
    description: "Elegan dan berkelas dengan nuansa emas yang memikat.",
    features: ["RSVP Online", "Musik Latar", "Countdown Timer", "Galeri Foto"],
    accent: "linear-gradient(135deg, #B8860B 0%, #f5c842 50%, #B8860B 100%)",
    bg: "linear-gradient(160deg, #1a1208 0%, #2e1f05 100%)",
    textLight: true,
    pattern: "ornamental",
  },
  {
    id: 2,
    name: "Sakura Bloom",
    category: "Floral",
    tag: "Baru",
    tagColor: "#c2185b",
    palette: ["#fff0f5", "#f8bbd0", "#e91e8c", "#880e4f"],
    description:
      "Lembut dan romantis dengan kelopak bunga sakura yang bermekaran.",
    features: ["RSVP Online", "Galeri Foto", "Ucapan Tamu", "Peta Lokasi"],
    accent: "linear-gradient(135deg, #f48fb1 0%, #e91e8c 100%)",
    bg: "linear-gradient(160deg, #fff0f5 0%, #fce4ec 100%)",
    textLight: false,
    pattern: "floral",
  },
  {
    id: 3,
    name: "Sage Minimal",
    category: "Minimalis",
    tag: "Favorit",
    tagColor: "#4a7c59",
    palette: ["#f8faf8", "#d4e6d4", "#4a7c59", "#2e4d38"],
    description: "Bersih, tenang, dan modern. Keindahan dalam kesederhanaan.",
    features: ["RSVP Online", "Countdown Timer", "Musik Latar", "Peta Lokasi"],
    accent: "linear-gradient(135deg, #4a7c59 0%, #81c784 100%)",
    bg: "linear-gradient(160deg, #f8faf8 0%, #e8f5e9 100%)",
    textLight: false,
    pattern: "minimal",
  },
  {
    id: 4,
    name: "Rustic Wood",
    category: "Rustic",
    tag: "Hangat",
    tagColor: "#795548",
    palette: ["#3e2723", "#795548", "#d7ccc8", "#efebe9"],
    description: "Nuansa kayu alami dan bunga liar. Hangat, autentik, menawan.",
    features: ["RSVP Online", "Galeri Foto", "Ucapan Tamu", "Countdown Timer"],
    accent: "linear-gradient(135deg, #795548 0%, #bcaaa4 100%)",
    bg: "linear-gradient(160deg, #efebe9 0%, #d7ccc8 100%)",
    textLight: false,
    pattern: "rustic",
  },
  {
    id: 5,
    name: "Midnight Azure",
    category: "Modern",
    tag: "Premium",
    tagColor: "#1565c0",
    palette: ["#0a0e2a", "#1565c0", "#42a5f5", "#e3f2fd"],
    description:
      "Dramatis dan kontemporer. Kesan mewah di malam bertabur bintang.",
    features: [
      "RSVP Online",
      "Musik Latar",
      "Countdown Timer",
      "Galeri Foto",
      "Ucapan Tamu",
    ],
    accent: "linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)",
    bg: "linear-gradient(160deg, #0a0e2a 0%, #0d1b4b 100%)",
    textLight: true,
    pattern: "modern",
  },
  {
    id: 6,
    name: "Ivory Lace",
    category: "Floral",
    tag: "Klasik",
    tagColor: "#7b5e3a",
    palette: ["#fffdf7", "#f5ead8", "#c9a96e", "#7b5e3a"],
    description:
      "Klasik dan anggun. Renda putih yang timeless untuk hari istimewamu.",
    features: ["RSVP Online", "Galeri Foto", "Peta Lokasi", "Countdown Timer"],
    accent: "linear-gradient(135deg, #c9a96e 0%, #f5d79e 100%)",
    bg: "linear-gradient(160deg, #fffdf7 0%, #fdf6e3 100%)",
    textLight: false,
    pattern: "lace",
  },
];

// ─── MINI INVITATION PREVIEW ─────────────────────────────────────────────────

function MiniInvite({ design }) {
  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "9/16",
        borderRadius: "16px",
        background: design.bg,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 2.5,
        gap: 1,
      }}
    >
      {/* Decorative top bar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: design.accent,
        }}
      />

      {/* Pattern overlay based on type */}
      {design.pattern === "ornamental" && (
        <Box sx={{ position: "absolute", inset: 0, opacity: 0.06 }}>
          {[...Array(6)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: 60 + i * 20,
                height: 60 + i * 20,
                borderRadius: "50%",
                border: "1px solid #B8860B",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </Box>
      )}

      {design.pattern === "floral" && (
        <>
          {["🌸", "🌸", "🌺", "🌸"].map((emoji, i) => (
            <Typography
              key={i}
              sx={{
                position: "absolute",
                fontSize: "28px",
                opacity: 0.25,
                top: i < 2 ? "8%" : "auto",
                bottom: i >= 2 ? "8%" : "auto",
                left: i % 2 === 0 ? "5%" : "auto",
                right: i % 2 !== 0 ? "5%" : "auto",
                transform: `rotate(${i * 45}deg)`,
              }}
            >
              {emoji}
            </Typography>
          ))}
        </>
      )}

      {design.pattern === "rustic" && (
        <>
          {["🌿", "🌿", "🍂", "🌿"].map((emoji, i) => (
            <Typography
              key={i}
              sx={{
                position: "absolute",
                fontSize: "24px",
                opacity: 0.2,
                top: i < 2 ? "5%" : "auto",
                bottom: i >= 2 ? "5%" : "auto",
                left: i % 2 === 0 ? "3%" : "auto",
                right: i % 2 !== 0 ? "3%" : "auto",
              }}
            >
              {emoji}
            </Typography>
          ))}
        </>
      )}

      {/* Small monogram circle */}
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: design.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 0.5,
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        }}
      >
        <FavoriteIcon sx={{ fontSize: 20, color: "#fff" }} />
      </Box>

      {/* Undangan text */}
      <Typography
        sx={{
          fontSize: "8px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: design.textLight
            ? "rgba(255,255,255,0.6)"
            : "rgba(0,0,0,0.45)",
          fontFamily: "'Georgia', serif",
        }}
      >
        Undangan Pernikahan
      </Typography>

      {/* Couple names */}
      <Typography
        sx={{
          fontSize: "18px",
          fontFamily: "'Georgia', serif",
          fontStyle: "italic",
          color: design.textLight ? "#fff" : design.palette[2] || "#333",
          textAlign: "center",
          lineHeight: 1.2,
          fontWeight: 600,
          textShadow: design.textLight ? "0 2px 8px rgba(0,0,0,0.4)" : "none",
        }}
      >
        Budi & Sari
      </Typography>

      {/* Divider line */}
      <Box
        sx={{
          width: "50%",
          height: "1px",
          background: design.accent,
          my: 0.5,
          opacity: 0.8,
        }}
      />

      {/* Date */}
      <Typography
        sx={{
          fontSize: "9px",
          color: design.textLight ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.5)",
          fontFamily: "'Georgia', serif",
          letterSpacing: "1px",
        }}
      >
        12 · 12 · 2025
      </Typography>

      {/* Location */}
      <Typography
        sx={{
          fontSize: "8px",
          color: design.textLight
            ? "rgba(255,255,255,0.55)"
            : "rgba(0,0,0,0.4)",
          textAlign: "center",
          letterSpacing: "0.5px",
          mt: 0.5,
        }}
      >
        Grand Ballroom · Jakarta
      </Typography>

      {/* Palette swatches */}
      <Box
        sx={{
          display: "flex",
          gap: "4px",
          position: "absolute",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {design.palette.map((color, i) => (
          <Box
            key={i}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: color,
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

// ─── DESIGN CARD ─────────────────────────────────────────────────────────────

function DesignCard({ design }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        border: "1.5px solid",
        borderColor: hovered ? design.palette[2] || "#ccc" : "rgba(0,0,0,0.08)",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hovered
          ? "translateY(-8px) scale(1.01)"
          : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 24px 48px -8px ${design.palette[2]}44`
          : "0 4px 16px rgba(0,0,0,0.06)",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      {/* Preview area */}
      <Box sx={{ p: 2.5, pb: 1.5, background: "rgba(0,0,0,0.015)" }}>
        <MiniInvite design={design} />
      </Box>

      {/* Info area */}
      <Box sx={{ p: 2.5, pt: 2 }}>
        {/* Tag & name row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: 700,
              color: "#1a1a1a",
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
            }}
          >
            {design.name}
          </Typography>
          <Chip
            label={design.tag}
            size="small"
            sx={{
              backgroundColor: design.tagColor + "18",
              color: design.tagColor,
              fontWeight: 700,
              fontSize: "10px",
              height: "22px",
              borderRadius: "6px",
              border: `1px solid ${design.tagColor}33`,
            }}
          />
        </Box>

        {/* Category */}
        <Typography
          sx={{
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#999",
            mb: 1,
          }}
        >
          {design.category}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: "13px",
            color: "#666",
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          {design.description}
        </Typography>

        {/* Features */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7, mb: 2.5 }}>
          {design.features.map((f) => (
            <Box
              key={f}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                backgroundColor: "#f5f5f5",
                borderRadius: "6px",
                px: 1,
                py: 0.4,
              }}
            >
              <CheckCircleOutlineIcon sx={{ fontSize: 11, color: "#4a7c59" }} />
              <Typography
                sx={{ fontSize: "11px", color: "#555", fontWeight: 500 }}
              >
                {f}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* CTA */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            background: design.accent,
            color: "#fff",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.5px",
            borderRadius: "10px",
            py: 1.2,
            textTransform: "none",
            boxShadow: `0 4px 16px ${design.palette[2]}55`,
            "&:hover": {
              background: design.accent,
              filter: "brightness(1.1)",
              boxShadow: `0 8px 24px ${design.palette[2]}66`,
            },
          }}
        >
          Pilih Desain Ini
        </Button>
      </Box>
    </Box>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const Design = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? designs
      : designs.filter((d) => d.category === activeCategory);

  return (
    <Box sx={{ minHeight: "100vh", background: "#fafaf8" }}>
      <Navbar />

      {/* ── HERO ── */}
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 6, md: 8 },
          px: { xs: 3, md: 6 },
          background:
            "linear-gradient(160deg, #fff9f0 0%, #fdf5e8 60%, #fff 100%)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #f5c84220 0%, transparent 70%)",
            top: -100,
            right: -100,
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #e91e8c10 0%, transparent 70%)",
            bottom: -80,
            left: -80,
            pointerEvents: "none",
          }}
        />

        <Chip
          icon={<AutoAwesomeIcon sx={{ fontSize: "14px !important" }} />}
          label="Koleksi Undangan Digital"
          sx={{
            background: "linear-gradient(135deg, #B8860B18, #f5c84218)",
            color: "#7b5e3a",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.5px",
            border: "1px solid #c9a96e44",
            mb: 3,
            px: 1,
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "32px", md: "52px" },
            fontWeight: 800,
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            color: "#1a1208",
            lineHeight: 1.15,
            mb: 1.5,
          }}
        >
          Temukan Desain
          <br />
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #B8860B, #f5c842)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Impianmu
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "15px", md: "18px" },
            color: "#777",
            maxWidth: 520,
            mx: "auto",
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          Setiap desain dibuat dengan penuh cinta — pilih yang paling
          mencerminkan kisah cintamu.
        </Typography>

        {/* Stats */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 3, md: 6 },
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "50+", label: "Pilihan Desain" },
            { value: "10rb+", label: "Pasangan Bahagia" },
            { value: "5★", label: "Rating Rata-rata" },
          ].map((stat) => (
            <Box key={stat.label} sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "#1a1208",
                  fontFamily: "'Georgia', serif",
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#999",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── FILTER TABS ── */}
      <Container maxWidth="lg" sx={{ pt: 5, pb: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <StarIcon sx={{ color: "#B8860B", fontSize: 18 }} />
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#999",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Filter Kategori
          </Typography>
        </Box>

        <Tabs
          value={activeCategory}
          onChange={(_, v) => setActiveCategory(v)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mt: 1.5,
            "& .MuiTabs-indicator": {
              background: "linear-gradient(135deg, #B8860B, #f5c842)",
              height: "3px",
              borderRadius: "2px",
            },
            "& .MuiTab-root": {
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "none",
              color: "#aaa",
              minWidth: "auto",
              px: 2.5,
              "&.Mui-selected": {
                color: "#1a1208",
              },
            },
          }}
        >
          {categories.map((cat) => (
            <Tab key={cat} label={cat} value={cat} />
          ))}
        </Tabs>

        <Box sx={{ height: "1px", background: "rgba(0,0,0,0.07)", mt: 0 }} />
      </Container>

      {/* ── GRID ── */}
      <Container maxWidth="lg" sx={{ pb: 12, pt: 3 }}>
        <Fade in key={activeCategory} timeout={400}>
          <Grid container spacing={3}>
            {filtered.map((design) => (
              <Grid item xs={12} sm={6} md={4} key={design.id}>
                <DesignCard design={design} />
              </Grid>
            ))}
          </Grid>
        </Fade>

        {filtered.length === 0 && (
          <Box sx={{ textAlign: "center", py: 12, color: "#aaa" }}>
            <Typography sx={{ fontSize: "48px", mb: 2 }}>🌿</Typography>
            <Typography sx={{ fontSize: "16px" }}>
              Desain tidak ditemukan.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Design;
