import Button from "../Button/Button";
import style from "./Cta.module.scss";

const Cta = () => {

    return (
        <section className={style.cta__section}>
            <div className="container">
                <div className={style.cta__wrapper}>
                <h2 className={style.cta__title}>Дізнайся більше по телефону</h2>
                <p className={style.cta__paragraph}>Зроби замовлення або отримай безкоштовну консультацію від наших спеціалістів</p>
                <Button>Контакти</Button>
                </div>
            </div>
        </section>
    )
}

export default Cta;

