import "./comments.css"
import {useQuery} from "@tanstack/react-query"
import apiRequest from "../../utils/apiRequest";
import Comment from "./Comment";
import CommnetForm from "./CommnetForm";



const Comments = ({id}) => {
   
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
            <CommnetForm></CommnetForm>
        </div>
    );
};

export default Comments;