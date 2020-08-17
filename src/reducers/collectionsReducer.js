import * as collectionsAction from '../actions/collectionsAction';

const initialState = {
  movieData: [],
  hotMovie:[],
  top250Total: null
};

export default function collectionsReducer(state = initialState, action) {
  switch (action.type) {
    case collectionsAction.GETMOVIEDATA:
      let { data } = action
      state.movieData = data.subjects
      state.top250Total = data.total
      return Object.assign({}, state, {});
    case collectionsAction.GetHotMovie:
      console.log(action, 'action')
      let datas = action.data
      state.hotMovie = datas.subjects
      return Object.assign({}, state, {});
    default:
      return state;
  }
}