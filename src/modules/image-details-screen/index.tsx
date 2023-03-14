import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { imageProps } from '../types';

export function ImageScreen({ route }: imageProps) {
  const { imageUrl } = route.params;

  return <Image style={styles.image} source={{ uri: imageUrl }} />;
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
