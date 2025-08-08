import React from 'react';

const Ambulance = ({ price = '800' }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Ambulance Location</h2>

      {/* Map Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
        }}
      >
        <iframe
          title="Ambulance Location Map"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=mumbai&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          frameBorder="0"
          style={{
            width: '50%',
            height: '400px',
            border: '2px solid #2980b9',
            borderRadius: '8px',
          }}
          allowFullScreen
        ></iframe>
      </div>

      {/* Form Section */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <form>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              name="currentLocation"
              placeholder="Enter your location"
              style={{
                padding: '10px',
                width: '300px',
                margin: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
            <input
              type="text"
              name="destination"
              placeholder="Enter destination location"
              style={{
                padding: '10px',
                width: '300px',
                margin: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label style={{ marginRight: '20px' }}>
              <input
                type="radio"
                name="type"
                value="emergency"
                style={{ marginRight: '8px' }}
              />
              Emergency
            </label>

            <label>
              <input
                type="radio"
                name="type"
                value="non-emergency"
                style={{ marginRight: '8px' }}
              />
              Non-Emergency
            </label>
          </div>
        </form>

        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Price: ₹{price}
        </div>
      </div>
    </div>
  );
};

export default Ambulance;
