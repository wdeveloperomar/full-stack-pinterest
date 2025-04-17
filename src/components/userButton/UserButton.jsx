import { useState } from "react";
import "./userButon.css"
import Image from "../image/Image";
import apiRequest from "../../utils/apiRequest"
import { Link, useNavigate } from "react-router";
import useAuthStore from "../../utils/authStore";

const UserButton = () => {
    const [open, setOpen] = useState(false)
   
    const navigate = useNavigate()
    

     const {currentUser, removeCurrentUser} = useAuthStore()

    const handleLogout = async () => {
        try {
            await apiRequest.post("/users/auth/logout", {})
            removeCurrentUser()
            navigate("/auth")
        } catch (err) {
            console.log(err)
        }
    }
    return  currentUser ? (
        <div className="userButton">
            <Image path={currentUser.img || "/general/noAvatar.png"} alt="" />
            <div onClick={() => setOpen((prev) => !prev)}>
            <Image path="/general/arrow.svg"  alt="" className="arrow"/>
            </div>
            {open && <div className="userOptions">
                <Link to={`/profile/${currentUser.username}`} className="userOption">Profile</Link>
                <div className="userOption">Setting</div>
                <div onClick={handleLogout} className="userOption">Logout</div>
            </div>}
        </div>
    ) : (
        <Link to="/auth" className="loginLink">
            login / sign up
        </Link>
    )
       
    
};

export default UserButton;