import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';

const AboutScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Sobre Nós</Text>
    <Text style={styles.text}>Somos uma empresa dedicada a oferecer a melhor experiência de compra online, com foco em qualidade, preço justo e atendimento ao cliente.</Text>
    <Text style={styles.section}>Missão</Text>
    <Text style={styles.text}>Facilitar o acesso a produtos de qualidade, promovendo praticidade e segurança para nossos clientes.</Text>
    <Text style={styles.section}>Valores</Text>
    <Text style={styles.text}>Transparência, respeito, inovação e compromisso com a satisfação do cliente.</Text>
  </ScrollView>
);

export default AboutScreen;

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: Colors.background, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.primary, marginBottom: 18 },
  section: { fontWeight: 'bold', color: Colors.black, marginTop: 16, marginBottom: 4, fontSize: 16 },
  text: { fontSize: 15, color: Colors.gray, marginBottom: 8 },
});
