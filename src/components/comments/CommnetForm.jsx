import EmojiPicker from 'emoji-picker-react';
import { useState } from "react";

const CommnetForm = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
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

export default CommnetForm;