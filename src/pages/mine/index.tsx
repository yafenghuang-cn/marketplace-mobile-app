import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '~/components/Button';

import type { NavigationProp, ParamListBase } from '@react-navigation/native';

const Mine: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <SafeAreaView>
      <Button title='去登录' onPress={() => navigation.navigate('login')} />
    </SafeAreaView>
  );
};

export default Mine;
