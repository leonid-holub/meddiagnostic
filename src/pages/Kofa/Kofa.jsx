import style from './Kofa.module.scss';
import Cta from '../../components/Cta/Cta';
import Heading from '../../components/Company/Heading/Heading';


const Kofa = () => {
    
    return (
        <>
            <Heading index="5" src="images/kofa/kofa-2.jpg" alt='Фото офісу Kofa Biotech' width="866px"/>
            <section className={style.products}>
                <h2 className="visually-hidden">Продукція</h2>
                <h3 className={style.product__branch}>Імунологія</h3>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Автоматичний хемілюмінесцентний імунологічний аналізатор CLIA AI-180</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Система прямої хемілюмінесценції ефіру акридинію з високою специфічністю та стабільністю 
                                    </li>
                                    <li className={style.product__item}>
                                    Високе співвідношення сигнал/шум, сильна здатність запобігати перешкодам
                                    </li>
                                    <li className={style.product__item}>
                                    Ефективне перемішування магнітних частинок
                                    </li>
                                    <li className={style.product__item}>
                                    Значно вища специфічність та чутливість за ІФА методи
                                    </li>
                                    <li className={style.product__item}>
                                    Висока пропускна здатність
                                    </li>
                                    <li className={style.product__item}>
                                    Охолодження реагента/зразка на борту
                                    </li>
                                    <li className={style.product__item}>
                                    Спеціальні канали для екстренних проб
                                    </li>
                                    <li className={style.product__item}>
                                    Атоматичне завантаження реагенту
                                    </li>
                                    <li className={style.product__item}>
                                    Автоматичне зчитування реагенту
                                    </li>
                                    <li className={style.product__item}>
                                    Безперервне завантаження штативів для зразків
                                    </li>
                                    <li className={style.product__item}>
                                    Неповторний дизайн робочого столу, інтелектуально зрозумілий інтерфейс
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/kofa/AI-180.png" alt="Зовнішній вигляд автоматичного хемілюмінесцентного імунологічного аналізатору CLIA AI-180"/>
                            </div>
                        </div>
                        <div className={style.product__wrapper__ai180}>
                            <ul className={style.product__list__ai180}>
                                <li className={style.product__item__ai180}>
                                    <div className={style.product__heading__ai180}>
                                        <h4 className={style.product__title__ai180}>Принцип тестування</h4>
                                    </div> 
                                    <ul className={style.ai180__list}>
                                        <li className={style.ai180__item}>
                                        Пряма хемілюмінесценція, мічена ефіром акридинію
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__ai180}>
                                    <div className={style.product__heading__ai180}>
                                        <h4 className={style.product__title__ai180}>Продуктивність</h4>
                                    </div> 
                                    <ul className={style.ai180__list}>
                                        <li className={style.ai180__item}>
                                        180 тестів/годину (120 тестів/годину)
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__ai180}>
                                    <div className={style.product__heading__ai180}>
                                        <h4 className={style.product__title__ai180}>Зразок і обробка зразків</h4>
                                    </div> 
                                    <ul className={style.ai180__list}>
                                        <li className={style.ai180__item}>
                                        Цільна кров/сировотка/плазма/сеча тощо 
                                        </li>
                                        <li className={style.ai180__item}>
                                        50 позицій зразків (5 зразків/10 штативів) 
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__ai180}>
                                    <div className={style.product__heading__ai180}>
                                        <h4 className={style.product__title__ai180}>Блок реагентів</h4>
                                    </div> 
                                    <ul className={style.ai180__list}>
                                        <li className={style.ai180__item}>
                                        20 позицій реагентів
                                        </li>
                                        <li className={style.ai180__item}>
                                        Готові до використання інтегровані набори реагентів 
                                        </li>
                                        <li className={style.ai180__item}>
                                        Вбудована еталонна калібрувальна крива, калібрування за 2-6 точками
                                        </li>
                                        <li className={style.ai180__item}>
                                        Цілодобове охолодження, 2-8С постійна температура відсіку з реагентами 
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__ai180}>
                                    <div className={style.product__heading__ai180}>
                                        <h4 className={style.product__title__ai180}>Зонд </h4>
                                    </div> 
                                    <ul className={style.ai180__list}>
                                        <li className={style.ai180__item}>
                                        Детекція рівня рідини, детектор бульбашок, захист від зіткнень, функція виявлення згустка
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__ai180}>
                                    <div className={style.product__heading__ai180}>
                                        <h4 className={style.product__title__ai180}>Флакон з реактивами</h4>
                                    </div> 
                                    <ul className={style.ai180__list}>
                                        <li className={style.ai180__item}>
                                        Одноразовий, інтелектуальне завантаження
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__ai180}>
                                    <div className={style.product__heading__ai180}>
                                        <h4 className={style.product__title__ai180}>Програмна система</h4>
                                    </div> 
                                    <ul className={style.ai180__list}>
                                        <li className={style.ai180__item}>
                                        Двонаправлений з'вязок LIS
                                        </li>
                                        <li className={style.ai180__item}>
                                        Робочий інтерфейс англійська мова, вже в 2023 році українськомовна версія
                                        </li>
                                    </ul>
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

export default Kofa;