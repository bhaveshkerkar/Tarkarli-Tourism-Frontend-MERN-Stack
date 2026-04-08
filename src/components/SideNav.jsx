import { useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
];

export default function SideNav() {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          hover ? "w-48 bg-black/30 backdrop-blur-md" : "w-6 bg-black/10"
        } h-64 rounded-r-full flex flex-col justify-center items-start px-3`}
      >
        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`text-white text-sm mb-4 transition-opacity ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          >
            {sec.label}
          </a>
        ))}
      </div>
    </div>
  );
}
