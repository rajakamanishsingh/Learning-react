import Res_Cards from "./Res_cards";
import restaurantList from "../utils/restaurantList";
import { useState } from "react";

const Body = () => {
  const [ListofRestaurant, setRestaurantList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search-bar">
        <input
          className="input-text"
          type="text"
          placeholder="Search for food items"
        />
        <button className="search-button">Search</button>
        <button
          className="Top-Rated"
          onClick={() => {
            const topRest = ListofRestaurant.filter(
              (res) => res.info.avgRating > 4.0
            );
            console.log(topRest);
            setRestaurantList(topRest);
          }}>
          Top Rated
        </button>
        <button
          className="reset"
          onClick={() => {
            setRestaurantList(restaurantList);
          }}>
          Reset
        </button>
      </div>

      <div className="res-container">
        {ListofRestaurant.map((restuarant) => {
          return <Res_Cards key={restuarant.info.id} resData={restuarant} />;
        })}
      </div>
    </div>
  );
};
export default Body;
