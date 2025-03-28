import RestaurantCard from "./RestaurantCrad";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOFRestaurants, setListOFRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.898447899999997&lng=77.68826409999998&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("jsom",json);
    
    const finalData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOFRestaurants(finalData);
    setFilteredRestaurants(finalData)
  };

  // Condiitional Rendering

  return listOFRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container my-4">
      <div className="row mb-3">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                console.log(searchText);
                const filterdRestaurant = listOFRestaurants.filter(
                  (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filterdRestaurant)
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn ms-2"
            onClick={() => {
              const filterdList = listOFRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setListOFRestaurants(filterdList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="row">
        {filteredRestaurants.map((restaurant) => (
            <div className="col-md-4 col-sm-6 mb-4">
              <RestaurantCard key={restaurant.id} resData={restaurant.info} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Body;
