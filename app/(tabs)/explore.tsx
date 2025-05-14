import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import Breadcrumbs from '../../components/Breadcrumbs';

const ExploreScreen = () => (
  <View style={styles.container}>
    <Breadcrumbs items={["Home", "Explorar"]} />
    <Text style={styles.title}>Explorar Produtos</Text>
    <Text style={styles.text}>Use a busca ou navegue pelas categorias para encontrar produtos.</Text>
  </View>
);

export default ExploreScreen;

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