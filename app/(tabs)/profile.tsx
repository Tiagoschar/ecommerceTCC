import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Colors } from '../../constants/Colors';
import Breadcrumbs from '../../components/Breadcrumbs';

const ProfileScreen = () => {
  const [name, setName] = useState('João da Silva');
  const [email, setEmail] = useState('joao@email.com');
  const [address, setAddress] = useState('Rua Exemplo, 123');
  const [editing, setEditing] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Breadcrumbs items={["Home", "Minha Conta"]} />
      <Text style={styles.title}>Minha Conta</Text>
      <Text style={styles.text}>Acesse e edite seus dados, veja pedidos e endereços salvos.</Text>
      <Text style={styles.section}>Dados Pessoais</Text>
      {editing ? (
        <>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
          <TextInput style={styles.input} value={address} onChangeText={setAddress} />
          <TouchableOpacity style={styles.button} onPress={() => setEditing(false)}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.text}>Nome: {name}</Text>
          <Text style={styles.text}>E-mail: {email}</Text>
          <Text style={styles.text}>Endereço: {address}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setEditing(true)}>
            <Text style={styles.buttonText}>Editar Dados</Text>
          </TouchableOpacity>
        </>
      )}
      <Text style={styles.section}>Histórico de Compras</Text>
      <Text style={styles.text}>Nenhuma compra encontrada.</Text>
      <Text style={styles.section}>Trocas e Devoluções</Text>
      <Text style={styles.text}>Nenhuma solicitação no momento.</Text>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: Colors.background, padding: 24, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.primary, marginBottom: 18 },
  section: { fontWeight: 'bold', color: Colors.black, marginTop: 16, marginBottom: 4, fontSize: 16 },
  text: { fontSize: 15, color: Colors.gray, marginBottom: 8 },
  input: { backgroundColor: Colors.white, borderRadius: 8, padding: 12, marginBottom: 12, width: 260, borderColor: Colors.gray, borderWidth: 1 },
  button: { backgroundColor: Colors.primary, borderRadius: 8, paddingVertical: 12, paddingHorizontal: 40, marginTop: 8 },
  buttonText: { color: Colors.white, fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
});