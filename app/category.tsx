import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TextInput } from 'react-native';
import { Colors } from '../constants/Colors';
import { ProductType, CategoryType } from '../types/type';
import productsData from '../data/db.json';

const CategoryScreen = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(productsData.products);
    setLoading(false);
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <TextInput
        style={styles.search}
        placeholder="Buscar produtos..."
        value={search}
        onChangeText={setSearch}
      />
      {loading ? (
        <ActivityIndicator color={Colors.primary} size="large" style={{ marginVertical: 30 }} />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>R$ {item.price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 12,
  },
  search: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  productItem: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: Colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  productPrice: {
    fontSize: 15,
    color: Colors.primary,
    marginTop: 4,
  },
});
