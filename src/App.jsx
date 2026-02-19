import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Stay from "./pages/Stay";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stay" element={<Stay />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
