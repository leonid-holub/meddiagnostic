import style from "./ContactsBody.module.scss";


const ContactsBody = () => {

    return (
        <section className={style.contacts__body}>
            <div className="container">
                <div className={style.contacts__body__wrapper}>
                <h2 className={style.contacts__title}>Директор</h2>
                <p className={style.contacts__paragraph}>Харченко Олександр: <span className={style.nowrap}>+380 97 394 0101</span></p>
                <h2 className={style.contacts__title}>Технічний директор</h2>
                <p className={style.contacts__paragraph}>Баранов Сергій: <span className={style.nowrap}>+380 66 547 2115</span> (Telegram, Viber, WhatsApp), <span className={style.nowrap}>+380 93 768 2174</span></p>
                <h2 className={style.contacts__title}>Менеджер з продукту</h2>
                <p className={style.contacts__paragraph}>Коваленко Наталія: <span className={style.nowrap}>+380 93 278 50 86</span></p>
                </div>
            </div>
        </section>
    )
}

export default ContactsBody;
