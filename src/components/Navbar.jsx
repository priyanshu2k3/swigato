import React from "react"

function Navbar(props) {
    return (<>
      <nav className="bg-white  border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Swigato</span>
          </a>
       
          <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              
              <li>
                <div style={{width:"800px"}} className="flex  ">
                  
              <select className="bg-gray-50 border rounded-l-lg text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Select Location</option>
                <option value="">Kolkata</option>
                <option value="">Chennai</option>
                <option value="">Bangalore</option>
                <option value="">Hyderabad</option>
            </select>
            <input type="text" className="bg-gray-50 border rounded-r-lg text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              
            
            </div></li>
              <li>
                <a href="#" className=" flex justify-content align-centre  py-2 pl-3 pr-4 flex-col text-white  rounded md:bg-transparent  md:p-0 md:dark:bg-transparent" >SignUp/SignIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white text-2xl flex space-x-10 place-content-around">

        <div className="rounded-lg hover:text-blue-700 border-2 border-slate-900 hover:border-rose-500">Delivery</div>
        <div className="rounded-lg hover:text-blue-700 border-2 border-slate-900 hover:border-rose-500">Dining out</div>
        <div className="rounded-lg hover:text-blue-700 border-2 border-slate-900 hover:border-rose-500">Night life</div>
        </div>


        
      </nav>
      
    </>)
    }
export default Navbar



