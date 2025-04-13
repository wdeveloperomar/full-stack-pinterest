import { useInfiniteQuery} from "@tanstack/react-query";
import GalleryItem from "../galleryItem/GalleryItem";
import "./gallery.css";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

  
  const fetchPins = async ({pageParam, search, userId}) => {
    const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam || ""}&search=${search || ""}&userId=${userId || ""}`)
    return res.data
}

const Gallery = ({search, userId}) => {


    const {data, fetchNextPage, hasNextPage, status} = useInfiniteQuery({ 
        queryKey: ['pins'], 
        queryFn: ({pageParam=0}) => fetchPins(pageParam, search, userId),
        initialPageParam:0,
        getNextPageParam:(lastPage, pages) => lastPage.nextCursor,
     })

    
    if(status === "pending") return "Loading..."
    if(status === "error") return "Something went wrong"

    console.log(data)

    const allPins = data?.pages.flatMap(page => page.pins) || []
    return (

        <InfiniteScroll dataLength={allPins.length} next={fetchNextPage} hasMore={!!hasNextPage} loader={<h4>Loading more pins</h4>} endMessage={<p>All post Loaded!</p>}>
            <div className="gallery">
                {
                    allPins?.map(item => (
                        <GalleryItem key={item._id} item={item}></GalleryItem>
                    ))
                }
            </div>
        </InfiniteScroll>
    );
};

export default Gallery;