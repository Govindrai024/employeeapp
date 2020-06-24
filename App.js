import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/home'
import CreateEmployee from './screen/createEmployee'


export default function App() {
  return (
    <View style={styles.container}>
      {/* use it as a ordnary component */}
      {/* <Home />  */}

      <CreateEmployee/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#267557'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
