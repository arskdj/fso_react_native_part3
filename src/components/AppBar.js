import React, {useEffect, useState, useContext} from "react"
import { Button, ScrollView, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { colors } from '../theme';
import { Link } from 'react-router-native'
import AppBarTab from './AppBarTab'
import AppBarButton from './AppBarButton'
import Text from './Text'
import { useQuery, useApolloClient  } from '@apollo/react-hooks';
import { GET_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

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
    const { data, error, loading } = useQuery(GET_USER);
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();

    console.log('tabbar', data);

    const signout = async () => {
        console.log('signout pressed');
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab title='Repositories' url='/'/>
                {  
                    data?.authorizedUser?.username && <AppBarButton title='SignOut' onPress={signout} />
                        || <AppBarTab title='SignIn' url='/signin'/>
                }
            </ScrollView>
        </View>
    )
}

export default AppBar
