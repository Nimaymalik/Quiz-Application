import React, { Fragment } from 'react';
import '@mdi/font/css/materialdesignicons.min.css';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <Fragment>
            <div id='home'>
                <section>
                    <div className="icon-container">
                        <span className="mdi mdi-cube-outline cube"></span>
                    </div>

                    <h1>Quiz Master</h1>
                    <p className="tagline">Test Your Knowledge & Have Fun!</p>

                    <div className='play-button-container'>
                        <Link className='play-button' to='/play/instructions'>Start Quiz</Link>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default Home;
