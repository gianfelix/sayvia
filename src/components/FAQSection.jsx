import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    q: "Berapa lama proses pembuatan undangan?",
    a: "Rata-rata 1–3 hari kerja tergantung paket dan jumlah revisi.",
  },
  {
    q: "Apakah bisa request desain khusus?",
    a: "Bisa. Untuk paket Pro, desain dapat dibuat custom sesuai keinginan.",
  },
  {
    q: "Berapa kali revisi yang diperbolehkan?",
    a: "Tergantung paket yang dipilih. Basic 1x, Medium 3x, dan Pro revisi bebas.",
  },
  {
    q: "Bagaimana cara pemesanannya?",
    a: "Cukup pilih paket, isi data, lakukan pembayaran, lalu kami proses.",
  },
  {
    q: "Apakah undangan bisa dibagikan ke banyak orang?",
    a: "Bisa. Undangan berupa link yang dapat dibagikan tanpa batas.",
  },
  {
    q: "Apakah undangan bisa diakses di semua perangkat?",
    a: "Ya, undangan responsif dan dapat dibuka di HP, tablet, maupun desktop.",
  },
];

const FAQSection = () => (
  <Box
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 3, md: 8 },
      background: "#FFFFFF",
    }}
  >
    <Typography
      variant="h4"
      fontWeight={800}
      mb={2}
      textAlign="center"
      color="#F97316"
    >
      Pertanyaan yang Sering Diajukan
    </Typography>

    <Typography
      color="text.secondary"
      textAlign="center"
      maxWidth={600}
      mx="auto"
      mb={6}
    >
      Temukan jawaban atas pertanyaan umum seputar layanan
      undangan digital SAYVIA.
    </Typography>

    <Box maxWidth={800} mx="auto">
      {faqs.map((faq, i) => (
        <Accordion
          key={i}
          disableGutters
          elevation={0}
          sx={{
            mb: 2,
            borderRadius: 3,
            border: "1px solid #FFE4D5",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#F97316" }} />
            }
          >
            <Typography fontWeight={600}>
              {faq.q}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography color="text.secondary">
              {faq.a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  </Box>
);

export default FAQSection;
