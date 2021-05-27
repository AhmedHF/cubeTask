//import liraries
import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

// create a component
const List = ({ data, horizontal, renderItem }) => {
    return (
        // <View style={styles.container}>
        <FlatList
            data={data}
            {...{ horizontal }}
            renderItem={({ item, index }) => renderItem(item, index)}
            keyExtractor={(item, index) => String(index)}
        />
        // </View>
    );
};

List.default = {
    horizontal: false,
}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default List;
