import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

export default function (props) {
  console.log(props);
  switch (props.num) {
    case 1:
      return (
        <View style={[flexAlign]}>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
        </View>
      )
      break;
    case 2:
      return (
        <View style={[flexAlign]}>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
        </View>
      )
      break;
    case 3:
      return (
        <View style={[flexAlign]}>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
        </View>
      )
      break;
    case 4:
      return (
        <View style={[flexAlign]}>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
        </View>
      )
      break;
    case 5:
      return (
        <View style={[flexAlign]}>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
          <Image style={styles.star1} source={require('../../../static/component/star1.png')}></Image>
        </View>
      )
      break;
  }
}

const styles = StyleSheet.create({
  star1: {
    width: 25 * vw,
    height: 25 * vw,
    marginRight: 5 * vw
  }
})