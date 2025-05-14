import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const Breadcrumbs = ({ items }: { items: string[] }) => (
  <View style={styles.breadcrumbs}>
    {items.map((item, idx) => (
      <Text key={item} style={styles.crumb}>
        {item}
        {idx < items.length - 1 && <Text style={styles.sep}> {'>'} </Text>}
      </Text>
    ))}
  </View>
);

export default Breadcrumbs;

const styles = StyleSheet.create({
  breadcrumbs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
    paddingHorizontal: 12,
  },
  crumb: {
    color: Colors.gray,
    fontSize: 14,
  },
  sep: {
    color: Colors.lightGray,
  },
});
