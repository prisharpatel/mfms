// PartnersScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PartnersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Partners Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
