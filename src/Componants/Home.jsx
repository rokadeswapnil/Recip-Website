import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DynamicCarousel from "./DynamicCarousel";
import Cards from "./Cards";

const fetchRecipes = async () => {
  const res = await axios.get("https://dummyjson.com/recipes");
  return res.data.recipes;
};

const Home = () => {
  const {
    data: items = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
    staleTime: 1000 * 60 * 10, // 10 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center">Error fetching data</p>;

  return (
    <div>
      <div className="container mx-auto my-8 p-2">
        <DynamicCarousel items={items} />
      </div>

      <h1 className="text-center text-3xl font-bold mb-4">
        <span className="text-yellow-700">R</span>ecipe{" "}
        <span className="text-yellow-700">L</span>ist
      </h1>

      <div className="container mx-auto my-8 grid grid-cols-2 gap-7 sm:grid-cols-4 sm:gap-4 p-2">
        <Cards items={items} />
      </div>
    </div>
  );
};

export default Home;
