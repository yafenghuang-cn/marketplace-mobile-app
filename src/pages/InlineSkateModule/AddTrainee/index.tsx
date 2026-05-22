import React, { memo, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import colors from '~/common/colors';
import { Button } from '~/components/Button';

// 1. 统一定义数据类型，复用类型，提升代码可维护性
interface TraineeFormItem {
  id: number;
  title: string;
  value: string;
}

interface RenderItemProps {
  item: TraineeFormItem;
  onChange: (id: number, text: string) => void;
}

// 2. 使用 memo 缓存子组件，避免不必要的重渲染（性能核心优化）
const RenderItem = memo<RenderItemProps>(({ item, onChange }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <TextInput
        autoCapitalize='none'
        placeholder={`请输入${item.title}`}
        placeholderTextColor={colors.textGray}
        style={styles.itemInput}
        value={item.value}
        onChangeText={(text) => onChange(item.id, text)}
      />
    </View>
  );
});

// 4. 静态数据提到组件外部，避免每次渲染重新创建数据
const INITIAL_FORM_DATA: TraineeFormItem[] = [
  { id: 1, title: '姓名', value: '' },
  { id: 2, title: '性别', value: '' },
  { id: 3, title: '手机号', value: '' },
  { id: 4, title: '招聘老师', value: '' },
  { id: 5, title: '负责教练', value: '' },
  { id: 6, title: '负责教练', value: '' },
  { id: 7, title: '课时', value: '' },
  { id: 8, title: '备注', value: '' },
];

const AddTrainee: React.FC = () => {
  const [formData, setFormData] = useState<TraineeFormItem[]>(INITIAL_FORM_DATA);

  const handleInputChange = (id: number, text: string): void => {
    setFormData((prev) => prev.map((item) => (item.id === id ? { ...item, value: text } : item)));
  };

  const handleReset = (): void => {
    setFormData(INITIAL_FORM_DATA);
  };

  const handleSubmit = (): void => {
    console.log('提交数据：', formData);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <FlatList
          removeClippedSubviews
          contentContainerStyle={styles.flatListContent}
          data={formData}
          keyboardShouldPersistTaps='handled'
          keyExtractor={(item) => item.id.toString()}
          maxToRenderPerBatch={5}
          renderItem={({ item }) => <RenderItem item={item} onChange={handleInputChange} />}
          showsVerticalScrollIndicator={false}
          windowSize={5}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Button style={styles.bottomButtonItem} title='保存' onPress={handleSubmit} />
        <Button style={styles.bottomButtonItem} title='重置' onPress={handleReset} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  bottomContainer: {
    width: '100%',
    height: 64,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 12, // 替代 separator 视图，代码更简洁
  },
  bottomButtonItem: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
    gap: 8,
  },
  itemTitle: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '500',
  },
  itemInput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: colors.textGray,
    minHeight: 40, // 固定输入框高度，避免布局抖动
    fontSize: 14,
  },
  flatListContent: {
    paddingTop: 12,
    paddingBottom: 8,
  },
});

export default AddTrainee;
