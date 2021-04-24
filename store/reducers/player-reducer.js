import { ADD_PLAYERS, SET_PLAYERS } from "../actions/player-actions";
import Player from "../../models/player";

const initialState = {
  players: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYERS:
      return {
        players: action.players.map(
          (p) => new Player(p.id.toString(), p.name, p.place, p.score)
        ),
      };
    case ADD_PLAYERS:
      const newPlayer = new Player(
        action.playerData.id.toString(),
        action.playerData.name,
        action.playerData.place,
        action.playerData.score
      );
      return {
        players: state.players.concat(newPlayer),
      };
    default:
      return state;
  }
};
