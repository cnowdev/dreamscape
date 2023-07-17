import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { RootStackParamList } from './types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


type navigationProps = NativeStackScreenProps<RootStackParamList, 'DreamEditor'>;

interface Props {
    id?: string,
    navigation: navigationProps['navigation']
}

export default function DreamEditor({navigation, id}: Props ) {
  return (
    <View style={styles.container}>
        <Text style={{color: '#fff'}}>Test</Text>
        <TextInput></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#040F16',

    },
});
