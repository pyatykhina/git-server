import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <nav className="footer__nav">
                    <Link to="#" className="footer__nav-item">Support</Link>
                    <Link to="#" className="footer__nav-item">Learning</Link>
                    <Link to="#" className="footer__nav-item">Русская версия</Link>
                </nav>
                <div className="footer__copyright">
                    &copy; 2021 Tatiana Pyatykhina
                </div>
            </div>
        </footer>
    )
}

export default Footer;
