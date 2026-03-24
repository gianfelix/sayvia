import { useEffect, useState, useRef, useMemo } from "react";
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
  Card,
  CardMedia,
  Tooltip,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

const STEPS = ["Pilih Desain", "Detail Acara", "Media & Konten"];

function SectionLabel({ icon, label, color }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
      <Box sx={{ color: color || colors.primary, display: "flex" }}>{icon}</Box>
      <Typography
        sx={{
          fontSize: "0.78rem",
          fontWeight: weight.semiBold,
          color: color || colors.primary,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

// ── Step 1: Design Picker ────────────────────────────────────────────────────
function StepDesign({ form, set }) {
  const filtered = useMemo(() => {
    let list = designs;
    if (form.event && form.event !== "")
      list = list.filter((d) => d.event === form.event);
    if (form.package && form.package !== "")
      list = list.filter((d) => d.package === form.package);
    return list;
  }, [form.event, form.package]);

  return (
    <Stack spacing={2.5}>
      {/* Event + Package */}
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5 }}>
        <TextField
          select
          label="Pilih Event"
          size="small"
          fullWidth
          value={form.event}
          onChange={(e) => {
            set("event", e.target.value);
            set("designId", null);
          }}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
        >
          <MenuItem value="">
            <em>— Semua —</em>
          </MenuItem>
          {events.map((ev) => (
            <MenuItem key={ev} value={ev}>
              {ev}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Pilih Paket"
          size="small"
          fullWidth
          value={form.package}
          onChange={(e) => {
            set("package", e.target.value);
            set("designId", null);
            set("photos", []);
            set("video", null);
          }}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
        >
          <MenuItem value="">
            <em>— Semua —</em>
          </MenuItem>
          {packages.map((pkg) => (
            <MenuItem key={pkg} value={pkg}>
              {pkg}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Result count */}
      <Typography sx={{ fontSize: "0.75rem", color: "#aaa" }}>
        {filtered.length} desain tersedia{" "}
        {form.event || form.package ? "— filter aktif" : ""}
      </Typography>

      {/* Design card grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1.5,
          maxHeight: 380,
          overflowY: "auto",
          pr: 0.5,
          // scrollbar styling
          "&::-webkit-scrollbar": { width: 4 },
          "&::-webkit-scrollbar-track": {
            borderRadius: 4,
            background: "#f0f0f0",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: 4,
            background: colors.primary + "66",
          },
        }}
      >
        {filtered.map((design) => {
          const selected = form.designId === design.id;
          return (
            <Box
              key={design.id}
              onClick={() => set("designId", selected ? null : design.id)}
              sx={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                border: selected
                  ? `2.5px solid ${colors.primary}`
                  : "2.5px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: selected
                  ? `0 4px 16px ${colors.primary}44`
                  : "0 2px 8px rgba(0,0,0,0.08)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 6px 20px ${colors.primary}33`,
                },
              }}
            >
              {/* Thumbnail */}
              <Box
                sx={{
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  background: "#f5f5f5",
                }}
              >
                <CardMedia
                  component="img"
                  image={design.img}
                  alt={design.name}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>

              {/* Overlay on select */}
              {selected && (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: `${colors.primary}22`,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    p: 0.7,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: colors.primary,
                      fontSize: 20,
                      background: "#fff",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
              )}

              {/* Tag chip */}
              {design.tag !== "-" && (
                <Chip
                  label={design.tag}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 5,
                    left: 5,
                    fontSize: "0.58rem",
                    height: 18,
                    background: colors.primary,
                    color: "#fff",
                    fontWeight: 700,
                  }}
                />
              )}

              {/* Name + preview */}
              <Box sx={{ p: "6px 8px", background: "#fff" }}>
                <Typography
                  sx={{ fontSize: "0.72rem", fontWeight: 600, lineHeight: 1.2 }}
                  noWrap
                >
                  {design.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 0.3,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "0.62rem", color: "#aaa" }}
                    noWrap
                  >
                    {design.event}
                  </Typography>
                  <Tooltip title="Preview" placement="top" arrow>
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(design.previewUrl || design.img, "_blank");
                      }}
                      sx={{
                        p: "2px",
                        color: colors.primary,
                        "&:hover": { background: `${colors.primary}15` },
                      }}
                    >
                      <VisibilityIcon sx={{ fontSize: 13 }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          );
        })}

        {filtered.length === 0 && (
          <Box
            sx={{
              gridColumn: "1/-1",
              textAlign: "center",
              py: 6,
              color: "#bbb",
            }}
          >
            <Typography fontSize="2rem">😢</Typography>
            <Typography fontSize="0.8rem" mt={1}>
              Tidak ada desain yang cocok.
            </Typography>
          </Box>
        )}
      </Box>

      {/* Selected summary */}
      {form.designId &&
        (() => {
          const d = designs.find((x) => x.id === form.designId);
          return d ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 1.5,
                borderRadius: "10px",
                background: `${colors.primary}0d`,
                border: `1px solid ${colors.primary}33`,
              }}
            >
              <CheckCircleIcon sx={{ color: colors.primary, fontSize: 18 }} />
              <Typography
                sx={{
                  fontSize: "0.82rem",
                  fontWeight: weight.semiBold,
                  color: colors.primary,
                }}
              >
                Dipilih: <b>{d.name}</b> · {d.event} · {d.package}
              </Typography>
            </Box>
          ) : null;
        })()}
    </Stack>
  );
}

