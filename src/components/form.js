import React from "react";
import { View } from "react-native";
import { Controller } from "react-hook-form";
import { Input } from 'react-native-elements';

export default function InputForm({campos,control,...rest}) {

  return (
    <View style={{width:"100%"}}>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={campos}
      />
      

    </View>
  );
}
