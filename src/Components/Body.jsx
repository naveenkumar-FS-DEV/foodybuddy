import { useEffect, useState } from "react";
import RestaurantsCard from "./RestaurantsCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  let [resList, setresList] = useState([]);
  let [search, setsearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    setresList(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // conditional rendering

  return resList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-container">
      {/* toprated,search bar */}
      <div className="filter-toprated">
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let filteredNames = resList.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setresList(filteredNames);
            }}
          >
            search
          </button>
        </div>

        {/* top rated filter */}
        <div className="top-rated">
          <button
            className="filter-btn"
            onClick={() => {
              let filteredBtn = resList.filter(
                (topRated) => topRated.info.avgRating >= 4.4
              );
              setresList(filteredBtn);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Rescards */}
      <div className="cards">
        {resList.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantsCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
