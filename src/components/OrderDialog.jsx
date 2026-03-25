import { useEffect, useState, useRef } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, MenuItem, Stack, Box, Typography,
  Chip, IconButton, Divider, Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { colors, size, weight } from "../theme/sayviaTheme";
import designs from "../data/designData";
import { useOrders } from "../context/OrderContext";

const events = [...new Set(designs.map((d) => d.event))];
const packages = [...new Set(designs.map((d) => d.package))];
const MAX_PHOTOS = { Basic: 3, "Glow-Up": 6, "All Out": 10 };
const MUSIC_LIST = [
  "A Thousand Years – Christina Perri",
  "Canon in D – Pachelbel",
  "Perfect – Ed Sheeran",
  "All of Me – John Legend",
  "Can't Help Falling in Love – Elvis Presley",
  "Thinking Out Loud – Ed Sheeran",
  "At Last – Etta James",
  "Satu – Padi",
  "Kaulah Segalanya – Ruth Sahanaya",
];

function SectionLabel({ icon, label, color }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
      <Box sx={{ color: color || colors.primary, display: "flex" }}>{icon}</Box>
      <Typography sx={{ fontSize: "0.78rem", fontWeight: weight.semiBold, color: color || colors.primary, letterSpacing: "0.5px", textTransform: "uppercase" }}>
        {label}
      </Typography>
    </Box>
  );
}

const fieldSx = { "& .MuiOutlinedInput-root": { borderRadius: "10px" } };

const emptyForm = {
  name: "", phone: "", event: "", package: "", date: "", notes: "",
  groomName: "", brideName: "", loveStory: "",
  locationName: "", locationUrl: "", music: "",
  photos: [], video: null,
};

