import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TemplateBlueSerenity from "../components/templates/TemplateBlueSerenity";
import TemplateTeaGreenBlossom from "../components/templates/TemplateTeaGreenBlossom";
import invitations from "../data/invitationData";

// Daftarkan semua template di sini
const templateMap = {
  "blue-serenity": TemplateBlueSerenity,
  "tea-green-blossom": TemplateTeaGreenBlossom,
  // tambahkan template lain seiring dibuat
};

export default function PreviewPage() {
  const { slug } = useParams();
  const data = invitations[slug];
  const TemplateComponent = templateMap[slug];

  if (!TemplateComponent) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
        <Typography sx={{ fontSize: "3rem" }}>🌸</Typography>
        <Typography sx={{ fontSize: "1rem", color: "#888" }}>Template tidak ditemukan.</Typography>
        <Button component={Link} to="/desain" startIcon={<ArrowBackIcon />} sx={{ textTransform: "none" }}>
          Kembali ke Galeri
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ background: "#e8ecf0", minHeight: "100vh", py: { xs: 0, md: 4 } }}>
      {/* Back button — hanya tampil di desktop */}
      <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", mb: 3 }}>
        <Button
          component={Link} to="/desain"
          startIcon={<ArrowBackIcon />}
          sx={{
            textTransform: "none", color: "#555", background: "#fff",
            borderRadius: "50px", px: 2.5, py: 1, boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            "&:hover": { background: "#f5f5f5" },
          }}>
          Kembali ke Galeri Desain
        </Button>
      </Box>

      {/* Phone frame wrapper — desktop shows frame, mobile fills screen */}
      <Box
        sx={{
          mx: "auto",
          width: { xs: "100%", md: 390 },
          minHeight: { xs: "100vh", md: "auto" },
          borderRadius: { xs: 0, md: "36px" },
          overflow: "hidden",
          boxShadow: { xs: "none", md: "0 24px 80px rgba(0,0,0,0.25)" },
          // Phone frame border on desktop
          border: { xs: "none", md: "10px solid #1a1a2e" },
          position: "relative",
        }}
      >
        {/* Notch — desktop only */}
        <Box sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          zIndex: 10, background: "#1a1a2e",
          width: 100, height: 22, borderRadius: "0 0 14px 14px",
          alignItems: "center", justifyContent: "center", gap: 0.8,
        }}>
          <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#333" }} />
          <Box sx={{ width: 40, height: 6, borderRadius: 3, background: "#333" }} />
        </Box>

        <TemplateComponent data={data} />
      </Box>

      {/* Label desktop */}
      <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", mt: 3 }}>
        <Typography sx={{ fontSize: "0.75rem", color: "#aaa", fontStyle: "italic" }}>
          Preview tampilan pada perangkat mobile
        </Typography>
      </Box>
    </Box>
  );
}