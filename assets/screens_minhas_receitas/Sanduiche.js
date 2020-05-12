import React from 'react'
import { View, Text } from 'react-native'
import {Title, Subheading} from 'react-native-paper'

const ChocolateCake = () => {
    return (
        <View>
        <Title style={{padding: 8}}>Ingredientes</Title> 
        <Subheading style={{padding: 3, marginLeft: 10}}>pão francês</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>requeijão a gosto</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>tomate em fatias</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>orégano a gosto</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>mortadela</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>queijo mussarela</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>alface</Subheading>
        <Title style={{padding: 8}}>Ingredientes</Title>
        <Subheading style={{padding: 3, marginLeft: 10}}>1. Corte o pão francês ao meio e passe requeijão nos dois lados.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>2. Leve ao forno por cerca de 10 minutos.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>3. Em seguida, acrescente tomate em fatias e tempere com orégano.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>4. Dobre a fatia de mortadela ao meio, duas vezes e coloque no sanduíche.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>5. Em uma frigideira, derreta o queijo mussarela e coloque no sanduíche.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>6. Finalize com folhas de alface e está pronto o seu sanduíche.</Subheading>


        </View>

    )
}

export default ChocolateCake