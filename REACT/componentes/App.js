import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button,Alert,TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text 
        style={styles.titulos}
      >Kevin Arroyo</Text>
      <Text style={styles.titulos}>Primer Sitio Web en React</Text>
      <Image
        source={{
          uri:'https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg'
        }}
        style={styles.imagenes}
      />
      <Image
        source={{
          uri:'https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg'
        }}
        style={styles.imagenes}
      />
      <Image
        source={{
          uri:'https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg'
        }}
        style={styles.imagenes}
      />
      <Image
        source={{
          uri:'https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg'
        }}
        style={styles.imagenes}
      />
      <Image
        source={{
          uri:'https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg'
        }}
        style={styles.imagenes}
      />
      <Image
        source={{
          uri:'https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg'
        }}
        style={styles.imagenes}
      />

      <Button
        title='Enviar'
        onPress={()=> Alert.alert('Mostrando la alerta del click')}
      />
      <TextInput 
        style={styles.entradaTexto}
        placeholder='Ingrese su nombre: '
        keyboardType='numeric'
      />

      <StatusBar style="auto" />
    </ScrollView>
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
