import {request} from '../utils/RequestUtil';
import api from './urls'



const gen = params => {
  let url = params
  let method = ''
 
  const paramsArray = params.split(' ')
  if (paramsArray.length === 2) {
    method = paramsArray[0]
    url =paramsArray[1]
  }
  const headers={
    //token:window.localStorage.getItem("token")
  }
  
  return function(data) {
    return request({
      url,
      data,
      method,
      headers,
      timeout: 6000,
    })
  }
}

let apiData={}
for (const key in api) {
  apiData[key] = gen(api[key])
}


export default apiData


