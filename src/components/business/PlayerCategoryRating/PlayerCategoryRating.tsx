import { PlayerRatingsCategory as CategoriesModel } from "../../../models/playerRatings";
import { RatingType } from "../../../models/rating";
import Rating from "../../ui/Rating/Rating";
import StyledDetails from "../../ui/StyledDetails/StyledDetails";

export type PlayerRatingProps = CategoriesModel;

export default function PlayerCategoryRating({
  average,
  categoryName,
  ratings,
}: PlayerRatingProps) {
  return (
    <StyledDetails>
      <StyledDetails.Summary>
        {categoryName}
        <Rating type={RatingType.Stars} value={average.value} />
      </StyledDetails.Summary>
      <StyledDetails.Body>
        <ul>
          {ratings.map(({ name, value }) => (
            <li>
              {name} : <Rating type={RatingType.Numbers} value={value} />
            </li>
          ))}
        </ul>
      </StyledDetails.Body>
    </StyledDetails>
  );
}
