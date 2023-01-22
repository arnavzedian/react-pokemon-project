import "./App.css";
import React from "react";
import pokemons from "./pokemon.json";
import styled from "styled-components";
import DetailsComponent from "./DetailsComponent";

const Main = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
`;

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid;
  font-size: 21px;
  padding: 15px;
  margin-bottom: 15px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;
const Button = styled.button`
  padding: 5px 15px;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  border-radius: 25px;
  color: #111;
  cursor: pointer;
  :hover {
    background-color: #111;
    color: #fff;
  }
`;

const PokemonRow = ({ pokemon, setSelectedPokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>

    <td>
      <Button
        onClick={() => {
          setSelectedPokemon(pokemon);
        }}
      >
        Show Details
      </Button>
    </td>
  </tr>
);

function App() {
  const [selectedPokemon, setSelectedPokemon] = React.useState(null);
  const [filter, filterSet] = React.useState("");
  return (
    <Container>
      <Main>
        <h1 className="title">Pokemon Search</h1>
        <Input
          placeholder="search pokemon"
          type="text"
          value={filter}
          onChange={(evt) => filterSet(evt.target.value)}
        />

        <Row>
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemons
                .filter((pokemon) =>
                  pokemon.name.english
                    .toLocaleLowerCase()
                    .includes(filter.toLocaleLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    setSelectedPokemon={setSelectedPokemon}
                    key={pokemon.id}
                    pokemon={pokemon}
                  ></PokemonRow>
                ))}
            </tbody>
          </table>

          <DetailsComponent selectedPokemon={selectedPokemon} />
        </Row>
      </Main>
    </Container>
  );
}

export default App;
