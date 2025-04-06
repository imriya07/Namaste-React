import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResTaurantCatogory from "./ResTaurantCatogory";


const RestaurantMenu = () => {

  
  // const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams()
  const dummy = "Dummy Data";
 

  const resInfo = useRestaurantMenu(resId)

  
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //       // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9122238&lng=77.5923219&restaurantId="+resId
  //       MENU_API + resId
  //   );
  //   const json = await data.json();
  //   console.log("*****", json);
  //   setResInfo(json.data);
  // };

  const {
    name: resname,
    cuisines,
    costForTwoMessage: costforTwo,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  // console.log("itemCards", itemCards);

  const catogiries =  resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers.filter(c => c.info?.offerTag === "DEAL OF DAY");
  // console.log("filtrryy&&&&",catogiries);
  


  if (resInfo === null) return <Shimmer />;
  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{resname}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" ,")} - {costforTwo}
      </p>

      {/* catogiries acordian */}
      {catogiries.map((category, index) => (
        <div key={category.info.id || index} className="my-4">
          <ResTaurantCatogory data={category?.info} dummy={dummy} />
        </div>
      ))}

      {/* <ul>
        {itemCards.map((item, index) => (
          <li key={item.info.id || index}>{item.info.description}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
