import style from "./AppBar.module.scss";
import { NavLink, Link } from "react-router-dom";

import Logo from "../Logo/Logo";

const AppBar = () => {
    return (
        <header className={`${style.header} section`}>
            <div className={`${style.header__container} container`}>
                <Link className={style.link} to="/">
                    <Logo/>
                </Link>
                <nav className={style.nav}>
                    <a className={style.nav__link} href="#">Головна</a>
                    <a className={style.nav__link} href="#">Про нас</a>
                    <a className={style.nav__link} href="#">Переваги</a>
                    <NavLink to="/" className={style.nav__link}>Каталог</NavLink>
                    <a className={style.nav__link} href="#">Контакти</a>
                </nav>
            </div>
        </header>
    )
};

export default AppBar;