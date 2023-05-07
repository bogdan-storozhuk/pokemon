import { PokemonData } from "../../commonInterfaces";

interface PokemonState {
  data: PokemonData[];
  selectedPokemon: PokemonData | null | undefined;
  loading: boolean;
  error: any;
  offset: number;
}

export interface PokemonAction {
  type: string;
  payload?: PokemonData[] | any | PokemonData;
}

export const initialState: PokemonState = {
  data: [],
  selectedPokemon: null,
  loading: false,
  error: null,
  offset: 0,
};

export const POKEMON_ACTIONS = {
  GET_POKEMON_LIST: "GET_POKEMON_LIST",
  SET_LOADING_STATE: "SET_LOADING_STATE",
  SET_ERROR_STATE: "SET_ERROR_STATE",
  INCREASE_OFFSET: "INCREASE_OFFSET",
  SELECT_POKEMON: "SELECT_POKEMON",
};

export const pokemonReducer = (
  state: PokemonState,
  action: PokemonAction
): PokemonState => {
  switch (action.type) {
    case POKEMON_ACTIONS.SET_LOADING_STATE: {
      return { ...state, loading: true, error: false };
    }
    case POKEMON_ACTIONS.SET_ERROR_STATE: {
      return { ...state, loading: false, error: action.payload };
    }
    case POKEMON_ACTIONS.GET_POKEMON_LIST: {
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        error: false,
        selectedPokemon: null,
      };
    }
    case POKEMON_ACTIONS.INCREASE_OFFSET: {
      return { ...state, offset: state.offset + 12 };
    }
    case POKEMON_ACTIONS.SELECT_POKEMON: {
      return {
        ...state,
        selectedPokemon: state.data.find(
          (pokemon) => pokemon.id === action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};
