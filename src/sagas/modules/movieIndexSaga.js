import { put, take, call, fork,takeEvery } from 'redux-saga/effects';
import api from '../../service'

import * as action from '../../actions/movieIndexActions';



function* watchRequestMovieDetail(){
  yield takeEvery(action.FETCHMOVIEDETAIL,function* (actions){
    try{
      const data= yield call(api.movieDetail,{id:actions.id})
      console.log(data,'data')
      yield put(action.successMovieDetail(data));
      
    } catch ( error ){
      console.log(error,'error')
  
    }
  })
}

export default {
  watchRequestMovieDetail
}
