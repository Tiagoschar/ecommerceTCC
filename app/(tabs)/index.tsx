import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { Banner, Promotions } from '../../components/HomeElements';
import ProductGrid from '../../components/ProductGrid';
import { Colors } from '../../constants/Colors';
import SearchBar from '../../components/SearchBar';
import Breadcrumbs from '../../components/Breadcrumbs';
import db from '../../data/db.json';
import { ProductType } from '../../types/type';

const bannerData = {
  image: require('../../assets/images/sale-banner.jpg'),
  title: 'Super Promoções!'
};

const HomeScreen = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setProducts(db.products);
    setLoading(false);
  }, []);

  const filteredProducts = products.filter(prod =>
    prod.title.toLowerCase().includes(search.toLowerCase()) ||
    prod.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{flex: 1}}>
      <SearchBar value={search} onChangeText={setSearch} placeholder="Buscar produtos..." />
      <Breadcrumbs items={["Home"]} />
      <ScrollView style={styles.bg} contentContainerStyle={styles.container}>
        <Banner image={bannerData.image} title={bannerData.title} />
        <Promotions />
        <Text style={styles.sectionTitle}>Produtos em destaque</Text>
        {loading ? (
          <ActivityIndicator color={Colors.primary} size="large" style={{ marginVertical: 30 }} />
        ) : (
          <ProductGrid products={filteredProducts.slice(0, 8)} />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.background,
  },
  container: {
    padding: 18,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 16,
    marginTop: 16,
    letterSpacing: 0.5,
  },
});