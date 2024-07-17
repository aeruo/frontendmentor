import { useState } from 'react'

export default function App(){
  return(
    <>
      <section>
        <img src="/image-omelette.jpeg" alt="Picture of an omelette" className="w-full h-auto rounded-[15px] mb-10" />
        <h1 className="text-4xl font-young-serif mb-6">Simple Omelette Recipe</h1>
        <p className="text-[15px] font-outfit mb-6">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
        to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        <div className="p-8 bg-red-50 rounded-lg mb-6">
          <h3 className="text-lg font-bold font-outfit text-magenta-900 mb-3">Preparation Time</h3>
          <ul className="text-[14px] font-outfit">
            <li className="mb-2"><strong className="font-bold">Total:</strong> Approximately 10 minutes</li>
            <li className="mb-2"><strong className="font-bold">Cooking:</strong> 5 minutes</li>
            <li className="mb-2"><strong className="font-bold">Preperation:</strong> 5 minutes</li>
          </ul>
        </div>
        <h2 className="text-3xl font-red-800 font-young-serif mb-6">Ingredients</h2>
        <ul className="text-[14px] font-outfit mb-10">
          <li className="mb-2">2-3 large eggs</li>
          <li className="mb-2">Salt, to taste</li>
          <li className="mb-2">Pepper, to taste</li>
          <li className="mb-2">1 tablespoon of oil</li>
          <li className="mb-2">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
        <hr/>
        <h2 className="text-3xl font-red-800 font-young-serif my-6">Instructions</h2>
        <ol className="text-[14px] font-outfit mb-6">
          <li className="mb-2"><strong className="font-bold">Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
          <li className="mb-2"><strong className="font-bold">Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</li>
          <li className="mb-2"><strong className="font-bold">Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface</li>
          <li className="mb-2"><strong className="font-bold">Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
          <li className="mb-2"><strong className="font-bold">Fold and serve:</strong> As the omelette continues to cook, carefully lift one side and fold it over the fillings. Let it cook for another one minute, then slide it onto a plate</li>
          <li className="mb-2"><strong className="font-bold">Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</li>          
        </ol>
        <hr/>
        <h2 className="text-3xl font-red-800 font-young-serif my-6">Nutrition</h2>
        <p className="text-[15px] font-outfit mb-6">The table below shows the nutritional value per serving without the additional fillings.</p>
        <table className="w-full font-outfit p-4">
          <tr className="border-b">
            <td>Calories</td>
            <td className="font-semibold p-2">277kcal</td>
          </tr>
          <tr className="border-b">
            <td>Carbs</td>
            <td className="font-semibold p-2">0g</td>
          </tr>
          <tr className="border-b">
            <td>Protein</td>
            <td className="font-semibold p-2">20g</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td className="font-semibold p-2">20g</td>
          </tr>
        </table>
      </section>
    </>
  )
}
