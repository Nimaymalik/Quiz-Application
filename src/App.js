import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import QuizInstructions from './quiz/QuizInstructions';
import QuizComponent from './displayQuiz/QuizComponent';
import LeaderboardPage from './leaderboard/LeaderboardPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/play/instructions' exact element={<QuizInstructions />} />
      <Route path='/play/quiz' exact element={<QuizComponent />} />
      <Route path='/play/quiz/leaderboard' exact element={<LeaderboardPage />} />
    
    </Routes>
  );
}

export default App;
