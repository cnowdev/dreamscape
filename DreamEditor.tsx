import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { RootStackParamList } from './types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import Form from './components/Form'; 

type navigationProps = NativeStackScreenProps<RootStackParamList, 'DreamEditor'>;

interface Props {
    navigation: navigationProps['navigation'],
    route: RouteProp<{ params: { id: string } }, 'params'>
}

export default function DreamEditor({navigation, route}: Props ) {
  const { id } = route.params
  return (
    <View style={styles.container}>
        <Text style={{color: '#fff'}}>{id}</Text>
        <TextInput></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040F16',
  },
});
