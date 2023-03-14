import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { useGetPhotosQuery } from '../../store/unsplash/unsplash.api';
import { HomeContent } from './home-content';
import { homeProps } from '../types';

export default function HomeScreen({ navigation }: homeProps) {
  const api_key: string =
    '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';

  const { isLoading, isError, data } = useGetPhotosQuery(api_key);

  const onItemPress = (name: string, imageUrl: string) => {
    navigation.navigate('Image', {
      imageUrl,
      name,
    });
  };

  return (
    <View style={styles.container}>
      {isLoading && <Text style={styles.loading}>Loading...</Text>}
      {isError && <Text style={styles.error}>Error...</Text>}
      {data && <HomeContent data={data} onItemPress={onItemPress} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
  error: {
    fontSize: 30,
    color: 'red',
  },
  loading: {
    fontSize: 30,
    color: '#091c96',
  },
});
