import Featured from '../../components/featured/Featured';
import Slider from '../../components/slider/Slider';
import Navbar from '../../components/navbar/Navbar';
import './Home.scss';
import Footer from '../../components/footer/Footer';

export interface slide {
    id: number;
    title: string;
}
const slides: slide[] = [
    {
        id: 1,
        title: 'Continue Watching',
    },
    {
        id: 2,
        title: 'Recently Added',
    },
    {
        id: 3,
        title: 'Trending',
    },
];

export interface HomeProps {
    type?: 'movies' | 'shows';
}

const Home = ({ type }: HomeProps) => {
    return (
        <div className='home'>
            <Navbar type={type} />
            <Featured />
            {slides.map((slide) => (
                <Slider key={slide.id} title={slide.title} />
            ))}
            <Footer />
        </div>
    );
};

export default Home;
