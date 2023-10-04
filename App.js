import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Menu from './components/Menu';

export default function App() {

  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemPress = (item) => {
    setSelectedMenuItem(item);
    toggleMenu();
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Menu onMenuItemPress={handleMenuItemPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
