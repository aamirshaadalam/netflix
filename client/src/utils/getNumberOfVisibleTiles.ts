import { LEFT_MARGIN } from "../components/slider/Slider";
import { TILE_WIDTH } from "../components/tile/Tile";
import getRemToPixels from "./getRemToPixels";

const getNumberOfVisibleTiles = () => { 
    return Math.floor((innerWidth / getRemToPixels() - LEFT_MARGIN) / TILE_WIDTH);
};

export default getNumberOfVisibleTiles;