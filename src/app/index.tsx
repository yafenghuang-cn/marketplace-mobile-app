import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import routers from '~/router';

const RootStack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='home' screenOptions={{}}>
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
