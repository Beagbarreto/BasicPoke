import React from "react";
import { mockPokemonData } from "../mock/pokeData";

const PokeCard = () => {
  return (
    <div>
      <h1>POKECARD</h1>
      <h1>{mockPokemonData.name}</h1>
      <div>
        <img src={mockPokemonData.sprites.front_default} />
        <img src={mockPokemonData.sprites.front_shiny} />
      </div>
      <a href={mockPokemonData.video}>video click here</a>
    </div>
  );
};

export default PokeCard;
