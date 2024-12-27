import "./Navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";

const Navbar = () => {
    const [isTransparent, setIsTransparent] = useState(true);
    const [genre, setGenre] = useState<string | null>(null);

    onscroll = () => {
        setIsTransparent(scrollY > 0 ? false : true);
        return () => onscroll = null;
    };

    return (
        <div className={isTransparent ? "navbar" : "navbar opaque"}>
            <div className="container">
                <div className="left">
                    <img src="src/assets/netflix-logo.svg" alt="" />
                    <span onClick={() => setGenre(null)}>Home</span>
                    <span onClick={() => setGenre("TV Shows")}>TV Shows</span>
                    <span onClick={() => setGenre("Movies")}>Movies</span>
                    <span onClick={() => setGenre(null)}>New & Popular</span>
                    <span onClick={() => setGenre(null)}>My List</span>
                    <span onClick={() => setGenre(null)}>Browse by Languages</span>
                </div>
                <div className="right">
                    <SearchIcon className="icon" />
                    <span>Children</span>
                    <NotificationsIcon className="icon" />
                    <img src="src/assets/profile-pic.jpg" alt="" />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={genre ? "genres show" : "genres"}>
                <span>{genre ?? ''}</span>
                <select name="genre" id="genre">
                    <option>Genres</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        </div>
    );
};

export default Navbar;