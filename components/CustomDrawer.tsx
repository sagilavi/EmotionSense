import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            )}
            label="Home"
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="play-circle" color={color} size={size} />
            )}
            label="Activation"
            onPress={() => props.navigation.navigate('Activation')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="chart-line" color={color} size={size} />
            )}
            label="MindFlow"
            onPress={() => props.navigation.navigate('MindFlow')}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 20,
  },
  drawerSection: {
    marginTop: 15,
  },
}); 