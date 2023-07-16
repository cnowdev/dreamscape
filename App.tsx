import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Quicksand_400Regular  } from '@expo-google-fonts/quicksand';


export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  })

  if(!fontsLoaded) { return null; }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Quicksand_400Regular', fontSize: 30}}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
