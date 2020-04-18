import React from "react";
import { StyleSheet, View, Text,findNodeHandle,UIManager,Animated } from "react-native";

export default class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle:["要闻要闻要闻要闻","体育"],
      bottomBarWidth:new Animated.Value(0),
      bottomBarLeft:new Animated.Value(0)
    };
  }
  componentDidMount(){
    setTimeout(()=>{
      this.computeBottomBarWidth(0)
    },50) 
  }
  componentDidUpdate(){
    
  }
  render() {
    return (
      <View style={styles.test_1}>
        {this.state.headerTitle.map((elem,index)=>{
          return(
            <Text style={styles.test_2} ref={'test'+index} onPress={()=>this.computeBottomBarWidth(index)}>{elem}</Text>
          )
        })}
        <Animated.View style={[styles.bottomBar,{width:this.state.bottomBarWidth,left:this.state.bottomBarLeft}]}></Animated.View>
      </View>
    );
  }
  computeBottomBarWidth(index){
    let handle;
    if(index){
      for(i in this.refs){
        handle=findNodeHandle(this.refs['test'+index])
      }
    }
    else{
      handle= findNodeHandle(this.refs['test0']);
    }
    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      console.log(x, y, width, height, pageX, pageY)
      Animated.timing(
        this.state.bottomBarLeft,
        {
          toValue:pageX,
          duration:800
        }
      ).start()
      Animated.timing(
        this.state.bottomBarWidth,
        {
          toValue:width,
          duration:800
        }
      ).start()

    });

  }
}
const styles = StyleSheet.create({
  test_1:{
    flexDirection:'row',
    position:'relative'
  },
  bottomBar:{
    height:3,
    backgroundColor:'red',
    position:'absolute',
    bottom:0
  },
  test_2:{
    marginLeft:10
  }
});
