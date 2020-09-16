import React, {useState} from "react"
import { TouchableWithoutFeedback, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { colors } from '../theme';
import { Link } from 'react-router-native'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.darkgreen,
        opacity: 0.85,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        paddingRight: '30%',
    },
    text : {
        fontSize: 24,
        color: colors.white,
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab title='Repositories' url='/'/>
            <AppBarTab title='SignIn' url='/signin'/>
        </View>
    )
}

export default AppBar
