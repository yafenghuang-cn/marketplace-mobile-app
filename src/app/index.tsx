import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import TabNavigator from './MainTabs';

import routers from '~/router';

const RootStack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='home' screenOptions={{}}>
        <RootStack.Screen component={TabNavigator} name='home' options={{ headerShown: false }} />
        {routers.map((item) => (
          <RootStack.Screen
            key={item.name}
            component={item.component}
            name={item.name}
            options={item.options}
          />
        ))}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
