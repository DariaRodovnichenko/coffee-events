export const Footer = () => {
  return (
    <footer className="relative h-[200px] w-full bg-cover bg-center bg-no-repeat bg-[url(/img/hero_x1.jpg)] text-center justify-center flex flex-col items-center py-6 text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
      <p className="text-white">
        &copy; {new Date().getFullYear()} Conscious Coffee. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-white hover:text-green-600">
          Privacy Policy
        </a>
        <a href="#" className="text-white hover:text-green-600">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};
