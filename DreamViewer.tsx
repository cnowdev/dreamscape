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
import { Configuration, OpenAIApi } from 'openai';
const img = require('./assets/placeholder.png');
type navigationProps = NativeStackScreenProps<RootStackParamList, 'DreamEditor'>;
{/*
  @ts-ignore */}
import {OPENAI_API_KEY} from '@env'
import 'react-native-url-polyfill/auto'

interface Props {
  navigation: navigationProps['navigation'],
  route: RouteProp<{ params: { dream: Dream } }, 'params'>
}

const config = new Configuration({
  apiKey: OPENAI_API_KEY,
});



export default function DreamViewer({ navigation, route }: Props) {
 const {id, title, description} = route.params.dream;
 const [AIDescription, setAIDescription] = useState<String>('');

 useEffect(() => {

  setAIDescription(route.params?.dream.AIDescription ?? '');

  }, [route.params]);

  const generateDreamCont = async() => {
    const openai = new OpenAIApi(config);
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Generate a continuation or conclusion to this dream: \n\n Title of the dream: ${title} \n\n Description of the dream: ${description} \n\n Continuation:`,
      max_tokens: 4000,
    });
    await SecureStore.setItemAsync(id, JSON.stringify({...route.params.dream, AIDescription: completion.data.choices[0].text}));
    console.log(completion.data.choices[0].text);
    setAIDescription(completion.data.choices[0].text ?? '');
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image}/>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {AIDescription && 
          <Text style={styles.AIdescription}>{AIDescription}</Text>
        }

      </View>
      {!AIDescription && 
        <TouchableOpacity style={styles.button} onPress={async () => {
          console.log(OPENAI_API_KEY);
          await generateDreamCont().catch((e) => {
          console.log(e); 
          });
        }}>
          <Text style={styles.buttonText}>Generate AI Text</Text>
        </TouchableOpacity>
      
      }


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
  },
  button: {
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
