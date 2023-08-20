import style from './Catalogue.module.scss';
import CatalogueHero from '../../components/Catalogue/CatalogueHero/CatalogueHero';
import CatalogueCompanies from '../../components/Catalogue/CatalogueCompanies/CatalogueCompanies';
import Cta from '../../components/Cta/Cta';
import { useEffect } from 'react';


const Catalogue = () => {
    
    useEffect(()=> {
        window.scroll(0, 0);
    })
    
    return (
        <>
            <CatalogueHero/>
            <CatalogueCompanies/>
        </>
    )
}

export default Catalogue;