import React from 'react';
import { StyleSheet,View,TouchableWithoutFeedback,Text,Image,ScrollView } from 'react-native';
       

export default class FindMovies extends React.Component{
   constructor(props) {
       super(props);
       this.state = {
       

            };
        }
   render(){
    return(
      <ScrollView>
        <View>
          <View>
            <Text>近期</Text>
            <Text>近期</Text>
            <Text>近期</Text>
            <Text>近期</Text>
          </View>
          <TouchableWithoutFeedback>
            <Image source={require('../../static/component/filter.png')}></Image>
            <Text>筛选</Text>
          </TouchableWithoutFeedback>
        </View>

      </ScrollView>
    )
   }
}
const styles=StyleSheet.create({
       

})
