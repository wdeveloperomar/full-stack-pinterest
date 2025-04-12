import Image from "../image/Image";
import "./postInteraction.css"

const PostInteraction = () => {
    return (
        <div className="postInteraction">
           <div className="interactionIcons">
                <Image path="/general/react.svg"></Image>
                273
                <Image path="/general/share.svg"></Image>
                <Image path="/general/more.svg"></Image>
           </div>
           <button>Save</button>
        </div>
    );
};

export default PostInteraction;