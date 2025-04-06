import { LOGO_URL } from "../utils/contants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import usseOnlineStatus from "../utils/usseOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = usseOnlineStatus();

  const {loggedInUser} = useContext(UserContext)
  console.log("7y7t7t6",loggedInUser);
  

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="flex items-center space-x-2">
          <img src={LOGO_URL} alt="Logo" className="h-12" />
          <span className="text-xl font-semibold">Brand</span>
        </a>
        <div className="flex items-center space-x-6">
          <span className="text-lg">Online Status: {onlineStatus ? "🟢" : "🔴"}</span>
          <Link className="text-gray-700 hover:text-blue-600" to="/">Home</Link>
          <Link className="text-gray-700 hover:text-blue-600" to="/about">About Us</Link>
          <Link className="text-gray-700 hover:text-blue-600" to="/contact">Contact Us</Link>
          <Link className="text-gray-700 hover:text-blue-600" to="/grocery">Grocery</Link>
          <a href="#" className="text-gray-700 hover:text-blue-600">Cart</a>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
          >
            {btnNameReact}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
