import { StyleSheet } from 'react-native';


export default StyleSheet.create( {

  userName:{
    fontWeight:'bold',
    color:'#000000',
    fontSize:28*vw
  },
  userBox:{
    width:480*vw,
    marginLeft:15*vw
  },
  date:{
    color:'#888'
  },
  main_02:{
    marginTop:20*vw,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20*vw,
    paddingRight:20*vw
  },
  userImg:{
    height:70*vw,
    width:70*vw,
    borderRadius:35*vw,

  },
  showBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:20*vw,
    paddingRight:20*vw
  },
  showIcon:{
    height:30*vw,
    width:30*vw
  },
  body:{
    flex:1 
  },
  videoBox:{
    paddingTop:40*vw,
    paddingBottom:20*vw
  }
})