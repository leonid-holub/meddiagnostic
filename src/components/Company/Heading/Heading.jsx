
import Companies from "../../Companies/Companies";
import style from "./Heading.module.scss";

const Heading = () => {
    
    return (
        <section className={style.heading__section}>
            <div className="container">
                <h2 className={style.heading__title}>{Companies[0].name}</h2>
                <img className={style.heading__img} src={''} alt="" width="1280px"/>
                <p className={style.heading__paragraph}>{Companies[0].full}</p>
            </div>
        </section>
    )
}

export default Heading;
