import Restaurantcard from "./Restaurantcard";

import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
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
