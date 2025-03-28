
const RestaurantCard = ({ resData }) => {
    const { name, avgRatingString, areaName,costForTwo} = resData;
    const data = resData
    console.log(data,"hgfff");
    
    // console.log("f%%%%",title,description,aspectRatio,imageId,cta);
    // console.log(resData.card,"fjfjhfjfhf");
    
    return (
        <div className="card shadow-sm">
            {/* <img src={ cloudinaryImageId} className="card-img-top" alt="Restaurant" /> */}
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{areaName}</p>
                <p className="card-text">{costForTwo}</p>
                <p className="card-text">⭐ {avgRatingString} stars</p>
            </div>
        </div>
    );
};

export default RestaurantCard;



// const RestaurantList = ({ resData }) => {
//     return (
//         <div className="row">
//             {resData.card.map((restaurant, index) => {
//                 const { title, description, aspectRatio, imageId, cta } = restaurant.card.card;

//                 return (
//                     <div key={index} className="col-md-4 mb-3">
//                         <div className="card shadow-sm">
//                             <img src={cta.link + imageId} className="card-img-top" alt={title} />
//                             <div className="card-body">
//                                 <h5 className="card-title">{title}</h5>
//                                 <p className="card-text">{description}</p>
//                                 <p className="card-text">⭐ {aspectRatio} stars</p>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default RestaurantList;
