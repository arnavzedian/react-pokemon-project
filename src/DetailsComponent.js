import React from "react";
import styled from "styled-components";
const Main = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function DetailsComponent({ selectedPokemon }) {
  if (!selectedPokemon) return <Main></Main>;

  return (
    <Main>
      <div>
        <h1>{selectedPokemon.name.english}</h1>
        HP: {selectedPokemon.base.HP} <br></br>
        Attack: {selectedPokemon.base.Attack} <br></br>
        Defense: {selectedPokemon.base.Defense} <br></br>
        Sp. Attack: {selectedPokemon.base["Sp. Attack"]} <br></br>
        Sp. Defense: {selectedPokemon.base["Sp. Defense"]} <br></br>
        Speed: {selectedPokemon.base.Speed} <br></br>
      </div>
    </Main>
  );
}
