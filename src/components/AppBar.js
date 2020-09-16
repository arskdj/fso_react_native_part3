import React, {useState} from "react"
import { TouchableWithoutFeedback, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { colors } from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.darkgreen,
        opacity: 0.85
    },
    text : {
        fontSize: 24,
        color: colors.white,
    }
});

const AppBar = () => {
    return (
        <TouchableWithoutFeedback> 
            <View style={styles.container}>
                <Text style={styles.text}>Repositories</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AppBar
