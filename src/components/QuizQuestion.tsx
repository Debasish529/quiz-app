import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { answerQuestion } from '../store/quizSlice';

const QuizQuestion = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, userAnswers } = useSelector(
    (state: RootState) => state.quiz
  );
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="w-full max-w-2xl animate-slide-up">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        <p className="text-lg mb-6 text-white">{currentQuestion.question}</p>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => dispatch(answerQuestion(index))}
              className={`w-full p-4 text-left rounded-lg transition-all duration-200 transform hover:scale-102
                ${
                  userAnswers[currentQuestionIndex] === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizQuestion;