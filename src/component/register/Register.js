import { useState } from "react";
import { useHistory } from "react-router";
import Data from "../data/Data.js";
import "./Register.css";

function Register() {
  const history = useHistory();
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });
 

  function handleInputChange({ target }) {
    const { name, value } = target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const user = {
    id: Math.floor(Math.random() * (999999 - 99) + 99),
      name: registerFormData.name,
      email: registerFormData.email,
      password: registerFormData.password,
      dateOfBirth: registerFormData.dateOfBirth,
    };
    Data.push(user);
    console.log(Data);
    history.push("/login");
  }
  const { name, email, password, dateOfBirth } = registerFormData;
  return (
    <>
      <form className="RegisterForm" onSubmit={handleSubmit}>
        <div className="RegisterForm-wrapper-div">
          <label className="RegisterForm-label">Enter Name :</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className="RegisterForm-input"
          /><br/>
          
          <label className="RegisterForm-label">Enter Email :</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="RegisterForm-input"
          />
          <label className="RegisterForm-label">Enter Password :</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="RegisterForm-input"
          />
          <label className="RegisterForm-label">Enter Date of Birth :</label>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleInputChange}
            className="RegisterForm-input"
          />
          <button type="submit" className="RegisterForm-button">
            Register
          </button>
          <button type="reset" className="RegisterForm-button">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
