import {useEffect, useState} from "react";
import axios from "axios";
import classes from '../modules/Header.module.scss'
import cart from '../assets/cart-icon.svg'
import favorites from '../assets/favorites-icon.svg'
import profile from '../assets/profile-icon.svg'
import logo from '../assets/cyber-logo.svg'
import search from '../assets/search-icon.svg'
import burger from '../assets/burger-icon.svg'
import {Link} from "react-router";

export const Header = () => {
    const [navbarItems, setNavbarItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/menus/navbarItems')
            .then(function (response) {
                setNavbarItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <header className={classes['header-wrapper']}>
                <figure className={classes['logo-holder']}>
                    <img src={logo} alt="cyber-logo"/>
                </figure>
                <figure className={classes['burger-holder']}>
                    <img src={burger} alt="burger-logo"/>
                </figure>
                <figure className={classes['search-wrapper']}>
                    <img src={search} alt="search-icon"/>
                    <input placeholder='Search' type='text'/>
                </figure>
                <nav>
                    <ul>
                        {navbarItems.map((item, index) => (
                            <li key={index}>
                                <Link className={classes['navlink']} to={item.slug}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <figure className={classes['icon-wrapper']}>
                    <Link className={classes['navlink-icon']} to='/favorites'>
                        <img src={favorites} alt="favorite-icon"/>
                    </Link>
                    <Link className={classes['navlink-icon']} to='/favorites'>
                        <img src={cart} alt="cart-icon"/>
                    </Link>
                    <Link className={classes['navlink-icon']} to='/favorites'>
                        <img src={profile} alt="profile-icon"/>
                    </Link>
                </figure>
            </header>
        </>
    )
}

export default Header
