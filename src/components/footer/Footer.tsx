import "./Footer.scss";
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
                <FacebookIcon className="icon" />
                <InstagramIcon className="icon" />
                <XIcon className="icon" />
                <YouTubeIcon className="icon" />
            </div>
            <div className="links">
                <div className="link">Audio Description</div>
                <div className="link">Help Center</div>
                <div className="link">Gift Cards</div>
                <div className="link">Media Centre</div>
                <div className="link">Investor Relations</div>
                <div className="link">Jobs</div>
                <div className="link">Netflix Shop</div>
                <div className="link">Terms of Use</div>
                <div className="link">Privacy</div>
                <div className="link">Legal Notices</div>
                <div className="link">Cookie Preferences</div>
                <div className="link">Corporate Information</div>
                <div className="link">Contact Us</div>
                <div className="link">Ad Choices</div>
            </div>
            <button className="service-code">Service Code</button>
            <div className="copy">
                <span>&#169;</span>
                <span>{`1999-${new Date().getFullYear()}`}</span>
                <span>Netflix, Inc.</span>
            </div>
        </div>
    );
};

export default Footer;