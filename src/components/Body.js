import RestaurantCard from "./RestaurantCrad";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOFRestaurants,setListOFRestaurants] = useState(resList);

  return (
    <div className="container my-4">
      <div className="row mb-3">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterdList = listOFRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setListOFRestaurants(filterdList)
             }}
          > 
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="row">
        {listOFRestaurants.map((restaurant) => (
          <div className="col-md-4 col-sm-6 mb-4" key={restaurant.data.id}>
            <RestaurantCard resData={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
