import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        About <span className="text-yellow-700">ReciP</span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
        Recipes are a collection of instructions that guide you in preparing
        delicious meals. They combine ingredients, techniques, and creativity
        to transform simple food items into enjoyable dishes for everyday life
        and special occasions.
      </p>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">🍽 What is a Recipe?</h2>
          <p className="text-gray-600">
            A recipe is a step-by-step guide that explains how to prepare a
            specific dish. It includes ingredients, quantities, cooking
            methods, and serving suggestions to help you achieve the best
            results.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">🥗 Types of Recipes</h2>
          <p className="text-gray-600">
            Recipes can be vegetarian, non-vegetarian, vegan, desserts, snacks,
            beverages, or main courses. Each recipe reflects culture, taste,
            and tradition from different regions.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">🔥 Why Recipes Matter</h2>
          <p className="text-gray-600">
            Recipes help people cook confidently, reduce food waste, maintain
            consistency in taste, and pass culinary knowledge from one
            generation to another.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">🧂 Cooking & Creativity</h2>
          <p className="text-gray-600">
            While recipes provide structure, cooking is also an art. You can
            adjust flavors, spices, and techniques to create your own unique
            version of any dish.
          </p>
        </div>
      </div>

      {/* Closing */}
      <p className="text-center text-gray-500 mt-12">
        Cooking is not just about food — it’s about passion, creativity, and
        sharing happiness through meals.
      </p>
    </div>
  );
};

export default About;
