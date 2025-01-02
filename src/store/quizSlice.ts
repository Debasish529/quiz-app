import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizState } from '../types/quiz';
import { questionBank } from '../data/questionBank';
import { getRandomQuestions } from '../utils/quizUtils';

const QUESTIONS_PER_QUIZ = 10;

const initialState: QuizState = {
  questions: getRandomQuestions(questionBank, QUESTIONS_PER_QUIZ),
  currentQuestionIndex: 0,
  userAnswers: [],
  score: 0,
  quizCompleted: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    answerQuestion: (state, action: PayloadAction<number>) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      state.userAnswers[state.currentQuestionIndex] = action.payload;
      
      if (action.payload === currentQuestion.correctAnswer) {
        state.score += 1;
      }

      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.quizCompleted = true;
      }
    },
    resetQuiz: (state) => {
      state.questions = getRandomQuestions(questionBank, QUESTIONS_PER_QUIZ);
      state.currentQuestionIndex = 0;
      state.userAnswers = [];
      state.score = 0;
      state.quizCompleted = false;
    },
  },
});

export const { answerQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;