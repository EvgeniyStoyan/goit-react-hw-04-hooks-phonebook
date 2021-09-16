import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul className={s.contacts_list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p className={s.contact_text}>
              {name}: {number}
            </p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
