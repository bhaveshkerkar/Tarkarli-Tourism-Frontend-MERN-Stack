import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
];

export default function SideNav() {
  const [active, setActive] = useState("hero");
  const [hover, setHover] = useState(false);
  const [isLight, setIsLight] = useState(false);

  // Detect active section + background type
  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150) {
            current = sec.id;

            // detect light section
            if (sec.id === "about") {
              setIsLight(true);
            } else {
              setIsLight(false);
            }
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Sidebar */}
      <div
        className={`h-[400px] flex flex-col justify-center gap-8 px-6 transition-all duration-500
  ${
    hover
      ? "w-64 bg-white/5 backdrop-blur-2xl shadow-lg"
      : "w-12 bg-transparent"
  }
  rounded-r-[120px]`}
      >
        {sections.map((sec, index) => (
          <div
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="flex items-center gap-4 cursor-pointer group"
            style={{
              transform: `translateX(${index * 1}px)`, // wheel curve effect
            }}
          >
            {/* Dot */}
            <div
              className={`w-4 h-4 rounded-full transition-all duration-300
              ${
                active === sec.id
                  ? "bg-blue-500 scale-125"
                  : isLight
                    ? "bg-black/40 group-hover:bg-black"
                    : "bg-white/50 group-hover:bg-white"
              }`}
            />

            {/* Label */}
            <span
              className={`text-sm transition-all duration-300
              ${
                hover ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
              }
              ${isLight ? "text-black" : "text-white"}`}
            >
              {sec.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
