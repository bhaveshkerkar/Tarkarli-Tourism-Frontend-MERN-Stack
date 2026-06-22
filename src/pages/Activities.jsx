import { motion } from "framer-motion";
import ActivityCard from "../components/ActivityCard";
import { getWhatsAppLink } from "../config/site";
import { activities } from "../data/activities";

export default function Activities() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="pt-28 pb-12 px-6">
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
            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                {...activity}
                index={activity.id - 1}
              />
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
              onClick={() =>
                window.open(
                  getWhatsAppLink(
                    "Hi, I would like to book activities in Tarkarli",
                  ),
                  "_blank",
                )
              }
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us On WhatsApp
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
