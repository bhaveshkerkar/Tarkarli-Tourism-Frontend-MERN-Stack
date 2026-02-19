import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-lg">
              Planning a trip to Tarkarli? Have questions about stays or
              activities? We’d love to hear from you.
            </p>
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-gray-700">
                <MapPin size={22} className="text-blue-600" />
                <span>Tarkarli, Sindhudurg, Maharashtra</span>
              </div>

              <div className="flex items-center gap-4 text-gray-700">
                <Phone size={22} className="text-blue-600" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4 text-gray-700">
                <Mail size={22} className="text-blue-600" />
                <span>info@exploretarkarli.com</span>
              </div>

              <p className="text-gray-600 mt-6 leading-relaxed">
                Our team is available to help you plan your perfect coastal
                getaway — from accommodation to unforgettable water adventures.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your plan…"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
