import { useDispatch, useSelector } from 'react-redux'
import css from '../Contact/Contact.module.css'
import { selectContacts } from 'redux/selectors'
import { deleteContact } from 'redux/contactsSlice'
export  function Contact() {
    const contacts = useSelector(selectContacts)
    const dispatch = useDispatch()

    
    const handlDeleteContact = evt => {
        dispatch(deleteContact(evt.currentTarget.id));
    };
   
    console.log('contacts', contacts)
    return (
        <ul className={css.list}>
        {contacts.map(({id, name, number}) => (
		<li className={css.item} key={id}>{name}: {number} 
        <button type="button" onClick={handlDeleteContact}>Delete</button ></li>
        ))}
        </ul>
        )
}
