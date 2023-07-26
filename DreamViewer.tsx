import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import { RootStackParamList } from './types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useState } from 'react';
import * as SecureStore from 'expo-secure-store'
import * as Crypto from 'expo-crypto';
import { Dream } from './types'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Configuration, OpenAIApi } from 'openai';
const img = require('./assets/placeholder.png');
type navigationProps = NativeStackScreenProps<RootStackParamList, 'DreamEditor'>;
{/*
  @ts-ignore */}
import {OPENAI_API_KEY} from '@env'
import 'react-native-url-polyfill/auto'
import { Divider } from 'react-native-paper';

interface Props {
  navigation: navigationProps['navigation'],
  route: RouteProp<{ params: { dream: Dream } }, 'params'>
}

const config = new Configuration({
  apiKey: OPENAI_API_KEY,
});



export default function DreamViewer({ navigation, route }: Props) {

 const {id, title, description, useAIDescription, image} = route.params.dream;
 const [AIDescription, setAIDescription] = useState<String>('');
 const [loading, setLoading] = useState<Boolean>(false);

 useEffect(() => {

  setAIDescription(route.params?.dream.AIDescription ?? '');
  console.log(useAIDescription);
  }, [route.params]);



  if(loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{fontSize: 30, fontFamily: 'Quicksand_700Bold', color: '#fff'}}>Generating your dream...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        { image && 
      <Image source={{uri: image}} style={styles.image}/>
        }

      <View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{
          useAIDescription? AIDescription : description
        }</Text>

        

      </View>
      

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040F16',
  },
  loadingContainer: {
    backgroundColor: '#040F16',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 0,
    marginLeft: 20,
    fontFamily: 'Quicksand_700Bold',
    width: 370
  },
  description: {
    fontSize: 18,
    color: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 0,
    marginLeft: 20,
    fontFamily: 'Quicksand_400Regular',
    width: 370,
    textAlignVertical: 'top'
  },
  AIdescription: {
    fontSize: 18,
    color: '#fff',
    borderRadius: 5,
    marginTop: 0,
    paddingHorizontal: 10,
    marginLeft: 20,
    fontFamily: 'Quicksand_400Regular',
    width: 370,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#52aae0',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
    width: 350,
    marginTop: 10,
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
