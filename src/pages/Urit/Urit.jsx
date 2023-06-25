import style from './Urit.module.scss';
import Cta from '../../components/Cta/Cta';
import Heading from '../../components/Company/Heading/Heading';


const Urit = () => {
    
    return (
        <>
            <Heading index="3" src="/public/images/urit/urit-2.jpg" alt='Дівчина працівник лабораторії біля обладнання' width="1200px"/>
            <section className={style.products}>
                <h2 className="visually-hidden">Продукція</h2>
                <h3 className={style.product__branch}>Гематологія</h3>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>АНАЛІЗАТОР ІМУНОАНАЛІЗУ BIOT-YG-I</h3>
                                <p className={style.product__paragraph}>BIOT-YG-I є системою флуоресцентного імуноаналізу з одним каналом, яка вимірює кількісну концентрацію цільового аналізу в крові та сечі людини</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Результати тесту через 3-20 хвилин 
                                    </li>
                                    <li className={style.product__item}>
                                    Автоматичне зберігання 5000 тестових записів 
                                    </li>
                                    <li className={style.product__item}>
                                    Сенсорний екран, зчитувач штрих-коду
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>РЕАГЕНТИ:</p>
                                <p className={style.product__addition}>Серцеві маркери, гормональні маркери, маркери щитовидної залози, маркери запалення, діабет та ниркові проби, онкомаркери, інфекційні хвороби</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/biotime/BIOT_YG_I.png" alt="Зовнішній вигляд аналізатору імуноаналізу BIOT-YG-I"/>
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
                                <img className={style.product__img} src="images/catalogue/biotime/FLI-600.png" alt="Зовнішній вигляд імуноаналізатору FLI-600"/>
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
                                <img className={style.product__img} src="images/catalogue/biotime/incubation_chamber.png" alt="Зовнішній вигляд аналізатору інкубаційної камери виробництва BioTime"/>
                            </div>
                </div>
                    </div>
                </div>
            </section>
            <Cta/>
        </>
    )
}

export default Urit;