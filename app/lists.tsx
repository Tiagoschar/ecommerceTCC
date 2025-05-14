import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';

const wishList = [
  { id: 1, title: 'Camiseta Branca', promo: true },
  { id: 2, title: 'Tênis Esportivo', promo: false },
  { id: 3, title: 'Fone de Ouvido', promo: true },
];

const ListsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Lista de Desejos</Text>
    <FlatList
      data={wishList}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          {item.promo && <Text style={styles.promo}>Em promoção!</Text>}
          <TouchableOpacity style={styles.notifyBtn}>
            <Text style={styles.notifyText}>Avisar quando em promoção</Text>
          </TouchableOpacity>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.empty}>Sua lista está vazia.</Text>}
    />
  </View>
);

export default ListsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.primary, marginBottom: 12 },
  item: { backgroundColor: Colors.white, borderRadius: 8, padding: 16, marginBottom: 12 },
  itemTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.black },
  promo: { color: Colors.highlight, fontWeight: 'bold', marginTop: 4 },
  notifyBtn: { marginTop: 8, borderColor: Colors.primary, borderWidth: 1, borderRadius: 6, padding: 6 },
  notifyText: { color: Colors.primary, fontSize: 14 },
  empty: { color: Colors.gray, textAlign: 'center', marginTop: 40 },
});
