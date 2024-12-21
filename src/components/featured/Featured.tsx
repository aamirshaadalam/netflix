import "./Featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = () => {

    return (
        <div className="featured">
            <img src="src/assets/profile-pic.jpg" alt="" />
            <div className="info">
                <img src="src/assets/featured-movie-title.webp" alt="" />
                <span className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos architecto eaque porro id placeat, mollitia amet. Officia necessitatibus magni, dolore est maxime reiciendis deleniti sed corporis eius at vitae libero.</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;