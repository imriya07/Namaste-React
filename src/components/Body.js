import RestaurantCard from "./RestaurantCrad";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import usseOnlineStatus from "../utils/usseOnlineStatus";

const Body = () => {
  const [listOFRestaurants, setListOFRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.88563&lng=77.6805328&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json",json);
    const finalData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOFRestaurants(finalData);
    setFilteredRestaurants(finalData);
  };

  const onlineStatus = usseOnlineStatus();
  if(onlineStatus === false) return <h1 className="text-center text-xl mt-4">Looks like you're offline!! Please check your internet connection</h1>

  return listOFRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-lg shadow-sm w-64"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => {
              const filtered = listOFRestaurants.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="mt-2 sm:mt-0 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={() => {
            const filteredList = listOFRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`} className="block no-underline text-black hover:text-black">
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
