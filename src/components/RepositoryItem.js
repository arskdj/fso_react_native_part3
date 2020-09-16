import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import { colors } from '../theme';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    container: {
        flexDirection: 'row',
        backgroundColor: colors.gray,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    label: {
        backgroundColor: colors.orange,
        color: colors.white,
    },
    avatar: {
        width: 120,
        height: 120,
    },
    boldText: {
        fontWeight: 'bold', 
    },
    stats: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingRight: 10
    },
});

const RepositoryItem = ({item}) => {
    const toK = (value) => {
        if (value < 1000) return value;
        
        return (value/1000).toFixed(1) +'k'
    }
    return (
        <View style={styles.container} key={item.key}>

            <Image 
                style={styles.avatar}
                source={ { uri : item.ownerAvatarUrl } }
            />

            <View style={styles.textContainer}>

                <Text style={styles.boldText}>{ item.fullName }</Text>
                <Text>{ item.description }</Text>
                <View style={styles.row}>
                    <Text style={styles.label}> { item.language } </Text>
                </View>

                <View style={styles.stats}>
                    <View style={styles.column}>
                        <Text style={styles.boldText}>{ toK(item.forksCount) }</Text>
                        <Text>Forks</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.boldText}>{ toK(item.stargazersCount) }</Text>
                        <Text>Stars</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.boldText}>{ toK(item.ratingAverage) }</Text>
                        <Text>Rating</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.boldText}>{ toK(item.reviewCount) }</Text>
                        <Text>Reviews</Text>
                    </View>
                </View>
            </View>
        </View>

    );
};

export default RepositoryItem;
