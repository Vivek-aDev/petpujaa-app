import Restaurantcard from "./Restaurantcard";

import { useEffect, useState } from "react";
import ShimmerUi from "./ShimerUi";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <ShimmerUi/>
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating < 4.4
            );
            setListOfRestaurants(filteredData);
          }}
        >
          Click to filter
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resturant) => (
          <Restaurantcard key={resturant?.info?.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
