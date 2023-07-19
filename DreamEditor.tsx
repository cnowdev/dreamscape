import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { RootStackParamList } from './types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useState } from 'react';
type navigationProps = NativeStackScreenProps<RootStackParamList, 'DreamEditor'>;
import Form from './components/Form'; 

const img = require('./assets/lmao.jpg')


interface Props {
    navigation: navigationProps['navigation'],
    route: RouteProp<{ params: { id?: string, title?: string, description?: string } }, 'params'>
}

export default function DreamEditor({navigation, route}: Props ) {
  const id = route.params?.id || {}
  const [title, setTitle] = useState(route.params?.title ?? '');
  const [description, setDescription] = useState(route.params?.description ?? '');


  useEffect(() => {
    setTitle(route.params?.title ?? '')
    setDescription(route.params?.description ?? '')
  }, [route.params])

  return (
    <View style={styles.container}>
    <Image source={img} style={styles.image}/>

    <View style={styles.textcontainer}>
      <View>
        <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={(e: string) => {setTitle(e)}}
        placeholder="Enter a title"
        placeholderTextColor="#D3D3D3"
        />

        <TextInput
        style={styles.descriptionInput}
        value={description}
        onChangeText={(e: string) => {setDescription(e)}}
        placeholder="Enter a description"
        placeholderTextColor="#D3D3D3"
        multiline={true} // Allow multiple lines for the description
        numberOfLines={4} // Control the height by adjusting the number of lines displayed
        />
        <Text style={styles.AIdescription}>
          AI Continuation: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 200,
    marginHorizontal: 10
  },
  textcontainer: {
    marginTop: 20,
  },
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
    height: 150,
    fontFamily: 'Quicksand_400Regular',
    width: 350,
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
    width: 350,
  }
});
