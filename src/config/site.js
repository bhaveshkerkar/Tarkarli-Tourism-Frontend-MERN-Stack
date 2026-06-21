// Centralized site-wide values — contact info, links, nav structure.
// Update here once; every component reads from this file.

export const CONTACT = {
  address: "Tarkarli, Sindhudurg, Maharashtra",
  phoneDisplay: "+91 87670 32976",
  email: "info@exploretarkarli.com",
};

// Digits only, country code included, no spaces/symbols — required format for wa.me links.
// ⚠️ Confirm this is the real business number before launch.
export const WHATSAPP_NUMBER = "918767032976";

export function getWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Leave blank until real pages exist — Footer skips rendering empty ones.
export const SOCIAL_LINKS = {
  facebook: "",
  instagram: "",
  twitter: "",
};

export const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/stay", label: "Stay" },
  { to: "/activities", label: "Activities" },
  { to: "/contact", label: "Contact" },
];
