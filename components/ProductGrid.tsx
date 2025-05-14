import React from 'react';
import { FlatList, TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { ProductType } from '../types/type';
import { useRouter } from 'expo-router';

interface ProductGridProps {
  products: ProductType[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const router = useRouter();
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push(`/product?id=${item.id}`)}
          activeOpacity={0.85}
        >
          <Image source={{ uri: item.images[0] }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>R$ {item.price}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#1e88e5',
    fontWeight: 'bold',
  },
});

export default ProductGrid;
