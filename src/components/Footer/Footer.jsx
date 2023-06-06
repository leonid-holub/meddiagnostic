import style from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={`section ${style.footer}`}>
            <div className={`container ${style.footer__container}`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus sequi esse eos, ab quos fugit reprehenderit at illum ullam, facilis tempore facere asperiores fuga voluptatibus non rerum quam incidunt quod placeat quo adipisci autem quibusdam. Ut iusto minima iure, quia, similique minus nemo placeat inventore, libero cum dolorum necessitatibus quibusdam suscipit asperiores magni ducimus rem et debitis laborum? Numquam architecto fugit illo voluptatum soluta repudiandae ex. Totam consequuntur nisi qui, dolor nam, esse vitae praesentium, soluta voluptatibus placeat ducimus mollitia vel in inventore quia aliquam. Molestias, ullam ipsum. Officia sapiente odit nemo magni eligendi blanditiis vero est consectetur, ipsa dolorem velit aliquid animi ex quibusdam repudiandae voluptate. Eos, rem aliquam!</p>
            </div>
        </footer>
    )
};

export default Footer;