import "./comments.css"
import Image from "../image/Image"
import EmojiPicker from 'emoji-picker-react';
import { useState } from "react";



const Comments = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="comments">
            <div className="commentList">
                <span className="commentCount">5 comments</span>
                {/* Comment */}
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt=""></Image>
                    <div className="commentContent">
                        <span className="commentUserName">Omar Faruk</span>
                        <p className="commentText">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <span className="commentTime">
                            1h
                        </span>
                    </div>
                </div>
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt=""></Image>
                    <div className="commentContent">
                        <span className="commentUserName">Omar Faruk</span>
                        <p className="commentText">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <span className="commentTime">
                            1h
                        </span>
                    </div>
                </div>
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt=""></Image>
                    <div className="commentContent">
                        <span className="commentUserName">Omar Faruk</span>
                        <p className="commentText">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <span className="commentTime">
                            1h
                        </span>
                    </div>
                </div>
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