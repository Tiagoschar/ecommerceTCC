import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/sale-banner.jpg")} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao E-commerce!</Text>
      <Text style={styles.subtitle}>Compre fácil, rápido e seguro.</Text>
      <Link href={"/signin"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/signup"} asChild>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonTextSecondary}>Criar Conta</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 32,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonSecondary: {
    borderColor: Colors.primary,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonTextSecondary: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
