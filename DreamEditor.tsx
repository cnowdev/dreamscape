import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { RootStackParamList } from './types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useState } from 'react';
import * as SecureStore from 'expo-secure-store'
import 'react-native-get-random-values'
{/*
          @ts-ignore */}
import { v4 as uuidv4 } from 'uuid';


type navigationProps = NativeStackScreenProps<RootStackParamList, 'DreamEditor'>;

interface Props {
  navigation: navigationProps['navigation'],
  route: RouteProp<{ params: { id?: string, title?: string, description?: string } }, 'params'>
}

export default function DreamEditor({ navigation, route }: Props) {
  const id = route.params?.id || {}
  const [title, setTitle] = useState(route.params?.title ?? '');
  const [description, setDescription] = useState(route.params?.description ?? '');

  useEffect(() => {
    setTitle(route.params?.title ?? '')
    setDescription(route.params?.description ?? '')
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.titleInput}
          value={title}
          onChangeText={(e: string) => { setTitle(e) }}
          placeholder="Enter a title"
          placeholderTextColor="#D3D3D3"
        />

        <TextInput
          style={styles.descriptionInput}
          value={description}
          onChangeText={(e: string) => { setDescription(e) }}
          placeholder="Enter a description"
          placeholderTextColor="#D3D3D3"
          multiline={true}
          numberOfLines={4} 
        />
        
        <TouchableOpacity style={styles.button} onPress={async () => {
          const key = uuidv4();
          const value = {title: title, description: description};
            await SecureStore.setItemAsync(key, JSON.stringify(value));
            console.log(key)
            console.log(value)
        }}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040F16',
  },
  titleInput: {
    fontSize: 30,
    color: '#fff',
    backgroundColor: '#092333',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginLeft: 20,
    fontFamily: 'Quicksand_700Bold',
    width: 350
  },
  descriptionInput: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#092333',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginLeft: 20,
    height: 200,
    fontFamily: 'Quicksand_400Regular',
    width: 350,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#52aae0',
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
});
