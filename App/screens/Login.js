import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { firebase } from '../firebase';

const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false); // Initialize the password visibility state
  const [password, setPassword] = useState(''); // Initialize the password state
  const [email, setEmail] = React.useState('');
  
  const handleEmailChange = emailText => {
    setEmail(emailText);
  };
  const handlePasswordChange = pass => {
    setPassword(pass);
  };

  loginUser = async (email, password)=>{
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password)
      navigation.navigate('Home')
    }catch(err){
      alert(err.message)
    }
  }

  const handleForgotPassword = () => {
    // Implement forgot password functionality here
    navigation.navigate('ResetPassword');
  };

  loginUser = async (email, password)=>{
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password)
      navigation.navigate('Home')
    }catch(err){
      alert(err.message)
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Image
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>
        <View style={{ width: 24, height: 24 }} />
      </View>

      <Text style={styles.headerText}>Hi, Tiffany</Text>
      <Text style={styles.subHeaderText}>Welcome back! Please enter</Text>
      <Text style={styles.subHeaderText1}>your details.</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputFieldContainer}>
          <View>
            <Text style={styles.emailLabel}>Email Address</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Tiffanyjearsey@gmail.com"
              placeholderTextColor="rgba(146, 146, 157, 1)"
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
        </View>

        <View style={styles.inputFieldContainer}>
          <View>
            <Text style={styles.passwordLabel}>Password</Text>
            <TextInput
              style={styles.inputField}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="••••••••••••••••••••••••"
              placeholderTextColor="rgba(146, 146, 157, 1)"
            />
          </View>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={passwordVisible ? require("../assets/eye-on.png") : require("../assets/eye-off.png")}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{width: 112, alignSelf: 'flex-end'}}
          onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.textStyle3}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} 
        onPress={() => loginUser(email, password)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1d2b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 35,
    marginBottom: 45,
  },
  headerText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 5,
  },
  subHeaderText: {
    color: '#EBEBEF',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 12,
    marginBottom: 5,
  },
  subHeaderText1: {
    fontSize: 12,
    color: '#EBEBEF',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    marginBottom: 70,
  },
  textStyle3: {
    marginTop: -20,
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  emailLabel: {
    width: 90,
    height: 15,
    color: '#EBEBEF',
    marginTop: -5,
    marginLeft: 15,
    backgroundColor: '#1F1D2B',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  passwordLabel: {
    color: '#EBEBEF',
    marginTop: -5,
    marginLeft: 15,
    backgroundColor: '#1F1D2B',
    width: 65,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  inputContainer: {
    gap: 32,
    marginTop: 15,
    width: 327,
    height: 169,
    alignSelf: 'center',
    alignItems: 'center',
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
  },
  inputField: {
    width: 263,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: 'rgba(146, 146, 157, 1)',
    paddingLeft: 15,
    paddingBottom: 20,
  },
  
  
  loginButton: {
    backgroundColor: '#12CDD9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
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

export default Login;
