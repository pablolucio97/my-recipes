import React from 'react'
import { View, Text } from 'react-native'
import {Title, Subheading} from 'react-native-paper'

const Fricasse = () => {
    return (
        <View>
        <Title style={{padding: 8}}>Ingredientes</Title>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 lata de creme de leite</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 lata de milho verde</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 copo de requeijão cremoso</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>100 g de azeitona sem caroço</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>2 peitos de frango desfiados</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 xícara de água</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>100 g de batata palha</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>200 g de mussarela fatiada</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 pitada de sal</Subheading>
            <Title style={{padding: 8}}>Modo de preparo</Title>
            <Subheading style={{padding: 3, marginLeft: 10}}>1. Bata no liquidificador o milho, o requeijão, o creme de leite e a água.</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>2. Refogue o creme do liquidificador com o frango desfiado, as azeitonas e o sal até ficar com uma textura espessa.</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>3. Coloque o refogado numa assadeira, cubra com mussarela e espalhe a batata palha por cima.</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>4. Leve ao forno até borbulhar.</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>5. Sirva com arroz branco.</Subheading>

        </View>
    )
}

export default Fricasse
