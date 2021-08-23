import { useState } from "react";
import "./Login.css";
import Data from "../data/Data.js";
import { useHistory } from "react-router-dom";

function Login({setIsLoggedOut}) {

  const history =useHistory();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [isLogging,setIsLogging]=useState(false);
  
  function handleInputChange({ target }) {
    const { name, value } = target;
    setLoginFormData({ ...loginFormData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    Data.map((data) => {
       if(data.email === loginFormData.email && data.password=== loginFormData.password) 
       {
           setIsLoggedOut(true);
           history.push('/blogs');
       }
       
    });
    setIsLogging(true);
  }
  const { email, password } = loginFormData;
  return (
    <>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="LoginForm-wrapper-div">
          <label className="LoginForm-label">Enter Email Id :</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="LoginForm-input"
          />
          <label className="LoginForm-label">Enter Password :</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="LoginForm-input"
          />
          <button type="submit" className="LoginForm-button">
            Login
          </button>
          <button type="reset" className="LoginForm-button">
            Cancel
          </button>
        {isLogging?(<span>Wrong EmailId or Password</span>):null}
        </div>
      </form>
    </>
  );
}

export default Login;
