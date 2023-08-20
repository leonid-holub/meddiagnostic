import style from './Rollmed.module.scss';
import Cta from '../../components/Cta/Cta';
import Heading from '../../components/Company/Heading/Heading';
import { useEffect } from 'react';

const Rollmed = () => {
    useEffect(()=> {
        window.scroll(0, 0);
    })

    return (
        <>
            <Heading index="2" src="images/rollmed/rollmed-1.png" alt='Фото офісу Rollmed' width="1280px"/>
            <section className={style.products}>
                <h2 className="visually-hidden">Продукція</h2>
                <h3 className={style.product__branch}>Пробірки</h3>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>1,5 МЛ ЦЕНТРИФУЖНА ПРОБІРКА</h3>
                                <p className={style.product__paragraph}>Центрифужні пробірки використовують для відмірювання рідині проведення подальшого процесу в центрифузі</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-1.png" alt="Зовнішній вигляд центрифужної пробірки 1,5 мл"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>2 МЛ ЦЕНТРИФУЖНА ПРОБІРКА</h3>
                                <p className={style.product__paragraph}>Центрифужні пробірки використовують для відмірювання рідині проведення подальшого процесу в центрифузі</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-2.png" alt="Зовнішній вигляд центрифужної пробірки 2 мл"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>НАКОНЕЧНИКИ ДЛЯ ПІПЕТОК 200 МКЛ</h3>
                                <p className={style.product__paragraph}>Наконечники для піпеток використовуються для проведення лабораторних аналізів з біологічним матеріалом людини (сироватка, кров) в лабораторії медичного закладу</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-3.png" alt="Зовнішній вигляд наконечника для піпеток 200 мкл"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>НАКОНЕЧНИКИ ДЛЯ ПІПЕТОК 1000 МКЛ</h3>
                                <p className={style.product__paragraph}>Наконечники для піпеток використовуються для проведення лабораторних аналізів з біологічним матеріалом людини (сироватка, кров) в лабораторії медичного закладу</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-4.png" alt="Зовнішній вигляд наконечнику для піпеток 1000 мкл"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ПРОБІРКА ДЛЯ ЗАБОРУ КРОВІ. ЧЕРВОНА КРИШКА</h3>
                                <p className={style.product__paragraph}>Вакуумна пробірка BD з активатором згортання</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-5.png" alt="Зовнішній вигляд пробірки для зюору крові з червоною кришкою"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ПРОБІРКА ДЛЯ ЗАБОРУ КРОВІ. ПОМАРАНЧЕВА КРИШКА</h3>
                                <p className={style.product__paragraph}>Пробірка для вакуумного забору крові (оксид кремнію)</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-6.png" alt="Зовнішній вигляд пробірки для зюору крові з помаранчева кришкою"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ПРОБІРКА ДЛЯ ЗАБОРУ КРОВІ. ФІОЛЕТОВА КРИШКА</h3>
                                <p className={style.product__paragraph}>Пробірка для вакуумного забору крові (загальний аналіз крові)</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-7.png" alt="Зовнішній вигляд пробірки для зюору крові з фіолетовою кришкою"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ПРОБІРКА ДЛЯ ЗАБОРУ КРОВІ. ЗЕЛЕНА КРИШКА</h3>
                                <p className={style.product__paragraph}>Вакуумна пробірка AYSET, літій гепарин+гель</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-8.png" alt="Зовнішній вигляд пробірки для зюору крові з зеленою кришкою"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ПРОБІРКА ДЛЯ ЗАБОРУ КРОВІ. БЛАКИТНА КРИШКА</h3>
                                <p className={style.product__paragraph}>Вакуумна пробірка AYSET для коагулограми</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-9.png" alt="Зовнішній вигляд пробірки для зюору крові з блакитною кришкою"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ПРОБІРКА ДЛЯ ЗАБОРУ КРОВІ. СIРА КРИШКА</h3>
                                <p className={style.product__paragraph}>Призначені для дослідження рівня глюкози в крові та містять антикоагулянт калію оксалат та натрію фторид</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-10.png" alt="Зовнішній вигляд пробірки для зюору крові з сірою кришкою"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ПРОБІРКА ДЛЯ ЗАБОРУ КРОВІ. ЧОРНА КРИШКА</h3>
                                <p className={style.product__paragraph}>Вакуумна пробірка AYSET для визначення ШОЕ</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-11.png" alt="Зовнішній вигляд пробірки для зюору крові з чорною кришкою"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ПРОБІРКА ДЛЯ ЗАБОРУ КРОВІ. ЖОВТА КРИШКА</h3>
                                <p className={style.product__paragraph}>Вакуумна пробірка для забору сечі</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-12.png" alt="Зовнішній вигляд пробірки для зюору крові з жовтою кришкою"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className={style.product__branch}>Мікропіпетки</h3>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>РЕГУЛЬОВАНА МІКРОПІПЕТКА (5-50 МКЛ)</h3>
                                <p className={style.product__paragraph}>Мікропіпетка з регульованим обсягом - це інструмент для піпетування невеликого об’єму, який зазвичай використовується в біологічних та хімічних лабораторіях</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-13.png" alt="Зовнішній вигляд мікропіпетки з регульованим обсягом (5-50 МКЛ)"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>РЕГУЛЬОВАНА МІКРОПІПЕТКА (50-200 МКЛ)</h3>
                                <p className={style.product__paragraph}>Мікропіпетка з регульованим обсягом - це інструмент для піпетування невеликого об’єму, який зазвичай використовується в біологічних та хімічних лабораторіях</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-13.png" alt="Зовнішній вигляд мікропіпетки з регульованим обсягом (50-200 МКЛ)"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>РЕГУЛЬОВАНА МІКРОПІПЕТКА (100-1000 МКЛ)</h3>
                                <p className={style.product__paragraph}>Мікропіпетка з регульованим обсягом - це інструмент для піпетування невеликого об’єму, який зазвичай використовується в біологічних та хімічних лабораторіях</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-13.png" alt="Зовнішній вигляд мікропіпетки з регульованим обсягом (100-1000 МКЛ)"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>РЕГУЛЬОВАНА МІКРОПІПЕТКА (1000-5000 МКЛ)</h3>
                                <p className={style.product__paragraph}>Мікропіпетка з регульованим обсягом - це інструмент для піпетування невеликого об’єму, який зазвичай використовується в біологічних та хімічних лабораторіях</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/rollmed/rollmed-14.png" alt="Зовнішній вигляд мікропіпетки з регульованим обсягом (1000-5000 МКЛ)"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Cta/>
        </>
    )
}

export default Rollmed;