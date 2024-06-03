import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
const[texto, setTexto]=useState('')
const[lista, setLista]=useState([])

function deletar(indexParameter){
  const listaFiltrada=lista.filter((_,index)=> index !== indexParameter)
  setLista(listaFiltrada)
}

  function pegarTexto(entradaTexto){
    setTexto(entradaTexto)
    
  }
  function adcTexto(){
    setLista([...lista,texto])

  }

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Lista de Tarefas</Text>

      <View style={styles.boxInput}>
        <TextInput style={styles.input} placeholder='Digite algo'onChangeText={pegarTexto}></TextInput>
        <Button title='Adicionar'onPress={adcTexto}></Button>
      </View>

      <View style={styles.border}></View>

      <View style={styles.lista}>

        {lista.map((item,index)=><View key={index} style={styles.listaRender}>
          <Text>{item}</Text>
          <Button title='Deletar' onPress={()=>deletar(index)}></Button>
          </View>)}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Titulo:{
    fontSize:30,
    alignSelf:'center',
    marginTop:50,
  },
  input:{
    borderWidth:1,
    width:'70%'
  },
  boxInput:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:20
  },
  border:{
    borderBottomWidth:1,
    marginTop:10
  },
  lista:{
    marginLeft:20,
    marginTop:10
  },
  listaRender:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:20
  }
});