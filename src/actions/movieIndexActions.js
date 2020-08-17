
export const Reset ='Reset'

export const FETCHMOVIEDETAIL='FETCHMOVIEDETAIL';  //请求电影详细信息
export const SUCCESSMOVIEDETAIL='SUCCESSMOVIEDETAIL';  //请求电影详细信息

export function requestMovieDetail(id) {
  return {
    type: FETCHMOVIEDETAIL,
    id
  };
}

export function successMovieDetail(data) {
  return {
    type: SUCCESSMOVIEDETAIL,
    data
  };
}

export function reset() {
  return {
    type: Reset,
  };
}



