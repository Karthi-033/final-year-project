import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./rentalpage.css";

const RentalPage = () => {
  const [landDetails, setLandDetails] = useState({
    name: '',
    location: '',
    size: '',
    price: '',
    description: '',
    contactNumber: '',  // Added contact number field
  });
  const [img,setImg]=useState();

    const imgf = (e)=>{
      console.log(e);
      const file = e.target.files[0];
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload =()=>{
            console.log(reader.result);
            setImg(reader.result);
          }
    }

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLandDetails({
      ...landDetails,
      [name]: value,
    });
  };
const serverdata={
  landDetails,
  img,
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(" Details submited sucessfully");
    navigate(-1);
   console.log(serverdata);

    try {
      await axios.post('http://localhost:3001/api/land', serverdata);
     
      // Redirect to SearchLandPage after successful submission
      
    } catch (err) {
      console.error('Error submitting land details:', err);
    }
  };

  return (
    <>
    <h1>Upload Land Details to Rent</h1>
    <div className='continer01'>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name of Land Owner:</label>
          <input
            type="text"
            name="name"
            className='inputs'
            value={landDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            className='inputs'
            value={landDetails.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Size (in acres):</label>
          <br></br>
          <input
            type="number"
            name="size"
            className='inputs'
            value={landDetails.size}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price per acre:</label>
          <br></br>
          <input
            type="number"
            name="price"
            className='inputs'
            value={landDetails.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <br></br>
          <textarea
            name="description"
            className='inputs'
            value={landDetails.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            className='inputs'
            value={landDetails.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
          <div>
            <input type="file"  name="image"  accept = "image/*" onChange ={imgf} required></input>
          </div>
          <img width={100} height={100} src={img}></img>
          <br></br>
        <button className='buttons' type="submit"  >Submit</button>
      </form>
      
    </div>
    </>
  );
};

export default RentalPage;
