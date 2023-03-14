import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { IHomeContentProps } from '../../types';

export const HomeContent = ({ data, onItemPress }: IHomeContentProps) => {
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      {data &&
        data.map(item => (
          <TouchableOpacity
            onPress={() => onItemPress(item.user.name, item.urls.regular)}
          >
            <View style={styles.contentItem} key={item.user.id}>
              <Image style={styles.image} source={{ uri: item.urls.regular }} />
              <Text style={styles.text}>{item.user.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '98%',
  },
  contentItem: {
    width: '97%',
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: 'gray',
    margin: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  image: {
    width: '98%',
    height: 300,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: 'blue',
    marginTop: 15,
    fontWeight: 'bold',
  },
});
