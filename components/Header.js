import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header () {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Eilmark</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      height: 80,
      paddingTop: 38,
      backgroundColor: "#00d361"
    },
    title: {
        color: "#fff"
    }
  });