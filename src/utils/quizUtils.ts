export const getRandomQuestions = (questionBank: any[], count: number) => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};