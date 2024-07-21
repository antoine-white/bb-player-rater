import { PlayerInfo as PlayerInfoModel } from "../../../models/player";
import StyledDetails from "../../ui/StyledDetails/StyledDetails";

export type PlayerInfoProps = { info: PlayerInfoModel };

export default function PlayerInfo({ info }: PlayerInfoProps) {
  return (
    <StyledDetails>
      <StyledDetails.Summary>{info.name}</StyledDetails.Summary>
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
