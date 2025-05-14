import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Colors } from '../constants/Colors';
import { ProductType } from '../types/type';
import productsData from '../data/db.json';
import { useLocalSearchParams } from 'expo-router';
import { useCart } from '../components/CartContext';
import { useRouter } from 'expo-router';

const ProductScreen = () => {
  const params = useLocalSearchParams();
  const productId = params.id ? Number(params.id) : null;
  const product: ProductType | undefined = productsData.products.find(p => p.id === productId);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const { addToCart } = useCart();
  const router = useRouter();

  if (!product) {
    return (
      <View style={styles.container}><Text>Produto não encontrado.</Text></View>
    );
  }

  const handleAddToCart = async () => {
    if (!selectedSize || !selectedColor) {
      Alert.alert('Selecione tamanho e cor', 'Por favor, escolha o tamanho e a cor antes de adicionar ao carrinho.');
      return;
    }
    try {
      await addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        quantity: 1
      });
      router.push('/(tabs)/cart');
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível adicionar ao carrinho.');
    }
  };

  return (
    <ScrollView style={styles.bg} contentContainerStyle={styles.container}>
      <FlatList
        data={product.images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        style={{ marginBottom: 18 }}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      <Text style={styles.section}>Tamanho</Text>
      <View style={styles.variationRow}>
        {['P', 'M', 'G', 'GG'].map(size => (
          <TouchableOpacity
            key={size}
            style={[styles.variationBtn, selectedSize === size && styles.variationBtnActive]}
            onPress={() => setSelectedSize(size)}
          >
            <Text style={selectedSize === size ? styles.variationTextActive : styles.variationText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.section}>Cor</Text>
      <View style={styles.variationRow}>
        {['Preto', 'Branco', 'Azul'].map(color => (
          <TouchableOpacity
            key={color}
            style={[styles.variationBtn, selectedColor === color && styles.variationBtnActive]}
            onPress={() => setSelectedColor(color)}
          >
            <Text style={selectedColor === color ? styles.variationTextActive : styles.variationText}>{color}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.addCartBtn} onPress={handleAddToCart}>
        <Text style={styles.addCartText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
      {/* Avaliações e produtos relacionados podem ser adicionados aqui */}
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.background,
  },
  container: {
    padding: 18,
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 6,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: Colors.highlight,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  desc: {
    fontSize: 15,
    color: Colors.gray,
    marginBottom: 18,
    textAlign: 'center',
  },
  section: {
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 10,
    marginBottom: 4,
    fontSize: 15,
  },
  variationRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  variationBtn: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  variationBtnActive: {
    backgroundColor: Colors.primary,
  },
  variationText: {
    color: Colors.primary,
  },
  variationTextActive: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  addCartBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginTop: 18,
  },
  addCartText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
