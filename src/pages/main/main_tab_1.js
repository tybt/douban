import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableWithoutFeedback,
  AsyncStorage
} from "react-native";
import Share from "../component/share";

export default class tab1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      share: 0,
      data: []
    };
  }
  componentDidMount() {
    ajaxPost(Url.getmoment, {}, res => {
      console.log(res, "res");
      let tempData=[];
      for(let item of res){
        if(item.images){
          item.images=item.images.split(",")        }
        else{
          item.images=[]
        }
        tempData.push(item)
      }
      console.log(tempData,'tempData')
      this.setState({
        data: tempData
      });
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => this.goWriteMoment()} style={{ zIndex: 9999 }}>
          <Image style={styles.publishImg} source={require("../../static/main/publish.png")}></Image>
        </TouchableWithoutFeedback>

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
        {this.state.data.map((elem, index) => {
          <View style={styles.m_brand}>
            <View style={styles.userInfo}>
              <Image
                source={{uri:host+elem.userEntity.iconImage}}
                style={styles.userImg}
              />
              <View style={styles.user_info_box}>
                <Text style={styles.userName}>{elem.userEntity.account}</Text>
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
                  return(<Image style={styles.contentImg} source={{uri:host+item}}/>)
                })
              }
            </View>
            <View style={styles.main_3}>
              <TouchableWithoutFeedback onPress={() => this.setFavour()}>
                <View style={styles.main_3_brand}>
                  <Image
                    style={styles.tabIcon}
                    source={require("../../static/main/favor.png")}
                  />
                  <Text>122</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.goMomentDetail()}>
                <View style={styles.main_3_brand}>
                  <Image
                    style={styles.tabIcon}
                    source={require("../../static/main/write.png")}
                  />
                  <Text>122</Text>
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
          </View>;
        })}
      </ScrollView>
    );
  }
  setFavour() {}
  setShare() {
    this.setState({ share: 1 });
  }
  getShares() {
    this.setState({ share: 0 });
  }
  goMomentDetail() {
    console.log(this.props, "this.props.navigation");
    this.props.navigation.navigate("momentDetail");
  }
  async goWriteMoment() {
    let token = await AsyncStorage.getItem("token");
    console.log(token);
    if (token && token != "") {
      this.props.navigation.navigate("writeMoment");
    } else {
      this.props.navigation.navigate("login");
    }
  }
}
const styles = StyleSheet.create({
  publishImg: {
    position: "absolute",
    zIndex: 999,
    width: 50 * vw,
    height: 50 * vw,
    backgroundColor: "rgba(0,0,0,0)",
    right: 30 * vw,
    bottom: 100 * vw
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
