import "./Slider.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from "../tile/Tile";
import { useRef, useState } from "react";
import { TILE_WIDTH } from "../tile/Tile";
import getNumberOfVisibleTiles from "../../utils/getNumberOfVisibleTiles";

// left margin for tile list
export const LEFT_MARGIN = 3.5;
export const RIGHT_MARGIN = 3.5;

// number of items per list
export const ITEMS_PER_LIST = 20;

export interface SliderProps {
    title: string;
}

const Slider = ({ title }: SliderProps) => {
    const carouselDiv = useRef<HTMLDivElement>(null);
    const xCoordinate = useRef<number>(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const listItems = Array.from({ length: ITEMS_PER_LIST }, (_item, index) => index + 1);

    const scrollLeft = () => {
        if (carouselDiv.current) {
            const numberOfVisibleTiles = getNumberOfVisibleTiles();
            xCoordinate.current += TILE_WIDTH * numberOfVisibleTiles;

            if (xCoordinate.current > 0) {
                xCoordinate.current = -TILE_WIDTH * (listItems.length - numberOfVisibleTiles);
            }

            carouselDiv.current.style.transform = `translateX(${xCoordinate.current}rem)`;

        }
    };

    const scrollRight = () => {
        if (carouselDiv.current) {
            setShowLeftArrow(true);
            const numberOfVisibleTiles = getNumberOfVisibleTiles();
            xCoordinate.current -= TILE_WIDTH * numberOfVisibleTiles;
            const totalNumberOfTiles = listItems.length % numberOfVisibleTiles !== 0 ?
                Math.floor(listItems.length / numberOfVisibleTiles) * numberOfVisibleTiles + numberOfVisibleTiles :
                listItems.length;

            if (xCoordinate.current < -TILE_WIDTH * (totalNumberOfTiles - numberOfVisibleTiles)) {
                xCoordinate.current = 0;
            }

            carouselDiv.current.style.transform = `translateX(${xCoordinate.current}rem)`;
        }
    };

    return (
        <div className="slider">
            <span className="slider-title">{title}</span>
            <div className="carousel-container">
                <div className="carousel" ref={carouselDiv}>
                    {listItems.map((item, index) => <ListItem key={item} index={index} />)}
                </div>
                <ArrowBackIosIcon className={`nav-icon left ${showLeftArrow ? "" : "hidden"}`} onClick={scrollLeft} />
                <ArrowForwardIosIcon className="nav-icon right" onClick={scrollRight} />
            </div>
        </div>
    );
};

export default Slider;