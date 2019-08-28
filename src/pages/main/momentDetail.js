import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";

export default class momentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={body}>
        <View style={styles.main_1}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.goBack()}
          >
            <Image
              style={styles.shareIcon}
              source={require("../../static/component/back.png")}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <Image
              style={styles.shareIcon}
              source={require("../../static/main/moment_03.png")}
            />
          </TouchableWithoutFeedback>
        </View>
        <ScrollView style={styles.main_2}>
          {this.Detail()}
          {this.reply()}
        </ScrollView>
      </View>
    );
  }
  Detail() {
    return (
      <View style={styles.m_brand}>
        <TouchableOpacity onPress={() => this.goMomentDetail()}>
          <View style={styles.userInfo}>
            <Image
              source={require("../../static/timg.jpg")}
              style={styles.userImg}
            />
            <View style={styles.user_info_box}>
              <Text style={styles.userName}>我是你爸爸</Text>
              <Text style={styles.user_reply_time}>2019-15-12 12:50:20</Text>
            </View>
            <Image
              style={styles.more}
              source={require("../../static/main/more.png")}
            />
          </View>
          <Text style={styles.content}>这是动态的内容</Text>
          <View style={styles.contentImgBox}>
            <Image
              style={styles.contentImg}
              source={require("../../static/timg.jpg")}
            />
            <Image
              style={styles.contentImg}
              source={require("../../static/timg.jpg")}
            />
            <Image
              style={styles.contentImg}
              source={require("../../static/timg.jpg")}
            />
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
}
const styles = StyleSheet.create({
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
  main_3: {
    marginTop: 20 * vw,
    paddingLeft: 80 * vw,
    paddingRight: 80 * vw,
    flexDirection: "row",
    justifyContent: "space-between"
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
