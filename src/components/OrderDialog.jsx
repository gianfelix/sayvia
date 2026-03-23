import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

import { colors } from "../theme/sayviaTheme";
import designs from "../data/designData";

// ambil options dari data
const events = [...new Set(designs.map((d) => d.event))];
const packages = [...new Set(designs.map((d) => d.package))];

export default function OrderDialog({ open, onClose, selectedDesign }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    package: "",
    date: "",
    notes: "",
  });

  // AUTO FILL kalau dari card
  useEffect(() => {
    if (selectedDesign) {
      setForm((prev) => ({
        ...prev,
        event: selectedDesign.event,
        package: selectedDesign.package,
      }));
    }
  }, [selectedDesign]);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    console.log("DATA:", form);
    alert("Pesanan berhasil dikirim!");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Form Pemesanan</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Nama Lengkap"
            fullWidth
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <TextField
            label="Nomor WhatsApp"
            fullWidth
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          {/* EVENT */}
          <TextField
            select
            label="Pilih Event"
            fullWidth
            value={form.event}
            onChange={(e) => handleChange("event", e.target.value)}
          >
            {events.map((ev) => (
              <MenuItem key={ev} value={ev}>
                {ev}
              </MenuItem>
            ))}
          </TextField>

          {/* PACKAGE */}
          <TextField
            select
            label="Pilih Paket"
            fullWidth
            value={form.package}
            onChange={(e) => handleChange("package", e.target.value)}
          >
            {packages.map((pkg) => (
              <MenuItem key={pkg} value={pkg}>
                {pkg}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Tanggal Event"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={form.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />

          <TextField
            label="Catatan Tambahan"
            multiline
            rows={3}
            fullWidth
            value={form.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Batal</Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ background: colors.primary }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}