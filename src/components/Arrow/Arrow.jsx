import style from './Arrow.module.scss';

const Arrow = () => {
    return (
        <div className={style.arrow__wrapper}>
            <div className={style.arrow}>
                <div className={style.chevron}></div>
                <div className={style.chevron}></div>
                <div className={style.chevron}></div>
            </div>
        </div>

    )
}

export default Arrow;