import axios from 'axios';


export function request(option){
  
  if(option.method=="PUT"){
    let otherUrl=""
    let tempData=Object.assign({},option.data)
    for(let i in tempData){
      otherUrl=otherUrl+tempData[i]
    }
    option.url=option.url+otherUrl
    option.method="GET"
    delete option.data
  }
  return new Promise((resolve,reject)=>{
    console.log(option,'option')

    axios(option).then((response)=>{
      if(response.status!=200){
        message.warn("网络错误,请稍后再试");
      }
      else{
        console.log(response,'response')
        const {data,code,msg}=response.data
        return resolve(response.data)
        
        if(code!=200){
          console.log(msg);
        }
        else{
          
        }
        
      }
      
    }).catch((err)=>{
      console.log(err)
      
    })
  })
}