import { insertScoreboard, fetchScoreboards } from "../../helper/db";

export const ADD_SCOREBOARD = "ADD_SCOREBOARD";
export const SET_SCOREBOARDS = "SET_SCOREBOARDS";

export const addScoreboard = (title, scores) => {
  return async (dispatch) => {
    let date = new Date().toLocaleDateString("en-GB").split("T").toString();
    try {
      const dbResult = await insertScoreboard(title, date, scores);

      console.log(dbResult);
      dispatch({
        type: ADD_SCOREBOARD,
        scoreboardData: {
          id: dbResult.insertId,
          title: title,
          date: date,
          scores: scores,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadScoreboard = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchScoreboards();
      dispatch({ type: SET_SCOREBOARDS, scoreboards: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};
