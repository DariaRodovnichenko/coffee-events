export const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-10 text-center">
        About Us
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 text-green-900 text-justify">  
        {/* Image */}
        <img
          src={`${import.meta.env.BASE_URL}img/no_img.jpg`}
          alt="No preview"
          className="w-full max-w-xs rounded-lg shadow-md"
        />

        {/* Text */}
        <div className="space-y-6 max-w-2xl">
          <p>
            We are a team of passionate coffee professionals dedicated to
            crafting meaningful coffee experiences.
          </p>
          <p>
            Our mission is to bring the world of specialty coffee closer to
            everyday coffee lovers — through education, events, and immersive
            workshops.
          </p>
          <p>
            We believe in continuous growth and development, and we stay engaged
            with the latest trends and innovations in the coffee world.
          </p>
        </div>
      </div>
    </section>
  );
};
// This code defines an AboutUs component that serves as an "About Us" section for a webpage.
// It includes a title, an image, and a description of the company.