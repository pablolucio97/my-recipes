import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {Title, Subheading} from 'react-native-paper'

const IceCream = () => {
    return (
        <ScrollView>
             <Title style={{padding: 8}}>Ingredientes</Title>
            <Subheading style={{padding: 3, marginLeft: 10}}>500 ml de leite integral (leite de vaca)</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>1 caixa de creme de leite</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>1/2 lata de leite condensado</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>10 colheres de sopa de açúcar</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>1 e 1/2 colher de sopa de pó para sorvete com sabor de sua preferência</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>1 colher de sopa bem cheia de liga neutra</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>1 colher de chá de emulsificante</Subheading>
            <Title style={{padding: 8}}>Preparo </Title>
            <Subheading style={{padding: 3, marginLeft: 10}}>1. Bata no liquidificador o leite, creme de leite, leite condensado, açúcar, pó para sorvete, e a liga neutra, por 5 minutos em alta rotação, essa mistura chamaremos de base.</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>2. Coloque a base para congelar.</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>3. Após congelada a base, com o auxílio de uma tabua e uma faca grande, corte tudo em cubinhos pequenos.</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>4. Coloque a base já toda em cortada em cubos, na batedeira e adicione o emulsificante.</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>5. Comece a bater em velocidade baixa, para não forçar muito a batedeira, por aproximadamente 6 minutos.</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>6. Após isso bata em velocidade máxima a mistura na batedeira e por 14 minutos, ou até verificar que a mistura se encontra isenta de cristais de gelo.</Subheading>
           
            <Subheading style={{padding: 3, marginLeft: 10}}>7. Estando lisa e homogênea, está pronto.</Subheading>


        </ScrollView>
    )
}

export default IceCream
