import { useState, useEffect } from 'react';
import style from './About.module.scss';
import OnScreen from '../OnScreen/OnScreen';

const About = () => {
const [h2OnScreen, seth2OnScreen] = useState();
const [p1OnScreen, setp1OnScreen] = useState();
const [p2OnScreen, setp2OnScreen] = useState();
const [imgOnScreen, setImgOnScreen] = useState();

useEffect(() => {
    const h2 = document.querySelector('#about div h2');
    const p1 = document.querySelector('#about div p');
    const p2 = document.querySelector('#about div div p');
    const img = document.querySelector('#about div div img');
    OnScreen(h2, seth2OnScreen);
    OnScreen(p1, setp1OnScreen);
    OnScreen(p2, setp2OnScreen);
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
            <p className={`${style.about__paragraph} ${p2OnScreen ? "animate__fadeInRight animate__animated" : ''}`}>Наша компанія вже 23 роки займається постачанням різного медичного
            та стоматологічного обладнання. <br/>У нашому каталозі ви можете знайти понад 5000 найменувань продукції, що застосовуються у
            найрізноманітніших галузях медицини.</p>
            </div>
        </div>
    </section>

)
}

export default About;