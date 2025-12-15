import { Box } from "@mui/material";
import { useEffect, useState } from "react";

// placeholder sementara (bebas, nanti tinggal ganti)
const placeholderImages = [
  "https://picsum.photos/400/700?random=1",
  "https://picsum.photos/400/700?random=2",
  "https://picsum.photos/400/700?random=5",
];

const DesignCarousel = ({ interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholderImages.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <Box
      sx={{
        width: { xs: 260, sm: 300, md: 340 },
        height: { xs: 440, sm: 480, md: 540 },
        borderRadius: 6,
        overflow: "hidden",
        boxShadow: "0 30px 60px rgba(0,0,0,0.18)",
        bgcolor: "#fff",
        border: "1px solid #FFE4D5",
        position: "relative",
      }}
    >
      {placeholderImages.map((img, i) => (
        <Box
          key={i}
          component="img"
          src={img}
          alt={`Preview ${i + 1}`}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: index === i ? 1 : 0,
            transition: "opacity .8s ease-in-out",
          }}
        />
      ))}
    </Box>
  );
};

export default DesignCarousel;
