import Navbar from "./components/Navbar.jsx";
import Menu from "./components/menu.jsx";
import DeliveryPage from "./components/DeliveryPage.jsx";
import Footer from "./components/Footer.jsx";
import React, {useEffect ,useContext} from "react";
import DataContext from "./context/DataContext";
import {fetchData} from "./functions/fetching.js"
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import SignIn from "./components/SignIn.jsx";


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

      <Router>
        <Routes>
                 <Route exact path='/' element={<SignIn/>}></Route>
                 <Route exact path='/food' element={< Menu />}></Route>
        </Routes>
      </Router>
<Footer/>

    </div>
  );
}

export default App;
