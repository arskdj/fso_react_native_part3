import React from 'react';
import { StyleSheet   } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';

export default function App() {
    console.log('hello world');
    return (
        <NativeRouter>
            <Main style={styles}/>
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
