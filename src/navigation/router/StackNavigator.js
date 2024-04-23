import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTER_NAME } from '../NavigationConst';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: null,
        headerShown: false,
        cardOverlayEnabled: true,
        cardShadowEnabled: false,
        animationEnabled: true,
        gestureDirection: 'horizontal',
        presentation: "card"
      }}
      initialRouteName={ROUTER_NAME.HOME.name}>
      {Object.values(ROUTER_NAME).map(screen => {
        return <Stack.Screen key={screen.name} {...screen} />;
      })}
    </Stack.Navigator>
  );
};

export { AppStack };
