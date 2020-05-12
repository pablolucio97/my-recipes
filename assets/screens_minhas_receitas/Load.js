import  React from 'react'
import {useState, useEffect} from 'react'
import {Container, Text1, Text2, Text3, Text4, Text5, Text6} from '../styles/styles_minhas_receitas'
import { View, Text, StyleSheet, Alert, Image} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { List, Checkbox, Button, Title } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#55ff',
      accent: '#f1c40f',
    },
  };

const Load = ({navigation}) => {

  const [load, setLoad] = useState('')

  useEffect(() => {
    const timeOut = setTimeout(()=> {
      setLoad(navigation.navigate('Home'))
    }, 4000)
    return () => {
      timeOut
    }
  })

  return (
        <PaperProvider theme={theme}>
    
       
      </PaperProvider>

    )
}

export default Load

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 10,
    },
    text2:{
        fontSize: 28,
    color: '#33ff'
    },
    image:{
      margin: 'auto',
      marginLeft: 40,
    }
})