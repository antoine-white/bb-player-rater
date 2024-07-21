import { createContext } from "react";
import { Player } from "../../models/player";

// will be usefull to handle edit of player with given function
export type PlayerContextType = {
  player: Player | null;
  setPlayer: (player: Player) => void;
};

const PlayerContext = createContext<PlayerContextType>({
  player: null,
  setPlayer(player) {},
});

export default PlayerContext;
