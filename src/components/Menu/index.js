// src/components/Menu.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = ({ onMenuItemPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.menuItem}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Games')} style={styles.menuItem}>
        <Text>Meus jogos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Me')} style={styles.menuItem}>
        <Text>Eu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    width: '100%',
  },
  menuItem: {
    margin: 10,
    paddingVertical: 10,
  },
});

export default Menu;
