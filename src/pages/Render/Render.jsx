import style from './Render.module.scss';
import Cta from '../../components/Cta/Cta';
import Heading from '../../components/Company/Heading/Heading';


const Render = () => {
    
    return (
        <>
            <Heading index="7" src="images/render/render-2.png" alt='Фото офісу Render' width="1280px"/>
            <section className={style.products}>
                <h2 className="visually-hidden">Продукція</h2>
                <h3 className={style.product__branch}>Системи посіву крові</h3>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>АВТОМАТИЗОВАНА СИСТЕМА ПОСІВУ КРОВІ BC128</h3>
                                <p className={style.product__paragraph}>Інноваційна система забезпечує неінвазивний автоматизований постійний моніторинг кожної окремої пляшки. Просте управління та система керування подвійним штрих-кодом для довільного доступу або попередньо встановленого введення пляшки. Розширювана модульна конструкція, стандартна конфігурація з одним модулем, який вміщує 128 тестових пляшок</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Місткість: 128 культуральних пляшок
                                    </li>
                                    <li className={style.product__item}>
                                    Усі процедури легкі та прості для «сканування штрих-коду» для «завантаження флаконів», максимально економлять час та спрощують робочий процес 
                                    </li>
                                    <li className={style.product__item}>
                                    Відображення кривої зростання в реальному часі
                                    </li>
                                    <li className={style.product__item}>
                                    Розроблено з використанням колориметричної технології, сумісної з іншими інструментами/носіями на основі тієї ж технології
                                    </li>
                                    <li className={style.product__item}>
                                    Розширювана модульна конструкція для розміщення 128 або 256 пляшок
                                    </li>
                                    <li className={style.product__item}>
                                    Незалежний функціональний блок в окремому модулі для кожного тримача для 16 пляшок, простий в обслуговуванні
                                    </li>
                                    <li className={style.product__item}>
                                    Підтримка дистанційного керування, двонаправлений інтерфейс для HIS або LIS
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Технічні характеристики:</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Розмір: 66×65×97,5 см
                                    </li>
                                    <li className={style.product__item}>
                                    Вага: 128 кг
                                    </li>
                                    <li className={style.product__item}>
                                    Робоча температура: 5 ~ 30 С0
                                    </li>
                                    <li className={style.product__item}>
                                    Робоча вологість: ≤80%
                                    </li>
                                    <li className={style.product__item}>
                                    Напруга: AC100-240V
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Доступні чотири типи культуральних середовищ:</p>
                                <p className={style.product__addition}>Аеробіка для дорослих, анаеробка для дорослих, аеробіка для дітей та L-форма</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="/public/images/catalogue/render/BC128.png" alt="Зовнішній вигляд автоматизованої системи посіву крові BC128"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>АВТОМАТИЗОВАНА СИСТЕМА ПОСІВУ КРОВІ BC64</h3>
                                <p className={style.product__paragraph}>Інноваційна система забезпечує неінвазивний автоматизований постійний моніторинг кожної окремої пляшки</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Ємність: 64 пляшки
                                    </li>
                                    <li className={style.product__item}>
                                    Принцип роботи: Колориметрична технологія
                                    </li>
                                    <li className={style.product__item}>
                                    Доступні культуральні пляшки (зберігаються при кімнатній температурі): аеробні для дорослих, анаеробні для дорослих, аеробні для дітей і L-форма
                                    </li>
                                    <li className={style.product__item}>
                                    Вхід для сканування штрих-коду
                                    </li>
                                    <li className={style.product__item}>
                                    Відображення в режимі реального часу температури інкубації та графіка росту
                                    </li>
                                    <li className={style.product__item}>
                                    Гнучкі та зручні функції запиту історичних даних і статистики
                                    </li>
                                    <li className={style.product__item}>
                                    Зовнішній комп'ютер, підключений і розширюваний модульний дизайн
                                    </li>
                                    <li className={style.product__item}>
                                    Просте управління: відкрийте дверцята - відскануйте пляшку - введіть пляшку - закрийте двері
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="/public/images/catalogue/render/BC64.png" alt="Зовнішній вигляд автоматизованої системи посіву крові BC64"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                    <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>АВТОМАТИЗОВАНА СИСТЕМА ПОСІВУ КРОВІ BC32</h3>
                                <p className={style.product__paragraph}>Навіть менші лабораторії можуть робити посів крові автоматично завдяки мені
                                    <br/>- Більш компактний
                                    <br/>- Економічніше
                                    <br/>- Більш легкий контроль
                                </p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Ємність: 32 культуральні пляшки
                                    </li>
                                    <li className={style.product__item}>
                                    Вхід для сканування штрих-коду 
                                    </li>
                                    <li className={style.product__item}>
                                    Колориметрична технологія
                                    </li>
                                    <li className={style.product__item}>
                                    Оснащений вбудованим комп'ютером і сенсорним екраном
                                    </li>
                                    <li className={style.product__item}>
                                    Призначений для виявлення росту мікробів у зразках крові або стерильних рідин організму
                                    </li>
                                    <li className={style.product__item}>
                                    Автоматичний безперервний моніторинг кожні 10 хвилин для кожної пляшки незалежним датчиком виявлення
                                    </li>
                                    <li className={style.product__item}>
                                    Відображення в реальному часі температури інкубації та діаграми реакції
                                    </li>
                                    <li className={style.product__item}>
                                    Гнучкі та швидкі функції запиту історичних даних і статистики
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="/public/images/catalogue/render/BC32.png" alt="Зовнішній вигляд автоматизованої системи посіву крові BC32"/>
                            </div>
                </div>
                    </div>
                </div>
                <h3 className={style.product__branch}>Мікробіологія</h3>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>АВТОМАТИЗОВАНА СИСТЕМА ID&AST MA120</h3>
                                <p className={style.product__paragraph}>Система, що складається з ПК, програмного забезпечення та пристрою для зчитування, доступна для малих і середніх лабораторій для автоматичної ідентифікації та тестів на чутливість до антибіотиків</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Принцип виявлення: турбідиметричний метод
                                    </li>
                                    <li className={style.product__item}>
                                    Справжній МІК для тесту на чутливість, мікролунки з унікальним запатентованим дизайном
                                    </li>
                                    <li className={style.product__item}>
                                    Актуальний тест на чутливість до антибіотиків і групування відповідно до стандарту CLSI/EUCAST
                                    </li>
                                    <li className={style.product__item}>
                                    Орієнтований на користувача дизайн
                                    </li>
                                    <li className={style.product__item}>
                                    Незалежний контроль якості для кожної тестової панелі
                                    </li>
                                    <li className={style.product__item}>
                                    Включена експертна система, яка легко визначає вибір антибіотиків
                                    </li>
                                    <li className={style.product__item}>
                                    Оновлюйте щорічно відповідно до CLSI/EUCAST
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Технічні характеристики:</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Ємність: 1 хвилина/тестова панель
                                    </li>
                                    <li className={style.product__item}>
                                    Інтерфейс даних: USB, двонаправлений інтерфейс, доступний для LIS або HIS
                                    </li>
                                    <li className={style.product__item}>
                                    Вхід: 100-240 В змінного струму, 50/60 Гц
                                    </li>
                                    <li className={style.product__item}>
                                    Розмір: 400*390*440 мм
                                    </li>
                                    <li className={style.product__item}>
                                    Вага: 14,5 кг
                                    </li>
                                </ul>
                                {/* <p className={style.product__paragraph}>Гнучкі та додаткові можливості для автоматизації</p>
                                <p className={style.product__addition}>Турбідиметр (MT-06) і автоматичний пробовідбірник (AS120) є додатковими для системи ID&AST</p> */}
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="/public/images/catalogue/render/MA120.png" alt="Зовнішній вигляд автоматизованої системи ID&AST MA120"/>
                            </div>
                        </div>
                        <div className={style.product__extra__appearance}>
                            <p className={style.product__paragraph}>Гнучкі та додаткові можливості для автоматизації</p>
                            <p className={style.product__addition}>Турбідиметр (MT-06) і автоматичний пробовідбірник (AS120) є додатковими для системи ID&AST</p>
                            <img className={style.product__extra__img} src="/public/images/catalogue/render/MA120-1.png" alt="Зовнішній вигляд турбідиметра MT-06 і автоматичного пробовідбірника AS120"/>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                    <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>АВТОМАТИЗОВАНА СИСТЕМА MALDI-TOF MS M-Discover 100</h3>
                                <p className={style.product__paragraph}>Комплексна база даних із понад 2000 видів і 6000 штамів для підтримки ідентифікації широкого діапазону зразків</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Висока пропускна здатність однієї цільової пластини
                                    </li>
                                    <li className={style.product__item}>
                                    Інтелектуальне регулювання потужності лазера
                                    </li>
                                    <li className={style.product__item}>
                                    Автоматичний і ручний режими для збору зразків, контролю якості та ідентифікації
                                    </li>
                                    <li className={style.product__item}>
                                    Підтримка локального збагачення бази даних
                                    </li>
                                    <li className={style.product__item}>
                                    Комплексна база даних із понад 2000 видів і 6000 штамів для підтримки ідентифікації широкого спектру зразків
                                    </li>
                                    <li className={style.product__item}>
                                    Автоматичний контроль якості в кількох положеннях для зменшення впливу неоднорідності цільової пластини
                                    </li>
                                    <li className={style.product__item}>
                                    Автоматизований вакуумний захист
                                    </li>
                                    <li className={style.product__item}>
                                    Запатентований дизайн входу в кабіну, щоб уникнути застрявання тарілок
                                    </li>
                                    <li className={style.product__item}>
                                    Насос, встановлений всередині інструменту, гарантує його продуктивність і зменшує шум
                                    </li>
                                    <li className={style.product__item}>
                                    Низьке споживання реагентів, мінімальний об’єм проби та висока продуктивність
                                    </li>
                                    <li className={style.product__item}>
                                    Менше підготовчих робіт для обробки зразків, щоб заощадити час і вартість праці
                                    </li>
                                    <li className={style.product__item}>
                                    Переробка цільових пластин
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Технічні характеристики:</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Розмір: 55×65×138 см
                                    </li>
                                    <li className={style.product__item}>
                                    Вага: 150 кг
                                    </li>
                                    <li className={style.product__item}>
                                    Робоча температура: 1~30 оС
                                    </li>
                                    <li className={style.product__item}>
                                    Робоча вологість: 20~30%
                                    </li>
                                    <li className={style.product__item}>
                                    Напруга: AC100-240V
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="/public/images/catalogue/render/M-D100.png" alt="Зовнішній вигляд автоматизованої системи MALDI-TOF MS M-Discover 100"/>
                            </div>
                </div>
                    </div>
                </div>
            </section>
            <Cta/>
        </>
    )
}

export default Render;