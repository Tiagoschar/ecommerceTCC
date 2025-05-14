import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useFocusEffect } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { useCart } from '../../components/CartContext';

const CartScreen = () => {
  const { cart, loading, updateQuantity, removeItem, reloadCart } = useCart();

  // Garante atualização do carrinho ao focar na tela
  useFocusEffect(
    React.useCallback(() => {
      reloadCart();
    }, [])
  );

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      {loading ? (
        <ActivityIndicator color={Colors.primary} size="large" style={{ marginVertical: 30 }} />
      ) : (
        <FlatList
          data={cart}
          keyExtractor={item => `${item.id}-${item.size}-${item.color}`}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>R$ {item.price}</Text>
                <Text style={styles.itemDetails}>Tamanho: {item.size} | Cor: {item.color}</Text>
                <View style={styles.qtyRow}>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, item.size, item.color, -1)} style={styles.qtyBtn}><Text>-</Text></TouchableOpacity>
                  <Text style={styles.qty}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, item.size, item.color, 1)} style={styles.qtyBtn}><Text>+</Text></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => removeItem(item.id, item.size, item.color)} style={styles.removeBtn}>
                  <Text style={styles.removeText}>Remover</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.empty}>Seu carrinho está vazio.</Text>}
        />
      )}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Subtotal: R$ {subtotal.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Frete: {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}</Text>
        <Text style={styles.summaryTotal}>Total: R$ {total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.primary, marginBottom: 12 },
  item: { backgroundColor: Colors.white, borderRadius: 8, padding: 16, marginBottom: 12, flexDirection: 'row', alignItems: 'center' },
  itemImage: { width: 60, height: 60, borderRadius: 8, marginRight: 14, backgroundColor: Colors.background },
  itemTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.black },
  itemPrice: { fontSize: 15, color: Colors.primary, marginBottom: 2 },
  itemDetails: { fontSize: 13, color: Colors.gray, marginBottom: 6 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  qtyBtn: { borderWidth: 1, borderColor: Colors.primary, borderRadius: 4, padding: 4, marginHorizontal: 8 },
  qty: { fontSize: 15, minWidth: 24, textAlign: 'center' },
  removeBtn: { alignSelf: 'flex-end', marginTop: 4 },
  removeText: { color: Colors.gray, fontSize: 13 },
  empty: { color: Colors.gray, textAlign: 'center', marginTop: 40 },
  summary: { backgroundColor: Colors.white, borderRadius: 8, padding: 16, marginTop: 8 },
  summaryText: { fontSize: 15, color: Colors.black },
  summaryTotal: { fontSize: 17, color: Colors.primary, fontWeight: 'bold', marginTop: 8 },
  checkoutBtn: { backgroundColor: Colors.primary, borderRadius: 8, paddingVertical: 14, marginTop: 16 },
  checkoutText: { color: Colors.white, fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
});