import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './QuizComponent.css';
import { quizData } from './quizData';

const QuizComponent = () => {
    const navigate = useNavigate();  
    const [counter, setCounter] = useState(0); 
    const [score, setScore] = useState(0);    
    const [timeLeft, setTimeLeft] = useState(30);  
    const [answered, setAnswered] = useState(false); 
    const [selectedOption, setSelectedOption] = useState(null); 
    const [userAnswer, setUserAnswer] = useState(''); 
    const [attempted, setAttempted] = useState(0); 
    const [wrongAnswers, setWrongAnswers] = useState(0); 

    useEffect(() => {
        if (timeLeft === 0 || answered) {
            setAnswered(true);
        } else {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer); 
        }
    }, [timeLeft, answered]);

    const handleAnswerOption = (option) => {
        setSelectedOption(option);
        setAnswered(true);
        setAttempted(attempted + 1);  
        if (option.charAt(0) === quizData[counter].answer) {
            setScore(score + 1);
        } else {
            setWrongAnswers(wrongAnswers + 1);  
        }
    };

    const handleIntegerAnswer = () => {
        setAnswered(true);
        setAttempted(attempted + 1); 
        if (userAnswer === quizData[counter].answer) {
            setScore(score + 1);
        } else {
            setWrongAnswers(wrongAnswers + 1); 
        }
    };

    useEffect(() => {
        if (answered) {
            const timer = setTimeout(() => {
                if (counter === quizData.length - 1) {
                    navigate('/play/quiz/leaderboard', {
                        state: {
                            score,
                            totalQuestions: quizData.length,
                            attempted,
                            wrongAnswers,
                        },
                    });
                } else {
                    setCounter(counter + 1);
                    setTimeLeft(30); 
                    setAnswered(false);
                    setSelectedOption(null); 
                    setUserAnswer(''); 
                }
            }, 1500);  

            return () => clearTimeout(timer); 
        }
    }, [answered, counter, navigate, score, attempted, wrongAnswers]);

    useEffect(() => {
        if (timeLeft === 0 && counter === quizData.length - 1) {
            setAnswered(true);
        }
    }, [timeLeft, counter]);

    const currentQuestion = quizData[counter];

    return (
        <Fragment>
            <title>Quiz Page</title>
            <div className='quiz-container'>
                <div className='question'>
                    <h5>{currentQuestion.question}</h5>
                    <p>Time Left: {timeLeft}s</p>
                </div>

                {currentQuestion.type === "multiple-choice" && (
                    <div className='options'>
                        {currentQuestion.options.map((option, index) => {
                            let buttonClass = 'option-btn';
                            if (answered) {
                                if (option.charAt(0) === currentQuestion.answer) {
                                    buttonClass += ' correct';
                                } else if (option === selectedOption) {
                                    buttonClass += ' incorrect';
                                }
                            }

                            return (
                                <button
                                    key={index}
                                    className={buttonClass}
                                    onClick={() => handleAnswerOption(option)}
                                    disabled={answered}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                )}

                {currentQuestion.type === "integer" && (
                    <div className="integer-answer">
                        <input
                            type="number"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            disabled={answered}
                            placeholder="Enter your answer"
                        />
                        <button
                            className="submit-btn"
                            onClick={handleIntegerAnswer}
                            disabled={answered}
                        >
                            Submit Answer
                        </button>
                    </div>
                )}

                {counter === quizData.length && (
                    <div className="score">
                        <h3>Quiz Completed! Your Score: {score}/{quizData.length}</h3>
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default QuizComponent;
