import React from 'react';
import { StyleSheet,View,SafeAreaView } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view'; 
import DounbanRankTab_1 from './DoubanRankTabs/DoubanRankTab_1';
import DounbanRankTab_2 from './DoubanRankTabs/DoubanRankTab_2' 
import DounbanRankTab_3 from './DoubanRankTabs/DoubanRankTab_3' 
import DounbanRankTab_4 from './DoubanRankTabs/DoubanRankTab_4'       

export default class DounbanRank extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "tab_1", title: "电影" },
        { key: "tab_2", title: "电视" },
        { key: "tab_3", title: "读书" },
        { key: "tab_4", title: "原创小说" }
      ]
    };
  }
  componentDidMount(){
  }
   render(){
    return(
      <SafeAreaView style={{flex:1}}>
        <View style={styles.topTab}>
          <TabView
              navigationState={this.state}
              renderScene={({ route, jumpTo }) => {
                switch (route.key) {
                  case "tab_1":
                    return <DounbanRankTab_1 navigation={this.props.navigation}></DounbanRankTab_1>;
                  case "tab_2":
                    return <DounbanRankTab_2 navigation={this.props.navigation}></DounbanRankTab_2>;
                  case "tab_3":
                    return <DounbanRankTab_3 navigation={this.props.navigation}></DounbanRankTab_3>;
                  case "tab_4":
                    return <DounbanRankTab_4 navigation={this.props.navigation}></DounbanRankTab_4>;
                }
              }}
              renderTabBar={props => {
                return (
                  <TabBar
                    {...props}
                    style={styles.tabbar}
                    scrollEnabled
                    indicatorStyle={{backgroundColor:"#333"}}
                    style={{backgroundColor:"#FFFFFF"}}
                    tabStyle={{width:"auto"}}
                    labelStyle={{}}
                    activeColor={"#333"}
                    inactiveColor={"#888"} //Custom color for icon and label in the inactive tab.
                  ></TabBar>
                );
              }}
              style={{flex:1}}
              onIndexChange={index => this.setState({ index })}
              initialLayout={{ width: 250 * vw }}
            />        
          </View>
        
      </SafeAreaView>
    )
   }
}
const styles=StyleSheet.create({
  topTab:{
    flex:1
  }   

})
