import React from "react";
import { StyleSheet, View, Text, SafeAreaView,StatusBar,TouchableWithoutFeedback,Image,TextInput } from "react-native";
import { TabView, SceneMap,NavigationState,SceneRendererProps,TabBar } from 'react-native-tab-view';
import Tab_1 from './main_tab_1'
import Tab_2 from './main_tab_2'

export default class login extends React.Component {
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
      barColor:'light-content'
    };
  }
  componentWillMount() {

  }
  componentDidMount() {
    console.log('haha')
    this.setState({barColor:'dark-content'});
  }
  componentWillUnmount(){
    
    console.log('hah')
  }
  render() {
    return(
      <View style={body}>
        {this.top()}
        <SafeAreaView style={{flex:1}}>
          {this.header()}
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

        </SafeAreaView>
      </View>    
    ) ;
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
  header(){
    return(
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <TouchableWithoutFeedback>
            <Image source={require('../../static/main/search.png')} style={styles.top_img}></Image>
          </TouchableWithoutFeedback>
          <TextInput 
          style={styles.inputs}
          placeholder="请输入搜索内容" 
          onChangeText={(text)=>this.setState({searchValue:text}) }>
          </TextInput>
          <TouchableWithoutFeedback>
            <Image source={require('../../static/main/scan.png')} style={styles.top_img}></Image>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
 
}
const styles = StyleSheet.create({
  inputs:{
    marginLeft:5*vw,
    paddingTop:0,
    paddingBottom:0,
    height:60*vw,
    width:560*vw
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
