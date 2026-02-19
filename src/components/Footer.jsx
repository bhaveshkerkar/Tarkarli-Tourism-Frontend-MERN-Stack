import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

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
              Discover the hidden gem of Maharashtra’s coastline. Crystal-clear
              waters, thrilling adventures, and authentic coastal hospitality
              await you.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/stay" className="hover:text-white">
                  Stay
                </a>
              </li>
              <li>
                <a href="/activities" className="hover:text-white">
                  Activities
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
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
                <MapPin size={18} /> Tarkarli, Sindhudurg, Maharashtra
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} /> +91 87670 32976
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} /> info@exploretarkarli.com
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <a className="p-2 bg-blue-800 rounded-full hover:bg-blue-700">
                <Facebook size={18} />
              </a>
              <a className="p-2 bg-blue-800 rounded-full hover:bg-blue-700">
                <Instagram size={18} />
              </a>
              <a className="p-2 bg-blue-800 rounded-full hover:bg-blue-700">
                <Twitter size={18} />
              </a>
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
