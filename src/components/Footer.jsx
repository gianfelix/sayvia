import { Box, Typography, Stack } from "@mui/material";
import { colors, size, weight } from "../theme/sayviaTheme";

const orange = "#e3710e";
const teal = "#e8f1f0";
const ash = "#808080";

const Footer = () => {
  return (
    <Box sx={{ background: teal, pt: 7 }}>
      {/* MAIN FOOTER */}
      <Box
        sx={{
          maxWidth: "80%",
          mx: "auto",
          px: 3,
          pb: 6,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.5fr 0.5fr 0.5fr 1.2fr",
          },
          gap: 10,
        }}
      >
        {/* LEFT - LOGO & DESC */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4.5,
          }}
        >
          <img src="assets/icons/logo_say_hor.webp" width={400} alt="Sayvia Logo" />

          <Typography sx={{ fontSize: size.h3, fontWeight: weight.medium, color: ash, lineHeight: 1.7 }}>
            Sayvia hadir sebagai cara baru kirim undangan digital<br/> {" "}
            yang <i>fresh</i>, <i>modern</i>, dan <i>anti-boring</i>. Semua dalam<br/>
            satu tautan, praktis tanpa ribet.
          </Typography>
        </Box>

        {/* NAVIGASI */}
        <Box>
          <Typography
            sx={{ fontWeight: weight.semiBold, color: orange, mb: 2, fontSize: size.h2 }}
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
                sx={{ fontSize: size.h3, fontWeight: weight.medium, color: ash, cursor: "pointer" }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* BANTUAN */}
        <Box>
          <Typography
            sx={{ fontWeight: weight.semiBold, color: orange, mb: 2, fontSize: size.h2 }}
          >
            BANTUAN
          </Typography>

         <Stack spacing={1.2}>
            {[
              "Syarat & Ketentuan",
              "Kebijakan Privasi",
            ].map((item) => (
              <Typography
                key={item}
                sx={{ fontSize: size.h3, fontWeight: weight.medium, color: ash, cursor: "pointer" }}
              >
                {item}
            </Typography>
          ))}
        </Stack>
      </Box>

        {/* HUBUNGI KAMI */}
        <Box>
          <Typography
            sx={{ fontWeight: weight.semiBold, color: orange, mb: 2, fontSize: size.h2 }}
          >
            HUBUNGI KAMI
          </Typography>

          <Stack spacing={2}>
            {/* WA */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  //background: orange,
                  //width: 40,
                  //height: 40,
                  //borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="assets/icons/1_WA.webp" width={40} alt="wa" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: size.h3, fontWeight: weight.semiBold, fontStyle: "italic", ml: -0.3, color: ash }}>
                  WhatsApp
                </Typography>
                <Typography sx={{ fontSize: size.h3, fontWeight: weight.medium, color: ash }}>0800 0000 0000</Typography>
              </Box>
            </Stack>

            {/* EMAIL */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  //background: orange,
                  //width: 36,
                  //height: 36,
                  //borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="assets/icons/2_Email.webp" width={40} alt="email" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: size.h3, fontWeight: weight.semiBold, fontStyle: "italic", ml: -0.3, color: ash }}>
                  Email
                </Typography>
                <Typography sx={{ fontSize: size.h3, fontWeight: weight.medium, color: ash }}>
                  sayvia.digital@gmail.com
                </Typography>
              </Box>
            </Stack>

            {/* IG */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  //background: orange,
                  //width: 36,
                  //height: 36,
                  //borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="assets/icons/3_Ig.webp" width={40} alt="ig" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: size.h3, fontWeight: weight.semiBold, fontStyle: "italic", ml: -0.3, color: ash }}>
                  Instagram
                </Typography>
                <Typography sx={{ fontSize: size.h3, fontWeight: weight.medium, color: ash }}>sayvia.id</Typography>
              </Box>
            </Stack>

            {/* TIKTOK */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  //background: orange,
                  //width: 36,
                  //height: 36,
                  //borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="assets/icons/4_Tt.webp" width={40} alt="tiktok" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: size.h3, fontWeight: weight.semiBold, fontStyle: "italic", ml: -0.3, color: ash }}>
                  TikTok
                </Typography>
                <Typography sx={{ fontSize: size.h3, fontWeight: weight.medium, color: ash }}>@sayvia.id</Typography>
              </Box>
            </Stack>

            {/* WEBSITE */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  //background: orange,
                  //width: 36,
                  //height: 36,
                  //borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="assets/icons/5_web.webp" width={40} alt="web" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: size.h3, fontWeight: weight.semiBold, fontStyle: "italic", ml: -0.3, color: ash }}>
                  Website
                </Typography>
                <Typography sx={{ fontSize: size.h3, fontWeight: weight.medium, color: ash }}>www.sayvia.my.id</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* COPYRIGHT */}
      <Box
        sx={{
          //borderTop: `1px solid ${colors.white}`,
          backgroundColor: colors.white,
          textAlign: "center",
          py: 3,
          fontSize: 14,
          color: "#494949",
        }}
      >
        <Typography sx={{ fontSize: size.h3, fontWeight: weight.medium }}>Copyright © 2026 Sayvia • All Rights Reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
