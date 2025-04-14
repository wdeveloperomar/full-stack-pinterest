import "./comments.css"
import EmojiPicker from 'emoji-picker-react';
import { useState } from "react";
import {useQuery} from "@tanstack/react-query"
import apiRequest from "../../utils/apiRequest";
import Comment from "./Comment";



const Comments = ({id}) => {
    const [open, setOpen] = useState(false)
    const {isPending, error, data} = useQuery({
        queryKey:["comments", id],
        queryFn:() => apiRequest.get(`/comments/${id}`).then((res)=> res.data)
      })
      
      if (isPending) return "Loading..."
      if(error) return "An error has occured" + error.message
      if(!data) return "Comment not found"

    return (
        <div className="comments">
            <div className="commentList">
                <span className="commentCount">{data.length === 0 ? "No comments" : data.length + "comments"}</span>
                {/* Comment */}
                {
                    data.map((comment, index) =>(
                        <Comment key={index} comment={comment}></Comment>
                    ))
                }
            </div>
            <form className="commentForm">
                <input type="text" name="" id="" placeholder="Add a comment"/>
                <div onClick={() => setOpen((prev) => !prev)} className="emoji">😊</div>
                {open && <div className="emojiPicker">
                    <EmojiPicker></EmojiPicker>
                </div>}
            </form>
        </div>
    );
};

export default Comments;