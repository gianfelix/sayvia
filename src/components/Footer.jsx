import { Box, Typography, Stack } from "@mui/material";
import { colors, size, weight } from "../theme/sayviaTheme";

const orange = "#e3710e";
const teal = "#e8f1f0";
const ash = "#808080";

const navItems = [
  { label: "Halaman Awal", id: "homepage" },
  { label: "Keunggulan", id: "value" },
  { label: "Harga", id: "package" },
  { label: "Desain", id: "design" },
  { label: "Alur Pemesanan", id: "order-flow" },
  { label: "FAQ", id: "faq" },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const contactItems = [
  { icon: "assets/icons/1_WA.webp",    alt: "wa",      label: "WhatsApp",  value: "0800 0000 0000" },
  { icon: "assets/icons/2_Email.webp", alt: "email",   label: "Email",     value: "sayvia.digital@gmail.com" },
  { icon: "assets/icons/3_Ig.webp",    alt: "ig",      label: "Instagram", value: "sayvia.id" },
  { icon: "assets/icons/4_Tt.webp",    alt: "tiktok",  label: "TikTok",    value: "@sayvia.id" },
  { icon: "assets/icons/5_web.webp",   alt: "web",     label: "Website",   value: "www.sayvia.my.id" },
];

const Footer = () => {
  return (
    <Box sx={{ background: teal, pt: { xs: 6, md: 7 } }}>

      {/* ── MAIN FOOTER ── */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "90%", lg: "80%" },
          mx: "auto",
          px: { xs: 3, sm: 5, md: 4 },
          pb: { xs: 6, md: 6 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1.5fr 0.5fr 0.5fr 1.2fr",
          },
          gap: { xs: 5, sm: 5, md: 6, lg: 10 },
        }}
      >
        {/* ── LOGO & DESC ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2.5, md: 4.5 },
            // on 2-col mobile grid, span both columns
            gridColumn: { xs: "1", sm: "1 / -1", md: "auto" },
          }}
        >
          <Box
            component="img"
            src="assets/icons/logo_say_hor.webp"
            alt="Sayvia Logo"
            sx={{
              width: { xs: 180, sm: 220, md: 280, lg: 400 },
              maxWidth: "100%",
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: "0.85rem", md: size.h3 },
              fontWeight: weight.medium,
              color: ash,
              lineHeight: 1.7,
              // hide manual <br> on small screens
              "& br": { display: { xs: "none", md: "block" } },
            }}
          >
            Sayvia hadir sebagai cara baru kirim undangan digital<br />{" "}
            yang <i>fresh</i>, <i>modern</i>, dan <i>anti-boring</i>. Semua dalam<br />
            satu tautan, praktis tanpa ribet.
          </Typography>
        </Box>

        {/* ── NAVIGASI ── */}
        <Box>
          <Typography
            sx={{
              fontWeight: weight.semiBold,
              color: orange,
              mb: 2,
              fontSize: { xs: "0.9rem", md: size.h2 },
            }}
          >
            NAVIGASI
          </Typography>

          <Stack spacing={1.2}>
            {navItems.map((item) => (
              <Typography
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  fontSize: { xs: "0.85rem", md: size.h3 },
                  fontWeight: weight.medium,
                  color: ash,
                  cursor: "pointer",
                  transition: "0.2s",
                  "&:hover": { color: orange },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* ── BANTUAN ── */}
        <Box>
          <Typography
            sx={{
              fontWeight: weight.semiBold,
              color: orange,
              mb: 2,
              fontSize: { xs: "0.9rem", md: size.h2 },
            }}
          >
            BANTUAN
          </Typography>

          <Stack spacing={1.2}>
            {["Syarat & Ketentuan", "Kebijakan Privasi"].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: { xs: "0.85rem", md: size.h3 },
                  fontWeight: weight.medium,
                  color: ash,
                  cursor: "pointer",
                  transition: "0.2s",
                  "&:hover": { color: orange },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* ── HUBUNGI KAMI ── */}
        {/* on 2-col mobile grid, span both columns */}
        <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1", md: "auto" } }}>
          <Typography
            sx={{
              fontWeight: weight.semiBold,
              color: orange,
              mb: 2,
              fontSize: { xs: "0.9rem", md: size.h2 },
            }}
          >
            HUBUNGI KAMI
          </Typography>

          {/* On sm: show as 2-column grid to use the full width nicely */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr" },
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            {contactItems.map(({ icon, alt, label, value }) => (
              <Stack key={alt} direction="row" spacing={1.5} alignItems="center">
                <Box
                  component="img"
                  src={icon}
                  alt={alt}
                  sx={{ width: { xs: 32, md: 40 }, flexShrink: 0 }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8rem", md: size.h3 },
                      fontWeight: weight.semiBold,
                      fontStyle: "italic",
                      color: ash,
                    }}
                  >
                    {label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8rem", md: size.h3 },
                      fontWeight: weight.medium,
                      color: ash,
                      wordBreak: "break-word",
                    }}
                  >
                    {value}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── COPYRIGHT ── */}
      <Box
        sx={{
          backgroundColor: colors.white,
          textAlign: "center",
          py: { xs: 2.5, md: 3 },
          color: "#494949",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.75rem", md: size.h3 },
            fontWeight: weight.medium,
          }}
        >
          Copyright © 2026 Sayvia • All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;