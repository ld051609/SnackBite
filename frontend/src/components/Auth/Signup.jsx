import {React, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import styles from './form.module.css'
const Signup = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const {email, password, username} = inputValue;
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
        
    }
    const handleError = (errr) => 
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) => 
        toast.success(msg, {
            position: "bottom-right",
        });
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              const { data } = await axios.post(
                "http://localhost:4000/signup",
                {
                  ...inputValue,
                },
                { withCredentials: true }
              );
              const { success, message } = data;
              if (success) {
                handleSuccess(message);
                setTimeout(() => {
                  navigate("/profile");
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
              username: "",
            });
          };
  return (
    <div className={styles.container}>
        <h2>Signup Form</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formInput}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input 
                    type="email" 
                    name='email' 
                    value={email} 
                    placeholder='Enter your email' 
                    onChange={handleOnChange}
                    required
                    className={styles.input}
                    />
            </div>
            <div className={styles.formInput}>
                <label htmlFor="username" className={styles.label}>Username</label>
                <input 
                    type="text" 
                    name='username' 
                    value={username} 
                    placeholder='Enter your username' 
                    onChange={handleOnChange}
                    required
                    className={styles.input}
                    />
            </div>
            <div className={styles.formInput}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input 
                    type="password" 
                    name='password' 
                    value={password} 
                    placeholder='Enter your password' 
                    onChange={handleOnChange}
                    required
                    className={styles.input}
                />
            </div>
            <button type='submit' className={styles.btn1}>Sign up</button>
            <span>
                Already have an account? <Link to='/login' className={styles.btn2}>Login</Link>
            </span>
        </form>
        <ToastContainer />

    </div>
  )
}

export default Signup