// ── Step 2: Detail Acara ─────────────────────────────────────────────────────
function StepDetail({ form, set }) {
  const fieldSx = { "& .MuiOutlinedInput-root": { borderRadius: "10px" } };
  return (
    <Stack spacing={2}>
      <TextField
        label="Nama Lengkap *"
        size="small"
        fullWidth
        value={form.name}
        onChange={(e) => set("name", e.target.value)}
        sx={fieldSx}
      />
      <TextField
        label="Nomor WhatsApp *"
        size="small"
        fullWidth
        value={form.phone}
        onChange={(e) => set("phone", e.target.value)}
        sx={fieldSx}
      />
      <TextField
        label="Tanggal Event *"
        type="date"
        InputLabelProps={{ shrink: true }}
        size="small"
        fullWidth
        value={form.date}
        onChange={(e) => set("date", e.target.value)}
        sx={fieldSx}
      />

      <Divider />

      <SectionLabel
        icon={<FavoriteIcon fontSize="small" />}
        label="Love Story"
        color="#d63b6e"
      />
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5 }}>
        <TextField
          label="Nama Pihak 1"
          size="small"
          fullWidth
          value={form.groomName}
          onChange={(e) => set("groomName", e.target.value)}
          sx={fieldSx}
        />
        <TextField
          label="Nama Pihak 2"
          size="small"
          fullWidth
          value={form.brideName}
          onChange={(e) => set("brideName", e.target.value)}
          sx={fieldSx}
        />
      </Box>
      <TextField
        label="Cerita Cinta (opsional)"
        multiline
        rows={2}
        size="small"
        fullWidth
        placeholder="Ceritakan kisah kalian di sini..."
        value={form.loveStory}
        onChange={(e) => set("loveStory", e.target.value)}
        sx={fieldSx}
      />

      <Divider />

      <SectionLabel
        icon={<LocationOnIcon fontSize="small" />}
        label="Peta Lokasi"
      />
      <TextField
        label="Nama Tempat / Gedung"
        size="small"
        fullWidth
        value={form.locationName}
        onChange={(e) => set("locationName", e.target.value)}
        sx={fieldSx}
        placeholder="cth: Grand Ballroom Hotel Mulia"
      />
      <TextField
        label="Link Google Maps"
        size="small"
        fullWidth
        value={form.locationUrl}
        onChange={(e) => set("locationUrl", e.target.value)}
        sx={fieldSx}
        placeholder="https://maps.google.com/..."
      />

      <Divider />

      <SectionLabel
        icon={<MusicNoteIcon fontSize="small" />}
        label="Background Music"
      />
      <TextField
        select
        label="Pilih Musik Latar"
        size="small"
        fullWidth
        value={form.music}
        onChange={(e) => set("music", e.target.value)}
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
      >
        <MenuItem value="">
          <em>— Tidak ada musik —</em>
        </MenuItem>
        {MUSIC_LIST.map((m) => (
          <MenuItem key={m.id} value={m.title}>
            {m.title}
          </MenuItem>
        ))}
      </TextField>

      <Divider />

      <TextField
        label="Catatan Tambahan"
        multiline
        rows={2}
        size="small"
        fullWidth
        placeholder="Ada permintaan khusus?"
        value={form.notes}
        onChange={(e) => set("notes", e.target.value)}
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
      />
    </Stack>
  );
}

