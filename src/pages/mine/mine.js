import React from "react";
import {StyleSheet,View,Text,SafeAreaView,Image,TouchableOpacity} from "react-native";
import {TabView,SceneMap,NavigationState,SceneRendererProps,TabBar} from "react-native-tab-view";

export default class login extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "tab_1", title: "影视" },
        { key: "tab_2", title: "图书" },
        { key: "tab_3", title: "音乐" }
      ]
    };
  }
  componentDidMount() {}
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.main_1}>
          <SafeAreaView style={[styles.topIcon, topContent]}>
            <Image
              style={styles.topIconImg}
              source={require("../../static/component/setting.png")}
            ></Image>
            <Image
              style={styles.topIconImg}
              source={require("../../static/component/info.png")}
            ></Image>
          </SafeAreaView>
          <TouchableOpacity style={styles.loginBtn} onPress={()=>this.goLogin()}>
            <Text style={styles.loginWord}>登录/注册</Text>
          </TouchableOpacity>
          <View style={styles.otherBtn}>
            <TouchableOpacity>
              <View style={[styles.addBg, { marginRight: 70 * vw }]}>
                <Image
                  style={styles.otherImg}
                  source={require("../../static/component/weixin.png")}
                ></Image>
              </View>
              <Text style={styles.loginWords}>微信登录</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.addBg}>
                <Image
                  style={styles.otherImg}
                  source={require("../../static/component/weibo.png")}
                ></Image>
              </View>
              <Text style={styles.loginWords}>微博登录</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.main_2}>
          <TabView
            navigationState={this.state}
            renderScene={({ route, jumpTo }) => {
              switch (route.key) {
                case "tab_1":
                  return <Tab_1 navigation={this.props.navigation}></Tab_1>;
                case "tab_2":
                  return <Tab_2 navigation={this.props.navigation}></Tab_2>;
                case "tab_3":
                  return <Tab_3 navigation={this.props.navigation}></Tab_3>;
              }
            }}
            renderTabBar={props => {
              return (
                <TabBar
                  {...props}
                  style={styles.tabbar}
                  scrollEnabled
                  indicatorStyle={styles.indicator}
                  style={styles.tabbar}
                  tabStyle={styles.tab}
                  labelStyle={styles.label}
                  activeColor={"#333"}
                  inactiveColor={"#888"}  //Custom color for icon and label in the inactive tab.
      
                ></TabBar>
              );
            }}
            style={styles.tab_brand}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: 250 * vw }}
          />
        </View>
        <View style={styles.main_3}>
          <View style={[styles.listBrand,commonBorder.bottom]}>
            <View style={styles.listBrandInner}>
              <Image style={styles.listBrandImg} source={require('../../static/mine/btn5.png')}></Image>
              <Text>看电影</Text>
            </View>
            <Image style={styles.listBrandForward} source={require('../../static/component/forward.png')}></Image>
          </View>
          <View style={[styles.listBrand,commonBorder.bottom]}>
            <View style={styles.listBrandInner}>
              <Image style={styles.listBrandImg} source={require('../../static/mine/btn6.png')}></Image>
              <Text>我的发布</Text>
            </View>
            <Image style={styles.listBrandForward} source={require('../../static/component/forward.png')}></Image>
          </View>
          <View style={[styles.listBrand,commonBorder.bottom]}>
            <View style={styles.listBrandInner}>
              <Image style={styles.listBrandImg} source={require('../../static/mine/btn7.png')}></Image>
              <Text>我的关注</Text>
            </View>
            <Image style={styles.listBrandForward} source={require('../../static/component/forward.png')}></Image>
          </View>
          <View style={[styles.listBrand,commonBorder.bottom]}>
            <View style={styles.listBrandInner}>
              <Image style={styles.listBrandImg} source={require('../../static/mine/btn8.png')}></Image>
              <Text>相册</Text>
            </View>
            <Image style={styles.listBrandForward} source={require('../../static/component/forward.png')}></Image>
          </View>
        </View>
     </View>
    );
  }

  goLogin(){
    console.log('ssss')
    this.props.navigation.navigate('login')
  }
}

class Tab_1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={styles.videoBox}>
        <View style={styles.videoBrand}>
          <Image style={styles.videoBrandImg} source={require('../../static/mine/btn1.png')}></Image>
          <Text style={styles.videoBrandWord}>想看 0</Text>
        </View>
        <View style={styles.videoBrand}>
          <Image style={styles.videoBrandImg} source={require('../../static/mine/btn2.png')}></Image>
          <Text style={styles.videoBrandWord}>在看 0</Text>
        </View>
        <View style={styles.videoBrand}>
          <Image style={styles.videoBrandImg} source={require('../../static/mine/btn3.png')}></Image>
          <Text style={styles.videoBrandWord}>看过 0</Text>
        </View>
        <View style={styles.videoBrand}>
          <Image style={styles.videoBrandImg} source={require('../../static/mine/btn4.png')}></Image>
          <Text style={styles.videoBrandWord}>想读 0</Text>
        </View>

      </View>
    );
  }
}
class Tab_2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text>nimabi</Text>;
  }
}
class Tab_3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text>nimabi</Text>;
  }
}

const styles = StyleSheet.create({
  listBrandInner:{
    flexDirection:'row'
  },
  listBrand:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:30*vw,
    paddingRight:30*vw,
    alignItems:'center',
    paddingBottom:25*vw,
    paddingTop:25*vw
  },
  listBrandForward:{
    height:25*vw,
    width:14*vw
  },
  listBrandImg:{
    marginRight:20*vw,
    height:40*vw,
    width:40*vw
  },
  videoBrandWord:{
    marginTop:20*vw
  },
  videoBrand:{
    alignItems:'center',
    justifyContent:'center'
  },
  videoBrandImg:{
    width:110*vw,
    height:110*vw
  },
  videoBox:{
    marginTop:20*vw,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:30*vw,
    paddingRight:30*vw
  },
  tab_brand:{
  },
  tabbar: {
    backgroundColor:'#ffffff',
    borderColor:'#333',
  },
  tab: {
    width: 'auto',
  },
  indicator: {
    height:5*vw,
    backgroundColor: '#ffffff',
  },
  main_2:{
    width:'100%',
    height:330*vw
  },
  loginWords: {
    color: "#ffffff",
    marginTop: 10 * vw
  },
  addBg: {
    width: 100 * vw,
    height: 100 * vw,
    borderRadius: 50 * vw,
    backgroundColor: "#52954f",
    justifyContent: "center",
    alignItems: "center"
  },
  otherImg: {
    width: 50 * vw,
    height: 50 * vw
  },
  otherBtn: {
    marginTop: 40 * vw,
    flexDirection: "row",
    justifyContent: "center"
  },
  loginWord: {
    color: "#1b3f19",
    fontWeight: "bold",
    fontSize: 40 * vw,
    width: "100%",
    textAlign: "center",
    lineHeight: 80 * vw
  },
  loginBtn: {
    marginTop: 40 * vw,
    backgroundColor: "#ffffff",
    borderRadius: 40 * vw,
    width: 315 * vw,
    height: 80 * vw,
    marginLeft: 217 * vw
  },
  main_1: {
    backgroundColor: "#6cba68",
    width: "100%",
    height: 450 * vw
  },
  topIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30 * vw,
    paddingRight: 30 * vw
  },
  topIconImg: {
    width: 40 * vw,
    height: 40 * vw
  }
});
