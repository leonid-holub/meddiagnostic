import style from "./CatalogueHero.module.scss";


const CatalogueHero = () => {

    return (
        <section className={style.catalogue__hero}>
            <div className="container">
                <div className={style.catalogue__hero__wrapper}>
                    <h2 className={style.catalogue__hero__title}>Наша продукція</h2>
                    <p className={style.catalogue__hero__paragraph}>Ми пропонуємо широкий спектр медичного обладнання та  лабораторної продукції надаючи інструменти та технології, щоб зробити процес від замовлення до отримання зручним та швидким.</p>
                    <a className={style.catalogue__hero__link} href="files/Meddiagnostic catalogue.pdf" target="_blank" >
                        <p className={style.link__paragraph}>Каталог</p>
                        <svg className={style.link__img} width="32" height="32">
                            <use href="images/icons.svg#file-pdf"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CatalogueHero;
