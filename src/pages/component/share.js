import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  Modal,Text
} from "react-native";

import * as WeChat from 'react-native-wechat';



export default class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  async componentDidMount(){
    WeChat.registerApp('wx9225d79c1e0718b8');
    let isinstall=WeChat.isWXAppInstalled()
    console.log(isinstall,'isinstall');
    try {
      let result = await WeChat.shareToTimeline({
        type: 'text', 
        description: 'hello, wechat'
      });
      console.log('share text message to time line successful:', result);
    } catch (e) {
      if (e instanceof WeChat.WechatError) {
        console.error(e.stack);
      } else {
        throw e;
      }
    }
    //WeChat.openWXApp()//打开微信
  }
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          alert("Modal has been closed.");
        }}
      >
        <TouchableWithoutFeedback onPress={() => this.setshares()}>
          <View style={styles.marsk} />
        </TouchableWithoutFeedback>
        <View style={styles.main}>
          <View style={styles.brand}>
            <TouchableWithoutFeedback onPress={()=>this.weixinShare()}>
              {/* 微信分享 */}
              <Image style={styles.imgIcon} source={require("../../static/component/share_03.png")} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Image style={styles.imgIcon} source={require("../../static/component/share_05.png")} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Image style={styles.imgIcon} source={require("../../static/component/share_07.png")} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Image style={styles.imgIcon} source={require("../../static/component/share_09.png")} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Image style={styles.imgIcon} source={require("../../static/component/share_11.png")} />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.brand}>
            <TouchableWithoutFeedback>
              <Image style={styles.imgIcon} source={require("../../static/component/share_19.png")} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Image style={styles.imgIcon} source={require("../../static/component/share_22.png")} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Image style={styles.imgIcon} source={require("../../static/component/share_25.png")} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Image style={styles.imgIcon} source={require("../../static/component/share_28.png")} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Image style={styles.imgIcon} source={require("../../static/component/share_31.png")} />
            </TouchableWithoutFeedback>
          </View>
          <Text style={[styles.cancel,commonBorder.top]} onPress={() => this.setshares()}>取消</Text>
        </View>
      </Modal>
    );
  }
  weixinShare(){
    
  }
  setshares() {
    console.log(this.props,'this.props')
    this.props.getShare();
  }
}
const styles = StyleSheet.create({
  cancel:{
    width:750*vw,
    textAlign:'center',
    position:'absolute',
    bottom:0,
    color:'#333',
    lineHeight:106*vw
  },
  imgIcon:{
    width:100*vw,
    height:100*vw,
    borderRadius:10*vw
  },
  main:{
    height:512*vw,
    position:'absolute',
    bottom:0,
    zIndex:98,
    backgroundColor: "#ffffff",
  },
  marsk: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
    width:750*vw,
    height:vh,
    flex: 1,
    zIndex:95
  },
  main_1: {
    
  },
  brand: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 50 * vw,
    paddingRight: 50 * vw,
    width:750*vw,
    marginTop:40*vw
  }
});
