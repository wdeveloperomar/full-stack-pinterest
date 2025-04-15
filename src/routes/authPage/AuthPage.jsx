import "./authPage.css";
import Image from "../../components/image/Image"
import { useState } from "react";
import { useNavigate } from "react-router";
import apiRequest from "../../utils/apiRequest"


const AuthPage = () => {
    const [isRegister, setIsRegister] = useState(false)
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData)
      
        try {
            const res = await apiRequest.post(`/users/auth/${isRegister ? "register" : "login"}`,data)
            navigate("/")
        }catch(err) {
            setError(err.response.data.message)
        }


    }
    return (
        <div className='authPage'>
           <div className="authContainer">
            <Image path="/general/logo.png" alt="" w={36} h={36}></Image>
            <h1>
                {isRegister ? "Create an Account" : "Login to your account"}
            </h1>
            {
                isRegister ? (
                    <form key="register" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="username">User Name</label>
                            <input type="username" name="username" id="username" placeholder="User name" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="displayName">Name</label>
                            <input type="displayName" name="displayName" id="displayName" placeholder="Name" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" required />
                        </div>
                        <button type="submit">Register</button>
                        <p onClick={() => setIsRegister(false)}>Do you have an account? <b>Login</b></p>
                        {
                            error && <p className="error">{error}</p>
                        }
                    </form>
                ) : (
                    <form key="login" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" required />
                        </div>
                        <button type="submit">Login</button>
                        <p onClick={() => setIsRegister(true)}>Don&apos;t  have an account? <b>Register</b></p>
                        {
                            error && <p className="error">{error}</p>
                        }
                    </form>
                )
            }
           </div>
        </div>
    );
};

export default AuthPage;