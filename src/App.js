import Navbar from "./components/Navbar.jsx";
import DeliveryPage from "./components/DeliveryPage.jsx";
import DataProvider from "./context/DataState.js"
//import Test from "./components/test.jsx";
//import Navbar from "./components/Navbar copy.tsx";
function App() {
  return (
    <div>
 <DataProvider>
<Navbar/>
<DeliveryPage/>
</DataProvider>
    </div>
  );
}

export default App;
