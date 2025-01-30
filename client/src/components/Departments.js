import React, { useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Departments.css';

const Departments = () => {
  const [activeDepartment, setActiveDepartment] = useState(null);
  const [activeCourse, setActiveCourse] = useState(null);

  const departments = {
    Engineering: [
      {
        name: 'Applied Science And Mathematics',
        image: '/images/applied_science.jpg',
        details: {
          hostel: {
            totalSeats: 100,
            bedFees: '₹10,000/year',
            messFees: '₹12,000/year',
            washingMachineFees: '₹1,000/year',
            depositFees: '₹5,000 (one-time)',
            allotedYears: 4,
          },
        },
      },
      {
        name: 'Artificial Intelligence And Data Science',
        image: '/images/ai_data_science.jpg',
        details: {
          hostel: {
            totalSeats: 80,
            bedFees: '₹15,000/year',
            messFees: '₹18,000/year',
            washingMachineFees: '₹1,500/year',
            depositFees: '₹6,000 (one-time)',
            allotedYears: 4,
          },
        },
      },
    ],
    Diploma: [
      {
        name: 'Mechanical Engineering',
        image: '/images/mechanical.jpg',
        details: {
          hostel: {
            totalSeats: 60,
            bedFees: '₹8,000/year',
            messFees: '₹10,000/year',
            washingMachineFees: '₹800/year',
            depositFees: '₹4,000 (one-time)',
            allotedYears: 3,
          },
        },
      },
    ],
    Pharmacy: [
      {
        name: 'Pharmaceutics',
        image: '/images/pharmaceutics.jpg',
        details: {
          hostel: {
            totalSeats: 40,
            bedFees: '₹12,000/year',
            messFees: '₹15,000/year',
            washingMachineFees: '₹1,200/year',
            depositFees: '₹5,000 (one-time)',
            allotedYears: 4,
          },
        },
      },
    ],
  };

  const closeCoursePopup = () => {
    setActiveCourse(null);
  };

  const closeDepartmentPopup = () => {
    setActiveDepartment(null);
    setActiveCourse(null);
  };

  return (
    <div className="department-container">
      <h1 className="departments-header">Departments</h1>
      <div className="departments-grid">
        {Object.keys(departments).map((department) => (
          <div
            key={department}
            className="department-card"
            onClick={() => setActiveDepartment(department)}
          >
            <h3>{department}</h3>
          </div>
        ))}
      </div>

      {/* Department Popup */}
      {activeDepartment && (
        <div className="popup">
          <div className="popup-header">
            <h2>{activeDepartment} Courses</h2>
            <button className="slick-close" onClick={closeDepartmentPopup}>✖</button>
          </div>
          <div className="popup-content">
            {departments[activeDepartment].map((course, index) => (
              <button
                key={index}
                className="course-button"
                onClick={() => setActiveCourse(course)}
              >
                {course.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Course Details Popup */}
      {activeCourse && (
        <div className="popup">
          <div className="popup-header">
            <h2>{activeCourse.name} Hostel Details</h2>
            <button className="slick-close" onClick={closeCoursePopup}>✖</button>
          </div>
          <div className="popup-content">
            <h3>Hostel Details</h3>
            <ul>
              <li><strong>Total Seats:</strong> {activeCourse.details.hostel.totalSeats}</li>
              <li><strong>Hostel Bed Fees:</strong> {activeCourse.details.hostel.bedFees}</li>
              <li><strong>Hostel Mess Fees:</strong> {activeCourse.details.hostel.messFees}</li>
              <li><strong>Washing Machine Fees:</strong> {activeCourse.details.hostel.washingMachineFees}</li>
              <li><strong>Deposit Fees:</strong> {activeCourse.details.hostel.depositFees}</li>
              <li><strong>Max. Allotted Years:</strong> {activeCourse.details.hostel.allotedYears}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Departments;
