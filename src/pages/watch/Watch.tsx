import "./Watch.scss";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const VIDEO_SRC = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <KeyboardBackspaceIcon className="icon" />
            </div>
            <video src={VIDEO_SRC} autoPlay controls></video>
        </div>
    );
};

export default Watch;