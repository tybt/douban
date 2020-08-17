import React from 'react';
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieIndexAction from '../../actions/movieIndexActions';

import styles from './style/movieIndexStyle'
import StatusBar from './component/StatusBar'
import { Header } from 'react-navigation-stack';
import Stars from './component/star'
import PickerStars from './component/pickerStars'
import RankStars from './component/rankStars'
class MovieIndex extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.height = Header.HEIGHT
    this.props.movieIndexActions.requestMovieDetail(this.props.navigation.state.params.id)
  }
  componentWillUnmount(){
    console.log(this.props.movieIndexActions);
    this.props.movieIndexActions.reset()
  }
  render() {
    const { movieDetail } = this.props.movieIndexReducer
    return (
      <SafeAreaView style={styles.body} >
        {
          movieDetail == null ? null : (
            <ScrollView contentContainerStyle={styles.scorllViews} >
              <View style={styles.main_01}>
                <View style={styles.movieBrand}>
                  <Image style={styles.movieImg} source={{ uri: movieDetail.images.small }}></Image>
                  <View style={styles.movieInfo}>
                    <Text style={styles.movieTitle}>{movieDetail.title}</Text>
                    <View style={styles.movieEditor}>
                      <Text style={styles.movieText}>{movieDetail.directors[0].name}</Text>
                      <Text style={styles.movieText}>({movieDetail.pubdate})</Text>
                    </View>
                    <View style={styles.flexRow}>
                      {
                        movieDetail.genres.map((elem, index) => {
                          return (
                            <Text style={styles.movie_t} key={index}>{elem[index]}</Text>
                          )
                        })
                      }
                    </View>
                    <View style={styles.btnBox}>
                      <TouchableOpacity style={styles.btn} onPress={() => this.setLike()}>
                        <Image style={styles.star} source={require("../../static/component/star1.png")}></Image>
                        <Text>想看</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.btn, { marginLeft: 20 * vw }]} onPress={() => this.setLike()}>
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
                    <RankStars num={movieDetail.rating.average}></RankStars>
                  </View>
                  <View style={styles.starBox}>
                    <View style={styles.starList}>
                      <PickerStars num={5}></PickerStars>
                      <StatusBar num={{ value: movieDetail.rating.details[5], total: movieDetail.ratings_count }}></StatusBar>
                    </View>

                    <View style={styles.starList}>
                      <PickerStars num={4}></PickerStars>                      
                      <StatusBar num={{ value: movieDetail.rating.details[4], total: movieDetail.ratings_count }}></StatusBar>
                    </View>
                    <View style={styles.starList}>
                      <PickerStars num={3}></PickerStars>                      
                      <StatusBar num={{ value: movieDetail.rating.details[3], total: movieDetail.ratings_count }}></StatusBar>
                    </View>
                    <View style={styles.starList}>
                      <PickerStars num={2}></PickerStars>                      
                      <StatusBar num={{ value: movieDetail.rating.details[2], total: movieDetail.ratings_count }}></StatusBar>
                    </View>
                    <View style={styles.starList}>
                      <PickerStars num={1}></PickerStars>                      
                      <StatusBar num={{ value: movieDetail.rating.details[1], total: movieDetail.ratings_count }}></StatusBar>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.main_03}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={[styles.csrollBox, commonBody690]}>
                  {
                    movieDetail.tags.map((elem, index) => {
                      return (
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
                  style={[styles.csrollBox, { marginRight: 20 * vw }]}>
                  {
                    movieDetail.casts.map((castsElem, castsIndex) => {
                      return (
                        <ScrollView >
                          <View style={styles.roleBrand} key={castsIndex}>
                            <Image style={styles.roleImg} source={{ uri: castsElem.avatars.small }}></Image>
                            <Text style={styles.roleText} numberOfLines={1} ellipsizeMode={"tail"}>{castsElem.name}</Text>
                            <Text style={styles.roleForJok} numberOfLines={1} ellipsizeMode={"tail"}>饰{castsElem.name_en}</Text>
                          </View>
                        </ScrollView>
                      )
                    })
                  }
                </ScrollView>
              </View>
              <View style={[styles.main_05, commonBody]}>
                <Text style={[fontw32, colorfff]}>预告片/剧照</Text>
                <ScrollView horizontal style={[flexRow]}>
                  {
                    movieDetail.trailers.map(videoElem => {
                      return (
                        <TouchableOpacity onPress={()=>this.goVideoDetail(videoElem)} style={[styles.videoBrand, flexAlignCenter, m_t20]}>
                          <Image style={styles.videoImg} source={{ uri: videoElem.small }}></Image>
                          <Image style={styles.videoStartWitle} source={require('../../static/component/videoStartWitle.png')}></Image>
                        </TouchableOpacity>

                      )
                    })
                  }

                </ScrollView>

              </View>
              <View style={[styles.main_06, flexAlignCenter, commonBody690, m_t30]}>
                <View style={styles.commentBox}>
                  <View style={[flexAlignBetween]}>
                    <Text style={[fontw32, colorfff]}>
                      短评
                    </Text>
                    <View style={[flexAlign]}>
                      <Text style={[colorfff]}>
                        全部短评{movieDetail.reviews_count}
                      </Text>
                      <Image style={styles.forward} source={require('../../static/component/forward_white.png')}></Image>
                    </View>
                  </View>
                  {
                    movieDetail.popular_comments.map(elem => {
                      return (
                        <View style={[styles.commentBrand, m_t30]}>
                          <View style={[flexAlignBetween]}>
                            <Image style={styles.userImg} source={{ uri: elem.author.avatar }}></Image>
                            <View style={styles.userBox}>
                              <Text style={[fontw24, m_b10, colorfff, opacity5,]}>
                                {elem.author.name}
                              </Text>
                              <Stars num={elem.rating.value}></Stars>
                            </View>
                            <Image style={styles.more} source={require('../../static/main/more.png')}></Image>
                          </View>
                          <Text style={[m_t10, colorfff, opacity5]}>
                            {elem.content}
                          </Text>
                          <View style={[flexAlign]}>
                            <Image style={[styles.favor, opacity5]} source={require('../../static/component/favor.png')}></Image>
                            <Text style={[colorfff, opacity5, m_l10]}>
                              {elem.useful_count}
                            </Text>
                          </View>
                        </View>
                      )
                    })
                  }

                </View>
              </View>
              <View style={[styles.main_07, m_t30, commonBody]}>
                <View style={[flexAlignBetween]}>
                  <Text style={[fontw32, colorfff]}>获奖记录</Text>
                  <View style={[flexAlign]}>
                    <Text style={[colorfff]}>查看更多</Text>
                    <Image style={styles.forward_white} source={require('../../static/component/forward_white.png')}></Image>
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={[flexAlign]}>
                    <Image style={[styles.wardImg]} source={require('../../static/timg.jpg')}></Image>
                    <View>
                      <Text style={[colorfff, fontw32]}>奥斯卡金像奖</Text>
                      <Text style={[colorfff]}>最佳影片</Text>
                    </View>
                  </View>
                </View>


              </View>
            </ScrollView>
          )
        }

        {/* <Slide></Slide> */}
      </SafeAreaView>

    )
  }
  goVideoDetail(item){
    console.log(item,'item');
    this.props.navigation.navigate('movieVideo',item)
  }
}

const mapStateToProps = (state) => {
  const { movieIndexReducer } = state;
  return {
    movieIndexReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const movieIndexActions = bindActionCreators(movieIndexAction, dispatch);
  return {
    movieIndexActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);






