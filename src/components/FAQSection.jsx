import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors, size, weight } from "../theme/sayviaTheme";
import faqs from "../data/faqData";
//import { type } from "@testing-library/user-event/dist/type";

const leftColumn = faqs
  .map((faq, index) => ({ ...faq, originalIndex: index }))
  .filter((_, index) => index % 2 === 0);

const rightColumn = faqs
  .map((faq, index) => ({ ...faq, originalIndex: index }))
  .filter((_, index) => index % 2 !== 0);

export default function FAQSection() {
  const [expanded, setExpanded] = useState(null);
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
            fontSize: size.h0,
            fontWeight: weight.bold,
            color: colors.primary,
            mb: 1,
          }}
        >
          FAQ
        </Typography>

        <Typography
          textAlign="center"
          fontSize={size.h2}
          fontWeight={weight.semiBold}
          mb={0}
        >
          Masih bingung soal layanan undangan digital Sayvia?
        </Typography>

        <Typography
          textAlign="center"
          fontSize={size.h2}
          fontWeight={weight.semiBold}
          mb={10}
        >
          Santai, cek semua jawabannya di FAQ ini ya
        </Typography>

        {/* FAQ GRID */}
        <Box
          sx={{
            maxWidth: "85%",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          {/* LEFT COLUMN */}
          <Box
            sx={{
              flex: 1,
            }}
          >
            {leftColumn.map((faq, index) => (
              <Accordion
                //defaultExpanded
                key={index}
                expanded={expanded === faq.originalIndex} // ← tambahkan ini
                onChange={handleChange(faq.originalIndex)} // ← tambahkan ini
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
                    // minHeight: 350,
                    px: 3,
                    py: 2,
                    borderRadius: "inherit",
                    backgroundColor: colors.white,

                    "&.Mui-expanded": {
                      minHeight: "unset",
                    },

                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    {/* NUMBER */}
                    <Typography
                      sx={{
                        fontWeight: weight.semiBold,
                        fontSize: size.h3,
                        color: colors.primary,
                      }}
                    >
                      {(faq.originalIndex + 1).toString().padStart(2, "0")}
                    </Typography>

                    {/* QUESTION */}
                    <Typography
                      sx={{
                        fontSize: size.h3,
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
                    px: 7,
                    pb: 3,
                    backgroundColor: colors.white,
                  }}
                >
                  {faq.a.map((item, i) => {
                    const isObject =
                      typeof item === "object" &&
                      item !== null &&
                      "type" in item;
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
                        {/* Bullet Dot */}
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
                            fontSize: size.h3,
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
            ))}
          </Box>
          {/* RIGHT COLUMN */}
          <Box
            sx={{
              flex: 1,
            }}
          >
            {rightColumn.map((faq, index) => (
              <Accordion
                //defaultExpanded
                key={index}
                expanded={expanded === faq.originalIndex} // ← tambahkan ini
                onChange={handleChange(faq.originalIndex)} // ← tambahkan ini
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
                    px: 3,
                    py: 2,
                    borderRadius: "inherit",
                    backgroundColor: colors.white,

                    "&.Mui-expanded": {
                      minHeight: "unset",
                    },

                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    {/* NUMBER */}
                    <Typography
                      sx={{
                        fontWeight: weight.semiBold,
                        fontSize: size.h3,
                        color: colors.primary,
                      }}
                    >
                      {(faq.originalIndex + 1).toString().padStart(2, "0")}
                    </Typography>

                    {/* QUESTION */}
                    <Typography
                      sx={{
                        fontSize: size.h3,
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
                    px: 7,
                    pb: 3,
                    backgroundColor: colors.white,
                  }}
                >
                  {faq.a.map((item, i) => {
                    const isObject =
                      typeof item === "object" &&
                      item !== null &&
                      "type" in item;
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
                        {/* Bullet Dot */}
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
                            fontSize: size.h3,
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
            ))}
          </Box>
        </Box>
      </Box>
    </section>
  );
}
