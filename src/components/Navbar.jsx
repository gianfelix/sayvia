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

const menuItems = ["Home", "Desain", "FAQ"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(8px)",
          borderBottom: "2px solid #FFE4D5",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LOGO */}
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{ color: "#F97316" }}
          >
            SAYVIA
          </Typography>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#374151",
                  fontWeight: 500,
                  mx: 0.5,
                  "&:hover": {
                    bgcolor: "#FFF4EC",
                    color: "#F97316",
                  },
                }}
              >
                {item}
              </Button>
            ))}

            <Button
              variant="contained"
              sx={{
                ml: 1,
                px: 3,
                borderRadius: 999,
                bgcolor: "#F97316",
                boxShadow: "0 6px 16px rgba(249,115,22,0.35)",
                "&:hover": {
                  bgcolor: "#EA580C",
                },
              }}
            >
              Pesan Sekarang
            </Button>
          </Box>

          {/* MOBILE HAMBURGER */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#F97316" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* DRAWER MOBILE */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 260,
            p: 3,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={800}
            mb={3}
            color="#F97316"
          >
            SAYVIA
          </Typography>

          <Stack spacing={2}>
            {menuItems.map((item) => (
              <Button
                key={item}
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  color: "#374151",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#FFF4EC",
                    color: "#F97316",
                  },
                }}
                onClick={() => setOpen(false)}
              >
                {item}
              </Button>
            ))}

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                borderRadius: 999,
                bgcolor: "#F97316",
                boxShadow:
                  "0 10px 25px rgba(249,115,22,0.35)",
                "&:hover": {
                  bgcolor: "#EA580C",
                },
              }}
              onClick={() => setOpen(false)}
            >
              Pesan Sekarang
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
