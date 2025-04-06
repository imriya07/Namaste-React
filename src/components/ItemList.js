import React from "react";

const ItemList = ({ items }) => {
  console.log("ItemslIst&&&&", items);

  return (
    <div>
      {/* {items.map(item => <div key={item.restId}>
                <div><span>{item.primaryDescription}</span></div>
            </div>)} */}
    </div>
  );
};

export default ItemList;
