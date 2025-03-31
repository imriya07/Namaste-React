import { useEffect, useState } from "react";


const User = ({name}) => {
    const [count,setCount] = useState(0)
    // const [count2] = useState(1)

    useEffect(() =>{
        //Api calls
    },[])



  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1>count = {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>add more</button>
        {/* <h1>count2 = {count2}</h1> */}
      <h2 className="text-xl font-bold text-gray-800">Name: {name}</h2>
      <h3 className="text-lg text-gray-600">Location: Bengaluru</h3>
      <h4 className="text-gray-500">Contact: @Riya</h4>
    </div>
  );
};

export default User;
