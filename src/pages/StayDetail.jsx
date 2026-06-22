import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, CheckCircle2 } from "lucide-react";
import { stays } from "../data/stays";
import { getWhatsAppLink } from "../config/site";

export default function StayDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const stay = stays.find((s) => s.id === Number(id));

  // If someone visits /stay/999 or any invalid id
  if (!stay) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-4xl font-semibold text-gray-800">Stay not found</h1>
        <p className="text-gray-500">
          The listing you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          to="/stay"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Browse All Stays
        </Link>
      </div>
    );
  }

  const handleBook = () => {
    window.open(
      getWhatsAppLink(`Hi, I'd like to book ${stay.name} in Tarkarli`),
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={stay.image}
          alt={stay.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 flex items-center gap-2 text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-full transition text-sm"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {stay.type && (
          <span className="absolute top-24 right-6 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm capitalize">
            {stay.type}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Title row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold mb-2">
                {stay.name}
              </h1>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={18} className="text-blue-600" />
                <span>{stay.location}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-700 whitespace-nowrap">
              {stay.price}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {stay.description}
          </p>

          {/* Amenities */}
          {stay.amenities?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stay.amenities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-700 bg-blue-50 rounded-lg px-4 py-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-blue-600 shrink-0"
                    />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBook}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-medium transition"
            >
              Book via WhatsApp
            </button>
            <Link
              to="/stay"
              className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-4 rounded-xl text-lg font-medium transition text-center"
            >
              Browse Other Stays
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
