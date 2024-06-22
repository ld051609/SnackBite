import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import styles from './form.module.css'
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
    <div className={styles.container}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formInput}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            required
            placeholder='Enter email'
            className={styles.input}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            required
            placeholder='Enter password'
            className={styles.input}
            />
        </div>
          <button type='submit' className={styles.btn1}>Login</button>
          <span >
        Don't have an account? <Link to='/signup' className={styles.btn2}>Sign up</Link>
        </span>
      </form>
      <ToastContainer />


    </div>
  )
}

export default Login