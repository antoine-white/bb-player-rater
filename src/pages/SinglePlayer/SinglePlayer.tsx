import Rating from "../../components/Rating/Rating";
import StyledDetails from "../../components/StyledDetails/StyledDetails";
import { RatingType } from "../../models/rating";
import "./SinglePlayer.css";

export default function SinglePlayer() {
  return (
    <div id="single-player">
      <StyledDetails>
        <StyledDetails.Summary>
          Summary <Rating type={RatingType.Stars} value={50} />{" "}
        </StyledDetails.Summary>
        <StyledDetails.Body>Body</StyledDetails.Body>
      </StyledDetails>
    </div>
  );
}
