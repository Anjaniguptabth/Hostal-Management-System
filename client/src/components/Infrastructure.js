import React, { useState } from "react";
import Slider from "react-slick";
import ReactModal from "react-modal";
import "./Infrastructure.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Infrastructure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const hostelImages1 = [
    "images/Hostel-intrance.jpg",
    "images/Hostel-intrance-2.jpg",
    "images/hostal-main.jpg",
    "images/Boyss-mess.jpg",
  ];
  const hostelImages2 = [
    "images/gitai-girsl-hostal.jpg",
    "images/gitai-girls-mess.jpg",
  ];
  const hostelImages3 = [
    "images/hostal-event-2.jpg",
    "images/hostal-event-3.jpg",
    "images/hostal-event-4.jpg",  
    "images/hostal-event-5.jpg",
    "images/hostal-event-6.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="container">
      {/* Hostel Facilities Section */}
      <section className="section hostel-facilities">
        <h2>Hostel Facilities</h2>
        <p>
          Our hostel provides a wide range of facilities ensuring a comfortable and secure stay for students. Amenities include Wi-Fi, 24/7 security, mess services, 
          laundry, reading rooms, and recreational areas.
        </p>
        <ul>
          <li>High-speed Wi-Fi & Internet Connectivity</li>
          <li>24/7 Security with CCTV Surveillance</li>
          <li>Solar Water System & Purified Drinking Water</li>
          <li>Doctor on Call & Ambulance Facility</li>
          <li>Biometric Attendance System</li>
          <li>Regular Cleaning & Pest Control</li>
          <li>Fully Furnished Rooms with Study Desks</li>
        </ul>
      </section>

      {/* Boys Hostel Section with Slider */}
      <section className="section boys-hostel">
        <h2>Boys Hostel & Mess</h2>
        <p>
          In the Boy’s hostel, 368 students are staying. This hostel is equipped with two-seater rooms, and solar systems are installed to provide hot water for students. 
          All other necessary facilities are provided in every room. The hostels also feature an internet facility, a study room, television, filtered water, and a well-managed 
          mess that offers nutritious and hygienic meals for students.
        </p>
        <div className="image-slider">
          <Slider {...sliderSettings}>
            {hostelImages1.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Boys Hostel ${index}`}
                  className="image"
                  onClick={() => openModal(image)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Girls Hostel Section */}
      <section className="section girls-hostel">
        <h2>Girl's Hostel & Mess</h2>
        <p>
          In the Girl’s hostel, 255 students are staying. This hostel is equipped with two-seater and three-seater rooms, and solar systems are installed to provide hot water for students. 
          All other necessary facilities are provided in every room. The hostels also feature an internet facility, a study room, television, filtered water, and a well-managed 
          mess that offers nutritious and hygienic meals for students.
        </p>
        <div className="image-slider">
          <Slider {...sliderSettings}>
            {hostelImages2.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Girls Hostel ${index}`}
                  className="image"
                  onClick={() => openModal(image)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Events in Hostel Section */}
      <section className="section events">
        <h2>Events in Hostel</h2>
        <p>
          We believe in holistic development. Our hostel regularly organizes cultural festivals, sports competitions, talent shows, and other engaging events 
          to keep students entertained and motivated.
        </p>
        <div className="image-slider">
          <Slider {...sliderSettings}>
            {hostelImages3.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Hostel Events ${index}`}
                  className="image"
                  onClick={() => openModal(image)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Fees Structure Section */}
      <section className="section fees-structure">
        <h2>Fees Structure</h2>
        <p>The following is the annual fee structure for hostel accommodations:</p>
        <table>
    <thead>
      <tr>
        <th>Categories</th>
        <th>Fees</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hostel Fee</td>
        <td>₹32,500</td>
      </tr>
      <tr>
        <td>Mess Fee</td>
        <td>₹32,500</td>
      </tr>
      <tr>
        <td>Deposit (only for 1st year and Refundable)</td>
        <td>₹3,000</td>
      </tr>
      <tr>
        <td><strong>Total Amount</strong></td>
        <td><strong>₹68,000</strong></td>
      </tr>
    </tbody>
  </table>
      </section>

      {/* Modal Popup for Images */}
      {selectedImage && (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>X</button>
            <img
              src={selectedImage}
              alt="Selected"
              className="zoomable-image"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </ReactModal>
      )}
    </div>
  );
};

export default Infrastructure;
