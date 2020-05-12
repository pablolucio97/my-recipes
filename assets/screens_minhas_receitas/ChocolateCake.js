import React from 'react'
import { View, Text } from 'react-native'
import {Title, Subheading} from 'react-native-paper'

const ChocolateCake = () => {
    return (
        <View>
        <Title style={{padding: 8}}>Ingredientes</Title>
            <Subheading style={{padding: 3, marginLeft: 10}}>2 xícaras de farinha de trigo</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>2 xícaras de açúcar</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 xícara de leite</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>6 colheres (sopa) de chocolate em pó</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 colher (sopa) de fermento em pó</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>6 ovos</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 colher (chá) de pimenta-do-reino moída</Subheading>
            <Title style={{padding: 8}}>Modo de preparo</Title>
            <Subheading style={{padding: 3, marginLeft: 10}}>1. Em uma batedeira, bata as claras em neve, acrescente as gemas, o açúcar e bata novamente.</Subheading>					
           					
            <Subheading style={{padding: 3, marginLeft: 10}}>2. Adicione a farinha, o chocolate em pó, o fermento, o leite e bata por mais alguns minutos.</Subheading>					
           					
            <Subheading style={{padding: 3, marginLeft: 10}}>3. Despeje a massa em uma forma untada e leve para assar em forno médio (180° C), preaquecido, por 40 minutos.</Subheading>					
           	

        </View>

    )
}

export default ChocolateCake