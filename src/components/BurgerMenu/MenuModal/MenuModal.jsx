import { NavLink } from "react-router-dom";

import style from "./MenuModal.module.scss"

const MenuModal = ({bmIsOpen, setBmIsOpen, heroActive, toHero, aboutActive, toAbout, advantagesActive, toAdvantages}) => {

    return (
        <div className={`${style.menu} ${bmIsOpen ? style.active : ''}`} onClick={() => {setBmIsOpen(false)}}>
            <div className={style.blur}/>
                <div className={style.menu__content} onClick={e => e.stopPropagation()}>
                    <ul className={style.menu__list}>
                        <li className={style.menu__item}>
                            <NavLink to="/" className={style.nav__link}>Головна</NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink to="catalogue" className={style.nav__link}>Каталог</NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink to="contacts" className={style.nav__link}>Контакти</NavLink>
                        </li>
                    </ul> 
                </div>
        </div>
    );
};

export default MenuModal;