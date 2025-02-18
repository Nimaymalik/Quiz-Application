import React, { Fragment } from 'react';
import './quiz.css';
import { Link } from 'react-router-dom';

const QuizInstructions = () => {
    return (
        <Fragment>
            <title>Quiz Instructions</title>
            <section className="quiz-instructions">
                <h1>Quiz Instructions</h1>
                <div className="instructions-container">
                    <h2>How to Play the Game</h2>
                    <p>Ensure you read this guide from start to finish before attempting the quiz.</p>
                    <ul id="main-list">
                        <li>Users will get <strong>30 seconds</strong> per question.</li>
                        <li>There will be <strong>10 questions</strong> in the quiz.</li>
                        <li>Users will see the <strong>scoreboard</strong> at the end of the quiz.</li>
                        <li>Each question has <strong>four options</strong>, and only one is correct.</li>
                        <li>Select your answer by clicking on the correct option.</li>
                        <li>You cannot go back to the previous question once answered.</li>
                        <li>If time runs out, the question will be marked as incorrect.</li>
                        <li>You can quit the quiz at any time, but your progress will be lost.</li>
                        <li>Your final score will be displayed at the end of the quiz.</li>
                        <li>Try to score as high as possible and challenge your friends!</li>
                    </ul>
                    <p className="good-luck">Good luck and have fun! 🎉</p>

                    <div className="button-container">
                        <Link to="/">
                            <button className="back-btn">Go Back</button>
                        </Link>
                        <Link to="/play/quiz">
                            <button className="start-btn">Start Quiz</button>
                        </Link>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default QuizInstructions;
