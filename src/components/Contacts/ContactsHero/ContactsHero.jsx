import style from "./ContactsHero.module.scss";


const ContactsHero = () => {

    return (
        <section className={style.contacts__hero}>
            <div className="container">
                <div className={style.contacts__hero__wrapper}>
                    <h2 className={style.contacts__hero__title}>Наша команда</h2>
                </div>
            </div>
        </section>
    )
}

export default ContactsHero;
