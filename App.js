import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Sign In Please</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#334241',
  },
  headingText: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color:"#fff"
  }
});
