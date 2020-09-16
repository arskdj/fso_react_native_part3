import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar.js'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
    return( 
        <>
        <AppBar/>
        <View style={styles.container}>
            <RepositoryList/>            
        </View>
        </>
    );
};

export default Main;
