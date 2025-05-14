import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';
import { CartItemType } from '../types/type';
import cartData from '../data/db.json';

const CartScreen = () => {
  const [cart, setCart] = useState<CartItemType[]>(cartData.cart);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [review, setReview] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const orderId = Math.floor(Math.random() * 1000000);

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  if (confirmed) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pedido Confirmado!</Text>
        <Text style={styles.text}>Obrigado pela sua compra.</Text>
        <Text style={styles.text}>Número do pedido: <Text style={styles.bold}>{orderId}</Text></Text>
      </View>
    );
  }

  if (review) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Revisão do Pedido</Text>
        <Text style={styles.text}>Nome: {name}</Text>
        <Text style={styles.text}>Endereço: {address}</Text>
        <Text style={styles.text}>Pagamento: {payment}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setConfirmed(true)}>
          <Text style={styles.buttonText}>Confirmar Compra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => setReview(false)}>
          <Text style={styles.buttonTextSecondary}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>R$ {item.price}</Text>
            <View style={styles.qtyRow}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.qtyBtn}><Text>-</Text></TouchableOpacity>
              <Text style={styles.qty}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.qtyBtn}><Text>+</Text></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeBtn}>
              <Text style={styles.removeText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Seu carrinho está vazio.</Text>}
      />
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Subtotal: R$ {subtotal.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Frete: {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}</Text>
        <Text style={styles.summaryTotal}>Total: R$ {total.toFixed(2)}</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço de entrega"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Forma de pagamento"
          value={payment}
          onChangeText={setPayment}
        />
        <TouchableOpacity style={styles.checkoutBtn} onPress={() => setReview(true)}>
          <Text style={styles.checkoutText}>Revisar Pedido</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.primary, marginBottom: 12 },
  item: { backgroundColor: Colors.white, borderRadius: 8, padding: 16, marginBottom: 12 },
  itemTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.black },
  itemPrice: { fontSize: 15, color: Colors.primary, marginBottom: 6 },
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
  input: { backgroundColor: Colors.white, borderRadius: 8, padding: 12, marginBottom: 16, width: '100%', borderColor: Colors.gray, borderWidth: 1 },
  button: { backgroundColor: Colors.primary, borderRadius: 8, paddingVertical: 14, paddingHorizontal: 40, marginTop: 12 },
  buttonText: { color: Colors.white, fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
  buttonSecondary: { borderColor: Colors.primary, borderWidth: 2, borderRadius: 8, paddingVertical: 14, paddingHorizontal: 40, marginTop: 12 },
  buttonTextSecondary: { color: Colors.primary, fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
  text: { fontSize: 16, color: Colors.black, marginBottom: 8 },
  bold: { fontWeight: 'bold', color: Colors.primary },
});
