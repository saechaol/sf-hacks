import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';

const Launch = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() =>
        navigation.navigate('Translate')
      }>
        <Text style={styles.text}>Live Translate!</Text>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD9D9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      fontSize: 48,
  }
});

export default Launch;
