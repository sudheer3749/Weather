import React, { Component } from 'react';
import {SafeAreaView,Image, Text, View, StyleSheet,Button,TextInput  } from 'react-native';
import { useState } from 'react';

export class  WeatherDetails extends React.Component
{
  state={WeatherInfo:{weather_icons:[''],temperature:2,precip:3,wind_speed:4}
  }
  async componentDidMount(){
    console.log(this.props.route.params.city);
    
    const response = await fetch('http://api.weatherstack.com/current?access_key=4f6c569ded7d7d8688debb1fa1de9bb2&query=' + this.props.route.params.city);
  
  var data = await response.json();
  await this.setState({WeatherInfo:data.current})
  console.log(data.current);
  }
  render() {
    // This will throw an 'undefined is not a function' exception because the navigation
    // prop is undefined.
    return (
      <View style={styles.card}>
      {this.props.route.params.city}
      <Image style={styles.tinyLogo}
          source={this.state.WeatherInfo.weather_icons[0]}
        />
        <Text style={styles.p}>
          Temperature : {this.state.WeatherInfo.temperature}
      </Text>
      <Text style={styles.p}>
          Precipitation : {this.state.WeatherInfo.precip}
      </Text>
      <Text style={styles.p}>
          Wind Speed : {this.state.WeatherInfo.wind_speed}
      </Text> 
      
      
      </View>   
    );
  }

}
export default WeatherDetails;


const styles = StyleSheet.create({
  
  p:{
    marginVertical:5
  },
  
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    //width: '100%',
    margin: 10,

    shadowColor: 'gray',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
   tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  }
  
});








