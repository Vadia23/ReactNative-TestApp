import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import HomeScreen from '../home/index';
import { ImageScreen } from '../image-details-screen/index';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: '#091c96' },
  headerTintColor: 'white',
};

export const RootNavigator = () => {
  const screens = useMemo(
    () => (
      <>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ ...screenOptions, title: 'Gallery' }}
        />
        <Stack.Screen
          name="Image"
          component={ImageScreen}
          options={({ route }) => ({
            ...screenOptions,
            title: route.params.name,
          })}
        />
      </>
    ),
    [],
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">{screens}</Stack.Navigator>
    </NavigationContainer>
  );
};
