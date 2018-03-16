import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyA-0EVKJRlZjlqdpM3J6nOqXaorTp1Mn9M",
      authDomain: "one-time-password-d3524.firebaseapp.com",
      databaseURL: "https://one-time-password-d3524.firebaseio.com",
      projectId: "one-time-password-d3524",
      storageBucket: "one-time-password-d3524.appspot.com",
      messagingSenderId: "900219800247"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
