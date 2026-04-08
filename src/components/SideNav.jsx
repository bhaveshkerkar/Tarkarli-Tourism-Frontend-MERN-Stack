import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
];

export default function SideNav() {
  const [active, setActive] = useState("hero");
  const [hover, setHover] = useState(false);

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = sec.id;
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
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Curved Glass Panel */}
      <div
        className={`transition-all duration-500 ${
          hover
            ? "w-52 bg-white/10 backdrop-blur-xl border border-white/20"
            : "w-6 bg-white/5"
        } h-72 rounded-r-full flex flex-col justify-center items-start px-3`}
      >
        {sections.map((sec, index) => (
          <div
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                active === sec.id
                  ? "bg-blue-500 scale-125"
                  : "bg-white/50 group-hover:bg-white"
              }`}
            />

            {/* Label */}
            <span
              className={`text-white text-sm transition-all duration-300 ${
                hover ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
              }`}
            >
              {sec.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
