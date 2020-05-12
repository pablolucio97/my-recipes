import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {Title, Subheading} from 'react-native-paper'

const TraditionalPie = () => {
    return (
        <ScrollView>
             <Title style={{padding: 8}}>Ingredientes</Title>
             <Subheading style={{padding: 3, marginLeft: 10}}>1 pacote de 200gr de bolacha maisena</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>4 colheres (sopa) de margarina sem sal</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 pacote de bolacha calipso</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>2 potes de philadelphia tradicional</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 barra (160 g) de chocolate branco</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 barra (160 g) de chocolate ao leite</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>¾ da lata de leite condensado</Subheading>
            <Subheading style={{padding: 3, marginLeft: 10}}>1 lata de creme de leite sem soro</Subheading>
            <Title style={{padding: 8}}>Preparo </Title>
            <Subheading style={{padding: 3, marginLeft: 10}}>1. Triturar a bolacha de maisena, misturá-la à margarina formando uma massa homogênea.</Subheading>	
            <Subheading style={{padding: 3, marginLeft: 10}}>2. Montar o fundo da forma com a massa, colocar as bolachas calipso uma ao lado da outra com intervá-los entre elas. Adicione a farinha, o chocolate em pó, o fermento, o leite e bata por mais alguns minutos.</Subheading>	
            <Subheading style={{padding: 3, marginLeft: 10}}>3. Na batedeira coloque os potes de philadelphia e bata-os com o leite condensado.</Subheading>	
            <Subheading style={{padding: 3, marginLeft: 10}}>4. Após batê-los acrescente o chocolate branco derretido (coloque na forma).</Subheading>	
            <Subheading style={{padding: 3, marginLeft: 10}}>5. Derreta o chocolate ao leite e misture-o ao creme de leite.</Subheading>	
            <Subheading style={{padding: 3, marginLeft: 10}}>6. Por fim coloque o cuidadosamente sobre o creme branco.</Subheading>	
        </ScrollView>
    )
}

export default TraditionalPie
