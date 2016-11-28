import * as types from '../constants/SearchActionTypes';

const initialState = {
  status: 'IDLE',
  pokemons: [],
};

export default function searchPokemons(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_DONE:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.pokemons],
        status: 'DONE',
        page: action.page,
        keyword: action.keyword,
      };
    case types.SEARCH_PENDING_FOR_NEXT:
      return {
        ...state,
        status: 'PENDING_FOR_NEXT',
      };
    case types.SEARCH_PENDING:
      return {
        ...state,
        pokemons: [],
        status: 'PENDING',
      };
    default:
      return state;
  }
}
