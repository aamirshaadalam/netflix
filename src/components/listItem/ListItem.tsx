import "./ListItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useState } from "react";
import { LEFT_MARGIN } from "../list/List";

export interface ListItemProps {
    index: number;
}

// this width includes the margin
export const TILE_WIDTH = 230;

// the tile width increases by 100px
// when hovered
export const HOVER_SIZE_DIFF = 100;

const ListItem = ({ index }: ListItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const getLeftPosition = () => {
        if (!isHovered) return undefined;

        const numberOfTiles = Math.floor((innerWidth - LEFT_MARGIN) / TILE_WIDTH);
        const startPositionOfTile = index * TILE_WIDTH;

        if (index % numberOfTiles === 0) return startPositionOfTile;
        if (index % numberOfTiles === numberOfTiles - 1) return startPositionOfTile - HOVER_SIZE_DIFF;
        return startPositionOfTile - (HOVER_SIZE_DIFF / 2);
    };

    return (
        <div className="list-item"
            style={{ left: getLeftPosition() }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src="src/assets/slide-image.jpg" alt="" />
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

export default ListItem;