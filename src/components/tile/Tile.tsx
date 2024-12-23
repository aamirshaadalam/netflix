import "./Tile.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
const SCALE_X = 1.4;
const SCALE_Y = 2.5;

const Tile = ({ index }: TileProps) => {
    const tileDiv = useRef<HTMLDivElement>(null);

    const handleHover = (isHover: boolean) => {
        if (!tileDiv.current) return;

        if (!isHover) {
            tileDiv.current.style.transform = '';
            return;
        }

        const numberOfVisibleTiles = getNumberOfVisibleTiles();

        // first visible tile
        if (index % numberOfVisibleTiles === 0) {
            tileDiv.current.style.transform = `scale(${SCALE_X},${SCALE_Y}) translateX(${LEFT_MARGIN}rem)`;
            return;
        }

        // last visible tile
        if (index % numberOfVisibleTiles === numberOfVisibleTiles - 1) {
            tileDiv.current.style.transform = `scale(${SCALE_X},${SCALE_Y}) translateX(${-RIGHT_MARGIN}rem)`;
            return;
        }

        tileDiv.current.style.transform = `scale(${SCALE_X},${SCALE_Y})`;
    };

    return (
        <div className="tile"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)} ref={tileDiv}>
            <div className="img">{index + 1}</div>
            <div className="info">
                <div className="icons">
                    <PlayArrowIcon />
                    <AddCircleOutlineIcon />
                    <ThumbUpAltOutlinedIcon />
                    <ThumbDownAltOutlinedIcon />
                </div>
                <div className="details">
                    <span>1 hour 14 mins</span>
                    <span className="age-limit">16+</span>
                    <span>2020</span>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam in aliquam corrupti molestias quibusdam.
                </div>
                <div className="genre">Action</div>
            </div>
        </div>
    );
};

export default Tile;