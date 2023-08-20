import style from "./AppBar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from "../Logo/Logo";
import ScrollTo from "../ScrollTo/ScrollTo";
import ActiveLink from "../ActiveLink/ActiveLink";
import Companies from "../Companies/Companies";

const AppBar = () => {
    const [bmIsOpen, setBmIsOpen] = useState(false);
    const [visibleHeader, setVisibleHeader] = useState();

    useEffect(()=> {
        const element = document.querySelector('header');

        const Visible = function (target) {
            const windowPosition = {
            top: window.pageYOffset
            };

            if (windowPosition.top > 60) {
                    setVisibleHeader(false);
                } else {
                    setVisibleHeader(true);
                };
        };
        window.addEventListener('scroll', function() {
            Visible (element);
        });
        Visible (element);
    })

    const toggleBmIsOpen = () => {
        setBmIsOpen(!bmIsOpen)
    };

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <header className={` ${visibleHeader ? style.header : style['header--scrolled']} section`}>
            <div className={`${style.header__container} container`}>
                <Link className={style.link} to="/">
                    <Logo/>
                </Link>
                {isDesktop ? 
                    <nav className={style.nav}>
                        {/* <p className={`${style.nav__link} ${heroActive ? style['link--active'] : ''}`} onClick={toHero} >Головна</p>
                        <p className={`${style.nav__link} ${aboutActive ? style['link--active'] : ''}`} onClick={toAbout} >Про нас</p>
                        <p className={`${style.nav__link} ${advantagesActive ? style['link--active'] : ''}`} onClick={toAdvantages} >Переваги</p> */}
                        <NavLink to="/" className={style.nav__link}>Головна</NavLink>
                        <div className={`${style.nav__catalogue}`}>
                            <NavLink to="catalogue"  className={style.nav__link}>Каталог</NavLink>
                            <ul className={style.companies__list}>
                                {Companies.map(({title, url}) => (
                                    <li className={style.companies__item} key={title}>
                                        <NavLink to={url} className={style.companies_link}>{title}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <NavLink to="contacts" className={style.nav__link}>Контакти</NavLink>
                    </nav> 
                    : 
                    <BurgerMenu.MenuButton toggleBmIsOpen={toggleBmIsOpen} bmIsOpen={bmIsOpen}/>}
            </div>
            { isDesktop ? '' : <BurgerMenu.MenuModal bmIsOpen={bmIsOpen} setBmIsOpen={setBmIsOpen}/>}
        </header>
    )
};

export default AppBar;