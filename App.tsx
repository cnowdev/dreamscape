import SideDrawer from "./components/SideDrawer";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold  } from '@expo-google-fonts/quicksand';
import { Header } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import Dream from './components/dream'
import { createStackNavigator } from '@react-navigation/stack';
import DreamEditor from "./DreamEditor";

const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold
  })

  if(!fontsLoaded) { return null; }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Something" component={Something} options={{headerShown: false}}/>
          {/*
          @ts-ignore */}
        <Stack.Screen name="DreamEditor" component={DreamEditor} options={{
          headerStyle: {
            backgroundColor: '#040F16', 
            shadowColor: 'transparent',
          },
          headerTintColor: '#fff',
          headerTitle: '',
          headerBackTitleVisible: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Something() {
  return (

      <SideDrawer />

  )
}