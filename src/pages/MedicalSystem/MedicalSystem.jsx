import style from './MedicalSystem.module.scss';
import Cta from '../../components/Cta/Cta';
import Heading from '../../components/Company/Heading/Heading';


const MedicalSystem = () => {
    
    return (
        <>
            <Heading/>
            <section className={style.products}>
                <h2 className="visually-hidden">Продукція</h2>
                <h3 className={style.product__branch}>Гематологія</h3>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Гематологічний аналізатор 5 ДІФ MS-H650</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Диференціація лейкоцитів на 5 популяцій, 3 скатерограми та 3 гістограми 
                                    </li>
                                    <li className={style.product__item}>
                                    Трикутне лазерне розсіювання в поєднанні з методом хімічного барвника та розширеною проточною цитометрією 
                                    </li>
                                    <li className={style.product__item}>
                                    60 зразків на годину 
                                    </li>
                                    <li className={style.product__item}>
                                    Інтуїтивна операційна система з 10,4-дюймовим сенсорним TFT-дисплеєм 
                                    </li>
                                    <li className={style.product__item}>
                                    До 50 000 результатів  ємність, включаючи графічні дані 
                                    </li>
                                    <li className={style.product__item}>
                                    Двонаправлене підключення LIS 
                                    </li>
                                    <li className={style.product__item}>
                                    Мова: китайська, англійська, іспанська, португальська, російська. Українська - в розробці 
                                    </li>
                                    <li className={style.product__item}>
                                    Ємність для зберігання даних до 50 000 результатів, включаючи графічні дані 
                                    </li>
                                    <li className={style.product__item}>
                                    Розмір: 360 мм (Д) x 470 мм (Ш) x 430 мм (В) 
                                    </li>
                                    <li className={style.product__item}>
                                    Вага: 28 кг
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="/public/images/catalogue/medicalsystem/MS-H650.png" alt="Зовнішній вигляд гематологічного аналізатору 5 ДІФ MS-H650"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ІМУНОАНАЛІЗАТОР FLI-600</h3>
                                <p className={style.product__paragraph}>FLI-600 - система флуоресцентного імуноаналізу з 6 каналами, яка використовує кров та сечу для вимірювання кількісної концентрації цільового аналізу. Його автоматизований процес тестуван ня дозволяє проводити кілька одночасних тестів для шести різних зразків. Автоматичне зберігання 300 000 тестових записів</p>
                                <p className={style.product__paragraph}>РЕАГЕНТИ:</p>
                                <p className={style.product__addition}>Серцеві маркери, гормональні маркери, маркери щитовидної залози, маркери запалення, діабет та ниркові проби, онкомаркери, інфекційні хвороби</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="/public/images/catalogue/biotime/FLI-600.png" alt="Зовнішній вигляд імуноаналізатору FLI-600"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                    <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ІНКУБАЦІЙНА КАМЕРА</h3>
                                <p className={style.product__paragraph}>Інкубаційна камера є допоміжним пристроєм флуоресцентного імуноферментного аналізатора Biotime. Температура та час реакції мають вирішальне значення для результатів випробувань. Інкубаційна камера забезпечує оптимізоване середовище, а також автоматичні таймери для тестових реакцій для підвищення надійності результатів тестів.</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Інкубує 6 тестових реагентів одночасно 
                                    </li>
                                    <li className={style.product__item}>
                                    Є звуковий сигнал для нагадування  
                                    </li>
                                    <li className={style.product__item}>
                                    Автоматична ідентифікація тестових реагентів
                                    </li>
                                    <li className={style.product__item}>
                                    Регулюється за часом інкубації
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="/public/images/catalogue/biotime/incubation_chamber.png" alt="Зовнішній вигляд аналізатору інкубаційної камери виробництва BioTime"/>
                            </div>
                </div>
                    </div>
                </div>
            </section>
            <Cta/>
        </>
    )
}

export default MedicalSystem;