import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import Breadcrumbs from '../../components/Breadcrumbs';

const CartScreen = () => (
  <View style={styles.container}>
    <Breadcrumbs items={["Home", "Carrinho"]} />
    <Text style={styles.title}>Seu Carrinho está vazio</Text>
    <Text style={styles.text}>Adicione produtos para visualizar aqui.</Text>
  </View>
);

export default CartScreen;

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