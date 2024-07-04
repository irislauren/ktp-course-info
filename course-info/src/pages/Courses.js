import React from 'react'
import { useState } from 'react';
import CourseReview from '../components/CourseReview'
import './Courses.css'

const CoursesPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['Department', 'Quarter'];

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };
    const [showUpcoming, setShowUpcoming] = React.useState(false);
    const [showDept, setShowDept] = React.useState(false);  
    const reviews = [
        {
            courseName: 'CMSC 14100: Introduction to Computer Science (Rogers)',
            courseInstructor: 'Rogers',
            courseType: 'Major Requirement',
            coursePrereqs: 'Prerequisites: None',
            comments: [
                '(Laura) Rogers is kinda scary but she’s very organized and overall good prof',
                '(Mahum) Rogers is hands down one of the best lecturers I have ever had',
            ],
            upcoming: true,
        },
        {
            courseName: 'CMSC 14200: Introduction to Computer Science (Shaw)',
            courseInstructor: 'Shaw',
            courseType: 'Major Requirement',
            coursePrereqs: 'Prerequisites: None',
            comments: [
                '(Ellen) sometimes I love him, sometimes im meh ab him. sometimes he\'ll add unnecessary comments when answering questions, like dumb questions do exist lol. but amazing lecturer + super well rounded individual.',
                '(Pratham) love Shaw this guy is the goat. Genuinely passionate about helping you learn and a very nice guy',
                '(Joshua) Take with Shaw. I had him for 151 and he was very good',
            ],
            upcoming: false,
        }
    ];
            
    let filteredReviews = reviews;
    if (showUpcoming) {
        filteredReviews = reviews.filter(review => review.upcoming);
    
    } 
    if (showDept) {
        filteredReviews = filteredReviews.filter(review => review.courseName.includes("CMSC"));
    }

    return (
        <div>
            <h1>Welcome to the courses page</h1>
            <label>
                <input type="checkbox" checked={showUpcoming} onChange={() => setShowUpcoming(!showUpcoming)} />
                Showing only upcoming courses
            </label>
            <label>
                <input type="checkbox" checked={showDept} onChange={() => setShowDept(!showDept)} />
                Showing only CMSC courses
            </label>
            <div className = "filter-box">
                <span className="filter-label" disabled>Filters:</span> {/* This button acts as a label */}
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => handleFilterClick(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div className="courses">
                {/* <div className="sidebox"></div> */}
                {filteredReviews.map((review, index) => (
                    <CourseReview key={index} review={review} />
                ))}
                {/* <div className="sidebox"></div> */}
            </div>
        </div>
    );
};
  
export default CoursesPage;