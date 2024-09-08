import { useState } from "react";
import { useSelector } from "react-redux";
import Map from "../../../components/Map/Map";

export const HotelPage = () => {
  const { isDarkMode } = useSelector((state) => state.user);

  const images = [
    "../../../../img/image1.png",
    "../../../../img/image2.png",
    "../../../../img/image3.png",
    "../../../../img/image4.png",
    "../../../../img/image5.png",
    "../../../../img/image6.png",
    "../../../../img/image7.png",
    "../../../../img/image8.png",
    "../../../../img/image9.png",
  ];

  const amenities = [
    "2 swimming pools",
    "Free parking",
    "Free WiFi",
    "Family rooms",
    "24-hour front desk",
    "Lift",
    "Fabulous breakfast",
  ];

  const reviews = [
    {
      reviewer: "Shiela",
      country: "Philippines",
      reviewDate: "26 September 2023",
      roomType: "Standard Double Room",
      stayDuration: "2 nights",
      score: 10,
      reviewText:
        "I like how the staff are all accommodating and hospitable. And I also like the food.",
      rating: {
        staff: 8.9,
        facilities: 8.0,
        cleanliness: 8.1,
        comfort: 8.3,
        valueForMoney: 8.3,
        location: 7.7,
        freeWifi: 7.4,
      },
    },
    // Additional reviews can go here
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // State for filters
  const [selectedFilter, setSelectedFilter] = useState({
    reviewers: "All",
    reviewScore: "All",
    language: "All",
    timeOfYear: "All",
  });

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const openReviewPopup = () => setIsReviewOpen(true);
  const closeReviewPopup = () => setIsReviewOpen(false);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="bg p-4">
        <div className="mx-auto max-w-screen-lg rounded-md">
          <h1 className="text-2xl font-bold mb-4">Hotel Astral Nirvana Club</h1>

          <div className="flex flex-wrap -mx-1">
            <div className="w-full md:w-[55%] p-1">
              <img
                src={images[0]}
                alt="hotel image 1"
                className="rounded-md w-full h-auto object-cover"
                style={{ maxHeight: "300px" }}
              />
            </div>
            <div className="w-full md:w-[45%] flex flex-col p-1">
              <div className="relative mb-2">
                <img
                  src={images[1]}
                  alt="hotel image 2"
                  className="rounded-md w-full h-auto object-cover"
                  style={{ maxHeight: "145px" }}
                />
              </div>
              <div className="relative">
                <img
                  src={images[2]}
                  alt="hotel image 3"
                  className="rounded-md w-full h-auto object-cover"
                  style={{ maxHeight: "145px" }}
                />
              </div>
            </div>
            {images.slice(3, 8).map((image, index) => (
              <div className="w-1/5 p-1 relative" key={index}>
                <div className="relative">
                  <img
                    src={image}
                    alt={`hotel image ${index + 4}`}
                    className="rounded-md w-full h-auto object-cover"
                    style={{ maxHeight: "100px" }}
                  />
                  {index === 4 && (
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex justify-center items-center cursor-pointer"
                      onClick={openPopup}
                    >
                      <span className="text-white text-xl font-bold">
                        +{images.length - 8}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 mb-4">
            <div
              className="border-t border-gray-300 mx-auto"
              style={{ width: "calc(100% - 2rem)", maxWidth: "100%" }}
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-center">
              <p className="text-center text-[#F97316] font-semibold">
                {amenities.map((amenity, index) => (
                  <span key={index}>
                    {amenity}
                    {index < amenities.length - 1 && " | "}
                  </span>
                ))}
              </p>
            </div>
            <div className="mt-8">
              <p className="h1">
                What does your family love to do on vacation? At the Astral
                Nirvana Club hotel, part of the Astral Hotels family, we've got
                it all: some of the biggest suite rooms in town, outdoor and
                indoor heated pools, water fun for kids and adults, delicious
                breakfasts, daily afternoon coffee and cake, and plenty of
                surprises to level up your stay. There's always something going
                on here—fun activities, exciting shows, tasty snacks, or
                thrilling attractions. With so much to do, you might not want to
                leave! But if you do, it's an easy walk to the promenade, Mall
                Hayam shopping center, beach, cinema, and lots of restaurants
                and cafes. In between all the fun, our comfy and luxurious
                suites are waiting for you, packed with everything you and your
                family could want for the perfect stay. Our staff is ready to
                fulfill any special requests, so you can truly relax and enjoy
                your time here.
              </p>
            </div>

            {/* Reviews Section */}
            <div className="reviews mt-8">
              <h2 className="text-xl font-bold mb-4">Guest Reviews</h2>
              <button
                className="btn px-4 py-2 rounded-md"
                onClick={openReviewPopup}
              >
                Show All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup for Images */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="relative p-4 rounded-md max-w-3xl mx-auto bg-white">
            <button
              className="absolute top-0 right-0 m-2 text-lg"
              onClick={closePopup}
            >
              &times;
            </button>
            <div className="flex flex-wrap">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`hotel image ${index + 1}`}
                  className="w-full md:w-1/4 p-1"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Popup for Reviews */}
      {isReviewOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="div p-6 rounded-md max-w-3xl mx-auto relative">
            <button
              className="absolute top-0 right-0 m-2 text-lg"
              onClick={closeReviewPopup}
            >
              &times;
            </button>
            <div className="review-popup">
              <h3 className="text-xl font-bold mb-4">All Reviews</h3>

              {/* Rating Bars */}
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Rating Breakdown</h4>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(reviews[0].rating).map(
                    ([category, score]) => (
                      <div key={category} className="flex-1 min-w-[150px] mb-4">
                        <div className="flex justify-between mb-1">
                          <span>
                            {category.replace(/([A-Z])/g, " $1").toUpperCase()}
                          </span>
                          <span>{score}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded">
                          <div
                            className="bg-[#F97316] h-full"
                            style={{ width: `${score * 10}%` }}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Filters */}
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Filters</h4>
                <div className="flex flex-wrap gap-4">
                  <select
                    name="reviewers"
                    value={selectedFilter.reviewers}
                    onChange={handleFilterChange}
                    className="input p-2 border"
                  >
                    <option value="All">All Reviewers</option>
                    {/* Add more reviewer options as necessary */}
                  </select>

                  <select
                    name="reviewScore"
                    value={selectedFilter.reviewScore}
                    onChange={handleFilterChange}
                    className="input p-2 border"
                  >
                    <option value="All">All Scores</option>
                    {/* Add more score filtering options */}
                  </select>

                  <select
                    name="language"
                    value={selectedFilter.language}
                    onChange={handleFilterChange}
                    className="input p-2 border"
                  >
                    <option value="All">All Languages</option>
                    {/* Add more language options */}
                  </select>

                  <select
                    name="timeOfYear"
                    value={selectedFilter.timeOfYear}
                    onChange={handleFilterChange}
                    className="input p-2 border"
                  >
                    <option value="All">All Times of Year</option>
                    {/* Add more seasonal options */}
                  </select>

                  <div className="flex gap-2">
                    <button className="input px-4 py-2 rounded-full">
                      Room
                    </button>
                    <button className="input px-4 py-2 rounded-full">
                      Breakfast
                    </button>
                    <button className="input px-4 py-2 rounded-full">
                      Dinner
                    </button>
                    {/* Add more filter chips */}
                  </div>
                  {/* Reviews List */}
                  {reviews.map((review, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="text-lg font-bold">
                        {review.reviewer} ({review.country})
                      </h4>
                      <p className="text-sm">
                        Stayed: {review.stayDuration} - {review.reviewDate}
                      </p>
                      <p className="font-semibold">Score: {review.score}/10</p>
                      <p>{review.reviewText}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
