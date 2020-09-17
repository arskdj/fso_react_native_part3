import React from "react";
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import { Route, Switch, Redirect } from 'react-router-native';
import {GET_REPOSITORIES} from '../graphql/queries'
import { useQuery } from '@apollo/react-hooks';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
    });
    //console.log(data)
    return( 
        <>
            <AppBar/>
            <Switch>
                <Route path="/signin" exact>
                    <SignIn />
                </Route>
                <Route path="/" exact>
                    <View style={styles.container}>
                        <RepositoryList/>            
                    </View>
                </Route>
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default Main;
