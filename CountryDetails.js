import * as React from 'react';
import {SafeAreaView,Image, Text, View, StyleSheet,Button,TextInput  } from 'react-native';


export default function CountryDetails(props) {

console.log(props.route.params);

const styles = StyleSheet.create({
  
  
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
  flag: {
    width: 270,
    height: 180,
  },p:{
    marginVertical:5
  }
  
});


  return (
    <View style={styles.card}>
<Image style={styles.flag} source={props.route.params.flags.png} 
      />
     <Text style={styles.p}>
        Capital : {props.route.params.capital}
    </Text>
    <Text style={styles.p}>
        Population : {props.route.params.population}
    </Text>
    <Text style={styles.p}>
        Latitude , Longitude  : {props.route.params.latlng}
    </Text>
     <Button title="See Weather" onPress={() => { props.navigation.navigate('WeatherDetails', { city: props.route.params.capital }) }}
       style={styles.formControl}   color="#841584"
        
    />
    
    </View>
  );
  

}