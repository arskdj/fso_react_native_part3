import React, {useState} from "react"
import { ScrollView, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { colors } from '../theme';
import { Link } from 'react-router-native'
import AppBarTab from './AppBarTab'
import Text from './Text'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.darkgreen,
        opacity: 0.85,
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },
    text : {
        fontSize: 24,
        color: colors.white,
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
             <ScrollView horizontal>
                 <AppBarTab title='Repositories' url='/'/>
                 <AppBarTab title='SignIn' url='/signin'/>
             </ScrollView>
        </View>
    )
}

export default AppBar
