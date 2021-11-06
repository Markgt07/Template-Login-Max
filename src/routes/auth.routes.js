import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import CadastroNome from '../pages/CadastroNome'
import cadastroSenha from '../pages/CadastroSenha';


const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadastroNome" component={CadastroNome} />
        <Stack.Screen name="cadastroSenha" component={cadastroSenha} />
      </Stack.Navigator> 
  );
}

export default AuthRoutes;