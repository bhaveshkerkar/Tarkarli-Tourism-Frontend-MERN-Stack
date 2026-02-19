import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroVideo from "../assets/videos/HerohomeVideo.mp4";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Hero content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-white tracking-[0.25em] text-4xl md:text-7xl lg:text-8xl mb-6"
          >
            EXPLORE TARKARLI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/90 text-lg md:text-2xl tracking-wider"
          >
            Stay • Scuba • Water Sports • Local Experiences
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 flex flex-col items-center text-white/80"
          >
            <span className="text-sm tracking-widest mb-1">SCROLL</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={26} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-6"
          >
            Welcome to Paradise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg leading-relaxed mb-6"
          >
            Tarkarli is a pristine beach destination in the Sindhudurg district
            of Maharashtra, known for its crystal-clear waters, white sand
            beaches, and vibrant marine life.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            From thrilling water sports to peaceful homestays, Tarkarli offers a
            perfect blend of adventure and relaxation.
          </motion.p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-16 font-semibold"
          >
            Why Choose Tarkarli?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Crystal Clear Waters",
                desc: "Swim and relax in some of the clearest waters on India’s western coast.",
                img: "https://images.unsplash.com/photo-1637770577089-608e37d9502c?fm=jpg&q=80&w=1200",
              },
              {
                title: "Thrilling Adventures",
                desc: "Scuba diving, parasailing, jet skiing and more await adventure lovers.",
                img: "https://images.unsplash.com/photo-1682957205580-4a71606d284c?fm=jpg&q=80&w=1200",
              },
              {
                title: "Authentic Hospitality",
                desc: "Enjoy Malvani food, warm people and cozy beachside stays.",
                img: "https://images.unsplash.com/photo-1761158501691-c1cd5a31e69f?fm=jpg&q=80&w=1200",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
