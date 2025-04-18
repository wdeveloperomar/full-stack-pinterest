import EmojiPicker from 'emoji-picker-react';
import { useState } from "react";
import apiRequest from "../../utils/apiRequest"
import { useMutation, useQueryClient } from '@tanstack/react-query';


const addComment = async (comment) => {
    const res = await apiRequest.post("/comments", comment)
    return res.data
}   

const CommnetForm = ({id}) => {
    const [open, setOpen] = useState(false)
    const [desc, setDesc] = useState("")

    const handleEmojiClick = (emoji) => {
        setDesc(prev => prev + emoji.emoji)
    }

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: addComment,
        onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["comments", id]})
        setDesc("")
        setOpen(false)
        }
        
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        mutation.mutate({
            description: desc,
            pin: id
        })
    }

    return (
        <div>
            <form className="commentForm" onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder="Add a comment" onChange={(e) => setDesc(e.target.value)} value={desc}/>
                <div onClick={() => setOpen((prev) => !prev)} className="emoji">😊</div>
                {open && <div className="emojiPicker">
                    <EmojiPicker onEmojiClick={handleEmojiClick}></EmojiPicker>
                </div>}
            </form>
        </div>
    );
};

export default CommnetForm;