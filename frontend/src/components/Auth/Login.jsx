import React from 'react'
import { Link, useNavigate, userNavigate } from 'react-router-dom'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const {email, password} = inputValue;
  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <div className='form-container'>
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            required/>
        </div>
          <button type='submit'>Submit</button>
          <span>
        Don't have an account? <Link to='/signup'>Sign up</Link>
        </span>
      </form>
      <ToastContainer />


    </div>
  )
}

export default Login