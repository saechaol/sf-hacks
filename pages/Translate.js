import { StatusBar } from 'expo-status-bar';
import React from 'react';
import VoiceTest from '../components/VoiceTest'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';


const Translate = (e) => {
  return (
    <View style={styles.container}>
      <VoiceTest />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Translate;