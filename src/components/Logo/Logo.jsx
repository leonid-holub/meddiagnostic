import style from './Logo.module.scss';


const Logo = () => {
    return (
        <div className={style.logo}>
            <svg className={style.logo__img}  width="45" height="40">
                <use href="images/icons.svg#meddiagnostic">
                </use>
            </svg>
            <p className={style.logo__name}>ТД &quot;МЕД <br/>ДІАГНОСТИК&quot;</p>
        </div>
    )
};

export default Logo;