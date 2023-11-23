import React, { useState, useEffect } from 'react';
import Index from './/header';
import Footer from './/footer';

function CRoom() {
  const [roomCategories, setRoomCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/view_room_category')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched room categories:', data);
        setRoomCategories(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
    <Index/>
    <section className="hp-room-section">
      <div className="container-fluid">
        <div className="hp-room-items">
          <div className="row">
            {roomCategories.map((roomCategory) => (
              <div className="col-lg-3 col-md-6" key={roomCategory.id}>
                <div
  className="hp-room-item"
  style={{
    background: `url(http://localhost:4000/uploads/${roomCategory.img}) center/cover no-repeat`,
    maxWidth: '100%',
    borderRadius: '20px',
  }}
>
                  <div className="hr-text">
                    <h3>{roomCategory.category}</h3>
                    <h2>{`${roomCategory.price}$ / Per night`}</h2><br/>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">Size:</td>
                          <td>{roomCategory.size}</td>
                        </tr>
                        <tr>
                          <td className="r-o">Capacity:</td>
                          <td>{roomCategory.capacity}</td>
                        </tr>
                        <tr>
                          <td className="r-o">Bed:</td>
                          <td>{roomCategory.bed}</td>
                        </tr>
                        <tr>
                          <td className="r-o">Services:</td>
                          <td>{roomCategory.service}</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#contact" className="primary-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default CRoom;
