import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Design from "./pages/Design";
import PreviewPage from "./pages/PreviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/desain" element={<Design />} />
        <Route path="/preview/:slug" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;