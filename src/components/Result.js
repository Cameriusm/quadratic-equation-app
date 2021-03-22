import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Result = ({ result }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 50,
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 20,
  },
});
