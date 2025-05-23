export const ForWho = () => {
  return (
    <section className="bg-brand-light-green py-16 px-6 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-10 text-center">
        For Who?
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 text-green-900 text-justify">
        {/* Text on the left */}
        <div className="space-y-6 max-w-2xl">
          <p>
            Our workshops are designed for anyone who wants to deepen their
            understanding of coffee, from beginners to seasoned enthusiasts.
          </p>
          <p>
            Whether you're a coffee lover, a barista, or a business looking to
            enhance your team's coffee knowledge, we have something for you.
          </p>
          <p>
            Join us for an engaging experience that will elevate your coffee
            journey!
          </p>
        </div>

        {/* Image on the right */}
        <img
          src={`${import.meta.env.BASE_URL}img/team.jpg`}
          alt="Your team"
          className="w-full max-w-xs rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};
// This code defines a ForWho component that serves as a "For Who?" section for a webpage.
// It includes a title, an image, and a description of the target audience for the workshops.