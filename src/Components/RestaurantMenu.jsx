import { useEffect, useState } from "react";
import "../Styles/restaurantsmenu.css";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/CartSlice";

const RestaurantMenu = () => {
  let [resMenu, setResMenu] = useState(null);
  let { resId } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  // Handle addtocart
  let handleAddToCart = (item) => {
    const cartItem = {
      id: item.card.info.id,
      name: item.card.info.name,
      price: item.card.info.price || item.card.info.defaultPrice,
      imageUrl: CDN_URL + item.card.info.imageId,
    };
    dispatch(addItem(cartItem));
  };

  // navigate
  let handleNavigate = () => {
    navigate("/");
  };

  // api call
  useEffect(() => {
    fetchMenu();
  }, []);

  let fetchMenu = async () => {
    let menus = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    let json = await menus.json();
    setResMenu(json.data);
  };

  let itemCards =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card.itemCards;

  // Spinner
  if (!resMenu) {
    return <Spinner />;
  }

  return (
    <div className="menu-container">
      <button className="navigate-btn" onClick={handleNavigate}>
        Back to page
      </button>
      <h2 className="title">{resMenu?.cards?.[2]?.card?.card?.info?.name}</h2>
      <h4>
        {resMenu?.cards?.[2]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resMenu?.cards?.[2]?.card?.card?.info?.costForTwoMessage}
      </h4>
      <h1 className="p1">MENU</h1>
      {itemCards.map((item, index) => (
        <div key={item?.card?.info?.id || index} className="container">
          <p className="p2">
            {item?.card?.info?.name} - {"Rs."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </p>
          <div className="menu-img">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item?.card?.info?.name}
            />
            {/* add to cart button */}
            <button className="menu-btn" onClick={() => handleAddToCart(item)}>
              ADD
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
