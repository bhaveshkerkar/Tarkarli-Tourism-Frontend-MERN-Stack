import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About", light: true },
  { id: "features", label: "Features" },
];

export default function SideNav() {
  const [active, setActive] = useState("hero");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current = "hero";

          for (let sec of sections) {
            const el = document.getElementById(sec.id);
            if (el) {
              const rect = el.getBoundingClientRect();

              if (rect.top <= window.innerHeight / 2) {
                current = sec.id;
              }
            }
          }

          setActive((prev) => (prev !== current ? current : prev));
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const isLight = sections.find((s) => s.id === active)?.light;

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-[400px] flex flex-col justify-center gap-8 px-6 transition-all duration-500
        ${
          hover
            ? "w-64 bg-white/10 backdrop-blur-xl shadow-xl"
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
              transform: `translateX(${index * 2}px)`,
            }}
          >
            {/* Dot */}
            <div
              className={`w-4 h-4 rounded-full transition-all duration-300
              ${
                active === sec.id
                  ? "bg-blue-500 scale-125 shadow-lg"
                  : isLight
                    ? "bg-black/40 group-hover:bg-black"
                    : "bg-white/50 group-hover:bg-white"
              }`}
            />

            {/* Label */}
            <span
              className={`text-sm transition-all duration-300 whitespace-nowrap
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
