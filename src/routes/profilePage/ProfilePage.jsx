import "./profilePage.css";
import Image from "../../components/image/Image"
import { useState } from "react";
import Collections from "../../components/collections/Board";
import Gallery from "../../components/gallery/Gallery"
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import { useParams } from "react-router";
import Board from "../../components/collections/Board";
import FollowButton from "./FollowButton";

const ProfilePage = () => {
    const [type,  setType] = useState('saved')

    const {username} = useParams()

    const {isPending, error, data} = useQuery({
        queryKey:["profile", username],
        queryFn:() => apiRequest.get(`/users/${username}`).then((res)=> res.data)
      })
      
      if (isPending) return "Loading..."
      if(error) return "An error has occured" + error.message
      if(!data) return "User not found"

    return (
        <div className="profilePage">
           <Image className="profileImage" src={data.img||"/general/noAvatar.png"} alt="" w={100} h={100}></Image>
           <h1 className="profileName">{data?.displayName}</h1>
           <span className="profielUsername">{data?.username}</span>
           <div className="followCounts">
            {data.followerCount} followers . {data.followingCount} followings
           </div>

           <div className="profileInteractions">
            <Image path="/general/share.svg"></Image>
           <div className="profileButtons">
            <button>Message</button>
            <FollowButton isFollowing={data.isFollowing} username={data.username}></FollowButton>
           </div>
            <Image path="/general/more.svg"></Image>
           </div>

           <div className="profileOptions">
                <span onClick={() => setType("created")} className={type === "created" ? "active" : ""}>Created</span>
                <span onClick={() => setType("saved")} className={type === "saved" ? "active" : ""}>Saved</span>
           </div>

           {
            type === "created" ? <Gallery userId={data._id}></Gallery> : <Board userId={data._id}></Board>
           }

        </div>
    );
};

export default ProfilePage;