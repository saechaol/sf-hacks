import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Launch = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Live Translate!</Text>
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
