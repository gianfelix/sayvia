import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const packages = [
  {
    name: "Basic",
    price: "199K",
    features: ["1 desain undangan", "1x revisi", "Publish cepat"],
  },
  {
    name: "Medium",
    price: "399K",
    features: ["3 desain pilihan", "3x revisi", "Support penuh"],
    highlight: true, // best seller
  },
  {
    name: "Pro",
    price: "699K",
    features: [
      "Custom desain eksklusif",
      "Revisi bebas",
      "Prioritas pengerjaan",
    ],
  },
];

const PackagesSection = () => (
  <Box
    sx={{
      py: { xs: 8, md: 12 },
      px: { xs: 3, md: 8 },
      background: "#FFFFFF",
      textAlign: "center",
    }}
  >
    <Typography
      variant="h4"
      fontWeight={800}
      mb={2}
      color="#F97316"
    >
      Paket Layanan
    </Typography>

    <Typography
      color="text.secondary"
      maxWidth={600}
      mx="auto"
      mb={6}
    >
      Pilih paket sesuai kebutuhanmu. Semua dirancang untuk tampil
      elegan dan mudah dibagikan.
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {packages.map((p, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              borderRadius: 4,
              border: p.highlight
                ? "2px solid #F97316"
                : "1px solid #FFE4D5",
              transform: p.highlight ? "scale(1.03)" : "none",
              transition: "all .3s ease",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 25px 50px rgba(249,115,22,0.25)",
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              {p.highlight && (
                <Chip
                  label="Best Seller"
                  sx={{
                    mb: 2,
                    bgcolor: "#F97316",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                />
              )}

              <Typography
                variant="h5"
                fontWeight={700}
                mb={1}
              >
                {p.name}
              </Typography>

              <Typography
                variant="h3"
                fontWeight={800}
                color="#F97316"
                mb={3}
              >
                {p.price}
              </Typography>

              <Box mb={4}>
                {p.features.map((f, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                      color: "text.secondary",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        fontSize: 18,
                        color: "#F97316",
                        mr: 1,
                      }}
                    />
                    <Typography>{f}</Typography>
                  </Box>
                ))}
              </Box>

              <Button
                variant={p.highlight ? "contained" : "outlined"}
                size="large"
                sx={{
                  borderRadius: 999,
                  px: 5,
                  fontWeight: 600,
                  ...(p.highlight && {
                    bgcolor: "#F97316",
                    boxShadow:
                      "0 10px 25px rgba(249,115,22,0.35)",
                    "&:hover": { bgcolor: "#EA580C" },
                  }),
                }}
              >
                Pilih Paket
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default PackagesSection;
