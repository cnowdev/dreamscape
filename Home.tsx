import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold  } from '@expo-google-fonts/quicksand';
import { Header } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 



export default function Home() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold
  })

  if(!fontsLoaded) { return null; }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Quicksand_400Regular', fontSize: 30, marginTop: 20, color: '#fff'}}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="light" translucent hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040F16',
    alignItems: 'center',

  },
});
