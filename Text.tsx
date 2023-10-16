import { StyleSheet, View , Text} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      flex:1,
      backgroundColor: 'red',
    }}>
    <View style={{
      flex:1,
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
       <Text style={{
        color : 'blue',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
        lineHeight: 20,
        textTransform: 'uppercase',
        textDecorationLine: 'line-through',
      }}>
        Hello World , I am React Native , I am coming from App.js , I am a Text Component , I am a child of View Component
      </Text>
    </View>
    <View style={{
      flex:1,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
        color : 'yellow',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
        lineHeight: 20,
      }}>
        Hello World , I am React Native , I am coming from App.js , I am a Text Component , I am a child of View Component
        </Text>
    </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})