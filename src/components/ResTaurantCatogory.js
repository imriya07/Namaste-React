import React from "react";
import ItemList from "./itemList";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ResTaurantCatogory = ({ data,dummy }) => {
  const dispatch = useDispatch();
  const handleAddItem =() =>{
    dispatch(addItem("pizza"));
  }

  console.log(data);

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">{data.header}</span>
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddItem()}
          >
            Add+
          </button>          
          <span>↓</span>
          <ItemList items={data.itemCards} dummy={dummy}/>
        </div>
      </div>
    </div>
  ); 
};

export default ResTaurantCatogory;
