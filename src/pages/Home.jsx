import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SideNav from "../components/SideNav";
import heroVideo from "../assets/videos/HerohomeVideo.mp4";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <SideNav />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm tracking-[0.3em] uppercase mb-4 text-white/80"
          >
            Welcome to
          </motion.p>

          <h1 className="text-6xl md:text-8xl tracking-widest mb-6">
            TARKARLI
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Where the sea meets serenity
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/stay"
              className="bg-white text-blue-900 px-8 py-3 rounded-full hover:bg-blue-50 transition font-medium"
            >
              Explore Stays
            </Link>
            <Link
              to="/activities"
              className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition font-medium"
            >
              View Activities
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-white/40"
          />
        </motion.div>
      </section>

      {/* Why Tarkarli */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Why Tarkarli?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nestled on the Konkan coast, Tarkarli is Maharashtra's best-kept
              secret — pristine beaches, crystal-clear waters, and a way of life
              untouched by time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Crystal Waters",
                desc: "Some of India's clearest waters, perfect for scuba diving and snorkeling.",
                emoji: "🌊",
              },
              {
                title: "Pristine Beaches",
                desc: "Unspoiled beaches with white sand and swaying palms — no crowds, just calm.",
                emoji: "🏖️",
              },
              {
                title: "Malvani Culture",
                desc: "Authentic Malvani cuisine, local hospitality, and a culture rooted in the sea.",
                emoji: "🦞",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stays Preview */}
      <section id="stays" className="py-24 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-3">Where to Stay</h2>
              <p className="text-gray-600 text-lg">
                Handpicked stays for every kind of traveller.
              </p>
            </div>
            <Link
              to="/stay"
              className="text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"
            >
              View all stays →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Blue Water Resort",
                location: "Tarkarli Beach",
                price: "₹4,500 / night",
                image:
                  "https://images.unsplash.com/photo-1761158501691-c1cd5a31e69f?fm=jpg&q=80&w=800",
              },
              {
                name: "Konkan Homestay",
                location: "Malvan",
                price: "₹2,000 / night",
                image:
                  "https://images.unsplash.com/photo-1637770577089-608e37d9502c?fm=jpg&q=80&w=800",
              },
              {
                name: "Sandy Feet Cottage",
                location: "Devbagh Beach",
                price: "₹1,500 / night",
                image:
                  "https://images.unsplash.com/photo-1682957205580-4a71606d284c?fm=jpg&q=80&w=800",
              },
            ].map((stay, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={stay.image}
                  alt={stay.name}
                  loading="lazy"
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-medium mb-1">{stay.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{stay.location}</p>
                  <p className="text-blue-700 font-semibold">{stay.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section id="activities" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-3">Things to Do</h2>
              <p className="text-gray-600 text-lg">
                From scuba diving to island hopping — adventure is always close.
              </p>
            </div>
            <Link
              to="/activities"
              className="text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"
            >
              View all activities →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Scuba Diving",
                desc: "Explore vibrant coral reefs and marine life in crystal-clear waters.",
                emoji: "🤿",
              },
              {
                title: "Dolphin Safari",
                desc: "Spot dolphins in their natural habitat on an unforgettable boat ride.",
                emoji: "🐬",
              },
              {
                title: "Water Sports",
                desc: "Parasailing, jet skiing, banana boat — thrills for every level.",
                emoji: "🏄",
              },
            ].map((act, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{act.emoji}</div>
                <h3 className="text-xl font-medium mb-2">{act.title}</h3>
                <p className="text-gray-600">{act.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-blue-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to visit Tarkarli?
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Let us help you plan the perfect coastal getaway.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-10 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition"
          >
            Plan My Trip
          </Link>
        </motion.div>
      </section>
    </>
  );
}
