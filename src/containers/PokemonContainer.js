import React from 'react';
import PokemonSelector from '../components/PokemonSelector.js';
import PokemonDetail from '../components/PokemonDetail.js';


class PokemonContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemoo: [],
      currentPokemon: null
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters';

    fetch(url)
    .then(response => response.json())
    .then(pokemoo => this.setState({pokemoo: pokemoo}))
    .catch(err => console.error(err));
  }

  handlePokemonSelected(index){
    const selectedPokemon = this.state.pokemoo[index];
    this.setState({currentPokemon: selectedPokemon});
  }

  render(){
    return(
      <div>
        <h2>Pokemoo</h2>
        <PokemonSelector pokemoo={this.state.pokemoo}
          onPokemonSelected={this.handlePokemonSelected} />
          <PokemonDetail pokemon={this.state.currentPokemon} />
      </div>
    );
  }
}

export default PokemonContainer;
