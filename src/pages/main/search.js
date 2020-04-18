import React from 'react';
import { StyleSheet,View,Image,TextInput,Text,TouchableWithoutFeedback} from 'react-native';

export default class search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      interval:null,
      text:"",
    };
  }
  componentDidMount(){

  }
  render(){
    return(
      <View>
        <View style={styles.topBg}>
          <View style={styles.searchBox}>
            <View style={styles.searchBrand}>
              <Image style={styles.searchIcon} source={require('../../static/main/search.png')}></Image>
              <TextInput style={styles.textInput} placeholder={"请输入你感兴趣的内容"} onChangeText={(text)=>this.postData({text})}></TextInput>
            </View>
            <Text style={styles.cancel} onPress={()=>this.props.navigation.goBack()}>取消</Text>
          </View>
        </View>
        <View style={styles.main_2}>
          <View style={styles.historyTitle}>
            <Text style={styles.historyTitleWord}>最近搜索</Text>
            <TouchableWithoutFeedback>
              <Image style={styles.delete} source={require('../../static/component/delete.png')}></Image>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.historyBox}>
            <Text style={styles.historyBrand}>你妈</Text>
            <Text style={styles.historyBrand}>你妈</Text>
            <Text style={styles.historyBrand}>你妈</Text>
          </View>
        </View>
      </View>

    )
  }
  postData(tex){
    
  }
}
const styles=StyleSheet.create({
  delete:{
    height:50*vw,
    width:50*vw
  },
  historyTitle:{
    justifyContent:'space-between',
    flexDirection:'row'
  },
  historyTitleWord:{
    fontWeight:'bold',
    fontSize:30*vw,
  },
  main_2:{
    padding:30*vw
  },
  historyBrand:{
    backgroundColor:'#F7F7F7',
    padding:10*vw,
    marginLeft:20*vw,
    marginTop:20*vw

  },
  historyBox:{
    flexDirection:'row',
    justifyContent:'flex-start',

  },
  cancel:{
    marginLeft:20*vw,
    color:"#FFFFFF",
    fontSize:32*vw
  },
  textInput:{
    height:140*vw,
    marginLeft:10*vw,
    width:450*vw
  },
  searchIcon:{
    height:35*vw,
    width:35*vw,
    marginLeft:20*vw
  },
  searchBrand:{
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    height:60*vw,
    width:"80%",
    borderRadius:30*vw,
    alignItems:'center',
  },
  topBg:{
    backgroundColor:themeColor,
    paddingTop:50,
    paddingBottom:10
  },
  searchBox:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center'
  }   

})
