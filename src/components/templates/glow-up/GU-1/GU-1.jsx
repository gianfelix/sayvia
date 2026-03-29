/**
 * GU-1.jsx — Glow-Up Wedding Invitation Template
 * Path: src/components/templates/glow-up/GU-1/GU-1.jsx
 *
 * Aesthetic: Sage Green Botanical — soft, modern, romantic
 * Fitur (sesuai paket Glow-Up):
 * ✅ Love Story
 * ✅ Kirim Ucapan & Doa (Guestbook)
 * ✅ Peta Lokasi (Google Maps)
 * ✅ Background Music REQUEST
 * ✅ Foto max.6
 * ✅ Video max.1
 * ✅ Hitung Mundur (Countdown Timer)
 * ✅ Konfirmasi Kehadiran (RSVP)
 * ✅ Angpao Digital
 * ✅ Tambah ke Pengingat/Kalender
 * ✅ FREE max.100 Nama Tamu
 * ✅ FREE URL Khusus
 * ✅ Galeri Foto (opsional) max.5
 */

import { useEffect, useRef, useState } from "react";

/* ─── Fonts ─────────────────────────────────────────────────────────────────── */
const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,600;0,900;1,400;1,700&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Sacramento&family=DM+Serif+Display:ital@0;1&display=swap');
`;

/* ─── Keyframes ─────────────────────────────────────────────────────────────── */
const KF = `
@keyframes guFadeUp    { from{opacity:0;transform:translateY(32px);} to{opacity:1;transform:translateY(0);} }
@keyframes guFadeIn    { from{opacity:0;} to{opacity:1;} }
@keyframes guScaleIn   { from{opacity:0;transform:scale(0.9);} to{opacity:1;transform:scale(1);} }
@keyframes guFloat     { 0%,100%{transform:translateY(0) rotate(-2deg);} 50%{transform:translateY(-10px) rotate(2deg);} }
@keyframes guSway      { 0%,100%{transform:rotate(-3deg);} 50%{transform:rotate(3deg);} }
@keyframes guLeafFall  { 0%{transform:translateY(-5vh) rotate(0deg) translateX(0);opacity:0;} 10%{opacity:.7;} 85%{opacity:.4;} 100%{transform:translateY(105vh) rotate(540deg) translateX(30px);opacity:0;} }
@keyframes guPulse     { 0%,100%{opacity:1;} 50%{opacity:.4;} }
@keyframes guShimmer   { 0%{background-position:-300% center;} 100%{background-position:300% center;} }
@keyframes guHeartbeat { 0%,100%{transform:scale(1);} 14%{transform:scale(1.25);} 28%{transform:scale(1);} 42%{transform:scale(1.15);} }
@keyframes guReveal    { from{clip-path:inset(0 100% 0 0);} to{clip-path:inset(0 0% 0 0);} }
@keyframes guBounce    { 0%,100%{transform:translateY(0) translateX(-50%);} 50%{transform:translateY(-8px) translateX(-50%);} }
@keyframes guRing      { 0%{transform:scale(1);opacity:.6;} 100%{transform:scale(2.5);opacity:0;} }
@keyframes guSlideL    { from{opacity:0;transform:translateX(-28px);} to{opacity:1;transform:translateX(0);} }
@keyframes guSlideR    { from{opacity:0;transform:translateX(28px);} to{opacity:1;transform:translateX(0);} }
@keyframes guWipe      { from{max-height:0;opacity:0;} to{max-height:400px;opacity:1;} }
@keyframes guSpin      { from{transform:rotate(0);} to{transform:rotate(360deg);} }
`;

/* ─── Theme ─────────────────────────────────────────────────────────────────── */
const C = {
  bg:       "#f5f7f2",
  bgDeep:   "#eef1ea",
  bgCard:   "#ffffff",
  sage:     "#6b8f71",
  sageDark: "#4a6b50",
  sageL:    "#a8c5ac",
  sageXL:   "#dce9de",
  terracotta:"#c4785a",
  terraL:   "#e8a888",
  cream:    "#fdf8f1",
  charcoal: "#2d3a2e",
  text:     "#3d4a3e",
  textMid:  "#6b7c6c",
  textMuted:"#9aab9b",
  white:    "#ffffff",
  border:   "rgba(107,143,113,0.2)",
  borderDk: "rgba(107,143,113,0.4)",
};

const sageGrad    = `linear-gradient(135deg, ${C.sageDark}, ${C.sage}, ${C.sageL})`;
const terraGrad   = `linear-gradient(135deg, ${C.terracotta}, ${C.terraL})`;
const shimmerSage = `linear-gradient(90deg, ${C.sageDark} 0%, ${C.sageL} 30%, ${C.white} 50%, ${C.sageL} 70%, ${C.sageDark} 100%)`;

/* ─── SVG Botanicals ─────────────────────────────────────────────────────────── */
// Minimal SVG leaf/branch decorations
const LeafTL = () => (
  <svg viewBox="0 0 200 200" style={{ position:"absolute", top:0, left:0, width:180, pointerEvents:"none", opacity:.55 }} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10 Q60 40 40 100" stroke={C.sage} strokeWidth="1.5" fill="none"/>
    <path d="M10 10 Q80 30 70 90" stroke={C.sageL} strokeWidth="1" fill="none"/>
    <ellipse cx="35" cy="55" rx="18" ry="9" fill={C.sageXL} opacity=".8" transform="rotate(-40 35 55)"/>
    <ellipse cx="55" cy="75" rx="16" ry="8" fill={C.sageXL} opacity=".7" transform="rotate(-20 55 75)"/>
    <ellipse cx="20" cy="30" rx="12" ry="6" fill={C.sageXL} opacity=".6" transform="rotate(-60 20 30)"/>
    <path d="M0 0 Q30 50 15 120" stroke={C.sageDark} strokeWidth="1" fill="none" opacity=".4"/>
    <ellipse cx="10" cy="70" rx="10" ry="5" fill={C.sage} opacity=".3" transform="rotate(-50 10 70)"/>
    <circle cx="45" cy="95" r="4" fill={C.terraL} opacity=".5"/>
    <circle cx="22" cy="45" r="3" fill={C.terraL} opacity=".4"/>
  </svg>
);

const LeafBR = () => (
  <svg viewBox="0 0 200 200" style={{ position:"absolute", bottom:0, right:0, width:180, pointerEvents:"none", opacity:.55, transform:"rotate(180deg)" }} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10 Q60 40 40 100" stroke={C.sage} strokeWidth="1.5" fill="none"/>
    <path d="M10 10 Q80 30 70 90" stroke={C.sageL} strokeWidth="1" fill="none"/>
    <ellipse cx="35" cy="55" rx="18" ry="9" fill={C.sageXL} opacity=".8" transform="rotate(-40 35 55)"/>
    <ellipse cx="55" cy="75" rx="16" ry="8" fill={C.sageXL} opacity=".7" transform="rotate(-20 55 75)"/>
    <ellipse cx="20" cy="30" rx="12" ry="6" fill={C.sageXL} opacity=".6" transform="rotate(-60 20 30)"/>
    <circle cx="45" cy="95" r="4" fill={C.terraL} opacity=".5"/>
  </svg>
);

const LeafBL = () => (
  <svg viewBox="0 0 200 200" style={{ position:"absolute", bottom:0, left:0, width:160, pointerEvents:"none", opacity:.45, transform:"scaleX(-1)" }} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 180 Q50 130 30 80" stroke={C.sage} strokeWidth="1.5" fill="none"/>
    <ellipse cx="28" cy="110" rx="16" ry="8" fill={C.sageXL} opacity=".7" transform="rotate(40 28 110)"/>
    <ellipse cx="20" cy="145" rx="12" ry="6" fill={C.sageXL} opacity=".6" transform="rotate(20 20 145)"/>
    <circle cx="35" cy="90" r="3" fill={C.terraL} opacity=".5"/>
  </svg>
);

/* ─── Falling leaves ─────────────────────────────────────────────────────────── */
const LEAVES = ["🍃","🌿","🌱","✿","❀"];
function FallingLeaves() {
  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i, left:`${Math.random()*100}%`, delay:`${Math.random()*10}s`,
    dur:`${8+Math.random()*8}s`, size:12+Math.random()*10,
    emoji: LEAVES[Math.floor(Math.random()*LEAVES.length)],
  }));
  return (
    <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
      {items.map(l => (
        <div key={l.id} style={{ position:"absolute", left:l.left, top:"-20px", fontSize:l.size, opacity:0, animation:`guLeafFall ${l.dur} ${l.delay} infinite linear` }}>{l.emoji}</div>
      ))}
    </div>
  );
}

/* ─── Intersection reveal ─────────────────────────────────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function Reveal({ children, delay = 0, anim = "guFadeUp", style = {} }) {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, animation: vis ? `${anim} 0.85s cubic-bezier(.22,.68,0,1.2) ${delay}s both` : "none", ...style }}>
      {children}
    </div>
  );
}

/* ─── Botanical divider ───────────────────────────────────────────────────────── */
function BotDivider({ style = {} }) {
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, padding:"14px 0", ...style }}>
      <div style={{ flex:1, height:1, background:`linear-gradient(to right, transparent, ${C.sageL})` }} />
      <span style={{ fontSize:18, color:C.sage }}>✿</span>
      <span style={{ fontSize:13, color:C.sageL }}>❧</span>
      <span style={{ fontSize:18, color:C.sage }}>✿</span>
      <div style={{ flex:1, height:1, background:`linear-gradient(to left, transparent, ${C.sageL})` }} />
    </div>
  );
}

/* ─── Section label ───────────────────────────────────────────────────────────── */
function SecTitle({ en, id: id_ }) {
  return (
    <div style={{ textAlign:"center", marginBottom:32 }}>
      <p style={{ fontFamily:"'Lato'", fontSize:9, letterSpacing:6, color:C.textMuted, textTransform:"uppercase", margin:"0 0 8px" }}>{en}</p>
      <h2 style={{ fontFamily:"'DM Serif Display'", fontSize:30, fontWeight:400, color:C.charcoal, margin:0, fontStyle:"italic" }}>{id_}</h2>
      <BotDivider />
    </div>
  );
}

/* ─── Countdown ───────────────────────────────────────────────────────────────── */
function useCD(target) {
  const calc = () => {
    const d = new Date(target) - new Date();
    if (d <= 0) return { days:0, h:0, m:0, s:0 };
    return { days:Math.floor(d/86400000), h:Math.floor(d%86400000/3600000), m:Math.floor(d%3600000/60000), s:Math.floor(d%60000/1000) };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(()=>setT(calc()),1000); return ()=>clearInterval(id); });
  return t;
}

function CDUnit({ val, label }) {
  return (
    <div style={{ flex:1, textAlign:"center" }}>
      <div style={{
        background:C.white, borderRadius:16, padding:"16px 8px",
        border:`1.5px solid ${C.border}`, boxShadow:"0 4px 20px rgba(107,143,113,0.1)",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:sageGrad }} />
        <div style={{ fontFamily:"'Bodoni Moda'", fontSize:34, fontWeight:900, color:C.sageDark, lineHeight:1 }}>
          {String(val).padStart(2,"0")}
        </div>
      </div>
      <div style={{ fontFamily:"'Lato'", fontSize:9, letterSpacing:3, color:C.textMuted, textTransform:"uppercase", marginTop:8 }}>{label}</div>
    </div>
  );
}

/* ─── Music player ────────────────────────────────────────────────────────────── */
function MusicBtn({ music }) {
  const aRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [shown, setShown] = useState(true);
  const toggle = () => {
    if (!aRef.current) return;
    if (play) { aRef.current.pause(); setPlay(false); }
    else { aRef.current.play().catch(()=>{}); setPlay(true); setShown(false); }
  };
  return (
    <div style={{ position:"fixed", bottom:24, right:20, zIndex:999, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:8 }}>
      {music?.src && <audio ref={aRef} src={music.src} loop />}
      {shown && (
        <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:12, padding:"8px 12px", boxShadow:"0 4px 16px rgba(0,0,0,0.1)", fontSize:11, fontFamily:"'Lato'", color:C.sage, whiteSpace:"nowrap" }}>
          ♪ {music?.title || "Putar Musik"}
        </div>
      )}
      <button onClick={toggle} style={{
        width:48, height:48, borderRadius:"50%",
        background: play ? sageGrad : C.white,
        border:`2px solid ${C.sage}`, cursor:"pointer",
        display:"flex", alignItems:"center", justifyContent:"center",
        fontSize:18, boxShadow:"0 4px 20px rgba(107,143,113,0.3)",
        transition:"all 0.3s", color: play ? C.white : C.sage,
      }}>
        {play ? "⏸" : "▶"}
      </button>
    </div>
  );
}

/* ─── Gallery ─────────────────────────────────────────────────────────────────── */
function Gallery({ photos }) {
  const [sel, setSel] = useState(null);
  if (!photos?.length) return null;
  const grid = photos.slice(0,5);
  return (
    <div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
        {grid.map((src, i) => (
          <div key={i} onClick={()=>setSel(src)}
            style={{ borderRadius:16, overflow:"hidden", cursor:"zoom-in", border:`1px solid ${C.border}`,
              aspectRatio: i===0 ? "16/9" : "1",
              gridColumn: i===0 ? "1/-1" : "auto",
              transition:"transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={e=>{ e.currentTarget.style.transform="scale(1.02)"; e.currentTarget.style.boxShadow="0 8px 30px rgba(107,143,113,0.2)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="none"; }}>
            <img src={src} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
          </div>
        ))}
      </div>
      {sel && (
        <div onClick={()=>setSel(null)} style={{ position:"fixed", inset:0, background:"rgba(45,58,46,0.95)", zIndex:9999, display:"flex", alignItems:"center", justifyContent:"center", animation:"guFadeIn 0.2s" }}>
          <img src={sel} alt="" style={{ maxWidth:"90vw", maxHeight:"90vh", objectFit:"contain", borderRadius:16, border:`2px solid ${C.sageL}` }} />
          <button onClick={()=>setSel(null)} style={{ position:"absolute", top:20, right:20, background:C.white, border:"none", color:C.sageDark, width:36, height:36, borderRadius:"50%", cursor:"pointer", fontSize:18, fontWeight:700 }}>✕</button>
        </div>
      )}
    </div>
  );
}

/* ─── Video ───────────────────────────────────────────────────────────────────── */
function VideoBlock({ video }) {
  if (!video) return null;
  return (
    <div style={{ borderRadius:20, overflow:"hidden", border:`1.5px solid ${C.border}`, boxShadow:"0 8px 32px rgba(107,143,113,0.12)" }}>
      <video src={video} controls style={{ width:"100%", display:"block" }} />
    </div>
  );
}

/* ─── RSVP ────────────────────────────────────────────────────────────────────── */
function RSVP({ guestName }) {
  const [status, setStatus]  = useState(null);
  const [name, setName]      = useState(guestName || "");
  const [pax, setPax]        = useState(1);
  const [done, setDone]      = useState(false);

  if (done) return (
    <div style={{ textAlign:"center", padding:"40px 20px", animation:"guScaleIn 0.5s" }}>
      <div style={{ fontSize:52, marginBottom:12, animation:"guHeartbeat 1.5s infinite" }}>💐</div>
      <p style={{ fontFamily:"'DM Serif Display'", fontSize:22, color:C.sageDark, fontStyle:"italic", margin:"0 0 8px" }}>Terima Kasih!</p>
      <p style={{ fontFamily:"'Lato'", fontSize:13, color:C.textMid }}>
        {status==="hadir" ? `Sampai jumpa, ${name}! Kami sangat senang kamu bisa hadir 🌿` : `Do'a kamu sangat berarti untuk kami, ${name} 🙏`}
      </p>
    </div>
  );

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nama kamu..."
        style={{ width:"100%", padding:"13px 16px", borderRadius:12, border:`1.5px solid ${C.border}`, background:C.white, color:C.text, fontFamily:"'Lato'", fontSize:13, outline:"none", boxSizing:"border-box", transition:"border-color 0.2s" }}
        onFocus={e=>e.target.style.borderColor=C.sage} onBlur={e=>e.target.style.borderColor=C.border} />

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
        {[{k:"hadir",label:"✓  Hadir"},{k:"tidak",label:"✗  Tidak Hadir"}].map(({k,label})=>(
          <button key={k} onClick={()=>setStatus(k)} style={{
            padding:"13px 8px", borderRadius:12, cursor:"pointer", fontFamily:"'Lato'", fontSize:12, fontWeight:700, letterSpacing:1, textTransform:"uppercase",
            border:`2px solid ${status===k ? C.sage : C.border}`,
            background: status===k ? `rgba(107,143,113,0.12)` : C.white,
            color: status===k ? C.sageDark : C.textMuted,
            transition:"all 0.2s",
          }}>{label}</button>
        ))}
      </div>

      {status==="hadir" && (
        <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
          <span style={{ fontFamily:"'Lato'", fontSize:12, color:C.textMid }}>Jumlah tamu:</span>
          <div style={{ display:"flex", gap:8 }}>
            {[1,2,3,4,5].map(n=>(
              <button key={n} onClick={()=>setPax(n)} style={{ width:34, height:34, borderRadius:"50%", border:`1.5px solid ${pax===n ? C.sage : C.border}`, background:pax===n ? `rgba(107,143,113,0.15)` : C.white, color:pax===n ? C.sageDark : C.textMuted, cursor:"pointer", fontSize:13, fontWeight:700, transition:"all 0.2s" }}>{n}</button>
            ))}
          </div>
        </div>
      )}

      <button onClick={()=>{ if(name&&status) setDone(true); }} style={{
        padding:"14px", borderRadius:12, border:"none",
        background: sageGrad, color:C.white, cursor:"pointer",
        fontFamily:"'Lato'", fontSize:13, fontWeight:700, letterSpacing:2, textTransform:"uppercase",
        opacity: name&&status ? 1 : 0.45, transition:"opacity 0.2s",
        boxShadow:"0 6px 24px rgba(107,143,113,0.35)",
      }}>
        Kirim Konfirmasi
      </button>
    </div>
  );
}

