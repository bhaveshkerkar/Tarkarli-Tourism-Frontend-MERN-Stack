import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, CheckCircle2 } from "lucide-react";
import { activities } from "../data/activities";
import { getWhatsAppLink } from "../config/site";

export default function ActivityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const activity = activities.find((a) => a.id === Number(id));

  if (!activity) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          Activity not found
        </h1>
        <p className="text-gray-500">
          The activity you're looking for doesn't exist or may have been
          removed.
        </p>
        <Link
          to="/activities"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Browse All Activities
        </Link>
      </div>
    );
  }

  const Icon = activity.icon;

  const handleBook = () => {
    window.open(
      getWhatsAppLink(`Hi, I'd like to book ${activity.title} in Tarkarli`),
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 flex items-center gap-2 text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-full transition text-sm"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {Icon && (
          <div className="absolute top-24 right-6 bg-blue-600/90 p-3 rounded-full">
            <Icon size={22} className="text-white" />
          </div>
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
            <h1 className="text-3xl md:text-4xl font-semibold">
              {activity.title}
            </h1>
            <div className="text-2xl font-bold text-blue-700 whitespace-nowrap">
              {activity.price}
            </div>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 text-gray-500 mb-8">
            <Clock size={18} className="text-blue-600" />
            <span>{activity.duration}</span>
          </div>

          {/* Long description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {activity.longDescription}
          </p>

          {/* What's included */}
          {activity.includes?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-4">What's Included</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activity.includes.map((item) => (
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
              to="/activities"
              className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-4 rounded-xl text-lg font-medium transition text-center"
            >
              Browse Other Activities
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
