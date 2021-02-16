import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NavbarLinks from '../constants/navbarlinks'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" onClick={closeMobileMenu}>
                    <img className="navbar__logo" src="./logo.svg" alt="Etch Logo"/>
                </Link>
                <div className="navbar__mobile-btn" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars navbar__mobile-btn-icon'}/>
                </div>
                <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
                    {NavbarLinks.map((navbarLink, i) => {
                        return (
                            <Link className="navbar__link" to={navbarLink.Url} target='_blank' key={i}>
                                {navbarLink.Name}
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar