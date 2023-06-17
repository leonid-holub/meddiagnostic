import style from './Catalogue.module.scss';
import CatalogueHero from '../../components/Catalogue/CatalogueHero/CatalogueHero';
import CatalogueCompanies from '../../components/Catalogue/CatalogueCompanies/CatalogueCompanies';
import Cta from '../../components/Cta/Cta';


const Catalogue = () => {
    
    return (
        <>
            <CatalogueHero/>
            <CatalogueCompanies/>
            <Cta/>
        </>
    )
}

export default Catalogue;