import { ProviderProps, useState } from "react";
import { Player } from "../../models/player";
import PlayerContext from "./playerContext";

const PlayerProvider = ({
  children,
  value: intialPlayer,
}: ProviderProps<Player>) => {
  const [player, setPlayer] = useState<Player | null>(intialPlayer);

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
