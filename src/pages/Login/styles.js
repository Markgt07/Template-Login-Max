import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent:'center'
    
    },
    logo: {
      marginTop: Platform.OS === 'android' ? '5%' : '3%',
      marginBottom: Platform.OS === 'android' ? '13%' : '15%',
      width:250,
      height:250
    },
    input:{
      width:'90%',
      height:42,
      backgroundColor: "#F4F3F3",
      marginBottom: 20,
      padding: 8,
      borderRadius: 5,
      borderWidth: 1, 
      borderColor: '#E0E0E0'
    },
    forgotContainer:{
      width:'90%',
      alignItems:'flex-end'
    },
    forgotText:{
      color:'#399fff'
    },
    loginButton:{
      marginTop:'5%',
      backgroundColor:'#399fff',
      width:'90%',
      height: 42,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 5,
    },
    loginText:{
      color:'#FFF',
      fontSize:17
    },
    facebookContainer:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:'5%'
    },
    GmailContainer:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:'3%'
    },
    facebookText:{
      color: '#399fff',
      paddingLeft: 8,
      fontSize:15
    },
    divisor:{
      marginTop:'7%',
      flexDirection:'row',
      width:'90%',
      alignItems:'center',
      justifyContent:'center'
    },
    divisorLine:{
      width:'45%',
      height: 2,
      backgroundColor:'#EFEDED',
      borderRadius: 5
    },
    singUpContainer:{
      flexDirection:'row',
      marginTop:'7%',
      marginBottom:'6%'
    },
    singUpText:{
      color:'#C4c4c4',
      paddingRight:5,
  
    },
    singUpButton:{
      color:'#399fff',
      fontWeight:'bold',
      marginBottom:'70%'
    }
  });