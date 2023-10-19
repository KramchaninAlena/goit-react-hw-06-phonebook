import React, { useEffect, useState } from 'react'
import Form  from './Form/Form'
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Contact } from './Contact/Contact';
import { Filter } from './Filter/Filter';

export default function App() {
const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
const [filter, setFilter] = useState('');

const createContacts = (dataByForm) => {
     if(contacts.find(el => el.name === dataByForm.name)){
       return alert('This contact alredy exists')
   }
     const newContact ={
       ...dataByForm, 
       id: nanoid(),
     }
    setContacts((prev) => 
        [newContact, ...prev]
     )
   };

const handleDelete = (contactId) => {
    setContacts((prev)=> prev.filter((contact) => contact.id !== contactId),
 )
};

const filterQuery = (filterValue) => {
  setFilter(filterValue);
};
const filterContact = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
  
         return (
      <>
        <Section title='Phonebook'>
        <Form createContacts={createContacts}/>
    </Section>
    <Section title='Contacts'>
    <Filter filterQuery={filterQuery}/>
    
    <Contact contacts={filterContact} handleDelete={handleDelete}/>
    </Section>
    </>
    
    )
}







