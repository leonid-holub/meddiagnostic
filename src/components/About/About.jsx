import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import OnScreen from '../OnScreen/OnScreen';
import style from './About.module.scss';


const About = () => {
const [h2OnScreen, seth2OnScreen] = useState();
const [p1OnScreen, setp1OnScreen] = useState();
const [stOnScreen, setStOnScreen] = useState();
const [imgOnScreen, setImgOnScreen] = useState();

useEffect(() => {
    const h2 = document.querySelector('#about div h2');
    const p1 = document.querySelector('#about div p');
    const st = document.querySelector('#about div div .statistics');
    const img = document.querySelector('#about div div img');
    OnScreen(h2, seth2OnScreen);
    OnScreen(p1, setp1OnScreen);
    OnScreen(st, setStOnScreen);
    OnScreen(img, setImgOnScreen);
 
});

return (
    <section className={`${style.about} section`} id="about">
        <div className={`${style.about__container} container`}> 
            <h2 className={`${style.about__title} ${h2OnScreen ? "animate__fadeInDown animate__animated" : ''}`}>Про нас</h2>
            <p className={`${style.about__paragraph} ${p1OnScreen ? "animate__fadeInDown animate__animated" : ''}`}>Меддіагностик - це группа компаній, яка працює на ринку України понад 12 років.
            Одні з найкращих технологій у галузі медицини, сильні фахівці з бездоганною репутацією та сучасні рішення.
            Ми - це надійна опора українців у турботі про їх здоров'я. </p>
            <div className={style.about__description}>
            <img src="images/home/about.jpg" alt="" width="500px" className={`${imgOnScreen ? "animate__fadeInLeft animate__animated" : ''}`}></img>
            <div className={`${style.about__statistics} statistics ${stOnScreen ? "animate__fadeInRight animate__animated" : ''}`}>
                <div className={style.about__parameters}>
                    <div className={style.about__parameter}>
                        <CountUp className={`${stOnScreen ? style.about__count : ''}`} end={12} delay={2} duration={5}/>
                        <p className={style.count__description}>років на ринку України</p>
                    </div>
                    <div className={style.about__parameter}>
                        <CountUp className={`${stOnScreen ? style.about__count : ''}`} end={23} delay={2} duration={5}/>
                        <p className={style.count__description}>роки досвіду</p>
                    </div>
                    <div className={style.about__parameter}>
                        <CountUp className={`${stOnScreen ? style.about__count : ''}`} end={5000} delay={2} duration={4}/>
                        <p className={style.count__description}>найменувань продукції</p>
                    </div>
                </div>

            <p className={style.about__paragraph}>Наша компанія вже 23 роки займається постачанням різного медичного
            та стоматологічного обладнання. <br/>У нашому каталозі ви можете знайти понад 5000 найменувань продукції, що застосовуються у
            найрізноманітніших галузях медицини.</p>
            </div>
            </div>
        </div>
    </section>

)
}

export default About;