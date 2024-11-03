import React, { useState } from 'react';
import './ContactManager.css';
import ContactItem from './ContactItem';

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddContact = () => {
    setContacts([...contacts, { name, phone, email }]);
    setName('');
    setPhone('');
    setEmail('');
  };

  const handleDeleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  // Filtrage des contacts selon le terme de recherche (par nom ou téléphone)
  const filteredContacts = contacts.filter(contact => {
    const searchLowerCase = searchTerm.toLowerCase();
    return (
      contact.name.toLowerCase().includes(searchLowerCase) ||
      contact.phone.includes(searchTerm)
    );
  });

  return (
    <div className="container">
      <h1>Gestionnaire de contacts</h1>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un contact par nom ou numéro"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <form>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn-add" onClick={handleAddContact} type="button">
          Ajouter
        </button>
      </form>

      {/* Liste des contacts filtrés */}
      <ul>     
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact, index) => (
            <ContactItem
              key={index}
              contact={contact}
              index={index}
              handleDeleteContact={handleDeleteContact}
            />
          ))
        ) : (
          <li>Aucun contact trouvé.</li>
        )}
      </ul>
    </div>
  );
}

export default ContactManager;
