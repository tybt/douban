import * as movieIndexActions from '../actions/movieIndexActions';

const initialState = {
  movieDetail:null,
};

export default function movieIndexReducer(state = initialState, action) {
  switch (action.type) {
    case movieIndexActions.SUCCESSMOVIEDETAIL:
      
      const {data}=action
      state.movieDetail=data
      return Object.assign({},state,{});
    default:
      return state;
  }
}