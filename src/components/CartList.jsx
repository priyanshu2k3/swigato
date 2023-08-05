import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import image from "../assets/foodimage.jpeg";
import del from "../assets/delete.svg";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function CartList(props) {
  const { backendURL,foodData, cart, setCart ,cookie} = useContext(DataContext);
  const navigate = useNavigate();
  var arr = [];

  const [totalValue, setTotalValue] = useState(0);

  function deleteItem(e) {
    console.log("delete got clickerd");
    e.preventDefault();
    var arr = cart;
    var delIndex = e.target.id;
    var { arr1, pri } = updatecart(arr, delIndex);
    console.log(arr1,"ari and pri")
    setCart(arr1);
    setTotalValue(pri);
  }

  function updatecart(arr, delIndex) {
    if (!arr) {return;}

    var tmparr = [];
    var price = 0;
    for (var i = 0; i < arr.length; i++) {
      if (i == delIndex) {}
      else {
        tmparr.push(arr[i]);
        price = price + (Number(arr[i].price.slice(1)) * arr[i].count);
        console.log(tmparr,"updatefuction")
      }
    }
    if(!tmparr[0]){navigate("/food")}
    return { arr1: tmparr, pri: price };
  }

  useEffect(() => {
    let p2 = 0;
    for (var i = 0; i < cart.length; i++) {
      p2 = p2 + Number(cart[i].price.slice(1)) * cart[i].count;
    }
    setTotalValue(p2);
  }, [cart]);

async function sendOrder(e){
  if(!cookie  ){
    alert("Need to sign in First")
    navigate("/signin")
    return
  }
    e.preventDefault();
try {

 var headers={"token":cookie}
  var payload={"cart":cart,"headers":headers}
  var res=await axios.post(backendURL+"/order",payload) 
  alert(res.data.msg)
  navigate("/")
} catch (error) {
  console.log(error,"error") 
}
    
}

  if (!cart) {
    return <></>;
  } else {
    return (
      <div className="text-white bg-slate-900">
        {cart.map((element, index) => {
          return (
            <div key={element.index} className="p-2">
              <div className="flex justify-evenly">
                <img src={image} alt="" />
                <div>{element.food_name}</div>
                <div>{element.price}</div>
                <div>{element.count}</div>
                <div>Total {Number(element.price.slice(1)) * element.count}</div>

                <div onClick={deleteItem}>
                  <img id={index} className="h-6" src={del} alt="" />
                </div>
              </div>
            </div>
          );
        })}
        <div >Total Price of your order {totalValue}</div>
        <div style={{ width: "100%" }}>
  <button  onClick={sendOrder} style={{ width: "100%" }} className="h-12 md:flex-row text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Order Now</button>
</div>
      </div>
    );
  }
}

export default CartList;
