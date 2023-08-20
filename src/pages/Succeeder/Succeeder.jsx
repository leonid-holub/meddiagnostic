import style from './Succeeder.module.scss';
import Cta from '../../components/Cta/Cta';
import Heading from '../../components/Company/Heading/Heading';
import { useEffect } from 'react';


const Succeeder = () => {
    
    useEffect(()=> {
        window.scroll(0, 0);
    })

    return (
        <>
            <Heading index="4" src="images/succeeder/succeeder-3.jpg" alt='Фото з назвою Succeeder з відео про компанію' width="1280px"/>
            <section className={style.products}>
                <h2 className="visually-hidden">Продукція</h2>
                <h3 className={style.product__branch}>Коагуляція</h3>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Повністю автоматичний аналізатор коагуляції SF-8200</h3>
                                <p className={style.product__paragraph}>Повністю автоматичний аналізатор коагуляції SF-8200 використовує згортання та імунотурбідиметрію, хромогенний метод для перевірки згортання плазми. Прилад показує, що значенням вимірювання згортання є час згортання (у секундах)</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Розроблено для лабораторії великого рівня 
                                    </li>
                                    <li className={style.product__item}>
                                    Пропускна здатність до 360 PT-тестів на годину з безперервним завантаженням 1000 кювет
                                    </li>
                                    <li className={style.product__item}>
                                    Аналіз на основі в'язкості (механічне згортання крові), імунотурбідиметричний аналіз, хромогенний аналіз
                                    </li>
                                    <li className={style.product__item}>
                                    Кілька методів тестування
                                    </li>
                                    <li className={style.product__item}>
                                    Інтелектуальна операційна система
                                    </li>
                                    <li className={style.product__item}>
                                    Управління реагентами та витратними матеріалами
                                    </li>
                                    <li className={style.product__item}>
                                    Інтелектуальне керування зразками
                                    </li>
                                    <li className={style.product__item}>
                                    Внутрішній штрих-код зразка та реагенту, підтримка LIS
                                    </li>
                                    <li className={style.product__item}>
                                    Кап-пірсинг необов'язковий
                                    </li>
                                    <li className={style.product__item}>
                                    Оригінальні реактиви, кювети та розчин для кращих результатів
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/suceeder/sf-8200.png" alt="Зовнішній вигляд повністю автоматизованого аналізатору коагуляції SF-8200"/>
                                {/* <div className={style.additional__img__wrapper}>  
                                    <img className={style.additional__img} src="images/catalogue/suceeder/sf-8200-1.png" alt="Зовнішній вигляд повністю автоматизованого аналізатору коагуляції SF-8200" width="200px"/>
                                    <img className={style.additional__img} src="images/catalogue/suceeder/sf-8200-2.png" alt="Зовнішній вигляд повністю автоматизованого аналізатору коагуляції SF-8200" width="200px"/>
                                </div> */}
                            </div>
                        </div>
                        <div className={style.additional__img__wrapper}>  
                            <img className={style.additional__img} src="images/catalogue/suceeder/sf-8200-1.png" alt="Зовнішній вигляд повністю автоматизованого аналізатору коагуляції SF-8200" width="350px"/>
                            <img className={style.additional__img} src="images/catalogue/suceeder/SF-8200-2.png" alt="Зовнішній вигляд повністю автоматизованого аналізатору коагуляції SF-8200" width="350px"/>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Повністю автоматизований аналізатор коагуляції SF-8100</h3>
                                <p className={style.product__paragraph}>SF-8100 призначений для вимірювання здатності пацієнта утворювати та розчиняти тромби</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Розроблено для лабораторії середнього та великого рівня
                                    </li>
                                    <li className={style.product__item}>
                                    2 методи тестування  
                                    </li>
                                    <li className={style.product__item}>
                                    Аналіз на основі в'язкості (механічне згортання крові), імунотурбідиметричний аналіз, хромогенний аналіз.
                                    </li>
                                    <li className={style.product__item}>
                                    Зовнішній штрих-код і принтер (не надається), підтримка LIS
                                    </li>
                                    <li className={style.product__item}>
                                    Підтримка PT, APTT, Fbg, TT, D-Dimer, FDP, AT-III, Lupus, Factors, Protein C/S тощо
                                    </li>
                                    <li className={style.product__item}>
                                    Безперервне завантаження 1000 кювет
                                    </li>
                                    <li className={style.product__item}>
                                    Нахилені позиції реагентів, зменшують відходи реагенту
                                    </li>
                                    <li className={style.product__item}>
                                    Операція відходу, зчитувач карток IC для контролю реагентів і витратних матеріалів
                                    </li>
                                    <li className={style.product__item}>
                                    Аварійне положення
                                    </li>
                                    <li className={style.product__item}>
                                    Підтримка пріоритету надзвичайної ситуації
                                    </li>
                                    <li className={style.product__item}>
                                    Оригінальні реактиви, кювети та розчин для кращих результатів
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/suceeder/SF-8100.png" alt="Зовнішній вигляд повністю автоматизованого аналізатору коагуляції SF-8100"/>
                                {/* <div className={style.additional__img__wrapper}> 
                                    <img className={style.additional__img} src="images/catalogue/suceeder/SF-8100-1.png" alt="Зовнішній вигляд повністю автоматизованого аналізатору коагуляції SF-8100" width="350px"/>
                                </div> */}
                            </div>
                        </div>
                        <div className={style.additional__img__wrapper}> 
                            <img className={style.additional__img} src="images/catalogue/suceeder/SF-8100-1.png" alt="Зовнішній вигляд повністю автоматизованого аналізатору коагуляції SF-8100" width="350px"/>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Повністю автоматизований аналізатор коагуляції SF–8050</h3>
                                <p className={style.product__paragraph}>В SF-8050 використовується клотинговий хромогенний та турбідиметричний методи для перевірки згортання плазми.</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Розроблено для лабораторії середнього та великого рівня 
                                    </li>
                                    <li className={style.product__item}>
                                    Аналіз на основі в'язкості (механічне згортання крові), імунотурбідиметричний аналіз, хромогенний аналіз
                                    </li>
                                    <li className={style.product__item}>
                                    Пропускна здатнысть до 200 тестів/год з безперервним завантаженням 1000 кювет
                                    </li>
                                    <li className={style.product__item}>
                                    Оригінальні реактиви, калібрувальна плазма, контрольна плазма двох рівнів
                                    </li>
                                    <li className={style.product__item}>
                                    Підтримка PT, TT, APTT, FIB, D-Dimer, FDP, AT-3, LA, Factors, Protein C/S та ін
                                    </li>

                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/suceeder/SF-8050.png" alt="Зовнішній вигляд повністю автоматизованого аналізатору коагуляції SF–8050"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Напівавтоматичний коагулометр SF-400</h3>
                                <p className={style.product__paragraph}>SF-400 виконує функції попереднього нагрівання реагенту, магнітного перемішування, автоматичного друку, індикації часу тощо. Еталонна крива зберігається в приладі, а діаграму кривої можна роздрукувати. Принцип тестування цього приладу полягає у виявленні амплітуди коливань сталевих кульок у тестових отворах за допомогою магнітних датчиків і отримання результатів тестування шляхом обчислення. Випадкові помилки зменшуються завдяки використанню електронного пристрою для внесення зразків, що гарантує високу точність і повторюваність. Цей продукт підходить для визначення згортання крові в медичних, науково-дослідних та освітніх установах</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Система (механічного) визначення в'язкості 
                                    </li>
                                    <li className={style.product__item}>
                                    Мінімальна інтерференція від гемолізу та інших чинників
                                    </li>
                                    <li className={style.product__item}>
                                    4 незалежні тестові канали з випадковими та паралельними тестами
                                    </li>
                                    <li className={style.product__item}>
                                    Оригінальні реагенти, контрольна плазма, калібратор
                                    </li>
                                    <li className={style.product__item}>
                                    Підтримка PT, APTT, Fbg, TT, Factors, Protein C/S тощо
                                    </li>
                                    <li className={style.product__item}>
                                    Внутрішній USB-принтер, підтримка LIS
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/suceeder/SF-400.png" alt="Зовнішній вигляд напівавтоматичного аналізатору коагуляції SF-400"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className={style.product__branch}>ШОЕ</h3>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Аналізатор ШОЕ SD-1000</h3>
                                <p className={style.product__paragraph}>Аналізатор ШОЕ SD-1000 використовується для перевірки швидкості осідання еритроцитів (ШОЕ) і HCT</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    ШОЕ (значення Вестергрена і Вінтроба) і HCT
                                    </li>
                                    <li className={style.product__item}>
                                    Зчитування даних ШОЕ через 60 хвилин або 30 хвилин
                                    </li>
                                    <li className={style.product__item}>
                                    Довільне завантаження з сумісними 100 пробірками ESR
                                    </li>
                                    <li className={style.product__item}>
                                    Сенсорний екран з кольоровим LCD
                                    </li>
                                    <li className={style.product__item}>
                                    Вбудований термопринтер
                                    </li>
                                    <li className={style.product__item}>
                                    Штрих-код, сканер LIS/HIS підключення
                                    </li>
                                    <li className={style.product__item}>
                                    Необмежена кількість даних зберігання з флешкою
                                    </li>
                                    <li className={style.product__item}>
                                    Внутрішній штрих-код зразка та реагенту, підтримка LIS
                                    </li>
                                    <li className={style.product__item}>
                                    Кап-пірсинг необов'язковий
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Технічна специфікація</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Тестові канали: 100
                                    </li>
                                    <li className={style.product__item}>
                                    Принцип тестування: фотоелектричний детектор
                                    </li>
                                    <li className={style.product__item}>
                                    Контрольні показники: гематокрит (ГСТ) і швидкість осідання еритроцитів (ШОЕ)
                                    </li>
                                    <li className={style.product__item}>
                                    Час перевірки: ESR 30 хвилин (за замовчуванням) / 60 хвилин на вибір
                                    </li>
                                    <li className={style.product__item}>
                                    Діапазон визначення ШОЕ: (0-160) мм/год
                                    </li>
                                    <li className={style.product__item}>
                                    Діапазон тесту HCT: 0,2～1
                                    </li>
                                    <li className={style.product__item}>
                                     Об'єм проби: 1мл
                                    </li>
                                    <li className={style.product__item}>
                                    Незалежний тестовий канал із швидким тестуванням
                                    </li>
                                    <li className={style.product__item}>
                                    Зберігання: необмежено
                                    </li>
                                    <li className={style.product__item}>
                                    Екран: сенсорний РК-екран може відображати результати HCT і ESR
                                    </li>
                                    <li className={style.product__item}>
                                    Програмне забезпечення для управління даними, аналізу та звітності
                                    </li>
                                    <li className={style.product__item}>
                                    Вбудований принтер, зовнішній зчитувач штрих-кодів
                                    </li>
                                    <li className={style.product__item}>
                                    Передача даних: порт штрих-коду, порт USB / LIS, може підтримувати систему HIS / LIS
                                    </li>
                                    <li className={style.product__item}>
                                    Для пробірки потрібно: зовнішній діаметр φ(8±0,1) мм, висота пробірки не менше 110 мм
                                    </li>
                                    <li className={style.product__item}>
                                    Вага: 16 кг
                                    </li>
                                    <li className={style.product__item}>
                                    Розмір: (Д×Ш×В, мм) 560×360×300
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/suceeder/SD-1000.png" alt="Зовнішній вигляд ШОЕ аналізатору SD-1000"/>
                                <div className={style.additional__img__wrapper}>  
                                    <img className={style.additional__img} src="images/catalogue/suceeder/SD-1000-1.png" alt="Зовнішній вигляд ШОЕ аналізатору SD-1000" width="200px" />
                                    <img className={style.additional__img} src="images/catalogue/suceeder/SD-1000-2.png" alt="Зовнішній вигляд ШОЕ аналізатору SD-1000" width="200px"/>
                                </div>
                                <img className={style.product__img} src="images/catalogue/suceeder/SD-1000-3.png" alt="Зовнішній вигляд ШОЕ аналізатору SD-1000"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Cta/>
        </>
    )
}

export default Succeeder;