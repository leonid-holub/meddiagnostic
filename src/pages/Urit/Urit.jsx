import style from './Urit.module.scss';
import Cta from '../../components/Cta/Cta';
import Heading from '../../components/Company/Heading/Heading';
import { BsGift, BsGear, BsHandThumbsUp } from "react-icons/bs";
import { SlDiamond } from "react-icons/sl";
import { TbTargetArrow, TbDeviceDesktopAnalytics } from "react-icons/tb";
import { GiSunRadiations, GiSplashyStream, GiVibratingShield, GiChart} from "react-icons/gi";
import { FaUncharted } from "react-icons/fa";
import { CiFloppyDisk } from "react-icons/ci";



const Urit = () => {
    
    return (
        <>
            <Heading index="3" src="images/urit/urit-2.jpg" alt='Дівчина працівник лабораторії біля обладнання' width="1200px"/>
            <section className={style.products}>
                <h2 className="visually-hidden">Продукція</h2>
                <h3 className={style.product__branch}>Гематологія</h3>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>АВТОМАТИЧНИЙ ГЕМАТОЛОГІЧНИЙ АНАЛІЗАТОР BH-6580</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Продуктивність до 150 т/год 
                                    </li>
                                    <li className={style.product__item}>
                                    Проточна цитометрія + технологія флуоресцентного фарбування нуклеїнових кислот 
                                    </li>
                                    <li className={style.product__item}>
                                    Перевершує гематологічний аналізатор «6-Part-Diff»
                                    </li>
                                    <li className={style.product__item}>
                                    44 параметри, що підлягають звіту, і 59 параметрів дослідження
                                    </li>
                                    <li className={style.product__item}>
                                    Нове рішення PLT-L забезпечує точність низької кількості PLT
                                    </li>
                                    <li className={style.product__item}>
                                    Модуль CS підтримує автоматичний повторний запуск ненормального зразка та перевірку рефлексу
                                    </li>
                                    <li className={style.product__item}>
                                    Точне та автоматичне визначення зразків із низьким вмістом лейкоцитів
                                    </li>
                                    <li className={style.product__item}>
                                    Сумісність із кількома типами пробірок для зразків (вакуумна пробірка для цільної крові, внутрішня оболонка капілярної крові, пробірка Сарштедта тощо)
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/BH-6580.png" alt="Зовнішній вигляд автоматичного гематологічного аналізатору BH-6580"/>
                            </div>
                        </div>
                        <div className={style.product__wrapper__bh6580}>
                            <ul className={style.product__list__bh6580}>
                                <li className={style.product__item__bh6580}>
                                    <div className={style.product__heading__bh6580}>
                                        <TbTargetArrow className={style.product__icon__bh6580}/>
                                        <h4 className={style.product__title__bh6580}>Точність</h4>
                                    </div> 
                                    <ul className={style.bh6580__list}>
                                        <li className={style.bh6580__item}>
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-precision-1.png" alt="Зображення ДНК" width="100px"/>                            
                                            <p className={style.bh6580__paragraph}>Цільове луоресцентне фарбування нуклеїнових кислот щоб точно ідентифікувати різні клітини</p>
                                        </li>
                                        <li className={style.bh6580__item}>
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-precision-2.png" alt="Зображення методу дослідження" width="100px"/>  
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-precision-3.png" alt="Зображення методу дослідження" width="100px"/>                          
                                            <p className={style.bh6580__paragraph}>Комбінація PLT-I, PLT-O та PLT-L, точно повідомляти про тромбоцити</p>
                                        </li>
                                        <li className={style.bh6580__item}>
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-precision-4.png" alt="Зображення методу дослідження" width="200px"/>
                                            <p className={style.bh6580__paragraph}>Точне та автоматичне виявлення низького рівня підрахунок лейкоцитів проби</p>
                                        </li>
                                        <li className={style.bh6580__item}>
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-precision-5.png" alt="Зображення методу дослідження" width="100px"/>                          
                                            <p className={style.bh6580__paragraph}>NRBC отримати в тесті CBC, уникати хибнопозитивного підрахунку WBC і зменшити частоту повторного виявлення</p>
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__bh6580}>
                                    <div className={style.product__heading__bh6580}>
                                        <BsGift className={style.product__icon__bh6580}/>
                                        <h4 className={style.product__title__bh6580}>Всеосяжність</h4>
                                    </div>
                                    <ul className={style.bh6580__list}>
                                        <li className={style.bh6580__item}>
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-totality-1.png" alt="Зображення методу дослідження" width="100px"/>                            
                                            <p className={style.bh6580__paragraph}>Всього 44 параметри, що підлягають звіту, включаючи параметри цільної крові та рідин організму</p>
                                        </li>
                                        <li className={style.bh6580__item}>
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-totality-2.png" alt="Зображення методу дослідження" width="100px"/>  
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-totality-3.png" alt="Зображення методу дослідження" width="100px"/>                          
                                            <p className={style.bh6580__paragraph}>Всього 7 режимів аналізу для зразків попереднього розчинника. Різноманітна чуттєва інформація тривоги</p>
                                        </li>
                                        <li className={style.bh6580__item}>
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-totality-4.png" alt="Зображення пробірок" width="100px"/>
                                            <p className={style.bh6580__paragraph}>Сумісний з різними типами пробірок для зразків</p>
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__bh6580}>
                                    <div className={style.product__heading__bh6580}>
                                        <BsGear className={style.product__icon__bh6580}/>
                                        <h4 className={style.product__title__bh6580}>Ефективність</h4>
                                    </div>
                                    <ul className={style.bh6580__list}>
                                            <li className={style.bh6580__item}>
                                                <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-efficiency-1.png" alt="Зображення методу дослідження" width="100px"/>                            
                                                <p className={style.bh6580__paragraph}>Пропускна здатність до 150S/H</p>
                                            </li>
                                            <li className={style.bh6580__item}>
                                                <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-efficiency-2.png" alt="Зображення методу дослідження" width="100px"/>  
                                                <p className={style.bh6580__paragraph}>Контроль якості в один клік. Сканування коду з поворотом на 360°</p>
                                            </li>
                                            <li className={style.bh6580__item}>
                                                <p className={style.bh6580__paragraph}>Модуль CS підтримує автоматичний повторний запуск ненормального зразка та перевірку рефлексу</p>
                                            </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__bh6580}>
                                    <div className={style.product__heading__bh6580}>
                                        <SlDiamond className={style.product__icon__bh6580}/>
                                        <h4 className={style.product__title__bh6580}>Цінні параметри</h4>
                                    </div>
                                    <ul className={style.bh6580__list}>
                                        <li className={style.bh6580__item}>
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-parameters-1.png" alt="Зображення методу дослідження" width="100px"/>                            
                                            <p className={style.bh6580__paragraph}>IMG(#,%) надає цінну допомогу щодо діагностики лейкемії або лейкемічної реакції</p>
                                        </li>
                                        <li className={style.bh6580__item}>
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-parameters-2.png" alt="Зображення методу дослідження" width="100px"/>                         
                                            <p className={style.bh6580__paragraph}>HFC(#,%) представляють інформацію про тривогу про бласти та атипові фоцити</p>
                                        </li>
                                        <li className={style.bh6580__item}>
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-parameters-3.png" alt="Зображення методу дослідження" width="100px"/>
                                            <p className={style.bh6580__paragraph}>RET(#,%), IRF, RHE інформація для кращого моніторингу анемії</p>
                                        </li>
                                        <li className={style.bh6580__item}>
                                            <img className={style.bh6580__img} src="images/catalogue/urit/BH-6580-parameters-4.png" alt="Зображення комахи яка п'є кров" width="100px"/>                          
                                            <p className={style.bh6580__paragraph}>lnR(#,%0) сповіщення про інфікування плазмодієм, пов'язаним з малярією</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>АВТОМАТИЧНИЙ ГЕМАТОЛОГІЧНИЙ АНАЛІЗАТОР BH-6180</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                        Продуктивність до 110 т/год
                                    </li>
                                    <li className={style.product__item}>
                                        Проточна цитометрія + технологія флуоресцентного фарбування нуклеїнових кислот 
                                    </li>
                                    <li className={style.product__item}>
                                        Єдине дослідження капілярної крові
                                    </li>
                                    <li className={style.product__item}>
                                        Перевершує гематологічний аналізатор «6-Part-Diff»
                                    </li>
                                    <li className={style.product__item}>
                                        44 параметри, що підлягають звіту, і 59 параметрів дослідження
                                    </li>
                                    <li className={style.product__item}>
                                        Нове рішення PLT-L забезпечує точність низької кількості PLT
                                    </li>
                                    <li className={style.product__item}>
                                        Модуль CS підтримує автоматичний повторний запуск ненормального зразка та перевірку рефлексу
                                    </li>
                                    <li className={style.product__item}>
                                        Точне та автоматичне визначення зразків із низьким вмістом лейкоцитів
                                    </li>
                                    <li className={style.product__item}>
                                        Сумісність із кількома типами пробірок для зразків (вакуумна пробірка для цільної крові, внутрішня оболонка капілярної крові, пробірка Сарштедта тощо)
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                            <img className={style.product__img} src="images/catalogue/urit/BH-6180.png" alt="Зовнішній вигляд автоматичного гематологічного аналізатору BH-6180"/>
                            </div>
                        </div>
                        <div className={style.product__wrapper__bh6180}>
                            <ul className={style.product__list__bh6180}>
                                <li className={style.product__item__bh6180}>
                                    <div className={style.product__heading__bh6180}>
                                        <TbTargetArrow className={style.product__icon__bh6180}/>
                                        <h4 className={style.product__title__bh6180}>Точність</h4>
                                    </div> 
                                    <ul className={style.bh6180__list}>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-precision-1.png" alt="Зображення ДНК" width="100px"/>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-precision-2.png" alt="Зображення методу дослідження" width="100px"/>                              
                                            <p className={style.bh6180__paragraph}>Цільове луоресцентне фарбування нуклеїнових кислот щоб точно ідентифікувати різні клітини</p>
                                        </li>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-precision-3.png" alt="Зображення методу дослідження" width="100px"/>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-precision-4.png" alt="Зображення методу дослідження" width="100px"/>                          
                                            <p className={style.bh6180__paragraph}>Комбінація PLT-I, PLT-O та PLT-L, точно повідомляти про тромбоцити</p>
                                        </li>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-precision-5.png" alt="Зображення методу дослідження" width="200px"/>                          
                                            <p className={style.bh6180__paragraph}>Точне та автоматичне виявлення низького рівня підрахунок лейкоцитів проби</p>
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__bh6180}>
                                    <div className={style.product__heading__bh6180}>
                                        <BsGift className={style.product__icon__bh6180}/>
                                        <h4 className={style.product__title__bh6180}>Всеосяжність</h4>
                                    </div>
                                    <ul className={style.bh6180__list}>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-totality-1.png" alt="Зображення методу дослідження" width="100px"/>                            
                                            <p className={style.bh6180__paragraph}>Всього 44 параметри, що підлягають звіту, включаючи параметри цільної крові та рідин організму</p>
                                        </li>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-totality-2.png" alt="Зображення методу дослідження" width="100px"/>  
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-totality-3.png" alt="Зображення методу дослідження" width="100px"/>                          
                                            <p className={style.bh6180__paragraph}>Всього 7 режимів аналізу для зразків попереднього розчинника. Різноманітна чуттєва інформація тривоги</p>
                                        </li>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-totality-4.png" alt="Зображення пробірок" width="100px"/>
                                            <p className={style.bh6180__paragraph}>Сумісний з різними типами пробірок для зразків</p>
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__bh6180}>
                                    <div className={style.product__heading__bh6180}>
                                        <BsHandThumbsUp className={style.product__icon__bh6180}/>
                                        <h4 className={style.product__title__bh6180}>Зручність</h4>
                                    </div>
                                    <ul className={style.bh6180__list}>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-comfort-1.png" alt="Зображення методу дослідження" width="100px"/>                            
                                            <p className={style.bh6180__paragraph}>Модуль CS підтримує автоматичний повторний запуск ненормального зразка та перевірку рефлексу</p>
                                        </li>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-comfort-2.png" alt="Зображення методу дослідження" width="100px"/>  
                                            <p className={style.bh6180__paragraph}>Автоматичне завантаження, змішування та відбір проб капілярної крові 
                                                <br/>- Вища ефективність виявлення
                                                <br/>- Уникайте нерівномірного змішування та зменшіть навантаження
                                                <br/>- Зручний для педіатричних пацієнтів і пацієнтів невідкладної допомоги
                                            </p>
                                        </li>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-comfort-3.png" alt="Зображення методу дослідження" width="100px"/>  
                                            <p className={style.bh6180__paragraph}>NRBC отримати в тесті CBC, уникайте помилкового підрахунку WBC позитивний і зменшити частоту повторного виявлення</p>
                                        </li>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-comfort-4.png" alt="Зображення методу дослідження" width="100px"/>  
                                            <p className={style.bh6180__paragraph}>Сканування коду, що обертається на 360°</p>
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__bh6180}>
                                    <div className={style.product__heading__bh6180}>
                                        <SlDiamond className={style.product__icon__bh6180}/>
                                        <h4 className={style.product__title__bh6180}>Цінні параметри</h4>
                                    </div>
                                    <ul className={style.bh6180__list}>
                                    <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-parameters-1.png" alt="Зображення методу дослідження" width="100px"/>                            
                                            <p className={style.bh6180__paragraph}>HPC(#,%) інформація для раннього скринінгу трансплантації органів відторгнення або визначити оптимальний час трансплантації HPC</p>
                                        </li>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-parameters-2.png" alt="Зображення методу дослідження" width="100px"/>                            
                                            <p className={style.bh6180__paragraph}>IMG(#,%) надає цінну допомогу щодо діагностики лейкемії або лейкемічної реакції</p>
                                        </li>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-parameters-3.png" alt="Зображення методу дослідження" width="100px"/>                         
                                            <p className={style.bh6180__paragraph}>HFC(#,%) представляють інформацію про тривогу про бласти та атипові фоцити</p>
                                        </li>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-parameters-4.png" alt="Зображення методу дослідження" width="100px"/>
                                            <p className={style.bh6180__paragraph}>RET(#,%), IRF, RHE інформація для кращого моніторингу анемії</p>
                                        </li>
                                        <li className={style.bh6180__item}>
                                            <img className={style.bh6180__img} src="images/catalogue/urit/BH-6180-parameters-5.png" alt="Зображення комахи яка п'є кров" width="100px"/>                          
                                            <p className={style.bh6180__paragraph}>lnR(#,%0) сповіщення про інфікування плазмодієм, пов'язаним з малярією</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                                <div className={style.product__description}>
                                    <h3 className={style.product__title}>АВТОМАТИЧНИЙ ГЕМАТОЛОГІЧНИЙ АНАЛІЗАТОР URIT-5500</h3>
                                    <ul className={style.product__list}>
                                        <li className={style.product__item}>
                                        34 параметри, включаючи RET%, RET#, IRF та параметри дослідження 
                                        </li>
                                        <li className={style.product__item}>
                                        Швидкість до 110 т/год  
                                        </li>
                                        <li className={style.product__item}>
                                        Автоматичний відбір проб, ємністю 120 проб
                                        </li>
                                        <li className={style.product__item}>
                                        3D-аналіз зображення т
                                        </li>
                                        <li className={style.product__item}>
                                        WBC 5-diff тільки з реагентом оболонки
                                        </li>
                                        <li className={style.product__item}>
                                        Вся комп'ютерна станція даних і дисплей
                                        </li>
                                        <li className={style.product__item}>
                                        Велика ємність зберігання: 200 000 зразків
                                        </li>
                                        <li className={style.product__item}>
                                        Підтримка LIS та HIS за допомогою протоколу HLH
                                        </li>
                                        <li className={style.product__item}>
                                        Лазерна багатовимірна класифікація клітин і технологія проточної цитометрії
                                        </li>
                                        <li className={style.product__item}>
                                        Подвійний режим для підрахунку лейкоцитів (підрахунок імпедансу та оптичний підрахунок)
                                        </li>
                                        <li className={style.product__item}>
                                        Висока стабільність, тривалий термін служби лазерів
                                        </li>
                                        <li className={style.product__item}>
                                        Система кількісного визначення обертального значення керамічного зразка (SRV) з високою точністю та ефективністю
                                        </li>
                                        <li className={style.product__item}>
                                        Внутрішній зчитувач штрих-кодів
                                        </li>
                                    </ul>
                                </div>
                                <div className={style.product__appearance}>
                                    <img className={style.product__img} src="images/catalogue/urit/URIT-5500.png" alt="Зовнішній вигляд повністю автоматичного гематологічного аналізатору URIT-5500"/>
                                </div>
                        </div>
                        <div className={style.product__wrapper__5500}>
                            <ul className={style.product__list__5500}>
                                <li className={style.product__item__5500}>
                                    <GiSunRadiations className={style.product__icon__5500}/>
                                    <h4 className={style.product__title__5500}>Лазерне розсіювання</h4>
                                </li>
                                <li className={style.product__item__5500}>
                                    <FaUncharted className={style.product__icon__5500}/>
                                    <h4 className={style.product__title__5500}>2D+ЗD грами</h4>
                                </li>
                                <li className={style.product__item__5500}>
                                    <GiSplashyStream className={style.product__icon__5500}/>
                                    <h4 className={style.product__title__5500}>Регулювання потоку оболонки</h4>
                                </li>
                                <li className={style.product__item__5500}>
                                    <CiFloppyDisk className={style.product__icon__5500}/>
                                    <h4 className={style.product__title__5500}>Управління даними</h4>
                                </li>
                                <li className={style.product__item__5500}>
                                    <TbTargetArrow className={style.product__icon__5500}/>
                                    <h4 className={style.product__title__5500}>Зразок поворотного клапана</h4>
                                </li>
                                <li className={style.product__item__5500}>
                                    <TbDeviceDesktopAnalytics className={style.product__icon__5500}/>
                                    <h4 className={style.product__title__5500}>Операційний інтерфейс</h4>
                                </li>
                                <li className={style.product__item__5500}>
                                    <GiVibratingShield className={style.product__icon__5500}/>
                                    <h4 className={style.product__title__5500}>Зразок поворотного клапана</h4>
                                </li>
                                <li className={style.product__item__5500}>
                                    <GiChart className={style.product__icon__5500}/>
                                    <h4 className={style.product__title__5500}>Рішення для контролю якості</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>АВТОМАТИЧНИЙ ГЕМАТОЛОГІЧНИЙ АНАЛІЗАТОР BH–5390</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Продуктивність до 90 т/год
                                    </li>
                                    <li className={style.product__item}>
                                    Тестування рідин організмуі: WBC-BF, RBC-BF, MN%, MN#, PMN%, PMN#, TC-BF# 
                                    </li>
                                    <li className={style.product__item}>
                                    Скринінг на лейкемію BLAST% і BLAST# (параметри дослідження) 
                                    </li>
                                    <li className={style.product__item}>
                                    Тест на ретикулоцити: RETIC_ABC, RETIC%, параметри IRF 49, 2 гістограми, 2 діаграми розсіювання та дві 3D стереограми
                                    </li>
                                    <li className={style.product__item}>
                                    Комбінація WIC та WOC для підрахунку WBC
                                    </li>
                                    <li className={style.product__item}>
                                    Ємність 600 000 зразків з усіма грамами
                                    </li>
                                    <li className={style.product__item}>
                                    Вбудований зчитувач штрих-кодів LIS і HIS доступні з протоколом HL7
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/BH-5390.png" alt="Зовнішній вигляд автоматичного гематологічного аналізатору BH–5390"/>
                            </div>
                        </div>
                        <div className={style.product__wrapper__bh5390}>
                            <ul className={style.product__list__bh5390}>
                                <li className={style.product__item__bh5390}>
                                    <img className={style.bh5390__img} src="images/catalogue/urit/BH-5390-2.png" alt="Зовнішній вигляд частини автоматичного гематологічного аналізатору BH–5390" width="200px"/>
                                </li>
                                <li className={style.product__item__bh5390}>
                                    <img className={style.bh5390__img} src="images/catalogue/urit/BH-5390-3.png" alt="Зовнішній вигляд частини автоматичного гематологічного аналізатору BH–5390" width="200px"/>
                                </li>
                                <li className={style.product__item__bh5390}>
                                    <img className={style.bh5390__img} src="images/catalogue/urit/BH-5390-4.png" alt="Зовнішній вигляд частини автоматичного гематологічного аналізатору BH–5390" width="200px"/>
                                </li>
                                <li className={style.product__item__bh5390}>
                                    <img className={style.bh5390__img} src="images/catalogue/urit/BH-5390-5.png" alt="Зовнішній вигляд частини автоматичного гематологічного аналізатору BH–5390" width="200px"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>РЕАГЕНТИ ДО ГЕМАТОЛОГІЧНИХ АНАЛІЗАТОРІВ</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Оригінальні реагенти забезпечують надійність та відстеження результатів тестів  
                                    </li>
                                    <li className={style.product__item}>
                                    Повна серія продуктів для використання на 3- та 5-компонентних гематологічних аналізаторах 
                                    </li>
                                    <li className={style.product__item}>
                                    Повна серія оригінальних 3- та 5-компонентних гематологічних контролів та калібраторів для забезпечення надійної якості та точності 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className={style.product__branch}>Біохімія</h3>
                <div className={style.product_even}>
                    <div className="container">
                    <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ПОВНІСТЮ АВТОМАТИЧНИЙ БІОХІМІЧНИЙ АНАЛІЗАТОР URIT-8210</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    330 т/год  
                                    </li>
                                    <li className={style.product__item}>
                                    90 реакційних кювет, 60 позицій для реагентів  
                                    </li>
                                    <li className={style.product__item}>
                                    71 позиція зразків, в т.ч позиція миючого засобу, стандартні позиції, позиції контролю якості, позиції STAT
                                    </li>
                                    <li className={style.product__item}>
                                    Автоматичне виявлення та вибір відповідних кювет
                                    </li>
                                    <li className={style.product__item}>
                                    Оптична система високої точності
                                    </li>
                                    <li className={style.product__item}>
                                    Подвійні міцні керамічні шприци без підключення, для забезпечення точності
                                    </li>
                                    <li className={style.product__item}>
                                    Нагрівання повітряної ванни для інкубації 37°С
                                    </li>
                                    <li className={style.product__item}>
                                    Підтримка інтерфейсу LIS
                                    </li>
                                    <li className={style.product__item}>
                                    Захист від зіткнення як у вертикальному, так і в горизонтальному напрямках, зупинка й автоматична сигналізація, один раз торкаючись бар’єру. Не впливає на попередні тести
                                    </li>
                                    <li className={style.product__item}>
                                    Цілодобова система безперервного охолодження для забезпечення реагенту при 2-8°С
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/URIT-8210.png" alt="Зовнішній вигляд повністю автоматичного біохімічного аналізатору URIT-8210"/>
                            </div>
                </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                    <h3 className={style.product__title}>ПОВНІСТЮ АВТОМАТИЧНИЙ БІОХІМІЧНИЙ АНАЛІЗАТОР URIT-8280</h3>
                                    <ul className={style.product__list}>
                                        <li className={style.product__item}>
                                        Довільний доступ, постійна 640T/H, 1000T/H з ISE
                                        </li>
                                        <li className={style.product__item}>
                                        120 реакційних позицій, 160 позицій реагентів, 99 позицій зразку, в т.ч. позиція миючого засобу, стандартні позиції, позиції контролю якості, позиції STAT
                                        </li>
                                        <li className={style.product__item}>
                                        Оптична система високої точності
                                        </li>
                                        <li className={style.product__item}>
                                        Міцні керамічні шприци, 4 окремих зонда, 2 високоефективних міксера
                                        </li>
                                        <li className={style.product__item}>
                                        24 години система охолодження без зупинки водяного циклу для зберігання реагентів при 2-8°С
                                        </li>
                                        <li className={style.product__item}>
                                        Металевий твердий нагрів для інкубації 37°С
                                        </li>
                                        <li className={style.product__item}>
                                        Підтримка інтерфейсу LIS
                                        </li>
                                        <li className={style.product__item}>
                                        Штрих-код за бажанням
                                        </li>
                                    </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/URIT-8280.png" alt="Зовнішній вигляд повністю автоматичного біохімічного аналізатору URIT-8280"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                    <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ПОВНІСТЮ АВТОМАТИЧНИЙ БІОХІМІЧНИЙ АНАЛІЗАТОР URIT-8460</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Нове покоління, нові технології, чудова продуктивність  
                                    </li>
                                    <li className={style.product__item}>
                                    Постійно 420 т/год, 600 т/год з ISE  
                                    </li>
                                    <li className={style.product__item}>
                                    78 позицій для зразків, 80 позицій для реагентів і 90 реакційних кювет
                                    </li>
                                    <li className={style.product__item}>
                                    Твердий прямий нагрів, менший час попереднього нагріву
                                    </li>
                                    <li className={style.product__item}>
                                    24 години безперервно, 2-8°С постійно без льоду охолоджувальна система
                                    </li>
                                    <li className={style.product__item}>
                                    Ціле ущільнення, статика, оптична система
                                    </li>
                                    <li className={style.product__item}>
                                    Зручне програмне забезпечення, проста в експлуатації
                                    </li>
                                    <li className={style.product__item}>
                                    Двонаправлена система LIS/HIS
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/URIT-8460.png" alt="Зовнішній вигляд повністю автоматичного біохімічного аналізатору URIT-8460"/>
                            </div>
                </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                    <h3 className={style.product__title}>НАПІВАВТОМАТИЧНИЙ БІОХІМІЧНИЙ АНАЛІЗАТОР URIT-880</h3>
                                    <ul className={style.product__list}>
                                        <li className={style.product__item}>
                                        Потужний і зручний дизайн
                                        </li>
                                        <li className={style.product__item}>
                                        Пам’ять для 30 000 результатів
                                        </li>
                                        <li className={style.product__item}>
                                        Внутрішній термопринтер 
                                        </li>
                                        <li className={style.product__item}>
                                        Забезпечення високоякісних результатів 
                                        </li>
                                        <li className={style.product__item}>
                                        Кварцова проточна комірка з високим коефіцієнтом пропускання 
                                        </li>
                                        <li className={style.product__item}>
                                        8 позицій інкубації з 25°C, 30°C, 37°C  і кімнатною температурою (опціонально) 
                                        </li>
                                        <li className={style.product__item}>
                                        Не потрібно додаткового термостату для води 
                                        </li>
                                        <li className={style.product__item}>
                                        Автоматичне очищення після кожного тесту
                                        </li>
                                    </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/URIT-880.png" alt="Зовнішній вигляд напівавтоматичного біохімічного аналізатору URIT-880"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                    <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>ПОВНІСТЮ АВТОМАТИЧНИЙ БІОХІМІЧНИЙ АНАЛІЗАТОР CA-80</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Потужний і зручний дизайн  
                                    </li>
                                    <li className={style.product__item}>
                                    Великий обсяг пам’яті - 30 000 результатів зберігання  
                                    </li>
                                    <li className={style.product__item}>
                                    Внутрішній термопринтер
                                    </li>
                                    <li className={style.product__item}>
                                    Забезпечення високоякісних результатів
                                    </li>
                                    <li className={style.product__item}>
                                    Зменшує споживання очищеної води за допомогою одноразових кювет
                                    </li>
                                    <li className={style.product__item}>
                                    Одноразова кювета дозволяє проводити імунологічні тести та тести на HbA1c
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/CA-80.png" alt="Зовнішній вигляд повністю автоматичного біохімічного аналізатору CA-80"/>
                            </div>
                </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>РЕАГЕНТИ ДО БIОХIМIЧНИХ АНАЛІЗАТОРІВ</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Реактиви для клінічної хімії зі схваленням FDA (США)  
                                    </li>
                                    <li className={style.product__item}>
                                    Автоматичне налаштування параметрів за допомогою штрих-коду для закритої системи  
                                    </li>
                                    <li className={style.product__item}>
                                    Наявність універсальних систем з готовими до використання комплектами 
                                    </li>
                                    <li className={style.product__item}>
                                    Доступність універсальних систем з комплектом readyko та оптом OEM 
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/reagenty.png" alt="Рука лаборанта в перчатці тримає пробірку"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className={style.product__branch}>Дослідження сечі</h3>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Аналізатор сечі Al-Libre US-1680</h3>
                                <p className={style.product__paragraph}>Перший у світі напівавтоматичний аналізатор сечі Al-Libre</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Компактний, все в одному дизайні:
                                    <br/> <span className={style.us1680__span}>300 T/год для хімічного аналізу </span>
                                    <br/> <span className={style.us1680__span}>120 T/год для аналізу осаду </span>
                                    <br/> <span className={style.us1680__span}>120 T/год як для хімії, так і для аналізу осаду </span>
                                    </li>
                                    <li className={style.product__item}>
                                    AL технологія (CNN, глибокого навчання)  
                                    </li>
                                    <li className={style.product__item}>
                                    20 параметрів авторозпізнавання: RBC, WBC, WBCC, SQEP, NSE, HYA, PAT, CAOX, URIC, YST, MUCS, SPRM, UNCX, STRUVITE, G1, COINS, GHOST, COCCI, BACILLUS, AMORPHOUS, і з’являться додаткові параметри автоматичної класифікації
                                    </li>
                                    <li className={style.product__item}>
                                    Відображення реального зображення стрічки
                                    </li>
                                    <li className={style.product__item}>
                                    ACR допомагає виявити захворювання нирок на ранній стадії
                                    </li>
                                    <li className={style.product__item}>
                                    SG, каламутність і колір з фізичного модуля
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/US-1680.png" alt="Зовнішній вигляд аналізатору сечі Al-Libre US-1680"/>
                            </div>
                        </div>
                        <div className={style.product__wrapper__us1680}>
                            <ul className={style.product__list__us1680}>
                                <li className={style.product__item__us1680}>
                                    <div className={style.product__heading__us1680}>
                                        <h4 className={style.product__title__us1680}>Найменший універсальний аналізатор сечі</h4>
                                    </div> 
                                    <ul className={style.us1680__list}>
                                        <li className={style.us1680__item}>
                                            Лише 640 мм по довжині
                                        </li>
                                        <li className={style.us1680__item}>
                                            Економія цінного простору лабораторії
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__us1680}>
                                    <div className={style.product__heading__us1680}>
                                        <h4 className={style.product__title__us1680}>Все в одному</h4>
                                    </div> 
                                    <ul className={style.us1680__list}>
                                        <li className={style.us1680__item}>
                                            Хімічний аналіз, аналіз осаду та фізичний аналіз в одному аналізаторі US-1680
                                        </li>
                                        <li className={style.us1680__item}>
                                            Одне прагнення, повний результат
                                        </li>
                                        <li className={style.us1680__item}>
                                            Міцний, але компактний
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__us1680}>
                                    <div className={style.product__heading__us1680}>
                                        <h4 className={style.product__title__us1680}>Менше значить більше</h4>
                                    </div> 
                                    <ul className={style.us1680__list}>
                                        <li className={style.us1680__item}>
                                            Звичайне споживання: лише оболонка та смужка
                                        </li>
                                        <li className={style.us1680__item}>
                                            Мінімальний об'єм зразка 1,5-2,0 мл
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__us1680}>
                                    <div className={style.product__heading__us1680}>
                                        <h4 className={style.product__title__us1680}>Новинки</h4>
                                    </div> 
                                    <ul className={style.us1680__list}>
                                        <li className={style.us1680__item}>
                                            Функція проколюючої трубки для запобігання зараженню аерозолем зразка COVID-19
                                        </li>
                                        <li className={style.us1680__item}>
                                            Нові фізичні параметри: провідність і осмоляльність
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__us1680}>
                                    <div className={style.product__heading__us1680}>
                                        <h4 className={style.product__title__us1680}>Добре і краще</h4>
                                    </div> 
                                    <ul className={style.us1680__list}>
                                        <li className={style.us1680__item}>
                                            Додатковий розширений лоток для попереднього зберігання та регенерації для розширення ємності зразків до 260
                                        </li>
                                        <li className={style.us1680__item}>
                                            Додатковий рефрактометр для забезпечення додаткової попередньої обробки для лабораторії з більшим робочим навантаженням
                                        </li>
                                        <li className={style.us1680__item}>
                                            Додатковий модуль ST для використання попередньої обробки зразків для більшої навантаженості лабораторії
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.product__item__us1680}>
                                    <div className={style.product__heading__us1680}>
                                        <h4 className={style.product__title__us1680}>Розумний і розумніший</h4>
                                    </div> 
                                    <ul className={style.us1680__list}>
                                        <li className={style.us1680__item}>
                                            Інтегроване програмне забезпечення для модифікації шаблону друку своїми руками
                                        </li>
                                        <li className={style.us1680__item}>
                                            Прапор інтелектуального аномального зразка
                                        </li>
                                        <li className={style.us1680__item}>
                                            Двонаправлена LIS для виконання порядку LIS для гнучкого тестування хімії, осаду або обох
                                        </li>
                                        <li className={style.us1680__item}>
                                           Функція автоматичного контролю якості
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                    <h3 className={style.product__title}>НАПІВАВТОМАТИЧНИЙ АНАЛІЗАТОР СЕЧІ US-500</h3>
                                    <p className={style.product__paragraph}>Перший у світі напівавтоматичний аналізатор сечі Al-Libre. Компактний. Хімія, осад і фіз аналіз в одному аналізаторі. Легке обслуговування.</p>
                                    <ul className={style.product__list}>
                                        <li className={style.product__item}>
                                        Тримач магнітної стрічки, легко завантажувати та розвантажувати
                                        </li>
                                        <li className={style.product__item}>
                                        Функція автоматичного очищення
                                        </li>
                                        <li className={style.product__item}>
                                        60 тестів / год для тесту на суху хімію  
                                        </li>
                                        <li className={style.product__item}>
                                        30 тестів / год для аналізу осаду 
                                        </li>
                                        <li className={style.product__item}>
                                        25 тестів / год для обох  
                                        </li>
                                        <li className={style.product__item}>
                                        Автоматизація мікроскопа з необробленим великим зображенням  
                                        </li>
                                        <li className={style.product__item}>
                                        Ідеальний вибір для малих і середніх лабораторій  
                                        </li>
                                        <li className={style.product__item}>
                                        Допомагає виявити пошкодження нирок на ранній стадії
                                        </li>
                                    </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/US-500.png" alt="Зовнішній вигляд напівавтоматичного аналізатору сечі US-500"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                    <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>НАПІВАВТОМАТИЧНИЙ АНАЛІЗАТОР URIT 560</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    До 600 т/год  
                                    </li>
                                    <li className={style.product__item}>
                                    До 14 параметрів, включаючи Cr, Ma, Ca, VitC і ACR  
                                    </li>
                                    <li className={style.product__item}>
                                    CIS детектори, швидші та точніші результати
                                    </li>
                                    <li className={style.product__item}>
                                    Введення більше інформації про пацієнта
                                    </li>
                                    <li className={style.product__item}>
                                    Зчитувач штрих-кодів (опція), сенсорний екран
                                    </li>
                                    <li className={style.product__item}>
                                    URIT UQ-10, UQ-11 і UQ-14 доступні для керування
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/URIT-560.png" alt="Зовнішній вигляд напівавтоматичного аналізатору URIT 560"/>
                            </div>
                </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                    <h3 className={style.product__title}>НАПІВАВТОМАТИЧНИЙ АНАЛІЗАТОР URIT 32A</h3>
                                    <ul className={style.product__list}>
                                        <li className={style.product__item}>
                                        80 т/год ■ Автоматичне розпізнавання типу смужки
                                        </li>
                                        <li className={style.product__item}>
                                        Кольоровий екран з фізичною кнопкою
                                        </li>
                                        <li className={style.product__item}>
                                        Живлення: 2 батарейками AA 
                                        </li>
                                        <li className={style.product__item}>
                                        До 14 параметрів, включаючи CR, MA, CA, VitC, ACR 
                                        </li>
                                        <li className={style.product__item}>
                                        Автоматична компенсація кольору сечі та впливу pH
                                        </li>
                                        <li className={style.product__item}>
                                        4 довжини хвилі світлодіодного колориметричного виявлення  
                                        </li>
                                    </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/URIT-32A.png" alt="Зовнішній вигляд напівавтоматичного аналізатору URIT 32A"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                    <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>НАПІВАВТОМАТИЧНИЙ АНАЛІЗАТОР URIT 32B</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    80 т/год   
                                    </li>
                                    <li className={style.product__item}>
                                    Автоматичне розпізнавання типу смужки  
                                    </li>
                                    <li className={style.product__item}>
                                    Кольоровий екран з сенсорною кнопкою
                                    </li>
                                    <li className={style.product__item}>
                                    Живлення: літієва батарея, що перезаряджається 
                                    </li>
                                    <li className={style.product__item}>
                                    До 14 параметрів, включаючи CR, MA, CA, VitC, ACR 
                                    </li>
                                    <li className={style.product__item}>
                                    Автоматична компенсація кольору сечі та впливу pH 
                                    </li>
                                    <li className={style.product__item}>
                                    4 довжини хвилі світлодіодної колориметрії 
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/urit/URIT-32B.png" alt="Зовнішній вигляд напівавтоматичного аналізатору URIT 32B"/>
                            </div>
                </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>РЕАГЕНТИ ДО АНАЛІЗАТОРІВ ДОСЛІДЖЕННЯ СЕЧІ</h3>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Смужка для сечі URIT 10G, 11G, 14G для аналізатора сечі URIT-560 та US-500, а також реагенти та витратні матеріали
                                    </li>
                                    <li className={style.product__item}>
                                    Смужка HC-ACR, HC-10T, HC-12TA, HC-14TA для аналізатора сечі URIT 32A / B / 
                                    </li>
                                    <li className={style.product__item}>
                                    Реагенти для напівавтоматичного аналізатора сечі. Реагенти для автоматичного аналізатора сечі
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img className={style.urit__map} src="images/catalogue/urit/urit-map.png" alt="Карта материків біло-блакитного кольору з позначеннями місць офісів компанії URIT" width="1280px"/>
                </div>
            </section>
            <Cta/>
        </>
    )
}

export default Urit;