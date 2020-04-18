import React from 'react'
import {Animated,View,StyleSheet,Text} from 'react-native'


export default class Switch extends React.Component{
  constructor(props){
    super(props);
    this.state={
      distance:new Animated.Value(0)
    }
  }

  render(){
    return(
        <View style={styles.switchWordBox}>
          <Text onPress={()=>this.setSwitch(0)} style={styles.switchBrand}>热门</Text>
          <Text onPress={()=>this.setSwitch(1)} style={styles.switchBrand}>最新</Text>
          <Text onPress={()=>this.setSwitch(2)} style={styles.switchBrand}>好友</Text>
          <Animated.View style={[styles.switchBar,{transform:[{translateX:this.state.distance}]}]}></Animated.View>

        </View>
    )
  }
  setSwitch(index){
    
    switch (index){
      case 0:
        Animated.timing(
          this.state.distance, 
          {
            duration:300,
            toValue: 0,
            useNativeDriver:true 
          },
        ).start()
        break
      case 1:
        Animated.timing(
          this.state.distance, 
          {
            duration:300,
            toValue: 80*vw, 
            useNativeDriver:true 
          },
        ).start();
        break
      case 2:
        Animated.timing(
          this.state.distance, 
          {
            duration:300,
            toValue: 160*vw, 
            useNativeDriver:true 
          },
        ).start();
        break
    }
    
  }

}

const styles = StyleSheet.create( {
  switchWordBox:{
    width:240*vw,
    height:50*vw,
    backgroundColor:'#ecebe7',
    borderRadius:25*vw,
    flexDirection:'row',
    justifyContent:'space-between',
    position:'relative',
    zIndex:97
  },
  switchBrand:{
    height:50*vw,
    width:80*vw,
    color:'#666',
    textAlign:'center',
    lineHeight:50*vw,
    zIndex:99
  },
  switchBar:{
    height:50*vw,
    width:80*vw,
    borderRadius:25*vw,
    borderWidth:1,
    borderColor:'#d7d7d6',
    backgroundColor:'#ffffff',
    position:'absolute',
    zIndex:98
  }
})

