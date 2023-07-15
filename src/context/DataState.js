import React, { useState } from "react";
import DataContext from "./DataContext";

function DataProvider(props) {
  const [Data, setData] = useState(null);
  const [City,setCity]=useState(null);
  function uptoDate(val){
    setData(val)
  }

  return (
    <DataContext.Provider value={{ Data,setData ,City,setCity}}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;


