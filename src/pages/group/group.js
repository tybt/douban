import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";


export default class Group extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <SafeAreaView>
        <Text
          style={{ position: "absolute", top: 300 }}
          onPress={() => this.props.readActions.addCount()}
        >
          {count}
        </Text>
      </SafeAreaView>
    );
  }
}







const styles = StyleSheet.create({});
