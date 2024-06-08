import React, { useEffect, useState } from 'react';
import './SnackDetails.css';
import { useParams } from 'react-router-dom';

const SnackDetails = () => {
    const { snackName } = useParams();
    const [reviews, setReviews] = useState([]);

    const fetchAllReview = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ snackName }),
            });
            if (res.ok) {
                const data = await res.json();
                setReviews(data);
                console.log('Successfully fetched all reviews', data);
            } else {
                const errorData = await res.json();
                console.error('Error fetching all reviews:', errorData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllReview();
    }, []);

    return (
        <div className="snack-details">
            <h1>Snack Reviews</h1>
            <ul>
                {reviews.map((review, key) => (
                    <li key={key}>{review}</li>
                ))}
            </ul>
        </div>
    );
};

export default SnackDetails;
