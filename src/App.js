import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Design from "./pages/Design";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/desain" element={<Design />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;