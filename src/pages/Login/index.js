import React, { useContext } from 'react';
import {Text, View,Image, TouchableOpacity,Platform,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback} from 'react-native';
import { AuthContext } from '../../contexts/auth';
import {FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'
import styles from './styles';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import InputForm from '../../components/form.js';

export default function Login({navigation}) {

  const {singUp} = useContext(AuthContext);

  const schema = Yup.object({
    email: Yup.string().email('Digite um e-mail valido *').required('Insira o seu e-mail *'),
    password: Yup.string().min(8,'Senha invalida').required('Senha obrigatoria *'),
  }).required();


  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => console.log(data);
  
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
  
            <InputForm
              control={control}
              placeholder="email@email.com"
              inputContainerStyle={{borderBottomWidth:0}}
              autoFocus={true}
              keyboardType='email-address'
              errorStyle={{ color: 'red' }}
              errorMessage={errors.email?.message}
              campos="email"
            />
            <InputForm
              control={control}
              secureTextEntry={true}
              placeholder="********"
              inputContainerStyle={{borderBottomWidth:0}}
              errorStyle={{ color: 'red' }}
              errorMessage={errors.password?.message}
              campos="password"
            />
  
            <View style={styles.forgotContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate('esqueciSenha')}>
                <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>
  
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
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
  


