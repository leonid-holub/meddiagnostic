import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from './Hero.module.scss';
import Arrow from '../../Arrow/Arrow';
import Companies from '../../Companies/Companies';

const Hero = () => {
    const [number, setNumber] = useState(getRandomInt(8));

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        const element = document.getElementById(number);
        element.classList.add("item--active")
        const carousel = setTimeout(() => {
            increaseNumber()
        }, 15000)

        return () => {
            clearTimeout(carousel)
            element.classList.remove("item--active")
        }
    }, [number])

    function increaseNumber() {
        if(number < 7) {
            setNumber(number + 1);
        } else if (number === 7) {
            setNumber(0)
        }
    }

    function decreaseNumber() {
        if(number > 0) {
            setNumber(number - 1);
        } else if (number === 0) {
            setNumber(7)
        }
    }


    return (
        <section className={`${style.hero} section`} id="hero">
                <div className={style.hero__slider}>
                    <div className={`${style['arrow__wrapper--left']} animate__fadeInRight animate__animated`}>
                        <div className={style['arrow--left']} onClick={decreaseNumber}>
                            <Arrow/>
                        </div>
                    </div>
                        {Companies.map(({ paragraph, logo, id, url}) => (
                        <div className={`${style.slider__item}`} key={id} id={id}>
                            <div className={style.slider__container}>
                                <div className={`${style.hero__container} container`}>
                                <img className={`${style.hero__logo} animate__fadeInDown animate__animated`} src={logo} alt=""/>
                                <p className={`${style.hero__paragraph}  animate__fadeInUp animate__animated`}>{paragraph}</p>
                                <button type="button" className={`${style.hero__button} animate__fadeInUp animate__animated`}><Link to={url} className={style.hero__button__link}>Детальніше</Link></button>
                                </div>                
                            </div>
                        </div> 
                        ))}
                    <div className={`${style['arrow__wrapper--right']} animate__fadeInLeft animate__animated`}>
                        <div className={style['arrow--right']} onClick={increaseNumber}>
                            <Arrow />
                        </div>
                    </div>
                </div>
        </section>
    )
};

export default Hero;