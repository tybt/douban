
//const host='http://localhost:8500'
const host='https://douban.uieee.com'
const baesHost='http://172.20.10.3:8000'

const apikey='0b2bdeda43b5688921839c8ecb20399b'
export default {
  
  chartsList:`GET /api/charts`,
  menuList:`GET /api/menuList`,
  loginByAccount:`POST ${host}/proxys/api/public/loginByAccount`,
  getOssUrl:`POST ${host}/proxys/api/public/getOss`,
  addMovieData:`POST ${host}/proxys/api/private/addMovies`,

  getDoubanTop:`GET ${host}/v2/movie/top250`,//Top250
  
  in_theaters:`GET ${host}/v2/movie/in_theaters`,//正在上映

  movieDetail:`PUT ${host}/v2/movie/subject/`,//电影条目
}



global.host = "http://172.20.10.3:8080"; //手机主机地址
//global.host='http://192.168.43.80:8080'//手机主机地址2
//global.host='http://192.168.0.105:8080'//宿舍无线主机地址
//global.host='http://10.8.31.159:8080'//图书馆wifi地址
//global.host='http://192.168.8.158:8080'//家里地址

global.Url = {
  //新接口
  getmoment: host + "/public/getMoment", //获取动态
  register: host + "/register", //注册
  loginWithAccount: host + "/login", //登录
  writeMoment: host + "/private/writeMoment", //发表状态
  uploadImg: host + "/private/postImg", //上传图片
  setLike: host + "/private/setLike", //点赞
  setReply: host + "/private/setReply" //回复
};
