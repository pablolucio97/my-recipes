import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {Title, Subheading} from 'react-native-paper'

const BreadCheese = () => {
    return (
        <ScrollView>
        <Title style={{padding: 8}}>Ingredientes</Title> 
        <Subheading style={{padding: 3, marginLeft: 10}}>800 g de polvilho azedo</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>500 g de peito de frango sem pele</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>800 g de polvilho azedo</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>1 copo (americano) de água</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>1 copo (americano) de leite</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>1/2 xícara de óleo</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>2 ovos</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>100 g de queijo parmesão ralado</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>sal a gosto</Subheading>


 
        <Title style={{padding: 8}}>Preparo</Title>
        <Subheading style={{padding: 3, marginLeft: 10}}>1. Em uma panela, ferva a água e acrescente o leite, o óleo e o sal.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>2. Adicione o polvilho, misture bem e comece a sovar a massa com o fogo desligado.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>3. Quando a massa estiver morna, acrescente o queijo parmesão, os ovos e misture bem.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>4. Unte as mãos e enrole bolinhas de 2 cm de diâmetro.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>5. Disponha as bolinhas em uma assadeira untada com óleo, deixando um espaço entre elas.</Subheading>
        <Subheading style={{padding: 3, marginLeft: 10}}>6. Asse em forno médio (180º C), preaquecido, por cerca de 40 minutos.</Subheading>



        </ScrollView>

    )
}

export default BreadCheese