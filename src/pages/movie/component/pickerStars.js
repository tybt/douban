import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

export default function (props) {
  console.log(props);
  switch (props.num) {
    case 1:
      return (
        <View style={styles.listCountImgBox}>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
      </View>
      )
      break;
    case 2:
      return (
        <View style={styles.listCountImgBox}>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
      </View>
      )
      break;
    case 3:
      return (
        <View style={styles.listCountImgBox}>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
      </View>
      )
      break;
    case 4:
      return (
        <View style={styles.listCountImgBox}>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
      </View>
      )
      break;
    case 5:
      return (
        <View style={styles.listCountImgBox}>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star2.png')}></Image>
      </View>
    )
      break;
  }
}

const styles = StyleSheet.create({
  listCountImgBox:{
    width:80*vw,
    flexDirection:'row-reverse'
  },
  contImg:{
    width:25*vw,
    height:25*vw
  },


})