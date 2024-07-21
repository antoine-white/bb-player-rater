import Star, { StarFilledType } from "../Star/Star";
import { SubRatingProps } from "./Rating";

export default function StarRating({ value }: SubRatingProps) {
  const toStarFilledType = (i: number) =>
    ["filled", "half-filled", "empty"][
      [(i + 1) * 20, (i + 1) * 20 - 10, i * 20]
        .map((e) => Math.abs(value - e))
        .reduce((r, v, i, a) => (v >= a[r] ? r : i), -1)
    ];

  return (
    <div className="star-rating">
      {[...new Array(5)].map((_, i) => (
        <Star key={i} type={toStarFilledType(i) as StarFilledType} />
      ))}
    </div>
  );
}
