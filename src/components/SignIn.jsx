import React, { useState ,useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from "../assets/draw2.webp"
import DataContext from '../context/DataContext';



function SignIn(props) {
  const navigate = useNavigate();
  const {presentURL}=useContext(DataContext)

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    



    function handelsignIn(e){
      var data
        e.preventDefault()
        console.log(Email,Password)
              
            const vals=({ 
                          "email":Email,
                          "password":Password,
                        });
        try {
          axios.get('http://localhost:6969/signin?',vals)
          .then(res => {data = res;
            console.log(data.status);
            if(data.status===200){
              Cookies.set('token',data.cookie);
              alert("welcome Sirji Kya lengay Aap")
              navigate(presentURL)
            }
            else{alert("there is some error pls check your password and email")}
          })
  
        } catch (error) {
          console.log(error)
        }
      }

    function handelOnChange(e){
        if(e.target.id==="email"){(setEmail(e.target.value))}
        if(e.target.id==="password"){(setPassword(e.target.value))}
    }
    return (
      
<section className="h-screen">
  <div className="h-full">
    {/* <!-- Left column container with background--> */}
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src={image}
          className="w-full"
          alt="Sample image" />
      </div>

      {/* <!-- Right column container --> */}
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">SignUp to our platform</h5>
        
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Your email</label>
            <input onChange={handelOnChange}  type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="eg. name@company.com" required/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Your password</label>
            <input onChange={handelOnChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handelsignIn}>Log In</button>
        <div className='text-white hover:text-blue-500'><a href="/signup">Click here to SignUp</a></div>
    </form>
</div>

      </div>
    </div>
  </div>
</section>
    );
  }

export default SignIn;
