import React ,{useContext, useEffect}from "react";
import DataContext from "../context/DataContext"; 
import image from "../assets/foodimage.jpeg"
import { fetchMenu } from "../functions/fetching";


function Menu(){
 
    const {foodData,setFoodData,setURL,setCopyfoodData}=useContext(DataContext)
    setURL("/food")
   
async function View(){
    const data=await fetchMenu();
    setFoodData(data)
    setCopyfoodData(data)
} 

    useEffect(() => {View()},[]);
    if (foodData=== []|| foodData=== null){return(<></>)}
    else{
    return(
    <div>
{foodData.map((item)=>{return(
<div href="#" style={{width:"100%"}} className="flex items-center dark:text-white bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 mr-8 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="Food Image"/>
    <div style={{width:"80%"}} className="flex flex-col justify-between   ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.food_name} <p className="text-sm">for just {item.price}</p></h5>
        <h6>{item.cuisine}</h6>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.fact}</p>
        <button  className=" h-12 md:flex-row text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Add to cart</button>
    </div>
</div>)
})
    }

</div>

    )}
}
export default Menu