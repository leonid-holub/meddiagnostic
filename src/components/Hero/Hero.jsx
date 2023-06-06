import style from './Hero.module.scss';
import Arrow from '../Arrow/Arrow';


const Hero = () => {

    return (
        <section className={`${style.hero} section`}>
            <div className={style.hero__slider}>
                <div className={`${style['arrow__wrapper--left']} animate__fadeInRight animate__animated`}>
                    <div className={style['arrow--left']}>
                        <Arrow />
                    </div>
                </div>
                    <div className={style.slider__item}>
                        <div className={style.slider__container}>
                        <div className={`${style.hero__container} container`}>
                        <h2 className={`${style.hero__title}  animate__fadeInDown animate__animated`}>BIOTIME</h2>
                        <img className={style.hero__logo} src="/public/images/biotime/hero/biotime-logo.png" alt=""/>
                        <p className={`${style.hero__paragraph}  animate__fadeInUp animate__animated`}>XIAMEN BIOTIME BIOTECHNOLOGY CO LTD - є високотехнологічним підприємством, що спеціалізується на дослідженнях, розробках, виробництві та продажі пристроїв і реагентів для діагностики in VITRO POCT.</p>
                        <button type="button" className={`${style.hero__button} animate__fadeInUp animate__animated`}>Детальніше</button>
                        </div>                
                        </div>
                    </div>
                    <ul className={style.hero__list}>
                        <li className={style.hero__item}></li>
                        <li className={style.hero__item}></li>
                        <li className={style.hero__item}></li>
                        <li className={style.hero__item}></li>
                        <li className={style.hero__item}></li>
                        <li className={style.hero__item}></li>
                    </ul>
                    <div className={`${style['arrow__wrapper--right']} animate__fadeInLeft animate__animated`}>
                    <div className={style['arrow--right']}>
                        <Arrow />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;