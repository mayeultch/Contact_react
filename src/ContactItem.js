import React from 'react';

function ContactItem({ contact, index, handleDeleteContact }) {
  return (
    <li className="contact-item">
      <div className="contact-info">
        <span>Nom: {contact.name}</span>
        <span>Téléphone: {contact.phone}</span>
        <span>Email: {contact.email}</span>
      </div>
      <div className="button-container">
        <button className="btn-delete" onClick={() => handleDeleteContact(index)}>
          Supprimer
        </button>
      </div>
    </li>
  );
}

export default ContactItem;
