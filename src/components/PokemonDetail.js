import React from 'react';

const PokemonDetail = (props) => {
  if(!props.pokemon) return null;
  return(
    <div>
      <h3>{props.pokemon.name}</h3>
      <p>Species: {props.pokemon.species}</p>
      <p>Wand: {props.pokemon.wand.wood}</p>
      <img src={props.pokemon.image}></img>
    </div>
  );
}

export default PokemonDetail;
