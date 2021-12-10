import React, { useState, useContext } from 'react';
import {Text, View,Image, TextInput,TouchableOpacity,Platform,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Alert} from 'react-native';
import { AuthContext } from '../../contexts/auth';
import {FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'
import styles from './styles';
import * as Yup from 'yup';
import { Input } from 'react-native-elements';

export default function Login({navigation}) {

  const {singUp} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 /* function handleLogin(){
    if(email === '' || password === ''){
      console.log('Preencha todos os campos!')
      return;
    }
    alert('Login')
  }*/
  async function handleSendForm(){
    try{
      const schema = Yup.object().shape({
        email: yup
        .string()
        .required('O email não pode ser vazio')
        .email('Digite um email válido'),
        password: yup
        .string()
        .required('A senha não pode ser vazia')
        .min(6, 'A senha deve conter pelo menos 6 dígitos')
      })
      await schema.validate({email,password},{abortEarly: false,})

      Alert.alert('Passou')
    }catch(error){ 
      if(error instanceof Yup.ValidationError){
        Alert.alert(error.message)
      }
    }
  }
  
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
          <View style={styles.container}>
            
            
            <Image 
              source={require('../../../assets/logo-max.png')}
              style={styles.logo}
            />
  
            <Input 
              placeholder="email@email.com"
              inputContainerStyle={{borderBottomWidth:0}}
              autoFocus={true}
              keyboardType='email-address'
              value={email}
              onChangeText={text=>setEmail(text)}
            />
            <Input 
              secureTextEntry={true}
              placeholder="********"
              inputContainerStyle={{borderBottomWidth:0}}

              value={password}
              onChangeText={text=>setPassword(text)}              
            />
  
            <View style={styles.forgotContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate('esqueciSenha')}>
                <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>
  
            <TouchableOpacity style={styles.loginButton} onPress={handleSendForm}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
  
            <TouchableOpacity style={styles.facebookContainer}>
              <FontAwesome5 name="facebook" size={25} color="#399fff"/>
                <Text style={styles.facebookText}>Logar com o Facebook</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.GmailContainer}>
              <MaterialCommunityIcons name="gmail" size={25} color="#399fff"/>
                <Text style={styles.facebookText}>Logar com o Gmail</Text>
            </TouchableOpacity>
  
            <View style={styles.divisor}>
              <View style={styles.divisorLine}></View>
                <Text style={{marginHorizontal:'3%'}}>OU</Text>
              <View style={styles.divisorLine}></View>
            </View>
  
            <View style={styles.singUpContainer}>
              <Text style={styles.singUpText}>Não possui uma conta?</Text>
              <TouchableOpacity onPress={()=> navigation.navigate('CadastroNome')}>
                <Text style={styles.singUpButton}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
  


