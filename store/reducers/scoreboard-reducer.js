import {
  ADD_SCOREBOARD,
  DELETE_SCOREBOARD,
} from "../actions/scoreboard-actions";
import Scoreboard from "../../models/scoreboard";

const initialState = {
  scoreboards: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCOREBOARD:
      const newScoreboard = new Scoreboard(
        action.scoreboardData.title,
        action.scoreboardData.date,
        action.scoreboardData.scores
      );
      return {
        scoreboards: state.scoreboards.concat(newScoreboard),
      };
    default:
      return state;
  }
};
