import { useSearchParams } from "react-router";
import "./searchPage.css";
import Gallery from "../../components/gallery/Gallery";

const SearchPage = () => {

    let [searchParams] = useSearchParams()

    const search = searchParams.get("search")
    const boardId = searchParams.get("boardId")

    return (
        <div  className='searchPage'>
            <Gallery search={search} boardId={boardId}></Gallery>
        </div>
    );
};

export default SearchPage;