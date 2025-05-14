import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import Breadcrumbs from '../../components/Breadcrumbs';

const NotificationsScreen = () => (
  <View style={styles.container}>
    <Breadcrumbs items={["Home", "Notificações"]} />
    <Text style={styles.title}>Notificações</Text>
    <Text style={styles.text}>Você receberá aqui avisos de promoções, status de pedidos e novidades.</Text>
  </View>
);

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 12,
  },
  text: {
    fontSize: 15,
    color: Colors.gray,
    marginBottom: 8,
  },
});