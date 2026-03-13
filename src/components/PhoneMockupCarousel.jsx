import { useState, useEffect, useRef } from "react";

// Taruh file gambar di src/assets/ lalu import di sini:
import phoneMockup from "./Mockup_HP.png";
import slide1 from "./1.png";
import slide2 from "./2.png";
import slide3 from "./3.png";


// Atau kalau gambar di folder public/, pakai string path langsung:
// const phoneMockup = "/images/mobile-phone-mockup.png";
// const slide1 = "/images/1.png";

const slides = [slide1, slide2, slide3];

export default function PhoneMockupCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const goTo = (index) => {
    setCurrent((index + slides.length) % slides.length);
  };

  // Auto-geser setiap 5 detik
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Cleanup saat komponen unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  // Reset timer saat dot diklik manual
  const handleDotClick = (index) => {
    clearInterval(intervalRef.current);
    goTo(index);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  return (
    <div
      style={{
        background: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {/* Wrapper utama */}
      <div style={{ position: "relative", width: 520, height: 520 }}>
        {/* Area layar — di bawah gambar HP */}
        <div
          style={{
            position: "absolute",
            top: "6.5%",
            left: "18%",
            width: "50%",
            height: "86%",
            overflow: "hidden",
            zIndex: 5,
            // Sesuaikan rotateY dengan kemiringan mockup HP kamu
            transform: "perspective(800px) rotateY(-14deg) rotateX(2deg)",
            transformOrigin: "center center",
            borderRadius: 4,
          }}
        >
          {/* Track carousel */}
          <div
            style={{
              display: "flex",
              height: "100%",
              transform: `translateX(-${current * 100}%)`,
              transition: "transform 0.6s cubic-bezier(.4,0,.2,1)",
              willChange: "transform",
            }}
          >
            {slides.map((src, i) => (
              <div
                key={i}
                style={{ minWidth: "100%", height: "100%", flexShrink: 0 }}
              >
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gambar frame HP — di atas carousel (zIndex lebih tinggi) */}
        <img
          src={phoneMockup}
          alt="Phone Mockup"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Dot indicator */}
        <div
          style={{
            position: "absolute",
            bottom: -36,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
            zIndex: 20,
          }}
        >
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: i === current ? "#fff" : "#555",
                transform: i === current ? "scale(1.3)" : "scale(1)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
