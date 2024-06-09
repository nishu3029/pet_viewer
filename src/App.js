import React, { useState } from 'react';
import "./Components/styles.css";
import PetList from './Components/PetList';
import PetDetails from './Components/PetDetails';
import pets from './Components/PetData'; // Import mock data

const App = () => {
  const [selectedPetId, setSelectedPetId] = useState(null);

  const handlePetSelection = (id) => setSelectedPetId(id);

  const selectedPet = pets.find((pet) => pet.id === selectedPetId);

  return (
    <div className="pet-viewer-container">
      <PetList pets={pets} onSelectPet={handlePetSelection} />
      {selectedPet && <PetDetails pet={selectedPet} />}
    </div>
  );
};

export default App;
