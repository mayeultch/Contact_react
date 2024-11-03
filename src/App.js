import React from 'react';
import './App.css';  // Tu peux garder le fichier CSS si tu veux le style par défaut ou le supprimer plus tard
import ContactManager from './ContactManager';  // Assure-toi que le chemin est correct

function App() {
  return (
    <div className="App">
      <ContactManager />
    </div>
  );
}

export default App;
