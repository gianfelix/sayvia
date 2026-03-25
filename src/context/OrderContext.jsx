import { createContext, useContext, useState, useEffect } from "react";

const ORDER_KEY = "sayvia_orders";

// ── helpers ──────────────────────────────────────────────────────────────────
const loadOrders = () => {
  try {
    const raw = localStorage.getItem(ORDER_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveOrders = (orders) => {
  localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
};

const generateId = () =>
  "ORD-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2, 5).toUpperCase();

// ── context ───────────────────────────────────────────────────────────────────
const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(loadOrders);

  // sync to localStorage whenever orders change
  useEffect(() => {
    saveOrders(orders);
  }, [orders]);

  const addOrder = (formData, selectedDesign) => {
    // strip File objects — store only metadata (can't serialize File to JSON)
    const photos = (formData.photos || []).map((f) => ({
      name: f.name,
      size: f.size,
      type: f.type,
    }));
    const video = formData.video
      ? { name: formData.video.name, size: formData.video.size, type: formData.video.type }
      : null;

    const newOrder = {
      id: generateId(),
      createdAt: new Date().toISOString(),
      status: "Baru",             // Baru | Diproses | Selesai | Dibatalkan
      design: {
        id: selectedDesign?.id || formData.designId,
        name: selectedDesign?.name || formData.designName || "-",
        event: selectedDesign?.event || formData.event || "-",
        package: selectedDesign?.package || formData.package || "-",
        img: selectedDesign?.img || null,
      },
      client: {
        name: formData.name,
        phone: formData.phone,
      },
      detail: {
        date: formData.date,
        groomName: formData.groomName || "",
        brideName: formData.brideName || "",
        loveStory: formData.loveStory || "",
        locationName: formData.locationName || "",
        locationUrl: formData.locationUrl || "",
        music: formData.music || "",
        notes: formData.notes || "",
      },
      media: { photos, video },
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder.id;
  };

  const updateStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    );
  };

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const clearAll = () => {
    setOrders([]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateStatus, deleteOrder, clearAll }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrders = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrders must be used inside <OrderProvider>");
  return ctx;
};