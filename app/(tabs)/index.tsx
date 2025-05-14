import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { Banner, Promotions } from '../../components/HomeElements';
import CategoryGrid from '../../components/CategoryGrid';
import { CategoryType } from '../../types/type';
import { Colors } from '../../constants/Colors';
import SearchBar from '../../components/SearchBar';
import Breadcrumbs from '../../components/Breadcrumbs';
import db from '../../data/db.json';

const bannerData = {
  image: require('../../assets/images/sale-banner.jpg'),
  title: 'Super Promoções!'
};

const HomeScreen = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setCategories(db.categories);
    setLoading(false);
  }, []);

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{flex: 1}}>
      <SearchBar value={search} onChangeText={setSearch} placeholder="Buscar categorias..." />
      <Breadcrumbs items={["Home"]} />
      <ScrollView style={styles.bg} contentContainerStyle={styles.container}>
        <Banner image={bannerData.image} title={bannerData.title} />
        <Promotions />
        <Text style={styles.sectionTitle}>Categorias</Text>
        {loading ? (
          <ActivityIndicator color={Colors.primary} size="large" style={{ marginVertical: 30 }} />
        ) : (
          <CategoryGrid categories={filteredCategories} />
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