import React from 'react'
import { View, Text } from 'react-native'
import {Title, Subheading} from 'react-native-paper'

const ToastKitchen = () => {
    return (
        <View>
        <Title style={{padding: 8}}>Ingredientes</Title>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 frango inteiro</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 cebola grande descascada inteira</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>margarina ou manteiga com sal</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>alecrim e manjericão ou ervas finas desidratadas</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>sal</Subheading>

            <Title style={{padding: 8}}>Modo de preparo</Title>
            <Subheading style={{padding: 3, marginLeft: 10}}>1. Pegue o frango, retire os miúdos.</Subheading>
       
        <Subheading style={{padding: 3, marginLeft: 10}}>2. Lave-o por dentro e por fora com água e limão, escorra.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>3. Secar com um guardanapo de pano dentro e fora, em seguida passar sal por dentro e por fora, fazer o mesmo com a margarina ou manteiga.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>4. Colocar em uma assadeira, adicionar a cebola inteira e os galhos de alecrim e manjericão no interior do frango Seara com um cubinho de margarina.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>5. Levar para assar em forno médio até começar a dourar mais ou menos 40 minutos, aumentar o forno para o máximo para dourar e ficar crocante.</Subheading>

        </View>

    )
}

export default ToastKitchen
