import React from "react";
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";

export default class DoubanRankTab_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.main_1}>
          <View style={styles.brand}>
            <View style={styles.brandBg} />
            <View style={[column,styles.left]}>
              <Text style={styles.weekRankTitle}>豆瓣周榜</Text>
              <Text style={styles.goodTitle}>口碑电影</Text>
            </View>
            <View style={styles.right}>
               <Text style={styles.movieTitle}>我的机长<Text style={styles.point}>9.0</Text></Text>
               <Text style={styles.movieTitle}>我的机长<Text style={styles.point}>9.0</Text></Text>
               <Text style={styles.movieTitle}>我的机长<Text style={styles.point}>9.0</Text></Text>
            </View>
          </View>
         
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
   right:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
   },
   left:{
      width:180*vw,
      alignItems:'center',
      justifyContent:'center'
   },
   point:{
      color:"#e9a947",
      marginLeft:20*vw
   },
   weekRankTitle:{
      color:"#888",
      fontWeight:'bold',
      fontSize:28*vw
   },
   goodTitle:{
      color:"#ffffff",
      fontWeight:'bold',
      fontSize:35*vw
   },
   movieTitle:{
      color:"#ffffff",
      fontWeight:'bold',
      fontSize:28*vw
   },
   main_1:{
      flexDirection:'column',
      justifyContent:'center',
   },
   brandBg: {

      width: 690 * vw,
      height: 175 * vw,
      backgroundColor: "#323239",
      position: "absolute"
   },
   brand: {
      position: "relative",
      width: 690 * vw,
      height: 175 * vw,
      borderRadius:10*vw,
      overflow:'hidden',
      marginLeft:30*vw,
      flexDirection:'row',
      marginTop:20*vw
   }
});
