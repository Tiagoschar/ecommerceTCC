// Componentes banner, categoria e promoções pra Home
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';
import { CategoryType, ProductType } from '../types/type';

// Component dos banners
export const Banner = ({ image, title }: { image: string; title: string }) => (
  <View style={styles.bannerContainer}>
    <Image source={{ uri: '../assets/images/sale-banner.svg' }} style={styles.bannerImage} resizeMode="cover" />
    <Text style={styles.bannerText}>{title}</Text>
  </View>
);

// Componente das categorias
export const CategoryGrid = ({ categories }: { categories: CategoryType[] }) => (
  <View style={styles.gridContainer}>
    {categories.map((cat) => (
      <View key={cat.id} style={styles.gridItem}>
        <Image source={{ uri: cat.image }} style={styles.gridImage} />
        <Text style={styles.gridText}>{cat.name}</Text>
      </View>
    ))}
  </View>
);

// Componente das promoções
export const Promotions = () => (
  <View style={styles.promoContainer}>
    <Text style={styles.promoTitle}>Vantagens</Text>
    <View style={styles.promoItem}>
      <Text style={styles.promoText}>🚚 Frete grátis para todo Brasil</Text>
    </View>
    <View style={styles.promoItem}>
      <Text style={styles.promoText}>💳 Parcele em até 12x sem juros</Text>
    </View>
    <View style={styles.promoItem}>
      <Text style={styles.promoText}>🎁 Promoções exclusivas</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    height: 160,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerText: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    width: '23%',
    alignItems: 'center',
    marginBottom: 12,
  },
  gridImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 6,
    backgroundColor: Colors.background,
  },
  gridText: {
    fontSize: 13,
    color: Colors.gray,
    textAlign: 'center',
  },
  promoContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 16,
    marginBottom: 18,
  },
  promoTitle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  promoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  promoText: {
    color: Colors.white,
    fontSize: 15,
    marginLeft: 4,
  },
});
