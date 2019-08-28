import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import ImagePicker from "react-native-image-picker";

export default class writeMoment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      preImages:[],
      images:''
    };
  }
  render() {
    return (
      <SafeAreaView style={body}>
        <View style={[styles.main_1, commonBorder.bottom]}>
          <Text
            style={styles.cancel}
            onPress={() => this.props.navigation.goBack()}
          >
            取消
          </Text>
          <Text onPress={()=>this.postMoment()}>发布</Text>
        </View>
        <KeyboardAvoidingView style={styles.main_2}>
          <TextInput
            placeholder={"请输入..."}
            onChangeText={text => this.setState({"word": text})}
            value={this.state.word}
          />
          <View>
            {this.state.preImages.map((elem,index)=>{
              return(<View>
                    <Image source={{uri:elem}} style={{height:200,width:200}}></Image>
                </View>)
              
            })}
            <TouchableWithoutFeedback onPress={() => this.addPhotos()}>
              <Image source={require("../../static/main/addPhoto.png")} />
            </TouchableWithoutFeedback>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
  postImages(){
    return new Promise((resolve,reject)=>{
      ajaxPostImg(Url.uploadImg,this.state.preImages,(res)=>{
        if(res.code==1){
          let temp=this.state.images+res.url+','
          this.setState({
            images:temp
          })
          resolve()
        }
      })
    })
  }
  async postMoment(){
    for(let i=0;i<this.state.preImages.length;i++){
      await this.postImages()
    }
    ajaxPost(Url.writeMoment,{content:this.state.word,images:this.state.images},(res)=>{
      console.log(res,'res')
    })
  }
  addPhotos() {
    ImagePicker.showImagePicker(
      {
        title: "选择图片",
        chooseFromLibraryButtonTitle:"相册",
        takePhotoButtonTitle:"拍照",
        cancelButtonTitle:"取消",
        storageOptions: {
          skipBackup: true,
          path: "images"
        }
      },
      response => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else if (response.customButton) {
          console.log("User tapped custom button: ", response.customButton);
        } else {
          console.log(response.uri,'response.uri');
          let temp=this.state.preImages;
          temp.push(response.uri)
          this.setState({
            preImages: temp
          });
          console.log(this.state.preImages,'12312312')
        }
      }
    );
  }
}
const styles = StyleSheet.create({
  main_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20 * vw,
    paddingLeft: 30 * vw,
    paddingRight: 30 * vw
  },
  cancel: {
    fontSize: 28 * vw,
    color: "#333"
  }
});
