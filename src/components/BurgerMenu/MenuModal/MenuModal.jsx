import { NavLink, Link } from "react-router-dom";

import style from "./MenuModal.module.scss"

const MenuModal = ({bmIsOpen, setBmIsOpen, heroActive, toHero, aboutActive, toAbout, advantagesActive, toAdvantages}) => {

    return (
        <div className={`${style.menu} ${bmIsOpen ? style.active : ''}`} onClick={() => {setBmIsOpen(false)}}>
            <div className={style.blur}/>
                <div className={style.menu__content} onClick={e => e.stopPropagation()}>
                    <ul className={style.menu__list}>
                        <li className={style.menu__item}>
                            <p className={`${style.nav__link} ${heroActive ? style['link--active'] : ''}`} onClick={toHero} >Головна</p>
                        </li>
                        <li className={style.menu__item}>
                            <p className={`${style.nav__link} ${aboutActive ? style['link--active'] : ''}`} onClick={toAbout} >Про нас</p>
                        </li>
                        <li className={style.menu__item}>
                            <p className={`${style.nav__link} ${advantagesActive ? style['link--active'] : ''}`} onClick={toAdvantages} >Переваги</p>
                        </li>
                        <li className={style.menu__item}>
                            <Link to="" className={style.nav__link}>Каталог</Link>
                        </li>
                        <li className={style.menu__item}>
                            <p className={style.nav__link}>Контакти</p>
                        </li>
                    </ul> 
                </div>
        </div>
    );
};

export default MenuModal;