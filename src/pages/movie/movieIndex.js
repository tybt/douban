import React from 'react';
import {SafeAreaView,View,ScrollView,Image,Text,TouchableOpacity } from 'react-native';
import styles from './style/movieIndexStyle'
import StatusBar from './component/StatusBar'
import Slide from './component/SlidePop'
import { Header } from 'react-navigation-stack';
export default class MovieIndex extends React.Component{

  constructor( props ){
    super( props );
  }
  componentDidMount(){
    this.height= Header.HEIGHT
    this.props.movieIndexActions.requestMovieDetail(this.props.navigation.state.params.id)
  }
  render (){
    console.log(this.props,'this.props')
    const {movieDetail}=this.props.movieIndexReducer
    return (
      <SafeAreaView style={styles.body} >
        {
          movieDetail==null?null:(
            <ScrollView>
            <View style={styles.main_01}>
              <View style={styles.movieBrand}>
                <Image style={styles.movieImg} source={{uri:movieDetail.images.small}}></Image>
                <View style={styles.movieInfo}>
                  <Text style={styles.movieTitle}>{movieDetail.title}</Text>
                  <View style={styles.movieEditor}>
                    <Text style={styles.movieText}>{movieDetail.directors[0].name}</Text>
                    <Text style={styles.movieText}>({movieDetail.pubdate})</Text>
                  </View>
                  <View style={styles.flexRow}>
                    {
                      movieDetail.genres.map((elem,index)=>{
                        return(
                          <Text style={styles.movie_t} key={index}>{elem[index]}</Text>
                        )
                      })
                    }
                  </View>
                  <View style={styles.btnBox}>
                    <TouchableOpacity style={styles.btn} onPress={()=>this.setLike()}>
                      <Image style={styles.star} source={require("../../static/component/star1.png")}></Image>
                      <Text>想看</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn,{marginLeft:20*vw}]} onPress={()=>this.setLike()}>
                      <Image style={styles.star} source={require("../../static/component/star1.png")}></Image>
                      <Text>看过</Text>
                    </TouchableOpacity>
  
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.main_02}>
              <Text style={styles.countTitle}>豆瓣评分TM</Text>
              <View style={styles.countBox}>
                <View style={styles.countBrand}>
                  <Text style={styles.countText}>{movieDetail.rating.average}</Text>
                  <View style={styles.starRow}>
                    <Image style={styles.contImg} source={require('../../static/component/star1.png')}></Image>
                    <Image style={styles.contImg} source={require('../../static/component/star1.png')}></Image>
                    <Image style={styles.contImg} source={require('../../static/component/star1.png')}></Image>
                    <Image style={styles.contImg} source={require('../../static/component/star1.png')}></Image>
                    <Image style={styles.contImg} source={require('../../static/component/star1.png')}></Image>
                  </View>
                </View>
                <View style={styles.starBox}>
                  <View style={styles.starList}>
                    <View style={styles.listCountImgBox}>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                    </View>
                    <StatusBar num={{value:movieDetail.rating.details[5],total:movieDetail.ratings_count}}></StatusBar>
                  </View>

                  <View style={styles.starList}>
                    <View style={styles.listCountImgBox}>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                      
                    </View>
                    <StatusBar  num={{value:movieDetail.rating.details[4],total:movieDetail.ratings_count}}></StatusBar>
                  </View>
                  <View style={styles.starList}>
                    <View style={styles.listCountImgBox}>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                    </View>
                    <StatusBar  num={{value:movieDetail.rating.details[3],total:movieDetail.ratings_count}}></StatusBar>
                  </View>
                  <View style={styles.starList}>
                    <View style={styles.listCountImgBox}>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                    </View>
                    <StatusBar  num={{value:movieDetail.rating.details[2],total:movieDetail.ratings_count}}></StatusBar>
                  </View>
                  <View style={styles.starList}>
                    <View style={styles.listCountImgBox}>
                      <Image style={styles.contImg} source={require('../../static/component/star2.png')}></Image>
                    </View>
                    <StatusBar  num={{value:movieDetail.rating.details[1],total:movieDetail.ratings_count}}></StatusBar>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.main_03}>
              <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.csrollBox}>
                {
                  movieDetail.tags.map((elem,index)=>{
                    return(
                    <Text style={styles.scrollBrand} key={index}>{elem}</Text>
                    )
                  })
                }
               
              </ScrollView>
            </View>
            <View style={styles.main_04}>
              <View style={styles.roleBox}>
                <Text style={styles.roleTitle}>演员表</Text>
                <Text style={styles.roleMore}>全部</Text>
              </View>
              <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={[styles.csrollBox,{marginRight:20*vw}]}>
                {
                  movieDetail.casts.map((castsElem,castsIndex)=>{
                    return(
                      <View style={styles.roleBrand} key={castsIndex}>
                        <Image style={styles.roleImg} source={{uri:castsElem.avatars.small}}></Image>
                        <Text style={styles.roleText} numberOfLines={1} ellipsizeMode={"tail"}>{castsElem.name}</Text>
                        <Text style={styles.roleForJok} numberOfLines={1} ellipsizeMode={"tail"}>饰{castsElem.name_en}</Text>
                      </View>
                    )
                  })
                }
              </ScrollView>
            </View>
          </ScrollView>          
          )
        }
  
        <Slide></Slide>
      </SafeAreaView>

    )
  }
}






