import { NavLink } from "react-router-dom";

import style from "./MenuModal.module.scss"

const MenuModal = ({bmIsOpen, setBmIsOpen}) => {

    return (
        <div className={`${style.menu} ${bmIsOpen ? style.active : ''}`} onClick={() => {setBmIsOpen(false)}}>
            <div className={style.blur}/>
                <div className={style.menu__content} onClick={e => e.stopPropagation()}>
                    <ul className={style.menu__list}>
                    </ul> 
                </div>
        </div>
    );
};

export default MenuModal;