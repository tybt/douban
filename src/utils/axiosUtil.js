import axios from "axios";
import {AsyncStorage} from 'react-native'

global.ajaxPost = (url,data,props) => {
  // return new Promise( async (resolve,reject)=>{
  //   console.log(url, data, "上传地址和数据");
  //   axios({
  //     method: "post",
  //     url: url,
  //     headers: {
  //       token: await AsyncStorage.getItem("token"),
  //       "Content-Type": "application/json;charset=utf-8"
  //     },
  //     data: data
  //   })
  //   .then(res => {
  //       if(res.status==200){
  //         const {data,code,msg}=res.data;
  //         if(code==200){
  //           resolve(data);
  //         }
  //         else{
  //           console.log('数据异常',msg)
  //           resolve(msg)
  //         }
          
  //       }
  //       else{
  //         console.log('服务器异常',res, "后台返回数据")
  //       }
        
  //   })
  //   .catch(function(err) {
  //       console.log(err, "err");
  //   });
  // })

  
};

global.ajaxPostImg = async (url, data, success) => {
  let formdata = new FormData();
  for (let i = 0; i < data.length; i++) {
    let file = {
      uri: data[i],
      type: "application/octet-stream",
      name: "image.jpg"
    };
    formdata.append("file", file);
  }
  console.log(formdata, "formdata", url, "要上传的地址");
  fetch(url, {
    method: "POST",
    headers: {
      token: await AsyncStorage.getItem("token"),
      "Content-Type": "multipart/form-data"
    },
    body: formdata
  })
    .then(response => response.json())
    .then(responseJson => success(responseJson))
    .catch(error => {
      console.error(error);
    });
};