import { motion } from "framer-motion";

export default function ActivityCard({ title, description, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.04 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

        <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </motion.div>
  );
}
