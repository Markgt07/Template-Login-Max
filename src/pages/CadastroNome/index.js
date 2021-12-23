import React from 'react';
import {Text, View,TouchableOpacity,Platform,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback} from 'react-native';
import styles from './styles.js';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import InputForm from '../../components/form.js';
import { yupResolver } from '@hookform/resolvers/yup';

export default function CadastroNome({navigation}) {

  const schema = Yup.object({
    email: Yup.string().email('Digite um e-mail valido *').required('E-mail obrigatorio *'),
    nome: Yup.string().required('Nome obrigatorio *'),
    password: Yup.string().min(8,'A senha deve conter no minimo 8 caracteres *').required('Senha obrigatoria *'),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Repita a mesma senha *')
  }).required();


  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => console.log(data);

    return (
        
      <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'height'}style={{flex:1}}>
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
          <View style={styles.container}>
                  
            <View style={styles.containerTitle}>
              <Text style={{marginTop: 20, fontSize: 24 }}>Crie sua nova conta</Text>
              <Text style={{marginTop: 14}}>Você poderá alterar algumas informações depois</Text>
            </View>
            
            <InputForm
              control={control}
              placeholder="Insira seu e-mail"
              autoFocus={true}
              keyboardType='email-address'
              errorStyle={{ color: 'red' }}
              errorMessage={errors.email?.message}
              campos="email"
              
            />

            <InputForm
              control={control} 
              placeholder="Insira seu Nome"
              autoFocus={true}
              errorStyle={{ color: 'red' }}
              errorMessage={errors.nome?.message}
              campos="nome"
            />

            <InputForm 
              control={control}
              placeholder="Insira sua senha" 
              autoFocus={true}
              secureTextEntry={true}
              errorStyle={{ color: 'red' }}
              errorMessage={errors.password?.message}
              campos="password"
            />

            <InputForm
              control={control} 
              placeholder="Confirme sua senha"
              secureTextEntry={true}
              autoFocus={true}
              errorStyle={{ color: 'red' }}
              errorMessage={errors.passwordConfirmation?.message}
              campos="passwordConfirmation"

            />
          
        
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.loginText}>Avançar</Text>
            </TouchableOpacity>

            <View style={styles.singUpContainer}>
              <TouchableOpacity onPress={()=> navigation.navigate('Login')} >
                <Text style={styles.singUpButton}>ja possui uma conta?</Text>
              </TouchableOpacity>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      );
  }

  
