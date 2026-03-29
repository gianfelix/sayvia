import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  Stack,
  Tooltip,
  Divider,
  InputAdornment,
  Avatar,
  LinearProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useOrders } from "../context/OrderContext";
import { useAuth } from "../context/AuthContext";
// ── Theme ─────────────────────────────────────────────────────────────────────
const ADM = {
  sidebar: "#0f172a",
  sidebarHover: "#1e293b",
  sidebarActive: "#1d4ed8",
  accent: "#3b82f6",
  accentSoft: "#eff6ff",
  bg: "#f1f5f9",
  white: "#ffffff",
  border: "#e2e8f0",
  text: "#0f172a",
  textMuted: "#64748b",
  success: "#16a34a",
  successSoft: "#f0fdf4",
  warning: "#d97706",
  warningSoft: "#fffbeb",
  danger: "#dc2626",
  dangerSoft: "#fef2f2",
  info: "#0891b2",
  infoSoft: "#ecfeff",
};

const STATUS_META = {
  Baru: { bg: ADM.accentSoft, color: ADM.accent, dot: "#3b82f6" },
  Diproses: { bg: ADM.warningSoft, color: ADM.warning, dot: "#f59e0b" },
  Selesai: { bg: ADM.successSoft, color: ADM.success, dot: "#16a34a" },
  Dibatalkan: { bg: ADM.dangerSoft, color: ADM.danger, dot: "#ef4444" },
};

const STATUS_OPTIONS = ["Baru", "Diproses", "Selesai", "Dibatalkan"];

