import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Welcome to Movix - Your Ultimate Movie Experience! Explore a world of cinematic wonders right at your fingertips. Discover the latest movies, read reviews, and find showtime. Immerse yourself in the magic of storytelling with Movix.

                    At Movix, we are dedicated to providing you with the best entertainment experience. Our mission is to bring people together through the joy of movies. Whether you&apos;re a film enthusiast or just looking for a night out, Movix has something for everyone.

                    Join us on this cinematic journey and stay connected for updates on upcoming releases, exclusive content, and behind-the-scenes glimpses. Thank you for choosing Movix - Where Every Frame Tells a Story.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
