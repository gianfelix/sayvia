import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSayviaTheme } from "../theme/SayviaThemeProvider";
import { size, weight } from "../theme/sayviaTheme";
import { useNavigate, useLocation } from "react-router-dom";
import NavbarOrderDialog from "./NavbarOrderDialog";

const navItems = [
  { label: "Harga", id: "package", type: "scroll" },
  { label: "Desain", type: "route", path: "/desain" },
  { label: "FAQ", id: "faq", type: "scroll" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const { colors } = useSayviaTheme();
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item) => {
    if (item.type === "scroll") {
      if (location.pathname !== "/") {
        navigate("/#" + item.id);
        return;
      }
      const element = document.getElementById(item.id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    if (item.type === "route") navigate(item.path);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ctaSx = {
    borderRadius: "7px",
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: size.h3,
    fontWeight: weight.semiBold,
    textTransform: "none",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    willChange: "transform",
    "&:hover": { backgroundColor: colors.buttonHover, transform: "translateY(-2px)" },
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}
        sx={{
          backgroundColor: colors.backgroundPastel,
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", width: "90%", mx: "auto" }}>
          {/* LOGO */}
          <IconButton href="/" disableRipple sx={{ p: 0, backgroundColor: "transparent", "&:hover": { backgroundColor: "transparent" } }}>
            <img src="/assets/icons/logo_say_hor.webp" alt="Sayvia" style={{ height: 36 }} />
          </IconButton>

          {/* MENU DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "clamp(3px, 1.2vw, 21px)", alignItems: "center" }}>
            {navItems.map((item) => (
              <Button key={item.label} onClick={() => handleNavigation(item)} disableRipple disableElevation
                sx={{
                  position: "relative", overflow: "hidden", color: colors.primary,
                  fontSize: size.h3, fontWeight: weight.medium, textTransform: "none",
                  border: "none", boxShadow: "none", background: "transparent",
                  transition: "color 0.3s ease",
                  "&::before": { content: '""', position: "absolute", inset: 0, backgroundColor: colors.primary, transform: "scaleY(0)", transformOrigin: "bottom", transition: "transform 0.3s ease", zIndex: -1 },
                  "&:hover::before": { transform: "scaleY(1)" },
                  "&:hover": { color: colors.white, fontWeight: weight.semiBold },
                }}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* CTA DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button onClick={() => setOrderOpen(true)} sx={{ px: 2, ...ctaSx }}>
              Pesan Sekarang!
            </Button>
          </Box>

          {/* HAMBURGER */}
          <IconButton sx={{ display: { xs: "flex", md: "none" }, color: colors.primary }} onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ── MOBILE DRAWER ── */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.45)",
            boxShadow: "-8px 0 32px rgba(0, 0, 0, 0.15)",
            width: 195,
          },
        }}
        slotProps={{
          backdrop: {
            sx: { backgroundColor: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" },
          },
        }}
      >
        <Box sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mx: "auto", mb: 4 }}>
            <IconButton href="/" disableRipple sx={{ p: 0, backgroundColor: "transparent", "&:hover": { backgroundColor: "transparent" } }}>
              <img src="/assets/icons/Navhum_Logo.webp" alt="Sayvia" style={{ height: 38 }} />
            </IconButton>
          </Box>

          <Stack spacing={1} mt={7} mb={4} sx={{ flex: 1 }}>
            {navItems.map((item) => (
              <Button key={item.label} fullWidth
                onClick={() => { handleNavigation(item); setDrawerOpen(false); }}
                sx={{
                  justifyContent: "flex-start", color: colors.primary, fontWeight: weight.semiBold,
                  fontSize: size.h3, textTransform: "none", borderRadius: "10px", px: 2, py: 1.2,
                  background: "rgba(255,255,255,0.5)", backdropFilter: "blur(8px)",
                  transition: "background 0.2s ease, transform 0.2s ease",
                  "&:hover": { background: "rgba(255,255,255,0.1)", transform: "translateX(4px)" },
                }}>
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* CTA mobile — tutup drawer lalu buka dialog */}
          <Button
            onClick={() => { setDrawerOpen(false); setTimeout(() => setOrderOpen(true), 200); }}
            sx={{ alignSelf: "center", width: "100%", py: 1.3, ...ctaSx, boxShadow: `0 4px 16px ${colors.primary}55` }}>
            Pesan Sekarang!
          </Button>
        </Box>
      </Drawer>

      {/* ── ORDER DIALOG ── */}
      <NavbarOrderDialog open={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  );
};

export default Navbar;