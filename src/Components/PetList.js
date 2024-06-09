import React from 'react';
import Select from 'react-select'; 

const PetList = ({ pets, onSelectPet }) => {
  const petOptions = pets.map((pet) => ({ value: pet.id, label: pet.name }));

  return (
    <div className="pet-list-container">
      <Select
        className="pet-dropdown"
        placeholder="Select a Pet"
        options={petOptions}
        onChange={(selectedOption) => onSelectPet(selectedOption.value)}
      />
    </div>
  );
};

export default PetList;
