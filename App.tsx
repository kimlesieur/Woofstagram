import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import Input from './Input';
import {Formik} from 'formik';

type Values = {
    email: string;
    password: string;
    confirmationPassword: string;
    name: string;
    birthday: string;
    breed: string;
    toy: string;
}

const App = () => {

  const onSubmit = (values: Values) => {
    if(values.password !== values.confirmationPassword) alert("Passwords do not math, please try again !");
  }

  return (
    <Formik
      initialValues={{  email: '',
        password: '',
        confirmationPassword: '',
        name: '',
        birthday: '',
        breed: '',
        toy: '',
      }}
      onSubmit={onSubmit}>
      {({handleChange, handleSubmit, values}) => (
        <ScrollView style={{ flex: 1, backgroundColor: '#ecf0f1' }}>
          <Input
              label="Email"
              placeholder="Type your email here"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Input
              label="Password"
              placeholder="Type your password here"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            <Input
              label="Confirm password"
              placeholder="Re-type your password here"
              onChangeText={handleChange('confirmationPassword')}
              value={values.confirmationPassword}
              onSubmitEditing={handleSubmit}
              secureTextEntry
            />
            <Input
              label="Name"
              placeholder="Type your dog's name here"
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <Input
              label="Birthday"
              placeholder="Type your dog's date of birth here"
              value={values.birthday}
              onChangeText={handleChange('birthday')}
            />
            <Input
              label="Breed"
              placeholder="Type your dog's breed here"
              value={values.breed}
              onChangeText={handleChange('breed')}
            />
            <Input
              label="Favorite toy"
              placeholder="Type your dog's favorite toy here"
              value={values.toy}
              onChangeText={handleChange('toy')}
            />  
        </ScrollView>
      )}
    </Formik>

  )
};

export default App;
