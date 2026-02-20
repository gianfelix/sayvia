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
    q: "Apa itu undangan digital dan bagaimana cara kerjanya?",
    a: "Undangan digital adalah undangan berbentuk website yang dapat dibagikan melalui link. Tamu cukup klik link untuk melihat detail acara.",
  },
  {
    q: "Apakah undangan digital Sayvia hanya untuk acara pernikahan?",
    a: "Tidak. Bisa digunakan untuk ulang tahun, aqiqah, lamaran, event kantor, dan acara lainnya.",
  },
  {
    q: "Apakah undangan digital Sayvia bisa ditambahkan lagu atau video?",
    a: "Bisa. Beberapa paket menyediakan fitur background music dan video sesuai ketentuan paket.",
  },
  {
    q: "Bagaimana cara kerja fitur kado cashless di undangan digital Sayvia?",
    a: "Tamu dapat mengirimkan hadiah secara digital melalui rekening atau e-wallet yang dicantumkan di undangan.",
  },
];

export default function FAQSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        background: "#fff",
      }}
    >
      {/* TITLE */}
      <Typography
        textAlign="center"
        sx={{
          fontSize: { xs: 40, md: 56 },
          fontWeight: 800,
          color: "#F97316",
          mb: 2,
        }}
      >
        FAQ
      </Typography>

      <Typography
        textAlign="center"
        fontSize={18}
        fontWeight={600}
        mb={1}
      >
        Masih bingung soal layanan undangan digital Sayvia?
      </Typography>

      <Typography
        textAlign="center"
        fontSize={18}
        fontWeight={600}
        mb={8}
      >
        Santai, cek semua jawabannya di FAQ ini ya
      </Typography>

      {/* FAQ GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            disableGutters
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1.5px solid #F97316",
              background: "#FFF7ED",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#F97316" }} />}
              sx={{
                px: 3,
                py: 2,
              }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                {/* NUMBER */}
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: "#F97316",
                    fontSize: 18,
                    minWidth: 40,
                  }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </Typography>

                {/* QUESTION */}
                <Typography fontWeight={600}>
                  {faq.q}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails sx={{ px: 7, pb: 3 }}>
              <Typography color="text.secondary">
                {faq.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}