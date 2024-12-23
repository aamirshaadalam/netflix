import "./Slider.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from "../tile/Tile";
import { useRef, useState } from "react";
import { TILE_WIDTH } from "../tile/Tile";
import useRemToPixels from "../../hooks/useRemToPixels";

// left margin for tile list
export const LEFT_MARGIN = 3.5;
export const RIGHT_MARGIN = 3.5;

// number of items per list
export const ITEMS_PER_LIST = 20;

export interface SliderProps {
    title: string;
}

const Slider = ({ title }: SliderProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const posX = useRef<number>(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const remToPixels = useRemToPixels();
    const listItems = Array.from({ length: ITEMS_PER_LIST }, (_item, index) => index + 1);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const numberOfTiles = Math.floor((innerWidth / remToPixels - LEFT_MARGIN) / TILE_WIDTH);
            posX.current += TILE_WIDTH * numberOfTiles;

            if (posX.current > 0) {
                posX.current = -TILE_WIDTH * (listItems.length - numberOfTiles);
            }

            carouselRef.current.style.transform = `translateX(${posX.current}rem)`;

        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            setShowLeftArrow(true);
            const numberOfTiles = Math.floor((innerWidth / remToPixels - LEFT_MARGIN) / TILE_WIDTH);
            posX.current -= TILE_WIDTH * numberOfTiles;
            const totalNumberOfTiles = listItems.length % numberOfTiles !== 0 ?
                Math.floor(listItems.length / numberOfTiles) * numberOfTiles + numberOfTiles :
                listItems.length;

            if (posX.current < -TILE_WIDTH * (totalNumberOfTiles - numberOfTiles)) {
                posX.current = 0;
            }

            carouselRef.current.style.transform = `translateX(${posX.current}rem)`;
        }
    };

    return (
        <div className="slider">
            <span className="slider-title">{title}</span>
            <div className="carousel-container">
                <div className="carousel" ref={carouselRef}>
                    {listItems.map((item, index) => <ListItem key={item} index={index} />)}
                </div>
                <ArrowBackIosIcon className={`nav-icon left ${showLeftArrow ? "" : "hidden"}`} onClick={scrollLeft} />
                <ArrowForwardIosIcon className="nav-icon right" onClick={scrollRight} />
            </div>
        </div>
    );
};

export default Slider;