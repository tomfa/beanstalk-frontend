import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';

export default class SearchInput extends Component {
  static propTypes = {
    actions: PropTypes.object,
    status: PropTypes.string,
  };

  searchPokemon(event) {
    if (event.which === 13) {
      const val = ReactDom.findDOMNode(this.refs.keyword).value;
      this.props.actions.searchPokemonAction(val);

      document.getElementById('header').style.animationPlayState = 'running';
    }
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <input onKeyDown={this.searchPokemon.bind(this)} type="text" ref="keyword" className="form-control input-lg" placeholder="E.g. Charizard or Bulbasaur..." />
        </div>
        {()=>{
          if (this.props.status === 'PENDING') {
            return (<div className="loading" />);
          }
        }()}
      </div>
    );
  }
}
