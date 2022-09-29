import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';
import Alert from "./Alert";
import CountryDetails from "./CountryDetails";
import { NavigationContainer } from '@react-navigation/native';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export class Input extends Component {


  

  componentDidMount(){
    console.log(navigation);
   
    return;
   
  }
  state = { Country: null, Temp: '', CountryResult: { name: null } };
  UpdateCountry(e) {
    this.setState({ Country: e.target.value });
  }
  ShowPanel(panel) {
    this.setState({ Panel: panel });
  }


  async FetchCountryInfo() {
   

    const response = await fetch('https://restcountries.com/v3.1/name/' + this.state.Country);
   
    var data = await response.json();
    //console.log(data[0]);

    if (response.status == 200) {
     
      this.setState({ CountryResult: data[0] });
      this.props.navigation.navigate('CountryDetails',data[0]);
    }
    else {
      this.setState({ Panel: "Error" });
    }


    // //this.setState({Temp:data[0].name.common + " " + data[0].latlng + " " + data[0].capital[0] + " " + data[0].population });
    // this.setState({ Temp: response.status });

  }


  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.heading}>Weather App</Text>


        {this.state.Panel == "CountryDetails" ? <CountryDetails Country={this.state.CountryResult}></CountryDetails> : <View></View>
        }
        {(this.state.Panel == "Error") ? <Alert Error="Invalid Input"></Alert> : <View></View>}






        <Card style={styles.card}>
          <TextInput
            style={styles.formControl}
            placeholder="Enter Country Name"
            onChange={(e) => this.UpdateCountry(e)}

          />


          <Button onPress={() => this.FetchCountryInfo()}
            style={styles.formControl}
            title="Proceed"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />


       </Card>
      
      </View>
    );
  }
}

export default Input

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 50, //Constants.statusBarHeight,

    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formControl: {
    padding: 5,
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 5,
    margin: 20

  },
  heading: {
    fontSize: 25, color: 'gray', textAlign: "center", margin: 50
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,

    paddingVertical: 25,
    paddingHorizontal: 25,
    //width: '100%',
    marginHorizontal: 10,

    shadowColor: 'gray',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
  ,
  body: {
    backgroundColor: "#efefef", height: '100%'
  }
});