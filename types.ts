import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
    Dreams: undefined,
    About: undefined,
    DreamEditor: {id: string, title: string, description: string} | undefined
}

