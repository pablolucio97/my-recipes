import  React from 'react'
import {useState, useEffect} from 'react'
import { View, StyleSheet, Alert, Image, ScrollView, StatusBar} from 'react-native'
import { List, Button, Title, Card, Avatar, Divider } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider, FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ViewPager from '@react-native-community/viewpager';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
      ...DefaultTheme.colors,
      primary: '#55ff',
      accent: '#e45e54',
    },
  };

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Home = ({navigation, route}) => {

  return (

    <PaperProvider theme={theme}>
      <StatusBar
      backgroundColor='#62ff'
      />
      <Title style={{padding: 10, alignSelf: 'center', fontFamily: 'Manrope-Medium'}}> 🍝 Minhas receitas</Title>
      <Divider style={{margin: 5}}/>
      <ViewPager style={styles.viewPager} initialPage={0}>
      <View key="1">
        <Image/>
      <Card style={styles.card}>
        <Card.Content>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2018/07/18/19/12/spaghetti-3547078_960_720.jpg' }} />
        <Card.Actions style={{width: '30%'}}>
          <Button mode='outlined' onPress={()=> navigation.navigate('Pratos')}>
            Pratos
          </Button>
        </Card.Actions>
        </Card>
      </View>
      <View key="2">
        <Card style={styles.card}>
        <Card.Content>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2019/11/07/13/05/waffle-4608843_960_720.jpg' }} />
        <Card.Actions>
        <Button mode='outlined' onPress={()=> navigation.navigate('Sobremesas')}>
           Sobremesas
          </Button>
        </Card.Actions>
        </Card>
      </View>
      <View key="3">
      <Card style={styles.card}>
      <Card.Content>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg' }} />
      <Card.Actions>
      <Button mode='outlined' onPress={()=> navigation.navigate('Lanches')}>
        Lanches
        </Button>
      </Card.Actions>
      </Card>
      </View>
    </ViewPager>
   
        <ScrollView style={styles.container}>
          <View>
            <List.Item
              title='Pratos'
              description='Total de receitas: 4'
              left = {props => <List.Icon {...props} icon='book' />}
              />
              <Divider/>
              <List.Item
              title='Sobremesas'
              description='Total de receitas: 4'
              left = {props => <List.Icon {...props} icon='book' />}
            />
            <Divider/>
            <List.Item
              title='Lanches'
              description='Total de receitas: 4'
              left={props => <List.Icon {...props} icon="book" />}
              />
              <Divider/>
          </View>
          <View style={styles.container02}>
            <Title>Escrever minha receita</Title>
            <FAB
            style={{margin: 8, backgroundColor: '#63ff', width: 55, borderRadius: 55, alignItems: 'center'}}
            icon='plus'
            onPress={()=> navigation.navigate('Escrever receita')}
            />
          </View>
          </ScrollView>
      </PaperProvider>

    )
}

export default Home

const styles = StyleSheet.create({
  viewPager: {
    flex: .80,
  },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 10,
        bottom: 20
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
    imageLogo:{
      width: 188,
      padding: 10,
      margin: 30,
      height: 36

    },
    card:{
      margin: 10,
    },
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 20
    },
    container02:{
      flex: .5,
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 3,
      marginTop: 25,
      margin: 10,
      padding: 10
    }
})