export const ADD_SCOREBOARD = "ADD_SCOREBOARD";

export const addScoreboard = (title, scores) => {
  let date = new Date().toLocaleDateString("en-GB").split("T").toString();
  return { type: ADD_SCOREBOARD, scoreboardData: { title: title, date: date, scores: scores } };
};