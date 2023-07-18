import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold  } from '@expo-google-fonts/quicksand';
import { Header } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import Dream from './components/dream';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type ProfileProps = NativeStackScreenProps<RootStackParamList, "Dreams">;


export default function Dreams({ navigation, route }: ProfileProps) {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold
  })

  if(!fontsLoaded) { return null; }

  return (
    <View style={styles.container}>
      <Dream title="My dream" description="I had a dream about something." onPress={() => navigation.navigate('DreamEditor', {
        id: '1',
        title: 'My dream',
        description: 'I had a dream about something.'
      })} />
      <Dream title="Description Title" description="This is a sample description." />
      <Dream title="Description Title" description="This is a sample description." />
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
});
