import { Rating } from "./rating";

export interface Averagable {
  average: Rating;
}

export type NamedRating = Rating & { name: string };

export type PlayerRatingsCategory = Averagable & {
  categoryName: string;
  ratings: NamedRating[];
};

export type PlayerRatings = Averagable & {
  categories: PlayerRatingsCategory[];
};
