import { useEffect, useState } from "react";

import Restaurantcard from "./Restaurantcard";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const [searchText, setSearchText] = useState("");

  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const dataOfRes =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(json);
    setListOfRestaurants(dataOfRes);
    setFilteredRestaurants(dataOfRes)
  };

  return listOfRestaurants.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // console.log(searchText);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // console.log(searchText);
              const searchedRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurants(searchedRestaurant);
            }}
          >
            Search
          </button>
        </div>

        {/* filtered Restaurants according to stars rating */}
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredRes);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((resturant) => (
          <Restaurantcard key={resturant?.info?.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
