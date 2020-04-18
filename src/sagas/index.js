
import { all, fork } from 'redux-saga/effects';
import {watchRequestMovieData} from './collectionsSaga'
import {watchRequestMovieDetail}from './movieIndexSaga'


export default function* rootSaga() {
  yield all([fork(watchRequestMovieData),fork(watchRequestMovieDetail)]);
}
