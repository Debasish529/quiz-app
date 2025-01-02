import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';
import { Brain } from 'lucide-react';

const Quiz = () => {
  const { quizCompleted } = useSelector((state: RootState) => state.quiz);

  return (
    <div className="w-full max-w-2xl animate-fade-in">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Brain className="w-12 h-12 text-blue-400 animate-pulse" />
        </div>
        <h1 className="text-3xl font-bold text-white">Trivia Master</h1>
      </div>
      {quizCompleted ? <QuizResults /> : <QuizQuestion />}
    </div>
  );
}

export default Quiz;