import React from "react";
import {StyleSheet,View,Text,SafeAreaView,Image,ScrollView,TouchableOpacity} from "react-native";
export default class Tab_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive:false,
      activeStyle:{
        color:'#333',
        fontWeight:'bold',
        borderBottomWidth:3,
        borderColor:"#333"
      }
    };  
  }
  componentDidMount(){
    this.props.collectionsActions.requestMovieData();

  }
  render() {
    const {movieData,top250Total}=this.props.collectionsReducer
    return (
    <View style={{flex:1}}>
      <ScrollView style={{flex:1}}>
        <View style={styles.t1_main_1}>
          <TouchableOpacity style={styles.t1_main_1_box} onPress={()=>this.props.navigation.navigate("ClassifyFindMovies")}>
            <Image style={styles.t1_main_1_img} source={require('../../../static/collections/1_03.png')}></Image>
            <Text style={styles.t1_main_1_text}>找电影</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.t1_main_1_box} onPress={()=>this.goRank()}>
            <Image style={styles.t1_main_1_img} source={require('../../../static/collections/1_05.png')}></Image>
            <Text style={styles.t1_main_1_text}>豆瓣榜单</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.t1_main_1_box}>
            <Image style={styles.t1_main_1_img} source={require('../../../static/collections/1_07.png')}></Image>
            <Text style={styles.t1_main_1_text}>豆瓣猜</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.t1_main_1_box}>
            <Image style={styles.t1_main_1_img} source={require('../../../static/collections/1_09.png')}></Image>
            <Text style={styles.t1_main_1_text}>豆瓣片单</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.t1_main_2_tabBox}>
          <Text style={[styles.t1_main_2_text,this.state.isActive==0?this.state.activeStyle:null]} 
          onPress={()=>this.setActive()}>影院热映</Text>
          <Text style={[styles.t1_main_2_text,this.state.isActive==1?this.state.activeStyle:null]} 
          onPress={()=>this.setActive()}>即将上映</Text>
        </View>
        <View style={styles.listBox}>
          <TouchableOpacity style={styles.listBrand} onPress={()=>this.goMovieDetail()}>
            <Image style={styles.movieImg} source={require('../../../static/timg.jpg')}></Image>
            <Text style={styles.movieTitle}>冰雪奇缘</Text>
            <View style={styles.starBox}>
              <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
              <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
              <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
              <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
              <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
              <Text style={styles.moviePoint}>5.5</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.listBrand}></View>
          <View style={styles.listBrand}></View>
        </View>
        <View style={styles.main_hot}>
          <View style={styles.hot_titleBox}>
            <Text style={styles.hot_title}>历史最佳</Text>
            <View style={styles.hot_more}>
              <Text>全部 {top250Total} </Text>
              <Image style={styles.forward} source={require('../../../static/component/forward.png')}></Image>
            </View>
          </View>
          <View style={styles.listBox}>
            {
              movieData.map((elem,index)=>{
                return (
                  <TouchableOpacity onPress={()=>this.goMovieDetail(elem.id)} style={styles.listBrand} key={index}>
                    <Image style={styles.movieImg} source={{uri:elem.images.small}}></Image>
                    <Text 
                    ellipsizeMode={"tail"}
                    numberOfLines={1} 
                    style={styles.movieTitle}>{elem.title}</Text>
                    <View style={styles.starBox}>
                    {
                      this.showStars(elem.rating.average)
                    }
                      <Text style={styles.moviePoint}>{elem.rating.average} </Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            }
            
          
            <View style={styles.listBrand}></View>
            <View style={styles.listBrand}></View>
          </View>          
        </View>

      </ScrollView>
    </View>);
  }
  showStars(point){
    const realPoint=Math.round(point/2) 
    switch(realPoint){
      case 5:
        return(
          <View style={styles.starRow}>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
          </View>
        );
      case 4:
        return(
          <View>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
          </View>
        );
      case 3:
        return(
          <View>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
          </View>
        );
      case 2:
        return(
          <View>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
          </View>
        );
      case 1:
        return(
          <View>
            <Image style={styles.star} source={require('../../../static/component/star1.png')}></Image>
          </View>
        );
        
    }
  }

  goMovieDetail(id){
    console.log(id,'id')
    this.props.navigation.navigate("movieIndex",{id})
  }
  goRank(){
    this.props.navigation.navigate("DoubanRank")
  }
  setActive(){
    if(this.state.isActive==0){
      this.setState({isActive:1})
    }
    else{
      this.setState({isActive:0})
    }
  }
}
const styles = StyleSheet.create({
  starRow:{
    flexDirection:'row'
  },
  forward:{
    width:25*vw,
    height:25*vw
  },
  hot_more:{
    flexDirection:'row',
    alignItems:'center'
  },
  hot_titleBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:30*vw,
    paddingRight:30*vw,
  },
  main_hot:{
    marginTop:40*vw
  },
  hot_title:{
    fontSize:32*vw,
    fontWeight:'bold'
  },
  moviePoint:{
    fontSize:28*vw,
    color:"#888",
    marginTop:10*vw,
    marginLeft:10*vw
  },
  movieTitle:{
    fontWeight:'bold',
    fontSize:30*vw,
    color:"#333",
    marginTop:10*vw,
  },
  starBox:{
    flexDirection:'row',
    alignItems:'center'
  },
  star:{
    width:30*vw,
    height:38*vw
  },
  listBox:{
    paddingLeft:30*vw,
    paddingRight:30*vw,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  listBrand:{
    marginTop:20*vw,
    width:220*vw,
    
  },
  movieImg:{
    width:220*vw,
    height:310*vw,
    borderRadius:10*vw,
    backgroundColor:"#666"
  },
  t1_main_2_text:{
    marginLeft:30*vw,
    fontSize:32*vw,
    paddingBottom:10*vw,
    color:"#888"
  },
  t1_main_2_tabBox:{
    marginTop:20*vw,
    flexDirection:'row',
    justifyContent:'flex-start'
  },

  t1_main_1_text:{
    color:'#666',
    marginTop:5*vw
  },
  t1_main_1_box:{
    flexDirection:'column',
    alignItems:'center'
  },
  t1_main_1:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:80*vw,
    paddingRight:80*vw,
    marginTop:30*vw
  },
  t1_main_1_img:{
    width:80*vw,
    height:80*vw
  },
});