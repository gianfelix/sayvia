import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    const success = login(form.username, form.password);

    if (success) {
      navigate("/kerjawoy");
    } else {
      alert("Username / Password salah");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f1f5f9",
      }}
    >
      <Paper sx={{ p: 4, width: 350, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Login Admin
        </Typography>

        <TextField
          label="Username"
          fullWidth
          sx={{ mb: 2 }}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          sx={{ mb: 3 }}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <Button fullWidth variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
}