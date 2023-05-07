import {
  PokemonData,
  PokemonType,
  PokemonResponseData,
  SelectedPokemonStat,
} from "../commonInterfaces";

export const formatPokemonData = (
  pokemonData: PokemonResponseData
): PokemonData => ({
  name: pokemonData.name,
  types: pokemonData.types.map((type) => type.type.name),
  attack: pokemonData.stats[1].base_stat,
  defense: pokemonData.stats[2].base_stat,
  hp: pokemonData.stats[0].base_stat,
  specialAttack: pokemonData.stats[3].base_stat,
  specialDefense: pokemonData.stats[4].base_stat,
  speed: pokemonData.stats[5].base_stat,
  weight: pokemonData.weight,
  moves: pokemonData.moves.length,
  sprite: pokemonData.sprites.front_default,
  id: pokemonData.id,
});

export const getColorForPokemonType = (type: PokemonType): string => {
  switch (type) {
    case PokemonType.Normal:
      return "#A8A878";
    case PokemonType.Fire:
      return "#F08030";
    case PokemonType.Water:
      return "#6890F0";
    case PokemonType.Electric:
      return "#F8D030";
    case PokemonType.Grass:
      return "#78C850";
    case PokemonType.Ice:
      return "#98D8D8";
    case PokemonType.Fighting:
      return "#C03028";
    case PokemonType.Poison:
      return "#A040A0";
    case PokemonType.Ground:
      return "#E0C068";
    case PokemonType.Flying:
      return "#A890F0";
    case PokemonType.Psychic:
      return "#F85888";
    case PokemonType.Bug:
      return "#A8B820";
    case PokemonType.Rock:
      return "#B8A038";
    case PokemonType.Ghost:
      return "#705898";
    case PokemonType.Dragon:
      return "#7038F8";
    case PokemonType.Dark:
      return "#705848";
    case PokemonType.Steel:
      return "#B8B8D0";
    case PokemonType.Fairy:
      return "#EE99AC";
    default:
      return "#000000";
  }
};

export function formatSelectedPokemonData(
  pokemonData: PokemonData
): SelectedPokemonStat[] {
  const {
    types,
    attack,
    defense,
    hp,
    specialAttack,
    specialDefense,
    speed,
    weight,
    moves,
  } = pokemonData;

  return [
    { key: "Type", value: types.join(", ") },
    { key: "Attack", value: attack },
    { key: "Defense", value: defense },
    { key: "HP", value: hp },
    { key: "SP Attack", value: specialAttack },
    { key: "SP Defense", value: specialDefense },
    { key: "Speed", value: speed },
    { key: "Weight", value: weight },
    { key: "Total moves", value: moves },
  ];
}
