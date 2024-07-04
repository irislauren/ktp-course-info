import React, { useState } from 'react';
import './CourseReview.css';

const CourseReview = ({ review }) => {
    const [showComments, setShowComments] = useState(false);

    return (
        <div className="course-review">
            <button className="course-name" onClick={() => setShowComments(!showComments)}>
                {review.courseName}
            </button>
            {showComments && (
                <>
                    <p className="course-type"> {review.courseType}</p>
                    <p className="course-prereqs"> {review.coursePrereqs}</p>
                    <ul className="course-comments">
                        {review.comments.map((comment, index) => (
                            <li key={index}>{comment}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};
  
export default CourseReview;