const NAV = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon fontSize="small" />,
  },
  {
    id: "orders",
    label: "Data Pesanan",
    icon: <ListAltIcon fontSize="small" />,
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
const fmt = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "-";
const fmtFull = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "-";
const fmtLong = (d) =>
  d
    ? new Date(d).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "-";

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({ label, value, icon, bg, color, sub }) {
  return (
    <Box
      sx={{
        background: ADM.white,
        border: `1px solid ${ADM.border}`,
        borderRadius: "14px",
        p: 2.5,
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "12px",
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color,
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "1.7rem",
            fontWeight: 800,
            color: ADM.text,
            lineHeight: 1,
          }}
        >
          {value}
        </Typography>
        <Typography sx={{ fontSize: "0.78rem", color: ADM.textMuted, mt: 0.3 }}>
          {label}
        </Typography>
        {sub && (
          <Typography
            sx={{ fontSize: "0.7rem", color, mt: 0.3, fontWeight: 600 }}
          >
            {sub}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

// ── Detail dialog ─────────────────────────────────────────────────────────────
function DetailDialog({ order, open, onClose }) {
  if (!order) return null;
  const sc = STATUS_META[order.status] || {};
  const Row = ({ label, val }) => (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "130px 1fr",
        gap: 1,
        py: 0.7,
        borderBottom: `1px solid ${ADM.border}`,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.75rem",
          color: ADM.textMuted,
          fontWeight: 500,
          pt: 0.1,
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{ fontSize: "0.82rem", color: ADM.text, wordBreak: "break-word" }}
      >
        {val || "—"}
      </Typography>
    </Box>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{ sx: { borderRadius: "16px", overflow: "hidden" } }}
    >
      <DialogTitle
        sx={{ background: ADM.sidebar, color: "#fff", py: 2.5, px: 3 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>
              Detail Pesanan
            </Typography>
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.6)",
                mt: 0.3,
                fontFamily: "monospace",
              }}
            >
              {order.id}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                px: 1.5,
                py: 0.4,
                borderRadius: "20px",
                background: sc.bg,
                color: sc.color,
                fontSize: "0.72rem",
                fontWeight: 700,
              }}
            >
              {order.status}
            </Box>
            <IconButton
              onClick={onClose}
              size="small"
              sx={{
                color: "rgba(255,255,255,0.7)",
                "&:hover": { color: "#fff" },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ px: 3, py: 0 }}>
        <Stack>
          {/* Section: Desain */}
          <Box sx={{ py: 2 }}>
            <Typography
              sx={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: ADM.accent,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              🎨 Desain
            </Typography>
            <Row label="Nama Desain" val={order.design.name} />
            <Row label="Event" val={order.design.event} />
            <Row label="Paket" val={order.design.package} />
          </Box>
          <Divider />

          {/* Section: Client */}
          <Box sx={{ py: 2 }}>
            <Typography
              sx={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: ADM.accent,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              👤 Client
            </Typography>
            <Row label="Nama Lengkap" val={order.client.name} />
            <Row label="WhatsApp" val={order.client.phone} />
            {order.client.phone && (
              <Box sx={{ mt: 1 }}>
                <Button
                  size="small"
                  startIcon={<WhatsAppIcon />}
                  href={`https://wa.me/${order.client.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  sx={{
                    textTransform: "none",
                    fontSize: "0.75rem",
                    color: "#25D366",
                    border: "1px solid #25D366",
                    borderRadius: "8px",
                    px: 1.5,
                  }}
                >
                  Chat WhatsApp
                </Button>
              </Box>
            )}
          </Box>
          <Divider />

          {/* Section: Detail acara */}
          <Box sx={{ py: 2 }}>
            <Typography
              sx={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: ADM.accent,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              📅 Detail Acara
            </Typography>
            <Row label="Tanggal Event" val={fmtLong(order.detail.date)} />
            <Row label="Nama Pihak 1" val={order.detail.groomName} />
            <Row label="Nama Pihak 2" val={order.detail.brideName} />
            <Row label="Love Story" val={order.detail.loveStory} />
            <Row label="Lokasi" val={order.detail.locationName} />
            <Row label="Link Maps" val={order.detail.locationUrl} />
            <Row label="Musik" val={order.detail.music} />
            <Row label="Catatan" val={order.detail.notes} />
          </Box>
          <Divider />

          {/* Section: Media */}
          <Box sx={{ py: 2 }}>
            <Typography
              sx={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: ADM.accent,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              📁 Media
            </Typography>
            <Row
              label="Jumlah Foto"
              val={`${order.media.photos.length} foto`}
            />
            {order.media.photos.length > 0 && (
              <Box sx={{ ml: "130px", mb: 1 }}>
                {order.media.photos.map((p, i) => (
                  <Typography
                    key={i}
                    sx={{ fontSize: "0.72rem", color: ADM.textMuted }}
                  >
                    📷 {p.name} ({(p.size / 1024).toFixed(0)} KB)
                  </Typography>
                ))}
              </Box>
            )}
            <Row
              label="Video"
              val={
                order.media.video
                  ? `${order.media.video.name} (${(order.media.video.size / (1024 * 1024)).toFixed(1)} MB)`
                  : "Tidak ada"
              }
            />
          </Box>

          {/* Footer meta */}
          <Box sx={{ py: 2, borderTop: `1px solid ${ADM.border}` }}>
            <Typography sx={{ fontSize: "0.72rem", color: ADM.textMuted }}>
              Dipesan pada: <b>{fmtFull(order.createdAt)}</b>
            </Typography>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

// ── Dashboard view ────────────────────────────────────────────────────────────
function DashboardView({ orders, setActiveNav }) {
  const total = orders.length;
  const baru = orders.filter((o) => o.status === "Baru").length;
  const diproses = orders.filter((o) => o.status === "Diproses").length;
  const selesai = orders.filter((o) => o.status === "Selesai").length;
  const dibatalkan = orders.filter((o) => o.status === "Dibatalkan").length;

  // Package breakdown
  const pkgCount = useMemo(() => {
    const map = {};
    orders.forEach((o) => {
      map[o.design.package] = (map[o.design.package] || 0) + 1;
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [orders]);

  // Event breakdown
  const eventCount = useMemo(() => {
    const map = {};
    orders.forEach((o) => {
      map[o.design.event] = (map[o.design.event] || 0) + 1;
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [orders]);

  // Recent 5
  const recent = orders.slice(0, 5);

  return (
    <Stack spacing={3}>
      {/* Stats row */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 2,
        }}
      >
        <StatCard
          label="Total Pesanan"
          value={total}
          icon={<ListAltIcon />}
          bg={ADM.accentSoft}
          color={ADM.accent}
        />
        <StatCard
          label="Pesanan Baru"
          value={baru}
          icon={<PendingIcon />}
          bg="#eff6ff"
          color="#3b82f6"
          sub={baru > 0 ? "Perlu diproses" : undefined}
        />
        <StatCard
          label="Sedang Diproses"
          value={diproses}
          icon={<TrendingUpIcon />}
          bg={ADM.warningSoft}
          color={ADM.warning}
        />
        <StatCard
          label="Selesai"
          value={selesai}
          icon={<CheckCircleIcon />}
          bg={ADM.successSoft}
          color={ADM.success}
        />
        <StatCard
          label="Dibatalkan"
          value={dibatalkan}
          icon={<WarningAmberIcon />}
          bg={ADM.dangerSoft}
          color={ADM.danger}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
        }}
      >
        {/* Paket breakdown */}
        <Box
          sx={{
            background: ADM.white,
            border: `1px solid ${ADM.border}`,
            borderRadius: "14px",
            p: 3,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "0.88rem", mb: 2.5 }}>
            Distribusi Paket
          </Typography>
          {pkgCount.length === 0 ? (
            <Typography sx={{ fontSize: "0.8rem", color: ADM.textMuted }}>
              Belum ada data
            </Typography>
          ) : (
            <Stack spacing={2}>
              {pkgCount.map(([pkg, count]) => (
                <Box key={pkg}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 0.5,
                    }}
                  >
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>
                      {pkg}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "0.8rem", color: ADM.textMuted }}
                    >
                      {count} pesanan (
                      {total > 0 ? Math.round((count / total) * 100) : 0}%)
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={total > 0 ? (count / total) * 100 : 0}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      background: ADM.border,
                      "& .MuiLinearProgress-bar": {
                        background: ADM.accent,
                        borderRadius: 4,
                      },
                    }}
                  />
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        {/* Event breakdown */}
        <Box
          sx={{
            background: ADM.white,
            border: `1px solid ${ADM.border}`,
            borderRadius: "14px",
            p: 3,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "0.88rem", mb: 2.5 }}>
            Distribusi Event
          </Typography>
          {eventCount.length === 0 ? (
            <Typography sx={{ fontSize: "0.8rem", color: ADM.textMuted }}>
              Belum ada data
            </Typography>
          ) : (
            <Stack spacing={1.5}>
              {eventCount.map(([ev, count]) => (
                <Box
                  key={ev}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 1.2,
                    borderRadius: "8px",
                    background: ADM.bg,
                  }}
                >
                  <Typography sx={{ fontSize: "0.82rem", fontWeight: 500 }}>
                    {ev}
                  </Typography>
                  <Chip
                    label={count}
                    size="small"
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      background: ADM.accentSoft,
                      color: ADM.accent,
                      height: 22,
                    }}
                  />
                </Box>
              ))}
            </Stack>
          )}
        </Box>
      </Box>

      {/* Recent orders */}
      <Box
        sx={{
          background: ADM.white,
          border: `1px solid ${ADM.border}`,
          borderRadius: "14px",
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2.5,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "0.88rem" }}>
            Pesanan Terbaru
          </Typography>
          <Button
            size="small"
            onClick={() => setActiveNav("orders")}
            sx={{
              textTransform: "none",
              fontSize: "0.75rem",
              color: ADM.accent,
            }}
          >
            Lihat semua →
          </Button>
        </Box>
        {recent.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography sx={{ fontSize: "2rem" }}>📭</Typography>
            <Typography
              sx={{ fontSize: "0.82rem", color: ADM.textMuted, mt: 1 }}
            >
              Belum ada pesanan masuk.
            </Typography>
          </Box>
        ) : (
          <Stack spacing={1.5}>
            {recent.map((o) => {
              const sc = STATUS_META[o.status] || {};
              return (
                <Box
                  key={o.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 1.5,
                    borderRadius: "10px",
                    border: `1px solid ${ADM.border}`,
                    "&:hover": { background: ADM.bg },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 36,
                      height: 36,
                      background: ADM.accentSoft,
                      color: ADM.accent,
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    {o.client.name?.[0]?.toUpperCase() || "?"}
                  </Avatar>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      sx={{ fontSize: "0.82rem", fontWeight: 600 }}
                      noWrap
                    >
                      {o.client.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "0.72rem", color: ADM.textMuted }}
                      noWrap
                    >
                      {o.design.name} · {o.design.package}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        px: 1.2,
                        py: 0.3,
                        borderRadius: "20px",
                        background: sc.bg,
                        color: sc.color,
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {o.status}
                    </Box>
                    <Typography
                      sx={{ fontSize: "0.65rem", color: ADM.textMuted }}
                    >
                      {fmt(o.createdAt)}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        )}
      </Box>

      {/* Warning banner */}
      <Box
        sx={{
          background: "#fffbeb",
          border: "1px solid #fde68a",
          borderRadius: "12px",
          px: 2.5,
          py: 1.5,
          display: "flex",
          alignItems: "flex-start",
          gap: 1.5,
        }}
      >
        <WarningAmberIcon
          sx={{ color: "#d97706", fontSize: 18, mt: 0.2, flexShrink: 0 }}
        />
        <Typography
          sx={{ fontSize: "0.78rem", color: "#7c4a00", lineHeight: 1.6 }}
        >
          Data tersimpan di <b>localStorage</b> browser ini saja. Akan hilang
          jika browser di-clear atau berpindah perangkat. Segera integrasikan ke
          backend.
        </Typography>
      </Box>
    </Stack>
  );
}

// ── Orders view ───────────────────────────────────────────────────────────────
function OrdersView({ orders, updateStatus, deleteOrder, clearAll }) {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");
  const [detailOrder, setDetailOrder] = useState(null);
  const [confirmClear, setConfirmClear] = useState(false);

  const filtered = useMemo(
    () =>
      orders.filter((o) => {
        const q = search.toLowerCase();
        const matchSearch =
          o.id.toLowerCase().includes(q) ||
          o.client.name.toLowerCase().includes(q) ||
          o.design.name.toLowerCase().includes(q) ||
          o.client.phone.includes(q);
        const matchStatus =
          filterStatus === "Semua" || o.status === filterStatus;
        return matchSearch && matchStatus;
      }),
    [orders, search, filterStatus],
  );

  const handleExport = () => {
    const headers = [
      "ID",
      "Tanggal Pesan",
      "Status",
      "Nama",
      "WA",
      "Desain",
      "Event",
      "Paket",
      "Tgl Event",
      "Lokasi",
      "Musik",
      "Foto",
      "Video",
    ];
    const rows = orders.map((o) => [
      o.id,
      fmtFull(o.createdAt),
      o.status,
      o.client.name,
      o.client.phone,
      o.design.name,
      o.design.event,
      o.design.package,
      o.detail.date,
      o.detail.locationName,
      o.detail.music,
      o.media.photos.length,
      o.media.video ? "Ya" : "Tidak",
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((v) => `"${v || ""}"`).join(","))
      .join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = `sayvia-orders-${Date.now()}.csv`;
    a.click();
  };

  return (
    <Stack spacing={2.5}>
      {/* Toolbar */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 1.5, flex: 1, flexWrap: "wrap" }}>
          <TextField
            placeholder="Cari nama, ID, atau desain..."
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              minWidth: 220,
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                background: ADM.white,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ fontSize: 17, color: "#aaa" }} />
                </InputAdornment>
              ),
            }}
          />
          <Select
            size="small"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            sx={{ minWidth: 140, borderRadius: "10px", background: ADM.white }}
          >
            <MenuItem value="Semua">Semua Status</MenuItem>
            {STATUS_OPTIONS.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            startIcon={<FileDownloadIcon />}
            onClick={handleExport}
            disabled={orders.length === 0}
            size="small"
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              borderColor: ADM.accent,
              color: ADM.accent,
              "&:hover": { background: ADM.accentSoft },
            }}
          >
            Export CSV
          </Button>
          <Button
            startIcon={<DeleteSweepIcon />}
            onClick={() => setConfirmClear(true)}
            disabled={orders.length === 0}
            size="small"
            variant="outlined"
            color="error"
            sx={{ textTransform: "none", borderRadius: "8px" }}
          >
            Hapus Semua
          </Button>
        </Box>
      </Box>

      {/* Result count */}
      <Typography sx={{ fontSize: "0.78rem", color: ADM.textMuted }}>
        Menampilkan <b>{filtered.length}</b> dari <b>{orders.length}</b> pesanan
      </Typography>

      {/* Table */}
      {filtered.length === 0 ? (
        <Box
          sx={{
            background: ADM.white,
            border: `1px solid ${ADM.border}`,
            borderRadius: "14px",
            textAlign: "center",
            py: 10,
          }}
        >
          <Typography fontSize="2.5rem">📭</Typography>
          <Typography fontSize="0.88rem" color={ADM.textMuted} mt={1}>
            {orders.length === 0
              ? "Belum ada pesanan masuk."
              : "Tidak ada pesanan yang cocok."}
          </Typography>
        </Box>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "14px",
            border: `1px solid ${ADM.border}`,
            boxShadow: "none",
          }}
        >
          <Table size="small">
            <TableHead>
              <TableRow sx={{ background: "#f8fafc" }}>
                {[
                  "ID Pesanan",
                  "Tanggal",
                  "Client",
                  "Desain",
                  "Paket",
                  "Tgl Event",
                  "Status",
                  "Aksi",
                ].map((h) => (
                  <TableCell
                    key={h}
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      color: ADM.textMuted,
                      whiteSpace: "nowrap",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      borderBottom: `1px solid ${ADM.border}`,
                    }}
                  >
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.map((order) => {
                const sc = STATUS_META[order.status] || {};
                return (
                  <TableRow
                    key={order.id}
                    sx={{
                      "&:hover": { background: "#f8fafc" },
                      "& td": { borderBottom: `1px solid ${ADM.border}` },
                    }}
                  >
                    <TableCell
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.72rem",
                        color: ADM.accent,
                        fontWeight: 600,
                      }}
                    >
                      {order.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "0.75rem",
                        color: ADM.textMuted,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {fmt(order.createdAt)}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Avatar
                          sx={{
                            width: 28,
                            height: 28,
                            background: ADM.accentSoft,
                            color: ADM.accent,
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          {order.client.name?.[0]?.toUpperCase() || "?"}
                        </Avatar>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "0.8rem",
                              fontWeight: 600,
                              lineHeight: 1.2,
                            }}
                          >
                            {order.client.name}
                          </Typography>
                          <Typography
                            sx={{ fontSize: "0.68rem", color: ADM.textMuted }}
                          >
                            {order.client.phone}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: "0.78rem", fontWeight: 500 }}>
                        {order.design.name}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "0.68rem", color: ADM.textMuted }}
                      >
                        {order.design.event}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={order.design.package}
                        size="small"
                        sx={{
                          fontSize: "0.65rem",
                          height: 20,
                          background: "#f1f5f9",
                          color: "#334155",
                          fontWeight: 600,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "0.75rem",
                        whiteSpace: "nowrap",
                        color: ADM.textMuted,
                      }}
                    >
                      {fmtLong(order.detail.date)}
                    </TableCell>
                    <TableCell>
                      <Select
                        size="small"
                        value={order.status}
                        onChange={(e) => updateStatus(order.id, e.target.value)}
                        sx={{
                          fontSize: "0.72rem",
                          borderRadius: "8px",
                          minWidth: 112,
                          fontWeight: 700,
                          background: sc.bg,
                          color: sc.color,
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: sc.color + "44",
                          },
                          "& .MuiSelect-icon": { color: sc.color },
                        }}
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <MenuItem
                            key={s}
                            value={s}
                            sx={{ fontSize: "0.78rem" }}
                          >
                            {s}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 0.5 }}>
                        <Tooltip title="Detail" arrow>
                          <IconButton
                            size="small"
                            onClick={() => setDetailOrder(order)}
                            sx={{
                              color: ADM.accent,
                              "&:hover": { background: ADM.accentSoft },
                            }}
                          >
                            <VisibilityIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Hapus" arrow>
                          <IconButton
                            size="small"
                            onClick={() => deleteOrder(order.id)}
                            sx={{
                              color: ADM.danger,
                              "&:hover": { background: ADM.dangerSoft },
                            }}
                          >
                            <DeleteIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <DetailDialog
        order={detailOrder}
        open={!!detailOrder}
        onClose={() => setDetailOrder(null)}
      />

      <Dialog
        open={confirmClear}
        onClose={() => setConfirmClear(false)}
        PaperProps={{ sx: { borderRadius: "14px" } }}
      >
        <DialogTitle sx={{ fontWeight: 700 }}>Hapus Semua Pesanan?</DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: "0.85rem", color: ADM.textMuted }}>
            Tindakan ini tidak bisa dibatalkan. Semua <b>{orders.length}</b>{" "}
            pesanan akan dihapus.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() => setConfirmClear(false)}
            sx={{ textTransform: "none" }}
          >
            Batal
          </Button>
          <Button
            onClick={() => {
              clearAll();
              setConfirmClear(false);
            }}
            color="error"
            variant="contained"
            sx={{ textTransform: "none", borderRadius: "8px" }}
          >
            Hapus Semua
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

// ── Main AdminPage ────────────────────────────────────────────────────────────
export default function AdminPage() {
  const { orders, updateStatus, deleteOrder, clearAll } = useOrders();
  const [activeNav, setActiveNav] = useState("dashboard");
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const PAGE_TITLE = { dashboard: "Dashboard", orders: "Data Pesanan" };

  const { logout } = useAuth();
  const SidebarContent = () => (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", py: 3 }}
    >
      {/* Logo */}
      <Box sx={{ px: 3, mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "10px",
              background: ADM.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "#fff", fontWeight: 800, fontSize: "0.9rem" }}
            >
              S
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 800,
                fontSize: "0.95rem",
                lineHeight: 1,
              }}
            >
              Sayvia
            </Typography>
            <Typography
              sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem" }}
            >
              Admin Panel
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Nav items */}
      <Stack spacing={0.5} px={1.5} flex={1}>
        {NAV.map((item) => {
          const active = activeNav === item.id;
          return (
            <Box
              key={item.id}
              onClick={() => {
                setActiveNav(item.id);
                setMobileSidebar(false);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2,
                py: 1.2,
                borderRadius: "10px",
                cursor: "pointer",
                background: active ? ADM.sidebarActive : "transparent",
                color: active ? "#fff" : "rgba(255,255,255,0.55)",
                transition: "all 0.15s",
                "&:hover": {
                  background: active ? ADM.sidebarActive : ADM.sidebarHover,
                  color: "#fff",
                },
              }}
            >
              {item.icon}
              <Typography
                sx={{ fontSize: "0.85rem", fontWeight: active ? 700 : 400 }}
              >
                {item.label}
              </Typography>
              {item.id === "orders" &&
                orders.filter((o) => o.status === "Baru").length > 0 && (
                  <Box
                    sx={{
                      ml: "auto",
                      background: "#ef4444",
                      color: "#fff",
                      borderRadius: "20px",
                      px: 1,
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      minWidth: 20,
                      textAlign: "center",
                    }}
                  >
                    {orders.filter((o) => o.status === "Baru").length}
                  </Box>
                )}
            </Box>
          );
        })}
      </Stack>

      {/* Footer */}
      <Box sx={{ px: 3, pt: 2, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              background: ADM.sidebarActive,
              fontSize: "0.8rem",
            }}
          >
            A
          </Avatar>
          <Box>
            <Typography
              sx={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600 }}
            >
              Admin
            </Typography>
            <Typography
              sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem" }}
            >
              sayvia.id
            </Typography>
          </Box>
          <Button
            startIcon={<LogoutIcon />}
            onClick={logout}
            sx={{
              mt: 2,
              color: "#fff",
              textTransform: "none",
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: ADM.bg,
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {/* ── SIDEBAR DESKTOP ── */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: 220,
          flexShrink: 0,
          background: ADM.sidebar,
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <SidebarContent />
      </Box>

      {/* ── MOBILE SIDEBAR DRAWER ── */}
      {mobileSidebar && (
        <Box sx={{ position: "fixed", inset: 0, zIndex: 1200 }}>
          <Box
            onClick={() => setMobileSidebar(false)}
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 220,
              background: ADM.sidebar,
              zIndex: 1,
            }}
          >
            <SidebarContent />
          </Box>
        </Box>
      )}

      {/* ── MAIN CONTENT ── */}
      <Box
        sx={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}
      >
        {/* Top bar */}
        <Box
          sx={{
            background: ADM.white,
            border: `1px solid ${ADM.border}`,
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            px: 3,
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, color: ADM.text }}
              onClick={() => setMobileSidebar(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box>
              <Typography
                sx={{ fontWeight: 700, fontSize: "1rem", color: ADM.text }}
              >
                {PAGE_TITLE[activeNav]}
              </Typography>
              <Typography sx={{ fontSize: "0.72rem", color: ADM.textMuted }}>
                {new Date().toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
            </Box>
          </Box>
          <Chip
            label="⚠ Data Lokal"
            size="small"
            sx={{
              fontSize: "0.7rem",
              background: "#fffbeb",
              color: "#d97706",
              border: "1px solid #fde68a",
              fontWeight: 600,
            }}
          />
        </Box>

        {/* Page content */}
        <Box sx={{ flex: 1, p: { xs: 2, md: 3 }, overflowY: "auto" }}>
          {activeNav === "dashboard" && (
            <DashboardView orders={orders} setActiveNav={setActiveNav} />
          )}
          {activeNav === "orders" && (
            <OrdersView
              orders={orders}
              updateStatus={updateStatus}
              deleteOrder={deleteOrder}
              clearAll={clearAll}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
