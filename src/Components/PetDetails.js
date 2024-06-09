import React from 'react';

const PetDetails = ({ pet }) => {
  return (
    <div className="pet-details-container">
      <h2>{pet.name}</h2>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Weight: {pet.weight} kg</p>
      <p>Color: {pet.color}</p>
    </div>
  );
};

export default PetDetails;