// ── Step 3: Media ────────────────────────────────────────────────────────────
function StepMedia({ form, set }) {
  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const maxPhotos = MAX_PHOTOS[form.package] || 3;
  const canVideo = form.package === "Glow-Up" || form.package === "All Out";

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    const remaining = maxPhotos - form.photos.length;
    set("photos", [...form.photos, ...files.slice(0, remaining)]);
    e.target.value = "";
  };

  const handleVideoChange = (e) => {
    if (e.target.files[0]) set("video", e.target.files[0]);
    e.target.value = "";
  };

  return (
    <Stack spacing={2.5}>
      {/* FOTO */}
      <Box>
        <SectionLabel
          icon={<AddPhotoAlternateIcon fontSize="small" />}
          label={`Upload Foto (maks. ${maxPhotos})`}
        />

        {form.photos.length > 0 ? (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
            {form.photos.map((file, i) => (
              <Box key={i} sx={{ position: "relative" }}>
                <Avatar
                  src={URL.createObjectURL(file)}
                  variant="rounded"
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "10px",
                    border: `2px solid ${colors.primary}33`,
                  }}
                />
                <IconButton
                  size="small"
                  onClick={() =>
                    set(
                      "photos",
                      form.photos.filter((_, idx) => idx !== i),
                    )
                  }
                  sx={{
                    position: "absolute",
                    top: -6,
                    right: -6,
                    width: 18,
                    height: 18,
                    backgroundColor: "#e53935",
                    color: "#fff",
                    p: 0,
                    "&:hover": { backgroundColor: "#b71c1c" },
                  }}
                >
                  <DeleteIcon sx={{ fontSize: 11 }} />
                </IconButton>
              </Box>
            ))}
            {form.photos.length < maxPhotos && (
              <Box
                onClick={() => photoInputRef.current.click()}
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "10px",
                  border: `2px dashed ${colors.primary}66`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: colors.primary,
                  fontSize: "1.5rem",
                  "&:hover": { background: `${colors.primary}08` },
                }}
              >
                +
              </Box>
            )}
          </Box>
        ) : (
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
              "&:hover": {
                background: `${colors.primary}06`,
                borderColor: colors.primary,
              },
            }}
          >
            <AddPhotoAlternateIcon
              sx={{ color: colors.primary, fontSize: 30 }}
            />
            <Typography
              sx={{
                fontSize: "0.78rem",
                color: colors.primary,
                fontWeight: weight.semiBold,
              }}
            >
              Klik untuk upload foto
            </Typography>
            <Typography sx={{ fontSize: "0.7rem", color: "#aaa" }}>
              Maks. {maxPhotos} foto · JPG, PNG, WEBP
            </Typography>
          </Box>
        )}
        <input
          ref={photoInputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={handlePhotoChange}
        />
        <Typography sx={{ fontSize: "0.7rem", color: "#aaa", mt: 0.5 }}>
          {form.photos.length}/{maxPhotos} foto diunggah
        </Typography>
      </Box>

      <Divider />

      {/* VIDEO */}
      <Box>
        <SectionLabel
          icon={<VideoCallIcon fontSize="small" />}
          label="Upload Video"
          color={canVideo ? colors.primary : "#bbb"}
        />
        {!canVideo ? (
          <Box
            sx={{
              background: "#f5f5f5",
              borderRadius: "10px",
              py: 2,
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "0.76rem", color: "#aaa" }}>
              Tersedia untuk paket <b>Glow-Up</b> & <b>All Out</b>
            </Typography>
          </Box>
        ) : form.video ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              p: 1.5,
              border: `1.5px solid ${colors.primary}33`,
              borderRadius: "12px",
              background: `${colors.primary}06`,
            }}
          >
            <VideoCallIcon sx={{ color: colors.primary, fontSize: 26 }} />
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: "0.78rem",
                  fontWeight: weight.semiBold,
                  color: colors.primary,
                }}
                noWrap
              >
                {form.video.name}
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", color: "#aaa" }}>
                {(form.video.size / (1024 * 1024)).toFixed(1)} MB
              </Typography>
            </Box>
            <IconButton
              size="small"
              onClick={() => set("video", null)}
              sx={{ color: "#e53935" }}
            >
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
              "&:hover": {
                background: `${colors.primary}06`,
                borderColor: colors.primary,
              },
            }}
          >
            <VideoCallIcon sx={{ color: colors.primary, fontSize: 30 }} />
            <Typography
              sx={{
                fontSize: "0.78rem",
                color: colors.primary,
                fontWeight: weight.semiBold,
              }}
            >
              Klik untuk upload video
            </Typography>
            <Typography sx={{ fontSize: "0.7rem", color: "#aaa" }}>
              MP4, MOV · Maks. 100 MB
            </Typography>
          </Box>
        )}
        <input
          ref={videoInputRef}
          type="file"
          accept="video/*"
          hidden
          onChange={handleVideoChange}
        />
      </Box>
    </Stack>
  );
}

