import React from "react";
import { StyleSheet, View, AsyncStorage, SafeAreaView,StatusBar,TouchableWithoutFeedback,Image,TextInput } from "react-native";
import { TabView, TabBar } from 'react-native-tab-view';
import Tab_1 from './main_tab_1'
import Tab_2 from './main_tab_2'
import SearchBar from '../component/searchBar'

class Login extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      searchValue:'',
      index: 0,
      routes: [
        { key: 'tab_1', title: '动态' },
        { key: 'tab_2', title: '推荐' },
      ],
      barColor:'dark-content'
    };
  }
  componentWillMount() {

  }
  componentDidMount() {
    
  }
  render() {
    
    return(
      <View style={body}>
        {this.top()}
        <SafeAreaView style={{flex:1}}>
          <View style={styles.header}>
            <SearchBar {...this.props} ></SearchBar>
          </View>
         
          <TabView
          navigationState={this.state}
          renderScene = {({ route, jumpTo }) => {
            switch (route.key) {
              case 'tab_1':
                return <Tab_1 navigation={this.props.navigation}></Tab_1>;
              case 'tab_2':
                return <Tab_2 navigation={this.props.navigation}></Tab_2>;
            }
          }}
          renderTabBar={this.renderTabBar}
          style={styles.tab_brand}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: 250*vw }}
        />
        <TouchableWithoutFeedback onPress={() => this.goWriteMoment()} style={{ zIndex: 9999 }}>
          <Image style={styles.publishImg} source={require("../../static/main/publish.png")}></Image>
        </TouchableWithoutFeedback>
        </SafeAreaView>
      </View>    
    );
  }
  renderTabBar = props => 
    <TabBar 
      {...props} 
      style={styles.tabbar}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}>
    </TabBar>
  top() {
    return (
      <View style={styles.top}>
        <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={this.state.barColor}></StatusBar>
      </View>
    );
  }
  goSearch(){
    console.log('ssss')
    this.props.navigation.navigate("search")
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

export default Login



const styles = StyleSheet.create({
  publishImg: {
    backgroundColor:'#ffffff',
    position: "absolute",
    zIndex: 999,
    width: 50 * vw,
    height: 50 * vw,
    right: 30 * vw,
    bottom: 100 * vw
  },
  inputs:{
    marginLeft:5*vw,
    width:560*vw,
    color:"#666"
  },
  tabbar: {
    backgroundColor:'#67ba62',
    borderColor:'#ffffff',
  },
  tab: {
    width: 'auto',
  },
  indicator: {
    height:5*vw,
    backgroundColor: '#ffffff',
  },
  label: {
    alignItems:'center',
    fontSize:32*vw,
    fontWeight:'bold',
  },
  scene: {
    flex: 1,
  },
  top: {
    flex:1,
    backgroundColor:'#67ba62',
    height:140*vw,
    width:750*vw,
    position:'absolute',
    top:0
  },
  header: {
    backgroundColor:'#67ba62',
    alignItems:'center',
    height:170*vw,
    width:750*vw
  },
  searchBox:{
    backgroundColor:'#ffffff',
    height:60*vw,
    borderRadius:30*vw,
    width:700*vw,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:20*vw,
    paddingRight:20*vw
  },
  top_img:{
    marginLeft:5*vw,
    height:35*vw,
    width:35*vw
  },
  header_tab:{
    marginTop:20*vw,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:230*vw,
    paddingRight:230*vw,
    paddingBottom:10*vw
  },
  tab_brand:{
    marginTop:-100*vw,
  },
  tab_active:{
    fontWeight:'bold',
    borderBottomWidth:3,
    borderColor:'#ffffff',

  }
});
