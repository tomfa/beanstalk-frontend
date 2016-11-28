import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

import * as action from '../actions/SearchActions';
import SearchInput from '../components/SearchInput';
import PokemonList from '../components/PokemonList';

@connect(state => ({
  pokemons: state.pokemons.pokemons,
  status: state.pokemons.status,
  query: state.pokemons.query,
}))
export default class SearchApp extends Component {

  static propTypes = {
    status: PropTypes.string.isRequired,
    pokemons: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(action.getPokemons());
  }

  render() {
    const actions = bindActionCreators(action, this.props.dispatch);
    return (
      <div>
        <div id="header" className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 search-bar-content">
                <h1>Serch dem pokimans</h1>
                <SearchInput actions={actions} status={this.props.status} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <PokemonList actions={actions} pokemons={this.props.pokemons} status={this.props.status} keyword={this.props.query}/>
        </div>
      </div>
    );
  }
}