/* ─── Guestbook ───────────────────────────────────────────────────────────────── */
function Guestbook() {
  const [name, setName]   = useState("");
  const [msg, setMsg]     = useState("");
  const [msgs, setMsgs]   = useState([
    { name:"Keluarga Besar Santoso", msg:"Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fi khair 🌿", time:"1 jam lalu" },
    { name:"Teman-teman SMA", msg:"Selamat ya! Semoga rumah tangganya penuh cinta dan berkah 💐", time:"2 jam lalu" },
  ]);

  const send = () => {
    if (!name || !msg) return;
    setMsgs(p=>[{ name, msg, time:"Baru saja" }, ...p]);
    setName(""); setMsg("");
  };

  const inp = (extra={}) => ({
    width:"100%", padding:"12px 14px", borderRadius:12, border:`1.5px solid ${C.border}`,
    background:C.white, color:C.text, fontFamily:"'Lato'", fontSize:13, outline:"none",
    boxSizing:"border-box", transition:"border-color 0.2s", ...extra,
  });

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nama kamu..." style={inp()}
        onFocus={e=>e.target.style.borderColor=C.sage} onBlur={e=>e.target.style.borderColor=C.border} />
      <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Tulis ucapan & do'a..." rows={3}
        style={inp({ resize:"none" })}
        onFocus={e=>e.target.style.borderColor=C.sage} onBlur={e=>e.target.style.borderColor=C.border} />
      <button onClick={send} style={{
        padding:"13px", borderRadius:12, border:`1.5px solid ${C.sage}`,
        background:"rgba(107,143,113,0.08)", color:C.sageDark, cursor:"pointer",
        fontFamily:"'Lato'", fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase",
        transition:"all 0.2s",
      }}
      onMouseEnter={e=>{ e.currentTarget.style.background="rgba(107,143,113,0.2)"; }}
      onMouseLeave={e=>{ e.currentTarget.style.background="rgba(107,143,113,0.08)"; }}>
        Kirim Ucapan ✉
      </button>

      <div style={{ display:"flex", flexDirection:"column", gap:10, maxHeight:300, overflowY:"auto", paddingRight:2 }}>
        {msgs.map((m,i)=>(
          <div key={i} style={{ padding:"14px 16px", borderRadius:14, background:C.white, border:`1px solid ${C.border}`, boxShadow:"0 2px 12px rgba(107,143,113,0.07)", animation:`guFadeUp 0.4s ease ${i*0.08}s both` }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
              <span style={{ fontFamily:"'Lato'", fontSize:12, fontWeight:700, color:C.sageDark }}>{m.name}</span>
              <span style={{ fontFamily:"'Lato'", fontSize:10, color:C.textMuted }}>{m.time}</span>
            </div>
            <p style={{ margin:0, fontFamily:"'Lato'", fontSize:13, color:C.textMid, lineHeight:1.7, fontStyle:"italic" }}>{m.msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Angpao ──────────────────────────────────────────────────────────────────── */
function Angpao({ accounts }) {
  const [copied, setCopied] = useState(null);
  const copy = (text, key) => {
    navigator.clipboard.writeText(text).catch(()=>{});
    setCopied(key); setTimeout(()=>setCopied(null), 2000);
  };
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
      <p style={{ fontFamily:"'Lato'", fontSize:13, color:C.textMid, textAlign:"center", fontStyle:"italic", lineHeight:1.8, margin:"0 0 8px" }}>
        Bagi yang ingin memberikan hadiah, kami membuka rekening digital berikut:
      </p>
      {(accounts||[]).map((acc,i)=>(
        <div key={i} style={{ padding:"16px 18px", borderRadius:16, background:C.white, border:`1.5px solid ${C.border}`, display:"flex", alignItems:"center", gap:12, boxShadow:"0 4px 16px rgba(107,143,113,0.08)" }}>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'Lato'", fontSize:9, letterSpacing:3, color:C.sageL, textTransform:"uppercase", marginBottom:4 }}>{acc.bank}</div>
            <div style={{ fontFamily:"'Bodoni Moda'", fontSize:20, fontWeight:700, color:C.charcoal, letterSpacing:2 }}>{acc.number}</div>
            <div style={{ fontFamily:"'Lato'", fontSize:11, color:C.textMuted, marginTop:2 }}>{acc.name}</div>
          </div>
          <button onClick={()=>copy(acc.number, i)} style={{
            padding:"9px 16px", borderRadius:10, cursor:"pointer",
            border:`1.5px solid ${copied===i ? C.sage : C.border}`,
            background: copied===i ? "rgba(107,143,113,0.12)" : C.bgDeep,
            color: copied===i ? C.sageDark : C.textMid,
            fontFamily:"'Lato'", fontSize:11, fontWeight:700, transition:"all 0.2s",
          }}>
            {copied===i ? "✓ Disalin" : "Salin"}
          </button>
        </div>
      ))}
    </div>
  );
}

/* ─── Add to Calendar ─────────────────────────────────────────────────────────── */
function AddCalendar({ data }) {
  const start = (data?.date||"").replace(/-/g,"")+"T090000";
  const end   = (data?.date||"").replace(/-/g,"")+"T170000";
  const title = encodeURIComponent(`Pernikahan ${data?.couple?.groom||""} & ${data?.couple?.bride||""}`);
  const loc   = encodeURIComponent(data?.venueFull||"");
  const url   = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${loc}`;
  return (
    <a href={url} target="_blank" rel="noreferrer" style={{
      display:"flex", alignItems:"center", justifyContent:"center", gap:10,
      padding:"14px", borderRadius:14, border:`1.5px solid ${C.border}`,
      background:C.white, color:C.sageDark, textDecoration:"none",
      fontFamily:"'Lato'", fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase",
      boxShadow:"0 4px 16px rgba(107,143,113,0.1)", transition:"all 0.2s",
    }}
    onMouseEnter={e=>{ e.currentTarget.style.background=`rgba(107,143,113,0.1)`; e.currentTarget.style.borderColor=C.sage; }}
    onMouseLeave={e=>{ e.currentTarget.style.background=C.white; e.currentTarget.style.borderColor=C.border; }}>
      📅 &nbsp; Tambah ke Kalender
    </a>
  );
}

/* ─── Cover page ──────────────────────────────────────────────────────────────── */
function Cover({ data, onOpen }) {
  const [out, setOut] = useState(false);
  const open = () => { setOut(true); setTimeout(onOpen, 900); };

  return (
    <div style={{
      position:"fixed", inset:0, zIndex:1000,
      background:`linear-gradient(160deg, ${C.bgDeep} 0%, #e8f0e4 50%, ${C.bgDeep} 100%)`,
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      padding:32, overflow:"hidden",
      transition: out ? "opacity 0.8s ease 0.4s" : "none",
      opacity: out ? 0 : 1, pointerEvents: out ? "none" : "auto",
    }}>
      {/* bg botanical */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        <LeafTL />
        <LeafBR />
        <LeafBL />
      </div>

      {/* Animated rings */}
      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none" }}>
        {[200,280,360].map((s,i)=>(
          <div key={i} style={{ position:"absolute", width:s, height:s, borderRadius:"50%", border:`1px solid ${C.sageL}`, opacity:0.3-i*0.08 }} />
        ))}
      </div>

      <div style={{ position:"relative", zIndex:1, textAlign:"center", maxWidth:340 }}>
        {/* Envelope */}
        <div style={{ fontSize:54, marginBottom:16, animation:"guFloat 3s ease-in-out infinite" }}>💌</div>

        <p style={{ fontFamily:"'Lato'", fontSize:9, letterSpacing:6, color:C.sage, textTransform:"uppercase", margin:"0 0 20px" }}>Undangan Pernikahan</p>

        <BotDivider />

        <h1 style={{ fontFamily:"'Sacramento'", fontSize:52, color:C.charcoal, margin:"12px 0 0", lineHeight:1.1 }}>
          {data?.couple?.groom}
        </h1>
        <p style={{ fontFamily:"'DM Serif Display'", fontSize:24, color:C.sage, margin:"4px 0", fontStyle:"italic" }}>&</p>
        <h1 style={{ fontFamily:"'Sacramento'", fontSize:52, color:C.charcoal, margin:"0 0 12px", lineHeight:1.1 }}>
          {data?.couple?.bride}
        </h1>

        <BotDivider />

        {data?.guestName && (
          <p style={{ fontFamily:"'Lato'", fontSize:12, color:C.textMid, fontStyle:"italic", margin:"0 0 20px" }}>
            Kepada Yth. <br /><strong>{data.guestName}</strong>
          </p>
        )}

        <button onClick={open} style={{
          marginTop:16, padding:"14px 40px", borderRadius:50, border:"none",
          background:sageGrad, color:C.white, cursor:"pointer",
          fontFamily:"'Lato'", fontSize:13, fontWeight:700, letterSpacing:3, textTransform:"uppercase",
          boxShadow:"0 8px 30px rgba(107,143,113,0.4)", transition:"transform 0.2s",
        }}
        onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"}
        onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
          Buka Undangan 🌿
        </button>
      </div>
    </div>
  );
}

/* ─── Section wrapper ─────────────────────────────────────────────────────────── */
const Sec = ({ children, style={} }) => (
  <section style={{ padding:"64px 28px", position:"relative", overflow:"hidden", ...style }}>
    {children}
  </section>
);

/* ─── Main template ───────────────────────────────────────────────────────────── */
export default function GU1({ data }) {
  const [opened, setOpened] = useState(false);

  const d = data || {
    couple:{
      groom:"Renaldi", bride:"Chyntia",
      groomFull:"Renaldi Pratama Putra", brideFull:"Chyntia Maharani Dewi",
      groomParents:"Bpk. Sigit & Ibu Wulandari",
      brideParents:"Bpk. Agus & Ibu Setiawati",
    },
    date:"2026-08-08", dayName:"SABTU",
    time:"10.00 – 14.00 WIB",
    venue:"Villa Puncak Asri", venueFull:"Villa Puncak Asri, Jl. Raya Puncak No.88, Bogor",
    mapsUrl:"https://maps.google.com/",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5948!2d106.9234!3d-6.7098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zBsKwNDInMzUuMyJTIDEwNsKwNTUnMjQuMiJF!5e0!3m2!1sen!2sid!4v1",
    loveStory:"Pertemuan yang tak terduga di sudut perpustakaan kampus membawa kami pada percakapan panjang yang terasa seperti menemukan pulang. Tiga tahun berjalan bersama, melalui suka dan duka, kini kami siap melangkah ke babak yang paling indah dalam hidup kami.",
    music:{ title:"Perfect – Ed Sheeran", src:"" },
    photos:[], gallery:[], video:null,
    accounts:[
      { bank:"BRI",     number:"1234-01-012345-67-8", name:"Renaldi Pratama" },
      { bank:"GoPay",   number:"0812-3456-7890",       name:"Renaldi Pratama" },
    ],
    guestName:"",
    rundowns:[
      { time:"09.30", label:"Registrasi Tamu Undangan" },
      { time:"10.00", label:"Prosesi Akad Nikah" },
      { time:"11.30", label:"Resepsi & Foto Bersama Keluarga" },
      { time:"12.30", label:"Jamuan Makan Siang" },
      { time:"14.00", label:"Penutupan" },
    ],
  };

  const dateObj = new Date(d.date);
  const day     = dateObj.getDate();
  const month   = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][dateObj.getMonth()];
  const year    = dateObj.getFullYear();
  const cd      = useCD(d.date);

  return (
    <>
      <style>{FONTS + KF}</style>

      {!opened && <Cover data={d} onOpen={()=>setOpened(true)} />}
      <MusicBtn music={d.music} />
      <FallingLeaves />

      <div style={{ background:C.bg, minHeight:"100vh", color:C.text, position:"relative", overflowX:"hidden" }}>

        {/* ── HERO ── */}
        <Sec style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:`linear-gradient(160deg, ${C.cream} 0%, ${C.bgDeep} 60%, ${C.sageXL} 100%)`, textAlign:"center", position:"relative" }}>
          <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
            <LeafTL />
            <LeafBR />
          </div>

          {/* Concentric rings bg */}
          {[260,340,420].map((s,i)=>(
            <div key={i} style={{ position:"absolute", width:s, height:s, top:"50%", left:"50%", transform:"translate(-50%,-50%)", borderRadius:"50%", border:`1px solid rgba(107,143,113,${0.12-i*0.03})` }} />
          ))}

          <Reveal delay={0.1} anim="guFadeIn">
            <p style={{ fontFamily:"'Lato'", fontSize:9, letterSpacing:6, color:C.sage, textTransform:"uppercase", margin:"0 0 20px" }}>✿ Undangan Pernikahan ✿</p>
          </Reveal>

          <Reveal delay={0.3} anim="guFadeUp">
            <p style={{ fontFamily:"'Lato'", fontSize:12, fontStyle:"italic", color:C.textMid, margin:"0 0 8px" }}>Bismillahirrahmanirrahim</p>
          </Reveal>

          <Reveal delay={0.5} anim="guSlideL">
            <h1 style={{
              fontFamily:"'Sacramento'", fontSize:66, color:C.charcoal, margin:"0 0 0", lineHeight:1.1,
              background: shimmerSage, backgroundSize:"200%",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
              animation:"guShimmer 5s linear infinite",
            }}>
              {d.couple.groom}
            </h1>
          </Reveal>

          <Reveal delay={0.65} anim="guScaleIn">
            <div style={{ fontFamily:"'DM Serif Display'", fontSize:30, color:C.sage, fontStyle:"italic", margin:"4px 0", animation:"guHeartbeat 2s infinite" }}>&</div>
          </Reveal>

          <Reveal delay={0.8} anim="guSlideR">
            <h1 style={{
              fontFamily:"'Sacramento'", fontSize:66, color:C.charcoal, margin:"0 0 28px", lineHeight:1.1,
              background: shimmerSage, backgroundSize:"200%",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
              animation:"guShimmer 5s linear infinite 0.5s",
            }}>
              {d.couple.bride}
            </h1>
          </Reveal>

          <Reveal delay={1} anim="guFadeUp">
            <BotDivider style={{ width:220, margin:"0 auto" }} />
            <p style={{ fontFamily:"'Lato'", fontSize:9, letterSpacing:5, color:C.sage, textTransform:"uppercase", margin:"8px 0 4px" }}>{d.dayName}</p>
            <p style={{ fontFamily:"'Bodoni Moda'", fontSize:28, fontWeight:700, color:C.charcoal, margin:"0 0 4px" }}>{day} {month} {year}</p>
            <p style={{ fontFamily:"'Lato'", fontSize:12, color:C.textMid, letterSpacing:1 }}>{d.time}</p>
          </Reveal>

          {/* Scroll hint */}
          <div style={{ position:"absolute", bottom:28, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:4, animation:"guBounce 2s infinite" }}>
            <span style={{ fontFamily:"'Lato'", fontSize:8, letterSpacing:3, color:C.textMuted }}>SCROLL</span>
            <span style={{ color:C.sage, fontSize:16 }}>↓</span>
          </div>
        </Sec>

        {/* ── MEMPELAI ── */}
        <Sec style={{ background:`linear-gradient(180deg, ${C.bgDeep} 0%, ${C.cream} 100%)` }}>
          <Reveal><SecTitle en="the couple" id_="Mempelai" /></Reveal>

          <Reveal delay={0.2} anim="guSlideL">
            <div style={{ padding:"28px 22px", borderRadius:24, background:C.white, border:`1.5px solid ${C.border}`, textAlign:"center", marginBottom:28, boxShadow:"0 4px 20px rgba(107,143,113,0.08)", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:sageGrad }} />
              <div style={{ fontSize:42, marginBottom:10 }}>🤵🏻</div>
              <h3 style={{ fontFamily:"'Sacramento'", fontSize:38, color:C.sageDark, margin:"0 0 4px" }}>{d.couple.groom}</h3>
              <p style={{ fontFamily:"'DM Serif Display'", fontSize:15, color:C.charcoal, fontStyle:"italic", margin:"0 0 6px" }}>{d.couple.groomFull}</p>
              <p style={{ fontFamily:"'Lato'", fontSize:11, color:C.textMuted }}>Putra dari {d.couple.groomParents}</p>
            </div>
          </Reveal>

          <Reveal delay={0.3} anim="guScaleIn">
            <div style={{ textAlign:"center", marginBottom:28 }}>
              <div style={{ fontSize:26, color:C.sage, animation:"guHeartbeat 2.5s infinite" }}>∿</div>
            </div>
          </Reveal>

          <Reveal delay={0.4} anim="guSlideR">
            <div style={{ padding:"28px 22px", borderRadius:24, background:C.white, border:`1.5px solid ${C.border}`, textAlign:"center", boxShadow:"0 4px 20px rgba(107,143,113,0.08)", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:terraGrad }} />
              <div style={{ fontSize:42, marginBottom:10 }}>👰🏻</div>
              <h3 style={{ fontFamily:"'Sacramento'", fontSize:38, color:C.sageDark, margin:"0 0 4px" }}>{d.couple.bride}</h3>
              <p style={{ fontFamily:"'DM Serif Display'", fontSize:15, color:C.charcoal, fontStyle:"italic", margin:"0 0 6px" }}>{d.couple.brideFull}</p>
              <p style={{ fontFamily:"'Lato'", fontSize:11, color:C.textMuted }}>Putri dari {d.couple.brideParents}</p>
            </div>
          </Reveal>
        </Sec>

        {/* ── COUNTDOWN ── */}
        <Sec style={{ background:`linear-gradient(180deg, ${C.cream}, ${C.sageXL})` }}>
          <Reveal><SecTitle en="menuju hari istimewa" id_="Hitung Mundur" /></Reveal>
          <Reveal delay={0.2}>
            <div style={{ display:"flex", gap:10, alignItems:"center" }}>
              <CDUnit val={cd.days} label="Hari" />
              <span style={{ color:C.sageL, fontSize:22, fontFamily:"'Bodoni Moda'", marginBottom:20 }}>:</span>
              <CDUnit val={cd.h}    label="Jam" />
              <span style={{ color:C.sageL, fontSize:22, fontFamily:"'Bodoni Moda'", marginBottom:20 }}>:</span>
              <CDUnit val={cd.m}    label="Menit" />
              <span style={{ color:C.sageL, fontSize:22, fontFamily:"'Bodoni Moda'", marginBottom:20 }}>:</span>
              <CDUnit val={cd.s}    label="Detik" />
            </div>
          </Reveal>
        </Sec>

        {/* ── LOVE STORY ── */}
        <Sec style={{ background:`linear-gradient(180deg, ${C.sageXL}, ${C.bg})` }}>
          <Reveal><SecTitle en="our journey" id_="Love Story" /></Reveal>
          <Reveal delay={0.2} anim="guFadeUp">
            <div style={{ padding:"32px 26px", borderRadius:24, background:C.white, border:`1.5px solid ${C.border}`, position:"relative", boxShadow:"0 4px 20px rgba(107,143,113,0.08)" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:sageGrad, borderRadius:"24px 24px 0 0" }} />
              <div style={{ fontSize:32, color:C.sageL, marginBottom:12, lineHeight:1 }}>❝</div>
              <p style={{ fontFamily:"'Lato'", fontSize:14, color:C.textMid, lineHeight:1.9, fontStyle:"italic", margin:0 }}>
                {d.loveStory}
              </p>
              <div style={{ fontSize:32, color:C.sageL, marginTop:12, textAlign:"right", lineHeight:1 }}>❞</div>
            </div>
          </Reveal>
        </Sec>

        {/* ── WAKTU & TEMPAT ── */}
        <Sec style={{ background:`linear-gradient(180deg, ${C.bg}, ${C.bgDeep})` }}>
          <Reveal><SecTitle en="save the date" id_="Waktu & Tempat" /></Reveal>

          <Reveal delay={0.2} anim="guScaleIn">
            <div style={{ padding:"28px 24px", borderRadius:24, background:C.white, border:`2px solid ${C.border}`, textAlign:"center", marginBottom:20, boxShadow:"0 6px 28px rgba(107,143,113,0.1)", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:5, background:sageGrad }} />
              <div style={{ fontSize:32, marginBottom:12 }}>💍</div>
              <p style={{ fontFamily:"'Lato'", fontSize:9, letterSpacing:4, color:C.sageL, margin:"0 0 8px", textTransform:"uppercase" }}>Akad & Resepsi Pernikahan</p>
              <p style={{ fontFamily:"'Bodoni Moda'", fontSize:24, fontWeight:700, color:C.charcoal, margin:"0 0 6px" }}>{d.dayName}, {day} {month} {year}</p>
              <p style={{ fontFamily:"'Lato'", fontSize:13, color:C.textMid, margin:"0 0 14px" }}>Pukul {d.time}</p>
              <BotDivider />
              <p style={{ fontFamily:"'DM Serif Display'", fontSize:16, color:C.charcoal, margin:"0", fontStyle:"italic" }}>{d.venueFull}</p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div style={{ borderRadius:18, overflow:"hidden", border:`1.5px solid ${C.border}`, marginBottom:14, boxShadow:"0 4px 16px rgba(107,143,113,0.1)" }}>
              {d.mapsEmbed ? (
                <iframe src={d.mapsEmbed} width="100%" height="220" style={{ border:0, display:"block" }} allowFullScreen loading="lazy" title="Lokasi" />
              ) : (
                <div style={{ height:180, background:C.sageXL, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontFamily:"'Lato'", fontSize:13, color:C.sage }}>📍 {d.venueFull}</span>
                </div>
              )}
            </div>
            <a href={d.mapsUrl} target="_blank" rel="noreferrer" style={{
              display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"13px",
              borderRadius:12, border:`1.5px solid ${C.border}`, textDecoration:"none",
              background:C.white, color:C.sageDark,
              fontFamily:"'Lato'", fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase",
              boxShadow:"0 2px 10px rgba(107,143,113,0.08)",
            }}>
              📍 &nbsp; Buka di Google Maps
            </a>
          </Reveal>
        </Sec>

        {/* ── RUNDOWN ── */}
        {d.rundowns?.length > 0 && (
          <Sec style={{ background:`linear-gradient(180deg, ${C.bgDeep}, ${C.cream})` }}>
            <Reveal><SecTitle en="schedule" id_="Rundown Acara" /></Reveal>
            <div style={{ position:"relative" }}>
              <div style={{ position:"absolute", left:45, top:0, bottom:0, width:1.5, background:`linear-gradient(to bottom, transparent, ${C.sageL}, transparent)` }} />
              {d.rundowns.map((r,i)=>(
                <Reveal key={i} delay={i*0.08} anim="guSlideL">
                  <div style={{ display:"flex", alignItems:"center", gap:16, padding:"13px 0" }}>
                    <div style={{ fontFamily:"'Lato'", fontSize:11, fontWeight:700, color:C.sage, minWidth:40, textAlign:"right" }}>{r.time}</div>
                    <div style={{ width:14, height:14, borderRadius:"50%", background:C.white, border:`2.5px solid ${C.sage}`, flexShrink:0, zIndex:1, boxShadow:`0 0 0 4px rgba(107,143,113,0.15)` }} />
                    <p style={{ fontFamily:"'Lato'", fontSize:14, color:C.text, margin:0 }}>{r.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Sec>
        )}

        {/* ── GALERI ── */}
        {(d.gallery?.length > 0 || d.photos?.length > 0) && (
          <Sec style={{ background:`linear-gradient(180deg, ${C.cream}, ${C.bg})` }}>
            <Reveal><SecTitle en="our memories" id_="Galeri Foto" /></Reveal>
            <Reveal delay={0.2}><Gallery photos={d.gallery?.length ? d.gallery : d.photos} /></Reveal>
          </Sec>
        )}

        {/* ── VIDEO ── */}
        {d.video && (
          <Sec style={{ background:C.bg }}>
            <Reveal><SecTitle en="our story" id_="Video" /></Reveal>
            <Reveal delay={0.2}><VideoBlock video={d.video} /></Reveal>
          </Sec>
        )}

        {/* ── KALENDER ── */}
        <Sec style={{ background:`linear-gradient(180deg, ${C.bg}, ${C.sageXL})` }}>
          <Reveal><SecTitle en="don't forget" id_="Ingat Hari Kami" /></Reveal>
          <Reveal delay={0.2}><AddCalendar data={d} /></Reveal>
        </Sec>

        {/* ── RSVP ── */}
        <Sec style={{ background:`linear-gradient(180deg, ${C.sageXL}, ${C.cream})` }}>
          <Reveal><SecTitle en="RSVP" id_="Konfirmasi Kehadiran" /></Reveal>
          <Reveal delay={0.2}><RSVP guestName={d.guestName} /></Reveal>
        </Sec>

        {/* ── UCAPAN ── */}
        <Sec style={{ background:`linear-gradient(180deg, ${C.cream}, ${C.bgDeep})` }}>
          <Reveal><SecTitle en="guestbook" id_="Ucapan & Do'a" /></Reveal>
          <Reveal delay={0.2}><Guestbook /></Reveal>
        </Sec>

        {/* ── ANGPAO ── */}
        <Sec style={{ background:`linear-gradient(180deg, ${C.bgDeep}, ${C.bg})` }}>
          <Reveal><SecTitle en="angpao digital" id_="Hadiah Pernikahan" /></Reveal>
          <Reveal delay={0.2}><Angpao accounts={d.accounts} /></Reveal>
        </Sec>

        {/* ── PENUTUP ── */}
        <Sec style={{ background:`linear-gradient(180deg, ${C.bg}, ${C.sageXL})`, textAlign:"center", paddingBottom:80, position:"relative" }}>
          <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
            <LeafTL />
            <LeafBR />
          </div>

          <Reveal anim="guScaleIn">
            <div style={{ fontSize:42, marginBottom:20, animation:"guHeartbeat 2s infinite" }}>🌿</div>
            <p style={{ fontFamily:"'Lato'", fontSize:12, fontStyle:"italic", color:C.textMid, margin:"0 0 14px", lineHeight:1.9, maxWidth:300, marginInline:"auto" }}>
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."
            </p>
            <p style={{ fontFamily:"'Lato'", fontSize:9, letterSpacing:2, color:C.sage, margin:"0 0 28px" }}>QS. AR-RUM: 21</p>

            <BotDivider />

            <h2 style={{ fontFamily:"'Sacramento'", fontSize:42, color:C.charcoal, margin:"16px 0 4px" }}>
              {d.couple.groom} & {d.couple.bride}
            </h2>
            <p style={{ fontFamily:"'Lato'", fontSize:9, color:C.textMuted, letterSpacing:3, textTransform:"uppercase" }}>{day} {month} {year}</p>

            <BotDivider />

            <p style={{ fontFamily:"'Lato'", fontSize:11, color:C.textMuted, marginTop:20 }}>
              Dibuat dengan 🌿 oleh <span style={{ color:C.sageDark, fontWeight:700 }}>Sayvia</span>
            </p>
          </Reveal>
        </Sec>

      </div>
    </>
  );
}