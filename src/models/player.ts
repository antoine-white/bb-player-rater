import { PlayerRatings } from "./playerRatings";

export type PlayerInfo = {
  name: string;
};

export type Player = {
  info: PlayerInfo;
  ratings: PlayerRatings;
};
