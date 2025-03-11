import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Alert, ScrollView, FlatList, Dimensions } from 'react-native';
//Importar react native paper
import { Button,TextInput } from 'react-native-paper';
//Importar los iconos
import {MaterialCommunityIcons} from 'react-native-vector-icons'


//DATOS PARA EL FLATLIST
const data=[{
  nombre:'Producto1',
  precio:10
},
{
  nombre:'Producto2',
  precio:20
},
{
  nombre:'Producto3',
  precio:60
}
];

//Constante para la responsibidad del sitio web
const { width,height }=Dimensions.get('window');

export default function App() {
  return (
    <><ScrollView>
      <Text
        style={styles.titulos}
      >Kevin Arroyo {width}px </Text>
      <Text style={styles.titulos}>Primer Sitio Web en React</Text>
      <Image
        source={{
          uri: 'https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg'
        }}
        style={styles.imagenes} />


      <Button
        icon='camera'
        mode='contained'
        onPress={() => alert('Mostrando la alerta del click')}>Boton 1</Button>
      <TextInput

        label={'Nombre'}
        mode='outlined'
        placeholder='Ingrese su nombre'
        keyboardType='text'
        left={
          <TextInput.Icon name="home" />
        }
        
        
        />
      <FlatList
        data={data}

        renderItem={({
          item
        }) => <Text>{item.nombre} - {item.precio}Bs  </Text>} />




    </ScrollView><></>
    
    <br></br>
    <View>
    <Button
    mode='contained'>
      Boton Contorno
    </Button>
    <Button
    mode='outlined'>
      Boton linea Contorno
    </Button>
    <Button
    mode='contained-tonal'>
      Boton linea Contorno tono
    </Button>
   
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulos:{
    fontSize:30,
    color:'red',
    fontFamily:'Cambria',
    fontWeight:'bold'
  },
  imagenes:{
    width:200,
    height:200,
    borderRadius:20,
    padding:10,
    margin:10
  },
  entradaTexto:{
    padding:15,
    borderWidth:1
  }
});
