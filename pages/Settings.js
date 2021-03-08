import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SearchDropDown from '../components/SearchDropDown';

const filtered = ['English', 'Japanese', 'German']
var language = "English"

const Settings = (e) => {
    return (
        <View style ={styles.container}>
            <Text style={{fontSize: 20}}>Language</Text>
            <SearchDropDown onPress={() => language} dataSource={filtered} />
            <View style={{paddingTop: 150}}>
                <Text style={{fontSize: 20}}>Themes</Text>
            </View>
            <FlatList />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default Settings;