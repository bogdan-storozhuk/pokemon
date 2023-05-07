import { createContext, useReducer, useEffect, useContext } from "react";

import {
  initialState,
  pokemonReducer,
  POKEMON_ACTIONS,
  PokemonAction,
} from "../reducer/pokemonReducer";
import { getPokemonList, getPokemon } from "../../api";

import { formatPokemonData } from "../../utils";
import { PokemonData, PokemonResponseData } from "../../commonInterfaces";

interface PokemonProviderProps {
  children: React.ReactNode;
}

interface PokemonListApiResponse {
  data: {
    results: PokemonListResponseResult[];
  };
}

interface PokemonListResponseResult {
  name: string;
  url: string;
}

interface PokemonApiResponse {
  data: PokemonResponseData;
}

interface PokemonDataPromise extends Promise<PokemonData> {}

const PokemonContext = createContext({
  context: initialState,
  dispatch: (action: PokemonAction) => {},
});

const { SET_LOADING_STATE, SET_ERROR_STATE, GET_POKEMON_LIST } =
  POKEMON_ACTIONS;

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [context, dispatch] = useReducer(pokemonReducer, initialState);

  const { offset } = context;

  useEffect(() => {
    let mounted: boolean = true;
    const fetchData = async () => {
      dispatch({ type: SET_LOADING_STATE });
      try {
        const response: PokemonListApiResponse = await getPokemonList(offset);
        const promises: PokemonDataPromise[] = response.data.results.map(
          async (pokemon: PokemonListResponseResult) => {
            const response: PokemonApiResponse = await getPokemon(pokemon.url);
            const formattedPokemonData: PokemonData = formatPokemonData(
              response.data
            );

            return formattedPokemonData;
          }
        );

        const result: PokemonData[] = await Promise.all(promises);

        if (mounted) {
          dispatch({ type: GET_POKEMON_LIST, payload: result });
        }
      } catch (error) {
        if (mounted) {
          dispatch({ type: SET_ERROR_STATE, payload: error });
        }
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, [dispatch, offset]);

  return (
    <PokemonContext.Provider value={{ context, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
export const usePokemonContext = () => useContext(PokemonContext);
