import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Restaurantcard, { withPromotedLabel } from "./Restaurantcard";
import ShimmerUi from "./ShimmerUi";
import { RES_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(Restaurantcard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();
    const dataOfRes =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(dataOfRes);
    setFilteredRestaurants(dataOfRes);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>your are offline😶‍🌫️</h1>;

  return listOfRestaurants.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={searchText}
            placeholder="Search for a restaurant..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => {
              const searchedRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurants(searchedRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex justify-end space-x-2">
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              const filterValue = e.target.value;
              if (filterValue === "top-rated") {
                const sortedRes = [...listOfRestaurants].sort(
                  (a, b) => b.info.avgRating - a.info.avgRating
                );
                setFilteredRestaurants(sortedRes);
              } else {
                setFilteredRestaurants(listOfRestaurants);
              }
            }}
          >
            <option value="">All Restaurants</option>
            <option value="top-rated">Top Rated Restaurants</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
            className="block"
          >
            <div>
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <Restaurantcard resData={restaurant} />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
