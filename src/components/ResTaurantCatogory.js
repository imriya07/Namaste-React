import React from "react";
import ItemList from "./itemList";
const ResTaurantCatogory = ({ data,dummy }) => {
  console.log(data);

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">{data.header}</span>
          <span>↓</span>
          <ItemList items={data.itemCards} dummy={dummy}/>
        </div>
      </div>
    </div>
  ); 
};

export default ResTaurantCatogory;
