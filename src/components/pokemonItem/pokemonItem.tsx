import styled from "styled-components";

import { PokemonData, PokemonType } from "../../commonInterfaces";
import { getColorForPokemonType } from "../../utils";

interface PokemonTypeProps {
  type: PokemonType;
}

interface PokemonItemProps {
  data: PokemonData;
  selectPokemon: (id: number) => void;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ data, selectPokemon }) => (
  <PokemonItemContainer onClick={() => selectPokemon(data.id)}>
    <PokemonImgContainer>
      <PokemonImg src={data.sprite} alt="Pokemon" />
    </PokemonImgContainer>
    <PokemonContentContainer>
      <PokemonName>{data.name}</PokemonName>
      <PokemonTags>
        {data.types.map((type) => (
          <PokemonTag key={type} type={type}>
            {type}
          </PokemonTag>
        ))}
      </PokemonTags>
    </PokemonContentContainer>
  </PokemonItemContainer>
);

export default PokemonItem;

const PokemonItemContainer = styled.div`
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  overflow: hidden;
  transition: all 400ms;
  cursor: pointer;

  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
  }
`;

const PokemonImgContainer = styled.div`
  padding: 1.6rem;
`;

const PokemonImg = styled.img`
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  width: 100%;
`;

const PokemonContentContainer = styled.div`
  text-align: center;
  padding: 0 0.8rem 4.8rem 0.8rem;
`;

const PokemonName = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

const PokemonTags = styled.div`
  display: flex;
  gap: 0.4rem;
  @media (max-width: 56.25em) {
    flex-direction: column;
  }
`;

const PokemonTag = styled.span<PokemonTypeProps>`
  display: inline-block;
  padding: 0.4rem 1.2rem;
  font-size: 1.4rem;
  border-radius: 8px;
  background-color: ${(props) => getColorForPokemonType(props.type)};
`;
