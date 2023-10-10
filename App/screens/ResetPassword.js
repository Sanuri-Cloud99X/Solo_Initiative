import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'; // Import Image from 'react-native'
import {useNavigation} from '@react-navigation/native';
import {firebase} from '../firebase';
const ResetPassword = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const navigation = useNavigation();
  const sendResetEmail = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setMessage('Password reset email sent. Check your inbox.');
    } catch (error) {
      console.error('Error:', error); // Log the error for debugging
      setMessage('Error: ' + error.message);
    }  
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.headerText}>Reset Password</Text>
      <Text style={styles.subHeaderText}>Recover your account password</Text>
      
      <View style={styles.inputFieldContainer}>
        <View>
          <Text style={[styles.label, {width: 100}]}>Email Address</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Tiffanyjearsey@gmail.com"
            placeholderTextColor="rgba(146, 146, 157, 1)"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>
      
      

    
      <TouchableOpacity
        style={styles.nextButton} onPress={sendResetEmail}>
      <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1d2b',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 50,
    marginTop: 30,
    marginBottom: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#fff",
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',

  },
  subHeaderText: {
    fontSize: 16,
    color: "#92929d",
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputFieldContainer: {
    width: 327,
    height: 53,
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#252836',
    marginBottom: 50,
    marginLeft: 50,
  },
  inputField: {
    width: 263,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    paddingLeft: 15,
    paddingBottom: 20,
  },
  label: {
    height: 15,
    color: '#EBEBEF',
    marginTop: -5,
    marginLeft: 15,
    backgroundColor: '#1F1D2B',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  nextButton: {
    backgroundColor: '#12CDD9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width:'90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupLink: {
    color: '#12CDD9',
    fontWeight: 'bold',
    marginTop: 20,
  },
  
});

export default ResetPassword;
