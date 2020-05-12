import React from 'react'
import { View, Text, Flat, Image, FlatList } from 'react-native'
import { Appbar, Divider, Title, Caption, Button } from 'react-native-paper';

const dataSweets = [
    {recipe: 'Sanduíche caseiro',
    timeExecution: '25 minutos',
    serve: '2 porções', 
    toScreen: 'Sanduíche caseiro',   
    URI: 'https://cdn.pixabay.com/photo/2018/03/31/07/43/bread-3277473_960_720.jpg'},
    {recipe: 'Torta de frango',
    timeExecution: '45 minutos',
    serve: '6 porções', 
    toScreen: 'Torta de frango',   
    URI: 'https://image.freepik.com/fotos-gratis/calzone-caseiro_165536-2505.jpg'},
    {recipe: 'Pão de queijo',
    timeExecution: '1 hora e 10 minutos',
    serve: '10 porções', 
    toScreen: 'Pão de queijo',   
    URI: 'https://image.freepik.com/fotos-gratis/pao-de-queijo-caseiro-brasileiro-aka-pao-de-queijo-em-uma-cesta-rustica_74692-5.jpg'},
    {recipe: 'Pastel português',
    timeExecution: '55 minutos',
    serve: '8 porções',  
    toScreen: 'Pastel português',  
    URI: 'https://image.freepik.com/fotos-gratis/empanadas-fritas-com-molho-vista-do-topo_103019-842.jpg'},

]

const Saltys = ({navigation}) => {
    return (
        <View>
            <FlatList
            data = {dataSweets}
            renderItem = {({item})=> (
                <View style={{alignItems: 'center', padding: 10}}>
                    <Title>{item.recipe}</Title>
                    <Image
                    source={{uri: item.URI}}
                    style={{width: 320, height: 200, borderRadius: 3, margin: 7}}
                    />
                    <Text>Serve: {item.serve}.</Text>
                    <Caption>Tempo de execução: {item.timeExecution}.</Caption>
                    <Button mode= 'contained' style={{margin: 7, width: '50%'}}
                    onPress={()=> navigation.navigate(item.toScreen)}
                    >Ver receita</Button>
                </View>
            )}
            keyExtractor={(item, index)=> index.toString()}
            />
        </View>
    )
}

export default Saltys
