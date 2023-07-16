import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Quicksand_400Regular  } from '@expo-google-fonts/quicksand';
import { Header } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 



export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  })

  if(!fontsLoaded) { return null; }

  return (
    <View style={styles.container}>
      <Header
        backgroundColor='#A491D3'
        centerComponent={{text: 'BLAH', style: {color: '#fff', fontFamily: 'Quicksand_400Regular', fontSize: 30, marginTop: 20}}}
        leftComponent={<Ionicons name="md-reorder-three-outline" size={24} color="white" style={{marginTop: 20, paddingLeft: 20}} />}
        rightComponent={<Feather name="search" size={24} color="white" style={{marginTop: 20, paddingRight: 20}} />}
        elevated={true}
        containerStyle={{height: 100, justifyContent: 'center'}}
      />
      <Text style={{fontFamily: 'Quicksand_400Regular', fontSize: 30, marginTop: 20, color: '#fff'}}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#240115',
    alignItems: 'center',

  },
});
