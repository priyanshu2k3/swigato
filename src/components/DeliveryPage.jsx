import React, { useState,useReducer, useEffect } from "react";
// import reducer from "../reducer/reducer.jsx"
import axios from "axios";

function DeliveryPage(props){
    const [Data,setData]=useState(null)

    async function fetchData() {
        try {
          const response = await axios.get('http://localhost:8000');
          const data = response.data;
          setData(data);
          console.log(data);
          return data;
        } catch (error) {
          console.error(error);
          return null;
        }
      }

      useEffect(() => {
        fetchData();
    },[]);
  
if (Data===null){return(<></>)}
else{
    return(
        <div className="text-white">
            <p className="p-10 bg-blue-700 rounded-md">Delivery Restaurants in Kolkata</p>
<div className="grid grid-cols-4 gap-4">
            {/* mapping will be done here  */}
            {
            Data.map((item) => (//
            item.restaurants.map((subItem) => {


return(
<div key={subItem.restaurant.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className=" w-96 h-80  p-8 rounded-lg" src={subItem.restaurant.featured_image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight  dark:text-white">{subItem.restaurant.name}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
        <p className="mr-auto">{subItem.restaurant.cuisines}</p>
            <span className="ml-auto bg-blue-100 flex text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{subItem.restaurant.user_rating.aggregate_rating}
            <svg className="pl-0.5 w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            </span>
            
        </div>
        
        <div className="flex ">
        <div className=" leading-none flex items-center mr-auto"><p className="p-1">Just</p>
            <span className="text-3xl font-bold  dark:text-white">Rs{subItem.restaurant.average_cost_for_two}</span><p className="p-1">for 2 people</p>
            
        </div>
        <a href="#" className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
        </div>
</div>
</div>)
})   ))}</div>

        </div>
    )}
}

export default DeliveryPage