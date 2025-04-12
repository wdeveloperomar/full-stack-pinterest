import Image from "../image/Image";
import "./galleryItem.css"
import {Link} from "react-router"


const GalleryItem = ({item}) => {

    const optimiziedHeight = (372 * item.height) / item.width
    return (
        <div className="galleryItem" style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
           {/* <img src={item.media} alt="" /> */}
           <Image path={item.media} alt="" w={372} h={optimiziedHeight} ></Image>
           <Link to={`/pin/${item.id}`} className="overlay"></Link>
           <button className="saveButton">Save</button>
           <div className="overlayIcons">
            <button>
                <Image path="/general/share.svg" alt="" />
            </button>
            <button>
                <Image path="/general/more.svg" alt="" />
            </button>
           </div>
        </div>
    );
};

export default GalleryItem;