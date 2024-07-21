import { Player, PlayerInfo } from "../models/player";
import { PlayerRatings } from "../models/playerRatings";

class PlayerMocks {
  static get info(): PlayerInfo {
    return { name: "player" };
  }

  static get ratings(): PlayerRatings {
    return {
      average: { value: 50 },
      categories: [
        {
          average: { value: 50 },
          categoryName: "Shooting",
          ratings: [
            { value: 60, name: "2pt" },
            { value: 40, name: "3pt" },
          ],
        },
      ],
    };
  }

  static get player(): Player {
    return {
      info: PlayerMocks.info,
      ratings: PlayerMocks.ratings,
    };
  }
}

export default PlayerMocks;
