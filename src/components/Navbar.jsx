import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const baseLink = "relative px-3 py-2 text-sm font-medium transition-colors";
  const active =
    "text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-white";
  const inactive = "text-white/80 hover:text-white";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass / transparent bar */}
      <nav className="mx-auto flex max-w-full items-center justify-between px-6 py-4 bg-gradient-to-b from-black/40 to-transparent">
        {/* Logo */}
        <Link to="/" className="text-xl tracking-widest text-white">
          TARKARLI
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseLink} ${isActive ? active : inactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/stay"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? active : inactive}`
            }
          >
            Stay
          </NavLink>

          <NavLink
            to="/activities"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? active : inactive}`
            }
          >
            Activities
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? active : inactive}`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {[
              { to: "/", label: "Home" },
              { to: "/stay", label: "Stay" },
              { to: "/activities", label: "Activities" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-lg ${isActive ? "text-white" : "text-white/70"}`
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
