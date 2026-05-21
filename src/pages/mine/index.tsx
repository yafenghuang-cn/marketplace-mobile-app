import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '~/components/CustomButton';

import type { NavigationProp, ParamListBase } from '@react-navigation/native';

const Mine: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <SafeAreaView>
      {/* <CustomButton title='新增教练员' onPress={() => navigation.navigate('AddCoach')} /> */}
      <CustomButton title='新增学员' onPress={() => navigation.navigate('AddTrainee')} />
      {/* <CustomButton title='教练员列表' onPress={() => navigation.navigate('CoachList')} /> */}
      {/* <CustomButton title='学员列表' onPress={() => navigation.navigate('TraineeList')} /> */}
    </SafeAreaView>
  );
};

export default Mine;
