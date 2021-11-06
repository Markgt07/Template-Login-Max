import React,{useContext} from 'react';
import { View,ActivityIndicator} from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {AuthContext} from '../contexts/auth';


function Routes() {
    const {signed} = useContext(AuthContext);
    const loading = false;

    if(loading){
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#36393f'}}>
            <ActivityIndicator size={50} color="#52246"/>
        </View>
    }

 return (
   signed ? <AppRoutes/> : <AuthRoutes/>
  );
}

export default Routes;