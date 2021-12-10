import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Text, View,TextInput,TouchableOpacity,Platform,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback, Alert} from 'react-native';
import Login from '../Login/index.js';
import styles from './styles.js';
import { Input } from 'react-native-elements';
import * as Yup from 'yup';

function CadastroNome({navigation}) {

  const [haveLogin,setHaveLogin] = useState (true);
  const [email,setEmail] = useState('');
  const [nome,setNome] = useState('');
  const [password,setPassword] = useState('');
  const [passwordConfirmation,setPasswordConfirmation] = useState('');

  
  const Avançar = ()=> {
    alert(email);
  }

  function toggleLogin (){
    setHaveLogin(!haveLogin);
  }
  //Validação Manual 
 /* function handleSingUp(){
    if(email === ''){
      console.log('Preencha o campo corretamente')
      return;
    }
    navigation.navigate('cadastroSenha')
  }*/

  //Função do Yup
  async function handleSendForm(){
    try{
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        nome: Yup.string().required(),
        password: Yup.string().min(8).required(),
        passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  
      })
      await schema.validate({email,nome,password},{abortEarly: false,})

      navigation.navigate('cadastroSenha')
      Alert.alert('Passou')
      
    }catch(error){
      if(error instanceof Yup.ValidationError){
        Alert.alert(error.message)
      }
    }
  }

  if(haveLogin){
    return (
        
      <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
          <View style={styles.container}>
                  
            <StatusBar hidden/>

            <View style={styles.containerTitle}>
              <Text style={{marginTop: 20, fontSize: 24 }}>Crie sua nova conta</Text>
              <Text style={{marginTop: 14}}>Você poderá alterar algumas informações depois</Text>
            </View>
            
            <Input 
              placeholder="Insira seu e-mail"
              autoFocus={true}
              keyboardType='email-address'
              value={email}
              onChangeText={text=>setEmail(text)}
            />

            <Input 
              placeholder="Insira seu Nome"
              autoFocus={true}
              value={nome}
              onChangeText={text=>setNome(text)}
            />

            <Input 
              placeholder="Insira sua senha" 
              autoFocus={true}
              secureTextEntry={true}
              value={password}
              onChangeText={text=>setPassword(text)}
            />

            <Input 
              placeholder="Confirme sua senha"
              secureTextEntry={true}
              autoFocus={true}
              value={passwordConfirmation}
              onChangeText={text=>setPasswordConfirmation(text)}
            />
          
        
            <TouchableOpacity style={styles.button} onPress={handleSendForm}>
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