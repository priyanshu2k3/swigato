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
  function uptoDate(val){
    setData(val)
  }

  return (
    <DataContext.Provider value={{loggedIn,setLoggedIn, Data,setData ,City,setCity,location,setLocation,term,setTerm,setCopyData,copyData,foodData,setFoodData,presentURL,setURL,copyfoodData,setCopyfoodData}}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;


