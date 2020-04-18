import React from 'react';
import { StyleSheet,Modal,View,ActivityIndicator,TouchableWithoutFeedback } from 'react-native';


export default class example extends React.Component
{
  constructor( props )
  {
    super( props );
    this.state = {


    };
  }
  render ()
  {
    if(this.props.showModal){
      return (
        <Modal 
        transparent={true}
        style={styles.body}>
          <TouchableWithoutFeedback onPress={()=>this.closeModal()}>
            <View style={styles.marsk_bg}></View>
          </TouchableWithoutFeedback>
          <ActivityIndicator
            animating={true}       //是否要显示指示器动画，默认为 true 表示显示，false 则隐藏。
            color={'#FFFFFF'}                  //滚轮的前景颜色（iOS上默认为灰色，安卓上默认为深绿色）。
            size={'large'}                  //指示器的大小，默认为'small'。目前只能在 Android 上设定具体的数值。
            style={styles.indicator}>

          </ActivityIndicator>
        </Modal>
      )
    }
    else{
      return null
    }
  }
  closeModal(){
    this.props.closeMarsk()
  }
}
const styles = StyleSheet.create( {
  marsk_bg:{
    backgroundColor:'rgba(0,0,0,0.5)',
    width:'100%',
    height:vh,
    position:'absolute',
    top:0
  },
  body:{
    alignItems:'center',
    justifyContent:'center',
    width:750*vw,
    height:vh
  },
  indicator:{
    position:'relative',
    zIndex:99,
  }

} )
