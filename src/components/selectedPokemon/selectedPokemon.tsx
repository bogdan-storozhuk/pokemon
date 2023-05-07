import React from "react";

import styled from "styled-components";
import { PokemonData, SelectedPokemonStat } from "../../commonInterfaces";
import { formatSelectedPokemonData } from "../../utils";

interface SelectedPokemonProps {
  data: PokemonData;
}

const SelectedPokemon: React.FC<SelectedPokemonProps> = ({ data }) => {
  const stats: SelectedPokemonStat[] = formatSelectedPokemonData(data);

  return (
    <div>
      <SelectedPokemonContainer>
        <SelectedPokemonImgContainer>
          <SelectedPokemonImg src={data.sprite} alt="Pokemon" />
        </SelectedPokemonImgContainer>
        <SelectedPokemonContentContainer>
          <PokemonName>{`${data.name} #${data.id}`}</PokemonName>
          <PokemonStats>
            {stats.map((stat) => (
              <React.Fragment key={stat.key}>
                <PokemonStat>{stat.key}</PokemonStat>
                <PokemonStat>{stat.value}</PokemonStat>
              </React.Fragment>
            ))}
          </PokemonStats>
        </SelectedPokemonContentContainer>
      </SelectedPokemonContainer>
    </div>
  );
};

export default SelectedPokemon;

const SelectedPokemonContainer = styled.div`
  position: sticky;
  top: 15%;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
`;

const SelectedPokemonImgContainer = styled.div`
  padding: 1.6rem;
  overflow: hidden;
`;

const SelectedPokemonImg = styled.img`
  width: 100%;
  transition: all 400ms;

  &:hover {
    transform: scale(1.1);
  }
`;

const SelectedPokemonContentContainer = styled.div`
  text-align: center;
  padding: 0 0.8rem 4.8rem 0.8rem;
`;

const PokemonName = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

const PokemonStats = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border: 1px solid #333;
`;

const PokemonStat = styled.div`
  border: 1px solid #333;
  font-size: 1.4rem;
  line-height: 1.6;
`;
