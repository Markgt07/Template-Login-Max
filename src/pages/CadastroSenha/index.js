import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { CheckBox } from 'react-native-elements';
import {Text, View,TextInput,TouchableOpacity,Platform,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback} from 'react-native';
import styles from './styles.js';


export default function cadastroSenha({navigation}) {

    const [isSelected,setSelected] = useState(false)
    const [senha,setSenha] = useState('')

    return (
      
    <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
        
            <View style={styles.container}
            >
                
            <StatusBar hidden/>

            <View style={styles.containerTitle}>
                <Text style={{marginTop: 20, fontSize: 24 }}>Crie uma senha</Text>
                <Text style={{marginTop: 14}}>Para mais segurança, sua senha deve ter 8</Text>
                <Text style={{marginTop: 5}}>dígitos ou mais.</Text>
            </View>

            <TextInput
                secureTextEntry={true}
                placeholder="Senha" style={styles.textBox}
                onChangeText={text=>setSenha(text)} 
            />

            <TouchableOpacity style={{marginRight:'45%',marginBottom:'2%'}}>
                <CheckBox
                    title="Lembrar senha"
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={isSelected}
                    onPress={()=>setSelected(!isSelected)} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={()=>navigation.navigate('cadastroSenha')}>
                <Text style={styles.loginText}>Avançar</Text>
            </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

