
import { all, fork } from 'redux-saga/effects';
import collectionsSaga from './modules/collectionsSaga'
import movieIndexSaga from './modules/movieIndexSaga'




const allData={...collectionsSaga,...movieIndexSaga}
const allArray=[]


for(let i in allData){
  allArray.push(fork(allData[i]))
}


export default function* rootSaga() {
  yield all([...allArray]);
}
