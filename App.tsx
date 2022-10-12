
import React, {useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import Input from './Input';


const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');

  const confirmPasswordsMatch = (text: string) => {
    if(text !== password) alert("Passwords do not math, please try again !");
  }


  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ecf0f1' }}>
      <Input
          label="Email"
          placeholder="Type your email here"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Password"
          placeholder="Type your password here"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Input
          label="Confirm password"
          placeholder="Re-type your password here"
          onSubmitEditing={(e) => {
            confirmPasswordsMatch(e.nativeEvent.text);
          }}
          secureTextEntry
        />
        <Input
          label="Name"
          placeholder="Type your dog's name here"
          value={name}
          onChangeText={setName}
        />
        <Input
          label="Birthday"
          placeholder="Type your dog's date of birth here"
          value={birthday}
          onChangeText={setBirthday}
        />
        <Input
          label="Breed"
          placeholder="Type your dog's breed here"
          value={breed}
          onChangeText={setBreed}
        />
        <Input
          label="Favorite toy"
          placeholder="Type your dog's favorite toy here"
          value={toy}
          onChangeText={setToy}
        />  
    </ScrollView>

  )
};

export default App;
