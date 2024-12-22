import "./List.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";
import { TILE_WIDTH } from "../listItem/ListItem";

// left margin for tile list
export const LEFT_MARGIN = 50;

// number of items per list
export const ITEMS_PER_LIST = 30;

const List = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const posX = useRef<number>(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    const listItems = Array.from({ length: ITEMS_PER_LIST }, (_item, index) => index + 1);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const numberOfTiles = Math.floor((innerWidth - LEFT_MARGIN) / TILE_WIDTH);
            posX.current += TILE_WIDTH * numberOfTiles;

            if (posX.current > 0) {
                posX.current = -TILE_WIDTH * (listItems.length - numberOfTiles);
            }

            carouselRef.current.style.transform = `translateX(${posX.current}px)`;

        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            setShowLeftArrow(true);
            const numberOfTiles = Math.floor((innerWidth - LEFT_MARGIN) / TILE_WIDTH);
            posX.current -= TILE_WIDTH * numberOfTiles;

            if (posX.current < -TILE_WIDTH * (listItems.length - numberOfTiles)) {
                posX.current = 0;
            }

            carouselRef.current.style.transform = `translateX(${posX.current}px)`;
        }
    };

    return (
        <div className="list">
            <span className="list-title">Continue Watching</span>
            <div className="carousel-container">
                <ArrowBackIosIcon className={`carousel-icon left ${showLeftArrow ? "" : "hidden"}`} onClick={scrollLeft} />
                <div className="carousel" ref={carouselRef}>
                    {listItems.map((item, index) => <ListItem key={item} index={index} />)}
                </div>
                <ArrowForwardIosIcon className="carousel-icon right" onClick={scrollRight} />
            </div>
        </div>
    );
};

export default List;