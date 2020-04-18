import { StyleSheet,View } from 'react-native';
import React from 'react';
export default function(props){
  const barWidth=(props.num.value/props.num.total)*320*vw
  return(
    <View style={styles.barBox}>
      <View style={[styles.realBar,{width:barWidth}]}></View>
    </View>
  )

  
}




const styles = StyleSheet.create( {
  realBar:{
    backgroundColor:'#f2af4b',
    height:'100%'
  },
  barBox:{
    width:320*vw,
    height:10*vw,
    backgroundColor:'#6d6b69',
    borderRadius:3,
    overflow:'hidden'
  }
})