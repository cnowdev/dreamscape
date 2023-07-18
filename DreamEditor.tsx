import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { RootStackParamList } from './types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Form from './components/Form'; 

type navigationProps = NativeStackScreenProps<RootStackParamList, 'DreamEditor'>;

interface Props {
  id?: string;
  navigation: navigationProps['navigation'];
}

export default function DreamEditor({ navigation, id }: Props) {
  return (
    <View style={styles.container}>
      <Form title = "Title" description="Description"></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040F16',
  },
});
