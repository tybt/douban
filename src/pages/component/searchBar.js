import React from 'react';
import { StyleSheet,View ,TouchableWithoutFeedback,Image,Text} from 'react-native';
       

export default class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bgColor:"#FFFFFF",
      inputWidth:620*vw
    };
    if(this.props.bgColor){
      this.state.bgColor=this.props.bgColor
    }
  }
  componentDidMount(){
  }
  render(){
      return(
      <View style={styles.searchMain}>
        <View style={[styles.searchBox,{backgroundColor:this.state.bgColor,width:this.state.inputWidth}]} onPress={()=>this.goSearch()}>
          <TouchableWithoutFeedback>
            <Image source={require('../../static/main/search.png')} style={styles.top_img}></Image>
          </TouchableWithoutFeedback>
          <Text style={[styles.inputs]} onPress={()=>this.goSearch()}>请输入搜索内容</Text>
          <Image source={require('../../static/main/scan.png')} style={styles.top_img}></Image>
        </View>
        <Image style={styles.infomation} source={require('../../static/component/infomation.png')}></Image>
      </View>
      )
  }
  goSearch(){
    console.log('nima')
    this.props.navigation.navigate("search")
  }
}
const styles=StyleSheet.create({
  searchMain:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:30*vw,
    paddingRight:30*vw,
    alignItems:'center',
    width:750*vw
  },
  infomation:{
    width:40*vw,
    height:40*vw,
    marginLeft:20*vw
  },
  inputs:{
    marginLeft:5*vw,
    color:"#666",
    width:500*vw
  },
  searchBox:{
    height:60*vw,
    borderRadius:30*vw,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:20*vw,
    paddingRight:20*vw
  },
  top_img:{
    height:35*vw,
    width:35*vw
  },
  header_tab:{
    marginTop:20*vw,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:230*vw,
    paddingRight:230*vw,
    paddingBottom:10*vw
  },   

})
