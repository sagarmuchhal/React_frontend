import React,{useState,useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './hero.css';

//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

import Index from './/header';
import Footer from './/footer';

// import Blog from './/view_blog';
// import ServicesList from './/view_services';

function Header() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

 const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  // Update the image paths to match your project structure (relative to the public folder)
  const sliderImages = [
    '/assets/img/hero/hero-1.jpg',
    '/assets/img/hero/hero-2.jpg',
    '/assets/img/hero/hero-3.jpg',
  ];
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

const [blogEntries, setBlogEntries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/view_blog')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched blog entries:', data);
        setBlogEntries(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch services data from the API
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:4000/view_services');
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
                // Handle the error, e.g., display an error message to the user
            }
        };

        fetchServices();
    }, []);


  return (
    <div>
    <Index/>
    <section className="hero-section">
      <div className="image-slider-container">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="slide">
              <img
                src={process.env.PUBLIC_URL + image}
                alt={`Slide ${index}`}
                className="image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-text">
              <h1>Shakti A Luxury Hotel</h1>
              <p>
                Here are the best hotel booking sites, including
                recommendations for international travel and for finding
                low-priced hotel rooms.
              </p>
              <a href="#contact" className="primary-btn">
                Discover Now
              </a>
            </div>
          </div>
         <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
  <div className="booking-form">
    <h3>Booking Your Hotel</h3>
    <form action="#">
      <div className="form-group">
        <div className="check-date">
          <label htmlFor="date-in">Check In:</label>
          <div className="d-flex align-items-center">
            <input
              type="date"
              className="form-control"
              value={startDate}
              placeholder="Select a date"
              onChange={handleStartDateChange}
            />
          </div>
        </div>
        <div className="check-date">
          <label htmlFor="date-out">Check Out:</label>
          <div className="d-flex align-items-center">
            <input
              type="date"
              className="form-control"
              value={endDate}
              placeholder="Select a date"
              onChange={handleEndDateChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="select-option">
          <label htmlFor="guest">Guests:</label>
          <select id="guest" className="form-control">
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
          </select>
        </div>
        <div className="select-option">
          <label htmlFor="room">Room:</label>
          <select id="room" className="form-control">
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Check Availability
      </button>
    </form>
  </div>
</div>

        </div>
      </div>
    </section>

      <section className="aboutus-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-text">
                        <div className="section-title">
                            <span>About Us</span>
                            <h2>Intercontinental LA <br />Westlake Hotel</h2>
                        </div>
                        <p className="f-para">Sona.com is a leading online accommodation site. We’re passionate about
                            travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41
                            languages.</p>
                        <p className="s-para">So when it comes to booking the perfect hotel, vacation rental, resort,
                            apartment, guest house, or tree house, we’ve got you covered.</p>
                        <a href="#contact" class="primary-btn about-btn">Read More</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-pic">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src="assets/img/about/about-1.jpg" alt="" />
   
                            </div>
                            <div className="col-sm-6">
                                <img src="assets/img/about/about-2.jpg" alt=""/ >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 <section className="services-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>What We Do</span>
                            <h2>Discover Our Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service) => (
                        <div key={service.id} className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className={service.icon}></i>
                                <h4>{service.name}</h4>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
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
  
    <section className="testimonial-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Testimonials</span>
                        <h2>What Customers Say?</h2>
                    </div>
                </div>
            </div>
         <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <Slider {...settings} className="testimonial-slider owl-carousel">
          <div className="ts-item">
            <p>After a construction project took longer than expected, my husband, my daughter and I needed a place to stay for a few nights. As a Chicago resident, we know a lot about our city, neighborhood and the types of housing options available and absolutely love our vacation at Sona Hotel.</p>
            <div className="ti-author">
              <div className="rating">
                <i className="icon_star"></i>
                <i className="icon_star"></i>
                <i className="icon_star"></i>
                <i className="icon_star"></i>
                <i className="icon_star-half_alt"></i>
              </div>
              <h5> - Alexander Vasquez</h5>
            </div>
           <center> <img src="assets/img/testimonial-logo.png" alt="" /></center>
          </div>
          <div className="ts-item">
            <p>After a construction project took longer than expected, my husband, my daughter and I needed a place to stay for a few nights. As a Chicago resident, we know a lot about our city, neighborhood and the types of housing options available and absolutely love our vacation at Sona Hotel.</p>
            <div className="ti-author">
              <div className="rating">
                <i className="icon_star"></i>
                <i className="icon_star"></i>
                <i className="icon_star"></i>
                <i className="icon_star"></i>
                <i className="icon_star-half_alt"></i>
              </div>
              <h5> - Alexander Vasquez</h5>
            </div>
            <center><img src="assets/img/testimonial-logo.png" alt="" /></center>
          </div>
        </Slider>
      </div>
    </div>        </div>
    </section>
   <section className="blog-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Hotel News</span>
              <h2>Our Blog & Event</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogEntries.map((entry, index) => (
            <div className="col-lg-4" key={index}>
              <div
                className="blog-item set-bg"
                style={{
                  background: `url(http://localhost:4000/uploads/${entry.img}) center/cover no-repeat`,
                }}
              >
                <div className="bi-text">
                  <span className="b-tag">{entry.event_btn}</span>
                  <h4><a href="#contact">{entry.event_name}</a></h4>
                  <div className="b-time"><i className="icon_clock_alt"></i> {entry.event_date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Header;
