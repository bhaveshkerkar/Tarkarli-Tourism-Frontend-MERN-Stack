import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Stay from "./pages/Stay";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import StayDetail from "./pages/StayDetail";
import ActivityDetail from "./pages/ActivityDetail";

// Scrolls to top on every route change.
// Without this, navigating from a scrolled page drops you mid-page on the new route.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/stay/:id" element={<StayDetail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<ActivityDetail />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 — catches any unknown URL */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
                <h1 className="text-6xl font-semibold text-gray-800">404</h1>
                <p className="text-xl text-gray-500">Page not found.</p>
                <a
                  href="/"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Go Home
                </a>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
