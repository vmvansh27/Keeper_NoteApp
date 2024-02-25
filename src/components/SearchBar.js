import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onChangeText }) => {
    const [searchText, setSearchText] = useState('');

    const handleTextChange = (text) => {
        setSearchText(text);
        onChangeText(text); // Notify parent component of the search text change
    };

    return (
        <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            onChangeText={handleTextChange}
            value={searchText}
        />
    );
};

const styles = StyleSheet.create({
    searchBar: {
        height: 40,
        // borderColor: 'gray',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal: 20,
    },
});

export default SearchBar;
