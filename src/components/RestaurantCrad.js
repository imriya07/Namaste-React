import { CDN_URL } from "../utils/contants";

const RestaurantCard = ({ resData }) => {
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime } = resData?.data;
    return (
        <div className="card shadow-sm">
            <img src={CDN_URL + cloudinaryImageId} className="card-img-top" alt="Restaurant" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{cuisines.join(", ")}</p>
                <p className="card-text">⭐ {avgRating} stars</p>
                <p className="card-text">💰 {costForTwo / 100} FOR TWO</p>
                <p className="card-text">⏳ {deliveryTime} minutes</p>
            </div>
        </div>
    );
};

export default RestaurantCard;