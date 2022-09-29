import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';

import Alert from "./Alert";
import Input from "./Input";
import WeatherDetails from "./WeatherDetails";
import CountryDetails from "./CountryDetails";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export class App extends Component {

//const Stack = createNativeStackNavigator();

  render() {

const Stack = createNativeStackNavigator();

 

    return ( 
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Input'>
        <Stack.Screen name="Input" component={Input} options={{ title: 'Weather App' }} />
        <Stack.Screen name="CountryDetails" component={CountryDetails} />
        <Stack.Screen name="WeatherDetails" component={WeatherDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
    
   
  );
  }
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 50, //Constants.statusBarHeight,

    padding: 8,
  },

  
  heading: {
    fontSize: 25, color: 'gray', textAlign: "center", margin: 50
  },
  
  
  body: {
    backgroundColor: "#efefef", height: '100%'
  }
});
