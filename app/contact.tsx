import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mensagem enviada!</Text>
        <Text style={styles.text}>Entraremos em contato em breve.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fale Conosco</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Mensagem"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={() => setSent(true)}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Ou entre em contato pelo telefone: (11) 99999-9999</Text>
      <Text style={styles.text}>E-mail: suporte@ecommerce.com</Text>
    </ScrollView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: Colors.background, padding: 24, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.primary, marginBottom: 18 },
  input: { backgroundColor: Colors.white, borderRadius: 8, padding: 12, marginBottom: 16, width: '100%', borderColor: Colors.gray, borderWidth: 1 },
  button: { backgroundColor: Colors.primary, borderRadius: 8, paddingVertical: 14, paddingHorizontal: 40, marginTop: 12 },
  buttonText: { color: Colors.white, fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
  text: { fontSize: 15, color: Colors.gray, marginBottom: 8, textAlign: 'center' },
});
