import React from "react";

const Shop = ({ meal }) => {
  const { strMeal, strArea, strMealThumb } = meal;
  return (
    <div className="shadow-xl border border-green-800 rounded">
      <img className="rounded-t h-60 w-full" src={strMealThumb} alt="" />
      <div className="my-4">
        <h4 className="text-2xl font-bold text-green-800">{strMeal}</h4>
        <p className="text-md text-slate-500">{strArea}</p>
      </div>
      <button className="bg-yellow-500 text-green-900 font-bold text-2xl px-4 py-2 my-4 rounded">
        Details
      </button>
    </div>
  );
};

export default Shop;
