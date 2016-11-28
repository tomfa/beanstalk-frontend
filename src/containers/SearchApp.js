import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/SearchActions';
import SearchInput from '../components/SearchInput';
import PokemonList from '../components/PokemonList';

@connect(state => ({
  pokemons: state.pokemons.pokemons,
  status: state.pokemons.status,
}))
export default class SearchApp extends Component {

  static propTypes = {
    status: PropTypes.string.isRequired,
    pokemons: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const actions = bindActionCreators(action, this.props.dispatch);
    return (
      <div>
        <div id="header" className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 search-bar-content">
                <h1>Search on 500px</h1>
                <SearchInput actions={actions} status={this.props.status} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <PokemonList actions={actions} pokemons={this.props.pokemons} status={this.props.status}/>
        </div>
      </div>
    );
  }
}
