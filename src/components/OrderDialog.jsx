import { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Stack,
  Box,
  Typography,
  Chip,
  IconButton,
  Divider,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

import { colors, size, weight } from "../theme/sayviaTheme";
import designs from "../data/designData";

const events = [...new Set(designs.map((d) => d.event))];
const packages = [...new Set(designs.map((d) => d.package))];

const MAX_PHOTOS = { Basic: 3, "Glow-Up": 6, "All Out": 10 };

const MUSIC_LIST = [
  { id: 1, title: "A Thousand Years – Christina Perri" },
  { id: 2, title: "Canon in D – Pachelbel" },
  { id: 3, title: "Perfect – Ed Sheeran" },
  { id: 4, title: "All of Me – John Legend" },
  { id: 5, title: "Bless the Broken Road – Rascal Flatts" },
  { id: 6, title: "Can't Help Falling in Love – Elvis Presley" },
  { id: 7, title: "Thinking Out Loud – Ed Sheeran" },
  { id: 8, title: "At Last – Etta James" },
  { id: 9, title: "Satu – Padi" },
  { id: 10, title: "Kaulah Segalanya – Ruth Sahanaya" },
];

// ── Section heading helper ───────────────────────────────────────────────────
function SectionLabel({ icon, label, color }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
      <Box sx={{ color: color || colors.primary, display: "flex", alignItems: "center" }}>
        {icon}
      </Box>
      <Typography sx={{ fontSize: "0.82rem", fontWeight: weight.semiBold, color: color || colors.primary, letterSpacing: "0.5px", textTransform: "uppercase" }}>
        {label}
      </Typography>
    </Box>
  );
}

