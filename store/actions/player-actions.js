import { insertPlayers, fetchPlayers } from "../../helper/db";

export const ADD_PLAYERS = "ADD_PLAYERS";
export const SET_PLAYERS = "SET_PLAYERS ";

export const addPlayer = (name, place, score) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertPlayers(name, place, score);

      console.log(dbResult);
      dispatch({
        type: ADD_PLAYERS,
        playerData: {
          playerId: dbResult.insertId,
          name: name,
          place: place,
          score: score,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlayers = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlayers();
      dispatch({ type: SET_PLAYERS, players: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};
