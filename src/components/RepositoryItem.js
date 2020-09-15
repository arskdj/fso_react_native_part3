import React from 'react'
import {TouchableHighlight, View, Text} from 'react-native'

const RepositoryItem = ({item, separators }) => {
    return (
        <TouchableHighlight
            key={item.key}
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{ backgroundColor: 'white' }}>
                <Text> Full Name: { item.fullName } </Text>
                <Text> Description: { item.description } </Text>
                <Text> Language: { item.language } </Text>
                <Text> Forks: { item.forksCount } </Text>
                <Text> Stars: { item.stargazersCount } </Text>
                <Text> Rating: { item.ratingAverage } </Text>
                <Text> Reviews: { item.reviewCount } </Text>
            </View>
        </TouchableHighlight>
    );
};

export default RepositoryItem
