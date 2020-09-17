import React  from "react";
import { Link } from 'react-router-native';
import { TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const styles = StyleSheet.create({
    text : {
        fontSize: 24,
        backgroundColor: colors.lightgreen,
        color: colors.white,
        padding:10,
        marginLeft:10,
    }
});

const AppBarButton = ({title, url, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableWithoutFeedback>
    );
};

export default AppBarButton;
