import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { CheckBox } from 'react-native-elements';
import {Text, View,TextInput,TouchableOpacity,Platform,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback} from 'react-native';
import styles from './styles.js';


export default function esqueciSenha({navigation}) {

    const [isSelected,setSelected] = useState(false)
    const [senha,setSenha] = useState('')

    return (
      
    <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
        
            <View style={styles.container}
            >
                
            <StatusBar hidden/>

            <View style={styles.containerTitle}>
                <Text style={{marginTop: 20, fontSize: 24 }}>Encontre sua conta</Text>
                <Text style={{marginTop: 14}}>Insira o seu e-mail vinculado a conta</Text>
                
            </View>

            <TextInput
                secureTextEntry={true}
                placeholder="E-mail" style={styles.textBox}
                onChangeText={text=>setSenha(text)} 
            />

            <TouchableOpacity style={styles.button}
                onPress={()=>navigation.navigate('')}>
                <Text style={styles.loginText}>Avançar</Text>
            </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

