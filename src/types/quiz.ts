export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: number[];
  score: number;
  quizCompleted: boolean;
}