import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Logo from "../../../assets/logo.png";
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing';




export default function Home() {

    const [inputMovidesk, setInputMovidesk] = useState("")
    const [inputCliente, setInputCliente] = useState("")
    const [inputSerial, setInputSerial] = useState("")
    const [inputEquipamento, setInputEquipamento] = useState("")
    const [inputTipoAtendimento, setInputTipoAtendimento] = useState("")
    const [inputDetalhesVisita, setInputDetalhesVisita] = useState("")
    const [inputNomeTecnico, setInputNomeTecnico] = useState("")
    const [inputCentroDeCustos, setInputCentroDeCustos] = useState("")
    const [inputSetor, setInputSetor] = useState("")
    const [inputNumeroPessoal, setInputNumeroPessoal] = useState("")
    const [inputNomeCliente, setInputNomeCliente] = useState("")
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setInterval(
          () => {
            let day = new Date().getDate();
            (day < 10) && (day = `0${day}`);
    
            let month = new Date().getMonth() + 1;
            (month < 10) && (month = `0${month}`);
    
            let year = new Date().getFullYear();
    
            let hours = new Date().getHours();
            (hours < 10) && (hours = `0${hours}`);
    
            let min = new Date().getMinutes();
            (min < 10) && (min = `0${min}`);
    
            let sec = new Date().getSeconds();
            (sec < 10) && (sec = `0${sec}`);
    
            setCurrentDate(
              `${day}/${month}/${year}`+ " - " + `${hours}:${min}:${sec}`
            );
          },
          1000
        );
      }, []);

    const html = `
        <html>
        <body style="background-image: url('../../../assets/icon.png')">
            <h1 style="display: flex; justify-content: center";>RELATÓRIO TÉCNICO CABTEC</h1>
            <div style="margin-top: 10px; margin-bottom: 10px; display: flex; justify-content: center;">Data do Atendimento: ${currentDate}</div>
            <div style="display: flex; justify-content: space-between;">
                <p>Movidesk:</br> # ${inputMovidesk}</p>
                <p>Cliente:</br> ${inputCliente}</p>
                <p>Serial:</br> ${inputSerial}</p></br>
                <p>Equipamento: </br>${inputEquipamento}</p></br>
                <p>Tipo de Atendimento: </br>${inputTipoAtendimento}</p></br>
            </div>
                <p>Detalhes da Visita: ${inputDetalhesVisita}</p></br>
                <p>Nome do Técnico: ${inputNomeTecnico}</p></br>
                <p>Centro de Custos: ${inputCentroDeCustos}</p></br>
                <p>Setor: ${inputSetor}</p></br>
                <p>Numero Pessoal: ${inputNumeroPessoal}</p></br>
                <p>Nome do Cliente: ${inputNomeCliente}</p></br>
                <h2 style="display: flex;justify-content: center">ASSINATURA DO CLIENTE</h2>
            </body>
            <script>
            let dataAtual = new Date();
            document.getElementById("data-publicacao").innerHTML = dataAtual.toDateString();
            </script>
        </html>
    `;

    let generatePdf = async () => {
        const file = await printToFileAsync({
            html: html,
            base64: false
        });

        await shareAsync(file.uri);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.containerTitle}>
                <Image source={Logo} />
                <Text style={styles.title}>RELATÓRIO TÉCNICO</Text>

            </View>

            <ScrollView

                style={styles.containerInput}>

                <Text style={styles.titleInput}>MOVIDESK</Text>
                <TextInput
                    style={styles.input}
                    multiline={false}
                    autoCorrect={false}
                    placeholder="#"
                    keyboardType='numeric'
                    value={inputMovidesk}
                    onChangeText={(texto) => setInputMovidesk(texto)}
                />

                <Text style={styles.titleInput}>CLIENTE</Text>
                <TextInput
                    style={styles.input}
                    multiline={false}
                    autoCorrect={false}
                    value={inputCliente}
                    onChangeText={(texto) => setInputCliente(texto)}
                />
                <Text style={styles.titleInput}>SERIAL</Text>
                <TextInput
                    style={styles.input}
                    multiline={false}
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

                <Text style={styles.titleInput}>NOME DO TÉCNICO</Text>
                <RNPickerSelect
                    style={styles.pickerStyle}
                    placeholder={{ label: "Selecione o Técnico", value: null, }}
                    value={inputNomeTecnico}
                    onValueChange={(value) => setInputNomeTecnico(value)}
                    items={[
                        { label: 'ANDREI GOMES', value: 'ANDREI GOMES' },
                        { label: 'ARTHUR CASTRO', value: 'ARTHUR CASTRO' },
                        { label: 'BRUNO SILVA', value: 'BRUNO SILVA' },
                        { label: 'BRUNO MUNERATO', value: 'BRUNO MUNERATO' },
                        { label: 'CAIO SANTOS', value: 'CAIO SANTOS' },
                        { label: 'CARLOS EDUARDO', value: 'CARLOS EDUARDO' },
                        { label: 'ELSON SANTOS', value: 'ELSON SANTOS' },
                        { label: 'GUILHERME ARAUJO', value: 'GUILHERME ARAUJO' },
                        { label: 'JOSE GABRIEL', value: 'JOSE GABRIEL' },
                        { label: 'LUIZ FRANCA', value: 'LUIZ FRANCA' },
                        { label: 'VITOR SANTOS', value: 'VITOR SANTOS' },
                    ]}
                />
                <Text style={styles.subTitle}>USO EXCLUSIVO DO CLIENTE</Text>
                <Text style={styles.titleInput}>CENTRO DE CUSTOS</Text>
                <TextInput
                    style={styles.input}
                    multiline={false}
                    autoCorrect={false}
                    value={inputCentroDeCustos}
                    onChangeText={(texto) => setInputCentroDeCustos(texto)}
                />
                <Text style={styles.titleInput}>SETOR</Text>
                <TextInput
                    style={styles.input}
                    multiline={false}
                    autoCorrect={false}
                    value={inputSetor}
                    onChangeText={(texto) => setInputSetor(texto)}
                />
                <Text style={styles.titleInput}>NUMERO PESSOAL</Text>
                <TextInput
                    style={styles.input}
                    multiline={false}
                    autoCorrect={false}
                    value={inputNumeroPessoal}
                    onChangeText={(texto) => setInputNumeroPessoal(texto)}
                />
                <Text style={styles.titleInput}>NOME DO CLIENTE</Text>
                <TextInput
                    style={styles.input}
                    multiline={false}
                    autoCorrect={false}
                    value={inputNomeCliente}
                    onChangeText={(texto) => setInputNomeCliente(texto)}
                />
                <TouchableOpacity style={styles.button} onPress={generatePdf}>
                    <Text style={styles.textButton}>GERAR RELATÓRIO</Text>
                </TouchableOpacity>

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
    subTitle: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 70,
        marginBottom: 16
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
    },
    button: {
        width: "90%",
        height: 50,
        backgroundColor: "#2271b1",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    textButton: {
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        fontWeight: "bold"
    }

});