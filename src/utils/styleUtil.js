import { Platform,Dimensions } from "react-native";


global.vw = Dimensions.get("window").width / 750;
global.vh = Dimensions.get("window").height;
global.platfrom = Platform; //全局定义平台

global.column={
    flexDirection:'column'
}
global.body = {
  paddingTop: platfrom.os == "ios" ? 0 : 30,
  flex: 1,
  position: "relative"
};
global.paddingBody = {
  paddingTop: platfrom.os == "ios" ? 0 : 30,
  paddingLeft: 30 * vw,
  paddingRight: 30 * vw,
  flex: 1,
  position: "relative"
};
global.topContent = {
  paddingTop: platfrom.os == "ios" ? 0 : 30
};

global.flexAlign = {
  flexDirection:'row',
  alignItems:'center'
};
global.content = { flex: 1 };

global.themeColor = "#67ba62"; //主题风格

//定义普通的边框
global.commonBorder = {
  right: {
    borderRightWidth: 1,
    borderColor: "#f1f1f1"
  },
  left: {
    borderLeftWidth: 1,
    borderColor: "#f1f1f1"
  },
  top: {
    borderTopWidth: 1,
    borderColor: "#f1f1f1"
  },
  bottom: {
    borderBottomWidth: 1,
    borderColor: "#f1f1f1"
  }
};