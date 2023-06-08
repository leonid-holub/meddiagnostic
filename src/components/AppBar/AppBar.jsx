import style from "./AppBar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from "../Logo/Logo";
import ScrollTo from "../ScrollTo/ScrollTo";
import ActiveLink from "../ActiveLink/ActiveLink";

const AppBar = () => {
    const [bmIsOpen, setBmIsOpen] = useState(false);
    const [visibleHeader, setVisibleHeader] = useState();
    const [heroActive, setHeroActive] = useState();
    const [aboutActive, setAboutActive] = useState();
    const [advantagesActive, setAdvantagesActive] = useState();

    const toggleBmIsOpen = () => {
        setBmIsOpen(!bmIsOpen)
    };
    const isDesktop = useMediaQuery({ minWidth: 768 });

    const toHero = () => {
        ScrollTo('hero');
    }
    const toAbout = () => {
        ScrollTo('about');
    }

    const toAdvantages = () => {
        ScrollTo('advantages');
    }

useEffect(() => {
    ActiveLink('hero', setHeroActive);
    ActiveLink('about', setAboutActive);
    ActiveLink('advantages', setAdvantagesActive);
})

    return (
        <header className={` ${visibleHeader ? style.header : style['header--scrolled']} section`}>
            <div className={`${style.header__container} container`}>
                <Link className={style.link} to="/">
                    <Logo/>
                </Link>
                {isDesktop ? 
                    <nav className={style.nav}>
                        <p className={`${style.nav__link} ${heroActive ? style['link--active'] : ''}`} onClick={toHero} >Головна</p>
                        <p className={`${style.nav__link} ${aboutActive ? style['link--active'] : ''}`} onClick={toAbout} >Про нас</p>
                        <p className={`${style.nav__link} ${advantagesActive ? style['link--active'] : ''}`} onClick={toAdvantages} >Переваги</p>
                        <NavLink to="/" className={style.nav__link}>Каталог</NavLink>
                        <p className={style.nav__link} >Контакти</p>
                    </nav> 
                    : 
                    <BurgerMenu.MenuButton toggleBmIsOpen={toggleBmIsOpen} bmIsOpen={bmIsOpen}/>}
            </div>
            { isDesktop ? '' : <BurgerMenu.MenuModal bmIsOpen={bmIsOpen} setBmIsOpen={setBmIsOpen}/>}
        </header>
    )
};

export default AppBar;