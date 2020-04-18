import React from "react";
import {StyleSheet,PanResponder,Animated, View,Text, ScrollView} from "react-native";
import { Header } from "react-navigation";
import Switch from "./Switch";
export default class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.Value(0),
      preDistance: 0,
      isShow: false,
    };
  }

  componentWillMount() {
    this.height = Header.HEIGHT; //获取navigation的高度
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        /* 这里仅当用户滑动的距离较长才响应用户操作，考虑实际用户点击是手指的一片区域，而不是测试时的鼠标单击，实际使用时即使是单击也可能有一定的位移 */
        if (gestureState.dx < -vw * 0.1 || gestureState.dx > vw * 0.1) {
          return true;
        } else {
          return false;
        }
      },
      onPanResponderMove: (evt, gestureState) => {
        let data = null;
        if (this.state.isShow) {
          data = gestureState.dy - vh +this.height+60;
        } else {
          data = gestureState.dy;
        }
        Animated.timing(this.state.pan, {
          duration: 0,
          toValue: data,
          useNativeDriver: true
        }).start();
      },
      onPanResponderRelease: (evt, gestureState) => {
        let toValue = null;
        if (gestureState.vy > 0.15) {
          toValue = 0;
          this.setState({ isShow: false });
        } else if (gestureState.vy < -0.15) {
          toValue = -vh + this.height+60; //60是白板高度
          this.setState({ isShow: true });
        } else if (gestureState.dy > 0.4 * vh) {
          toValue = 0;
          this.setState({ isShow: false });
        } else if (gestureState.dy < -0.4 * vh) {
          toValue = -vh + this.height+60;
          this.setState({ isShow: true });
        }
        Animated.timing(this.state.pan, {
          duration: 500,
          toValue,
          useNativeDriver: true
        }).start();
      }
    });
  }
  render() {
    return (
      <Animated.View
        style={[
          { transform: [{ translateY: this.state.pan }] },
          styles.mainSlide
        ]}
      >
        <View style={styles.slideTop} {...this._panResponder.panHandlers}>
          <View style={styles.topBar}></View>
          <View style={styles.topBox}>
            <Text style={styles.topTitle}>
              影评 <Text style={styles.titleCount}>100+</Text>
            </Text>
            <Switch></Switch>
          </View>
        </View>
        <ScrollView style={styles.slideBox}>
          <View style={styles.sideContent}></View>
        </ScrollView>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  sideContent: {
    height: 1.5 * vh,
    width: 300,
    backgroundColor: "#cccccc"
  },
  topBox: {
    marginTop: 20 * vw,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleCount: {
    fontSize: 26 * vw,
    fontWeight: "normal"
  },
  topTitle: {
    fontWeight: "bold",
    fontSize: 30 * vw,
    marginLeft: 30 * vw,
    borderBottomColor: "#000",
    borderBottomWidth: 2
  },
  topBar: {
    width: 64 * vw,
    height: 10 * vw,
    borderRadius: 5 * vw,
    backgroundColor: "#dadad6",
    marginLeft: 343 * vw,
    marginTop: 20 * vw
  },
  mainSlide: {
    position: "absolute",
    top: vh -56-60 ,
    width: "100%"
  },
  slideBox: {
    height: vh-56-60,
    backgroundColor: "#f8f8f4",
    width: "100%",
  },
  slideTop: {
    height: 60,
    backgroundColor:'#ffffff',
    borderTopLeftRadius: 20 * vw,
    borderTopRightRadius: 20 * vw
  
  }
});
