import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StayCard from "../components/StayCard";

export default function Stay() {
  const stays = [
    {
      id: 1,
      name: "Blue Water Resort",
      location: "Tarkarli Beach",
      price: "₹4,500 / night",
      image:
        "https://images.unsplash.com/photo-1761158501691-c1cd5a31e69f?fm=jpg&q=80&w=1200",
    },
    {
      id: 2,
      name: "Konkan Homestay",
      location: "Malvan",
      price: "₹2,000 / night",
      image:
        "https://images.unsplash.com/photo-1637770577089-608e37d9502c?fm=jpg&q=80&w=1200",
    },
    {
      id: 3,
      name: "Sandy Feet Cottage",
      location: "Devbagh Beach",
      price: "₹1,500 / night",
      image:
        "https://images.unsplash.com/photo-1682957205580-4a71606d284c?fm=jpg&q=80&w=1200",
    },
    {
      id: 4,
      name: "Seashell Villa",
      location: "Tarkarli Coast",
      price: "₹6,000 / night",
      image:
        "https://images.unsplash.com/photo-1761158501691-c1cd5a31e69f?fm=jpg&q=80&w=1200",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
              Stay With Us
            </h1>
            <p className="text-gray-600 text-lg">
              Choose from cozy homestays to luxury beach resorts, all offering
              warm Malvani hospitality and beautiful coastal views.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {stays.map((stay) => (
              <StayCard key={stay.id} {...stay} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
