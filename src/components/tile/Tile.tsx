import "./Tile.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useRef } from "react";
import { LEFT_MARGIN, RIGHT_MARGIN } from "../slider/Slider";
import getNumberOfVisibleTiles from "../../utils/getNumberOfVisibleTiles";

export interface TileProps {
    index: number;
}

// this width includes the gap 
// (tile width in rem + gap in rem)
export const TILE_WIDTH = 16.3 + 0.25;
const SCALE_X = 1.5;
const SCALE_Y = 2.5;
const TRANSLATE_Y = -1.1;

const Tile = ({ index }: TileProps) => {
    const tileDiv = useRef<HTMLDivElement>(null);

    const handleHover = (isHovered: boolean) => {
        if (!tileDiv.current) return;

        if (!isHovered) {
            tileDiv.current.style.transform = '';
            return;
        }

        const numberOfVisibleTiles = getNumberOfVisibleTiles();

        // first visible tile
        if (index % numberOfVisibleTiles === 0) {
            tileDiv.current.style.transform = `scale(${SCALE_X},${SCALE_Y}) translate(${LEFT_MARGIN}rem, ${TRANSLATE_Y}rem)`;
            return;
        }

        // last visible tile
        if (index % numberOfVisibleTiles === numberOfVisibleTiles - 1) {
            tileDiv.current.style.transform = `scale(${SCALE_X},${SCALE_Y}) translate(${-RIGHT_MARGIN}rem, ${TRANSLATE_Y}rem)`;
            return;
        }

        tileDiv.current.style.transform = `scale(${SCALE_X},${SCALE_Y}) translateY(${TRANSLATE_Y}rem)`;
    };

    return (
        <div className="tile"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)} ref={tileDiv}>
            <img src={`https://picsum.photos/320/180?random=${index + 1}`} alt="" />
            <div className="hover-content">
                <video autoPlay muted>
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4" />
                </video>
                <div className="info">
                    <div className="icons">
                        <PlayArrowIcon className="icon" />
                        <AddIcon className="icon" />
                        <ThumbUpAltOutlinedIcon className="icon" />
                        <ThumbDownAltOutlinedIcon className="icon" />
                    </div>
                    <div className="details">
                        <span className="box">PG-13</span>
                        <span>1h 59m</span>
                        <span className="box">HD</span>
                    </div>
                    <div className="genre">
                        <span>Suspenseful</span>
                        <span className="dot"></span>
                        <span>Exciting</span>
                        <span className="dot"></span>
                        <span>Thriller</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tile;