import React from 'react';
import { StyleSheet ,View ,Text,SafeAreaView} from 'react-native';
export default class login extends React.Component{
    static navigationOptions={
        header:null,
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount(){
        
    }
    componentDidMount(){

    }
    render(){
        return(
            <View>
                {this.header()}
            </View>
        )
    }
    header(){
        return(
            <View style={styles.header}>


            </View>
        )
    }
}
const styles=StyleSheet.create({
    header:{
        
    }
})