
export const FETCHMOVIEDATA='FETCHMOVIEDATA';  //请求电影信息
export const GETMOVIEDATA='GETMOVIEDATA';//获取到电影信息

export const FetchHotMovie='FetchHotMovie';  //请求正在上映电影
export const GetHotMovie='GetHotMovie';//获取到在上映电影


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

export function fetchHotMovie(data) {
  return {
    type: FetchHotMovie,
    data
  };
}

export function getHotMovie(data) {
  return {
    type: GetHotMovie,
    data
  };
}




