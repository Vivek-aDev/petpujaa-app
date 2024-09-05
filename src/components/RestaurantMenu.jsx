import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUi from "./ShimmerUi";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUi />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="rounded-lg p-6 max-w-3xl mx-auto">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <p className="text-lg text-gray-700">{cuisines.join(", ")}</p>
          <p>
            Rs- <span className="font-semibold">{costForTwoMessage}</span>
          </p>
        </div>
        <div>
          <img
            src={CDN_URL + cloudinaryImageId}
            alt={name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        </div>
      </div>

      <div>
        {categories.map((category) => (
          <RestaurantCategory data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
