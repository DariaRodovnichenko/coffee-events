import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const WorkShopCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const workshops = [
    {
      title: "Office Degustation",
      description:
        "A guided tasting journey with a professional barista, starting with the exploration of aromas through sensory exercises. It's both educational and fun — perfect for team-building and deepening appreciation for specialty coffee.",
      details: "8-12 participants | In-office",
      type: "office",
      image: `${import.meta.env.BASE_URL}img/no_img.jpg`,
    },
    {
      title: "Espresso Workshop + Equipment Check",
      description:
        "A two-part workshop: (1) pre-event espresso equipment cleaning & checkup; (2) hands-on espresso brewing with a tasting of in-house and specialty coffee.",
      details: "4-6 participants | In-office | Espresso-focused",
      type: "office",
      image: `${import.meta.env.BASE_URL}img/no_img.jpg`,
    },
    {
      title: "Advanced Brewing + Gift Set",
      description:
        "Dive into flavor profiles and brew together using a provided kit: Hario set, ground samples, and drip packs — yours to keep!",
      details: "Up to 6 participants | Gift set included",
      type: "office",
      image: `${import.meta.env.BASE_URL}img/no_img.jpg`,
    },
    {
      title: "Individual Home Workshop",
      description:
        "1:1 session tailored to your home setup — espresso, pour-over, or onboarding new equipment. Flexible and personal.",
      details: "1-2 participants | At-home | Fully personalized",
      type: "home",
      image: `${import.meta.env.BASE_URL}img/no_img.jpg`,
    },
  ];

  // Generate time slots based on type
  const getTimeSlots = (type) => {
    const slots = [];
    const start = 9;
    const end = type === "office" ? 16 : 19; // Office workshops end at 4 PM, home workshops at 7 PM
    for (let hour = start; hour <= end; hour++) {
      slots.push(`${hour.toString().padStart(2, "0")}:00`);
    }
    return slots;
  };

  return (
    <section id="workshops" className="bg-white py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-10">
        Our Workshops
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto text-justify">
        {workshops.map((w, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedWorkshop(w);
              setIsModalOpen(true);
              setSelectedDate(null); // Reset date when opening modal
              setShowDatePicker(false);
              setSelectedTime(""); // Reset time when opening modal
            }}
            className="cursor-pointer flex flex-col justify-between h-full bg-brand-light-green rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            <img
              src={w.image}
              alt={w.title}
              className="w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-green-800 mb-2 text-center">
              {w.title}
            </h3>
            <p className="text-green-900 mb-4 flex-grow min-h-[120px]">
              {w.description}
            </p>
            <p className="text-sm font-medium text-green-700 text-center whitespace-nowrap">
              {w.details}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[900px] overflow-y-auto relative p-6">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <FaTimes size={16} />
            </button>

            {/* Modal content */}
            {/* <img
              src={selectedWorkshop.image}
              alt={selectedWorkshop.title}
              className="w-[200px] object-cover  rounded mb-4"
            /> */}
            <h3 className="text-xl font-bold text-green-800 mb-2">
              {selectedWorkshop.title}
            </h3>
            <p className="text-green-900 mb-4">
              {selectedWorkshop.description}
            </p>
            <p className="text-sm font-medium text-green-700 mb-6">
              {selectedWorkshop.details}
            </p>

            {/* Step 1: Show "Book Now" button */}
            {!showDatePicker && (
              <button
                className="block mx-auto px-6 py-3 bg-green-800 text-white rounded hover:bg-green-700"
                onClick={() => setShowDatePicker(true)}
              >
                Book This Workshop Now
              </button>
            )}

            {/* Step 2: Show Date Picker and Final Confirm */}
            {showDatePicker && (
              <div>
                <div className="mb-4">
                  <p className="text-green-900 mb-2">
                    Select an available date:
                  </p>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setSelectedTime("");
                    }}
                    minDate={new Date()}
                    inline
                  />
                </div>

                {selectedDate && (
                  <div className="mb-4">
                    <p className="text-green-900 mb-2">Select a time:</p>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="border border-gray-300 rounded p-2"
                    >
                      <option value="">-- Select a time --</option>
                      {getTimeSlots(selectedWorkshop.type).map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <button
                  className="block mx-auto px-6 py-3 bg-green-800 text-white rounded hover:bg-green-700"
                  onClick={() => {
                    toast.success(
                      `You booked "${
                        selectedWorkshop.title
                      }" on ${selectedDate?.toLocaleDateString()} at ${selectedTime}.`,
                      { duration: 8000 }
                    );
                    setIsModalOpen(false);
                  }}
                  disabled={!selectedDate || !selectedTime}
                >
                  Confirm Booking
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
