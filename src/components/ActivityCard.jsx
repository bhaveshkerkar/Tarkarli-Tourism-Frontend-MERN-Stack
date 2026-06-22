import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "../config/site";

function ActivityCard({
  id,
  title,
  description,
  image,
  icon: Icon,
  index = 0,
}) {
  const handleBookClick = () => {
    window.open(
      getWhatsAppLink(`Hi, I would like to book ${title} in Tarkarli`),
      "_blank",
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {Icon && (
          <div className="absolute top-4 right-4 bg-blue-600/90 p-2 rounded-full">
            <Icon size={20} className="text-white" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex gap-3">
          <button
            onClick={handleBookClick}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition text-sm"
          >
            Book via WhatsApp
          </button>
          <Link
            to={`/activities/${id}`}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition text-center text-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ActivityCard;
