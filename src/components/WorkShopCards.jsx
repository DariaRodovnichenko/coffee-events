export const WorkShopCards = () => {
  const workshops = [
    {
      title: "Office Degustation",
      description:
        "A guided tasting journey with a professional barista, starting with the exploration of aromas through sensory exercises. It's both educational and fun — perfect for team-building and deepening appreciation for specialty coffee.",
      details: "8-12 participants | In-office",
      image: `${import.meta.env.BASE_URL}img/no_img.jpg`,
    },
    {
      title: "Espresso Workshop + Equipment Check",
      description:
        "A two-part workshop: (1) pre-event espresso equipment cleaning & checkup; (2) hands-on espresso brewing with a tasting of in-house and specialty coffee.",
      details: "4-6 participants | In-office | Espresso-focused",
      image: `${import.meta.env.BASE_URL}img/no_img.jpg`,
    },
    {
      title: "Advanced Brewing + Gift Set",
      description:
        "Dive into flavor profiles and brew together using a provided kit: Hario set, ground samples, and drip packs — yours to keep!",
      details: "Up to 6 participants | Gift set included",
      image: `${import.meta.env.BASE_URL}img/no_img.jpg`,
    },
    {
      title: "Individual Home Workshop",
      description:
        "1:1 session tailored to your home setup — espresso, pour-over, or onboarding new equipment. Flexible and personal.",
      details: "1-2 participants | At-home | Fully personalized",
      image: `${import.meta.env.BASE_URL}img/no_img.jpg`,
    },
  ];

  return (
    <section id="workshops" className="bg-white py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-10">
        Our Workshops
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto text-justify">
        {workshops.map((w, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between h-full bg-brand-light-green rounded-lg p-6 shadow-md "
          >
            <img
              src={w.image}
              alt={w.title}
              className="w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-green-800 mb-2 text-center">{w.title}</h3>
            <p className="text-green-900 mb-4 flex-grow min-h-[120px]">{w.description}</p>
            <p className="text-sm font-medium text-green-700 text-center whitespace-nowrap">{w.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
