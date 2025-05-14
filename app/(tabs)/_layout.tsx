import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import Footer from '../../components/Footer';

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.tabsWrapper}>
        <Tabs screenOptions={{headerShown: false}}>
          <Tabs.Screen name='index' options={{
            title: 'Home',
            tabBarIcon: ({color}) => (
              <Ionicons name='home-outline' size={22} color={color} />
            )
          }} />
          <Tabs.Screen name='explore' options={{
            title: 'Explore',
            tabBarIcon: ({color}) => (
              <Ionicons name='search-outline' size={22} color={color} />
            )
          }} />
          <Tabs.Screen name='notifications' options={{
            title: 'Notification',
            tabBarIcon: ({color}) => (
              <Ionicons name='notifications-outline' size={22} color={color} />
            )
          }} />
          <Tabs.Screen name='cart' options={{
            title: 'Cart',
            tabBarBadge: 3,
            tabBarIcon: ({color}) => (
              <Ionicons name='cart-outline' size={22} color={color} />
            )
          }} />
          <Tabs.Screen name='profile' options={{
            title: 'Profile',
            tabBarIcon: ({color}) => (
              <Ionicons name='person-outline' size={22} color={color} />
            )
          }} />
        </Tabs>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabsWrapper: {
    flex: 1,
  },
});