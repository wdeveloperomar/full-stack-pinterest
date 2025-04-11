import UserButton from "../userButton/UserButton";
import "./topBar.css"

const TopBar = () => {
    return (
        <div className="topBar">
           {/* SERCH */}
           <div className="search">
                <img src="/general/search.svg" alt="" />
                <input type="text" name="" id="" placeholder="Search" />
           </div>
           {/* USER */}
           <UserButton></UserButton>
        </div>
    );
};

export default TopBar;