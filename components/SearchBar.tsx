import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const SearchBar = ({ value, onChangeText, placeholder = 'Buscar...' }: SearchBarProps) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray}
    />
  </View>
);

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 12,
    paddingTop: 8,
    backgroundColor: Colors.background,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: 1,
    fontSize: 16,
  },
});
