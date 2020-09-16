import React  from "react";
import { Link } from 'react-router-native';
import { Text, StyleSheet } from 'react-native';
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

const AppBarTab = ({title, url}) => {
    return (
        <Link to={url}> 
            <Text style={styles.text}>{title}</Text>
        </Link>
    );
};

export default AppBarTab;
