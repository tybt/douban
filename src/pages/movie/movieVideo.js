import React from 'react';
import { SafeAreaView,View,Text,TouchableWithoutFeedback,Image} from 'react-native';
import styles from './style/movieVideoStyle'       
import Video from 'react-native-video';

export default class MovieVideo extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      muted:false,
      videoWidth: 750*vw,
      videoHeight: 750*vw * 9/16, // 默认16：9的宽高比
    };
  }
  render(){
    
    return(
      <SafeAreaView style={[styles.body]}>
        <View style={[styles.videoBox,{ width: this.state.videoWidth, backgroundColor:'#000000' }]}> 
          <Video 
          ref={(ref) => this.videoPlayer = ref}
          muted={this.state.muted} //是否静音
          //paused //是否暂停
          poster={'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1208/15/c0/12924355_1344999165557.jpg'}//加载时候的图片
          //hideShutterView
          fullscreen={true} 
          fullscreenOrientation={"portrait"}
          controls={true}
          //playWhenInactive={false}
          //playInBackground={false}
          //repeat//是否重复
          //rate
          //source={require('../../static/video_1.mp4')}
          resizeMode="cover"
          source={{uri: 'https://www.bilibili.com/bangumi/play/ss28274?bsource=douban' }}
          style={styles.backgroundVideo} 
          ignoreSilentSwitch={'ignore'}
          progressUpdateInterval={250.0}
          onLoadStart={this._onLoadStart}
          onLoad={this._onLoaded}
          onProgress={this._onProgressChanged}
          onEnd={this._onPlayEnd}
          onError={this._onPlayError}
          onBuffer={this._onBuffering}
          style={{width: this.state.videoWidth, height: this.state.videoHeight}}
          /> 
          <View style={styles.showBox}>
            <TouchableWithoutFeedback onPress={()=>this.setMuted()}>
              <Image style={styles.showIcon} source={this.state.muted?require('../../static/component/voice_1.png'):require('../../static/component/voice.png')}></Image>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>this.toFullScreen()}>
              <Image style={styles.showIcon} source={require('../../static/component/toBig.png')}></Image>
            </TouchableWithoutFeedback>
          </View>
          
        </View>
        <View style={styles.main_02}>
          <Image style={styles.userImg} source={require('../../static/timg.jpg')}></Image>
          <View style={styles.userBox}>
            <Text style={styles.userName}>大葱看电影</Text>
            <Text style={styles.userIntroduction}>这是一首简单的小情歌</Text>
          </View>
          <Text style={styles.date}>2019-10-15</Text>
        </View>
        <View style={styles.main_03}>
          <Text style={styles.comment}>《一出好戏真的是绝了》</Text>
        </View>

      </SafeAreaView>

    )
  }
  onPress() {
    if (this.videoPlayer!=null)
      this.videoPlayer.presentFullscreenPlayer();
  }
  toFullScreen(){
    console.log(this)
    this.videoPlayer.presentFullscreenPlayer();
  }
  setMuted(){
    if(this.state.muted){
      this.setState({muted:false})
    }
    else if(!this.state.muted){
      this.setState({muted:true})
    }
  }
  _onLoadStart = () => {
    console.log('视频开始加载');
  };
  
  _onBuffering = () => {
    console.log('视频缓冲中...')
  };
  
  _onLoaded = (data) => {
    console.log('视频加载完成');
    this.setState({
      duration: data.duration,
    });
  };
  
  _onProgressChanged = (data) => {
    console.log('视频进度更新');
    if (this.state.isPlaying) {
      this.setState({
        currentTime: data.currentTime,
      })
    }
  };
  
  _onPlayEnd = () => {
    console.log('视频播放结束');
    this.setState({
      currentTime: 0,
      isPlaying: false,
      playFromBeginning: true
    });
  };
  
  _onPlayError = () => {
    console.log('视频播放失败');
  };
}

