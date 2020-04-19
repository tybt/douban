import "./utils/styleUtil";
import "./utils/setSateUtil";
import React from "react";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import {createAppContainer} from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import login from "./pages/login/login";
import collections from "./containers/CollectionsContainer";
import main from "./pages/main/mian";
import group from "./pages/group/group";
import market from "./pages/market/market";
import mine from "./pages/mine/mine";
import momentDetail from "./pages/main/momentDetail";
import writeMoment from "./pages/main/writeMoment";
import Search from './pages/main/search';
import DoubanRank from './containers/CollectionsContainer'
import ClassifyFindMovies from './pages/collections/classifyFindMovies'
import FindMovies from './pages/collections/findMovies'
import movieIndex from './pages/movie/movieIndex'
import MovieVideo from './pages/movie/movieVideo'


const TabNavigator = createBottomTabNavigator(
  {
    mian: {
      screen: main,
      navigationOptions: ({ navigation }) => ({
        title: "首页",
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          let iconName=focused?require('./static/tab/tab1_2.png'):require('./static/tab/tab1_1.png');
          return <Image source={iconName} style={{width:25,height:25}} />;
        }
      }),
    },
    collections: {
      screen: collections,
      navigationOptions: ({ navigation }) => ({
        title: "书影音",
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          let iconName=focused?require('./static/tab/tab2_1.png'):require('./static/tab/tab2_2.png');
          return <Image source={iconName} style={{width:25,height:25}} />;
        }
      })
    },
    group: {
      screen: group,
      navigationOptions: ({ navigation }) => ({
        title: "小组",
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          let iconName=focused?require('./static/tab/tab3_2.png'):require('./static/tab/tab3_1.png');
          return <Image source={iconName} style={{width:25,height:25}} />;
        }
      })
    },
    market: {
      screen: market,
      navigationOptions: ({ navigation }) => ({
        title: "市集",
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          let iconName=focused?require('./static/tab/tab4_2.png'):require('./static/tab/tab4_1.png');
          return <Image source={iconName} style={{width:25,height:25}} />;
        }
      })
    },
    mine: {
      screen: mine,
      navigationOptions: ({ navigation }) => ({
        title: "我的",
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          let iconName=focused?require('./static/tab/tab5_1.png'):require('./static/tab/tab5_2.png');
          return <Image source={iconName} style={{width:25,height:25}} />;
        }
      })
    }
  },{
    tabBarLabel:{
      tintColor:"#67ba62"
    }
  }
);

const AppStack = createStackNavigator({
  tab: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  movieIndex:{
    screen: movieIndex,
    navigationOptions: ({ navigation }) => ({
      title:"电影",
      headerStyle:{
        paddingTop:20,
        backgroundColor: '#9e9d98',
      },
      headerTitleStyle: {
        color:'#ffffff',
      },
      headerBackImage:<Image style={styles.back} source={require('./static/component/backWhite.png')}></Image>,
    })
  },
  movieVideo:{
    screen:MovieVideo,
    navigationOptions: ({ navigation }) => ({
      title:"视频",
      headerStyle:{
        paddingTop:20,
        backgroundColor: '#9e9d98',
      },
      headerTitleStyle: {
        color:'#ffffff',
      },
      headerBackImage:<Image style={styles.back} source={require('./static/component/backWhite.png')}></Image>,
    })
  },


  
  momentDetail: {
    screen: momentDetail,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  search: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  writeMoment: {
    screen: writeMoment,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  login: login,
  DoubanRank:{
    screen: DoubanRank,
    navigationOptions: ({ navigation }) => ({
      title:"豆瓣榜单",
      headerBackImage:<Image style={styles.back} source={require('./static/component/back.png')}></Image>,
      headerStyle:{paddingTop:20}
    })
  },
  ClassifyFindMovies:{
    screen: ClassifyFindMovies,
    navigationOptions: ({ navigation }) => ({
      title:"分类找电影",
      headerBackImage:<Image style={styles.back} source={require('./static/component/back.png')}></Image>,
      headerStyle:{paddingTop:20}
    })
  },
  FindMovies:{
    screen: FindMovies,
    navigationOptions: ({ navigation }) => ({
      title:"找电影",
      headerBackImage:<Image style={styles.back} source={require('./static/component/back.png')}></Image>,
      headerStyle:{paddingTop:20}
    })
  },

});



export default createAppContainer(AppStack);

let styles = StyleSheet.create({
  back:{
    width:40*vw,
    height:40*vw
  },
  shareIcon: {
    width: 34 * vw,
    height: 47 * vw,
    marginRight: 30 * vw
  }
});


