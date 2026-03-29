/**
 * AO-1.jsx — All Out Premium Wedding Invitation Template
 * Path: src/components/templates/all-out/AO-1.jsx
 *
 * Fitur (sesuai paket All Out):
 * ✅ Love Story
 * ✅ Kirim Ucapan & Doa (Guestbook)
 * ✅ Peta Lokasi (Google Maps embed)
 * ✅ Background Music REQUEST
 * ✅ Foto max.10
 * ✅ Video max.1
 * ✅ Hitung Mundur (Countdown Timer)
 * ✅ Konfirmasi Kehadiran (RSVP)
 * ✅ Angpao Digital
 * ✅ Tambah ke Pengingat/Kalender
 * ✅ FREE max.100 Nama Tamu (amplopdigital)
 * ✅ FREE URL Khusus
 * ✅ Galeri Foto (opsional) max.5
 */

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Google Fonts ─────────────────────────────────────────────────────────── */
const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@300;400;600;700&family=Dancing+Script:wght@600;700&display=swap');
`;

/* ─── Keyframes ────────────────────────────────────────────────────────────── */
const KEYFRAMES = `
@keyframes fadeUp   { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
@keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
@keyframes scaleIn  { from { opacity:0; transform:scale(0.85); } to { opacity:1; transform:scale(1); } }
@keyframes float    { 0%,100%{transform:translateY(0px) rotate(0deg);} 33%{transform:translateY(-12px) rotate(1deg);} 66%{transform:translateY(-6px) rotate(-1deg);} }
@keyframes shimmer  { 0%{background-position:-200% center;} 100%{background-position:200% center;} }
@keyframes pulse    { 0%,100%{opacity:1;} 50%{opacity:.5;} }
@keyframes spin     { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
@keyframes petals   { 0%{transform:translateY(-10px) rotate(0deg) scale(1); opacity:0;} 10%{opacity:.8;} 90%{opacity:.4;} 100%{transform:translateY(110vh) rotate(720deg) scale(.3); opacity:0;} }
@keyframes revealLine { from{width:0;} to{width:100%;} }
@keyframes heartBeat { 0%,100%{transform:scale(1);} 14%{transform:scale(1.2);} 28%{transform:scale(1);} 42%{transform:scale(1.15);} 70%{transform:scale(1);} }
@keyframes glowPulse { 0%,100%{box-shadow:0 0 20px rgba(212,175,55,0.3);} 50%{box-shadow:0 0 40px rgba(212,175,55,0.7);} }
@keyframes slideInLeft { from{opacity:0;transform:translateX(-30px);} to{opacity:1;transform:translateX(0);} }
@keyframes slideInRight { from{opacity:0;transform:translateX(30px);} to{opacity:1;transform:translateX(0);} }
@keyframes bounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
@keyframes ripple  { 0%{transform:scale(0);opacity:1;} 100%{transform:scale(4);opacity:0;} }
`;

/* ─── Theme ────────────────────────────────────────────────────────────────── */
const T = {
  black:  "#0a0a0a",
  dark:   "#121212",
  card:   "#1a1a1a",
  gold:   "#d4af37",
  goldL:  "#f0d060",
  goldD:  "#b8960c",
  rose:   "#c9847a",
  cream:  "#fdf8f0",
  white:  "#ffffff",
  muted:  "rgba(255,255,255,0.55)",
  border: "rgba(212,175,55,0.25)",
};

/* ─── Helpers ──────────────────────────────────────────────────────────────── */
const goldGrad  = `linear-gradient(135deg, ${T.goldD}, ${T.gold}, ${T.goldL}, ${T.gold}, ${T.goldD})`;
const shimmerGrad = `linear-gradient(90deg, ${T.goldD} 0%, ${T.goldL} 25%, ${T.white} 50%, ${T.goldL} 75%, ${T.goldD} 100%)`;

/* ─── Floating petals ──────────────────────────────────────────────────────── */
const PETAL_COUNT = 12;
function FloatingPetals() {
  const petals = Array.from({ length: PETAL_COUNT }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${6 + Math.random() * 8}s`,
    size: 8 + Math.random() * 14,
    emoji: ["🌸","🌹","✨","💫","🌺","🍀"][Math.floor(Math.random() * 6)],
  }));
  return (
    <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
      {petals.map(p => (
        <div key={p.id} style={{
          position:"absolute", left:p.left, top:"-20px", fontSize:p.size,
          animation:`petals ${p.duration} ${p.delay} infinite linear`,
          opacity:0,
        }}>{p.emoji}</div>
      ))}
    </div>
  );
}

/* ─── Intersection observer hook ───────────────────────────────────────────── */
function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── Animated section wrapper ─────────────────────────────────────────────── */
function Appear({ children, delay = 0, anim = "fadeUp", style = {} }) {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      animation: visible ? `${anim} 0.9s ease ${delay}s both` : "none",
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── Gold divider ─────────────────────────────────────────────────────────── */
function GoldDivider({ style = {} }) {
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, padding:"12px 0", ...style }}>
      <div style={{ flex:1, height:1, background:`linear-gradient(to right, transparent, ${T.gold})` }} />
      <span style={{ fontSize:14, color:T.gold }}>✦</span>
      <span style={{ fontSize:18, color:T.gold }}>❖</span>
      <span style={{ fontSize:14, color:T.gold }}>✦</span>
      <div style={{ flex:1, height:1, background:`linear-gradient(to left, transparent, ${T.gold})` }} />
    </div>
  );
}

