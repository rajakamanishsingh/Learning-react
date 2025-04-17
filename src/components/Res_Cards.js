import { IMG_CDN_URL } from "../utils/constants";

const Res_Cards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="res-image" src={{ IMG_CDN_URL } + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>cuisines: {cuisines.join(", ")}</p>
      <p>Rating: {avgRating}</p>
      <p>{costForTwo}</p>
      <button>Order Now</button>
    </div>
  );
};
export default Res_Cards;