// ── Main Dialog ──────────────────────────────────────────────────────────────
export default function NavbarOrderDialog({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    package: "",
    date: "",
    notes: "",
    designId: null,
    groomName: "",
    brideName: "",
    loveStory: "",
    locationName: "",
    locationUrl: "",
    music: "",
    photos: [],
    video: null,
  });

  // reset on close
  useEffect(() => {
    if (!open) {
      setStep(0);
      setForm({
        name: "",
        phone: "",
        event: "",
        package: "",
        date: "",
        notes: "",
        designId: null,
        groomName: "",
        brideName: "",
        loveStory: "",
        locationName: "",
        locationUrl: "",
        music: "",
        photos: [],
        video: null,
      });
    }
  }, [open]);

  const set = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canNext = () => {
    if (step === 0) return !!form.designId;
    if (step === 1) return !!(form.name && form.phone && form.date);
    return true;
  };

  const handleNext = () => {
    if (canNext()) setStep((s) => s + 1);
  };
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = () => {
    const design = designs.find((d) => d.id === form.designId);
    const payload = { ...form, designName: design?.name };
    console.log("DATA PESANAN:", payload);
    alert(
      "Pesanan berhasil dikirim! Tim Sayvia akan segera menghubungi kamu 🎉",
    );
    onClose();
  };

  const selectedDesign = designs.find((d) => d.id === form.designId);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      scroll="paper"
      PaperProps={{
        sx: { borderRadius: "18px", overflow: "hidden", maxHeight: "92vh" },
      }}
    >
      {/* HEADER */}
      <DialogTitle
        sx={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary || "#068f7f"})`,
          color: "#fff",
          py: 2,
          px: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: weight.bold, fontSize: "1.05rem" }}>
              Form Pemesanan
            </Typography>
            {selectedDesign && step > 0 && (
              <Typography sx={{ fontSize: "0.75rem", opacity: 0.85, mt: 0.2 }}>
                {selectedDesign.name} · {selectedDesign.event} ·{" "}
                {selectedDesign.package}
              </Typography>
            )}
          </Box>
          <IconButton
            onClick={onClose}
            size="small"
            sx={{
              color: "#fff",
              mt: -0.5,
              "&:hover": { background: "rgba(255,255,255,0.15)" },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Stepper */}
        <Stepper activeStep={step} sx={{ mt: 2 }}>
          {STEPS.map((label) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  "& .MuiStepLabel-label": {
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.72rem",
                  },
                  "& .MuiStepLabel-label.Mui-active": {
                    color: "#fff",
                    fontWeight: 700,
                  },
                  "& .MuiStepLabel-label.Mui-completed": {
                    color: "rgba(255,255,255,0.85)",
                  },
                  "& .MuiStepIcon-root": { color: "rgba(255,255,255,0.35)" },
                  "& .MuiStepIcon-root.Mui-active": { color: "#fff" },
                  "& .MuiStepIcon-root.Mui-completed": {
                    color: "rgba(255,255,255,0.75)",
                  },
                  "& .MuiStepIcon-text": { fill: colors.primary },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </DialogTitle>

      <DialogContent sx={{ mt:2, px: 3, py: 2.5 }}>
        {step === 0 && <StepDesign form={form} set={set} />}
        {step === 1 && <StepDetail form={form} set={set} />}
        {step === 2 && <StepMedia form={form} set={set} />}
      </DialogContent>

      {/* FOOTER */}
      <DialogActions
        sx={{
          px: 3,
          py: 2,
          gap: 1,
          borderTop: "1px solid #f0f0f0",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={step === 0 ? onClose : handleBack}
          startIcon={step > 0 ? <ArrowBackIcon /> : null}
          sx={{ textTransform: "none", color: "#888", borderRadius: "10px" }}
        >
          {step === 0 ? "Batal" : "Kembali"}
        </Button>

        {step < STEPS.length - 1 ? (
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!canNext()}
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary || "#068f7f"})`,
              textTransform: "none",
              borderRadius: "10px",
              px: 3,
              fontWeight: weight.semiBold,
              "&:hover": { filter: "brightness(1.1)" },
              "&.Mui-disabled": { background: "#e0e0e0", color: "#aaa" },
            }}
          >
            Lanjut
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary || "#068f7f"})`,
              textTransform: "none",
              borderRadius: "10px",
              px: 3,
              fontWeight: weight.semiBold,
              "&:hover": { filter: "brightness(1.1)" },
            }}
          >
            Kirim Pesanan 🎉
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
