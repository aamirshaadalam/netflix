import Featured from "../../components/featured/Featured";
import Slider from "../../components/slider/Slider";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured />
            <Slider title="Continue Watching" />
            <Slider title="Recently Added" />
            <Slider title="Trending" />
        </div>
    );
};

export default Home;