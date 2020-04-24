import { Platform,Dimensions } from "react-native";


global.vw = Dimensions.get("window").width / 750;
global.vh = Dimensions.get("window").height;
global.platfrom = Platform; //全局定义平台


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
global.flexRow = {
  flexDirection:'row',
};

global.commonBody = {
  paddingLeft: 30 * vw,
  paddingRight: 30 * vw,
};
global.commonBody690 = {
  width:690*vw,
  marginLeft:30*vw
};
global.flexAlign = {
  flexDirection:'row',
  alignItems:'center'
};
global.flexAlignBetween = {
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
};
global.flexAlignCenter = {
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'
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

global.m_t10 = {
  marginTop:10*vw
};
global.m_b10 = {
  marginBottom:10*vw
};
global.m_l10 = {
  marginLeft:10*vw
};
global.m_r10 = {
  marginRight:10*vw
};


global.m_t20 = {
  marginTop:20*vw
};
global.m_b20 = {
  marginBottom:20*vw
};
global.m_l20 = {
  marginLeft:20*vw
};
global.m_r20 = {
  marginRight:20*vw
};

global.p_t20 = {
 PaddingTop:20*vw
};
global.p_b20 = {
  PaddingBottom:20*vw
};
global.p_l20 = {
  PaddingLeft:20*vw
};
global.p_r20 = {
  PaddingRight:20*vw
};


global.m_t30 = {
  marginTop:30*vw
};
global.m_b30 = {
  marginBottom:30*vw
};
global.m_l30 = {
  marginLeft:30*vw
};
global.m_r30 = {
  marginRight:30*vw
};

global.p_t30 = {
 PaddingTop:30*vw
};
global.p_b30 = {
  PaddingBottom:30*vw
};
global.p_l30 = {
  PaddingLeft:30*vw
};
global.p_r30 = {
  PaddingRight:30*vw
};
global.fontw32 = {
  fontSize:32*vw,
  fontWeight:'bold'
};
global.fontw28 = {
  fontSize:28*vw,
  fontWeight:'bold'
};
global.fontw24 = {
  fontSize:24*vw,
  fontWeight:'bold'
};
global.font32 = {
  fontSize:32*vw,
};
global.font30 = {
  fontSize:30*vw,
};
global.font28 = {
  fontSize:28*vw,
};
global.font26 = {
  fontSize:26*vw,
};
global.font24 = {
  fontSize:24*vw,
};
global.font22 = {
  fontSize:22*vw,
};
global.colorfff = {
  color:'#ffffff'
};
global.color666 = {
  color:'#666'
};
global.color888 = {
  color:'#888'
};
global.opacity5 = {
  opacity:0.5
};



