import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import { ProductType } from '../types/type';
import productsData from '../data/db.json';
import { useRouter, useLocalSearchParams } from 'expo-router';

const CategoryScreen = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useLocalSearchParams();
  const catId = params.cat ? Number(params.cat) : null;

  useEffect(() => {
    let filtered = productsData.products;
    if (catId) {
      filtered = filtered.filter(p => p.category.id === catId);
    }
    setProducts(filtered);
    setLoading(false);
  }, [catId]);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <View style={styles.searchRow}>
        <Text style={styles.searchLabel}>Buscar:</Text>
        <View style={styles.searchBox}>
          <input
            style={{flex: 1, border: 'none', outline: 'none', fontSize: 16}}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar produtos..."
          />
        </View>
      </View>
      {loading ? (
        <ActivityIndicator color={Colors.primary} size="large" style={{ marginVertical: 30 }} />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productItem}
              onPress={() => router.push(`/product?id=${item.id}`)}
              activeOpacity={0.8}
            >
              <Image source={{ uri: item.images[0] }} style={styles.productImage} />
              <View style={{flex: 1}}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>R$ {item.price}</Text>
              </View>
            </TouchableOpacity>
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
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  searchLabel: {
    fontSize: 15,
    color: Colors.gray,
    marginRight: 8,
  },
  searchBox: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderColor: Colors.gray,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  productItem: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 14,
    backgroundColor: Colors.background,
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
