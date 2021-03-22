import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const NavBar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0a643',
    paddingTop: 15,
    paddingBottom: 10,
    width: '100%',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
  },
});
