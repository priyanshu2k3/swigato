import React ,{useContext, useEffect, useState}from "react";
import DataContext from "../context/DataContext"; 
import image from "../assets/foodimage.jpeg"
import { fetchMenu } from "../functions/fetching";
import cartImage from "../assets/cart.svg";
import { Navigate, useNavigate } from "react-router-dom";


function Menu(){
    
    const navigate=useNavigate();
    var arr=[];
    const n=0
    const [list,setList]=useState([])
 
    const {cart,setCart,foodData,setFoodData,setURL,setCopyfoodData,backendURL}=useContext(DataContext)
    setURL("/food")
   
async function View(){
    const data=await fetchMenu(backendURL);
    setFoodData(data)
    setCopyfoodData(data)
} 

function handelOnClick(e){
    // if(!username){alert("you need to Signin first") return }
    e.preventDefault();
    arr=list
    console.log(e.target.value)
    arr.push(e.target.value) 
    arr.sort() 
    setList(arr)
console.log("clicked",list)
}
 function hadelOnClickCart(){
    
    var i,j=0
    var tempList=[];

    console.log(list,"list")
        for (i=0;i<list.length;){
            console.log(i)
            var counter=0;
            j=i
                    
            
                while(j<list.length && list[i]===list[j] ){
                    counter++;
                    j++
                }

            // else{
            // console.log(foodData[list[i]].food_name)
            var obj=({"index":list[i],
                     "food_name":foodData[list[i]].food_name,
                     "price":foodData[list[i]].price,
                    "count":counter,
                        })
            i=j;
            j=list.length;
            console.log(i,j)
        tempList.push(obj)}
    // }
        console.log(tempList,"templist")
        setCart(tempList)
        navigate("/cartlist")
        }

        // setCart(arr)
        // navigate("/cartlist")
        

//  }

    useEffect(() => {View()},[]);
    if (foodData=== []|| foodData=== null){return(<></>)}
    else{
    return(
    <div>
{foodData.map((item)=>{return(
<div key={item.index} href="#" style={{width:"100%"}} className="flex items-center dark:text-white bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 mr-8 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="Food Image"/>
    <div style={{width:"80%"}} className="flex flex-col justify-between   ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.food_name} <p className="text-sm">for just {item.price}</p></h5>
        <h6>{item.cuisine}</h6>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.fact}</p>
        <button onClick={handelOnClick} value={item.index} className=" h-12 md:flex-row text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Add to cart</button>
    </div>
</div>)
})
    }
{
<div onClick={hadelOnClickCart} className="fixed bottom-6 right-2  ">
    <a href="#">
  <img src={cartImage}  className="h-24" alt="cart" />
  </a>
</div>
    }
</div>

    )}
}
export default Menu