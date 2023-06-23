import {BsArrowRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Companies from "../../Companies/Companies";
import style from "./CatalogueCompanies.module.scss";


const CatalogueCompanies = () => {

    return (
        <section className={style.catalogue__companies}>
            <div className="container">
                <h2 className="visually-hidden">Компанії які ми представляємо</h2>
                <div className={style.catalogue__companies__wrapper}>
                    <ul className={style.catalogue__companies__list}>
                        {Companies.map(({title, id, paragraph, src, url}) =>(
                        <li className={style.catalogue__companies__item} key={id}>
                            <div className={style.companies__item__wrapper}>
                                <img className={style.companies__item__img} src={src} alt="Company Biotime" width="545px"/>
                            </div>
                            <h3 className={style.companies__item__title}>{title}</h3>
                            <p className={style.companies__item__paragraph}>{paragraph}</p>
                            <Link className={style.companies__item__link} to={url}><p className={style.link__paragraph}>Продукція</p><BsArrowRight className={style.link__svg}/></Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CatalogueCompanies;