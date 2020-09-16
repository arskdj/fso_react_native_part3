import React from 'react';
import { StyleSheet   } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import createApolloClient from './src/utils/apolloClient.js';
import { ApolloProvider } from '@apollo/react-hooks';

const apolloClient = createApolloClient();

export default function App() {
    console.log('hello world');
    return (
        <NativeRouter>
            <ApolloProvider client={apolloClient}>
                <Main style={styles}/>
            </ApolloProvider>
        </NativeRouter>
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
