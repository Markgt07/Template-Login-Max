import React from 'react';
import { Text, View } from 'react-native';
import { Input } from 'react-native-elements';


export default function Home({navigation}) {
  return (
    <View >
      <Text>aqui vai o aplicativo</Text>
      <View>
      <Input 
              placeholder="Insira seu e-mail"
              inputContainerStyle={{borderBottomWidth:0}}
              style={{
                width:'90%',
              height:42,
              backgroundColor: "#F4F3F3",
              marginTop:14,
              marginBottom: 10,
              padding: 10,
              borderRadius: 5,
              borderWidth: 1, 
              borderColor: '#E0E0E0'}}
              autoFocus={true}
              keyboardType='email-address'
        />
      </View>
    </View>
  );
}

