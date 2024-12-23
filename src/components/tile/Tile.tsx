import "./Tile.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useRef } from "react";
import { LEFT_MARGIN } from "../slider/Slider";

export interface TileProps {
    index: number;
}

// this width includes the margin
export const TILE_WIDTH = 265;

const Tile = ({ index }: TileProps) => {
    const listItemRef = useRef<HTMLDivElement>(null);

    const handleHover = (isHover: boolean) => {
        if (!listItemRef.current) return;

        if (!isHover) {
            listItemRef.current.style.transform = '';
            return;
        }

        const numberOfTiles = Math.floor((innerWidth - LEFT_MARGIN) / TILE_WIDTH);

        if (index % numberOfTiles === 0) {
            listItemRef.current.style.transform = `scale(1.4, 2.5) translateX(14%)`;
            return;
        }

        if (index % numberOfTiles === numberOfTiles - 1) {
            listItemRef.current.style.transform = `scale(1.4, 2.5) translateX(-10%)`;
            return;
        }

        listItemRef.current.style.transform = `scale(1.4, 2.5)`;
    };

    return (
        <div className="tile"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)} ref={listItemRef}>
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