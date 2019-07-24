import {Platform,StyleSheet} from 'react-native';
var Dimensions = require('Dimensions');
global.vw = Dimensions.get('window').width/750;
global.vh=Dimensions.get('window').height;
global.platfrom=Platform //全局定义平台

global.ajaxPost=(url,data,success)=>{
    let tempData=''
    for(i in data){
        tempData=tempData+i+'='+data[i]+'&'    
    }
    console.log(tempData,'准备要上传的数据',url,'地址')
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:tempData//JSON.stringify(data),
    })
    // .then(res => res.text())
    // .then(text => console.log(text))
    .then((response) => response.json())
    .then((responseJson) =>success(responseJson))
    .catch((error) => {
        console.error(error);
    });

}

//需要认证的接口
global.ajaxPostAuth=(url,auth,data,success)=>{
    let tempData=''
    for(i in data){
        tempData=tempData+i+'='+data[i]+'&'    
    }
    let authObject={
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    for(i in auth){
        authObject[i]=auth[i]
    }
    console.log(tempData,'准备要上传的数据',url,'地址',authObject,'authObject')
    fetch(url,{
        method: 'POST',
        headers: authObject,
        body:tempData//JSON.stringify(data),
    })
    // .then(res => res.text())
    // .then(text => console.log(text))
    .then((response) => response.json())
    .then((responseJson) =>success(responseJson))
    .catch((error) => {
        console.error(error);
    });

}

//测试后台的数据有无异常
global.ajaxPosts=(url,data,success)=>{
    let tempData=''
    for(i in data){
        tempData=tempData+i+'='+data[i]+'&'    
    }
    console.log(tempData,'准备要上传的数据',url,'地址')
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:tempData//JSON.stringify(data),
    })
    .then(res => res.text())
    .then(text => console.log(text))
    .catch((error) => {
        console.error(error);
    });

}


global.ajaxPostImg=(url,data,success)=>{
    let formdata=new FormData();
    for(let i=0;i<data.length;i++){
        let file = {uri: data[i], type: 'application/octet-stream', name: 'image.jpg'};
        formdata.append('file',file)
    }
    console.log(formdata,'formdata',url,'要上传的地址')
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formdata,
    })
    //.then(res => res.text())
    //.then(text => console.log(text))
    .then((response) => response.json())
    .then((responseJson) =>success(responseJson))
    .catch((error) => {
        console.error(error);
    });
}

global.body={
    paddingTop:platfrom.os=="ios"?0:30,
    flex:1,
    position:'relative'
}
//global.host='http://172.20.10.5:8080'//手机主机地址
//global.host='http://192.168.0.107:8080'//宿舍无线主机地址
 global.host='http://10.8.30.66:8080'//图书馆wifi地址
//global.host='http://192.168.8.158:8080'//家里地址

global.chatHost='http://10.8.30.129:3000'//IM地址
global.liveChatHost='wss://10.8.30.129:3000/websocket'
global.Url={
    writeMoment:host+'/writeMoment/words',//发表状态
    uploadImg:host+'/uploader/imgs',//上传图片
    getmoment:host+'/writeMoment/getmoment',//获取动态
    changeImg:host+'/user/changeImg',//修改用户头像
    getReply:host+'/writeMoment/getReply',//获取时刻的评论
    setFavor:host+'/writeMoment/setFavor',//点赞
    deleteFavor:host+'/writeMoment/deleteFavor',//取消赞
    writeReply:host+'/writeMoment/writeReply',//写回复
    register:host+'/user/addAcount',//注册
    loginWithAccount:host+'/user/login',//登录

    //聊天版块rocketChat
    postMessage:chatHost+'/api/v1/chat.sendMessage',//发送消息
    getMessage:chatHost+'/api/v1/chat.getMessage',//获取消息
    chatLogin:chatHost+'/api/v1/login',//聊天登录
    chatRegister:chatHost+'/api/v1/users.register',//聊天注册
    chatChannelsCreate:chatHost+'/api/v1/channels.create',//创建一个聊天室

    //融云chat
    ry_getToken:'http://api-cn.ronghub.com/user/getToken.json',

}

global.content={flex:1}

global.themeColor='#4fb0fd' //主题风格

//定义普通的边框
global.commonBorder={
    right:{
        borderRightWidth:1,
        borderColor:'#cccccc',
    },
    left:{
        borderLeftWidth:1,
        borderColor:'#cccccc',
    },
    top:{
        borderTopWidth:1,
        borderColor:'#cccccc',
    },
    bottom:{
        borderBottomWidth:1,
        borderColor:'#cccccc',
    }

}