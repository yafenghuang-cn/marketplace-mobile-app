import { isNil } from 'lodash';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '~/common/colors';

import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  activeOpacity?: number;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactElement;
}

const Button: React.FC<ButtonProps> = (props): React.JSX.Element => {
  const {
    title,
    disabled = false,
    activeOpacity = 0.7,
    style,
    children,
    onPress = () => {},
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      style={[styles.buttonContainer, disabled && styles.disabledButton, style]}
      onPress={onPress}
    >
      {!isNil(title) ? (
        <Text style={[styles.buttonText, disabled && styles.disabledText]}>{title}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.brandPrimary, // 背景色
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
  },
  // 禁用状态容器样式
  disabledButton: {
    backgroundColor: colors.borderLight, // 禁用时背景色
    elevation: 0, // 禁用时去掉阴影
  },
  // 按钮文字样式
  buttonText: {
    color: colors.white, // 文字颜色
    fontSize: 16, // 字体大小
    fontWeight: '600', // 字体粗细
  },
  // 禁用状态文字样式
  disabledText: {
    color: colors.textSecondary, // 禁用时文字色
  },
});

export default Button;
