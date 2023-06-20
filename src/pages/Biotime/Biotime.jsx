import style from './Biotime.module.scss';
import CatalogueHero from '../../components/Catalogue/CatalogueHero/CatalogueHero';
import CatalogueCompanies from '../../components/Catalogue/CatalogueCompanies/CatalogueCompanies';
import Cta from '../../components/Cta/Cta';
import Heading from '../../components/Company/Heading/Heading';


const Biotime = () => {
    
    return (
        <>
            <Heading/>
            <section className={style.products}>
                <div className={style.product_odd}>
                    <div className="container">
                        <div className={style.product__wrapper}>
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
                                <img className={style.product__img} src="/public/images/catalogue/biotime/BIOT_YG_I.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Biotime;