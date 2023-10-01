import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import QuizeScreen from '../screen/QuizeScreen';
import ResultsScreen from '../screen/ResultScreen';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Quiz" component={QuizeScreen} 
        options={{headerShown:false}}/>
          <Stack.Screen name="Results" component={ResultsScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})