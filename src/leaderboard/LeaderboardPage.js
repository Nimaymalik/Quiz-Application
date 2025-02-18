import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Leaderboard.css';

const LeaderboardPage = () => {
    const location = useLocation();
    const { score, totalQuestions, attempted, wrongAnswers } = location.state || {};  
    const userScore = score || 0;
    const userAttempted = attempted || 0;
    const userWrongAnswers = wrongAnswers || 0;
    const totalQuestionsCount = totalQuestions || 10;

    
    return (
        <div className="leaderboard-container">
            <h1>Leaderboard</h1>
            <div className="score-summary">
                <h3>Quiz Results</h3>
                <p><strong>Total Questions:</strong> {totalQuestionsCount}</p>
                <p><strong>Questions Attempted:</strong> {userAttempted}</p>
                <p><strong>Correct Answers:</strong> {userScore}</p>
                <p><strong>Wrong Answers:</strong> {userWrongAnswers}</p>
            </div>
            <div className="actions">
                <Link to="/play/quiz">
                    <button className="retry-btn">Retry Quiz</button>
                </Link>
                <Link to="/">
                    <button className="home-btn">Go to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default LeaderboardPage
