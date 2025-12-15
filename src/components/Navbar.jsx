import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => (
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
      {/* LOGO / BRAND */}
      <Typography variant="h6" fontWeight={800} sx={{ color: "#F97316" }}>
        SAYVIA
      </Typography>

      {/* MENU */}
      <Box>
        {["Home", "Desain", "FAQ"].map((item) => (
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

        {/* CTA */}
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
    </Toolbar>
  </AppBar>
);

export default Navbar;
