import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.linksRow}>
      <Text style={styles.link}>Sobre Nós</Text>
      <Text style={styles.link}>Política de Privacidade</Text>
      <Text style={styles.link}>Fale Conosco</Text>
      <Text style={styles.link}>FAQ</Text>
    </View>
    <Text style={styles.copyright}>© {new Date().getFullYear()} E-commerce</Text>
  </View>
);

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderColor: Colors.background,
    paddingVertical: 12,
    alignItems: 'center',
  },
  linksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 4,
  },
  link: {
    color: Colors.primary,
    fontSize: 15,
    marginHorizontal: 8,
    marginBottom: 2,
  },
  copyright: {
    color: Colors.gray,
    fontSize: 13,
    marginTop: 2,
  },
});
