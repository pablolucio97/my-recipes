import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {Title, Subheading} from 'react-native-paper'

const Feijoada = () => {
    return (
        <View>
        <Title style={{padding: 8}}>Ingredientes</Title>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 Kg de feijão preto</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>100 g de carne seca</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>70g de orelha de porco</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>100 g de costelinha de porco</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>50 g de lombo de porco</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>150 g de lingüiça portuguesa</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>3 folhas de louro</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>6 dentes de alho</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>2 cebolas grandes picadinhas</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 maço de cebolinha verde picadinha</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>sal</Subheading>

            <Title style={{padding: 8}}>Modo de preparo</Title>
            <Subheading style={{padding: 3, marginLeft: 10}}>1. Coloque as carnes de molho por 36 horas ou mais, vá trocando a água várias vezes, se for ambiente quente ou verão, coloque gelo por cima ou em camadas frias.</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>2. Coloque para cozinhar passo a passo: as carnes duras, em seguida as carnes moles.</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>3. Quando estiver mole coloque o feijão, e retire as carnes.</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>4. Finalmente tempere o feijão.</Subheading>

        </View>

    )
}

export default Feijoada
