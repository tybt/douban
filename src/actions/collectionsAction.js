
export const FETCHMOVIEDATA='FETCHMOVIEDATA';  //请求电影信息
export const GETMOVIEDATA='GETMOVIEDATA';//获取到电影信息


export function requestMovieData(data) {
  return {
    type: FETCHMOVIEDATA,
    data
  };
}

export function getMovieData(data) {
  return {
    type: GETMOVIEDATA,
    data
  };
}

