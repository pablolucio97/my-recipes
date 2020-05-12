import  React, {useState} from 'react'
import { ScrollView, Text, StyleSheet, FlatList, View, Image } from 'react-native'
import { Appbar, Divider, Title, Caption, Button } from 'react-native-paper';


const dataRecipes = [
    {recipe: 'Fricassê',
    timeExecution: '40 minutos.',
    serve: '4 pessoas', 
    toScreen: 'Fricassê de frango',
    URI: 'https://img.itdg.com.br/tdg/images/recipes/000/191/711/278845/278845_original.jpg?mode=crop&width=710&height=400'},
    {recipe: 'Frango Assado',
    serve: '4 pessoas', 
    toScreen: 'Frango assado',
    timeExecution: '35 minutos.',
     URI: 'https://www.receitasdemae.com.br/wp-content/uploads/2017/10/Frango-assado-na-panela-de-press%C3%A3o-380x389.jpg'},
    {recipe: 'Feijoada',
    timeExecution: '60 minutos.',
     serve: '6 pessoas', 
     toScreen: 'Feijoada',
     URI: 'https://s2.glbimg.com/uRYjx6NzozEZV0ZRl3OWyHVipxs=/0x0:340x263/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/27/43/914/feijoada.jpg'},
    {recipe: 'Feijão tropeiro',
    timeExecution: '50 minutos.',
     serve: '6 pessoas', 
     toScreen: 'Feijão tropeiro',
     URI: 'https://www.tvgazeta.com.br/wp-content/uploads/2019/10/mlh-feijao-tropeiro.jpg'}
]

const Plates = ({navigation}) => {
    return (
        <View>
            <FlatList
            data={dataRecipes}
            renderItem={({item})=>(
                <View style={{padding: 10, alignItems: 'center'}}>
                    <Title style={{padding: 10}}>{item.recipe}</Title>
                    <Image source={{uri: item.URI}}
                   style={{width: 320, height: 200, padding: 10, borderRadius: 3}}
                    />
                    <Caption>Tempo de execução: {item.timeExecution}</Caption>
                    <Text >Serve {item.serve}.</Text>
                    <Button mode='contained' style={{width: '50%', margin: 7}}
                    onPress={()=> navigation.navigate(item.toScreen)}
                    >Ver receita</Button>
                </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Plates
