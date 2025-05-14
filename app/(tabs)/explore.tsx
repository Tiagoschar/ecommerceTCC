import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import Breadcrumbs from '../../components/Breadcrumbs';
import CategoryGrid from '../../components/CategoryGrid';
import productsData from '../../data/db.json';
import SearchBar from '../../components/SearchBar';
import ProductGrid from '../../components/ProductGrid';

const ExploreScreen = () => {
  const [search, setSearch] = useState('');
  const categories = productsData.categories;
  const products = productsData.products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Breadcrumbs items={["Home", "Explorar"]} />
      <Text style={styles.title}>Explorar Produtos</Text>
      <SearchBar value={search} onChangeText={setSearch} placeholder="Buscar produtos..." />
      <Text style={styles.section}>Categorias</Text>
      <CategoryGrid categories={categories} />
    </View>
  );
};

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
  section: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 18,
    marginBottom: 8,
  },
  empty: {
    fontSize: 15,
    color: Colors.gray,
    marginVertical: 12,
  },
  productItem: {
    fontSize: 15,
    color: Colors.black,
    marginBottom: 6,
  },
});