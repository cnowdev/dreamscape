import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { RootStackParamList } from './types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useState } from 'react';
import * as SecureStore from 'expo-secure-store'
import * as Crypto from 'expo-crypto';
import { Dream } from './types'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';

type navigationProps = NativeStackScreenProps<RootStackParamList, 'DreamEditor'>;

interface Props {
  navigation: navigationProps['navigation'],
  route: RouteProp<{ params: { dream: Dream } }, 'params'>
}

export default function DreamEditor({ navigation, route }: Props) {
  const id: string | null = route.params?.dream.id || null;
  const [title, setTitle] = useState(route.params?.dream.title ?? '');
  const [description, setDescription] = useState(route.params?.dream.description ?? '');

  useEffect(() => {
    setTitle(route.params?.dream.title ?? '')
    setDescription(route.params?.dream.description ?? '')
  }, [route.params]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          let key = Crypto.randomUUID();
          if(id){
            key = id;
          }
            const value: Dream = {
              id: key,
              title: title,
              description: description
            };
            await SecureStore.setItemAsync(key, JSON.stringify(value));
            const dreamIDString = await SecureStore.getItemAsync('dreamIDs');
            const dreamIDs = JSON.parse(dreamIDString ?? '[]');

            if(!dreamIDs?.includes(key)){
              {
                /* @ts-ignore */}
              await SecureStore.setItemAsync('dreamIDs', JSON.stringify([...dreamIDs, key]));
            }

            navigation.navigate('Dreams');
        }}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>


      </View>
    </TouchableWithoutFeedback>
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
    width: '90%'
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
    width: '90%',
    textAlignVertical: 'top'
  },
  AIdescription: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#092333',
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
});
