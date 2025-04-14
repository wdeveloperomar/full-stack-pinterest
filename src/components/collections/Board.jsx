import "./board.css";
import Image from "../image/Image"
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import {format} from "timeago.js"
import { Link } from "react-router";

const Board = ({userId}) => {

  
    
        const {isPending, error, data} = useQuery({
            queryKey:["board", userId],
            queryFn:() => apiRequest.get(`/boards/${userId}`).then((res)=> res.data)
          })
          
          if (isPending) return "Loading..."
          if(error) return "An error has occured" + error.message
          if(!data) return "User not found"

    return (
        <div className="collections">
            {/* collections */}
            {
                data.map((board) => (
                    <Link to={`/search?boardId=${board._id}`} className="collection" key={board._id}>
                        
                    <Image src={board.firstPin.media} alt=""></Image>
                    <div className="collectionInfo">
                        <h1>{board.title}</h1>
                        <span>{board.pinCount} . {format(board.createdAt)}</span>
                    </div>
                </Link>
                ))
            }
        </div>
    );
};

export default Board;