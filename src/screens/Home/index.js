import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Logo from "../../../assets/logo.png"


export default function Home() {

    const [inputMovidesk, setInputMovidesk] = useState("")
    const [inputCliente, setInputCliente] = useState("")
    const [inputSerial, setInputSerial] = useState("")
    const [inputEquipamento, setInputEquipamento] = useState("")
    const [inputTipoAtendimento, setInputTipoAtendimento] = useState("")
    const [inputDetalhesVisita, setInputDetalhesVisita] = useState("")
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.containerTitle}>
                <Image source={Logo}/>
                <Text style={styles.title}>RELATÓRIO TÉCNICO</Text>

            </View>

            <ScrollView
            style={styles.containerInput}>
                
                <Text style={styles.titleInput}>MOVIDESK</Text>
                <TextInput
                    style={styles.input}
                    multiline={false} //DETALHES DA VISITA DEIXA TRUE
                    autoCorrect={false}
                    placeholder="#"
                    keyboardType='numeric'
                    value={inputMovidesk}
                    onChangeText={(texto) => setInputMovidesk(texto)}
                />

                <Text style={styles.titleInput}>CLIENTE</Text>
                <TextInput
                    style={styles.input}
                    multiline={false} //DETALHES DA VISITA DEIXA TRUE
                    autoCorrect={false}
                    value={inputCliente}
                    onChangeText={(texto) => setInputCliente(texto)}
                />
                <Text style={styles.titleInput}>SERIAL</Text>
                <TextInput
                    style={styles.input}
                    multiline={false} //DETALHES DA VISITA DEIXA TRUE
                    autoCorrect={false}
                    value={inputSerial}
                    onChangeText={(texto) => setInputSerial(texto)}
                />
                <Text style={styles.titleInput}>EQUIPAMENTO</Text>
                <RNPickerSelect
                    style={styles.pickerStyle}
                    placeholder={{ label: "Selecione o Equipamento", value: null, }}
                    value={inputEquipamento}
                    onValueChange={(value) => setInputEquipamento(value)}
                    items={[
                        { label: 'COLETOR', value: 'COLETOR' },
                        { label: 'IMPRESSORA', value: 'IMPRESSORA' },
                        { label: 'LEITOR', value: 'LEITOR' },
                        { label: 'ACESSPOINT', value: 'ACESSPOINT' },
                        { label: 'TABLET', value: 'TABLET' },
                        { label: 'ROBOFLEX', value: 'ROBOFLEX' },
                        { label: 'OUTROS', value: 'OUTROS' },
                    ]}
                />
                <Text style={styles.titleInput}>TIPO DE ATENDIMENTO</Text>
                <RNPickerSelect
                    style={styles.pickerStyle}
                    placeholder={{ label: "Selecione o Tipo de Atendimento", value: null, }}
                    value={inputTipoAtendimento}
                    onValueChange={(value) => setInputTipoAtendimento(value)}
                    items={[
                        { label: 'PREVENTIVA', value: 'PREVENTIVA' },
                        { label: 'CORRETIVA', value: 'CORRETIVA' },
                        { label: 'REMANEJAMENTO', value: 'REMANEJAMENTO' },
                        { label: 'ENTREGA DE INSUMO', value: 'ENTREGA DE INSUMO' },
                        { label: 'ANÁLISE', value: 'ANALISE' },
                        { label: 'ENTREGA DE EQUIPAMENTO', value: 'ENTREGA DE EQUIPAMENTO' },
                        { label: 'COLETA DE EQUIPAMENTO', value: 'COLETA DE EQUIPAMENTO' },
                        { label: 'ENTREGA DE ORCAMENTO', value: 'ENTREGA DE ORCAMENTO' },
                        { label: 'COLETA DE ORCAMENTO', value: 'COLETA DE ORCAMENTO' },
                        { label: 'OUTROS', value: 'OUTROS' },
                    ]}
                />
                <Text style={styles.titleInput}>DETALHES DA VISITA</Text>
                <TextInput
                    style={styles.input}
                    multiline={true} //DETALHES DA VISITA DEIXA TRUE
                    autoCorrect={false}
                    value={inputDetalhesVisita}
                    onChangeText={(texto) => setInputDetalhesVisita(texto)}
                    keyborardA
                />
            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF6100",
    },
    containerTitle: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 70,
        marginBottom: 15

    },
    title: {
        color: "#FFF",
        fontSize: 20
    },
    containerInput: {
        // justifyContent: "flex-start",
        marginLeft: 40
    },
    titleInput: {
        color: "#FFF",
        fontSize: 20,
    },
    input: {
        width: "90%",
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 5,
        textAlignVertical: "center",
        marginBottom: 15
    },

    pickerStyle: {
        inputAndroid: {
            width: "90%",
            color: '#000',
            backgroundColor: "#FFF",
            marginBottom: 15
        }
    }

});