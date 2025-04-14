import "./postPage.css";
import Image from "../../components/image/Image";
import PostInteraction from "../../components/postInteraction/PostInteraction";
import { Link, useParams } from "react-router";
import Comments from "../../components/comments/Comments";
import {useQuery} from "@tanstack/react-query"
import apiRequest from "../../utils/apiRequest";

const PostPage = () => {

  const {id} = useParams()

const {isPending, error, data} = useQuery({
  queryKey:["pin", id],
  queryFn:() => apiRequest.get(`/pins/${id}`).then((res)=> res.data)
})

if (isPending) return "Loading..."
if(error) return "An error has occured" + error.message
if(!data) return "Pin not found"

  return (
    <div className="postPage">
      <svg
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 493.578 493.578"
      >
        <g>
          <path
            d="M487.267,225.981c0-17.365-13.999-31.518-31.518-31.518H194.501L305.35,83.615c12.24-12.24,12.24-32.207,0-44.676
		L275.592,9.18c-12.24-12.24-32.207-12.24-44.676,0L15.568,224.527c-6.12,6.12-9.256,14.153-9.256,22.262
		c0,8.032,3.136,16.142,9.256,22.262l215.348,215.348c12.24,12.239,32.207,12.239,44.676,0l29.758-29.759
		c12.24-12.24,12.24-32.207,0-44.676L194.501,299.498h261.094c17.366,0,31.519-14.153,31.519-31.519L487.267,225.981z"
          />
        </g>
      </svg>
      <div className="postContainer">
        <div className="postImg">
          <Image src={data?.media} alt="" w={736}></Image>
        </div>
        <div className="postDetails">
          <PostInteraction></PostInteraction>
          <Link to={`/${data?.user?.username}`} className="postUser">
            <Image src={data?.user?.img || "/general/noAvatar.png"}></Image>
            <span>{data?.user?.username}</span>
          </Link>
          <Comments id={data._id}></Comments>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
