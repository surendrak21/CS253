import React, { useState } from 'react';
import './contact.css'; // Import CSS file for styling

const Courses = () => {
  // Dummy data for courses (replace this with actual data from your backend)
  const initialCourses = [
    { id: 1, title: 'CS253: SOFTWARE DEVELOPMENT AND OPERATIONS', link: '/cs253' },
    { id: 2, title: 'EE698R: ADVANCED TOPICS IN MACHINE LEARNING', link: '/ee698r' },
    { id: 3, title: 'BSE322A: BIOINFORMATICS & COMPUTATIONAL BIOLOGY', link: '/bse322a' },
    { id: 4, title: 'PSY468A: SOCIAL COGNITION', link: '/psy468a' },
    { id: 5, title: 'CS360A: INTRODUCTION TO COMPUTER GRAPHICS', link: '/cs360a' },
    { id: 6, title: 'MTH101A: MATHEMATICS I' , link: '/cs360a'},
    { id: 7, title: 'PHY101A: PHYSICS LABORATORY' , link: '/cs360a'},
    { id: 8, title: 'PHY102A: PHYSICS-I', link: '/cs360a' },
    { id: 9, title: 'TA101A: ENGINEERING GRAPHICS', link: '/cs360a' },
    { id: 10, title: 'PHY103A: PHYSICS-II', link: '/cs360a' },
    { id: 11, title: 'MTH102A: MATHEMATICS - II', link: '/cs360a' },
    { id: 12, title: 'ESC101A: FUNDAMENTAL OF COMPUTING', link: '/cs360a' },
    { id: 13, title: 'ESC201: INTRODUCTION TO ELECTRONICS', link: '/cs360a' },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredCourses = initialCourses.filter(course =>
      course.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setCourses(filteredCourses);
  };

  return (
    <div className="courses-container"> {/* Add a class for styling */}
      <h1>Courses</h1>
      <input
        type="text"
        placeholder="Search course..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="courses-list"> {/* Add a class for styling */}
        {courses.map(course => (
          <li key={course.id}>
            <a href={course.link}>{course.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
