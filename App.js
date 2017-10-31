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
  Button,
  ToastAndroid
} from 'react-native';
var SmsAndroid = require('react-native-sms-android');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const sendIndirect = () => {
    SmsAndroid.sms(
        '375293541772', // phone number to send sms to
        'This is the sms text', // sms body
        'sendIndirect', // sendDirect or sendIndirect
        (err, message) => {
            if (err){
                console.log("error");
            } else {
                console.log(message); // callback message
            }
        }
    );
    ToastAndroid.show('Send sendIndirect', ToastAndroid.SHORT);
}
const sendDirect = () => {
    SmsAndroid.sms(
        '+375293541772', // phone number to send sms to
        'This is the sms text', // sms body
        'sendDirect', // sendDirect or sendIndirect
        (err, message) => {
            if (err){
                console.log("error");
                ToastAndroid.show('err' + err, ToastAndroid.SHORT);
            } else {
                console.log(message); // callback message
                ToastAndroid.show(message, ToastAndroid.SHORT);
            }
        }
    );
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       {/* <Button
            onPress={sendIndirect}
            title="SendIndirect"
        />*/}
          <Button
              onPress={sendDirect}
              title="SendDirect"
          />
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
