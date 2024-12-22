import "./ListItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useRef } from "react";
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
    const listItemRef = useRef<HTMLDivElement>(null);

    const handleHover = (isHover: boolean) => {
        if (!listItemRef.current) return;

        if (!isHover) {
            listItemRef.current.style.left = '';
            return;
        }

        const numberOfTiles = Math.floor((innerWidth - LEFT_MARGIN) / TILE_WIDTH);
        const startPositionOfTile = index * TILE_WIDTH;

        if (index % numberOfTiles === 0) {
            listItemRef.current.style.left = `${startPositionOfTile}px`;
            return;
        }

        if (index % numberOfTiles === numberOfTiles - 1) {
            listItemRef.current.style.left = `${startPositionOfTile - HOVER_SIZE_DIFF}px`;
            return;
        }

        listItemRef.current.style.left = `${startPositionOfTile - (HOVER_SIZE_DIFF / 2)}px`;
    };

    return (
        <div className="list-item"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)} ref={listItemRef}>
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