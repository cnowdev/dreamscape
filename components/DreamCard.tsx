import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

interface Props {
  title: string;
  description: string;
  onPress?: () => void;
}

const DreamCard: React.FC<Props> = ({ title, description, onPress }) => {
  return (
    <Pressable onPress={onPress}>
    <View style={styles.descriptionBox}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  descriptionBox: {
    width: 350,
    height: 120, 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    backgroundColor: '#092333', 
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
    fontFamily: 'Quicksand_700Bold' 
  },
  description: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Quicksand_400Regular'
  },
});

export default DreamCard;
