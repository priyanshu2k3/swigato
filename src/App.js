import Navbar from "./components/Navbar.jsx";
import Menu from "./components/menu.jsx";
import DeliveryPage from "./components/DeliveryPage.jsx";
import Footer from "./components/Footer.jsx";
import SignIn from "./components/SignIn.jsx"
import React, {useEffect ,useContext} from "react";
import DataContext from "./context/DataContext";
import {fetchData} from "./functions/fetching.js"
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
// import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";


function App() {

  const { setCopyData,setData,setCity,presentURL,loggedIn,setLoggedIn}=useContext(DataContext)

  async function initialization(){
    const fetchedData=await fetchData()
    if (fetchedData !==null){
    // {console.log(fetchedData,"app.js")
    setCity(fetchedData.cityList);
    setCopyData(fetchedData.data)
    setData(fetchedData.data);}
    if(document.cookie){} 
    
    return(null)
}

      useEffect(() => {initialization()},[]);
  
  return (
    <div>
    <Routes>
      <Route path="/*" element={
        <div>
      <Navbar />
       <Routes>
       <Route path="/" element={<DeliveryPage/>}></Route>
       <Route path="/food" element={<Menu/>}></Route>
       </Routes>
  
      </div>
    } />
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
