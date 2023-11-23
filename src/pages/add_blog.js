import React, { useState } from 'react';
import axios from 'axios';

const ARoom = () => {
  const [formData, setFormData] = useState({
    event_name: '',
    event_btn: '',
    event_date: '',
    img: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'img' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('event_name', formData.event_name);
    data.append('event_btn', formData.event_btn);
    data.append('event_date', formData.event_date);

    // Check if an image is selected before appending to FormData
    if (formData.img) {
      data.append('img', formData.img);
    }

    try {
      const response = await axios.post('http://localhost:4000/add_blog', data);
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error('Error adding blog:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="event_name">Event Name:</label>
          <input type="text" id="event_name" name="event_name" onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="event_btn">Event Button:</label>
          <input type="text" id="event_btn" name="event_btn" onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="event_date">Event Date:</label>
          <input type="date" id="event_date" name="event_date" onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="img">Image:</label>
          <input type="file" id="img" name="img" accept="image/*" onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">Add Blog</button>
        </div>
      </form>
    </div>
  );
};

export default ARoom;
