import React, { Component, PropTypes } from 'react';

export default class PokemonList extends Component {
  static propTypes = {
    actions: PropTypes.object,
    pokemons: PropTypes.array,
    status: PropTypes.string,
    keyword: PropTypes.string
  };

  nextPage() {
    this.props.actions.searchNextPageAction();
  }

  render() {
    return (
      <div>
        <div className="row">
          {
              this.props.pokemons.map((item, index) => {
                return (
                  <div className="col-sm-4 image-item" key={`PokemonItem_${item.id}_${index}`}>
                    <h3>{item.name}</h3>
                    <img src={item.imageUrl} />
                    <span className="meta-info weight"><strong>Weight</strong>: {item.weight}</span>
                    <span className="meta-info height"><strong>Height</strong>: {item.height}</span>
                    <span className="meta-info id"><strong>id</strong>: {item.id}</span>
                  </div>
                );
              })
          }
          <div className="clearfix" />
        </div>

        {
          (() => {
            if (this.props.status === 'DONE' && !this.props.keyword) {
              return (
                <div style={{marginBottom: '20px'}} className="row">
                  <div className="col-md-6 col-md-offset-3">
                    <button  onClick={this.nextPage.bind(this)} type="button" className="btn btn-default btn-lg btn-block">Load More</button>
                  </div>
                </div>
              );
            } else if (this.props.status === 'PENDING_FOR_NEXT') {
              return (
                <div style={{marginBottom: '20px'}} className="row">
                  <div className="col-md-6 col-md-offset-3">
                    <div className="loading" />
                  </div>
                </div>
              );
            }
          })()
        }
      </div>
    );
  }
}
