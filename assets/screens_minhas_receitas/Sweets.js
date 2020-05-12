import React from 'react'
import { View, Text, Flat, Image, FlatList } from 'react-native'
import { Appbar, Divider, Title, Caption, Button } from 'react-native-paper';

const dataSweets = [
    {recipe: 'Bolo de chocolate',
    timeExecution: '55 minutos',
    serve: '5 porções',
    toScreen: 'Bolo de chocolate',    
    URI: 'https://image.freepik.com/fotos-gratis/bolo-de-chocolate-com-cerejas-suculentas_126025-14.jpg'},
    {recipe: 'Cookies',
    timeExecution: '45 minutos',
    serve: '4 porções',  
    toScreen: 'Cookies',  
    URI: 'https://images.pexels.com/photos/4276482/pexels-photo-4276482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {recipe: 'Sorvete caseiro',
    timeExecution: '1 hora e 15 minutos',
    serve: '8 porções', 
    toScreen: 'Sorvete caseiro',   
    URI: 'https://image.freepik.com/fotos-gratis/delicioso-sorvete-com-cones_23-2148531582.jpg'},
    {recipe: 'Torta tradicional',
    timeExecution: '55 minutos',
    serve: '7 porções',  
    toScreen: 'Torta tradicional',  
    URI: 'https://images.pexels.com/photos/669736/pexels-photo-669736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},

]

const Sweets = ({navigation}) => {
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
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Sweets
