import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { CONTACT, SOCIAL_LINKS, NAV_LINKS } from "../config/site";

const socialIcons = [
  { key: "facebook", Icon: Facebook, label: "Facebook" },
  { key: "instagram", Icon: Instagram, label: "Instagram" },
  { key: "twitter", Icon: Twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl tracking-widest mb-4">EXPLORE TARKARLI</h3>
            <p className="text-blue-200 leading-relaxed">
              Discover the hidden gem of Maharashtra's coastline. Crystal-clear
              waters, thrilling adventures, and authentic coastal hospitality
              await you.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3 text-blue-200">
              <p className="flex items-center gap-3">
                <MapPin size={18} /> {CONTACT.address}
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} /> {CONTACT.phoneDisplay}
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} /> {CONTACT.email}
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              {socialIcons.map(({ key, Icon, label }) => {
                const url = SOCIAL_LINKS[key];
                if (!url) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-300 text-sm">
          © 2026 Explore Tarkarli. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
