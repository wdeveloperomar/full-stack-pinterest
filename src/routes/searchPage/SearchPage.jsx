import { useSearchParams } from "react-router";
import "./searchPage.css";
import Gallery from "../../components/gallery/Gallery";

const SearchPage = () => {

    let [searchParams] = useSearchParams()

    const search = searchParams.get("search")

    return (
        <div  className='searchPage'>
            <Gallery search={search}></Gallery>
        </div>
    );
};

export default SearchPage;