import { StatusBar } from 'expo-status-bar';
import { useState } from 'react' 
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold  } from '@expo-google-fonts/quicksand';
import { Header } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import DreamCard from './components/DreamCard';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { useEffect } from 'react';
import { getItemAsync } from 'expo-secure-store';
import { useIsFocused } from '@react-navigation/native'
import { Dream } from './types';

type ProfileProps = NativeStackScreenProps<RootStackParamList, "Dreams">;


export default function Dreams({ navigation, route }: ProfileProps) {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold
  })

  const [dreams, setDreams] = useState<Dream[]>([]);
  const isFocused = useIsFocused();


  const getDreams = async() => {


    const dreamIDString: string | null = await getItemAsync('dreamIDs');
    const dreamIDs: string[] = JSON.parse(dreamIDString ?? '[]');

    let promises: Promise<string | null>[] = [];
      
    dreamIDs?.forEach((id:string) => {
      promises.push(getItemAsync(id));
    });

    Promise.all(promises).then((result) => {
      const res = result.map((res) => JSON.parse(res ?? '{}'));
      setDreams(res);
      console.log(res);
    })


  }

  useEffect( () => {

    getDreams();
  }, [isFocused]);

  if(!fontsLoaded) { return null; }


  return (
    <View style={styles.container}>

      {dreams?.map((dream: any) => <DreamCard key={dream.id} title={dream.title} description={dream.description} />)} 
      <DreamCard title="My dream" description="I had a dream about something." onPress={() => navigation.navigate('DreamEditor', {
        id: '1',
        title: 'My dream',
        description: 'I had a dream about something.'
      })} />
      <StatusBar style="light" translucent />
      <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={() => navigation.navigate('DreamEditor')}>
        <MaterialCommunityIcons name="pencil" size={32} color="white" />
      </Pressable>
    </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040F16',
    alignItems: 'center',

  },
  circleButtonContainer: {
    position: 'absolute',
    bottom: 32,
    width: 84,
    height: 84,
    marginHorizontal: 2,
    borderWidth: 0,
    borderColor: '#0094C6',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#005E7C',
  },
})
