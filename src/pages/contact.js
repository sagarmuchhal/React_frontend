import React, { useState } from 'react';
import Index from './header';
import Footer from './footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('http://localhost:4000/add_contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Contact form submitted successfully!');
        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.error('Failed to submit contact form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Index />
      <div className="container-xxl py-6">
  <div className="container">
    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
      <h1 className="display-5 mb-3">Contact Us</h1>
      <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
    </div>
    <div className="row g-5 justify-content-center">
      <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
        <div className="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
          <h5 className="text-white">Call Us</h5>
          <p className="mb-5">
            <i className="fa fa-phone-alt me-3"></i>+012 345 67890
          </p>
          <h5 className="text-white">Email Us</h5>
          <p className="mb-5">
            <i className="fa fa-envelope me-3"></i>info@example.com
          </p>
          <h5 className="text-white">Office Address</h5>
          <p className="mb-5">
            <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
          </p>
          <h5 className="text-white">Follow Us</h5>
          <div className="d-flex pt-2">
            <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#a">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#a">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#a">
              <i className="fab fa-youtube"></i>
            </a>
            <a className="btn btn-square btn-outline-light rounded-circle me-0" href="#a">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
        <p className="mb-4">
          The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few
          minutes. Just copy and paste the files, add a little code, and you're done.{' '}
          <a href="https://htmlcodex.com/contact-form">Download Now</a>.
        </p>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Your Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a message here"
                id="message"
                name="message"
                style={{ height: '200px' }}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary rounded-pill py-3 px-5"
              type="submit"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="container-xxl px-0 wow fadeIn" data-wow-delay="0.1s" style={{ marginBottom: '-6px' }}>
  <iframe
    className="w-100"
    style={{ height: '450px' }}
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
    title="Google Maps"
    frameBorder="0"
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  ></iframe>
</div>
      <br />
      <Footer />
    </div>
  );
};

export default Contact;
