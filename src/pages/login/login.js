import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

export default class login extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      loginType: "注册",
      account: "",
      password: ""
    };
  }
  componentDidMount() {}
  render() {
    return (
      <SafeAreaView style={body}>
        <View style={styles.main_1}>
          <Text style={styles.forward_word} onPress={() => this.goIndex()}>
            先去逛逛
          </Text>
          <Image
            style={styles.forward}
            source={require("../../static/component/forward.png")}
          />
        </View>
        <Text style={styles.title}>{this.state.loginType}</Text>
        <View style={styles.main_3}>
          <View style={[styles.inputBrand, commonBorder.bottom]}>
            <TextInput
              onChangeText={text => this.setState({ account: text })}
              value={this.state.account}
              placeholder={"账号"}
              style={styles.inputs}
            />
          </View>
          <View style={[styles.inputBrand]}>
            <TextInput
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
              secureTextEntry={true}
              placeholder={"密码"}
              style={styles.inputs}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => this.pressButton()}>
          <Text style={styles.button}>{this.state.loginType}</Text>
        </TouchableOpacity>
        {this.state.loginType == "注册" ? (
          <Text>
            已有账号？请<Text onPress={() => this.changeType()}>登录</Text>
          </Text>
        ) : (
          <View />
        )}
        {this.state.loginType == "登录" ? (
          <Text>
            没有账号？请<Text onPress={() => this.changeType()}>注册</Text>
          </Text>
        ) : (
          <View />
        )}
      </SafeAreaView>
    );
  }
  goIndex() {
    this.props.navigation.navigate("tab");
  }
  pressButton() {
    if (this.state.account.trim().length < 6) {
      Alert.alert("请输入六位数以上账号");
    } else if (this.state.password.trim().length < 6) {
      Alert.alert("请输入六位数以上密码");
    } else if (this.state.loginType == "注册") {
      ajaxPost(
        Url.register,
        { account: this.state.account, password: this.state.password },
        res => {
          console.log(res, "res");
        }
      );
    } else if (this.state.loginType == "登录") {
      ajaxPost(
        Url.loginWithAccount,
        { account: this.state.account, password: this.state.password },
        async res => {
          console.log(res, "res");
          if (res.code == 1) {
            await AsyncStorage.setItem("token", res.token);

            const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: "login" })]
            });
            this.props.navigation.dispatch(resetAction);
          }
        }
      );
    }
  }
  changeType() {
    this.setState({
      loginType: this.state.loginType == "登录" ? "注册" : "登录"
    });
  }
}
const styles = StyleSheet.create({
  button: {
    width: 680 * vw,
    backgroundColor: "#a9d8ab",
    height: 80 * vw,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 80 * vw,
    fontSize: 30 * vw,
    marginLeft: 35 * vw,
    marginTop: 30 * vw,
    borderRadius: 10 * vw
  },
  main_3: {
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderRadius: 5 * vw,
    paddingLeft: 30 * vw,
    paddingRight: 30 * vw,
    width: 680 * vw,
    marginLeft: 35 * vw,
    marginTop: 60 * vw
  },
  main_1: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 30 * vw,
    alignItems: "center"
  },
  title: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 40 * vw,
    textAlign: "center",
    marginTop: 20 * vw
  },
  forward: {
    height: 22 * vw,
    width: 14 * vw
  },
  forward_word: {
    color: "#666",
    marginLeft: 5 * vw
  },
  inputs: {
    width: 635 * vw
  }
});
