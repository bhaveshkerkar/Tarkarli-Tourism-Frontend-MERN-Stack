import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StayCard from "../components/StayCard";
import { stays } from "../data/stays";

export default function Stay() {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            Stay With Us
          </h1>
          <p className="text-gray-600 text-lg">
            Choose from cozy homestays to luxury beach resorts, all offering
            warm Malvani hospitality and beautiful coastal views.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stays.map((stay) => (
            <StayCard key={stay.id} {...stay} />
          ))}
        </div>
      </div>
    </section>
  );
}
