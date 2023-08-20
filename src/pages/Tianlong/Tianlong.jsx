import style from './Tianlong.module.scss';
import Cta from '../../components/Cta/Cta';
import Heading from '../../components/Company/Heading/Heading';
import { useEffect } from 'react';


const Tianlong = () => {
    useEffect(()=> {
        window.scroll(0, 0);
    })

    return (
        <>
            <Heading index="6" src="images/tianlong/tianlong-2.jpg" alt='Фото офісу Tianlong' width="890px"/>
            <section className={style.products}>
                <h2 className="visually-hidden">Продукція</h2>
                <h3 className={style.product__branch}>Екстрактори</h3>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Екстрактор нуклеїнових кислот GeneRotex 96</h3>
                                <p className={style.product__paragraph}>Екстрактор нуклеїнової кислоти GeneRotex 96 розроблено з використанням інноваційної технології ротаційного змішування Tianlong (RMT), яка забезпечує швидке обертання на 360° і змішування на основі повільного зворотно-поступального руху вгору-вниз. Ця запатентована технологія може мінімізувати ризик перехресного забруднення, спричиненого аерозолями нуклеїнової кислоти, водночас надзвичайно тихо під час роботи. Крім того, гнучкі варіанти модулів екстракції на основі магнітних кульок можуть задовольнити потреби різноманітних додатків.</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Автоматизований люк
                                    </li>
                                    <li className={style.product__item}>
                                    Надтихий дизайн
                                    </li>
                                    <li className={style.product__item}>
                                    Відкрита сумісність
                                    </li>
                                    <li className={style.product__item}>
                                    Висока ефективність
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/tianlong/G-96.png" alt="Зовнішній вигляд екстрактору нуклеїнових кислот GeneRotex 96"/>
                            </div>
                        </div>
                        <div className={style.product__extra__wrapper}>
                            <ul className={style.product__extra__list}>
                                <li className={style.product__extra__item}>
                                    <div className={style.product__extra__description}>
                                        <h4 className={style.product__extra__title}>Гнучкі варіанти модулів</h4>
                                        <p className={style.product__paragraph}>Пропускна здатність 96 зразків: Інноваційний модуль екстракції 6*16, сумісний із планшетами Tianlong із 96 глибокими лунками та стрипами з 6 пробірками, може забезпечити високу продуктивність екстракції без звичайних незручностей, спричинених фіксованою пропускною спроможністю та втратою реагентів. Відтепер ви можете вибирати між 1-96 за своїм бажанням</p>
                                    </div>
                                    <div className={style.product__extra__appearance}>
                                        <img className={style.product__extra__img} src="images/catalogue/tianlong/G-96-2.png" alt="Рука лаборанта під час роботи на екстракторі нуклеїнових кислот GeneRotex 96"/>
                                    </div>
                                </li>
                                <li className={style.product__extra__item}>
                                    <div className={style.product__extra__description}>
                                        <h4 className={style.product__extra__title}>Зручний інтерфейс, простий у використанні</h4>
                                        <p className={style.product__paragraph}>7-дюймовий повнокольоровий сенсорний РК-екран.</p>
                                    </div>
                                    <div className={style.product__extra__appearance}>
                                        <img className={style.product__extra__img} src="images/catalogue/tianlong/G-96-3.png" alt="Рука лаборанта під час роботи на екстракторі нуклеїнових кислот GeneRotex 96"/>
                                    </div>
                                </li>
                                <li className={style.product__extra__item}>
                                    <div className={style.product__extra__description}>
                                        <h4 className={style.product__extra__title}>Суворий контроль забруднення</h4>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            Ротаційне змішування
                                            </li>
                                            <li className={style.product__item}>
                                            Система негативного тиску з фільтрацією HEPA
                                            </li>
                                            <li className={style.product__item}>
                                            УФ-дезінфекція
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={style.product__extra__appearance}>
                                        <img className={style.product__extra__img} src="images/catalogue/tianlong/G-96-4.png" alt="Зовнішній вигляд екстрактору нуклеїнових кислот GeneRotex 96"/>
                                    </div>
                                </li>
                                <li className={style.product__extra__item}>
                                    <div className={style.product__extra__description}>
                                        <h4 className={style.product__extra__title}>Відкрита сумісність</h4>
                                        <p className={style.product__paragraph}>GeneRotex 96, зірковий продукт п’ятого покоління автоматизованих інструментів для екстракції нуклеїнових кислот Tianlong, успадкував класичний планшет з 96 глибокими лунками та інноваційні стрипи з 6 пробірками і сумісний з наборами для екстракції Tianlong усіх типів і специфікацій</p>
                                    </div>
                                    <div className={style.product__extra__appearance}>
                                        <img className={style.product__extra__img} src="images/catalogue/tianlong/G-96-5.png" alt="Лаборант працює з пробірками та піпеткою"/>
                                    </div>
                                </li>
                                <li className={style.product__extra__item}>
                                    <div className={style.product__extra__description}>
                                        <h4 className={style.product__extra__title}>Висока ефективність</h4>
                                        <p className={style.product__paragraph}>Швидкість відновлення нуклеїнової кислоти становить ≥ 95%; залишкова кількість магнітних кульок становить менше 1%; і показники виявлення 10 МО/мл ВГВ та 30 МО/мл ВГС становлять обидва ≥ 98%</p>
                                    </div>
                                    <div className={style.product__extra__appearance}>
                                        <img className={style.product__extra__img} src="images/catalogue/tianlong/G-96-6.png" alt="Графіки - результат роботи екстрактору нуклеїнових кислот GeneRotex 96"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3 className={style.product__branch}>Системи ПЛР</h3>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Система ПЛР у реальному часі Gentier 96R</h3>
                                <p className={style.product__paragraph}>Система ПЛР у реальному часі Gentier 96R розроблена для задоволення експериментальних потреб висококласних лабораторій. Завдяки 4 - флуоресцентним каналам Gentier R може обробити 96 зразків за один цикл. Різноманітні подальші програми, включаючи мультиплексне якісне виявлення генів, кількісний аналіз, аналіз SNP та аналіз кривої плавлення, можна легко виконувати за допомогою потужної та ефективної системи контролю температури та системи флуоресценції, простого у використанні програмного забезпечення та зручного для користувача робочого дизайну</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Ефективна флуоресценція
                                    </li>
                                    <li className={style.product__item}>
                                    Потужний контроль температури
                                    </li>
                                    <li className={style.product__item}>
                                    Легкий в експлуатації
                                    </li>
                                    <li className={style.product__item}>
                                    Потужне програмне забезпечення
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/tianlong/G-96R.png" alt="Зовнішній вигляд системи ПЛР у реальному часі Gentier 96R"/>
                            </div>
                        </div>
                        <div className={style.product__extra__wrapper}>
                            <ul className={style.product__extra__list}>
                                <li className={style.product__extra__item}>
                                    <div className={style.product__extra__description}>
                                        <h4 className={style.product__extra__title}>Ефективна флуоресценція</h4>
                                        <p className={style.product__paragraph}>4 - канали флуоресценції сумісні з більшістю поширених флуоресцентних барвників і зондів звичайних реагентів для виявлення. Зокрема, канал FRET (флуоресцентна резонансна передача енергії) забезпечує нижче значення фонової флуоресценції та вищу чутливість для ваших потреб виявлення. Крім того, світлодіодне джерело світла високої яскравості з тривалим терміном служби може не потребувати обслуговування протягом усього життя</p>
                                    </div>
                                    <div className={style.product__extra__appearance}>
                                        <img className={style.product__extra__img} src="images/catalogue/tianlong/G-96R-2.png" alt="Рука лаборанта під час роботи на системі ПЛР у реальному часі Gentier 96R"/>
                                    </div>
                                </li>
                                <li className={style.product__extra__item}>
                                    <div className={style.product__extra__description}>
                                        <h4 className={style.product__extra__title}>Потужний контроль температури</h4>
                                        <p className={style.product__paragraph}>Максимальна швидкість нагрівання становить ≥6,1 С/с, а максимальна швидкість охолодження – ≥5,0 С/с, для швидшого завершення аналізів; точність температури становить ≤0,1 С для забезпечення точних результатів</p>
                                    </div>
                                    <div className={style.product__extra__appearance}>
                                        <img className={style.product__extra__img} src="images/catalogue/tianlong/G-96R-3.png" alt="Лаборант працює на системі ПЛР у реальному часі Gentier 96R"/>
                                    </div>
                                </li>
                                <li className={style.product__extra__item}>
                                    <div className={style.product__extra__description}>
                                        <h4 className={style.product__extra__title}>Простий в експлуатації</h4>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            Автоматизована пробовідбірна камера
                                            </li>
                                            <li className={style.product__item}>
                                            Хмарне керування з ПК через мережеве підключення
                                            </li>
                                            <li className={style.product__item}>
                                            Автономна робота з вбудованим 10,4-дюймовим сенсорним екраном
                                            </li>
                                            <li className={style.product__item}>
                                            Зберігання даних щонайменше 1000 експериментів в приладі
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={style.product__extra__appearance}>
                                        <img className={style.product__extra__img} src="images/catalogue/tianlong/G-96R-4.png" alt="Зовнішній вигляд системи ПЛР у реальному часі Gentier 96R"/>
                                    </div>
                                </li>
                                <li className={style.product__extra__item}>
                                    <div className={style.product__extra__description}>
                                        <h4 className={style.product__extra__title}>Потужне програмне забезпечення</h4>
                                        <p className={style.product__paragraph}>Можливість різноманітного аналізу даних для задоволення потреб більшості експериментів, включаючи якісний аналіз, абсолютний кількісний аналіз, відносний кількісний аналіз, аналіз кінцевої точки флуоресценції, аналіз кривої плавлення тощо. Рекомендована конструкція захисту від збою живлення, більше не потрібно турбуватися про миттєве зникнення живлення</p>
                                    </div>
                                    <div className={style.product__extra__appearance}>
                                        <img className={style.product__extra__img} src="images/catalogue/tianlong/G-96R-5.png" alt="Графіки - результат роботи системи ПЛР у реальному часі Gentier 96R"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Cta/>
        </>
    )
}

export default Tianlong;