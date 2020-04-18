import React from "react";
import {StyleSheet,View,ScrollView,Image,Text,TouchableWithoutFeedback,AsyncStorage,Alert,RefreshControl} from "react-native";
import Share from "../component/share";

export default class tab1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      share: 0,
      data: [],
      setFreshing:true
    };
  }
  componentDidMount() {
    //this.fetchData()  //获取列表
  }
  render() {
    return (
      <View style={{ flex: 1 }}>

        {this.Detail()}

        {this.state.share == 1 ? (
          <Share
            navigation={this.props.navigation}
            getShare={() => this.getShares()}
          />
        ) :null}
      </View>
    );
  }
  Detail() {
    return (
      <ScrollView style={{ paddingBottom: 80 }}>
        <RefreshControl 
        refreshing={this.state.setFreshing}
        onRefresh={this.onRefresh}></RefreshControl>
        {this.state.data.map((elem, index) => {
          return(
          <View style={styles.m_brand}>
            <View style={styles.userInfo}>
              {
                elem.iconImage?<Image source={{uri:elem.iconImage}} style={styles.userImg}/>:<Image source={require("../../static/component/defaultIcon.png")} style={styles.userImg}/>
              }
              <View style={styles.user_info_box}>
                <Text style={styles.userName}>{elem.account}</Text>
                <Text style={styles.user_reply_time}>{elem.creatTime}</Text>
              </View>
              <Image
                style={styles.more}
                source={require("../../static/main/more.png")}
              />
            </View>
            <Text style={styles.content}>{elem.content}</Text>
            <View style={styles.contentImgBox}>
              {
                elem.images.map((item,list)=>{
                  return(<Image style={styles.contentImg} source={{uri:item}}/>)
                })
              }
            </View>
            <View style={styles.main_3}>
              <TouchableWithoutFeedback onPress={() => this.setFavour(index,elem.id)}>
                <View style={styles.main_3_brand}>
                  <Image style={styles.tabIcon}
                    source={elem.islike==1?require("../../static/main/favor_1.png"):require("../../static/main/favor.png")}
                  />
                  <Text>{elem.likeNum}</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.goMomentDetail(elem)}>
                <View style={styles.main_3_brand}>
                  <Image style={styles.tabIcon}
                    source={require("../../static/main/write.png")}
                  />
                  <Text>{elem.replyNum}</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.setShare()}>
                <View style={styles.main_3_brand}>
                  <Image
                    style={styles.tabIcon}
                    source={require("../../static/main/transfrom.png")}
                  />
                  <Text>122</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.brandBorder} />
          </View>          
          )
        })}
      </ScrollView>
    );
  }
  onRefresh=()=>{
    console.log('sssss')
    this.setState({
      setFreshing:true
    })
  }
  fetchData(){
    ajaxPost(this.props,Url.getmoment, {}, (res) => {
      console.log(res,'res')
      let tempData=[];
      for(let item of res.data.list){
        
        if(item.images){
          item.images=item.images.split(",")        }
        else{
          item.images=[]
        }
        tempData.push(item)
      }
      this.setState({
        data: tempData
      });
    });
  }
  setFavour(index,momentId) {
    console.log(momentId,'momentId')
    ajaxPost(this.props,Url.setLike,{momentId:momentId},(res)=>{
      console.log(res,'res');
      if(res.code==1){
        let tempdata=this.state.data;
        tempdata[index].islike=1
  
        this.setState({
          data:tempdata
        })
      }
      else{
        Alert.alert(
          '提示',
          '您已经点过赞',
          [
            {text: '确定', onPress: () => console.log('Ask me later pressed')},
          ],
          { cancelable: false }
        )
      }
    })
  }
  setShare() {
    this.setState({ share: 1 });
  }
  getShares() {
    this.setState({ share: 0 });
  }
  goMomentDetail(data) {
    console.log(this.props, "this.props.navigation");
    this.props.navigation.navigate({routeName:"momentDetail",params:{data:JSON.stringify(data)}});
  }
  
}
const styles = StyleSheet.create({
  user_reply_time:{
    color:"#666",
    fontSize:24*vw,
    marginTop:5*vw
  },

  main_3: {
    marginTop: 20 * vw,
    paddingLeft: 80 * vw,
    paddingRight: 80 * vw,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tabIcon: {
    width: 36 * vw,
    height: 36 * vw,
    marginRight: 15 * vw
  },
  main_3_brand: {
    flexDirection: "row",
    alignItems: "center"
  },
  contentImgBox: {
    flexDirection: "row",
    marginTop: 20 * vw,
    paddingRight: 20 * vw
  },
  contentImg: {
    marginLeft: 20 * vw,
    width: 220 * vw,
    height: 220 * vw,
    borderRadius: 10 * vw
  },
  content: {
    marginTop: 20 * vw,
    width: 710 * vw,
    marginLeft: 20 * vw,
    fontSize: 28 * vw
  },
  user_info_box: {
    width: 560 * vw,
    marginLeft: 15 * vw
  },
  brandBorder: {
    marginTop: 20 * vw,
    backgroundColor: "#f2f2f2",
    height: 10 * vw
  },
  m_brand: {
    paddingTop: 20 * vw
  },
  userImg: {
    marginLeft: 20 * vw,
    width: 74 * vw,
    height: 74 * vw,
    borderRadius: 37 * vw
  },
  userName: {
    color: "#333",
    fontSize: 30 * vw,
    fontWeight:'bold'
  },
  more: {
    marginTop: 10 * vw,
    height: 6 * vw,
    width: 30 * vw
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "flex-start"
  }
});
