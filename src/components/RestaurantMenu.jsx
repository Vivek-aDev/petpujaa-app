import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUi from "./ShimmerUi";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUi />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left Side: Image, Name, and Price */}
        <div className="flex-none md:w-1/3 pr-4">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt={name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <p className="text-lg text-gray-700">
            {cuisines.join(", ")} Rs -{" "}
            <span className="font-semibold">{costForTwoMessage}</span>
          </p>
        </div>

        {/* Right Side: List of Items */}
        <div className="flex-grow">
          <h2 className="text-xl font-semibold mb-2">List of Items</h2>
          <ul className="list-disc pl-5 space-y-2">
            {itemCards.map((item) => (
              <li key={item?.card?.info?.id} className="text-lg text-gray-800">
                {item?.card?.info?.name} -{" "}
                <span className="font-medium">
                  {item?.card?.info?.price || item?.card?.info?.defaultPrice}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
