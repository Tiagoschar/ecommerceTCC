import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';

const Footer = () => {
  const router = useRouter();
  return (
    <View style={styles.footer}>
      <View style={styles.linksRow}>
        <Text style={styles.link} onPress={() => router.push('/about')}>Sobre Nós</Text>
        <Text style={styles.link} onPress={() => router.push('/policy')}>Política de Privacidade</Text>
        <Text style={styles.link} onPress={() => router.push('/contact')}>Fale Conosco</Text>
        <Text style={styles.link} onPress={() => router.push('/faq')}>FAQ</Text>
      </View>
      <Text style={styles.copyright}>© {new Date().getFullYear()} E-commerce</Text>
    </View>
  );
};

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
