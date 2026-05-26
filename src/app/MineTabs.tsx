import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useMemo } from 'react';
import { Animated, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import mineIconActive from '~/assets/tabs/mine-active.png';
import mineIcon from '~/assets/tabs/mine.png';

import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
// import type { GestureResponderEvent } from 'react-native';

type TabName = keyof typeof iconMap;

const Tab = createBottomTabNavigator();

const iconMap = {
  login: {
    normal: mineIcon,
    active: mineIconActive,
  },
  about: {
    normal: mineIcon,
    active: mineIconActive,
  },
  debug: {
    normal: mineIcon,
    active: mineIconActive,
  },
  mine: {
    normal: mineIcon,
    active: mineIconActive,
  },
};

const AnimatedTabButton: React.FC<BottomTabBarButtonProps> = (props) => {
  const { children, onPress, onLongPress } = props;

  const scale = useMemo(() => new Animated.Value(1), []);
  const opacity = useMemo(() => new Animated.Value(1), []);

  const handlePressIn = (): void => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = (): void => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableWithoutFeedback
      onLongPress={(event) => onLongPress?.(event)}
      onPress={(event) => onPress?.(event)}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[styles.animatedTabButton, { transform: [{ scale }], opacity }]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

interface IHomeProps {
  tabList: Array<{
    name: string;
    component: React.ComponentType;
    options: {
      title: string;
    };
  }>;
  initialRouteName: string;
  headerShown?: boolean;
}

const Home: React.FC<IHomeProps> = (props) => {
  const { tabList, initialRouteName = 'home', headerShown = false } = props;

  const tabBarIcon = (name: TabName, focused: boolean): React.ReactElement => {
    return (
      <Image source={iconMap[name][focused ? 'active' : 'normal']} style={styles.tabBarIcon} />
    );
  };

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={({ route }) => ({
        headerShown,
        tabBarActiveTintColor: '#4A65FF',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
          shadowOpacity: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
        tabBarIcon: ({ focused }) => tabBarIcon(route.name as TabName, focused),
        tabBarButton: (tabBarProps) => <AnimatedTabButton {...tabBarProps} />,
      })}
    >
      {tabList.map((item) => (
        <Tab.Screen
          key={item.name}
          component={item.component}
          name={item.name}
          options={item.options}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  animatedTabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
