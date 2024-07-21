import PlayerCategoryRating from "../../components/business/PlayerCategoryRating/PlayerCategoryRating";
import PlayerInfo from "../../components/business/PlayerInfo/PlayerInfo";
import PlayerProvider from "../../contexts/player/PlayerProvider";
import { Player } from "../../models/player";
import "./SinglePlayer.css";

export type SinglePlayerProps = {
  player: Player;
};

export default function SinglePlayer({ player }: SinglePlayerProps) {
  return (
    <PlayerProvider value={player}>
      <div id="single-player">
        <PlayerInfo average={player.ratings.average} info={player.info} />
        <>
          {player.ratings.categories.map((category) => (
            <PlayerCategoryRating key={category.categoryName} {...category} />
          ))}
        </>
      </div>
    </PlayerProvider>
  );
}
