import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';

const PolicyScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Política de Privacidade</Text>
    <Text style={styles.text}>Sua privacidade é importante para nós. Todas as informações fornecidas são protegidas e não serão compartilhadas sem sua autorização.</Text>
    <Text style={styles.section}>Política de Trocas e Devoluções</Text>
    <Text style={styles.text}>Você pode solicitar a troca ou devolução de produtos em até 7 dias após o recebimento. Consulte as condições completas em nosso site.</Text>
    <Text style={styles.section}>Termos e Condições de Uso</Text>
    <Text style={styles.text}>Ao utilizar nosso app, você concorda com nossos termos e condições. Leia atentamente para conhecer seus direitos e deveres.</Text>
  </ScrollView>
);

export default PolicyScreen;

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: Colors.background, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.primary, marginBottom: 18 },
  section: { fontWeight: 'bold', color: Colors.black, marginTop: 16, marginBottom: 4, fontSize: 16 },
  text: { fontSize: 15, color: Colors.gray, marginBottom: 8 },
});
