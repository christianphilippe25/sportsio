// src/components/Menu.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Menu = ({ onMenuItemPress }) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => onMenuItemPress('Item 1')} style={styles.menuItem}>
        <Text>Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onMenuItemPress('Item 2')} style={styles.menuItem}>
        <Text>Item 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onMenuItemPress('Item 3')} style={styles.menuItem}>
        <Text>Item 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-around',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    width: '100%',
    position: 'absolute',
    bottom: 0, // Position at the bottom of the screen
    left: 0,
    right: 0,
  },
  menuItem: {
    margin: 10,
    paddingVertical: 10,
  },
});

export default Menu;
