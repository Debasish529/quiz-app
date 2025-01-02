import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { resetQuiz } from '../store/quizSlice';
import { RefreshCw } from 'lucide-react';
import ResultEmoji from './ResultEmoji';

const QuizResults = () => {
  const dispatch = useDispatch();
  const { score, questions } = useSelector((state: RootState) => state.quiz);
  const percentage = (score / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl animate-slide-up">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 text-center border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-white">Quiz Complete!</h2>
        <div className="text-6xl font-bold text-blue-400 mb-4 animate-bounce">
          {percentage}%
        </div>
        <p className="text-lg mb-4 text-gray-200">
          You scored {score} out of {questions.length} questions correctly
        </p>
        <ResultEmoji percentage={percentage} />
        <button
          onClick={() => dispatch(resetQuiz())}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Try Again
        </button>
      </div>
    </div>
  );
}

export default QuizResults;