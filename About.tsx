import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold  } from '@expo-google-fonts/quicksand';
import { Header } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 



export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold
  })

  if(!fontsLoaded) { return null; }

  return (
    <View style={styles.container}>
      <Header
        backgroundColor='#040F16'
        centerComponent={{text: 'Dreamscape', style: {color: '#fff', fontFamily: 'Quicksand_700Bold', fontSize: 30, marginTop: 25, fontWeight: 'bold'}}}
        leftComponent={<Ionicons name="md-reorder-three-outline" size={24} color="white" style={{marginTop: 30, paddingLeft: 20}} />}
        rightComponent={<Feather name="search" size={24} color="white" style={{marginTop: 30, paddingRight: 20}} />}
        containerStyle={{height: 100, justifyContent: 'center', borderBottomWidth: 0}}
        
      />
      <Text style={{fontFamily: 'Quicksand_400Regular', fontSize: 30, marginTop: 20, color: '#fff'}}>About</Text>
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
