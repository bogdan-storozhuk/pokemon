export interface PokemonData {
  name: string;
  types: PokemonType[];
  attack: number;
  defense: number;
  hp: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  weight: number;
  moves: number;
  sprite: string;
  id: number;
}

export interface PokemonResponseData {
  name: string;
  types: {
    type: {
      name: PokemonType;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
  id: number;
}

export interface SelectedPokemonStat {
  key: string;
  value: number | string;
}

export enum PokemonType {
  Normal = "normal",
  Fire = "fire",
  Water = "water",
  Electric = "electric",
  Grass = "grass",
  Ice = "ice",
  Fighting = "fighting",
  Poison = "poison",
  Ground = "ground",
  Flying = "flying",
  Psychic = "psychic",
  Bug = "bug",
  Rock = "rock",
  Ghost = "ghost",
  Dragon = "dragon",
  Dark = "dark",
  Steel = "steel",
  Fairy = "fairy",
}
