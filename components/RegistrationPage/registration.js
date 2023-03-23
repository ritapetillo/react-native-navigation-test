import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {useEffect, useState } from 'react'

//regex for diffrient input fields 
const fnameRE = /^[a-zA-Z]+$/;
const lnameRE = /^[a-zA-Z]+$/;
const numRE = /^[1-9]\d{2}-\d{3}-\d{4}$/;
const mailRE = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//const pass = ;
//const zip = ;






export default function Register( {navigation}) {

const [firstname, setFirstName] = useState("");
const [lastname, setLastName] = useState("");
const [phonenum, setPhoneNum] = useState("");
const [mail, setMail] = useState("");
const [errors, setErrors] = useState([]);

useEffect(() => {
    if (errors.length > 0) alert(errors.join(""));
    setErrors([]);
  }, [errors]);

const ValidatedAccount = () => {
    if(ValidateFirstName() &&
        ValidatePhone())  {
            navigation.navigate('Todo')
    } else {
        alert('something went wrong')
    }  
}

const ValidatePhone = () => {
    if(numRE.test(phonenum)){
        return true 
    }
    else{
        setErrors((errors) => [
            ...errors,
            "Error: must be this format (xxx)-xxx-xxxx" 
          ]);
    }
}

const ValidateFirstName = () => {
    if(fnameRE.test(firstname)){
        return true 
    }
    else{
        setErrors((errors) => [
            ...errors,
            "Error: invalid name" 
          ]);
    }
}
console.log(errors)
  return (
    <View style={styles.container}>
     <View style={styles.inputfield}>
      <TextInput 
        style={styles.input} 
        placeholder='firstname' 
        testID='firstname'
        onChangeText={setFirstName}
        
         />       
      <TextInput 
        style={styles.input} 
        placeholder='lastname' 
        testID='lastname'  
        onChangeText={setLastName}     
        /> 
     <TextInput 
        style={styles.input} 
        placeholder='Username' 
        testID='username'
        
         />       
      <TextInput 
        style={styles.input} 
        placeholder='Phone Number'
        testID='phonenumber'    
        onChangeText={setPhoneNum}    
        />    
    <TextInput 
        style={styles.input} 
        placeholder='Password'
        testID='password' 
         />       
      <TextInput 
        style={styles.input} 
        placeholder='Confirm Password'
        testID='confirmpassword'        
        /> 
     <TextInput 
        style={styles.input} 
        placeholder='Email' 
        testID='email'
        onChangeText={setMail}
         />       
      <TextInput 
        style={styles.input} 
        placeholder='Zip Code'   
        testID='zip' 
            
        /> 
        <Button 
        title="Register"
        color={'white'}
        onPress={ValidatedAccount}/>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'lightgray',
    //borderColor: 'black',
    //borderWidth: 1,
    borderRadius: 25,
    width: 350,
    marginTop: 10,
    marginBottom: 10,
    
    
  },
  inputfield: {
    alignItems: 'center',
     marginTop: 10,
     marginBottom: 10
     
  },
});
