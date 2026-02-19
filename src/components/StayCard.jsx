import { motion } from "framer-motion";
import { MapPin, DollarSign } from "lucide-react";

function StayCard({ image, name, location, price, type, index = 0 }) {
  const whatsappNumber = "919876543210";
  const whatsappMessage = `Hi, I'm interested in booking ${name} in Tarkarli`;

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />

        {type && (
          <div className="absolute top-4 right-4">
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm capitalize">
              {type}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl mb-3">{name}</h3>

        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPin size={18} className="text-blue-600" />
          <span>{location}</span>
        </div>

        {/* ✅ PRICE FIXED */}
        <div className="flex items-center gap-2 text-gray-700 mb-6">
          <span className="text-lg font-semibold">{price}</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
          >
            Book via WhatsApp
          </button>

          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default StayCard;
