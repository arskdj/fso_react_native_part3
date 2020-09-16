import React from 'react';
import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        fontFamily: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        }),
    },
});

const Text = ({ style, ...props }) => {
    const textStyle = [
        styles.text,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default Text;
