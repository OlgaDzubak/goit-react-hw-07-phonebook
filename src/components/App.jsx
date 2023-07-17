import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectIsLoading, selectError } from "redux/selectors";
import { ContactForm } from './ContactForm/contact_form';
import { ContactList } from './ContactList/contact_list';
import { Filter } from './Filter/filter';
import './App.css';

export const App = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect (() => {
        dispatch(fetchContacts());
    },[dispatch])

    return  <section className='section'>

                <div className='app_div'>
                
                    <h1>Phonebook</h1>
                    <ContactForm/>

                    <h2>Contacts</h2>
                    <Filter/>

                    {!error && <ContactList />}

                    {isLoading && !error && <b>Request in progress...</b>}

                    {error && <b>Opps! Something went wrong! Try reloading the page!</b>}

                </div>

            </section>
};
