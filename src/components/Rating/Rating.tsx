import { Rating as RatingModel, RatingType } from "../../models/rating";
import NumberRating from "./NumberRating";
import StarRating from "./StarsRating";

export type RatingProps = RatingModel & {
  type: RatingType;
};

export type SubRatingProps = RatingModel;

export default function Rating({ type, value }: RatingProps) {
  return type === RatingType.Stars ? (
    <StarRating value={value} />
  ) : (
    <NumberRating value={value} />
  );
}
