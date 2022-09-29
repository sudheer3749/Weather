import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet,Button,TextInput  } from 'react-native';


export default function Alert(props) {
const styles = StyleSheet.create({
  
  alert:{
    borderRadius: 5,padding:5,margin:10,shadowColor:"gray", color:'white', backgroundColor:'red',textAlign:'center'
  }
});


  return (
    <View>
     <Text style={styles.alert}>
        {props.Error}
    </Text>
    </View>
  );
  

}