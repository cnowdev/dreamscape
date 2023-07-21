import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import { RootStackParamList } from './types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useState } from 'react';
import * as SecureStore from 'expo-secure-store'
import * as Crypto from 'expo-crypto';
import { Dream } from './types'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const img = require('./assets/placeholder.png');
type navigationProps = NativeStackScreenProps<RootStackParamList, 'DreamEditor'>;

interface Props {
  navigation: navigationProps['navigation'],
  route: RouteProp<{ params: { dream: Dream } }, 'params'>
}

export default function DreamViewer({ navigation, route }: Props) {
  const id: string | null = route.params?.dream.id || null;
  const [title, setTitle] = useState(route.params?.dream.title ?? '');
  const [description, setDescription] = useState(route.params?.dream.description ?? '');

  useEffect(() => {
    setTitle(route.params?.dream.title ?? '')
    setDescription(route.params?.dream.description ?? '')
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image}/>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.AIdescription}>AI Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040F16',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginLeft: 20,
    fontFamily: 'Quicksand_700Bold',
    width: 370
  },
  description: {
    fontSize: 18,
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginLeft: 20,
    fontFamily: 'Quicksand_400Regular',
    width: 370,
    textAlignVertical: 'top'
  },
  AIdescription: {
    fontSize: 16,
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    marginLeft: 20,
    fontFamily: 'Quicksand_400Regular',
    width: 370,
    height: 150
  },
  button: {
    marginTop: 40,
    backgroundColor: '#52aae0',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
    width: 350,
  },
  deleteButton: {
    marginTop: 40,
    backgroundColor: '#FF6A74',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
    width: 350,
  },
  buttonText: {

    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Quicksand_700Bold',
  },
  image: {
    width: 400,
    height: 200,
    marginLeft: 5,
    marginBottom: 10,
    marginTop: 10
  },
});
