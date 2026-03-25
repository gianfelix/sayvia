import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Design from "./pages/Design";
import PreviewPage from "./pages/PreviewPage";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/kerjacuk" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/desain" element={<Design />} />
          <Route path="/preview/:slug" element={<PreviewPage />} />
          <Route
            path="/kerjawoy"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
