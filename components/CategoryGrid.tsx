import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { CategoryType } from '../types/type';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';

interface CategoryGridProps {
  categories: CategoryType[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  const router = useRouter();

  return (
    <FlatList
      data={categories}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => router.push(`/category?cat=${item.id}`)}
          activeOpacity={0.8}
        >
          <Image source={{ uri: item.image }} style={styles.gridImage} />
          <Text style={styles.gridText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.gridContainer}
    />
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  gridContainer: {
    paddingBottom: 20,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  gridItem: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 18,
    elevation: 2,
    shadowColor: Colors.black,
    shadowOpacity: 0.07,
    shadowRadius: 6,
  },
  gridImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    backgroundColor: Colors.background,
  },
  gridText: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