export default function OrderDialog({ open, onClose, selectedDesign }) {
  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    package: "",
    date: "",
    notes: "",
    // love story
    groomName: "",
    brideName: "",
    loveStory: "",
    // location
    locationName: "",
    locationUrl: "",
    // music
    music: "",
    // media
    photos: [],      // array of File
    video: null,     // File | null
  });

  // ── Auto-fill event & package from selected card ─────────────────────────
  useEffect(() => {
    if (selectedDesign) {
      setForm((prev) => ({
        ...prev,
        event: selectedDesign.event,
        package: selectedDesign.package,
        // reset media when design changes
        photos: [],
        video: null,
      }));
    }
  }, [selectedDesign]);

  const set = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const maxPhotos = MAX_PHOTOS[form.package] || 3;
  const canUploadVideo = form.package === "Glow-Up" || form.package === "All Out";

  // ── Photo upload ─────────────────────────────────────────────────────────
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    const remaining = maxPhotos - form.photos.length;
    const allowed = files.slice(0, remaining);
    set("photos", [...form.photos, ...allowed]);
    e.target.value = "";
  };

  const removePhoto = (index) => {
    set("photos", form.photos.filter((_, i) => i !== index));
  };

  // ── Video upload ─────────────────────────────────────────────────────────
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) set("video", file);
    e.target.value = "";
  };

  // ── Submit ───────────────────────────────────────────────────────────────
  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.date) {
      alert("Mohon lengkapi field wajib: Nama, WhatsApp, dan Tanggal Event.");
      return;
    }
    console.log("DATA PESANAN:", { ...form, design: selectedDesign?.name });
    alert("Pesanan berhasil dikirim! Tim Sayvia akan segera menghubungi kamu 🎉");
    onClose();
  };

  // ── Shared TextField sx ───────────────────────────────────────────────────
  const fieldSx = { "& .MuiOutlinedInput-root": { borderRadius: "10px" } };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: { borderRadius: "18px", overflow: "hidden" },
      }}
    >
      {/* ── HEADER ── */}
      <DialogTitle
        sx={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary || "#068f7f"})`,
          color: "#fff",
          py: 2,
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: weight.bold, fontSize: "1.05rem" }}>
            Form Pemesanan
          </Typography>
          {selectedDesign && (
            <Typography sx={{ fontSize: "0.8rem", opacity: 0.85, mt: 0.3 }}>
              Desain: <b>{selectedDesign.name}</b> · {selectedDesign.event} · {selectedDesign.package}
            </Typography>
          )}
        </Box>
        <IconButton onClick={onClose} size="small" sx={{ color: "#fff", "&:hover": { background: "rgba(255,255,255,0.15)" } }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, py: 2.5 }}>
        <Stack spacing={2.5}>

          {/* ── INFORMASI DASAR ── */}
          <Box>
            <Typography sx={{ fontSize: "0.7rem", fontWeight: weight.semiBold, color: "#aaa", letterSpacing: "1px", textTransform: "uppercase", mb: 1.5 }}>
              Informasi Dasar
            </Typography>

            <Stack spacing={1.5}>
              <TextField label="Nama Lengkap *" fullWidth size="small" value={form.name}
                onChange={(e) => set("name", e.target.value)} sx={fieldSx} />

              <TextField label="Nomor WhatsApp *" fullWidth size="small" value={form.phone}
                onChange={(e) => set("phone", e.target.value)} sx={fieldSx} />

              {/* EVENT — locked if from card */}
              <TextField select label="Pilih Event" fullWidth size="small" value={form.event}
                onChange={(e) => set("event", e.target.value)}
                disabled={!!selectedDesign}
                helperText={selectedDesign ? "Otomatis terisi dari desain yang dipilih" : ""}
                sx={fieldSx}
              >
                {events.map((ev) => <MenuItem key={ev} value={ev}>{ev}</MenuItem>)}
              </TextField>

              {/* PACKAGE — locked if from card */}
              <TextField select label="Pilih Paket" fullWidth size="small" value={form.package}
                onChange={(e) => { set("package", e.target.value); set("photos", []); set("video", null); }}
                disabled={!!selectedDesign}
                helperText={selectedDesign ? "Otomatis terisi dari desain yang dipilih" : ""}
                sx={fieldSx}
              >
                {packages.map((pkg) => <MenuItem key={pkg} value={pkg}>{pkg}</MenuItem>)}
              </TextField>

              <TextField label="Tanggal Event *" type="date" InputLabelProps={{ shrink: true }}
                fullWidth size="small" value={form.date}
                onChange={(e) => set("date", e.target.value)} sx={fieldSx} />
            </Stack>
          </Box>

          <Divider />

          {/* ── LOVE STORY ── */}
          <Box>
            <SectionLabel icon={<FavoriteIcon fontSize="small" />} label="Love Story" color="#d63b6e" />
            <Stack spacing={1.5}>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5 }}>
                <TextField label="Nama Mempelai / Pihak 1" size="small" fullWidth value={form.groomName}
                  onChange={(e) => set("groomName", e.target.value)} sx={fieldSx} />
                <TextField label="Nama Mempelai / Pihak 2" size="small" fullWidth value={form.brideName}
                  onChange={(e) => set("brideName", e.target.value)} sx={fieldSx} />
              </Box>
              <TextField label="Cerita Cinta (opsional)" multiline rows={3} fullWidth size="small"
                placeholder="Ceritakan kisah kalian di sini..."
                value={form.loveStory} onChange={(e) => set("loveStory", e.target.value)} sx={fieldSx} />
            </Stack>
          </Box>

          <Divider />

          {/* ── LOKASI ── */}
          <Box>
            <SectionLabel icon={<LocationOnIcon fontSize="small" />} label="Peta Lokasi" />
            <Stack spacing={1.5}>
              <TextField label="Nama Tempat / Gedung" size="small" fullWidth value={form.locationName}
                onChange={(e) => set("locationName", e.target.value)} sx={fieldSx}
                placeholder="cth: Grand Ballroom Hotel Mulia Jakarta" />
              <TextField label="Link Google Maps" size="small" fullWidth value={form.locationUrl}
                onChange={(e) => set("locationUrl", e.target.value)} sx={fieldSx}
                placeholder="https://maps.google.com/..." />
              {form.locationUrl && (
                <Button size="small" startIcon={<LocationOnIcon />}
                  href={form.locationUrl} target="_blank" rel="noreferrer"
                  sx={{ width: "fit-content", textTransform: "none", fontSize: "0.75rem", color: colors.primary }}>
                  Buka di Google Maps
                </Button>
              )}
            </Stack>
          </Box>

          <Divider />

          {/* ── BACKGROUND MUSIC ── */}
          <Box>
            <SectionLabel icon={<MusicNoteIcon fontSize="small" />} label="Background Music" />
            <TextField select label="Pilih Musik Latar" fullWidth size="small"
              value={form.music} onChange={(e) => set("music", e.target.value)} sx={fieldSx}>
              <MenuItem value=""><em>— Tidak ada musik —</em></MenuItem>
              {MUSIC_LIST.map((m) => (
                <MenuItem key={m.id} value={m.title}>{m.title}</MenuItem>
              ))}
            </TextField>
          </Box>

          <Divider />

          {/* ── UPLOAD FOTO ── */}
          <Box>
            <SectionLabel icon={<AddPhotoAlternateIcon fontSize="small" />} label={`Upload Foto (maks. ${maxPhotos} foto)`} />

            {/* photo preview grid */}
            {form.photos.length > 0 && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1.5 }}>
                {form.photos.map((file, i) => (
                  <Box key={i} sx={{ position: "relative" }}>
                    <Avatar
                      src={URL.createObjectURL(file)}
                      variant="rounded"
                      sx={{ width: 68, height: 68, borderRadius: "10px", border: `2px solid ${colors.primary}33` }}
                    />
                    <IconButton size="small" onClick={() => removePhoto(i)}
                      sx={{
                        position: "absolute", top: -6, right: -6, width: 20, height: 20,
                        backgroundColor: "#e53935", color: "#fff", padding: 0,
                        "&:hover": { backgroundColor: "#b71c1c" },
                      }}>
                      <DeleteIcon sx={{ fontSize: 12 }} />
                    </IconButton>
                  </Box>
                ))}

                {/* add more slot */}
                {form.photos.length < maxPhotos && (
                  <Box onClick={() => photoInputRef.current.click()}
                    sx={{
                      width: 68, height: 68, borderRadius: "10px", border: `2px dashed ${colors.primary}66`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer", color: colors.primary, fontSize: "1.4rem",
                      "&:hover": { background: `${colors.primary}08` },
                    }}>
                    +
                  </Box>
                )}
              </Box>
            )}

            {form.photos.length === 0 && (
              <Box
                onClick={() => photoInputRef.current.click()}
                sx={{
                  border: `2px dashed ${colors.primary}55`,
                  borderRadius: "12px",
                  py: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0.5,
                  cursor: "pointer",
                  transition: "0.2s",
                  "&:hover": { background: `${colors.primary}06`, borderColor: colors.primary },
                }}
              >
                <AddPhotoAlternateIcon sx={{ color: colors.primary, fontSize: 32 }} />
                <Typography sx={{ fontSize: "0.8rem", color: colors.primary, fontWeight: weight.semiBold }}>
                  Klik untuk upload foto
                </Typography>
                <Typography sx={{ fontSize: "0.72rem", color: "#aaa" }}>
                  Maks. {maxPhotos} foto · JPG, PNG, WEBP
                </Typography>
              </Box>
            )}

            <input ref={photoInputRef} type="file" accept="image/*" multiple hidden onChange={handlePhotoChange} />

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 0.8 }}>
              <Typography sx={{ fontSize: "0.72rem", color: "#aaa" }}>
                {form.photos.length}/{maxPhotos} foto diunggah
              </Typography>
              {form.package && (
                <Chip label={`Paket ${form.package}: maks. ${maxPhotos} foto`} size="small"
                  sx={{ fontSize: "0.68rem", background: `${colors.primary}15`, color: colors.primary }} />
              )}
            </Box>
          </Box>

          {/* ── UPLOAD VIDEO (Glow-Up & All Out) ── */}
          <Box>
            <SectionLabel icon={<VideoCallIcon fontSize="small" />}
              label="Upload Video"
              color={canUploadVideo ? colors.primary : "#bbb"} />

            {!canUploadVideo ? (
              <Box sx={{ background: "#f5f5f5", borderRadius: "10px", py: 2, textAlign: "center" }}>
                <Typography sx={{ fontSize: "0.78rem", color: "#aaa" }}>
                  Fitur video tersedia untuk paket <b>Glow-Up</b> & <b>All Out</b>
                </Typography>
              </Box>
            ) : (
              <>
                {form.video ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.5, border: `1.5px solid ${colors.primary}33`, borderRadius: "12px", background: `${colors.primary}06` }}>
                    <VideoCallIcon sx={{ color: colors.primary, fontSize: 28 }} />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography sx={{ fontSize: "0.8rem", fontWeight: weight.semiBold, color: colors.primary }} noWrap>
                        {form.video.name}
                      </Typography>
                      <Typography sx={{ fontSize: "0.72rem", color: "#aaa" }}>
                        {(form.video.size / (1024 * 1024)).toFixed(1)} MB
                      </Typography>
                    </Box>
                    <IconButton size="small" onClick={() => set("video", null)}
                      sx={{ color: "#e53935", "&:hover": { background: "#fce4e4" } }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ) : (
                  <Box
                    onClick={() => videoInputRef.current.click()}
                    sx={{
                      border: `2px dashed ${colors.primary}55`,
                      borderRadius: "12px",
                      py: 3,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 0.5,
                      cursor: "pointer",
                      transition: "0.2s",
                      "&:hover": { background: `${colors.primary}06`, borderColor: colors.primary },
                    }}
                  >
                    <VideoCallIcon sx={{ color: colors.primary, fontSize: 32 }} />
                    <Typography sx={{ fontSize: "0.8rem", color: colors.primary, fontWeight: weight.semiBold }}>
                      Klik untuk upload video
                    </Typography>
                    <Typography sx={{ fontSize: "0.72rem", color: "#aaa" }}>
                      MP4, MOV, AVI · Maks. 100 MB
                    </Typography>
                  </Box>
                )}
                <input ref={videoInputRef} type="file" accept="video/*" hidden onChange={handleVideoChange} />
              </>
            )}
          </Box>

          <Divider />

          {/* ── CATATAN ── */}
          <TextField label="Catatan Tambahan" multiline rows={3} fullWidth size="small"
            placeholder="Ada permintaan khusus? Tuliskan di sini..."
            value={form.notes} onChange={(e) => set("notes", e.target.value)} sx={fieldSx} />

        </Stack>
      </DialogContent>

      {/* ── FOOTER ACTIONS ── */}
      <DialogActions sx={{ px: 3, py: 2, gap: 1, borderTop: "1px solid #f0f0f0" }}>
        <Button onClick={onClose} sx={{ textTransform: "none", color: "#888", borderRadius: "10px" }}>
          Batal
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary || "#068f7f"})`,
            textTransform: "none",
            borderRadius: "10px",
            px: 3,
            fontWeight: weight.semiBold,
            "&:hover": { filter: "brightness(1.1)", boxShadow: `0 4px 16px ${colors.primary}55` },
          }}
        >
          Kirim Pesanan 🎉
        </Button>
      </DialogActions>
    </Dialog>
  );
}