export default function OrderDialog({ open, onClose, selectedDesign }) {
  const { addOrder } = useOrders();
  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    if (selectedDesign) {
      setForm((prev) => ({ ...prev, event: selectedDesign.event, package: selectedDesign.package }));
    }
  }, [selectedDesign]);

  useEffect(() => {
    if (!open) { setSubmitted(false); setOrderId(null); setForm(emptyForm); }
  }, [open]);

  const set = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));
  const maxPhotos = MAX_PHOTOS[form.package] || 3;
  const canVideo = form.package === "Glow-Up" || form.package === "All Out";

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    set("photos", [...form.photos, ...files.slice(0, maxPhotos - form.photos.length)]);
    e.target.value = "";
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.date) {
      alert("Mohon lengkapi: Nama, WhatsApp, dan Tanggal Event.");
      return;
    }
    const id = addOrder(form, selectedDesign);
    setOrderId(id);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs" PaperProps={{ sx: { borderRadius: "18px" } }}>
        <DialogContent sx={{ textAlign: "center", py: 5, px: 4 }}>
          <CheckCircleIcon sx={{ fontSize: 56, color: colors.primary, mb: 2 }} />
          <Typography sx={{ fontWeight: weight.bold, fontSize: "1.1rem", mb: 0.5 }}>Pesanan Diterima! 🎉</Typography>
          <Typography sx={{ fontSize: "0.82rem", color: "#888", mb: 2 }}>ID Pesanan kamu:</Typography>
          <Chip label={orderId} sx={{ fontWeight: 700, fontSize: "0.85rem", background: `${colors.primary}15`, color: colors.primary, px: 1, mb: 2.5 }} />
          <Typography sx={{ fontSize: "0.78rem", color: "#aaa", lineHeight: 1.7 }}>
            Tim Sayvia akan segera menghubungi kamu via WhatsApp untuk konfirmasi lebih lanjut.
          </Typography>
          <Button fullWidth onClick={onClose} variant="contained"
            sx={{ mt: 3, borderRadius: "10px", background: colors.primary, textTransform: "none", fontWeight: weight.semiBold }}>
            Tutup
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" scroll="paper"
      PaperProps={{ sx: { borderRadius: "18px", overflow: "hidden" } }}>
      <DialogTitle sx={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary || "#068f7f"})`, color: "#fff", py: 2, px: 3 }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <Box>
            <Typography sx={{ fontWeight: weight.bold, fontSize: "1.05rem" }}>Form Pemesanan</Typography>
            {selectedDesign && (
              <Typography sx={{ fontSize: "0.75rem", opacity: 0.85, mt: 0.2 }}>
                {selectedDesign.name} · {selectedDesign.event} · {selectedDesign.package}
              </Typography>
            )}
          </Box>
          <IconButton onClick={onClose} size="small" sx={{ color: "#fff", mt: -0.5, "&:hover": { background: "rgba(255,255,255,0.15)" } }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ px: 3, py: 2.5 }}>
        <Stack spacing={2.5}>
          <Box>
            <Typography sx={{ fontSize: "0.7rem", fontWeight: weight.semiBold, color: "#aaa", letterSpacing: "1px", textTransform: "uppercase", mb: 1.5 }}>Informasi Dasar</Typography>
            <Stack spacing={1.5}>
              <TextField label="Nama Lengkap *" fullWidth size="small" value={form.name} onChange={(e) => set("name", e.target.value)} sx={fieldSx} />
              <TextField label="Nomor WhatsApp *" fullWidth size="small" value={form.phone} onChange={(e) => set("phone", e.target.value)} sx={fieldSx} />
              <TextField select label="Pilih Event" fullWidth size="small" value={form.event} onChange={(e) => set("event", e.target.value)} disabled={!!selectedDesign} helperText={selectedDesign ? "Otomatis dari desain yang dipilih" : ""} sx={fieldSx}>
                {events.map((ev) => <MenuItem key={ev} value={ev}>{ev}</MenuItem>)}
              </TextField>
              <TextField select label="Pilih Paket" fullWidth size="small" value={form.package} onChange={(e) => { set("package", e.target.value); set("photos", []); set("video", null); }} disabled={!!selectedDesign} helperText={selectedDesign ? "Otomatis dari desain yang dipilih" : ""} sx={fieldSx}>
                {packages.map((pkg) => <MenuItem key={pkg} value={pkg}>{pkg}</MenuItem>)}
              </TextField>
              <TextField label="Tanggal Event *" type="date" InputLabelProps={{ shrink: true }} fullWidth size="small" value={form.date} onChange={(e) => set("date", e.target.value)} sx={fieldSx} />
            </Stack>
          </Box>
          <Divider />
          <Box>
            <SectionLabel icon={<FavoriteIcon fontSize="small" />} label="Love Story" color="#d63b6e" />
            <Stack spacing={1.5}>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5 }}>
                <TextField label="Nama Pihak 1" size="small" fullWidth value={form.groomName} onChange={(e) => set("groomName", e.target.value)} sx={fieldSx} />
                <TextField label="Nama Pihak 2" size="small" fullWidth value={form.brideName} onChange={(e) => set("brideName", e.target.value)} sx={fieldSx} />
              </Box>
              <TextField label="Cerita Cinta" multiline rows={2} size="small" fullWidth value={form.loveStory} onChange={(e) => set("loveStory", e.target.value)} sx={fieldSx} />
            </Stack>
          </Box>
          <Divider />
          <Box>
            <SectionLabel icon={<LocationOnIcon fontSize="small" />} label="Peta Lokasi" />
            <Stack spacing={1.5}>
              <TextField label="Nama Tempat" size="small" fullWidth value={form.locationName} onChange={(e) => set("locationName", e.target.value)} sx={fieldSx} />
              <TextField label="Link Google Maps" size="small" fullWidth value={form.locationUrl} onChange={(e) => set("locationUrl", e.target.value)} sx={fieldSx} />
            </Stack>
          </Box>
          <Divider />
          <Box>
            <SectionLabel icon={<MusicNoteIcon fontSize="small" />} label="Background Music" />
            <TextField select label="Pilih Musik" fullWidth size="small" value={form.music} onChange={(e) => set("music", e.target.value)} sx={fieldSx}>
              <MenuItem value=""><em>— Tidak ada —</em></MenuItem>
              {MUSIC_LIST.map((m) => <MenuItem key={m} value={m}>{m}</MenuItem>)}
            </TextField>
          </Box>
          <Divider />
          <Box>
            <SectionLabel icon={<AddPhotoAlternateIcon fontSize="small" />} label={`Upload Foto (maks. ${maxPhotos})`} />
            {form.photos.length > 0 ? (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
                {form.photos.map((file, i) => (
                  <Box key={i} sx={{ position: "relative" }}>
                    <Avatar src={URL.createObjectURL(file)} variant="rounded" sx={{ width: 64, height: 64, borderRadius: "10px", border: `2px solid ${colors.primary}33` }} />
                    <IconButton size="small" onClick={() => set("photos", form.photos.filter((_, idx) => idx !== i))}
                      sx={{ position: "absolute", top: -6, right: -6, width: 18, height: 18, backgroundColor: "#e53935", color: "#fff", p: 0 }}>
                      <DeleteIcon sx={{ fontSize: 11 }} />
                    </IconButton>
                  </Box>
                ))}
                {form.photos.length < maxPhotos && (
                  <Box onClick={() => photoInputRef.current.click()} sx={{ width: 64, height: 64, borderRadius: "10px", border: `2px dashed ${colors.primary}66`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: colors.primary, fontSize: "1.5rem" }}>+</Box>
                )}
              </Box>
            ) : (
              <Box onClick={() => photoInputRef.current.click()} sx={{ border: `2px dashed ${colors.primary}55`, borderRadius: "12px", py: 2.5, display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5, cursor: "pointer", "&:hover": { background: `${colors.primary}06` } }}>
                <AddPhotoAlternateIcon sx={{ color: colors.primary, fontSize: 28 }} />
                <Typography sx={{ fontSize: "0.78rem", color: colors.primary, fontWeight: weight.semiBold }}>Klik untuk upload foto</Typography>
                <Typography sx={{ fontSize: "0.7rem", color: "#aaa" }}>Maks. {maxPhotos} foto</Typography>
              </Box>
            )}
            <input ref={photoInputRef} type="file" accept="image/*" multiple hidden onChange={handlePhotoChange} />
            <Typography sx={{ fontSize: "0.7rem", color: "#aaa", mt: 0.5 }}>{form.photos.length}/{maxPhotos} foto</Typography>
          </Box>
          <Box>
            <SectionLabel icon={<VideoCallIcon fontSize="small" />} label="Upload Video" color={canVideo ? colors.primary : "#bbb"} />
            {!canVideo ? (
              <Box sx={{ background: "#f5f5f5", borderRadius: "10px", py: 2, textAlign: "center" }}>
                <Typography sx={{ fontSize: "0.76rem", color: "#aaa" }}>Tersedia untuk paket <b>Glow-Up</b> & <b>All Out</b></Typography>
              </Box>
            ) : form.video ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.5, border: `1.5px solid ${colors.primary}33`, borderRadius: "12px" }}>
                <VideoCallIcon sx={{ color: colors.primary }} />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography sx={{ fontSize: "0.78rem", fontWeight: weight.semiBold, color: colors.primary }} noWrap>{form.video.name}</Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "#aaa" }}>{(form.video.size / (1024 * 1024)).toFixed(1)} MB</Typography>
                </Box>
                <IconButton size="small" onClick={() => set("video", null)} sx={{ color: "#e53935" }}><DeleteIcon fontSize="small" /></IconButton>
              </Box>
            ) : (
              <Box onClick={() => videoInputRef.current.click()} sx={{ border: `2px dashed ${colors.primary}55`, borderRadius: "12px", py: 2.5, display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5, cursor: "pointer", "&:hover": { background: `${colors.primary}06` } }}>
                <VideoCallIcon sx={{ color: colors.primary, fontSize: 28 }} />
                <Typography sx={{ fontSize: "0.78rem", color: colors.primary, fontWeight: weight.semiBold }}>Klik untuk upload video</Typography>
                <Typography sx={{ fontSize: "0.7rem", color: "#aaa" }}>MP4, MOV · Maks. 100 MB</Typography>
              </Box>
            )}
            <input ref={videoInputRef} type="file" accept="video/*" hidden onChange={(e) => { if (e.target.files[0]) set("video", e.target.files[0]); e.target.value = ""; }} />
          </Box>
          <Divider />
          <TextField label="Catatan Tambahan" multiline rows={2} fullWidth size="small" value={form.notes} onChange={(e) => set("notes", e.target.value)} sx={fieldSx} />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2, gap: 1, borderTop: "1px solid #f0f0f0" }}>
        <Button onClick={onClose} sx={{ textTransform: "none", color: "#888", borderRadius: "10px" }}>Batal</Button>
        <Button variant="contained" onClick={handleSubmit}
          sx={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary || "#068f7f"})`, textTransform: "none", borderRadius: "10px", px: 3, fontWeight: weight.semiBold }}>
          Kirim Pesanan 🎉
        </Button>
      </DialogActions>
    </Dialog>
  );
}