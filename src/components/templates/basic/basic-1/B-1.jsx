/**
 * B-1.jsx — Basic Bae Template Entry Point
 * Path: src/components/templates/basic/basic-1/B-1.jsx
 *
 * File ini hanya merakit komponen. Untuk ubah tampilan/warna,
 * edit file di folder masing-masing:
 *   - Warna & font  → theme.js
 *   - Animasi reveal→ hooks/useReveal.js
 *   - SVG dekorasi  → components/Decorations.jsx
 *   - UI shared     → components/UI.jsx
 *   - Music player  → components/MusicPlayer.jsx
 *   - Cover         → sections/Cover.jsx
 *   - Hero          → sections/Hero.jsx
 *   - Mempelai      → sections/CoupleSection.jsx
 *   - Love Story    → sections/LoveStory.jsx
 *   - Foto          → sections/PhotoSection.jsx
 *   - Lokasi        → sections/VenueSection.jsx
 *   - Ucapan        → sections/Guestbook.jsx
 *   - Penutup       → sections/ClosingSection.jsx
 */

import { useState } from "react";

import { FONTS, KEYFRAMES, C } from "./theme";
import { FallingPetals }   from "./components/Decorations";
import MusicPlayer         from "./components/MusicPlayer";
import Cover               from "./sections/Cover";
import Hero                from "./sections/Hero";
import CoupleSection       from "./sections/CoupleSection";
import LoveStory           from "./sections/LoveStory";
import PhotoSection        from "./sections/PhotoSection";
import VenueSection        from "./sections/VenueSection";
import Guestbook           from "./sections/Guestbook";
import ClosingSection      from "./sections/ClosingSection";

/* ── Default/demo data (diganti dari invitationData.js via PreviewPage) ── */
const DEFAULT_DATA = {
  couple: {
    groom:        "Rizky",
    bride:        "Amelia",
    groomFull:    "Muhammad Rizky Pratama",
    brideFull:    "Amelia Cahya Dewi",
    groomParents: "Bpk. Hendra & Ibu Lestari",
    brideParents: "Bpk. Agus & Ibu Fatimah",
  },
  date:      "2026-10-10",
  dayName:   "SABTU",
  time:      "10.00 – 14.00 WIB",
  venue:     "Gedung Graha Saba",
  venueFull: "Gedung Graha Saba, Jl. Saba Raya No.1, Semarang",
  mapsUrl:   "https://maps.google.com/",
  mapsEmbed: "",
  loveStory: "Kami pertama bertemu di sebuah seminar desain yang kebetulan sama-sama kami hadiri. Satu tatap mata, lalu percakapan panjang yang terasa seperti sudah lama kenal. Dua tahun berjalan bersama, kini kami siap melangkah ke babak paling indah dalam hidup kami.",
  music:     { title: "Perfect – Ed Sheeran", src: "" },
  musicList: [
    "A Thousand Years – Christina Perri",
    "Perfect – Ed Sheeran",
    "Canon in D – Pachelbel",
    "All of Me – John Legend",
    "Thinking Out Loud – Ed Sheeran",
  ],
  photos:    [],
  guestName: "",
};

export default function B1({ data }) {
  const [opened, setOpened] = useState(false);
  const d = data || DEFAULT_DATA;

  return (
    <>
      <style>{FONTS + KEYFRAMES}</style>

      {/* Cover amplop — hilang setelah dibuka */}
      {!opened && <Cover data={d} onOpen={() => setOpened(true)} />}

      {/* Music player floating */}
      <MusicPlayer music={d.music} musicList={d.musicList} />

      {/* Animasi daun/bunga jatuh */}
      <FallingPetals />

      {/* Konten utama */}
      <div style={{ background: C.bg, minHeight: "100vh", color: C.text, position: "relative", overflowX: "hidden" }}>
        <Hero          data={d} />
        <CoupleSection data={d} />
        <LoveStory     data={d} />
        <PhotoSection  data={d} />
        <VenueSection  data={d} />
        <Guestbook     data={d} />
        <ClosingSection data={d} />
      </div>
    </>
  );
}