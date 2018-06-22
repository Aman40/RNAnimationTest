/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Easing,
  Animated,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: new Animated.Value(0),
    }
  }
  componentDidMount = ()=>{
    Animated.loop(
      Animated.timing(
        this.state.fontSize, {
          toValue: 40,
          duration: 2000,
          easing:Easing.sin,
          delay: 0,
        }
      )
    ).start();
  }
  render() {
    // const interpolatedValue = this.state.fontSize.interpolate({
    //   inputRange:  [-1, 0, 1, 2, 3],
    //   outputRange: [28, 12, 28, 12, 28],
    //   extrapolate: "clamp",
    // });
    return (
      <View style={styles.container}>
        < Animated.Text style = {
          { ...StyleSheet.flatten(styles.welcome),
            //fontSize: interpolatedValue,
            fontSize: this.state.fontSize,
          }
        } >
          Welcome to React Native!
        </Animated.Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
