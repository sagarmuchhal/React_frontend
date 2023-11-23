import React, { useEffect, useState } from 'react';
import Index from './/header';
import Footer from './/footer';

const Blog = () => {
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

  return (<div>
    <Index/>
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
};

export default Blog;
