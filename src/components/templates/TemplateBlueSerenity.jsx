import { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";

/* ─── Google Fonts inject ───────────────────────────────────────────────── */
const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;500&display=swap');
`;

/* ─── SVG floral decorations (pure CSS/SVG, no external images) ─────────── */

// Top-right floral cluster — dusty blue & blush watercolor style via SVG
const FloralTopRight = () => (
  <svg viewBox="0 0 320 280" style={{ position: "absolute", top: 0, right: 0, width: 220, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
    {/* Large dusty blue peony */}
    <ellipse cx="230" cy="55" rx="52" ry="48" fill="#b8c9d9" opacity="0.45" />
    <ellipse cx="230" cy="55" rx="38" ry="35" fill="#c9d8e6" opacity="0.5" />
    <ellipse cx="230" cy="55" rx="26" ry="24" fill="#dce7f0" opacity="0.6" />
    <ellipse cx="230" cy="55" rx="16" ry="14" fill="#e8eff6" opacity="0.7" />
    {/* Petal details */}
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <ellipse key={i} cx={230 + 44 * Math.cos(deg * Math.PI / 180)} cy={55 + 40 * Math.sin(deg * Math.PI / 180)}
        rx="14" ry="10" fill="#b8c9d9" opacity="0.35" transform={`rotate(${deg}, ${230 + 44 * Math.cos(deg * Math.PI / 180)}, ${55 + 40 * Math.sin(deg * Math.PI / 180)})`} />
    ))}
    {/* Blush rose top */}
    <ellipse cx="155" cy="30" rx="38" ry="34" fill="#e8c4bb" opacity="0.4" />
    <ellipse cx="155" cy="30" rx="26" ry="23" fill="#f0d4cc" opacity="0.5" />
    <ellipse cx="155" cy="30" rx="16" ry="14" fill="#f8e4de" opacity="0.6" />
    {/* Gold leaf branches */}
    <path d="M260 10 Q280 40 240 70" stroke="#c9a86c" strokeWidth="1.2" fill="none" opacity="0.7" />
    <path d="M270 5 Q300 35 260 80" stroke="#c9a86c" strokeWidth="1" fill="none" opacity="0.6" />
    <path d="M290 20 Q310 50 275 90" stroke="#c9a86c" strokeWidth="1" fill="none" opacity="0.5" />
    {/* Leaf shapes gold */}
    {[[265,25,10],[280,38,15],[255,55,12],[285,65,14],[270,80,11]].map(([x,y,r], i) => (
      <ellipse key={i} cx={x} cy={y} rx={r} ry={r*0.45} fill="#c9a86c" opacity="0.55"
        transform={`rotate(${-30 + i*15}, ${x}, ${y})`} />
    ))}
    {/* Blue leaves */}
    <path d="M200 0 Q190 30 170 50" stroke="#7a9ab5" strokeWidth="1.5" fill="none" opacity="0.6" />
    <path d="M215 0 Q205 35 185 60" stroke="#7a9ab5" strokeWidth="1.2" fill="none" opacity="0.5" />
    {[[185,20,16],[195,40,13],[175,55,14]].map(([x,y,r], i) => (
      <ellipse key={i} cx={x} cy={y} rx={r} ry={r*0.42} fill="#8aafc7" opacity="0.5"
        transform={`rotate(${-60 + i*20}, ${x}, ${y})`} />
    ))}
    {/* Small blush buds */}
    <ellipse cx="120" cy="15" rx="16" ry="13" fill="#e8c4bb" opacity="0.45" />
    <ellipse cx="120" cy="15" rx="9" ry="7" fill="#f0d4cc" opacity="0.55" />
    <ellipse cx="100" cy="40" rx="12" ry="10" fill="#c9d8e6" opacity="0.5" />
  </svg>
);

// Bottom-left floral cluster
const FloralBottomLeft = () => (
  <svg viewBox="0 0 320 280" style={{ position: "absolute", bottom: 0, left: 0, width: 220, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
    {/* Large blue peony */}
    <ellipse cx="90" cy="225" rx="52" ry="48" fill="#b8c9d9" opacity="0.45" />
    <ellipse cx="90" cy="225" rx="38" ry="35" fill="#c9d8e6" opacity="0.5" />
    <ellipse cx="90" cy="225" rx="26" ry="24" fill="#dce7f0" opacity="0.6" />
    <ellipse cx="90" cy="225" rx="16" ry="14" fill="#e8eff6" opacity="0.7" />
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <ellipse key={i} cx={90 + 44 * Math.cos(deg * Math.PI / 180)} cy={225 + 40 * Math.sin(deg * Math.PI / 180)}
        rx="14" ry="10" fill="#b8c9d9" opacity="0.35" transform={`rotate(${deg}, ${90 + 44 * Math.cos(deg * Math.PI / 180)}, ${225 + 40 * Math.sin(deg * Math.PI / 180)})`} />
    ))}
    {/* Blush rose */}
    <ellipse cx="170" cy="255" rx="36" ry="32" fill="#e8c4bb" opacity="0.4" />
    <ellipse cx="170" cy="255" rx="24" ry="21" fill="#f0d4cc" opacity="0.5" />
    <ellipse cx="170" cy="255" rx="14" ry="12" fill="#f8e4de" opacity="0.6" />
    {/* Gold branches */}
    <path d="M60 270 Q40 240 80 210" stroke="#c9a86c" strokeWidth="1.2" fill="none" opacity="0.7" />
    <path d="M40 275 Q20 245 55 215" stroke="#c9a86c" strokeWidth="1" fill="none" opacity="0.6" />
    {[[50,255,10],[30,242,13],[45,225,11]].map(([x,y,r], i) => (
      <ellipse key={i} cx={x} cy={y} rx={r} ry={r*0.45} fill="#c9a86c" opacity="0.55"
        transform={`rotate(${30 - i*15}, ${x}, ${y})`} />
    ))}
    {/* Blue leaves */}
    <path d="M120 280 Q130 255 150 235" stroke="#7a9ab5" strokeWidth="1.5" fill="none" opacity="0.6" />
    {[[135,265,15],[148,248,13]].map(([x,y,r], i) => (
      <ellipse key={i} cx={x} cy={y} rx={r} ry={r*0.42} fill="#8aafc7" opacity="0.5"
        transform={`rotate(${60 - i*20}, ${x}, ${y})`} />
    ))}
    {/* Small buds */}
    <ellipse cx="200" cy="265" rx="14" ry="11" fill="#c9d8e6" opacity="0.5" />
    <ellipse cx="25" cy="200" rx="13" ry="10" fill="#e8c4bb" opacity="0.45" />
  </svg>
);

/* ─── Countdown ─────────────────────────────────────────────────────────── */
function useCountdown(targetDate) {
  const calc = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return time;
}

function CountdownBox({ value, label }) {
  return (
    <Box sx={{ textAlign: "center", minWidth: 52 }}>
      <Box sx={{
        background: "rgba(184,201,217,0.25)",
        border: "1px solid rgba(184,201,217,0.5)",
        borderRadius: "8px",
        px: 1.5, py: 1,
        backdropFilter: "blur(4px)",
      }}>
        <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "1.6rem", fontWeight: 500, color: "#3d6080", lineHeight: 1 }}>
          {String(value).padStart(2, "0")}
        </Typography>
      </Box>
      <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.62rem", letterSpacing: "2px", color: "#7a9ab5", mt: 0.5, textTransform: "uppercase" }}>
        {label}
      </Typography>
    </Box>
  );
}

/* ─── Section divider ornament ───────────────────────────────────────────── */
const OrnamentDivider = ({ color = "#c9a86c" }) => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, my: 1.5 }}>
    <Box sx={{ width: 40, height: "1px", background: `linear-gradient(to right, transparent, ${color})` }} />
    <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: color, opacity: 0.7 }} />
    <Box sx={{ width: 6, height: 6, transform: "rotate(45deg)", background: color, opacity: 0.9 }} />
    <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: color, opacity: 0.7 }} />
    <Box sx={{ width: 40, height: "1px", background: `linear-gradient(to left, transparent, ${color})` }} />
  </Box>
);

/* ─── Fade-in animation wrapper ─────────────────────────────────────────── */
function FadeIn({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <Box ref={ref} sx={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
    }}>
      {children}
    </Box>
  );
}

/* ─── Main Template ─────────────────────────────────────────────────────── */
export default function TemplateBlueSerenity({ data }) {
  const countdown = useCountdown(data?.date || "2026-03-29");

  const d = data || {
    couple: { groom: "Sayden", bride: "Viana", groomFull: "Muhammad Sayden Pratama", brideFull: "Viana Kusuma Dewi", groomParents: "Bpk. Ahmad & Ibu Rina", brideParents: "Bpk. Hendra & Ibu Lestari" },
    date: "2026-03-29",
    dayName: "MINGGU",
    time: "09.00 WIB – selesai",
    venue: "PURWOKERTO",
    venueFull: "Grand Ballroom Hotel Java Heritage, Purwokerto",
    mapsUrl: "#",
    loveStory: "Kami pertama bertemu di sebuah kesempatan yang tak terduga, dan sejak saat itu hati kami tak pernah terpisah. Bersama, kami menemukan arti cinta yang sesungguhnya.",
  };

  const dateObj = new Date(d.date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const dayName = d.dayName || ["MINGGU","SENIN","SELASA","RABU","KAMIS","JUMAT","SABTU"][dateObj.getDay()];

  return (
    <>
      <style>{FONTS}</style>
      <Box sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(160deg, #f0f5fb 0%, #e8eef6 40%, #f5f0f5 100%)",
        fontFamily: "'Cormorant Garamond', serif",
        position: "relative",
        overflowX: "hidden",
      }}>

        {/* ── SECTION 1: COVER ── */}
        <Box sx={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", px: 4, pb: 6 }}>
          <FloralTopRight />
          <FloralBottomLeft />

          {/* Marble texture overlay */}
          <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.6) 0%, transparent 70%)", pointerEvents: "none" }} />

          {/* Arch frame */}
          <Box sx={{
            position: "relative", zIndex: 1,
            width: "75%", maxWidth: 280,
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(184,201,217,0.4)",
            borderRadius: "50% 50% 8px 8px / 30% 30% 8px 8px",
            px: 3, pt: 5, pb: 4,
            textAlign: "center",
            boxShadow: "0 8px 40px rgba(120,160,190,0.15)",
          }}>
            <FadeIn delay={0.1}>
              <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.72rem", letterSpacing: "5px", color: "#5a7a95", mb: 0.5 }}>
                UNDANGAN
              </Typography>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.68rem", fontStyle: "italic", color: "#8aa0b5", letterSpacing: "1px", mb: 2 }}>
                Bismillahirrahmanirrahim
              </Typography>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.72rem", color: "#6a8aa0", lineHeight: 1.7, mb: 2.5 }}>
                Dengan ini kami mengundang<br />
                Bapak/Ibu/Saudara/i untuk<br />
                hadir pada pernikahan:
              </Typography>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Typography sx={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.8rem", color: "#8B6914", lineHeight: 1.1, mb: 0 }}>
                {d.couple.groom}
              </Typography>
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#7a9ab5", fontStyle: "italic" }}>
                &
              </Typography>
              <Typography sx={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.8rem", color: "#8B6914", lineHeight: 1.1 }}>
                {d.couple.bride}
              </Typography>
            </FadeIn>

            <OrnamentDivider />

            <FadeIn delay={0.5}>
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.68rem", color: "#8aa0b5", mb: 0.5 }}>
                Yang akan dilaksanakan pada:
              </Typography>
              <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.78rem", letterSpacing: "3px", color: "#3d6080", fontWeight: 500 }}>
                {dayName} &nbsp;|&nbsp; {String(day).padStart(2,"0")} &nbsp;|&nbsp; {String(month).padStart(2,"0")} &nbsp;|&nbsp; {year}
              </Typography>
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.72rem", color: "#7a9ab5", mt: 0.5, fontStyle: "italic" }}>
                Pukul {d.time}
              </Typography>
              <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "2px", color: "#3d6080", mt: 0.5 }}>
                {d.venue}
              </Typography>
            </FadeIn>

            <FadeIn delay={0.6}>
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.65rem", color: "#8aa0b5", mt: 2, lineHeight: 1.6, fontStyle: "italic" }}>
                Merupakan suatu kehormatan<br />
                Bapak/Ibu/Saudara/i berkenan hadir<br />
                untuk memberikan do'a restu
              </Typography>
            </FadeIn>
          </Box>
        </Box>

        {/* ── SECTION 2: COUPLE DETAIL ── */}
        <Box sx={{ px: 5, py: 6, textAlign: "center", background: "rgba(255,255,255,0.4)", backdropFilter: "blur(6px)" }}>
          <FadeIn>
            <OrnamentDivider />
            <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.7rem", letterSpacing: "4px", color: "#5a7a95", mb: 3 }}>
              MEMPELAI
            </Typography>
          </FadeIn>

          {/* Groom */}
          <FadeIn delay={0.1}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.2rem", color: "#8B6914" }}>
                {d.couple.groom}
              </Typography>
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#3d6080", fontWeight: 600 }}>
                {d.couple.groomFull || d.couple.groom}
              </Typography>
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.72rem", color: "#8aa0b5", fontStyle: "italic" }}>
                Putra dari {d.couple.groomParents}
              </Typography>
            </Box>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Typography sx={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.8rem", color: "#b8c9d9", mb: 2 }}>&</Typography>
          </FadeIn>

          {/* Bride */}
          <FadeIn delay={0.2}>
            <Box>
              <Typography sx={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.2rem", color: "#8B6914" }}>
                {d.couple.bride}
              </Typography>
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#3d6080", fontWeight: 600 }}>
                {d.couple.brideFull || d.couple.bride}
              </Typography>
              <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.72rem", color: "#8aa0b5", fontStyle: "italic" }}>
                Putri dari {d.couple.brideParents}
              </Typography>
            </Box>
          </FadeIn>
          <OrnamentDivider />
        </Box>

        {/* ── SECTION 3: COUNTDOWN ── */}
        <Box sx={{ px: 4, py: 5, textAlign: "center" }}>
          <FadeIn>
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.72rem", letterSpacing: "3px", color: "#8aa0b5", textTransform: "uppercase", mb: 3 }}>
              Menuju Hari Bahagia
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5 }}>
              <CountdownBox value={countdown.d} label="Hari" />
              <Box sx={{ fontFamily: "'Cormorant Garamond'", fontSize: "1.6rem", color: "#b8c9d9", alignSelf: "center", mb: 2 }}>:</Box>
              <CountdownBox value={countdown.h} label="Jam" />
              <Box sx={{ fontFamily: "'Cormorant Garamond'", fontSize: "1.6rem", color: "#b8c9d9", alignSelf: "center", mb: 2 }}>:</Box>
              <CountdownBox value={countdown.m} label="Menit" />
              <Box sx={{ fontFamily: "'Cormorant Garamond'", fontSize: "1.6rem", color: "#b8c9d9", alignSelf: "center", mb: 2 }}>:</Box>
              <CountdownBox value={countdown.s} label="Detik" />
            </Box>
          </FadeIn>
        </Box>

        {/* ── SECTION 4: VENUE ── */}
        <Box sx={{ px: 5, py: 5, textAlign: "center", background: "rgba(184,201,217,0.12)" }}>
          <FadeIn>
            <OrnamentDivider />
            <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.7rem", letterSpacing: "4px", color: "#5a7a95", mb: 2 }}>
              WAKTU & TEMPAT
            </Typography>
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600, color: "#3d6080", mb: 0.5 }}>
              Akad Nikah
            </Typography>
            <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "2px", color: "#5a7a95" }}>
              {dayName}, {String(day).padStart(2,"0")} / {String(month).padStart(2,"0")} / {year}
            </Typography>
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.82rem", color: "#7a9ab5", fontStyle: "italic", mt: 0.5 }}>
              Pukul {d.time}
            </Typography>
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.88rem", color: "#3d6080", mt: 1, fontWeight: 600 }}>
              {d.venueFull || d.venue}
            </Typography>
            <Box
              component="a" href={d.mapsUrl} target="_blank" rel="noreferrer"
              sx={{
                display: "inline-flex", alignItems: "center", gap: 0.8, mt: 2,
                px: 2.5, py: 1, borderRadius: "50px",
                border: "1px solid #b8c9d9",
                color: "#3d6080", textDecoration: "none",
                fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "1.5px",
                transition: "all 0.2s",
                "&:hover": { background: "#b8c9d9", color: "#fff" },
              }}>
              📍 BUKA PETA
            </Box>
            <OrnamentDivider />
          </FadeIn>
        </Box>

        {/* ── SECTION 5: LOVE STORY ── */}
        <Box sx={{ px: 6, py: 6, textAlign: "center" }}>
          <FadeIn>
            <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.7rem", letterSpacing: "4px", color: "#5a7a95", mb: 2 }}>
              LOVE STORY
            </Typography>
            <Typography sx={{ fontFamily: "'Great Vibes', cursive", fontSize: "2rem", color: "#8B6914", mb: 1 }}>
              Our Story
            </Typography>
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.88rem", color: "#6a8aa0", lineHeight: 1.9, fontStyle: "italic" }}>
              "{d.loveStory}"
            </Typography>
            <OrnamentDivider />
          </FadeIn>
        </Box>

        {/* ── SECTION 6: RSVP ── */}
        <Box sx={{ px: 5, py: 6, textAlign: "center", background: "rgba(184,201,217,0.12)" }}>
          <FadeIn>
            <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.7rem", letterSpacing: "4px", color: "#5a7a95", mb: 1 }}>
              KONFIRMASI KEHADIRAN
            </Typography>
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.82rem", color: "#7a9ab5", fontStyle: "italic", mb: 3 }}>
              Kehadiran Anda adalah kebahagiaan kami
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, alignItems: "center" }}>
              {/* Hadir */}
              <Box component="button"
                sx={{
                  width: "65%", py: 1.2, borderRadius: "50px",
                  background: "linear-gradient(135deg, #7a9ab5, #b8c9d9)",
                  border: "none", cursor: "pointer",
                  fontFamily: "'Cinzel', serif", fontSize: "0.68rem", letterSpacing: "2px", color: "#fff",
                  boxShadow: "0 4px 16px rgba(120,160,190,0.3)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": { transform: "translateY(-2px)", boxShadow: "0 6px 20px rgba(120,160,190,0.4)" },
                }}>
                ✓ &nbsp; HADIR
              </Box>
              {/* Tidak hadir */}
              <Box component="button"
                sx={{
                  width: "65%", py: 1.2, borderRadius: "50px",
                  background: "transparent",
                  border: "1px solid #b8c9d9", cursor: "pointer",
                  fontFamily: "'Cinzel', serif", fontSize: "0.68rem", letterSpacing: "2px", color: "#7a9ab5",
                  transition: "all 0.2s",
                  "&:hover": { background: "rgba(184,201,217,0.2)" },
                }}>
                ✗ &nbsp; TIDAK HADIR
              </Box>
            </Box>
          </FadeIn>
        </Box>

        {/* ── SECTION 7: CLOSING ── */}
        <Box sx={{ position: "relative", px: 5, py: 8, textAlign: "center", overflow: "hidden" }}>
          {/* Decorative top right small */}
          <Box sx={{ position: "absolute", top: 0, right: 0, width: 120, opacity: 0.5 }}>
            <FloralTopRight />
          </Box>
          <FadeIn>
            <OrnamentDivider />
            <Typography sx={{ fontFamily: "'Great Vibes', cursive", fontSize: "2rem", color: "#8B6914", mb: 1 }}>
              {d.couple.groom} & {d.couple.bride}
            </Typography>
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.78rem", color: "#7a9ab5", fontStyle: "italic", lineHeight: 1.8 }}>
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia<br />
              menciptakan untukmu istri-istri dari jenismu sendiri,<br />
              supaya kamu cenderung dan merasa tenteram kepadanya."
            </Typography>
            <Typography sx={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "2px", color: "#b8c9d9", mt: 1 }}>
              QS. AR-RUM: 21
            </Typography>
            <OrnamentDivider />
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.72rem", color: "#8aa0b5", mt: 2, fontStyle: "italic" }}>
              Dibuat dengan ❤ oleh <span style={{ color: "#8B6914" }}>Sayvia</span>
            </Typography>
          </FadeIn>
        </Box>

      </Box>
    </>
  );
}