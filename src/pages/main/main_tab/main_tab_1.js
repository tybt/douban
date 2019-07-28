import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableWithoutFeedback
} from "react-native";
import Share from "../../component/share";

export default class example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      share: 0
    };
  }
  render() {
    return (
      <View>
        <ScrollView style={{ paddingBottom: 80 }}>
          <View style={styles.m_brand}>
            <View style={styles.userInfo}>
              <Image
                source={require("../../../static/timg.jpg")}
                style={styles.userImg}
              />
              <View style={styles.user_info_box}>
                <Text style={styles.userName}>我是你爸爸</Text>
                <Text style={styles.user_reply_time}>2019-15-12 12:50:20</Text>
              </View>
              <Image
                style={styles.more}
                source={require("../../../static/main/more.png")}
              />
            </View>
            <Text style={styles.content}>这是动态的内容</Text>
            <View style={styles.contentImgBox}>
              <Image
                style={styles.contentImg}
                source={require("../../../static/timg.jpg")}
              />
              <Image
                style={styles.contentImg}
                source={require("../../../static/timg.jpg")}
              />
              <Image
                style={styles.contentImg}
                source={require("../../../static/timg.jpg")}
              />
            </View>
            <View style={styles.main_3}>
              <TouchableWithoutFeedback onPress={() => this.setFavour()}>
                <View style={styles.main_3_brand}>
                  <Image
                    style={styles.tabIcon}
                    source={require("../../../static/main/favor.png")}
                  />
                  <Text>122</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles.main_3_brand}>
                  <Image
                    style={styles.tabIcon}
                    source={require("../../../static/main/comment.png")}
                  />
                  <Text>122</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.setShare()}>
                <View style={styles.main_3_brand}>
                  <Image
                    style={styles.tabIcon}
                    source={require("../../../static/main/transfrom.png")}
                  />
                  <Text>122</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.brandBorder} />
          </View>
        </ScrollView>
        {this.state.share == 1 ? (
          <Share
            navigation={this.props.navigation}
            getShare={()=>this.getShares()}
          />
        ) : (
          <View />
        )}
      </View>
    );
  }
  setFavour() {
    
  }
  setShare() {
    this.setState({share:1});
  }
  getShares() {
    this.setState({ share: 0});
  }
}
const styles = StyleSheet.create({
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
