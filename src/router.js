
import React from 'react';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation';
import login from './pages/login/login'
import collections from './pages/collections/collections'
import main from './pages/main/mian'
import group from './pages/group/group'
import market from './pages/market/market'
import mine from './pages/mine/mine'
import './common/global'
const TabNavigator = createBottomTabNavigator(
  {
    mian: {
      screen: main,
      navigationOptions: ({ navigation }) => ({
        title:"首页"
      }),
    },
    collections: {
      screen: collections,
      navigationOptions: ({ navigation }) => ({
        title:"书影音"
      }),
    },
    group: {
      screen: group,
      navigationOptions: ({ navigation }) => ({
        title:"小组"
      }),
    },
    market: {
      screen: market,
      navigationOptions: ({ navigation }) => ({
        title:"市集"
      }),
    },
    mine: {
      screen: mine,
      navigationOptions: ({ navigation }) => ({
        title:"我的"
      }),
    },
  }
);

const AppStack = createStackNavigator({ 
  tab: {
    screen:TabNavigator,
    navigationOptions: ({ navigation }) => ({
      header:null
    }),
  },
  login: login 
});


export default createAppContainer(AppStack);

