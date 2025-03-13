import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { StyleSheet, View,Image,Alert, ScrollView, FlatList, Dimensions } from 'react-native';
//Importar react native paper
import { Button,TextInput, Card, Text } from 'react-native-paper';
//Importar los iconos
import {MaterialCommunityIcons} from 'react-native-vector-icons'
//Importar axios (peticios http: Airtable)
import axios from 'axios';

//Configuracion de la API AIRTABLE
const Airtable_Token="";
const Airtable_IdBase="";
const Airtable_TableName="Productos";

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
//DATOS LOCALES PARA EL CARD (API AIRTABLE)

const datos=[
  {
    id:1,
    nombre:'Producto1',
    precio:150,
    descripcion:'Descriocion producto 1',
    imagen:'https://www.viaxesports.com/wp-content/uploads/2023/04/GALAXY-A54-black.jpg'
  },
  {
    id:2,
    nombre:'Producto2',
    precio:200,
    descripcion:'Descripcion producto 2',
    imagen:'https://www.condorinformatica.uy/imgs/productos/productos33_14609.png'
  },
  {
    id:3,
    nombre:'Producto1',
    precio:150,
    descripcion:'Descriocion producto 1',
    imagen:'https://www.viaxesports.com/wp-content/uploads/2023/04/GALAXY-A54-black.jpg'
  },
  {
    id:4,
    nombre:'Producto2',
    precio:200,
    descripcion:'Descripcion producto 2',
    imagen:'https://www.condorinformatica.uy/imgs/productos/productos33_14609.png'
  },
  {
    id:4,
    nombre:'Producto1',
    precio:150,
    descripcion:'Descriocion producto 1',
    imagen:'https://www.viaxesports.com/wp-content/uploads/2023/04/GALAXY-A54-black.jpg'
  },
  {
    id:5,
    nombre:'Producto2',
    precio:200,
    descripcion:'Descripcion producto 2',
    imagen:'https://www.condorinformatica.uy/imgs/productos/productos33_14609.png'
  },
  {
    id:6,
    nombre:'Producto1',
    precio:150,
    descripcion:'Descriocion producto 1',
    imagen:'https://www.viaxesports.com/wp-content/uploads/2023/04/GALAXY-A54-black.jpg'
  },
  {
    id:7,
    nombre:'Producto2',
    precio:200,
    descripcion:'Descripcion producto 2',
    imagen:'https://www.condorinformatica.uy/imgs/productos/productos33_14609.png'
  },
  {
    id:8,
    nombre:'Producto1',
    precio:150,
    descripcion:'Descriocion producto 1',
    imagen:'https://www.viaxesports.com/wp-content/uploads/2023/04/GALAXY-A54-black.jpg'
  },
  {
    id:9,
    nombre:'Producto2',
    precio:200,
    descripcion:'Descripcion producto 2',
    imagen:'https://www.condorinformatica.uy/imgs/productos/productos33_14609.png'
  }
];

//Constante para la responsibidad del sitio web
const { width,height }=Dimensions.get('window');

export default function App() {
  const[dataA,setDataA]=useState([]);
  const[cargar,setCargar]=useState(true);

  useEffect(()=>{
    mostrarDatosAirtable();
  },[]);

  const mostrarDatosAirtable= async()=>{
    try{
      const respuesta=await axios.get(
      `https://api.airtable.com/v0/${Airtable_IdBase}/${Airtable_TableName} `
      ,
      {
        headers:{
          Authorization:`Bearer ${Airtable_Token}`},
      }
      
    );

    const registros=respuesta.data.records.map((registro)=>({
      id:registro.id,
      nombre:registro.fields.nombre,
      precio:registro.fields.precio,
      imagen:registro.fields.imagen,
      descripcion:registro.fields.descripcion
    }));
     setDataA(registros); 
    }catch(error){
      console.error("Error al obtener los datos", error);
    }finally{
      setCargar(false);
    }
  };

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

    {dataA.map((item)=>(
      <Card style={styles.card} key={item.id}>
      <Card.Title 
          title={item.nombre}
          subtitle={item.precio}
          //left={LeftContent}
      />
      <Card.Content>
        <Image
          source={item.imagen}
          style={styles.imagenesCard}
        />
        <Text>{item.nombre} </Text>
        <Text>{item.descripcion} </Text>
      </Card.Content>
      <Card.Actions>
        <Button>Prueba</Button>
      </Card.Actions>
    </Card>
    ))}
    



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
  },
  card:{
    width:300,
    padding:15,
    margin:20,
    elevation:4,
  },imagenesCard:{
    width:'100%',
    height:200,
    borderRadius:20,
    
  },
});
