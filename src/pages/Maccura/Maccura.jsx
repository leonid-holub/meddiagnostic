import style from './Maccura.module.scss';
import Cta from '../../components/Cta/Cta';
import Heading from '../../components/Company/Heading/Heading';
import { useEffect } from 'react';

const Maccura = () => {
    useEffect(()=> {
        window.scroll(0, 0);
    })

    return (
        <>
            <Heading index="8" src="images/maccura/maccura-1.jpg" alt='Лаборант за роботою' width="960px"/>
            <section className={style.products}>
                <h2 className="visually-hidden">Продукція</h2>
                <h3 className={style.product__branch}>Гематологія</h3>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Автоматичний гематологічний аналізатор F810</h3>
                                <p className={style.product__paragraph}>Характеристики аналізатора
                                </p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Технологія виявлення: Імпедансний метод та проточна лазерна цитофлуориметрія для WBC, NRBC, RBC/PLT
                                    </li>
                                    <li className={style.product__item}>
                                    Режими виявлення: CBC, DIFF, NRBC, RET, PLTF, AWS, SR
                                    </li>
                                    <li className={style.product__item}>
                                    Режим забору зразка: Цільна кров, низький рівень лейкоцитів, попереднього розведення та наукового дослідження зразків
                                    </li>
                                    <li className={style.product__item}>
                                    Об’єм зразка: Режим цільної крові – 88 мкл. Режим попереднього розведення – 70 мкл
                                    </li>
                                    <li className={style.product__item}>
                                    Пропускна здатність: CBC+DIFF 100T/H, CBC+DIFF+RET+PLTF 47Т/Н, CBC+DIFF+RET 83T/H
                                    </li>
                                    <li className={style.product__item}>
                                    Автозавантаження: До 50-ти зразків
                                    </li>
                                    <li className={style.product__item}>
                                    Діапазон лінійності: WBC: 0~500x 109/L, RBC: 0-8.60×1012/L, HGB: 0-260g/L, PLT: 0~5000x109/L
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/maccura/F810-1.png" alt="Зовнішній вигляд автоматичного гематологічного аналізатору F880"/>
                            </div>
                        </div>
                        <div className={style.product__extra__appearance}>
                            <p className={style.product__paragraph}>Точність вимірювань
                            </p>
                            <table className={style.table}>
                                    <thead>
                                        <tr>
                                        <th className={style.table__th}>Параметр</th>
                                        <th className={style.table__th}>Діапазон вимірювання</th>
                                        <th className={style.table__th}>Точність %</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={style.table__td}>WBC</td>
                                            <td className={style.table__td}>≥3.50X10<span className={style.index}>9</span>/L</td>
                                            <td className={style.table__td}>≤2.5</td>
                                        </tr>
                                        <tr>
                                            <td className={style.table__td}>RBC</td>
                                            <td className={style.table__td}>≥3.50X10<span className={style.index}>12</span>/L</td>
                                            <td className={style.table__td}>≤2.5</td>
                                        </tr>
                                        <tr>
                                            <td className={style.table__td}>HGB</td>
                                            <td className={style.table__td}>110-180g/L</td>
                                            <td className={style.table__td}>≤1.0</td>
                                        </tr>
                                        <tr>
                                            <td className={style.table__td}>PLT</td>
                                            <td className={style.table__td}>≥100X10<span className={style.index}>9</span>/L</td>
                                            <td className={style.table__td}>≤4.0</td>
                                        </tr>
                                        <tr>
                                            <td className={style.table__td}>HCT/MCV</td>
                                            <td className={style.table__td}>30-50%(HCT) або 80-100fL(MCV)</td>
                                            <td className={style.table__td}>≤1.5(HCT)</td>
                                        </tr>
                                    </tbody>
                            </table>
                            <p className={style.product__paragraph}>Ефективний помічник</p>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Зразок: венозна кров, капілярна кров, попередньо розведена, рідини організму. <pre/>До 100 т/год (CBC+DIFF). До 83 т/год (CBC+RET). До 83 т/год (CBC+DIFF+RET). До 47т/год (CBC+DIFF+RET+PLTF ). До 17 т/год (SR)                                
                                    </li>
                            </ul>
                            <p className={style.product__paragraph}>Візуальне керування реактивами</p>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Вбудована позиція реагенту для барвника. Спеціальна конструкція завантаження: краще розділення, швидка та безпечна заміна                             
                                    </li>
                            </ul>
                            <p className={style.product__paragraph}>Автозавантажувач зразків</p>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    50 позицій для зразків. Вбудований сканер штрихкоду, автоматично повертає та регулює положення штрих-коду для ідентифікації пробірки                             
                                    </li>
                            </ul>
                            <p className={style.product__paragraph}>Вишуканий дизайн інтерфейсу</p>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Просте у використанні програмне забезпечення. Інтуїтивно зрозумілий інтерфейс. Доступні декілька варіантів персоналізованих інтерфейсів
                                    </li>
                            </ul>
                            <p className={style.product__paragraph}>Детекція</p>
                            <ul className={style.product__list}>
                                    <p className={style.paragraph}>3-е покоління флуоресцентних барвників для нуклеїнових кислот</p>
                                    <li className={style.product__item}>
                                        Спеціальний флуоресцентний фарбувальний розчин м’яко забарвлює 
                                        ДНК або РНК, тоді як реагенти хімічного фарбування 2-го покоління 
                                        забарвлюють частинки/ферменти в цитоплазмі, а оскільки різні клітини 
                                        мають різну концентрацію ДНК або РНК, це призводить до різної 
                                        інтенсивності забарвлення, то чим більша кількість ДНК або РНК, тим 
                                        сильніший флуоресцентний сигнал
                                    </li>
                                    <li className={style.product__item}>
                                    Оскільки нуклеїнова кислота є найбільш специфічною частиною клітини, 
                                    то 3-е покоління більш чутливе до диференціації різних лейкоцитів, 
                                    особливо аномальних клітин
                                    </li>
                                    <li className={style.product__item}>
                                    Поєднання технології фарбування 3-го покоління з проточною 
                                    цитометрією:<pre/>1) використання системи гідрофокусування, яка забезпечує 
                                    проходження клітин у потоці поодинці; <pre/>2) опроміненні клітини лазерним 
                                    випромінюванням і кожна клітина, що проходить, опромінюється трьома 
                                    променями світла з трьох напрямків, щоб отримати інформацію про 
                                    розмір, зернистість і нуклеїнову кислоту; <pre/>3) реєстрації сигналів 
                                    світлорозсіювання та флуоресценції від кожної клітини
                                    </li>
                                    <li className={style.product__item}>
                                    FSL(пряме розсіяне світло) відображає розмір клітин
                                    <pre/>SSC(бічне розсіяне світло) в основному відображає розмір і кількість 
                                    частинок у клітинах
                                    <pre/>SFL(бічне флуоресцентне світло) відображає концентрацію нуклеїнової 
                                    кислоти
                                    </li>
                            </ul>
                            <p className={style.product__paragraph}>Декілька каналів детекції</p>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Канал FCW - результати лейкоцитів, базофілів і ядерних еритроцитів. Базофіли і NRBC визначаються без додаткових реагентів і витрат
                                    </li>
                                    <li className={style.product__item}>
                                    Канал FCD - не тільки надає результати диференціального аналізу лейкоцитів з 6 частин (з незрілими гранулоцитами), але і 35 дослідницьких параметри
                                    </li>
                                    <li className={style.product__item}>
                                    Канал FCR - результати 7-ми параметрів ретикулоцитів та підрахунок PLT (PLT-O). PLT-O може підвищити точність підрахунку зразків з низьким вмістом тромбоцитів
                                    </li>
                            </ul>
                            <p className={style.paragraph}>В RBC/PLT камері використана технологія проточної цитофлуориметрії, що не тільки дозволяє отримати більш точні результати RBC/PLT, але й забезпечує дуже низький рівень засмічення.</p>
                            <p className={style.product__paragraph}>Режим LW
                            <pre/>Низький рівень лейкоцитів
                            </p>
                            <p className={style.paragraph}>Повторна обробка, зміна каналів, збільшення підрахунку в 3 рази. Збільшення кількості підрахованих частинок не тільки підвищує точність виявлення низьких значень, але також дозволяє класифікувати лейкоцити в зразках з низьким вмістом лейкоцитів і чутливо виявляти юні клітини в них, щоб уникнути непотрібних ризиків</p>
                            <p className={style.product__paragraph}>Режим SR
                            <pre/>Рідини організму
                            </p>
                            <p className={style.paragraph}>Крім зразка крові, F810 також має функцію тестування біологічних рідин без використання спеціальних реагентів. Різні типи рідин організму включаючи перитонеальну рідину, плевральну рідину, спинномозкову рідину (СМР) і синовіальну рідину</p>

                        </div>
                    </div>
                </div>
                <div className={style.product_even}>
                    <div className="container">
                        <div className={style.product__even__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Автоматичний гематологічний аналізатор F880</h3>
                                <p className={style.product__paragraph}>Характеристики аналізатора
                                </p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Технологія виявлення: Імпедансний метод та проточна лазерна цитофлуориметрія для WBC, NRBC, RBC/PLT
                                    </li>
                                    <li className={style.product__item}>
                                    Режими виявлення: CBC, DIFF, NRBC, RET, PLTF, AWS, SR
                                    </li>
                                    <li className={style.product__item}>
                                    Режим забору зразка: Цільна кров, низький рівень лейкоцитів, попереднього розведення та наукового дослідження зразків
                                    </li>
                                    <li className={style.product__item}>
                                    Об’єм зразка: Режим цільної крові – 88 мкл. Режим попереднього розведення – 70 мкл
                                    </li>
                                    <li className={style.product__item}>
                                    Пропускна здатність: CBC+DIFF 100T/H, CBC+DIFF+RET+PLTF 47Т/Н, CBC+DIFF+RET 83T/H, CBC+DIFF+RET+AWS 71Т/Н, CBC+DIFF+RET+PLTF+AWS 47Т/Н
                                    </li>
                                    <li className={style.product__item}>
                                    Параметри звіту (загалом 37) + 35 дослідницьких параметри: <pre/>Leukocyte:WBC,NEUT(#,%),LYMPH(#,%),MONO(#,%),EO(#,%),BASO(#,%),IG(#,%); <pre/>Erythrocyte: RBC,HGB,HCT,MCV,MCH,MCHC,RDW-SD,RDW-CV,NRBC(#,%); <pre/>Platelets: PLT,PDW,MPV,P-LCR,P-LCC,PCT,IPF; <pre/>Reticulocytes: RET(#,%),IRF,LFR,MFR,HFR,RET-He
                                    </li>
                                    <li className={style.product__item}>
                                    Автозавантаження: До 50-ти зразків
                                    </li>
                                    <li className={style.product__item}>
                                    Діапазон лінійності: WBC: 0~500x 109/L, RBC: 0-8.60×1012/L, HGB: 0-260g/L, PLT: 0~5000x109/L
                                    </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                <img className={style.product__img} src="images/catalogue/maccura/F810-1.png" alt="Зовнішній вигляд автоматичного гематологічного аналізатору F880"/>
                            </div>
                        </div>
                        <div className={style.product__extra__appearance}>
                            <p className={style.product__paragraph}>Точність вимірювань
                            </p>
                            <table className={style.table}>
                                    <thead>
                                        <tr>
                                        <th className={style.table__th}>Параметр</th>
                                        <th className={style.table__th}>Діапазон вимірювання</th>
                                        <th className={style.table__th}>Точність %</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={style.table__td}>WBC</td>
                                            <td className={style.table__td}>≥3.50X10<span className={style.index}>9</span>/L</td>
                                            <td className={style.table__td}>≤2.5</td>
                                        </tr>
                                        <tr>
                                            <td className={style.table__td}>RBC</td>
                                            <td className={style.table__td}>≥3.50X10<span className={style.index}>12</span>/L</td>
                                            <td className={style.table__td}>≤2.5</td>
                                        </tr>
                                        <tr>
                                            <td className={style.table__td}>HGB</td>
                                            <td className={style.table__td}>110-180g/L</td>
                                            <td className={style.table__td}>≤1.0</td>
                                        </tr>
                                        <tr>
                                            <td className={style.table__td}>PLT</td>
                                            <td className={style.table__td}>≥100X10<span className={style.index}>9</span>/L</td>
                                            <td className={style.table__td}>≤4.0</td>
                                        </tr>
                                        <tr>
                                            <td className={style.table__td}>HCT/MCV</td>
                                            <td className={style.table__td}>30-50%(HCT) або 80-100fL(MCV)</td>
                                            <td className={style.table__td}>≤1.5(HCT)</td>
                                        </tr>
                                    </tbody>
                            </table>
                            <p className={style.product__paragraph}>Ефективний помічник</p>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Зразок: венозна кров, капілярна кров, попередньо розведена, рідини організму. <pre/>До 100 т/год (CBC+DIFF). До 83 т/год (CBC+RET). До 83 т/год (CBC+DIFF+RET). До 47т/год (CBC+DIFF+RET+PLTF ). До 17 т/год (SR)                                
                                    </li>
                            </ul>
                            <p className={style.product__paragraph}>Візуальне керування реактивами</p>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Вбудована позиція реагенту для барвника. Спеціальна конструкція завантаження: краще розділення, швидка та безпечна заміна                             
                                    </li>
                            </ul>
                            <p className={style.product__paragraph}>Автозавантажувач зразків</p>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    50 позицій для зразків. Вбудований сканер штрихкоду, автоматично повертає та регулює положення штрих-коду для ідентифікації пробірки                             
                                    </li>
                            </ul>
                            <p className={style.product__paragraph}>Вишуканий дизайн інтерфейсу</p>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Просте у використанні програмне забезпечення. Інтуїтивно зрозумілий інтерфейс. Доступні декілька варіантів персоналізованих інтерфейсів
                                    </li>
                            </ul>
                            <p className={style.product__paragraph}>Детекція</p>
                            <ul className={style.product__list}>
                                    <p className={style.paragraph}>3-е покоління флуоресцентних барвників для нуклеїнових кислот</p>
                                    <li className={style.product__item}>
                                        Спеціальний флуоресцентний фарбувальний розчин м’яко забарвлює 
                                        ДНК або РНК, тоді як реагенти хімічного фарбування 2-го покоління 
                                        забарвлюють частинки/ферменти в цитоплазмі, а оскільки різні клітини 
                                        мають різну концентрацію ДНК або РНК, це призводить до різної 
                                        інтенсивності забарвлення, то чим більша кількість ДНК або РНК, тим 
                                        сильніший флуоресцентний сигнал
                                    </li>
                                    <li className={style.product__item}>
                                    Оскільки нуклеїнова кислота є найбільш специфічною частиною клітини, 
                                    то 3-е покоління більш чутливе до диференціації різних лейкоцитів, 
                                    особливо аномальних клітин
                                    </li>
                                    <li className={style.product__item}>
                                    Поєднання технології фарбування 3-го покоління з проточною 
                                    цитометрією:<pre/>1) використання системи гідрофокусування, яка забезпечує 
                                    проходження клітин у потоці поодинці; <pre/>2) опроміненні клітини лазерним 
                                    випромінюванням і кожна клітина, що проходить, опромінюється трьома 
                                    променями світла з трьох напрямків, щоб отримати інформацію про 
                                    розмір, зернистість і нуклеїнову кислоту; <pre/>3) реєстрації сигналів 
                                    світлорозсіювання та флуоресценції від кожної клітини
                                    </li>
                                    <li className={style.product__item}>
                                    FSL(пряме розсіяне світло) відображає розмір клітин
                                    <pre/>SSC(бічне розсіяне світло) в основному відображає розмір і кількість 
                                    частинок у клітинах
                                    <pre/>SFL(бічне флуоресцентне світло) відображає концентрацію нуклеїнової 
                                    кислоти
                                    </li>
                            </ul>
                            <p className={style.product__paragraph}>Декілька каналів детекції</p>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Канал FCW - результати лейкоцитів, базофілів і ядерних еритроцитів. Базофіли і NRBC визначаються без додаткових реагентів і витрат
                                    </li>
                                    <li className={style.product__item}>
                                    Канал FCD - не тільки надає результати диференціального аналізу лейкоцитів з 6 частин (з незрілими гранулоцитами), але і 35 дослідницьких параметри
                                    </li>
                                    <li className={style.product__item}>
                                    Канал FCR - результати 7-ми параметрів ретикулоцитів та підрахунок PLT (PLT-O). PLT-O може підвищити точність підрахунку зразків з низьким вмістом тромбоцитів
                                    </li>
                                    <li className={style.product__item}>
                                    Канал FCP - результати фракції незрілих тромбоцитів
                                    </li>
                                    <li className={style.product__item}>
                                    Канал FCA - аналізатор F880 може повторно перевірити і підтвердити аномальні клітини каналу DIFF і відрізнити аномальні мієлоїдні та гонорейні клітини
                                    </li>
                            </ul>
                            <p className={style.paragraph}>В RBC/PLT камері використана технологія проточної цитофлуориметрії, що не тільки дозволяє отримати більш точні результати RBC/PLT, але й забезпечує дуже низький рівень засмічення.</p>
                            <p className={style.product__paragraph}>Режим LW
                            <pre/>Низький рівень лейкоцитів
                            </p>
                            <p className={style.paragraph}>Повторна обробка, зміна каналів, збільшення підрахунку в 3 рази. Збільшення кількості підрахованих частинок не тільки підвищує точність виявлення низьких значень, але також дозволяє класифікувати лейкоцити в зразках з низьким вмістом лейкоцитів і чутливо виявляти юні клітини в них, щоб уникнути непотрібних ризиків</p>
                            <p className={style.product__paragraph}>Режим SR
                            <pre/>Рідини організму
                            </p>
                            <p className={style.paragraph}>Крім зразка крові, F880 також має функцію тестування біологічних рідин без використання спеціальних реагентів. Різні типи рідин організму включаючи перитонеальну рідину, плевральну рідину, спинномозкову рідину (СМР) і синовіальну рідину</p>

                        </div>
                        <div className={style.product__extra__appearance}>
                            <p className={style.product__paragraph}>Можливості</p>
                            <p className={style.product__addition}>Одиничний прототип F810, F880</p>
                            <img className={style.product__extra__img} src="images/catalogue/maccura/F810-1.png" alt="Зовнішній вигляд автоматичного гематологічного аналізатору F880"/>
                            <p className={style.product__addition}>F 9000 Автоматична лінія гематологічного аналізу зі видкістю тестування до 900 тестів на годину. Вертикальна (корпусна) лінія збірки </p>
                            <img className={style.product__extra__img} src="images/catalogue/maccura/F810-2.jpg" alt="Зовнішній вигляд автоматичної лінії гематологічного аналізу F 9000"/>
                            <iframe className={style.product__video__F9000} width="100%" height="100%" src="https://www.youtube.com/embed/fTdftmeYKSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__odd__wrapper}>
                            <div className={style.product__description}>
                                <h3 className={style.product__title}>Автоматичний імунохемілюмінесцентний аналізатор I1000</h3>
                                <p className={style.product__paragraph}>Декілька каналів детекції</p>
                                <ul className={style.product__list}>
                                        <li className={style.product__item}>
                                        До 180 тестів на годину
                                        </li>
                                        <li className={style.product__item}>
                                        Лише 14 хвилин до першого результату
                                        </li>
                                        <li className={style.product__item}>
                                        Підтримка 3-х годинної роботи без нагляду
                                        </li>
                                        <li className={style.product__item}>
                                        Підтримка 30 онлайн-тестувань
                                        </li>
                                        <li className={style.product__item}>
                                        Безперервне завантаження зразка з 50 позиціями
                                        </li>
                                        <li className={style.product__item}>
                                        Зручний, інтуїтивно зрозумілий дизайн інтерфейсу
                                        </li>
                                        <li className={style.product__item}>
                                        Розмір: 1200 мм (Д) x 755 мм (Ш) x 675 мм (В). Вага: 170 кг
                                        </li>
                                </ul>
                            </div>
                            <div className={style.product__appearance}>
                                {/* <img className={style.product__img} src="images/catalogue/maccura/I1000-2.jpg" alt="Зовнішній вигляд автоматичного імунохемілюмінесцентного аналізатора I 1000"/> */}
                                <img className={style.product__img} src="images/catalogue/maccura/I1000-1.png" alt="Зовнішній вигляд автоматичного імунохемілюмінесцентного аналізатора I 1000"/>
                            </div>
                        </div>
                        <div className={style.product__extra__appearance}>
                        <iframe className={style.product__video__I1000} width="100%" height="100%" src="https://www.youtube.com/embed/bd34HGUxxKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <p className={style.product__paragraph}>Комфорт</p>
                                <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Вишуканий дизайн інтерфейсу, інтуїтивно зрозумілий користувачу                                
                                    </li>
                                    <li className={style.product__item}>
                                    Моніторинг у реальному часі кожного зразка, кожного тесту, кожного витратного матеріалу                               
                                    </li>
                                    <li className={style.product__item}>
                                    Двонаправлений зв'язок через LIS
                                    </li>
                                    <li className={style.product__item}>
                                    Зручна рутинна операція. Автоматичний запуск і відключення. Один клік, щоб завершити планове обслуговування. Один клік для перевірки приладу                              
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Реактиви</p>
                                <ul className={style.list__I1000}> 
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>COVID 19</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            SARS-CoV-2 IgG                               
                                            </li>
                                            <li className={style.product__item}>
                                            SARS-CoV-2 IgM                               
                                            </li>
                                            <li className={style.product__item}>
                                            SARS-CoV-2 наб
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Інфекційні захворювання</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            HBsAg                              
                                            </li>
                                            <li className={style.product__item}>
                                            HBsAb                            
                                            </li>
                                            <li className={style.product__item}>
                                            HBeAg
                                            </li>
                                            <li className={style.product__item}>
                                            HBeAb
                                            </li>
                                            <li className={style.product__item}>
                                            HBcAb
                                            </li>
                                            <li className={style.product__item}>
                                            ВІЛ Ag/Ab
                                            </li>
                                            <li className={style.product__item}>
                                            Анти-HCV
                                            </li>
                                            <li className={style.product__item}>
                                            Анти-TP
                                            </li>
                                            <li className={style.product__item}>
                                            HBV preS1-Ag
                                            </li>
                                            <li className={style.product__item}>
                                            Інші (TORCH)
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Щитоподібна залоза</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            ТТГ                              
                                            </li>
                                            <li className={style.product__item}>
                                            TT4                          
                                            </li>
                                            <li className={style.product__item}>
                                            TT3
                                            </li>
                                            <li className={style.product__item}>
                                            FT3
                                            </li>
                                            <li className={style.product__item}>
                                            FT4
                                            </li>
                                            <li className={style.product__item}>
                                            Тиреоглобулін
                                            </li>
                                            <li className={style.product__item}>
                                            Анти-ТГ
                                            </li>
                                            <li className={style.product__item}>
                                            Анти-ТПО
                                            </li>
                                            <li className={style.product__item}>
                                            Кальцитонін
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Гормони</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            LH                             
                                            </li>
                                            <li className={style.product__item}>
                                            PRL                                                   
                                            </li>
                                            <li className={style.product__item}>
                                            β-ХГЛ
                                            </li>
                                            <li className={style.product__item}>
                                            Тестостерон
                                            </li>
                                            <li className={style.product__item}>
                                            Прогестерон
                                            </li>
                                            <li className={style.product__item}>
                                            E2
                                            </li>
                                            <li className={style.product__item}>
                                            ФСГ
                                            </li>
                                            <li className={style.product__item}>
                                            hGH
                                            </li>
                                            <li className={style.product__item}>
                                            AMH
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Запалення</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            ІЛ-6                            
                                            </li>
                                            <li className={style.product__item}>
                                            PCT                                                  
                                            </li>
                                            <li className={style.product__item}>
                                            RF
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Гіпертензія</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            Кортизол                            
                                            </li>
                                            <li className={style.product__item}>
                                            АКТГ                                              
                                            </li>
                                            <li className={style.product__item}>
                                            Ренін
                                            </li>
                                            <li className={style.product__item}>
                                            Альдостерон
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Серцеві</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            CK-MB                            
                                            </li>
                                            <li className={style.product__item}>
                                            cTnI                                           
                                            </li>
                                            <li className={style.product__item}>
                                            Міо
                                            </li>
                                            <li className={style.product__item}>
                                            NT-proBNP
                                            </li>
                                            <li className={style.product__item}>
                                            D-Dimer
                                            </li>
                                            <li className={style.product__item}>
                                            GDF-15
                                            </li>
                                            <li className={style.product__item}>
                                            Hs-CRP
                                            </li>
                                            <li className={style.product__item}>
                                            BNP
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Онкомаркери</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            AFP                           
                                            </li>
                                            <li className={style.product__item}>
                                            CEA                                        
                                            </li>
                                            <li className={style.product__item}>
                                            TPSA
                                            </li>
                                            <li className={style.product__item}>
                                            FPSA
                                            </li>
                                            <li className={style.product__item}>
                                            CA125
                                            </li>
                                            <li className={style.product__item}>
                                            CA-242
                                            </li>
                                            <li className={style.product__item}>
                                            CA 72-4
                                            </li>
                                            <li className={style.product__item}>
                                            CA15-3
                                            </li>
                                            <li className={style.product__item}>
                                            CA19-9
                                            </li>
                                            <li className={style.product__item}>
                                            CA50
                                            </li>
                                            <li className={style.product__item}>
                                            CYFRA21-1
                                            </li>
                                            <li className={style.product__item}>
                                            pro-GRP
                                            </li>
                                            <li className={style.product__item}>
                                            SCC
                                            </li>
                                            <li className={style.product__item}>
                                            NSE
                                            </li>
                                            <li className={style.product__item}>
                                            HE4
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Аутоімунні</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            Anti-CCP                        
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-Jo-1                                    
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-Sm/RNP
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-Sm
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-SSA(Ro60)
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-SSB(La)
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-Nuc
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-CENP-B 
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Аутоімунні</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            Anti-CCP                        
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-Jo-1                                    
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-Sm/RNP
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-Sm
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-SSA(Ro60)
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-SSB(La)
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-Nuc
                                            </li>
                                            <li className={style.product__item}>
                                            Anti-CENP-B 
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Глікометаболізм</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            C-Пептид                       
                                            </li>
                                            <li className={style.product__item}>
                                            Інсулін                                   
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Кістковий метаболізм</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            iPTH                       
                                            </li>
                                            <li className={style.product__item}>
                                            25-OH Вітамін D                                   
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Анемія</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            Феритин                      
                                            </li>
                                            <li className={style.product__item}>
                                            Віт В12                                  
                                            </li>
                                            <li className={style.product__item}>
                                            Фолати                                 
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <table className={style.table}>
                                    <thead>
                                        <tr>
                                        <th className={style.table__th}>Бренд</th>
                                        <th className={style.table__th}>Звичайні реагенти</th>
                                        <th className={style.table__th}>AMH</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={style.table__td}>Міндрей</td>
                                            <td className={style.table__td}>28 днів</td>
                                            <td className={style.table__td}>56 днів</td>
                                        </tr>
                                        <tr>
                                            <td className={style.table__td}>Снайб</td>
                                            <td className={style.table__td}>28 днів</td>
                                            <td className={style.table__td}>28 днів</td>
                                        </tr>
                                        <tr>
                                            <td className={style.table__td}>Маккура</td>
                                            <td className={style.table__td}>35 днів</td>
                                            <td className={style.table__td}>60 днів</td>
                                        </tr>
                                    </tbody>
                            </table>
                            <ul className={style.product__list}>
                                    <li className={style.product__item}>
                                    Бортова стійкість всіх реагентів становить не менше 35 днів                              
                                    </li>
                                    <li className={style.product__item}>
                                    Підтримка зразків плазми/сироватки, уникнення багаторазового відбору проб                               
                                    </li>
                                    <li className={style.product__item}>
                                    Невеликий об'єм зразка, необхідний для кожного тестування
                                    </li>
                                    <li className={style.product__item}>
                                    Широкий діапазон лінійності                           
                                    </li>
                                </ul>
                                <p className={style.product__paragraph}>Наші переваги</p>
                                <ul className={style.list__I1000}> 
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Висока ефективність</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            Пропускна здатність                              
                                            </li>
                                            <li className={style.product__item}>
                                            Реагент/Кювети/Зразки/Завантаження витратних матеріалів                          
                                            </li>
                                            <li className={style.product__item}>
                                            Покращена сепарація, менше залишків
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Зручний для користувача</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            Інтуїтивно зрозуміле програмне забезпечення                              
                                            </li>
                                            <li className={style.product__item}>
                                            Моніторинг у реальному часі                         
                                            </li>
                                            <li className={style.product__item}>
                                            Зручна рутинна операція
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Численні інновації</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            Багаторазова система магнітної сепарації                            
                                            </li>
                                            <li className={style.product__item}>
                                            Безконтактне змішування для інкубації                                                  
                                            </li>
                                            <li className={style.product__item}>
                                            Змішування реагентів в реальному часі
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Акридиновий ефір</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            Передовий принцип, прямий CLIA                          
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={style.item__I1000}>
                                        <p className={style.paragraph}>Численні тестові завдання</p>
                                        <ul className={style.product__list}>
                                            <li className={style.product__item}>
                                            Широке тестове меню                           
                                            </li>
                                            <li className={style.product__item}>
                                            Тривала стійкість на борту                                             
                                            </li>
                                            <li className={style.product__item}>
                                            Низький об'єм зразка
                                            </li>
                                            <li className={style.product__item}>
                                            Широка лінійність
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

export default Maccura;