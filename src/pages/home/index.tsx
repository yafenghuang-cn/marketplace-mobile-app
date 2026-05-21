import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import CustomButton from '~/components/CustomButton';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View>
      <CustomButton
        title='去调试页面'
        onPress={() => {
          navigation.navigate('debug' as never);
        }}
      />
      <Text>Home</Text>
      <CustomButton
        title='去登录'
        onPress={() => {
          navigation.navigate('login' as never);
        }}
      />
    </View>
  );
};

export default Home;
