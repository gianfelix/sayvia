import { Box, Typography, Stack } from "@mui/material";

const orange = "#F97316";
const teal = "#14B8A6";

const Footer = () => {
  return (
    <Box sx={{ background: "#F1F5F9", pt: 8 }}>
      {/* MAIN FOOTER */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: 3,
          pb: 6,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.5fr 1fr 1fr 1.2fr",
          },
          gap: 5,
        }}
      >
        {/* LEFT - LOGO & DESC */}
        <Box>
          <Typography
            sx={{
              fontSize: 40,
              fontWeight: 900,
              color: teal,
              mb: 2,
            }}
          >
            Say<span style={{ color: orange }}>via</span>
          </Typography>

          <Typography sx={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
            Sayvia hadir sebagai cara baru kirim undangan digital yang{" "}
            <b>fresh, modern, dan anti-boring</b>. Semua dalam satu tautan,
            praktis tanpa ribet.
          </Typography>
        </Box>

        {/* NAVIGASI */}
        <Box>
          <Typography
            sx={{ fontWeight: 800, color: orange, mb: 2, fontSize: 16 }}
          >
            NAVIGASI
          </Typography>

          <Stack spacing={1.2}>
            {[
              "Halaman Awal",
              "Keunggulan",
              "Harga",
              "Desain",
              "Alur Pemesanan",
              "FAQ",
            ].map((item) => (
              <Typography
                key={item}
                sx={{ fontSize: 14, color: "#555", cursor: "pointer" }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* BANTUAN */}
        <Box>
          <Typography
            sx={{ fontWeight: 800, color: orange, mb: 2, fontSize: 16 }}
          >
            BANTUAN
          </Typography>

          <Stack spacing={1.2}>
            <Typography sx={{ fontSize: 14, color: "#555" }}>
              Syarat & Ketentuan
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#555" }}>
              Kebijakan Privasi
            </Typography>
          </Stack>
        </Box>

        {/* HUBUNGI KAMI */}
        <Box>
          <Typography
            sx={{ fontWeight: 800, color: orange, mb: 2, fontSize: 16 }}
          >
            HUBUNGI KAMI
          </Typography>

          <Stack spacing={2}>
            {/* WA */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  background: orange,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="assets/icons/1_WA.webp" width={18} alt="wa" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12, color: "#777" }}>
                  WhatsApp
                </Typography>
                <Typography sx={{ fontSize: 14 }}>0800 0000 0000</Typography>
              </Box>
            </Stack>

            {/* EMAIL */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  background: orange,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="assets/icons/2_Email.webp" width={18} alt="email" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12, color: "#777" }}>
                  Email
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  sayvia.digital@gmail.com
                </Typography>
              </Box>
            </Stack>

            {/* IG */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  background: orange,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="assets/icons/3_Ig.webp" width={18} alt="ig" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12, color: "#777" }}>
                  Instagram
                </Typography>
                <Typography sx={{ fontSize: 14 }}>@sayvia.id</Typography>
              </Box>
            </Stack>

            {/* TIKTOK */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  background: orange,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="assets/icons/4_Tt.webp" width={18} alt="tiktok" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12, color: "#777" }}>
                  TikTok
                </Typography>
                <Typography sx={{ fontSize: 14 }}>@sayvia.id</Typography>
              </Box>
            </Stack>

            {/* WEBSITE */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  background: orange,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="assets/icons/5_web.webp" width={18} alt="web" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12, color: "#777" }}>
                  Website
                </Typography>
                <Typography sx={{ fontSize: 14 }}>www.sayvia.my.id</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* COPYRIGHT */}
      <Box
        sx={{
          borderTop: "1px solid #E5E7EB",
          textAlign: "center",
          py: 3,
          fontSize: 14,
          color: "#666",
        }}
      >
        Copyright © 2026 Sayvia • All Rights Reserved
      </Box>
    </Box>
  );
};

export default Footer;
