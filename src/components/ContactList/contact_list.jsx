import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors";
import {Contact} from '../Contact/contact'
import css from './contact_list.module.css';

export const ContactList = () => {

    const visibleContacts = useSelector(selectVisibleContacts);
   
    return  <div className={css.contact_list_div}>
                <ul className={css.contact_list}> 
                    {visibleContacts.map(contact => <Contact contact={contact} key={contact.id}/>)} 
                </ul>
            </div>
}