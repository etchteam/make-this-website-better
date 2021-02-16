import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
    <footer className="footer">
        <Link to='/' className="footer__logo-link">
            <img className="footer__logo-img" src="./logo.svg" alt="Etch Logo"/>
        </Link>
        <Link to='/' className="footer__copyright">&copy;2020 Etch Software Ltd.</Link>        
    </footer>
    );
}
export default Footer;