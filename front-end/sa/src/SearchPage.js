import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './searchpage.css';

const SearchPage = () => {
  const [lands, setLands] = useState([]);
  const [filteredLands, setFilteredLands] = useState([]);
  const [district, setDistrict] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    // Fetch land details from the backend
    axios
      .get('http://localhost:3001/api/lands')
      .then((response) => {
        setLands(response.data);
        setFilteredLands(response.data); // Initially, show all lands
      })
      .catch((error) => {
        console.error('Error fetching land details:', error);
      });
  }, []);

  const handleSearch = () => {
    // Parse the size input and check if it is a valid number
    const sizeNumber = size ? parseFloat(size) : null;

    // Filter based on district and size
    const filtered = lands.filter((land) => {
      const districtMatch =
        land.location.toLowerCase().includes(district.toLowerCase()) || !district;
      const sizeMatch =
        sizeNumber !== null ? land.size === sizeNumber : true; // If size is provided, apply size filter

      return districtMatch && sizeMatch;
    });

    setFilteredLands(filtered);
  };

  return (
    <div className='container1'>
      <h2>Search for Land to Farm</h2>

      {/* Search Filters */}
      <div className="search-filters">
        <label className='plac'> District : </label>
        <input  className='inpu'
          type="text"
       
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
<label className='plac'> Size : </label>

        <input
        className='inpu'
          type="number"
        
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display filtered results */}
      <div className="cards-container">
        {filteredLands.length > 0 ? (
          filteredLands.map((land) => (
            <div key={land._id} className="card">
              <img src={land.img} alt={land.name} />
              <div className="card-details">
                <h3>Land Details</h3>
                <ul>
                  <li><strong>Name:</strong> {land.name}</li>
                  <li><strong>Location:</strong> {land.location}</li>
                  <li><strong>Size:</strong> {land.size} acres</li>
                  <li><strong>Price:</strong> ₹{land.price} per acre</li>
                  <li><strong>Description:</strong> {land.description}</li>
                  <li><strong>Contact Number:</strong> {land.contactNumber}</li>
                </ul>
                <div className="contact">Contact Number: {land.contactNumber}</div>
              </div>
            </div>
          ))
        ) : (
          <p>No land details available.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
