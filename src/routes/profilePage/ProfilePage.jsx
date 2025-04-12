import "./profilePage.css";
import Image from "../../components/image/Image"
import { useState } from "react";
import Collections from "../../components/collections/Collections";
import Gallery from "../../components/gallery/Gallery"

const ProfilePage = () => {

    const [type,  setType] = useState('saved')
    return (
        <div className="profilePage">
           <Image className="profileImage" path="/general/noAvatar.png" alt="" w={100} h={100}></Image>
           <h1 className="profileName">Omar Faruk</h1>
           <span className="profielUsername">@omar</span>
           <div className="followCounts">
            10 followers . 20 followings
           </div>

           <div className="profileInteractions">
            <Image path="/general/share.svg"></Image>
           <div className="profileButtons">
            <button>Message</button>
            <button>Follow</button>
           </div>
            <Image path="/general/more.svg"></Image>
           </div>

           <div className="profileOptions">
                <span onClick={() => setType("created")} className={type === "created" ? "active" : ""}>Created</span>
                <span onClick={() => setType("saved")} className={type === "saved" ? "active" : ""}>Saved</span>
           </div>

           {
            type === "created" ? <Gallery></Gallery> : <Collections></Collections>
           }

        </div>
    );
};

export default ProfilePage;