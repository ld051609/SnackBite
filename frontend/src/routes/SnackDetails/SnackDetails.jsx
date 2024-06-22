import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SnackDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import NavBar from '../../components/NavBar/NavBar';

const SnackDetails = () => {
    const { snackName } = useParams();
    const [snackInfo, setSnackInfo] = useState({});
    const [snackRating, setSnackRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    const fetchSnackInfo = async () => {
        try {
            const res = await fetch('http://localhost:5000/oneSnack', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: snackName }),
            });
            if (!res.ok) {
                throw new Error('Failed to fetch snack info');
            }
            const jsonData = await res.json();
            setSnackInfo(jsonData);
            fetchSnackReviews(jsonData);
            setSnackRating(jsonData.rating);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchSnackReviews = async (snackInfo) => {
        try {
            const res = await fetch('http://localhost:5000/fetchReviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ snackId: snackInfo._id }),
            });
            if (!res.ok) {
                throw new Error('Failed to fetch reviews');
            }
            const jsonData = await res.json();
            setReviews(jsonData.reviews);

            jsonData.reviews.forEach((review) => {
                if (review?.username) {
                    fetchUsername(review.username);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const fetchUsername = async (userId) => {
        try {
            const res = await fetch('http://localhost:5000/getPersonInfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: userId }),
            });
            if (!res.ok) {
                throw new Error('Failed to fetch user');
            }
            const jsonData = await res.json();
            setUserInfo((prevUserInfo) => [...prevUserInfo, jsonData.user]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSnackInfo();
    }, [snackName]);

    const calculateSnackRating = (rating, itemId) => {
        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<FontAwesomeIcon icon={solidStar} key={`${itemId}-solid-${i}`} />);
        }
        for (let i = 0; i < 5 - rating; i++) {
            stars.push(<FontAwesomeIcon icon={regularStar} key={`${itemId}-regular-${i}`} />);
        }
        return stars;
    };

    return (
        <div>
            <NavBar />
            <div className={styles.snackDetails}>
                <img src={snackInfo.image} alt="" className={styles.snackImage} />
                <div className={styles.snackText}>
                    <h1 className={styles.snackName}>{snackInfo.name}</h1>
                    <div className={styles.ratingStars}>
                        <p>Rating:</p>
                        {calculateSnackRating(snackRating, snackInfo.id)}
                    </div>
                </div>
            </div>
            {reviews.length !== 0 && <div className={styles.reviewContainer}>
                <h1 className={styles.reviewH1}>Reviews</h1>
                {reviews.map((review, key) => {
                    const user = userInfo.find((user) => user._id === review?.username) || {};
                    return (
                        <div className={styles.review} key={key}>
                            <p>
                                <span className={styles.textDecoration}>User:</span> {user.username || review?.username || "Unknown User"}
                            </p>
                            <p>
                                <span className={styles.textDecoration}>Comment:</span> {review.comment}
                            </p>
                            <div className={styles.reviewStars}>
                                {calculateSnackRating(review.rating, review.id)}
                            </div>
                        </div>
                    );
                })}
            </div>}
        </div>
    );
};

export default SnackDetails;
