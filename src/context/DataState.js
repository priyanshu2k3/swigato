import React, { useState } from "react";
import DataContext from "./DataContext";

function DataProvider(props) {
  const [Data, setData] = useState(null);
  const [copyData, setCopyData] = useState(null);
  const [City,setCity]=useState([]);
  const [location,setLocation]=useState("");
  const [term,setTerm]=useState("");
  const [foodData,setFoodData]=useState([]);
  const [presentURL,setURL]=useState("/")
  const [copyfoodData,setCopyfoodData]=useState([]);
  const [loggedIn,setLoggedIn] =useState("false")
  const [cookie,setCookies] =useState("")
  const [cart,setCart] =useState([]);
<<<<<<< HEAD
  const [backendURL,setBackendURL]=useState("http://3.6.94.39:6969")
=======
  const [backendURL,setBackendURL]=useState("https://3.111.235.93:6969")
>>>>>>> parent of 4dc1000 (Update DataState.js)

  function uptoDate(val){
    setData(val)
  }

  return (
    <DataContext.Provider value={{backendURL,setBackendURL,cookie,setCookies,cart,setCart,loggedIn,setLoggedIn, Data,setData ,City,setCity,location,setLocation,term,setTerm,setCopyData,copyData,foodData,setFoodData,presentURL,setURL,copyfoodData,setCopyfoodData}}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;

// http://3.6.94.39:6969


