import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
    Dreams: undefined,
    About: undefined,
    DreamEditor: {dream: Dream} | undefined,
    DreamViewer: {dream: Dream} | undefined,
}

export type Dream = {
    id: string,
    title: string,
    description: string,
    AIDescription?: string,
}