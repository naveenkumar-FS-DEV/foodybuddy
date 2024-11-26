import "../Styles/restaurantscard.css";

const RestaurantsCard = ({ resData }) => {
  return (
    <div>
      <div className="cards-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
        />
        <h3>{resData.info.name}</h3>
        <p>{resData.info.avgRating}⭐</p>
        <p>{resData.info.cuisines.join(", ")}</p>
        <p>{resData.info.sla.deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default RestaurantsCard;
