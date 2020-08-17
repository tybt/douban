import * as movieIndexActions from '../actions/movieIndexActions';




const initialState = () => {
	return {
    movieDetail:null,
	}
}


export default function movieIndexReducer(state=initialState, action) {
  switch (action.type) {
    case movieIndexActions.Reset:
      return Object.assign({},initialState());
    case movieIndexActions.SUCCESSMOVIEDETAIL:
      const {data}=action
      state.movieDetail=data
      return Object.assign({},state,{});
    default:
      return state;
  }
}