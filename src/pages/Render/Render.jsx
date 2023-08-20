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
                                <h3 className={style.product__title}>АВТОМАТИЗОВАНА СИСТЕМА ПОСІВУ КРОВІ BC-128</h3>
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
                                <p className={style.product__addition}>Аероби та анаероби для дорослих і дітей, а також L-форми</p>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/render/BC128.png" alt="Зовнішній вигляд автоматизованої системи посіву крові BC128"/>
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
                                <img className={style.product__img} src="images/catalogue/render/BC64.png" alt="Зовнішній вигляд автоматизованої системи посіву крові BC64"/>
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
                                </p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Інноваційна система забезпечує неінвазивний постійний моніторинг кожної окремої пляшки
                                    </li>
                                    <li className={style.product__item}>
                                    Просте управління та система керування подвійним штрих-кодом для довільного доступу або попередньо встановленного введення пляшки
                                    </li>
                                    <li className={style.product__item}>
                                    Розширювана модульна конструкція, стандартна кофігурація з одним модулем, який вміщує 32 тестові пляшки, може бути розширена до 256 тестових пляшок, доступні моделі: ВС32, ВС64, ВС128, ВС256
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Ефективний і надійний
                                </p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Виявлення росту мікробів у зразках крові або стерильних рідинах організму
                                    </li>
                                    <li className={style.product__item}>
                                    Безперервне перемішування та інкубація флаконів для посіву крові покращує швидке виявлення для найвибагливіших бактерій; Для результат дається протягом 4-24 годин
                                    </li>
                                    <li className={style.product__item}>
                                    Незалежний датчик виявлення для кожної окремої пляшки, пляшки перевіряються кожні 10 хвилин
                                    </li>
                                    <li className={style.product__item}>
                                    Удосконалений алгоритм для індивідуального типу пляшки забезпечує надійну роботу в особливих обставинах, таких як низький об’єм крові, педіатричні зразки або виявлення мікроорганізмів із низьким рівнем росту та Neisseria
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Простий і орієнтований на користувача
                                </p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Усі процедури легкі та прості для сканування штрих-коду, для завантаження флаконів, максимально економлять час та спрощують робочий процес
                                    </li>
                                    <li className={style.product__item}>
                                    Відображення кривої зростання в реальному часі
                                    </li>
                                    <li className={style.product__item}>
                                    Розроблено з використанням колориметричної технології, сумісної з іншими інструментами/носіями тієї ж технології
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Сучасний та гнучкий
                                </p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Модульна конструкція з можливістю розширення
                                    </li>
                                    <li className={style.product__item}>
                                    Незалежний функціональний блок в окремому модулі для кожного тримача на 16 пляшок, простий в обслуговуванні
                                    </li>
                                    <li className={style.product__item}>
                                    Підтримка дистанційного керування, двонаправлений інтерфейс для HIS або LIS
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/render/BC32.png" alt="Зовнішній вигляд автоматизованої системи посіву крові BC32"/>
                            </div>
                </div>
                    </div>
                </div>
                <h3 className={style.product__branch}>Бактеріологія</h3>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>АВТОМАТИЗОВАНА СИСТЕМА ID&AST MA120</h3>
                                <p className={style.product__paragraph}>Система, що складається з ПК, програмного забезпечення та пристрою для зчитування, доступна для малих і середніх лабораторій для автоматичної ідентифікації та тестів на чутливість до антибіотиків</p>
                                <p className={style.product__paragraph}>Ефективний і надійний</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Система, що складається з ПК, програмного забезпечення та пристрою для зчитування, доступна для малих і середніх лабораторій для автоматичної ідентифікації та тестів на чутливість до антибіотиків                                    </li>
                                    <li className={style.product__item}>
                                    Здатність виконувати тести на ідентифікацію та чутливість до антибіотиків для Nonfermenter, Streptococcus/Enterococcus, Staphylococcus, Fungus та Enterobacteriaceae. Він охоплює понад 300 видів бактерій і грибів                                     </li>
                                    <li className={style.product__item}>
                                    Тестова панель складається із 120 мікролунок, які включають 24 мікролунки для ідентифікації та 96 мікролунок для тесту на чутливість. Обидва результати можна отримати в одному тесті
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Особливості</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Принцип виявлення: турбідиметричний метод
                                    </li>
                                    <li className={style.product__item}>
                                    Справжній МІК для тесту на чутливість, мікролунки з унікальним запатентованим дизайном
                                    </li>
                                    <li className={style.product__item}>
                                    Актуальний тест на чутливість до антибіотиків і групування відповідно до стандартів CLSI/EUCAST
                                    </li>
                                    <li className={style.product__item}>
                                    Орієнтований на користувача дизайн
                                    </li>
                                    <li className={style.product__item}>
                                    Включена експертна система, яка легко визначає вибір антибіотиків
                                    </li>
                                    <li className={style.product__item}>
                                    Незалежний контроль якості для кожної випробувальної панелі
                                    </li>
                                    <li className={style.product__item}>
                                    Щорічне оновлення відповідно CLSI/EUCAST
                                    </li>
                                    <li className={style.product__item}>
                                    Система лікарняних інфекцій, система управління випадками та статистична система роблять роботу простою та ефективною
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Переваги</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Всі етапи роботи системи автоматичні: виділення чистої культури, приготування суспензії, внесення в лунки, інкубація, зчитування, обробка даних, видача результатів
                                    </li>
                                    <li className={style.product__item}>
                                    Навчальні курси з продукту на базі майданчику виробника з онлайн доступом до всіх навчальних матеріалів
                                    </li>
                                    <li className={style.product__item}>
                                    Невеликі розміри 400*390*440 мм
                                    </li>
                                    <li className={style.product__item}>
                                    Вага: 14,5 кг
                                    </li>
                                    <li className={style.product__item}>
                                    Підтримка дистанційного керування, двонаправлений інтерфейс для HIS або LIS
                                    </li>
                                </ul>
                                {/* <p className={style.product__paragraph}>Гнучкі та додаткові можливості для автоматизації</p>
                                <p className={style.product__addition}>Турбідиметр (MT-06) і автоматичний пробовідбірник (AS120) є додатковими для системи ID&AST</p> */}
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/render/MA120.png" alt="Зовнішній вигляд автоматизованої системи ID&AST MA120"/>
                            </div>
                        </div>
                        <div className={style.product__extra__appearance}>
                            <p className={style.product__paragraph}>Гнучкі та додаткові можливості для автоматизації</p>
                            <p className={style.product__addition}>Турбідиметр (MT-06) і автоматичний пробовідбірник (AS120) є додатковими для системи ID&AST</p>
                            <img className={style.product__extra__img} src="images/catalogue/render/MA120-1.png" alt="Зовнішній вигляд турбідиметра MT-06 і автоматичного пробовідбірника AS120"/>
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
                                <img className={style.product__img} src="images/catalogue/render/M-D100.png" alt="Зовнішній вигляд автоматизованої системи MALDI-TOF MS M-Discover 100"/>
                            </div>
                </div>
                    </div>
                </div>
                <h3 className={style.product__branch}>Гематологія</h3>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Високопродуктивна автоматизована тромбоеластографічна система</h3>
                                <p className={style.product__paragraph}>ССистема тромбоеластографії - це високотехнологічний прилад, який може виконувати динамічний аналіз ефективності згортання крові та фібринолізу, що широко використовують у багатьох галузях, як-от банк крові, лабораторія, хірургія, анестезіологія та науково-дослідницькі інститути</p>
                                <p className={style.product__paragraph}>Висока пропускна здатність</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Від 2-х до 12-ти каналів тестування                                  
                                    </li>
                                    <li className={style.product__item}>
                                    До 50 зразків завантажуються в одну партію                                  
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Повністю автоматизована система</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Один крок від зразка до результату                                
                                    </li>
                                    <li className={style.product__item}>
                                    Мінімальне втручання персоналу                                 
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Біологічно безпечний</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Система забору з первинних пробірок                                
                                    </li>
                                    <li className={style.product__item}>
                                    Інтегрований картридж із реагентом повністю запобігають перехресному забрудненню                             
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Видима обробка</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Динамічне відображення процесу згортання крові та фібринолізу в реальному часі                               
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Обмін даними</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    З’єднання LIS/HIS                             
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Економічно ефективний</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Запатентований інтегрований картридж з реагентами дозволяє уникнути відходів реагентів і витрат на обслуговування                           
                                    </li>
                                </ul>
                                {/* <p className={style.product__paragraph}>Гнучкі та додаткові можливості для автоматизації</p>
                                <p className={style.product__addition}>Турбідиметр (MT-06) і автоматичний пробовідбірник (AS120) є додатковими для системи ID&AST</p> */}
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/render/ITEG4-1.gif" alt="Високопродуктивна автоматизована тромбоеластографічна система"/>
                                {/* <img className={style.product__img} src="images/catalogue/render/ITEG4-2.png" alt="исокопродуктивна автоматизована тромбоеластографічна система"/> */}
                            </div>
                        </div>
                        <div className={style.product__extra__appearance}>
                            <p className={style.product__paragraph}>Основні параметри та їх значення</p>
                            <table className={style.table}>
                                <thead>
                                    <tr>
                                    <th className={style.table__th}>Параметр</th>
                                    <th className={style.table__th}>Назва</th>
                                    <th className={style.table__th}>Обгрунтування</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className={style.table__td}>R</td>
                                        <td className={style.table__td}>Час згортання</td>
                                        <td className={style.table__td}>Час, необхідний від початку коагуляції до утворення першого виявленого згустку крові(амплітуда = 2 мм). Оцінюється функція факторів згортання крові</td>
                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>K</td>
                                        <td className={style.table__td}>Кінетика згустку</td>
                                        <td className={style.table__td}>Час від кінця R-часу(початок утворення тромбу) до того, як щільність тромбу досягне певного фіксованого рівня(амплітуда = 20 мм). Оцінюється фібриногеновий статус</td>
                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>Angle</td>
                                        <td className={style.table__td}>α</td>
                                        <td className={style.table__td}>Швидкість утворення фібринового згустку та взаємозв’язок(зміцнення згустку) між різними фібриновими нитками. Оцінюється функція фібриногену та його стан</td>
                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>MA</td>
                                        <td className={style.table__td}>Максимальна амплітуда</td>
                                        <td className={style.table__td}>Найсильніші динамічні характеристики взаємозв’язку фібрину та тромбоцитів через Са+/VIIIа, що відображає кінцеву щільність фібрину та тромбоцитарних згустків. Ефект тромбоцитів більший, ніж фібрину. Оцінює функцію тромбоцитів</td>
                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>CL</td>
                                        <td className={style.table__td}>Гемостатичний індекс</td>
                                        <td className={style.table__td}>Обчисляють на основі комбінації R, K, Angle i MA, щоб оцінити загальну картину коагуляції</td>
                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>LY30</td>
                                        <td className={style.table__td}>Індекс фібринолізу Очікуваний</td>
                                        <td className={style.table__td}>Частка розпаду тромбу протягом 30 хвилин після появи МА. Оцінюється функція фібринолізу</td>
                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>EPL</td>
                                        <td className={style.table__td}>Очікуваний індекс фібринолізу</td>
                                        <td className={style.table__td}>Прогнозує частку розпаду тромбу протягом 30 хвилин після появи МА. Оцінюється функція фібринолізу</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className={style.table}>
                                 <thead>
                                    <tr>
                                    <th className={style.table__th}>Тестові параметри</th>
                                    <th className={style.table__th}>Клінічне значення</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className={style.table__td}>Тест активації коаліну</td>
                                        <td className={style.table__td}>Тест активації внутрішнього шляху, який може визначити основні характеристики згортання крові та ризики кровотечі чи тромбозу</td>

                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>Тест швидкої активації</td>
                                        <td className={style.table__td}>Тест активації внутрішнього та зовнішнього шляхів, який використовується для прискорення процесу згортання крові, з метою оцінки функції згортання. Більш швидкий</td>

                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>Аналіз гепарину</td>
                                        <td className={style.table__td}>Для усунення ефекту гепарину в досліджуваному зразку та оцінки наявності гепарину або гепариноїдів в організмі людини</td>

                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>Функціоналіний аналіз на фібриноген</td>
                                        <td className={style.table__td}>Визначає вміст функціонального фібриногену (ФФВ) і щільність кров’яного згустка (МА). Зазвичай він використовується для оцінки клінічного стану пацієнтів під час і після серцево-судинних операцій,тарнсплантації печінки, травм і операцій на серці, кровотеч або тромбозів після операції</td>
                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>Аналіз агрегації тромбоцитів (ADP)</td>
                                        <td className={style.table__td}>Щоб всебічно оцінити ефективність індукторів АДФ для антитромбоцитарних препаратів, таких як Клопідогрель і Тікагрелор</td>
                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>Аналіз агрегації тромбоцитів (AА)</td>
                                        <td className={style.table__td}>Визначити єфективність індуктора АА для антитромбоцитарних препаратів, таких як Аспірин</td>
                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>Аналіз агрегації тромбоцитів (AА&ADP)</td>
                                        <td className={style.table__td}>Для визначення єфективності подвійних антиагрегантів, таких як Аспірин, Клопідогрель і Тікагрелор</td>
                                    </tr>
                                    <tr>
                                        <td className={style.table__td}>Контроль якості 3-х рівневий</td>
                                        <td className={style.table__td}>Використовується для контролю якості системи аналізатора гемостазу та її наборів реактивів</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className={style.product__paragraph}>Ми пропонуємо своїм клієнтам:</p>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Надаємо абсолютно новий досвід застосування системи аналізу тромбеластографії в середніх і великих лікарнях                                  
                                    </li>
                                    <li className={style.product__item}>
                                    Компактна, повністю автоматизована система тромбеластографії з вбудованим комп'ютером і 7-дюймовим кольоровим сенсорним екраном                                 
                                    </li>
                                    <li className={style.product__item}>
                                    Незалежна реакційна чашка для зниження експлуатаційних витрат, все в одному картриджі                               
                                    </li>
                                    <li className={style.product__item}>
                                    Потрійний контроль якості для гарантії надійності результатів тесту                                
                                    </li>
                                    <li className={style.product__item}>
                                    Доступні різні види тестів: Стандартний, швидкий ТЕГ, ТЕГ з гепариназою, функціональний фібриноген, тромбоцитарне картування, тести AA, ADP, AA+ADP                             
                                    </li>
                                    <li className={style.product__item}>
                                    Висока чутливість системи для забезпечення точності                             
                                    </li>
                                    <li className={style.product__item}>
                                    Eкспертне програмне забезпечення для обробки та зберігання даних                            
                                    </li>
                                    <li className={style.product__item}>
                                    Робоча температура: 15-30°C                           
                                    </li>
                                    <li className={style.product__item}>
                                    Вологість під час експлуатації: 20-80%                        
                                    </li>
                                    <li className={style.product__item}>
                                    R, K, Angle, MA: CV&lt;10%
                                    </li>
                                    <li className={style.product__item}>
                                    Розміри: 67х74,7х61 см                       
                                    </li>
                                    <li className={style.product__item}>
                                    Вага: 47 кг                      
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

export default Render;