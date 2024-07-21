import { PlayerInfo as PlayerInfoModel } from "../../../models/player";
import { Rating as RatingModel, RatingType } from "../../../models/rating";
import Rating from "../../ui/Rating/Rating";
import StyledDetails from "../../ui/StyledDetails/StyledDetails";

export type PlayerInfoProps = { info: PlayerInfoModel; average: RatingModel };

export default function PlayerInfo({ info, average }: PlayerInfoProps) {
  return (
    <StyledDetails>
      <StyledDetails.Summary>
        {info.name} <Rating type={RatingType.Stars} value={average.value} />
      </StyledDetails.Summary>
      <StyledDetails.Body>
        <ul>
          {Object.keys(info).map((key) => (
            <li key={key}>
              {key} : {(info as Record<string, string>)[key]}
            </li>
          ))}
        </ul>
      </StyledDetails.Body>
    </StyledDetails>
  );
}
