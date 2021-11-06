import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Text, View,TextInput,TouchableOpacity,Platform,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback} from 'react-native';
import Login from '../Login/index.js';
import styles from './styles.js';

function CadastroNome({navigation}) {

  const [haveLogin,setHaveLogin] = useState (true);
  const [email,setEmail] = useState('');
  const Avançar = ()=> {
    alert(email);
  }

  function toggleLogin (){
    setHaveLogin(!haveLogin);
  }

  function handleSingUp(){
    if(email === ''){
      console.log('Preencha o campo corretamente')
      return;
    }
    navigation.navigate('cadastroSenha')
  }

  if(haveLogin){
    return (
        
      <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
          <View style={styles.container}>
                  
            <StatusBar hidden/>

            <View style={styles.containerTitle}>
              <Text style={{marginTop: 20, fontSize: 24 }}>Escolher nome de usuário</Text>
              <Text style={{marginTop: 14}}>Você poderá alterá-lo depois</Text>
            </View>

            <TextInput 
              placeholder="Insira seu e-mail"
              value={email}
              style={styles.textBox}
              autoFocus={true}
              keyboardType='email-address'
              value={email}
              onChangeText={text=>setEmail(text)}
            />
          
        
            <TouchableOpacity style={styles.button} onPress={handleSingUp}>
              <Text style={styles.loginText}>Avançar</Text>
            </TouchableOpacity>

            <View style={styles.singUpContainer}>
              <TouchableOpacity onPress={()=> toggleLogin()} >
                <Text style={styles.singUpButton}>ja possui uma conta?</Text>
              </TouchableOpacity>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      );
  }

  return(
    <Login/>
  );
}
export default CadastroNome;