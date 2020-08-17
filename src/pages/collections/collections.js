import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as collectionsAction from '../../actions/collectionsAction';

import {StyleSheet,View,Text,SafeAreaView,Image,ScrollView} from "react-native";
import {TabView, TabBar} from "react-native-tab-view";
import SearchBar from '../component/searchBar'
import Tab_1 from './collectionsTab/Tab_1'

class collection extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "tab_1", title: "电影" },
        { key: "tab_2", title: "电视" },
        { key: "tab_3", title: "读书" },
        { key: "tab_4", title: "原创小说" },
        { key: "tab_5", title: "音乐" },
        { key: "tab_6", title: "同城" }
      ]
    };
  }
  componentDidMount() {
    this.props.collectionsActions.requestMovieData();
    this.props.collectionsActions.fetchHotMovie()
  }
  render() {
    return (
      <View style={body}>
        <View style={styles.main_1}>
            <SearchBar bgColor="#ededed" {...this.props}></SearchBar>
        </View>

        <View style={styles.main_2}>
          <TabView
            navigationState={this.state}
            renderScene={({ route, jumpTo }) => {
              switch (route.key) {
                case "tab_1":
                  return <Tab_1 {...this.props} ></Tab_1>;
                case "tab_2":
                  return <Tab_2 navigation={this.props.navigation}></Tab_2>;
                case "tab_3":
                  return <Tab_3 navigation={this.props.navigation}></Tab_3>;
                case "tab_4":
                  return <Tab_4 navigation={this.props.navigation}></Tab_4>;
                case "tab_5":
                  return <Tab_5 navigation={this.props.navigation}></Tab_5>;
                case "tab_6":
                  return <Tab_6 navigation={this.props.navigation}></Tab_6>;
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
      </View>
    );
  }

  goLogin() {
    this.props.navigation.navigate("login");
  }
}

const mapStateToProps = (state) => {
  const { collectionsReducer } = state;
  return {
    collectionsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const collectionsActions = bindActionCreators(collectionsAction, dispatch);
  return {
    collectionsActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(collection);





class Tab_2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text >nimabi</Text>;
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
class Tab_4 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text>nimabi</Text>;
  }
}
class Tab_5 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text>nimabi</Text>;
  }
}
class Tab_6 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text>nimabi</Text>;
  }
}

const styles = StyleSheet.create({
 
  main_2: {
    width: "100%",
    flex:1
  }
});
