import React from 'react';
import { StyleSheet, Text, View, WebView, SafeAreaView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <WebView automaticallyAdjustContentInsets={true} source={require('./assets/html/index.html')} />
    );
  }
}
