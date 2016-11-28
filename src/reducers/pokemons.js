import * as types from '../constants/SearchActionTypes';

const initialState = {
  status: 'IDLE',
  pokemons: [],
  query: '',
  page: 1,
};

export default function searchPokemons(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_DONE:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.pokemons],
        status: 'DONE',
        page: action.page,
        query: action.query,
      };
    case types.SEARCH_PENDING_FOR_NEXT:
      return {
        ...state,
        status: 'PENDING_FOR_NEXT',
      };
    case types.SEARCH_PENDING:
      let page = state.query !== action.query ? 1 : state.page;
      return {
        ...state,
        pokemons: [],
        status: 'PENDING',
        query: action.query,
        page
      };
    default:
      return state;
  }
}