/* ─── Section title ────────────────────────────────────────────────────────── */
function SectionTitle({ title, sub }) {
  return (
    <div style={{ textAlign:"center", marginBottom:28 }}>
      {sub && <p style={{ fontFamily:"'Josefin Sans'", fontSize:10, letterSpacing:5, color:T.gold, textTransform:"uppercase", margin:"0 0 8px" }}>{sub}</p>}
      <h2 style={{ fontFamily:"'Playfair Display'", fontSize:28, fontWeight:900, color:T.white, margin:0, fontStyle:"italic" }}>{title}</h2>
      <GoldDivider />
    </div>
  );
}

/* ─── Countdown ────────────────────────────────────────────────────────────── */
function useCountdown(target) {
  const calc = () => {
    const d = new Date(target) - new Date();
    if (d <= 0) return { h:0, m:0, s:0, days:0 };
    return { days:Math.floor(d/86400000), h:Math.floor(d%86400000/3600000), m:Math.floor(d%3600000/60000), s:Math.floor(d%60000/1000) };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); });
  return t;
}

function CDBox({ val, label }) {
  return (
    <div style={{ textAlign:"center", flex:1 }}>
      <div style={{
        background:"rgba(212,175,55,0.08)", border:`1px solid ${T.border}`, borderRadius:12,
        padding:"14px 8px", backdropFilter:"blur(10px)",
        animation:"glowPulse 3s infinite",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg, rgba(212,175,55,0.05), transparent)`, pointerEvents:"none" }} />
        <div style={{
          fontFamily:"'Playfair Display'", fontSize:32, fontWeight:900, color:T.gold,
          lineHeight:1, textShadow:`0 0 20px ${T.gold}66`,
        }}>
          {String(val).padStart(2,"0")}
        </div>
      </div>
      <div style={{ fontFamily:"'Josefin Sans'", fontSize:9, letterSpacing:3, color:T.muted, textTransform:"uppercase", marginTop:6 }}>{label}</div>
    </div>
  );
}

/* ─── Music player ─────────────────────────────────────────────────────────── */
function MusicPlayer({ music }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play().catch(()=>{}); setPlaying(true); setStarted(true); }
  };

  return (
    <div style={{ position:"fixed", bottom:24, right:20, zIndex:999 }}>
      {audioRef.current && <audio ref={audioRef} src={music?.src} loop />}
      <button onClick={toggle} style={{
        width:48, height:48, borderRadius:"50%", border:`2px solid ${T.gold}`,
        background: playing ? goldGrad : "rgba(10,10,10,0.8)",
        cursor:"pointer", backdropFilter:"blur(10px)",
        display:"flex", alignItems:"center", justifyContent:"center", fontSize:18,
        animation: playing ? "glowPulse 2s infinite" : "none",
        transition:"all 0.3s", boxShadow:"0 4px 20px rgba(0,0,0,0.5)",
      }}>
        {playing ? "⏸" : "▶"}
      </button>
      {!started && (
        <div style={{ position:"absolute", bottom:54, right:0, background:"rgba(10,10,10,0.9)", border:`1px solid ${T.border}`, borderRadius:8, padding:"6px 10px", whiteSpace:"nowrap", backdropFilter:"blur(10px)" }}>
          <p style={{ margin:0, fontFamily:"'Josefin Sans'", fontSize:10, color:T.gold }}>♪ {music?.title || "Putar Musik"}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Gallery ──────────────────────────────────────────────────────────────── */
function Gallery({ photos }) {
  const [selected, setSelected] = useState(null);
  if (!photos?.length) return null;
  return (
    <div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:8 }}>
        {photos.slice(0, 5).map((src, i) => (
          <div key={i} onClick={() => setSelected(src)} style={{
            borderRadius:12, overflow:"hidden", cursor:"zoom-in",
            border:`1px solid ${T.border}`, aspectRatio:"1",
            gridColumn: i === 0 ? "1 / -1" : "auto",
            gridRow: i === 0 ? "span 1" : "auto",
            position:"relative",
            transition:"transform 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform="scale(1.02)"; e.currentTarget.style.boxShadow=`0 8px 30px rgba(212,175,55,0.3)`; }}
          onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="none"; }}>
            <img src={src} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.3), transparent)", opacity:0 }}
              onMouseEnter={e=>e.currentTarget.style.opacity=1} onMouseLeave={e=>e.currentTarget.style.opacity=0} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position:"fixed", inset:0, background:"rgba(0,0,0,0.95)", zIndex:9999,
          display:"flex", alignItems:"center", justifyContent:"center",
          animation:"fadeIn 0.2s ease",
        }}>
          <img src={selected} alt="" style={{ maxWidth:"90vw", maxHeight:"90vh", objectFit:"contain", borderRadius:12, border:`2px solid ${T.border}` }} />
          <button onClick={() => setSelected(null)} style={{ position:"absolute", top:20, right:20, background:"none", border:`1px solid ${T.gold}`, color:T.gold, width:36, height:36, borderRadius:"50%", cursor:"pointer", fontSize:18 }}>✕</button>
        </div>
      )}
    </div>
  );
}

/* ─── Video ────────────────────────────────────────────────────────────────── */
function VideoSection({ video }) {
  if (!video) return null;
  return (
    <div style={{ borderRadius:16, overflow:"hidden", border:`2px solid ${T.border}`, position:"relative" }}>
      <video src={video} controls style={{ width:"100%", display:"block", background:T.black }} />
      <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:goldGrad }} />
    </div>
  );
}

/* ─── RSVP ─────────────────────────────────────────────────────────────────── */
function RSVP({ guestName }) {
  const [status, setStatus] = useState(null);
  const [name, setName] = useState(guestName || "");
  const [pax, setPax] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (!name || !status) return;
    setSubmitted(true);
  };

  if (submitted) return (
    <div style={{ textAlign:"center", padding:"32px 16px", animation:"scaleIn 0.5s ease" }}>
      <div style={{ fontSize:48, marginBottom:12, animation:"heartBeat 1.3s infinite" }}>💌</div>
      <p style={{ fontFamily:"'Playfair Display'", fontSize:22, color:T.gold, fontStyle:"italic", margin:"0 0 8px" }}>Terima Kasih!</p>
      <p style={{ fontFamily:"'Josefin Sans'", fontSize:13, color:T.muted }}>
        {status === "hadir" ? `Kami senang ${name} bisa hadir bersama kami 🥂` : `Terima kasih atas do'a dan perhatian ${name} 🙏`}
      </p>
    </div>
  );

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nama kamu..."
        style={{ width:"100%", padding:"12px 16px", borderRadius:10, border:`1px solid ${T.border}`, background:"rgba(255,255,255,0.05)", color:T.white, fontFamily:"'Josefin Sans'", fontSize:13, outline:"none", boxSizing:"border-box" }} />

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
        {["hadir","tidak"].map(s => (
          <button key={s} onClick={() => setStatus(s)} style={{
            padding:"12px", borderRadius:10, border:`2px solid ${status===s ? T.gold : T.border}`,
            background: status===s ? `rgba(212,175,55,0.15)` : "rgba(255,255,255,0.03)",
            color: status===s ? T.gold : T.muted, cursor:"pointer",
            fontFamily:"'Josefin Sans'", fontSize:12, fontWeight:700, letterSpacing:1, textTransform:"uppercase",
            transition:"all 0.2s",
          }}>
            {s === "hadir" ? "✓ Hadir" : "✗ Tidak Hadir"}
          </button>
        ))}
      </div>

      {status === "hadir" && (
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <span style={{ fontFamily:"'Josefin Sans'", fontSize:12, color:T.muted }}>Jumlah tamu:</span>
          {[1,2,3,4,5].map(n => (
            <button key={n} onClick={() => setPax(n)} style={{
              width:32, height:32, borderRadius:"50%", border:`1px solid ${pax===n ? T.gold : T.border}`,
              background: pax===n ? `rgba(212,175,55,0.2)` : "transparent",
              color: pax===n ? T.gold : T.muted, cursor:"pointer", fontSize:12, fontWeight:700,
            }}>{n}</button>
          ))}
        </div>
      )}

      <button onClick={submit} style={{
        padding:"14px", borderRadius:12, border:"none",
        background: goldGrad, backgroundSize:"200%",
        color:T.black, cursor:"pointer", fontFamily:"'Josefin Sans'", fontSize:13, fontWeight:700, letterSpacing:2, textTransform:"uppercase",
        animation:"shimmer 3s linear infinite",
        transition:"opacity 0.2s", opacity: name && status ? 1 : 0.5,
      }}>
        Kirim Konfirmasi
      </button>
    </div>
  );
}

