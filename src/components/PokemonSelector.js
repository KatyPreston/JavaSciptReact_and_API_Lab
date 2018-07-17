import React from 'react';

const PokemonSelector = (props) => {
  const options = props.pokemoo.map((pokemon, index) => {
    return <option value={index} key={index}>{pokemon.name}</option>
  })

  function handleChange(event){
    const selectedIndex = event.target.value;
    props.onPokemonSelected(selectedIndex);
  }

  return(
    <select id="pokemon-selector" onChange={handleChange} defaultValue="default">
      <option disable value="default"> Choose from the Pokemoo...</option>
      {options}
    </select>
  )
}

export default PokemonSelector;
