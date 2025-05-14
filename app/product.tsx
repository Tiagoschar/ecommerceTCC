import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { ProductType } from '../types/type';
import productsData from '../data/db.json';

// Exemplo: pega o primeiro produto
const product: ProductType = productsData.products[0];

const ProductScreen = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <ScrollView style={styles.bg} contentContainerStyle={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      {/* Variações exemplo */}
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
      <TouchableOpacity style={styles.addCartBtn}>
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
    marginBottom: 18,
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
