import { put, take, call, fork,takeEvery } from 'redux-saga/effects';

import api from '../../service/'
import * as action from '../../actions/collectionsAction';


function* watchRequestMovieData(){
  yield takeEvery(action.FETCHMOVIEDATA,function* (actions){
    try{
      const data= yield call(api.getDoubanTop)
      console.log(data,'data')
      yield put(action.getMovieData(data));
      
    } catch ( error ){
      console.log(error,'error')
      //yield put( receiveArticleList( [],  ) );
  
    }
  })
}

export default{
  watchRequestMovieData
}
