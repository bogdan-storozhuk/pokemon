import { useCallback } from "react";
import styled from "styled-components";

import { PokemonData } from "../../commonInterfaces";

import PokemonItem from "../pokemonItem/pokemonItem";
import { usePokemonContext } from "../../store/context/pokemonContext";
import { POKEMON_ACTIONS } from "../../store/reducer/pokemonReducer";

interface PokemonListProps {
  pokemonData: PokemonData[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonData }) => {
  const { dispatch } = usePokemonContext();

  const loadMore = () => {
    dispatch({ type: POKEMON_ACTIONS.INCREASE_OFFSET });
  };

  const selectPokemon = useCallback(
    (id: number) => {
      dispatch({ type: POKEMON_ACTIONS.SELECT_POKEMON, payload: id });
    },
    [dispatch]
  );

  return (
    <div>
      <PokemonListContainer>
        {pokemonData.map((pokemonItemData) => (
          <PokemonItem
            key={pokemonItemData.id}
            data={pokemonItemData}
            selectPokemon={selectPokemon}
          />
        ))}
      </PokemonListContainer>
      <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
    </div>
  );
};

export default PokemonList;

const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  margin-bottom: 3.2rem;

  @media (max-width: 25em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LoadMoreButton = styled.button`
  font-size: 2rem;
  padding: 1.6rem 3.2rem;
  border-radius: 9px;
  text-decoration: none;
  font-weight: 600;

  border: none;
  cursor: pointer;

  background-color: #0077c2;
  color: #ffffff;
  align-self: end;

  transition: all 300ms;
  width: 100%;

  &:hover {
    background-color: #005ea8;
    color: #f1f1f1;
  }
`;
