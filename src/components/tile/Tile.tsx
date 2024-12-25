import "./Tile.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
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
const VIDEO_SRC = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const Tile = ({ index }: TileProps) => {
    const tileRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const mutedRef = useRef<HTMLDivElement>(null);
    const unmutedRef = useRef<HTMLDivElement>(null);

    const scaleTile = (isHovered: boolean) => {
        if (!tileRef.current) return;

        const tile = tileRef.current;

        if (!isHovered) {
            tile.style.transform = 'none';
            return;
        }

        const numberOfVisibleTiles = getNumberOfVisibleTiles();

        // first visible tile
        if (index % numberOfVisibleTiles === 0) {
            tile.style.transform =
                `scale(${SCALE_X},${SCALE_Y}) translate(${LEFT_MARGIN}rem, ${TRANSLATE_Y}rem)`;
            return;
        }

        // last visible tile
        if (index % numberOfVisibleTiles === numberOfVisibleTiles - 1) {
            tile.style.transform =
                `scale(${SCALE_X},${SCALE_Y}) translate(${-RIGHT_MARGIN}rem, ${TRANSLATE_Y}rem)`;
            return;
        }

        tile.style.transform = `scale(${SCALE_X},${SCALE_Y}) translateY(${TRANSLATE_Y}rem)`;
    };

    const togggleMute = (isMuted: boolean) => {
        if (mutedRef.current) {
            mutedRef.current.style.display = isMuted ? 'block' : 'none';
        }

        if (unmutedRef.current) {
            unmutedRef.current.style.display = isMuted ? 'none' : 'block';
        }
    };

    const playVideo = (isHovered: boolean) => {
        if (!videoRef.current) return;

        const video = videoRef.current;

        if (!isHovered) {
            video.muted = true;
            video.pause();
            video.currentTime = 0;
            togggleMute(true);
        }

        video.play();
    };

    const unmuteVideo = () => {
        if (!videoRef.current) return;
        const video = videoRef.current;
        video.muted = false;
        togggleMute(false);
    };

    const muteVideo = () => {
        if (!videoRef.current) return;
        const video = videoRef.current;
        video.muted = true;
        togggleMute(true);
    };

    const handleHover = (isHovered: boolean) => {
        scaleTile(isHovered);
        playVideo(isHovered);
    };

    return (
        <div className="tile"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)} ref={tileRef}>
            <img src={`https://picsum.photos/320/180?random=${Math.floor(Math.random() * 100)}`} alt="" />
            <div className="hover-content">
                <video autoPlay muted ref={videoRef}>
                    <source src={VIDEO_SRC} type="video/mp4" />
                </video>
                <div className="info">
                    <div className="icons">
                        <PlayArrowIcon className="icon" />
                        <AddIcon className="icon" />
                        <ThumbUpAltOutlinedIcon className="icon" />
                        <ThumbDownAltOutlinedIcon className="icon" />
                        <div className="volume" onClick={unmuteVideo} ref={mutedRef}>
                            <VolumeOffIcon className="icon" />
                        </div>
                        <div className="volume unmuted" onClick={muteVideo} ref={unmutedRef}>
                            <VolumeUpIcon className="icon" />
                        </div>
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