import "./List.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from "../listItem/ListItem";
import { useRef } from "react";

const List = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const posX = useRef<number>(0);
    const listItems = Array.from({ length: 30 }, (_item, index) => index + 1);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const numberOfTiles = Math.floor((innerWidth - 50) / 230);
            posX.current += 230 * numberOfTiles;

            if (posX.current > 0) {
                posX.current = -230 * (listItems.length - numberOfTiles);
            }

            carouselRef.current.style.transform = `translateX(${posX.current}px)`;

        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const numberOfTiles = Math.floor((innerWidth - 50) / 230);
            posX.current -= 230 * numberOfTiles;

            if (posX.current < -230 * (listItems.length - numberOfTiles)) {
                posX.current = 0;
            }

            carouselRef.current.style.transform = `translateX(${posX.current}px)`;
        }
    };

    return (
        <div className="list">
            <span className="list-title">Continue Watching</span>
            <div className="carousel-container">
                <ArrowBackIosIcon className="carousel-button left" onClick={scrollLeft} />
                <div className="carousel" ref={carouselRef}>
                    {listItems.map((item) => <ListItem key={item} text={item.toString()} />)}
                </div>
                <ArrowForwardIosIcon className="carousel-button right" onClick={scrollRight} />
            </div>
        </div>
    );
};

export default List;