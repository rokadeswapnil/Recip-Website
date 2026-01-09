import React from "react";
import { Clock, Flame, Users } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const CardDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const info = location.state?.info;

  // Prevent crash on refresh
  if (!info) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <p className="mb-4 text-lg">No recipe data found</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-green-500 rounded-full hover:bg-green-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  const {
    name,
    image,
    rating,
    reviewCount,
    prepTimeMinutes,
    cookTimeMinutes,
    servings,
    ingredients,
    difficulty,
    cuisine,
    caloriesPerServing,
    instructions,
  } = info;

  return (
    <div className="container mx-auto min-h-screen p-4">
      <div
        className="relative w-full h-full min-h-screen rounded-2xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-sm" />

        {/* Rating */}
        <span className="absolute top-4 right-4 z-10 
          bg-white/90 backdrop-blur-md 
          px-3 py-1 rounded-full text-sm font-semibold shadow">
          ⭐ {rating}
        </span>

        {/* Content */}
        <div className="relative z-10 p-5 text-white">

          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <img
              src={image}
              alt={name}
              className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover shadow-xl"
            />

            <h2 className="mt-4 text-2xl sm:text-3xl font-bold">
              {name}
            </h2>

            <p className="text-gray-300 text-sm mt-1">
              {cuisine} • {difficulty}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap justify-center gap-5 mt-4 text-gray-200 text-sm">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                {prepTimeMinutes + cookTimeMinutes} min
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} />
                {servings} servings
              </div>
              <div className="flex items-center gap-1">
                <Flame size={16} />
                {caloriesPerServing} cal
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mt-8 rounded-2xl p-4">
            <h3 className="font-semibold text-gray-200 mb-3">
              Ingredients{" "}
              <span className="text-gray-400">({ingredients.length})</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-sm">
              {ingredients.map((item, index) => (
                <div
                  key={index}
                  className="text-white rounded-lg p-3
                    bg-white/10 backdrop-blur-lg
                    border border-white/20
                    shadow-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 rounded-2xl p-4">
            <h3 className="font-semibold text-gray-200 mb-3">
              Instructions{" "}
              <span className="text-gray-400">({instructions.length})</span>
            </h3>

            <div className="space-y-3 text-sm">
              {instructions.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-3 text-white rounded-lg p-3
                    bg-black/30 backdrop-blur-md
                    border border-white/10
                    shadow-lg"
                >
                  <span className="font-bold text-white">
                    {index + 1}.
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-between items-center text-sm text-gray-400">
            <span>{reviewCount} Reviews</span>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
            >
              Back
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardDetails;
