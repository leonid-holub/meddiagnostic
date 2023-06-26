import { useState, useEffect } from 'react';
import OnScreen from '../../OnScreen/OnScreen';
import style from './Advantages.module.scss';

const Advantages = () => {
const [h2OnScreen, seth2OnScreen] = useState();
const [ulOnScreen, setUlOnScreen] = useState();
const [imgOnScreen, setImgOnScreen] = useState();

// useEffect(() => {
//     const h2 = document.querySelector('#advantages div h2');
//     const ul = document.querySelector('#advantages div ul');
//     const img = document.querySelector('#advantages div img');
//     OnScreen(h2, seth2OnScreen);
//     OnScreen(ul, setUlOnScreen);
//     OnScreen(img, setImgOnScreen);
 
// });

    return (
        <section className={`section ${style.advantages}`} id="advantages">
            <div className="container">
                <h2 className={`${style.advantages__title} ${h2OnScreen ? "animate__fadeInDown animate__animated" : ''}` }>Наші переваги</h2>
                <div className={style.advantages__description}>
                    <ul className={`${style.list} ${ulOnScreen ? "animate__fadeInLeft animate__animated" : ''}`}>
                        <li className={style.item}>
                            <svg className={style.item__icon} width="75" height="75">
                                <use href="images/icons.svg#icon-quality-control"></use>
                            </svg>
                            <div className={style.item__text}>
                                <h3 className={style.item__title}>Висока якість</h3>
                                <p className={style.item__paragraph}>Завжди постачаємо продукцію високої якості</p>
                            </div>
                        </li>
                        <li className={style.item}>
                            <svg className={style.item__icon} width="75" height="75">
                                <use href="images/icons.svg#icon-bankrupt"></use>
                            </svg>
                            <div className={style.item__text}>
                                <h3 className={style.item__title}>Найкращі ціни</h3>
                                <p className={style.item__paragraph}>Продаємо продукцію за конкурентними цінами</p>
                            </div>
                        </li>
                        <li className={style.item}>
                            <svg className={style.item__icon} width="75" height="75">
                                <use href="images/icons.svg#icon-certificate"></use>
                            </svg>
                            <div className={style.item__text}>
                                <h3 className={style.item__title}>Сертифікована торгівля</h3>
                                <p className={style.item__paragraph}>Маємо всі необхідні сертифікати для торгівлі</p>
                            </div>
                        </li>
                        <li className={style.item}>
                            <svg className={style.item__icon} width="75" height="75">
                                <use href="images/icons.svg#icon-fast-delivery"></use>
                            </svg>
                            <div className={style.item__text}>
                                <h3 className={style.item__title}>Швидка доставка</h3>
                                <p className={style.item__paragraph}>Достовляємо обладнання в максимально стислий термін</p>                                
                            </div>
                        </li>
                    </ul>
                    <img className={`${style.image} ${imgOnScreen ? "animate__fadeInRight animate__animated" : ''}`} src="images/home/advantages-6.png" width="362px" height="562px"/>
                </div>
            </div>
        </section>
    )
}

export default Advantages;