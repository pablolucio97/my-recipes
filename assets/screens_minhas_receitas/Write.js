import React, {useState, useEffect} from 'react'
import { View, StyleSheet, ScrollView, Alert} from 'react-native'
import { TextInput, Title, Subheading, Button, Divider } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#55ff',
    accent: '#f1c40f',
  },
};

const Write = ({navigation}) => {

    const [title, setTitle] = useState('')
    const [titleView, setTitleView] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [ingredientsView, setIngredientsView] = useState('')
    const [preparing, setPreparing] = useState('')
    const [preparingView, setPreparingView] = useState('')
    const [recipes, setRecipes] = useState([])

async function saveRecipe (){
        if(title === '' || title.length <= 5
         || ingredients === '' || ingredients.length <= 20 
         || preparing === '' || preparing.length <= 20){
           Alert.alert('Alerta','Há algum campo em branco ou o texto é pequeno demais, por favor verifique.')
        }else{
          await AsyncStorage.setItem('@save_recipes', title),
          await AsyncStorage.setItem('@save_items', ingredients),
          await AsyncStorage.setItem('@save_preparing', preparing).then(
            Alert.alert('Alerta', 'Receita salva com suceso')
            )
            setRecipes([...recipes, title, ingredients, preparing])
          }
        }
        
        useEffect(()=> {
          AsyncStorage.getItem('@save_recipes').then(value => setTitleView(value)),
          AsyncStorage.getItem('@save_items').then(value => setIngredientsView(value)),
          AsyncStorage.getItem('@save_preparing').then(value => setPreparingView(value))
        })

    return (
        <PaperProvider theme={theme}>
        <ScrollView style={styles.container}>
        <Title>Nova receita:</Title>
        <TextInput
        label='Título'
        style={{padding: 3}}
        mode='outlined'
        value={title}
        onChangeText={val => setTitle(val)}
        />
      <TextInput
        label='Ingredientes'
        style={{padding: 3}}
        mode='outlined'
        value={ingredients}
        onChangeText={val => setIngredients(val)}
        multiline={true}
        numberOfLines={10}
        />
        <TextInput
        label='Modo de preparo'
        style={{padding: 3}}
        mode='outlined'
        value={preparing}
        onChangeText={val => setPreparing(val)}
        multiline={true}
        numberOfLines={10}
        />
   
        <View style={styles.containerView}>
        <Subheading>Minha última receita escrita:</Subheading>
        <Title>Receita</Title>
        <Subheading>{titleView}</Subheading>
        <Divider style={{margin: 10}}/>
        <Title>Ingredientes</Title>
        <Subheading>{ingredientsView}</Subheading>
        <Divider style={{margin: 10}}/>
        <Title>Modo de preparo</Title>
        <Subheading>{preparingView}</Subheading>
        </View>
        <Button mode="contained" theme={theme.colors.accent} style={{marginBottom: 40, margin: 5}}onPress={saveRecipe}>Salvar receita</Button>
        </ScrollView>
        </PaperProvider>
    )
}

export default Write

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 20
    },
    title:{
        fontSize: 22,
        paddingTop: 30,
        padding: 10
    },
    image:{
      margin: 'auto',
      marginLeft: 40,
    },
    card:{
      margin: 10,
    },
    containerView:{
      flex: 1,
      flexDirection: 'column',
      padding: 5,
      marginTop: 7,
      margin: 3,
      borderRadius: 5,
    }
})