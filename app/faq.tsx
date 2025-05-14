import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';

const FAQScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Perguntas Frequentes (FAQ)</Text>
    <Text style={styles.q}>Como faço para acompanhar meu pedido?</Text>
    <Text style={styles.a}>Você pode acompanhar o status do seu pedido na área "Meus Pedidos" da sua conta.</Text>
    <Text style={styles.q}>Quais formas de pagamento são aceitas?</Text>
    <Text style={styles.a}>Aceitamos cartões de crédito, débito, Pix e boleto bancário.</Text>
    <Text style={styles.q}>Como solicitar troca ou devolução?</Text>
    <Text style={styles.a}>Acesse "Meus Pedidos", selecione o pedido e clique em "Solicitar troca/devolução".</Text>
    <Text style={styles.q}>Como entro em contato com o suporte?</Text>
    <Text style={styles.a}>Use o menu "Fale Conosco" ou envie e-mail para suporte@ecommerce.com.</Text>
  </ScrollView>
);

export default FAQScreen;

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: Colors.background, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.primary, marginBottom: 18 },
  q: { fontWeight: 'bold', color: Colors.black, marginTop: 16, marginBottom: 4, fontSize: 16 },
  a: { fontSize: 15, color: Colors.gray, marginBottom: 8 },
});
