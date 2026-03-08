import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors, size, weight } from "../theme/sayviaTheme";
import faqs from "../data/faqData";

const leftColumn = faqs
  .map((faq, index) => ({ ...faq, originalIndex: index }))
  .filter((_, index) => index % 2 === 0);

const rightColumn = faqs
  .map((faq, index) => ({ ...faq, originalIndex: index }))
  .filter((_, index) => index % 2 !== 0);

const allFaqs = faqs.map((faq, index) => ({ ...faq, originalIndex: index }));

// ── Reusable accordion item ──────────────────────────────────────────────────
function FaqItem({ faq, expanded, onChange }) {
  return (
    <Accordion
      expanded={expanded === faq.originalIndex}
      onChange={onChange(faq.originalIndex)}
      disableGutters
      elevation={0}
      square={true}
      sx={{
        mb: 3,
        borderRadius: 3.5,
        overflow: "hidden",
        border: `2px solid ${colors.primary}`,
        background: colors.white,
        "&:before": { display: "none" },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: colors.primary }} />}
        sx={{
          px: { xs: 2, md: 3 },
          py: { xs: 1.5, md: 2 },
          borderRadius: "inherit",
          backgroundColor: colors.white,
          "&.Mui-expanded": { minHeight: "unset" },
          "& .MuiAccordionSummary-content": { margin: 0 },
        }}
      >
        <Box display="flex" alignItems="center" gap={{ xs: 1.5, md: 2 }}>
          {/* NUMBER */}
          <Typography
            sx={{
              fontWeight: weight.semiBold,
              fontSize: { xs: "0.85rem", md: size.h3 },
              color: colors.primary,
              flexShrink: 0,
            }}
          >
            {(faq.originalIndex + 1).toString().padStart(2, "0")}
          </Typography>

          {/* QUESTION */}
          <Typography
            sx={{
              fontSize: { xs: "0.85rem", md: size.h3 },
              fontWeight: weight.semiBold,
              color: colors.primary,
              lineHeight: 1.4,
            }}
          >
            {faq.q}
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          px: { xs: 3, md: 7 },
          pb: 3,
          backgroundColor: colors.white,
        }}
      >
        {faq.a.map((item, i) => {
          const isObject = typeof item === "object" && item !== null && "type" in item;
          const isBullet = isObject && item.type === "bullet";
          const content = isObject ? item.content : item;

          return (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                mb: 1.2,
                pl: isBullet ? 2 : 0,
              }}
            >
              {isBullet && (
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: colors.primary,
                    mt: "8px",
                    mr: 1.5,
                    flexShrink: 0,
                  }}
                />
              )}
              <Typography
                sx={{
                  fontSize: { xs: "0.82rem", md: size.h3 },
                  fontWeight: weight.medium,
                  lineHeight: 1.6,
                }}
              >
                {content}
              </Typography>
            </Box>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function FAQSection() {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (originalIndex) => (event, isExpanded) => {
    setExpanded(isExpanded ? originalIndex : null);
  };

  return (
    <section id="faq">
      <Box
        sx={{
          pt: { xs: 8, md: 1 },
          pb: { xs: 8, md: 18 },
          px: { xs: 3, md: 8 },
          background: colors.backgroundLight,
        }}
      >
        {/* TITLE */}
        <Typography
          textAlign="center"
          sx={{
            fontSize: { xs: "1.6rem", md: size.h0 },
            fontWeight: weight.bold,
            color: colors.primary,
            mb: 1,
          }}
        >
          FAQ
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            fontSize: { xs: "0.9rem", md: size.h2 },
            fontWeight: weight.semiBold,
            mb: 0,
          }}
        >
          Masih bingung soal layanan undangan digital Sayvia?
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            fontSize: { xs: "0.9rem", md: size.h2 },
            fontWeight: weight.semiBold,
            mb: { xs: 5, md: 10 },
          }}
        >
          Santai, cek semua jawabannya di FAQ ini ya
        </Typography>

        {/* ── FAQ GRID ── */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "85%" },
            mx: "auto",
          }}
        >
          {isDesktop ? (
            // DESKTOP — 2 kolom, urutan zig-zag (ganjil kiri, genap kanan)
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 3,
                alignItems: "start",
              }}
            >
              <Box>
                {leftColumn.map((faq, index) => (
                  <FaqItem key={index} faq={faq} expanded={expanded} onChange={handleChange} />
                ))}
              </Box>
              <Box>
                {rightColumn.map((faq, index) => (
                  <FaqItem key={index} faq={faq} expanded={expanded} onChange={handleChange} />
                ))}
              </Box>
            </Box>
          ) : (
            // MOBILE — 1 kolom, urutan 1,2,3,4,5,6,...
            <Box>
              {allFaqs.map((faq, index) => (
                <FaqItem key={index} faq={faq} expanded={expanded} onChange={handleChange} />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </section>
  );
}