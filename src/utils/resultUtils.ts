export const getResultEmoji = (percentage: number): string => {
  if (percentage <= 30) {
    return 'https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif'; // Sad emoji
  } else if (percentage <= 60) {
    return 'https://media.giphy.com/media/MeIucAjPKoA120R7sN/giphy.gif'; // Smile emoji
  } else {
    return 'https://media.giphy.com/media/UTY86CxKqeOOQ/giphy.gif'; // Devil emoji
  }
};

export const getResultMessage = (percentage: number): string => {
  if (percentage <= 30) {
    return "Don't worry, keep learning!";
  } else if (percentage <= 60) {
    return "Good job! You're making progress!";
  } else {
    return "Amazing! You're a genius!";
  }
};