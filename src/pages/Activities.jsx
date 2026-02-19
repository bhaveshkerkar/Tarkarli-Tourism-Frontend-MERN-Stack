import { motion } from "framer-motion";
import { Waves, Ship, Anchor, Fish } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ActivityCard from "../components/ActivityCard";

function Activities() {
  const activities = [
    {
      title: "Scuba Diving",
      description:
        "Dive into crystal-clear waters and explore vibrant coral reefs, colorful marine life, and underwater wonders. Perfect for beginners and experienced divers.",
      image:
        "https://images.unsplash.com/photo-1682957205580-4a71606d284c?fm=jpg&q=80&w=1080",
      icon: Fish,
    },
    {
      title: "Water Sports",
      description:
        "Experience thrilling water sports including parasailing, jet skiing, banana boat rides, and kayaking. Feel the adrenaline rush on pristine waters.",
      image:
        "https://images.unsplash.com/photo-1617945174127-e47d409e47c1?fm=jpg&q=80&w=1080",
      icon: Waves,
    },
    {
      title: "Boat Rides",
      description:
        "Enjoy serene boat rides to nearby islands, sunset cruises, and dolphin watching tours. Relax and soak in breathtaking coastal beauty.",
      image:
        "https://images.unsplash.com/photo-1556646371-4b19bbefd7af?fm=jpg&q=80&w=1080",
      icon: Ship,
    },
    {
      title: "Snorkeling",
      description:
        "Discover the underwater world with snorkeling adventures. Witness exotic fish, coral formations, and marine biodiversity in shallow waters.",
      image:
        "https://images.unsplash.com/photo-1682957205580-4a71606d284c?fm=jpg&q=80&w=1080",
      icon: Anchor,
    },
    {
      title: "Beach Activities",
      description:
        "Relax on pristine beaches, enjoy volleyball, build sandcastles, or simply unwind while listening to the waves.",
      image:
        "https://images.unsplash.com/photo-1637770577089-608e37d9502c?fm=jpg&q=80&w=1080",
      icon: Waves,
    },
    {
      title: "Island Hopping",
      description:
        "Explore nearby islands like Devbagh and experience secluded beaches, local culture, and untouched natural beauty.",
      image:
        "https://images.unsplash.com/photo-1556646371-4b19bbefd7af?fm=jpg&q=80&w=1080",
      icon: Ship,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar variant="simple" />

      {/* Header */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              Adventures Await
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dive into thrilling water sports, explore marine life, and create
              unforgettable memories on the pristine beaches of Tarkarli.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Activities Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-4xl mb-6">Ready for Adventure?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Book your activities now and experience the best of Tarkarli's
              water adventures!
            </p>

            <button
              onClick={() => {
                const whatsappNumber = "919876543210";
                const message =
                  "Hi, I would like to book activities in Tarkarli";
                const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  message,
                )}`;
                window.open(url, "_blank");
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us on WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Activities;
