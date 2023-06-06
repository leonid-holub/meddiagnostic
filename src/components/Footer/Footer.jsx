import style from './Footer.module.scss';
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
        <footer className={`section ${style.footer}`}>
            <div className={`container ${style.footer__container}`}>  
					<div className={style.footer__location}>
                        <div className={style.logo__wrapper}>
                            <Logo/>
                        </div>
						<address className={`${style.footer__adress} adress`}>
							<p>м. Київ, пр-т Лесі Українки, 26</p>
						</address>
					</div>
                    <div className={style.footer__contacts}>
                        <h2 className={style.footer__title}>Контактна інформація</h2>
                        <ul className={style.contacts__list}>
                            <li className={style.contacts__item}>
                                <a href="mailto:info@devstudio.com" className={style.contacts__link}>info@devstudio.com</a>
                            </li>
                            <li className={style.contacts__item}>
                                <a href="tel:+380961111111" className={style.contacts__link}>+38 096 111 11 11</a>
                            </li>
                        </ul>
                        <ul className={style.messenger__list}>
                            <li className={style.messenger__item}>
                            <a
									className={style.messenger__link}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Viber"
								>
									<svg className={style.messenger__icon} width="18px" height="18px">
										<use href="./images/icons.svg#viber"></use>
									</svg>
								</a>
                            </li>
                            <li className={style.messenger__item}>
                            <a
									className={style.messenger__link}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Whatsapp"
								>
									<svg className={style.messenger__icon}  width="18px" height="18px">
										<use href="./images/icons.svg#whatsapp"></use>
									</svg>
								</a>
                            </li>
                            <li className={style.messenger__item}>
                            <a
									className={style.messenger__link}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Telegram"
								>
									<svg className={style.messenger__icon}  width="18px" height="18px">
										<use href="./images/icons.svg#telegram"></use>
									</svg>
								</a>
                            </li>
                        </ul>
                    </div>
					<div className={style.footer__socials}>
						<h2 className={style.footer__title}>Соціальні мережі</h2>
						<ul className={style.socials__list}>
							<li className={style.socials__item}>
								<a
									className={style.socials__link}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Instagram"
								>
									<svg className={style.socials__icon} width="18px" height="18px">
										<use href="./images/icons.svg#instagram"></use>
									</svg>
								</a>
							</li>
							<li className={style.socials__item}>
								<a
									className={style.socials__link}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Twitter"
								>
									<svg className={style.socials__icon} width="18px" height="18px">
										<use href="./images/icons.svg#twitter"></use>
									</svg>
								</a>
							</li>
							<li className={style.socials__item}>
								<a
									className={style.socials__link}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Facebook"
								>
									<svg className={style.socials__icon} width="18px" height="18px">
										<use href="./images/icons.svg#facebook"></use>
									</svg>
								</a>
							</li>
							<li className={style.socials__item}>
								<a
									className={style.socials__link}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="LinkedIn"
								>
									<svg className={style.socials__icon} width="18px" height="18px">
										<use href="./images/icons.svg#linkedin"></use>
									</svg>
								</a>
							</li>
						</ul>
					</div>
			</div>
        </footer>
    )
};

export default Footer;