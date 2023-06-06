import style from "./AppBar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from "../Logo/Logo";

const AppBar = () => {
    const [bmIsOpen, setBmIsOpen] = useState(false);
    const toggleBmIsOpen = () => {
        setBmIsOpen(!bmIsOpen)
    };

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <header className={`${style.header} section`}>
            <div className={`${style.header__container} container`}>
                <Link className={style.link} to="/">
                    <Logo/>
                </Link>

                {isDesktop ? 
                    <nav className={style.nav}>
                        <a className={style.nav__link} href="#">Головна</a>
                        <a className={style.nav__link} href="#">Про нас</a>
                        <a className={style.nav__link} href="#">Переваги</a>
                        <NavLink to="/" className={style.nav__link}>Каталог</NavLink>
                        <a className={style.nav__link} href="#">Контакти</a>
                    </nav> 
                    : 
                    <BurgerMenu.MenuButton toggleBmIsOpen={toggleBmIsOpen} bmIsOpen={bmIsOpen}/>}
            </div>
            { isDesktop ? '' : <BurgerMenu.MenuModal bmIsOpen={bmIsOpen} setBmIsOpen={setBmIsOpen}/>}
        </header>
    )
};

export default AppBar;