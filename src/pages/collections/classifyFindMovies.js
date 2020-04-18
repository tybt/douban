import React from 'react';
import { StyleSheet,View,Text,Image,TouchableWithoutFeedback,ScrollView } from 'react-native';
       

export default class ClassifyFindMovies extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
  

    };
  }
   render(){
    return(
     <ScrollView>
       <View style={styles.main_1}>
         <Text style={styles.classifyTitle}>分类找电影</Text>
         <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("FindMovies")}>
           <View style={flexAlign}>
            <Text style={{color:"#666"}}>地区、年代、特色</Text>
            <Image style={styles.forward} source={require('../../static/component/forward.png')}></Image>
           </View>
         </TouchableWithoutFeedback>
       </View>
       <View style={styles.main_2}>
         <View style={styles.classBlock}>
           <Text style={styles.classifyTitle}>专题</Text>
           <View style={styles.box}>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={{width:220*vw}}></Text>
              <Text style={{width:220*vw}}></Text>
           </View>
         </View>
         <View style={styles.classBlock}>
           <Text style={styles.classifyTitle}>专题</Text>
           <View style={styles.box}>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={{width:220*vw}}></Text>
              <Text style={{width:220*vw}}></Text>
           </View>
         </View>
         <View style={styles.classBlock}>
           <Text style={styles.classifyTitle}>专题</Text>
           <View style={styles.box}>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={{width:220*vw}}></Text>
              <Text style={{width:220*vw}}></Text>
           </View>
         </View>
         <View style={styles.classBlock}>
           <Text style={styles.classifyTitle}>专题</Text>
           <View style={styles.box}>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={{width:220*vw}}></Text>
              <Text style={{width:220*vw}}></Text>
           </View>
         </View>
         <View style={styles.classBlock}>
           <Text style={styles.classifyTitle}>专题</Text>
           <View style={styles.box}>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={{width:220*vw}}></Text>
              <Text style={{width:220*vw}}></Text>
           </View>
         </View>
         <View style={styles.classBlock}>
           <Text style={styles.classifyTitle}>专题</Text>
           <View style={styles.box}>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={{width:220*vw}}></Text>
              <Text style={{width:220*vw}}></Text>
           </View>
         </View>
         <View style={styles.classBlock}>
           <Text style={styles.classifyTitle}>专题</Text>
           <View style={styles.box}>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={{width:220*vw}}></Text>
              <Text style={{width:220*vw}}></Text>
           </View>
         </View>
         <View style={styles.classBlock}>
           <Text style={styles.classifyTitle}>专题</Text>
           <View style={styles.box}>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={styles.brand}>豆瓣热门</Text>
              <Text style={{width:220*vw}}></Text>
              <Text style={{width:220*vw}}></Text>
           </View>
         </View>
       </View>
     </ScrollView>  

    )
   }
}
const styles=StyleSheet.create({
  classBlock:{
    marginTop:30*vw
  },
  box:{
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    paddingLeft:30*vw,
    paddingRight:30*vw,
  },
  brand:{
    marginTop:20*vw,
    width:220*vw,
    height:110*vw,
    borderRadius:10*vw,
    backgroundColor:"#563634",
    color:"#FFFFFF",
    textAlign:"center",
    lineHeight:110*vw,
    fontWeight:'bold',
  },
  main_1:{
    width:690*vw,
    height:86*vw,
    marginLeft:30*vw,
    marginTop:30*vw,
    borderRadius:10*vw,
    borderWidth:2*vw,
    borderColor:"#e2e2e2",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  forward:{
    width:20*vw,
    height:20*vw,
    marginLeft:20*vw,
    marginRight:30*vw
  },
  classifyTitle:{
    fontWeight:'bold',
    color:"#333",
    marginLeft:30*vw
  }      

})
