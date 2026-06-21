import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  // Track scroll position only on Home, since only Home has a hero to sit over
  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const baseLink = "relative px-3 py-2 text-sm font-medium transition-colors";
  const activeUnderline =
    "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full";

  const linkColor = transparent
    ? "text-white/80 hover:text-white"
    : "text-gray-700 hover:text-blue-600";

  const activeLinkColor = transparent
    ? `text-white after:bg-white ${activeUnderline}`
    : `text-blue-600 after:bg-blue-600 ${activeUnderline}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        transparent
          ? "bg-gradient-to-b from-black/40 to-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className={`text-xl tracking-widest ${
            transparent ? "text-white" : "text-blue-900"
          }`}
        >
          TARKARLI
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLinkColor : linkColor}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${transparent ? "text-white" : "text-gray-700"}`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `text-lg ${isActive ? "text-blue-600 font-medium" : "text-gray-700"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
