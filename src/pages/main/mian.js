import React from "react";
import { StyleSheet, View, Text, SafeAreaView,StatusBar,TouchableWithoutFeedback,Image,TextInput } from "react-native";
export default class login extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentWillMount() {

  }
  componentDidMount() {}
  render() {
    return(
      <View style={body}>
        {this.top()}
        <SafeAreaView>
        {this.header()}
        </SafeAreaView>
      </View>    
    ) ;
  }
  top() {
    return (
      <View style={styles.top}>
        <StatusBar translucent={true} backgroundColor={"transparent"}></StatusBar>
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
          <TextInput placeHolder="请输入搜索内容"></TextInput>
          <TouchableWithoutFeedback>
            <Image source={require('../../static/main/scan.png')} style={styles.top_img}></Image>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
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
    justifyContent:'center'
  },
  searchBox:{
    backgroundColor:'#ffffff',
    height:60*vw,
    borderRadius:30*vw,
    width:700*vw,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  top_img:{
    height:35*vw,
    width:35*vw
  }
});
