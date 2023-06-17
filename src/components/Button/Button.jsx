import style from "./Button.module.scss";

const Button = ({children}) => {

    return (
         <button type="button" className={style.button}>{children}</button>
    )
}

export default Button;

