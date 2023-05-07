import styled from "styled-components";

import { usePokemonContext } from "./store/context/pokemonContext";
import PokemonList from "./components/pokemonList/pokemonList";
import SelectedPokemon from "./components/selectedPokemon/selectedPokemon";
import Loader from "./components/loader/loader";

const App = () => {
  const {
    context: { data, selectedPokemon, loading },
  } = usePokemonContext();

  return (
    <>
      <Header>
        <Title>Pokedex</Title>
      </Header>
      <Main>
        {data.length !== 0 && <PokemonList pokemonData={data} />}
        {selectedPokemon && <SelectedPokemon data={selectedPokemon} />}
      </Main>
      {loading && <Loader />}
    </>
  );
};

export default App;

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 2.4rem;
`;

const Title = styled.h1`
  border: 3px solid #333;
  padding: 1.6rem 12.8rem;
  font-size: 3.6rem;
  font-weight: 500;

  @media (max-width: 37.5em) {
    font-size: 2.4rem;
    padding: 0.8rem 8rem;
  }

  @media (max-width: 56.25em) {
    font-size: 3rem;
    padding: 1.2rem 9.6rem;
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3.2rem;
  position: relative;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3.2rem 9.6rem;

  @media (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }
`;
