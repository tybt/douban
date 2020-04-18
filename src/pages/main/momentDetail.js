import React from "react";
import {StyleSheet,View,TouchableWithoutFeedback,Image,ScrollView,TouchableOpacity,Text,TextInput,KeyboardAvoidingView} from "react-native";
import Modal from '../component/MarskIndicator'

export default class momentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
      momentData:JSON.parse(this.props.navigation.state.params.data),
      replyWord:"" 
    };
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <View style={body}>
        <View style={styles.main_1}>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.shareIcon} source={require("../../static/component/back.png")}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image style={styles.shareIcon} source={require("../../static/main/moment_03.png")}/>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView style={styles.main_2}>
          {this.Detail()}
          {this.reply()}
        </ScrollView>
        <KeyboardAvoidingView style={[styles.main_3,commonBorder.top]}>
          <View>
            <TextInput style={styles.textInput} ref="text1" onChangeText={(text)=>this.setState({replyWord:text})} placeholder="请输入回复内容"></TextInput>
          </View>
          <TouchableOpacity onPress={()=>this.sendReply()}>
            <Text style={styles.replyBtn}>回复</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <Modal showModal={this.state.showModal} closeMarsk={()=>this.closeMarsk()}></Modal>
      </View>
    );
  }
  Detail() {
    return (
      <View style={styles.m_brand}>
        <TouchableOpacity onPress={() => this.goMomentDetail()}>
          <View style={styles.userInfo}>
          {
            this.state.momentData.iconImage?<Image source={{uri:this.state.momentData.iconImage}} style={styles.userImg}/>:<Image source={require("../../static/component/defaultIcon.png")} style={styles.userImg}/>
          }
            <View style={styles.user_info_box}>
              <Text style={styles.userName}>{this.state.momentData.account}</Text>
              <Text style={styles.user_reply_time}>{this.state.momentData.creatTime}</Text>
            </View>
            <Image
              style={styles.more}
              source={require("../../static/main/more.png")}
            />
          </View>
          <Text style={styles.content}>{this.state.momentData.content}</Text>
          <View style={styles.contentImgBox}>
          {
            this.state.momentData.images.map((item,index)=>{
              return(
                <Image style={styles.contentImg} source={{uri:item}}/>
              )
            })
          }
          </View>
          
          <View style={styles.brandBorder} />
        </TouchableOpacity>
      </View>
    );
  }
  reply() {
    return (
      <View>
        <View style={[styles.topic, commonBorder.bottom]}>
          <Text style={styles.topicBrand}>回复 234</Text>
          <View style={styles.topic_1}>
            <Text style={styles.topicBrand}>赞</Text>
            <Image
              style={styles.tabIcon}
              source={require("../../static/main/favor.png")}
            />
            <Text style={styles.topicBrand}>234</Text>
          </View>
          <View style={styles.topic_1}>
            <Text style={styles.topicBrand}>转发</Text>
            <Image
              style={styles.tabIcon}
              source={require("../../static/main/transfrom.png")}
            />
            <Text style={styles.topicBrand}>234</Text>
          </View>
          <View style={styles.topic_1}>
            <Text style={styles.topicBrand}>收藏</Text>
            <Image
              style={styles.tabIcon}
              source={require("../../static/component/collection_1.png")}
            />
            <Text style={styles.topicBrand}>234</Text>
          </View>
        </View>
        <View>
          <Text>全部回复</Text>
        </View>
      </View>
    );
  }
  sendReply(){
    this.setState({
      showModal:true
    })
    ajaxPost(this.props,Url.setReply,
      {
        content:this.state.replyWord,
        momentId:this.state.momentData.id
      },(res)=>{
        setTimeout(()=>{
          this.setState({
            showModal:false,
          })
        },2000)
        this.refs.text1.clear();//清除文本内容
        console.log(res,'res')
      }
    )
  }
  closeMarsk(){
    this.setState({
      showModal:false
    })
  }
}
const styles = StyleSheet.create({
  textInput:{
    width:550*vw
  },
  replyBtn:{
    backgroundColor:'#67ba62',
    color:'#ffffff',
    width:100*vw,
    height:60*vw,
    textAlign:'center',
    lineHeight:60*vw
  },
  main_3:{
    backgroundColor:'#ffffff',
    zIndex:99,
    position:'absolute',
    bottom:0,
    width:'100%',
    height:100*vw,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:30*vw,
    paddingRight:30*vw,
    justifyContent:'space-between'
  },
  topic_1:{
    width:200*vw,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginLeft:20*vw
  },
  topic: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1
  },
  topicBrand: {
    paddingTop: 20 * vw,
    paddingBottom: 20 * vw,
    marginLeft:10*vw,
    marginRight:10*vw
  },
  main_1: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 80 * vw,
    flexDirection: "row",
    width: 750 * vw,
    backgroundColor: "#FFFFFF",
    paddingLeft: 30 * vw,
    paddingRight: 30 * vw
  },
  shareIcon: {
    height: 40 * vw,
    width: 30 * vw
  },
  
  tabIcon: {
    width: 30 * vw,
    height: 30 * vw,
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
    fontSize: 28 * vw
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
