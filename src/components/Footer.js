// Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Copyright ⓒ {year}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 14,
  },
});

export default Footer;
