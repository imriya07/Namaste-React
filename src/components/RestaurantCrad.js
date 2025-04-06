import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
    const { name, avgRatingString, areaName,costForTwo} = resData;
    const data = resData
    const  {loggedInUser} = useContext(UserContext)   
    
    return (
        <div className="card shadow-sm">
            {/* <img src={ cloudinaryImageId} className="card-img-top" alt="Restaurant" /> */}
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{areaName}</p>
                <p className="card-text">{costForTwo}</p>
                <p className="card-text">⭐ {avgRatingString} stars</p>
                <p className="card-text">User : {loggedInUser}</p>
            </div>
        </div>
    );
};

//Higher Order Componenet
//input - RestaurantCard => RestaurantsCardPromoted

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
      return (
        <div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
        </div>
      )
    }
  }



export default RestaurantCard;

