import Rating from "../../components/Rating/Rating";
import StyledDetails from "../../components/StyledDetails/StyledDetails";
import PlayerProvider from "../../contexts/player/PlayerProvider";
import { Player } from "../../models/player";
import { RatingType } from "../../models/rating";
import "./SinglePlayer.css";

export type SinglePlayerProps = {
  player: Player;
};

export default function SinglePlayer({ player }: SinglePlayerProps) {
  return (
    <PlayerProvider value={player}>
      <div id="single-player">
        <StyledDetails>
          <StyledDetails.Summary>
            Summary <Rating type={RatingType.Stars} value={50} />{" "}
          </StyledDetails.Summary>
          <StyledDetails.Body>Body</StyledDetails.Body>
        </StyledDetails>
      </div>
    </PlayerProvider>
  );
}
