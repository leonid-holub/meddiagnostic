import style from './Contacts.module.scss';
import ContactsHero from '../../components/Contacts/ContactsHero/ContactsHero';
import ContactsBody from '../../components/Contacts/ContactsBody/ContactsBody';
import { useEffect } from 'react';

const Contacts = () => {
    
    useEffect(()=> {
        window.scroll(0, 0);
    })

    return (
        <>
            <ContactsHero/>
            <ContactsBody/>
        </>
    )
}

export default Contacts;