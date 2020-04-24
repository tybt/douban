import { StyleSheet, View, Image,Text } from 'react-native';
import React from 'react';

export default function (props) {
  console.log(props,'props');
  if (0 <= props.num&&props.num < 2) {
    return (
      <View style={styles.starRow}>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
      </View>
    )
  }
  else if (2 <= props.num&&props.num < 4) {
    return (
      <View style={styles.starRow}>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
      </View>
    )
  }
  else if (4 <= props.num&&props.num < 6) {
    return (
      <View style={styles.starRow}>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
      </View>
    )
  }
  else if (6 <= props.num&&props.num < 8) {
    return (
      <View style={styles.starRow}>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
      </View>
    )
  }
  else if (8 <= props.num&&props.num <= 10) {
    return (
      <View style={styles.starRow}>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
        <Image style={styles.contImg} source={require('../../../static/component/star1.png')}></Image>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  listCountImgBox: {
    width: 80 * vw,
    flexDirection: 'row-reverse'
  },
  contImg: {
    width: 25 * vw,
    height: 25 * vw
  },
  starRow: {
    flexDirection: 'row',
    marginTop: 10 * vw
  },



})