/* ─── Guestbook ────────────────────────────────────────────────────────────── */
function Guestbook() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    { name:"Rizky & Dinda", msg:"Selamat ya! Semoga langgeng dan bahagia selalu 💕", time:"2 jam lalu" },
    { name:"Bunda Sari", msg:"Turut berbahagia, semoga menjadi keluarga yang sakinah mawaddah wa rahmah 🙏", time:"3 jam lalu" },
  ]);

  const submit = () => {
    if (!name || !msg) return;
    setMessages(prev => [{ name, msg, time:"Baru saja" }, ...prev]);
    setName(""); setMsg("");
  };

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nama kamu..."
        style={{ width:"100%", padding:"11px 14px", borderRadius:10, border:`1px solid ${T.border}`, background:"rgba(255,255,255,0.05)", color:T.white, fontFamily:"'Josefin Sans'", fontSize:13, outline:"none", boxSizing:"border-box" }} />
      <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Tulis ucapan & do'a..." rows={3}
        style={{ width:"100%", padding:"11px 14px", borderRadius:10, border:`1px solid ${T.border}`, background:"rgba(255,255,255,0.05)", color:T.white, fontFamily:"'Josefin Sans'", fontSize:13, outline:"none", resize:"none", boxSizing:"border-box" }} />
      <button onClick={submit} style={{
        padding:"12px", borderRadius:10, border:`1px solid ${T.gold}`,
        background:"rgba(212,175,55,0.1)", color:T.gold, cursor:"pointer",
        fontFamily:"'Josefin Sans'", fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase",
        transition:"all 0.2s",
      }}
      onMouseEnter={e=>{ e.currentTarget.style.background=`rgba(212,175,55,0.25)`; }}
      onMouseLeave={e=>{ e.currentTarget.style.background="rgba(212,175,55,0.1)"; }}>
        Kirim Ucapan ✉
      </button>

      {/* Messages */}
      <div style={{ display:"flex", flexDirection:"column", gap:10, maxHeight:280, overflowY:"auto", paddingRight:4 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ padding:"12px 14px", borderRadius:12, background:"rgba(255,255,255,0.04)", border:`1px solid ${T.border}`, animation:`fadeUp 0.4s ease ${i*0.1}s both` }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
              <span style={{ fontFamily:"'Josefin Sans'", fontSize:12, fontWeight:700, color:T.gold }}>{m.name}</span>
              <span style={{ fontFamily:"'Josefin Sans'", fontSize:10, color:T.muted }}>{m.time}</span>
            </div>
            <p style={{ margin:0, fontFamily:"'Cormorant Garamond'", fontSize:14, color:"rgba(255,255,255,0.8)", lineHeight:1.6 }}>{m.msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Angpao digital ───────────────────────────────────────────────────────── */
function Angpao({ accounts }) {
  const [copied, setCopied] = useState(null);
  const copy = (text, key) => {
    navigator.clipboard.writeText(text).catch(()=>{});
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
      <p style={{ fontFamily:"'Cormorant Garamond'", fontSize:14, color:T.muted, textAlign:"center", margin:"0 0 8px", lineHeight:1.7, fontStyle:"italic" }}>
        Bagi yang ingin memberikan hadiah pernikahan, kami membuka rekening digital berikut:
      </p>
      {(accounts || []).map((acc, i) => (
        <div key={i} style={{ padding:"14px 16px", borderRadius:14, background:"rgba(212,175,55,0.06)", border:`1px solid ${T.border}`, display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'Josefin Sans'", fontSize:10, letterSpacing:2, color:T.gold, textTransform:"uppercase", marginBottom:4 }}>{acc.bank}</div>
            <div style={{ fontFamily:"'Playfair Display'", fontSize:18, fontWeight:700, color:T.white, letterSpacing:2 }}>{acc.number}</div>
            <div style={{ fontFamily:"'Josefin Sans'", fontSize:11, color:T.muted }}>{acc.name}</div>
          </div>
          <button onClick={() => copy(acc.number, i)} style={{
            padding:"8px 14px", borderRadius:8, border:`1px solid ${copied===i ? T.gold : T.border}`,
            background: copied===i ? "rgba(212,175,55,0.2)" : "rgba(255,255,255,0.04)",
            color: copied===i ? T.gold : T.muted, cursor:"pointer", fontFamily:"'Josefin Sans'", fontSize:11, fontWeight:700,
            transition:"all 0.2s",
          }}>
            {copied===i ? "✓ Disalin" : "Salin"}
          </button>
        </div>
      ))}
    </div>
  );
}

/* ─── Add to Calendar ──────────────────────────────────────────────────────── */
function AddToCalendar({ data }) {
  const start = data?.date?.replace(/-/g,"") + "T090000";
  const end   = data?.date?.replace(/-/g,"") + "T170000";
  const title = encodeURIComponent(`Pernikahan ${data?.couple?.groom} & ${data?.couple?.bride}`);
  const loc   = encodeURIComponent(data?.venueFull || data?.venue || "");
  const gUrl  = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${loc}`;

  return (
    <a href={gUrl} target="_blank" rel="noreferrer" style={{
      display:"flex", alignItems:"center", justifyContent:"center", gap:10,
      padding:"14px", borderRadius:12, border:`1px solid ${T.border}`,
      background:"rgba(255,255,255,0.04)", color:T.white, textDecoration:"none",
      fontFamily:"'Josefin Sans'", fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase",
      transition:"all 0.3s",
    }}
    onMouseEnter={e=>{ e.currentTarget.style.background=`rgba(212,175,55,0.1)`; e.currentTarget.style.borderColor=T.gold; }}
    onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor=T.border; }}>
      📅 &nbsp; Tambah ke Kalender
    </a>
  );
}

/* ─── Cover (envelope reveal) ──────────────────────────────────────────────── */
function Cover({ data, onOpen }) {
  const [opened, setOpened] = useState(false);

  const open = () => { setOpened(true); setTimeout(onOpen, 900); };

  return (
    <div style={{
      position:"fixed", inset:0, zIndex:1000, background:`linear-gradient(160deg, #0d0d0d 0%, #1a1208 50%, #0d0d0d 100%)`,
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      padding:32,
      transition: opened ? "opacity 0.8s ease 0.5s" : "none",
      opacity: opened ? 0 : 1,
      pointerEvents: opened ? "none" : "auto",
    }}>
      {/* Stars bg */}
      <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
        {Array.from({length:40}).map((_,i) => (
          <div key={i} style={{ position:"absolute", left:`${Math.random()*100}%`, top:`${Math.random()*100}%`, width:2, height:2, borderRadius:"50%", background:T.gold, opacity:Math.random()*0.7+0.1, animation:`pulse ${2+Math.random()*3}s infinite ${Math.random()*3}s` }} />
        ))}
      </div>

      <Appear anim="scaleIn">
        <div style={{ textAlign:"center", maxWidth:340 }}>
          {/* Envelope icon */}
          <div style={{ fontSize:56, marginBottom:16, animation:"float 4s ease-in-out infinite" }}>💌</div>

          {/* Gold line */}
          <div style={{ width:60, height:2, background:goldGrad, margin:"0 auto 20px", borderRadius:2 }} />

          <p style={{ fontFamily:"'Josefin Sans'", fontSize:10, letterSpacing:5, color:T.gold, textTransform:"uppercase", margin:"0 0 12px" }}>Undangan Pernikahan</p>
          <h1 style={{ fontFamily:"'Dancing Script'", fontSize:42, color:T.white, margin:"0 0 4px", fontWeight:700 }}>
            {data?.couple?.groom}
          </h1>
          <p style={{ fontFamily:"'Playfair Display'", fontSize:22, color:T.gold, margin:"0 0 4px", fontStyle:"italic" }}>&</p>
          <h1 style={{ fontFamily:"'Dancing Script'", fontSize:42, color:T.white, margin:"0 0 24px", fontWeight:700 }}>
            {data?.couple?.bride}
          </h1>

          <p style={{ fontFamily:"'Cormorant Garamond'", fontSize:14, color:T.muted, fontStyle:"italic", margin:"0 0 32px", lineHeight:1.7 }}>
            {data?.guestName ? `Kepada Yth.\n${data.guestName}` : "Kepada Yth.\nBapak/Ibu/Saudara/i"}
          </p>

          <button onClick={open} style={{
            padding:"14px 36px", borderRadius:50, border:"none",
            background:goldGrad, backgroundSize:"200%",
            color:T.black, cursor:"pointer", fontFamily:"'Josefin Sans'", fontSize:13, fontWeight:700, letterSpacing:3, textTransform:"uppercase",
            animation:"shimmer 2s linear infinite, glowPulse 2s infinite",
            boxShadow:`0 8px 30px rgba(212,175,55,0.4)`,
          }}>
            Buka Undangan ✨
          </button>
        </div>
      </Appear>
    </div>
  );
}

/* ─── Main Template ────────────────────────────────────────────────────────── */
export default function AO1({ data }) {
  const [opened, setOpened] = useState(false);

  const d = data || {
    couple: { groom:"Aditya", bride:"Maharani", groomFull:"Aditya Putra Wijaya", brideFull:"Maharani Kusuma Dewi", groomParents:"Bpk. Hendra & Ibu Lestari", brideParents:"Bpk. Ahmad & Ibu Fatimah" },
    date:"2026-09-12", dayName:"SABTU", time:"10.00 WIB – selesai",
    venue:"Grand Ballroom Shangri-La Hotel", venueFull:"Grand Ballroom Shangri-La Hotel, Jakarta Pusat",
    mapsUrl:"https://maps.google.com/",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.2043966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sShangri-La+Hotel+Jakarta!5e0!3m2!1sen!2sid!4v1",
    loveStory:"Pertemuan kami bermula di sebuah pelatihan kepemimpinan, di mana pandangan pertama berubah menjadi persahabatan yang hangat. Dua tahun berjalan bersama, kami menyadari bahwa takdir memang telah merajut nama kami dalam satu helai benang cinta yang tak terpisahkan.",
    music:{ title:"A Thousand Years – Christina Perri", src:"" },
    photos:[],
    video:null,
    gallery:[],
    accounts:[
      { bank:"BCA", number:"1234567890", name:"Aditya Putra Wijaya" },
      { bank:"Mandiri", number:"0987654321", name:"Maharani Kusuma Dewi" },
    ],
    guestName:"",
    rundowns:[
      { time:"09.00", label:"Registrasi & Penyambutan Tamu" },
      { time:"10.00", label:"Akad Nikah" },
      { time:"11.00", label:"Resepsi & Foto Bersama" },
      { time:"13.00", label:"Makan Siang" },
      { time:"15.00", label:"Hiburan & Closing" },
    ],
  };

  const dateObj = new Date(d.date);
  const day = dateObj.getDate();
  const month = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const countdown = useCountdown(d.date);

  // Section style
  const S = (extra = {}) => ({
    padding:"60px 28px",
    position:"relative",
    zIndex:1,
    ...extra,
  });

  return (
    <>
      <style>{FONTS + KEYFRAMES}</style>

      {/* Cover */}
      {!opened && <Cover data={d} onOpen={() => setOpened(true)} />}

      {/* Music */}
      <MusicPlayer music={d.music} />

      {/* Floating petals */}
      <FloatingPetals />

      <div style={{ background:T.dark, minHeight:"100vh", color:T.white, position:"relative", overflowX:"hidden" }}>

        {/* ── HERO ── */}
        <section style={{ ...S(), minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:`linear-gradient(160deg, ${T.black} 0%, #1a0d00 50%, ${T.black} 100%)`, textAlign:"center", overflow:"hidden" }}>
          {/* Bg circles */}
          <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", border:`1px solid rgba(212,175,55,0.1)`, top:"50%", left:"50%", transform:"translate(-50%,-50%)", animation:"spin 30s linear infinite" }} />
          <div style={{ position:"absolute", width:300, height:300, borderRadius:"50%", border:`1px solid rgba(212,175,55,0.08)`, top:"50%", left:"50%", transform:"translate(-50%,-50%)", animation:"spin 20s linear infinite reverse" }} />

          <Appear delay={0.1} anim="fadeIn">
            <p style={{ fontFamily:"'Josefin Sans'", fontSize:10, letterSpacing:6, color:T.gold, textTransform:"uppercase", margin:"0 0 16px" }}>✦ Undangan Pernikahan ✦</p>
          </Appear>

          <Appear delay={0.3} anim="fadeUp">
            <p style={{ fontFamily:"'Cormorant Garamond'", fontSize:13, fontStyle:"italic", color:T.muted, margin:"0 0 24px" }}>Bismillahirrahmanirrahim</p>
            <p style={{ fontFamily:"'Cormorant Garamond'", fontSize:13, color:T.muted, margin:"0 0 32px", lineHeight:1.8, maxWidth:280 }}>
              Dengan penuh syukur dan sukacita, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan kami
            </p>
          </Appear>

          <Appear delay={0.5} anim="slideInLeft">
            <h1 style={{ fontFamily:"'Dancing Script'", fontSize:58, fontWeight:700, margin:"0 0 0", lineHeight:1.1,
              background:shimmerGrad, backgroundSize:"200%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
              animation:"shimmer 4s linear infinite",
            }}>
              {d.couple.groom}
            </h1>
          </Appear>

          <Appear delay={0.7} anim="scaleIn">
            <div style={{ fontFamily:"'Playfair Display'", fontSize:32, color:T.gold, fontStyle:"italic", margin:"8px 0", animation:"heartBeat 2s infinite" }}>
              &amp;
            </div>
          </Appear>

          <Appear delay={0.9} anim="slideInRight">
            <h1 style={{ fontFamily:"'Dancing Script'", fontSize:58, fontWeight:700, margin:"0 0 32px", lineHeight:1.1,
              background:shimmerGrad, backgroundSize:"200%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
              animation:"shimmer 4s linear infinite 0.5s",
            }}>
              {d.couple.bride}
            </h1>
          </Appear>

          <Appear delay={1.1} anim="fadeUp">
            <GoldDivider style={{ width:200, margin:"0 auto" }} />
            <p style={{ fontFamily:"'Josefin Sans'", fontSize:11, letterSpacing:4, color:T.gold, textTransform:"uppercase", margin:"8px 0 4px" }}>{d.dayName}</p>
            <p style={{ fontFamily:"'Playfair Display'", fontSize:26, fontWeight:700, color:T.white, margin:"0 0 4px" }}>{day} {month} {year}</p>
            <p style={{ fontFamily:"'Josefin Sans'", fontSize:12, color:T.muted, letterSpacing:2 }}>{d.time}</p>
          </Appear>

          {/* Scroll indicator */}
          <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:4, animation:"bounce 2s infinite" }}>
            <span style={{ fontFamily:"'Josefin Sans'", fontSize:9, letterSpacing:3, color:T.muted }}>SCROLL</span>
            <span style={{ color:T.gold, fontSize:16 }}>↓</span>
          </div>
        </section>

        {/* ── MEMPELAI ── */}
        <section style={{ ...S(), background:`linear-gradient(180deg, ${T.black} 0%, #120a00 100%)` }}>
          <Appear>
            <SectionTitle title="Mempelai" sub="the couple" />
          </Appear>

          {/* Groom */}
          <Appear delay={0.2} anim="slideInLeft">
            <div style={{ textAlign:"center", marginBottom:36, padding:"28px 20px", borderRadius:20, background:"rgba(212,175,55,0.04)", border:`1px solid ${T.border}` }}>
              <div style={{ fontSize:40, marginBottom:12 }}>🤵</div>
              <h3 style={{ fontFamily:"'Dancing Script'", fontSize:34, color:T.gold, margin:"0 0 4px", fontWeight:700 }}>{d.couple.groom}</h3>
              <p style={{ fontFamily:"'Playfair Display'", fontSize:15, color:T.white, fontStyle:"italic", margin:"0 0 6px" }}>{d.couple.groomFull}</p>
              <p style={{ fontFamily:"'Josefin Sans'", fontSize:11, color:T.muted, letterSpacing:1 }}>Putra dari {d.couple.groomParents}</p>
            </div>
          </Appear>

          <Appear delay={0.3} anim="scaleIn">
            <div style={{ textAlign:"center", marginBottom:36 }}>
              <div style={{ fontFamily:"'Playfair Display'", fontSize:28, color:T.gold, fontStyle:"italic", animation:"heartBeat 2s infinite" }}>∞</div>
            </div>
          </Appear>

          {/* Bride */}
          <Appear delay={0.4} anim="slideInRight">
            <div style={{ textAlign:"center", padding:"28px 20px", borderRadius:20, background:"rgba(212,175,55,0.04)", border:`1px solid ${T.border}` }}>
              <div style={{ fontSize:40, marginBottom:12 }}>👰</div>
              <h3 style={{ fontFamily:"'Dancing Script'", fontSize:34, color:T.gold, margin:"0 0 4px", fontWeight:700 }}>{d.couple.bride}</h3>
              <p style={{ fontFamily:"'Playfair Display'", fontSize:15, color:T.white, fontStyle:"italic", margin:"0 0 6px" }}>{d.couple.brideFull}</p>
              <p style={{ fontFamily:"'Josefin Sans'", fontSize:11, color:T.muted, letterSpacing:1 }}>Putri dari {d.couple.brideParents}</p>
            </div>
          </Appear>
        </section>

        {/* ── COUNTDOWN ── */}
        <section style={{ ...S(), background:`linear-gradient(180deg, #120a00 0%, ${T.black} 100%)` }}>
          <Appear>
            <SectionTitle title="Hitung Mundur" sub="menuju hari istimewa" />
            <div style={{ display:"flex", gap:12, alignItems:"center" }}>
              <CDBox val={countdown.days} label="Hari" />
              <span style={{ color:T.gold, fontSize:24, fontFamily:"'Playfair Display'", marginBottom:20 }}>:</span>
              <CDBox val={countdown.h}    label="Jam" />
              <span style={{ color:T.gold, fontSize:24, fontFamily:"'Playfair Display'", marginBottom:20 }}>:</span>
              <CDBox val={countdown.m}    label="Menit" />
              <span style={{ color:T.gold, fontSize:24, fontFamily:"'Playfair Display'", marginBottom:20 }}>:</span>
              <CDBox val={countdown.s}    label="Detik" />
            </div>
          </Appear>
        </section>

        {/* ── LOVE STORY ── */}
        <section style={{ ...S(), background:`linear-gradient(180deg, ${T.black} 0%, #0d0a1a 100%)` }}>
          <Appear>
            <SectionTitle title="Love Story" sub="our journey" />
          </Appear>
          <Appear delay={0.2} anim="fadeUp">
            <div style={{ padding:"28px 24px", borderRadius:20, background:"rgba(212,175,55,0.04)", border:`1px solid ${T.border}`, position:"relative" }}>
              <div style={{ fontSize:36, position:"absolute", top:-16, left:20, opacity:0.4 }}>❝</div>
              <p style={{ fontFamily:"'Cormorant Garamond'", fontSize:16, color:"rgba(255,255,255,0.85)", lineHeight:1.9, fontStyle:"italic", margin:0, paddingTop:12 }}>
                {d.loveStory}
              </p>
              <div style={{ fontSize:36, position:"absolute", bottom:-16, right:20, opacity:0.4 }}>❞</div>
            </div>
          </Appear>
        </section>

        {/* ── WAKTU & TEMPAT ── */}
        <section style={{ ...S(), background:`linear-gradient(180deg, #0d0a1a 0%, ${T.black} 100%)` }}>
          <Appear>
            <SectionTitle title="Waktu & Tempat" sub="save the date" />
          </Appear>

          <Appear delay={0.2} anim="scaleIn">
            <div style={{ padding:"28px 24px", borderRadius:20, background:"rgba(212,175,55,0.06)", border:`2px solid ${T.border}`, textAlign:"center", marginBottom:20, animation:"glowPulse 4s infinite" }}>
              <div style={{ fontSize:32, marginBottom:12 }}>💍</div>
              <p style={{ fontFamily:"'Josefin Sans'", fontSize:10, letterSpacing:4, color:T.gold, margin:"0 0 8px", textTransform:"uppercase" }}>Akad & Resepsi Pernikahan</p>
              <p style={{ fontFamily:"'Playfair Display'", fontSize:22, fontWeight:700, color:T.white, margin:"0 0 6px" }}>{d.dayName}, {day} {month} {year}</p>
              <p style={{ fontFamily:"'Josefin Sans'", fontSize:13, color:T.muted, margin:"0 0 12px" }}>Pukul {d.time}</p>
              <GoldDivider />
              <p style={{ fontFamily:"'Playfair Display'", fontSize:16, fontWeight:600, color:T.white, margin:"0 0 6px", fontStyle:"italic" }}>{d.venueFull}</p>
            </div>
          </Appear>

          {/* Maps embed */}
          <Appear delay={0.3}>
            <div style={{ borderRadius:16, overflow:"hidden", border:`1px solid ${T.border}`, marginBottom:16 }}>
              {d.mapsEmbed ? (
                <iframe src={d.mapsEmbed} width="100%" height="220" style={{ border:0, display:"block" }} allowFullScreen loading="lazy" title="Lokasi" />
              ) : (
                <div style={{ height:180, background:"rgba(255,255,255,0.05)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ color:T.muted, fontSize:13 }}>📍 {d.venueFull}</span>
                </div>
              )}
            </div>
            <a href={d.mapsUrl} target="_blank" rel="noreferrer" style={{
              display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"12px",
              borderRadius:10, border:`1px solid ${T.border}`, textDecoration:"none",
              background:"rgba(255,255,255,0.04)", color:T.white,
              fontFamily:"'Josefin Sans'", fontSize:12, fontWeight:600, letterSpacing:2, textTransform:"uppercase",
            }}>
              📍 &nbsp; Buka di Google Maps
            </a>
          </Appear>
        </section>

        {/* ── RUNDOWN ── */}
        {d.rundowns?.length > 0 && (
          <section style={{ ...S(), background:`linear-gradient(180deg, ${T.black}, #0a0f1a)` }}>
            <Appear>
              <SectionTitle title="Rundown Acara" sub="schedule" />
            </Appear>
            <div style={{ display:"flex", flexDirection:"column", gap:0, position:"relative" }}>
              <div style={{ position:"absolute", left:47, top:0, bottom:0, width:2, background:`linear-gradient(to bottom, transparent, ${T.gold}, transparent)` }} />
              {d.rundowns.map((r, i) => (
                <Appear key={i} delay={i*0.1} anim="slideInLeft">
                  <div style={{ display:"flex", alignItems:"center", gap:16, padding:"12px 0" }}>
                    <div style={{ fontFamily:"'Josefin Sans'", fontSize:12, fontWeight:700, color:T.gold, minWidth:42, textAlign:"right" }}>{r.time}</div>
                    <div style={{ width:14, height:14, borderRadius:"50%", border:`2px solid ${T.gold}`, background:T.dark, flexShrink:0, zIndex:1, animation:"glowPulse 3s infinite" }} />
                    <p style={{ fontFamily:"'Cormorant Garamond'", fontSize:15, color:T.white, margin:0, fontStyle:"italic" }}>{r.label}</p>
                  </div>
                </Appear>
              ))}
            </div>
          </section>
        )}

        {/* ── GALERI ── */}
        {(d.gallery?.length > 0 || d.photos?.length > 0) && (
          <section style={{ ...S(), background:`linear-gradient(180deg, #0a0f1a, ${T.black})` }}>
            <Appear>
              <SectionTitle title="Galeri Foto" sub="our memories" />
            </Appear>
            <Appear delay={0.2}>
              <Gallery photos={d.gallery?.length ? d.gallery : d.photos} />
            </Appear>
          </section>
        )}

        {/* ── VIDEO ── */}
        {d.video && (
          <section style={{ ...S(), background:T.black }}>
            <Appear>
              <SectionTitle title="Video" sub="our story" />
            </Appear>
            <Appear delay={0.2}>
              <VideoSection video={d.video} />
            </Appear>
          </section>
        )}

        {/* ── COUNTDOWN CALENDAR ── */}
        <section style={{ ...S(), background:`linear-gradient(180deg, ${T.black}, #0d1a0d)` }}>
          <Appear>
            <SectionTitle title="Ingat Hari Kami" sub="add to calendar" />
          </Appear>
          <Appear delay={0.2}>
            <AddToCalendar data={d} />
          </Appear>
        </section>

        {/* ── RSVP ── */}
        <section style={{ ...S(), background:`linear-gradient(180deg, #0d1a0d, ${T.black})` }}>
          <Appear>
            <SectionTitle title="Konfirmasi Kehadiran" sub="RSVP" />
          </Appear>
          <Appear delay={0.2}>
            <RSVP guestName={d.guestName} />
          </Appear>
        </section>

        {/* ── UCAPAN & DOA ── */}
        <section style={{ ...S(), background:`linear-gradient(180deg, ${T.black}, #1a0a0a)` }}>
          <Appear>
            <SectionTitle title="Ucapan & Do'a" sub="guestbook" />
          </Appear>
          <Appear delay={0.2}>
            <Guestbook />
          </Appear>
        </section>

        {/* ── ANGPAO DIGITAL ── */}
        <section style={{ ...S(), background:`linear-gradient(180deg, #1a0a0a, ${T.black})` }}>
          <Appear>
            <SectionTitle title="Hadiah Pernikahan" sub="angpao digital" />
          </Appear>
          <Appear delay={0.2}>
            <Angpao accounts={d.accounts} />
          </Appear>
        </section>

        {/* ── PENUTUP ── */}
        <section style={{ ...S({ paddingBottom:80 }), background:`linear-gradient(180deg, ${T.black}, #1a1208)`, textAlign:"center" }}>
          <Appear anim="scaleIn">
            <div style={{ fontSize:40, marginBottom:20, animation:"heartBeat 2s infinite" }}>💑</div>
            <p style={{ fontFamily:"'Cormorant Garamond'", fontSize:13, fontStyle:"italic", color:T.muted, margin:"0 0 16px", lineHeight:1.8 }}>
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."
            </p>
            <p style={{ fontFamily:"'Josefin Sans'", fontSize:9, letterSpacing:2, color:T.gold, margin:"0 0 32px" }}>QS. AR-RUM: 21</p>

            <GoldDivider />

            <h2 style={{ fontFamily:"'Dancing Script'", fontSize:38, color:T.gold, margin:"16px 0 4px", fontWeight:700 }}>
              {d.couple.groom} & {d.couple.bride}
            </h2>
            <p style={{ fontFamily:"'Josefin Sans'", fontSize:10, color:T.muted, letterSpacing:3, textTransform:"uppercase" }}>{day} {month} {year}</p>

            <GoldDivider />

            <p style={{ fontFamily:"'Cormorant Garamond'", fontSize:12, color:"rgba(255,255,255,0.3)", marginTop:24 }}>
              Dibuat dengan ❤ oleh <span style={{ color:T.gold }}>Sayvia</span>
            </p>
          </Appear>
        </section>
      </div>
    </>
  );
}