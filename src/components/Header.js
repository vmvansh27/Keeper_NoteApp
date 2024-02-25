// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>

      <Text style={styles.title}>Keeper</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 50,
    backgroundColor: '#C8A2C8',
    paddingTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
    marginBottom: 50,
  },
});

export default Header;
