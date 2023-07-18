import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  return (
    <View>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={handleTitleChange}
        placeholder="Enter a title"
        placeholderTextColor="#fff"
      />

      <TextInput
        style={styles.descriptionInput}
        value={description}
        onChangeText={handleDescriptionChange}
        placeholder="Enter a description"
        placeholderTextColor="#fff"
        multiline={true} // Allow multiple lines for the description
        numberOfLines={4} // Control the height by adjusting the number of lines displayed
      />
    </View>
  );
};

const styles = {
  titleInput: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#092333',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginLeft: 20,
    fontFamily: 'Quicksand_400Regular', 
    width: 350
  },
  descriptionInput: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#092333',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginLeft: 20, 
    height: 200,
    fontFamily: 'Quicksand_400Regular',
    width: 350 
  },
};

export default Form;
