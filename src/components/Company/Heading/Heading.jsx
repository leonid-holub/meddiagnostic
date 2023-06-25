
/* eslint-disable react/prop-types */
import Companies from "../../Companies/Companies";
import style from "./Heading.module.scss";

const Heading = ({index, src, alt, width}) => {
    
    return (
        <section className={style.heading__section}>
            <div className="container">
                <h2 className={style.heading__title}>{Companies[index].name}</h2>
                <img className={style.heading__img} src={src} alt={alt} width={width}/>
                <p className={style.heading__paragraph}>{Companies[index].full}</p>
            </div>
        </section>
    )
}

export default Heading;
