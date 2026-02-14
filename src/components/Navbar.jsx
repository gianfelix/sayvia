import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSayviaTheme } from "../theme/SayviaThemeProvider";

const menuItems = ["Harga", "Desain", "FAQ"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { colors } = useSayviaTheme();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: colors.backgroundLight,
          // backdropFilter: "blur(8px)",
          // borderBottom: `2px solid ${colors.primary}20`,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            width: "85%",
            mx: "auto",
          }}
        >
          {/* LOGO */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton href="/" _hover={{ backgroundColor: "transparent" }}>
              <img
                src="/assets/icons/logo_say_hor.png"
                alt="Sayvia"
                style={{ height: 36 }}
              />
            </IconButton>
          </Box>

          {/* MENU DESKTOP */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: colors.primary,
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: `${colors.primary}10`,
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* CTA DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                px: 3,
                borderRadius: "10px",
                backgroundColor: colors.primary,
                color: colors.white,
                fontWeight: 700,
                textTransform: "none",
                // boxShadow: "0 6px 16px rgba(249,115,22,0.35)",
                "&:hover": {
                  backgroundColor: "#EA580C",
                },
              }}
            >
              Pesan Sekarang!
            </Button>
          </Box>

          {/* MOBILE ICON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: colors.primary }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 3 }}>
          <Typography
            sx={{
              fontWeight: 800,
              mb: 3,
              color: colors.primary,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            SAYVIA
          </Typography>

          <Stack spacing={2}>
            {menuItems.map((item) => (
              <Button
                key={item}
                fullWidth
                onClick={() => setOpen(false)}
                sx={{
                  justifyContent: "flex-start",
                  color: colors.primary,
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: `${colors.primary}10`,
                  },
                }}
              >
                {item}
              </Button>
            ))}

            <Button
              fullWidth
              onClick={() => setOpen(false)}
              sx={{
                mt: 2,
                borderRadius: 14,
                backgroundColor: colors.primary,
                color: colors.white,
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "0 10px 25px rgba(249,115,22,0.35)",
                "&:hover": {
                  backgroundColor: "#EA580C",
                },
              }}
            >
              Pesan Sekarang!
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
