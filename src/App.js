import Navbar from "./components/Navbar.jsx";
import DeliveryPage from "./components/DeliveryPage.jsx";
import Footer from "./components/Footer.jsx";
import React, {useEffect ,useContext} from "react";
import DataContext from "./context/DataContext";
import {fetchData} from "./functions/fetching.js"

function App() {

  const { setCopyData,setData,setCity}=useContext(DataContext)

  async function initialization(){
    const fetchedData=await fetchData();
    setCity(fetchedData.cityList);
    setCopyData(fetchedData.data)
    setData(fetchedData.data);
    
    return(null)
}

      useEffect(() => {initialization()},[]);
  
  return (
    <div>

<Navbar/>
<DeliveryPage/>
<Footer/>

    </div>
  );
}

export default App;
