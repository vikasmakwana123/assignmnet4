import React from 'react';

const Hosptalcard = ({ image, name, description }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', width: '90vw', margin: '20px auto',display: 'flex' }}>
      <img src={image} alt="Hospital" style={{ width: '15vh', height: '20vh', objectFit: 'cover' ,borderRadius:'5px'}} />
      <div style={{ marginLeft: '20px',width: '100%' }}>
      <h2 style={{backgroundColor:'beige',padding:'10px',borderRadius:'5px'}}>{name}</h2>
      <p>{description}</p>
      </div>
    </div>
  );
};

export default Hosptalcard;
