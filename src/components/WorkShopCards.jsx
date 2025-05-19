export const WorkShopCards = () => {
  return (
    <section
      id="workshops"
      className="bg-brand-light-green py-16 px-6 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-10">
        Our Workshops
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Coffee Tasting
          </h3>
          <p className="text-gray-700 mb-4">
            Explore a variety of coffee flavors and learn about their origins
          </p>
          <img src="/img/workshop_tasting.webp" className="rounded-lg" />
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Espresso & Latte Art
          </h3>
          <p className="text-gray-700 mb-4">
            Master the basics of espresso making and create stunning latte art
          </p>
          <img src="/img/workshop_espresso.webp" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};
