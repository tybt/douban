import * as collectionsAction from '../actions/collectionsAction';

const initialState = {
  movieData:[],
  top250Total:null
};

export default function collectionsReducer(state = initialState, action) {
  switch (action.type) {
    case collectionsAction.GETMOVIEDATA:
      console.log(action,'action')
      const {data}=action
      state.movieData=data.subjects
      state.top250Total=data.total
      return Object.assign({}, state, {});
    default:
      return state;
  }
}